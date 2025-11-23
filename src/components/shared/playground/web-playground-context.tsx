
'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type WebPlaygroundContentType = {
  html: string;
  css: string;
  js: string;
};

interface WebPlaygroundContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: WebPlaygroundContentType;
  setContent: React.Dispatch<React.SetStateAction<WebPlaygroundContentType>>;
  openWithContent: (html: string, css: string, js: string) => void;
}

const WebPlaygroundContext = createContext<WebPlaygroundContextType | undefined>(undefined);

export const WebPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<WebPlaygroundContentType>({
    html: '',
    css: '',
    js: ''
  });

  const openWithContent = useCallback((html: string, css: string, js: string) => {
    setContent({ html, css, js });
    setOpen(true);
  }, []);

  return (
    <WebPlaygroundContext.Provider value={{ open, setOpen, content, setContent, openWithContent }}>
      {children}
    </WebPlaygroundContext.Provider>
  );
};

export const useWebPlayground = () => {
  const context = useContext(WebPlaygroundContext);
  if (context === undefined) {
    throw new Error('useWebPlayground must be used within a WebPlaygroundProvider');
  }
  return context;
};
