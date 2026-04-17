'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Lightbulb,
  CheckCircle2,
  Zap,
  Code2,
  Target,
  Eye,
  MousePointer,
  RefreshCw,
  AlertCircle,
  Settings,
  TrendingUp,
} from 'lucide-react';

export default function UseCallbackHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Hooks (Comprehensive)"
        title="useCallback Hook"
        description="Master useCallback to memoize callback functions and prevent unnecessary re-renders in child components for optimal performance."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useCallback */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useCallback?"
              description="Memoizing callback functions for performance"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useCallback</code> returns a <strong>memoized callback function</strong>. It caches a function between re-renders until its dependencies change, preventing child components from re-rendering unnecessarily.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <span className="text-purple-600">const</span> memoizedCallback = <span className="text-blue-600">useCallback</span>(() {'=>'} {'{}'}
                  </div>
                  <div className="ml-4 text-slate-800 dark:text-slate-200">
                    <span className="text-blue-400">doSomething</span>(<span className="text-orange-400">param</span>);
                  </div>
                  <div className="text-slate-800 dark:text-slate-200">
                    {'})'}, [<span className="text-orange-400">dependencies</span>]);
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Without useCallback</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mb-2">
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-purple-600">const</span> <span className="text-blue-400">handleClick</span> = () {'=>'} {'{}'}
                    </div>
                    <div className="ml-2 text-slate-800 dark:text-slate-200">
                      <span className="text-blue-400">doSomething</span>();
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      {'})'};
                    </div>
                    <div className="text-red-600 dark:text-red-400 text-xs">// New function every render!</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Child components re-render even if nothing changed!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">With useCallback</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mb-2">
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-purple-600">const</span> <span className="text-blue-400">handleClick</span> = <span className="text-blue-600">useCallback</span>(() {'=>'} {'{}'}
                    </div>
                    <div className="ml-2 text-slate-800 dark:text-slate-200">
                      <span className="text-blue-400">doSomething</span>();
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      {'})'}, []);
                    </div>
                    <div className="text-green-600 dark:text-green-400 text-xs">// Same function reused!</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Child components don't re-render unnecessarily!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When to Use?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useCallback when passing callbacks to optimized child components wrapped in React.memo, or when the callback is used as a dependency in other Hooks!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useCallback progressively"
              size="lg"
            />

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Import useCallback</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, import useCallback from React at the top of your component file.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> <span className="text-blue-400">React</span>, {'{'} <span className="text-blue-600">useCallback</span> {'}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Pro Tip</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              You can import multiple hooks: {'{'} useState, useEffect, useCallback {'}'}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Wrap Your Function</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Wrap your callback function with useCallback to memoize it.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">handleClick</span> = <span className="text-blue-600">useCallback</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Button clicked!'</span>);
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, []); <span className="text-slate-500">// Empty dependency array</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Key Point</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              The function will only be recreated if dependencies in the array change!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                          <MousePointer className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Add Dependencies</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Include variables that your function depends on in the dependency array.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [count, setCount] = <span className="text-blue-600">useState</span>(<span className="text-green-600">0</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">handleIncrement</span> = <span className="text-blue-600">useCallback</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            setCount(<span className="text-orange-400">prevCount</span> {'=>'} prevCount + <span className="text-green-600">1</span>);
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, []); <span className="text-slate-500">// No dependencies needed</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">handleSetValue</span> = <span className="text-blue-600">useCallback</span>((<span className="text-orange-400">value</span>) {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            setCount(<span className="text-orange-400">value</span>);
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, []); <span className="text-slate-500">// Uses functional update</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertCircle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Important</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Use functional updates (setCount(prev {'=>'} prev + 1)) when possible to avoid dependencies!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Pass to Child Components</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Pass the memoized callback to child components for optimal performance.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">Parent</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">handleClick</span> = <span className="text-blue-600">useCallback</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Clicked!'</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'}, []);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">Child</span> <span className="text-green-400">onClick</span>={'{'}handleClick{'}'} /&gt;;
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="h-2"></div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">Child</span> = <span className="text-blue-600">React</span>.<span className="text-yellow-400">memo</span>(<span className="text-purple-600">function</span> <span className="text-blue-400">Child</span>({'{'}onClick{'})'}) {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">button</span> <span className="text-green-400">onClick</span>={'{'}onClick{'}'}&gt;Click me&lt;/<span className="text-red-400">button</span>&gt;;
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'});
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Key Point</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Combine useCallback with React.memo for maximum performance optimization!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example: Optimized Component"
            description="Preventing unnecessary re-renders with useCallback"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Optimized Counter with useCallback"
            description="Child component only re-renders when necessary"
            colorTheme="blue"
            react={`function Parent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('React');

  // Memoized callback - same function instance!
  const increment = React.useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty deps - never changes

  // This callback depends on 'name'
  const greet = React.useCallback(() => {
    alert(\`Hello, \${name}!\`);
  }, [name]); // Recreated when name changes

  return (
    <div className="container">
      <h1>🚀 useCallback Demo</h1>
      
      <div className="controls">
        <div className="input-group">
          <label>Name:</label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        
        <div className="stats">
          <div className="stat">
            <div className="label">Count</div>
            <div className="value">{count}</div>
          </div>
        </div>
        
        <div className="buttons">
          <button onClick={increment} className="btn-primary">
            Increment Count
          </button>
          <button onClick={greet} className="btn-secondary">
            Greet Me
          </button>
        </div>
      </div>

      <div className="children">
        <ChildCounter count={count} onIncrement={increment} />
        <ChildGreeter name={name} onGreet={greet} />
      </div>

      <div className="info">
        💡 Child components only re-render when their props actually change!
      </div>
    </div>
  );
}

// Memoized child components
const ChildCounter = React.memo(function ChildCounter({ count, onIncrement }) {
  const renders = React.useRef(0);
  renders.current += 1;
  
  return (
    <div className="child">
      <h3>🔢 Counter Child</h3>
      <p>Count: <strong>{count}</strong></p>
      <p>Renders: <strong>{renders.current}</strong></p>
      <button onClick={onIncrement} className="btn-child">
        Increment
      </button>
    </div>
  );
});

const ChildGreeter = React.memo(function ChildGreeter({ name, onGreet }) {
  const renders = React.useRef(0);
  renders.current += 1;
  
  return (
    <div className="child">
      <h3>👋 Greeter Child</h3>
      <p>Name: <strong>{name}</strong></p>
      <p>Renders: <strong>{renders.current}</strong></p>
      <button onClick={onGreet} className="btn-child">
        Greet
      </button>
    </div>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useCallback, useRef, memo } = React;
  const { createRoot } = ReactDOM;

  function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('React');

    const increment = useCallback(() => {
      setCount(c => c + 1);
    }, []);

    const greet = useCallback(() => {
      alert(\`Hello, \${name}!\`);
    }, [name]);

    return h('div', { className: 'container' },
      h('h1', null, '🚀 useCallback Demo'),
      
      h('div', { className: 'controls' },
        h('div', { className: 'input-group' },
          h('label', null, 'Name:'),
          h('input', {
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: 'Enter your name'
          })
        ),
        
        h('div', { className: 'stats' },
          h('div', { className: 'stat' },
            h('div', { className: 'label' }, 'Count'),
            h('div', { className: 'value' }, count)
          )
        ),
        
        h('div', { className: 'buttons' },
          h('button', {
            onClick: increment,
            className: 'btn-primary'
          }, 'Increment Count'),
          h('button', {
            onClick: greet,
            className: 'btn-secondary'
          }, 'Greet Me')
        )
      ),

      h('div', { className: 'children' },
        h(ChildCounter, { count, onIncrement: increment }),
        h(ChildGreeter, { name, onGreet: greet })
      ),

      h('div', { className: 'info' },
        '💡 Child components only re-render when their props actually change!'
      )
    );
  }

  const ChildCounter = memo(function ChildCounter({ count, onIncrement }) {
    const renders = useRef(0);
    renders.current += 1;
    
    return h('div', { className: 'child' },
      h('h3', null, '🔢 Counter Child'),
      h('p', null, 'Count: ', h('strong', null, count)),
      h('p', null, 'Renders: ', h('strong', null, renders.current)),
      h('button', {
        onClick: onIncrement,
        className: 'btn-child'
      }, 'Increment')
    );
  });

  const ChildGreeter = memo(function ChildGreeter({ name, onGreet }) {
    const renders = useRef(0);
    renders.current += 1;
    
    return h('div', { className: 'child' },
      h('h3', null, '👋 Greeter Child'),
      h('p', null, 'Name: ', h('strong', null, name)),
      h('p', null, 'Renders: ', h('strong', null, renders.current)),
      h('button', {
        onClick: onGreet,
        className: 'btn-child'
      }, 'Greet')
    );
  });

  const root = createRoot(document.getElementById('root'));
  root.render(h(Parent));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
}

h1 {
  color: #667eea;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;
}

.controls {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 600;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
}

.stats {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.stat {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 120px;
}

.label {
  font-size: 14px;
  color: #6b7280;
  font-weight: 600;
  margin-bottom: 8px;
}

.value {
  font-size: 36px;
  font-weight: 900;
  color: #667eea;
}

.buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.btn-primary:hover, .btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.children {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.child {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 20px;
  border-radius: 16px;
  border: 2px solid #f59e0b;
  text-align: center;
}

.child h3 {
  color: #92400e;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.child p {
  color: #78350f;
  margin-bottom: 10px;
}

.child strong {
  color: #451a03;
}

.btn-child {
  padding: 8px 16px;
  background: #92400e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-child:hover {
  background: #78350f;
  transform: translateY(-1px);
}

.info {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  text-align: center;
  font-size: 16px;
  color: #1e40af;
  font-weight: 600;
}

@media (max-width: 768px) {
  .children {
    grid-template-columns: 1fr;
  }
  
  .buttons {
    flex-direction: column;
  }
  
  h1 {
    font-size: 2rem;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #a78bfa;
  }

  .controls {
    background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  }

  .input-group label {
    color: #d1d5db;
  }

  .input-group input {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }

  .input-group input:focus {
    border-color: #a78bfa;
  }

  .stat {
    background: #374151;
  }

  .label {
    color: #a78bfa;
  }

  .value {
    color: #c4b5fd;
  }

  .child {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
  }

  .child h3 {
    color: #fef3c7;
  }

  .child p {
    color: #fed7aa;
  }

  .child strong {
    color: #fffbeb;
  }

  .info {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
    color: #dbeafe;
  }
}`}
          />
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Essential useCallback concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Memoizes Functions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns same function instance between renders until dependencies change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Prevents Re-renders</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Child components with React.memo won't re-render if callback hasn't changed.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Dependency Array</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Function is recreated only when dependencies in the array change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use Wisely</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't use everywhere! Only when needed for performance optimization.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useCallback is a performance optimization. Use it with React.memo or when callbacks are dependencies in other Hooks!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
