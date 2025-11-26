'use client';

import React from 'react';
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
  ListOrdered,
  GitBranch,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

interface JavaScriptTaskQueueProps {
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
  <title>Task Queue Demo</title>
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
    <h1>📋 Task Queue</h1>
    <p>Open the browser console to see task execution order!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🚀 Task Queue Demo\\n");

// Example 1: Microtask vs Macrotask Priority
console.log("1. PRIORITY DEMONSTRATION:");
console.log("Start");

setTimeout(() => console.log("setTimeout (Macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise.then (Microtask)"));
queueMicrotask(() => console.log("queueMicrotask (Microtask)"));

console.log("End");

// Example 2: Multiple Microtasks
setTimeout(() => {
  console.log("\\n2. MULTIPLE MICROTASKS:");
  
  Promise.resolve().then(() => console.log("Promise 1"));
  Promise.resolve().then(() => console.log("Promise 2"));
  Promise.resolve().then(() => console.log("Promise 3"));
  
  setTimeout(() => console.log("Next macrotask"), 0);
}, 1000);

// Example 3: Chained Microtasks
setTimeout(() => {
  console.log("\\n3. CHAINED MICROTASKS:");
  
  Promise.resolve()
    .then(() => {
      console.log("Promise chain 1");
      return Promise.resolve();
    })
    .then(() => console.log("Promise chain 2"))
    .then(() => console.log("Promise chain 3"));
    
}, 2000);

console.log("\\n💡 Watch the execution order!");`;

export default function JavaScriptTaskQueue({ onOpenWebPlayground }: JavaScriptTaskQueueProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ListOrdered}
        category="JavaScript · Asynchronous Programming"
        title="Task Queue (Micro & Macro)"
        description="Master the task queue system - understand how JavaScript prioritizes and executes asynchronous tasks to write predictable, efficient code."
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is the Task Queue?
          </CardTitle>
          <CardDescription className="text-base">
            The task queue is where JavaScript stores asynchronous operations waiting to be executed. Understanding how tasks are prioritized is crucial for writing predictable async code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of the task queue like a restaurant with two service lanes: a VIP express lane (microtasks) and a regular lane (macrotasks). The express lane always gets served first, no matter how long the regular line is!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-sm">Microtasks</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                High-priority tasks that run immediately after the current script
              </p>
              <Badge className="mt-2 bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 text-xs">Priority 1</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Macrotasks</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Lower-priority tasks that run after all microtasks are done
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Priority 2</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Event Loop</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Manages task execution: sync → ALL micros → ONE macro
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Orchestrator</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The Critical Rule</AlertTitle>
            <AlertDescription>
              JavaScript processes <strong>ALL microtasks</strong> before moving to the next macrotask. This is why Promises (microtasks) always execute before setTimeout (macrotasks), even with setTimeout(..., 0).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Microtask Queue Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Microtask Queue (High Priority)
          </CardTitle>
          <CardDescription className="text-base">
            Microtasks execute immediately after the current script completes, before any macrotasks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>What Creates Microtasks?</AlertTitle>
            <AlertDescription>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-amber-100 dark:bg-amber-900/30 px-1 py-0.5 rounded">Promise.then/catch/finally</code>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-amber-100 dark:bg-amber-900/30 px-1 py-0.5 rounded">queueMicrotask()</code>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-amber-100 dark:bg-amber-900/30 px-1 py-0.5 rounded">MutationObserver</code>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-amber-100 dark:bg-amber-900/30 px-1 py-0.5 rounded">async/await</code> (under the hood uses Promises)
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Promise.then() Example</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log("1. Start");

Promise.resolve()
  .then(() => console.log("2. Microtask"));

console.log("3. End");

// Output order:
// 1. Start
// 3. End
// 2. Microtask`}</pre>
              <SnippetOutput lines={['1. Start', '3. End', '2. Microtask']} />
              <p className="text-xs text-muted-foreground">
                The Promise callback runs immediately after the synchronous code completes.
              </p>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">queueMicrotask() Example</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log("1. Start");

queueMicrotask(() => {
  console.log("2. Queued microtask");
});

console.log("3. End");

// Output order:
// 1. Start
// 3. End
// 2. Queued microtask`}</pre>
              <SnippetOutput lines={['1. Start', '3. End', '2. Queued microtask']} />
              <p className="text-xs text-muted-foreground">
                Explicitly queue a microtask without creating a Promise.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Macrotask Queue Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Timer className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Macrotask Queue (Low Priority)
          </CardTitle>
          <CardDescription className="text-base">
            Macrotasks execute one at a time, after ALL microtasks are processed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>What Creates Macrotasks?</AlertTitle>
            <AlertDescription>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 py-0.5 rounded">setTimeout()</code>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 py-0.5 rounded">setInterval()</code>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 py-0.5 rounded">setImmediate()</code> (Node.js only)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 py-0.5 rounded">I/O operations</code>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 py-0.5 rounded">UI rendering</code>
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">setTimeout() Example</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log("1. Start");

setTimeout(() => {
  console.log("4. Macrotask");
}, 0);

Promise.resolve()
  .then(() => console.log("3. Microtask"));

