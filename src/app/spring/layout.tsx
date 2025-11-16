
'use client';

import React from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound, useParams } from 'next/navigation';
import { SpringProvider } from './spring-context';
import { SpringLayoutProvider, useSpringLayout } from './spring-layout-context';

function SpringTopicLayoutContent({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { isEditorOpen, setIsEditorOpen } = useSpringLayout();

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
        className="flex flex-col h-screen bg-background w-screen"
      >
        <MainHeader
          onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
          isEditorOpen={isEditorOpen}
          showWebPlaygroundButton={false}
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
