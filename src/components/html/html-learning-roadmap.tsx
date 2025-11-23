'use client';
import { FileText, Code, Layout, Image, Database, Zap, Shield, Layers, Box, Cpu, Activity } from 'lucide-react';
import { useHtml } from '@/app/html/html-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for HTML - using consistent blue theme to match CODER POD logo
const categoryIcons = {
  'Foundation': { icon: FileText, color: 'text-blue-600', level: 'Beginner' },
  'Core Building Blocks': { icon: Layers, color: 'text-blue-500', level: 'Beginner' },
  'Grouping & Layout': { icon: Layout, color: 'text-blue-700', level: 'Beginner' },
  'Forms & User Input': { icon: Code, color: 'text-blue-600', level: 'Intermediate' },
  'Media & Graphics': { icon: Image, color: 'text-blue-500', level: 'Intermediate' },
  'Interactive & Components': { icon: Box, color: 'text-blue-700', level: 'Intermediate' },
  'Performance & Enhancement': { icon: Activity, color: 'text-blue-600', level: 'Advanced' },
  'Browser & Platform APIs': { icon: Cpu, color: 'text-blue-500', level: 'Advanced' },
  'Metadata & SEO': { icon: Database, color: 'text-blue-700', level: 'Advanced' },
  'Accessibility & Quality': { icon: Shield, color: 'text-blue-600', level: 'Advanced' },
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
