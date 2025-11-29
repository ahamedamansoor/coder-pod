'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Clock,
  Zap,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  AlertCircle,
  Timer,
  Cpu,
  RefreshCw,
  Code,
  Layers,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Rocket,
  GitBranch,
  Workflow,
  Activity,
  Network,
  Loader2,
  CheckCheck,
  AlertTriangle,
  Coffee,
  Gauge,
} from 'lucide-react';

interface JavaScriptJsAsyncProps {
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

const JavaScriptJsAsync: React.FC<JavaScriptJsAsyncProps> = ({ onOpenWebPlayground }) => {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Clock}
        category="JavaScript · Asynchronous Programming"
        title="Asynchronous JavaScript"
        description="Understand how JavaScript handles non-blocking operations - callbacks, promises, async/await, and the event loop."
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Asynchronous JavaScript?
          </CardTitle>
          <CardDescription className="text-base">
            Asynchronous programming allows JavaScript to perform long-running operations without blocking the main thread, keeping applications responsive and efficient.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of async as <strong>multitasking</strong>. While waiting for a slow operation (like fetching data from a server), JavaScript doesn't just sit idle—it continues executing other code. When the slow operation completes, JavaScript comes back to handle the result. This is crucial for creating smooth, responsive web applications!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Non-Blocking</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Code continues executing while waiting for async operations
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Responsive UI</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">API Calls</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Fetch data from servers without freezing the application
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Essential</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Performance</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Handle multiple operations simultaneously and efficiently
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Optimized</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The Key Insight</AlertTitle>
            <AlertDescription>
              JavaScript is <strong>single-threaded</strong>, meaning it has one call stack and executes one operation at a time. Async programming lets us handle time-consuming tasks (API calls, file reading, timers) without blocking the main thread, keeping apps responsive.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Synchronous vs Asynchronous */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Synchronous vs Asynchronous Code
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the fundamental difference between blocking and non-blocking execution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-amber-200/60 dark:border-amber-800/40 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 dark:from-amber-950/10 dark:to-yellow-950/10 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-500/80 dark:bg-amber-600/80 rounded-lg">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-amber-700 dark:text-amber-300">Real-World Analogy</h3>
                <p className="text-xs text-amber-600/70 dark:text-amber-400/70">Making coffee while waiting for toast</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Synchronous:</strong> You put bread in the toaster, stand there waiting for 3 minutes until it pops up, 
              then start making coffee. Total time: 6 minutes (3 for toast + 3 for coffee).
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Asynchronous:</strong> You put bread in the toaster, immediately start making coffee while the toast cooks. 
              Both finish around the same time. Total time: ~3 minutes!
            </p>
          </div>

          <Alert>
            <Cpu className="h-4 w-4" />
            <AlertTitle>JavaScript's Single Thread</AlertTitle>
            <AlertDescription>
              JavaScript runs on a <strong>single thread</strong>, meaning it has one call stack and executes one operation at a time. 
              Asynchronous programming lets us handle time-consuming tasks (like API calls, file reading, timers) without blocking 
              the main thread, keeping our apps responsive.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 rounded-xl border border-red-200/50 dark:border-red-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                Synchronous (Blocking)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Each line waits for previous to finish
console.log("1. Start");

// This blocks for 2 seconds
function wait2Seconds() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // Blocking! UI freezes
  }
}

console.log("2. Waiting...");
wait2Seconds(); // ⏸️ Everything stops here
console.log("3. Done!");

// Output:
// 1. Start
// 2. Waiting...
// (... 2 second freeze ...)
// 3. Done!`}</pre>
              <SnippetOutput
                lines={[
                  '1. Start',
                  '2. Waiting...',
                  '(... 2 second freeze ...)',
                  '3. Done!',
                ]}
              />
              <p className="text-xs text-muted-foreground mt-2">
                ❌ The UI freezes for 2 seconds. User can't interact with anything.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Asynchronous (Non-blocking)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Code continues without waiting
