'use client';
import { Rocket, Box, Settings, Globe, Database, Shield, CheckCircle, TestTube, Activity, Layers, MessageSquare, Clock, Zap, FileText, Terminal, TrendingUp, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSpringBoot } from '@/app/languages/spring-boot/spring-boot-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Spring Boot - using emerald/teal theme
const categoryIcons = {
  'Introduction & Setup': { icon: Rocket, color: 'text-emerald-600', level: 'Beginner' },
  'Core Concepts': { icon: Box, color: 'text-emerald-600', level: 'Beginner' },
  'Configuration': { icon: Settings, color: 'text-teal-600', level: 'Beginner' },
  'Web Development': { icon: Globe, color: 'text-emerald-700', level: 'Intermediate' },
  'Data Access': { icon: Database, color: 'text-teal-700', level: 'Intermediate' },
  'Security': { icon: Shield, color: 'text-emerald-800', level: 'Intermediate' },
  'Validation': { icon: CheckCircle, color: 'text-teal-600', level: 'Intermediate' },
  'Testing': { icon: TestTube, color: 'text-emerald-700', level: 'Advanced' },
  'Actuator & Monitoring': { icon: Activity, color: 'text-teal-700', level: 'Advanced' },
  'Caching': { icon: Layers, color: 'text-emerald-600', level: 'Advanced' },
  'Messaging': { icon: MessageSquare, color: 'text-teal-600', level: 'Advanced' },
  'Scheduling': { icon: Clock, color: 'text-emerald-700', level: 'Advanced' },
  'Reactive Programming': { icon: Zap, color: 'text-teal-800', level: 'Expert' },
  'Documentation': { icon: FileText, color: 'text-emerald-600', level: 'Intermediate' },
  'Logging': { icon: Terminal, color: 'text-teal-600', level: 'Intermediate' },
  'Performance': { icon: TrendingUp, color: 'text-emerald-800', level: 'Expert' },
  'Deployment': { icon: Server, color: 'text-teal-700', level: 'Expert' },
  'Spring Boot 3.x': { icon: Sparkles, color: 'text-emerald-700', level: 'Expert' },
  'Best Practices': { icon: CheckCircle2, color: 'text-emerald-800', level: 'Expert' },
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
