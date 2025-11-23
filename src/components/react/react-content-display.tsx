'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useReactPlayground } from './react-playground-context';

// Lazy load all the topic components
const WhatIsReact = lazy(() => import('./topics/what-is-react'));
const InstallationAndSetup = lazy(() => import('./topics/installation-and-setup'));
const YourFirstComponent = lazy(() => import('./topics/your-first-component'));
const JavaScriptInJSX = lazy(() => import('./topics/javascript-in-jsx'));
const ReactInterviewQuestions = lazy(() => import('./topics/react-interview-questions'));
const ReactVersionUpdates = lazy(() => import('./topics/react-version-updates'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-react': WhatIsReact,
  'installation-and-setup': InstallationAndSetup,
  'your-first-component': YourFirstComponent,
  'javascript-in-jsx': JavaScriptInJSX,
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
}: { 
  topic: Topic, 
  language: Language, 
}) {
  const { openWithContent } = useReactPlayground();
  
  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
