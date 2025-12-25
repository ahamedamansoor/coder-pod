'use client';

import React, { createContext, useContext, type ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface DsaContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const DsaContext = createContext<DsaContextType | undefined>(undefined);

export const DsaProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('dsa');

  return (
    <DsaContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </DsaContext.Provider>
  );
};

export const useDsa = () => {
  const context = useContext(DsaContext);
  if (context === undefined) {
    throw new Error('useDsa must be used within a DsaProvider');
  }
  return context;
};
