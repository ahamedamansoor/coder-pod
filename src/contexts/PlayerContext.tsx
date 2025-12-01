'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PlayerContent {
  id: string | number;
  title: string;
  url: string;
  type: 'video';
  coverImage?: string;
  author?: string;
}

interface PlayerContextType {
  content: PlayerContent | null;
  isMinimized: boolean;
  isPlaying: boolean;
  setContent: (content: PlayerContent | null) => void;
  minimize: () => void;
  maximize: () => void;
  close: () => void;
  togglePlayPause: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PlayerContent | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const minimize = () => setIsMinimized(true);
  const maximize = () => setIsMinimized(false);
  
  const close = () => {
    setContent(null);
    setIsMinimized(false);
    setIsPlaying(false);
  };

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <PlayerContext.Provider
      value={{
        content,
        isMinimized,
        isPlaying,
        setContent,
        minimize,
        maximize,
        close,
        togglePlayPause,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
