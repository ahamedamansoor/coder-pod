'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput, InteractivePlayground } from '@/components/shared';
import {
  GitBranch,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code,
  AlertCircle,
  Clock,
  Layers,
  ArrowRight,
  Zap,
  RefreshCw,
  FileCode,
  Network,
  ListChecks,
  Timer,
} from 'lucide-react';

interface JavaScriptCallbacksProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Callbacks Demo</title>
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
    <h1>🔄 JavaScript Callbacks</h1>
    <p>Open the browser console to see callbacks in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🚀 JavaScript Callbacks Demo\\n");

// 1. Basic Callback
console.log("1. BASIC CALLBACK:");
function greet(name, callback) {
  console.log("Before callback");
  callback(name);
  console.log("After callback");
}

greet("Alice", function(name) {
  console.log("Hello, " + name + "!");
});

// 2. Callback with Array Methods
console.log("\\n2. ARRAY METHOD CALLBACKS:");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 3. Asynchronous Callback
console.log("\\n3. ASYNC CALLBACK:");
console.log("Starting timer...");
setTimeout(function() {
  console.log("⏰ Timer completed after 2 seconds!");
}, 2000);
console.log("Timer set, continuing execution...");

// 4. Callback Hell Example (then solution)
console.log("\\n4. CALLBACK NESTING:");
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 500);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 500);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 500);
}

step1(function() {
  step2(function() {
    step3(function() {
      console.log("✅ All steps complete!");
    });
  });
});

