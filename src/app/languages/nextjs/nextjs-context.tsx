'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface NextjsContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const NextjsContext = createContext<NextjsContextType | undefined>(undefined);

export const NextjsProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('nextjs');

  return (
    <NextjsContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </NextjsContext.Provider>
  );
};

export const useNextjsContext = () => {
  const context = useContext(NextjsContext);
  if (context === undefined) {
    throw new Error('useNextjsContext must be used within a NextjsProvider');
  }
  return context;
};
