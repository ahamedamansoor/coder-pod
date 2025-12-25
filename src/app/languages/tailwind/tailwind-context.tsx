'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface TailwindContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const TailwindContext = createContext<TailwindContextType | undefined>(undefined);

export const TailwindProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('tailwind');

  return (
    <TailwindContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </TailwindContext.Provider>
  );
};

export const useTailwind = () => {
  const context = useContext(TailwindContext);
  if (context === undefined) {
    throw new Error('useTailwind must be used within a TailwindProvider');
  }
  return context;
};
