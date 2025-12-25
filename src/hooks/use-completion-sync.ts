'use client';

import { useEffect } from 'react';
import { completionSyncService } from '@/services/completion-sync.service';

export const useCompletionSync = () => {
  useEffect(() => {
    // Sync on page visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // User switched tabs or minimized browser
        completionSyncService.syncWithBeacon();
      }
    };

    // Sync on page unload (refresh, navigation, close)
    const handleBeforeUnload = () => {
      completionSyncService.syncWithBeacon();
    };

    // Sync on browser storage events (other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'completion_data' || e.key === 'completion_sync_status') {
        // Data changed in another tab, sync to server
        completionSyncService.syncToServer();
      }
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('storage', handleStorageChange);

    // Periodic sync every 5 minutes
    const syncInterval = setInterval(() => {
      completionSyncService.syncToServer();
    }, 5 * 60 * 1000);

    // Initial sync on mount
    completionSyncService.syncToServer();

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(syncInterval);
      
      // Final sync on unmount
      completionSyncService.syncWithBeacon();
    };
  }, []);
};
