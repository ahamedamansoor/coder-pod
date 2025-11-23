'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load topic components
const JavaScriptWhatIsJavaScript = lazy(() => import('./topics/javascript-what-is-javascript'));

// Map topic slugs to their components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-javascript': JavaScriptWhatIsJavaScript,
};

export function JavascriptContentDisplay({ 
  topic, 
  language,
}: {
  topic: Topic, 
  language: Language,
}) {
  const CustomTopicComponent = topicComponents[topic.slug];

  if (CustomTopicComponent) {
    return (
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <CustomTopicComponent />
      </Suspense>
    );
  }

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    />
  );
}
