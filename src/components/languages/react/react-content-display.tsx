'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load all topic components
const WhatIsReact = React.lazy(() => import('./topics/what-is-react'));
const InstallationAndSetup = React.lazy(() => import('./topics/installation-and-setup'));
const FirstComponent = React.lazy(() => import('./topics/first-component'));

// Map slugs to their lazy-loaded components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-react': WhatIsReact,
  'installation-and-setup': InstallationAndSetup,
  'your-first-component': FirstComponent,
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

export function ReactContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponents[topic.slug];

  console.log('Topic slug:', topic.slug);
  console.log('CustomTopicComponent:', CustomTopicComponent);

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <div>Topic not found for slug: {topic.slug}</div>
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<LoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
}
