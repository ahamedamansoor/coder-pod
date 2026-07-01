import { VueProvider } from './vue-context';
import { VueLearningRoadmap } from '@/components/languages/vue/vue-learning-roadmap';
import type { Metadata } from 'next';
import { vue } from '@/data/languages/vue';

export const metadata: Metadata = {
  title: 'Vue.js - Complete Learning Path',
  description: 'Master Vue.js from fundamentals to expert-level development, including Composition API, Vue Router, Pinia, and modern Vue.js ecosystem.',
};

export default function VuePage() {
  return (
    <VueProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-900 dark:to-green-900">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Vue.js
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Master Vue.js from fundamentals to expert-level development, including Composition API, 
              Vue Router, Pinia, and modern Vue.js ecosystem.
            </p>
          </div>
          <VueLearningRoadmap language={vue} />
        </div>
      </div>
    </VueProvider>
  );
}