console.log("2. End");

// Output order:
// 1. Start
// 2. End
// 3. Microtask
// 4. Macrotask`}</pre>
              <SnippetOutput lines={['1. Start', '2. End', '3. Microtask', '4. Macrotask']} />
              <p className="text-xs text-muted-foreground">
                Even with timeout of 0ms, setTimeout executes AFTER all microtasks.
              </p>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">setInterval() Example</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Interval:", count);
  
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Stopped");
  }
}, 1000);

// Output:
// Interval: 1 (after 1s)
// Interval: 2 (after 2s)
// Interval: 3 (after 3s)
// Stopped`}</pre>
              <SnippetOutput lines={['Interval: 1', 'Interval: 2', 'Interval: 3', 'Stopped']} />
              <p className="text-xs text-muted-foreground">
                Each interval callback is a separate macrotask.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Priority Demonstration */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-purple-50/60 dark:from-amber-950/10 dark:to-purple-950/10 border border-amber-200/40 dark:border-amber-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Priority Demonstration
          </CardTitle>
          <CardDescription className="text-base">
            See how microtasks always execute before macrotasks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-4">
            <h4 className="font-semibold">Complex Priority Example</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log("1. Sync start");

setTimeout(() => console.log("6. Macrotask 1"), 0);

Promise.resolve()
  .then(() => {
    console.log("3. Microtask 1");
    setTimeout(() => console.log("7. Macrotask 2"), 0);
  })
  .then(() => console.log("4. Microtask 2"));

queueMicrotask(() => console.log("5. Microtask 3"));

console.log("2. Sync end");

// Execution order:
// 1. Sync start
// 2. Sync end
// 3. Microtask 1 → ALL microtasks run
// 4. Microtask 2
// 5. Microtask 3
// 6. Macrotask 1 → ONE macrotask
// 7. Macrotask 2 → (next event loop cycle)`}</pre>
            <SnippetOutput lines={[
              '1. Sync start',
              '2. Sync end',
              '3. Microtask 1',
              '4. Microtask 2',
              '5. Microtask 3',
              '6. Macrotask 1',
              '7. Macrotask 2'
            ]} />
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Understanding the Flow</AlertTitle>
            <AlertDescription>
              <ol className="mt-2 space-y-2 text-sm list-decimal list-inside">
                <li>All <strong>synchronous code</strong> runs first</li>
                <li>Process <strong>ALL microtasks</strong> (including newly added ones)</li>
                <li>Process <strong>ONE macrotask</strong></li>
                <li>Repeat from step 2</li>
              </ol>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Network className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Use Cases
          </CardTitle>
          <CardDescription className="text-base">
            Practical examples showing when to use microtasks vs macrotasks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Use Case 1 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                State Updates Before Render
              </h4>
              <p className="text-xs text-muted-foreground">
                Use microtasks when you need to update state before the next render
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Batch multiple updates
function batchUpdates() {
  updateState1();
  updateState2();
  
  // Ensure render happens after all updates
  queueMicrotask(() => {
    render(); // All states updated
  });
}

