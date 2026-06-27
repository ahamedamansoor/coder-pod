'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';

// Lazy load all topic components
const WhatIsVue = React.lazy(() => import('./topics/what-is-vue'));
const InstallationAndSetup = React.lazy(() => import('./topics/installation-and-setup'));
const TemplateSyntax = React.lazy(() => import('./topics/template-syntax'));
const ReactivityFundamentals = React.lazy(() => import('./topics/reactivity-fundamentals'));
const VueInterviewQuestions = React.lazy(() => import('./topics/vue-interview-questions'));

// Map slugs to their lazy-loaded components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-vue': WhatIsVue,
  'installation-and-setup': InstallationAndSetup,
  'template-syntax': TemplateSyntax,
  'reactivity-fundamentals': ReactivityFundamentals,
  'interview-questions': VueInterviewQuestions,
};

export function VueContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponents[topic.slug];

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
}
