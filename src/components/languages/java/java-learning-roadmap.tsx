
'use client';
import { Coffee, Code, Box, Repeat, Database, Shield, Zap, Package, Settings, FileText, Type, Calculator, Users, Terminal, Layout, Layers, Boxes, Sparkles, Award, Globe, FileCode, Tag, Eye, Cog, TestTube, CheckCircle } from 'lucide-react';
import { useJava } from '@/app/languages/java/java-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Java - using consistent red/orange theme
const categoryIcons = {
  'Getting Started': { icon: Coffee, color: 'text-red-600', level: 'Beginner' },
  'Basic Output': { icon: Terminal, color: 'text-orange-600', level: 'Beginner' },
  'Variables & Data Types': { icon: Type, color: 'text-red-700', level: 'Beginner' },
  'Operators': { icon: Calculator, color: 'text-orange-700', level: 'Beginner' },
  'User Input': { icon: Users, color: 'text-red-500', level: 'Beginner' },
  'Control Flow': { icon: Repeat, color: 'text-orange-500', level: 'Intermediate' },
  'Strings & Arrays': { icon: FileText, color: 'text-red-800', level: 'Intermediate' },
  'Methods & OOP Basics': { icon: Code, color: 'text-orange-800', level: 'Intermediate' },
  'Advanced OOP': { icon: Box, color: 'text-red-600', level: 'Intermediate' },
  'Advanced Collections': { icon: Database, color: 'text-orange-600', level: 'Advanced' },
  'Error Handling': { icon: Shield, color: 'text-red-700', level: 'Intermediate' },
  'Generics': { icon: Layers, color: 'text-orange-700', level: 'Advanced' },
  'Functional Programming': { icon: Zap, color: 'text-red-500', level: 'Advanced' },
  'Concurrency': { icon: Repeat, color: 'text-orange-500', level: 'Advanced' },
  'Java 8+ Features': { icon: Sparkles, color: 'text-red-800', level: 'Advanced' },
  'Java 9-11 Features': { icon: Award, color: 'text-orange-800', level: 'Advanced' },
  'Java 12-16 Features': { icon: Globe, color: 'text-red-600', level: 'Expert' },
  'Java 17+ (LTS)': { icon: Zap, color: 'text-orange-600', level: 'Expert' },
  'File I/O': { icon: FileCode, color: 'text-red-700', level: 'Advanced' },
  'Annotations': { icon: Tag, color: 'text-orange-700', level: 'Advanced' },
  'Reflection': { icon: Eye, color: 'text-red-500', level: 'Expert' },
  'JVM Internals': { icon: Cog, color: 'text-orange-500', level: 'Expert' },
  'Testing': { icon: TestTube, color: 'text-red-800', level: 'Advanced' },
  'Best Practices': { icon: CheckCircle, color: 'text-orange-800', level: 'Expert' },
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
