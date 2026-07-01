'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import { TopicUnderDevelopment } from '@/components/shared/topic-under-development';
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton, CompactLoadingSkeleton } from '@/components/shared/enhanced-loading-skeleton';

// Lazy load all topic components
const WhatIsMysql = React.lazy(() => import('./topics/what-is-mysql'));
const DatabaseBasics = React.lazy(() => import('./topics/database-basics'));
const MysqlInstallation = React.lazy(() => import('./topics/mysql-installation'));
const MysqlClientsTools = React.lazy(() => import('./topics/mysql-clients-tools'));
const BasicSqlSyntax = React.lazy(() => import('./topics/basic-sql-syntax'));
const FilteringExpressions = React.lazy(() => import('./topics/filtering-expressions'));
const DataTypesConstraints = React.lazy(() => import('./topics/data-types-constraints'));
const CreatingDatabasesTables = React.lazy(() => import('./topics/creating-databases-tables'));
const StringFunctions = React.lazy(() => import('./topics/string-functions'));
const DateTimeFunctions = React.lazy(() => import('./topics/date-time-functions'));
const AggregateFunctions = React.lazy(() => import('./topics/aggregate-functions'));
const BasicJoins = React.lazy(() => import('./topics/basic-joins'));
const Subqueries = React.lazy(() => import('./topics/subqueries'));
const SqlExecutionOrder = React.lazy(() => import('./topics/sql-execution-order'));
const Transactions = React.lazy(() => import('./topics/transactions'));

// Map slugs to their lazy-loaded components
const topicComponents: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-mysql': WhatIsMysql,
  'database-basics': DatabaseBasics,
  'mysql-installation': MysqlInstallation,
  'mysql-clients-tools': MysqlClientsTools,
  'basic-sql-syntax': BasicSqlSyntax,
  'filtering-expressions': FilteringExpressions,
  'data-types-constraints': DataTypesConstraints,
  'creating-databases-tables': CreatingDatabasesTables,
  'string-functions': StringFunctions,
  'date-time-functions': DateTimeFunctions,
  'aggregation-functions': AggregateFunctions,
  'basic-joins': BasicJoins,
  'subqueries': Subqueries,
  'sql-execution-order': SqlExecutionOrder,
  'transactions': Transactions,
};

export function MysqlContentDisplay({ topic, language }: { topic: Topic; language: Language }) {
  const CustomTopicComponent = topicComponents[topic.slug];

  if (!CustomTopicComponent) {
    return (
      <GenericContentDisplay topic={topic} language={language}>
        <TopicUnderDevelopment topic={topic} />
      </GenericContentDisplay>
    );
  }

  return (
    <GenericContentDisplay topic={topic} language={language}>
      <Suspense fallback={<EnhancedLoadingSkeleton />}>
        <CustomTopicComponent />
      </Suspense>
    </GenericContentDisplay>
  );
}
