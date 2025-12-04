'use client';

import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { vue } from '@/data/languages/vue';
import type { Topic } from '@/data/languages/types';

interface VueContentDisplayProps {
  topic: Topic;
}

export function VueContentDisplay({ topic }: VueContentDisplayProps) {
  return (
    <GenericContentDisplay
      topic={topic}
      language={vue}
    />
  );
}
