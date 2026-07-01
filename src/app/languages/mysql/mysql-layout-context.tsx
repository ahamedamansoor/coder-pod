'use client';

import React, { createContext, useContext, useState } from 'react';

interface MysqlLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (isOpen: boolean) => void;
}

const MysqlLayoutContext = createContext<MysqlLayoutContextType | undefined>(undefined);

export function MysqlLayoutProvider({ children }: { children: React.ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <MysqlLayoutContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </MysqlLayoutContext.Provider>
  );
}

export function useMysqlLayout() {
  const context = useContext(MysqlLayoutContext);
  if (context === undefined) {
    throw new Error('useMysqlLayout must be used within a MysqlLayoutProvider');
  }
  return context;
}
