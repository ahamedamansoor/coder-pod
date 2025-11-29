'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Code2,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Zap,
  ArrowRight,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  PackageOpen,
  Package,
  Copy,
  AlertTriangle
} from 'lucide-react';

interface SpreadRestProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptSpreadRest({ onOpenWebPlayground }: SpreadRestProps) {
  // Demo states
  const [spreadDemo, setSpreadDemo] = useState('');
  const [restDemo, setRestDemo] = useState('');
  const [demoLog, setDemoLog] = useState<string[]>([]);

  const runSpreadDemo = () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    setSpreadDemo(`Combined: [${combined.join(', ')}]`);
    setDemoLog(prev => [...prev, 'Spread arrays executed']);
  };

  const runRestDemo = () => {
    const [first, ...rest] = [1, 2, 3, 4, 5];
    setRestDemo(`first: ${first}, rest: [${rest.join(', ')}]`);
    setDemoLog(prev => [...prev, 'Rest collection executed']);
  };

  const resetDemo = () => {
    setSpreadDemo('');
    setRestDemo('');
    setDemoLog([]);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spread & Rest Masterclass</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>... Spread & Rest</h1>
    <p class="subtitle">The three dots that changed JavaScript</p>

    <section class="demo-section">
      <h2>Rest Operator (Collect)</h2>
      <button onclick="testRestOperator()">Test Rest</button>
    </section>

    <section class="demo-section">
      <h2>Spread Operator (Expand)</h2>
      <button onclick="testSpreadOperator()">Test Spread</button>
    </section>

    <section class="demo-section">
      <h2>Array Operations</h2>
      <button onclick="testArrayOps()">Test Arrays</button>
    </section>

    <section class="demo-section">
      <h2>Object Operations</h2>
      <button onclick="testObjectOps()">Test Objects</button>
    </section>

    <div id="console" class="console">
      <h3>Console Output</h3>
      <div id="console-log"></div>
    </div>
  </div>
  <script src="./script.js"></script>
</body>
</html>`;

  const playgroundCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  color: #1e293b;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 32px;
}

.demo-section {
  margin-bottom: 20px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  color: #334155;
  font-size: 18px;
  margin-bottom: 12px;
}

button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

button:hover {
  background: #2563eb;
}

.console {
  margin-top: 24px;
  padding: 20px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  max-height: 350px;
  overflow-y: auto;
}

.console h3 {
  margin-bottom: 12px;
  font-size: 16px;
}

#console-log {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.8;
}

.log-entry {
  margin: 4px 0;
  padding: 4px 8px;
  background: rgba(34, 211, 238, 0.1);
  border-left: 3px solid #22d3ee;
}`;

  const playgroundJs = `const consoleLog = document.getElementById('console-log');

function log(message, color = '#22d3ee') {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.style.borderLeftColor = color;
  entry.textContent = message;
  consoleLog.appendChild(entry);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

function testRestOperator() {
  log('=== Rest Operator (Collect) ===', '#10b981');
  
  // Function parameters
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  log('sum(1, 2, 3, 4, 5) = ' + sum(1, 2, 3, 4, 5), '#64748b');
  
  // Array destructuring
  const [first, ...rest] = [1, 2, 3, 4, 5];
  log('first: ' + first + ', rest: ' + rest, '#64748b');
  
  // Object destructuring
  const user = { name: 'John', age: 25, role: 'dev' };
  const { name, ...otherProps } = user;
  log('Remaining: ' + JSON.stringify(otherProps), '#10b981');
}

function testSpreadOperator() {
  log('=== Spread Operator (Expand) ===', '#10b981');
  
  // Array spreading
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  log('Combined: ' + combined, '#64748b');
  
  // Object spreading
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const merged = { ...obj1, ...obj2 };
  log('Merged: ' + JSON.stringify(merged), '#64748b');
  
  // Function arguments
  const max = Math.max(...[1, 5, 3, 2, 4]);
  log('Max: ' + max, '#10b981');
}

function testArrayOps() {
  log('=== Array Operations ===', '#10b981');
  
  const arr = [1, 2, 3];
  
  // Copy
  const copy = [...arr];
  log('Copy: ' + copy, '#64748b');
  
  // Insert
  const withInsert = [...arr.slice(0, 1), 99, ...arr.slice(1)];
  log('Insert at 1: ' + withInsert, '#64748b');
  
  // Remove duplicates
  const withDupes = [1, 2, 2, 3, 3, 3];
  const unique = [...new Set(withDupes)];
  log('Unique: ' + unique, '#10b981');
}

function testObjectOps() {
  log('=== Object Operations ===', '#10b981');
  
  const base = { name: 'John', age: 25 };
  
  // Clone
  const clone = { ...base };
  log('Clone: ' + JSON.stringify(clone), '#64748b');
  
  // Update property
  const updated = { ...base, age: 26 };
  log('Updated: ' + JSON.stringify(updated), '#64748b');
  
  // Merge multiple
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const obj3 = { c: 3 };
  const merged = { ...obj1, ...obj2, ...obj3 };
  log('Merged: ' + JSON.stringify(merged), '#10b981');
}

log('👆 Click buttons to test spread & rest', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={PackageOpen}
        category="12. ES6+ Features"
        title="Spread & Rest Operators"
        description="Master the three dots (...) - one syntax, two powerful operations"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What are Spread & Rest?
          </CardTitle>
          <CardDescription className="text-base">
            Same syntax (...), opposite purposes—one expands, one collects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Both operators use <strong className="text-foreground">three dots (...)</strong> but serve opposite purposes. The <strong className="text-foreground">Rest operator</strong> collects multiple elements into an array or object. The <strong className="text-foreground">Spread operator</strong> expands arrays or objects into individual elements. Context determines which one you&apos;re using!
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// REST: Collects items into an array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5); // numbers = [1, 2, 3, 4, 5]

// SPREAD: Expands array into individual items
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-indigo-600/80 dark:text-indigo-400/80" />
                <h3 className="font-semibold">Rest (Collect)</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Gathers remaining items
              </p>
              <Badge className="bg-indigo-100/80 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-300/50 dark:border-indigo-700/40">
                ...rest
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <PackageOpen className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
                <h3 className="font-semibold">Spread (Expand)</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Unpacks items individually
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
                ...spread
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rest Operator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            1. Rest Operator (...rest)
          </CardTitle>
          <CardDescription className="text-base">
            Collect remaining elements into an array or object
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Function Parameters */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">Function Parameters</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Collect all arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5); // 15
sum(10, 20); // 30

// Mix fixed and rest params
function greet(greeting, ...names) {
  return \`\$\{greeting\}, \$\{names.join(' and ')\}!\`;
}

greet('Hello', 'John', 'Jane', 'Bob');
// "Hello, John and Jane and Bob!"

// Rest must be LAST parameter
function log(level, ...messages) {
  console.log(\`[\$\{level\}]\`, ...messages);
}`}</pre>
            </div>

            {/* Array Destructuring */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Array Destructuring</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const numbers = [1, 2, 3, 4, 5];

// Get first, collect rest
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// Get first two, ignore rest
const [a, b, ...remaining] = numbers;
console.log(a, b); // 1 2
console.log(remaining); // [3, 4, 5]

// Can be empty
const [x, ...empty] = [1];
console.log(empty); // []

// Get head and tail
const [head, ...tail] = numbers;`}</pre>
            </div>

            {/* Object Destructuring */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Object Destructuring</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = {
  name: 'John',
  age: 25,
  role: 'developer',
  city: 'NYC'
};

// Extract specific, collect rest
const { name, ...otherProps } = user;
console.log(name); // 'John'
console.log(otherProps);
// { age: 25, role: 'developer', city: 'NYC' }

// Remove sensitive data
const { password, ...publicUser } = user;
// publicUser doesn&apos;t include password

// Extract multiple, rest has remainder
const { name, age, ...remaining } = user;
console.log(remaining);
// { role: 'developer', city: 'NYC' }`}</pre>
            </div>

            {/* Common Use Cases */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Common Use Cases</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// 1. Variable arguments
function multiply(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}
multiply(2, 1, 2, 3); // [2, 4, 6]

// 2. Props destructuring (React)
function Button({ label, ...props }) {
  return <button {...props}>{label}</button>;
}

// 3. Remove properties
const { _id, __v, ...cleanData } = dbRecord;

// 4. Split array
const [current, ...queue] = tasks;
processTask(current);
scheduleTasks(queue);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spread Operator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PackageOpen className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            2. Spread Operator (...spread)
          </CardTitle>
          <CardDescription className="text-base">
            Expand arrays and objects into individual elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Array Spread */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Spread Arrays</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Add elements
const withExtra = [...arr1, 99, 100];
// [1, 2, 3, 99, 100]

// Insert in middle
const inserted = [
  ...arr1.slice(0, 1),
  999,
  ...arr1.slice(1)
];
// [1, 999, 2, 3]

// Shallow copy
const copy = [...arr1];
copy.push(4); // Original unchanged`}</pre>
            </div>

            {/* Object Spread */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Spread Objects</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = { name: 'John', age: 25 };
const details = { role: 'dev', city: 'NYC' };

// Merge objects
const merged = { ...user, ...details };
// { name: 'John', age: 25, role: 'dev', city: 'NYC' }

// Update properties
const updated = { ...user, age: 26 };
// { name: 'John', age: 26 }

// Add properties
const withEmail = { 
  ...user, 
  email: 'john@example.com' 
};

// Shallow clone
const clone = { ...user };`}</pre>
            </div>

            {/* Function Arguments */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Function Arguments</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const numbers = [1, 5, 3, 2, 4];

// Pass array as arguments
Math.max(...numbers); // 5
Math.min(...numbers); // 1

// Old way (apply)
Math.max.apply(null, numbers);

// Combine with fixed args
Math.max(0, ...numbers, 10);
// 10

// Multiple arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(...arr1, ...arr2);
// 1 2 3 4`}</pre>
            </div>

            {/* String to Array */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">String to Array</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Convert string to array
const str = 'Hello';
const chars = [...str];
console.log(chars);
// ['H', 'e', 'l', 'l', 'o']

// Works with emojis correctly
const emoji = '😀🎉';
const emojiArray = [...emoji];
console.log(emojiArray);
// ['😀', '🎉']

// Old way (splits emojis wrong!)
'😀🎉'.split(''); // Wrong!

// Use in operations
const reversed = [...str].reverse().join('');
console.log(reversed); // 'olleH'`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            3. Advanced Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Powerful real-world use cases and combinations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Immutable Updates</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Arrays - add/remove without mutating
const arr = [1, 2, 3, 4, 5];

// Add to end
const withNew = [...arr, 6];

// Add to start
const withStart = [0, ...arr];

// Remove item (filter + spread)
const without3 = arr.filter(n => n !== 3);

// Update specific index
const updated = [
  ...arr.slice(0, 2),
  99, // Update index 2
  ...arr.slice(3)
];
// [1, 2, 99, 4, 5]`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Merge with Overrides</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Later properties override earlier ones
const defaults = {
  theme: 'dark',
  fontSize: 14,
  language: 'en'
};

const userPrefs = {
  fontSize: 16,
  language: 'fr'
};

const config = { ...defaults, ...userPrefs };
// { theme: 'dark', fontSize: 16, language: 'fr' }

// Conditional override
const final = {
  ...defaults,
  ...(isDev && { debug: true })
};`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-3">Remove Duplicates</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Arrays - use Set + spread
const numbers = [1, 2, 2, 3, 3, 3, 4, 5];
const unique = [...new Set(numbers)];
// [1, 2, 3, 4, 5]

// Works with strings
const str = 'hello';
const uniqueChars = [...new Set(str)];
// ['h', 'e', 'l', 'o']

// Merge multiple arrays uniquely
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const merged = [...new Set([...arr1, ...arr2])];
// [1, 2, 3, 4, 5]`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 rounded-xl border border-green-200/50 dark:border-green-800/30">
              <h4 className="font-semibold mb-3">Nested Spread</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Shallow copy problem
const obj = { a: 1, nested: { b: 2 } };
const copy = { ...obj };
copy.nested.b = 99;
// Original obj.nested.b is also 99! ⚠️

// Deep copy nested level
const safeCopy = {
  ...obj,
  nested: { ...obj.nested }
};
safeCopy.nested.b = 99;
// Original unchanged ✅

// Update nested property
const updated = {
  ...user,
  address: {
    ...user.address,
    city: 'Boston'
  }
};`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 rounded-xl border border-violet-200/50 dark:border-violet-800/30">
              <h4 className="font-semibold mb-3">Conditional Spreading</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Spread conditionally
const user = {
  name: 'John',
  ...(isAdmin && { role: 'admin' }),
  ...(hasEmail && { email: user.email })
};

// Array conditional items
const items = [
  'always',
  ...(condition ? ['maybe'] : []),
  'also-always'
];

// Multiple conditions
const config = {
  ...baseConfig,
  ...(isDev && devConfig),
  ...(isProd && prodConfig)
};`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 rounded-xl border border-pink-200/50 dark:border-pink-800/30">
              <h4 className="font-semibold mb-3">Function Composition</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Combine functions with rest/spread
function compose(...fns) {
  return (value) => {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

const add5 = x => x + 5;
const multiply3 = x => x * 3;
const subtract2 = x => x - 2;

const combined = compose(subtract2, multiply3, add5);
combined(10); // (10 + 5) * 3 - 2 = 43

// Apply multiple middleware
const middleware = [...auth, ...logger, ...cache];`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PlayCircle className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Live Demo - Spread & Rest
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button onClick={runSpreadDemo}>Test Spread</Button>
              <Button onClick={runRestDemo} variant="secondary">Test Rest</Button>
              <Button onClick={resetDemo} variant="outline">
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>

            {spreadDemo && (
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Spread Result:</p>
                <p className="text-sm font-mono text-purple-600 dark:text-purple-400">{spreadDemo}</p>
              </div>
            )}

            {restDemo && (
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Rest Result:</p>
                <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{restDemo}</p>
              </div>
            )}

            {demoLog.length > 0 && (
              <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Log:</p>
                {demoLog.map((log, i) => (
                  <p key={i} className="text-xs font-mono text-muted-foreground">→ {log}</p>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Key Differences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Copy className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Key Differences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Rest Operator
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Collects</strong> multiple items</li>
                <li>• Used in <strong>destructuring</strong></li>
                <li>• Used in <strong>function parameters</strong></li>
                <li>• Creates an <strong>array</strong> or <strong>object</strong></li>
                <li>• Must be the <strong>last</strong> parameter</li>
                <li>• Gathers remaining elements</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <PackageOpen className="w-5 h-5" />
                Spread Operator
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Expands</strong> items</li>
                <li>• Used in <strong>array/object literals</strong></li>
                <li>• Used in <strong>function calls</strong></li>
                <li>• Unpacks from <strong>array</strong> or <strong>object</strong></li>
                <li>• Can be used <strong>anywhere</strong></li>
                <li>• Spreads individual elements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                ✅ Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use spread for immutable updates</li>
                <li>• Use rest to collect function arguments</li>
                <li>• Prefer spread over <code className="text-xs">concat()</code></li>
                <li>• Use spread to copy arrays/objects</li>
                <li>• Combine with Set to remove duplicates</li>
                <li>• Use for React props forwarding</li>
                <li>• Remember: shallow copies only</li>
                <li>• Use rest for flexible APIs</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t use for deep cloning (shallow only!)</li>
                <li>• Don&apos;t spread huge arrays (performance)</li>
                <li>• Don&apos;t forget rest must be last param</li>
                <li>• Don&apos;t spread primitives (no effect)</li>
                <li>• Don&apos;t rely on property order guarantee</li>
                <li>• Don&apos;t spread null or undefined</li>
                <li>• Don&apos;t use when mutation is acceptable</li>
                <li>• Don&apos;t nest spreads too deeply</li>
              </ul>
            </div>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Shallow Copy Warning</AlertTitle>
            <AlertDescription>
              Spread creates <strong>shallow copies</strong>. Nested objects/arrays are still referenced. For deep cloning, use <code className="text-xs">structuredClone()</code> or libraries like Lodash.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Interactive Playground
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this playground to experiment with spread and rest operators—try collecting, expanding, merging, and more!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Spread & Rest Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
