'use client';

import React from 'react';
import type { Language } from '@/data/languages';
import { useDsa } from '@/app/languages/dsa/dsa-context';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';
import { dsaCategoryOrder } from '@/data/dsa-roadmap';
import {
  Brain,
  Layers,
  BookOpen,
  Share2,
  Shuffle,
  Target,
  Activity,
  Binary,
  GitBranch,
  Hash,
  Inbox,
  Hexagon,
  BadgeDollarSign,
  Sigma,
  Sparkles,
  LucideIcon,
  Network,
  Route,
  FileText,
  Search,
  Gauge,
  TrendingUp,
  Grid3x3,
  Timer,
} from 'lucide-react';

const sectionIconMap: Record<string, { icon: LucideIcon; color: string; level: string }> = {
  'Time & Space Complexity Analysis': { icon: Timer, color: 'text-slate-700', level: 'Fundamental' },
  'Arrays': { icon: Layers, color: 'text-blue-600', level: 'Beginner' },
  'Strings': { icon: BookOpen, color: 'text-indigo-600', level: 'Beginner' },
  'Linked Lists': { icon: Share2, color: 'text-emerald-600', level: 'Intermediate' },
  'Stacks': { icon: Activity, color: 'text-amber-600', level: 'Intermediate' },
  'Queues': { icon: Inbox, color: 'text-teal-600', level: 'Intermediate' },
  'Recursion': { icon: Brain, color: 'text-purple-600', level: 'Intermediate' },
  'Binary Search': { icon: Target, color: 'text-rose-600', level: 'Intermediate' },
  'Sorting Algorithms': { icon: Shuffle, color: 'text-sky-600', level: 'Intermediate' },
  'Binary Trees': { icon: GitBranch, color: 'text-lime-600', level: 'Advanced' },
  'Binary Search Trees (BST)': { icon: Binary, color: 'text-cyan-600', level: 'Advanced' },
  'Hashing & Hash Maps': { icon: Hash, color: 'text-fuchsia-600', level: 'Advanced' },
  'Heaps & Priority Queues': { icon: Hexagon, color: 'text-orange-600', level: 'Advanced' },
  'Graphs': { icon: Sparkles, color: 'text-pink-600', level: 'Advanced' },
  'Dynamic Programming': { icon: Sigma, color: 'text-blue-700', level: 'Expert' },
  'Greedy Algorithms': { icon: BadgeDollarSign, color: 'text-emerald-700', level: 'Advanced' },
  'Bit Manipulation': { icon: Binary, color: 'text-slate-600', level: 'Advanced' },
  'Tries': { icon: GitBranch, color: 'text-violet-600', level: 'Advanced' },
  'Advanced Topics': { icon: Shuffle, color: 'text-red-600', level: 'Expert' },
  'Graph Algorithms': { icon: Network, color: 'text-purple-700', level: 'Expert' },
  'String Algorithms': { icon: FileText, color: 'text-indigo-700', level: 'Expert' },
  'Backtracking & Branch and Bound': { icon: Search, color: 'text-amber-700', level: 'Expert' },
  'Advanced Dynamic Programming': { icon: TrendingUp, color: 'text-blue-800', level: 'Expert' },
  'Monotonic Stack & Deque': { icon: Layers, color: 'text-rose-700', level: 'Expert' },
  'Computational Geometry': { icon: Grid3x3, color: 'text-teal-700', level: 'Expert' },
};

const categoryIcons = dsaCategoryOrder.reduce<Record<string, { icon: LucideIcon; color: string; level: string }>>(
  (acc, category) => {
    const sectionTitle = category.split(' · ')[0];
    acc[category] = sectionIconMap[sectionTitle] || { icon: Layers, color: 'text-blue-600', level: 'Intermediate' };
    return acc;
  },
  {}
);

export function DsaLearningRoadmap({ language }: { language: Language }) {
  const contextHooks = useDsa();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
      totalTopicCount={language.topics.filter((topic) => topic.slug !== 'learning-plan').length}
    />
  );
}
