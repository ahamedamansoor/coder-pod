'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SeleniumPlaygroundContextType {
  isPlaygroundOpen: boolean;
  openPlayground: (mode?: PlaygroundMode) => void;
  closePlayground: () => void;
  playgroundMode: PlaygroundMode;
  setPlaygroundMode: (mode: PlaygroundMode) => void;
}

export type PlaygroundMode = 'practice' | 'locators' | 'waits' | 'actions' | 'forms' | 'tables';

const SeleniumPlaygroundContext = createContext<SeleniumPlaygroundContextType | undefined>(undefined);

export const SeleniumPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const [playgroundMode, setPlaygroundMode] = useState<PlaygroundMode>('practice');

  const openPlayground = (mode: PlaygroundMode = 'practice') => {
    setPlaygroundMode(mode);
    setIsPlaygroundOpen(true);
  };

  const closePlayground = () => {
    setIsPlaygroundOpen(false);
  };

  return (
    <SeleniumPlaygroundContext.Provider
      value={{
        isPlaygroundOpen,
        openPlayground,
        closePlayground,
        playgroundMode,
        setPlaygroundMode,
      }}
    >
      {children}
    </SeleniumPlaygroundContext.Provider>
  );
};

export const useSeleniumPlayground = () => {
  const context = useContext(SeleniumPlaygroundContext);
  if (context === undefined) {
    throw new Error('useSeleniumPlayground must be used within a SeleniumPlaygroundProvider');
  }
  return context;
};
