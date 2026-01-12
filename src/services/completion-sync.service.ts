'use client';

import { supabase } from '@/lib/supabase';
import { unifiedCompletionService } from './unified-completion.service';

interface CompletionData {
  html: string[];
  [key: string]: string[];
}

class CompletionSyncService {
  // Sync all completion data to server
  async syncToServer(supabaseClient?: any): Promise<boolean> {
    try {
      const data = unifiedCompletionService.getAllCompletionData();
      const hasChanges = unifiedCompletionService.hasPendingSync();
      
      if (!hasChanges) {
        console.log('No changes to sync');
        return true;
      }

      // Use provided client or default
      const client = supabaseClient || supabase;

      // Get current user
      const { data: { user }, error: userError } = await client.auth.getUser();
      if (userError || !user) {
        console.error('User not authenticated:', userError);
        return false;
      }

      // Get current user profile
      const { data: profile, error: profileError } = await client
        .from('users')
        .select('completed_topics')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Error fetching user profile:', profileError);
        return false;
      }

      // Merge with existing data
      const existingTopics = profile?.completed_topics || {};
      const updatedTopics = {
        ...existingTopics,
        ...data
      };

      // Update server
      const { error: updateError } = await client
        .from('users')
        .update({ completed_topics: updatedTopics })
        .eq('id', user.id);

      if (updateError) {
        console.error('Error syncing to server:', updateError);
        // Mark as pending again if sync failed
        unifiedCompletionService.markAsPendingSync();
        return false;
      }

      console.log('Successfully synced completion data');
      return true;
    } catch (error) {
      console.error('Sync error:', error);
      return false;
    }
  }

  // Load completion data from server
  async loadFromServer(): Promise<void> {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) return;

      const { data: profile, error: profileError } = await supabase
        .from('users')
        .select('completed_topics')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Error loading completion data:', profileError);
        return;
      }

      if (profile?.completed_topics) {
        unifiedCompletionService.updateFromServer(profile.completed_topics);
      }
    } catch (error) {
      console.error('Load error:', error);
    }
  }

  // Force sync using sendBeacon for reliable delivery during page unload
  syncWithBeacon(): boolean {
    try {
      const data = unifiedCompletionService.getAllCompletionData();
      const hasChanges = unifiedCompletionService.hasPendingSync();
      const userId = unifiedCompletionService.getUserId();
      
      if (!hasChanges || !userId) return false;

      const syncData = {
        userId: userId,
        completionData: data
      };

      // Use sendBeacon for reliable sync during page unload
      const blob = new Blob([JSON.stringify(syncData)], { 
        type: 'application/json' 
      });
      
      return navigator.sendBeacon('/api/sync-completion', blob);
    } catch (error) {
      console.error('Beacon sync error:', error);
      return false;
    }
  }
}

export const completionSyncService = new CompletionSyncService();
