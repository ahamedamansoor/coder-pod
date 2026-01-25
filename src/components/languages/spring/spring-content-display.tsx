'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';

// Lazy load all the topic components
const SpringCoreOverview = lazy(() => import('./topics/spring-core-overview'));
const IocAndDependencyInjection = lazy(() => import('./topics/ioc-and-dependency-injection'));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'spring-modules-overview': SpringCoreOverview,
  'ioc-container-and-beans': IocAndDependencyInjection,
};


export function SpringContentDisplay({ 
  topic, 
  language,
}: {
  topic: Topic, 
  language: Language,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay
        topic={topic}
        language={language}
      >
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
}
