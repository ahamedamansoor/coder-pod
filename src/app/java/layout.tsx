'use client';

import React from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound, useParams } from 'next/navigation';
import { JavaProvider } from './java-context';
import JavaTopicPage from './[topic]/page';

export default function JavaTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  
  const language = languages.find((lang) => lang.slug === 'java');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);
  
  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'what-is-java';

  // The children prop is not used here because we need to explicitly pass props
  // to the JavaTopicPage component. This avoids the complexity of React.cloneElement.

  return (
    <JavaProvider>
      <SidebarProvider>
        <div
          id="java-topic-page"
          data-test="java-topic-page"
          className="flex flex-col h-screen bg-background"
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
              <JavaTopicPage
                isEditorOpen={isEditorOpen}
                setIsEditorOpen={setIsEditorOpen}
              />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </JavaProvider>
  );
}
