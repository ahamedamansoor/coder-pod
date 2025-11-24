'use client';

import type { Language, Topic } from '@/app/data';
import React, { lazy, Suspense } from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { Skeleton } from '@/components/ui/skeleton';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load topic components
const JavaScriptWhatIsJavaScript = lazy(() => import('./topics/javascript-what-is-javascript'));
const JavaScriptInstallationSetup = lazy(() => import('./topics/javascript-installation-setup'));
const JavaScriptFirstProgram = lazy(() => import('./topics/javascript-first-program'));

// Map topic slugs to their components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-javascript': JavaScriptWhatIsJavaScript,
  'js-setup': JavaScriptInstallationSetup,
  'first-program': JavaScriptFirstProgram,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function JavascriptContentDisplay({
  topic,
  language,
}: {
  topic: Topic;
  language: Language;
}) {
  const CustomTopicComponent = topicComponents[topic.slug];
  const { openWithContent } = useWebPlayground();

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenWebPlayground={openWithContent} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
