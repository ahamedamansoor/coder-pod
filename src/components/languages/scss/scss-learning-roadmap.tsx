'use client';
import { Zap, Code, Layout, Repeat, GitBranch, Database, Rocket, Trophy } from 'lucide-react';
import type { Language } from '@/data/languages';
import { useScss } from '@/app/languages/scss/scss-context';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for SCSS - using consistent pink/rose theme
const categoryIcons = {
  'Fundamentals': { icon: Zap, color: 'text-pink-600', level: 'Beginner' },
  'Nesting & Selectors': { icon: Layout, color: 'text-rose-600', level: 'Beginner' },
  'File Organization': { icon: Code, color: 'text-pink-700', level: 'Beginner' },
  'Reusability': { icon: Repeat, color: 'text-rose-500', level: 'Intermediate' },
  'Control & Logic': { icon: GitBranch, color: 'text-pink-500', level: 'Intermediate' },
  'Data Types & Functions': { icon: Database, color: 'text-rose-700', level: 'Advanced' },
  'Advanced Topics': { icon: Rocket, color: 'text-pink-800', level: 'Advanced' },
  'Professional Development': { icon: Trophy, color: 'text-rose-800', level: 'Expert' },
};

export const ScssLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useScss();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
