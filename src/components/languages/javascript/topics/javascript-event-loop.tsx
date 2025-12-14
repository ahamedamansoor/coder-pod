'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { JSVisualizerEnhanced } from '../js-visualizer-enhanced';
import {
  RefreshCw,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Clock,
  Code2,
} from 'lucide-react';

interface Task {
  name: string;
  type: 'sync' | 'macro' | 'micro';
  color: string;
}

interface AnimationStep {
  callStack: string[];
  webAPIs: string[];
  macroQueue: string[];
  microQueue: string[];
  output: string[];
  description: string;
  code?: string;
  highlight?: 'stack' | 'webapi' | 'macro' | 'micro' | 'output';
}

export default function JavaScriptEventLoop() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Comprehensive animation showing microtasks vs macrotasks
  const animationSteps: AnimationStep[] = [
    {
      callStack: [],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: [],
      description: 'Program starts - all queues empty',
      code: '// JavaScript engine ready',
      highlight: 'stack'
    },
    {
      callStack: ['main()'],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: [],
      description: 'Script execution begins',
      code: '// Script starts executing',
      highlight: 'stack'
    },
    {
      callStack: ['main()', 'console.log("1")'],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: [],
      description: 'Synchronous code: console.log("1") executes immediately',
      code: 'console.log(\'1\');',
      highlight: 'stack'
    },
    {
      callStack: ['main()'],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: ['1'],
      description: 'Output: 1 (call stack pops)',
      code: '// Output: 1',
      highlight: 'output'
    },
    {
      callStack: ['main()', 'setTimeout()'],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: ['1'],
      description: 'setTimeout() called - registers callback',
      code: 'setTimeout(() => {\n  console.log(\'4\');\n}, 0);',
      highlight: 'stack'
    },
    {
      callStack: ['main()'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: [],
      output: ['1'],
      description: 'Callback moved to Web APIs (browser handles the timer)',
      code: '// Timer running in background',
      highlight: 'webapi'
    },
    {
      callStack: ['main()', 'Promise.resolve()'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: [],
      output: ['1'],
      description: 'Promise.resolve() called',
      code: 'Promise.resolve().then(() => {\n  console.log(\'3\');\n});',
      highlight: 'stack'
    },
    {
      callStack: ['main()'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: ['Promise.then()'],
      output: ['1'],
      description: 'Promise callback goes to MICROTASK queue',
      code: '// Promise callback queued',
      highlight: 'micro'
    },
    {
      callStack: ['main()', 'console.log("2")'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: ['Promise.then()'],
      output: ['1'],
      description: 'Synchronous code: console.log("2")',
      code: 'console.log(\'2\');',
      highlight: 'stack'
    },
    {
      callStack: ['main()'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: ['Promise.then()'],
      output: ['1', '2'],
      description: 'Output: 2',
      code: '// Output: 2',
      highlight: 'output'
    },
    {
      callStack: [],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: ['Promise.then()'],
      output: ['1', '2'],
      description: 'main() completes - call stack empty!',
      code: '// Sync code complete',
      highlight: 'stack'
    },
    {
      callStack: ['Promise.then()'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: [],
      output: ['1', '2'],
      description: 'Event loop checks MICROTASKS first (higher priority)',
      code: '// Microtask executing',
      highlight: 'micro'
    },
    {
      callStack: ['Promise.then()', 'console.log("3")'],
      webAPIs: ['setTimeout callback'],
      macroQueue: [],
      microQueue: [],
      output: ['1', '2'],
      description: 'Microtask executes: console.log("3")',
      code: 'console.log(\'3\');',
      highlight: 'stack'
    },
    {
      callStack: [],
      webAPIs: [],
      macroQueue: ['setTimeout callback'],
      microQueue: [],
      output: ['1', '2', '3'],
      description: 'Output: 3 - Timer completes, callback moves to MACROTASK queue',
      code: '// Output: 3\n// Timer done, callback ready',
      highlight: 'macro'
    },
    {
      callStack: ['setTimeout callback'],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: ['1', '2', '3'],
      description: 'Event loop processes MACROTASK (only after microtasks done)',
      code: '// Macrotask executing',
      highlight: 'macro'
    },
    {
      callStack: ['setTimeout callback', 'console.log("4")'],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: ['1', '2', '3'],
      description: 'Macrotask executes: console.log("4")',
      code: 'console.log(\'4\');',
      highlight: 'stack'
    },
    {
      callStack: [],
      webAPIs: [],
      macroQueue: [],
      microQueue: [],
      output: ['1', '2', '3', '4'],
      description: 'Output: 4 - Program complete! Final order: 1, 2, 3, 4',
      code: '// Output: 4\n// ✅ Complete!',
      highlight: 'output'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < animationSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= animationSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    } else if (currentStep >= animationSteps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, animationSteps.length]);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };
  const handleNext = () => {
    if (currentStep < animationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = animationSteps[currentStep];

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="JavaScript Fundamentals"
        title="Event Loop"
        description="How JavaScript handles async code - Call Stack, Web APIs, Microtasks & Macrotasks"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Event Loop?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The event loop is JavaScript's <strong className="text-yellow-700 dark:text-yellow-400">traffic controller</strong> - it coordinates the call stack, Web APIs, and task queues to handle both synchronous and asynchronous code!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <RefreshCw className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">The Loop That Never Stops</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              The event loop constantly checks: "Is the call stack empty? Any microtasks? Any macrotasks?" It keeps JavaScript responsive while handling async operations!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Enhanced JS Visualizer */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-blue-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-blue-950/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Interactive Event Loop Visualizer</CardTitle>
              <CardDescription>Write your own code and see the event loop in action!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/30">
            <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-200">Try It Yourself!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Write or modify JavaScript code to see how the call stack, memory heap, microtask queue, and macrotask queue work together. Watch each step with detailed explanations and smooth animations!
            </AlertDescription>
          </Alert>
          
          <JSVisualizerEnhanced />
        </CardContent>
      </Card>

      {/* Code Example */}
      <CodeSnippet
        title="Event Loop Example"
        description="The code being visualized above"
        code={`console.log('1');  // Synchronous - immediate

setTimeout(() => {
  console.log('4');  // Macrotask - runs last
}, 0);

Promise.resolve().then(() => {
  console.log('3');  // Microtask - runs before setTimeout
});

console.log('2');  // Synchronous - immediate

// Output order: 1, 2, 3, 4
// Why?
// 1. Sync code runs first (1, 2)
// 2. Microtasks run next (3)
// 3. Macrotasks run last (4)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Priority Explanation */}
      <Card>
        <CardHeader>
          <CardTitle>Execution Priority</CardTitle>
          <CardDescription>What runs when?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Call Stack (Synchronous)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Regular code executes immediately - console.log, variables, function calls
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Microtasks (High Priority)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Promises, queueMicrotask, MutationObserver - runs after sync, before macrotasks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Macrotasks (Low Priority)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  setTimeout, setInterval, I/O operations - runs last
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Microtasks vs Macrotasks */}
      <Card>
        <CardHeader>
          <CardTitle>Microtasks vs Macrotasks</CardTitle>
          <CardDescription>Understanding the difference</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-green-200 dark:border-green-800 rounded-xl p-6 bg-green-50/50 dark:bg-green-950/10">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-lg">Microtasks</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-sm">Sources:</span>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                    <li>• Promise callbacks (.then, .catch, .finally)</li>
                    <li>• async/await</li>
                    <li>• queueMicrotask()</li>
                    <li>• MutationObserver</li>
                  </ul>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 rounded p-3">
                  <strong className="text-xs">Priority: HIGH</strong>
                  <p className="text-xs mt-1">Runs after current script, before next macrotask</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6 bg-orange-50/50 dark:bg-orange-950/10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-lg">Macrotasks</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-sm">Sources:</span>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                    <li>• setTimeout / setInterval</li>
                    <li>• setImmediate (Node.js)</li>
                    <li>• I/O operations</li>
                    <li>• UI rendering</li>
                  </ul>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded p-3">
                  <strong className="text-xs">Priority: LOW</strong>
                  <p className="text-xs mt-1">Runs after ALL microtasks are done</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complex Example: Microtasks vs Macrotasks"
        description="See the execution order"
        code={`console.log('1: Start');

setTimeout(() => {
  console.log('2: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise 1');
}).then(() => {
  console.log('4: Promise 2');
});

setTimeout(() => {
  console.log('5: setTimeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('6: Promise 3');
});

console.log('7: End');

// Output order: 1, 7, 3, 6, 4, 2, 5
// 
// Breakdown:
// 1, 7     - Synchronous (call stack)
// 3, 6, 4  - Microtasks (promises)
// 2, 5     - Macrotasks (setTimeout)
//
// Event Loop Process:
// 1. Run all synchronous code
// 2. Run ALL microtasks
// 3. Run ONE macrotask
// 4. Repeat from step 2`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Real-World Example"
        description="Async data loading"
        code={`async function loadUserData() {
  console.log('1: Start loading');
  
  // Macrotask - simulated API delay
  setTimeout(() => {
    console.log('6: Timeout callback');
  }, 0);
  
  // Async operation
  const response = await fetch('/api/user');
  console.log('2: Response received');
  
  // Microtask - promise
  Promise.resolve().then(() => {
    console.log('3: Promise callback');
  });
  
  const data = await response.json();
  console.log('4: Data parsed');
  
  // More microtasks
  Promise.resolve().then(() => {
    console.log('5: Another promise');
  });
  
  return data;
}

loadUserData();
console.log('7: Code after function call');

// Possible output order:
// 1: Start loading
// 7: Code after function call
// 2: Response received
// 3: Promise callback
// 4: Data parsed
// 5: Another promise
// 6: Timeout callback`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Remember ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Synchronous code runs first</li>
                <li>• Microtasks have higher priority</li>
                <li>• ALL microtasks run before next macrotask</li>
                <li>• Event loop never stops checking</li>
                <li>• JavaScript is single-threaded</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Common Mistakes ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Assuming setTimeout runs immediately</li>
                <li>• Not understanding promise priority</li>
                <li>• Blocking the event loop</li>
                <li>• Infinite microtask loops</li>
                <li>• Mixing sync and async incorrectly</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Event Loop Algorithm</h4>
            <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside">
              <li>Execute all synchronous code (call stack)</li>
              <li>Execute ALL microtasks (until microtask queue is empty)</li>
              <li>Execute ONE macrotask</li>
              <li>Go back to step 2</li>
              <li>Repeat forever!</li>
            </ol>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Why This Matters</AlertTitle>
            <AlertDescription className="text-base">
              Understanding the event loop helps you predict async behavior, debug timing issues, and write more efficient code. It's the foundation of JavaScript's non-blocking architecture!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
