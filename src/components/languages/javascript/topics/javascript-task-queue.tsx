'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ListOrdered,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface QueueItem {
  name: string;
  type: 'micro' | 'macro';
  id: number;
}

interface AnimationStep {
  microQueue: QueueItem[];
  macroQueue: QueueItem[];
  processing: string | null;
  output: string[];
  description: string;
  code?: string;
}

export default function JavaScriptTaskQueue() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const animationSteps: AnimationStep[] = [
    {
      microQueue: [],
      macroQueue: [],
      processing: null,
      output: [],
      description: 'Program starts - both queues empty',
      code: 'console.log(\'Start\');'
    },
    {
      microQueue: [],
      macroQueue: [],
      processing: 'console.log',
      output: ['Start'],
      description: 'Sync code executes immediately',
      code: '// Output: Start'
    },
    {
      microQueue: [],
      macroQueue: [{ name: 'setTimeout 1', type: 'macro', id: 1 }],
      processing: null,
      output: ['Start'],
      description: 'setTimeout registered - added to MACROTASK queue',
      code: 'setTimeout(() => console.log(\'Timeout\'), 0);'
    },
    {
      microQueue: [{ name: 'Promise 1', type: 'micro', id: 2 }],
      macroQueue: [{ name: 'setTimeout 1', type: 'macro', id: 1 }],
      processing: null,
      output: ['Start'],
      description: 'Promise callback added to MICROTASK queue',
      code: 'Promise.resolve().then(() => console.log(\'Promise\'));'
    },
    {
      microQueue: [
        { name: 'Promise 1', type: 'micro', id: 2 },
        { name: 'Promise 2', type: 'micro', id: 3 }
      ],
      macroQueue: [{ name: 'setTimeout 1', type: 'macro', id: 1 }],
      processing: null,
      output: ['Start'],
      description: 'Another promise - added to end of microtask queue',
      code: 'Promise.resolve().then(() => console.log(\'Promise 2\'));'
    },
    {
      microQueue: [
        { name: 'Promise 1', type: 'micro', id: 2 },
        { name: 'Promise 2', type: 'micro', id: 3 }
      ],
      macroQueue: [
        { name: 'setTimeout 1', type: 'macro', id: 1 },
        { name: 'setTimeout 2', type: 'macro', id: 4 }
      ],
      processing: null,
      output: ['Start'],
      description: 'Another setTimeout - added to macrotask queue',
      code: 'setTimeout(() => console.log(\'Timeout 2\'), 0);'
    },
    {
      microQueue: [{ name: 'Promise 2', type: 'micro', id: 3 }],
      macroQueue: [
        { name: 'setTimeout 1', type: 'macro', id: 1 },
        { name: 'setTimeout 2', type: 'macro', id: 4 }
      ],
      processing: 'Promise 1',
      output: ['Start'],
      description: 'Event loop: Process MICROTASKS first (higher priority)',
      code: '// Executing: Promise 1'
    },
    {
      microQueue: [{ name: 'Promise 2', type: 'micro', id: 3 }],
      macroQueue: [
        { name: 'setTimeout 1', type: 'macro', id: 1 },
        { name: 'setTimeout 2', type: 'macro', id: 4 }
      ],
      processing: null,
      output: ['Start', 'Promise'],
      description: 'Output: Promise - microtask complete',
      code: '// Output: Promise'
    },
    {
      microQueue: [],
      macroQueue: [
        { name: 'setTimeout 1', type: 'macro', id: 1 },
        { name: 'setTimeout 2', type: 'macro', id: 4 }
      ],
      processing: 'Promise 2',
      output: ['Start', 'Promise'],
      description: 'Process next microtask',
      code: '// Executing: Promise 2'
    },
    {
      microQueue: [],
      macroQueue: [
        { name: 'setTimeout 1', type: 'macro', id: 1 },
        { name: 'setTimeout 2', type: 'macro', id: 4 }
      ],
      processing: null,
      output: ['Start', 'Promise', 'Promise 2'],
      description: 'Output: Promise 2 - ALL microtasks done!',
      code: '// Output: Promise 2'
    },
    {
      microQueue: [],
      macroQueue: [{ name: 'setTimeout 2', type: 'macro', id: 4 }],
      processing: 'setTimeout 1',
      output: ['Start', 'Promise', 'Promise 2'],
      description: 'Now process ONE macrotask',
      code: '// Executing: setTimeout 1'
    },
    {
      microQueue: [],
      macroQueue: [{ name: 'setTimeout 2', type: 'macro', id: 4 }],
      processing: null,
      output: ['Start', 'Promise', 'Promise 2', 'Timeout'],
      description: 'Output: Timeout - back to check microtasks',
      code: '// Output: Timeout'
    },
    {
      microQueue: [],
      macroQueue: [],
      processing: 'setTimeout 2',
      output: ['Start', 'Promise', 'Promise 2', 'Timeout'],
      description: 'No microtasks - process next macrotask',
      code: '// Executing: setTimeout 2'
    },
    {
      microQueue: [],
      macroQueue: [],
      processing: null,
      output: ['Start', 'Promise', 'Promise 2', 'Timeout', 'Timeout 2'],
      description: '✅ Complete! Order: Sync → All Micros → Macros one by one',
      code: '// Output: Timeout 2\n// ✅ Done!'
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

  const step = animationSteps[currentStep];

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ListOrdered}
        category="JavaScript Fundamentals"
        title="Task Queue"
        description="How JavaScript queues and processes asynchronous callbacks"
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
                What are Task Queues?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Task queues are <strong className="text-yellow-700 dark:text-yellow-400">waiting lines</strong> for callbacks. JavaScript has two types: <strong>Microtask Queue</strong> (high priority) and <strong>Macrotask Queue</strong> (low priority)!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <ListOrdered className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Priority System</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              The event loop always checks: <strong>ALL microtasks first</strong>, then <strong>ONE macrotask</strong>, then repeat. Microtasks cut in line!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Task Queue Animation</CardTitle>
              <CardDescription>Watch how tasks are queued and processed</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
                ← Prev
              </Button>
              <Button size="sm" variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="outline" onClick={() => currentStep < animationSteps.length - 1 && setCurrentStep(currentStep + 1)} disabled={currentStep === animationSteps.length - 1}>
                Next →
              </Button>
              <Button size="sm" variant="outline" onClick={() => { setCurrentStep(0); setIsPlaying(false); }}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Queues Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Microtask Queue */}
              <div className="border-2 border-green-300 dark:border-green-700 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="font-bold text-lg">Microtask Queue</h3>
                  <span className="ml-auto text-xs bg-green-200 dark:bg-green-900/40 px-2 py-1 rounded">HIGH PRIORITY</span>
                </div>
                <div className="space-y-2 min-h-[200px]">
                  {step.microQueue.length === 0 ? (
                    <div className="text-center text-gray-400 py-8">Empty</div>
                  ) : (
                    step.microQueue.map((task, index) => (
                      <div
                        key={task.id}
                        className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-3 rounded-lg font-mono text-sm shadow-md animate-in slide-in-from-left-4"
                      >
                        <div className="flex items-center justify-between">
                          <span>{task.name}</span>
                          {index === 0 && <span className="text-xs bg-white/20 px-2 py-1 rounded">NEXT</span>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">
                  Promises, queueMicrotask
                </div>
              </div>

              {/* Macrotask Queue */}
              <div className="border-2 border-orange-300 dark:border-orange-700 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <h3 className="font-bold text-lg">Macrotask Queue</h3>
                  <span className="ml-auto text-xs bg-orange-200 dark:bg-orange-900/40 px-2 py-1 rounded">LOW PRIORITY</span>
                </div>
                <div className="space-y-2 min-h-[200px]">
                  {step.macroQueue.length === 0 ? (
                    <div className="text-center text-gray-400 py-8">Empty</div>
                  ) : (
                    step.macroQueue.map((task, index) => (
                      <div
                        key={task.id}
                        className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-4 py-3 rounded-lg font-mono text-sm shadow-md animate-in slide-in-from-right-4"
                      >
                        <div className="flex items-center justify-between">
                          <span>{task.name}</span>
                          {index === 0 && <span className="text-xs bg-white/20 px-2 py-1 rounded">NEXT</span>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">
                  setTimeout, setInterval, I/O
                </div>
              </div>
            </div>

            {/* Currently Processing */}
            <div className="border-2 border-blue-300 dark:border-blue-700 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Currently Processing
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 min-h-[60px] flex items-center justify-center">
                {step.processing ? (
                  <div className="text-lg font-mono text-blue-600 dark:text-blue-400 animate-pulse">
                    {step.processing}
                  </div>
                ) : (
                  <div className="text-gray-400">Nothing executing</div>
                )}
              </div>
            </div>

            {/* Console Output */}
            <div className="border-2 border-indigo-300 dark:border-indigo-700 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/10 p-6">
              <h3 className="font-bold mb-3">Console Output</h3>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 min-h-[100px] font-mono text-sm">
                {step.output.length === 0 ? (
                  <div className="text-gray-500">// No output yet</div>
                ) : (
                  step.output.map((line, i) => (
                    <div key={i} className="text-emerald-400 animate-in fade-in">
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Description and Code */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    {currentStep + 1}
                  </div>
                  <span className="font-semibold">Step {currentStep + 1} of {animationSteps.length}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>

              {step.code && (
                <div className="bg-slate-900 dark:bg-slate-950 border-2 border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Code Executing
                    </span>
                  </div>
                  <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap">
                    {step.code}
                  </pre>
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="flex justify-center">
              <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                {animationSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStep 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Queue Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Queue Processing Rules</CardTitle>
          <CardDescription>How the event loop processes tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold mb-1">Execute Synchronous Code</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All synchronous code runs first, immediately
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold mb-1">Process ALL Microtasks</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Empty the entire microtask queue before moving on
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold mb-1">Process ONE Macrotask</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Execute only one macrotask, then go back to step 2
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                ♻️
              </div>
              <div>
                <h4 className="font-bold mb-1">Repeat</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Loop forever: check microtasks → process one macrotask → repeat
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Task Queue Example"
        description="Visualizing queue priority"
        code={`console.log('Start');  // Sync - runs immediately

setTimeout(() => {
  console.log('Timeout');  // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');  // Microtask
});

Promise.resolve().then(() => {
  console.log('Promise 2');  // Microtask
});

setTimeout(() => {
  console.log('Timeout 2');  // Macrotask
}, 0);

// Output order: 
// Start (sync)
// Promise (microtask 1)
// Promise 2 (microtask 2)
// Timeout (macrotask 1)
// Timeout 2 (macrotask 2)

// Why?
// 1. Sync code runs first
// 2. ALL microtasks run
// 3. Then ONE macrotask
// 4. Back to check microtasks
// 5. Then next macrotask`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Microtasks Can Starve Macrotasks"
        description="Be careful with infinite microtasks!"
        code={`// BAD: Infinite microtask loop
function recursiveMicrotask() {
  Promise.resolve().then(() => {
    console.log('Microtask');
    recursiveMicrotask();  // Creates another microtask!
  });
}

setTimeout(() => {
  console.log('This will NEVER run!');
}, 0);

// recursiveMicrotask();  // Don't run this!
// The macrotask never gets a chance because
// microtasks keep adding more microtasks

// GOOD: Allow macrotasks to run
let count = 0;
function limitedMicrotask() {
  if (count++ < 5) {
    Promise.resolve().then(() => {
      console.log('Microtask', count);
      limitedMicrotask();
    });
  }
}

setTimeout(() => {
  console.log('Timeout can run now!');
}, 0);

limitedMicrotask();  // Only 5 iterations`}
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
                <li>• Two queues: Microtask & Macrotask</li>
                <li>• Microtasks have higher priority</li>
                <li>• ALL microtasks run before next macrotask</li>
                <li>• Only ONE macrotask per cycle</li>
                <li>• Event loop checks microtasks after each task</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Watch Out ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't create infinite microtask loops</li>
                <li>• Don't assume setTimeout runs immediately</li>
                <li>• Don't mix sync/async assumptions</li>
                <li>• Don't block the event loop</li>
                <li>• Don't forget promises are microtasks</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Reference</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Microtasks:</strong> Promises, queueMicrotask(), async/await</div>
              <div><strong>Macrotasks:</strong> setTimeout, setInterval, I/O, UI events</div>
              <div><strong>Priority:</strong> Sync → All Micros → One Macro → Repeat</div>
              <div><strong>Rule:</strong> Microtasks can't be interrupted by macrotasks</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">queueMicrotask()</code> when you need something to run as a microtask but don't want to use promises!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
