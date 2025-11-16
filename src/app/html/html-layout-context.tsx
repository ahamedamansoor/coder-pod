
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface HtmlLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HtmlLayoutContext = createContext<HtmlLayoutContextType | undefined>(undefined);

export const HtmlLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <HtmlLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </HtmlLayoutContext.Provider>
  );
};

export const useHtmlLayout = () => {
  const context = useContext(HtmlLayoutContext);
  if (context === undefined) {
    throw new Error('useHtmlLayout must be used within a HtmlLayoutProvider');
  }
  return context;
};
