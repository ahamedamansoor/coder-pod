
'use client';
import { Palette, Layout, Code, Box, Sparkles, Gauge, Smartphone, Zap } from 'lucide-react';
import { useCss } from '@/app/css/css-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for CSS - using consistent blue/purple theme
const categoryIcons = {
  'CSS Fundamentals': { icon: Palette, color: 'text-blue-600', level: 'Beginner' },
  'Layout & Positioning': { icon: Layout, color: 'text-blue-700', level: 'Intermediate' },
  'Styling & Design': { icon: Code, color: 'text-purple-600', level: 'Intermediate' },
  'Responsive Design': { icon: Smartphone, color: 'text-blue-500', level: 'Intermediate' },
  'Flexbox & Grid': { icon: Box, color: 'text-indigo-600', level: 'Advanced' },
  'Animations & Effects': { icon: Sparkles, color: 'text-purple-500', level: 'Advanced' },
  'Performance': { icon: Gauge, color: 'text-blue-800', level: 'Advanced' },
  'Modern CSS': { icon: Zap, color: 'text-purple-700', level: 'Expert' },
};

export const CssLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useCss();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
