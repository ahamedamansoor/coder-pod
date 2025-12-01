'use client';
import { Rocket, Route, FolderTree, Database, Server, Zap, Globe, Shield, Palette, Image, Code, Settings, FileCode, TestTube, Cloud, Wrench, Layers, Gauge, BookOpen } from 'lucide-react';
import { useNextjsContext } from '@/app/languages/nextjs/nextjs-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Next.js - using consistent black/slate theme
const categoryIcons = {
  '1. Getting Started': { icon: Rocket, color: 'text-slate-600', level: 'Beginner' },
  '2. Routing Fundamentals': { icon: Route, color: 'text-slate-700', level: 'Beginner' },
  '3. App Router': { icon: FolderTree, color: 'text-slate-600', level: 'Intermediate' },
  '4. Data Fetching': { icon: Database, color: 'text-slate-700', level: 'Intermediate' },
  '5. Server Components & Actions': { icon: Server, color: 'text-slate-800', level: 'Advanced' },
  '6. Client Components': { icon: Zap, color: 'text-slate-600', level: 'Intermediate' },
  '7. Rendering Strategies': { icon: Layers, color: 'text-slate-700', level: 'Advanced' },
  '8. Caching & Revalidation': { icon: Gauge, color: 'text-slate-800', level: 'Advanced' },
  '9. Styling': { icon: Palette, color: 'text-slate-600', level: 'Intermediate' },
  '10. Optimizations': { icon: Image, color: 'text-slate-700', level: 'Advanced' },
  '11. API Routes': { icon: Code, color: 'text-slate-600', level: 'Intermediate' },
  '12. Middleware': { icon: Settings, color: 'text-slate-700', level: 'Advanced' },
  '13. Authentication': { icon: Shield, color: 'text-slate-800', level: 'Advanced' },
  '14. Internationalization': { icon: Globe, color: 'text-slate-600', level: 'Advanced' },
  '15. Testing': { icon: TestTube, color: 'text-slate-700', level: 'Expert' },
  '16. Deployment': { icon: Cloud, color: 'text-slate-600', level: 'Intermediate' },
  '17. Configuration': { icon: Wrench, color: 'text-slate-700', level: 'Advanced' },
  '18. Advanced Patterns': { icon: FileCode, color: 'text-slate-800', level: 'Expert' },
  '19. Performance': { icon: Gauge, color: 'text-slate-900', level: 'Expert' },
  '20. API Reference': { icon: BookOpen, color: 'text-slate-500', level: 'Reference' },
};

export const NextjsLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useNextjsContext();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
