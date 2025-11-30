'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { DsaContentDisplay } from '@/components/languages/dsa/dsa-content-display';
import { DsaLearningRoadmap } from '@/components/languages/dsa/dsa-learning-roadmap';
import { CodeEditorSheet } from '@/components/shared/playground/code-editor-sheet';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { useDsaLayout } from '../dsa-layout-context';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { InteractiveLoading } from '@/components/shared/interactive-loading';

function DsaTopicContent() {
  const params = useParams();
  const { topic: topicSlug } = params;
  const { isEditorOpen, setIsEditorOpen } = useDsaLayout();
  const [editorInitialCode, setEditorInitialCode] = useState<string | undefined>();
  const ref = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    if (isEditorOpen && panel.isCollapsed()) {
      panel.expand();
    } else if (!isEditorOpen && !panel.isCollapsed()) {
      panel.collapse();
    }
  }, [isEditorOpen]);

  const language: Language | undefined = languages.find((lang) => lang.slug === 'dsa');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
          {isLearningPlanTopic ? (
            <DsaLearningRoadmap language={language} />
          ) : (
            <DsaContentDisplay topic={selectedTopic} language={language} />
          )}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        ref={ref}
        collapsible
        collapsedSize={0}
        defaultSize={0}
        minSize={25}
        maxSize={40}
        onCollapse={() => setIsEditorOpen(false)}
        className="data-[collapsed=true]:hidden"
      >
        <CodeEditorSheet
          initialCode={editorInitialCode}
          onClose={handleCloseEditor}
          language={language.name}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default function DsaTopicPage() {
  return (
    <Suspense fallback={<InteractiveLoading />}>
      <DsaTopicContent />
    </Suspense>
  );
}
