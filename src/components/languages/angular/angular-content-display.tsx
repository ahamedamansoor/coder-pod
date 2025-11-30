'use client';

import type { Language, Topic } from '@/data/languages';
import React from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';

interface AngularContentDisplayProps {
  topic: Topic;
  language: Language;
  onOpenEditor?: () => void;
}

export function AngularContentDisplay({
  topic,
  language,
}: AngularContentDisplayProps) {
  // For now, use the generic content display
  // Individual topic components can be added later
  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    />
  );
}
