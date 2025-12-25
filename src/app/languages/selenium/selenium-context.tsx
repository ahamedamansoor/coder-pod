
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface SeleniumContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const SeleniumContext = createContext<SeleniumContextType | undefined>(undefined);

export const SeleniumProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('selenium');

  return (
    <SeleniumContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </SeleniumContext.Provider>
  );
};

export const useSelenium = () => {
  const context = useContext(SeleniumContext);
  if (context === undefined) {
    throw new Error('useSelenium must be used within a SeleniumProvider');
  }
  return context;
};
