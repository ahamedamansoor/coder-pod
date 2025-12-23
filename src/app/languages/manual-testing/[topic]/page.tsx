'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { languages } from '@/data/languages';
import { ManualTestingContentDisplay } from '@/components/languages/manual-testing/manual-testing-content-display';

export default function ManualTestingTopicPage() {
  const params = useParams();
  const topicSlug = params.topic as string;

  // Find the manual testing language
  const language = languages.find((lang) => lang.slug === 'manual-testing');
  
  if (!language) {
    notFound();
  }

  // Check if the topic exists
  const topic = language.topics.find((t) => t.slug === topicSlug);
  
  if (!topic && topicSlug !== 'learning-plan') {
    notFound();
  }

  // If no topic is specified, redirect to introduction
  if (!topicSlug || topicSlug === 'learning-plan') {
    return <ManualTestingContentDisplay topicSlug="introduction" />;
  }

  return <ManualTestingContentDisplay topicSlug={topicSlug} />;
}
