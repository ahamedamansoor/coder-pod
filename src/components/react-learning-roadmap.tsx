
'use client';
import { Rocket, Code, Repeat, Database, Zap, Package, Globe, Shield, Settings } from 'lucide-react';
import { useReact } from '@/app/react/react-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from './generic-learning-path';

// Category icons for React
const categoryIcons = {
  '1. Getting Started': { icon: Rocket, color: 'text-blue-600', level: 'Beginner' },
  '2. Describing the UI': { icon: Code, color: 'text-green-600', level: 'Beginner' },
  '3. Adding Interactivity': { icon: Zap, color: 'text-purple-600', level: 'Intermediate' },
  '4. Managing State': { icon: Database, color: 'text-orange-600', level: 'Intermediate' },
  '5. Escape Hatches': { icon: Settings, color: 'text-pink-600', level: 'Advanced' },
  '6. React Router': { icon: Globe, color: 'text-indigo-600', level: 'Advanced' },
  '7. Advanced Patterns': { icon: Repeat, color: 'text-red-600', level: 'Advanced' },
  '8. Performance': { icon: Package, color: 'text-teal-600', level: 'Expert' },
  '9. Testing': { icon: Shield, color: 'text-cyan-600', level: 'Expert' },
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
