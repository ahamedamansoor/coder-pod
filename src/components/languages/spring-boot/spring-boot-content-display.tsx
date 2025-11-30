'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';

interface SpringBootContentDisplayProps {
  language: Language;
  topic: Topic;
}

export const SpringBootContentDisplay = ({ language, topic }: SpringBootContentDisplayProps) => {
  return (
    <GenericContentDisplay
      language={language}
      topic={topic}
    />
  );
};
