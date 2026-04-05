'use client';
import { Rocket, Route, FolderTree, Database, Server, Zap, Globe, Shield, Palette, Image, Code, Settings, FileCode, TestTube, Cloud, Wrench, Layers, Gauge, BookOpen } from 'lucide-react';
import { useNextjsContext } from '@/app/languages/nextjs/nextjs-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Next.js - using consistent black/slate theme
const categoryIcons = {
  'Getting Started': { icon: Rocket, color: 'text-slate-600', level: 'Beginner' },
  'Routing Fundamentals': { icon: Route, color: 'text-slate-700', level: 'Beginner' },
  'App Router': { icon: FolderTree, color: 'text-slate-600', level: 'Intermediate' },
  'Data Fetching': { icon: Database, color: 'text-slate-700', level: 'Intermediate' },
  'Server Components & Actions': { icon: Server, color: 'text-slate-800', level: 'Advanced' },
  'Client Components': { icon: Zap, color: 'text-slate-600', level: 'Intermediate' },
  'Rendering Strategies': { icon: Layers, color: 'text-slate-700', level: 'Advanced' },
  'Caching & Revalidation': { icon: Gauge, color: 'text-slate-800', level: 'Advanced' },
  'Styling': { icon: Palette, color: 'text-slate-600', level: 'Intermediate' },
  'Optimizations': { icon: Image, color: 'text-slate-700', level: 'Advanced' },
  'API Routes': { icon: Code, color: 'text-slate-600', level: 'Intermediate' },
  'Middleware': { icon: Settings, color: 'text-slate-700', level: 'Advanced' },
  'Authentication': { icon: Shield, color: 'text-slate-800', level: 'Advanced' },
  'Internationalization': { icon: Globe, color: 'text-slate-600', level: 'Advanced' },
  'Testing': { icon: TestTube, color: 'text-slate-700', level: 'Expert' },
  'Deployment': { icon: Cloud, color: 'text-slate-600', level: 'Intermediate' },
  'Configuration': { icon: Wrench, color: 'text-slate-700', level: 'Advanced' },
  'Advanced Patterns': { icon: FileCode, color: 'text-slate-800', level: 'Expert' },
  'Performance': { icon: Gauge, color: 'text-slate-900', level: 'Expert' },
  'API Reference': { icon: BookOpen, color: 'text-slate-500', level: 'Reference' },
};

export const NextjsLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useNextjsContext();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
