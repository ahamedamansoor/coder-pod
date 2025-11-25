'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  FunctionSquare,
  Code2,
  Sparkles,
  ListChecks,
  Zap,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Functions Demo</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 15% 20%, #eef2ff, #f8fafc 45%), #f8fafc;
      color: #0f172a;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .card {
      width: min(760px, 100%);
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      box-shadow: 0 18px 70px rgba(15, 23, 42, 0.08);
      padding: 22px;
    }
    .grid { display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-top: 12px; }
    .pill { padding: 10px 12px; border-radius: 12px; background: #f1f5f9; border: 1px dashed #e2e8f0; font-weight: 600; }
    code { background: #0f172a; color: #e2e8f0; padding: 8px 10px; border-radius: 8px; display: block; white-space: pre; }
    button {
      margin-top: 14px;
      background: linear-gradient(120deg, #2563eb, #38bdf8);
      color: #fff;
      border: none;
      border-radius: 12px;
      padding: 12px 16px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
    }
  </style>
</head>
<body>
  <div class="card">
    <p class="muted">Click run then open DevTools console to see functions output.</p>
    <div class="grid" id="preview"></div>
    <code id="snippet"></code>
    <button id="run">Run functions demo</button>
  </div>
  <script src="./functions-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

// Declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const double = (n) => n * 2;

console.log(greet('Ada'));
console.log('add 2+3 =', add(2, 3));
console.log('double 4 =', double(4));

document.getElementById('run').onclick = () => {
  document.getElementById('preview').innerHTML = [
    'Declaration: function greet(name) { ... }',
    'Expression: const add = function(a,b) { ... };',
    'Arrow: const double = (n) => n * 2;',
  ].map(text => '<div class="pill">' + text + '</div>').join('');

  document.getElementById('snippet').textContent =
'function greet(name) { return \"Hi \" + name; }\\n' +
'const add = function(a,b) { return a + b; };\\n' +
'const double = (n) => n * 2;';
};`;

export default function JavaScriptFunctions({ onOpenWebPlayground }: JavaScriptFunctionsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={FunctionSquare}
        category="JavaScript Fundamentals"
        title="Functions"
        description="Encapsulate logic, reuse code, and shape data flows with declarations, expressions, and arrows."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Functions?
          </CardTitle>
          <CardDescription className="text-base">
            Bundle instructions you can call anytime. Functions power reuse, composability, and clarity.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Reusable logic</h3>
            </div>
            <p className="text-sm text-muted-foreground">Call the same code with different inputs to avoid duplication.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">DRY</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Composable</h3>
            </div>
            <p className="text-sm text-muted-foreground">Return values and chain functions for clear data flows.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Pipelines</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">First-class</h3>
            </div>
            <p className="text-sm text-muted-foreground">Store in variables, pass as arguments, and return from other functions.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Flexible</Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is a Function */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FunctionSquare className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is a Function?
          </CardTitle>
          <CardDescription className="text-base">
            A function is a reusable block of code that performs a specific task
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Think of a function as a recipe: you give it ingredients (inputs), it follows instructions, and produces a result (output). Once defined, you can use it as many times as needed.
            </p>
            
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
                <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">simple-function.js</span>
                <span className="text-blue-600/70 dark:text-blue-400/70">Basic example</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Define the function
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Call the function multiple times
console.log(greet('Alice'));  // "Hello, Alice!"
console.log(greet('Bob'));    // "Hello, Bob!"
console.log(greet('Charlie')); // "Hello, Charlie!"`}
              </pre>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Key Benefit</AlertTitle>
              <AlertDescription>
                Write the code once, use it everywhere. Functions eliminate repetition and make code easier to maintain.
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
            Function Shapes at a Glance
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Pick the shape that matches your use case—hoisting, inline usage, or brevity.
          </p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <FunctionSquare className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h4 className="font-semibold">Declaration</h4>
            </div>
            <p className="text-sm text-muted-foreground">Hoisted; great for organizing utilities.</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>function greet(name) {'{'} return 'Hi ' + name; {'}'}</div>
            </div>
          </div>
          <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h4 className="font-semibold">Expression</h4>
            </div>
            <p className="text-sm text-muted-foreground">Not hoisted; good for passing around as values.</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const add = function (a, b) {'{'} return a + b; {'}'};</div>
            </div>
          </div>
          <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h4 className="font-semibold">Arrow</h4>
            </div>
            <p className="text-sm text-muted-foreground">Concise, lexical this; ideal for callbacks.</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const double = (n) =&gt; n * 2;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Function Anatomy */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Function Anatomy
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the parts of a function
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <pre className="font-mono text-sm overflow-x-auto">
{`function calculateTotal(price, tax) {
  const total = price + (price * tax);
  return total;
}

// ① function keyword
// ② name: calculateTotal
// ③ parameters: price, tax
// ④ function body: { ... }
// ⑤ return statement: sends back result`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Function Name
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Should describe what the function does
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Good names
function calculateDiscount() { }
function validateEmail() { }
function fetchUserData() { }

// Avoid vague names
function doStuff() { }  // ✗
function process() { }  // ✗`}
              </pre>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Parameters
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Inputs the function receives
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Multiple parameters
function add(a, b) {
  return a + b;
}

add(5, 3);  // 8
add(10, 20); // 30`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parameters & return */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Parameters & Return Values
          </CardTitle>
          <CardDescription className="text-base">
            Functions take inputs and send back outputs—validate and default them.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Defaults & validation</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function formatName(name = 'Guest') {
  return name.toUpperCase();
}

console.log(formatName('Alice'));  // "ALICE"
console.log(formatName());         // "GUEST"

function sum(a, b) {
  if (!a || !b) {
    throw Error('need both numbers');
  }
  return a + b;
}`}
            </pre>
            <p className="text-sm text-muted-foreground">Provide sensible defaults and fail fast when data is missing.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Return shapes</h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function getUser() {
  return { 
    name: 'Ada',
    age: 25 
  };
}

const user = getUser();
console.log(user.name);  // "Ada"

// Return arrays
function getScores() {
  return [95, 87, 92];
}`}
            </pre>
            <Alert>
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Return objects for clarity; return promises when doing async work.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Use Cases
          </CardTitle>
          <CardDescription className="text-base">
            Practical examples you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Form Validation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail('test@example.com'));
// true

console.log(validateEmail('invalid-email'));
// false`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Price Calculation
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function calculatePrice(price, discount = 0) {
  const finalPrice = price - (price * discount);
  return finalPrice.toFixed(2);
}

console.log(calculatePrice(100, 0.2));
// "80.00"

console.log(calculatePrice(50));
// "50.00" (no discount)`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Array Processing
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function getActiveUsers(users) {
  return users.filter(user => user.active);
}

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];

console.log(getActiveUsers(users));
// [{ name: 'Alice', active: true }, 
//  { name: 'Charlie', active: true }]`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                String Formatting
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function formatName(firstName, lastName) {
  return \`\${firstName} \${lastName}\`.trim();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + 
         str.slice(1).toLowerCase();
}

console.log(formatName('John', 'Doe'));
// "John Doe"

console.log(capitalize('hello WORLD'));
// "Hello world"`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
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
              <li>✅ Name functions clearly by behavior.</li>
              <li>✅ Keep functions small and single-purpose.</li>
              <li>✅ Prefer pure functions for predictable outputs.</li>
              <li>✅ Document complex parameters or return shapes.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Overloading functions with unrelated concerns.</li>
              <li>❌ Mutating external state unexpectedly.</li>
              <li>❌ Relying on implicit globals.</li>
              <li>❌ Returning mixed types without clear contracts.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Functions Live
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see declarations, expressions, and arrows in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">functions-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Declaration, expression, arrow</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
