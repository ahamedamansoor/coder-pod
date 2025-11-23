'use client';
import { Zap, Code, Layout, Repeat, GitBranch, Database, Rocket, Trophy } from 'lucide-react';
import type { Language } from '@/app/data';
import { useScss } from '@/app/scss/scss-context';
import { GenericLearningPath } from './generic-learning-path';

const categoryIcons = {
  '1. Fundamentals': { icon: Zap, color: 'text-blue-600', level: 'Beginner' },
  '2. Nesting & Selectors': { icon: Layout, color: 'text-green-600', level: 'Beginner' },
  '3. File Organization': { icon: Code, color: 'text-purple-600', level: 'Beginner' },
  '4. Reusability': { icon: Repeat, color: 'text-orange-600', level: 'Intermediate' },
  '5. Control & Logic': { icon: GitBranch, color: 'text-pink-600', level: 'Intermediate' },
  '6. Data Types & Functions': { icon: Database, color: 'text-indigo-600', level: 'Advanced' },
  '7. Advanced Topics': { icon: Rocket, color: 'text-red-600', level: 'Advanced' },
  '8. Professional Development': { icon: Trophy, color: 'text-yellow-600', level: 'Expert' },
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
