'use client';

interface CompletionData {
  html: string[];
  [key: string]: string[];
}

interface SyncStatus {
  pending: boolean;
  lastSync: number | null;
}

class LocalCompletionService {
  private readonly STORAGE_KEY = 'completion_data';
  private readonly SYNC_STATUS_KEY = 'completion_sync_status';
  private readonly USER_ID_KEY = 'current_user_id';

  // Store current user ID for beacon sync
  setUserId(userId: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.USER_ID_KEY, userId);
  }

  // Get current user ID
  getUserId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(this.USER_ID_KEY);
  }

  // Clear user ID on logout
  clearUserId(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.USER_ID_KEY);
  }

  // Get all completion data from localStorage
  getCompletionData(): CompletionData {
    if (typeof window === 'undefined') return { html: [] };
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : { html: [] };
    } catch (error) {
      console.error('Error reading completion data:', error);
      return { html: [] };
    }
  }

  // Get completed topics for a specific language
  getCompletedTopics(language: string): string[] {
    const data = this.getCompletionData();
    return data[language] || [];
  }

  // Toggle completion status for a topic
  toggleTopic(language: string, topicSlug: string): void {
    if (typeof window === 'undefined') return;

    const data = this.getCompletionData();
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

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedData));
    this.markAsPendingSync();
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

  // Get all completion data for syncing and clear pending status
  getDataForSync(): { data: CompletionData; hasChanges: boolean; userId: string | null } {
    const data = this.getCompletionData();
    const hasChanges = this.hasPendingSync();
    const userId = this.getUserId();
    
    if (hasChanges) {
      // Clear pending status after getting data
      const status: SyncStatus = {
        pending: false,
        lastSync: Date.now()
      };
      localStorage.setItem(this.SYNC_STATUS_KEY, JSON.stringify(status));
    }
    
    return { data, hasChanges, userId };
  }

  // Update completion data from server (after successful sync)
  updateFromServer(data: CompletionData): void {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    
    // Mark as synced
    const status: SyncStatus = {
      pending: false,
      lastSync: Date.now()
    };
    localStorage.setItem(this.SYNC_STATUS_KEY, JSON.stringify(status));
  }

  // Clear all completion data
  clearAll(): void {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.SYNC_STATUS_KEY);
    this.clearUserId();
  }
}

export const localCompletionService = new LocalCompletionService();
