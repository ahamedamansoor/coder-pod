
'use client';
import { Code, Layout, Zap, Package, FileText, Lock, Building, Clock, Globe, MousePointer, Sparkles, Palette, Gauge, Plug, Shield, Brain, Wrench, Server, Database, Calendar, Hash, Languages, Network, Cpu, Microscope, Binary } from 'lucide-react';
import { useJavascript } from '@/app/languages/javascript/javascript-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for JavaScript - using consistent yellow/amber theme
const categoryIcons = {
  'Fundamentals': { icon: Zap, color: 'text-yellow-600', level: 'Beginner' },
  'Operators & Control Flow': { icon: Layout, color: 'text-amber-600', level: 'Beginner' },
  'Functions': { icon: Code, color: 'text-yellow-700', level: 'Beginner' },
  'Arrays & Objects': { icon: Package, color: 'text-orange-600', level: 'Intermediate' },
  'Strings & Regex': { icon: FileText, color: 'text-yellow-500', level: 'Intermediate' },
  'Scope & Closures': { icon: Lock, color: 'text-amber-700', level: 'Intermediate' },
  'Object-Oriented JavaScript': { icon: Building, color: 'text-yellow-800', level: 'Intermediate' },
  'Asynchronous JavaScript': { icon: Clock, color: 'text-amber-500', level: 'Advanced' },
  'DOM Manipulation': { icon: Globe, color: 'text-yellow-600', level: 'Advanced' },
  'Events': { icon: MousePointer, color: 'text-orange-500', level: 'Advanced' },
  'ES6+ Features': { icon: Sparkles, color: 'text-amber-600', level: 'Advanced' },
  'Design Patterns': { icon: Palette, color: 'text-yellow-700', level: 'Expert' },
  'Performance & Optimization': { icon: Gauge, color: 'text-amber-800', level: 'Expert' },
  'APIs & Browser': { icon: Plug, color: 'text-orange-600', level: 'Expert' },
  'Modern JavaScript': { icon: Sparkles, color: 'text-yellow-500', level: 'Advanced' },
  'Advanced Array Methods': { icon: Package, color: 'text-amber-700', level: 'Advanced' },
  'Advanced Object Patterns': { icon: Building, color: 'text-orange-700', level: 'Advanced' },
  'Sets & Maps': { icon: Database, color: 'text-yellow-600', level: 'Intermediate' },
  'Date & Time': { icon: Calendar, color: 'text-amber-600', level: 'Intermediate' },
  'Math & Numbers': { icon: Hash, color: 'text-yellow-700', level: 'Intermediate' },
  'JSON': { icon: FileText, color: 'text-orange-600', level: 'Intermediate' },
  'Internationalization': { icon: Languages, color: 'text-amber-500', level: 'Advanced' },
  'Browser APIs': { icon: Network, color: 'text-yellow-800', level: 'Advanced' },
  'Advanced Async Patterns': { icon: Clock, color: 'text-amber-800', level: 'Expert' },
  'Runtime Environments': { icon: Server, color: 'text-orange-500', level: 'Intermediate' },
  'Tooling & Build': { icon: Wrench, color: 'text-yellow-700', level: 'Intermediate' },
  'Security & Best Practices': { icon: Shield, color: 'text-amber-700', level: 'Expert' },
  'Testing': { icon: Microscope, color: 'text-yellow-600', level: 'Advanced' },
  'Meta-Programming': { icon: Brain, color: 'text-orange-700', level: 'Expert' },
  'Memory & Performance': { icon: Cpu, color: 'text-amber-800', level: 'Expert' },
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
