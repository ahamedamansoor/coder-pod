
'use client';

import React, { createContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface PlaywrightContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const PlaywrightContext = createContext<PlaywrightContextType | undefined>(undefined);

export const PlaywrightProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('playwright');

  return (
    <PlaywrightContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </PlaywrightContext.Provider>
  );
};

export const usePlaywright = () => {
  const context = React.useContext(PlaywrightContext);
  if (context === undefined) {
    throw new Error('usePlaywright must be used within a PlaywrightProvider');
  }
  return context;
};
