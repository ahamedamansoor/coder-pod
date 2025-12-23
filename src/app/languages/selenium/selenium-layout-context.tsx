'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SeleniumLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const SeleniumLayoutContext = createContext<SeleniumLayoutContextType | undefined>(undefined);

export function SeleniumLayoutProvider({ children }: { children: ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <SeleniumLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </SeleniumLayoutContext.Provider>
  );
}

export function useSeleniumLayout() {
  const context = useContext(SeleniumLayoutContext);
  if (context === undefined) {
    throw new Error('useSeleniumLayout must be used within a SeleniumLayoutProvider');
  }
  return context;
}
