'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FrontendSystemDesignLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const FrontendSystemDesignLayoutContext = createContext<FrontendSystemDesignLayoutContextType | undefined>(undefined);

export function FrontendSystemDesignLayoutProvider({ children }: { children: ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <FrontendSystemDesignLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </FrontendSystemDesignLayoutContext.Provider>
  );
}

export function useFrontendSystemDesignLayout() {
  const context = useContext(FrontendSystemDesignLayoutContext);
  if (context === undefined) {
    throw new Error('useFrontendSystemDesignLayout must be used within FrontendSystemDesignLayoutProvider');
  }
  return context;
}
