'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type ReactPlaygroundContentType = {
  code: string;
  css?: string;
};

interface ReactPlaygroundContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactPlaygroundContentType;
  setContent: React.Dispatch<React.SetStateAction<ReactPlaygroundContentType>>;
  openWithContent: (code: string, css?: string) => void;
}

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType | undefined>(undefined);

export const ReactPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactPlaygroundContentType>({
    code: '',
    css: '',
  });

  const openWithContent = useCallback((code: string, css?: string) => {
    setContent({ code, css });
    setOpen(true);
  }, []);

  return (
    <ReactPlaygroundContext.Provider value={{ open, setOpen, content, setContent, openWithContent }}>
      {children}
    </ReactPlaygroundContext.Provider>
  );
};

export const useReactPlayground = (): ReactPlaygroundContextType | undefined => {
  const context = useContext(ReactPlaygroundContext);
  // Return undefined instead of throwing error to allow usage in non-React pages (HTML/CSS/JS)
  // Components should check if context exists before using React playground features
  return context;
};
