
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TailwindLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TailwindLayoutContext = createContext<TailwindLayoutContextType | undefined>(undefined);

export const TailwindLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <TailwindLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </TailwindLayoutContext.Provider>
  );
};

export const useTailwindLayout = () => {
  const context = useContext(TailwindLayoutContext);
  if (context === undefined) {
    throw new Error('useTailwindLayout must be used within a TailwindLayoutProvider');
  }
  return context;
};
