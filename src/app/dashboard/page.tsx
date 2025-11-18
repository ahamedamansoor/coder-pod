
'use client';

import { useEffect } from 'react';
import AppLayout from '@/components/app-layout';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { useLoading } from '@/hooks/use-loading';

export default function Dashboard() {
  const { user, isUserLoading } = useUser();
  const { hideLoader } = useLoading();

  useEffect(() => {
    if (!isUserLoading) {
      hideLoader();
    }
  }, [isUserLoading, hideLoader]);

  if (isUserLoading) {
    // This skeleton is shown *before* the main loader is hidden,
    // preventing a flash of unstyled content if the loader is slow to appear.
    return (
      <div className="flex flex-col min-h-screen bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Skeleton className="h-8 w-32" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
           <div className="text-center mb-12">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </main>
      </div>
    );
  }

  return <AppLayout />;
}
