'use client';

import React, { createContext, useContext, useState } from 'react';

interface NextjsLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (isOpen: boolean) => void;
}

const NextjsLayoutContext = createContext<NextjsLayoutContextType | undefined>(undefined);

export function NextjsLayoutProvider({ children }: { children: React.ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <NextjsLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </NextjsLayoutContext.Provider>
  );
}

export function useNextjsLayout() {
  const context = useContext(NextjsLayoutContext);
  if (context === undefined) {
    throw new Error('useNextjsLayout must be used within a NextjsLayoutProvider');
  }
  return context;
}
