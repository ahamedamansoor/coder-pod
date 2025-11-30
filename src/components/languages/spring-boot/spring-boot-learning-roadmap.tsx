'use client';
import { Rocket, Box, Settings, Globe, Database, Shield, CheckCircle, TestTube, Activity, Layers, MessageSquare, Clock, Zap, FileText, Terminal, TrendingUp, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSpringBoot } from '@/app/languages/spring-boot/spring-boot-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Spring Boot - using emerald/teal theme
const categoryIcons = {
  '1. Introduction & Setup': { icon: Rocket, color: 'text-emerald-600', level: 'Beginner' },
  '2. Core Concepts': { icon: Box, color: 'text-emerald-600', level: 'Beginner' },
  '3. Configuration': { icon: Settings, color: 'text-teal-600', level: 'Beginner' },
  '4. Web Development': { icon: Globe, color: 'text-emerald-700', level: 'Intermediate' },
  '5. Data Access': { icon: Database, color: 'text-teal-700', level: 'Intermediate' },
  '6. Security': { icon: Shield, color: 'text-emerald-800', level: 'Intermediate' },
  '7. Validation': { icon: CheckCircle, color: 'text-teal-600', level: 'Intermediate' },
  '8. Testing': { icon: TestTube, color: 'text-emerald-700', level: 'Advanced' },
  '9. Actuator & Monitoring': { icon: Activity, color: 'text-teal-700', level: 'Advanced' },
  '10. Caching': { icon: Layers, color: 'text-emerald-600', level: 'Advanced' },
  '11. Messaging': { icon: MessageSquare, color: 'text-teal-600', level: 'Advanced' },
  '12. Scheduling': { icon: Clock, color: 'text-emerald-700', level: 'Advanced' },
  '13. Reactive Programming': { icon: Zap, color: 'text-teal-800', level: 'Expert' },
  '14. Documentation': { icon: FileText, color: 'text-emerald-600', level: 'Intermediate' },
  '15. Logging': { icon: Terminal, color: 'text-teal-600', level: 'Intermediate' },
  '16. Performance': { icon: TrendingUp, color: 'text-emerald-800', level: 'Expert' },
  '17. Deployment': { icon: Server, color: 'text-teal-700', level: 'Expert' },
  '18. Spring Boot 3.x': { icon: Sparkles, color: 'text-emerald-700', level: 'Expert' },
  '19. Best Practices': { icon: CheckCircle2, color: 'text-emerald-800', level: 'Expert' },
};

export const SpringBootLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useSpringBoot();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
