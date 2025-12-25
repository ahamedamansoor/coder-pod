
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface CssContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const CssContext = createContext<CssContextType | undefined>(undefined);

export const CssProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('css');

  return (
    <CssContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </CssContext.Provider>
  );
};

export const useCss = () => {
  const context = useContext(CssContext);
  if (context === undefined) {
    throw new Error('useCss must be used within a CssProvider');
  }
  return context;
};
