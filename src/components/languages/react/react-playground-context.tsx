'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type ReactPlaygroundContentType = {
  code: string;
  css?: string;
  manualRun?: boolean;
  showContent?: boolean;
};

interface ReactPlaygroundContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactPlaygroundContentType;
  setContent: React.Dispatch<React.SetStateAction<ReactPlaygroundContentType>>;
  openWithContent: (code: string, css?: string, config?: { manualRun?: boolean; showContent?: boolean }) => void;
}

const defaultReactPlaygroundContext: ReactPlaygroundContextType = {
  open: false,
  setOpen: () => {},
  content: { code: '', css: '' },
  setContent: () => {},
  openWithContent: () => {},
};

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType>(defaultReactPlaygroundContext);

export const ReactPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactPlaygroundContentType>({
    code: '',
    css: '',
    manualRun: false,
    showContent: true,
  });

  const openWithContent = useCallback((code: string, css?: string, config?: { manualRun?: boolean; showContent?: boolean }) => {
    setContent({ 
      code, 
      css: css || '', 
      manualRun: config?.manualRun || false,
      showContent: config?.showContent !== undefined ? config.showContent : true
    });
    setOpen(true);
  }, []);

  return (
    <ReactPlaygroundContext.Provider value={{ open, setOpen, content, setContent, openWithContent }}>
      {children}
    </ReactPlaygroundContext.Provider>
  );
};

export const useReactPlayground = (): ReactPlaygroundContextType => {
  const context = useContext(ReactPlaygroundContext);
  // Return undefined instead of throwing error to allow usage in non-React pages (HTML/CSS/JS)
  // Components should check if context exists before using React playground features
  return context;
};
