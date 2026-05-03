'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NodejsLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const NodejsLayoutContext = createContext<NodejsLayoutContextType | undefined>(undefined);

export function NodejsLayoutProvider({ children }: { children: ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <NodejsLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </NodejsLayoutContext.Provider>
  );
}

export function useNodejsLayout() {
  const context = useContext(NodejsLayoutContext);
  if (context === undefined) {
    throw new Error('useNodejsLayout must be used within a NodejsLayoutProvider');
  }
  return context;
}
