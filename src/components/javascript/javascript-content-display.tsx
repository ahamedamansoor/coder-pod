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
const JavaScriptLoops = lazy(() => import('./topics/javascript-loops'));
const JavaScriptFunctions = lazy(() => import('./topics/javascript-functions'));
const JavaScriptArrowFunctions = lazy(() => import('./topics/javascript-arrow-functions'));
const JavaScriptFunctionParameters = lazy(() => import('./topics/javascript-function-parameters'));
const JavaScriptCallbackParameters = lazy(() => import('./topics/javascript-callback-parameters'));
const JavaScriptHigherOrderFunctions = lazy(() => import('./topics/javascript-higher-order-functions'));
const JavaScriptIife = lazy(() => import('./topics/javascript-iife'));
const JavaScriptArrays = lazy(() => import('./topics/javascript-arrays'));
const JavaScriptArrayMethodsBasics = lazy(() => import('./topics/javascript-array-methods'));
const JavaScriptArrayIterationMethods = lazy(() => import('./topics/javascript-array-iteration-methods'));
const JavaScriptArrayDestructuring = lazy(() => import('./topics/javascript-array-destructuring'));
const JavaScriptObjects = lazy(() => import('./topics/javascript-objects'));
const JavaScriptObjectMethods = lazy(() => import('./topics/javascript-object-methods'));
const JavaScriptGettersSetters = lazy(() => import('./topics/javascript-getters-setters'));
const JavaScriptPrivateFields = lazy(() => import('./topics/javascript-private-fields'));
const JavaScriptObjectDestructuring = lazy(() => import('./topics/javascript-object-destructuring'));
const JavaScriptThisKeyword = lazy(() => import('./topics/javascript-this-keyword'));
const JavaScriptStrings = lazy(() => import('./topics/javascript-strings'));
const JavaScriptTemplateLiterals = lazy(() => import('./topics/javascript-template-literals'));
const JavaScriptStringMethods = lazy(() => import('./topics/javascript-string-methods'));
const JavaScriptRegularExpressions = lazy(() => import('./topics/javascript-regular-expressions'));
const JavaScriptScope = lazy(() => import('./topics/javascript-scope'));
const JavaScriptClosures = lazy(() => import('./topics/javascript-closures'));
const JavaScriptHoisting = lazy(() => import('./topics/javascript-hoisting'));
const JavaScriptConstructorFunctions = lazy(() => import('./topics/javascript-constructor-functions'));
const JavaScriptPrototypes = lazy(() => import('./topics/javascript-prototypes'));
const JavaScriptES6Classes = lazy(() => import('./topics/javascript-es6-classes'));
const JavaScriptClassInheritance = lazy(() => import('./topics/javascript-class-inheritance'));
const JavaScriptStaticMethods = lazy(() => import('./topics/javascript-static-methods'));
const JavaScriptJsAsync = lazy(() => import('./topics/javascript-js-async'));

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
  'js-loops': JavaScriptLoops,
  'js-functions': JavaScriptFunctions,
  'arrow-functions': JavaScriptArrowFunctions,
  'function-parameters': JavaScriptFunctionParameters,
  'callback-functions': JavaScriptCallbackParameters,
  'higher-order-functions': JavaScriptHigherOrderFunctions,
  iife: JavaScriptIife,
  'js-arrays': JavaScriptArrays,
  'array-methods': JavaScriptArrayMethodsBasics,
  'js-array-methods': JavaScriptArrayIterationMethods,
  'array-destructuring': JavaScriptArrayDestructuring,
  'js-objects': JavaScriptObjects,
  'object-methods': JavaScriptObjectMethods,
  'getters-setters': JavaScriptGettersSetters,
  'private-fields': JavaScriptPrivateFields,
  'object-destructuring': JavaScriptObjectDestructuring,
  'this-keyword': JavaScriptThisKeyword,
  'strings': JavaScriptStrings,
  'template-literals': JavaScriptTemplateLiterals,
  'string-methods': JavaScriptStringMethods,
  'regular-expressions': JavaScriptRegularExpressions,
  'js-scope': JavaScriptScope,
  'closures': JavaScriptClosures,
  'hoisting': JavaScriptHoisting,
  'constructor-functions': JavaScriptConstructorFunctions,
  'prototypes': JavaScriptPrototypes,
  'es6-classes': JavaScriptES6Classes,
  'class-inheritance': JavaScriptClassInheritance,
  'static-methods': JavaScriptStaticMethods,
  'js-async': JavaScriptJsAsync,
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
