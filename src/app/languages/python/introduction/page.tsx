import { Metadata } from 'next';
import { PythonProvider } from '../python-context';
import { PythonLearningRoadmap } from '@/components/languages/python/python-learning-roadmap';
import { python } from '@/data/languages/python';

export const metadata: Metadata = {
  title: 'Python Learning Path - From Beginner to Expert',
  description: 'Comprehensive Python roadmap covering web development, data science, machine learning, automation, and more',
};

export default function PythonIntroductionPage() {
  return (
    <PythonProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Python Learning Path
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Master Python from fundamentals to expert-level applications in web development, 
              data science, machine learning, automation, and more.
            </p>
          </div>
          
          <PythonLearningRoadmap language={python} />
        </div>
      </div>
    </PythonProvider>
  );
}
