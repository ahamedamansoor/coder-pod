'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

const TopicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-css': React.lazy(() => import('./topics/css-introduction')),
  'css-introduction': React.lazy(() => import('./topics/css-introduction')),
  'css-syntax-and-selectors': React.lazy(() => import('./topics/css-syntax-and-selectors')),
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
  'css-nesting': React.lazy(() => import('./topics/css-nesting')),
  'css-layers': React.lazy(() => import('./topics/css-layers')),
  'css-scope': React.lazy(() => import('./topics/css-scope')),
  'css-counter': React.lazy(() => import('./topics/css-counter')),
  'css-generated-content': React.lazy(() => import('./topics/css-generated-content')),
  'form-styling': React.lazy(() => import('./topics/form-styling')),
  'form-validation-styling': React.lazy(() => import('./topics/form-validation-styling')),
  'custom-form-elements': React.lazy(() => import('./topics/custom-form-elements')),
  'css-appearance': React.lazy(() => import('./topics/css-appearance')),
  'accent-color': React.lazy(() => import('./topics/accent-color')),
  'css-accessibility': React.lazy(() => import('./topics/css-accessibility')),
  'focus-management': React.lazy(() => import('./topics/focus-management')),
  'reduced-motion': React.lazy(() => import('./topics/reduced-motion')),
  'high-contrast-mode': React.lazy(() => import('./topics/high-contrast')),
  'print-styles': React.lazy(() => import('./topics/print-styles')),
  'page-rules': React.lazy(() => import('./topics/css-page-rules')),
  'css-loading-strategies': React.lazy(() => import('./topics/loading-strategies')),
  'css-unused-removal': React.lazy(() => import('./topics/unused-css-removal')),
  'css-minification': React.lazy(() => import('./topics/css-minification')),
  'css-modern-features': React.lazy(() => import('./topics/css-modern-features')),
  'css-performance': React.lazy(() => import('./topics/css-performance')),
  'css-architecture': React.lazy(() => import('./topics/css-architecture')),
  'css-naming-conventions': React.lazy(() => import('./topics/css-naming-conventions')),
  'css-modularity': React.lazy(() => import('./topics/css-modularity')),
  'design-systems': React.lazy(() => import('./topics/design-systems')),
  'css-debugging': React.lazy(() => import('./topics/css-debugging')),
  'css-best-practices': React.lazy(() => import('./topics/css-best-practices')),
  'css-preprocessors': React.lazy(() => import('./topics/css-preprocessors')),
  'postcss': React.lazy(() => import('./topics/postcss')),
  'css-in-js': React.lazy(() => import('./topics/css-in-js')),
  'cross-browser-css': React.lazy(() => import('./topics/cross-browser-css')),
  'css-feature-queries': React.lazy(() => import('./topics/feature-queries')),
  'css-autoprefixer': React.lazy(() => import('./topics/autoprefixer')),
  'css-validation': React.lazy(() => import('./topics/css-validation')),
  'css-testing': React.lazy(() => import('./topics/css-testing')),
  'css-documentation': React.lazy(() => import('./topics/css-documentation')),
  'css-refactoring': React.lazy(() => import('./topics/css-refactoring')),
  'css-subgrid': React.lazy(() => import('./topics/css-subgrid')),
  'css-scroll-snap': React.lazy(() => import('./topics/css-scroll-snap')),
  'css-overscroll': React.lazy(() => import('./topics/css-overscroll')),
  'css-containment': React.lazy(() => import('./topics/css-containment')),
  'css-content-visibility': React.lazy(() => import('./topics/css-content-visibility')),
  'css-will-change': React.lazy(() => import('./topics/css-will-change')),
  'css-anchor-positioning': React.lazy(() => import('./topics/css-anchor-positioning')),
  'css-relative-colors': React.lazy(() => import('./topics/css-relative-colors')),
  'css-trigonometric-functions': React.lazy(() => import('./topics/css-trigonometric-functions')),
  'css-exponential-functions': React.lazy(() => import('./topics/css-exponential-functions')),
  'css-stepped-functions': React.lazy(() => import('./topics/css-stepped-functions')),
  'css-sign-functions': React.lazy(() => import('./topics/css-sign-functions')),
};

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
      <React.Suspense fallback={<CompactLoadingSkeleton />}>
        {CustomTopicComponent
          ? React.createElement(CustomTopicComponent as any, {
              onOpenWebPlayground: openWithContent,
            })
          : null}
      </React.Suspense>
    </GenericContentDisplay>
  );
}
