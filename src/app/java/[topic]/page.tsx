'use client';

import { useState, useCallback } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/app/data';
import { ContentDisplay } from '@/components/content-display';
import { CodeEditorSheet } from '@/components/code-editor-sheet';
import { ResizablePanel } from '@/components/ui/resizable-panel';
import { JavaLearningRoadmap } from '@/components/java-learning-roadmap';
import { useJava } from '../java-context';

interface TopicPageProps {
  isEditorOpen: boolean;
  setIsEditorOpen: (isOpen: boolean) => void;
}

export default function JavaTopicPage({
  isEditorOpen,
  setIsEditorOpen,
}: TopicPageProps) {
  const params = useParams();
  const { topic: topicSlug } = params;

  const [editorInitialCode, setEditorInitialCode] = useState<string | undefined>();
  const { completedTopics, handleToggleComplete } = useJava();

  const language: Language | undefined = languages.find((lang) => lang.slug === 'java');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();

  const handleOpenEditor = useCallback((code?: string) => {
    setEditorInitialCode(code);
    setIsEditorOpen(true);
  }, [setIsEditorOpen]);
  
  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 w-full">
        {isLearningPlanTopic ? (
          <JavaLearningRoadmap />
        ) : (
          <ContentDisplay
            topic={selectedTopic}
            language={language}
            onOpenEditor={handleOpenEditor}
          />
        )}
      </div>
      <ResizablePanel isOpen={isEditorOpen}>
        <CodeEditorSheet initialCode={editorInitialCode} />
      </ResizablePanel>
    </>
  );
}
