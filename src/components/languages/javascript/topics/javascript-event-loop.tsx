'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  RefreshCw,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  Layers,
  Clock,
  Zap,
  GitBranch,
  Network,
  Timer,
} from 'lucide-react';

interface JavaScriptEventLoopProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Event Loop Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
      max-width: 600px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { 
      color: #667eea; 
      margin-bottom: 16px; 
      font-size: 32px; 
    }
    p { 
      color: #64748b; 
      font-size: 18px; 
      margin-bottom: 24px;
    }
    .console-hint { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      font-family: monospace; 
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Event Loop</h1>
    <p>Open the browser console to see the event loop in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🔄 Event Loop Demo\\n");

// Example 1: Call stack vs Task Queue
console.log("1. CALL STACK VS TASK QUEUE:");
console.log("Start");

setTimeout(() => {
  console.log("Timeout (Task Queue)");
}, 0);

console.log("End");

// Example 2: Microtask vs Macrotask
setTimeout(() => {
  console.log("\\n2. MICROTASK VS MACROTASK:");
  
  console.log("Macrotask: setTimeout");
  
  Promise.resolve().then(() => {
    console.log("Microtask: Promise");
  });
  
  setTimeout(() => {
    console.log("Another Macrotask");
  }, 0);
  
  console.log("Synchronous");
}, 1000);

// Example 3: Promise chain
setTimeout(() => {
  console.log("\\n3. PROMISE CHAIN:");
  
  Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"))
    .then(() => console.log("Promise 3"));
  
  console.log("After Promise");
}, 2500);

console.log("\\n💡 Watch the execution order!");`;

// Animated Event Loop Component
const AnimatedEventLoop = () => {
  const [callStack, setCallStack] = useState<string[]>([]);
  const [webAPIs, setWebAPIs] = useState<Array<{ id: string; task: string; time: number }>>([]);
  const [microtaskQueue, setMicrotaskQueue] = useState<string[]>([]);
  const [macrotaskQueue, setMacrotaskQueue] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const executionSteps = [
    {
      stack: ['console.log("Start")'],
      webAPIs: [],
      microtasks: [],
      macrotasks: [],
      output: 'Start',
      description: 'Synchronous code executes on stack'
    },
    {
      stack: ['setTimeout callback'],
      webAPIs: [{ id: '1', task: 'setTimeout(1000ms)', time: 1000 }],
      microtasks: [],
      macrotasks: [],
      output: '',
      description: 'setTimeout moved to Web API'
    },
    {
      stack: ['Promise.resolve().then()'],
      webAPIs: [{ id: '1', task: 'setTimeout(1000ms)', time: 1000 }],
      microtasks: [],
      macrotasks: [],
      output: '',
      description: 'Promise created, .then() queued'
    },
    {
      stack: [],
      webAPIs: [{ id: '1', task: 'setTimeout(1000ms)', time: 1000 }],
      microtasks: ['Promise callback'],
      macrotasks: [],
      output: '',
      description: 'Promise callback in microtask queue'
    },
    {
      stack: ['console.log("End")'],
      webAPIs: [{ id: '1', task: 'setTimeout(1000ms)', time: 1000 }],
      microtasks: ['Promise callback'],
      macrotasks: [],
      output: 'End',
      description: 'Synchronous code continues'
    },
    {
      stack: [],
      webAPIs: [{ id: '1', task: 'setTimeout(1000ms)', time: 1000 }],
      microtasks: ['Promise callback'],
      macrotasks: [],
      output: '',
      description: 'Stack empty, check microtasks'
    },
    {
      stack: ['Promise callback'],
      webAPIs: [{ id: '1', task: 'setTimeout(1000ms)', time: 1000 }],
      microtasks: [],
      macrotasks: [],
      output: 'Promise',
      description: 'Execute microtask (higher priority)'
    },
    {
      stack: [],
      webAPIs: [],
      microtasks: [],
      macrotasks: ['setTimeout callback'],
      output: '',
      description: 'setTimeout done, moved to macrotask queue'
    },
    {
      stack: ['setTimeout callback'],
      webAPIs: [],
      microtasks: [],
      macrotasks: [],
      output: 'Timeout',
      description: 'Execute macrotask'
    },
    {
      stack: [],
      webAPIs: [],
      microtasks: [],
      macrotasks: [],
      output: '',
      description: 'All done! Event loop complete'
    },
  ];

  const runAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCallStack([]);
    setWebAPIs([]);
    setMicrotaskQueue([]);
    setMacrotaskQueue([]);
    setOutput([]);
    setCurrentStep(0);

    for (let i = 0; i < executionSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const step = executionSteps[i];
      setCurrentStep(i);
      setCallStack(step.stack);
      setWebAPIs(step.webAPIs);
      setMicrotaskQueue(step.microtasks);
      setMacrotaskQueue(step.macrotasks);
      if (step.output) {
        setOutput(prev => [...prev, step.output]);
      }
    }

    setIsAnimating(false);
  };

  const reset = () => {
    setCallStack([]);
    setWebAPIs([]);
    setMicrotaskQueue([]);
    setMacrotaskQueue([]);
    setOutput([]);
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <RefreshCw className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
          Animated Event Loop Visualization
        </CardTitle>
        <CardDescription className="text-base">
          Watch how the event loop coordinates the call stack, Web APIs, and task queues
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column: Call Stack & Web APIs */}
          <div className="space-y-4">
            {/* Call Stack */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Call Stack</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">
                  {callStack.length === 0 ? 'Empty' : `${callStack.length} frame${callStack.length > 1 ? 's' : ''}`}
                </Badge>
              </div>
              <div className="min-h-[120px] p-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 flex flex-col-reverse justify-start gap-1.5">
                {callStack.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                    [Empty]
                  </div>
                ) : (
                  callStack.map((frame, index) => (
                    <div
                      key={`stack-${index}`}
                      className="px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded font-mono text-xs shadow-md animate-in slide-in-from-bottom-3 duration-300"
                    >
                      {frame}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Web APIs */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Web APIs</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 text-xs">
                  {webAPIs.length} running
                </Badge>
              </div>
              <div className="min-h-[120px] p-3 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border-2 border-dashed border-emerald-300 dark:border-emerald-700 flex flex-col gap-1.5">
                {webAPIs.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                    [No Web API calls]
                  </div>
                ) : (
                  webAPIs.map((api) => (
                    <div
                      key={api.id}
                      className="px-3 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded font-mono text-xs shadow-md animate-in fade-in duration-300 flex items-center justify-between"
                    >
                      <span>{api.task}</span>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Queues & Output */}
          <div className="space-y-4">
            {/* Microtask Queue */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Microtask Queue</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 text-xs">
                  High Priority
                </Badge>
              </div>
              <div className="min-h-[80px] p-3 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-lg border-2 border-dashed border-amber-300 dark:border-amber-700 flex flex-col gap-1.5">
                {microtaskQueue.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                    [Empty]
                  </div>
                ) : (
                  microtaskQueue.map((task, index) => (
                    <div
                      key={`micro-${index}`}
                      className="px-3 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded font-mono text-xs shadow-md animate-in slide-in-from-right-3 duration-300"
                    >
                      {task}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Macrotask Queue */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Macrotask Queue</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 text-xs">
                  Low Priority
                </Badge>
              </div>
              <div className="min-h-[80px] p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700 flex flex-col gap-1.5">
                {macrotaskQueue.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                    [Empty]
                  </div>
                ) : (
                  macrotaskQueue.map((task, index) => (
                    <div
                      key={`macro-${index}`}
                      className="px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded font-mono text-xs shadow-md animate-in slide-in-from-right-3 duration-300"
                    >
                      {task}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Output */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Console Output</h4>
              <div className="min-h-[80px] p-3 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
                {output.length === 0 ? (
                  <div className="text-slate-500">Ready to execute...</div>
                ) : (
                  <div className="space-y-1">
                    {output.map((line, index) => (
                      <div
                        key={index}
                        className="text-emerald-400 animate-in fade-in duration-300"
                      >
                        → {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm">
            <strong className="text-blue-700 dark:text-blue-300">Current Step:</strong>{' '}
            <span className="text-muted-foreground">
              {executionSteps[currentStep]?.description || 'Ready to start'}
            </span>
          </p>
        </div>

        {/* Code Reference */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border">
          <p className="text-xs font-semibold mb-2">Code Example:</p>
          <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output: Start, End, Promise, Timeout`}</pre>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={runAnimation}
            disabled={isAnimating}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50"
          >
            {isAnimating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Event Loop Animation
              </>
            )}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            disabled={isAnimating}
          >
            Reset
          </Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Watch Closely</AlertTitle>
          <AlertDescription>
            Notice how the <strong className="text-blue-600 dark:text-blue-400">Call Stack</strong> executes first, then <strong className="text-amber-600 dark:text-amber-400">Microtasks</strong> (Promises) before <strong className="text-purple-600 dark:text-purple-400">Macrotasks</strong> (setTimeout). This is the essence of the event loop!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptEventLoop({ onOpenWebPlayground }: JavaScriptEventLoopProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="JavaScript · Asynchronous Programming"
        title="Event Loop"
        description="The heart of JavaScript's asynchronous behavior - understanding how the event loop coordinates the call stack, Web APIs, and task queues to execute code."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is the Event Loop?
          </CardTitle>
          <CardDescription className="text-base">
            The mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 3-Column Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Continuous Loop</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Constantly checks if there's work to do - never stops while your app runs
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">24/7</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Task Coordinator</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Decides what code to run next - synchronous first, then async tasks
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Prioritizes</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Non-Blocking</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Allows async operations without freezing the main thread
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Async</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why the Event Loop Matters</AlertTitle>
            <AlertDescription>
              JavaScript is single-threaded, meaning it can only execute one piece of code at a time. The event loop is what makes async operations possible - it manages the call stack, Web APIs, and task queues to create the illusion of multitasking. Without it, your app would freeze during network requests or timers.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The 4 Components */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The 4 Main Components
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the parts that work together to make the event loop function
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Call Stack */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                1. Call Stack
              </h4>
              <p className="text-xs text-muted-foreground">
                Where your code executes - processes one function at a time (LIFO)
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`function main() {
  console.log("A");
  console.log("B");
}
main(); // Executes on stack`}</pre>
            </div>

            {/* Web APIs */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                2. Web APIs
              </h4>
              <p className="text-xs text-muted-foreground">
                Browser-provided features that run outside the stack (setTimeout, fetch, DOM events)
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`setTimeout(() => {
  console.log("Done!");
}, 1000); // Runs in Web API`}</pre>
            </div>

            {/* Task Queue */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                3. Task Queue (Macrotasks)
              </h4>
              <p className="text-xs text-muted-foreground">
                Where callbacks from Web APIs wait (setTimeout, setInterval, I/O operations)
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`// Goes to Task Queue
setTimeout(() => {
  console.log("Task");
}, 0);`}</pre>
            </div>

            {/* Microtask Queue */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                4. Microtask Queue (Higher Priority)
              </h4>
              <p className="text-xs text-muted-foreground">
                Where Promise callbacks wait - executes BEFORE macrotasks
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`// Goes to Microtask Queue
Promise.resolve()
  .then(() => {
    console.log("Microtask");
  });`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Execution Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            How the Event Loop Works
          </CardTitle>
          <CardDescription className="text-base">
            Step-by-step execution order that the event loop follows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-4">
            <h4 className="font-semibold">Execution Order (The Algorithm)</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <Badge className="bg-blue-600 text-white text-xs mt-0.5">1</Badge>
                <div>
                  <p className="font-semibold text-sm">Execute all synchronous code</p>
                  <p className="text-xs text-muted-foreground mt-1">Everything on the call stack runs first</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <Badge className="bg-amber-600 text-white text-xs mt-0.5">2</Badge>
                <div>
                  <p className="font-semibold text-sm">Check if call stack is empty</p>
                  <p className="text-xs text-muted-foreground mt-1">Event loop only runs when stack is clear</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <Badge className="bg-green-600 text-white text-xs mt-0.5">3</Badge>
                <div>
                  <p className="font-semibold text-sm">Process ALL microtasks</p>
                  <p className="text-xs text-muted-foreground mt-1">Promises, queueMicrotask - runs until queue is empty</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <Badge className="bg-purple-600 text-white text-xs mt-0.5">4</Badge>
                <div>
                  <p className="font-semibold text-sm">Process ONE macrotask</p>
                  <p className="text-xs text-muted-foreground mt-1">setTimeout, setInterval, I/O - only one per cycle</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <Badge className="bg-cyan-600 text-white text-xs mt-0.5">5</Badge>
                <div>
                  <p className="font-semibold text-sm">Repeat from step 2</p>
                  <p className="text-xs text-muted-foreground mt-1">Loop continues forever while app is running</p>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <Clock className="h-4 w-4" />
            <AlertTitle>Key Insight</AlertTitle>
            <AlertDescription>
              The event loop processes <strong>ALL microtasks</strong> before moving to the next macrotask. This is why Promises always execute before setTimeout, even with setTimeout(..., 0).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Microtask vs Macrotask Priority */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Microtask vs Macrotask Priority
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the critical difference that trips up most developers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">Classic Example</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise (Microtask)");
});

