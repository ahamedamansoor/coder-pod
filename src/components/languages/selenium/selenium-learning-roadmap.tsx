'use client';
import { Globe, Code, Zap, Settings, Layers, Grid3x3, Rocket, CheckCircle, Award, TrendingUp } from 'lucide-react';
import { useSelenium } from '@/app/languages/selenium/selenium-context';
import type { Language } from '@/data/languages';
import { GenericLearningPath } from '@/components/shared/learning/generic-learning-path';

// Category icons for Selenium - using consistent green theme
const categoryIcons = {
  '1. Getting Started': { icon: Globe, color: 'text-green-600', level: 'Beginner' },
  '2. Browser Configuration': { icon: Settings, color: 'text-green-700', level: 'Beginner' },
  '3. Locator Strategies': { icon: Code, color: 'text-green-500', level: 'Intermediate' },
  '4. Element Interactions': { icon: Zap, color: 'text-green-600', level: 'Intermediate' },
  '5. Waits & Synchronization': { icon: CheckCircle, color: 'text-green-700', level: 'Intermediate' },
  '6. Browser Navigation': { icon: Layers, color: 'text-green-500', level: 'Intermediate' },
  '7. Advanced Interactions': { icon: Grid3x3, color: 'text-green-600', level: 'Advanced' },
  '8. Frames & Alerts': { icon: Settings, color: 'text-green-700', level: 'Advanced' },
  '9. JavaScript Execution': { icon: Code, color: 'text-green-500', level: 'Advanced' },
  '10. Screenshots & Visual Testing': { icon: CheckCircle, color: 'text-green-600', level: 'Advanced' },
  '11. Cookies & Storage': { icon: Layers, color: 'text-green-700', level: 'Advanced' },
  '12. Test Frameworks Integration': { icon: Grid3x3, color: 'text-green-500', level: 'Advanced' },
  '13. Page Object Model': { icon: Settings, color: 'text-green-600', level: 'Advanced' },
  '14. Data-Driven Testing': { icon: Code, color: 'text-green-700', level: 'Advanced' },
  '15. Selenium Grid': { icon: Rocket, color: 'text-green-500', level: 'Expert' },
  '16. Handling Special Elements': { icon: Zap, color: 'text-green-600', level: 'Expert' },
  '17. Error Handling & Debugging': { icon: CheckCircle, color: 'text-green-700', level: 'Expert' },
  '18. CI/CD Integration': { icon: Layers, color: 'text-green-500', level: 'Expert' },
  '19. Performance & Optimization': { icon: TrendingUp, color: 'text-green-600', level: 'Expert' },
  '20. Best Practices': { icon: Award, color: 'text-green-700', level: 'Expert' },
  '21. Framework Architecture': { icon: Grid3x3, color: 'text-green-500', level: 'Expert' },
  '22. BDD & Cucumber Integration': { icon: Settings, color: 'text-green-600', level: 'Expert' },
  '23. Reporting & Documentation': { icon: Code, color: 'text-green-700', level: 'Expert' },
  '24. API & UI Combined Testing': { icon: Zap, color: 'text-green-500', level: 'Expert' },
  '25. Mobile Web Testing': { icon: Layers, color: 'text-green-600', level: 'Expert' },
  '26. Advanced Design Patterns': { icon: Grid3x3, color: 'text-green-700', level: 'Expert' },
  '27. Selenium 4 Features': { icon: Rocket, color: 'text-green-500', level: 'Expert' },
  '28. Security Testing': { icon: CheckCircle, color: 'text-green-600', level: 'Expert' },
  '29. Accessibility Testing': { icon: Award, color: 'text-green-700', level: 'Expert' },
  '30. Performance Testing Integration': { icon: TrendingUp, color: 'text-green-500', level: 'Expert' },
  '31. Test Management & Organization': { icon: Settings, color: 'text-green-600', level: 'Expert' },
  '32. Real-World Scenarios': { icon: Code, color: 'text-green-700', level: 'Expert' },
  '33. Interview Preparation': { icon: Award, color: 'text-green-500', level: 'Expert' },
};

export const SeleniumLearningRoadmap = ({ language }: { language: Language }) => {
  const contextHooks = useSelenium();

  return (
    <GenericLearningPath
      language={language}
      contextHooks={contextHooks}
      categoryIcons={categoryIcons}
    />
  );
};
