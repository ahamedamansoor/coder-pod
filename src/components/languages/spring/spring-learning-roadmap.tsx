
'use client';
import { Leaf, Database, Shield, Zap, Server, Package, Settings, Cloud, TestTube } from 'lucide-react';
import { useSpring } from '@/app/languages/spring/spring-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Spring - using consistent green/emerald theme
const categoryIcons = {
  'Spring Core Concepts': { icon: Leaf, color: 'text-green-600', level: 'Beginner' },
  'Spring Boot Basics': { icon: Zap, color: 'text-emerald-600', level: 'Beginner' },
  'Data Access': { icon: Database, color: 'text-green-700', level: 'Intermediate' },
  'Web Development': { icon: Server, color: 'text-emerald-500', level: 'Intermediate' },
  'Security': { icon: Shield, color: 'text-green-800', level: 'Advanced' },
  'Microservices': { icon: Package, color: 'text-emerald-700', level: 'Advanced' },
  'Cloud & DevOps': { icon: Cloud, color: 'text-teal-600', level: 'Expert' },
  'Testing': { icon: TestTube, color: 'text-green-500', level: 'Advanced' },
  'Advanced Topics': { icon: Settings, color: 'text-emerald-800', level: 'Expert' },
};

export const SpringLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useSpring();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
