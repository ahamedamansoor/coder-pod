
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface ScssContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const ScssContext = createContext<ScssContextType | undefined>(undefined);

export const ScssProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('scss');

  return (
    <ScssContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </ScssContext.Provider>
  );
};

export const useScss = () => {
  const context = useContext(ScssContext);
  if (context === undefined) {
    throw new Error('useScss must be used within a ScssProvider');
  }
  return context;
};
