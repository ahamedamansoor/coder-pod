'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';

// Lazy load all topic components
const WhatIsReact = React.lazy(() => import('./topics/what-is-react'));
const InstallationAndSetup = React.lazy(() => import('./topics/installation-and-setup'));
const FirstComponent = React.lazy(() => import('./topics/your-first-component'));
const WritingJsx = React.lazy(() => import('./topics/writing-jsx'));
const JavaScriptInJsx = React.lazy(() => import('./topics/javascript-in-jsx'));
const ComponentsAndProps = React.lazy(() => import('./topics/components-and-props'));
const ConditionalRendering = React.lazy(() => import('./topics/conditional-rendering'));
const RenderingLists = React.lazy(() => import('./topics/rendering-lists'));
const RenderAndCommit = React.lazy(() => import('./topics/render-and-commit'));
const RespondingToEvents = React.lazy(() => import('./topics/responding-to-events'));
const StateAsComponentsMemory = React.lazy(() => import('./topics/state-a-components-memory'));
const StateAsASnapshot = React.lazy(() => import('./topics/state-as-a-snapshot'));
const UpdatingObjectsInState = React.lazy(() => import('./topics/updating-objects-in-state'));
const UpdatingArraysInState = React.lazy(() => import('./topics/updating-arrays-in-state'));
const QueueingASeriesOfStateUpdates = React.lazy(() => import('./topics/queueing-a-series-of-state-updates'));
const ChoosingTheStateStructure = React.lazy(() => import('./topics/choosing-the-state-structure'));
const ExtractingStateLogicIntoAReducer = React.lazy(() => import('./topics/extracting-state-logic-into-a-reducer'));
const SharingStateBetweenComponents = React.lazy(() => import('./topics/sharing-state-between-components'));
const PreservingAndResettingState = React.lazy(() => import('./topics/preserving-and-resetting-state'));
const HooksOverview = React.lazy(() => import('./topics/hooks-overview'));
const RulesOfHooks = React.lazy(() => import('./topics/rules-of-hooks'));
const UseStateHook = React.lazy(() => import('./topics/usestate-hook'));
const WhyUseEffect = React.lazy(() => import('./topics/why-use-effect'));
const UseEffectHook = React.lazy(() => import('./topics/useeffect-hook'));
const UseContextHook = React.lazy(() => import('./topics/usecontext-hook'));
const UseReducerHook = React.lazy(() => import('./topics/usereducer-hook'));
const UseCallbackHook = React.lazy(() => import('./topics/usecallback-hook'));
const UseMemoHook = React.lazy(() => import('./topics/usememo-hook'));
const UseRefHook = React.lazy(() => import('./topics/useref-hook'));
const UseLayoutEffectHook = React.lazy(() => import('./topics/uselayouteffect-hook'));
const UseInsertionEffectHook = React.lazy(() => import('./topics/useinsertioneffect-hook'));
const UseTransitionHook = React.lazy(() => import('./topics/usetransition-hook'));
const UseDeferredValueHook = React.lazy(() => import('./topics/usedeferredvalue-hook'));
const UseImperativeHandleHook = React.lazy(() => import('./topics/useimperativehandle-hook'));
const UseDebugValueHook = React.lazy(() => import('./topics/usedebugvalue-hook'));
const UseIdHook = React.lazy(() => import('./topics/useid-hook'));
const UseSyncExternalStoreHook = React.lazy(() => import('./topics/usesyncexternalstore-hook'));
const WhatIsContext = React.lazy(() => import('./topics/what-is-context'));
const CreatingContext = React.lazy(() => import('./topics/creating-context'));
const PassingDataWithContext = React.lazy(() => import('./topics/passing-data-with-context'));
const ConsumingContext = React.lazy(() => import('./topics/consuming-context'));
const ContextPerformance = React.lazy(() => import('./topics/context-performance'));
const ContextCombinationPatterns = React.lazy(() => import('./topics/context-combination-patterns'));
const WhatIsMemoization = React.lazy(() => import('./topics/what-is-memoization'));
const LazyLoadingPerformance = React.lazy(() => import('./topics/lazy-loading-performance'));
const ProfilingPerformance = React.lazy(() => import('./topics/profiling-performance'));
const OptimizationBestPractices = React.lazy(() => import('./topics/optimization-best-practices'));
const TestingOverview = React.lazy(() => import('./topics/testing-overview'));
const ComponentTesting = React.lazy(() => import('./topics/component-testing'));
const HookTesting = React.lazy(() => import('./topics/hook-testing'));
const AsyncTesting = React.lazy(() => import('./topics/async-testing'));
const KeepingComponentsPure = React.lazy(() => import('./topics/keeping-components-pure'));
const UnderstandingYourUiAsATree = React.lazy(() => import('./topics/understanding-your-ui-as-a-tree'));
const ControlledComponentsPattern = React.lazy(() => import('./topics/controlled-components-pattern'));
const UncontrolledComponentsPattern = React.lazy(() => import('./topics/uncontrolled-components-pattern'));
const LiftingStateUpPattern = React.lazy(() => import('./topics/lifting-state-up-pattern'));
const KeysAndListRenderingPattern = React.lazy(() => import('./topics/keys-and-list-rendering-pattern'));
const ReusingLogicWithCustomHooks = React.lazy(() => import('./topics/reusing-logic-with-custom-hooks'));
const CustomHookExamples = React.lazy(() => import('./topics/custom-hook-examples'));

