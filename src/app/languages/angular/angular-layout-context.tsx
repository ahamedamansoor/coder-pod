
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AngularLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AngularLayoutContext = createContext<AngularLayoutContextType | undefined>(undefined);

export const AngularLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <AngularLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </AngularLayoutContext.Provider>
  );
};

export const useAngularLayout = () => {
  const context = useContext(AngularLayoutContext);
  if (context === undefined) {
    throw new Error('useAngularLayout must be used within an AngularLayoutProvider');
  }
  return context;
};
