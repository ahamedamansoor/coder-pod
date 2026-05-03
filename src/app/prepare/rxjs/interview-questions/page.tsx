'use client';

import React from 'react';
import { RxjsContentDisplay } from '@/components/languages/rxjs/rxjs-content-display';
import { rxjs } from '@/data/languages/rxjs';
import { RxjsProvider } from '@/app/languages/rxjs/rxjs-context';

export default function RxJSInterviewQuestionsPage() {
  const interviewTopic = rxjs.topics.find(topic => topic.slug === 'interview-questions');
  
  if (!interviewTopic) {
    return <div>Interview questions not found</div>;
  }

  return (
    <RxjsProvider>
      <RxjsContentDisplay 
        topic={interviewTopic} 
        language={rxjs}
      />
    </RxjsProvider>
  );
}