console.log("4. End");`}</pre>
            <SnippetOutput lines={[
              '1. Start',
              '4. End',
              '3. Promise (Microtask)',
              '2. Timeout (Macrotask)',
              '',
              '// Synchronous first, then microtasks, then macrotasks'
            ]} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Microtasks */}
            <div className="p-5 bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 rounded-xl border border-green-200/50 dark:border-green-800/30 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">⚡ Microtasks (Higher Priority)</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Promise.then/catch/finally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>queueMicrotask()</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>MutationObserver</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>process.nextTick (Node.js)</span>
                </li>
              </ul>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 text-xs">ALL execute before next macrotask</Badge>
            </div>

            {/* Macrotasks */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300">⏱️ Macrotasks (Lower Priority)</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Clock className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>setTimeout</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>setInterval</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>setImmediate (Node.js)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>I/O operations, UI rendering</span>
                </li>
              </ul>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 text-xs">ONE executes per event loop cycle</Badge>
            </div>
          </div>

          {/* Complex Example */}
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Complex Example: Multiple Tasks
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`console.log("1. Script start");

setTimeout(() => {
  console.log("2. setTimeout 1");
  Promise.resolve().then(() => {
    console.log("3. Promise inside setTimeout");
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("4. Promise 1");
  })
  .then(() => {
    console.log("5. Promise 2");
  });

setTimeout(() => {
  console.log("6. setTimeout 2");
}, 0);

console.log("7. Script end");`}</pre>
            <SnippetOutput lines={[
              '1. Script start',
              '7. Script end',
              '4. Promise 1',
              '5. Promise 2',
              '2. setTimeout 1',
              '3. Promise inside setTimeout',
              '6. setTimeout 2',
              '',
              '// Order: Sync → All Microtasks → Macrotask → Its Microtasks → Next Macrotask'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Animated Event Loop Visualization */}
      <AnimatedEventLoop />

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Network className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            How the event loop affects actual application behavior
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* API Calls */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              API Calls Don't Block the UI
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`console.log("1. Start fetching data");

fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log("3. Data received:", data);
  });

