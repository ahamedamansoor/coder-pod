'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  Zap,
  AlertTriangle,
  Code2,
  GitCompare,
  Network,
  Clock,
  RefreshCw,
  ShieldAlert,
  TrendingUp,
  FileCode,
  Rocket,
  Loader2,
} from 'lucide-react';

interface JavaScriptAsyncAwaitProps {
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
  <title>Async/Await Demo</title>
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
    <h1>⚡ Async/Await</h1>
    <p>Open the browser console to see async/await in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🚀 Async/Await Demo\\n");

// Helper: Simulated API call
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User\${id}\`, email: \`user\${id}@example.com\` });
    }, 1000);
  });
}

// 1. Basic async/await
console.log("1. BASIC ASYNC/AWAIT:");
async function loadUser() {
  console.log("Loading...");
  const user = await fetchUser(1);
  console.log("✅ Loaded:", user.name);
  return user;
}

loadUser();

// 2. Sequential vs Parallel
console.log("\\n2. SEQUENTIAL VS PARALLEL:");

async function sequential() {
  const start = Date.now();
  const user1 = await fetchUser(1); // Wait 1s
  const user2 = await fetchUser(2); // Wait 1s
  const time = Date.now() - start;
  console.log(\`Sequential: \${time}ms\`);
}

async function parallel() {
  const start = Date.now();
  const [user1, user2] = await Promise.all([
    fetchUser(1), // Both start together
    fetchUser(2)
  ]);
  const time = Date.now() - start;
  console.log(\`Parallel: \${time}ms\`);
}

setTimeout(() => {
  sequential();
  setTimeout(() => parallel(), 2500);
}, 1500);

// 3. Error handling
console.log("\\n3. ERROR HANDLING:");
async function handleErrors() {
  try {
    const result = await Promise.reject("Something went wrong");
  } catch (error) {
    console.log("❌ Caught:", error);
  } finally {
    console.log("✅ Cleanup complete");
  }
}

setTimeout(() => handleErrors(), 5500);

console.log("\\n💡 Watch async operations execute!");`;

// Animated Async/Await Component
const AnimatedAsyncAwait = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [executionMode, setExecutionMode] = useState<'sequential' | 'parallel'>('sequential');

  const steps = [
    { name: 'fetchUser', duration: 1500, result: '{ id: 1, name: "Alice" }', color: 'from-blue-500 to-cyan-500' },
    { name: 'fetchOrders', duration: 1200, result: '[Order1, Order2]', color: 'from-purple-500 to-pink-500' },
    { name: 'fetchDetails', duration: 1000, result: '{ total: $150 }', color: 'from-emerald-500 to-green-500' },
  ];

  const runSequential = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep(0);
    setActiveSteps([]);
    setCompletedSteps([]);
    setOutput([]);
    setExecutionMode('sequential');

