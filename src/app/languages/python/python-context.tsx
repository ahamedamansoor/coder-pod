'use client';
import { createContext, useContext, ReactNode, useState, useCallback } from 'react';

interface PythonContextType {
  completedTopics: Set<string>;
  handleToggleComplete: (topicId: string) => void;
  isProgressLoading: boolean;
}

const PythonContext = createContext<PythonContextType | undefined>(undefined);

export const usePython = (): PythonContextType => {
  const context = useContext(PythonContext);
  if (context === undefined) {
    // Return default implementation if not provided
    return {
      completedTopics: new Set(),
      handleToggleComplete: () => {},
      isProgressLoading: false,
    };
  }
  return context;
};

interface PythonProviderProps {
  children: ReactNode;
}

export const PythonProvider = ({ children }: PythonProviderProps) => {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [isProgressLoading, setIsProgressLoading] = useState(false);

  const handleToggleComplete = useCallback(async (topicId: string) => {
    setIsProgressLoading(true);
    try {
      setCompletedTopics(prev => {
        const newSet = new Set(prev);
        if (newSet.has(topicId)) {
          newSet.delete(topicId);
        } else {
          newSet.add(topicId);
        }
        return newSet;
      });
    } finally {
      setIsProgressLoading(false);
    }
  }, []);

  return (
    <PythonContext.Provider value={{
      completedTopics,
      handleToggleComplete,
      isProgressLoading,
    }}>
      {children}
    </PythonContext.Provider>
  );
};
