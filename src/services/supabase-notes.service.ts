import { supabase } from '@/lib/supabase';
import { Note, NoteType, CreateNoteData, UpdateNoteData } from '@/types/notes.types';

export class SupabaseNotesService {
  private tableName = 'notes';

  /**
   * Get all notes for a user
   */
  async getUserNotes(userId: string, supabaseClient?: any): Promise<Note[]> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user notes from Supabase:', error);
        throw new Error(`Failed to fetch notes: ${error.message}`);
      }

      console.log(`Successfully fetched ${data?.length || 0} notes from Supabase for user ${userId}`);
      return this.mapSupabaseNotesToNotes(data || []);
    } catch (error) {
      console.error('Error fetching user notes:', error);
      throw error;
    }
  }

  /**
   * Get a single note by ID
   */
  async getNote(noteId: string, userId: string, supabaseClient?: any): Promise<Note | null> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('id', noteId)
        .eq('user_id', userId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // Not found
          return null;
        }
        console.error('Error fetching note:', error);
        throw new Error(`Failed to fetch note: ${error.message}`);
      }

      return this.mapSupabaseNoteToNote(data);
    } catch (error) {
      console.error('Error fetching note:', error);
      throw error;
    }
  }

  /**
   * Create a new note
   */
  async createNote(userId: string, noteData: CreateNoteData, supabaseClient?: any): Promise<Note> {
    try {
      const client = supabaseClient || supabase;
      const newNote = {
        user_id: userId,
        title: noteData.title,
        description: noteData.description || null,
        type: noteData.type,
        language: noteData.language,
        url: noteData.url || null,
        video_id: noteData.videoId || null,
        content: noteData.content || null,
        tags: noteData.tags ? JSON.stringify(noteData.tags) : null, // Convert array to JSON string
        favorited: noteData.favorited ?? false,
      };

      const { data, error } = await client
        .from(this.tableName)
        .insert(newNote)
        .select()
        .single();

      if (error) {
        console.error('Error creating note in Supabase:', error);
        console.error('Note data attempted:', newNote);
        throw new Error(`Failed to create note: ${error.message}`);
      }

      console.log('✅ Note created successfully in Supabase:', data.id);
      return this.mapSupabaseNoteToNote(data);
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  }

  /**
   * Update an existing note
   */
  async updateNote(
    noteId: string,
    userId: string,
    updateData: UpdateNoteData,
    supabaseClient?: any
  ): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      const updatePayload: any = {};

      if (updateData.title !== undefined) updatePayload.title = updateData.title;
      // Remove description field as it doesn't exist in the database
      if (updateData.url !== undefined) updatePayload.url = updateData.url || null;
      if (updateData.videoId !== undefined)
        updatePayload.video_id = updateData.videoId || null;
      if (updateData.content !== undefined)
        updatePayload.content = updateData.content || null;
      if (updateData.tags !== undefined) updatePayload.tags = updateData.tags ? JSON.stringify(updateData.tags) : null;
      if (updateData.favorited !== undefined) updatePayload.favorited = updateData.favorited;

      const { error } = await client
        .from(this.tableName)
        .update(updatePayload)
        .eq('id', noteId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error updating note:', error);
        throw new Error(`Failed to update note: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  }

  /**
   * Delete a note
   */
  async deleteNote(noteId: string, userId: string, supabaseClient?: any): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      const { error } = await client
        .from(this.tableName)
        .delete()
        .eq('id', noteId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error deleting note:', error);
        throw new Error(`Failed to delete note: ${error.message}`);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }

  /**
   * Search notes using full-text search (GIN index on title + content)
   */
  async searchNotes(userId: string, searchQuery: string, supabaseClient?: any): Promise<Note[]> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('user_id', userId)
        .textSearch('title', searchQuery, { type: 'websearch' })
        .order('created_at', { ascending: false });

      if (error) {
        // Fallback to ILIKE if full-text search fails (e.g. short queries)
        const { data: fallbackData, error: fallbackError } = await client
          .from(this.tableName)
          .select('*')
          .eq('user_id', userId)
          .or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`)
          .order('created_at', { ascending: false });

        if (fallbackError) {
          console.error('Error searching notes:', fallbackError);
          throw new Error(`Failed to search notes: ${fallbackError.message}`);
        }
        return this.mapSupabaseNotesToNotes(fallbackData || []);
      }

      return this.mapSupabaseNotesToNotes(data || []);
    } catch (error) {
      console.error('Error searching notes:', error);
      throw error;
    }
  }

  /**
   * Toggle the favorited status of a note
   */
  async toggleFavorite(
    noteId: string,
    userId: string,
    currentFavorited: boolean,
    supabaseClient?: any
  ): Promise<void> {
    try {
      const client = supabaseClient || supabase;
      const { error } = await client
        .from(this.tableName)
        .update({ favorited: !currentFavorited })
        .eq('id', noteId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error toggling favorite:', error);
        throw new Error(`Failed to toggle favorite: ${error.message}`);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  }

  /**
   * Get notes by language
   */
  async getNotesByLanguage(userId: string, language: string, supabaseClient?: any): Promise<Note[]> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('user_id', userId)
        .eq('language', language)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notes by language:', error);
        throw new Error(`Failed to fetch notes: ${error.message}`);
      }

      return this.mapSupabaseNotesToNotes(data || []);
    } catch (error) {
      console.error('Error fetching notes by language:', error);
      throw error;
    }
  }

  /**
   * Get notes by type
   */
  async getNotesByType(
    userId: string,
    type: NoteType,
    supabaseClient?: any
  ): Promise<Note[]> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('user_id', userId)
        .eq('type', type)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notes by type:', error);
        throw new Error(`Failed to fetch notes: ${error.message}`);
      }

      return this.mapSupabaseNotesToNotes(data || []);
    } catch (error) {
      console.error('Error fetching notes by type:', error);
      throw error;
    }
  }

  /**
   * Map Supabase note to app Note type
   */
  private mapSupabaseNoteToNote(supabaseNote: any): Note {
    return {
      id: supabaseNote.id,
      userId: supabaseNote.user_id,
      title: supabaseNote.title,
      description: '', // No description field in DB
      type: supabaseNote.type,
      language: supabaseNote.language,
      url: supabaseNote.url || '',
      videoId: supabaseNote.video_id || '',
      content: supabaseNote.content || '',
      tags: supabaseNote.tags ? JSON.parse(supabaseNote.tags) : [], // Parse JSON string to array
      favorited: supabaseNote.favorited ?? false,
      createdAt: new Date(supabaseNote.created_at),
      updatedAt: new Date(supabaseNote.updated_at || supabaseNote.created_at), // Handle missing updated_at
    };
  }

  /**
   * Map array of Supabase notes to app Note types
   */
  private mapSupabaseNotesToNotes(supabaseNotes: any[]): Note[] {
    return supabaseNotes.map((note) => this.mapSupabaseNoteToNote(note));
  }
}

// Export a singleton instance
export const supabaseNotesService = new SupabaseNotesService();
