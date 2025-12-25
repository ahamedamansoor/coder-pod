
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface SpringContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const SpringContext = createContext<SpringContextType | undefined>(undefined);

export const SpringProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('spring');

  return (
    <SpringContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </SpringContext.Provider>
  );
};

export const useSpring = () => {
  const context = useContext(SpringContext);
  if (context === undefined) {
    throw new Error('useSpring must be used within a SpringProvider');
  }
  return context;
};
