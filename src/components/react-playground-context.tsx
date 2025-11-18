
'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, useRef } from 'react';
import { startService, type Service } from 'esbuild-wasm';

interface ReactPlaygroundContextType {
  esbuildService: Service | null;
}

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType | undefined>(undefined);

export const ReactPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [esbuildService, setEsbuildService] = useState<Service | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;
    
    const startEsbuildService = async () => {
      try {
        const service = await startService({
          worker: true,
          wasmURL: '/esbuild.wasm',
        });
        setEsbuildService(service);
      } catch(e) {
        console.error("Failed to initialize esbuild service", e);
      }
    };
    startEsbuildService();

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
