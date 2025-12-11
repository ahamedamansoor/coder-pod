'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Repeat,
  Sparkles,
  ListChecks,
  Filter,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Search,
  Grid3x3,
  ArrowRightLeft,
  Package,
  Play,
} from 'lucide-react';

export default function JavaScriptArrayIterationMethods() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript Fundamentals"
        title="Array Iteration Methods"
        description="Complete guide to all array iteration methods: map, filter, reduce, find, some, every, flatMap, and more."
        colorTheme="blue"
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
          <pre 
            className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
            style={{
              fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
            }}
          >
{`const users = ['Ada', 'Lin', 'Grace'];

users.forEach((user, index) => {
  console.log(index + 1, user);
});

// Output:
// 1 Ada
// 2 Lin
// 3 Grace`}
          </pre>
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
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const prices = [20, 35, 50];
const labels = prices.map((price) => '$' + price.toFixed(2));

console.log(labels);
// ["$20.00","$35.00","$50.00"]`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">filter()</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Filter</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Keep only elements that pass a test condition</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const responses = [200, 500, 201, 404];
const okResponses = responses.filter((status) => status < 400);

console.log(okResponses); // [200,201]`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">flatMap()</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Flatten</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Map and flatten the result in one step</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const courses = [
  { title: 'React', tags: ['frontend', 'ui'] },
  { title: 'Node', tags: ['backend', 'api'] },
];

const allTags = courses.flatMap((course) => course.tags);
console.log(allTags);
// ["frontend","ui","backend","api"]`}
            </pre>
          </div>
        </CardContent>
        
        {/* Comprehensive Example */}
        <CardContent className="pt-0">
          <CodeSnippet
            title="Complete Transformation Methods Example"
            description="See map, filter, and flatMap working together"
            code={`const products = [
  { name: 'Laptop', price: 999, tags: ['electronics', 'computers'] },
  { name: 'Mouse', price: 25, tags: ['electronics', 'accessories'] },
  { name: 'Desk', price: 299, tags: ['furniture', 'office'] },
  { name: 'Chair', price: 199, tags: ['furniture', 'office'] },
];

// Transform prices to formatted strings
const priceLabels = products.map(p => \`\${p.name}: $\${p.price}\`);
console.log('Price Labels:', priceLabels);

// Filter expensive products
const expensive = products.filter(p => p.price >= 200);
console.log('Expensive:', expensive.map(p => p.name));

// Flatten all tags
const allTags = products.flatMap(p => p.tags);
console.log('All Tags:', allTags);

// Combined: Get unique tags from expensive items
const expensiveTags = products
  .filter(p => p.price >= 200)
  .flatMap(p => p.tags)
  .filter((tag, i, arr) => arr.indexOf(tag) === i);
console.log('Expensive Tags:', expensiveTags);`}
            language="javascript"
            colorTheme="purple"
            icon={Layers}
          />
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
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 70 },
  { id: 3, total: 35 },
];

const sum = orders.reduce((acc, order) => acc + order.total, 0);

console.log(sum); // 150`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">reduceRight()</h4>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Right → Left</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Accumulate values from right to left</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const steps = ['Init', 'Process', 'Done'];

const reversed = steps.reduceRight(
  (acc, step) => acc.concat(step),
  []
);

