'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface VueContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const VueContext = createContext<VueContextType | undefined>(undefined);

export const VueProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('vue');

  return (
    <VueContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </VueContext.Provider>
  );
};

export const useVueContext = () => {
  const context = useContext(VueContext);
  if (context === undefined) {
    throw new Error('useVueContext must be used within a VueProvider');
  }
  return context;
};
