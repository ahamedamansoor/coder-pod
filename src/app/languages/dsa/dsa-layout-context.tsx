'use client';

import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface DsaLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DsaLayoutContext = createContext<DsaLayoutContextType | undefined>(undefined);

export const DsaLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <DsaLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </DsaLayoutContext.Provider>
  );
};

export const useDsaLayout = () => {
  const context = useContext(DsaLayoutContext);
  if (context === undefined) {
    throw new Error('useDsaLayout must be used within a DsaLayoutProvider');
  }
  return context;
};
