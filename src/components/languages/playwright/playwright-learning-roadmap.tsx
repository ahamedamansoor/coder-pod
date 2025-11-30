'use client';

import { PlayCircle, Download, TestTube, Blocks, Globe, MousePointer, Clock, CheckCheck, HookIcon, FolderTree, Settings, Target, Network, KeyRound, Eye, Bug, Gauge, BarChart3, Smartphone, FileCode, Accessibility, GitBranch, Package, Award, FileText } from 'lucide-react';
import { usePlaywright } from '@/app/languages/playwright/playwright-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Playwright - using consistent green/emerald theme
const categoryIcons = {
  '1. Getting Started': { icon: PlayCircle, color: 'text-green-600', level: 'Beginner' },
  '2. Core Concepts': { icon: Blocks, color: 'text-emerald-600', level: 'Beginner' },
  '3. Assertions & Expectations': { icon: CheckCheck, color: 'text-green-700', level: 'Beginner' },
  '4. Test Organization': { icon: FolderTree, color: 'text-emerald-700', level: 'Intermediate' },
  '5. Configuration': { icon: Settings, color: 'text-green-500', level: 'Intermediate' },
  '6. Advanced Locators': { icon: Target, color: 'text-emerald-500', level: 'Intermediate' },
  '7. Network & API Testing': { icon: Network, color: 'text-green-800', level: 'Intermediate' },
  '8. Authentication & State': { icon: KeyRound, color: 'text-emerald-800', level: 'Intermediate' },
  '9. Visual Testing': { icon: Eye, color: 'text-green-600', level: 'Advanced' },
  '10. Debugging & Development': { icon: Bug, color: 'text-emerald-600', level: 'Intermediate' },
  '11. Parallelization & Performance': { icon: Gauge, color: 'text-green-700', level: 'Advanced' },
  '12. Reporters & Results': { icon: BarChart3, color: 'text-emerald-700', level: 'Intermediate' },
  '13. Mobile & Device Testing': { icon: Smartphone, color: 'text-green-500', level: 'Advanced' },
  '14. Advanced Features': { icon: TestTube, color: 'text-emerald-500', level: 'Advanced' },
  '15. Accessibility Testing': { icon: Accessibility, color: 'text-green-800', level: 'Advanced' },
  '16. CI/CD Integration': { icon: GitBranch, color: 'text-emerald-800', level: 'Advanced' },
  '17. TypeScript Integration': { icon: FileCode, color: 'text-green-600', level: 'Intermediate' },
  '18. Best Practices': { icon: Award, color: 'text-emerald-600', level: 'Expert' },
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
