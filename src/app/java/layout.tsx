'use client';

import { useState, useCallback } from 'react';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from '@/components/main-header';
import { TopicSidebar } from '@/components/topic-sidebar';
import { languages } from '@/app/data';
import { notFound } from 'next/navigation';

export default function JavaTopicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { topic: string };
}) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [completedTopics, setCompletedTopics] = useState(new Set<string>());

  const language = languages.find((lang) => lang.slug === 'java');
  if (!language) {
    notFound();
  }
  const selectedTopic = language.topics.find((t) => t.slug === params.topic);
  if (!selectedTopic) {
    notFound();
  }

  const handleToggleComplete = useCallback((topicSlug: string) => {
    setCompletedTopics((prev) => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(topicSlug)) {
        newCompleted.delete(topicSlug);
      } else {
        newCompleted.add(topicSlug);
      }
      return newCompleted;
    });
  }, []);

  // Pass state and handlers to children via React.cloneElement
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isEditorOpen,
        setIsEditorOpen,
        completedTopics,
        handleToggleComplete,
      } as any);
    }
    return child;
  });

  return (
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
              selectedTopicSlug={selectedTopic.slug}
              completedTopics={completedTopics}
            />
          </Sidebar>
          <main className="flex-1 flex overflow-hidden">
            {childrenWithProps}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
