
'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import { GenericContentDisplay } from './generic-content-display';
import { useWebPlayground } from './web-playground-context';

// Lazy load all the topic components.
const HtmlIntroduction = lazy(() => import('./html-topics/html-introduction').then(module => ({ default: module.default })));
const DocumentStructure = lazy(() => import('./html-topics/document-structure').then(module => ({ default: module.default })));
const HtmlAttributes = lazy(() => import('./html-topics/html-attributes').then(module => ({ default: module.default })));
const HtmlElementsAndTags = lazy(() => import('./html-topics/html-elements-and-tags').then(module => ({ default: module.default })));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-html': HtmlIntroduction,
  'document-structure': DocumentStructure,
  'html-attributes': HtmlAttributes,
  'html-elements-and-tags': HtmlElementsAndTags,
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

export function HtmlContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {
  const { openWithContent } = useWebPlayground();

  const renderTopicContent = () => {
    const Component = topicComponentMap[topic.slug];
    
    if (Component) {
      // Pass both editor functions; the component will decide which one to use.
      return <Component onOpenEditor={onOpenEditor} onOpenWebPlayground={openWithContent} />;
    }

    // Fallback for topics without a custom component
    return <GenericContentDisplay topic={topic} language={language} onOpenEditor={onOpenEditor} />;
  };

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      {renderTopicContent()}
    </Suspense>
  );
}
