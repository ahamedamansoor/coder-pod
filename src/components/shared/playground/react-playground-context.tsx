'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReactPlaygroundData {
  jsx: string;
  css?: string;
}

interface ReactPlaygroundContextType {
  isOpen: boolean;
  playgroundData: ReactPlaygroundData | null;
  openPlayground: (data: ReactPlaygroundData) => void;
  closePlayground: () => void;
}

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType | undefined>(undefined);

export function ReactPlaygroundProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [playgroundData, setPlaygroundData] = useState<ReactPlaygroundData | null>(null);

  const openPlayground = (data: ReactPlaygroundData) => {
    console.log('🚀 React Playground Context: Opening playground with data:', data);
    console.log('🚀 React Playground Context: Data length:', {
      jsxLength: data.jsx.length,
      cssLength: data.css?.length || 0
    });
    setPlaygroundData(data);
    setIsOpen(true);
    console.log('✅ React Playground Context: Playground opened, isOpen set to true');
  };

  const closePlayground = () => {
    setIsOpen(false);
    // Keep data for smooth closing animation
    setTimeout(() => setPlaygroundData(null), 300);
  };

  return (
    <ReactPlaygroundContext.Provider
      value={{
        isOpen,
        playgroundData,
        openPlayground,
        closePlayground,
      }}
    >
      {children}
    </ReactPlaygroundContext.Provider>
  );
}

export function useReactPlayground() {
  const context = useContext(ReactPlaygroundContext);
  if (context === undefined) {
    throw new Error('useReactPlayground must be used within a ReactPlaygroundProvider');
  }
  return context;
}
