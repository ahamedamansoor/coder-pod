'use client';

import { Code, FileType, Tag, Box, Layout, Zap, Building, Sparkles, Palette, Wrench, Package, Key, Award, Settings, Filter, Shield, Users, GitBranch, TestTube, Gauge, CheckCircle, FileCode, Cog, Brain } from 'lucide-react';
import { useTypeScript } from '@/app/languages/typescript/typescript-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for TypeScript - using consistent blue/purple theme
const categoryIcons = {
  '1. Introduction': { icon: Code, color: 'text-blue-600', level: 'Beginner' },
  '2. Basic Types': { icon: FileType, color: 'text-indigo-600', level: 'Beginner' },
  '3. Type Annotations': { icon: Tag, color: 'text-blue-700', level: 'Beginner' },
  '4. Interfaces': { icon: Box, color: 'text-purple-600', level: 'Intermediate' },
  '5. Type Aliases': { icon: Layout, color: 'text-indigo-700', level: 'Intermediate' },
  '6. Functions': { icon: Zap, color: 'text-blue-500', level: 'Intermediate' },
  '7. Classes': { icon: Building, color: 'text-purple-700', level: 'Intermediate' },
  '8. Generics': { icon: Sparkles, color: 'text-indigo-500', level: 'Advanced' },
  '9. Advanced Types': { icon: Palette, color: 'text-blue-800', level: 'Advanced' },
  '10. Utility Types': { icon: Wrench, color: 'text-purple-500', level: 'Advanced' },
  '11. Modules & Namespaces': { icon: Package, color: 'text-indigo-800', level: 'Advanced' },
  '12. Decorators': { icon: Key, color: 'text-blue-600', level: 'Advanced' },
  '13. TypeScript 4.x Features': { icon: Award, color: 'text-purple-600', level: 'Advanced' },
  '14. TypeScript 5.x Features': { icon: Sparkles, color: 'text-indigo-600', level: 'Expert' },
  '15. tsconfig.json': { icon: Settings, color: 'text-blue-700', level: 'Intermediate' },
  '16. Type Narrowing': { icon: Filter, color: 'text-purple-700', level: 'Advanced' },
  '17. Working with React': { icon: Code, color: 'text-indigo-500', level: 'Advanced' },
  '18. Working with Node.js': { icon: Cog, color: 'text-blue-500', level: 'Advanced' },
  '19. Testing': { icon: TestTube, color: 'text-purple-500', level: 'Advanced' },
  '20. Performance': { icon: Gauge, color: 'text-indigo-700', level: 'Expert' },
  '21. Best Practices': { icon: CheckCircle, color: 'text-blue-800', level: 'Expert' },
  '22. Migration': { icon: GitBranch, color: 'text-purple-800', level: 'Intermediate' },
  '23. Tooling': { icon: Wrench, color: 'text-indigo-600', level: 'Intermediate' },
  '24. Advanced Patterns': { icon: Brain, color: 'text-blue-900', level: 'Expert' },
};

interface TypeScriptLearningRoadmapProps {
  language: Language;
}

export function TypeScriptLearningRoadmap({ language }: TypeScriptLearningRoadmapProps) {
  const contextHooks = useTypeScript();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
}
