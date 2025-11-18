'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, useRef } from 'react';
import { startService, type Service } from 'esbuild-wasm';

interface ReactPlaygroundContextType {
  esbuildService: Service | null;
  isEsbuildInitialized: boolean;
}

const ReactPlaygroundContext = createContext<ReactPlaygroundContextType | undefined>(undefined);

export const ReactPlaygroundProvider = ({ children }: { children: ReactNode }) => {
  const [esbuildService, setEsbuildService] = useState<Service | null>(null);
  const [isEsbuildInitialized, setIsEsbuildInitialized] = useState(false);
  const serviceRef = useRef<Service | null>(null);

  useEffect(() => {
    const startEsbuildService = async () => {
      if (serviceRef.current) return;
      try {
        const service = await startService({
          worker: true,
          wasmURL: '/esbuild.wasm',
        });
        serviceRef.current = service;
        setEsbuildService(service);
        setIsEsbuildInitialized(true);
      } catch(e) {
        console.error("Failed to initialize esbuild service", e);
        setIsEsbuildInitialized(false);
      }
    };
    
    if (typeof window !== 'undefined') {
      startEsbuildService();
    }
  }, []);

  return (
    <ReactPlaygroundContext.Provider value={{ esbuildService, isEsbuildInitialized }}>
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
