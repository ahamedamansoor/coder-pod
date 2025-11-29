'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load all the topic components
const HtmlIntroduction = lazy(() => import('@/components/languages/html/topics/html-topic'));
const HtmlDocumentStructure = lazy(() => import('@/components/languages/html/topics/html-document-structure'));
const HtmlAttributes = lazy(() => import('@/components/languages/html/topics/html-attributes'));
const HtmlElementsAndTags = lazy(() => import('@/components/languages/html/topics/html-elements-and-tags'));
const HtmlHeadingsAndParagraphs = lazy(() => import('@/components/languages/html/topics/html-headings-and-paragraphs'));
const TextFormatting = lazy(() => import('@/components/languages/html/topics/html-text-formatting'));
const HtmlComments = lazy(() => import('@/components/languages/html/topics/html-comments'));
const HtmlLists = lazy(() => import('@/components/languages/html/topics/html-lists'));
const HtmlLinks = lazy(() => import('@/components/languages/html/topics/html-links'));
const HtmlImages = lazy(() => import('@/components/languages/html/topics/html-images'));
const BlockVsInline = lazy(() => import('@/components/languages/html/topics/html-block-vs-inline'));
const HtmlTables = lazy(() => import('@/components/languages/html/topics/html-tables'));
const HtmlSemanticElements = lazy(() => import('@/components/languages/html/topics/html-semantic-elements'));
const CharacterEntities = lazy(() => import('@/components/languages/html/topics/html-character-entities'));
const HtmlForms = lazy(() => import('@/components/languages/html/topics/html-forms'));
const FormInputTypes = lazy(() => import('@/components/languages/html/topics/html-form-input-types'));
const FormAttributes = lazy(() => import('@/components/languages/html/topics/html-form-attributes'));
const FormValidation = lazy(() => import('@/components/languages/html/topics/html-form-validation'));
const AudioAndVideo = lazy(() => import('@/components/languages/html/topics/html-audio-and-video'));
const Iframes = lazy(() => import('@/components/languages/html/topics/html-iframes'));
const SvgAndCanvas = lazy(() => import('@/components/languages/html/topics/html-svg-and-canvas'));
const ResponsiveImages = lazy(() => import('@/components/languages/html/topics/html-responsive-images'));
const DialogElement = lazy(() => import('@/components/languages/html/topics/html-dialog-element'));
const PopoverApi = lazy(() => import('@/components/languages/html/topics/html-popover-api'));
const LazyLoading = lazy(() => import('@/components/languages/html/topics/html-lazy-loading'));
const DataAttributes = lazy(() => import('@/components/languages/html/topics/html-data-attributes'));
const ContentVisibility = lazy(() => import('@/components/languages/html/topics/html-content-visibility'));
const ContentEditable = lazy(() => import('@/components/languages/html/topics/html-content-editable'));
const ProgressAndMeter = lazy(() => import('@/components/languages/html/topics/html-progress-and-meter'));
const WebStorageApi = lazy(() => import('@/components/languages/html/topics/html-web-storage-api'));
const FetchApi = lazy(() => import('@/components/languages/html/topics/html-fetch-api'));
const GeolocationApi = lazy(() => import('@/components/languages/html/topics/html-geolocation-api'));
const DragAndDropApi = lazy(() => import('@/components/languages/html/topics/html-drag-and-drop-api'));
const Html5Apis = lazy(() => import('@/components/languages/html/topics/html5-apis'));
const WebWorkersApi = lazy(() => import('@/components/languages/html/topics/html-web-workers-api'));
const DetailsAndSummary = lazy(() => import('@/components/languages/html/topics/html-details-and-summary').then(m => ({ default: m.default })));
const MicrodataStructuredData = lazy(() => import('@/components/languages/html/topics/html-microdata-structured-data'));
const HtmlBestPractices = lazy(() => import('@/components/languages/html/topics/html-best-practices'));
const GlobalAttributes = lazy(() => import('@/components/languages/html/topics/html-global-attributes'));
const DatalistElement = lazy(() => import('@/components/languages/html/topics/html-datalist-element'));
const OutputElement = lazy(() => import('@/components/languages/html/topics/html-output-element'));
const Accessibility = lazy(() => import('@/components/languages/html/topics/html-accessibility'));
const HtmlInterviewQuestions = lazy(() => import('@/components/languages/html/topics/html-interview-questions'));
const Html5LatestFeatures = lazy(() => import('@/components/languages/html/topics/html5-latest-features'));
const AdvancedTables = lazy(() => import('@/components/languages/html/topics/html-advanced-tables'));
const MetaTagsAndSeo = lazy(() => import('@/components/languages/html/topics/html-meta-tags-and-seo'));
const HtmlDocumentMetadata = lazy(() => import('@/components/languages/html/topics/html-document-metadata'));
const WebComponentsIntroduction = lazy(() => import('@/components/languages/html/topics/html-web-components-introduction'));
const CustomElements = lazy(() => import('@/components/languages/html/topics/html-custom-elements'));
const ShadowDom = lazy(() => import('@/components/languages/html/topics/html-shadow-dom'));
const HtmlTemplates = lazy(() => import('@/components/languages/html/topics/html-templates'));
const HtmlSlots = lazy(() => import('@/components/languages/html/topics/html-slots'));
const HtmlLifecycleCallbacks = lazy(() => import('@/components/languages/html/topics/html-lifecycle-callbacks'));
const HtmlAttributesProperties = lazy(() => import('@/components/languages/html/topics/html-attributes-properties'));

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
  'web-components-introduction': WebComponentsIntroduction,
  'custom-elements': CustomElements,
  'shadow-dom': ShadowDom,
  'web-component-templates': HtmlTemplates,
  'web-component-slots': HtmlSlots,
  'web-component-lifecycle': HtmlLifecycleCallbacks,
  'web-component-attributes': HtmlAttributesProperties,
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
}: {
  topic: Topic; 
  language: Language; 
}) {
  const { openWithContent } = useWebPlayground();

  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          React.createElement(CustomTopicComponent as any, { onOpenWebPlayground: openWithContent })
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
