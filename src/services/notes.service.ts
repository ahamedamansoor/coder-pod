import { 
  Firestore, 
  collection, 
  doc, 
  getDoc,
  getDocs,
  addDoc, 
  updateDoc, 
  deleteDoc,
  query, 
  where, 
  orderBy,
  serverTimestamp,
  DocumentSnapshot,
  Timestamp
} from 'firebase/firestore';
import { Note, CreateNoteData, UpdateNoteData } from '@/types/notes.types';

export class NotesService {
  private firestore: Firestore;
  private collectionName = 'notes';

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  /**
   * Get all notes for a user
   */
  async getUserNotes(userId: string): Promise<Note[]> {
    try {
      const notesRef = collection(this.firestore, this.collectionName);
      const q = query(
        notesRef,
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => this.mapDocToNote(doc));
    } catch (error) {
      console.error('Error fetching user notes:', error);
      throw new Error('Failed to fetch notes');
    }
  }

  /**
   * Get a single note by ID
   */
  async getNote(noteId: string): Promise<Note | null> {
    try {
      const noteRef = doc(this.firestore, this.collectionName, noteId);
      const docSnap = await getDoc(noteRef);
      
      if (!docSnap.exists()) {
        return null;
      }

      return this.mapDocToNote(docSnap);
    } catch (error) {
      console.error('Error fetching note:', error);
      throw new Error('Failed to fetch note');
    }
  }

  /**
   * Create a new note
   */
  async createNote(userId: string, noteData: CreateNoteData): Promise<Note> {
    try {
      const notesRef = collection(this.firestore, this.collectionName);
      
      const newNote = {
        ...noteData,
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(notesRef, newNote);
      
      // Fetch the created document to return it with the ID
      const createdDoc = await getDoc(docRef);
      return this.mapDocToNote(createdDoc);
    } catch (error: any) {
      console.error('Error creating note:', error);
      throw error;
    }
  }

  /**
   * Update an existing note
   */
  async updateNote(noteId: string, userId: string, updateData: UpdateNoteData): Promise<void> {
    try {
      const noteRef = doc(this.firestore, this.collectionName, noteId);
      
      // Verify ownership
      const noteDoc = await getDoc(noteRef);
      if (!noteDoc.exists()) {
        throw new Error('Note not found');
      }
      
      const noteData = noteDoc.data();
      if (noteData.userId !== userId) {
        throw new Error('Unauthorized: You can only update your own notes');
      }

      await updateDoc(noteRef, {
        ...updateData,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  }

  /**
   * Delete a note
   */
  async deleteNote(noteId: string, userId: string): Promise<void> {
    try {
      const noteRef = doc(this.firestore, this.collectionName, noteId);
      
      // Verify ownership
      const noteDoc = await getDoc(noteRef);
      if (!noteDoc.exists()) {
        throw new Error('Note not found');
      }
      
      const noteData = noteDoc.data();
      if (noteData.userId !== userId) {
        throw new Error('Unauthorized: You can only delete your own notes');
      }

      await deleteDoc(noteRef);
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }

  /**
   * Get notes filtered by language
   */
  async getNotesByLanguage(userId: string, language: string): Promise<Note[]> {
    try {
      const notesRef = collection(this.firestore, this.collectionName);
      const q = query(
        notesRef,
        where('userId', '==', userId),
        where('language', '==', language),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => this.mapDocToNote(doc));
    } catch (error) {
      console.error('Error fetching notes by language:', error);
      throw new Error('Failed to fetch notes by language');
    }
  }

  /**
   * Get notes filtered by type
   */
  async getNotesByType(userId: string, type: string): Promise<Note[]> {
    try {
      const notesRef = collection(this.firestore, this.collectionName);
      const q = query(
        notesRef,
        where('userId', '==', userId),
        where('type', '==', type),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => this.mapDocToNote(doc));
    } catch (error) {
      console.error('Error fetching notes by type:', error);
      throw new Error('Failed to fetch notes by type');
    }
  }

  /**
   * Migrate notes from localStorage to Firestore
   */
  async migrateFromLocalStorage(userId: string, localStorageNotes: any[]): Promise<number> {
    try {
      let migratedCount = 0;

      for (const localNote of localStorageNotes) {
        try {
          await this.createNote(userId, {
            title: localNote.title,
            url: localNote.url,
            type: localNote.type,
            videoId: localNote.videoId,
            language: localNote.language,
          });
          migratedCount++;
        } catch (error) {
          console.error('Error migrating note:', localNote.id, error);
          // Continue with next note
        }
      }

      return migratedCount;
    } catch (error) {
      console.error('Error during migration:', error);
      throw new Error('Failed to migrate notes');
    }
  }

  /**
   * Helper: Convert Firestore document to Note
   */
  private mapDocToNote(docSnap: DocumentSnapshot): Note {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      userId: data?.userId || '',
      title: data?.title || '',
      url: data?.url || '',
      type: data?.type || 'link',
      videoId: data?.videoId,
      language: data?.language || '',
      createdAt: data?.createdAt?.toDate?.() || new Date(),
      updatedAt: data?.updatedAt?.toDate?.() || new Date(),
    } as Note;
  }
}
