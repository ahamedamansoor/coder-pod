'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PostgresqlLayoutContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const PostgresqlLayoutContext = createContext<PostgresqlLayoutContextType | undefined>(undefined);

export function PostgresqlLayoutProvider({ children }: { children: ReactNode }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <PostgresqlLayoutContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
      {children}
    </PostgresqlLayoutContext.Provider>
  );
}

export function usePostgresqlLayout() {
  const context = useContext(PostgresqlLayoutContext);
  if (context === undefined) {
    throw new Error('usePostgresqlLayout must be used within a PostgresqlLayoutProvider');
  }
  return context;
}
