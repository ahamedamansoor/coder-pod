'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

export type SpringBootContextType = {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
};

const SpringBootContext = createContext<SpringBootContextType | undefined>(undefined);

export const SpringBootProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('spring-boot');

  const value: SpringBootContextType = {
    completedTopics,
    handleToggleComplete,
    isProgressLoading,
  };

  return (
    <SpringBootContext.Provider value={value}>
      {children}
    </SpringBootContext.Provider>
  );
};

export const useSpringBoot = (): SpringBootContextType => {
  const context = useContext(SpringBootContext);
  if (!context) {
    throw new Error('useSpringBoot must be used within a SpringBootProvider');
  }
  return context;
};
