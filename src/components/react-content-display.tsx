'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from './generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';

// Lazy load all the topic components
const WhatIsReact = lazy(() => import('./react-topics/what-is-react'));
const ReactInterviewQuestions = lazy(() => import('./react-topics/react-interview-questions'));
const ReactVersionUpdates = lazy(() => import('./react-topics/react-version-updates'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-react': WhatIsReact,
  'interview-questions': ReactInterviewQuestions,
  'react-version-updates': ReactVersionUpdates,
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

export function ReactContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {
  
  const CustomTopicComponent = topicComponentMap[topic.slug];

  // If we have a custom full-page component, render it directly.
  const fullPageTopics = ['react-version-updates', 'interview-questions', 'what-is-react'];
  if (fullPageTopics.includes(topic.slug) && CustomTopicComponent) {
    return (
      <Suspense fallback={<LoadingSkeleton />}>
        <CustomTopicComponent onOpenEditor={onOpenEditor} />
      </Suspense>
    );
  }

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
