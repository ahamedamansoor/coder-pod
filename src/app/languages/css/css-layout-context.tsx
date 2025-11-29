
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CssLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CssLayoutContext = createContext<CssLayoutContextType | undefined>(undefined);

export const CssLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <CssLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </CssLayoutContext.Provider>
  );
};

export const useCssLayout = () => {
  const context = useContext(CssLayoutContext);
  if (context === undefined) {
    throw new Error('useCssLayout must be used within a CssLayoutProvider');
  }
  return context;
};