    setOutput(['⏱️ Starting async function...', '→ await fetchUser()']);

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      setActiveSteps([i]);
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));
      
      setActiveSteps([]);
      setCompletedSteps(prev => [...prev, i]);
      setOutput(prev => [...prev, `✓ ${steps[i].name}: ${steps[i].result}`]);
      
      if (i < steps.length - 1) {
        setOutput(prev => [...prev, `→ await ${steps[i + 1].name}()`]);
      }
      
      await new Promise(resolve => setTimeout(resolve, 400));
    }

    setOutput(prev => [...prev, '✅ All operations complete!']);
    setIsAnimating(false);
  };

  const runParallel = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep(0);
    setActiveSteps([0, 1, 2]); // All 3 active at once!
    setCompletedSteps([]);
    setOutput([]);
    setExecutionMode('parallel');

    setOutput(['⏱️ Starting async function...', '→ Promise.all([fetchUser(), fetchOrders(), fetchDetails()])']);
    
    // Start all at once
    const promises = steps.map(async (step, i) => {
      await new Promise(resolve => setTimeout(resolve, step.duration));
      setCompletedSteps(prev => [...prev, i]);
      setActiveSteps(prev => prev.filter(idx => idx !== i)); // Remove from active when done
      setOutput(prev => [...prev, `✓ ${step.name}: ${step.result}`]);
    });

    await Promise.all(promises);
    setOutput(prev => [...prev, '✅ All operations complete (in parallel)!']);
    setIsAnimating(false);
  };

  const reset = () => {
    setCurrentStep(0);
    setActiveSteps([]);
    setCompletedSteps([]);
    setIsAnimating(false);
    setOutput([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Rocket className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
          Animated Async/Await Execution
        </CardTitle>
        <CardDescription className="text-base">
          Watch how async/await executes sequentially vs parallel
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Visual Steps */}
        <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 rounded-xl border-2 border-blue-200/50 dark:border-blue-800/30">
          <div className="flex items-center justify-center gap-6">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-24 h-24 rounded-lg border-2 flex flex-col items-center justify-center transition-all duration-500 ${
                      activeSteps.includes(index)
                        ? `bg-gradient-to-br ${step.color} text-white border-white shadow-xl scale-110 animate-pulse`
                        : completedSteps.includes(index)
                        ? `bg-gradient-to-br ${step.color} text-white border-white opacity-70`
                        : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 opacity-40'
                    }`}
                  >
                    {completedSteps.includes(index) ? (
                      <CheckCircle2 className="w-8 h-8 mb-1" />
                    ) : activeSteps.includes(index) ? (
                      <Loader2 className="w-8 h-8 mb-1 animate-spin" />
                    ) : (
                      <Clock className="w-8 h-8 mb-1" />
                    )}
                    <span className="text-xs font-bold">{step.name}()</span>
                  </div>
                  <Badge className="mt-2 text-xs">{step.duration}ms</Badge>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center">
                    <ArrowRight className={`w-6 h-6 ${
                      executionMode === 'sequential'
                        ? completedSteps.includes(index) ? 'text-blue-500' : 'text-gray-400'
                        : 'text-purple-500'
                    } transition-colors duration-500`} />
                    {executionMode === 'parallel' && (
                      <span className="text-[10px] text-purple-600 dark:text-purple-400 mt-1">parallel</span>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Execution Mode Indicator */}
          <div className="mt-6 p-3 rounded-lg border text-center">
            <Badge className={`${
              executionMode === 'sequential' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' 
                : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30'
            }`}>
              {executionMode === 'sequential' ? '→ Sequential (one after another)' : '⚡ Parallel (all at once)'}
            </Badge>
          </div>
        </div>

        {/* Output Console */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Console Output</h4>
          <div className="min-h-[160px] p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
            {output.length === 0 ? (
              <div className="text-slate-500">Click a button to see async/await execution...</div>
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

        {/* Code Examples */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border">
            <h5 className="text-xs font-semibold mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Sequential (await each)
            </h5>
            <pre className="text-[10px] font-mono text-slate-700 dark:text-slate-300">
{`async function loadData() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  const details = await fetchDetails();
  return { user, orders, details };
}
// Total time: 1500 + 1200 + 1000 = 3700ms`}</pre>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border">
            <h5 className="text-xs font-semibold mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Parallel (Promise.all)
            </h5>
            <pre className="text-[10px] font-mono text-slate-700 dark:text-slate-300">
{`async function loadData() {
  const [user, orders, details] = 
    await Promise.all([
      fetchUser(),
      fetchOrders(),
      fetchDetails()
    ]);
  return { user, orders, details };
}
// Total time: max(1500, 1200, 1000) = 1500ms`}</pre>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t flex-wrap">
          <Button
            onClick={runSequential}
            disabled={isAnimating}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50"
          >
            {isAnimating && executionMode === 'sequential' ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4 mr-2" />
            )}
            Run Sequential
          </Button>
          <Button
            onClick={runParallel}
            disabled={isAnimating}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 disabled:opacity-50"
          >
            {isAnimating && executionMode === 'parallel' ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Zap className="w-4 h-4 mr-2" />
            )}
            Run Parallel
          </Button>
          <Button onClick={reset} variant="outline" disabled={isAnimating}>
            Reset
          </Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Sequential vs Parallel</AlertTitle>
          <AlertDescription>
            <strong className="text-blue-600 dark:text-blue-400">Sequential</strong> (using separate await statements) waits for each operation to complete before starting the next. <strong className="text-purple-600 dark:text-purple-400">Parallel</strong> (using Promise.all) starts all operations at once and waits for all to complete. Use parallel when operations don't depend on each other for faster execution!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptAsyncAwait({ onOpenWebPlayground }: JavaScriptAsyncAwaitProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript · Asynchronous Programming"
        title="Async/Await"
        description="Write clean, readable asynchronous code with async functions and the await keyword - the modern way to handle promises in JavaScript."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Async/Await?
          </CardTitle>
          <CardDescription className="text-base">
            Async/await is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 3-Column Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Cleaner Syntax</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Write async code that looks synchronous - no more .then() chains
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">ES2017</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Better Error Handling</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Use try/catch blocks for handling errors - just like synchronous code
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">try/catch</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Built on Promises</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Still uses promises under the hood - fully compatible with existing code
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Compatible</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Use Async/Await?</AlertTitle>
            <AlertDescription>
              Async/await eliminates "callback hell" and makes asynchronous code easier to read, write, and debug. It's the modern standard for handling async operations in JavaScript and is widely adopted in production code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The Anatomy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileCode className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The Anatomy of Async/Await
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the two keywords that make async/await work
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* async keyword */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                The <code>async</code> Keyword
              </h4>
              <p className="text-xs text-muted-foreground">
                Declares a function as asynchronous - always returns a Promise
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Regular function
function getData() {
  return "data";
}

