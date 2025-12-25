'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useStableCompletion } from '@/hooks/use-stable-completion';

interface HtmlContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
  isProgressLoading: boolean;
}

const HtmlContext = createContext<HtmlContextType | undefined>(undefined);

export const HtmlProvider = ({ children }: { children: ReactNode }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useStableCompletion('html');

  return (
    <HtmlContext.Provider value={{ 
      completedTopics, 
      handleToggleComplete, 
      isProgressLoading 
    }}>
      {children}
    </HtmlContext.Provider>
  );
};

export const useHtml = () => {
  const context = useContext(HtmlContext);
  if (context === undefined) {
    throw new Error('useHtml must be used within an HtmlProvider');
  }
  return context;
};
