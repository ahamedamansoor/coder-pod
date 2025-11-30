'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SpringBootLayoutContextType = {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
};

const SpringBootLayoutContext = createContext<SpringBootLayoutContextType | undefined>(undefined);

export const SpringBootLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const value: SpringBootLayoutContextType = {
    isEditorOpen,
    setIsEditorOpen,
  };

  return (
    <SpringBootLayoutContext.Provider value={value}>
      {children}
    </SpringBootLayoutContext.Provider>
  );
};

export const useSpringBootLayout = (): SpringBootLayoutContextType => {
  const context = useContext(SpringBootLayoutContext);
  if (!context) {
    throw new Error('useSpringBootLayout must be used within a SpringBootLayoutProvider');
  }
  return context;
};
