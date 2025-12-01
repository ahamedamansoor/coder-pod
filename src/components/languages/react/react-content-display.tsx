'use client';

import type { Language, Topic } from '@/data/languages';
import { GenericContentDisplay } from '@/components/shared/generic-content-display';
import React, { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useReactPlayground } from './react-playground-context';
import { Button } from '@/components/ui/button';
import { Code, Play, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Lazy load all the topic components
const WhatIsReact = lazy(() => import('./topics/what-is-react'));
const InstallationAndSetup = lazy(() => import('./topics/installation-and-setup'));
const YourFirstComponent = lazy(() => import('./topics/your-first-component'));
const JavaScriptInJSX = lazy(() => import('./topics/javascript-in-jsx'));
const ReactInterviewQuestions = lazy(() => import('./topics/react-interview-questions'));
const ReactVersionUpdates = lazy(() => import('./topics/react-version-updates'));


// Map slugs to their lazy-loaded components
const topicComponentMap: Record<string, React.LazyExoticComponent<any>> = {
  'what-is-react': WhatIsReact,
  'installation-and-setup': InstallationAndSetup,
  'your-first-component': YourFirstComponent,
  'javascript-in-jsx': JavaScriptInJSX,
  'interview-questions': ReactInterviewQuestions,
  'react-version-updates': ReactVersionUpdates,
};

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

const defaultPlaygroundCode = `import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello React!</h1>
      <p>Try editing this code and click Run to see changes.</p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`;

export function ReactContentDisplay({ 
  topic, 
  language,
}: { 
  topic: Topic, 
  language: Language, 
}) {
  const { openWithContent } = useReactPlayground();
  
  const handleOpenEditor = (code: string) => {
    openWithContent(code);
  };
  
  const handleOpenPlayground = () => {
    openWithContent(defaultPlaygroundCode);
  };
  
  const CustomTopicComponent = topicComponentMap[topic.slug];
  const isLearningPlanTopic = topic.slug === 'learning-plan';

  return (
    <GenericContentDisplay
      topic={topic}
      language={language}
    >
      {!isLearningPlanTopic && (
        <Card className="mb-6 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-900 dark:text-cyan-100">
                    React Playground
                  </h3>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300">
                    Write and test React code interactively
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleOpenPlayground}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
              >
                <Play className="w-4 h-4" />
                Open Playground
                <Zap className="w-4 h-4 text-yellow-300" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Suspense fallback={<LoadingSkeleton />}>
        {CustomTopicComponent ? (
          <CustomTopicComponent onOpenEditor={handleOpenEditor} />
        ) : null}
      </Suspense>
    </GenericContentDisplay>
  );
}
