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
  Package,
  Boxes,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  Zap,
  ArrowRight
} from 'lucide-react';

interface DestructuringProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptDestructuring({ onOpenWebPlayground }: DestructuringProps) {
  // Demo states
  const [arrayDemo, setArrayDemo] = useState('');
  const [objectDemo, setObjectDemo] = useState('');
  const [demoLog, setDemoLog] = useState<string[]>([]);

  const runArrayDemo = () => {
    const [first, second, third] = ['Apple', 'Banana', 'Cherry'];
    setArrayDemo(`first: ${first}, second: ${second}, third: ${third}`);
    setDemoLog(prev => [...prev, 'Array destructuring executed']);
  };

  const runObjectDemo = () => {
    const user = { name: 'John', age: 25, role: 'developer' };
    const { name, age } = user;
    setObjectDemo(`name: ${name}, age: ${age}`);
    setDemoLog(prev => [...prev, 'Object destructuring executed']);
  };

  const resetDemo = () => {
    setArrayDemo('');
    setObjectDemo('');
    setDemoLog([]);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Destructuring Masterclass</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>📦 Destructuring</h1>
    <p class="subtitle">Extract values with elegant syntax</p>

    <section class="demo-section">
      <h2>Array Destructuring</h2>
      <button onclick="testArrayDestructuring()">Test Arrays</button>
    </section>

    <section class="demo-section">
      <h2>Object Destructuring</h2>
      <button onclick="testObjectDestructuring()">Test Objects</button>
    </section>

    <section class="demo-section">
      <h2>Nested Destructuring</h2>
      <button onclick="testNested()">Test Nested</button>
    </section>

    <section class="demo-section">
      <h2>Advanced Patterns</h2>
      <button onclick="testAdvanced()">Test Advanced</button>
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

function testArrayDestructuring() {
  log('=== Array Destructuring ===', '#10b981');
  
  // Basic
  const [a, b, c] = [1, 2, 3];
  log('const [a, b, c] = [1, 2, 3]');
  log('Result: a=' + a + ', b=' + b + ', c=' + c, '#64748b');
  
  // Skip elements
  const [first, , third] = [1, 2, 3];
  log('const [first, , third] = [1, 2, 3]');
  log('Result: first=' + first + ', third=' + third, '#64748b');
  
  // Rest operator
  const [x, ...rest] = [1, 2, 3, 4, 5];
  log('const [x, ...rest] = [1, 2, 3, 4, 5]');
  log('Result: x=' + x + ', rest=' + rest, '#64748b');
  
  // Swap variables
  let p = 1, q = 2;
  [p, q] = [q, p];
  log('Swap: p=' + p + ', q=' + q, '#10b981');
}

function testObjectDestructuring() {
  log('=== Object Destructuring ===', '#10b981');
  
  const user = { name: 'John', age: 25, role: 'dev' };
  
  // Basic
  const { name, age } = user;
  log('const { name, age } = user');
  log('Result: name=' + name + ', age=' + age, '#64748b');
  
  // Rename
  const { name: userName, age: userAge } = user;
  log('const { name: userName } = user');
  log('Result: userName=' + userName, '#64748b');
  
  // Default values
  const { city = 'Unknown' } = user;
  log('const { city = "Unknown" } = user');
  log('Result: city=' + city, '#64748b');
  
  // Rest
  const { name: n, ...otherProps } = user;
  log('Rest: ' + JSON.stringify(otherProps), '#10b981');
}

function testNested() {
  log('=== Nested Destructuring ===', '#10b981');
  
  const data = {
    user: {
      name: 'John',
      address: {
        city: 'NYC',
        zip: '10001'
      }
    }
  };
  
  const { user: { name, address: { city } } } = data;
  log('Extracted: name=' + name + ', city=' + city, '#10b981');
  
  // Array in object
  const response = { data: [1, 2, 3] };
  const { data: [first, second] } = response;
  log('Array in object: first=' + first + ', second=' + second, '#64748b');
}

function testAdvanced() {
  log('=== Advanced Patterns ===', '#10b981');
  
  // Function parameters
  function greet({ name, age = 0 }) {
    return 'Hello ' + name + ', age ' + age;
  }
  log(greet({ name: 'John', age: 25 }), '#10b981');
  
  // Mixed destructuring
  const [{ name }] = [{ name: 'John', age: 25 }];
  log('Mixed: name=' + name, '#64748b');
  
  // Computed property names
  const key = 'status';
  const obj = { status: 'active' };
  const { [key]: value } = obj;
  log('Computed: value=' + value, '#10b981');
}

log('👆 Click buttons to test destructuring', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="12. ES6+ Features"
        title="Destructuring"
        description="Extract values from arrays and objects with elegant, concise syntax"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            What is Destructuring?
          </CardTitle>
          <CardDescription className="text-base">
            Unpack values from arrays or properties from objects into distinct variables
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Destructuring is a JavaScript expression that allows you to <strong className="text-foreground">extract multiple values</strong> from arrays or objects and assign them to variables in a single statement. It makes your code cleaner, more readable, and eliminates repetitive property access.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way (verbose!)
const array = [1, 2, 3];
const a = array[0];
const b = array[1];
const c = array[2];

const user = { name: 'John', age: 25 };
const name = user.name;
const age = user.age;

// Destructuring (elegant!)
const [a, b, c] = [1, 2, 3];
const { name, age } = user;`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Boxes className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">Arrays</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Extract by position
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                [a, b, c]
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">Objects</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Extract by property name
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                {`{ name, age }`}
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h3 className="font-semibold">Nested</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Deep extraction
              </p>
              <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
                Multi-level
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Array Destructuring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Boxes className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. Array Destructuring
          </CardTitle>
          <CardDescription className="text-base">
            Extract values from arrays by position
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Basic Array Destructuring</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Assign by position
const arr = [1, 2, 3];

// Old way
const a = arr[0]; // 1
const b = arr[1]; // 2
const c = arr[2]; // 3

// Destructuring way ✨
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Works with any iterable
const [x, y] = 'Hi';
console.log(x); // 'H'
console.log(y); // 'i'`}</pre>
            </div>

            {/* Skip Elements */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Skip Elements</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const colors = ['red', 'green', 'blue', 'yellow'];

// Skip middle elements with commas
const [first, , third] = colors;
console.log(first); // 'red'
console.log(third); // 'blue'

// Skip multiple
const [, , , last] = colors;
console.log(last); // 'yellow'

// Get first and last
const [firstColor, , , lastColor] = colors;
console.log(firstColor, lastColor);
// 'red' 'yellow'`}</pre>
            </div>

            {/* Default Values */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Default Values</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Provide fallback values
const [a = 10, b = 20] = [5];
console.log(a); // 5 (from array)
console.log(b); // 20 (default)

// Empty array
const [x = 1, y = 2, z = 3] = [];
console.log(x, y, z); // 1 2 3

// Partial array
const [name = 'Guest', age = 0] = ['John'];
console.log(name); // 'John'
console.log(age); // 0 (default)

// undefined uses default
const [p = 5] = [undefined];
console.log(p); // 5`}</pre>
            </div>

            {/* Rest Operator */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Rest Operator (...)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Collect remaining elements
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// Rest must be last
const [a, b, ...others] = [1, 2, 3, 4];
console.log(others); // [3, 4]

// Can be empty
const [x, ...empty] = [1];
console.log(empty); // []

// Get head and tail
const [head, ...tail] = [10, 20, 30];
console.log(head); // 10
console.log(tail); // [20, 30]`}</pre>
            </div>

            {/* Swap Variables */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Swap Variables</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way (needs temp variable)
let a = 1, b = 2;
let temp = a;
a = b;
b = temp;

// Destructuring way ✨
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// Swap multiple
let x = 1, y = 2, z = 3;
[x, y, z] = [z, x, y];
console.log(x, y, z); // 3 1 2

// Rotate values
let p = 1, q = 2, r = 3;
[p, q, r] = [q, r, p];`}</pre>
            </div>

            {/* Return Multiple Values */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">Return Multiple Values</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Functions can return arrays
function getCoords() {
  return [10, 20];
}

const [x, y] = getCoords();
console.log(x, y); // 10 20

// Ignore unwanted values
function getStats() {
  return [100, 200, 300];
}

const [min, , max] = getStats();
console.log(min, max); // 100 300

// useState pattern (React)
const [count, setCount] = useState(0);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Object Destructuring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            2. Object Destructuring
          </CardTitle>
          <CardDescription className="text-base">
            Extract properties from objects by name
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Basic Object Destructuring</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = {
  name: 'John',
  age: 25,
  role: 'developer'
};

// Old way
const name = user.name;
const age = user.age;

// Destructuring way ✨
const { name, age } = user;
console.log(name); // 'John'
console.log(age); // 25

// Order doesn't matter!
const { role, name } = user;
// Works fine!`}</pre>
            </div>

            {/* Renaming */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Renaming Variables</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = { name: 'John', age: 25 };

// Rename with colon
const { name: userName, age: userAge } = user;
console.log(userName); // 'John'
console.log(userAge); // 25

// Avoid naming conflicts
const name = 'Global';
const { name: localName } = user;
console.log(localName); // 'John'
console.log(name); // 'Global'

// Multiple renames
const { name: n, age: a, role: r } = user;`}</pre>
            </div>

            {/* Default Values */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Default Values</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = { name: 'John' };

// Provide defaults for missing properties
const { name, age = 0, city = 'Unknown' } = user;
console.log(name); // 'John'
console.log(age); // 0 (default)
console.log(city); // 'Unknown' (default)

// Combine with renaming
const {
  name: userName,
  age: userAge = 0,
  role: userRole = 'guest'
} = user;

// undefined uses default
const { status = 'active' } = { status: undefined };
console.log(status); // 'active'`}</pre>
            </div>

            {/* Rest in Objects */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Rest with Objects</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = {
  name: 'John',
  age: 25,
  role: 'dev',
  city: 'NYC'
};

// Extract specific props, collect rest
const { name, ...otherProps } = user;
console.log(name); // 'John'
console.log(otherProps);
// { age: 25, role: 'dev', city: 'NYC' }

// Remove properties
const { password, ...publicUser } = user;
// publicUser doesn&apos;t have password

// Clone and modify
const updated = { ...user, age: 26 };`}</pre>
            </div>

            {/* Computed Property Names */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Computed Property Names</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Dynamic property extraction
const key = 'status';
const obj = { status: 'active', role: 'admin' };

const { [key]: value } = obj;
console.log(value); // 'active'

// Rename dynamically
const { [key]: currentStatus } = obj;
console.log(currentStatus); // 'active'

// From variable
const prop = 'role';
const { [prop]: userRole } = obj;
console.log(userRole); // 'admin'

// With function
const getKey = () => 'status';
const { [getKey()]: s } = obj;`}</pre>
            </div>

            {/* Function Parameters */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">Function Parameters</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Destructure in parameters
function greet({ name, age }) {
  console.log(\`\$\\{name\\} is \$\\{age\\} years old\`);
}

greet({ name: 'John', age: 25 });
// 'John is 25 years old'

// With defaults
function createUser({ name, age = 0, role = 'guest' }) {
  return { name, age, role };
}

createUser({ name: 'John' });
// { name: 'John', age: 0, role: 'guest' }

// Entire param is optional
function config({ debug = false } = {}) {
  return debug;
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nested & Advanced */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. Nested & Advanced Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Deep extraction and complex destructuring scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Nested Objects</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const data = {
  user: {
    name: 'John',
    address: {
      city: 'NYC',
      zip: '10001'
    }
  }
};

// Deep destructuring
const {
  user: {
    name,
    address: { city, zip }
  }
} = data;

console.log(name); // 'John'
console.log(city); // 'NYC'
console.log(zip); // '10001'

// Note: 'user' and 'address' are not created
// Only name, city, zip are variables`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Mixed Destructuring</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Array of objects
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];

const [{ name: firstName }] = users;
console.log(firstName); // 'John'

// Object with arrays
const response = {
  data: [1, 2, 3],
  status: 'success'
};

const { data: [first, second], status } = response;
console.log(first); // 1
console.log(status); // 'success'`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PlayCircle className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Live Demo - Destructuring
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button onClick={runArrayDemo}>Test Arrays</Button>
              <Button onClick={runObjectDemo} variant="secondary">Test Objects</Button>
              <Button onClick={resetDemo} variant="outline">
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>

            {arrayDemo && (
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Array Result:</p>
                <p className="text-sm font-mono text-blue-600 dark:text-blue-400">{arrayDemo}</p>
              </div>
            )}

            {objectDemo && (
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Object Result:</p>
                <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400">{objectDemo}</p>
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
                <li>• Use destructuring for cleaner code</li>
                <li>• Provide default values for optional properties</li>
                <li>• Use rest operator to collect remaining items</li>
                <li>• Destructure function parameters</li>
                <li>• Rename variables to avoid conflicts</li>
                <li>• Use for React hooks and API responses</li>
                <li>• Destructure in for...of loops</li>
                <li>• Use to swap variables without temp</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t destructure deeply nested objects</li>
                <li>• Don&apos;t destructure everything unnecessarily</li>
                <li>• Don&apos;t forget to handle undefined/null</li>
                <li>• Don&apos;t use on arrays when order matters later</li>
                <li>• Don&apos;t create overly complex patterns</li>
                <li>• Don&apos;t destructure in performance-critical loops</li>
                <li>• Don&apos;t forget rest must be last element</li>
                <li>• Don&apos;t ignore readability for brevity</li>
              </ul>
            </div>
          </div>
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
            Open this playground to experiment with all destructuring patterns—arrays, objects, nested, and advanced techniques!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Destructuring Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
