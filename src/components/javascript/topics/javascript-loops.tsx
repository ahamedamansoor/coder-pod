'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  RefreshCcw,
  ListOrdered,
  ListChecks,
  Gauge,
  Timer,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  Flag,
} from 'lucide-react';

interface JavaScriptLoopsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loops Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 48px 32px;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
      max-width: 600px;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
      font-size: 32px;
    }
    p {
      color: #64748b;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Monaco', monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Loops</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== JavaScript Loops Demo ===\\n');

// 1. Classic For Loop
console.log('1️⃣ CLASSIC FOR LOOP:');
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log('Index', i + ':', numbers[i]);
}
console.log('');

// 2. For...of Loop (values)
console.log('2️⃣ FOR...OF LOOP (Values):');
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log('Fruit:', fruit);
}
console.log('');

// 3. While Loop
console.log('3️⃣ WHILE LOOP:');
let countdown = 5;

while (countdown > 0) {
  console.log('Countdown:', countdown);
  countdown--;
}
console.log('Liftoff! 🚀');
console.log('');

// 4. Do...While Loop
console.log('4️⃣ DO...WHILE LOOP:');
let attempts = 0;

do {
  attempts++;
  console.log('Attempt', attempts);
} while (attempts < 3);
console.log('');

// 5. forEach (Array method)
console.log('5️⃣ FOREACH METHOD:');
const tasks = ['Plan', 'Code', 'Test', 'Deploy'];

tasks.forEach((task, index) => {
  console.log(index + 1 + '.', task);
});
console.log('');

// 6. Break and Continue
console.log('6️⃣ BREAK & CONTINUE:');
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log('Skipping 5...');
    continue; // Skip this iteration
  }
  if (i === 8) {
    console.log('Breaking at 8!');
    break; // Exit loop
  }
  console.log('Number:', i);
}

console.log('\\n✅ All loop demos complete!');`;

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function JavaScriptLoops({ onOpenWebPlayground }: JavaScriptLoopsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={RefreshCcw}
        category="JavaScript Fundamentals"
        title="Loops"
        description="Repeat actions with for, while, for...of, and forEach—choose the right loop for the job."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Loops?
          </CardTitle>
          <CardDescription className="text-base">
            Automate repetitive tasks: iterate lists, retry operations, or run until a condition changes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Iterate data
            </h3>
            <p className="text-sm text-muted-foreground">Process arrays and collections item by item.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Arrays</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Timer className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Run until done
            </h3>
            <p className="text-sm text-muted-foreground">Use while loops when the count depends on a condition.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Conditions</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Gauge className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Choose the right tool
            </h3>
            <p className="text-sm text-muted-foreground">Pick based on readability, needed indexes, and control.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Trade-offs</Badge>
          </div>
        </CardContent>
      </Card>

      {/* What are Loops? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <RefreshCcw className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Loops?
          </CardTitle>
          <CardDescription className="text-base">
            Control structures that repeat a block of code until a condition is met
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border space-y-4">
            <p className="text-sm text-muted-foreground">
              Loops are programming constructs that <strong>execute a block of code repeatedly</strong>. Instead of writing the same code multiple times,
              you use a loop to automate repetition. Loops are essential for <strong>processing arrays, retrying operations, counting,</strong> and
              <strong> iterating through collections</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">❌ Without Loops (Repetitive)</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Repetitive and unscalable
const names = ['Alice', 'Bob', 'Charlie'];

console.log('Hello, ' + names[0]);
console.log('Hello, ' + names[1]);
console.log('Hello, ' + names[2]);

// What if we add 100 more names?
// This approach doesn't scale!`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">✅ With Loops (Clean & Scalable)</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Clean and scalable
const names = ['Alice', 'Bob', 'Charlie'];

for (const name of names) {
  console.log('Hello, ' + name);
}

