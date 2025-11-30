'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { useSpringBoot } from '@/app/languages/spring-boot/spring-boot-context';

interface SpringBootContentDisplayProps {
  language: Language;
  topic: Topic;
}

export const SpringBootContentDisplay = ({ language, topic }: SpringBootContentDisplayProps) => {
  const contextHooks = useSpringBoot();

  return (
    <GenericContentDisplay
      language={language}
      topic={topic}
      contextHooks={contextHooks}
    />
  );
};
