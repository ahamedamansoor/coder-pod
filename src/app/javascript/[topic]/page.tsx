
'use client';

import { useState, useCallback, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/app/data';
import { JavascriptContentDisplay } from '@/components/javascript-content-display';
import { CodeEditorSheet } from '@/components/code-editor-sheet';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { JavascriptLearningRoadmap } from '@/components/javascript-learning-roadmap';
import { Skeleton } from '@/components/ui/skeleton';
import { useJavascriptLayout } from '../javascript-layout-context';
import { ImperativePanelHandle } from 'react-resizable-panels';
import React from 'react';

function TopicPageContent() {
  const params = useParams();
  const { topic: topicSlug } = params;
  const { isEditorOpen, setIsEditorOpen } = useJavascriptLayout();

  const [editorInitialCode, setEditorInitialCode] = useState<string | undefined>();
  const ref = React.useRef<ImperativePanelHandle>(null);

  React.useEffect(() => {
    const panel = ref.current;
    if (panel) {
      if (isEditorOpen && panel.getCollapsed()) {
        panel.expand();
      } else if (!isEditorOpen && !panel.getCollapsed()) {
        panel.collapse();
      }
    }
  }, [isEditorOpen]);

  const language: Language | undefined = languages.find((lang) => lang.slug === 'javascript');
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
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full">
          {isLearningPlanTopic ? (
            <JavascriptLearningRoadmap />
          ) : (
            <JavascriptContentDisplay
              topic={selectedTopic}
              language={language}
              onOpenEditor={handleOpenEditor}
            />
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

export default function JavascriptTopicPage() {
    return (
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <TopicPageContent />
        </Suspense>
    )
}
