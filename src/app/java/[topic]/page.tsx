
'use client';

import { useState, useCallback, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/app/data';
import { JavaContentDisplay } from '@/components/java-content-display';
import { CodeEditorSheet } from '@/components/code-editor-sheet';
import { ResizablePanel } from '@/components/ui/resizable-panel';
import { JavaLearningRoadmap } from '@/components/java-learning-roadmap';
import { Skeleton } from '@/components/ui/skeleton';
import { useJavaLayout } from '../java-layout-context';

function TopicPageContent() {
  const params = useParams();
  const { topic: topicSlug } = params;
  const { isEditorOpen, setIsEditorOpen } = useJavaLayout();

  const [editorInitialCode, setEditorInitialCode] = useState<string | undefined>();

  const language: Language | undefined = languages.find((lang) => lang.slug === 'java');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();

  const handleOpenEditor = useCallback((code?: string) => {
    setEditorInitialCode(code);
    setIsEditorOpen(true);
  }, [setIsEditorOpen]);
  
  const handleCloseEditor = useCallback(() => {
    setIsEditorOpen(false);
  }, [setIsEditorOpen]);
  
  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        {isLearningPlanTopic ? (
           <JavaLearningRoadmap/>
        ) : (
          <JavaContentDisplay
            topic={selectedTopic}
            language={language}
            onOpenEditor={handleOpenEditor}
          />
        )}
      </div>
      <ResizablePanel isOpen={isEditorOpen}>
        <CodeEditorSheet
          initialCode={editorInitialCode}
          onClose={handleCloseEditor}
          language={language.name}
        />
      </ResizablePanel>
    </>
  );
}

export default function JavaTopicPage() {
    return (
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <TopicPageContent />
        </Suspense>
    )
}
