
'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import { GenericContentDisplay } from './generic-content-display';
import { useWebPlayground } from './web-playground-context';

// Lazy load all the topic components
const WhatIsSass = lazy(() => import('./scss-topics/what-is-sass'));
const SassInstallation = lazy(() => import('./scss-topics/sass-installation'));
const SassVariables = lazy(() => import('./scss-topics/sass-variables'));
const SassNesting = lazy(() => import('./scss-topics/sass-nesting'));
const SassImport = lazy(() => import('./scss-topics/sass-import'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-sass': WhatIsSass,
  'sass-installation': SassInstallation,
  'sass-variables': SassVariables,
  'sass-nesting': SassNesting,
  'sass-import': SassImport,
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

export function ScssContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];
  const { openWithContent } = useWebPlayground();

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={onOpenEditor}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenEditor={onOpenEditor} onOpenWebPlayground={openWithContent} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