// Async function
async function getDataAsync() {
  return "data";
}

console.log(getData());
// Output: "data"

console.log(getDataAsync());
// Output: Promise { "data" }`}</pre>
              <Alert className="mt-3">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Key Point</AlertTitle>
                <AlertDescription>
                  <code>async</code> functions <strong>automatically</strong> wrap return values in a resolved Promise
                </AlertDescription>
              </Alert>
            </div>

            {/* await keyword */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                The <code>await</code> Keyword
              </h4>
              <p className="text-xs text-muted-foreground">
                Pauses function execution until a Promise resolves or rejects
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function fetchData() {
  console.log("1. Start");
  
  // Wait for promise to resolve
  const result = await fetch('/api/data');
  
  console.log("2. Done");
  return result;
}

fetchData();
console.log("3. After call");

// Output order:
// 1. Start
// 3. After call
// 2. Done (after fetch completes)`}</pre>
              <Alert className="mt-3">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  <code>await</code> can <strong>only</strong> be used inside <code>async</code> functions
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Syntax & Usage
          </CardTitle>
          <CardDescription className="text-base">
            Step-by-step examples showing how to use async/await
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Simple async function */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">1. Creating an Async Function</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Regular function declaration
async function loadUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user;
}

// Arrow function
const loadPost = async (id) => {
  const response = await fetch(\`/api/posts/\${id}\`);
  const post = await response.json();
  return post;
};

// Usage
const user = await loadUser(123);
console.log(user.name);`}</pre>
            <SnippetOutput lines={[
              '{ id: 123, name: "Alice", email: "alice@example.com" }',
              'Alice'
            ]} />
          </div>

          {/* Example 2: Multiple await calls */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">2. Multiple Await Calls (Sequential)</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadUserAndPosts(userId) {
  console.log("Fetching user...");
  const user = await fetch(\`/api/users/\${userId}\`).then(r => r.json());
  console.log("User loaded!");
  
  console.log("Fetching posts...");
  const posts = await fetch(\`/api/posts?user=\${userId}\`).then(r => r.json());
  console.log("Posts loaded!");
  
  return { user, posts };
}

// Usage
const data = await loadUserAndPosts(1);
console.log(\`Found \${data.posts.length} posts\`);`}</pre>
            <SnippetOutput lines={[
              'Fetching user...',
              'User loaded!',
              'Fetching posts...',
              'Posts loaded!',
              'Found 5 posts',
              '',
              '// Note: Executes one after another (sequential)'
            ]} />
          </div>

          {/* Example 3: Parallel execution */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">3. Parallel Execution with Promise.all()</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadAllData(userId) {
  console.log("Fetching all data...");
  
  // Start both requests at the same time
  const [user, posts] = await Promise.all([
    fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    fetch(\`/api/posts?user=\${userId}\`).then(r => r.json())
  ]);
  
  console.log("All data loaded!");
  return { user, posts };
}

// Usage
const startTime = Date.now();
const data = await loadAllData(1);
const duration = Date.now() - startTime;
console.log(\`Loaded in \${duration}ms\`);`}</pre>
            <SnippetOutput lines={[
              'Fetching all data...',
              'All data loaded!',
              'Loaded in 520ms',
              '',
              '// Much faster! Both requests run in parallel',
              '// Sequential would take ~1000ms'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Comparison: Promises vs Async/Await */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitCompare className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Promises vs Async/Await
          </CardTitle>
          <CardDescription className="text-base">
            Side-by-side comparison showing the syntax difference
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Promises */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">With Promises (.then)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">Traditional</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function getUserData(id) {
  return fetch(\`/api/user/\${id}\`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed');
      }
      return response.json();
    })
    .then(user => {
      console.log("User:", user.name);
      return fetch(\`/api/posts?userId=\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
      console.log("Posts:", posts.length);
      return posts;
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
}`}</pre>
            </div>

            {/* Async/Await */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">With Async/Await</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 text-xs">Modern</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function getUserData(id) {
  try {
    const response = await fetch(\`/api/user/\${id}\`);
    
    if (!response.ok) {
      throw new Error('Failed');
    }
    
    const user = await response.json();
    console.log("User:", user.name);
    
    const postsResponse = await fetch(\`/api/posts?userId=\${user.id}\`);
    const posts = await postsResponse.json();
    console.log("Posts:", posts.length);
    
    return posts;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}`}</pre>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Benefits of Async/Await</AlertTitle>
            <AlertDescription>
              ✅ More readable - looks like synchronous code<br/>
              ✅ Easier debugging - better stack traces<br/>
              ✅ Simpler error handling - use try/catch<br/>
              ✅ Better variable scope - no nested callbacks
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Sequential vs Parallel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Sequential vs Parallel Execution
          </CardTitle>
          <CardDescription className="text-base">
            Understanding when operations run one-by-one vs simultaneously - critical for performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Performance Critical!</AlertTitle>
            <AlertDescription>
              One of the most common mistakes: running independent operations sequentially when they could run in parallel. This can make your app 10x slower!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sequential (Slow) */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Sequential (Slow)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function loadDashboard() {
  // Each await waits for the previous one
  const user = await fetchUser();     // 500ms
  const posts = await fetchPosts();   // 500ms
  const comments = await fetchComments(); // 500ms
  
  return { user, posts, comments };
  // Total: 1500ms ⏱️
}`}</pre>
              <Badge className="bg-red-100 text-red-700 dark:bg-red-900/50 text-xs">1500ms total</Badge>
            </div>

            {/* Parallel (Fast) */}
            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Parallel (Fast)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function loadDashboard() {
  // All start at the same time!
  const [user, posts, comments] = await Promise.all([
    fetchUser(),     // All run together
    fetchPosts(),    // All run together
    fetchComments()  // All run together
  ]);
  
  return { user, posts, comments };
  // Total: 500ms ⚡
}`}</pre>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/50 text-xs">500ms total - 3x faster!</Badge>
            </div>
          </div>

          {/* When to use each */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold">Use Sequential When:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Second operation depends on first result</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Operations must happen in specific order</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Rate limiting requires delays between requests</span>
                </li>
              </ul>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Must be sequential
const user = await getUser(id);
const posts = await getPosts(user.id);`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold">Use Parallel When:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Operations are independent</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Order doesn't matter</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Performance is critical</span>
                </li>
              </ul>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Can run in parallel
const [user, stats, notifications] = 
  await Promise.all([
    getUser(id),
    getStats(),
    getNotifications()
  ]);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Async/Await Visualization */}
      <AnimatedAsyncAwait />

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Network className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in production applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Form Submission */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Real-World: Form Submission with Validation
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function handleFormSubmit(formData) {
  const submitButton = document.querySelector('#submit');
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  
  try {
    // Validate data
    const validation = await validateFormData(formData);
    if (!validation.isValid) {
      showErrors(validation.errors);
      return;
    }
    
    // Submit to API
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error(\`Server error: \${response.status}\`);
    }
    
    const result = await response.json();
    
    // Show success message
    showSuccessMessage("Form submitted successfully!");
    console.log("✅ Submission ID:", result.id);
    
    // Redirect after delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.href = '/success';
    
  } catch (error) {
    console.error("❌ Submission failed:", error.message);
    showErrorMessage(error.message);
    
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
}`}</pre>
            <SnippetOutput lines={[
              'Submitting...',
              '✅ Submission ID: abc-123',
              'Form submitted successfully!',
              '// Redirecting to /success page...'
            ]} />
          </div>

          {/* Example 2: Data Pipeline */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Real-World: Data Processing Pipeline
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function processUserData(userId) {
  console.log(\`Processing user \${userId}...\`);
  
  // Step 1: Fetch user and settings in parallel
  const [user, settings] = await Promise.all([
    fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    fetch(\`/api/settings/\${userId}\`).then(r => r.json())
  ]);
  
  console.log("✅ User data fetched");
  
  // Step 2: Enrich user data (depends on user)
  const enrichedUser = await enrichUserData(user);
  console.log("✅ User data enriched");
  
  // Step 3: Process analytics in parallel
  const [activityLog, recommendations] = await Promise.all([
    generateActivityLog(enrichedUser),
    generateRecommendations(enrichedUser, settings)
  ]);
  
  console.log("✅ Analytics processed");
  
  // Step 4: Save everything
  await Promise.all([
    saveToDatabase(enrichedUser),
    saveActivityLog(activityLog),
    cacheRecommendations(recommendations)
  ]);
  
  console.log("✅ All data saved");
  
  return {
    user: enrichedUser,
    activityLog,
    recommendations,
    settings
  };
}

// Usage
try {
  const result = await processUserData(123);
  console.log("Pipeline complete:", result);
} catch (error) {
  console.error("Pipeline failed:", error);
  rollbackChanges();
}`}</pre>
            <SnippetOutput lines={[
              'Processing user 123...',
              '✅ User data fetched',
              '✅ User data enriched',
              '✅ Analytics processed',
              '✅ All data saved',
              'Pipeline complete: {...}'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Common Mistakes & How to Avoid Them
          </CardTitle>
          <CardDescription className="text-base">
            Pitfalls that catch developers and how to fix them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mistake 1 */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Forgetting await</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function getData() {
  // Missing await!
  const data = fetch('/api/data');
  console.log(data);
  // Outputs: Promise { <pending> }
  // NOT the actual data!
}`}</pre>
            </div>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Correct</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function getData() {
  // Use await!
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
  // Outputs: { ... actual data ... }
}`}</pre>
            </div>

            {/* Mistake 2 */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Using await in loops (slow)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function getUsers(ids) {
  const users = [];
  // Sequential! Very slow!
  for (const id of ids) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
  // Takes 5s for 5 users
}`}</pre>
            </div>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Correct (parallel)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function getUsers(ids) {
  // Parallel! Much faster!
  const users = await Promise.all(
    ids.map(id => fetchUser(id))
  );
  return users;
  // Takes 1s for 5 users
}`}</pre>
            </div>
          </div>

          <Alert className="mt-6">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Error Handling</AlertTitle>
            <AlertDescription>
              Error handling with async/await (try/catch/finally patterns, retry logic, etc.) is covered in detail in the <strong>Async Error Handling</strong> topic.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Latest Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Latest Features
          </CardTitle>
          <CardDescription className="text-base">
            Modern JavaScript async/await capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Top-level await */}
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Top-Level Await (ES2022)
            </h4>
            <p className="text-xs text-muted-foreground">
              Use await at the top level of modules - no async function wrapper needed
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// In a module file (e.g., config.js)
// OLD WAY - needed wrapper function
async function loadConfig() {
  const config = await fetch('/api/config').then(r => r.json());
  return config;
}
const config = await loadConfig();

// NEW WAY - top-level await (ES2022)
const config = await fetch('/api/config').then(r => r.json());
export default config;

// Also works for dynamic imports
const module = await import('./heavy-module.js');

// Conditional loading
const theme = await (
  userPrefersDark() 
    ? import('./dark-theme.js')
    : import('./light-theme.js')
);`}</pre>
            <Alert className="mt-3">
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Browser Support</AlertTitle>
              <AlertDescription>
                Top-level await works in ES modules only. Supported in all modern browsers (Chrome 89+, Firefox 89+, Safari 15+)
              </AlertDescription>
            </Alert>
          </div>

          {/* Async Iterators */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              for await...of (ES2018)
            </h4>
            <p className="text-xs text-muted-foreground">
              Iterate over async iterables - perfect for streams and paginated APIs
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Async generator function
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();
    
    if (data.items.length === 0) break;
    
    yield data.items;
    page++;
  }
}

// Use for await...of
async function loadAllPages() {
  for await (const items of fetchPages('/api/data')) {
    console.log(\`Processing \${items.length} items from page\`);
    processItems(items);
  }
  console.log("All pages processed!");
}

// Real-world: Reading file streams
async function processLargeFile(fileStream) {
  for await (const chunk of fileStream) {
    await processChunk(chunk);
    updateProgress();
  }
}`}</pre>
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
            Write better async/await code
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
                  <span>Use Promise.all() for independent parallel operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Return early from async functions when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive names for async functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Avoid mixing async/await with .then() unnecessarily</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Keep async functions focused and single-purpose</span>
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
                  <span>Don't forget await (you'll get a Promise, not the value)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use await in loops for independent operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't mix async/await with .then() chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't make every function async if it doesn't need to be</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore the return value of async functions</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Async/await is the modern standard for async code. Use it for cleaner, more maintainable code. Remember: every async function returns a Promise, and await only works inside async functions. Master parallel vs sequential execution for better performance!
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
              Run live examples to see async/await in action
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
              The console output demonstrates async/await basics, sequential vs parallel execution, and error handling.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
