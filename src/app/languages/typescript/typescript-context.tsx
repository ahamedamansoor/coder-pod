
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface TypeScriptContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const TypeScriptContext = createContext<TypeScriptContextType | undefined>(undefined);

export const TypeScriptProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('typescript');

  return (
    <TypeScriptContext.Provider
      value={{
        completedTopics,
        handleToggleComplete,
        isProgressLoading,
      }}
    >
      {children}
    </TypeScriptContext.Provider>
  );
};

export const useTypeScript = () => {
  const context = useContext(TypeScriptContext);
  if (context === undefined) {
    throw new Error('useTypeScript must be used within a TypeScriptProvider');
  }
  return context;
};
