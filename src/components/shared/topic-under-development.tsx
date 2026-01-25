'use client';

import type { Topic } from '@/data/languages';

interface TopicUnderDevelopmentProps {
  topic: Topic;
}

export function TopicUnderDevelopment({ topic }: TopicUnderDevelopmentProps) {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {topic.title}
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
        {topic.explanation}
      </p>
      
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
          We're Working Hard for You! 🚀
        </h3>
        
        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
          This topic is currently being developed with the utmost care and attention to detail. 
          We're crafting comprehensive content on <span className="font-semibold text-blue-600 dark:text-blue-400">{topic.title}</span> 
          that will help you master this subject.
        </p>
        
        <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            Currently in development - Check back soon for the best content!
          </p>
        </div>
      </div>
    </div>
  );
}
