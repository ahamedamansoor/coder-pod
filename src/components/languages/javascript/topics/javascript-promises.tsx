'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Clock,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  AlertCircle,
  Zap,
  Layers,
  ArrowRight,
  RefreshCw,
  Network,
  Timer,
  Workflow,
  CheckCheck,
  AlertTriangle,
  GitBranch,
  Loader2,
  TrendingUp,
} from 'lucide-react';

interface JavaScriptPromisesProps {
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
  <title>Promises Demo</title>
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
    <h1>⚡ JavaScript Promises</h1>
    <p>Open the browser console to see promises in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🚀 JavaScript Promises Demo\\n");

// 1. Basic Promise
console.log("1. BASIC PROMISE:");
const promise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("✅ Promise resolved!");
    } else {
      reject("❌ Promise rejected!");
    }
  }, 1000);
});

promise
  .then(result => console.log("Result:", result))
  .catch(error => console.error("Error:", error));

// 2. Promise Chaining
console.log("\\n2. PROMISE CHAINING:");
Promise.resolve(5)
  .then(num => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then(num => {
    console.log("Step 2:", num);
    return num + 3;
  })
  .then(num => {
    console.log("Step 3:", num);
    return num;
  })
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Chain complete"));

// 3. Promise.all
console.log("\\n3. PROMISE.ALL:");
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => {
    console.log("All results:", results);
  });