console.log("1. Start");

console.log("2. Setting timer...");
setTimeout(() => {
  console.log("3. Timer finished!");
}, 2000);

console.log("4. Keep working!");

// Output:
// 1. Start
// 2. Setting timer...
// 4. Keep working!    ← Immediate!
// (... 2 seconds later ...)
// 3. Timer finished!`}</pre>
              <SnippetOutput
                lines={[
                  '1. Start',
                  '2. Setting timer...',
                  '4. Keep working!    ← Immediate!',
                  '(... 2 seconds later ...)',
                  '3. Timer finished!',
                ]}
              />
              <p className="text-xs text-muted-foreground mt-2">
                ✅ UI stays responsive. User can continue interacting.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Async Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Common Asynchronous Operations
          </CardTitle>
          <CardDescription className="text-base">
            Real-world scenarios where async programming is essential
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Network className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">API Calls</h4>
                  <p className="text-sm text-muted-foreground mb-2">Fetching data from servers</p>
                  <code className="text-xs bg-white dark:bg-gray-900 px-2 py-1 rounded">fetch(), axios</code>
                  <div className="mt-2 text-xs text-muted-foreground">
                    ⏱️ Typical time: 100ms - 5s+
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <Timer className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">Timers</h4>
                  <p className="text-sm text-muted-foreground mb-2">Delayed execution</p>
                  <code className="text-xs bg-white dark:bg-gray-900 px-2 py-1 rounded">setTimeout(), setInterval()</code>
                  <div className="mt-2 text-xs text-muted-foreground">
                    ⏱️ Typical time: Custom
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-1">File Operations</h4>
                  <p className="text-sm text-muted-foreground mb-2">Reading/writing files</p>
                  <code className="text-xs bg-white dark:bg-gray-900 px-2 py-1 rounded">FileReader, File API</code>
                  <div className="mt-2 text-xs text-muted-foreground">
                    ⏱️ Typical time: 10ms - 10s+
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-3">
                <Loader2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Database Queries</h4>
                  <p className="text-sm text-muted-foreground mb-2">IndexedDB operations</p>
                  <code className="text-xs bg-white dark:bg-gray-900 px-2 py-1 rounded">IndexedDB API</code>
                  <div className="mt-2 text-xs text-muted-foreground">
                    ⏱️ Typical time: 1ms - 1s+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 1. Callbacks Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1️⃣ Callbacks - The Foundation
          </CardTitle>
          <CardDescription className="text-base">
            Functions passed as arguments to be executed later
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>What is a Callback?</AlertTitle>
            <AlertDescription>
              A <strong>callback</strong> is a function passed as an argument to another function, to be executed after an asynchronous operation completes.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-3">Simple Callback Example</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Basic callback pattern
