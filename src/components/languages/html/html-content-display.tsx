'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';
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
const CharacterEntities = lazy(() => import('@/components/languages/html/topics/html-character-entities'));
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
const HtmlBasicTables = lazy(() => import('@/components/languages/html/topics/html-basic-tables'));
const HtmlTableStructure = lazy(() => import('@/components/languages/html/topics/html-table-structure'));
const HtmlTableAttributes = lazy(() => import('@/components/languages/html/topics/html-table-attributes'));
const HtmlTableCaptions = lazy(() => import('@/components/languages/html/topics/html-table-captions'));
const HtmlForms = lazy(() => import('@/components/languages/html/topics/html-forms'));
const FormInputTypes = lazy(() => import('@/components/languages/html/topics/html-form-input-types'));
const FormAttributes = lazy(() => import('@/components/languages/html/topics/html-form-attributes'));
const FormValidation = lazy(() => import('@/components/languages/html/topics/html-form-validation'));
const HtmlFormBasics = lazy(() => import('@/components/languages/html/topics/html-form-basics'));
const HtmlTextInputs = lazy(() => import('@/components/languages/html/topics/html-text-inputs'));
const HtmlNumberInputs = lazy(() => import('@/components/languages/html/topics/html-number-inputs'));
const HtmlDateTimeInputs = lazy(() => import('@/components/languages/html/topics/html-date-time-inputs'));
const HtmlChoiceInputs = lazy(() => import('@/components/languages/html/topics/html-choice-inputs'));
const HtmlFileInputs = lazy(() => import('@/components/languages/html/topics/html-file-inputs'));
const HtmlFormButtons = lazy(() => import('@/components/languages/html/topics/html-form-buttons'));
const HtmlFormStructure = lazy(() => import('@/components/languages/html/topics/html-form-structure'));
const HtmlTextarea = lazy(() => import('@/components/languages/html/topics/html-textarea'));
const HtmlButtonsDetailed = lazy(() => import('@/components/languages/html/topics/html-buttons'));
const HtmlFieldsetLegends = lazy(() => import('@/components/languages/html/topics/html-fieldset-legend'));
const HtmlBlockInlineNew = lazy(() => import('@/components/languages/html/topics/html-block-inline-new'));
const HtmlDivSpan = lazy(() => import('@/components/languages/html/topics/html-div-span'));
const BlockVsInline = lazy(() => import('@/components/languages/html/topics/html-block-vs-inline'));
const HtmlSemanticStructure = lazy(() => import('@/components/languages/html/topics/html-semantic-structure'));
const HtmlSemanticElementsNew = lazy(() => import('@/components/languages/html/topics/html-semantic-elements-new'));
const HtmlSemanticElementsOld = lazy(() => import('@/components/languages/html/topics/html-semantic-elements'));
const HtmlAudioElement = lazy(() => import('@/components/languages/html/topics/html-audio-element'));
const HtmlVideoElement = lazy(() => import('@/components/languages/html/topics/html-video-element'));
const HtmlVideoSubtitles = lazy(() => import('@/components/languages/html/topics/html-video-subtitles').then(m => ({ default: m.default })));
const Iframes = lazy(() => import('@/components/languages/html/topics/html-iframes'));
const SvgBasics = lazy(() => import('@/components/languages/html/topics/html-svg-basics'));
const CanvasBasics = lazy(() => import('@/components/languages/html/topics/html-canvas-basics'));
const ResponsiveImages = lazy(() => import('@/components/languages/html/topics/html-responsive-images'));
const DialogElement = lazy(() => import('@/components/languages/html/topics/html-dialog-element'));
const PopoverApi = lazy(() => import('@/components/languages/html/topics/html-popover-api'));
const LazyLoading = lazy(() => import('@/components/languages/html/topics/html-lazy-loading'));
const ResourcePreloading = lazy(() => import('@/components/languages/html/topics/html-resource-preloading'));
const AsyncDefer = lazy(() => import('@/components/languages/html/topics/html-async-defer'));
const CriticalRenderingPath = lazy(() => import('@/components/languages/html/topics/html-critical-rendering-path'));
const DataAttributes = lazy(() => import('@/components/languages/html/topics/html-data-attributes'));
const ContentVisibility = lazy(() => import('@/components/languages/html/topics/html-content-visibility'));
const ContentEditable = lazy(() => import('@/components/languages/html/topics/html-content-editable'));
const ProgressAndMeter = lazy(() => import('@/components/languages/html/topics/html-progress-and-meter'));
const WebStorageApi = lazy(() => import('@/components/languages/html/topics/html-web-storage-api'));
const LocalStorageApi = lazy(() => import('@/components/languages/html/topics/html-local-storage'));
const SessionStorageApi = lazy(() => import('@/components/languages/html/topics/html-session-storage'));
const FetchApi = lazy(() => import('@/components/languages/html/topics/html-fetch-api'));
const GeolocationApi = lazy(() => import('@/components/languages/html/topics/html-geolocation-api'));
const DragAndDropApi = lazy(() => import('@/components/languages/html/topics/html-drag-and-drop-api'));
const Html5Apis = lazy(() => import('@/components/languages/html/topics/html5-apis'));
const WebWorkersApi = lazy(() => import('@/components/languages/html/topics/html-web-workers-api'));
const HistoryApi = lazy(() => import('@/components/languages/html/topics/html-history-api'));
const DetailsAndSummary = lazy(() => import('@/components/languages/html/topics/html-details-and-summary').then(m => ({ default: m.default })));
const MicrodataStructuredData = lazy(() => import('@/components/languages/html/topics/html-microdata-structured-data'));
const HtmlBestPractices = lazy(() => import('@/components/languages/html/topics/html-best-practices'));
const GlobalAttributes = lazy(() => import('@/components/languages/html/topics/html-global-attributes'));
const DatalistElement = lazy(() => import('@/components/languages/html/topics/html-datalist-element'));
const HtmlDataList = lazy(() => import('@/components/languages/html/topics/html-datalist'));
const OutputElement = lazy(() => import('@/components/languages/html/topics/html-output-element'));
const Accessibility = lazy(() => import('@/components/languages/html/topics/html-accessibility'));
const HtmlInterviewQuestions = lazy(() => import('@/components/languages/html/topics/html-interview-questions'));
const Html5LatestFeatures = lazy(() => import('@/components/languages/html/topics/html5-latest-features'));
const MetaTagsAndSeo = lazy(() => import('@/components/languages/html/topics/html-meta-tags-and-seo'));
const HtmlDocumentMetadata = lazy(() => import('@/components/languages/html/topics/html-document-metadata'));
// Removed old import - using HtmlWebComponentsIntro instead
const CustomElements = lazy(() => import('@/components/languages/html/topics/html-custom-elements'));
const ShadowDom = lazy(() => import('@/components/languages/html/topics/html-shadow-dom'));
const HtmlTemplates = lazy(() => import('@/components/languages/html/topics/html-templates'));
const HtmlSlots = lazy(() => import('@/components/languages/html/topics/html-slots'));
const HtmlLifecycleCallbacks = lazy(() => import('@/components/languages/html/topics/html-lifecycle-callbacks'));
const HtmlAttributesProperties = lazy(() => import('@/components/languages/html/topics/html-attributes-properties'));

