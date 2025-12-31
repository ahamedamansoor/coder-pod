'use client';

import { Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { ReactContentDisplay } from '@/components/languages/react/react-content-display';
import {
  ResizablePanelGroup,
  ResizablePanel,
} from '@/components/ui/resizable';
import { ReactLearningRoadmap } from '@/components/languages/react/react-learning-roadmap';
import { useReactLayout } from '../react-layout-context';
import { ImperativePanelHandle } from 'react-resizable-panels';
import React from 'react';
import { InteractiveLoading } from '@/components/shared/interactive-loading';
import { getRouteParam } from '@/lib/params';

function TopicPageContent() {
  const params = useParams();
  const topicSlug = getRouteParam(params, 'topic');
  if (!topicSlug) {
    notFound();
  }

  const language: Language | undefined = languages.find((lang) => lang.slug === 'react');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();
  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
          {isLearningPlanTopic ? (
            <ReactLearningRoadmap language={language} />
          ) : (
            <ReactContentDisplay
              topic={selectedTopic}
              language={language}
            />
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default function ReactTopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
