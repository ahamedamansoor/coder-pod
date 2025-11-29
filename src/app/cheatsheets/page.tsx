'use client';

import { Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Home, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/shared/layout/logo';
import { ThemeToggle } from '@/components/shared/layout/theme-toggle';

// Lazy load the cheatsheet board content
const CheatsheetBoardContent = lazy(() => import('@/components/cheatsheets/cheatsheet-board'));

function CheatsheetBoardLoading() {
  return (
    <>
      {/* Content Loading */}
      <main className="flex-1 overflow-y-auto p-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-6 w-96 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default function CheatsheetBoardPage() {
  return (
    <div 
      style={{ width: '100vw', height: '100vh' }}
      className="flex flex-col overflow-hidden bg-background relative"
    >
      {/* Animated Background for entire page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Blobs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400 dark:bg-cyan-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-15 animate-blob animation-delay-2000"></div>
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-cyan-50/40 dark:from-blue-950/30 dark:via-purple-950/15 dark:to-cyan-950/30"></div>
      </div>
      
      {/* Header */}
      <header className="border-b border-slate-200/50 dark:border-slate-800/50 flex-shrink-0 sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl relative">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <span>/</span>
              <BookOpen className="h-4 w-4" />
              <span>Cheat Sheets</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button
                id="home-btn"
                data-testid="home-btn"
                variant="outline"
                size="sm"
                className="gap-2 text-sm font-medium"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Suspense fallback={<CheatsheetBoardLoading />}>
        <CheatsheetBoardContent />
      </Suspense>
    </div>
  );
}
