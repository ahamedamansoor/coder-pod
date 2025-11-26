'use client';

import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface RxjsLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RxjsLayoutContext = createContext<RxjsLayoutContextType | undefined>(undefined);

export const RxjsLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <RxjsLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </RxjsLayoutContext.Provider>
  );
};

export const useRxjsLayout = () => {
  const context = useContext(RxjsLayoutContext);
  if (context === undefined) {
    throw new Error('useRxjsLayout must be used within a RxjsLayoutProvider');
  }
  return context;
};
