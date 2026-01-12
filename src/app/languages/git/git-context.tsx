'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface GitContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const GitContext = createContext<GitContextType | undefined>(undefined);

export function GitProvider({ children }: { children: ReactNode }) {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('git');

  return (
    <GitContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </GitContext.Provider>
  );
}

export function useGit() {
  const context = useContext(GitContext);
  if (context === undefined) {
    throw new Error('useGit must be used within a GitProvider');
  }
  return context;
}
