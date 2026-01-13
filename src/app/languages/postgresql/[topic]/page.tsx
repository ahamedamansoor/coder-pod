'use client';

import { useState, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { usePostgresqlLayout } from '../postgresql-layout-context';
import React from 'react';
import { PostgresqlContentDisplay } from '@/components/languages/postgresql/postgresql-content-display';
import { PostgresqlLearningRoadmap } from '@/components/languages/postgresql/postgresql-learning-roadmap';
import { InteractiveLoading } from '@/components/shared/interactive-loading';
import { getRouteParam } from '@/lib/params';

function TopicPageContent() {
  const params = useParams();
  const topicSlug = getRouteParam(params, 'topic');
  const { isEditorOpen } = usePostgresqlLayout();

  const language: Language | undefined = languages.find((lang) => lang.slug === 'postgresql');
  if (!language) notFound();

  // Default to learning-plan if no topic slug is provided
  const finalTopicSlug = topicSlug || 'learning-plan';
  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === finalTopicSlug);
  if (!selectedTopic) notFound();

  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      {isLearningPlanTopic ? (
        <PostgresqlLearningRoadmap language={language} />
      ) : (
        <PostgresqlContentDisplay
          topic={selectedTopic}
          language={language}
        />
      )}
    </div>
  );
}

export default function PostgresqlTopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
