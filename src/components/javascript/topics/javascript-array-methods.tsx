'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ListChecks,
  Sparkles,
  Layers,
  Wand2,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Grid,
} from 'lucide-react';

interface JavaScriptArrayMethodsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Array Methods Basics</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: #eef2ff; color: #0f172a; padding: 24px; }
    .panel { max-width: 760px; margin: 0 auto; background: #fff; border-radius: 16px; border: 1px solid #d4d4ff; padding: 32px; text-align: center; }
    h1 { margin-bottom: 12px; color: #4338ca; }
    p { color: #475569; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Array Methods Demo</h1>
    <p>Open the browser console to watch push, pop, map, filter, and reduce in action.</p>
  </div>
  <script src="./array-methods-demo.js"></script>
</body>
</html>`;

const basicsSnippet = `const queue = ['todo', 'in-progress'];

queue.push('done');
const first = queue.shift();

console.log(queue); // ["in-progress","done"]
console.log(first); // "todo"`;

const anatomySnippet = `const tools = ['VS Code', 'Terminal', 'Chrome'];

console.log('Length:', tools.length); // 3
console.log('Last item:', tools.at(-1)); // "Chrome"

tools[1] = 'iTerm';
console.log(tools); // ["VS Code","iTerm","Chrome"]`;

const pushPopSnippet = `const stack = [];

stack.push('lint');
stack.push('test');
const last = stack.pop();

console.log(last);  // "test"
console.log(stack); // ["lint"]`;

const spliceSliceSnippet = `const lessons = ['intro', 'basics', 'review', 'advanced'];

const removed = lessons.splice(2, 1, 'project');
console.log(removed);   // ["review"]
console.log(lessons);   // ["intro","basics","project","advanced"]

const copy = lessons.slice(1, 3);
console.log(copy); // ["basics","project"]`;

const mapFilterReduceSnippet = `const temps = [18, 22, 25, 28];

const cToF = temps.map((c) => c * 1.8 + 32);
const warm = temps.filter((c) => c >= 22);
const average = temps.reduce((sum, c) => sum + c, 0) / temps.length;

console.log(cToF);   // [64.4,71.6,77,82.4]
console.log(warm);   // [22,25,28]
console.log(average); // 23.25`;

const findSomeEverySnippet = `const scores = [92, 81, 77, 99];

const firstLow = scores.find((score) => score < 80);
const hasPerfect = scores.some((score) => score === 100);
const allPassed = scores.every((score) => score >= 70);

console.log(firstLow);  // 77
console.log(hasPerfect); // false
console.log(allPassed);  // true`;

const inventorySnippet = `const inventory = [
  { id: 1, sku: 'KB', qty: 4 },
  { id: 2, sku: 'MS', qty: 2 },
  { id: 3, sku: 'HD', qty: 0 },
];

const inStock = inventory.filter((item) => item.qty > 0);
const totalQty = inventory.reduce((sum, item) => sum + item.qty, 0);

console.log(inStock.map((item) => item.sku)); // ["KB","MS"]
console.log('Total qty:', totalQty); // 6`;

const notificationsSnippet = `const queue = [
  { id: '1', read: false },
  { id: '2', read: false },
  { id: '3', read: true },
];

const markRead = queue.map((notif) =>
  notif.read ? notif : { ...notif, read: true }
);

const unreadCount = queue.filter((notif) => !notif.read).length;

console.log(markRead);
console.log('Unread:', unreadCount);`;

const immutabilitySnippet = `const base = ['HTML', 'CSS'];
const extended = base.concat('JS');

console.log(base);      // ["HTML","CSS"]
console.log(extended);  // ["HTML","CSS","JS"]`;

const playgroundJs = `console.clear();

const tasks = ['setup', 'code'];
tasks.push('deploy');
console.log('Tasks:', tasks);

const finished = tasks.shift();
console.log('Working on:', finished);

const durations = [5, 8, 3];
console.log('Total hrs:', durations.reduce((sum, d) => sum + d, 0));
console.log('Long tasks:', durations.filter((d) => d >= 5));

const titles = ['Intro', 'Basics'];
console.log('Uppercase:', titles.map((t) => t.toUpperCase()));`;

export default function JavaScriptArrayMethodsBasics({ onOpenWebPlayground }: JavaScriptArrayMethodsProps) {
  const openSnippet = (code: string) => {
    if (onOpenWebPlayground) {
      onOpenWebPlayground(playgroundHtml, '', code);
    }
  };

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ListChecks}
        category="JavaScript Fundamentals"
        title="Array Methods (Basics)"
        description="Push, pop, splice, and iterate arrays with confidence using JavaScript's built-in helpers."
        colorTheme="indigo"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-sky-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-sky-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Why Array Methods Matter
          </CardTitle>
          <CardDescription className="text-base">Methods prevent manual loops and keep transformations readable.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <h3 className="font-semibold">Mutate lists</h3>
            </div>
            <p className="text-sm text-muted-foreground">push, pop, shift, unshift let you manage stacks and queues.</p>
            <Badge className="bg-indigo-100/80 text-indigo-700 border border-indigo-200/60">push()</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Transform data</h3>
            </div>
            <p className="text-sm text-muted-foreground">map, filter, reduce express business rules in one expression.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">map/filter</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Grid className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold">Search quickly</h3>
            </div>
            <p className="text-sm text-muted-foreground">find, some, every scan arrays without manual loops.</p>
            <Badge className="bg-sky-100/80 text-sky-700 border border-sky-200/60">find()</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Definition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What are Array Methods?
          </CardTitle>
          <CardDescription className="text-base">Functions on the Array prototype that help you add, remove, and transform data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{basicsSnippet}</pre>
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-blue-200/50 dark:border-blue-800/40 text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
console.log(queue); // ["in-progress","done"]
console.log(first); // "todo"
</pre>
          <p className="text-sm text-muted-foreground">
            Methods are called directly from your array (e.g., <code>queue.push()</code>). They either mutate the array or return a new copy depending on the method.
          </p>
        </CardContent>
      </Card>

      {/* Anatomy */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Array Method Anatomy
          </CardTitle>
          <CardDescription className="text-base">Understand indexes, return values, and when data mutates.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{anatomySnippet}</pre>
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-indigo-200/50 dark:border-indigo-800/40 text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">
console.log('Length:', 3);
console.log('Last item:', 'Chrome');
console.log(tools); // ["VS Code","iTerm","Chrome"]
</pre>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-3">
              <strong className="block text-indigo-600 dark:text-indigo-300 mb-1">Access</strong>
              <p>Use numeric indexes or new helpers like <code>at()</code> for cleaner syntax.</p>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-3">
              <strong className="block text-indigo-600 dark:text-indigo-300 mb-1">Mutation</strong>
              <p>push/pop change the array in place; map/filter return new arrays.</p>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-3">
              <strong className="block text-indigo-600 dark:text-indigo-300 mb-1">Return values</strong>
              <p>Know what comes back (e.g., <code>pop()</code> returns the removed value).</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core methods */}
      <Card className="bg-gradient-to-br from-indigo-50/80 via-blue-50/70 to-sky-50/60 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-sky-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Wand2 className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Core Mutation Methods
          </CardTitle>
          <CardDescription className="text-base">Stacks, queues, and list editing patterns.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-br from-blue-50/80 to-cyan-50/70 dark:from-blue-950/20 dark:to-cyan-950/10 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-200">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-white/90 text-blue-600">1</span>
              Stack & Queue Controls
            </h4>
            <p className="text-sm text-muted-foreground">Use <code>push</code>/<code>pop</code> for stack behavior and <code>shift</code>/<code>unshift</code> for queue-style flows.</p>
            <pre className="bg-white/90 dark:bg-slate-950/80 rounded p-3 font-mono text-xs overflow-x-auto border border-blue-100/60 dark:border-blue-900/40">{pushPopSnippet}</pre>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-blue-200/60 dark:border-blue-800/40 text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
console.log(last);  // "test"
console.log(stack); // ["lint"]
</pre>
            <div className="text-xs text-blue-700/80 dark:text-blue-100 bg-white/80 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/40 rounded-lg px-3 py-2">
              Perfect when modeling browser history, undo stacks, or task queues.
            </div>
          </div>
          <div className="p-5 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50/80 to-teal-50/70 dark:from-emerald-950/20 dark:to-teal-950/10 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-200">
              <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-white/90 text-emerald-600">2</span>
              Splice vs Slice Designer
            </h4>
            <p className="text-sm text-muted-foreground">
              <code>splice</code> edits the original array (great for in-place dashboards) while <code>slice</code> copies segments for previews.
            </p>
            <pre className="bg-white/90 dark:bg-slate-950/80 rounded p-3 font-mono text-xs overflow-x-auto border border-emerald-100/60 dark:border-emerald-900/40">{spliceSliceSnippet}</pre>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-100 whitespace-pre-wrap">
console.log(removed); // ["review"]
console.log(lessons); // ["intro","basics","project","advanced"]
console.log(copy);    // ["basics","project"]
</pre>
            <div className="text-xs text-emerald-700/80 dark:text-emerald-100 bg-white/80 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/40 rounded-lg px-3 py-2">
              Use this combo to power drag-and-drop reordering while keeping audit-friendly copies.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transform methods */}
      <Card className="bg-gradient-to-br from-indigo-50/80 via-blue-50/70 to-purple-50/60 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Grid className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Transform & Search
          </CardTitle>
          <CardDescription className="text-base">Use map/filter/reduce plus find/some/every to query data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-blue-700 dark:text-blue-200">map()</h4>
              <p className="text-sm text-muted-foreground">Transform each value and return a brand-new array.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const names = ['ada','lin'];
const upper = names.map((n) => n.toUpperCase());
console.log(upper); // ["ADA","LIN"]`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-blue-200/60 dark:border-blue-800/40 text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
console.log(upper); // ["ADA","LIN"]
</pre>
            </div>
            <div className="p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-200">filter()</h4>
              <p className="text-sm text-muted-foreground">Keep only the values that pass your condition.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const scores = [72, 88, 90];
const passing = scores.filter((s) => s >= 80);
console.log(passing); // [88, 90]`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-100 whitespace-pre-wrap">
console.log(passing); // [88, 90]
</pre>
            </div>
            <div className="p-4 rounded-xl border border-purple-200/60 dark:border-purple-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-purple-700 dark:text-purple-200">reduce()</h4>
              <p className="text-sm text-muted-foreground">Fold the array into a single value (sum, object, etc.).</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const times = [30, 45, 25];
const total = times.reduce((sum, t) => sum + t, 0);
console.log(total); // 100`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-purple-200/60 dark:border-purple-800/40 text-purple-900 dark:text-purple-100 whitespace-pre-wrap">
console.log(total); // 100
</pre>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-200">find()</h4>
              <p className="text-sm text-muted-foreground">Return the first item that matches a condition.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const bugs = ['minor','critical','minor'];
const firstCritical = bugs.find((type) => type === 'critical');
console.log(firstCritical); // "critical"`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-indigo-200/60 dark:border-indigo-800/40 text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">
console.log(firstCritical); // "critical"
</pre>
            </div>
            <div className="p-4 rounded-xl border border-rose-200/60 dark:border-rose-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-rose-700 dark:text-rose-200">some()</h4>
              <p className="text-sm text-muted-foreground">Check if at least one element meets the condition.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const flags = [false, false, true];
console.log(flags.some(Boolean)); // true`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-rose-200/60 dark:border-rose-800/40 text-rose-900 dark:text-rose-100 whitespace-pre-wrap">
console.log(flags.some(Boolean)); // true
</pre>
            </div>
            <div className="p-4 rounded-xl border border-amber-200/60 dark:border-amber-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-amber-700 dark:text-amber-200">every()</h4>
              <p className="text-sm text-muted-foreground">Ensure all elements satisfy the rule.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const sizes = ['sm','md','lg'];
console.log(sizes.every((size) => typeof size === 'string')); // true`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-amber-200/60 dark:border-amber-800/40 text-amber-900 dark:text-amber-100 whitespace-pre-wrap">
console.log(sizes.every((size) => typeof size === 'string')); // true
</pre>
            </div>
          </div>
          <div className="rounded-lg border border-indigo-200/50 dark:border-indigo-800/40 bg-white/80 dark:bg-slate-950/30 p-4 text-sm text-muted-foreground">
            Combine these methods to create data pipelines, e.g., <code>orders.filter(...).map(...).reduce(...)</code> to clean, transform, and summarize in one readable flow.
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
          <CardDescription className="text-base">Common workflows like inventory tracking and notifications.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/40 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Inventory dashboard
            </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{inventorySnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(inventorySnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">Filter out-of-stock items and total quantities for reports.</p>
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/40 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Notifications queue
            </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{notificationsSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(notificationsSnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">Map over arrays to update state immutably and count unread items.</p>
          </div>
        </CardContent>
      </Card>

      {/* Immutability */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Immutability Tips
          </CardTitle>
          <CardDescription className="text-base">Know when to copy arrays versus mutate them.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">concat/spread cloning</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{immutabilitySnippet}</pre>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-blue-200/50 dark:border-blue-800/40 text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
console.log(base); // ["HTML","CSS"]
console.log(extended); // ["HTML","CSS","JS"]
</pre>
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Prefer pure methods</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{mapFilterReduceSnippet}</pre>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-emerald-200/50 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-100 whitespace-pre-wrap">
console.log(cToF);   // [64.4,71.6,77,82.4]
console.log(warm);   // [22,25,28]
console.log(average); // 23.25
</pre>
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
              <li>✅ Prefer expressive helpers over manual loops.</li>
              <li>✅ Document when arrays are mutated versus copied.</li>
              <li>✅ Use <code>slice</code>/<code>concat</code> to prevent state bugs in UI frameworks.</li>
              <li>✅ Combine methods (filter → map) for clear pipelines.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Mutating arrays that belong to other modules/components.</li>
              <li>❌ Forgetting return statements in map/filter callbacks.</li>
              <li>❌ Using <code>splice</code> when you meant to create a copy.</li>
              <li>❌ Mixing unrelated data structures in a single array.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Practice Array Methods
          </CardTitle>
          <CardDescription className="text-base">Run the sample console demo to cement the operations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30">
              <span className="uppercase tracking-wide text-indigo-700 dark:text-indigo-300">array-methods-demo.js</span>
              <span className="text-indigo-600/70 dark:text-indigo-400/70">push, shift, reduce, filter, map</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>
          {onOpenWebPlayground && (
            <Button onClick={() => openSnippet(playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Try in Playground
            </Button>
          )}
          <Alert>
            <AlertTitle>Tip</AlertTitle>
            <AlertDescription>Click the button above, open DevTools console, and tweak the array values to see different outputs.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
