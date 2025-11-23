'use client';
import { FileText, Code, Layout, Image, Database, Zap, Shield, Layers, Box, Cpu, Activity } from 'lucide-react';
import { useHtml } from '@/app/html/html-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from './generic-learning-path';

// Updated category icons matching reorganized html.ts categories
const categoryIcons = {
  'Foundation': { icon: FileText, color: 'text-blue-600', level: 'Beginner' },
  'Core Building Blocks': { icon: Layers, color: 'text-indigo-600', level: 'Beginner' },
  'Grouping & Layout': { icon: Layout, color: 'text-green-600', level: 'Beginner' },
  'Forms & User Input': { icon: Code, color: 'text-purple-600', level: 'Intermediate' },
  'Media & Graphics': { icon: Image, color: 'text-orange-600', level: 'Intermediate' },
  'Interactive & Components': { icon: Box, color: 'text-pink-600', level: 'Intermediate' },
  'Performance & Enhancement': { icon: Activity, color: 'text-teal-600', level: 'Advanced' },
  'Browser & Platform APIs': { icon: Cpu, color: 'text-red-600', level: 'Advanced' },
  'Metadata & SEO': { icon: Database, color: 'text-amber-600', level: 'Advanced' },
  'Accessibility & Quality': { icon: Shield, color: 'text-rose-600', level: 'Advanced' },
};

export const HtmlLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useHtml();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
