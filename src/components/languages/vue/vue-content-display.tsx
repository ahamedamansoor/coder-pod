'use client';

import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import type { Topic } from '@/data/languages/types';
import { useVueContext } from '@/app/languages/vue/vue-context';

interface VueContentDisplayProps {
  topic: Topic;
}

export function VueContentDisplay({ topic }: VueContentDisplayProps) {
  const { completedTopics, markTopicAsComplete, markTopicAsIncomplete } = useVueContext();

  return (
    <GenericContentDisplay
      topic={topic}
      languageSlug="vue"
      completedTopics={completedTopics}
      onMarkComplete={markTopicAsComplete}
      onMarkIncomplete={markTopicAsIncomplete}
      colorTheme="emerald"
    />
  );
}
