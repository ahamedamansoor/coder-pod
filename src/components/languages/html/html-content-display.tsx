'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load all the topic components
const HtmlIntroduction = lazy(() => import('@/components/languages/html/topics/html-what-is-html').then(m => ({ default: m.default })));
const HtmlEditors = lazy(() => import('@/components/languages/html/topics/html-editors').then(m => ({ default: m.default })));
const HtmlDocumentStructure = lazy(() => import('@/components/languages/html/topics/html-document-structure'));
const HtmlSyntax = lazy(() => import('@/components/languages/html/topics/html-syntax'));
const HtmlAttributes = lazy(() => import('@/components/languages/html/topics/html-attributes'));
const HtmlElementsAndTags = lazy(() => import('@/components/languages/html/topics/html-elements-and-tags'));
const HtmlHeadingsAndParagraphs = lazy(() => import('@/components/languages/html/topics/html-headings-and-paragraphs'));
const TextFormatting = lazy(() => import('@/components/languages/html/topics/html-text-formatting'));
const HtmlComments = lazy(() => import('@/components/languages/html/topics/html-comments'));
const HtmlCharacterEntities = lazy(() => import('@/components/languages/html/topics/html-character-entities'));
const HtmlOrderedLists = lazy(() => import('@/components/languages/html/topics/html-ordered-lists'));
const HtmlUnorderedLists = lazy(() => import('@/components/languages/html/topics/html-unordered-lists'));
const HtmlDescriptionLists = lazy(() => import('@/components/languages/html/topics/html-description-lists'));
const HtmlLinks = lazy(() => import('@/components/languages/html/topics/html-links'));
const HtmlLinksTarget = lazy(() => import('@/components/languages/html/topics/html-links-target'));
const HtmlLinksInternal = lazy(() => import('@/components/languages/html/topics/html-links-internal'));
const HtmlLinksEmailTel = lazy(() => import('@/components/languages/html/topics/html-links-email-tel'));
const HtmlImages = lazy(() => import('@/components/languages/html/topics/html-images'));
const HtmlImageAttributes = lazy(() => import('@/components/languages/html/topics/html-image-attributes'));
const HtmlImageMaps = lazy(() => import('@/components/languages/html/topics/html-image-maps'));
const HtmlFigureFigcaption = lazy(() => import('@/components/languages/html/topics/html-figure-figcaption'));
const BlockVsInline = lazy(() => import('@/components/languages/html/topics/html-block-vs-inline'));
const HtmlBasicTables = lazy(() => import('@/components/languages/html/topics/html-basic-tables'));
const HtmlTableStructure = lazy(() => import('@/components/languages/html/topics/html-table-structure'));
const HtmlTableAttributes = lazy(() => import('@/components/languages/html/topics/html-table-attributes'));
const HtmlTableCaptions = lazy(() => import('@/components/languages/html/topics/html-table-captions'));
const HtmlSemanticElements = lazy(() => import('@/components/languages/html/topics/html-semantic-elements'));
const CharacterEntities = lazy(() => import('@/components/languages/html/topics/html-character-entities'));
const HtmlForms = lazy(() => import('@/components/languages/html/topics/html-forms'));
const FormInputTypes = lazy(() => import('@/components/languages/html/topics/html-form-input-types'));
const FormAttributes = lazy(() => import('@/components/languages/html/topics/html-form-attributes'));
const FormValidation = lazy(() => import('@/components/languages/html/topics/html-form-validation'));
const HtmlAudioElement = lazy(() => import('@/components/languages/html/topics/html-audio-element'));
const HtmlVideoElement = lazy(() => import('@/components/languages/html/topics/html-video-element'));
const HtmlVideoSubtitles = lazy(() => import('@/components/languages/html/topics/html-video-subtitles'));
const Iframes = lazy(() => import('@/components/languages/html/topics/html-iframes'));
const SvgBasics = lazy(() => import('@/components/languages/html/topics/html-svg-basics'));
const CanvasBasics = lazy(() => import('@/components/languages/html/topics/html-canvas-basics'));
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
  // 1. FUNDAMENTALS
  'introduction-to-html': HtmlIntroduction,
  'html-editors': HtmlEditors,
  'document-structure': HtmlDocumentStructure,
  'html-syntax': HtmlSyntax,
  'html-comments': HtmlComments,
  
  // 2. TEXT & CONTENT
  'html-elements-and-tags': HtmlElementsAndTags,
  'html-headings': HtmlHeadingsAndParagraphs,
  'text-formatting': TextFormatting,
  'character-entities': CharacterEntities,
  'html-attributes': HtmlAttributes,
  'global-attributes': GlobalAttributes,
  
  // 3. LINKS & NAVIGATION
  'html-links': HtmlLinks,
  'link-targets': HtmlLinksTarget,
  'internal-links': HtmlLinksInternal,
  'email-tel-links': HtmlLinksEmailTel,

  // 4. IMAGES & MEDIA
  'html-images': HtmlImages,
  'image-attributes': HtmlImageAttributes,
  'responsive-images': ResponsiveImages,
  'image-maps': HtmlImageMaps,
  'figure-figcaption': HtmlFigureFigcaption,
  'audio-element': HtmlAudioElement,
  'video-element': HtmlVideoElement,
  'video-subtitles': HtmlVideoSubtitles,
  'svg-basics': SvgBasics,
  'canvas-basics': CanvasBasics,

  // 5. LISTS & TABLES
  'ordered-lists': HtmlOrderedLists,
  'unordered-lists': HtmlUnorderedLists,
  'description-lists': HtmlDescriptionLists,
  'html-tables': HtmlBasicTables,
  'table-structure': HtmlTableStructure,
  'table-attributes': HtmlTableAttributes,
  'table-captions': HtmlTableCaptions,

  // 6. FORMS
  'html-forms': HtmlForms,
  'input-text': FormInputTypes,
  'input-numbers': FormInputTypes,
  'input-dates': FormInputTypes,
  'input-choice': FormInputTypes,
  'input-files': FormInputTypes,
  'input-advanced': FormInputTypes,
  'textarea-element': HtmlForms,
  'button-element': HtmlForms,
  'label-element': HtmlForms,
  'fieldset-legend': HtmlForms,
  'form-attributes': FormAttributes,
  'form-validation': FormValidation,
  'datalist-element': DatalistElement,
  'output-element': OutputElement,
  'progress-meter': ProgressAndMeter,
  
  // 7. SEMANTIC HTML
  'block-vs-inline': BlockVsInline,
  'div-span': BlockVsInline,
  'semantic-elements': HtmlSemanticElements,
  'header-footer': HtmlSemanticElements,
  'nav-element': HtmlSemanticElements,
  'main-element': HtmlSemanticElements,
  'article-element': HtmlSemanticElements,
  'section-element': HtmlSemanticElements,
  'aside-element': HtmlSemanticElements,
  'address-element': HtmlSemanticElements,
  'time-element': HtmlSemanticElements,
  
  // 8. DOCUMENT HEAD
  'head-element': HtmlDocumentMetadata,
  'title-element': HtmlDocumentMetadata,
  'meta-charset': HtmlDocumentMetadata,
  'meta-viewport': HtmlDocumentMetadata,
  'meta-description': MetaTagsAndSeo,
  'meta-keywords': MetaTagsAndSeo,
  'link-element': HtmlDocumentMetadata,
  'base-element': HtmlDocumentMetadata,
  'favicon': HtmlDocumentMetadata,
  
  // 9. SCRIPTS & STYLES
  'script-element': HtmlDocumentMetadata,
  'script-placement': HtmlDocumentMetadata,
  'style-element': HtmlDocumentMetadata,
  'noscript-element': HtmlDocumentMetadata,
  
  // 10. INTERACTIVE ELEMENTS
  'details-summary': DetailsAndSummary,
  'dialog-element': DialogElement,
  'content-editable': ContentEditable,
  'data-attributes': DataAttributes,
  'draggable': ContentEditable,
  
  // 11. IFRAMES & EMBEDDING
  'iframe-element': Iframes,
  'iframe-security': Iframes,
  'embed-object': Iframes,
  'template-element': HtmlTemplates,
  
  // 12. WEB COMPONENTS
  'web-components-intro': WebComponentsIntroduction,
  'custom-elements': CustomElements,
  'shadow-dom': ShadowDom,
  'html-templates': HtmlTemplates,
  'web-component-lifecycle': HtmlLifecycleCallbacks,
  
  // 13. HTML5 APIS
  'local-storage': WebStorageApi,
  'session-storage': WebStorageApi,
  'geolocation-api': GeolocationApi,
  'drag-drop-api': DragAndDropApi,
  'web-workers': WebWorkersApi,
  'history-api': Html5Apis,
  'fetch-api': FetchApi,
  
  // 14. PERFORMANCE
  'lazy-loading': LazyLoading,
  'preloading': LazyLoading,
  'async-defer': LazyLoading,
  'critical-rendering': LazyLoading,
  
  // 15. SEO & METADATA
  'seo-basics': MetaTagsAndSeo,
  'meta-tags-seo': MetaTagsAndSeo,
  'open-graph': MetaTagsAndSeo,
  'twitter-cards': MetaTagsAndSeo,
  'structured-data': MicrodataStructuredData,
  'canonical-urls': MetaTagsAndSeo,
  'hreflang': MetaTagsAndSeo,
  
  // 16. ACCESSIBILITY
  'accessibility-basics': Accessibility,
  'aria-basics': Accessibility,
  'aria-roles': Accessibility,
  'aria-properties': Accessibility,
  'aria-states': Accessibility,
  'keyboard-navigation': Accessibility,
  'skip-links': Accessibility,
  'alt-text': Accessibility,
  'accessible-forms': Accessibility,
  
  // 17. MODERN HTML FEATURES
  'dialog-modal': DialogElement,
  'popover-api': PopoverApi,
  'declarative-shadow-dom': ShadowDom,
  'lazy-loading-advanced': LazyLoading,
  'container-queries': Html5LatestFeatures,
  
  // 18. BEST PRACTICES
  'html-validation': HtmlBestPractices,
  'semantic-markup': HtmlBestPractices,
  'html-naming': HtmlBestPractices,
  'code-organization': HtmlBestPractices,
  'html-comments-docs': HtmlComments,
  'cross-browser': HtmlBestPractices,
  'html-debugging': HtmlBestPractices,
  'progressive-enhancement': HtmlBestPractices,
  'html-minification': HtmlBestPractices,
  'html-security': HtmlBestPractices,
  
  // LEGACY MAPPINGS (for backwards compatibility)
  'html-headings-and-paragraphs': HtmlHeadingsAndParagraphs,
  'html-semantic-elements': HtmlSemanticElements,
  'iframes': Iframes,
  'svg-and-canvas': SvgBasics,
  'html5-apis': Html5Apis,
  'web-workers-api': WebWorkersApi,
  'accessibility': Accessibility,
  'interview-questions': HtmlInterviewQuestions,
  'html5-latest-features': Html5LatestFeatures,
  'content-visibility': ContentVisibility,
  'progress-and-meter': ProgressAndMeter,
  'advanced-tables': HtmlTableStructure,
  'html-document-metadata': HtmlDocumentMetadata,
  'microdata-structured-data': MicrodataStructuredData,
  'html-best-practices': HtmlBestPractices,
  'web-storage-api': WebStorageApi,
  'drag-and-drop-api': DragAndDropApi,
  'web-components-introduction': WebComponentsIntroduction,
  'web-component-templates': HtmlTemplates,
  'web-component-slots': HtmlSlots,
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