console.log("\\n💡 Watch promises resolve asynchronously!");`;

// Animated Promise Component
const AnimatedPromise = () => {
  const [promiseState, setPromiseState] = useState<'pending' | 'fulfilled' | 'rejected' | 'idle'>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [showChaining, setShowChaining] = useState(false);
  const [chainStep, setChainStep] = useState(0);

  const runSuccessFlow = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOutput([]);
    setShowChaining(false);
    setChainStep(0);

    // Pending
    setPromiseState('pending');
    setOutput(['⏳ Promise created (pending)...']);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Fulfilled
    setPromiseState('fulfilled');
    setOutput(prev => [...prev, '✓ Promise fulfilled!', '→ Executing .then() handler', '📦 Result: { data: "success" }']);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsAnimating(false);
  };

  const runErrorFlow = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOutput([]);
    setShowChaining(false);
    setChainStep(0);

    // Pending
    setPromiseState('pending');
    setOutput(['⏳ Promise created (pending)...']);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Rejected
    setPromiseState('rejected');
    setOutput(prev => [...prev, '✗ Promise rejected!', '→ Executing .catch() handler', '❌ Error: "Operation failed"']);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsAnimating(false);
  };

  const runChainFlow = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOutput([]);
    setShowChaining(true);
    setChainStep(0);

    const steps = [
      { step: 0, state: 'pending' as const, message: '⏳ Step 1: Fetching user...' },
      { step: 1, state: 'fulfilled' as const, message: '✓ User fetched: { id: 1, name: "Alice" }' },
      { step: 1, state: 'pending' as const, message: '⏳ Step 2: Fetching orders...' },
      { step: 2, state: 'fulfilled' as const, message: '✓ Orders fetched: [order1, order2]' },
      { step: 2, state: 'pending' as const, message: '⏳ Step 3: Processing...' },
      { step: 3, state: 'fulfilled' as const, message: '✓ Processing complete!' },
    ];

    for (const { step, state, message } of steps) {
      setChainStep(step);
      setPromiseState(state);
      setOutput(prev => [...prev, message]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIsAnimating(false);
  };

  const reset = () => {
    setPromiseState('idle');
    setIsAnimating(false);
    setOutput([]);
    setShowChaining(false);
    setChainStep(0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Clock className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
          Animated Promise States
        </CardTitle>
        <CardDescription className="text-base">
          Watch how Promises transition between Pending, Fulfilled, and Rejected states
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Promise State Visualization */}
        <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 rounded-xl border-2 border-blue-200/50 dark:border-blue-800/30">
          <div className="flex justify-center gap-8">
            {/* Pending State */}
            <div className={`flex flex-col items-center transition-all duration-500 ${
              promiseState === 'pending' ? 'scale-110' : 'scale-100 opacity-50'
            }`}>
              <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                promiseState === 'pending' 
                  ? 'bg-gradient-to-br from-amber-400 to-yellow-400 border-amber-300 shadow-lg animate-pulse' 
                  : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
              }`}>
                {promiseState === 'pending' ? (
                  <Loader2 className="w-10 h-10 text-white animate-spin" />
                ) : (
                  <Clock className="w-10 h-10 text-gray-400" />
                )}
              </div>
              <Badge className="mt-3 bg-amber-100 text-amber-700 dark:bg-amber-900/30">Pending</Badge>
              <p className="text-xs text-muted-foreground mt-1">Waiting...</p>
            </div>

            {/* Fulfilled State */}
            <div className={`flex flex-col items-center transition-all duration-500 ${
              promiseState === 'fulfilled' ? 'scale-110' : 'scale-100 opacity-50'
            }`}>
              <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                promiseState === 'fulfilled' 
                  ? 'bg-gradient-to-br from-emerald-400 to-green-400 border-emerald-300 shadow-lg' 
                  : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
              }`}>
                <CheckCircle2 className={`w-10 h-10 ${promiseState === 'fulfilled' ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <Badge className="mt-3 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Fulfilled</Badge>
              <p className="text-xs text-muted-foreground mt-1">Success!</p>
            </div>

            {/* Rejected State */}
            <div className={`flex flex-col items-center transition-all duration-500 ${
              promiseState === 'rejected' ? 'scale-110' : 'scale-100 opacity-50'
            }`}>
              <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                promiseState === 'rejected' 
                  ? 'bg-gradient-to-br from-rose-400 to-red-400 border-rose-300 shadow-lg' 
                  : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
              }`}>
                <XCircle className={`w-10 h-10 ${promiseState === 'rejected' ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <Badge className="mt-3 bg-rose-100 text-rose-700 dark:bg-rose-900/30">Rejected</Badge>
              <p className="text-xs text-muted-foreground mt-1">Error</p>
            </div>
          </div>
        </div>

        {/* Promise Chaining Visualization */}
        {showChaining && (
          <div className="p-6 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 animate-in fade-in duration-500">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Promise Chain
            </h4>
            <div className="flex items-center justify-center gap-4">
              {[0, 1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div className={`flex flex-col items-center transition-all duration-500 ${
                    chainStep === step ? 'scale-110' : chainStep > step ? 'opacity-60' : 'opacity-30'
                  }`}>
                    <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      chainStep === step
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-300 shadow-lg'
                        : chainStep > step
                        ? 'bg-gradient-to-br from-purple-400 to-pink-400 text-white border-purple-300'
                        : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-400'
                    }`}>
                      .then({step + 1})
                    </div>
                  </div>
                  {step < 3 && (
                    <ArrowRight className={`w-5 h-5 ${chainStep > step ? 'text-purple-500' : 'text-gray-400'} transition-colors duration-500`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Output Console */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Console Output</h4>
          <div className="min-h-[140px] p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
            {output.length === 0 ? (
              <div className="text-slate-500">Click a button to see promise execution...</div>
            ) : (
              <div className="space-y-1">
                {output.map((line, index) => (
                  <div
                    key={index}
                    className="text-cyan-400 animate-in fade-in duration-300"
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t flex-wrap">
          <Button
            onClick={runSuccessFlow}
            disabled={isAnimating}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 disabled:opacity-50"
          >
            {isAnimating && !showChaining ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <CheckCircle2 className="w-4 h-4 mr-2" />
            )}
            Run Success
          </Button>
          <Button
            onClick={runErrorFlow}
            disabled={isAnimating}
            className="bg-gradient-to-r from-rose-600 to-red-600 text-white hover:from-rose-500 hover:to-red-500 disabled:opacity-50"
          >
            <XCircle className="w-4 h-4 mr-2" />
            Run Error
          </Button>
          <Button
            onClick={runChainFlow}
            disabled={isAnimating}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 disabled:opacity-50"
          >
            {isAnimating && showChaining ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <GitBranch className="w-4 h-4 mr-2" />
            )}
            Run Chain
          </Button>
          <Button onClick={reset} variant="outline" disabled={isAnimating}>
            Reset
          </Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Understanding Promise States</AlertTitle>
          <AlertDescription>
            Every Promise starts in the <strong className="text-amber-600 dark:text-amber-400">Pending</strong> state. It then either becomes <strong className="text-emerald-600 dark:text-emerald-400">Fulfilled</strong> (resolved successfully) or <strong className="text-rose-600 dark:text-rose-400">Rejected</strong> (failed with an error). Once settled (fulfilled or rejected), a Promise cannot change state again!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptPromises({ onOpenWebPlayground }: JavaScriptPromisesProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Clock}
        category="JavaScript · Asynchronous Programming"
        title="Promises"
        description="Master JavaScript Promises - the foundation of modern async programming that makes handling asynchronous operations clean, readable, and powerful."
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is a Promise?
          </CardTitle>
          <CardDescription className="text-base">
            A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of a Promise like ordering a package online. When you place the order, you get a tracking number (the Promise). The package isn't delivered yet (pending), but you have a guarantee it will either arrive (fulfilled) or fail to deliver (rejected). You can plan what to do when it arrives without waiting at the door!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Better Than Callbacks</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Escape callback hell with flat, chainable promise code
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Clean Code</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Error Handling</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Centralized error handling with .catch() instead of multiple callbacks
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Robust</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Composable</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Chain multiple async operations and combine them easily
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Powerful</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The Key Insight</AlertTitle>
            <AlertDescription>
              Promises solve the <strong>callback hell</strong> problem by providing a cleaner way to handle async operations. Instead of nesting callbacks, you chain <code>.then()</code> calls. This makes code more readable and errors easier to handle.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Promise States */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Promise States
          </CardTitle>
          <CardDescription className="text-base">
            A Promise can be in one of three states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Understanding States</AlertTitle>
            <AlertDescription>
              Every Promise starts as <strong>pending</strong> and then transitions to either <strong>fulfilled</strong> (success) or <strong>rejected</strong> (failure). Once settled (fulfilled or rejected), a Promise cannot change state again.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <Loader2 className="w-6 h-6 text-amber-600 dark:text-amber-400 mb-2" />
              <h4 className="font-semibold mb-2">⏳ Pending</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Initial state - the operation hasn't completed yet
              </p>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 text-xs">Waiting</Badge>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">✅ Fulfilled</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Operation completed successfully with a value
              </p>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 text-xs">Success</Badge>
            </div>

            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-200 dark:border-rose-800">
              <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 mb-2" />
              <h4 className="font-semibold mb-2">❌ Rejected</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Operation failed with a reason (error)
              </p>
              <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 text-xs">Error</Badge>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">State Transitions</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Promise starts as PENDING
const promise = new Promise((resolve, reject) => {
  // Do async work...
  
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Data here"); // → FULFILLED
    } else {
      reject("Error here");  // → REJECTED
    }
  }, 1000);
});

// Check state (conceptual)
console.log(promise); // Promise { <pending> }

// After 1 second:
// Promise { <fulfilled>: "Data here" }
// OR
// Promise { <rejected>: "Error here" }`}</pre>
            <p className="text-xs text-muted-foreground">
              ⚠️ Once a Promise is fulfilled or rejected, it's <strong>settled</strong> and cannot change state again. This is called being <strong>immutable</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animated Promise Visualization */}
      <AnimatedPromise />

      {/* Creating Promises */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Creating Promises
          </CardTitle>
          <CardDescription className="text-base">
            Different ways to create and work with promises
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Promise */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Promise Creation</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Executor function runs immediately
  console.log("Doing work...");
  
  // Simulate async operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      // Fulfill the promise
      resolve("Success result");
    } else {
      // Reject the promise
      reject(new Error("Failed"));
    }
  }, 1000);
});

