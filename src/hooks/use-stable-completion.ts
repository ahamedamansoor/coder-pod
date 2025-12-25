'use client';

import { useState, useEffect, useCallback } from 'react';
import { useUser } from './use-auth-compat';
import { unifiedCompletionService } from '@/services/unified-completion.service';

interface StableCompletionContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

// Cache for storing completion data to prevent unnecessary re-renders
const completionCache = new Map<string, Set<string>>();
let cacheVersion = 0;

export const useStableCompletion = (language: string): StableCompletionContextType => {
  const { user } = useUser();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [currentCacheVersion, setCurrentCacheVersion] = useState(0);

  // Load completion data for this specific language
  useEffect(() => {
    const loadCompletionData = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        // Get completion data from unified service
        const allData = unifiedCompletionService.getAllCompletionData();
        const languageTopics = allData[language] || [];
        const topicsSet = new Set(languageTopics);
        
        // Update cache and state
        completionCache.set(language, topicsSet);
        setCompletedTopics(topicsSet);
        setCurrentCacheVersion(cacheVersion);
      } catch (error) {
        console.error('Error loading completion data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCompletionData();
  }, [user?.uid, language]); // Use user.uid instead of user object

  // Listen for storage changes to update this component
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'completion_data') {
        // Reload data when localStorage changes
        const allData = unifiedCompletionService.getAllCompletionData();
        const languageTopics = allData[language] || [];
        const topicsSet = new Set(languageTopics);
        
        completionCache.set(language, topicsSet);
        setCompletedTopics(topicsSet);
        setCurrentCacheVersion(prev => prev + 1);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [language]);

  const handleToggleComplete = useCallback((topicSlug: string) => {
    if (!user) return;

    // Update through unified service
    unifiedCompletionService.toggleTopic(language, topicSlug);
    
    // Update local state immediately
    setCompletedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicSlug)) {
        newSet.delete(topicSlug);
      } else {
        newSet.add(topicSlug);
      }
      
      // Update cache
      completionCache.set(language, newSet);
      cacheVersion++;
      setCurrentCacheVersion(cacheVersion);
      
      return newSet;
    });
  }, [user?.uid, language]); // Use user.uid instead of user object

  return {
    completedTopics,
    handleToggleComplete,
    isProgressLoading: isLoading,
  };
};
