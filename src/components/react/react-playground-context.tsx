'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type ReactPlaygroundContentType = {
  code: string;
};

interface ReactPlaygroundContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactPlaygroundContentType;
  setContent: React.Dispatch<React.SetStateAction<ReactPlaygroundContentType>>;
  openWithContent: (code: string) => void;
}

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType | undefined>(undefined);

export const ReactPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactPlaygroundContentType>({
    code: '',
  });

  const openWithContent = useCallback((code: string) => {
    setContent({ code });
    setOpen(true);
  }, []);

  return (
    <ReactPlaygroundContext.Provider value={{ open, setOpen, content, setContent, openWithContent }}>
      {children}
    </ReactPlaygroundContext.Provider>
  );
};

export const useReactPlayground = () => {
  const context = useContext(ReactPlaygroundContext);
  if (context === undefined) {
    throw new Error('useReactPlayground must be used within a ReactPlaygroundProvider');
  }
  return context;
};
