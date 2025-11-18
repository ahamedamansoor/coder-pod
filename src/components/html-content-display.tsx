'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import { GenericContentDisplay } from './generic-content-display';
import { useWebPlayground } from './web-playground-context';

// Lazy load all the topic components
const HtmlIntroduction = lazy(() => import('./html-topics/html-introduction'));
const DocumentStructure = lazy(() => import('./html-topics/document-structure'));
const HtmlAttributes = lazy(() => import('./html-topics/html-attributes'));
const HtmlElementsAndTags = lazy(() => import('./html-topics/html-elements-and-tags'));
const HtmlHeadingsAndParagraphs = lazy(() => import('./html-topics/html-headings-and-paragraphs'));
const TextFormatting = lazy(() => import('./html-topics/html-text-formatting'));
const HtmlComments = lazy(() => import('./html-topics/html-comments'));
const HtmlLists = lazy(() => import('./html-topics/html-lists'));
const HtmlLinks = lazy(() => import('./html-topics/html-links'));
const HtmlImages = lazy(() => import('./html-topics/html-images'));
const BlockVsInline = lazy(() => import('./html-topics/block-vs-inline'));
const HtmlTables = lazy(() => import('./html-topics/html-tables'));
const HtmlSemanticElements = lazy(() => import('./html-topics/html-semantic-elements'));
const CharacterEntities = lazy(() => import('./html-topics/html-character-entities'));
const HtmlForms = lazy(() => import('./html-topics/html-forms'));
const FormInputTypes = lazy(() => import('./html-topics/form-input-types'));
const FormAttributes = lazy(() => import('./html-topics/form-attributes'));
const FormValidation = lazy(() => import('./html-topics/form-validation'));
const DatalistElement = lazy(() => import('./html-topics/datalist-element'));
const OutputElement = lazy(() => import('./html-topics/output-element'));
const AudioAndVideo = lazy(() => import('./html-topics/audio-and-video'));
const Iframes = lazy(() => import('./html-topics/iframes'));
const SvgAndCanvas = lazy(() => import('./html-topics/svg-and-canvas'));
const ResponsiveImages = lazy(() => import('./html-topics/responsive-images'));
const DialogElement = lazy(() => import('./html-topics/dialog-element'));
const PopoverApi = lazy(() => import('./html-topics/popover-api'));
const Html5Apis = lazy(() => import('./html-topics/html5-apis'));
const WebWorkersApi = lazy(() => import('./html-topics/web-workers-api'));
const Accessibility = lazy(() => import('./html-topics/accessibility'));
const HtmlInterviewSimulator = lazy(() => import('./html-topics/html-interview-simulator'));
const Html5LatestFeatures = lazy(() => import('./html-topics/html5-latest-features'));
const DetailsAndSummary = lazy(() => import('./html-topics/details-and-summary'));
const LazyLoading = lazy(() => import('./html-topics/lazy-loading'));
const TemplateAndSlot = lazy(() => import('./html-topics/template-and-slot'));
const DataAttributes = lazy(() => import('./html-topics/data-attributes'));
const ContentVisibility = lazy(() => import('./html-topics/content-visibility'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-html': HtmlIntroduction,
  'document-structure': DocumentStructure,
  'html-attributes': HtmlAttributes,
  'html-elements-and-tags': HtmlElementsAndTags,
  'html-headings-and-paragraphs': HtmlHeadingsAndParagraphs,
  'text-formatting': TextFormatting,
  'html-comments': HtmlComments,
  'html-lists': HtmlLists,
  'html-links': HtmlLinks,
  'html-images': HtmlImages,
  'block-vs-inline': BlockVsInline,
  'html-tables': HtmlTables,
  'html-semantic-elements': HtmlSemanticElements,
  'character-entities': CharacterEntities,
  'html-forms': HtmlForms,
  'form-input-types': FormInputTypes,
  'form-attributes': FormAttributes,
  'form-validation': FormValidation,
  'datalist-element': DatalistElement,
  'output-element': OutputElement,
  'audio-and-video': AudioAndVideo,
  'iframes': Iframes,
  'svg-and-canvas': SvgAndCanvas,
  'responsive-images': ResponsiveImages,
  'dialog-element': DialogElement,
  'popover-api': PopoverApi,
  'html5-apis': Html5Apis,
  'web-workers-api': WebWorkersApi,
  'accessibility': Accessibility,
  'interview-simulator': HtmlInterviewSimulator,
  'html5-latest-features': Html5LatestFeatures,
  'details-and-summary': DetailsAndSummary,
  'lazy-loading': LazyLoading,
  'template-and-slot': TemplateAndSlot,
  'data-attributes': DataAttributes,
  'content-visibility': ContentVisibility,
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

export function HtmlContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic; 
  language: Language; 
  onOpenEditor: (code: string) => void;
}) {
  const { openWithContent } = useWebPlayground();

  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay topic={topic} language={language} onOpenEditor={onOpenEditor}>
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenEditor={onOpenEditor} onOpenWebPlayground={openWithContent} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