// NEW SEMANTIC ELEMENT COMPONENTS
const HtmlHeaderElement = lazy(() => import('@/components/languages/html/topics/html-header-element'));
const HtmlFooterElement = lazy(() => import('@/components/languages/html/topics/html-footer-element'));
const HtmlNavElement = lazy(() => import('@/components/languages/html/topics/html-nav-element'));
// placeholders for yet to be created
const HtmlMainElement = lazy(() => import('@/components/languages/html/topics/html-main-element'));
const HtmlArticleElement = lazy(() => import('@/components/languages/html/topics/html-article-element'));
const HtmlSectionElement = lazy(() => import('@/components/languages/html/topics/html-section-element'));
const HtmlAsideElement = lazy(() => import('@/components/languages/html/topics/html-aside-element'));
const HtmlAddressElement = lazy(() => import('@/components/languages/html/topics/html-address-element'));
const HtmlTimeElement = lazy(() => import('@/components/languages/html/topics/html-time-element'));

// DOCUMENT HEAD COMPONENTS
const HtmlHeadElement = lazy(() => import('@/components/languages/html/topics/html-head-element'));
const HtmlTitleElement = lazy(() => import('@/components/languages/html/topics/html-title-element'));
const HtmlCharsetElement = lazy(() => import('@/components/languages/html/topics/html-charset-element'));
const HtmlViewportMeta = lazy(() => import('@/components/languages/html/topics/html-viewport-meta'));
const HtmlMetaDescriptionElement = lazy(() => import('@/components/languages/html/topics/html-meta-description'));
const HtmlMetaKeywordsElement = lazy(() => import('@/components/languages/html/topics/html-meta-keywords'));
const HtmlLinkElement = lazy(() => import('@/components/languages/html/topics/html-link-element'));
const HtmlFavicon = lazy(() => import('@/components/languages/html/topics/html-favicon'));
const HtmlBaseElement = lazy(() => import('@/components/languages/html/topics/html-base-element'));

