'use client';

import { InnovativeHeader } from '@/components/shared/layout/innovative-header';

export default function PrepareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <InnovativeHeader currentPage="prepare" />
      <main>
        {children}
      </main>
    </div>
  );
}
