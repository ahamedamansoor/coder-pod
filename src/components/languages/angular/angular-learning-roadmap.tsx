'use client';

import { Rocket, Code, Box, FileCode, Zap, Package, Database, Layers, Layout, Server, TestTube, Gauge, Wrench, Palette, Settings, Globe, Shield, Sparkles, CheckCircle, Brain } from 'lucide-react';
import { useAngular } from '@/app/languages/angular/angular-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Angular - using consistent red/orange theme
const categoryIcons = {
  '1. Introduction & Setup': { icon: Rocket, color: 'text-red-600', level: 'Beginner' },
  '2. Components': { icon: Box, color: 'text-orange-600', level: 'Beginner' },
  '3. Templates & Data Binding': { icon: Code, color: 'text-red-700', level: 'Beginner' },
  '4. Directives': { icon: FileCode, color: 'text-orange-700', level: 'Intermediate' },
  '5. Pipes': { icon: Zap, color: 'text-red-500', level: 'Intermediate' },
  '6. Services & DI': { icon: Package, color: 'text-orange-500', level: 'Intermediate' },
  '7. RxJS & Observables': { icon: Database, color: 'text-red-800', level: 'Advanced' },
  '8. Forms': { icon: FileCode, color: 'text-orange-800', level: 'Intermediate' },
  '9. Routing & Navigation': { icon: Layout, color: 'text-red-600', level: 'Intermediate' },
  '10. HTTP Client': { icon: Server, color: 'text-orange-600', level: 'Intermediate' },
  '11. State Management': { icon: Database, color: 'text-red-700', level: 'Advanced' },
  '12. Modules': { icon: Layers, color: 'text-orange-700', level: 'Intermediate' },
  '13. Standalone Components': { icon: Box, color: 'text-red-500', level: 'Advanced' },
  '14. Change Detection': { icon: Zap, color: 'text-orange-500', level: 'Advanced' },
  '15. Animations': { icon: Sparkles, color: 'text-red-800', level: 'Advanced' },
  '16. Testing': { icon: TestTube, color: 'text-orange-800', level: 'Expert' },
  '17. Performance': { icon: Gauge, color: 'text-red-900', level: 'Expert' },
  '18. CLI & Build': { icon: Wrench, color: 'text-orange-900', level: 'Intermediate' },
  '19. Material & CDK': { icon: Palette, color: 'text-red-600', level: 'Advanced' },
  '20. Modern Angular': { icon: Settings, color: 'text-orange-600', level: 'Advanced' },
  '21. Angular 16+': { icon: Sparkles, color: 'text-red-700', level: 'Expert' },
  '22. Angular 17+': { icon: Globe, color: 'text-orange-700', level: 'Expert' },
  '23. Angular 18+': { icon: Zap, color: 'text-red-800', level: 'Expert' },
  '24. Best Practices': { icon: CheckCircle, color: 'text-orange-800', level: 'Expert' },
};

interface AngularLearningRoadmapProps {
  language: Language;
}

export function AngularLearningRoadmap({ language }: AngularLearningRoadmapProps) {
  const contextHooks = useAngular();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
}