// SCRIPTS & STYLES COMPONENTS
const HtmlScriptElement = lazy(() => import('@/components/languages/html/topics/html-script-element'));
const HtmlScriptPlacement = lazy(() => import('@/components/languages/html/topics/html-script-placement'));
const HtmlStyleElement = lazy(() => import('@/components/languages/html/topics/html-style-element'));
const HtmlNoscriptElement = lazy(() => import('@/components/languages/html/topics/html-noscript-element'));

// INTERACTIVE ELEMENTS
const HtmlDraggable = lazy(() => import('@/components/languages/html/topics/html-draggable'));

// MODERN HTML FEATURES
const HtmlLazyLoadingAdvanced = lazy(() => import('@/components/languages/html/topics/html-lazy-loading-advanced'));
const HtmlContainerQueries = lazy(() => import('@/components/languages/html/topics/html-container-queries'));

// IFRAMES & EMBEDDING
const HtmlIframeElement = lazy(() => import('@/components/languages/html/topics/html-iframe-element'));
const HtmlIframeSecurity = lazy(() => import('@/components/languages/html/topics/html-iframe-security'));
const HtmlEmbedObject = lazy(() => import('@/components/languages/html/topics/html-embed-object'));
const HtmlTemplateElement = lazy(() => import('@/components/languages/html/topics/html-template-element'));

// WEB COMPONENTS
const HtmlWebComponentsIntro = lazy(() => import('@/components/languages/html/topics/html-web-components-intro'));

// SEO & METADATA COMPONENTS
const HtmlSeoBasics = lazy(() => import('@/components/languages/html/topics/html-seo-basics'));
const HtmlMetaTagsSeo = lazy(() => import('@/components/languages/html/topics/html-meta-tags-seo'));
const HtmlOpenGraph = lazy(() => import('@/components/languages/html/topics/html-open-graph'));
const HtmlTwitterCards = lazy(() => import('@/components/languages/html/topics/html-twitter-cards'));
const HtmlStructuredData = lazy(() => import('@/components/languages/html/topics/html-structured-data'));
const HtmlCanonicalUrls = lazy(() => import('@/components/languages/html/topics/html-canonical-urls'));
const HtmlHreflang = lazy(() => import('@/components/languages/html/topics/html-hreflang'));

// ACCESSIBILITY COMPONENTS
const HtmlAccessibilityBasics = lazy(() => import('@/components/languages/html/topics/html-accessibility-basics'));
const HtmlAriaBasics = lazy(() => import('@/components/languages/html/topics/html-aria-basics'));
const HtmlAriaProperties = lazy(() => import('@/components/languages/html/topics/html-aria-properties'));
const HtmlAriaRoles = lazy(() => import('@/components/languages/html/topics/html-aria-roles'));
const HtmlAriaStates = lazy(() => import('@/components/languages/html/topics/html-aria-states'));
const HtmlKeyboardNavigation = lazy(() => import('@/components/languages/html/topics/html-keyboard-navigation'));
const HtmlSkipLinks = lazy(() => import('@/components/languages/html/topics/html-skip-links'));
const HtmlAltText = lazy(() => import('@/components/languages/html/topics/html-alt-text'));
const HtmlAccessibleForms = lazy(() => import('@/components/languages/html/topics/html-accessible-forms'));

