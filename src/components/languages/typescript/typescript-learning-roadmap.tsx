'use client';

import { Code, FileType, Tag, Box, Layout, Zap, Building, Sparkles, Palette, Wrench, Package, Key, Award, Settings, Filter, Shield, Users, GitBranch, TestTube, Gauge, CheckCircle, FileCode, Cog, Brain } from 'lucide-react';
import { useTypeScript } from '@/app/languages/typescript/typescript-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for TypeScript - using consistent blue/purple theme
const categoryIcons = {
  'Introduction': { icon: Code, color: 'text-blue-600', level: 'Beginner' },
  'Basic Types': { icon: FileType, color: 'text-indigo-600', level: 'Beginner' },
  'Type Annotations': { icon: Tag, color: 'text-blue-700', level: 'Beginner' },
  'Interfaces': { icon: Box, color: 'text-purple-600', level: 'Intermediate' },
  'Type Aliases': { icon: Layout, color: 'text-indigo-700', level: 'Intermediate' },
  'Functions': { icon: Zap, color: 'text-blue-500', level: 'Intermediate' },
  'Classes': { icon: Building, color: 'text-purple-700', level: 'Intermediate' },
  'Generics': { icon: Sparkles, color: 'text-indigo-500', level: 'Advanced' },
  'Advanced Types': { icon: Palette, color: 'text-blue-800', level: 'Advanced' },
  'Utility Types': { icon: Wrench, color: 'text-purple-500', level: 'Advanced' },
  'Modules & Namespaces': { icon: Package, color: 'text-indigo-800', level: 'Advanced' },
  'Decorators': { icon: Key, color: 'text-blue-600', level: 'Advanced' },
  'TypeScript 4.x Features': { icon: Award, color: 'text-purple-600', level: 'Advanced' },
  'TypeScript 5.x Features': { icon: Sparkles, color: 'text-indigo-600', level: 'Expert' },
  'tsconfig.json': { icon: Settings, color: 'text-blue-700', level: 'Intermediate' },
  'Type Narrowing': { icon: Filter, color: 'text-purple-700', level: 'Advanced' },
  'Working with React': { icon: Code, color: 'text-indigo-500', level: 'Advanced' },
  'Working with Node.js': { icon: Cog, color: 'text-blue-500', level: 'Advanced' },
  'Testing': { icon: TestTube, color: 'text-purple-500', level: 'Advanced' },
  'Performance': { icon: Gauge, color: 'text-indigo-700', level: 'Expert' },
  'Best Practices': { icon: CheckCircle, color: 'text-blue-800', level: 'Expert' },
  'Migration': { icon: GitBranch, color: 'text-purple-800', level: 'Intermediate' },
  'Tooling': { icon: Wrench, color: 'text-indigo-600', level: 'Intermediate' },
  'Advanced Patterns': { icon: Brain, color: 'text-blue-900', level: 'Expert' },
};

interface TypeScriptLearningRoadmapProps {
  language: Language;
}

export function TypeScriptLearningRoadmap({ language }: TypeScriptLearningRoadmapProps) {
  const contextHooks = useTypeScript();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
}
