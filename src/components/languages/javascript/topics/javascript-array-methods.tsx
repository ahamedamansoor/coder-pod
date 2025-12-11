'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
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
  Package,
  Bell,
  Filter,
  Search,
} from 'lucide-react';

export default function JavaScriptArrayMethodsBasics() {

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ListChecks}
        category="JavaScript · Data Structures"
        title="Array Methods (Basics)"
        description="Master essential array methods for manipulation and transformation"
        colorTheme="blue"
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
            <ListChecks className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Array Methods?
          </CardTitle>
          <CardDescription className="text-base">
            Functions on the Array prototype that help you add, remove, and transform data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Array methods are <strong>built-in functions</strong> available on every array. They're called directly from your array (e.g., <code>queue.push()</code>). Some methods <strong>mutate</strong> the original array, while others return a <strong>new array</strong>.
          </p>
          
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">array-basics.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Push and shift methods</span>
            </div>
            <pre 
              className="text-xs px-4 py-3 whitespace-pre overflow-x-auto"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const queue = ['todo', 'in-progress'];

queue.push('done');
const first = queue.shift();

console.log(queue); // ["in-progress","done"]
console.log(first); // "todo"`}
            </pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              <strong>Mutating methods</strong> (push, pop, shift, unshift, splice) change the original array. <strong>Non-mutating methods</strong> (map, filter, slice, concat) return new arrays.
            </AlertDescription>
          </Alert>
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
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
              <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">anatomy.js</span>
              <span className="text-purple-600/70 dark:text-purple-400/70">Array access patterns</span>
            </div>
            <pre 
              className="text-xs px-4 py-3 whitespace-pre overflow-x-auto"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const tools = ['VS Code', 'Terminal', 'Chrome'];

console.log('Length:', tools.length); // 3
console.log('Last item:', tools.at(-1)); // "Chrome"

tools[1] = 'iTerm';
console.log(tools); // ["VS Code","iTerm","Chrome"]`}
            </pre>
          </div>

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
            <pre 
              className="bg-white/90 dark:bg-slate-950/80 rounded p-3 text-xs overflow-x-auto border border-blue-100/60 dark:border-blue-900/40"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const stack = [];

stack.push('lint');
stack.push('test');
const last = stack.pop();

console.log(last);  // "test"
console.log(stack); // ["lint"]`}
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
            <pre 
              className="bg-white/90 dark:bg-slate-950/80 rounded p-3 text-xs overflow-x-auto border border-emerald-100/60 dark:border-emerald-900/40"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const lessons = ['intro', 'basics', 'review', 'advanced'];

const removed = lessons.splice(2, 1, 'project');
console.log(removed);   // ["review"]
console.log(lessons);   // ["intro","basics","project","advanced"]

