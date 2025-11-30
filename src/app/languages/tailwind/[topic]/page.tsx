
'use client';

import { Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import {
  ResizablePanelGroup,
  ResizablePanel,
} from '@/components/ui/resizable';
import React from 'react';
import { TailwindContentDisplay } from '@/components/languages/tailwind/tailwind-content-display';
import { TailwindLearningRoadmap } from '@/components/languages/tailwind/tailwind-learning-roadmap';
import { InteractiveLoading } from '@/components/shared/interactive-loading';

function TopicPageContent() {
  const params = useParams();
  const { topic: topicSlug } = params;

  const language: Language | undefined = languages.find((lang) => lang.slug === 'tailwind');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();
  
  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
          {isLearningPlanTopic ? (
            <TailwindLearningRoadmap language={language} />
          ) : (
            <TailwindContentDisplay
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

export default function TailwindTopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
