'use client';

import { useState, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { useFrontendSystemDesignLayout } from '../frontend-system-design-layout-context';
import React from 'react';
import { FrontendSystemDesignContentDisplay } from '@/components/languages/frontend-system-design/frontend-system-design-content-display';
import { FrontendSystemDesignLearningRoadmap } from '@/components/languages/frontend-system-design/frontend-system-design-learning-roadmap';
import { InteractiveLoading } from '@/components/shared/interactive-loading';
import { getRouteParam } from '@/lib/params';

function TopicPageContent() {
  const params = useParams();
  const topicSlug = getRouteParam(params, 'topic');
  const { isEditorOpen } = useFrontendSystemDesignLayout();

  const language: Language | undefined = languages.find((lang) => lang.slug === 'frontend-system-design');
  if (!language) notFound();

  // Default to learning-plan if no topic slug is provided
  const finalTopicSlug = topicSlug || 'learning-plan';
  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === finalTopicSlug);
  if (!selectedTopic) notFound();

  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      {isLearningPlanTopic ? (
        <FrontendSystemDesignLearningRoadmap language={language} />
      ) : (
        <FrontendSystemDesignContentDisplay
          topic={selectedTopic}
          language={language}
        />
      )}
    </div>
  );
}

export default function FrontendSystemDesignTopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
