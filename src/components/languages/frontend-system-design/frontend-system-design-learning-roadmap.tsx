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
  '0. Learning Plan': { icon: Target, color: 'text-purple-600', level: 'Overview' },
  '1. System Design Fundamentals': { icon: Brain, color: 'text-blue-600', level: 'Beginner' },
  '2. Architecture Patterns': { icon: Layers, color: 'text-green-600', level: 'Intermediate' },
  '3. State Management Architecture': { icon: Database, color: 'text-purple-600', level: 'Intermediate' },
  '4. Performance Architecture': { icon: Zap, color: 'text-orange-600', level: 'Advanced' },
  '5. Scalability Architecture': { icon: Cloud, color: 'text-cyan-600', level: 'Advanced' },
  '6. Security Architecture': { icon: Shield, color: 'text-red-600', level: 'Advanced' },
  '7. Data Architecture': { icon: Database, color: 'text-indigo-600', level: 'Intermediate' },
  '8. Component System Design': { icon: Monitor, color: 'text-emerald-600', level: 'Intermediate' },
  '9. Routing Architecture': { icon: Settings, color: 'text-violet-600', level: 'Intermediate' },
  '10. Testing Architecture': { icon: Shield, color: 'text-pink-600', level: 'Advanced' },
  '11. Deployment Architecture': { icon: Cloud, color: 'text-sky-600', level: 'Advanced' },
  '12. Monitoring & Observability': { icon: BarChart, color: 'text-amber-600', level: 'Advanced' },
  '13. Accessibility Architecture': { icon: Brain, color: 'text-lime-600', level: 'Intermediate' },
  '14. Mobile-First Architecture': { icon: Smartphone, color: 'text-teal-600', level: 'Advanced' },
  '15. Cross-Platform Architecture': { icon: Monitor, color: 'text-rose-600', level: 'Advanced' },
  '16. Enterprise Architecture': { icon: Cloud, color: 'text-slate-600', level: 'Expert' },
  '17. Emerging Technologies': { icon: Cpu, color: 'text-purple-600', level: 'Expert' },
  '18. Advanced Patterns': { icon: Brain, color: 'text-indigo-600', level: 'Expert' },
  '19. Common Design Patterns': { icon: Layers, color: 'text-orange-600', level: 'Expert' },
  '20. React Design Patterns': { icon: Monitor, color: 'text-blue-500', level: 'Expert' },
  '21. Vue Design Patterns': { icon: Monitor, color: 'text-green-500', level: 'Expert' },
  '22. Angular Design Patterns': { icon: Monitor, color: 'text-red-500', level: 'Expert' },
  '23. TypeScript Design Patterns': { icon: Cpu, color: 'text-blue-600', level: 'Expert' },
  '24. Testing Design Patterns': { icon: Shield, color: 'text-purple-500', level: 'Expert' },
  '25. Pattern Implementation': { icon: Settings, color: 'text-gray-600', level: 'Expert' },
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
