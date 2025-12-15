'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AngularPlaygroundFile {
  name: string;
  content: string;
}

export interface AngularPlaygroundData {
  title?: string;
  description?: string;
  stackblitzProjectId?: string; // For embedding existing StackBlitz projects
  files: {
    [key: string]: string; // file path -> content
  };
  dependencies?: {
    [key: string]: string; // package -> version
  };
  template?: 'angular-cli' | 'node'; // default: 'angular-cli'
  openFile?: string; // which file to open by default
}

interface AngularPlaygroundContextType {
  isOpen: boolean;
  playgroundData: AngularPlaygroundData | null;
  openPlayground: (data: AngularPlaygroundData) => void;
  closePlayground: () => void;
  openInStackBlitz: (data: AngularPlaygroundData) => void;
}

const AngularPlaygroundContext = createContext<AngularPlaygroundContextType | undefined>(undefined);

export function AngularPlaygroundProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [playgroundData, setPlaygroundData] = useState<AngularPlaygroundData | null>(null);

  const openPlayground = (data: AngularPlaygroundData) => {
    setPlaygroundData(data);
    setIsOpen(true);
  };

  const closePlayground = () => {
    setIsOpen(false);
    // Keep data for smooth closing animation
    setTimeout(() => setPlaygroundData(null), 300);
  };

  const openInStackBlitz = (data: AngularPlaygroundData) => {
    // Import StackBlitz SDK dynamically
    import('@stackblitz/sdk').then((sdk) => {
      // Create project files structure
      const project = {
        title: data.title || 'Angular Playground',
        description: data.description || 'Angular example from Coder Pod',
        template: data.template || ('angular-cli' as const),
        files: {
          // Add default Angular files if not provided
          'src/index.html': data.files['src/index.html'] || `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,
          'src/main.ts': data.files['src/main.ts'] || `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));`,
          'src/styles.css': data.files['src/styles.css'] || `/* Global Styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
}`,
          ...data.files, // Override with custom files
        },
        dependencies: {
          '@angular/animations': '^17.0.0',
          '@angular/common': '^17.0.0',
          '@angular/compiler': '^17.0.0',
          '@angular/core': '^17.0.0',
          '@angular/forms': '^17.0.0',
          '@angular/platform-browser': '^17.0.0',
          '@angular/platform-browser-dynamic': '^17.0.0',
          '@angular/router': '^17.0.0',
          'rxjs': '~7.8.0',
          'tslib': '^2.3.0',
          'zone.js': '~0.14.0',
          ...data.dependencies, // Add custom dependencies
        },
      };

      // Open in StackBlitz
      sdk.default.openProject(project, {
        openFile: data.openFile || 'src/app/app.component.ts',
        newWindow: true,
      });
    });
  };

  return (
    <AngularPlaygroundContext.Provider
      value={{
        isOpen,
        playgroundData,
        openPlayground,
        closePlayground,
        openInStackBlitz,
      }}
    >
      {children}
    </AngularPlaygroundContext.Provider>
  );
}

export function useAngularPlayground() {
  const context = useContext(AngularPlaygroundContext);
  if (context === undefined) {
    throw new Error('useAngularPlayground must be used within an AngularPlaygroundProvider');
  }
  return context;
}
