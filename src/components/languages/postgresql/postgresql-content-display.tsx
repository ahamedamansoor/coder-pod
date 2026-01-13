'use client';

import type { Language, Topic } from '@/data/languages';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';

// // Lazy load all the topic components
// const DatabaseRdmsOverview = lazy(() => import('./topics/database-rdbms-overview'));
// const PostgresqlOverview = lazy(() => import('./topics/postgresql-introduction'));
// const InstallingPostgresql = lazy(() => import('./topics/postgresql-installation-setup'));
// const PsqlPgadminBasics = lazy(() => import('./topics/postgresql-psql-cli'));
// const DatabasesSchemasTables = lazy(() => import('./topics/postgresql-data-types'));
// const CrudOperations = lazy(() => import('./topics/postgresql-basic-sql'));
// const BasicSelectQueries = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const WhereOrderLimit = lazy(() => import('./topics/postgresql-window-functions'));
// const Constraints = lazy(() => import('./topics/postgresql-tables-constraints'));
// const Joins = lazy(() => import('./topics/postgresql-joins'));
// const Aggregations = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const Subqueries = lazy(() => import('./topics/postgresql-indexes'));
// const CommonTableExpressions = lazy(() => import('./topics/postgresql-database-design'));
// const Views = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const IndexesBasics = lazy(() => import('./topics/postgresql-window-functions'));
// const Transactions = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const AcidProperties = lazy(() => import('./topics/postgresql-indexes'));
// const LocksConcurrency = lazy(() => import('./topics/postgresql-database-design'));
// const IsolationLevels = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const WindowFunctions = lazy(() => import('./topics/postgresql-window-functions'));
// const JsonJsonb = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const Arrays = lazy(() => import('./topics/postgresql-indexes'));
// const Partitioning = lazy(() => import('./topics/postgresql-database-design'));
// const PlPgsql = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const StoredFunctionsProcedures = lazy(() => import('./topics/postgresql-window-functions'));
// const Triggers = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const RowLevelSecurity = lazy(() => import('./topics/postgresql-indexes'));
// const RolesPermissions = lazy(() => import('./topics/postgresql-database-design'));
// const BackupRestore = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const Replication = lazy(() => import('./topics/postgresql-window-functions'));
// const HighAvailability = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const QueryOptimization = lazy(() => import('./topics/postgresql-indexes'));
// const ExplainAnalyze = lazy(() => import('./topics/postgresql-database-design'));
// const PerformanceTuning = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const VacuumAutovacuum = lazy(() => import('./topics/postgresql-window-functions'));
// const PostgresqlInternals = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const PostgresqlExtensions = lazy(() => import('./topics/postgresql-indexes'));
// const FullTextSearch = lazy(() => import('./topics/postgresql-database-design'));
// const ConnectionPooling = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const MonitoringTools = lazy(() => import('./topics/postgresql-window-functions'));
// const ShardingScaling = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const PostgresqlProduction = lazy(() => import('./topics/postgresql-indexes'));
// const PostgresqlCloudDeployment = lazy(() => import('./topics/postgresql-database-design'));
// const PostgresqlDocker = lazy(() => import('./topics/postgresql-aggregate-functions'));
// const PostgresqlUpgrades = lazy(() => import('./topics/postgresql-window-functions'));
// const CustomFunctions = lazy(() => import('./topics/postgresql-subqueries-cte'));
// const PostgresqlBestPractices = lazy(() => import('./topics/postgresql-indexes'));

// Map topic slugs to components
const topicComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {

};

interface PostgresqlContentDisplayProps {
  topic: Topic;
  language: Language;
}

export const PostgresqlContentDisplay: React.FC<PostgresqlContentDisplayProps> = ({ topic, language }) => {
  const TopicComponent = topicComponents[topic.slug];

  if (!TopicComponent) {
    // Return the standardized topic under development component for topics that don't have specific components yet
    return (
      <GenericContentDisplay
        topic={topic}
        language={language}
      >
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      <Suspense fallback={<CompactLoadingSkeleton />}>
        <TopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
};
