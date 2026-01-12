'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GitLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const GitLayoutContext = createContext<GitLayoutContextType | undefined>(undefined);

export function GitLayoutProvider({ children }: { children: ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <GitLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </GitLayoutContext.Provider>
  );
}

export function useGitLayout() {
  const context = useContext(GitLayoutContext);
  if (context === undefined) {
    throw new Error('useGitLayout must be used within a GitLayoutProvider');
  }
  return context;
}
