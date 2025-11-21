
'use client';

import type { Language, Topic } from '@/app/data';
import { GenericContentDisplay } from './generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from './ui/skeleton';

// Lazy load all the topic components
const SpringModulesOverview = lazy(() => import('./spring-topics/spring-modules-overview'));
const IocContainerAndBeans = lazy(() => import('./spring-topics/ioc-container-and-beans'));
const DependencyInjectionOverview = lazy(() => import('./spring-topics/dependency-injection-overview'));
const ConstructorInjection = lazy(() => import('./spring-topics/constructor-injection'));
const SetterInjection = lazy(() => import('./spring-topics/setter-injection'));
const InjectingCollections = lazy(() => import('./spring-topics/injecting-collections'));
const BeanScopes = lazy(() => import('./spring-topics/bean-scopes'));
const BeanLifecycleAndInheritance = lazy(() => import('./spring-topics/bean-lifecycle-and-inheritance'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'spring-modules-overview': SpringModulesOverview,
  'ioc-container-and-beans': IocContainerAndBeans,
  'dependency-injection-overview': DependencyInjectionOverview,
  'constructor-injection': ConstructorInjection,
  'setter-injection': SetterInjection,
  'injecting-collections': InjectingCollections,
  'bean-scopes': BeanScopes,
  'bean-lifecycle-and-inheritance': BeanLifecycleAndInheritance,
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

export function SpringContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
}) {

  const CustomTopicComponent = topicComponentMap[topic.slug];

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
      onOpenEditor={onOpenEditor}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenEditor={onOpenEditor} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
