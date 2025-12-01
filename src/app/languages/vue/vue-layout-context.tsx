'use client';

import React, { createContext, useContext, useState } from 'react';

interface VueLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (isOpen: boolean) => void;
}

const VueLayoutContext = createContext<VueLayoutContextType | undefined>(undefined);

export function VueLayoutProvider({ children }: { children: React.ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <VueLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </VueLayoutContext.Provider>
  );
}

export function useVueLayout() {
  const context = useContext(VueLayoutContext);
  if (context === undefined) {
    throw new Error('useVueLayout must be used within a VueLayoutProvider');
  }
  return context;
}
