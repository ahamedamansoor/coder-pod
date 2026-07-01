'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface MysqlContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const MysqlContext = createContext<MysqlContextType | undefined>(undefined);

export const MysqlProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('mysql');

  return (
    <MysqlContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </MysqlContext.Provider>
  );
};

export const useMysqlContext = () => {
  const context = useContext(MysqlContext);
  if (context === undefined) {
    throw new Error('useMysqlContext must be used within a MysqlProvider');
  }
  return context;
};
