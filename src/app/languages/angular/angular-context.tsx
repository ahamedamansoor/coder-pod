
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface AngularContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const AngularContext = createContext<AngularContextType | undefined>(undefined);

export const AngularProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('angular');

  return (
    <AngularContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </AngularContext.Provider>
  );
};

export const useAngular = () => {
  const context = useContext(AngularContext);
  if (context === undefined) {
    throw new Error('useAngular must be used within an AngularProvider');
  }
  return context;
};
