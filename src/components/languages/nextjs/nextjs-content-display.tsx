'use client';

import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import type { Topic } from '@/data/languages/types';
import { useNextjsContext } from '@/app/languages/nextjs/nextjs-context';

interface NextjsContentDisplayProps {
  topic: Topic;
}

export function NextjsContentDisplay({ topic }: NextjsContentDisplayProps) {
  const { completedTopics, markTopicAsComplete, markTopicAsIncomplete } = useNextjsContext();

  return (
    <GenericContentDisplay
      topic={topic}
      languageSlug="nextjs"
      completedTopics={completedTopics}
      onMarkComplete={markTopicAsComplete}
      onMarkIncomplete={markTopicAsIncomplete}
      colorTheme="slate"
    />
  );
}
