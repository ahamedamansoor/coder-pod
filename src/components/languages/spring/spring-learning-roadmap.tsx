
'use client';
import { Leaf, Database, Shield, Zap, Server, Package, Settings, Cloud, TestTube, Box, Layers, Code, Globe, FileCode, MessageSquare, Archive, Clock, Bell, FileText, CheckCircle, Sparkles } from 'lucide-react';
import { useSpring } from '@/app/languages/spring/spring-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Spring - using consistent green/emerald theme
const categoryIcons = {
  'Introduction': { icon: Leaf, color: 'text-green-600', level: 'Beginner' },
  'Core Container': { icon: Box, color: 'text-emerald-600', level: 'Beginner' },
  'Dependency Injection': { icon: Layers, color: 'text-green-700', level: 'Beginner' },
  'Configuration': { icon: Settings, color: 'text-emerald-700', level: 'Intermediate' },
  'AOP': { icon: Code, color: 'text-green-500', level: 'Advanced' },
  'Spring MVC': { icon: Globe, color: 'text-emerald-500', level: 'Intermediate' },
  'Data Access': { icon: Database, color: 'text-green-800', level: 'Intermediate' },
  'ORM Integration': { icon: Layers, color: 'text-emerald-800', level: 'Advanced' },
  'Spring Security': { icon: Shield, color: 'text-green-600', level: 'Advanced' },
  'Validation': { icon: CheckCircle, color: 'text-emerald-600', level: 'Intermediate' },
  'Testing': { icon: TestTube, color: 'text-green-700', level: 'Advanced' },
  'Messaging': { icon: MessageSquare, color: 'text-emerald-700', level: 'Advanced' },
  'Caching': { icon: Archive, color: 'text-green-500', level: 'Advanced' },
  'Scheduling': { icon: Clock, color: 'text-emerald-500', level: 'Intermediate' },
  'Events': { icon: Bell, color: 'text-green-800', level: 'Advanced' },
  'Spring WebFlux': { icon: Zap, color: 'text-emerald-800', level: 'Expert' },
  'Spring 5+ Features': { icon: Sparkles, color: 'text-green-600', level: 'Advanced' },
  'Spring 6+ Features': { icon: Zap, color: 'text-emerald-600', level: 'Expert' },
  'SpEL': { icon: FileText, color: 'text-green-700', level: 'Advanced' },
  'Best Practices': { icon: CheckCircle, color: 'text-emerald-700', level: 'Expert' },
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
