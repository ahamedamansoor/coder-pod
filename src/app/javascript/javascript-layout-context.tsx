
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface JavascriptLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const JavascriptLayoutContext = createContext<JavascriptLayoutContextType | undefined>(undefined);

export const JavascriptLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <JavascriptLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </JavascriptLayoutContext.Provider>
  );
};

export const useJavascriptLayout = () => {
  const context = useContext(JavascriptLayoutContext);
  if (context === undefined) {
    throw new Error('useJavascriptLayout must be used within a JavascriptLayoutProvider');
  }
  return context;
};
