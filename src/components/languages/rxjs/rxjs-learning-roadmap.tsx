'use client';

import React from 'react';
import type { Language } from '@/data/languages';
import { useRxjs } from '@/app/languages/rxjs/rxjs-context';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';
import { rxjsCategoryOrder } from '@/data/rxjs-roadmap';
import { Activity, Atom, GitBranch, Layers, Zap, Filter, Link2, Clock, CloudLightning, Type, MousePointer, Share2, Radio, Wifi, Search, RefreshCcw, Sparkles, Move, Bell, Loader2, Repeat, AlertTriangle, LucideIcon } from 'lucide-react';

const sectionIconMap: Record<string, { icon: LucideIcon; color: string; level: string }> = {
  '1. Core Concepts': { icon: Atom, color: 'text-blue-600', level: 'Beginner' },
  '2. Creation Operators': { icon: Zap, color: 'text-amber-600', level: 'Beginner' },
  '3. Transformation Operators': { icon: Layers, color: 'text-indigo-600', level: 'Beginner' },
  '4. Flattening Operators': { icon: GitBranch, color: 'text-emerald-600', level: 'Intermediate' },
  '5. Filtering Operators': { icon: Filter, color: 'text-teal-600', level: 'Intermediate' },
  '6. Rate Limiting Operators': { icon: Clock, color: 'text-rose-600', level: 'Intermediate' },
  '7. Combination Operators': { icon: Link2, color: 'text-cyan-600', level: 'Intermediate' },
  '8. Buffer & Window Operators': { icon: Layers, color: 'text-purple-600', level: 'Intermediate' },
  '9. Error Handling Operators': { icon: RefreshCcw, color: 'text-red-600', level: 'Intermediate' },
  '10. Utility Operators': { icon: Sparkles, color: 'text-slate-600', level: 'Intermediate' },
  '11. Multicasting Operators': { icon: Radio, color: 'text-amber-600', level: 'Advanced' },
  '12. Subjects': { icon: Share2, color: 'text-fuchsia-600', level: 'Advanced' },
  '13. Schedulers': { icon: Clock, color: 'text-lime-600', level: 'Advanced' },
  '14. HTTP Patterns': { icon: CloudLightning, color: 'text-blue-600', level: 'Advanced' },
  '15. Form Handling Patterns': { icon: Type, color: 'text-emerald-600', level: 'Advanced' },
  '16. Event Handling Patterns': { icon: MousePointer, color: 'text-amber-600', level: 'Advanced' },
  '17. State Management Patterns': { icon: Layers, color: 'text-indigo-600', level: 'Advanced' },
  '18. WebSocket Patterns': { icon: Wifi, color: 'text-rose-600', level: 'Advanced' },
  '19. Animation Patterns': { icon: Activity, color: 'text-pink-600', level: 'Advanced' },
  '20. Search/Typeahead': { icon: Search, color: 'text-blue-500', level: 'Advanced' },
  '21. Infinite Scroll': { icon: GitBranch, color: 'text-emerald-500', level: 'Advanced' },
  '22. Auto-save': { icon: Repeat, color: 'text-cyan-500', level: 'Advanced' },
  '23. Real-time Updates': { icon: RefreshCcw, color: 'text-amber-500', level: 'Advanced' },
  '24. Drag and Drop': { icon: Move, color: 'text-purple-500', level: 'Advanced' },
  '25. Notification Systems': { icon: Bell, color: 'text-indigo-500', level: 'Advanced' },
  '26. Loading States': { icon: Loader2, color: 'text-pink-500', level: 'Advanced' },
  '27. Custom Operators': { icon: Sparkles, color: 'text-blue-600', level: 'Advanced' },
  '28. Testing Patterns': { icon: Activity, color: 'text-emerald-600', level: 'Advanced' },
  '29. Performance Optimization': { icon: Clock, color: 'text-rose-600', level: 'Advanced' },
  '30. Angular Integration': { icon: Layers, color: 'text-red-500', level: 'Advanced' },
  '31. Promise Interop': { icon: Repeat, color: 'text-slate-600', level: 'Advanced' },
  '32. Callback Conversion': { icon: Link2, color: 'text-amber-600', level: 'Advanced' },
  '33. Best Practices': { icon: Sparkles, color: 'text-indigo-600', level: 'Advanced' },
  '34. Anti-patterns to Avoid': { icon: AlertTriangle, color: 'text-red-600', level: 'Advanced' },
  '35. Common Use Cases': { icon: Activity, color: 'text-emerald-600', level: 'Advanced' },
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
