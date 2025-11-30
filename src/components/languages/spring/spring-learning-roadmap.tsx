
'use client';
import { Leaf, Database, Shield, Zap, Server, Package, Settings, Cloud, TestTube, Box, Layers, Code, Globe, FileCode, MessageSquare, Archive, Clock, Bell, FileText, CheckCircle, Sparkles } from 'lucide-react';
import { useSpring } from '@/app/languages/spring/spring-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Spring - using consistent green/emerald theme
const categoryIcons = {
  '1. Introduction': { icon: Leaf, color: 'text-green-600', level: 'Beginner' },
  '2. Core Container': { icon: Box, color: 'text-emerald-600', level: 'Beginner' },
  '3. Dependency Injection': { icon: Layers, color: 'text-green-700', level: 'Beginner' },
  '4. Configuration': { icon: Settings, color: 'text-emerald-700', level: 'Intermediate' },
  '5. AOP': { icon: Code, color: 'text-green-500', level: 'Advanced' },
  '6. Spring MVC': { icon: Globe, color: 'text-emerald-500', level: 'Intermediate' },
  '7. Data Access': { icon: Database, color: 'text-green-800', level: 'Intermediate' },
  '8. ORM Integration': { icon: Layers, color: 'text-emerald-800', level: 'Advanced' },
  '9. Spring Security': { icon: Shield, color: 'text-green-600', level: 'Advanced' },
  '10. Validation': { icon: CheckCircle, color: 'text-emerald-600', level: 'Intermediate' },
  '11. Testing': { icon: TestTube, color: 'text-green-700', level: 'Advanced' },
  '12. Messaging': { icon: MessageSquare, color: 'text-emerald-700', level: 'Advanced' },
  '13. Caching': { icon: Archive, color: 'text-green-500', level: 'Advanced' },
  '14. Scheduling': { icon: Clock, color: 'text-emerald-500', level: 'Intermediate' },
  '15. Events': { icon: Bell, color: 'text-green-800', level: 'Advanced' },
  '16. Spring WebFlux': { icon: Zap, color: 'text-emerald-800', level: 'Expert' },
  '17. Spring 5+ Features': { icon: Sparkles, color: 'text-green-600', level: 'Advanced' },
  '18. Spring 6+ Features': { icon: Zap, color: 'text-emerald-600', level: 'Expert' },
  '19. SpEL': { icon: FileText, color: 'text-green-700', level: 'Advanced' },
  '20. Best Practices': { icon: CheckCircle, color: 'text-emerald-700', level: 'Expert' },
};

export const SpringLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useSpring();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
