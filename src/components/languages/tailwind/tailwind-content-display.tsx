'use client';

import type { Language, Topic } from '@/data/languages';
import React from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';

interface TailwindContentDisplayProps {
  topic: Topic;
  language: Language;
  onOpenEditor?: () => void;
}

export function TailwindContentDisplay({
  topic,
  language,
  onOpenEditor,
}: TailwindContentDisplayProps) {
  // For now, use the generic content display
  // Individual topic components can be added later
  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={onOpenEditor}
    />
  );
}
