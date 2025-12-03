'use client';

import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { nextjs } from '@/data/languages/nextjs';
import type { Topic } from '@/data/languages/types';

interface NextjsContentDisplayProps {
  topic: Topic;
}

export function NextjsContentDisplay({ topic }: NextjsContentDisplayProps) {
  return (
    <GenericContentDisplay
      topic={topic}
      language={nextjs}
    />
  );
}
