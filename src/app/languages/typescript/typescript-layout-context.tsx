
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TypeScriptLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypeScriptLayoutContext = createContext<TypeScriptLayoutContextType | undefined>(undefined);

export const TypeScriptLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <TypeScriptLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </TypeScriptLayoutContext.Provider>
  );
};

export const useTypeScriptLayout = () => {
  const context = useContext(TypeScriptLayoutContext);
  if (context === undefined) {
    throw new Error('useTypeScriptLayout must be used within a TypeScriptLayoutProvider');
  }
  return context;
};
