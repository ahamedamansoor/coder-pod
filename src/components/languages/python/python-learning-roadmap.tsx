'use client';
import { Code, Database, Zap, Package, Globe, Shield, Settings, Sparkles, Layout, FileCode, CheckCircle, Gauge, TestTube, Server, Wrench, BookOpen, FileText, Box, Brain, Boxes, Route, Archive, Eye, Layers, Search, Cloud, Cpu, Lock, Building, Clock, MousePointer, Palette, Plug, Network, Calendar, Hash, Languages, Microscope, Binary, Rocket, Terminal, Gamepad2, Puzzle, Target, Award, TrendingUp } from 'lucide-react';
import { usePython } from '@/app/languages/python/python-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Python - using consistent blue/yellow theme
const categoryIcons = {
  'Fundamentals': { icon: Code, color: 'text-blue-600', level: 'Beginner' },
  'Control Flow': { icon: Zap, color: 'text-blue-500', level: 'Beginner' },
  'Data Structures': { icon: Database, color: 'text-blue-700', level: 'Beginner' },
  'Functions': { icon: Package, color: 'text-yellow-600', level: 'Intermediate' },
  'Object-Oriented Programming': { icon: Building, color: 'text-blue-600', level: 'Intermediate' },
  'Modules & Packages': { icon: Box, color: 'text-yellow-700', level: 'Intermediate' },
  'File Handling': { icon: FileText, color: 'text-blue-500', level: 'Intermediate' },
  'Error Handling & Debugging': { icon: Shield, color: 'text-yellow-500', level: 'Intermediate' },
  'Advanced Concepts': { icon: Brain, color: 'text-blue-700', level: 'Advanced' },
  'Functional Programming': { icon: Sparkles, color: 'text-yellow-600', level: 'Advanced' },
  'Concurrency & Parallelism': { icon: Cpu, color: 'text-blue-800', level: 'Advanced' },
  'Web Development': { icon: Globe, color: 'text-yellow-700', level: 'Intermediate' },
  'Data Science Fundamentals': { icon: Database, color: 'text-blue-600', level: 'Intermediate' },
  'Machine Learning': { icon: Brain, color: 'text-yellow-800', level: 'Advanced' },
  'Advanced Data Science': { icon: Microscope, color: 'text-blue-700', level: 'Expert' },
  'Database Programming': { icon: Server, color: 'text-yellow-600', level: 'Intermediate' },
  'Automation & Scripting': { icon: Terminal, color: 'text-blue-500', level: 'Intermediate' },
  'Testing & Quality Assurance': { icon: TestTube, color: 'text-yellow-700', level: 'Advanced' },
  'Security & Cryptography': { icon: Shield, color: 'text-blue-800', level: 'Expert' },
  'Performance Optimization': { icon: Gauge, color: 'text-yellow-800', level: 'Expert' },
  'DevOps & Cloud': { icon: Cloud, color: 'text-blue-600', level: 'Advanced' },
  'GUI Development': { icon: Layout, color: 'text-yellow-600', level: 'Intermediate' },
  'Game Development': { icon: Gamepad2, color: 'text-blue-700', level: 'Advanced' },
  'Best Practices & Design Patterns': { icon: CheckCircle, color: 'text-yellow-700', level: 'Expert' },
  'Advanced Topics': { icon: Puzzle, color: 'text-blue-800', level: 'Expert' },
  'Real-World Projects': { icon: Rocket, color: 'text-yellow-600', level: 'Advanced' },
  'Interview Preparation': { icon: Award, color: 'text-blue-700', level: 'Expert' },
};

export const PythonLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = usePython();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
