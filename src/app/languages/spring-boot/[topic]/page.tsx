'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { languages } from '@/data/languages';
import { SpringBootLearningRoadmap } from '@/components/languages/spring-boot/spring-boot-learning-roadmap';
import { SpringBootContentDisplay } from '@/components/languages/spring-boot/spring-boot-content-display';

export default function SpringBootTopicPage() {
  const params = useParams();
  const topicSlug = params?.topic as string;

  const language = useMemo(() => languages.find(lang => lang.slug === 'spring-boot'), []);

  const selectedTopic = useMemo(() => {
    if (!language) return null;
    return language.topics.find(t => t.slug === topicSlug);
  }, [language, topicSlug]);

  if (!language) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Language not found</p>
      </div>
    );
  }

  if (!selectedTopic) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Topic not found</p>
      </div>
    );
  }

  // If topic is learning-plan, render the roadmap
  if (selectedTopic.slug === 'learning-plan') {
    return <SpringBootLearningRoadmap language={language} />;
  }

  // Otherwise render the content display
  return (
    <SpringBootContentDisplay
      language={language}
      topic={selectedTopic}
    />
  );
}
