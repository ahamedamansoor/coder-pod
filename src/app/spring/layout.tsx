
'use client';

import React from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound, useParams } from 'next/navigation';
import { SpringProvider } from './spring-context';
import SpringTopicPage from './[topic]/page';

export default function SpringTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  
  const language = languages.find((lang) => lang.slug === 'spring');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);
  
  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';

  return (
    <SpringProvider>
      <SidebarProvider>
        <div
          id="spring-topic-page"
          data-test="spring-topic-page"
          className="flex flex-col h-screen bg-background w-screen"
        >
          <MainHeader
            onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
            isEditorOpen={isEditorOpen}
          />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar>
              <TopicSidebar
                language={language}
                selectedTopicSlug={selectedTopicSlug}
              />
            </Sidebar>
            <main className="flex-1 flex overflow-hidden">
              <SpringTopicPage
                isEditorOpen={isEditorOpen}
                setIsEditorOpen={setIsEditorOpen}
              />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </SpringProvider>
  );
}
