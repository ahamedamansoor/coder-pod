'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { MotivationalLoader } from '@/components/shared/motivational-loader';

interface MotivationalLoaderContextType {
  showLoader: (message?: string) => void;
  hideLoader: () => void;
  isLoading: boolean;
}

const MotivationalLoaderContext = createContext<MotivationalLoaderContextType | undefined>(undefined);

export function MotivationalLoaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | undefined>();

  const showLoader = useCallback((msg?: string) => {
    setMessage(msg);
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
    setMessage(undefined);
  }, []);

  return (
    <MotivationalLoaderContext.Provider value={{ showLoader, hideLoader, isLoading }}>
      {children}
      <MotivationalLoader isLoading={isLoading} message={message} />
    </MotivationalLoaderContext.Provider>
  );
}

export function useMotivationalLoader() {
  const context = useContext(MotivationalLoaderContext);
  if (context === undefined) {
    throw new Error('useMotivationalLoader must be used within a MotivationalLoaderProvider');
  }
  return context;
}