// Use the promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));`}</pre>
              <SnippetOutput lines={['Doing work...', '(after 1s)', 'Success result']} />
            </div>

            {/* Promise.resolve */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Instant Resolution</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Create already-fulfilled promise
const fulfilled = Promise.resolve(42);

fulfilled.then(value => {
  console.log("Value:", value);
});
// Output: Value: 42

// Create already-rejected promise
const rejected = Promise.reject(new Error("Oops"));

rejected.catch(error => {
  console.error("Error:", error.message);
});
// Output: Error: Oops

// Useful for returning promises
function getData() {
  if (cacheExists) {
    return Promise.resolve(cachedData);
  }
  return fetch('/api/data');
}`}</pre>
              <SnippetOutput lines={['Value: 42', 'Error: Oops']} />
            </div>

            {/* Wrapping Callbacks */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Wrapping Callback APIs</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Convert callback-based API to Promise
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Usage
console.log("Start");

delay(2000).then(() => {
  console.log("2 seconds later");
});

// Wrap Node.js style callbacks
function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Use like modern async API
readFilePromise('file.txt')
  .then(content => console.log(content))
  .catch(error => console.error(error));`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promise Chaining */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Promise Chaining
          </CardTitle>
          <CardDescription className="text-base">
            Chain multiple asynchronous operations sequentially
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Chaining Rules</AlertTitle>
            <AlertDescription>
              Each <code>.then()</code> returns a new Promise. Return a value to pass it to the next <code>.then()</code>. Return a Promise to wait for it before continuing. This creates a flat, readable chain instead of nested callbacks.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold">Sequential Async Operations</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Chain async operations
fetch('/api/user/1')
  .then(response => {
    console.log("Got response");
    return response.json(); // Returns Promise
  })
  .then(user => {
    console.log("User:", user.name);
    return fetch(\`/api/posts?userId=\${user.id}\`);
  })
  .then(response => {
    console.log("Got posts response");
    return response.json();
  })
  .then(posts => {
    console.log("Posts:", posts.length);
    return posts;
  })
  .catch(error => {
    // Catches errors from ANY step
    console.error("Failed:", error);
  })
  .finally(() => {
    console.log("Cleanup here");
  });

// Output:
// Got response
// User: Alice
// Got posts response
// Posts: 5
// Cleanup here`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold">Transforming Values</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Transform data through chain
Promise.resolve(5)
  .then(num => {
    console.log("Original:", num);
    return num * 2; // Return value
  })
  .then(num => {
    console.log("Doubled:", num);
    return num + 10; // Return value
  })
  .then(num => {
    console.log("Added:", num);
    return num / 5; // Return value
  })
  .then(result => {
    console.log("Final:", result);
  });

// Output:
// Original: 5
// Doubled: 10
// Added: 20
// Final: 4

// Each .then() receives value 
// from previous .then()`}</pre>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3 md:col-span-2">
              <h4 className="font-semibold">Error Propagation in Chains</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Error in any step goes to .catch()
Promise.resolve(10)
  .then(num => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then(num => {
    console.log("Step 2:", num);
    throw new Error("Something went wrong!"); // Error here!
  })
  .then(num => {
    console.log("Step 3:", num); // This is skipped
    return num + 5;
  })
  .then(num => {
    console.log("Step 4:", num); // This is also skipped
  })
  .catch(error => {
    console.error("Caught error:", error.message);
    return "recovered"; // Can recover and continue
  })
  .then(result => {
    console.log("After recovery:", result);
  });

// Output:
// Step 1: 10
// Step 2: 20
// Caught error: Something went wrong!
// After recovery: recovered`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error Handling */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/40 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Error Handling
          </CardTitle>
          <CardDescription className="text-base">
            Catch and handle errors in promise chains
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">.catch() Method</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// .catch() handles rejections
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // Handles network errors, parsing errors, etc.
    console.error("Error:", error.message);
    
    // Can check error types
    if (error.name === 'TypeError') {
      console.log("Network error");
    }
  });

// .catch() is shorthand for:
// .then(null, errorHandler)
promise.then(null, error => {
  console.error(error);
});`}</pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">.finally() Method</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// .finally() always runs
let isLoading = true;

fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    // Runs whether success or error
    isLoading = false;
    console.log("Loading complete");
    hideSpinner();
  });

// Use for cleanup
// - Hide loading spinners
// - Close connections
// - Release resources`}</pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Multiple .catch() Handlers</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Each .catch() only handles errors before it
Promise.resolve()
  .then(() => {
    throw new Error("Error 1");
  })
  .catch(error => {
    console.log("Caught:", error.message);
    // Can recover
    return "recovered";
  })
  .then(result => {
    console.log("Result:", result);
    throw new Error("Error 2");
  })
  .catch(error => {
    console.log("Caught:", error.message);
  });

// Output:
// Caught: Error 1
// Result: recovered
// Caught: Error 2`}</pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Re-throwing Errors</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Re-throw to propagate error
fetch('/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }
    return response.json();
  })
  .catch(error => {
    // Log it
    console.error("API Error:", error);
    
    // Then re-throw to let caller handle
    throw error;
  })
  .then(data => {
    // This won't run if error
    console.log(data);
  })
  .catch(error => {
    // Final error handler
    showErrorMessage(error.message);
  });`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promise Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Workflow className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Promise Combinators
          </CardTitle>
          <CardDescription className="text-base">
            Handle multiple promises with built-in methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Promise.all */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Promise.all()
              </h4>
              <p className="text-xs text-muted-foreground">
                Wait for <strong>all</strong> promises to fulfill. Rejects if <strong>any</strong> fails.
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Run multiple promises in parallel
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    // Process all responses
    return Promise.all([
      responses[0].json(),
      responses[1].json(),
      responses[2].json()
    ]);
  })
  .then(([userData, postsData, commentsData]) => {
    console.log("All data loaded!");
    return { userData, postsData, commentsData };
  })
  .catch(error => {
    // If ANY promise fails, catch triggers
    console.error("One request failed:", error);
  });

// Use case: Load dashboard data
Promise.all([
  fetchUser(),
  fetchSettings(),
  fetchNotifications()
]).then(([user, settings, notifications]) => {
  console.log("Data loaded:", { user, settings, notifications });
});`}</pre>
            </div>

            {/* Promise.race */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Promise.race()
              </h4>
              <p className="text-xs text-muted-foreground">
                Returns <strong>first</strong> settled promise (fulfilled or rejected).
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Race between promises
const timeout = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Timeout")), 5000);
});

