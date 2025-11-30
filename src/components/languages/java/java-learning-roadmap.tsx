
'use client';
import { Coffee, Code, Box, Repeat, Database, Shield, Zap, Package, Settings, FileText, Type, Calculator, Users, Terminal, Layout, Layers, Boxes, Sparkles, Award, Globe, FileCode, Tag, Eye, Cog, TestTube, CheckCircle } from 'lucide-react';
import { useJava } from '@/app/languages/java/java-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Java - using consistent red/orange theme
const categoryIcons = {
  '1. Getting Started': { icon: Coffee, color: 'text-red-600', level: 'Beginner' },
  '2. Basic Output': { icon: Terminal, color: 'text-orange-600', level: 'Beginner' },
  '3. Variables & Data Types': { icon: Type, color: 'text-red-700', level: 'Beginner' },
  '4. Operators': { icon: Calculator, color: 'text-orange-700', level: 'Beginner' },
  '5. User Input': { icon: Users, color: 'text-red-500', level: 'Beginner' },
  '6. Control Flow': { icon: Repeat, color: 'text-orange-500', level: 'Intermediate' },
  '7. Strings & Arrays': { icon: FileText, color: 'text-red-800', level: 'Intermediate' },
  '8. Methods & OOP Basics': { icon: Code, color: 'text-orange-800', level: 'Intermediate' },
  '9. Advanced OOP': { icon: Box, color: 'text-red-600', level: 'Intermediate' },
  '10. Advanced Collections': { icon: Database, color: 'text-orange-600', level: 'Advanced' },
  '11. Error Handling': { icon: Shield, color: 'text-red-700', level: 'Intermediate' },
  '12. Generics': { icon: Layers, color: 'text-orange-700', level: 'Advanced' },
  '13. Functional Programming': { icon: Zap, color: 'text-red-500', level: 'Advanced' },
  '14. Concurrency': { icon: Repeat, color: 'text-orange-500', level: 'Advanced' },
  '15. Java 8+ Features': { icon: Sparkles, color: 'text-red-800', level: 'Advanced' },
  '16. Java 9-11 Features': { icon: Award, color: 'text-orange-800', level: 'Advanced' },
  '17. Java 12-16 Features': { icon: Globe, color: 'text-red-600', level: 'Expert' },
  '18. Java 17+ (LTS)': { icon: Zap, color: 'text-orange-600', level: 'Expert' },
  '19. File I/O': { icon: FileCode, color: 'text-red-700', level: 'Advanced' },
  '20. Annotations': { icon: Tag, color: 'text-orange-700', level: 'Advanced' },
  '21. Reflection': { icon: Eye, color: 'text-red-500', level: 'Expert' },
  '22. JVM Internals': { icon: Cog, color: 'text-orange-500', level: 'Expert' },
  '23. Testing': { icon: TestTube, color: 'text-red-800', level: 'Advanced' },
  '24. Best Practices': { icon: CheckCircle, color: 'text-orange-800', level: 'Expert' },
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
