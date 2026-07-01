'use client';
import { Database, Server, Shield, Settings, Rocket, Code, Box, Repeat, Zap, Globe, Package, TestTube, Wrench, BookOpen, CheckCircle, Archive, Route, Tag, Eye, Brain, FileText, Layers, BarChart3, Lock, Cpu, Cloud } from 'lucide-react';
import { useMysqlContext } from '@/app/languages/mysql/mysql-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for MySQL - using consistent blue/cyan theme
const categoryIcons = {
  '1. MySQL Fundamentals': { icon: Rocket, color: 'text-blue-600', level: 'Beginner' },
  '2. SQL Essentials': { icon: Code, color: 'text-cyan-600', level: 'Beginner' },
  '3. Database Design': { icon: Box, color: 'text-blue-700', level: 'Intermediate' },
  '4. Advanced SQL': { icon: Zap, color: 'text-cyan-700', level: 'Advanced' },
  '5. Performance & Optimization': { icon: BarChart3, color: 'text-blue-800', level: 'Advanced' },
  '6. Administration & Security': { icon: Shield, color: 'text-cyan-800', level: 'Advanced' },
  '7. High Availability & Replication': { icon: Server, color: 'text-blue-900', level: 'Expert' },
  '8. Scaling & Distributed Systems': { icon: Cloud, color: 'text-cyan-900', level: 'Expert' },
  '9. DevOps & Automation': { icon: Settings, color: 'text-blue-700', level: 'Expert' },
  '10. Expert Topics': { icon: Brain, color: 'text-cyan-600', level: 'Expert' },
  '11. MySQL Ecosystem': { icon: Package, color: 'text-blue-600', level: 'Intermediate' },
  '12. Specialized Topics': { icon: Tag, color: 'text-cyan-700', level: 'Advanced' },
};

export const MysqlLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useMysqlContext();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
