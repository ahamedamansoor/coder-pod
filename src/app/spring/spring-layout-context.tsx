'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SpringLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpringLayoutContext = createContext<SpringLayoutContextType | undefined>(undefined);

export const SpringLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <SpringLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </SpringLayoutContext.Provider>
  );
};

export const useSpringLayout = () => {
  const context = useContext(SpringLayoutContext);
  if (context === undefined) {
    throw new Error('useSpringLayout must be used within a SpringLayoutProvider');
  }
  return context;
};
