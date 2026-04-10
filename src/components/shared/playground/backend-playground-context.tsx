'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BackendPlaygroundData {
  source_code: string;
  language_id: number;
  stdin?: string;
  expected_output?: string;
  compiler_options?: string;
  command_line_arguments?: string;
  max_cpu_time?: number;
  max_memory?: number;
}

interface BackendPlaygroundContextType {
  isOpen: boolean;
  openPlayground: (data?: Partial<BackendPlaygroundData>) => void;
  closePlayground: () => void;
  playgroundData: BackendPlaygroundData;
  updatePlaygroundData: (data: Partial<BackendPlaygroundData>) => void;
}

const defaultPlaygroundData: BackendPlaygroundData = {
  source_code: `# Welcome to Backend Playground!
# Choose a language and write your code below

def main():
    print("Hello, World!")
    name = input("Enter your name: ")
    print(f"Hello, {name}!")

if __name__ == "__main__":
    main()`,
  language_id: 71, // Python (3.11.5)
  stdin: '',
  expected_output: '',
  compiler_options: '',
  command_line_arguments: '',
  max_cpu_time: 2,
  max_memory: 128000,
};

const BackendPlaygroundContext = createContext<BackendPlaygroundContextType | undefined>(undefined);

export function BackendPlaygroundProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [playgroundData, setPlaygroundData] = useState<BackendPlaygroundData>(defaultPlaygroundData);

  const openPlayground = (data?: Partial<BackendPlaygroundData>) => {
    if (data) {
      setPlaygroundData({ ...defaultPlaygroundData, ...data });
    }
    setIsOpen(true);
  };

  const closePlayground = () => {
    setIsOpen(false);
  };

  const updatePlaygroundData = (data: Partial<BackendPlaygroundData>) => {
    setPlaygroundData(prev => ({ ...prev, ...data }));
  };

  return (
    <BackendPlaygroundContext.Provider
      value={{
        isOpen,
        openPlayground,
        closePlayground,
        playgroundData,
        updatePlaygroundData,
      }}
    >
      {children}
    </BackendPlaygroundContext.Provider>
  );
}

export function useBackendPlayground() {
  const context = useContext(BackendPlaygroundContext);
  if (context === undefined) {
    throw new Error('useBackendPlayground must be used within a BackendPlaygroundProvider');
  }
  return context;
}
