'use client';

import { Wind, Layout, Code, Palette, Sparkles, Smartphone, Zap, Layers } from 'lucide-react';
import { useTailwind } from '@/app/languages/tailwind/tailwind-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Tailwind CSS
const categoryIcons = {
  'Fundamentals': { icon: Wind, color: 'text-cyan-600', level: 'Beginner' },
  'Core Concepts': { icon: Code, color: 'text-cyan-700', level: 'Beginner' },
  'Layout': { icon: Layout, color: 'text-blue-600', level: 'Intermediate' },
  'Effects & Interactivity': { icon: Sparkles, color: 'text-purple-600', level: 'Intermediate' },
  'Advanced Features': { icon: Zap, color: 'text-cyan-500', level: 'Advanced' },
  'Responsive Design': { icon: Smartphone, color: 'text-blue-500', level: 'Intermediate' },
  'Forms & UI Components': { icon: Layers, color: 'text-cyan-800', level: 'Intermediate' },
  'Design Systems': { icon: Palette, color: 'text-purple-500', level: 'Advanced' },
  'Modern CSS': { icon: Zap, color: 'text-cyan-700', level: 'Expert' },
};

interface TailwindLearningRoadmapProps {
  language: Language;
}

export function TailwindLearningRoadmap({ language }: TailwindLearningRoadmapProps) {
  const contextHooks = useTailwind();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
}
