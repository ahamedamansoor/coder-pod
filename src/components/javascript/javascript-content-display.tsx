'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { Skeleton } from '@/components/ui/skeleton';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load topic components
const JavaScriptWhatIsJavaScript = lazy(() => import('./topics/javascript-what-is-javascript'));
const JavaScriptInstallationSetup = lazy(() => import('./topics/javascript-installation-setup'));
const JavaScriptFirstProgram = lazy(() => import('./topics/javascript-first-program'));
const JavaScriptInHtml = lazy(() => import('./topics/javascript-in-html'));
const JavaScriptVariablesConstants = lazy(() => import('./topics/javascript-variables-constants'));
const JavaScriptDataTypes = lazy(() => import('./topics/javascript-data-types'));
const JavaScriptComments = lazy(() => import('./topics/javascript-comments'));
const JavaScriptConsoleMethods = lazy(() => import('./topics/javascript-console-methods'));
const JavaScriptOperators = lazy(() => import('./topics/javascript-operators'));
const JavaScriptTernaryOperator = lazy(() => import('./topics/javascript-ternary-operator'));
const JavaScriptIfElse = lazy(() => import('./topics/javascript-if-else'));
const JavaScriptSwitchStatements = lazy(() => import('./topics/javascript-switch-statements'));

// Map topic slugs to their components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-javascript': JavaScriptWhatIsJavaScript,
  'js-setup': JavaScriptInstallationSetup,
  'first-program': JavaScriptFirstProgram,
  'js-in-html': JavaScriptInHtml,
  'js-variables': JavaScriptVariablesConstants,
  'js-data-types': JavaScriptDataTypes,
  'js-comments': JavaScriptComments,
  'console-methods': JavaScriptConsoleMethods,
  'js-operators': JavaScriptOperators,
  'ternary-operator': JavaScriptTernaryOperator,
  'js-conditionals': JavaScriptIfElse,
  'switch-statement': JavaScriptSwitchStatements,
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

export function JavascriptContentDisplay({
  topic,
  language,
}: {
  topic: Topic;
  language: Language;
}) {
  const CustomTopicComponent = topicComponents[topic.slug];
  const { openWithContent } = useWebPlayground();

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent
          ? React.createElement(CustomTopicComponent as any, {
              onOpenWebPlayground: openWithContent,
            })
          : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
