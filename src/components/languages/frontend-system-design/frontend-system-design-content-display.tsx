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
const StateManagementFundamentals = lazy(() => import('./topics/state-management-fundamentals'));
const GlobalStatePatterns = lazy(() => import('./topics/global-state-patterns'));
const LocalStateManagement = lazy(() => import('./topics/local-state-management'));
const ServerStateManagement = lazy(() => import('./topics/server-state-management'));
const StatePersistenceStrategies = lazy(() => import('./topics/state-persistence-strategies'));
const PerformanceFundamentals = lazy(() => import('./topics/performance-fundamentals'));
const LoadingPerformance = lazy(() => import('./topics/loading-performance'));
const RuntimePerformance = lazy(() => import('./topics/runtime-performance'));
const CachingStrategy = lazy(() => import('./topics/caching-strategy'));
const PerformanceMonitoring = lazy(() => import('./topics/performance-monitoring'));
const ScalabilityPrinciples = lazy(() => import('./topics/scalability-principles'));
const CodeScalability = lazy(() => import('./topics/code-scalability'));
const TeamScalability = lazy(() => import('./topics/team-scalability'));
const FeatureScalability = lazy(() => import('./topics/feature-scalability'));
const UserScalability = lazy(() => import('./topics/user-scalability'));
const SecurityFundamentals = lazy(() => import('./topics/security-fundamentals'));
const AuthenticationAuthorization = lazy(() => import('./topics/authentication-authorization'));
const DataProtection = lazy(() => import('./topics/data-protection'));
const APISecurity = lazy(() => import('./topics/api-security'));
const SecurityMonitoring = lazy(() => import('./topics/security-monitoring'));
const DataFlowArchitecture = lazy(() => import('./topics/data-flow-architecture'));
const APIIntegrationPattern = lazy(() => import('./topics/api-integration-patterns'));
const DataModelingFrontend = lazy(() => import('./topics/data-modeling-frontend'));
const OfflineDataStrategies = lazy(() => import('./topics/offline-data-strategies'));
const RealTimeData = lazy(() => import('./topics/real-time-data'));
const ComponentDesignPrinciples = lazy(() => import('./topics/component-design-principles'));

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
  'state-management-fundamentals': StateManagementFundamentals,
  'global-state-patterns': GlobalStatePatterns,
  'local-state-management': LocalStateManagement,
  'server-state-management': ServerStateManagement,
  'state-persistence-strategies': StatePersistenceStrategies,
  'performance-fundamentals': PerformanceFundamentals,
  'loading-performance': LoadingPerformance,
  'runtime-performance': RuntimePerformance,
  'caching-strategies': CachingStrategy,
  'performance-monitoring': PerformanceMonitoring,
  'scalability-principles': ScalabilityPrinciples,
  'code-scalability': CodeScalability,
  'team-scalability': TeamScalability,
  'feature-scalability': FeatureScalability,
  'user-scalability': UserScalability,
  'security-fundamentals': SecurityFundamentals,
  'authentication-authorization': AuthenticationAuthorization,
  'data-protection': DataProtection,
  'api-security': APISecurity,
  'security-monitoring': SecurityMonitoring,
  'data-flow-architecture': DataFlowArchitecture,
  'api-integration-patterns': APIIntegrationPattern,
  'data-modeling-frontend': DataModelingFrontend,
  'offline-data-strategies': OfflineDataStrategies,
  'real-time-data': RealTimeData,
  'component-design-principles': ComponentDesignPrinciples,
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