function greet(name, callback) {
  console.log(\`Hello, \${name}!\`);
  callback(); // Execute the callback
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Pass sayGoodbye as a callback
greet("Alice", sayGoodbye);

// Output:
// Hello, Alice!
// Goodbye!`}</pre>
            <SnippetOutput lines={['Hello, Alice!', 'Goodbye!']} />
          </div>

          <div>
            <h4 className="font-semibold mb-3">Async Callback Example - setTimeout</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Simulating async operation
function fetchUserData(userId, callback) {
  console.log(\`Fetching user \${userId}...\`);
  
  // Simulate API call with setTimeout
  setTimeout(() => {
    const user = { id: userId, name: "John Doe" };
    callback(user); // Call callback with result
  }, 1000);
}

// Use the async function
fetchUserData(123, (user) => {
  console.log("User received:", user);
});

console.log("Request sent, continuing...");

// Output:
// Fetching user 123...
// Request sent, continuing...
// (... 1 second later ...)
// User received: { id: 123, name: "John Doe" }`}</pre>
            <SnippetOutput
              lines={[
                'Fetching user 123...',
                'Request sent, continuing...',
                '(... 1 second later ...)',
                'User received: { id: 123, name: "John Doe" }',
              ]}
            />
          </div>

          <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              The Problem: Callback Hell
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Nested callbacks become hard to read
getUserData(userId, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      getShippingInfo(details.shippingId, (shipping) => {
        console.log("Finally got shipping:", shipping);
        // 😵 Too many nested levels!
      });
    });
  });
});`}</pre>
            <p className="text-xs text-muted-foreground mt-2">
              ❌ This "pyramid of doom" is hard to read, maintain, and handle errors in.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 2. Promises Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCheck className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            2️⃣ Promises - Better Solution
          </CardTitle>
          <CardDescription className="text-base">
            Objects representing the eventual completion or failure of an async operation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>What is a Promise?</AlertTitle>
            <AlertDescription>
              A <strong>Promise</strong> is an object that represents a value that may not be available yet, but will be resolved at some point in the future. It can be in one of three states: <strong>pending</strong>, <strong>fulfilled</strong>, or <strong>rejected</strong>.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <Loader2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2" />
              <p className="text-sm font-semibold mb-1">⏳ Pending</p>
              <p className="text-xs text-muted-foreground">Initial state, operation ongoing</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <p className="text-sm font-semibold mb-1">✅ Fulfilled</p>
              <p className="text-xs text-muted-foreground">Operation completed successfully</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mb-2" />
              <p className="text-sm font-semibold mb-1">❌ Rejected</p>
              <p className="text-xs text-muted-foreground">Operation failed with error</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Creating a Promise</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate async operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operation successful!"); // Fulfill
    } else {
      reject("Operation failed!"); // Reject
    }
  }, 1000);
});

// Use the promise
myPromise
  .then((result) => {
    console.log(result); // "Operation successful!"
  })
  .catch((error) => {
    console.error(error);
  });`}</pre>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Promise Chaining</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Each .then() returns a new promise
