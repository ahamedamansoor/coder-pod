'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

const TopicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-css': React.lazy(() => import('./topics/css-introduction')),
  'css-introduction': React.lazy(() => import('./topics/css-introduction')),
  'css-syntax-and-selectors': React.lazy(() => import('./topics/css-syntax-selectors')),
  'css-specificity': React.lazy(() => import('./topics/css-specificity-cascade')),
  'css-units': React.lazy(() => import('./topics/css-units-values')),
  'css-box-sizing': React.lazy(() => import('./topics/css-box-sizing')),
  'css-overflow': React.lazy(() => import('./topics/css-overflow')),
  'css-visibility': React.lazy(() => import('./topics/css-visibility-opacity')),
  'css-colors': React.lazy(() => import('./topics/css-colors-backgrounds')),
  'modern-color-formats': React.lazy(() => import('./topics/css-modern-color-formats')),
  'css-gradients': React.lazy(() => import('./topics/css-gradients')),
  'css-box-model': React.lazy(() => import('./topics/css-box-model')),
  'css-typography': React.lazy(() => import('./topics/css-typography')),
  'variable-fonts': React.lazy(() => import('./topics/css-variable-fonts')),
  'text-wrapping': React.lazy(() => import('./topics/css-text-wrapping')),
  'css-positioning': React.lazy(() => import('./topics/css-positioning')),
  'css-flexbox': React.lazy(() => import('./topics/css-flexbox')),
  'flexbox-advanced': React.lazy(() => import('./topics/flexbox-advanced')),
  'css-grid': React.lazy(() => import('./topics/css-grid')),
  'css-grid-advanced': React.lazy(() => import('./topics/css-grid-advanced')),
  'multi-column-layout': React.lazy(() => import('./topics/multi-column-layout')),
  'css-aspect-ratio': React.lazy(() => import('./topics/css-aspect-ratio')),
  'css-responsive-units': React.lazy(() => import('./topics/css-responsive-units')),
  'css-pseudo-classes': React.lazy(() => import('./topics/css-pseudo-classes')),
  'css-pseudo-elements': React.lazy(() => import('./topics/css-pseudo-elements')),
  'css-transitions': React.lazy(() => import('./topics/css-transitions')),
  'css-animations': React.lazy(() => import('./topics/css-animations')),
  'css-variables': React.lazy(() => import('./topics/css-variables')),
  'css-responsive-design': React.lazy(() => import('./topics/css-responsive-design')),
  'css-combinators': React.lazy(() => import('./topics/css-combinators')),
  'css-text-effects': React.lazy(() => import('./topics/css-text-effects')),
  'css-display': React.lazy(() => import('./topics/css-display')),
  'css-float-clear': React.lazy(() => import('./topics/css-float-clear')),
  'css-stacking-context': React.lazy(() => import('./topics/css-stacking-context')),
  'css-attribute-selectors': React.lazy(() => import('./topics/css-attribute-selectors')),
  'css-layout-patterns': React.lazy(() => import('./topics/css-layout-patterns')),
  'css-media-queries': React.lazy(() => import('./topics/css-media-queries')),
  'css-container-queries': React.lazy(() => import('./topics/css-container-queries')),
  'css-transforms': React.lazy(() => import('./topics/css-transforms')),
  'css-filters': React.lazy(() => import('./topics/css-filters')),
  'css-backdrop-filter': React.lazy(() => import('./topics/css-backdrop-filter')),
  'css-blend-modes': React.lazy(() => import('./topics/css-blend-modes')),
  'css-masks': React.lazy(() => import('./topics/css-masks')),
  'css-shapes': React.lazy(() => import('./topics/css-shapes')),
  'css-shadows': React.lazy(() => import('./topics/css-shadows')),
  'css-functions': React.lazy(() => import('./topics/css-functions')),
  'css-logical-properties': React.lazy(() => import('./topics/css-logical-properties')),
  'css-modern-features': React.lazy(() => import('./topics/css-modern-features')),
  'css-performance': React.lazy(() => import('./topics/css-performance')),
  'css-architecture': React.lazy(() => import('./topics/css-architecture')),
  'css-debugging': React.lazy(() => import('./topics/css-debugging')),
  'css-best-practices': React.lazy(() => import('./topics/css-best-practices')),
  'sass-scss-introduction': React.lazy(() => import('./topics/sass-scss-introduction')),
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

export function CssContentDisplay({
  topic,
  language,
}: {
  topic: Topic;
  language: Language;
}) {
  const { openWithContent } = useWebPlayground();
  const CustomTopicComponent = TopicComponentMap[topic.slug];

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <React.Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent
          ? React.createElement(CustomTopicComponent as any, {
              onOpenWebPlayground: openWithContent,
            })
          : null}
      </React.Suspense>
    </GenericContentDisplay>
  );
}
