'use client';

import { Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import {
  ResizablePanelGroup,
  ResizablePanel,
} from '@/components/ui/resizable';
import React from 'react';
import { SeleniumContentDisplay } from '@/components/languages/selenium/selenium-content-display';
import { SeleniumLearningRoadmap } from '@/components/languages/selenium/selenium-learning-roadmap';
import { InteractiveLoading } from '@/components/shared/interactive-loading';

function TopicPageContent() {
  const params = useParams();
  const { topic: topicSlug } = params;

  const language: Language | undefined = languages.find((lang) => lang.slug === 'selenium');
  if (!language) notFound();

  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === topicSlug);
  if (!selectedTopic) notFound();
  
  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
          {isLearningPlanTopic ? (
            <SeleniumLearningRoadmap language={language} />
          ) : (
            <SeleniumContentDisplay
              topic={selectedTopic}
              language={language}
            />
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default function SeleniumTopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
