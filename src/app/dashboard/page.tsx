'use client';

import { Suspense, useEffect } from 'react';
import { AppLayout } from '@/components/shared/layout/app-layout';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { useLoading } from '@/hooks/use-loading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { languages } from '@/app/data';

function DashboardContent() {
  const { user, isUserLoading } = useUser();
  const { hideLoader } = useLoading();

  useEffect(() => {
    if (!isUserLoading) {
      hideLoader();
    }
  }, [isUserLoading, hideLoader]);

  if (isUserLoading) {
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

  return (
    <AppLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome to CoderPod!</h1>
        <p className="text-lg text-muted-foreground">Your personal AI-powered coding tutor.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {languages.map((lang) => (
          <Card key={lang.slug}>
            <CardHeader>
              <CardTitle>{lang.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{lang.description}</p>
              <Button asChild>
                <Link href={`/${lang.slug}`}>{lang.name} Learning Path</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
