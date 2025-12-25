'use client';

import { supabase } from '@/lib/supabase';
import { localCompletionService } from './local-completion.service';

interface AllCompletionData {
  [language: string]: string[];
}

interface SyncStatus {
  pending: boolean;
  lastSync: number | null;
}

class UnifiedCompletionService {
  private readonly STORAGE_KEY = 'completion_data'; // Use same key as local service
  private readonly LAST_FETCH_KEY = 'completion_last_fetch';
  private readonly SYNC_STATUS_KEY = 'completion_sync_status';
  private readonly USER_ID_KEY = 'current_user_id'; // For beacon sync
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  // Store user ID for beacon sync
  setUserId(userId: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.USER_ID_KEY, userId);
  }

  // Get user ID for beacon sync
  getUserId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(this.USER_ID_KEY);
  }

  // Toggle completion status for a topic (for immediate UI updates)
  toggleTopic(language: string, topicSlug: string): void {
    if (typeof window === 'undefined') return;

    const data = this.getAllCompletionData();
    const currentTopics = data[language] || [];
    
    let updatedTopics: string[];
    if (currentTopics.includes(topicSlug)) {
      updatedTopics = currentTopics.filter(topic => topic !== topicSlug);
    } else {
      updatedTopics = [...currentTopics, topicSlug];
    }

    const updatedData = {
      ...data,
      [language]: updatedTopics
    };

    this.storeCompletionData(updatedData);
    this.markAsPendingSync(); // Mark for sync
  }

  // Get all completion data from localStorage
  getAllCompletionData(): AllCompletionData {
    if (typeof window === 'undefined') return {};
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      const result = data ? JSON.parse(data) : {};
      console.log('Unified Completion Service - getAllCompletionData():', {
        data,
        result,
        storageKey: this.STORAGE_KEY
      });
      return result;
    } catch (error) {
      console.error('Error reading unified completion data:', error);
      return {};
    }
  }

  // Get completed topics for a specific language
  getCompletedTopics(language: string): string[] {
    const allData = this.getAllCompletionData();
    return allData[language] || [];
  }

  // Check if cache is valid
  isCacheValid(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      const lastFetch = localStorage.getItem(this.LAST_FETCH_KEY);
      if (!lastFetch) return false;
      
      const fetchTime = parseInt(lastFetch);
      return Date.now() - fetchTime < this.CACHE_DURATION;
    } catch (error) {
      console.error('Error checking cache validity:', error);
      return false;
    }
  }

  // Fetch all completion data from server in a single call
  async fetchAllCompletionData(userId: string): Promise<AllCompletionData> {
    try {
      const { data: profile, error } = await supabase
        .from('users')
        .select('completed_topics')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching completion data:', error);
        return {};
      }

      const completionData = profile?.completed_topics || {};
      
      // Store in localStorage
      this.storeCompletionData(completionData);
      
      return completionData;
    } catch (error) {
      console.error('Error in fetchAllCompletionData:', error);
      return {};
    }
  }

  // Store completion data in localStorage
  storeCompletionData(data: AllCompletionData): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(this.LAST_FETCH_KEY, Date.now().toString());
    } catch (error) {
      console.error('Error storing completion data:', error);
    }
  }

  // Check if there are pending changes to sync
  hasPendingSync(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
      const status = localStorage.getItem(this.SYNC_STATUS_KEY);
      return status ? JSON.parse(status).pending : false;
    } catch (error) {
      console.error('Error checking sync status:', error);
      return false;
    }
  }

  // Mark that there are pending changes to sync
  markAsPendingSync(): void {
    if (typeof window === 'undefined') return;
    
    const status: SyncStatus = {
      pending: true,
      lastSync: null
    };
    localStorage.setItem(this.SYNC_STATUS_KEY, JSON.stringify(status));
  }

  // Update completion data from server (after successful sync)
  updateFromServer(data: AllCompletionData): void {
    if (typeof window === 'undefined') return;
    
    this.storeCompletionData(data);
    
    // Mark as synced
    const status: SyncStatus = {
      pending: false,
      lastSync: Date.now()
    };
    localStorage.setItem(this.SYNC_STATUS_KEY, JSON.stringify(status));
  }

  // Update completion data for a specific language (for immediate UI updates)
  updateLanguageCompletion(language: string, topics: string[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      const allData = this.getAllCompletionData();
      allData[language] = topics;
      this.storeCompletionData(allData);
    } catch (error) {
      console.error('Error updating language completion:', error);
    }
  }

  // Clear all completion data
  clearAll(): void {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.LAST_FETCH_KEY);
  }

  // Get completion data with cache fallback
  async getCompletionDataWithCache(userId: string): Promise<AllCompletionData> {
    // If cache is valid, return cached data
    if (this.isCacheValid()) {
      return this.getAllCompletionData();
    }

    // Otherwise fetch fresh data
    return this.fetchAllCompletionData(userId);
  }
}

export const unifiedCompletionService = new UnifiedCompletionService();
