'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import { Skeleton } from '@/components/ui/skeleton';
import { useWebPlayground } from '@/components/shared/playground/web-playground-context';

// Lazy load topic components
const AngularWhatIsAngular = lazy(() => import('./topics/angular-what-is-angular'));
const AngularVsReactVue = lazy(() => import('./topics/angular-vs-react-vue'));
const AngularCLI = lazy(() => import('./topics/angular-cli'));
const AngularProjectStructure = lazy(() => import('./topics/angular-project-structure'));
const AngularJsonConfiguration = lazy(() => import('./topics/angular-json-configuration'));
const AngularTypeScript = lazy(() => import('./topics/angular-typescript'));
const AngularComponentBasics = lazy(() => import('./topics/angular-component-basics'));

// Map topic slugs to their components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-angular': AngularWhatIsAngular,
  'angular-vs-react-vue': AngularVsReactVue,
  'angular-cli': AngularCLI,
  'project-structure': AngularProjectStructure,
  'angular-json-configuration': AngularJsonConfiguration,
  'typescript-in-angular': AngularTypeScript,
  'component-basics': AngularComponentBasics,
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

interface AngularContentDisplayProps {
  topic: Topic;
  language: Language;
  onOpenEditor?: () => void;
}

export function AngularContentDisplay({
  topic,
  language,
}: AngularContentDisplayProps) {
  const CustomTopicComponent = topicComponents[topic.slug];
  const { openWithContent } = useWebPlayground();

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<LoadingSkeleton />}>
        {React.createElement(CustomTopicComponent as any, {
          onOpenWebPlayground: openWithContent,
        })}
      </Suspense>
    </GenericContentDisplay>
  );
}
