'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Repeat,
  Sparkles,
  ListChecks,
  Filter,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  TrendingUp,
  Search,
  ArrowRight,
  Grid3x3,
} from 'lucide-react';

interface JavaScriptArrayIterationMethodsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-indigo-950/40 dark:to-sky-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Array Iteration Playground</title>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; background: #f8fafc; color: #0f172a; padding: 24px; }
    .card { max-width: 760px; margin: 0 auto; border-radius: 18px; border: 1px solid #e2e8f0; background: #fff; padding: 32px; box-shadow: 0 20px 60px rgba(15,23,42,.08); }
  </style>
</head>
<body>
  <div class="card">
    <h1>Open DevTools console</h1>
    <p>map/filter/reduce/some/every demos log their results when you run the snippet.</p>
  </div>
  <script src="./array-iteration-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const lessons = ['Intro', 'Loops', 'Promises'];

lessons.forEach((title, index) => console.log(index, title));

const upper = lessons.map((title) => title.toUpperCase());
console.log('Upper:', upper);

const longTitles = lessons.filter((title) => title.length > 5);
console.log('Long titles:', longTitles);

const durations = [5, 7, 3];
const total = durations.reduce((sum, d) => sum + d, 0);
console.log('Total hours:', total);

const hasPromises = lessons.some((title) => title === 'Promises');
console.log('Contains Promises?', hasPromises);

const allString = lessons.every((title) => typeof title === 'string');
console.log('All strings?', allString);`;

const forEachSnippet = `const users = ['Ada', 'Lin', 'Grace'];

users.forEach((user, index) => {
  console.log(index + 1, user);
});`;

const mapSnippet = `const prices = [20, 35, 50];
const labels = prices.map((price) => '$' + price.toFixed(2));

console.log(labels);`;

const filterSnippet = `const responses = [200, 500, 201, 404];
const okResponses = responses.filter((status) => status < 400);

console.log(okResponses); // [200,201]`;

const reduceSnippet = `const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 70 },
  { id: 3, total: 35 },
];

const sum = orders.reduce((acc, order) => acc + order.total, 0);

console.log(sum); // 150`;

const findSnippet = `const tickets = [
  { id: 'a', priority: 'low' },
  { id: 'b', priority: 'high' },
];

const urgent = tickets.find((ticket) => ticket.priority === 'high');
console.log(urgent);`;

const someEverySnippet = `const deposits = [100, 200, 50];

const hasLarge = deposits.some((amount) => amount >= 500);
const allPositive = deposits.every((amount) => amount > 0);

console.log(hasLarge);   // false
console.log(allPositive); // true`;

const findIndexSnippet = `const tasks = [
  { id: 1, done: false },
  { id: 2, done: true },
  { id: 3, done: false },
];

const firstIncomplete = tasks.findIndex((task) => !task.done);
console.log(firstIncomplete); // 0`;

const findLastSnippet = `const logs = [
  { level: 'info', msg: 'Started' },
  { level: 'error', msg: 'Failed' },
  { level: 'info', msg: 'Retry' },
  { level: 'error', msg: 'Timeout' },
];

const lastError = logs.findLast((log) => log.level === 'error');
console.log(lastError);`;

const findLastIndexSnippet = `const statuses = ['idle', 'loading', 'success', 'error', 'loading'];

const lastLoadingIndex = statuses.findLastIndex((s) => s === 'loading');
console.log(lastLoadingIndex); // 4`;

const flatMapSnippet = `const courses = [
  { title: 'React', tags: ['frontend', 'ui'] },
  { title: 'Node', tags: ['backend', 'api'] },
];

const allTags = courses.flatMap((course) => course.tags);
console.log(allTags);`;

const entriesSnippet = `const colors = ['red', 'green', 'blue'];

for (const [index, color] of colors.entries()) {
  console.log(index, color);
}`;

const keysValuesSnippet = `const fruits = ['apple', 'banana', 'orange'];

const indices = Array.from(fruits.keys());
const items = Array.from(fruits.values());

console.log('Indices:', indices);
console.log('Items:', items);`;

const reduceRightSnippet = `const steps = ['Init', 'Process', 'Done'];

const reversed = steps.reduceRight(
  (acc, step) => acc.concat(step),
  []
);

console.log(reversed);`;

const includesSnippet = `const cart = ['laptop', 'mouse', 'keyboard'];

const hasLaptop = cart.includes('laptop');
const hasMonitor = cart.includes('monitor');

console.log(hasLaptop);  // true
console.log(hasMonitor); // false`;

const indexOfSnippet = `const queue = ['Alice', 'Bob', 'Alice', 'Charlie'];

const firstAlice = queue.indexOf('Alice');
const lastAlice = queue.lastIndexOf('Alice');

console.log('First:', firstAlice);  // 0
console.log('Last:', lastAlice);    // 2`;

const pipelineSnippet = `const contributors = [
  { name: 'Lee', commits: 5 },
  { name: 'Jin', commits: 0 },
  { name: 'Mia', commits: 12 },
];

const summary = contributors
  .filter((user) => user.commits > 0)
  .map((user) => ({
    ...user,
    badge: user.commits > 10 ? 'gold' : 'silver',
  }))
  .reduce(
    (acc, user) => {
      acc.names.push(user.name);
      acc.total += user.commits;
      return acc;
    },
    { names: [], total: 0 }
  );

console.log(summary);`;

const attendanceSnippet = `const attendance = [
  { session: 'Intro', attendees: 32 },
  { session: 'Async', attendees: 28 },
  { session: 'Testing', attendees: 15 },
];

const lowAttendance = attendance.find((item) => item.attendees < 20);
const consistent = attendance.every((item) => item.attendees >= 15);

console.log(lowAttendance);
console.log('All above 15?', consistent);`;

const analyticsSnippet = `const impressions = [1200, 980, 500, 1800];

const totals = impressions.reduce(
  (acc, value) => {
    acc.sum += value;
    if (value > acc.max) acc.max = value;
    return acc;
  },
  { sum: 0, max: 0 }
);

console.log(totals);`;

export default function JavaScriptArrayIterationMethods({
  onOpenWebPlayground,
}: JavaScriptArrayIterationMethodsProps) {
  const openSnippet = (code: string) => {
    if (onOpenWebPlayground) {
      onOpenWebPlayground(playgroundHtml, '', code);
    }
  };

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript Fundamentals"
        title="Array Iteration Methods"
        description="Complete guide to all array iteration methods: map, filter, reduce, find, some, every, flatMap, and more."
        colorTheme="indigo"
      />

      {/* All Methods Reference */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-purple-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-purple-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            All Array Iteration Methods
          </CardTitle>
          <CardDescription className="text-base">
            15+ powerful methods to iterate, transform, search, and test arrays
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-2">Transform</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• map()</div>
              <div>• filter()</div>
              <div>• flatMap()</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold text-sm text-amber-700 dark:text-amber-300 mb-2">Aggregate</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• reduce()</div>
              <div>• reduceRight()</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-sky-50/80 dark:bg-sky-950/20 border border-sky-200/50 dark:border-sky-800/30">
            <h4 className="font-semibold text-sm text-sky-700 dark:text-sky-300 mb-2">Search</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• find()</div>
              <div>• findIndex()</div>
              <div>• findLast()</div>
              <div>• findLastIndex()</div>
              <div>• includes()</div>
              <div>• indexOf()</div>
              <div>• lastIndexOf()</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold text-sm text-emerald-700 dark:text-emerald-300 mb-2">Test & Iterate</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• some()</div>
              <div>• every()</div>
              <div>• forEach()</div>
              <div>• entries()</div>
              <div>• keys()</div>
              <div>• values()</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/70 via-sky-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-sky-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Why Iteration Methods Matter
          </CardTitle>
          <CardDescription className="text-base">
            Declarative loops remove manual bookkeeping and lead to readable, chainable operations.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-indigo-500" />
              <h3 className="font-semibold">Readable loops</h3>
            </div>
            <p className="text-sm text-muted-foreground">forEach intentionally hides index math; map/filter show intent clearly.</p>
            <Badge className="bg-indigo-100/80 text-indigo-700 border border-indigo-200/60">forEach</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Pure transformations</h3>
            </div>
            <p className="text-sm text-muted-foreground">map/filter/reduce return new values so state stays predictable.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">map/filter</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold">Chaining pipelines</h3>
            </div>
            <p className="text-sm text-muted-foreground">Combine helpers to clean, transform, and summarize with minimal code.</p>
            <Badge className="bg-sky-100/80 text-sky-700 border border-sky-200/60">map → filter → reduce</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Repeat className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What Are Iteration Methods?
          </CardTitle>
          <CardDescription className="text-base">
            Built-in array helpers that traverse each element and run your callback with (value, index, array).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{forEachSnippet}</pre>
          <SnippetOutput lines={['1 Ada', '2 Lin', '3 Grace']} />
          <p className="text-sm text-muted-foreground">
            Callbacks receive the current value, the index, and the original array. Use that signature to label parameters clearly.
          </p>
        </CardContent>
      </Card>

      {/* Transformation Methods */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Transformation Methods
          </CardTitle>
          <CardDescription className="text-base">
            Transform arrays into new arrays with map, filter, and flatMap
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">map()</h4>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Transform</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Transform each element and return a new array of the same length</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{mapSnippet}</pre>
            <SnippetOutput lines={['["$20.00","$35.00","$50.00"]']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">filter()</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Filter</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Keep only elements that pass a test condition</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{filterSnippet}</pre>
            <SnippetOutput lines={['okResponses -> [200, 201]']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">flatMap()</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Flatten</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Map and flatten the result in one step</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{flatMapSnippet}</pre>
            <SnippetOutput lines={['["frontend","ui","backend","api"]']} />
          </div>
        </CardContent>
      </Card>

      {/* Aggregation Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Aggregation Methods
          </CardTitle>
          <CardDescription className="text-base">
            Combine array elements into a single value
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">reduce()</h4>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Left → Right</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Accumulate values from left to right</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{reduceSnippet}</pre>
            <SnippetOutput lines={['sum -> 150']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">reduceRight()</h4>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Right → Left</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Accumulate values from right to left</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{reduceRightSnippet}</pre>
            <SnippetOutput lines={['["Done","Process","Init"]']} />
          </div>
        </CardContent>
      </Card>

      {/* Search & Test Methods */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/40 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Search className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Search & Test Methods
          </CardTitle>
          <CardDescription className="text-base">
            Find elements, check conditions, and locate indices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">find()</h4>
                <Badge className="bg-sky-100 text-sky-700 dark:bg-sky-900/30">First Match</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return first element that matches</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{findSnippet}</pre>
              <SnippetOutput lines={['{ id: "b", priority: "high" }']} />
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">findIndex()</h4>
                <Badge className="bg-sky-100 text-sky-700 dark:bg-sky-900/30">First Index</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return index of first match, -1 if not found</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{findIndexSnippet}</pre>
              <SnippetOutput lines={['firstIncomplete -> 0']} />
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">findLast()</h4>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30">Last Match</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return last element that matches (searches backward)</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{findLastSnippet}</pre>
              <SnippetOutput lines={['{ level: "error", msg: "Timeout" }']} />
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">findLastIndex()</h4>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30">Last Index</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return index of last match (searches backward)</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{findLastIndexSnippet}</pre>
              <SnippetOutput lines={['lastLoadingIndex -> 4']} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">includes()</h4>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30">Boolean</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Check if array contains a value</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{includesSnippet}</pre>
              <SnippetOutput lines={['hasLaptop -> true', 'hasMonitor -> false']} />
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">indexOf() / lastIndexOf()</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">Position</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Find first/last occurrence of a value</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{indexOfSnippet}</pre>
              <SnippetOutput lines={['First: 0', 'Last: 2']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Boolean Test Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Boolean Test Methods
          </CardTitle>
          <CardDescription className="text-base">
            Test if elements meet certain conditions
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">some()</h4>
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30">At Least One</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Returns true if ANY element passes the test</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{someEverySnippet.split('\n').slice(0, 4).join('\n')}</pre>
            <SnippetOutput lines={['hasLarge -> false']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">every()</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">All Must Pass</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Returns true only if ALL elements pass the test</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{someEverySnippet.split('\n').slice(4).join('\n')}</pre>
            <SnippetOutput lines={['allPositive -> true']} />
          </div>
        </CardContent>
      </Card>

      {/* Iterator Methods */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Grid3x3 className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Iterator Methods
          </CardTitle>
          <CardDescription className="text-base">
            Get iterators for indices, values, or key-value pairs
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">entries()</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Index + Value</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Returns iterator of [index, value] pairs</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{entriesSnippet}</pre>
            <SnippetOutput lines={['0 red', '1 green', '2 blue']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">keys() / values()</h4>
              <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900/30">Separate</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Returns iterator of just indices or just values</p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{keysValuesSnippet}</pre>
            <SnippetOutput lines={['Indices: [0,1,2]', 'Items: ["apple","banana","orange"]']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Pipelines
          </CardTitle>
          <CardDescription className="text-base">Practical chains used in dashboards and reporting.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/40 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Contributor summary
            </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{pipelineSnippet}</pre>
            <SnippetOutput lines={['{ names: ["Lee","Mia"], total: 17 }']} />
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(pipelineSnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/40 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Attendance insights
            </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{attendanceSnippet}</pre>
            <SnippetOutput lines={['lowAttendance -> { session: "Testing", attendees: 15 }', 'All above 15? -> true']} />
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(attendanceSnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Filter className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Analytics Example
          </CardTitle>
          <CardDescription className="text-base">Reduce combined with simple conditionals replaces manual counters.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{analyticsSnippet}</pre>
          <SnippetOutput lines={['{ sum: 4480, max: 1800 }']} />
          {onOpenWebPlayground && (
            <Button onClick={() => openSnippet(analyticsSnippet)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Try in Playground
            </Button>
          )}
          <p className="text-sm text-muted-foreground">Use reduce to aggregate multiple metrics in a single pass.</p>
        </CardContent>
      </Card>

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
              <li>✅ Use descriptive parameter names (value, index, array).</li>
              <li>✅ Chain helpers to avoid temporary arrays.</li>
              <li>✅ Return from map/filter callbacks explicitly.</li>
              <li>✅ Prefer reduce for aggregations over manual loops.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Mutating arrays inside map/filter callbacks.</li>
              <li>❌ Using forEach when you need a returned array—use map.</li>
              <li>❌ Forgetting error handling in async iterations.</li>
              <li>❌ Mixing synchronous loops with asynchronous state updates.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Try Iteration Methods
          </CardTitle>
          <CardDescription className="text-base">Run combined forEach/map/filter/reduce demos in the browser console.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30">
              <span className="uppercase tracking-wide text-indigo-700 dark:text-indigo-300">array-iteration-demo.js</span>
              <span className="text-indigo-600/70 dark:text-indigo-400/70">forEach, map, filter, reduce, some, every</span>
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
            <AlertDescription>Open DevTools console after launching the playground to verify each method’s output.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
