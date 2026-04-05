'use client';

import React from 'react';
import type { Language } from '@/data/languages';
import { useRxjs } from '@/app/languages/rxjs/rxjs-context';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';
import { rxjsCategoryOrder } from '@/data/rxjs-roadmap';
import { Activity, Atom, GitBranch, Layers, Zap, Filter, Link2, Clock, CloudLightning, Type, MousePointer, Share2, Radio, Wifi, Search, RefreshCcw, Sparkles, Move, Bell, Loader2, Repeat, AlertTriangle, LucideIcon } from 'lucide-react';

const sectionIconMap: Record<string, { icon: LucideIcon; color: string; level: string }> = {
  'Core Concepts': { icon: Atom, color: 'text-blue-600', level: 'Beginner' },
  'Creation Operators': { icon: Zap, color: 'text-amber-600', level: 'Beginner' },
  'Transformation Operators': { icon: Layers, color: 'text-indigo-600', level: 'Beginner' },
  'Flattening Operators': { icon: GitBranch, color: 'text-emerald-600', level: 'Intermediate' },
  'Filtering Operators': { icon: Filter, color: 'text-teal-600', level: 'Intermediate' },
  'Rate Limiting Operators': { icon: Clock, color: 'text-rose-600', level: 'Intermediate' },
  'Combination Operators': { icon: Link2, color: 'text-cyan-600', level: 'Intermediate' },
  'Buffer & Window Operators': { icon: Layers, color: 'text-purple-600', level: 'Intermediate' },
  'Error Handling Operators': { icon: RefreshCcw, color: 'text-red-600', level: 'Intermediate' },
  'Utility Operators': { icon: Sparkles, color: 'text-slate-600', level: 'Intermediate' },
  'Multicasting Operators': { icon: Radio, color: 'text-amber-600', level: 'Advanced' },
  'Subjects': { icon: Share2, color: 'text-fuchsia-600', level: 'Advanced' },
  'Schedulers': { icon: Clock, color: 'text-lime-600', level: 'Advanced' },
  'HTTP Patterns': { icon: CloudLightning, color: 'text-blue-600', level: 'Advanced' },
  'Form Handling Patterns': { icon: Type, color: 'text-emerald-600', level: 'Advanced' },
  'Event Handling Patterns': { icon: MousePointer, color: 'text-amber-600', level: 'Advanced' },
  'State Management Patterns': { icon: Layers, color: 'text-indigo-600', level: 'Advanced' },
  'WebSocket Patterns': { icon: Wifi, color: 'text-rose-600', level: 'Advanced' },
  'Animation Patterns': { icon: Activity, color: 'text-pink-600', level: 'Advanced' },
  'Search/Typeahead': { icon: Search, color: 'text-blue-500', level: 'Advanced' },
  'Infinite Scroll': { icon: GitBranch, color: 'text-emerald-500', level: 'Advanced' },
  'Auto-save': { icon: Repeat, color: 'text-cyan-500', level: 'Advanced' },
  'Real-time Updates': { icon: RefreshCcw, color: 'text-amber-500', level: 'Advanced' },
  'Drag and Drop': { icon: Move, color: 'text-purple-500', level: 'Advanced' },
  'Notification Systems': { icon: Bell, color: 'text-indigo-500', level: 'Advanced' },
  'Loading States': { icon: Loader2, color: 'text-pink-500', level: 'Advanced' },
  'Custom Operators': { icon: Sparkles, color: 'text-blue-600', level: 'Advanced' },
  'Testing Patterns': { icon: Activity, color: 'text-emerald-600', level: 'Advanced' },
  'Performance Optimization': { icon: Clock, color: 'text-rose-600', level: 'Advanced' },
  'Angular Integration': { icon: Layers, color: 'text-red-500', level: 'Advanced' },
  'Promise Interop': { icon: Repeat, color: 'text-slate-600', level: 'Advanced' },
  'Callback Conversion': { icon: Link2, color: 'text-amber-600', level: 'Advanced' },
  'Best Practices': { icon: Sparkles, color: 'text-indigo-600', level: 'Advanced' },
  'Anti-patterns to Avoid': { icon: AlertTriangle, color: 'text-red-600', level: 'Advanced' },
  'Common Use Cases': { icon: Activity, color: 'text-emerald-600', level: 'Advanced' },
};

const fallbackIcon = { icon: Atom, color: 'text-blue-600', level: 'Intermediate' };

const categoryIcons = rxjsCategoryOrder.reduce<Record<string, { icon: LucideIcon; color: string; level: string }>>(
  (acc, category) => {
    acc[category] = sectionIconMap[category] || fallbackIcon;
    return acc;
  },
  {},
);

export function RxjsLearningRoadmap({ language }: { language: Language }) {
  const contextHooks = useRxjs();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
      totalTopicCount={language.topics.filter((topic) => topic.slug !== 'learning-plan').length}
    />
  );
}
