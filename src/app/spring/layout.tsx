
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data/index';
import { notFound, useParams } from 'next/navigation';
import { SpringProvider } from './spring-context';
import { SpringLayoutProvider, useSpringLayout } from './spring-layout-context';
import { useLoading } from '@/hooks/use-loading';

function SpringTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useSpringLayout();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'spring');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="spring-topic-page"
        data-test="spring-topic-page"
        className="flex h-screen bg-background w-screen"
      >
        <Sidebar>
          <TopicSidebar
            language={language}
            selectedTopicSlug={selectedTopicSlug}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <MainHeader
            onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
            isEditorOpen={isEditorOpen}
            showCodeEditorButton={true}
            showWebPlaygroundButton={false}
          />
          <main className="flex-1 flex overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


export default function SpringTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SpringProvider>
      <SpringLayoutProvider>
        <SpringTopicLayoutContent>
          {children}
        </SpringTopicLayoutContent>
      </SpringLayoutProvider>
    </SpringProvider>
  );
}
