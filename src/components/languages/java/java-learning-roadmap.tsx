
'use client';
import { Coffee, Code, Box, Repeat, Database, Shield, Zap, Package, Settings } from 'lucide-react';
import { useJava } from '@/app/languages/java/java-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Java - using consistent red/orange theme
const categoryIcons = {
  'Java Fundamentals': { icon: Coffee, color: 'text-red-600', level: 'Beginner' },
  'Object-Oriented Programming': { icon: Box, color: 'text-orange-600', level: 'Intermediate' },
  'Advanced Concepts': { icon: Code, color: 'text-red-700', level: 'Intermediate' },
  'Collections & Generics': { icon: Database, color: 'text-orange-500', level: 'Intermediate' },
  'Concurrency': { icon: Repeat, color: 'text-red-500', level: 'Advanced' },
  'File I/O & Streams': { icon: Package, color: 'text-orange-700', level: 'Advanced' },
  'Exception Handling': { icon: Shield, color: 'text-red-800', level: 'Advanced' },
  'Modern Java': { icon: Zap, color: 'text-orange-600', level: 'Expert' },
  'JVM & Performance': { icon: Settings, color: 'text-red-700', level: 'Expert' },
};

export const JavaLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useJava();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
