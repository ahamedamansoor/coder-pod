
'use client';
import { Rocket, Code, Repeat, Database, Zap, Package, Globe, Shield, Settings, Sparkles, Layout, FileCode, CheckCircle, Gauge, TestTube, Server, Wrench, BookOpen, FileText, Box, Brain, Boxes, Route, Archive, Eye, Layers, Search, Cloud } from 'lucide-react';
import { useReact } from '@/app/languages/react/react-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for React - using consistent cyan/blue theme
const categoryIcons = {
  '1. Getting Started': { icon: Rocket, color: 'text-cyan-600', level: 'Beginner' },
  '2. Describing the UI': { icon: Code, color: 'text-blue-600', level: 'Beginner' },
  '3. Adding Interactivity': { icon: Zap, color: 'text-cyan-700', level: 'Intermediate' },
  '4. Managing State': { icon: Database, color: 'text-blue-700', level: 'Intermediate' },
  '5. Escape Hatches': { icon: Settings, color: 'text-cyan-500', level: 'Advanced' },
  '6. Hooks (Comprehensive)': { icon: Sparkles, color: 'text-blue-500', level: 'Advanced' },
  '7. Component Details': { icon: Box, color: 'text-cyan-800', level: 'Advanced' },
  '8. Client Libraries': { icon: Package, color: 'text-blue-600', level: 'Intermediate' },
  '9. Form Details': { icon: FileCode, color: 'text-cyan-600', level: 'Intermediate' },
  '10. Advanced Patterns': { icon: Repeat, color: 'text-blue-800', level: 'Advanced' },
  '11. Context API': { icon: Globe, color: 'text-cyan-500', level: 'Advanced' },
  '12. Performance Optimization': { icon: Gauge, color: 'text-blue-700', level: 'Expert' },
  '13. Testing': { icon: TestTube, color: 'text-cyan-700', level: 'Expert' },
  '14. Deployment': { icon: Server, color: 'text-blue-600', level: 'Intermediate' },
  '15. TypeScript Integration': { icon: FileText, color: 'text-cyan-800', level: 'Advanced' },
  '16. Advanced Features': { icon: Zap, color: 'text-blue-900', level: 'Expert' },
  '17. Developer Tools': { icon: Wrench, color: 'text-cyan-600', level: 'Intermediate' },
  '18. API Reference': { icon: BookOpen, color: 'text-blue-500', level: 'Reference' },
  '19. Rules & Best Practices': { icon: CheckCircle, color: 'text-cyan-900', level: 'Expert' },
  '20. Thinking in React': { icon: Brain, color: 'text-blue-800', level: 'Expert' },
  '21. React Router': { icon: Route, color: 'text-cyan-600', level: 'Advanced' },
  '22. Redux': { icon: Archive, color: 'text-blue-700', level: 'Advanced' },
  '23. MobX': { icon: Eye, color: 'text-cyan-700', level: 'Advanced' },
  '24. Zustand': { icon: Layers, color: 'text-blue-600', level: 'Advanced' },
  '25. React Query': { icon: Search, color: 'text-cyan-800', level: 'Advanced' },
  '26. SWR': { icon: Cloud, color: 'text-blue-800', level: 'Advanced' },
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
