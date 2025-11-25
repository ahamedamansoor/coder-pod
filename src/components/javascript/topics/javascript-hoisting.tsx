'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ArrowUp,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  AlertCircle,
  Zap,
  Eye,
} from 'lucide-react';

interface JavaScriptHoistingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hoisting Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
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
    }
    .console-hint { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      margin-top: 24px; 
      font-family: monospace; 
      font-size: 14px; 
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>JavaScript Hoisting</h1>
    <p>Open the browser console (F12) to see hoisting examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./hoisting-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== JavaScript Hoisting Demo ===\\n');

// 1. var Hoisting
console.log('1. VAR HOISTING:');
console.log(varVariable);
var varVariable = 'I am hoisted';
console.log(varVariable);

// 2. let/const in Temporal Dead Zone
console.log('\\n2. LET/CONST (TDZ):');
try {
  console.log(letVariable);
} catch (error) {
  console.log('Error:', error.message);
}
let letVariable = 'I am in TDZ before declaration';

// 3. Function Declaration Hoisting
console.log('\\n3. FUNCTION HOISTING:');
console.log(hoistedFunction());

function hoistedFunction() {
  return 'I am fully hoisted!';
}

// 4. Function Expression NOT Hoisted
console.log('\\n4. FUNCTION EXPRESSION:');
try {
  console.log(notHoisted());
} catch (error) {
  console.log('Error:', error.message);
}

var notHoisted = function() {
  return 'I am NOT hoisted';
};

console.log(notHoisted());

// 5. Class Hoisting (also in TDZ)
console.log('\\n5. CLASS HOISTING:');
try {
  const instance = new MyClass();
} catch (error) {
  console.log('Error:', error.message);
}

class MyClass {
  constructor() {
    this.name = 'MyClass';
  }
}

const instance = new MyClass();
console.log('After declaration:', instance.name);

console.log('\\nAll hoisting examples demonstrated!');
`;

export default function JavaScriptHoisting({ onOpenWebPlayground }: JavaScriptHoistingProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ArrowUp}
        category="JavaScript · Scope & Closures"
        title="Hoisting"
        description="Understand how JavaScript moves declarations to the top of their scope during compilation - the temporal dead zone, var vs let/const, and function hoisting."
        colorTheme="blue"
      />

      {/* What is Hoisting? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Hoisting?
          </CardTitle>
          <CardDescription className="text-base">
            Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope during the compilation phase.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of hoisting like a <strong>stage crew</strong> that prepares the stage before the show. Before your code executes, JavaScript's engine scans through it and "moves" all declarations to the top. However, <strong>only declarations are hoisted, not initializations</strong>. This can lead to surprising behavior if you don't understand how it works!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Declarations Move Up</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Variable and function declarations are hoisted to the top
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Before execution</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-sm">Initializations Stay</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Assignments and initializations stay where they are
              </p>
              <Badge className="mt-2 bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 text-xs">Original position</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Different Rules</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                var, let, const, and functions hoist differently
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Important!</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The Key Insight</AlertTitle>
            <AlertDescription>
              Hoisting is NOT about physically moving code. It's about how JavaScript's engine processes your code in two phases: <strong>compilation</strong> (where declarations are registered) and <strong>execution</strong> (where assignments happen).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* var Hoisting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            var Hoisting - Declaration vs Initialization
          </CardTitle>
          <CardDescription className="text-base">
            var declarations are hoisted and initialized with undefined.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">What You Write</h4>
              <p className="text-xs text-muted-foreground">
                Accessing var before declaration
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log(myVar);
var myVar = 'Hello';
console.log(myVar);`}
              </pre>
              <SnippetOutput lines={['undefined', 'Hello']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">What JavaScript Does</h4>
              <p className="text-xs text-muted-foreground">
                How the engine interprets it
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Declaration hoisted to top
var myVar;

console.log(myVar); // undefined
myVar = 'Hello';    // Assignment stays here
console.log(myVar); // Hello`}
              </pre>
              <SnippetOutput lines={['Declaration moves up', 'Initialized with undefined', 'Assignment happens later']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Multiple var Declarations</h4>
              <p className="text-xs text-muted-foreground">
                All var declarations are hoisted
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log(a);
console.log(b);
console.log(c);

var a = 1;
var b = 2;
var c = 3;

console.log(a, b, c);`}
              </pre>
              <SnippetOutput lines={['undefined', 'undefined', 'undefined', '1 2 3 (after assignments)']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">var in Functions</h4>
              <p className="text-xs text-muted-foreground">
                var is hoisted to function scope, not block scope
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function example() {
  console.log(x); // undefined (hoisted)
  
  if (true) {
    var x = 5;
  }
  
  console.log(x); // 5 (var leaks from block)
}

example();`}
              </pre>
              <SnippetOutput lines={['undefined (declaration hoisted)', '5 (var ignores block scope)']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Temporal Dead Zone */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/40 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertCircle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Temporal Dead Zone (TDZ) - let & const
          </CardTitle>
          <CardDescription className="text-base">
            let and const ARE hoisted, but they're in a "temporal dead zone" until their declaration is reached.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Critical Difference</AlertTitle>
            <AlertDescription>
              Unlike <code className="font-mono text-xs">var</code>, accessing <code className="font-mono text-xs">let</code>/<code className="font-mono text-xs">const</code> before declaration throws a <strong>ReferenceError</strong>. They exist but cannot be accessed until initialized.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">let in Temporal Dead Zone</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30">ES6+</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Accessing before declaration throws error
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log(letVar);
let letVar = 'Hello';

// ReferenceError:
// Cannot access 'letVar' before initialization

// TDZ exists from start of scope
// until declaration is executed`}
              </pre>
              <SnippetOutput lines={['ReferenceError!', 'letVar exists but in TDZ', 'Cannot be accessed']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">const in Temporal Dead Zone</h4>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30">ES6+</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Same TDZ behavior as let
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log(constVar);
const constVar = 'World';

// ReferenceError:
// Cannot access 'constVar' before initialization

// const must be initialized
// when declared`}
              </pre>
              <SnippetOutput lines={['ReferenceError!', 'constVar exists but in TDZ', 'Must initialize at declaration']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">TDZ Visualization</h4>
              <p className="text-xs text-muted-foreground">
                The zone where variable exists but cannot be accessed
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// START OF TDZ for myVar
console.log(myVar); // ReferenceError

// Still in TDZ
if (true) {
  console.log(myVar); // ReferenceError
}

// END OF TDZ (declaration executed)
let myVar = 5;

console.log(myVar); // 5 (accessible now)`}
              </pre>
              <SnippetOutput lines={['TDZ from scope start to declaration', 'Any access throws error', 'After declaration: works fine']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Why TDZ Exists</h4>
              <p className="text-xs text-muted-foreground">
                Prevents using variables before proper initialization
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Good: Catches bugs early
function process(input) {
  console.log(result); // ReferenceError!
  let result = input * 2;
  return result;
}

// Bad: var hides the bug
function processBad(input) {
  console.log(result); // undefined (no error)
  var result = input * 2;
  return result;
}`}
              </pre>
              <SnippetOutput lines={['TDZ = better error detection', 'Catches typos and logic errors', 'Safer code!']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Function Hoisting */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Function Hoisting
          </CardTitle>
          <CardDescription className="text-base">
            Function declarations are fully hoisted - both name and body!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Function Declaration - Fully Hoisted</h4>
              <p className="text-xs text-muted-foreground">
                You can call it before declaration
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Call before declaration - WORKS!
console.log(greet('Alice'));

function greet(name) {
  return 'Hello, ' + name;
}

// Entire function is hoisted to top`}
              </pre>
              <SnippetOutput lines={['greet("Alice") -> "Hello, Alice"', 'Full function definition hoisted', 'Name + Body both hoisted']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Function Expression - NOT Hoisted</h4>
              <p className="text-xs text-muted-foreground">
                Treated like a variable assignment
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// TypeError: greet is not a function
console.log(greet('Bob'));

var greet = function(name) {
  return 'Hello, ' + name;
};

// Only 'var greet' is hoisted (undefined)
// Function assigned later`}
              </pre>
              <SnippetOutput lines={['TypeError!', 'greet is undefined', 'Function expression not hoisted']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Arrow Functions - NOT Hoisted</h4>
              <p className="text-xs text-muted-foreground">
                Arrow functions behave like const/let
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// ReferenceError!
console.log(greet('Charlie'));

const greet = (name) => {
  return 'Hello, ' + name;
};

// Arrow function in TDZ`}
              </pre>
              <SnippetOutput lines={['ReferenceError!', 'Arrow function in TDZ', 'Cannot access before declaration']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Named Function Expression</h4>
              <p className="text-xs text-muted-foreground">
                Function name only accessible inside
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`var factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can use 'fact' inside
};

console.log(factorial(5));

// Error: fact is not defined (outside)
console.log(fact);`}
              </pre>
              <SnippetOutput lines={['factorial(5) -> 120', 'fact only accessible inside function', 'fact not hoisted to outer scope']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Class Hoisting */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Class Hoisting (ES6+)
          </CardTitle>
          <CardDescription className="text-base">
            Classes are hoisted but remain in TDZ until declaration, just like let/const.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Class Declaration</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">ES6+</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Classes are in TDZ before declaration
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// ReferenceError!
const person = new Person('Alice');

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Must declare before use
const validPerson = new Person('Bob');
console.log(validPerson.name);`}
              </pre>
              <SnippetOutput lines={['ReferenceError before declaration', 'Classes in TDZ', 'validPerson works after declaration']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Class Expression</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">ES6+</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Follows same rules as function expressions
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// ReferenceError with const
const instance = new MyClass();

const MyClass = class {
  constructor() {
    this.value = 42;
  }
};

// Works after declaration
const validInstance = new MyClass();
console.log(validInstance.value);`}
              </pre>
              <SnippetOutput lines={['ReferenceError!', 'Class expression in TDZ', 'Works after declaration']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples & Common Mistakes
          </CardTitle>
          <CardDescription className="text-base">
            Practical scenarios where hoisting causes bugs and how to avoid them.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                The Classic Loop Bug (var)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// BUG: All timeouts log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// Output: 3, 3, 3

// FIX: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// Output: 0, 1, 2`}
              </pre>
              <SnippetOutput lines={['var: hoisted to function scope', 'All closures share same i', 'let: creates new binding per iteration']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Function Declaration Order
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Works! Function declarations hoisted
processData();

function processData() {
  const data = fetchData();
  return validate(data);
}

function fetchData() {
  return { id: 1, name: 'Test' };
}

function validate(data) {
  return data.id && data.name;
}`}
              </pre>
              <SnippetOutput lines={['All functions hoisted first', 'Order does not matter', 'Can call before declaration']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Conditional Function Declaration
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// AVOID: Conditional function declarations
if (condition) {
  function doSomething() {
    return 'A';
  }
} else {
  function doSomething() {
    return 'B';
  }
}

// BETTER: Use function expressions
const doSomething = condition 
  ? function() { return 'A'; }
  : function() { return 'B'; };`}
              </pre>
              <SnippetOutput lines={['Conditional declarations = unpredictable', 'Use function expressions instead', 'More predictable behavior']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Module Pattern with Hoisting
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const module = (function() {
  // Private variables
  let count = 0;
  
  // Public API (hoisted functions)
  return {
    increment,
    getCount
  };
  
  function increment() {
    count++;
  }
  
  function getCount() {
    return count;
  }
})();

module.increment();
console.log(module.getCount());`}
              </pre>
              <SnippetOutput lines={['Functions hoisted in IIFE', 'Can return before definition', 'Clean module pattern']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Always use <code className="font-mono text-xs">let</code>/<code className="font-mono text-xs">const</code> instead of <code className="font-mono text-xs">var</code></li>
              <li>✅ Declare variables at the top of their scope</li>
              <li>✅ Initialize variables when declaring them</li>
              <li>✅ Use function declarations for utility functions</li>
              <li>✅ Understand TDZ to catch bugs early</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Never rely on hoisting for variable access</li>
              <li>❌ Don't use <code className="font-mono text-xs">var</code> (unpredictable hoisting)</li>
              <li>❌ Avoid accessing variables before declaration</li>
              <li>❌ Don't use conditional function declarations</li>
              <li>❌ Don't assume hoisting will save you from bad order</li>
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
            Launch the simulator closure built playground to experiment with ✨ hoisting, var behavior, and temporal dead zone.
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
            The console output highlights hoisting behavior (var hoisting, TDZ, function declarations, and class hoisting) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
