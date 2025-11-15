
'use client';

import { useState, useCallback } from 'react';
import { notFound, useRouter, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/app/data';
import { TopicSidebar } from '@/components/topic-sidebar';
import { ContentDisplay } from '@/components/content-display';
import { MainHeader } from '@/components/main-header';
import { CodeEditorSheet } from '@/components/code-editor-sheet';
import { Sidebar, SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { ResizablePanel } from '@/components/ui/resizable-panel';

export default function JavaTopicPage() {
  const router = useRouter();
  const params = useParams();
  const { topic: topicSlug } = params;

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorInitialCode, setEditorInitialCode] = useState<string | undefined>();

  const language: Language | undefined = languages.find(
    (lang) => lang.slug === 'java'
  );

  if (!language) {
    notFound();
  }

  const selectedTopic: Topic | undefined = language.topics.find(
    (t) => t.slug === topicSlug
  );

  if (!selectedTopic) {
    notFound();
  }

  const handleTopicSelect = (slug: string) => {
    router.push(`/java/${slug}`);
  };
  
  const handleOpenEditor = useCallback((code?: string) => {
    setEditorInitialCode(code);
    setIsEditorOpen(true);
  }, []);

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar>
          <TopicSidebar
            language={language}
            selectedTopicSlug={selectedTopic.slug}
            onTopicSelect={handleTopicSelect}
          />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <MainHeader
            onToggleEditor={() => setIsEditorOpen(prev => !prev)}
            isEditorOpen={isEditorOpen}
          />
          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              <ContentDisplay topic={selectedTopic} language={language} onOpenEditor={handleOpenEditor} />
            </div>
            <ResizablePanel isOpen={isEditorOpen}>
              <CodeEditorSheet initialCode={editorInitialCode} />
            </ResizablePanel>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