console.log("\\n💡 Watch the console for async callback execution!");`;

// Animated Callback Hell Component
const AnimatedCallbackHell = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const levels = [
    { name: 'getUser', indent: 0, color: 'from-blue-500 to-cyan-500', result: 'User data loaded' },
    { name: 'getOrders', indent: 1, color: 'from-purple-500 to-pink-500', result: 'Orders fetched' },
    { name: 'getOrderDetails', indent: 2, color: 'from-amber-500 to-yellow-500', result: 'Details retrieved' },
    { name: 'getPayment', indent: 3, color: 'from-emerald-500 to-green-500', result: 'Payment info loaded' },
  ];

  const runAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveLevel(0);
    setCompletedLevels([]);
    setOutput([]);

    for (let i = 0; i < levels.length; i++) {
      setActiveLevel(i);
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      setOutput(prev => [...prev, `→ ${levels[i].result}`]);
      setCompletedLevels(prev => [...prev, i]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    setOutput(prev => [...prev, '✓ All callbacks complete!']);
    setIsAnimating(false);
  };

  const reset = () => {
    setActiveLevel(0);
    setCompletedLevels([]);
    setIsAnimating(false);
    setOutput([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Layers className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
          Animated Callback Hell (Pyramid of Doom)
        </CardTitle>
        <CardDescription className="text-base">
          Watch how nested callbacks create the infamous "pyramid of doom"
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Nested Callback Visualization */}
        <div className="p-6 bg-gradient-to-br from-slate-50 to-rose-50/50 dark:from-slate-900 dark:to-rose-950/20 rounded-xl border-2 border-rose-200/50 dark:border-rose-800/30">
          <div className="font-mono text-xs space-y-2">
            {levels.map((level, index) => (
              <div
                key={index}
                className="transition-all duration-500"
                style={{ paddingLeft: `${level.indent * 40}px` }}
              >
                <div
                  className={`inline-block p-3 rounded-lg border-2 transition-all duration-500 ${
                    activeLevel === index
                      ? `bg-gradient-to-r ${level.color} text-white border-white shadow-lg scale-105 animate-pulse`
                      : completedLevels.includes(index)
                      ? `bg-gradient-to-r ${level.color} text-white border-white opacity-60`
                      : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {completedLevels.includes(index) ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : activeLevel === index ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                    <span className="font-semibold">{level.name}()</span>
                  </div>
                </div>
                
                {index < levels.length - 1 && (
                  <div className="ml-8 mt-1 flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="w-3 h-3" />
                    <span className="text-[10px]">callback →</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Indentation Guide */}
          <div className="mt-6 p-3 bg-rose-100/50 dark:bg-rose-900/20 rounded-lg border border-rose-200 dark:border-rose-800">
            <p className="text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <strong>The Pyramid Problem:</strong> Each level adds more indentation, making code harder to read and maintain
            </p>
          </div>
        </div>

        {/* Output Console */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Execution Output</h4>
          <div className="min-h-[120px] p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border font-mono text-xs">
            {output.length === 0 ? (
              <div className="text-slate-500">Click "Run Animation" to see callback execution...</div>
            ) : (
              <div className="space-y-1">
                {output.map((line, index) => (
                  <div
                    key={index}
                    className={`animate-in fade-in duration-300 ${
                      line.includes('complete') ? 'text-green-400 font-bold' : 'text-cyan-400'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Code Example */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border">
          <p className="text-xs font-semibold mb-2">Code Structure:</p>
          <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`getUser(userId, function(user) {           // Level 1
  getOrders(user.id, function(orders) {     // Level 2
    getOrderDetails(orders[0].id, function(details) {  // Level 3
      getPayment(details.paymentId, function(payment) { // Level 4
        console.log("Done!", payment);
      });
    });
  });
});

// ❌ Problems:
// - Deep nesting (4 levels deep!)
// - Hard to read and follow
// - Error handling becomes repetitive
// - Difficult to modify or debug`}</pre>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={runAnimation}
            disabled={isAnimating}
            className="bg-gradient-to-r from-rose-600 to-red-600 text-white hover:from-rose-500 hover:to-red-500 disabled:opacity-50"
          >
            {isAnimating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Animation
              </>
            )}
          </Button>
          <Button onClick={reset} variant="outline" disabled={isAnimating}>
            Reset
          </Button>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Why It's Called "Callback Hell"</AlertTitle>
          <AlertDescription>
            As you add more async operations, the code keeps moving to the right, creating a pyramid shape. Each level of nesting makes the code harder to read, debug, and maintain. This is why modern JavaScript introduced <strong className="text-blue-600 dark:text-blue-400">Promises</strong> and <strong className="text-blue-600 dark:text-blue-400">async/await</strong> to flatten the structure!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptCallbacks({ onOpenWebPlayground }: JavaScriptCallbacksProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={GitBranch}
        category="JavaScript · Functions"
        title="Callbacks"
        description="Understand callbacks - the foundation of asynchronous JavaScript and one of the most important concepts for every developer to master."
        colorTheme="blue"
      />

      {/* Overview Section */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is a Callback?
          </CardTitle>
          <CardDescription className="text-base">
            A callback is a function passed as an argument to another function, which is then executed at a later time. This pattern is fundamental to JavaScript's asynchronous nature.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of a callback like ordering food at a restaurant. You place your order (call a function) and give the waiter your phone number (callback function). When your food is ready, they call you back. You don't wait at the counter—you do other things and get notified when it's done!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Functions as Values</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                In JavaScript, functions are first-class citizens—they can be passed as arguments
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Core Concept</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Delayed Execution</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Callbacks allow code to run later, enabling non-blocking operations
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Async Ready</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Flexible Control</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Let functions decide what to do with results dynamically
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Powerful</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The Key Insight</AlertTitle>
            <AlertDescription>
              Callbacks are how JavaScript handles operations that take time—like fetching data, reading files, or waiting for user input—without freezing your entire application. They're the foundation that Promises and async/await are built upon.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Callback Anatomy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileCode className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Callback Anatomy
          </CardTitle>
          <CardDescription className="text-base">
            Breaking down how callbacks work step by step
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">The Basic Structure</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// 1. Define a function that takes a callback
function doSomething(callback) {
  console.log("Doing work...");
  
  // 2. Execute the callback
  callback();
}

// 3. Pass a function as an argument
doSomething(function() {
  console.log("Callback executed!");
});`}</pre>
              <SnippetOutput lines={['Doing work...', 'Callback executed!']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">With Parameters</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Callback receives arguments
function processData(data, callback) {
  const result = data * 2;
  
  // Pass result to callback
  callback(result);
}

processData(5, function(result) {
  console.log("Result:", result);
});`}</pre>
              <SnippetOutput lines={['Result: 10']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Return Value</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Callback returns a value
function calculate(a, b, operation) {
  return operation(a, b);
}

const sum = calculate(10, 5, function(x, y) {
  return x + y;
});

console.log("Sum:", sum);`}</pre>
              <SnippetOutput lines={['Sum: 15']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Arrow Function Callback</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Modern ES6+ syntax
function greet(name, callback) {
  callback(name);
}

// Arrow function as callback
greet("Bob", (name) => {
  console.log(\`Hello, \${name}!\`);
});`}</pre>
              <SnippetOutput lines={['Hello, Bob!']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Callback Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Common Callback Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Real-world callback patterns you'll encounter every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Array Methods */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Array Methods
              </h4>
              <p className="text-xs text-muted-foreground">
                Array methods like map, filter, and forEach use callbacks
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// map - transform each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);
// Output: [2, 4, 6, 8, 10]

// filter - select elements
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens);
// Output: [2, 4]

// forEach - iterate over elements
numbers.forEach(function(num, index) {
  console.log(\`Index \${index}: \${num}\`);
});
// Output:
// Index 0: 1
// Index 1: 2
// ...`}</pre>
            </div>

            {/* Timers */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Timers & Delays
              </h4>
              <p className="text-xs text-muted-foreground">
                Execute code after a delay or at intervals
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// setTimeout - run once after delay
console.log("Start");

setTimeout(function() {
  console.log("After 2 seconds");
}, 2000);

console.log("End (immediate)");
// Output:
// Start
// End (immediate)
// After 2 seconds (after 2s delay)

// setInterval - run repeatedly
let count = 0;
const intervalId = setInterval(function() {
  count++;
  console.log("Count:", count);
  
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Stopped");
  }
}, 1000);
// Output:
// Count: 1 (after 1s)
// Count: 2 (after 2s)
// Count: 3 (after 3s)
// Stopped`}</pre>
            </div>

            {/* Event Listeners */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Event Listeners
              </h4>
              <p className="text-xs text-muted-foreground">
                Respond to user interactions with callback functions
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Button click event
const button = document.querySelector('#myButton');

button.addEventListener('click', function(event) {
  console.log("Button clicked!");
  console.log("Event type:", event.type);
  console.log("Target:", event.target);
});

// Input change event
const input = document.querySelector('#myInput');

input.addEventListener('input', function(event) {
  const value = event.target.value;
  console.log("Input value:", value);
});

// Form submit event
const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form submission
  console.log("Form submitted!");
});`}</pre>
            </div>

            {/* Custom Callbacks */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Custom Async Operations
              </h4>
              <p className="text-xs text-muted-foreground">
                Create your own functions that use callbacks
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Custom function with success/error callbacks
function fetchUser(userId, onSuccess, onError) {
  console.log("Fetching user...");
  
  // Simulate API call
  setTimeout(function() {
    const success = userId > 0;
    
    if (success) {
      const user = {
        id: userId,
        name: "John Doe",
        email: "john@example.com"
      };
      onSuccess(user);
    } else {
      onError("Invalid user ID");
    }
  }, 1000);
}

// Usage
fetchUser(
  123,
  function(user) {
    console.log("Success:", user);
  },
  function(error) {
    console.error("Error:", error);
  }
);
// Output (after 1s):
// Fetching user...
// Success: { id: 123, name: 'John Doe', ... }`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Callback Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Callback Parameters & Signatures
          </CardTitle>
          <CardDescription className="text-base">
            Understanding what arguments callbacks receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Know Your Callback Signature</AlertTitle>
            <AlertDescription>
              Different APIs pass different arguments to callbacks. Always check documentation to know what parameters your callback will receive.
            </AlertDescription>
          </Alert>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Method/API
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Callback Signature
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">array.map()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">(value, index, array)</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">arr.map((val, i) =&gt; val * 2)</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">setTimeout()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">(no arguments)</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">setTimeout(() =&gt; {'{'}...{'}'}, 1000)</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">addEventListener()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">(event)</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">el.addEventListener('click', (e) =&gt; {'{'}...{'}'})</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">fs.readFile()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">(error, data)</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">fs.readFile('file', (err, data) =&gt; {'{'}...{'}'})</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">array.reduce()</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">(accumulator, value, index, array)</code>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <code className="font-mono text-xs">arr.reduce((acc, val) =&gt; acc + val, 0)</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Callback Hell & Solutions */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/40 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertCircle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Callback Hell (Pyramid of Doom)
          </CardTitle>
          <CardDescription className="text-base">
            The main problem with callbacks and how to solve it
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>What is Callback Hell?</AlertTitle>
            <AlertDescription>
              When callbacks are nested inside callbacks, the code becomes hard to read and maintain. This is called "callback hell" or the "pyramid of doom" because of its triangular shape.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-rose-700 dark:text-rose-300">❌ Callback Hell</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30">Avoid</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Deeply nested callbacks
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
      getPayment(details.paymentId, function(payment) {
        console.log("Payment:", payment);
      }, function(error) {
        console.error(error);
      });
    }, function(error) {
      console.error(error);
    });
  }, function(error) {
    console.error(error);
  });
}, function(error) {
  console.error(error);
});

// ❌ Hard to read
// ❌ Error handling is repetitive
// ❌ Difficult to maintain`}</pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">✅ Using Promises</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Better</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Flat promise chain
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => getPayment(details.paymentId))
  .then(payment => {
    console.log("Payment:", payment);
  })
  .catch(error => {
    console.error(error);
  });

// ✅ Flat structure
// ✅ Single error handler
// ✅ Much more readable`}</pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3 md:col-span-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">✨ Using Async/Await (Best)</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Modern</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Synchronous-looking async code
async function loadPaymentData(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    const payment = await getPayment(details.paymentId);
    
    console.log("Payment:", payment);
    return payment;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

loadPaymentData(123);

// ✅ Looks like synchronous code
// ✅ Easy error handling with try/catch
// ✅ Most readable solution`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Callback Hell Visualization */}
      <AnimatedCallbackHell />

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in real applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Data Transformation */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Data Transformation Pipeline
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Chain multiple callbacks to process data
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Process user data with callbacks
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "David", age: 16, active: true }
];

// Filter, map, and sort using callbacks
const result = users
  .filter(function(user) {
    return user.active && user.age >= 18;
  })
  .map(function(user) {
    return {
      name: user.name.toUpperCase(),
      category: user.age >= 25 ? "senior" : "junior"
    };
  })
  .sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

console.log(result);
// Output:
// [
//   { name: 'ALICE', category: 'senior' },
//   { name: 'CHARLIE', category: 'senior' }
// ]`}</pre>
            </div>

            {/* Retry Logic */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Retry with Callbacks
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Implement retry logic for failed operations
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Retry failed operations
function retryOperation(operation, maxRetries, callback) {
  let attempts = 0;
  
  function attempt() {
    attempts++;
    console.log(\`Attempt \${attempts}/\${maxRetries}\`);
    
    operation(function(error, result) {
      if (error) {
        if (attempts < maxRetries) {
          console.log("Retrying...");
          setTimeout(attempt, 1000);
        } else {
          callback(error, null);
        }
      } else {
        callback(null, result);
      }
    });
  }
  
  attempt();
}

// Usage
retryOperation(
  function(callback) {
    // Simulate random failure
    const success = Math.random() > 0.5;
    if (success) {
      callback(null, { data: "Success!" });
    } else {
      callback(new Error("Failed"), null);
    }
  },
  3,
  function(error, result) {
    if (error) {
      console.error("All retries failed:", error);
    } else {
      console.log("Success:", result);
    }
  }
);`}</pre>
            </div>

            {/* Debounce */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Debounce Function
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Delay callback execution until inactivity
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Debounce: wait for pause before executing
function debounce(callback, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timer
    clearTimeout(timeoutId);
    
    // Set new timer
    timeoutId = setTimeout(function() {
      callback.apply(this, args);
    }, delay);
  };
}

// Usage: Search input
const input = document.querySelector('#search');

const searchAPI = debounce(function(value) {
  console.log("Searching for:", value);
  // Make API call here
}, 500);

input.addEventListener('input', function(event) {
  searchAPI(event.target.value);
});

// User types: "hello"
// Only 1 API call after they stop typing!
// Instead of 5 calls (one per character)`}</pre>
            </div>

            {/* Custom Event Emitter */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Simple Event Emitter
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Create custom event system with callbacks
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Simple event emitter with callbacks
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(callback) {
        callback(data);
      });
    }
  }
}

// Usage
const emitter = new EventEmitter();

emitter.on('userLogin', function(user) {
  console.log("User logged in:", user.name);
});

emitter.on('userLogin', function(user) {
  console.log("Sending welcome email...");
});

emitter.emit('userLogin', { name: 'Alice' });
// Output:
// User logged in: Alice
// Sending welcome email...`}</pre>
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
            Write better callback code
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
                  <span>Use descriptive callback parameter names</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Handle both success and error cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Keep callbacks small and focused</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promises or async/await for complex flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Document what parameters callbacks receive</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Extract callbacks into named functions for reusability</span>
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
                  <span>Deeply nesting callbacks (callback hell)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Ignoring error parameters in callbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Using generic names like `cb`, `fn`, `x`</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Mixing synchronous and asynchronous patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Forgetting to bind `this` context when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Calling callbacks multiple times by mistake</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Callbacks are powerful but can become messy. For simple cases, callbacks work great. For complex async flows with multiple steps, consider using <strong>Promises</strong> or <strong>async/await</strong> instead. They make your code more readable and maintainable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="Interactive Callbacks Playground"
          description="Experiment with callback functions, see how they work with timers, array methods, events, and understand callback patterns."
          features={[
            'Basic Callbacks',
            'Array Methods',
            'Async Operations',
            'Event Handling'
          ]}
          buttonText="Open Callbacks Playground"
          onLaunchPlayground={onOpenWebPlayground}
          playgroundData={{
            html: playgroundHtml,
            css: '',
            js: playgroundJs
          }}
          colorTheme="emerald"
        />
      )}
    </div>
  );
}
