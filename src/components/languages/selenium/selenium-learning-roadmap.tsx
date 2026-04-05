'use client';
import { Globe, Code, Zap, Settings, Layers, Grid3x3, Rocket, CheckCircle, Award, TrendingUp } from 'lucide-react';
import { useSelenium } from '@/app/languages/selenium/selenium-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Selenium - using consistent green theme
const categoryIcons = {
  'Getting Started': { icon: Globe, color: 'text-green-600', level: 'Beginner' },
  'Browser Configuration': { icon: Settings, color: 'text-green-700', level: 'Beginner' },
  'Locator Strategies': { icon: Code, color: 'text-green-500', level: 'Intermediate' },
  'Element Interactions': { icon: Zap, color: 'text-green-600', level: 'Intermediate' },
  'Waits & Synchronization': { icon: CheckCircle, color: 'text-green-700', level: 'Intermediate' },
  'Browser Navigation': { icon: Layers, color: 'text-green-500', level: 'Intermediate' },
  'Advanced Interactions': { icon: Grid3x3, color: 'text-green-600', level: 'Advanced' },
  'Frames & Alerts': { icon: Settings, color: 'text-green-700', level: 'Advanced' },
  'JavaScript Execution': { icon: Code, color: 'text-green-500', level: 'Advanced' },
  'Screenshots & Visual Testing': { icon: CheckCircle, color: 'text-green-600', level: 'Advanced' },
  'Cookies & Storage': { icon: Layers, color: 'text-green-700', level: 'Advanced' },
  'Test Frameworks Integration': { icon: Grid3x3, color: 'text-green-500', level: 'Advanced' },
  'Page Object Model': { icon: Settings, color: 'text-green-600', level: 'Advanced' },
  'Data-Driven Testing': { icon: Code, color: 'text-green-700', level: 'Advanced' },
  'Selenium Grid': { icon: Rocket, color: 'text-green-500', level: 'Expert' },
  'Handling Special Elements': { icon: Zap, color: 'text-green-600', level: 'Expert' },
  'Error Handling & Debugging': { icon: CheckCircle, color: 'text-green-700', level: 'Expert' },
  'CI/CD Integration': { icon: Layers, color: 'text-green-500', level: 'Expert' },
  'Performance & Optimization': { icon: TrendingUp, color: 'text-green-600', level: 'Expert' },
  'Best Practices': { icon: Award, color: 'text-green-700', level: 'Expert' },
  'Framework Architecture': { icon: Grid3x3, color: 'text-green-500', level: 'Expert' },
  'Reporting & Documentation': { icon: Code, color: 'text-green-700', level: 'Expert' },
  'API & UI Combined Testing': { icon: Zap, color: 'text-green-500', level: 'Expert' },
  'Mobile Web Testing': { icon: Layers, color: 'text-green-600', level: 'Expert' },
  'Selenium 4 Features': { icon: Rocket, color: 'text-green-500', level: 'Expert' },
  'Security Testing': { icon: CheckCircle, color: 'text-green-600', level: 'Expert' },
  'Accessibility Testing': { icon: Award, color: 'text-green-700', level: 'Expert' },
  'Performance Testing Integration': { icon: TrendingUp, color: 'text-green-500', level: 'Expert' },
  'Test Management & Organization': { icon: Settings, color: 'text-green-600', level: 'Expert' },
  'Real-World Scenarios': { icon: Code, color: 'text-green-700', level: 'Expert' },
};

export const SeleniumLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useSelenium();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
