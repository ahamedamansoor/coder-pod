
'use client';
import { Code, Layout, Zap, Package, FileText, Lock, Building, Clock, Globe, MousePointer, Sparkles, Palette, Gauge, Plug, Shield, Brain, Wrench, Server, Database, Calendar, Hash, Languages, Network, Cpu, Microscope, Binary } from 'lucide-react';
import { useJavascript } from '@/app/languages/javascript/javascript-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for JavaScript - using consistent yellow/amber theme
const categoryIcons = {
  '1. Fundamentals': { icon: Zap, color: 'text-yellow-600', level: 'Beginner' },
  '2. Operators & Control Flow': { icon: Layout, color: 'text-amber-600', level: 'Beginner' },
  '3. Functions': { icon: Code, color: 'text-yellow-700', level: 'Beginner' },
  '4. Arrays & Objects': { icon: Package, color: 'text-orange-600', level: 'Intermediate' },
  '5. Strings & Regex': { icon: FileText, color: 'text-yellow-500', level: 'Intermediate' },
  '6. Scope & Closures': { icon: Lock, color: 'text-amber-700', level: 'Intermediate' },
  '7. Object-Oriented JavaScript': { icon: Building, color: 'text-yellow-800', level: 'Intermediate' },
  '8. Asynchronous JavaScript': { icon: Clock, color: 'text-amber-500', level: 'Advanced' },
  '9. DOM Manipulation': { icon: Globe, color: 'text-yellow-600', level: 'Advanced' },
  '10. Events': { icon: MousePointer, color: 'text-orange-500', level: 'Advanced' },
  '11. ES6+ Features': { icon: Sparkles, color: 'text-amber-600', level: 'Advanced' },
  '12. Design Patterns': { icon: Palette, color: 'text-yellow-700', level: 'Expert' },
  '13. Performance & Optimization': { icon: Gauge, color: 'text-amber-800', level: 'Expert' },
  '14. APIs & Browser': { icon: Plug, color: 'text-orange-600', level: 'Expert' },
  '15. Modern JavaScript': { icon: Sparkles, color: 'text-yellow-500', level: 'Advanced' },
  '16. Advanced Array Methods': { icon: Package, color: 'text-amber-700', level: 'Advanced' },
  '17. Advanced Object Patterns': { icon: Building, color: 'text-orange-700', level: 'Advanced' },
  '18. Sets & Maps': { icon: Database, color: 'text-yellow-600', level: 'Intermediate' },
  '19. Date & Time': { icon: Calendar, color: 'text-amber-600', level: 'Intermediate' },
  '20. Math & Numbers': { icon: Hash, color: 'text-yellow-700', level: 'Intermediate' },
  '21. JSON': { icon: FileText, color: 'text-orange-600', level: 'Intermediate' },
  '22. Internationalization': { icon: Languages, color: 'text-amber-500', level: 'Advanced' },
  '23. Browser APIs': { icon: Network, color: 'text-yellow-800', level: 'Advanced' },
  '24. Advanced Async Patterns': { icon: Clock, color: 'text-amber-800', level: 'Expert' },
  '25. Runtime Environments': { icon: Server, color: 'text-orange-500', level: 'Intermediate' },
  '26. Tooling & Build': { icon: Wrench, color: 'text-yellow-700', level: 'Intermediate' },
  '27. Security & Best Practices': { icon: Shield, color: 'text-amber-700', level: 'Expert' },
  '28. Testing': { icon: Microscope, color: 'text-yellow-600', level: 'Advanced' },
  '29. Meta-Programming': { icon: Brain, color: 'text-orange-700', level: 'Expert' },
  '30. Memory & Performance': { icon: Cpu, color: 'text-amber-800', level: 'Expert' },
};

export const JavascriptLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useJavascript();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
