
'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface LoaderText {
  title: string;
  subtitle: string;
}

interface LoadingContextType {
  isLoading: boolean;
  loaderText: LoaderText;
  showLoader: (text?: Partial<LoaderText>) => void;
  hideLoader: () => void;
}

const defaultLoaderText: LoaderText = {
  title: 'Loading Your Learning Module...',
  subtitle: 'Just a moment!',
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderText, setLoaderText] = useState<LoaderText>(defaultLoaderText);

  const showLoader = useCallback((text?: Partial<LoaderText>) => {
    setLoaderText({ ...defaultLoaderText, ...text });
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, loaderText, showLoader, hideLoader }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
