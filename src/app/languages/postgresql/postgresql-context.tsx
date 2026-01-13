'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface PostgresqlContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const PostgresqlContext = createContext<PostgresqlContextType | undefined>(undefined);

export function PostgresqlProvider({ children }: { children: ReactNode }) {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('postgresql');

  return (
    <PostgresqlContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </PostgresqlContext.Provider>
  );
}

export function usePostgresql() {
  const context = useContext(PostgresqlContext);
  if (context === undefined) {
    throw new Error('usePostgresql must be used within a PostgresqlProvider');
  }
  return context;
}