fetch('https://api.example.com/user/1')
  .then((response) => {
    console.log("Got response");
    return response.json(); // Return promise
  })
  .then((data) => {
    console.log("Parsed JSON:", data);
    return fetch(\`https://api.example.com/posts/\${data.id}\`);
  })
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log("User posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error); // Catches any error
  })
  .finally(() => {
    console.log("Done!"); // Always executes
  });`}</pre>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Benefits of Promises
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Avoid callback hell with flat chaining</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Better error handling with .catch()</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Composable with Promise.all(), Promise.race()</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 3. Async/Await Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            3️⃣ Async/Await - Modern Best Practice
          </CardTitle>
          <CardDescription className="text-base">
            Write asynchronous code that looks synchronous
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>What is Async/Await?</AlertTitle>
            <AlertDescription>
              <strong>async/await</strong> is syntactic sugar built on top of Promises, making asynchronous code look and behave like synchronous code. It makes code easier to read and write.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-3">Basic Async/Await Syntax</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Async function always returns a Promise
async function fetchUser() {
  // await pauses execution until Promise resolves
  const response = await fetch('https://api.example.com/user/1');
  const data = await response.json();
  return data; // Automatically wrapped in Promise
}

// Call async function
fetchUser()
  .then((user) => console.log(user))
  .catch((error) => console.error(error));

// Or use await (inside another async function)
async function main() {
  const user = await fetchUser();
  console.log(user);
}

main();`}</pre>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Error Handling with Try/Catch</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function getUserData(userId) {
  try {
    // Try to fetch user
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    console.log("User:", user);
    return user;
    
  } catch (error) {
    // Catch any errors
    console.error("Failed to fetch user:", error);
    return null;
  } finally {
    // Always runs
    console.log("Fetch attempt completed");
  }
}

// Use it
getUserData(123);`}</pre>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Parallel vs Sequential Execution</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 rounded-xl border border-red-200/50 dark:border-red-800/30">
                <h5 className="font-semibold mb-2 text-sm">❌ Sequential (Slow)</h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-[10px] overflow-x-auto">
{`// Each await waits for previous
async function slow() {
  const user = await fetchUser();    // 1s
  const posts = await fetchPosts();  // 1s
  const comments = await fetchComments(); // 1s
  // Total: 3 seconds
}`}</pre>
              </div>

              <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
                <h5 className="font-semibold mb-2 text-sm">✅ Parallel (Fast)</h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-[10px] overflow-x-auto">
{`// Start all at once
async function fast() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  // Total: 1 second (all run together)
}`}</pre>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Why Use Async/Await?
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Readable:</strong> Looks like synchronous code</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Debugging:</strong> Easier to debug with standard try/catch</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Error handling:</strong> Use familiar try/catch blocks</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Maintainable:</strong> Cleaner code structure</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Promise Combinators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Workflow className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Promise Combinators
          </CardTitle>
          <CardDescription className="text-base">
            Handle multiple promises efficiently
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Promise.all()
              </h4>
              <p className="text-xs text-muted-foreground mb-3">Waits for <strong>all</strong> promises to resolve. Rejects if <strong>any</strong> fails.</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-[10px] overflow-x-auto">
{`const [users, posts] = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]);
// All must succeed`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Promise.race()
              </h4>
              <p className="text-xs text-muted-foreground mb-3">Returns <strong>first</strong> settled promise (resolved or rejected).</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-[10px] overflow-x-auto">
{`const fastest = await Promise.race([
  fetch('/api/server1'),
  fetch('/api/server2')
]);
// First to respond wins`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Promise.any() <Badge className="ml-2 text-[9px]">ES2021</Badge>
              </h4>
              <p className="text-xs text-muted-foreground mb-3">Returns <strong>first fulfilled</strong> promise. Ignores rejections.</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-[10px] overflow-x-auto">
{`const data = await Promise.any([
  fetch('/api/backup1'),
  fetch('/api/backup2')
]);
// First success wins`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Promise.allSettled()
              </h4>
              <p className="text-xs text-muted-foreground mb-3">Waits for <strong>all</strong> to settle. Never rejects.</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-[10px] overflow-x-auto">
{`const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts')
]);
// Returns all results`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latest ES2022+ Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Latest Async Features (ES2022+)
          </CardTitle>
          <CardDescription className="text-base">
            Cutting-edge async capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 text-lg">🚀 Top-Level Await (ES2022)</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Use <code>await</code> at the top level of modules without wrapping in an async function!
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ✨ No async function wrapper needed!
const response = await fetch('/api/config');
const config = await response.json();

export const API_KEY = config.apiKey;

// Dynamic imports
const utils = await import(
  config.useNewUtils ? './utils-v2.js' : './utils-v1.js'
);`}</pre>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">🔄 Async Iterators & for-await-of</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Async generator function
async function* fetchPaginatedData() {
  let page = 1;
  while (page <= 3) {
    const response = await fetch(\`/api/data?page=\${page}\`);
    const data = await response.json();
    yield data; // Yield each page
    page++;
  }
}

// Consume with for-await-of
for await (const pageData of fetchPaginatedData()) {
  console.log("Page data:", pageData);
  // Process each page as it arrives
}`}</pre>
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
            Practical patterns you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Fetching User Data
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Complete API fetch example
async function loadUserProfile(userId) {
  try {
    // Show loading indicator
    showLoader();
    
    // Fetch user data
    const response = await fetch(
      \`https://api.example.com/users/\${userId}\`
    );
    
    if (!response.ok) {
      throw new Error('User not found');
    }
    
    const user = await response.json();
    
    // Update UI with user data
    displayUserProfile(user);
    
    return user;
  } catch (error) {
    // Show error message
    showError(error.message);
    console.error(error);
  } finally {
    // Hide loading indicator
    hideLoader();
  }
}

// Usage
loadUserProfile(123);`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Multiple API Calls
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Fetch multiple resources in parallel
async function loadDashboard() {
  try {
    // Start all requests at once
    const [
      userRes,
      postsRes,
      statsRes
    ] = await Promise.all([
      fetch('/api/user'),
      fetch('/api/posts'),
      fetch('/api/stats')
    ]);
    
    // Parse all responses
    const user = await userRes.json();
    const posts = await postsRes.json();
    const stats = await statsRes.json();
    
    // Render dashboard
    renderDashboard({ user, posts, stats });
    
  } catch (error) {
    console.error('Dashboard load failed:', error);
  }
}

loadDashboard();`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Retry Logic
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Retry failed requests
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      
      return await response.json();
      
    } catch (error) {
      // Last attempt failed
      if (i === retries - 1) {
        throw error;
      }
      
      // Wait before retry (exponential backoff)
      const delay = Math.pow(2, i) * 1000;
      console.log(\`Retry \${i + 1} after \${delay}ms\`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// Usage
const data = await fetchWithRetry('/api/data');`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Timer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Timeout Pattern
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Add timeout to async operations
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout!'));
    }, ms);
  });
}

async function fetchWithTimeout(url, ms = 5000) {
  try {
    // Race between fetch and timeout
    const response = await Promise.race([
      fetch(url),
      timeout(ms)
    ]);
    
    return await response.json();
    
  } catch (error) {
    if (error.message === 'Timeout!') {
      console.error('Request took too long');
    }
    throw error;
  }
}

// Usage: fail if takes > 3 seconds
const data = await fetchWithTimeout('/api/slow', 3000);`}</pre>
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
            Write better async code
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
                  <span>Always use try/catch with async/await</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promise.all() for parallel operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Handle errors at appropriate levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use async/await over raw promises</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Add timeouts for network requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promise.allSettled() for independent operations</span>
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
                  <span>Forgetting to handle promise rejections</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Sequential awaits when parallel is possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Using async without await (returns promise)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Creating promise but not returning it</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Using async in constructors or getters</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Not cleaning up in finally blocks</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              When in doubt, use <code>async/await</code> with <code>try/catch</code>. It's the most readable and maintainable approach 
              for handling asynchronous operations. Use <code>Promise.all()</code> when you need to wait for multiple independent operations 
              to complete.
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
              Hands-on playground
            </CardTitle>
            <CardDescription className="text-base">
              Launch the interactive playground to experiment with callbacks, Promises, and async/await flows.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
            <Button
              onClick={() =>
                onOpenWebPlayground(
                  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Async JavaScript Demo</title>
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
    <h1>🔄 Async JavaScript</h1>
    <p>Open the browser console to see async operations in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`,
                  '',
                  `// Async JavaScript Demo
console.log("🚀 Starting async demo...");

// 1. Simple Promise
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("✅ Promise resolved!");
  }, 1000);
});

promise.then(result => console.log(result));

// 2. Async/Await Function
async function fetchData() {
  console.log("⏳ Fetching data...");
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log("📦 Data received!");
  return { id: 1, name: "Async Example" };
}

// 3. Promise.all Example
async function runDemo() {
  console.log("\\n--- Running parallel requests ---");
  
  const results = await Promise.all([
    new Promise(r => setTimeout(() => r("Result 1"), 1000)),
    new Promise(r => setTimeout(() => r("Result 2"), 800)),
    new Promise(r => setTimeout(() => r("Result 3"), 1200))
  ]);
  
  console.log("All done:", results);
}

// Execute demos
fetchData().then(data => console.log("Data:", data));
setTimeout(() => runDemo(), 2000);

console.log("💡 Code continues without waiting!");`
                )
              }
              className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
            >
              Run in playground
            </Button>
            <p className="text-sm text-muted-foreground">
              The console output highlights event loop ordering, Promise combinators, and async/await ergonomics without freezing the UI.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default JavaScriptJsAsync;
