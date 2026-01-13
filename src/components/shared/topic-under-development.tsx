'use client';

import type { Topic } from '@/data/languages';

interface TopicUnderDevelopmentProps {
  topic: Topic;
}

export function TopicUnderDevelopment({ topic }: TopicUnderDevelopmentProps) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {topic.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        {topic.explanation}
      </p>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 max-w-2xl mx-auto">
        <p className="text-yellow-800 dark:text-yellow-200">
          This topic is currently being developed. Check back soon for comprehensive content on {topic.title}.
        </p>
      </div>
    </div>
  );
}
