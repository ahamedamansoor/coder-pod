'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Layers,
  Sparkles,
  ListChecks,
  Grid,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Boxes,
} from 'lucide-react';

interface JavaScriptArraysProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Arrays Playground</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Inter', system-ui, -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 24px; }
    .layout { max-width: 820px; margin: 0 auto; display: grid; gap: 16px; }
    .panel { border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; background: #fff; }
    pre { margin: 0; background: #0f172a; color: #e2e8f0; padding: 16px; border-radius: 10px; overflow-x: auto; }
    button { all: unset; background: #2563eb; color: #fff; border-radius: 8px; padding: 10px 16px; text-align: center; cursor: pointer; font-weight: 600; }
  </style>
</head>
<body>
  <div class="layout">
    <section class="panel">
      <h1>Array Explorations</h1>
      <p>Click run to execute the selected snippet and inspect console output.</p>
      <button id="run">Run Demo</button>
    </section>
    <section class="panel">
      <h2>Code</h2>
      <pre id="snippet"></pre>
    </section>
  </div>
  <script src="./arrays-demo.js"></script>
</body>
</html>`;

const basicArraySnippet = `// Create and access arrays
const languages = ['HTML', 'CSS', 'JavaScript'];
console.log(languages[0]); // HTML
console.log(languages.length); // 3`;

const anatomySnippet = `// Anatomy: index, value, length
const playlist = ['Intro', 'Verse', 'Chorus'];
playlist.push('Bridge');

console.log('First song:', playlist[0]);
console.log('Last song:', playlist[playlist.length - 1]);
console.log('Full playlist:', playlist);
// Output: ["Intro", "Verse", "Chorus", "Bridge"]`;

const methodsSnippet = `const numbers = [10, 20, 30, 40];

const doubled = numbers.map((value) => value * 2);
const filtered = numbers.filter((value) => value >= 25);
const total = numbers.reduce((sum, value) => sum + value, 0);

console.log(doubled);  // [20, 40, 60, 80]
console.log(filtered); // [30, 40]
console.log(total);    // 100`;

const multiDimensionalSnippet = `// Nested arrays (2D)
const seats = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
];

console.log(seats[1][2]); // B3

// Flatten
const flat = seats.flat();
console.log(flat); // ["A1","A2","A3","B1","B2","B3"]`;

const shoppingCartSnippet = `const cart = [
  { id: 1, name: 'Keyboard', price: 80 },
  { id: 2, name: 'Mouse', price: 40 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
const names = cart.map((item) => item.name);

console.log('Cart total:', total); // 120
console.log('Items:', names);      // ["Keyboard","Mouse"]`;

const todoSnippet = `function toggleTodo(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

const todos = [
  { id: 1, text: 'Plan lesson', done: false },
  { id: 2, text: 'Record video', done: false },
];

const updated = toggleTodo(todos, 2);
console.log(updated);
// id 2 toggled to true`;

const apiDataSnippet = `const response = {
  data: [
    { id: '1', status: 'done' },
    { id: '2', status: 'todo' },
    { id: '3', status: 'done' },
  ],
};

const doneIds = response.data
  .filter((item) => item.status === 'done')
  .map((item) => item.id);

console.log(doneIds); // ["1","3"]`;

const immutabilitySnippet = `const base = ['JS', 'TS'];

const copy = [...base];
copy.push('Rust');

console.log('Base:', base); // ["JS","TS"]
console.log('Copy:', copy); // ["JS","TS","Rust"]`;

const spreadSnippet = `const morning = ['email', 'standup'];
const afternoon = ['code review', 'deploy'];

const schedule = ['Plan', ...morning, 'Lunch', ...afternoon, 'Wrap up'];

console.log(schedule);
// ["Plan","email","standup","Lunch","code review","deploy","Wrap up"]`;

const playgroundJs = `console.clear();

const lessons = ['Intro', 'Basics'];
lessons.push('Advanced');
console.log('Lessons:', lessons);

const scores = [75, 90, 84];
const averages = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log('Average score:', averages);

const queue = ['task1', 'task2'];
const current = queue.shift();
queue.push('task3');
console.log('Processing:', current);
console.log('Queue:', queue);

const cloned = [...queue];
console.log('Cloned queue:', cloned);

document.getElementById('run').addEventListener('click', () => {
  document.getElementById('snippet').textContent = [
    'const lessons = [\\'Intro\\', \\'Basics\\'];',
    "lessons.push('Advanced');",
    'console.log(lessons);'
  ].join('\\n');
});`;

export default function JavaScriptArrays({ onOpenWebPlayground }: JavaScriptArraysProps) {
  const openSnippet = (code: string) => {
    if (onOpenWebPlayground) {
      onOpenWebPlayground(playgroundHtml, '', code);
    }
  };

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="Arrays"
        description="Group related data, loop over it, and transform it with the most used structure in JavaScript."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-sky-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-sky-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Why Arrays Matter
          </CardTitle>
          <CardDescription className="text-base">Arrays let you store ordered collections, iterate, and transform at scale.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-indigo-500" />
              <h3 className="font-semibold">Ordered data</h3>
            </div>
            <p className="text-sm text-muted-foreground">Preserves insertion order so lists appear exactly how you plan.</p>
            <Badge className="bg-indigo-100/80 text-indigo-700 border border-indigo-200/60">Index based</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Grid className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Flexible contents</h3>
            </div>
            <p className="text-sm text-muted-foreground">Mix primitives, objects, or even nested arrays for grids or tables.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">Any type</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Boxes className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold">Transform power</h3>
            </div>
            <p className="text-sm text-muted-foreground">map/filter/reduce let you generate new data in one readable pass.</p>
            <Badge className="bg-sky-100/80 text-sky-700 border border-sky-200/60">map/filter/reduce</Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is an array */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What is an Array?
          </CardTitle>
          <CardDescription className="text-base">A zero-indexed list stored under one variable to hold related data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{basicArraySnippet}</pre>
          {onOpenWebPlayground && (
            <Button onClick={() => openSnippet(basicArraySnippet)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Try in Playground
            </Button>
          )}
          <p className="text-sm text-muted-foreground">
            Arrays use numeric indexes starting at 0. Access items with brackets (<code>arr[1]</code>) and track size with the <code>length</code> property.
          </p>
        </CardContent>
      </Card>

      {/* Anatomy */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Array Anatomy
          </CardTitle>
          <CardDescription className="text-base">See how indexes, values, and length work together.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{anatomySnippet}</pre>
          {onOpenWebPlayground && (
            <Button onClick={() => openSnippet(anatomySnippet)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Try in Playground
            </Button>
          )}
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-3">
              <strong className="block text-indigo-600 dark:text-indigo-300 mb-1">Indexes</strong>
              <p>Access elements via <code>arr[position]</code>. Last item sits at <code>length - 1</code>.</p>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-3">
              <strong className="block text-indigo-600 dark:text-indigo-300 mb-1">Mutations</strong>
              <p>Use <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code> to add/remove items.</p>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-3">
              <strong className="block text-indigo-600 dark:text-indigo-300 mb-1">Length</strong>
              <p>Updates automatically; rely on it for loops and boundary checks.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Grid className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Core Array Operations
          </CardTitle>
          <CardDescription className="text-base">Transform, filter, and summarize data with built-in helpers.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">map + filter + reduce</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{methodsSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(methodsSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Nested arrays & flatten</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{multiDimensionalSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(multiDimensionalSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Real-world examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">Patterns for dashboards, state management, and APIs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/40 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                Shopping cart total
              </h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{shoppingCartSnippet}</pre>
              {onOpenWebPlayground && (
                <Button onClick={() => openSnippet(shoppingCartSnippet)} className="w-full md:w-auto">
                  <Play className="w-4 h-4 mr-2" />
                  Try in Playground
                </Button>
              )}
              <p className="text-sm text-muted-foreground">Summarize totals and map item names for UI components.</p>
            </div>
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/40 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Todo state updates
              </h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{todoSnippet}</pre>
              {onOpenWebPlayground && (
                <Button onClick={() => openSnippet(todoSnippet)} className="w-full md:w-auto">
                  <Play className="w-4 h-4 mr-2" />
                  Try in Playground
                </Button>
              )}
              <p className="text-sm text-muted-foreground">Return new arrays when toggling state to keep React stores predictable.</p>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              API filtering
            </h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{apiDataSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(apiDataSnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">Filter server results and map to ID lists for analytics or UI.</p>
          </div>
        </CardContent>
      </Card>

      {/* Immutability & spread */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Boxes className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Working Immutably
          </CardTitle>
          <CardDescription className="text-base">Copy arrays with spread/cloning to avoid accidental mutations.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Clone before editing</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{immutabilitySnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(immutabilitySnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Merge with spread</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{spreadSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(spreadSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
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
              <li>✅ Use descriptive variable names (<code>cartItems</code>, <code>students</code>).</li>
              <li>✅ Favor pure methods (map/filter/reduce) for predictability.</li>
              <li>✅ Clone before mutating arrays shared across components.</li>
              <li>✅ Validate array length before accessing indexes.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Mutating arrays you received as props/state.</li>
              <li>❌ Using <code>for</code> loops when a built-in helper is clearer.</li>
              <li>❌ Assuming arrays always have items; guard empty states.</li>
              <li>❌ Storing unrelated types in the same array without context.</li>
            </ul>
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
            Launch the simulator closure built playground to experiment with ✨ arrays, methods, and transformations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => openSnippet(playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights array operations (push, shift, reduce, spread, and iteration methods) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
