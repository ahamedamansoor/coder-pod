'use client';
import { 
  Target,
  BookOpen,
  Layers,
  Database,
  Zap,
  Shield,
  Rocket,
  Brain,
  Cpu,
  Monitor,
  Smartphone,
  Cloud,
  Lock,
  BarChart,
  Settings
} from 'lucide-react';
import { useFrontendSystemDesign } from '@/app/languages/frontend-system-design/frontend-system-design-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Frontend System Design - using theme colors
const categoryIcons = {
  'Learning Plan': { icon: Target, color: 'text-purple-600', level: 'Overview' },
  'System Design Fundamentals': { icon: Brain, color: 'text-blue-600', level: 'Beginner' },
  'Architecture Patterns': { icon: Layers, color: 'text-green-600', level: 'Intermediate' },
  'State Management Architecture': { icon: Database, color: 'text-purple-600', level: 'Intermediate' },
  'Performance Architecture': { icon: Zap, color: 'text-orange-600', level: 'Advanced' },
  'Scalability Architecture': { icon: Cloud, color: 'text-cyan-600', level: 'Advanced' },
  'Security Architecture': { icon: Shield, color: 'text-red-600', level: 'Advanced' },
  'Data Architecture': { icon: Database, color: 'text-indigo-600', level: 'Intermediate' },
  'Component System Design': { icon: Monitor, color: 'text-emerald-600', level: 'Intermediate' },
  'Routing Architecture': { icon: Settings, color: 'text-violet-600', level: 'Intermediate' },
  'Testing Architecture': { icon: Shield, color: 'text-pink-600', level: 'Advanced' },
  'Deployment Architecture': { icon: Cloud, color: 'text-sky-600', level: 'Advanced' },
  'Monitoring & Observability': { icon: BarChart, color: 'text-amber-600', level: 'Advanced' },
  'Accessibility Architecture': { icon: Brain, color: 'text-lime-600', level: 'Intermediate' },
  'Mobile-First Architecture': { icon: Smartphone, color: 'text-teal-600', level: 'Advanced' },
  'Cross-Platform Architecture': { icon: Monitor, color: 'text-rose-600', level: 'Advanced' },
  'Enterprise Architecture': { icon: Cloud, color: 'text-slate-600', level: 'Expert' },
  'Emerging Technologies': { icon: Cpu, color: 'text-purple-600', level: 'Expert' },
  'Advanced Patterns': { icon: Brain, color: 'text-indigo-600', level: 'Expert' },
  'Common Design Patterns': { icon: Layers, color: 'text-orange-600', level: 'Expert' },
  'React Design Patterns': { icon: Monitor, color: 'text-blue-500', level: 'Expert' },
  'Vue Design Patterns': { icon: Monitor, color: 'text-green-500', level: 'Expert' },
  'Angular Design Patterns': { icon: Monitor, color: 'text-red-500', level: 'Expert' },
  'TypeScript Design Patterns': { icon: Cpu, color: 'text-blue-600', level: 'Expert' },
  'Testing Design Patterns': { icon: Shield, color: 'text-purple-500', level: 'Expert' },
  'Pattern Implementation': { icon: Settings, color: 'text-gray-600', level: 'Expert' },
};

export const FrontendSystemDesignLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useFrontendSystemDesign();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
