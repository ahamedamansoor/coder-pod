'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load all the topic components
const HtmlIntroduction = lazy(() => import('@/components/html/topics/html-introduction'));
const HtmlDocumentStructure = lazy(() => import('@/components/html/topics/html-document-structure'));
const HtmlAttributes = lazy(() => import('@/components/html/topics/html-attributes'));
const HtmlElementsAndTags = lazy(() => import('@/components/html/topics/html-elements-and-tags'));
const HtmlHeadingsAndParagraphs = lazy(() => import('@/components/html/topics/html-headings-and-paragraphs'));
const TextFormatting = lazy(() => import('@/components/html/topics/html-text-formatting'));
const HtmlComments = lazy(() => import('@/components/html/topics/html-comments'));
const HtmlLists = lazy(() => import('@/components/html/topics/html-lists'));
const HtmlLinks = lazy(() => import('@/components/html/topics/html-links'));
const HtmlImages = lazy(() => import('@/components/html/topics/html-images'));
const BlockVsInline = lazy(() => import('@/components/html/topics/html-block-vs-inline'));
const HtmlTables = lazy(() => import('@/components/html/topics/html-tables'));
const HtmlSemanticElements = lazy(() => import('@/components/html/topics/html-semantic-elements'));
const CharacterEntities = lazy(() => import('@/components/html/topics/html-character-entities'));
const HtmlForms = lazy(() => import('@/components/html/topics/html-forms'));
const FormInputTypes = lazy(() => import('@/components/html/topics/html-form-input-types'));
const FormAttributes = lazy(() => import('@/components/html/topics/html-form-attributes'));
const FormValidation = lazy(() => import('@/components/html/topics/html-form-validation'));
const AudioAndVideo = lazy(() => import('@/components/html/topics/html-audio-and-video'));
const Iframes = lazy(() => import('@/components/html/topics/html-iframes'));
const SvgAndCanvas = lazy(() => import('@/components/html/topics/html-svg-and-canvas'));
const ResponsiveImages = lazy(() => import('@/components/html/topics/html-responsive-images'));
const DialogElement = lazy(() => import('@/components/html/topics/html-dialog-element'));
const PopoverApi = lazy(() => import('@/components/html/topics/html-popover-api'));
const LazyLoading = lazy(() => import('@/components/html/topics/html-lazy-loading'));
const TemplateAndSlot = lazy(() => import('@/components/html/topics/html-template-and-slot'));
const DataAttributes = lazy(() => import('@/components/html/topics/html-data-attributes'));
const ContentVisibility = lazy(() => import('@/components/html/topics/html-content-visibility'));
const ContentEditable = lazy(() => import('@/components/html/topics/html-content-editable'));
const ProgressAndMeter = lazy(() => import('@/components/html/topics/html-progress-and-meter'));
const WebStorageApi = lazy(() => import('@/components/html/topics/html-web-storage-api'));
const FetchApi = lazy(() => import('@/components/html/topics/html-fetch-api'));
const GeolocationApi = lazy(() => import('@/components/html/topics/html-geolocation-api'));
const DragAndDropApi = lazy(() => import('@/components/html/topics/html-drag-and-drop-api'));
const Html5Apis = lazy(() => import('@/components/html/topics/html5-apis'));
const WebWorkersApi = lazy(() => import('@/components/html/topics/html-web-workers-api'));
const DetailsAndSummary = lazy(() => import('@/components/html/topics/html-details-and-summary').then(m => ({ default: m.default })));
const MicrodataStructuredData = lazy(() => import('@/components/html/topics/html-microdata-structured-data'));
const HtmlBestPractices = lazy(() => import('@/components/html/topics/html-best-practices'));
const GlobalAttributes = lazy(() => import('@/components/html/topics/html-global-attributes'));
const DatalistElement = lazy(() => import('@/components/html/topics/html-datalist-element'));
const OutputElement = lazy(() => import('@/components/html/topics/html-output-element'));
const Accessibility = lazy(() => import('@/components/html/topics/html-accessibility'));
const HtmlInterviewQuestions = lazy(() => import('@/components/html/topics/html-interview-questions'));
const Html5LatestFeatures = lazy(() => import('@/components/html/topics/html5-latest-features'));
const AdvancedTables = lazy(() => import('@/components/html/topics/html-advanced-tables'));
const MetaTagsAndSeo = lazy(() => import('@/components/html/topics/html-meta-tags-and-seo'));
const HtmlDocumentMetadata = lazy(() => import('@/components/html/topics/html-document-metadata'));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'introduction-to-html': HtmlIntroduction,
  'document-structure': HtmlDocumentStructure,
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
  'audio-and-video': AudioAndVideo,
  'iframes': Iframes,
  'svg-and-canvas': SvgAndCanvas,
  'responsive-images': ResponsiveImages,
  'dialog-element': DialogElement,
  'popover-api': PopoverApi,
  'html5-apis': Html5Apis,
  'web-workers-api': WebWorkersApi,
  'accessibility': Accessibility,
  'interview-questions': HtmlInterviewQuestions,
  'html5-latest-features': Html5LatestFeatures,
  'details-and-summary': DetailsAndSummary,
  'lazy-loading': LazyLoading,
  'template-and-slot': TemplateAndSlot,
  'data-attributes': DataAttributes,
  'content-visibility': ContentVisibility,
  'content-editable': ContentEditable,
  'progress-and-meter': ProgressAndMeter,
  'advanced-tables': AdvancedTables,
  'meta-tags-and-seo': MetaTagsAndSeo,
  'html-document-metadata': HtmlDocumentMetadata,
  'microdata-structured-data': MicrodataStructuredData,
  'html-best-practices': HtmlBestPractices,
  'global-attributes': GlobalAttributes,
  'web-storage-api': WebStorageApi,
  'fetch-api': FetchApi,
  'geolocation-api': GeolocationApi,
  'drag-and-drop-api': DragAndDropApi,
  'datalist-element': DatalistElement,
  'output-element': OutputElement,
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
  onOpenEditorAction,
}: {
  topic: Topic; 
  language: Language; 
  onOpenEditorAction: (code: string) => void;
}) {
  const { openWithContent } = useWebPlayground();

  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay topic={topic} language={language} onOpenEditor={onOpenEditorAction}>
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          React.createElement(CustomTopicComponent as any, { onOpenWebPlayground: openWithContent })
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
