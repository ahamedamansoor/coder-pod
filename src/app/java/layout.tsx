'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound, useParams, useRouter } from 'next/navigation';
import { JavaProvider } from './java-context';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

export default function JavaTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const language = languages.find((lang) => lang.slug === 'java');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);
  
  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  if (isUserLoading || !user) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-32" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-24" />
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <div className="hidden md:block w-64 border-r">
            <div className="p-4 space-y-4">
              <Skeleton className="h-8 w-40 mb-4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
          <main className="flex-1 p-8">
            <Skeleton className="h-12 w-1/2 mb-4" />
            <Skeleton className="h-6 w-3/4 mb-8" />
            <Skeleton className="h-48 w-full" />
          </main>
        </div>
      </div>
    );
  }

  return (
    <JavaProvider>
      <SidebarProvider>
        <div
          id="java-topic-page"
          data-test="java-topic-page"
          className="flex flex-col h-screen bg-background"
        >
          <MainHeader
            onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
            isEditorOpen={isEditorOpen}
          />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar>
              <TopicSidebar
                language={language}
                selectedTopicSlug={selectedTopicSlug}
              />
            </Sidebar>
            <main className="flex-1 flex overflow-hidden">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, {
                    isEditorOpen,
                    setIsEditorOpen,
                  } as any);
                }
                return child;
              })}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </JavaProvider>
  );
}