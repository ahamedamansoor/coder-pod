'use client';

import React, { type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // FirebaseProvider handles initialization internally
  return (
    <FirebaseProvider>
      {children}
    </FirebaseProvider>
  );
}