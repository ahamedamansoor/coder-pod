
'use client';

import { Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/app/data';
import {
  ResizablePanelGroup,
  ResizablePanel,
} from '@/components/ui/resizable';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';
import { CssContentDisplay } from '@/components/css-content-display';
import { CssLearningRoadmap } from '@/components/css-learning-roadmap';

function TopicPageContent() {
  const params = useParams();
  const { topic: topicSlug } = params;

  const language: Language | undefined = languages.find((lang) => lang.slug === 'css');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();
  
  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full">
          {isLearningPlanTopic ? (
            <CssLearningRoadmap />
          ) : (
            <CssContentDisplay
              topic={selectedTopic}
              language={language}
              onOpenEditor={() => {}}
            />
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default function CssTopicPage() {
    return (
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <TopicPageContent />
        </Suspense>
    )
}
