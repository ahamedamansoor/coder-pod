
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PlaywrightLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaywrightLayoutContext = createContext<PlaywrightLayoutContextType | undefined>(undefined);

export const PlaywrightLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <PlaywrightLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </PlaywrightLayoutContext.Provider>
  );
};

export const usePlaywrightLayout = () => {
  const context = useContext(PlaywrightLayoutContext);
  if (context === undefined) {
    throw new Error('usePlaywrightLayout must be used within a PlaywrightLayoutProvider');
  }
  return context;
};
