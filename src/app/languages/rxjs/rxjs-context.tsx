'use client';

import React, { createContext, type ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface RxjsContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const RxjsContext = createContext<RxjsContextType | undefined>(undefined);

export const RxjsProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('rxjs');

  return (
    <RxjsContext.Provider value={{ completedTopics, handleToggleComplete, isProgressLoading }}>
      {children}
    </RxjsContext.Provider>
  );
};

export const useRxjs = () => {
  const context = React.useContext(RxjsContext);
  if (context === undefined) {
    throw new Error('useRxjs must be used within a RxjsProvider');
  }
  return context;
};
