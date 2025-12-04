
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
    // Ensure HTML has proper document structure
    const ensureProperHTMLStructure = (htmlContent: string): string => {
      const trimmed = htmlContent.trim();
      
      // If already has DOCTYPE and html tags, return as-is
      if (trimmed.toLowerCase().startsWith('<!doctype') && trimmed.includes('<html')) {
        return htmlContent;
      }
      
      // If it's just body content, wrap it in proper structure
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Playground</title>
</head>
<body>
${htmlContent}
</body>
</html>`;
    };
    
    setContent({ 
      html: ensureProperHTMLStructure(html), 
      css, 
      js 
    });
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
