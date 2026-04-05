'use client';

import { Rocket, Code, Box, FileCode, Zap, Package, Database, Layers, Layout, Server, TestTube, Gauge, Wrench, Palette, Settings, Globe, Shield, Sparkles, CheckCircle, Brain } from 'lucide-react';
import { useAngular } from '@/app/languages/angular/angular-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Angular - using consistent red/orange theme
const categoryIcons = {
  'Introduction & Setup': { icon: Rocket, color: 'text-red-600', level: 'Beginner' },
  'Components': { icon: Box, color: 'text-orange-600', level: 'Beginner' },
  'Templates & Data Binding': { icon: Code, color: 'text-red-700', level: 'Beginner' },
  'Directives': { icon: FileCode, color: 'text-orange-700', level: 'Intermediate' },
  'Pipes': { icon: Zap, color: 'text-red-500', level: 'Intermediate' },
  'Services & DI': { icon: Package, color: 'text-orange-500', level: 'Intermediate' },
  'RxJS & Observables': { icon: Database, color: 'text-red-800', level: 'Advanced' },
  'Forms': { icon: FileCode, color: 'text-orange-800', level: 'Intermediate' },
  'Routing & Navigation': { icon: Layout, color: 'text-red-600', level: 'Intermediate' },
  'HTTP Client': { icon: Server, color: 'text-orange-600', level: 'Intermediate' },
  'State Management': { icon: Database, color: 'text-red-700', level: 'Advanced' },
  'Modules': { icon: Layers, color: 'text-orange-700', level: 'Intermediate' },
  'Standalone Components': { icon: Box, color: 'text-red-500', level: 'Advanced' },
  'Change Detection': { icon: Zap, color: 'text-orange-500', level: 'Advanced' },
  'Animations': { icon: Sparkles, color: 'text-red-800', level: 'Advanced' },
  'Testing': { icon: TestTube, color: 'text-orange-800', level: 'Expert' },
  'Performance': { icon: Gauge, color: 'text-red-900', level: 'Expert' },
  'CLI & Build': { icon: Wrench, color: 'text-orange-900', level: 'Intermediate' },
  'Material & CDK': { icon: Palette, color: 'text-red-600', level: 'Advanced' },
  'Modern Angular': { icon: Settings, color: 'text-orange-600', level: 'Advanced' },
  'Angular 16+': { icon: Sparkles, color: 'text-red-700', level: 'Expert' },
  'Angular 17+': { icon: Globe, color: 'text-orange-700', level: 'Expert' },
  'Angular 18+': { icon: Zap, color: 'text-red-800', level: 'Expert' },
  'Best Practices': { icon: CheckCircle, color: 'text-orange-800', level: 'Expert' },
};

interface AngularLearningRoadmapProps {
  language: Language;
}

export function AngularLearningRoadmap({ language }: AngularLearningRoadmapProps) {
  const contextHooks = useAngular();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
}