// React's setState batching uses
// a similar microtask pattern`}</pre>
            </div>

            {/* Use Case 2 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-blue-600" />
                Debouncing User Input
              </h4>
              <p className="text-xs text-muted-foreground">
                Use macrotasks for delayed operations like debouncing
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    // Use setTimeout (macrotask)
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce((query) => {
  fetchResults(query);
}, 300);`}</pre>
            </div>

            {/* Use Case 3 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Workflow className="w-5 h-5 text-purple-600" />
                Breaking Up Long Tasks
              </h4>
              <p className="text-xs text-muted-foreground">
                Use macrotasks to yield to the browser between chunks
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function processLargeArray(items) {
  const chunkSize = 100;
  let index = 0;
  
  function processChunk() {
    const chunk = items.slice(
      index, 
      index + chunkSize
    );
    
    chunk.forEach(processItem);
    index += chunkSize;
    
    if (index < items.length) {
      // Use setTimeout to yield
      setTimeout(processChunk, 0);
    }
  }
  
  processChunk();
}`}</pre>
            </div>

            {/* Use Case 4 */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                Error Handling Timing
              </h4>
              <p className="text-xs text-muted-foreground">
                Understanding when errors are caught in different queues
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`try {
  // This error is NOT caught
  setTimeout(() => {
    throw new Error("Macrotask error");
  }, 0);
} catch (e) {
  console.log("Not caught!");
}

// Use Promise for catchable errors
Promise.resolve()
  .then(() => {
    throw new Error("Microtask error");
  })
  .catch(e => {
    console.log("Caught:", e.message);
  });`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/40 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Common Mistakes & Pitfalls
          </CardTitle>
          <CardDescription className="text-base">
            Avoid these common errors when working with task queues
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mistake 1 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-rose-700 dark:text-rose-300">❌ Infinite Microtask Loop</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30">Dangerous</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// NEVER DO THIS!
function infiniteLoop() {
  Promise.resolve()
    .then(() => {
      console.log("Running...");
      infiniteLoop(); // Creates new microtask
    });
}

infiniteLoop();
// Blocks the entire browser!
// Macrotasks NEVER run`}</pre>
              <p className="text-xs text-rose-700 dark:text-rose-300">
                ⚠️ Continuously adding microtasks prevents macrotasks from ever running, freezing the UI.
              </p>
            </div>

            {/* Solution 1 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">✅ Use Macrotask Instead</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Safe</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Use setTimeout to yield
function safeLoop(count = 0) {
  console.log("Running:", count);
  
  if (count < 1000) {
    // Yields to browser every iteration
    setTimeout(() => safeLoop(count + 1), 0);
  }
}

safeLoop();
// UI stays responsive
// Other tasks can run between iterations`}</pre>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                ✓ Using setTimeout allows the browser to process UI updates and other tasks.
              </p>
            </div>

            {/* Mistake 2 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-rose-700 dark:text-rose-300">❌ Assuming setTimeout(0) Runs Immediately</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30">Common</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`let value = 0;

setTimeout(() => {
  value = 100;
}, 0);

console.log(value); // 0, not 100!

// setTimeout is a macrotask
// Runs AFTER current script completes`}</pre>
              <p className="text-xs text-rose-700 dark:text-rose-300">
                ⚠️ setTimeout(0) doesn't run immediately - it's scheduled as a macrotask.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">✅ Use Promise or queueMicrotask</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Better</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`let value = 0;

// Option 1: Promise (microtask)
Promise.resolve().then(() => {
  value = 100;
  console.log(value); // 100
});

// Option 2: queueMicrotask
queueMicrotask(() => {
  // Runs before next macrotask
  updateUI();
});`}</pre>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                ✓ Use microtasks when you need execution right after current script.
              </p>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Performance Tip</AlertTitle>
            <AlertDescription>
              Be careful with microtasks in hot code paths. Since ALL microtasks run before the next macrotask, adding too many can delay rendering and make your app feel sluggish.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Latest Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Latest Features & Modern APIs
          </CardTitle>
          <CardDescription className="text-base">
            New task queue features in modern JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Scheduler API (Experimental)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">New</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Priority-based task scheduling for better performance
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Prioritize tasks
scheduler.postTask(
  () => {
    updateCriticalUI();
  },
  { priority: 'user-blocking' }
);

scheduler.postTask(
  () => {
    logAnalytics();
  },
  { priority: 'background' }
);

// Priorities:
// - user-blocking (highest)
// - user-visible
// - background (lowest)`}</pre>
            </div>

            {/* Feature 2 */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">requestIdleCallback</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 text-xs">Stable</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Run tasks when browser is idle
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Run during idle time
requestIdleCallback((deadline) => {
  while (
    deadline.timeRemaining() > 0 &&
    tasks.length > 0
  ) {
    const task = tasks.shift();
    processTask(task);
  }
  
  if (tasks.length > 0) {
    // Schedule remaining tasks
    requestIdleCallback(callback);
  }
}, { timeout: 2000 });`}</pre>
            </div>

            {/* Feature 3 */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">AbortController with Timers</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 text-xs">Modern</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Cancel scheduled tasks gracefully
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const controller = new AbortController();

// Schedule with abort signal
setTimeout(() => {
  console.log("Task executed");
}, 1000, { signal: controller.signal });

// Cancel if needed
controller.abort();

// Also works with fetch
fetch(url, {
  signal: controller.signal
}).catch(err => {
  if (err.name === 'AbortError') {
    console.log('Request cancelled');
  }
});`}</pre>
            </div>

            {/* Feature 4 */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Performance Monitoring</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 text-xs">Essential</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Track task execution performance
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Measure task timing
const observer = new PerformanceObserver(
  (list) => {
    for (const entry of list.getEntries()) {
      console.log(\`\${entry.name}: \${entry.duration}ms\`);
    }
  }
);

observer.observe({ 
  entryTypes: ['measure', 'mark'] 
});

performance.mark('task-start');
// ... do work ...
performance.mark('task-end');
performance.measure(
  'task-duration',
  'task-start',
  'task-end'
);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Guidelines for working effectively with task queues
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Do This
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promises/async-await for async flow control</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Batch DOM updates using microtasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use queueMicrotask for immediate post-script execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Break up long tasks with setTimeout to yield to browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Monitor task performance in production</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600" />
                Avoid This
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't create infinite microtask loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't assume setTimeout(0) runs immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't queue too many microtasks in hot paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use callbacks when Promises are clearer</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore error handling in async code</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Golden Rule</AlertTitle>
            <AlertDescription>
              The event loop follows a simple pattern: <strong>Sync code → ALL microtasks → ONE macrotask → Repeat</strong>. Understanding this pattern is the key to writing predictable async JavaScript code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Interactive Playground
          </CardTitle>
          <CardDescription className="text-base">
            Experiment with task queue concepts in a live environment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => onOpenWebPlayground?.(playgroundHtml, '', playgroundJs)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
          >
            <Play className="w-4 h-4 mr-2" />
            Run in Playground
          </Button>
          <p className="text-sm text-muted-foreground">
            The console demonstrates execution order with microtasks and macrotasks. Try modifying the code to see how task priorities affect execution!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