// Works with 3 or 3000 names!
// Output: Hello, Alice
//         Hello, Bob
//         Hello, Charlie`}
                </pre>
                <SnippetOutput lines={['Hello, Alice', 'Hello, Bob', 'Hello, Charlie']} />
              </div>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Key Concept</AlertTitle>
              <AlertDescription>
                Loops have three main parts: <strong>initialization</strong> (start), <strong>condition</strong> (when to continue), and <strong>iteration</strong> (how to progress).
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Visual flow */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-7 h-7 text-blue-600/80 dark:text-blue-400/80" />
            Loop Selection Diagram
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Decide which loop to use based on what you need—index, early exit, or simple iteration.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <RefreshCcw className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h4 className="font-semibold">Need index + control?</h4>
              </div>
              <p className="text-sm text-muted-foreground">Use classic for when you need the counter, step size, or to break early.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>for (let i = 0; i {'<'} arr.length; i++) {'{'} ... {'}'}</div>
                <div>if (match) break;</div>
              </div>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h4 className="font-semibold">Value-only, readable?</h4>
              </div>
              <p className="text-sm text-muted-foreground">Reach for for...of to keep iteration clean when you don’t need indexes.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>for (const user of users) {'{'} ... {'}'}</div>
              </div>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h4 className="font-semibold">Need early exit/continue?</h4>
              </div>
              <p className="text-sm text-muted-foreground">Pick for/while to break or continue; avoid forEach when you need to stop early.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>for (const item of items) {'{'} if (!item) continue; ... {'}'}</div>
                <div>while (!ready) {'{'} attempt++; if (attempt {'>'} 5) break; {'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Syntax & examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListOrdered className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Common Loop Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Compare syntax and when to use each loop.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Indexed and conditional</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>for (let i = 0; i {'<'} items.length; i++) {'{'} ... {'}'}</div>
              <div>while (count {'<'} 5) {'{'} count++; {'}'}</div>
              <div>do {'{'} attempt++; {'}'} while (!success);</div>
            </div>
            <p className="text-sm text-muted-foreground">Use when you need indexes or dynamic stop conditions.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Array-friendly</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>for (const item of items) {'{'} ... {'}'}</div>
              <div>items.forEach((item, i) =&gt; ...);</div>
              <div>for (const key in obj) {'{'} ... {'}'}</div>
            </div>
            <Alert>
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>Use `for...in` for object keys; avoid it on arrays because order can be unexpected.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in real applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pattern 1: Processing Array Data */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Processing Array Data
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Calculate total price
const cart = [
  { name: 'Book', price: 15 },
  { name: 'Pen', price: 5 },
  { name: 'Bag', price: 30 }
];

let total = 0;
for (const item of cart) {
  total += item.price;
  console.log(item.name + ': $' + item.price);
}

console.log('Total: $' + total);
// Output: Book: $15
//         Pen: $5
//         Bag: $30
//         Total: $50`}
              </pre>
              <SnippetOutput lines={['Book: $15', 'Pen: $5', 'Bag: $30', 'Total: $50']} />
              <p className="text-sm text-muted-foreground mt-3">
                Perfect for shopping carts, summing values, or calculating totals from arrays of objects.
              </p>
            </div>

            {/* Pattern 2: Finding Items */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Finding Items (Early Exit)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Search and stop
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

let found = null;
for (const user of users) {
  if (user.id === 2) {
    found = user;
    break; // Stop searching!
  }
}

console.log('Found:', found.name);
// Output: Found: Bob
// (stops after finding Bob)`}
              </pre>
              <SnippetOutput lines={['Found: Bob', '(Loop exits after match)']} />
              <p className="text-sm text-muted-foreground mt-3">
                Use break to stop searching once you find what you need, saving unnecessary iterations.
              </p>
            </div>

            {/* Pattern 3: Retry Logic */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Retry Logic with While
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Retry until success
let attempts = 0;
let success = false;
const maxAttempts = 3;

while (!success && attempts < maxAttempts) {
  attempts++;
  console.log('Attempt', attempts);
  
  // Simulate operation
  success = attempts === 2; // Success on 2nd try
  
  if (success) {
    console.log('✅ Success!');
  }
}

// Output: Attempt 1
//         Attempt 2
//         ✅ Success!`}
              </pre>
              <SnippetOutput lines={['Attempt 1', 'Attempt 2', '✅ Success!']} />
              <p className="text-sm text-muted-foreground mt-3">
                Common for API calls, network requests, or any operation that might fail and needs retries.
              </p>
            </div>

            {/* Pattern 4: Building HTML Lists */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Building Dynamic Lists
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Generate HTML/text lists
const todos = ['Write code', 'Test', 'Deploy'];
let htmlList = '<ul>';

for (let i = 0; i < todos.length; i++) {
  htmlList += '<li>' + (i + 1) + '. ';
  htmlList += todos[i] + '</li>';
}
htmlList += '</ul>';

console.log(htmlList);
// Output: <ul>
//   <li>1. Write code</li>
//   <li>2. Test</li>
//   <li>3. Deploy</li>
// </ul>`}
              </pre>
              <SnippetOutput lines={['<ul>', '  <li>1. Write code</li>', '  <li>2. Test</li>', '  <li>3. Deploy</li>', '</ul>']} />
              <p className="text-sm text-muted-foreground mt-3">
                Useful for generating markup, creating numbered lists, or building UI components dynamically.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance & pitfalls */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Pick the loop that matches your need (index vs values vs condition).</li>
              <li>✅ Break/return early to stop work when you find what you need.</li>
              <li>✅ Cache array length in classic for loops in hot paths.</li>
              <li>✅ Use `for...of` for readability when index isn’t required.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Infinite loops—ensure conditions change.</li>
              <li>❌ Using `forEach` when you need `break`/`return` to exit early.</li>
              <li>❌ Mutating arrays while iterating without care (indexes shift).</li>
              <li>❌ `for...in` on arrays—stick to `for` or `for...of`.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Loop control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Flag className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Control Statements
          </CardTitle>
          <CardDescription className="text-base">
            Break out early, skip iterations, and guard against infinite loops.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">break & continue</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>for (const item of items) {'{'}</div>
              <div className="pl-4">if (!item) continue; <span className="text-slate-500">// skip blanks</span></div>
              <div className="pl-4">if (item.id === target) {'{'} found = item; break; {'}'}</div>
              <div>{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Use continue to skip, break to exit as soon as you’re done.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Prevent infinite loops</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>let safety = 0;</div>
              <div>while (!ready && safety {'<'} 100) {'{'}</div>
              <div className="pl-4">safety++;</div>
              <div className="pl-4">checkStatus();</div>
              <div>{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Always mutate the condition and consider a safety counter for retries.</p>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ loops, iterations, and break/continue statements.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights loop patterns (for, for...of, for...in, while, do...while, and forEach) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
