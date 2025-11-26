'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/shared/layout/main-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/app/data';
import { useParams, notFound } from 'next/navigation';
import { RxjsProvider } from './rxjs-context';
import { RxjsLayoutProvider, useRxjsLayout } from './rxjs-layout-context';
import { useLoading } from '@/hooks/use-loading';

function RxjsLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useRxjsLayout();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'rxjs');
  if (!language) notFound();

  const selectedTopic = language.topics.find((t) => t.slug === params.topic);
  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-background">
        <Sidebar>
          <TopicSidebar language={language} selectedTopicSlug={selectedTopicSlug} />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <MainHeader
            onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
            isEditorOpen={isEditorOpen}
            showCodeEditorButton={false}
            showWebPlaygroundButton={true}
          />
          <main className="flex-1 overflow-y-auto">{children}</main>
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
