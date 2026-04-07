'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/data/languages';
import { useParams, notFound, useRouter } from 'next/navigation';
import { RxjsProvider } from './rxjs-context';
import { RxjsLayoutProvider, useRxjsLayout } from './rxjs-layout-context';
import { useLoading } from '@/hooks/use-loading';
import { useUser } from '@/hooks/use-auth-compat';
import { useSupabaseAuth } from '@/hooks/use-auth-compat';
import { getRouteParam } from '@/lib/params';

function RxjsLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const { isEditorOpen, setIsEditorOpen } = useRxjsLayout();
  const { hideLoader } = useLoading();
  const { user } = useUser();
  const { signOut } = useSupabaseAuth();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const language = languages.find((lang) => lang.slug === 'rxjs');
  if (!language) notFound();

  const topicSlug = getRouteParam(params, 'topic');
  const selectedTopic = language.topics.find((t) => t.slug === topicSlug);
  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-background">
        <Sidebar>
          <TopicSidebar language={language} selectedTopicSlug={selectedTopicSlug} />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <InnovativeHeader
            currentPage="learning"
            user={user}
            onLogout={handleLogout}
            showSidebarTrigger={true}
            showLanguageSwitcher={true}
          />
          <main className="flex-1 overflow-y-auto bg-background">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default function RxjsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RxjsProvider>
      <RxjsLayoutProvider>
        <RxjsLayoutContent>{children}</RxjsLayoutContent>
      </RxjsLayoutProvider>
    </RxjsProvider>
  );
}
