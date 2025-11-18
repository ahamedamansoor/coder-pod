
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data/index';
import { notFound, useParams } from 'next/navigation';
import { ReactProvider } from './react-context';
import { ReactLayoutProvider, useReactLayout } from './react-layout-context';
import { useLoading } from '@/hooks/use-loading';

function ReactTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useReactLayout();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'react');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="react-topic-page"
        data-test="react-topic-page"
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
            showCodeEditorButton={false}
            showWebPlaygroundButton={true}
          />
          <main className="flex-1 flex overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


export default function ReactTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactProvider>
      <ReactLayoutProvider>
        <ReactTopicLayoutContent>
          {children}
        </ReactTopicLayoutContent>
      </ReactLayoutProvider>
    </ReactProvider>
  );
}