const copy = lessons.slice(1, 3);
console.log(copy); // ["basics","project"]`}
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
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-blue-200/60 dark:border-blue-800/40 text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{`console.log(upper); // ["ADA","LIN"]`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-200">filter()</h4>
              <p className="text-sm text-muted-foreground">Keep only the values that pass your condition.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const scores = [72, 88, 90];
const passing = scores.filter((s) => s >= 80);
console.log(passing); // [88, 90]`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-100 whitespace-pre-wrap">{`console.log(passing); // [88, 90]`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-purple-200/60 dark:border-purple-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-purple-700 dark:text-purple-200">reduce()</h4>
              <p className="text-sm text-muted-foreground">Fold the array into a single value (sum, object, etc.).</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const times = [30, 45, 25];
const total = times.reduce((sum, t) => sum + t, 0);
console.log(total); // 100`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-purple-200/60 dark:border-purple-800/40 text-purple-900 dark:text-purple-100 whitespace-pre-wrap">{`console.log(total); // 100`}</pre>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-200">find()</h4>
              <p className="text-sm text-muted-foreground">Return the first item that matches a condition.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const bugs = ['minor','critical','minor'];
const firstCritical = bugs.find((type) => type === 'critical');
console.log(firstCritical); // "critical"`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-indigo-200/60 dark:border-indigo-800/40 text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{`console.log(firstCritical); // "critical"`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-rose-200/60 dark:border-rose-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-rose-700 dark:text-rose-200">some()</h4>
              <p className="text-sm text-muted-foreground">Check if at least one element meets the condition.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const flags = [false, false, true];
console.log(flags.some(Boolean)); // true`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-rose-200/60 dark:border-rose-800/40 text-rose-900 dark:text-rose-100 whitespace-pre-wrap">{`console.log(flags.some(Boolean)); // true`}</pre>
            </div>
            <div className="p-4 rounded-xl border border-amber-200/60 dark:border-amber-800/40 bg-white/90 dark:bg-slate-950/40 space-y-2">
              <h4 className="font-semibold text-amber-700 dark:text-amber-200">every()</h4>
              <p className="text-sm text-muted-foreground">Ensure all elements satisfy the rule.</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{`const sizes = ['sm','md','lg'];
console.log(sizes.every((size) => typeof size === 'string')); // true`}</pre>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border border-amber-200/60 dark:border-amber-800/40 text-amber-900 dark:text-amber-100 whitespace-pre-wrap">{`console.log(sizes.every((size) => typeof size === 'string')); // true`}</pre>
            </div>
          </div>
          <div className="rounded-lg border border-indigo-200/50 dark:border-indigo-800/40 bg-white/80 dark:bg-slate-950/30 p-4 text-sm text-muted-foreground">
            Combine these methods to create data pipelines, e.g., <code>orders.filter(...).map(...).reduce(...)</code> to clean, transform, and summarize in one readable flow.
          </div>

          {/* Comprehensive Example showing all methods */}
          <div className="mt-8">
            <CodeSnippet
              title="Complete Transform & Search Example"
              description="See all transformation and search methods working together in a real scenario"
              code={`const temps = [18, 22, 25, 28];

// Transform with map
const cToF = temps.map((c) => c * 1.8 + 32);
console.log('Fahrenheit:', cToF); // [64.4,71.6,77,82.4]

// Filter matching values
const warm = temps.filter((c) => c >= 22);
console.log('Warm days:', warm); // [22,25,28]

// Reduce to single value
const average = temps.reduce((sum, c) => sum + c, 0) / temps.length;
console.log('Average:', average); // 23.25

// Find first match
const scores = [92, 81, 77, 99];
const firstLow = scores.find((score) => score < 80);
console.log('First low:', firstLow); // 77

// Check if some match
const hasPerfect = scores.some((score) => score === 100);
console.log('Has perfect?', hasPerfect); // false

// Check if all match
const allPassed = scores.every((score) => score >= 70);
console.log('All passed?', allPassed); // true`}
              language="javascript"
              colorTheme="indigo"
              icon={Grid}
              features={[
                "map() - Transform each element",
                "filter() - Select matching items",
                "reduce() - Combine to single value",
                "find() - Get first match",
                "some() - Check if any match",
                "every() - Check if all match"
              ]}
              tips={[
                "Chain methods for powerful pipelines",
                "Each method serves a specific purpose",
                "Combine them for complex data processing",
                "All return new data except find/some/every"
              ]}
            />
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
            Practical patterns for inventory tracking, notifications, and state management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="Inventory Dashboard"
              description="Filter out-of-stock items and calculate totals for reports"
              code={`const inventory = [
  { id: 1, sku: 'KB', qty: 4 },
  { id: 2, sku: 'MS', qty: 2 },
  { id: 3, sku: 'HD', qty: 0 },
];

const inStock = inventory.filter((item) => item.qty > 0);
const totalQty = inventory.reduce((sum, item) => sum + item.qty, 0);

console.log(inStock.map((item) => item.sku)); // ["KB","MS"]
console.log('Total qty:', totalQty); // 6`}
              language="javascript"
              colorTheme="blue"
              icon={Package}
              features={[
                "filter() removes out-of-stock",
                "reduce() sums quantities",
                "map() extracts SKUs",
                "Perfect for dashboards"
              ]}
              tips={[
                "Chain methods for complex queries",
                "Use reduce for aggregations",
                "Filter before mapping for efficiency"
              ]}
            />

            <CodeSnippet
              title="Notifications Queue"
              description="Update state immutably and count unread notifications"
              code={`const queue = [
  { id: '1', read: false },
  { id: '2', read: false },
  { id: '3', read: true },
];

const markRead = queue.map((notif) =>
  notif.read ? notif : { ...notif, read: true }
);

const unreadCount = queue.filter((notif) => !notif.read).length;

console.log(markRead);
console.log('Unread:', unreadCount);`}
              language="javascript"
              colorTheme="emerald"
              icon={Bell}
              features={[
                "map() for immutable updates",
                "Spread operator preserves data",
                "filter() counts unread",
                "React/Redux pattern"
              ]}
              tips={[
                "Always return new objects in map",
                "Use ternary for conditional updates",
                "Combine filter + length for counts"
              ]}
            />
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
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const base = ['HTML', 'CSS'];
const extended = base.concat('JS');

console.log(base);      // ["HTML","CSS"]
console.log(extended);  // ["HTML","CSS","JS"]`}
            </pre>
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Prefer pure methods</h4>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const temps = [18, 22, 25, 28];

const cToF = temps.map((c) => c * 1.8 + 32);
const warm = temps.filter((c) => c >= 22);
const average = temps.reduce((sum, c) => sum + c, 0) / temps.length;

console.log(cToF);   // [64.4,71.6,77,82.4]
console.log(warm);   // [22,25,28]
console.log(average); // 23.25`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* ES2023 New Immutable Methods */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            ES2023 New Immutable Methods
          </CardTitle>
          <CardDescription className="text-base">
            Modern immutable alternatives to mutating methods—return new arrays without changing the original.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Immutable?</AlertTitle>
            <AlertDescription>
              These methods return <strong>new arrays</strong> instead of modifying the original. Perfect for React state, Redux reducers, and functional programming.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">toReversed()</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">ES2023</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Returns new array with elements in reversed order
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const nums = [1, 2, 3, 4, 5];
const reversed = nums.toReversed();

console.log(reversed); // [5,4,3,2,1]
console.log(nums);     // [1,2,3,4,5] ✓`}
              </pre>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">toSorted()</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">ES2023</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Returns new sorted array (original unchanged)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const nums = [3, 1, 4, 1, 5];
const sorted = nums.toSorted();

console.log(sorted); // [1,1,3,4,5]
console.log(nums);   // [3,1,4,1,5] ✓`}
              </pre>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">toSpliced()</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">ES2023</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Returns new array with elements removed/added
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const tasks = ['todo', 'done', 'review'];
const updated = tasks.toSpliced(1, 1, 'in-progress');

console.log(updated); // ['todo','in-progress','review']
console.log(tasks);   // ['todo','done','review'] ✓`}
              </pre>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">with()</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">ES2023</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Returns new array with one element changed
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const fruits = ['apple', 'banana', 'cherry'];
const updated = fruits.with(1, 'blueberry');

console.log(updated); // ['apple','blueberry','cherry']
console.log(fruits);  // ['apple','banana','cherry'] ✓`}
              </pre>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Comparison with Old Methods</h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-mono text-xs">
              <div><code className="text-rose-600">reverse()</code> → <code className="text-emerald-600">toReversed()</code></div>
              <div><code className="text-rose-600">sort()</code> → <code className="text-emerald-600">toSorted()</code></div>
              <div><code className="text-rose-600">splice()</code> → <code className="text-emerald-600">toSpliced()</code></div>
              <div><code className="text-rose-600">arr[i]=x</code> → <code className="text-emerald-600">with(i,x)</code></div>
            </div>
          </div>

          {/* Comprehensive ES2023 Example */}
          <div className="mt-8">
            <CodeSnippet
              title="Complete ES2023 Immutable Methods Example"
              description="See all new immutable methods working together - perfect for React state management"
              code={`const original = [3, 1, 4, 1, 5];
console.log('Original:', original);

// toSorted() - Sort without mutating
const sorted = original.toSorted();
console.log('Sorted:', sorted);        // [1,1,3,4,5]
console.log('Original:', original);    // [3,1,4,1,5] ✓

// toReversed() - Reverse without mutating
const reversed = original.toReversed();
console.log('Reversed:', reversed);    // [5,1,4,1,3]
console.log('Original:', original);    // [3,1,4,1,5] ✓

// with() - Change element without mutating
const changed = original.with(2, 99);
console.log('Changed:', changed);      // [3,1,99,1,5]
console.log('Original:', original);    // [3,1,4,1,5] ✓

// toSpliced() - Splice without mutating
const spliced = original.toSpliced(1, 2, 10, 20);
console.log('Spliced:', spliced);      // [3,10,20,1,5]
console.log('Original:', original);    // [3,1,4,1,5] ✓

// Chain them together!
const result = original
  .toSorted()
  .toReversed()
  .with(0, 100);
console.log('Chained:', result);       // [100,5,4,3,1]
console.log('Original:', original);    // [3,1,4,1,5] ✓`}
              language="javascript"
              colorTheme="purple"
              icon={Sparkles}
              features={[
                "toSorted() - Immutable sorting",
                "toReversed() - Immutable reversal",
                "with(index, value) - Immutable element change",
                "toSpliced() - Immutable splice operation",
                "All methods preserve original array",
                "Perfect for React/Redux state updates"
              ]}
              tips={[
                "Chain methods for complex transformations",
                "Original array never changes - great for debugging",
                "Use in React setState for predictable updates",
                "Eliminates need for spread operator in many cases",
                "Browser support: Chrome 110+, Firefox 115+, Safari 16+"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Prefer expressive helpers (map/filter) over manual loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Document when arrays are mutated versus copied</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Use slice/concat to prevent state bugs in React</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Combine methods (filter → map) for clear pipelines</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Mutating arrays that belong to other modules/components</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Forgetting return statements in map/filter callbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Using splice when you meant to create a copy</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Mixing unrelated data structures in a single array</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Takeaway</AlertTitle>
            <AlertDescription>
              Array methods are the backbone of modern JavaScript development. Master mutating methods (push, pop, splice) for performance, and non-mutating methods (map, filter, reduce) for predictable code. Use ES2023 methods (toSorted, toReversed, etc.) for immutable operations in React and state management.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
    </div>
  );
}
