'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load all the topic components
const WhatIsSass = lazy(() => import('./topics/what-is-sass'));
const SassVsScss = lazy(() => import('./topics/sass-vs-scss'));
const SassInstallation = lazy(() => import('./topics/sass-installation'));
const SassCompilation = lazy(() => import('./topics/sass-compilation'));
const SassComments = lazy(() => import('./topics/sass-comments'));
const SassVariables = lazy(() => import('./topics/sass-variables'));
const SassDataTypes = lazy(() => import('./topics/sass-data-types'));
const SassNesting = lazy(() => import('./topics/sass-nesting'));
const SassParentSelector = lazy(() => import('./topics/sass-parent-selector'));
const SassImport = lazy(() => import('./topics/sass-import'));
const SassUseForward = lazy(() => import('./topics/sass-use-forward'));
const SassMixin = lazy(() => import('./topics/sass-mixin'));
const SassExtendInheritance = lazy(() => import('./topics/sass-extend-inheritance'));
const SassPlaceholder = lazy(() => import('./topics/sass-placeholder'));
const SassOperators = lazy(() => import('./topics/sass-operators'));
const SassFunctions = lazy(() => import('./topics/sass-functions'));
const SassInterpolation = lazy(() => import('./topics/sass-interpolation'));
const SassControlDirectives = lazy(() => import('./topics/sass-control-directives'));
const SassStringFunctions = lazy(() => import('./topics/sass-string-functions'));
const SassNumeric = lazy(() => import('./topics/sass-numeric'));
const SassList = lazy(() => import('./topics/sass-list'));
const SassMap = lazy(() => import('./topics/sass-map'));
const SassColor = lazy(() => import('./topics/sass-color'));
const SassSelector = lazy(() => import('./topics/sass-selector'));
const SassIntrospection = lazy(() => import('./topics/sass-introspection'));
const SassAdvancedNesting = lazy(() => import('./topics/sass-advanced-nesting'));
const SassCustomFunctions = lazy(() => import('./topics/sass-custom-functions'));
const SassResponsiveMixins = lazy(() => import('./topics/sass-responsive-mixins'));
const SassDebugging = lazy(() => import('./topics/sass-debugging'));
const SassArchitecture = lazy(() => import('./topics/sass-architecture'));
const SassPerformance = lazy(() => import('./topics/sass-performance'));
const SassAdvancedPatterns = lazy(() => import('./topics/sass-advanced-patterns'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-sass': WhatIsSass,
  'sass-vs-scss': SassVsScss,
  'sass-installation': SassInstallation,
  'sass-compilation': SassCompilation,
  'sass-comments': SassComments,
  'sass-variables': SassVariables,
  'sass-data-types': SassDataTypes,
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
  'sass-custom-functions': SassCustomFunctions,
  'sass-responsive-mixins': SassResponsiveMixins,
  'sass-debugging': SassDebugging,
  'sass-architecture': SassArchitecture,
  'sass-performance': SassPerformance,
  'sass-advanced-patterns': SassAdvancedPatterns,
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
}: {
  topic: Topic, 
  language: Language,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];
  const { openWithContent } = useWebPlayground();

  const handleOpenWebPlayground = (html: string, css: string, js: string) => {
    openWithContent(html, css, js);
  };

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenWebPlayground={handleOpenWebPlayground} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
