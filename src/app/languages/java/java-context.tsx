
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface JavaContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const JavaContext = createContext<JavaContextType | undefined>(undefined);

export const JavaProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('java');

  return (
    <JavaContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </JavaContext.Provider>
  );
};

export const useJava = () => {
  const context = useContext(JavaContext);
  if (context === undefined) {
    throw new Error('useJava must be used within a JavaProvider');
  }
  return context;
};
