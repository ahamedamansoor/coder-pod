'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';

// Lazy load all the topic components
const WhatIsSystemDesign = lazy(() => import('./topics/what-is-system-design'));
const FrontendVsBackendSystemDesign = lazy(() => import('./topics/frontend-vs-backend-system-design'));
const DesignThinkingPrinciples = lazy(() => import('./topics/design-thinking-principles'));
const SystemDesignProcess = lazy(() => import('./topics/system-design-process'));
const TradeOffsAnalysis = lazy(() => import('./topics/trade-offs-analysis'));
const ArchitecturalPatternsOverview = lazy(() => import('./topics/architectural-patterns-overview'));
const MVP = lazy(() => import('./topics/mvp'));
const MVC = lazy(() => import('./topics/mvc'));
const MVVM = lazy(() => import('./topics/mvvm'));
const ComponentBasedArchitecture = lazy(() => import('./topics/component-based-architecture'));
const MicroFrontends = lazy(() => import('./topics/micro-frontends'));
const MonolithVsModular = lazy(() => import('./topics/monolith-vs-modular'));
const ServiceOrientedFrontend = lazy(() => import('./topics/service-oriented-frontend'));

// Map topic slugs to components
const topicComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'what-is-system-design': WhatIsSystemDesign,
  'frontend-vs-backend-system-design': FrontendVsBackendSystemDesign,
  'design-thinking-principles': DesignThinkingPrinciples,
  'system-design-process': SystemDesignProcess,
  'trade-offs-analysis': TradeOffsAnalysis,
  'architectural-patterns-overview': ArchitecturalPatternsOverview,
  'mvp-pattern': MVP,
  'mvc-pattern': MVC,
  'mvvm-pattern': MVVM,
  'component-based-architecture': ComponentBasedArchitecture,
  'micro-frontends': MicroFrontends,
  'monolithic-vs-modular': MonolithVsModular,
  'service-oriented-frontend': ServiceOrientedFrontend,
};

interface FrontendSystemDesignContentDisplayProps {
  topic: Topic;
  language: Language;
}

export const FrontendSystemDesignContentDisplay: React.FC<FrontendSystemDesignContentDisplayProps> = ({ topic, language }) => {
  const TopicComponent = topicComponents[topic.slug];

  if (!TopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <TopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
};
