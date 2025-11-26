'use client';

import type { Language, Topic } from '@/app/data';
import React, { Suspense } from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { Skeleton } from '@/components/ui/skeleton';

const RxjsWhatIsReactiveProgramming = React.lazy(() => import('./topics/rxjs-what-is-reactive-programming'));
const RxjsUnderstandingObservables = React.lazy(() => import('./topics/rxjs-understanding-observables'));
const RxjsObserversSubscriptions = React.lazy(() => import('./topics/rxjs-observers-subscriptions'));
const RxjsHotColdObservables = React.lazy(() => import('./topics/rxjs-hot-cold-observables'));
const RxjsUnderstandingStreams = React.lazy(() => import('./topics/rxjs-understanding-streams'));
const RxjsPushPullSystems = React.lazy(() => import('./topics/rxjs-push-pull-systems'));
const RxjsLazyVsEager = React.lazy(() => import('./topics/rxjs-lazy-vs-eager'));

const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'rxjs-core-concepts-what-is-reactive-programming': RxjsWhatIsReactiveProgramming,
  'rxjs-core-concepts-understanding-observables': RxjsUnderstandingObservables,
  'rxjs-core-concepts-observers-and-subscriptions': RxjsObserversSubscriptions,
  'rxjs-core-concepts-hot-vs-cold-observables': RxjsHotColdObservables,
  'rxjs-core-concepts-understanding-streams': RxjsUnderstandingStreams,
  'rxjs-core-concepts-push-vs-pull-systems': RxjsPushPullSystems,
  'rxjs-core-concepts-lazy-vs-eager-evaluation': RxjsLazyVsEager,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function RxjsContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponents[topic.slug];

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
