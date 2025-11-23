
'use client';
import { Coffee, Code, Box, Repeat, Database, Shield, Zap, Package, Settings } from 'lucide-react';
import { useJava } from '@/app/java/java-context';
import type { Language } from '@/app/data';
import { GenericLearningPath } from './generic-learning-path';

// Category icons for Java
const categoryIcons = {
  'Java Fundamentals': { icon: Coffee, color: 'text-blue-600', level: 'Beginner' },
  'Object-Oriented Programming': { icon: Box, color: 'text-green-600', level: 'Intermediate' },
  'Advanced Concepts': { icon: Code, color: 'text-purple-600', level: 'Intermediate' },
  'Collections & Generics': { icon: Database, color: 'text-orange-600', level: 'Intermediate' },
  'Concurrency': { icon: Repeat, color: 'text-pink-600', level: 'Advanced' },
  'File I/O & Streams': { icon: Package, color: 'text-indigo-600', level: 'Advanced' },
  'Exception Handling': { icon: Shield, color: 'text-red-600', level: 'Advanced' },
  'Modern Java': { icon: Zap, color: 'text-teal-600', level: 'Expert' },
  'JVM & Performance': { icon: Settings, color: 'text-cyan-600', level: 'Expert' },
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
