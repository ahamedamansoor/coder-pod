
'use client';

import React from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound, useParams } from 'next/navigation';
import { ScssProvider } from './scss-context';
import { ScssLayoutProvider, useScssLayout } from './scss-layout-context';

function ScssTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useScssLayout();

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
        className="flex flex-col h-screen bg-background w-screen"
      >
        <MainHeader
          onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
          isEditorOpen={isEditorOpen}
          showWebPlaygroundButton={true}
        />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar>
            <TopicSidebar
              language={language}
              selectedTopicSlug={selectedTopicSlug}
            />
          </Sidebar>
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
