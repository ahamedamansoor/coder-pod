
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ReactLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReactLayoutContext = createContext<ReactLayoutContextType | undefined>(undefined);

export const ReactLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <ReactLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </ReactLayoutContext.Provider>
  );
};

export const useReactLayout = () => {
  const context = useContext(ReactLayoutContext);
  if (context === undefined) {
    throw new Error('useReactLayout must be used within a ReactLayoutProvider');
  }
  return context;
};
