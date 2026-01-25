'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import { EnhancedLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';

// Lazy load topic components
const EntityMapping = lazy(() => import('./topics/entity-mapping'));

// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'entity-mapping': EntityMapping,
};

interface SpringBootContentDisplayProps {
  language: Language;
  topic: Topic;
  onOpenEditor?: () => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export const SpringBootContentDisplay = ({ 
  language, 
  topic, 
  onOpenEditor, 
  onOpenWebPlayground 
}: SpringBootContentDisplayProps) => {
  const CustomTopicComponent = topicComponentMap[topic.slug];

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay
        language={language}
        topic={topic}
      >
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay
      language={language}
      topic={topic}
    >
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
};
