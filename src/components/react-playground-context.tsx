
'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';

interface ReactPlaygroundContextType {
  esbuildService: esbuild.Service | null;
}

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType | undefined>(undefined);

export const ReactPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [esbuildService, setEsbuildService] = useState<esbuild.Service | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;
    
    const startService = async () => {
      try {
        const service = await esbuild.startService({
          worker: true,
          wasmURL: '/esbuild.wasm',
        });
        setEsbuildService(service);
      } catch(e) {
        console.error("Failed to initialize esbuild service", e);
      }
    };
    startService();

  }, []);

  return (
    <ReactPlaygroundContext.Provider value={{ esbuildService }}>
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
