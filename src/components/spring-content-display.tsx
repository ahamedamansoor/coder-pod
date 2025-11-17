'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from './generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';

// Lazy load all the topic components
const SpringCoreOverview = lazy(() => import('./spring-topics/spring-core-overview'));
const IocAndDependencyInjection = lazy(() => import('./spring-topics/ioc-and-dependency-injection'));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'spring-core-overview': SpringCoreOverview,
  'ioc-and-dependency-injection': IocAndDependencyInjection,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function SpringContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={onOpenEditor}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenEditor={onOpenEditor} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
