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
const RxjsSubscriptionCleanup = React.lazy(() => import('./topics/rxjs-subscription-cleanup'));
const RxjsSubscribeAndUnsubscribe = React.lazy(() => import('./topics/rxjs-subscribe-and-unsubscribe'));
const RxjsUnderstandingMemoryLeaks = React.lazy(() => import('./topics/rxjs-understanding-memory-leaks'));
const RxjsOfOperator = React.lazy(() => import('./topics/rxjs-of-operator'));
const RxjsFromOperator = React.lazy(() => import('./topics/rxjs-from-operator'));
const RxjsFromEventOperator = React.lazy(() => import('./topics/rxjs-from-event'));
const RxjsIntervalOperator = React.lazy(() => import('./topics/rxjs-interval-operator'));
const RxjsTimerOperator = React.lazy(() => import('./topics/rxjs-timer-operator'));
const RxjsRangeOperator = React.lazy(() => import('./topics/rxjs-range-operator'));
const RxjsCreateOperator = React.lazy(() => import('./topics/rxjs-create-operator'));
const RxjsAjaxOperator = React.lazy(() => import('./topics/rxjs-ajax-operator'));
const RxjsDeferOperator = React.lazy(() => import('./topics/rxjs-defer-operator'));
const RxjsEmptyOperator = React.lazy(() => import('./topics/rxjs-empty-operator'));
const RxjsThrowErrorOperator = React.lazy(() => import('./topics/rxjs-throwerror-operator'));
const RxjsNeverOperator = React.lazy(() => import('./topics/rxjs-never-operator'));
const RxjsGenerateOperator = React.lazy(() => import('./topics/rxjs-generate-operator'));
const RxjsIifOperator = React.lazy(() => import('./topics/rxjs-iif-operator'));
const RxjsMapOperator = React.lazy(() => import('./topics/rxjs-map-operator'));
const RxjsMapToOperator = React.lazy(() => import('./topics/rxjs-map-to-operator'));
const RxjsScanOperator = React.lazy(() => import('./topics/rxjs-scan-operator'));
const RxjsPluckOperator = React.lazy(() => import('./topics/rxjs-pluck-operator'));
const RxjsReduceOperator = React.lazy(() => import('./topics/rxjs-reduce-operator'));
const RxjsToArrayOperator = React.lazy(() => import('./topics/rxjs-toarray-operator'));
const RxjsMergeScanOperator = React.lazy(() => import('./topics/rxjs-mergescan-operator'));
const RxjsExpandOperator = React.lazy(() => import('./topics/rxjs-expand-operator'));
const RxjsGroupByOperator = React.lazy(() => import('./topics/rxjs-groupby-operator'));
const RxjsPartitionOperator = React.lazy(() => import('./topics/rxjs-partition-operator'));
const RxjsPairwiseOperator = React.lazy(() => import('./topics/rxjs-pairwise-operator'));
const RxjsMergeMapOperator = React.lazy(() => import('./topics/rxjs-mergemap-operator'));
const RxjsSwitchMapOperator = React.lazy(() => import('./topics/rxjs-switchmap-operator'));
const RxjsConcatMapOperator = React.lazy(() => import('./topics/rxjs-concatmap-operator'));
const RxjsExhaustMapOperator = React.lazy(() => import('./topics/rxjs-exhaustmap-operator'));
const RxjsMergeAllOperator = React.lazy(() => import('./topics/rxjs-mergeall-operator'));

const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'rxjs-core-concepts-what-is-reactive-programming': RxjsWhatIsReactiveProgramming,
  'rxjs-core-concepts-understanding-observables': RxjsUnderstandingObservables,
  'rxjs-core-concepts-observers-and-subscriptions': RxjsObserversSubscriptions,
  'rxjs-core-concepts-hot-vs-cold-observables': RxjsHotColdObservables,
  'rxjs-core-concepts-understanding-streams': RxjsUnderstandingStreams,
  'rxjs-core-concepts-push-vs-pull-systems': RxjsPushPullSystems,
  'rxjs-core-concepts-lazy-vs-eager-evaluation': RxjsLazyVsEager,
  'rxjs-core-concepts-subscribe-and-unsubscribe': RxjsSubscribeAndUnsubscribe,
  'rxjs-core-concepts-subscription-cleanup': RxjsSubscriptionCleanup,
  'rxjs-core-concepts-understanding-memory-leaks': RxjsUnderstandingMemoryLeaks,
  'rxjs-creation-operators-of': RxjsOfOperator,
  'rxjs-creation-operators-from': RxjsFromOperator,
  'rxjs-creation-operators-fromevent': RxjsFromEventOperator,
  'rxjs-creation-operators-interval': RxjsIntervalOperator,
  'rxjs-creation-operators-timer': RxjsTimerOperator,
  'rxjs-creation-operators-range': RxjsRangeOperator,
  'rxjs-creation-operators-create': RxjsCreateOperator,
  'rxjs-creation-operators-ajax': RxjsAjaxOperator,
  'rxjs-creation-operators-defer': RxjsDeferOperator,
  'rxjs-creation-operators-empty': RxjsEmptyOperator,
  'rxjs-creation-operators-throwerror': RxjsThrowErrorOperator,
  'rxjs-creation-operators-never': RxjsNeverOperator,
  'rxjs-creation-operators-generate': RxjsGenerateOperator,
  'rxjs-creation-operators-iif': RxjsIifOperator,
  'rxjs-transformation-operators-map': RxjsMapOperator,
  'rxjs-transformation-operators-mapto': RxjsMapToOperator,
  'rxjs-transformation-operators-pluck': RxjsPluckOperator,
  'rxjs-transformation-operators-scan': RxjsScanOperator,
  'rxjs-transformation-operators-reduce': RxjsReduceOperator,
  'rxjs-transformation-operators-toarray': RxjsToArrayOperator,
  'rxjs-transformation-operators-mergescan': RxjsMergeScanOperator,
  'rxjs-transformation-operators-expand': RxjsExpandOperator,
  'rxjs-transformation-operators-groupby': RxjsGroupByOperator,
  'rxjs-transformation-operators-partition': RxjsPartitionOperator,
  'rxjs-transformation-operators-pairwise': RxjsPairwiseOperator,
  'rxjs-flattening-operators-mergemap-flatmap': RxjsMergeMapOperator,
  'rxjs-flattening-operators-switchmap': RxjsSwitchMapOperator,
  'rxjs-flattening-operators-concatmap': RxjsConcatMapOperator,
  'rxjs-flattening-operators-exhaustmap': RxjsExhaustMapOperator,
  'rxjs-flattening-operators-mergeall': RxjsMergeAllOperator,
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
