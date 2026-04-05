'use client';
import { Database, Server, Shield, Zap, Cloud, Code, Settings, BarChart, Lock, GitBranch, Cpu, Award } from 'lucide-react';
import { usePostgresql } from '@/app/languages/postgresql/postgresql-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for PostgreSQL - using theme colors
const categoryIcons = {
  'PostgreSQL Fundamentals': { icon: Database, color: 'text-blue-600', level: 'Beginner' },
  'Database Design and Data Types': { icon: Code, color: 'text-indigo-600', level: 'Beginner' },
  'Advanced SQL Queries': { icon: BarChart, color: 'text-purple-600', level: 'Intermediate' },
  'Database Administration': { icon: Settings, color: 'text-green-600', level: 'Intermediate' },
  'Performance Optimization': { icon: Zap, color: 'text-yellow-600', level: 'Advanced' },
  'Transactions and Concurrency': { icon: GitBranch, color: 'text-orange-600', level: 'Advanced' },
  'Advanced Features': { icon: Award, color: 'text-pink-600', level: 'Advanced' },
  'Programming Interfaces': { icon: Code, color: 'text-cyan-600', level: 'Advanced' },
  'Security and Compliance': { icon: Shield, color: 'text-red-600', level: 'Expert' },
  'Replication and High Availability': { icon: Server, color: 'teal-600', level: 'Expert' },
  'Cloud and DevOps': { icon: Cloud, color: 'text-blue-700', level: 'Expert' },
  'Advanced Topics and Migration': { icon: Cpu, color: 'text-indigo-700', level: 'Expert' },
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
