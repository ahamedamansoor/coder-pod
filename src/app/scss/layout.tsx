
'use client';

import React, { useEffect } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/shared/layout/main-header';
import { TopicSidebar } from '@/components/shared/topic-sidebar';
import { languages } from '@/app/data/index';
import { notFound, useParams } from 'next/navigation';
import { ScssProvider } from './scss-context';
import { ScssLayoutProvider, useScssLayout } from './scss-layout-context';
import { useLoading } from '@/hooks/use-loading';

function ScssTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useScssLayout();
  const { hideLoader } = useLoading();

  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  const language = languages.find((lang) => lang.slug === 'scss');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);

  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SidebarProvider>
      <div
        id="scss-topic-page"
        data-test="scss-topic-page"
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


export default function ScssTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScssProvider>
      <ScssLayoutProvider>
        <ScssTopicLayoutContent>
          {children}
        </ScssTopicLayoutContent>
      </ScssLayoutProvider>
    </ScssProvider>
  );
}
