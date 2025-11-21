
'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from './generic-content-display';
import React from 'react';
import { Skeleton } from './ui/skeleton';
import { useWebPlayground } from './web-playground-context';

const TopicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-css': React.lazy(() => import('./css-topics/introduction-to-css')),
  'css-syntax-and-selectors': React.lazy(() => import('./css-topics/css-syntax-and-selectors')),
  'css-specificity': React.lazy(() => import('./css-topics/css-specificity')),
  'css-units': React.lazy(() => import('./css-topics/css-units')),
  'css-colors': React.lazy(() => import('./css-topics/css-colors')),
  'css-box-model': React.lazy(() => import('./css-topics/css-box-model')),
  'css-typography': React.lazy(() => import('./css-topics/css-typography')),
  'css-positioning': React.lazy(() => import('./css-topics/css-positioning')),
  'css-flexbox': React.lazy(() => import('./css-topics/css-flexbox')),
  'css-grid': React.lazy(() => import('./css-topics/css-grid')),
  'css-pseudo-classes': React.lazy(() => import('./css-topics/css-pseudo-classes')),
  'css-pseudo-elements': React.lazy(() => import('./css-topics/css-pseudo-elements')),
  'css-transitions': React.lazy(() => import('./css-topics/css-transitions')),
  'css-animations': React.lazy(() => import('./css-topics/css-animations')),
  'css-variables': React.lazy(() => import('./css-topics/css-variables')),
  'css-responsive-design': React.lazy(() => import('./css-topics/css-responsive-design')),
  'css-combinators': React.lazy(() => import('./css-topics/css-combinators')),
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

export function CssContentDisplay({ 
  topic, 
  language, 
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {
  const { openWithContent } = useWebPlayground();
  const CustomTopicComponent = TopicComponentMap[topic.slug];

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={openWithContent}
    >
      <React.Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenWebPlayground={openWithContent} />
        ) : null}
      </React.Suspense>
    </GenericContentDisplay>
  );
}
