
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ScssLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScssLayoutContext = createContext<ScssLayoutContextType | undefined>(undefined);

export const ScssLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <ScssLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </ScssLayoutContext.Provider>
  );
};

export const useScssLayout = () => {
  const context = useContext(ScssLayoutContext);
  if (context === undefined) {
    throw new Error('useScssLayout must be used within a ScssLayoutProvider');
  }
  return context;
};
