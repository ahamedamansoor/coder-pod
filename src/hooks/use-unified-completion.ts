'use client';

import { useState, useEffect, useCallback } from 'react';
import { useUser } from './use-auth-compat';
import { unifiedCompletionService } from '@/services/unified-completion.service';
import { localCompletionService } from '@/services/local-completion.service';
import { completionSyncService } from '@/services/completion-sync.service';

interface UnifiedCompletionContextType {
  completedTopics: { [language: string]: Set<string> };
  handleToggleComplete: (language: string, topicSlug: string) => void;
  isProgressLoading: boolean;
  getCompletedTopics: (language: string) => Set<string>;
  refreshData: () => Promise<void>;
}

// Global state to share across all language contexts
let globalState: {
  completedTopics: { [language: string]: Set<string> };
  listeners: Set<() => void>;
  isLoading: boolean;
  initialized: boolean;
} = {
  completedTopics: {},
  listeners: new Set(),
  isLoading: false,
  initialized: false,
};

const notifyListeners = () => {
  globalState.listeners.forEach(listener => listener());
};

export const useUnifiedCompletion = (): UnifiedCompletionContextType => {
  const { user } = useUser();
  const [forceUpdate, setForceUpdate] = useState(0);

  // Register listener for this component
  useEffect(() => {
    const listener = () => {
      // Only trigger update if global state has actually changed
      setForceUpdate(prev => prev + 1);
    };
    globalState.listeners.add(listener);
    
    return () => {
      globalState.listeners.delete(listener);
    };
  }, []);

  // Initialize data on first load
  useEffect(() => {
    const initializeData = async () => {
      if (!user || globalState.initialized) return;

      globalState.isLoading = true;
      notifyListeners();

      try {
        // Store user ID for beacon sync (directly in unified service)
        unifiedCompletionService.setUserId(user.uid);

        // Load completion data with cache
        const data = await unifiedCompletionService.getCompletionDataWithCache(user.uid);
        
        // Convert to Sets for efficient lookup
        const completedTopicsSets: { [language: string]: Set<string> } = {};
        Object.entries(data).forEach(([language, topics]) => {
          completedTopicsSets[language] = new Set(topics);
        });

        globalState.completedTopics = completedTopicsSets;
        globalState.initialized = true;
        globalState.isLoading = false;
        
        notifyListeners();
      } catch (error) {
        console.error('Error initializing completion data:', error);
        globalState.isLoading = false;
        notifyListeners();
      }
    };

    initializeData();
  }, [user]);

  const handleToggleComplete = useCallback((language: string, topicSlug: string) => {
    if (!user) return;

    // Update localStorage immediately using unified service
    unifiedCompletionService.toggleTopic(language, topicSlug);
    
    // Update global state
    if (!globalState.completedTopics[language]) {
      globalState.completedTopics[language] = new Set();
    }

    const currentTopics = globalState.completedTopics[language];
    if (currentTopics.has(topicSlug)) {
      currentTopics.delete(topicSlug);
    } else {
      currentTopics.add(topicSlug);
    }

    // Update unified service
    const updatedTopics = Array.from(currentTopics);
    unifiedCompletionService.updateLanguageCompletion(language, updatedTopics);
    
    notifyListeners();
  }, [user]);

  const getCompletedTopics = useCallback((language: string): Set<string> => {
    return globalState.completedTopics[language] || new Set();
  }, []); // Remove dependency on forceUpdate to prevent infinite loops

  const refreshData = useCallback(async () => {
    if (!user) return;

    globalState.isLoading = true;
    notifyListeners();

    try {
      const data = await unifiedCompletionService.fetchAllCompletionData(user.uid);
      
      const completedTopicsSets: { [language: string]: Set<string> } = {};
      Object.entries(data).forEach(([language, topics]) => {
        completedTopicsSets[language] = new Set(topics);
      });

      globalState.completedTopics = completedTopicsSets;
      globalState.isLoading = false;
      
      notifyListeners();
    } catch (error) {
      console.error('Error refreshing completion data:', error);
      globalState.isLoading = false;
      notifyListeners();
    }
  }, [user]);

  return {
    completedTopics: globalState.completedTopics,
    handleToggleComplete,
    isProgressLoading: globalState.isLoading,
    getCompletedTopics,
    refreshData,
  };
};
