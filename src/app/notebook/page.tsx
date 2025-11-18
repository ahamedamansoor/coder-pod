'use client';

import { useEffect } from 'react';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { useLoading } from '@/hooks/use-loading';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { TopicSidebar } from '@/components/topic-sidebar';
import { MainHeader } from '@/components/main-header';
import { languages } from '@/app/data';
import { NotebookPageContent } from '@/components/notebook-page-content';

export default function NotebookPage() {
  const { user, isUserLoading } = useUser();
  const { hideLoader } = useLoading();

  useEffect(() => {
    if (!isUserLoading) {
      hideLoader();
    }
  }, [isUserLoading, hideLoader]);

  // Use a default/placeholder language for the sidebar as it's required
  const placeholderLanguage = languages[0];

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
    <SidebarProvider>
      <div className="flex h-screen bg-background w-screen">
        <Sidebar>
            {/* The sidebar is present for layout consistency but can be minimal */}
            <TopicSidebar
                language={placeholderLanguage}
                selectedTopicSlug={null}
            />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <MainHeader
            onToggleEditor={() => {}}
            isEditorOpen={false}
            showCodeEditorButton={false}
            showWebPlaygroundButton={false}
          />
          <main className="flex-1 flex overflow-hidden">
            <NotebookPageContent />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
