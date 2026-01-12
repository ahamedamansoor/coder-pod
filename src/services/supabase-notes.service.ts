import { supabase } from '@/lib/supabase';
import { Note, CreateNoteData, UpdateNoteData } from '@/types/notes.types';

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
        console.error('Error fetching user notes:', error);
        throw new Error(`Failed to fetch notes: ${error.message}`);
      }

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
        tags: noteData.tags || [],
      };

      const { data, error } = await client
        .from(this.tableName)
        .insert(newNote)
        .select()
        .single();

      if (error) {
        console.error('Error creating note:', error);
        throw new Error(`Failed to create note: ${error.message}`);
      }

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
      if (updateData.description !== undefined)
        updatePayload.description = updateData.description || null;
      if (updateData.url !== undefined) updatePayload.url = updateData.url || null;
      if (updateData.videoId !== undefined)
        updatePayload.video_id = updateData.videoId || null;
      if (updateData.content !== undefined)
        updatePayload.content = updateData.content || null;
      if (updateData.tags !== undefined) updatePayload.tags = updateData.tags;

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
   * Search notes by title or content
   */
  async searchNotes(userId: string, searchQuery: string, supabaseClient?: any): Promise<Note[]> {
    try {
      const client = supabaseClient || supabase;
      const { data, error } = await client
        .from(this.tableName)
        .select('*')
        .eq('user_id', userId)
        .or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error searching notes:', error);
        throw new Error(`Failed to search notes: ${error.message}`);
      }

      return this.mapSupabaseNotesToNotes(data || []);
    } catch (error) {
      console.error('Error searching notes:', error);
      throw error;
    }
  }

  /**
   * Get notes by language
   */
  async getNotesByLanguage(userId: string, language: string): Promise<Note[]> {
    try {
      const { data, error } = await supabase
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
    type: 'article' | 'video' | 'link' | 'doc'
  ): Promise<Note[]> {
    try {
      const { data, error } = await supabase
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
      description: supabaseNote.description || '',
      type: supabaseNote.type,
      language: supabaseNote.language,
      url: supabaseNote.url || '',
      videoId: supabaseNote.video_id || '',
      content: supabaseNote.content || '',
      tags: supabaseNote.tags || [],
      createdAt: new Date(supabaseNote.created_at),
      updatedAt: new Date(supabaseNote.updated_at),
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
