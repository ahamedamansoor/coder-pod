'use client';

import React from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound, useParams } from 'next/navigation';
import { JavaProvider } from './java-context';

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
  
  // A topic might not be found on initial load or for the main dashboard.
  // We don't want to 404 in those cases.
  const selectedTopicSlug = selectedTopic ? selectedTopic.slug : 'learning-plan';


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
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, {
                    isEditorOpen,
                    setIsEditorOpen,
                  } as any);
                }
                return child;
              })}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </JavaProvider>
  );
}
