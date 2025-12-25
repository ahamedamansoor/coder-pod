
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface JavascriptContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const JavascriptContext = createContext<JavascriptContextType | undefined>(undefined);

export const JavascriptProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('javascript');

  return (
    <JavascriptContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </JavascriptContext.Provider>
  );
};

export const useJavascript = () => {
  const context = useContext(JavascriptContext);
  if (context === undefined) {
    throw new Error('useJavascript must be used within a JavascriptProvider');
  }
  return context;
};
