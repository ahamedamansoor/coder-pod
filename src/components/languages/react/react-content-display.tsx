'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useReactPlayground } from './react-playground-context';

// Lazy load all the topic components
const WhatIsReact = lazy(() => import('./topics/what-is-react'));
const InstallationAndSetup = lazy(() => import('./topics/installation-and-setup'));
const YourFirstComponent = lazy(() => import('./topics/your-first-component'));
const WritingJSX = lazy(() => import('./topics/writing-jsx'));
const JavaScriptInJSX = lazy(() => import('./topics/javascript-in-jsx'));
const ComponentsAndProps = lazy(() => import('./topics/components-and-props'));
const ConditionalRendering = lazy(() => import('./topics/conditional-rendering'));
const RenderingLists = lazy(() => import('./topics/rendering-lists'));
const KeepingComponentsPure = lazy(() => import('./topics/keeping-components-pure'));
const UnderstandingYourUIAsATree = lazy(() => import('./topics/understanding-your-ui-as-a-tree'));
const RespondingToEvents = lazy(() => import('./topics/responding-to-events'));
const StateAComponentsMemory = lazy(() => import('./topics/state-a-components-memory'));
const RenderAndCommit = lazy(() => import('./topics/render-and-commit'));
const StateAsASnapshot = lazy(() => import('./topics/state-as-a-snapshot'));
const QueueingASeriesOfStateUpdates = lazy(() => import('./topics/queueing-a-series-of-state-updates'));
const UpdatingObjectsInState = lazy(() => import('./topics/updating-objects-in-state'));
const UpdatingArraysInState = lazy(() => import('./topics/updating-arrays-in-state'));
const ExtractingStateLogicIntoAReducer = lazy(() => import('./topics/extracting-state-logic-into-a-reducer'));
const ChoosingTheStateStructure = lazy(() => import('./topics/choosing-the-state-structure'));
const SharingStateBetweenComponents = lazy(() => import('./topics/sharing-state-between-components'));
const PreservingAndResettingState = lazy(() => import('./topics/preserving-and-resetting-state'));
const ReferencingValuesWithRefs = lazy(() => import('./topics/referencing-values-with-refs'));
const ManipulatingTheDOMWithRefs = lazy(() => import('./topics/manipulating-the-dom-with-refs'));
const SynchronizingWithEffects = lazy(() => import('./topics/synchronizing-with-effects'));
const YouMightNotNeedAnEffect = lazy(() => import('./topics/you-might-not-need-an-effect'));
const LifecycleOfReactiveEffects = lazy(() => import('./topics/lifecycle-of-reactive-effects'));
const SeparatingEventsFromEffects = lazy(() => import('./topics/separating-events-from-effects'));
const RemovingEffectDependencies = lazy(() => import('./topics/removing-effect-dependencies'));
const ReusingLogicWithCustomHooks = lazy(() => import('./topics/reusing-logic-with-custom-hooks'));
const CustomHookExamples = lazy(() => import('./topics/custom-hook-examples'));
const HooksOverview = lazy(() => import('./topics/hooks-overview'));
const RulesOfHooks = lazy(() => import('./topics/rules-of-hooks'));
const UseStateHook = lazy(() => import('./topics/usestate-hook'));
const UseEffectHook = lazy(() => import('./topics/useeffect-hook'));
const UseContextHook = lazy(() => import('./topics/usecontext-hook'));
const UseReducerHook = lazy(() => import('./topics/usereducer-hook'));
const UseCallbackHook = lazy(() => import('./topics/usecallback-hook'));
const UseMemoHook = lazy(() => import('./topics/usememo-hook'));
const UseRefHook = lazy(() => import('./topics/useref-hook'));
const UseImperativeHandleHook = lazy(() => import('./topics/useimperativehandle-hook'));
const UseLayoutEffectHook = lazy(() => import('./topics/uselayouteffect-hook'));
const UseDebugValueHook = lazy(() => import('./topics/usedebugvalue-hook'));
const UseIdHook = lazy(() => import('./topics/useid-hook'));
const UseInsertionEffectHook = lazy(() => import('./topics/useinsertioneffect-hook'));
const UseTransitionHook = lazy(() => import('./topics/usetransition-hook'));
const UseDeferredValueHook = lazy(() => import('./topics/usedeferredvalue-hook'));
const UseSyncExternalStoreHook = lazy(() => import('./topics/usesyncexternalstore-hook'));
const ForwardRefApi = lazy(() => import('./topics/forwardref-api'));
const FragmentApi = lazy(() => import('./topics/fragment-api'));
const LazyComponentsApi = lazy(() => import('./topics/lazy-components-api'));
const MemoApi = lazy(() => import('./topics/memo-api'));
const ProfilerApi = lazy(() => import('./topics/profiler-api'));
const SuspenseApi = lazy(() => import('./topics/suspense-api'));
const StrictModeApi = lazy(() => import('./topics/strictmode-api'));
const ReactDomMethods = lazy(() => import('./topics/react-dom-methods'));
const HandlingFormsDetails = lazy(() => import('./topics/handling-forms-details'));
const InputTypesDetails = lazy(() => import('./topics/input-types-details'));
const FormLibrariesIntegration = lazy(() => import('./topics/form-libraries-integration'));
const ControlledComponentsPattern = lazy(() => import('./topics/controlled-components-pattern'));
const UncontrolledComponentsPattern = lazy(() => import('./topics/uncontrolled-components-pattern'));
const LiftingStateUpPattern = lazy(() => import('./topics/lifting-state-up-pattern'));
const KeysAndListRenderingPattern = lazy(() => import('./topics/keys-and-list-rendering-pattern'));
const DefaultPropsPattern = lazy(() => import('./topics/default-props-pattern'));
const TypeCheckingWithPropTypes = lazy(() => import('./topics/type-checking-with-proptypes'));
const AriaAndAccessibilityPattern = lazy(() => import('./topics/aria-and-accessibility-pattern'));
const WhatIsContext = lazy(() => import('./topics/what-is-context'));
const CreatingContext = lazy(() => import('./topics/creating-context'));
const PassingDataWithContext = lazy(() => import('./topics/passing-data-with-context'));
const ConsumingContext = lazy(() => import('./topics/consuming-context'));
const ContextPerformance = lazy(() => import('./topics/context-performance'));
const ContextCombinationPatterns = lazy(() => import('./topics/context-combination-patterns'));
const WhatIsMemoization = lazy(() => import('./topics/what-is-memoization'));
const LazyLoadingPerformance = lazy(() => import('./topics/lazy-loading-performance'));
const ProfilingPerformance = lazy(() => import('./topics/profiling-performance'));
const TestingBasics = lazy(() => import('./topics/testing-basics'));
const TestingOverview = lazy(() => import('./topics/testing-overview'));
const ComponentTesting = lazy(() => import('./topics/component-testing'));
const HookTesting = lazy(() => import('./topics/hook-testing'));
const AsyncTesting = lazy(() => import('./topics/async-testing'));
const MockingAndStubbing = lazy(() => import('./topics/mocking-and-stubbing'));
const OptimizationBestPractices = lazy(() => import('./topics/optimization-best-practices'));
const UseCallbackHookDetails = lazy(() => import('./topics/usecallback-hook-details'));
const CustomHooksBasics = lazy(() => import('./topics/custom-hooks-basics'));
const ReactInterviewQuestions = lazy(() => import('./topics/react-interview-questions'));
const ReactVersionUpdates = lazy(() => import('./topics/react-version-updates'));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-react': WhatIsReact,
  'installation-and-setup': InstallationAndSetup,
  'your-first-component': YourFirstComponent,
  'writing-jsx': WritingJSX,
  'javascript-in-jsx': JavaScriptInJSX,
  'components-and-props': ComponentsAndProps,
  'conditional-rendering': ConditionalRendering,
  'rendering-lists': RenderingLists,
  'keeping-components-pure': KeepingComponentsPure,
  'understanding-your-ui-as-a-tree': UnderstandingYourUIAsATree,
  'responding-to-events': RespondingToEvents,
  'state-a-components-memory': StateAComponentsMemory,
  'render-and-commit': RenderAndCommit,
  'state-as-a-snapshot': StateAsASnapshot,
  'queueing-a-series-of-state-updates': QueueingASeriesOfStateUpdates,
  'updating-objects-in-state': UpdatingObjectsInState,
  'updating-arrays-in-state': UpdatingArraysInState,
  'extracting-state-logic-into-a-reducer': ExtractingStateLogicIntoAReducer,
  'choosing-the-state-structure': ChoosingTheStateStructure,
  'sharing-state-between-components': SharingStateBetweenComponents,
  'preserving-and-resetting-state': PreservingAndResettingState,
  'referencing-values-with-refs': ReferencingValuesWithRefs,
  'manipulating-the-dom-with-refs': ManipulatingTheDOMWithRefs,
  'synchronizing-with-effects': SynchronizingWithEffects,
  'you-might-not-need-an-effect': YouMightNotNeedAnEffect,
  'lifecycle-of-reactive-effects': LifecycleOfReactiveEffects,
  'separating-events-from-effects': SeparatingEventsFromEffects,
  'removing-effect-dependencies': RemovingEffectDependencies,
  'reusing-logic-with-custom-hooks': ReusingLogicWithCustomHooks,
  'custom-hook-examples': CustomHookExamples,
  'hooks-overview': HooksOverview,
  'rules-of-hooks': RulesOfHooks,
  'usestate-hook': UseStateHook,
  'useeffect-hook': UseEffectHook,
  'usecontext-hook': UseContextHook,
  'usereducer-hook': UseReducerHook,
  'usecallback-hook': UseCallbackHook,
  'usememo-hook': UseMemoHook,
  'useref-hook': UseRefHook,
  'useimperativehandle-hook': UseImperativeHandleHook,
  'uselayouteffect-hook': UseLayoutEffectHook,
  'usedebugvalue-hook': UseDebugValueHook,
  'useid-hook': UseIdHook,
  'useinsertioneffect-hook': UseInsertionEffectHook,
  'usetransition-hook': UseTransitionHook,
  'usedeferredvalue-hook': UseDeferredValueHook,
  'usesyncexternalstore-hook': UseSyncExternalStoreHook,
  'forwardref-api': ForwardRefApi,
  'fragment-api': FragmentApi,
  'lazy-components-api': LazyComponentsApi,
  'memo-api': MemoApi,
  'profiler-api': ProfilerApi,
  'suspense-api': SuspenseApi,
  'strictmode-api': StrictModeApi,
  'react-dom-methods': ReactDomMethods,
  'handling-forms-details': HandlingFormsDetails,
  'input-types-details': InputTypesDetails,
  'form-libraries-integration': FormLibrariesIntegration,
  'controlled-components-pattern': ControlledComponentsPattern,
  'uncontrolled-components-pattern': UncontrolledComponentsPattern,
  'lifting-state-up-pattern': LiftingStateUpPattern,
  'keys-and-list-rendering-pattern': KeysAndListRenderingPattern,
  'default-props-pattern': DefaultPropsPattern,
  'type-checking-with-proptypes': TypeCheckingWithPropTypes,
  'aria-and-accessibility-pattern': AriaAndAccessibilityPattern,
  'what-is-context': WhatIsContext,
  'creating-context': CreatingContext,
  'passing-data-with-context': PassingDataWithContext,
  'consuming-context': ConsumingContext,
  'context-performance': ContextPerformance,
  'context-combination-patterns': ContextCombinationPatterns,
  'what-is-memoization': WhatIsMemoization,
  'lazy-loading-performance': LazyLoadingPerformance,
  'profiling-performance': ProfilingPerformance,
  'testing-basics': TestingBasics,
  'testing-overview': TestingOverview,
  'component-testing': ComponentTesting,
  'hook-testing': HookTesting,
  'async-testing': AsyncTesting,
  'mocking-and-stubbing': MockingAndStubbing,
  'optimization-best-practices': OptimizationBestPractices,
  'usecallback-hook-details': UseCallbackHookDetails,
  'custom-hooks-basics': CustomHooksBasics,
  'interview-questions': ReactInterviewQuestions,
  'react-version-updates': ReactVersionUpdates,
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

export function ReactContentDisplay({ 
  topic, 
  language,
}: { 
  topic: Topic, 
  language: Language, 
}) {
  const reactPlayground = useReactPlayground();
  const openWithContent = reactPlayground?.openWithContent;
  
  const handleOpenEditor = (code: string) => {
    openWithContent?.(code);
  };
  
  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          React.createElement(CustomTopicComponent as any, { onOpenEditor: handleOpenEditor })
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
