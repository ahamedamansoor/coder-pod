
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/shared/layout/main-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/app/data/index';
import { notFound, useParams } from 'next/navigation';
import { JavaProvider } from './java-context';
import { JavaLayoutProvider, useJavaLayout } from './java-layout-context';
import { useLoading } from '@/hooks/use-loading';

function JavaTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useJavaLayout();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'java');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'what-is-java';

  return (
    <SidebarProvider>
      <div
        id="java-topic-page"
        data-test="java-topic-page"
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


export default function JavaTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JavaProvider>
      <JavaLayoutProvider>
        <JavaTopicLayoutContent>
          {children}
        </JavaTopicLayoutContent>
      </JavaLayoutProvider>
    </JavaProvider>
  );
}
