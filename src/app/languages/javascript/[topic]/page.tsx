'use client';

import { useState, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { JavascriptContentDisplay } from '@/components/languages/javascript/javascript-content-display';
import { CodeEditorSheet } from '@/components/shared/playground/code-editor-sheet';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { JavascriptLearningRoadmap } from '@/components/languages/javascript/javascript-learning-roadmap';
import { useJavascriptLayout } from '../javascript-layout-context';
import { ImperativePanelHandle } from 'react-resizable-panels';
import React from 'react';
import { InteractiveLoading } from '@/components/shared/interactive-loading';
import { getRouteParam } from '@/lib/params';

function TopicPageContent() {
  const params = useParams();
  const topicSlug = getRouteParam(params, 'topic');
  const { isEditorOpen, setIsEditorOpen } = useJavascriptLayout();

  if (!topicSlug) {
    notFound();
  }

  const [editorInitialCode, setEditorInitialCode] = useState<string | undefined>();
  const ref = React.useRef<ImperativePanelHandle>(null);

  React.useEffect(() => {
    const panel = ref.current;
    if (panel) {
      if (isEditorOpen && panel.isCollapsed()) {
        panel.expand();
      } else if (!isEditorOpen && !panel.isCollapsed()) {
        panel.collapse();
      }
    }
  }, [isEditorOpen]);

  const language: Language | undefined = languages.find((lang) => lang.slug === 'javascript');
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
            <JavascriptLearningRoadmap language={language} />
          ) : (
            <JavascriptContentDisplay
              topic={selectedTopic}
              language={language}
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
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