console.log("2. Continue executing");

// UI remains responsive during fetch!
button.addEventListener('click', () => {
  console.log("Button clicked while fetch is running!");
});`}</pre>
            <SnippetOutput lines={[
              '1. Start fetching data',
              '2. Continue executing',
              '// ... user can click button ...',
              'Button clicked while fetch is running!',
              '3. Data received: { ... }',
              '',
              '// Fetch runs in Web API, UI stays responsive'
            ]} />
          </div>

          {/* Render Blocking */}
          <div className="p-5 bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 rounded-xl border border-red-200/50 dark:border-red-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-red-700 dark:text-red-300">
              <AlertTriangle className="w-5 h-5" />
              Heavy Computation Blocks Everything
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function heavyComputation() {
  console.log("Start heavy work");
  
  // Synchronous - blocks the stack!
  for (let i = 0; i < 1000000000; i++) {
    // Expensive calculation
  }
  
  console.log("Done with heavy work");
}

setTimeout(() => {
  console.log("This won't run until heavy work is done!");
}, 0);

heavyComputation(); // Blocks everything
// UI freezes, setTimeout delayed, app unresponsive`}</pre>
            <Alert className="mt-3">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Solution</AlertTitle>
              <AlertDescription>
                Break heavy tasks into smaller chunks using setTimeout or use Web Workers for CPU-intensive tasks.
              </AlertDescription>
            </Alert>
          </div>

          {/* Promise Chain */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Promise Chains Execute Together
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 2");
  })
  .then(() => {
    console.log("Promise 3");
  });

