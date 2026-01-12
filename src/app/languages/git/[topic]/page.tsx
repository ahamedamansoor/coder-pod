'use client';

import { useState, Suspense } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, type Language, type Topic } from '@/data/languages';
import { useGitLayout } from '../git-layout-context';
import React from 'react';
import { GitContentDisplay } from '@/components/languages/git/git-content-display';
import { GitLearningRoadmap } from '@/components/languages/git/git-learning-roadmap';
import { InteractiveLoading } from '@/components/shared/interactive-loading';
import { getRouteParam } from '@/lib/params';

function TopicPageContent() {
  const params = useParams();
  const topicSlug = getRouteParam(params, 'topic');
  const { isEditorOpen } = useGitLayout();

  const language: Language | undefined = languages.find((lang) => lang.slug === 'git');
  if (!language) notFound();

  // Default to learning-plan if no topic slug is provided
  const finalTopicSlug = topicSlug || 'learning-plan';
  const selectedTopic: Topic | undefined = language.topics.find((t) => t.slug === finalTopicSlug);
  if (!selectedTopic) notFound();

  const isLearningPlanTopic = selectedTopic.slug === 'learning-plan';

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 h-full bg-background">
      {isLearningPlanTopic ? (
        <GitLearningRoadmap language={language} />
      ) : (
        <GitContentDisplay
          topic={selectedTopic}
          language={language}
        />
      )}
    </div>
  );
}

export default function GitTopicPage() {
    return (
        <Suspense fallback={<InteractiveLoading />}>
            <TopicPageContent />
        </Suspense>
    )
}
