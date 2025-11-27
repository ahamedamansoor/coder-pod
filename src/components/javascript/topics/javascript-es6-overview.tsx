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
  Rocket,
  Star
} from 'lucide-react';

interface ES6OverviewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptES6Overview({ onOpenWebPlayground }: ES6OverviewProps) {
  // Demo states
  const [arrowDemo, setArrowDemo] = useState('');
  const [destructureDemo, setDestructureDemo] = useState('');
  const [demoLog, setDemoLog] = useState<string[]>([]);

  const runArrowDemo = () => {
    const traditional = function(x: number) { return x * 2; };
    const arrow = (x: number) => x * 2;
    
    setArrowDemo(`Traditional: ${traditional(5)}, Arrow: ${arrow(5)}`);
    setDemoLog(prev => [...prev, 'Arrow function demo executed']);
  };

  const runDestructureDemo = () => {
    const user = { name: 'John', age: 25, role: 'developer' };
    const { name, age } = user;
    
    setDestructureDemo(`Extracted: ${name}, ${age}`);
    setDemoLog(prev => [...prev, 'Destructuring demo executed']);
  };

  const resetDemo = () => {
    setArrowDemo('');
    setDestructureDemo('');
    setDemoLog([]);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ES6+ Features Playground</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>🚀 ES6+ Features</h1>
    <p class="subtitle">Modern JavaScript essentials</p>

    <section class="demo-section">
      <h2>Arrow Functions</h2>
      <button onclick="testArrowFunctions()">Test Arrow Functions</button>
    </section>

    <section class="demo-section">
      <h2>Template Literals</h2>
      <button onclick="testTemplateLiterals()">Test Template Literals</button>
    </section>

    <section class="demo-section">
      <h2>Destructuring</h2>
      <button onclick="testDestructuring()">Test Destructuring</button>
    </section>

    <section class="demo-section">
      <h2>Spread Operator</h2>
      <button onclick="testSpread()">Test Spread</button>
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
  max-height: 300px;
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

function testArrowFunctions() {
  // Traditional function
  const traditional = function(x) {
    return x * 2;
  };
  
  // Arrow function
  const arrow = x => x * 2;
  
  log('Traditional: ' + traditional(5), '#10b981');
  log('Arrow: ' + arrow(5), '#10b981');
  
  // Array methods with arrow functions
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(n => n * 2);
  log('Doubled: ' + doubled.join(', '), '#64748b');
}

function testTemplateLiterals() {
  const name = 'John';
  const age = 25;
  
  // Old way
  const oldWay = 'Hello, ' + name + '! You are ' + age + ' years old.';
  log('Old: ' + oldWay, '#ef4444');
  
  // ES6 way
  const newWay = \`Hello, \${name}! You are \${age} years old.\`;
  log('ES6: ' + newWay, '#10b981');
  
  // Multi-line
  const multiLine = \`
    Name: \${name}
    Age: \${age}
    Role: Developer
  \`;
  log('Multi-line:', '#64748b');
  log(multiLine.trim(), '#64748b');
}

function testDestructuring() {
  // Array destructuring
  const [a, b, c] = [1, 2, 3];
  log('Array: a=' + a + ', b=' + b + ', c=' + c, '#10b981');
  
  // Object destructuring
  const user = { name: 'John', age: 25, role: 'developer' };
  const { name, age } = user;
  log('Object: name=' + name + ', age=' + age, '#10b981');
  
  // With defaults
  const { city = 'Unknown' } = user;
  log('With default: city=' + city, '#64748b');
}

function testSpread() {
  // Array spread
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  log('Arrays: ' + combined.join(', '), '#10b981');
  
  // Object spread
  const obj1 = { name: 'John', age: 25 };
  const obj2 = { role: 'developer', city: 'NYC' };
  const merged = { ...obj1, ...obj2 };
  log('Objects: ' + JSON.stringify(merged), '#10b981');
  
  // Copy array
  const copy = [...arr1];
  log('Copy: ' + copy.join(', '), '#64748b');
}

log('👆 Click buttons to test ES6 features', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Rocket}
        category="12. ES6+ Features"
        title="ES6+ Overview"
        description="Modern JavaScript features from ES2015 onwards that changed everything"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is ES6+?
          </CardTitle>
          <CardDescription className="text-base">
            The game-changing update that modernized JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              ES6 (ECMAScript 2015) was a <strong className="text-foreground">massive update</strong> to JavaScript that introduced modern syntax and features. Subsequent versions (ES2016, ES2017, etc.) continued adding improvements. These features make code cleaner, more concise, and easier to maintain. <strong className="text-foreground">All modern browsers support ES6+</strong>.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Before ES6 (ES5)
var add = function(a, b) {
  return a + b;
};
var message = 'Result: ' + add(2, 3);

// After ES6+
const add = (a, b) => a + b;
const message = \`Result: \${add(2, 3)}\`;

// Cleaner, more readable, more powerful!`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h3 className="font-semibold">Released 2015</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Biggest JS update ever
              </p>
              <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
                10+ years ago
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">Modern Syntax</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Arrow functions, classes, modules
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Essential
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">Full Support</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                All modern browsers
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Safe to use
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key ES6+ Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Key ES6+ Features
          </CardTitle>
          <CardDescription className="text-base">
            The most important additions you must know
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* let & const */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">1</Badge>
                let & const (Block Scope)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ Old: var (function scope)
var x = 1;
if (true) {
  var x = 2; // Same variable!
}
console.log(x); // 2 (unexpected!)

// ✅ New: let (block scope)
let y = 1;
if (true) {
  let y = 2; // Different variable
}
console.log(y); // 1 (expected!)

// ✅ const (can't reassign)
const PI = 3.14159;
// PI = 3; // ❌ Error!

// Use const by default, let when needed
const arr = [1, 2, 3];
arr.push(4); // ✅ OK! (mutating is allowed)
// arr = []; // ❌ Error! (reassignment not allowed)`}</pre>
            </div>

            {/* Arrow Functions */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-emerald-600 text-white">2</Badge>
                Arrow Functions
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function (shorter!)
const add = (a, b) => a + b;

// Different forms
const single = x => x * 2; // No parentheses
const noParams = () => 'Hello';
const multiLine = (x, y) => {
  const sum = x + y;
  return sum;
};

// Perfec for array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// No 'this' binding (uses parent scope)
const obj = {
  count: 0,
  increment() {
    setTimeout(() => {
      this.count++; // 'this' refers to obj
    }, 1000);
  }
};`}</pre>
            </div>

            {/* Template Literals */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-purple-600 text-white">3</Badge>
                Template Literals
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const name = 'John';
const age = 25;

// Old way (messy!)
const old = 'Hello, ' + name + '! You are ' + age;

// ES6 way (clean!)
const msg = \`Hello, \${name}! You are \${age}\`;

// Multi-line strings
const html = \`
  <div class="user">
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`;

// Expression interpolation
const price = 29.99;
console.log(\`Total: $\${(price * 1.1).toFixed(2)}\`);
// Output: Total: $32.99

// Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? \`<strong>\${values[i]}</strong>\` : '');
  }, '');
}
const result = highlight\`Name: \${name}, Age: \${age}\`;`}</pre>
            </div>

            {/* Destructuring */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-amber-600 text-white">4</Badge>
                Destructuring
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Array destructuring
const [a, b, c] = [1, 2, 3];
const [first, , third] = [1, 2, 3]; // Skip middle
const [x, ...rest] = [1, 2, 3, 4]; // x=1, rest=[2,3,4]

// Object destructuring  
const user = { name: 'John', age: 25, role: 'dev' };
const { name, age } = user;

// Rename variables
const { name: userName, age: userAge } = user;

// Default values
const { city = 'Unknown' } = user;

// Nested destructuring
const data = { user: { name: 'John', age: 25 } };
const { user: { name, age } } = data;

// Function parameters
function greet({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}
greet({ name: 'John', age: 25 });

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a]; // Swap!`}</pre>
            </div>

            {/* Spread & Rest */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-rose-600 text-white">5</Badge>
                Spread & Rest Operators
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Spread operator (...)
// Expand arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Expand objects
const obj1 = { name: 'John', age: 25 };
const obj2 = { role: 'dev', city: 'NYC' };
const merged = { ...obj1, ...obj2 };
// { name: 'John', age: 25, role: 'dev', city: 'NYC' }

// Override properties
const updated = { ...obj1, age: 26 };

// Function arguments
Math.max(...[1, 5, 3, 2]); // 5

// Rest operator (collect remaining)
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5); // 15

const [first, ...others] = [1, 2, 3, 4];
// first=1, others=[2,3,4]`}</pre>
            </div>

            {/* Default Parameters */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-indigo-600 text-white">6</Badge>
                Default Parameters
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way
function greet(name, message) {
  name = name || 'Guest';
  message = message || 'Hello';
  console.log(message + ', ' + name);
}

// ES6 way (cleaner!)
function greet(name = 'Guest', message = 'Hello') {
  console.log(\`\${message}, \${name}\`);
}

greet(); // Hello, Guest
greet('John'); // Hello, John
greet('John', 'Hi'); // Hi, John

// Can use expressions
function createUser(name, id = generateId()) {
  return { name, id };
}

// Can reference earlier parameters
function calculate(a, b = a * 2) {
  return a + b;
}
calculate(5); // 15 (5 + 10)
calculate(5, 3); // 8 (5 + 3)`}</pre>
            </div>

            {/* Classes */}
            <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-cyan-600 text-white">7</Badge>
                Classes
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way (prototypes)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};

// ES6 way (classes!)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(\`Hello, \${this.name}\`);
  }
  
  // Getters & setters
  get info() {
    return \`\${this.name}, \${this.age}\`;
  }
  
  // Static methods
  static create(name, age) {
    return new Person(name, age);
  }
}

// Inheritance
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }
  
  code() {
    console.log(\`Coding in \${this.language}\`);
  }
}`}</pre>
            </div>

            {/* Promises */}
            <div className="p-5 bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 rounded-xl border border-green-200/50 dark:border-green-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-green-600 text-white">8</Badge>
                Promises
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Data loaded!');
    } else {
      reject('Error occurred!');
    }
  }, 1000);
});

