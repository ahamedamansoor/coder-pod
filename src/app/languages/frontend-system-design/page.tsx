import { FrontendSystemDesignProvider } from './frontend-system-design-context';
import { FrontendSystemDesignLearningRoadmap } from '@/components/languages/frontend-system-design/frontend-system-design-learning-roadmap';
import type { Metadata } from 'next';
import { frontendSystemDesign } from '@/data/languages/frontend-system-design';

export const metadata: Metadata = {
  title: 'Frontend System Design - Complete Learning Path',
  description: 'Master frontend system design from fundamentals to expert-level architecture, performance optimization, and scalable applications.',
};

export default function FrontendSystemDesignPage() {
  return (
    <FrontendSystemDesignProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frontend System Design
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Master frontend system design from fundamentals to expert-level architecture, 
              performance optimization, and scalable applications.
            </p>
          </div>
          <FrontendSystemDesignLearningRoadmap language={frontendSystemDesign} />
        </div>
      </div>
    </FrontendSystemDesignProvider>
  );
}