setTimeout(() => {
  console.log("Timeout");
}, 0);`}</pre>
            <SnippetOutput lines={[
              'Promise 1',
              'Promise 2',
              'Promise 3',
              'Timeout',
              '',
              '// All Promises execute before setTimeout'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Common Mistakes
          </CardTitle>
          <CardDescription className="text-base">
            Event loop misconceptions that cause bugs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mistake 1 */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Assuming setTimeout is instant</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`setTimeout(() => {
  console.log("This");
}, 0);
console.log("That");

// Output: "That", "This"
// setTimeout(0) isn't instant!`}</pre>
            </div>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Understanding the delay</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Use Promises for immediate async
Promise.resolve().then(() => {
  console.log("This");
});
console.log("That");

// Output: "That", "This"
// But runs before setTimeout`}</pre>
            </div>

            {/* Mistake 2 */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Blocking with long loops</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`for (let i = 0; i < 1000000; i++) {
  // Blocks event loop
  // UI freezes
  // No other code runs
}`}</pre>
            </div>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Breaking into chunks</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function processChunk(i) {
  const chunk = 1000;
  if (i < 1000000) {
    // Process chunk
    setTimeout(() => 
      processChunk(i + chunk), 0
    );
  }
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Working effectively with the event loop
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This ✅
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promises for async operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Break heavy computations into smaller chunks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Web Workers for CPU-intensive tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Understand microtask vs macrotask priority</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use requestAnimationFrame for animations</span>
                </li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't block the call stack with long synchronous operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't assume setTimeout(0) runs immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't create infinite microtask loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore the event loop when debugging timing issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use alert() or confirm() - they block everything</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              The event loop is the reason JavaScript can handle thousands of concurrent connections despite being single-threaded. Understanding it is crucial for writing performant, non-blocking code. When in doubt: sync code first, then ALL microtasks, then ONE macrotask, repeat!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Playground */}
      {onOpenWebPlayground && (
        <Card className="border border-blue-200/60 dark:border-blue-900/30 bg-white/95 dark:bg-slate-950/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              See the event loop in action with real execution examples
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
              className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
            >
              Run in Playground
            </Button>
            <p className="text-sm text-muted-foreground">
              The console demonstrates execution order with the call stack, microtasks, and macrotasks.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