// Map slugs to their lazy-loaded components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-react': WhatIsReact,
  'installation-and-setup': InstallationAndSetup,
  'your-first-component': FirstComponent,
  'writing-jsx': WritingJsx,
  'javascript-in-jsx': JavaScriptInJsx,
  'components-and-props': ComponentsAndProps,
  'conditional-rendering': ConditionalRendering,
  'rendering-lists': RenderingLists,
  'render-and-commit': RenderAndCommit,
  'responding-to-events': RespondingToEvents,
  'state-a-components-memory': StateAsComponentsMemory,
  'state-as-a-snapshot': StateAsASnapshot,
  'updating-objects-in-state': UpdatingObjectsInState,
  'updating-arrays-in-state': UpdatingArraysInState,
  'queueing-a-series-of-state-updates': QueueingASeriesOfStateUpdates,
  'choosing-the-state-structure': ChoosingTheStateStructure,
  'extracting-state-logic-into-a-reducer': ExtractingStateLogicIntoAReducer,
  'sharing-state-between-components': SharingStateBetweenComponents,
  'preserving-and-resetting-state': PreservingAndResettingState,
  'hooks-overview': HooksOverview,
  'rules-of-hooks': RulesOfHooks,
  'usestate-hook': UseStateHook,
  'why-use-effect': WhyUseEffect,
  'useeffect-hook': UseEffectHook,
  'usecontext-hook': UseContextHook,
  'usereducer-hook': UseReducerHook,
  'usecallback-hook': UseCallbackHook,
  'usememo-hook': UseMemoHook,
  'useref-hook': UseRefHook,
  'uselayouteffect-hook': UseLayoutEffectHook,
  'useinsertioneffect-hook': UseInsertionEffectHook,
  'usetransition-hook': UseTransitionHook,
  'usedeferredvalue-hook': UseDeferredValueHook,
  'useimperativehandle-hook': UseImperativeHandleHook,
  'usedebugvalue-hook': UseDebugValueHook,
  'useid-hook': UseIdHook,
  'usesyncexternalstore-hook': UseSyncExternalStoreHook,
  'what-is-context': WhatIsContext,
  'creating-context': CreatingContext,
  'passing-data-with-context': PassingDataWithContext,
  'consuming-context': ConsumingContext,
  'context-performance': ContextPerformance,
  'context-combination-patterns': ContextCombinationPatterns,
  'what-is-memoization': WhatIsMemoization,
  'lazy-loading-performance': LazyLoadingPerformance,
  'profiling-performance': ProfilingPerformance,
  'optimization-best-practices': OptimizationBestPractices,
  'testing-overview': TestingOverview,
  'component-testing': ComponentTesting,
  'hook-testing': HookTesting,
  'async-testing': AsyncTesting,
  'keeping-components-pure': KeepingComponentsPure,
  'understanding-your-ui-as-a-tree': UnderstandingYourUiAsATree,
  'controlled-components-pattern': ControlledComponentsPattern,
  'uncontrolled-components-pattern': UncontrolledComponentsPattern,
  'lifting-state-up-pattern': LiftingStateUpPattern,
  'keys-and-list-rendering-pattern': KeysAndListRenderingPattern,
  'reusing-logic-with-custom-hooks': ReusingLogicWithCustomHooks,
  'custom-hook-examples': CustomHookExamples,
};

export function ReactContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponents[topic.slug];

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
}