console.log(reversed);
// ["Done","Process","Init"]`}
            </pre>
          </div>
        </CardContent>
        
        {/* Comprehensive Example */}
        <CardContent className="pt-0">
          <CodeSnippet
            title="Complete Aggregation Methods Example"
            description="See reduce and reduceRight in action for complex calculations"
            code={`const sales = [
  { item: 'Laptop', price: 999, qty: 2 },
  { item: 'Mouse', price: 25, qty: 5 },
  { item: 'Keyboard', price: 75, qty: 3 },
];

// Calculate total revenue
const totalRevenue = sales.reduce((sum, sale) => {
  return sum + (sale.price * sale.qty);
}, 0);
console.log('Total Revenue:', totalRevenue); // 2323

// Build summary object with reduce
const summary = sales.reduce((acc, sale) => {
  acc.items.push(sale.item);
  acc.totalQty += sale.qty;
  acc.avgPrice += sale.price;
  return acc;
}, { items: [], totalQty: 0, avgPrice: 0 });

summary.avgPrice = summary.avgPrice / sales.length;
console.log('Summary:', summary);

// Reverse concatenation with reduceRight
const categories = ['Electronics', 'Accessories', 'Peripherals'];
const reversed = categories.reduceRight((acc, cat) => acc.concat(cat), []);
console.log('Reversed:', reversed);`}
            language="javascript"
            colorTheme="amber"
            icon={TrendingUp}
          />
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
              <pre 
                className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}
              >
{`const tickets = [
  { id: 'a', priority: 'low' },
  { id: 'b', priority: 'high' },
];

const urgent = tickets.find((ticket) => ticket.priority === 'high');
console.log(urgent);
// { id: "b", priority: "high" }`}
              </pre>
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">findIndex()</h4>
                <Badge className="bg-sky-100 text-sky-700 dark:bg-sky-900/30">First Index</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return index of first match, -1 if not found</p>
              <pre 
                className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}
              >
{`const tasks = [
  { id: 1, done: false },
  { id: 2, done: true },
  { id: 3, done: false },
];

const firstIncomplete = tasks.findIndex((task) => !task.done);
console.log(firstIncomplete); // 0`}
              </pre>
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">findLast()</h4>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30">Last Match</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return last element that matches (searches backward)</p>
              <pre 
                className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}
              >
{`const logs = [
  { level: 'info', msg: 'Started' },
  { level: 'error', msg: 'Failed' },
  { level: 'info', msg: 'Retry' },
  { level: 'error', msg: 'Timeout' },
];

const lastError = logs.findLast((log) => log.level === 'error');
console.log(lastError);
// { level: "error", msg: "Timeout" }`}
              </pre>
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">findLastIndex()</h4>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30">Last Index</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Return index of last match (searches backward)</p>
              <pre 
                className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}
              >
{`const statuses = ['idle', 'loading', 'success', 'error', 'loading'];

const lastLoadingIndex = statuses.findLastIndex((s) => s === 'loading');
console.log(lastLoadingIndex); // 4`}
              </pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">includes()</h4>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30">Boolean</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Check if array contains a value</p>
              <pre 
                className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}
              >
{`const cart = ['laptop', 'mouse', 'keyboard'];

const hasLaptop = cart.includes('laptop');
const hasMonitor = cart.includes('monitor');

console.log(hasLaptop);  // true
console.log(hasMonitor); // false`}
              </pre>
            </div>
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">indexOf() / lastIndexOf()</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">Position</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Find first/last occurrence of a value</p>
              <pre 
                className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
                style={{
                  fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
                }}
              >
{`const queue = ['Alice', 'Bob', 'Alice', 'Charlie'];

const firstAlice = queue.indexOf('Alice');
const lastAlice = queue.lastIndexOf('Alice');

console.log('First:', firstAlice);  // 0
console.log('Last:', lastAlice);    // 2`}
              </pre>
            </div>
          </div>
        </CardContent>
        
        {/* Comprehensive Example */}
        <CardContent className="pt-0">
          <CodeSnippet
            title="Complete Search & Test Methods Example"
            description="Using all search methods to find and validate data"
            code={`const products = [
  { id: 1, name: 'Laptop', stock: 5, price: 999 },
  { id: 2, name: 'Mouse', stock: 0, price: 25 },
  { id: 3, name: 'Monitor', stock: 3, price: 399 },
  { id: 4, name: 'Keyboard', stock: 0, price: 75 },
  { id: 5, name: 'Webcam', stock: 2, price: 89 },
];

// Find first out of stock item
const outOfStock = products.find(p => p.stock === 0);
console.log('Out of stock:', outOfStock.name); // Mouse

// Find index of first out of stock
const outOfStockIndex = products.findIndex(p => p.stock === 0);
console.log('Index:', outOfStockIndex); // 1

// Find LAST out of stock item (ES2023)
const lastOutOfStock = products.findLast(p => p.stock === 0);
console.log('Last out of stock:', lastOutOfStock.name); // Keyboard

// Check if specific item exists
const hasWebcam = products.includes('Webcam'); // Won't work - searches by object
const hasWebcamByName = products.some(p => p.name === 'Webcam');
console.log('Has webcam:', hasWebcamByName); // true

// Get positions of an item
const ids = [1, 2, 3, 2, 4];
console.log('First 2:', ids.indexOf(2));     // 1
console.log('Last 2:', ids.lastIndexOf(2));  // 3`}
            language="javascript"
            colorTheme="cyan"
            icon={Search}
          />
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
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const deposits = [100, 200, 50];

const hasLarge = deposits.some((amount) => amount >= 500);

console.log(hasLarge);   // false`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">every()</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">All Must Pass</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Returns true only if ALL elements pass the test</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const deposits = [100, 200, 50];

const allPositive = deposits.every((amount) => amount > 0);

