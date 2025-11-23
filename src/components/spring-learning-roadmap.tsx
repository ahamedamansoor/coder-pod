
'use client';
import { Leaf, Database, Shield, Zap, Server, Package, Settings, Cloud, TestTube } from 'lucide-react';
import { useSpring } from '@/app/spring/spring-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from './generic-learning-path';

// Category icons for Spring/Spring Boot
const categoryIcons = {
  'Spring Core Concepts': { icon: Leaf, color: 'text-green-600', level: 'Beginner' },
  'Spring Boot Basics': { icon: Zap, color: 'text-blue-600', level: 'Beginner' },
  'Data Access': { icon: Database, color: 'text-purple-600', level: 'Intermediate' },
  'Web Development': { icon: Server, color: 'text-orange-600', level: 'Intermediate' },
  'Security': { icon: Shield, color: 'text-red-600', level: 'Advanced' },
  'Microservices': { icon: Package, color: 'text-indigo-600', level: 'Advanced' },
  'Cloud & DevOps': { icon: Cloud, color: 'text-teal-600', level: 'Expert' },
  'Testing': { icon: TestTube, color: 'text-pink-600', level: 'Advanced' },
  'Advanced Topics': { icon: Settings, color: 'text-cyan-600', level: 'Expert' },
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
