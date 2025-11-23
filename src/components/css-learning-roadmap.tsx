
'use client';
import { Palette, Layout, Code, Box, Sparkles, Gauge, Smartphone, Zap } from 'lucide-react';
import { useCss } from '@/app/css/css-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from './generic-learning-path';

// Category icons for CSS
const categoryIcons = {
  'CSS Fundamentals': { icon: Palette, color: 'text-blue-600', level: 'Beginner' },
  'Layout & Positioning': { icon: Layout, color: 'text-green-600', level: 'Intermediate' },
  'Styling & Design': { icon: Code, color: 'text-purple-600', level: 'Intermediate' },
  'Responsive Design': { icon: Smartphone, color: 'text-orange-600', level: 'Intermediate' },
  'Flexbox & Grid': { icon: Box, color: 'text-indigo-600', level: 'Advanced' },
  'Animations & Effects': { icon: Sparkles, color: 'text-pink-600', level: 'Advanced' },
  'Performance': { icon: Gauge, color: 'text-red-600', level: 'Advanced' },
  'Modern CSS': { icon: Zap, color: 'text-teal-600', level: 'Expert' },
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