// BEST PRACTICES COMPONENTS
const HtmlValidation = lazy(() => import('@/components/languages/html/topics/html-validation'));
const HtmlSemanticMarkupPractices = lazy(() => import('@/components/languages/html/topics/html-semantic-markup-practices'));
const HtmlCodeOrganization = lazy(() => import('@/components/languages/html/topics/html-code-organization'));
const HtmlNamingConventions = lazy(() => import('@/components/languages/html/topics/html-naming-conventions'));
const HtmlDocumentation = lazy(() => import('@/components/languages/html/topics/html-documentation'));
const HtmlCrossBrowser = lazy(() => import('@/components/languages/html/topics/html-cross-browser'));
const HtmlDebugging = lazy(() => import('@/components/languages/html/topics/html-debugging'));
const HtmlProgressiveEnhancement = lazy(() => import('@/components/languages/html/topics/html-progressive-enhancement'));
const HtmlMinification = lazy(() => import('@/components/languages/html/topics/html-minification'));
const HtmlSecurity = lazy(() => import('@/components/languages/html/topics/html-security'));

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
  'form-basics': HtmlFormBasics,
  'html-forms': HtmlFormBasics,
  'text-inputs': HtmlTextInputs,
  'number-inputs': HtmlNumberInputs,
  'date-time-inputs': HtmlDateTimeInputs,
  'choice-inputs': HtmlChoiceInputs,
  'file-inputs': HtmlFileInputs,
  'form-buttons': HtmlFormButtons,
  'form-structure': HtmlFormStructure,
  'input-text': HtmlTextInputs,
  'input-numbers': HtmlNumberInputs,
  'input-dates': HtmlDateTimeInputs,
  'input-choice': HtmlChoiceInputs,
  'input-files': HtmlFileInputs,
  'input-advanced': HtmlDateTimeInputs,
  'textarea': HtmlTextarea,
  'textarea-element': HtmlTextarea,
  'buttons': HtmlButtonsDetailed,
  'button-element': HtmlButtonsDetailed,
  'fieldset-legend': HtmlFieldsetLegends,
  'fieldset-legends': HtmlFieldsetLegends,
  'label-element': HtmlFormStructure,
  'datalist': HtmlDataList,
  'output-element': OutputElement,
  'progress-and-meter': ProgressAndMeter,
  'form-attributes': FormAttributes,
  'form-validation': FormValidation,
  'datalist-element': DatalistElement,
  'progress-meter': ProgressAndMeter,
  
  // 7. SEMANTIC HTML
  'block-inline': HtmlBlockInlineNew,
  'block-vs-inline': BlockVsInline,
  'div-span': HtmlDivSpan,
  'div': HtmlDivSpan,
  'span': HtmlDivSpan,
  'semantic-structure': HtmlSemanticStructure,
  'semantic-elements': HtmlSemanticElementsOld,
  'semantic-html': HtmlSemanticElementsNew,
  'header-footer': HtmlHeaderElement,
  'nav-element': HtmlNavElement,
  'main-element': HtmlMainElement,
  'article-element': HtmlArticleElement,
  'section-element': HtmlSectionElement,
  'aside-element': HtmlAsideElement,
  'address-element': HtmlAddressElement,
  'time-element': HtmlTimeElement,
  
  // 8. DOCUMENT HEAD
  'head-element': HtmlHeadElement,
  'title-element': HtmlTitleElement,
  'meta-charset': HtmlCharsetElement,
  'meta-viewport': HtmlViewportMeta,
  'meta-description': HtmlMetaDescriptionElement,
  'meta-keywords': HtmlMetaKeywordsElement,
  'link-element': HtmlLinkElement,
  'base-element': HtmlBaseElement,
  'favicon': HtmlFavicon,
  
  // 9. SCRIPTS & STYLES
  'script-element': HtmlScriptElement,
  'script-placement': HtmlScriptPlacement,
  'style-element': HtmlStyleElement,
  'noscript-element': HtmlNoscriptElement,
  
  // 10. INTERACTIVE ELEMENTS
  'details-summary': DetailsAndSummary,
  'dialog-element': DialogElement,
  'content-editable': ContentEditable,
  'data-attributes': DataAttributes,
  'draggable': HtmlDraggable,
  
  // 11. IFRAMES & EMBEDDING
  'iframe-element': HtmlIframeElement,
  'iframe-security': HtmlIframeSecurity,
  'embed-object': HtmlEmbedObject,
  'template-element': HtmlTemplateElement,
  
  // 12. WEB COMPONENTS
  'web-components-intro': HtmlWebComponentsIntro,
  'custom-elements': CustomElements,
  'shadow-dom': ShadowDom,
  'html-templates': HtmlTemplates,
  'web-component-lifecycle': HtmlLifecycleCallbacks,
  
  // 13. HTML5 APIS
  'local-storage': LocalStorageApi,
  'session-storage': SessionStorageApi,
  'geolocation-api': GeolocationApi,
  'drag-drop-api': DragAndDropApi,
  'web-workers': WebWorkersApi,
  'history-api': HistoryApi,
  'fetch-api': FetchApi,
  
  // 14. PERFORMANCE
  'lazy-loading': LazyLoading,
  'preloading': ResourcePreloading,
  'resource-preloading': ResourcePreloading,
  'async-defer': AsyncDefer,
  'critical-rendering': CriticalRenderingPath,
  'critical-rendering-path': CriticalRenderingPath,
  
  // 15. SEO & METADATA
  'seo-basics': HtmlSeoBasics,
  'meta-tags-seo': HtmlMetaTagsSeo,
  'open-graph': HtmlOpenGraph,
  'twitter-cards': HtmlTwitterCards,
  'structured-data': HtmlStructuredData,
  'canonical-urls': HtmlCanonicalUrls,
  'hreflang': HtmlHreflang,
  
  // 16. ACCESSIBILITY
  'accessibility-basics': HtmlAccessibilityBasics,
  'aria-basics': HtmlAriaBasics,
  'aria-properties': HtmlAriaProperties,
  'aria-roles': HtmlAriaRoles,
  'aria-states': HtmlAriaStates,
  'keyboard-navigation': HtmlKeyboardNavigation,
  'skip-links': HtmlSkipLinks,
  'alt-text': HtmlAltText,
  'accessible-forms': HtmlAccessibleForms,
  
  // 17. MODERN HTML FEATURES
  'dialog-modal': DialogElement,
  'popover-api': PopoverApi,
  'declarative-shadow-dom': ShadowDom,
  'lazy-loading-advanced': HtmlLazyLoadingAdvanced,
  'container-queries': HtmlContainerQueries,
  
  // 18. BEST PRACTICES
  'html-validation': HtmlValidation,
  'semantic-markup': HtmlSemanticMarkupPractices,
  'html-naming': HtmlNamingConventions,
  'code-organization': HtmlCodeOrganization,
  'html-comments-docs': HtmlDocumentation,
  'cross-browser': HtmlCrossBrowser,
  'html-debugging': HtmlDebugging,
  'progressive-enhancement': HtmlProgressiveEnhancement,
  'html-minification': HtmlMinification,
  'html-security': HtmlSecurity,
  
  // LEGACY MAPPINGS (for backwards compatibility)
  'html-headings-and-paragraphs': HtmlHeadingsAndParagraphs,
  'html-semantic-elements': HtmlSemanticElementsNew,
  'iframes': Iframes,
  'svg-and-canvas': SvgBasics,
  'html5-apis': Html5Apis,
  'web-workers-api': WebWorkersApi,
  'accessibility': Accessibility,
  'interview-questions': HtmlInterviewQuestions,
  'html5-latest-features': Html5LatestFeatures,
  'content-visibility': ContentVisibility,
  'advanced-tables': HtmlTableStructure,
  'html-document-metadata': HtmlDocumentMetadata,
  'microdata-structured-data': MicrodataStructuredData,
  'html-best-practices': HtmlBestPractices,
  'web-storage-api': WebStorageApi,
  'drag-and-drop-api': DragAndDropApi,
  'web-components-introduction': HtmlWebComponentsIntro,
  'web-component-templates': HtmlTemplates,
  'web-component-slots': HtmlSlots,
  'web-component-attributes': HtmlAttributesProperties,
};

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
      <Suspense fallback={<CompactLoadingSkeleton />}>
        {CustomTopicComponent ? (
          React.createElement(CustomTopicComponent as any, { onOpenWebPlayground: openWithContent })
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
