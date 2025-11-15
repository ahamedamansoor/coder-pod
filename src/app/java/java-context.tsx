'use client';

import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

interface JavaContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicSlug: string) => void;
}

const JavaContext = createContext<JavaContextType | undefined>(undefined);

export const JavaProvider = ({ children }: { children: ReactNode }) => {
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  const handleToggleComplete = useCallback((topicSlug: string) => {
    setCompletedTopics((prev) => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(topicSlug)) {
        newCompleted.delete(topicSlug);
      } else {
        newCompleted.add(topicSlug);
      }
      return newCompleted;
    });
  }, []);

  return (
    <JavaContext.Provider value={{ completedTopics, handleToggleComplete }}>
      {children}
    </JavaContext.Provider>
  );
};

export const useJava = () => {
  const context = useContext(JavaContext);
  if (context === undefined) {
    throw new Error('useJava must be used within a JavaProvider');
  }
  return context;
};