const fetchData = fetch('/api/data');

Promise.race([fetchData, timeout])
  .then(response => response.json())
  .then(data => {
    console.log("Got data before timeout:", data);
  })
  .catch(error => {
    console.error("Request failed or timeout:", error);
  });

// Use case: Timeout pattern
function fetchWithTimeout(url, ms) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), ms)
    )
  ]);
}

fetchWithTimeout('/api/slow', 3000);`}</pre>
            </div>

            {/* Promise.allSettled */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Promise.allSettled()
              </h4>
              <p className="text-xs text-muted-foreground">
                Wait for <strong>all</strong> promises to settle. Never rejects.
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Get results of all promises
const promises = [
  fetch('/api/user/1'),
  fetch('/api/user/2'), // This might fail
  fetch('/api/user/3')
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`User \${index + 1}:\`, result.value);
      } else {
        console.error(\`User \${index + 1} failed:\`, 
                      result.reason);
      }
    });
  });

// Output:
// { status: 'fulfilled', value: Response }
// { status: 'rejected', reason: Error }
// { status: 'fulfilled', value: Response }

// Use when you want all results regardless of failures`}</pre>
            </div>

            {/* Promise.any */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Promise.any()
              </h4>
              <p className="text-xs text-muted-foreground">
                Returns <strong>first fulfilled</strong> promise. Ignores rejections.
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Get first successful result
const servers = [
  fetch('https://server1.com/api/data'),
  fetch('https://server2.com/api/data'),
  fetch('https://server3.com/api/data')
];

Promise.any(servers)
  .then(response => response.json())
  .then(data => {
    console.log("Got data from fastest server:", data);
  })
  .catch(error => {
    // Only if ALL fail
    console.error("All servers failed:", error);
  });

// Use case: Fallback servers
// Try multiple APIs, use first success
Promise.any([
  fetchFromPrimaryAPI(),
  fetchFromBackupAPI(),
  fetchFromCache()
]).then(data => console.log(data));`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in production code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sequential API Calls */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Sequential API Calls
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                When one API call depends on another's result
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Get user, then their posts, then comments
function loadUserContent(userId) {
  let userData;
  
  return fetch(\`/api/users/\${userId}\`)
    .then(response => response.json())
    .then(user => {
      userData = user;
      return fetch(\`/api/posts?userId=\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
      const postIds = posts.map(p => p.id).join(',');
      return fetch(\`/api/comments?postIds=\${postIds}\`);
    })
    .then(response => response.json())
    .then(comments => {
      return {
        user: userData,
        posts,
        comments
      };
    })
    .catch(error => {
      console.error("Failed to load content:", error);
      throw error;
    });
}

loadUserContent(123).then(data => {
  displayUserProfile(data);
});`}</pre>
            </div>

            {/* Parallel Loading */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Parallel Data Loading
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Load multiple independent resources simultaneously
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Load dashboard data in parallel
function loadDashboard() {
  // Start all requests simultaneously
  return Promise.all([
    fetch('/api/user/me'),
    fetch('/api/stats'),
    fetch('/api/notifications')
  ])
  .then(([userRes, statsRes, notifRes]) => {
    // Parse all responses
    return Promise.all([
      userRes.json(),
      statsRes.json(),
      notifRes.json()
    ]);
  })
  .then(([user, stats, notifications]) => {
    // Render dashboard
    return {
      user,
      stats,
      notifications,
      loadTime: Date.now()
    };
  })
  .catch(error => {
    console.error("Dashboard load failed:", error);
    return null;
  });
}

// Much faster than sequential!
// 3 requests in parallel = ~1 second
// 3 sequential requests = ~3 seconds`}</pre>
            </div>

            {/* Retry Logic */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Retry with Exponential Backoff
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Automatically retry failed requests with delays
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Retry failed API calls with exponential backoff
function fetchWithRetry(url, maxRetries = 3, attempt = 0) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      return response.json();
    })
    .catch(error => {
      const isLastAttempt = attempt >= maxRetries - 1;
      
      if (isLastAttempt) {
        throw error;
      }
      
      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, attempt) * 1000;
      console.log(\`Retry \${attempt + 1} after \${delay}ms\`);
      
      return new Promise(resolve => 
        setTimeout(resolve, delay)
      ).then(() => fetchWithRetry(url, maxRetries, attempt + 1));
    });
}

// Usage
fetchWithRetry('/api/unreliable-endpoint')
  .then(data => console.log("Success:", data))
  .catch(error => console.error("All retries failed:", error));`}</pre>
            </div>

            {/* Timeout Pattern */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Request Timeout
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Cancel slow requests after a time limit
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Add timeout to any promise
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(\`Timeout after \${ms}ms\`));
    }, ms);
  });
  
  return Promise.race([promise, timeout]);
}

// Usage
withTimeout(fetch('/api/slow-endpoint'), 5000)
  .then(response => response.json())
  .then(data => {
    console.log("Got data:", data);
  })
  .catch(error => {
    if (error.message.includes('Timeout')) {
      console.error("Request took too long");
      showTimeoutMessage();
    } else {
      console.error("Request failed:", error);
    }
  });

// Reusable wrapper
function fetchWithTimeout(url, ms = 5000) {
  return withTimeout(fetch(url), ms);
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
            Write better promise-based code
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
                  <span>Always add .catch() to handle rejections</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promise.all() for independent parallel operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Return promises from .then() handlers to chain properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use .finally() for cleanup (hiding loaders, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Create promises for callback-based APIs</span>
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
                  <span>Forgetting .catch() - unhandled rejections crash apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Forgetting to return in .then() handlers</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Mixing callbacks and promises in the same code</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Using Promise constructor when not needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Nesting .then() calls (creates callback hell again)</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Modern JavaScript heavily relies on Promises. APIs like <code>fetch()</code>, File API, and many libraries return promises. Master promises to write clean, maintainable asynchronous code. Promises are the foundation of async/await syntax, which is covered in a separate topic.
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
              Hands-on Playground
            </CardTitle>
            <CardDescription className="text-base">
              Launch the interactive playground to experiment with promises, chaining, error handling, and Promise methods.
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
              The console output demonstrates promise creation, chaining, and Promise.all combinator in action.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
