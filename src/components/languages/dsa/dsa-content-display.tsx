'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load topic components
const BigONotation = lazy(() => import('./topics/complexity-analysis-big-o'));
const DijkstraAlgorithm = lazy(() => import('./topics/graph-algorithms-dijkstra'));
const DiagnosticPage = lazy(() => import('./topics/diagnostic'));

// Map topic slugs to their components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'complexity-analysis-dsa-time-complexity-big-o-notation-fundamentals': BigONotation,
  'graph-algorithms-dsa-shortest-path-algorithms-dijkstra-s-algorithm': DijkstraAlgorithm,
  // Test diagnostic on the first array topic
  'arrays-dsa-basic-operations-find-largest-smallest-element': DiagnosticPage,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function DsaContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponentMap[topic.slug];

  // Debug log to verify slug matching
  if (process.env.NODE_ENV === 'development') {
    console.log('DSA Topic Slug:', topic.slug);
    console.log('Has Custom Component:', !!CustomTopicComponent);
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      {CustomTopicComponent ? (
        <Suspense fallback={<LoadingSkeleton />}>
          <CustomTopicComponent />
        </Suspense>
      ) : null}
    </GenericContentDisplay>
  );
}
