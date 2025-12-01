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
  '1. Arrays': { icon: Layers, color: 'text-blue-600', level: 'Beginner' },
  '2. Strings': { icon: BookOpen, color: 'text-indigo-600', level: 'Beginner' },
  '3. Linked Lists': { icon: Share2, color: 'text-emerald-600', level: 'Intermediate' },
  '4. Stacks': { icon: Activity, color: 'text-amber-600', level: 'Intermediate' },
  '5. Queues': { icon: Inbox, color: 'text-teal-600', level: 'Intermediate' },
  '6. Recursion': { icon: Brain, color: 'text-purple-600', level: 'Intermediate' },
  '7. Binary Search': { icon: Target, color: 'text-rose-600', level: 'Intermediate' },
  '8. Sorting Algorithms': { icon: Shuffle, color: 'text-sky-600', level: 'Intermediate' },
  '9. Binary Trees': { icon: GitBranch, color: 'text-lime-600', level: 'Advanced' },
  '10. Binary Search Trees (BST)': { icon: Binary, color: 'text-cyan-600', level: 'Advanced' },
  '11. Hashing & Hash Maps': { icon: Hash, color: 'text-fuchsia-600', level: 'Advanced' },
  '12. Heaps & Priority Queues': { icon: Hexagon, color: 'text-orange-600', level: 'Advanced' },
  '13. Graphs': { icon: Sparkles, color: 'text-pink-600', level: 'Advanced' },
  '14. Dynamic Programming': { icon: Sigma, color: 'text-blue-700', level: 'Expert' },
  '15. Greedy Algorithms': { icon: BadgeDollarSign, color: 'text-emerald-700', level: 'Advanced' },
  '16. Bit Manipulation': { icon: Binary, color: 'text-slate-600', level: 'Advanced' },
  '17. Tries': { icon: GitBranch, color: 'text-violet-600', level: 'Advanced' },
  '18. Advanced Topics': { icon: Shuffle, color: 'text-red-600', level: 'Expert' },
  '19. Graph Algorithms': { icon: Network, color: 'text-purple-700', level: 'Expert' },
  '20. String Algorithms': { icon: FileText, color: 'text-indigo-700', level: 'Expert' },
  '21. Backtracking & Branch and Bound': { icon: Search, color: 'text-amber-700', level: 'Expert' },
  '22. Advanced Dynamic Programming': { icon: TrendingUp, color: 'text-blue-800', level: 'Expert' },
  '23. Monotonic Stack & Deque': { icon: Layers, color: 'text-rose-700', level: 'Expert' },
  '24. Computational Geometry': { icon: Grid3x3, color: 'text-teal-700', level: 'Expert' },
  '25. Time & Space Complexity Analysis': { icon: Timer, color: 'text-slate-700', level: 'Fundamental' },
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
