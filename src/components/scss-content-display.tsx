
'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import { GenericContentDisplay } from './generic-content-display';
import { useWebPlayground } from './web-playground-context';

// Lazy load all the topic components
const WhatIsSass = lazy(() => import('./scss-topics/what-is-sass'));
const SassInstallation = lazy(() => import('./scss-topics/sass-installation'));
const SassComments = lazy(() => import('./scss-topics/sass-comments'));
const SassVariables = lazy(() => import('./scss-topics/sass-variables'));
const SassNesting = lazy(() => import('./scss-topics/sass-nesting'));
const SassParentSelector = lazy(() => import('./scss-topics/sass-parent-selector'));
const SassImport = lazy(() => import('./scss-topics/sass-import'));
const SassUseForward = lazy(() => import('./scss-topics/sass-use-forward'));
const SassMixin = lazy(() => import('./scss-topics/sass-mixin'));
const SassExtendInheritance = lazy(() => import('./scss-topics/sass-extend-inheritance'));
const SassPlaceholder = lazy(() => import('./scss-topics/sass-placeholder'));
const SassOperators = lazy(() => import('./scss-topics/sass-operators'));
const SassFunctions = lazy(() => import('./scss-topics/sass-functions'));
const SassInterpolation = lazy(() => import('./scss-topics/sass-interpolation'));
const SassControlDirectives = lazy(() => import('./scss-topics/sass-control-directives'));
const SassStringFunctions = lazy(() => import('./scss-topics/sass-string-functions'));
const SassNumeric = lazy(() => import('./scss-topics/sass-numeric'));
const SassList = lazy(() => import('./scss-topics/sass-list'));
const SassMap = lazy(() => import('./scss-topics/sass-map'));
const SassColor = lazy(() => import('./scss-topics/sass-color'));
const SassSelector = lazy(() => import('./scss-topics/sass-selector'));
const SassIntrospection = lazy(() => import('./scss-topics/sass-introspection'));
const SassAdvancedNesting = lazy(() => import('./scss-topics/sass-advanced-nesting'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-sass': WhatIsSass,
  'sass-installation': SassInstallation,
  'sass-comments': SassComments,
  'sass-variables': SassVariables,
  'sass-nesting': SassNesting,
  'sass-parent-selector': SassParentSelector,
  'sass-import': SassImport,
  'sass-modules': SassUseForward,
  'sass-mixin': SassMixin,
  'sass-extend-inheritance': SassExtendInheritance,
  'sass-placeholder': SassPlaceholder,
  'sass-operators': SassOperators,
  'sass-functions': SassFunctions,
  'sass-interpolation': SassInterpolation,
  'sass-control-directives': SassControlDirectives,
  'sass-string': SassStringFunctions,
  'sass-numeric': SassNumeric,
  'sass-list': SassList,
  'sass-map': SassMap,
  'sass-color': SassColor,
  'sass-selector': SassSelector,
  'sass-introspection': SassIntrospection,
  'sass-advanced-nesting': SassAdvancedNesting,
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

export function ScssContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];
  const { openWithContent } = useWebPlayground();

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={onOpenEditor}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent
            onOpenWebPlayground={openWithContent}
          />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
