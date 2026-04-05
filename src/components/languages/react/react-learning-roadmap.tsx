
'use client';
import { Rocket, Code, Repeat, Database, Zap, Package, Globe, Shield, Settings, Sparkles, Layout, FileCode, CheckCircle, Gauge, TestTube, Server, Wrench, BookOpen, FileText, Box, Brain, Boxes, Route, Archive, Eye, Layers, Search, Cloud } from 'lucide-react';
import { useReact } from '@/app/languages/react/react-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for React - using consistent cyan/blue theme
const categoryIcons = {
  'Getting Started': { icon: Rocket, color: 'text-cyan-600', level: 'Beginner' },
  'Describing the UI': { icon: Code, color: 'text-blue-600', level: 'Beginner' },
  'Adding Interactivity': { icon: Zap, color: 'text-cyan-700', level: 'Intermediate' },
  'Managing State': { icon: Database, color: 'text-blue-700', level: 'Intermediate' },
  'Escape Hatches': { icon: Settings, color: 'text-cyan-500', level: 'Advanced' },
  'Hooks (Comprehensive)': { icon: Sparkles, color: 'text-blue-500', level: 'Advanced' },
  'Component Details': { icon: Box, color: 'text-cyan-800', level: 'Advanced' },
  'Client Libraries': { icon: Package, color: 'text-blue-600', level: 'Intermediate' },
  'Form Details': { icon: FileCode, color: 'text-cyan-600', level: 'Intermediate' },
  'Advanced Patterns': { icon: Repeat, color: 'text-blue-800', level: 'Advanced' },
  'Context API': { icon: Globe, color: 'text-cyan-500', level: 'Advanced' },
  'Performance Optimization': { icon: Gauge, color: 'text-blue-700', level: 'Expert' },
  'Testing': { icon: TestTube, color: 'text-cyan-700', level: 'Expert' },
  'Deployment': { icon: Server, color: 'text-blue-600', level: 'Intermediate' },
  'TypeScript Integration': { icon: FileText, color: 'text-cyan-800', level: 'Advanced' },
  'Advanced Features': { icon: Zap, color: 'text-blue-900', level: 'Expert' },
  'Developer Tools': { icon: Wrench, color: 'text-cyan-600', level: 'Intermediate' },
  'API Reference': { icon: BookOpen, color: 'text-blue-500', level: 'Reference' },
  'Rules & Best Practices': { icon: CheckCircle, color: 'text-cyan-900', level: 'Expert' },
  'Thinking in React': { icon: Brain, color: 'text-blue-800', level: 'Expert' },
  'React Router': { icon: Route, color: 'text-cyan-600', level: 'Advanced' },
  'Redux': { icon: Archive, color: 'text-blue-700', level: 'Advanced' },
  'MobX': { icon: Eye, color: 'text-cyan-700', level: 'Advanced' },
  'Zustand': { icon: Layers, color: 'text-blue-600', level: 'Advanced' },
  'React Query': { icon: Search, color: 'text-cyan-800', level: 'Advanced' },
  'SWR': { icon: Cloud, color: 'text-blue-800', level: 'Advanced' },
};

export const ReactLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useReact();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
