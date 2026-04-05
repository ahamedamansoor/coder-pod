'use client';

import { PlayCircle, Download, TestTube, Blocks, Globe, MousePointer, Clock, CheckCheck, Workflow, FolderTree, Settings, Target, Network, KeyRound, Eye, Bug, Gauge, BarChart3, Smartphone, FileCode, Accessibility, GitBranch, Package, Award, FileText } from 'lucide-react';
import { usePlaywright } from '@/app/languages/playwright/playwright-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Playwright - using consistent green/emerald theme
const categoryIcons = {
  'Getting Started': { icon: PlayCircle, color: 'text-green-600', level: 'Beginner' },
  'Core Concepts': { icon: Blocks, color: 'text-emerald-600', level: 'Beginner' },
  'Assertions & Expectations': { icon: CheckCheck, color: 'text-green-700', level: 'Beginner' },
  'Test Organization': { icon: FolderTree, color: 'text-emerald-700', level: 'Intermediate' },
  'Configuration': { icon: Settings, color: 'text-green-500', level: 'Intermediate' },
  'Advanced Locators': { icon: Target, color: 'text-emerald-500', level: 'Intermediate' },
  'Network & API Testing': { icon: Network, color: 'text-green-800', level: 'Intermediate' },
  'Authentication & State': { icon: KeyRound, color: 'text-emerald-800', level: 'Intermediate' },
  'Visual Testing': { icon: Eye, color: 'text-green-600', level: 'Advanced' },
  'Debugging & Development': { icon: Bug, color: 'text-emerald-600', level: 'Intermediate' },
  'Parallelization & Performance': { icon: Gauge, color: 'text-green-700', level: 'Advanced' },
  'Reporters & Results': { icon: BarChart3, color: 'text-emerald-700', level: 'Intermediate' },
  'Mobile & Device Testing': { icon: Smartphone, color: 'text-green-500', level: 'Advanced' },
  'Advanced Features': { icon: TestTube, color: 'text-emerald-500', level: 'Advanced' },
  'Accessibility Testing': { icon: Accessibility, color: 'text-green-800', level: 'Advanced' },
  'CI/CD Integration': { icon: GitBranch, color: 'text-emerald-800', level: 'Advanced' },
  'TypeScript Integration': { icon: FileCode, color: 'text-green-600', level: 'Intermediate' },
  'Best Practices': { icon: Award, color: 'text-emerald-600', level: 'Expert' },
};

interface PlaywrightLearningRoadmapProps {
  language: Language;
}

export function PlaywrightLearningRoadmap({ language }: PlaywrightLearningRoadmapProps) {
  const contextHooks = usePlaywright();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
}
