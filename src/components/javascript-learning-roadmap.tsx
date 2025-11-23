
'use client';
import { Code, Layout, Zap, Package, FileText, Lock, Building, Clock, Globe, MousePointer, Sparkles, Palette, Gauge, Plug, Shield } from 'lucide-react';
import { useJavascript } from '@/app/javascript/javascript-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from './generic-learning-path';

// Category icons for JavaScript
const categoryIcons = {
  '1. Fundamentals': { icon: Zap, color: 'text-blue-600', level: 'Beginner' },
  '2. Operators & Control Flow': { icon: Layout, color: 'text-green-600', level: 'Beginner' },
  '3. Functions': { icon: Code, color: 'text-purple-600', level: 'Beginner' },
  '4. Arrays & Objects': { icon: Package, color: 'text-orange-600', level: 'Intermediate' },
  '5. Strings & Regex': { icon: FileText, color: 'text-pink-600', level: 'Intermediate' },
  '6. Scope & Closures': { icon: Lock, color: 'text-indigo-600', level: 'Intermediate' },
  '7. Object-Oriented JavaScript': { icon: Building, color: 'text-red-600', level: 'Intermediate' },
  '8. Asynchronous JavaScript': { icon: Clock, color: 'text-yellow-600', level: 'Advanced' },
  '9. DOM Manipulation': { icon: Globe, color: 'text-teal-600', level: 'Advanced' },
  '10. Events': { icon: MousePointer, color: 'text-cyan-600', level: 'Advanced' },
  '11. ES6+ Features': { icon: Sparkles, color: 'text-violet-600', level: 'Advanced' },
  '12. Design Patterns': { icon: Palette, color: 'text-fuchsia-600', level: 'Expert' },
  '13. Performance & Optimization': { icon: Gauge, color: 'text-emerald-600', level: 'Expert' },
  '14. APIs & Browser': { icon: Plug, color: 'text-sky-600', level: 'Expert' },
  '15. Security & Testing': { icon: Shield, color: 'text-rose-600', level: 'Expert' },
};

export const JavascriptLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useJavascript();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
      totalTopicCount={111}
    />
  );
};