// Use promise
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));

// Chaining
fetch('/api/users')
  .then(res => res.json())
  .then(users => users.map(u => u.name))
  .then(names => console.log(names))
  .catch(err => console.error(err));

// Promise.all (parallel)
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]).then(([users, posts]) => {
  console.log('Both loaded!');
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Features (ES2017+) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Modern Features (ES2017+)
          </CardTitle>
          <CardDescription className="text-base">
            Even newer features you should know
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Async/Await */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-indigo-600 text-white">ES2017</Badge>
                Async/Await
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Promises (still messy with .then())
fetch('/api/users')
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.error(err));

// Async/Await (cleaner!)
async function getUsers() {
  try {
    const res = await fetch('/api/users');
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

// Sequential requests
async function loadData() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  return { user, posts };
}

// Parallel requests
async function loadAll() {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
  return { users, posts };
}`}</pre>
            </div>

            {/* Object Enhancements */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">ES2015+</Badge>
                Object Enhancements
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Shorthand property names
const name = 'John';
const age = 25;
const user = { name, age };
// Same as: { name: name, age: age }

// Shorthand method names
const obj = {
  greet() { console.log('Hello'); }
  // Same as: greet: function() { }
};

// Computed property names
const key = 'status';
const obj = {
  [key]: 'active',
  ['user_' + 123]: 'John'
};

// Object.entries() & Object.values()
const user = { name: 'John', age: 25 };
Object.entries(user);
// [['name', 'John'], ['age', 25]]
Object.values(user); // ['John', 25]

// Object spread (ES2018)
const defaults = { theme: 'dark', lang: 'en' };
const settings = { ...defaults, theme: 'light' };`}</pre>
            </div>

            {/* Optional Chaining */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-emerald-600 text-white">ES2020</Badge>
                Optional Chaining
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way (verbose!)
const name = user && user.profile && user.profile.name;

// New way (elegant!)
const name = user?.profile?.name;

// With arrays
const firstPost = user?.posts?.[0];

// With functions
const result = obj.method?.();

// Real-world example
function getUserCity(user) {
  return user?.address?.city ?? 'Unknown';
  // Returns 'Unknown' if city is undefined/null
}

// Prevents errors
console.log(user?.nonExistent?.deeply?.nested);
// undefined (no error!)

// Old way would crash:
// console.log(user.nonExistent.deeply.nested);
// TypeError: Cannot read property 'deeply' of undefined`}</pre>
            </div>

            {/* Nullish Coalescing */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-amber-600 text-white">ES2020</Badge>
                Nullish Coalescing
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Old way (buggy with falsy values!)
const value = userInput || 'default';
// Problem: 0, '', false treated as missing

// New way (?? only checks null/undefined)
const value = userInput ?? 'default';

// Examples
const count = 0 ?? 10; // 0 (not 10!)
const text = '' ?? 'default'; // '' (not 'default!')
const flag = false ?? true; // false (not true!)

const missing = null ?? 'default'; // 'default'
const undef = undefined ?? 'default'; // 'default'

// Perfect for optional configs
function createUser(options = {}) {
  return {
    theme: options.theme ?? 'light',
    timeout: options.timeout ?? 3000,
    debug: options.debug ?? false
  };
}

// Works great with optional chaining
const city = user?.address?.city ?? 'Unknown';`}</pre>
            </div>

            {/* Modules */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-purple-600 text-white">ES2015</Badge>
                Modules (Import/Export)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Export (user.js)
export const name = 'John';
export function greet() { }

// Default export
export default class User { }

// Named export
export { name, greet };

// Import (main.js)
import User from './user.js';
import { name, greet } from './user.js';
import * as userModule from './user.js';

// Rename imports
import { name as userName } from './user.js';

// Dynamic import (ES2020)
async function loadModule() {
  const module = await import('./user.js');
  module.greet();
}

// Re-export
export { name } from './user.js';
export * from './user.js';`}</pre>
            </div>

            {/* Array/String Methods */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-rose-600 text-white">Various</Badge>
                New Array/String Methods
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Array methods
const arr = [1, 2, 3, 4, 5];

arr.includes(3); // true (ES2016)
arr.find(n => n > 3); // 4
arr.findIndex(n => n > 3); // 3

// Array.from()
Array.from('hello'); // ['h','e','l','l','o']
Array.from({ length: 3 }, (_, i) => i); // [0,1,2]

// flat() & flatMap() (ES2019)
const nested = [1, [2, [3, 4]]];
nested.flat(); // [1, 2, [3, 4]]
nested.flat(2); // [1, 2, 3, 4]

// String methods
'hello'.padStart(8, '0'); // '000hello'
'hello'.padEnd(8, '!'); // 'hello!!!'
'hello'.repeat(3); // 'hellohellohello'

// String trimming
'  hello  '.trim();
'  hello  '.trimStart(); // 'hello  '
'  hello  '.trimEnd(); // '  hello'`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PlayCircle className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Live Demo - ES6+ Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button onClick={runArrowDemo}>Test Arrow Functions</Button>
              <Button onClick={runDestructureDemo} variant="secondary">Test Destructuring</Button>
              <Button onClick={resetDemo} variant="outline">
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>

            {arrowDemo && (
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Arrow Function Result:</p>
                <p className="text-sm font-mono text-blue-600 dark:text-blue-400">{arrowDemo}</p>
              </div>
            )}

            {destructureDemo && (
              <div className="p-4 bg-white dark:bg-gray-900 rounded border">
                <p className="font-semibold text-sm mb-2">Destructuring Result:</p>
                <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400">{destructureDemo}</p>
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
                <li>• Use <code className="text-xs">const</code> by default, <code className="text-xs">let</code> when needed</li>
                <li>• Prefer arrow functions for callbacks</li>
                <li>• Use template literals for strings</li>
                <li>• Destructure objects and arrays</li>
                <li>• Use spread operator for copying</li>
                <li>• Prefer async/await over promises</li>
                <li>• Use optional chaining (?.) for safety</li>
                <li>• Use nullish coalescing (??) for defaults</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t use <code className="text-xs">var</code> anymore</li>
                <li>• Don&apos;t concatenate strings with +</li>
                <li>• Don&apos;t manually access object properties</li>
                <li>• Don&apos;t use old function syntax everywhere</li>
                <li>• Don&apos;t ignore browser compatibility</li>
                <li>• Don&apos;t mix promises and async/await</li>
                <li>• Don&apos;t use || for defaults (use ??)</li>
                <li>• Don&apos;t forget to transpile for older browsers</li>
              </ul>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Browser Support</AlertTitle>
            <AlertDescription>
              All modern browsers support ES6+ features. For older browsers, use a transpiler like <strong>Babel</strong> to convert your modern code to ES5. Most build tools (Vite, Webpack) handle this automatically.
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
            Open this playground to experiment with arrow functions, template literals, destructuring, and spread operators!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open ES6+ Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
