'use client';
import { Database, Server, Shield, Zap, Cloud, Code, Settings, BarChart, Lock, GitBranch, Cpu, Award } from 'lucide-react';
import { usePostgresql } from '@/app/languages/postgresql/postgresql-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for PostgreSQL - using theme colors
const categoryIcons = {
  '1. PostgreSQL Fundamentals': { icon: Database, color: 'text-blue-600', level: 'Beginner' },
  '2. Database Design and Data Types': { icon: Code, color: 'text-indigo-600', level: 'Beginner' },
  '3. Advanced SQL Queries': { icon: BarChart, color: 'text-purple-600', level: 'Intermediate' },
  '4. Database Administration': { icon: Settings, color: 'text-green-600', level: 'Intermediate' },
  '5. Performance Optimization': { icon: Zap, color: 'text-yellow-600', level: 'Advanced' },
  '6. Transactions and Concurrency': { icon: GitBranch, color: 'text-orange-600', level: 'Advanced' },
  '7. Advanced Features': { icon: Award, color: 'text-pink-600', level: 'Advanced' },
  '8. Programming Interfaces': { icon: Code, color: 'text-cyan-600', level: 'Advanced' },
  '9. Security and Compliance': { icon: Shield, color: 'text-red-600', level: 'Expert' },
  '10. Replication and High Availability': { icon: Server, color: 'teal-600', level: 'Expert' },
  '11. Cloud and DevOps': { icon: Cloud, color: 'text-blue-700', level: 'Expert' },
  '12. Advanced Topics and Migration': { icon: Cpu, color: 'text-indigo-700', level: 'Expert' },
};

export const PostgresqlLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = usePostgresql();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
