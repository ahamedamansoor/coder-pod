'use client';

import { ReactNode } from 'react';
import { NodejsLayoutProvider } from './nodejs-layout-context';

interface NodejsLayoutProps {
  children: ReactNode;
}

export default function NodejsLayout({ children }: NodejsLayoutProps) {
  return (
    <NodejsLayoutProvider>
      <div className="min-h-screen bg-background">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </NodejsLayoutProvider>
  );
}
