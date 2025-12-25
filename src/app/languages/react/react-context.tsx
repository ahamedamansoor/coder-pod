
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface ReactContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const ReactContext = createContext<ReactContextType | undefined>(undefined);

export const ReactProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('react');

  return (
    <ReactContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </ReactContext.Provider>
  );
};

export const useReact = () => {
  const context = useContext(ReactContext);
  if (context === undefined) {
    throw new Error('useReact must be used within a ReactProvider');
  }
  return context;
};