console.log(allPositive); // true`}
            </pre>
          </div>
        </CardContent>
        
        {/* Comprehensive Example */}
        <CardContent className="pt-0">
          <CodeSnippet
            title="Complete Boolean Test Methods Example"
            description="Using some() and every() for data validation"
            code={`const users = [
  { name: 'Alice', age: 25, verified: true },
  { name: 'Bob', age: 17, verified: true },
  { name: 'Charlie', age: 30, verified: false },
];

// Check if ANY user is under 18
const hasMinor = users.some(user => user.age < 18);
console.log('Has minor:', hasMinor); // true

// Check if ALL users are verified
const allVerified = users.every(user => user.verified);
console.log('All verified:', allVerified); // false

// Check if ANY user is verified
const hasVerified = users.some(user => user.verified);
console.log('Has verified:', hasVerified); // true

// Validate form data
const formData = ['name', 'email', '', 'phone'];
const allFieldsFilled = formData.every(field => field.length > 0);
console.log('All fields filled:', allFieldsFilled); // false

const hasEmptyFields = formData.some(field => field.length === 0);
console.log('Has empty fields:', hasEmptyFields); // true`}
            language="javascript"
            colorTheme="emerald"
            icon={CheckCircle2}
          />
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
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const colors = ['red', 'green', 'blue'];

for (const [index, color] of colors.entries()) {
  console.log(index, color);
}
// 0 red
// 1 green
// 2 blue`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">keys() / values()</h4>
              <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900/30">Separate</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Returns iterator of just indices or just values</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const fruits = ['apple', 'banana', 'orange'];

const indices = Array.from(fruits.keys());
const items = Array.from(fruits.values());

console.log('Indices:', indices);
console.log('Items:', items);`}
            </pre>
          </div>
        </CardContent>
        
        {/* Comprehensive Example */}
        <CardContent className="pt-0">
          <CodeSnippet
            title="Complete Iterator Methods Example"
            description="Using entries(), keys(), and values() for advanced iteration"
            code={`const menu = ['Burger', 'Pizza', 'Salad', 'Pasta'];

// Iterate with entries() - get index and value
console.log('Menu with numbers:');
for (const [index, item] of menu.entries()) {
  console.log(\`\${index + 1}. \${item}\`);
}
// 1. Burger
// 2. Pizza
// 3. Salad
// 4. Pasta

// Get all indices
const positions = Array.from(menu.keys());
console.log('Positions:', positions); // [0, 1, 2, 3]

// Get all values (creates a copy)
const items = Array.from(menu.values());
console.log('Items:', items); // ['Burger', 'Pizza', 'Salad', 'Pasta']

// Practical: Build indexed map
const menuMap = new Map(menu.entries());
console.log('Get item at 2:', menuMap.get(2)); // 'Salad'

// Practical: Create lookup table
const lookup = {};
for (const [i, item] of menu.entries()) {
  lookup[item] = i;
}
console.log('Pizza index:', lookup['Pizza']); // 1`}
            language="javascript"
            colorTheme="purple"
            icon={Grid3x3}
          />
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <CodeSnippet
        title="Real-World Pipeline: Contributor Summary"
        description="Chaining filter, map, and reduce for complex data processing"
        code={`const contributors = [
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

console.log(summary);
// { names: ["Lee","Mia"], total: 17 }`}
        language="javascript"
        colorTheme="blue"
        icon={Sparkles}
      />

      <CodeSnippet
        title="Real-World Example: Attendance Insights"
        description="Using find and every to analyze data sets"
        code={`const attendance = [
  { session: 'Intro', attendees: 32 },
  { session: 'Async', attendees: 28 },
  { session: 'Testing', attendees: 15 },
];

const lowAttendance = attendance.find((item) => item.attendees < 20);
const consistent = attendance.every((item) => item.attendees >= 15);

console.log('Low attendance:', lowAttendance);
console.log('All above 15?', consistent);
// Low attendance: { session: "Testing", attendees: 15 }
// All above 15? true`}
        language="javascript"
        colorTheme="emerald"
        icon={CheckCircle2}
      />

      <CodeSnippet
        title="Analytics Example: Advanced Reduce"
        description="Reduce combined with conditionals for complex aggregations"
        code={`const impressions = [1200, 980, 500, 1800];

const totals = impressions.reduce(
  (acc, value) => {
    acc.sum += value;
    if (value > acc.max) acc.max = value;
    return acc;
  },
  { sum: 0, max: 0 }
);

console.log(totals);
// { sum: 4480, max: 1800 }`}
        language="javascript"
        colorTheme="amber"
        icon={TrendingUp}
      />

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

    </div>
  );
}
