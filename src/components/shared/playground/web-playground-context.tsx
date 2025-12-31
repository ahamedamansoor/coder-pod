
'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type WebPlaygroundContentType = {
  html: string;
  css: string;
  js: string;
  initialLanguage?: string;
  visiblePanels?: {
    html?: boolean;
    css?: boolean;
    js?: boolean;
  };
};

interface WebPlaygroundContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: WebPlaygroundContentType;
  setContent: React.Dispatch<React.SetStateAction<WebPlaygroundContentType>>;
  defaultFocusedPanel: 'html' | 'css' | 'js' | null;
  openWithContent: (html: string, css: string, js: string, focusedPanel?: 'html' | 'css' | 'js' | string, config?: { visiblePanels?: ('html' | 'css' | 'js' | 'preview' | 'console')[] }) => void;
}

const defaultWebPlaygroundContext: WebPlaygroundContextType = {
  open: false,
  setOpen: () => {},
  content: { html: '', css: '', js: '' },
  setContent: () => {},
  defaultFocusedPanel: null,
  openWithContent: () => {},
};

const WebPlaygroundContext = createContext<WebPlaygroundContextType>(defaultWebPlaygroundContext);

export const WebPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<WebPlaygroundContentType>({
    html: '',
    css: '',
    js: ''
  });
  const [defaultFocusedPanel, setDefaultFocusedPanel] = useState<'html' | 'css' | 'js' | null>(null);

  const openWithContent = useCallback((html: string, css: string, js: string, focusedPanel?: 'html' | 'css' | 'js' | string, config?: { visiblePanels?: ('html' | 'css' | 'js' | 'preview' | 'console')[] }) => {
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
    
    // Determine if focusedPanel is a language (tailwind, scss, css) or a panel name
    const isLanguage = focusedPanel && !['html', 'css', 'js'].includes(focusedPanel);
    
    // Build visible panels configuration
    let visiblePanels = undefined;
    
    if (config?.visiblePanels) {
      // Use custom config if provided
      visiblePanels = {
        html: config.visiblePanels.includes('html'),
        css: config.visiblePanels.includes('css'),
        js: config.visiblePanels.includes('js'),
      };
    } else if (focusedPanel === 'tailwind') {
      // For Tailwind, only show HTML panel (CSS and JS are hidden since styles are in class attributes)
      visiblePanels = {
        html: true,
        css: false,
        js: false
      };
    }
    
    setContent({ 
      html: ensureProperHTMLStructure(html), 
      css, 
      js,
      initialLanguage: isLanguage ? focusedPanel : undefined,
      visiblePanels
    });
    setDefaultFocusedPanel(isLanguage ? 'html' : (focusedPanel as 'html' | 'css' | 'js' | null) || null);
    setOpen(true);
  }, []);

  return (
    <WebPlaygroundContext.Provider value={{ open, setOpen, content, setContent, defaultFocusedPanel, openWithContent }}>
      {children}
    </WebPlaygroundContext.Provider>
  );
};

export const useWebPlayground = () => {
  const context = useContext(WebPlaygroundContext);
  // Gracefully fall back to no-op context when provider is absent
  return context || defaultWebPlaygroundContext;
};
