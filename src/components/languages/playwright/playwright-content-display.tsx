'use client';

import type { Language, Topic } from '@/data/languages';
import React from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';

interface PlaywrightContentDisplayProps {
  topic: Topic;
  language: Language;
  onOpenEditor?: () => void;
}

export function PlaywrightContentDisplay({
  topic,
  language,
}: PlaywrightContentDisplayProps) {
  // For now, use the generic content display
  // Individual topic components can be added later
  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <TopicUnderDevelopment topic={topic} />
    </GenericContentDisplay>
  );
}
