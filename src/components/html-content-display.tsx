
'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import { GenericContentDisplay } from './generic-content-display';

// Lazy load all the topic components. The import() must resolve to a module with a default export.
const HtmlIntroduction = lazy(() => import('./html-topics/html-introduction'));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-html': HtmlIntroduction,
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

  const renderTopicContent = () => {
    const Component = topicComponentMap[topic.slug];
    
    if (Component) {
      // For components that need onOpenEditor, we pass it. Others will just ignore it.
      return <Component onOpenEditor={onOpenEditor} />;
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
