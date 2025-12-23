'use client';

import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { LearningPlanComponent } from './topics/learning-plan';
import { IntroductionComponent } from './topics/introduction';
import { TestDesignPrinciplesComponent } from './topics/test-design-principles';

// Map topic slugs to their corresponding components
const TopicComponentMap: Record<string, React.LazyExoticComponent<any> | React.ComponentType<any>> = {
  'learning-plan': LearningPlanComponent,
  'introduction': IntroductionComponent,
  'test-design-principles': TestDesignPrinciplesComponent,
  // Add more topic components as they are created
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-48 w-full" />
    </div>
  );
}

interface ManualTestingContentDisplayProps {
  topicSlug: string;
}

export function ManualTestingContentDisplay({ topicSlug }: ManualTestingContentDisplayProps) {
  const Component = TopicComponentMap[topicSlug];

  if (!Component) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Topic Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          The topic &quot;{topicSlug}&quot; is not yet available. Please check back later or select another topic.
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Component />
    </Suspense>
  );
}
