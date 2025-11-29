'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface JavaLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const JavaLayoutContext = createContext<JavaLayoutContextType | undefined>(undefined);

export const JavaLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <JavaLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </JavaLayoutContext.Provider>
  );
};

export const useJavaLayout = () => {
  const context = useContext(JavaLayoutContext);
  if (context === undefined) {
    throw new Error('useJavaLayout must be used within a JavaLayoutProvider');
  }
  return context;
};
