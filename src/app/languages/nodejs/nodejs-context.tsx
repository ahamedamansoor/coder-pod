'use client';

import { createContext, useContext, ReactNode } from 'react';
import { nodejs } from '@/data/languages/nodejs';

interface NodejsContextType {
  language: typeof nodejs;
}

const NodejsContext = createContext<NodejsContextType | undefined>(undefined);

export function NodejsProvider({ children }: { children: ReactNode }) {
  return (
    <NodejsContext.Provider value={{ language: nodejs }}>
      {children}
    </NodejsContext.Provider>
  );
}

export function useNodejs() {
  const context = useContext(NodejsContext);
  if (context === undefined) {
    throw new Error('useNodejs must be used within a NodejsProvider');
  }
  return context;
}
