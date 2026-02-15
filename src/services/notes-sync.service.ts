'use client';

import { supabase } from '@/lib/supabase';
import { supabaseNotesService } from './supabase-notes.service';

class NotesSyncService {
  // Sync all notes to server
  async syncToServer(supabaseClient?: any): Promise<boolean> {
    try {
      // Use provided client or default
      const client = supabaseClient || supabase;

      // Get current user
      const { data: { user }, error: userError } = await client.auth.getUser();
      if (userError || !user) {
        console.error('User not authenticated for notes sync:', userError);
        return false;
      }

      // Get all notes from server to sync
      const serverNotes = await supabaseNotesService.getUserNotes(user.id, client);
      
      console.log(`Fetched ${serverNotes.length} notes from server for sync`);

      // Store notes locally for offline access
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_notes', JSON.stringify(serverNotes));
        localStorage.setItem('notes_last_sync', Date.now().toString());
      }

      console.log('Successfully synced notes data');
      return true;
    } catch (error) {
      console.error('Notes sync error:', error);
      return false;
    }
  }

  // Get locally cached notes
  getLocalNotes(): any[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const cached = localStorage.getItem('user_notes');
      return cached ? JSON.parse(cached) : [];
    } catch (error) {
      console.error('Error getting local notes:', error);
      return [];
    }
  }

  // Check if sync is needed
  needsSync(): boolean {
    if (typeof window === 'undefined') return false;
    
    const lastSync = localStorage.getItem('notes_last_sync');
    if (!lastSync) return true;
    
    const syncAge = Date.now() - parseInt(lastSync);
    // Sync if older than 5 minutes
    return syncAge > 5 * 60 * 1000;
  }

  // Force sync regardless of timing
  async forceSync(supabaseClient?: any): Promise<boolean> {
    return await this.syncToServer(supabaseClient);
  }

  // Clear local notes data
  clearAll(): void {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem('user_notes');
    localStorage.removeItem('notes_last_sync');
  }
}

export const notesSyncService = new NotesSyncService();
