
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { notFound, useParams, useRouter } from 'next/navigation';
import { PlaywrightProvider } from './playwright-context';
import { PlaywrightLayoutProvider, usePlaywrightLayout } from './playwright-layout-context';
import { useLoading } from '@/hooks/use-loading';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { getRouteParam } from '@/lib/params';

function PlaywrightTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const { isEditorOpen, setIsEditorOpen } = usePlaywrightLayout();
  const { hideLoader } = useLoading();
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'playwright');
  if (!language) {
    notFound();
  }
  const topicSlug = getRouteParam(params, 'topic');
  const selectedTopic = language.topics.find((t) => t.slug === topicSlug);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SidebarProvider>
      <div
        id="playwright-topic-page"
        data-test="playwright-topic-page"
        className="flex h-screen bg-background w-screen"
      >
        <Sidebar>
          <TopicSidebar
            language={language}
            selectedTopicSlug={selectedTopicSlug}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <InnovativeHeader
            currentPage="learning"
            user={user}
            onLogout={handleLogout}
            showSidebarTrigger={true}
            showLanguageSwitcher={true}
          />
          <main className="flex-1 flex overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


export default function PlaywrightTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlaywrightProvider>
      <PlaywrightLayoutProvider>
        <PlaywrightTopicLayoutContent>
          {children}
        </PlaywrightTopicLayoutContent>
      </PlaywrightLayoutProvider>
    </PlaywrightProvider>
  );
}
