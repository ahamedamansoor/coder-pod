'use client';
import { Rocket, Code, Box, Repeat, Sparkles, Layout, Zap, Settings, FileCode, Globe, Package, TestTube, Wrench, BookOpen, Shield, CheckCircle, Database, Server, Archive, Route, Tag, Eye, Brain, FileText, Layers, BarChart3 } from 'lucide-react';
import { useVueContext } from '@/app/languages/vue/vue-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Vue - using consistent emerald/green theme
const categoryIcons = {
  '1. Getting Started': { icon: Rocket, color: 'text-emerald-600', level: 'Beginner' },
  '2. Essentials': { icon: Code, color: 'text-green-600', level: 'Beginner' },
  '3. Components In-Depth': { icon: Box, color: 'text-emerald-700', level: 'Intermediate' },
  '4. Reusability': { icon: Repeat, color: 'text-green-700', level: 'Intermediate' },
  '5. Built-in Components': { icon: Package, color: 'text-emerald-500', level: 'Intermediate' },
  '6. Scaling Up': { icon: BarChart3, color: 'text-green-500', level: 'Intermediate' },
  '7. Composition API': { icon: Sparkles, color: 'text-emerald-800', level: 'Advanced' },
  '8. Reactivity In Depth': { icon: Zap, color: 'text-green-800', level: 'Advanced' },
  '9. Rendering Mechanism': { icon: Eye, color: 'text-emerald-600', level: 'Advanced' },
  '10. Vue Router': { icon: Route, color: 'text-green-600', level: 'Intermediate' },
  '11. Pinia (State Management)': { icon: Database, color: 'text-emerald-700', level: 'Advanced' },
  '12. VueUse (Utilities)': { icon: Wrench, color: 'text-green-700', level: 'Intermediate' },
  '13. TypeScript with Vue': { icon: FileText, color: 'text-emerald-800', level: 'Advanced' },
  '14. Best Practices': { icon: CheckCircle, color: 'text-green-900', level: 'Expert' },
  '15. Testing': { icon: TestTube, color: 'text-emerald-700', level: 'Expert' },
  '16. Tooling & Ecosystem': { icon: Settings, color: 'text-green-600', level: 'Intermediate' },
  '17. Server-Side Rendering': { icon: Server, color: 'text-emerald-900', level: 'Expert' },
  '18. Migration & Compatibility': { icon: Archive, color: 'text-green-800', level: 'Advanced' },
  '19. API Reference': { icon: BookOpen, color: 'text-emerald-500', level: 'Reference' },
};

export const VueLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useVueContext();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
