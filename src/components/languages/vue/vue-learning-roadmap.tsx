'use client';
import { Rocket, Code, Box, Repeat, Sparkles, Layout, Zap, Settings, FileCode, Globe, Package, TestTube, Wrench, BookOpen, Shield, CheckCircle, Database, Server, Archive, Route, Tag, Eye, Brain, FileText, Layers, BarChart3 } from 'lucide-react';
import { useVueContext } from '@/app/languages/vue/vue-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Vue - using consistent emerald/green theme
const categoryIcons = {
  'Getting Started': { icon: Rocket, color: 'text-emerald-600', level: 'Beginner' },
  'Essentials': { icon: Code, color: 'text-green-600', level: 'Beginner' },
  'Components In-Depth': { icon: Box, color: 'text-emerald-700', level: 'Intermediate' },
  'Reusability': { icon: Repeat, color: 'text-green-700', level: 'Intermediate' },
  'Built-in Components': { icon: Package, color: 'text-emerald-500', level: 'Intermediate' },
  'Scaling Up': { icon: BarChart3, color: 'text-green-500', level: 'Intermediate' },
  'Composition API': { icon: Sparkles, color: 'text-emerald-800', level: 'Advanced' },
  'Reactivity In Depth': { icon: Zap, color: 'text-green-800', level: 'Advanced' },
  'Rendering Mechanism': { icon: Eye, color: 'text-emerald-600', level: 'Advanced' },
  'Vue Router': { icon: Route, color: 'text-green-600', level: 'Intermediate' },
  'Pinia (State Management)': { icon: Database, color: 'text-emerald-700', level: 'Advanced' },
  'VueUse (Utilities)': { icon: Wrench, color: 'text-green-700', level: 'Intermediate' },
  'TypeScript with Vue': { icon: FileText, color: 'text-emerald-800', level: 'Advanced' },
  'Best Practices': { icon: CheckCircle, color: 'text-green-900', level: 'Expert' },
  'Testing': { icon: TestTube, color: 'text-emerald-700', level: 'Expert' },
  'Tooling & Ecosystem': { icon: Settings, color: 'text-green-600', level: 'Intermediate' },
  'Server-Side Rendering': { icon: Server, color: 'text-emerald-900', level: 'Expert' },
  'Migration & Compatibility': { icon: Archive, color: 'text-green-800', level: 'Advanced' },
  'API Reference': { icon: BookOpen, color: 'text-emerald-500', level: 'Reference' },
};

export const VueLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useVueContext();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
