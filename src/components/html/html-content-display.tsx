
'use client';

import type { Language, Topic } from '@/app/data';
import React, from 'react';
import { Skeleton } from './ui/skeleton';
import { GenericContentDisplay } from './generic-content-display';
import { useWebPlayground } from './web-playground-context';

// Lazy load all the topic components
const HtmlIntroduction = React.lazy(() => import('./html-topics/html-introduction'));
const DocumentStructure = React.lazy(() => import('./html-topics/document-structure'));
const HtmlAttributes = React.lazy(() => import('./html-topics/html-attributes'));
const HtmlElementsAndTags = React.lazy(() => import('./html-topics/html-elements-and-tags'));
const HtmlHeadingsAndParagraphs = React.lazy(() => import('./html-topics/html-headings-and-paragraphs'));
const TextFormatting = React.lazy(() => import('./html-topics/html-text-formatting'));
const HtmlComments = React.lazy(() => import('./html-topics/html-comments'));
const HtmlLists = React.lazy(() => import('./html-topics/html-lists'));
const HtmlLinks = React.lazy(() => import('./html-topics/html-links'));
const HtmlImages = React.lazy(() => import('./html-topics/html-images'));
const BlockVsInline = React.lazy(() => import('./html-topics/block-vs-inline'));
const HtmlTables = React.lazy(() => import('./html-topics/html-tables'));
const HtmlSemanticElements = React.lazy(() => import('./html-topics/html-semantic-elements'));
const CharacterEntities = React.lazy(() => import('./html-topics/html-character-entities'));
const HtmlForms = React.lazy(() => import('./html-topics/html-forms'));
const FormInputTypes = React.lazy(() => import('./html-topics/form-input-types'));
const AudioAndVideo = React.lazy(() => import('./html-topics/audio-and-video'));


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
  'audio-and-video': AudioAndVideo,
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
      <React.Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenEditor={onOpenEditor} onOpenWebPlayground={openWithContent} />
        ) : null}
      </React.Suspense>
    </GenericContentDisplay>
  );
}
