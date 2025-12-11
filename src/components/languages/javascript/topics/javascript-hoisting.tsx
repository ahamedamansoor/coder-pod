'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ArrowUp,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code,
  AlertCircle,
  Zap,
  Eye,
} from 'lucide-react';

export default function JavaScriptHoisting() {
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
console.log(myVar);
// Output:
// undefined
// Hello`}
              </pre>
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
console.log(myVar); // Hello
// Output:
// Declaration moves up
// Initialized with undefined
// Assignment happens later`}
              </pre>
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

console.log(a, b, c);
// Output:
// undefined
// undefined
// undefined
// 1 2 3 (after assignments)`}
              </pre>
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

example();
// Output:
// undefined (declaration hoisted)
// 5 (var ignores block scope)`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: var Hoisting"
        description="Declaration hoisted with undefined initialization"
        code={`// What you write
console.log(myVar); // Accessing before declaration
var myVar = 'Hello';
console.log(myVar);
// Output: undefined, then "Hello"

// What JavaScript does (conceptually)
var myVar;           // Declaration hoisted to top
console.log(myVar);  // undefined
myVar = 'Hello';     // Assignment stays here
console.log(myVar);  // "Hello"

// Multiple var declarations
console.log(a, b, c); // undefined undefined undefined
var a = 1;
var b = 2;
var c = 3;
console.log(a, b, c); // 1 2 3

// var ignores block scope - leaks out
function example() {
  console.log(x); // undefined (hoisted to function top)
  
  if (true) {
    var x = 5;     // Hoisted to function scope
  }
  
  console.log(x); // 5 (var leaks from block)
}

example();
// Output: undefined, 5
// var is function-scoped, not block-scoped!`}
        language="javascript"
        colorTheme="blue"
        icon={Code}
      />

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
// until declaration is executed
// Output:
// ReferenceError!
// letVar exists but in TDZ
// Cannot be accessed`}
              </pre>
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
// when declared
// Output:
// ReferenceError!
// constVar exists but in TDZ
// Must initialize at declaration`}
              </pre>
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

console.log(myVar); // 5 (accessible now)
// Output:
// TDZ from scope start to declaration
// Any access throws error
// After declaration: works fine`}
              </pre>
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
}
// Output:
// TDZ = better error detection
// Catches typos and logic errors
// Safer code!`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Temporal Dead Zone (TDZ)"
        description="let/const hoisted but in TDZ until declaration"
        code={`// let in Temporal Dead Zone
console.log(letVar); // ReferenceError!
let letVar = 'Hello';
// Cannot access 'letVar' before initialization

// const in Temporal Dead Zone
console.log(constVar); // ReferenceError!
const constVar = 'World';
// Must initialize const at declaration

// TDZ Visualization
// START OF TDZ for myVar
console.log(myVar); // ReferenceError

if (true) {
  console.log(myVar); // Still ReferenceError
}

// END OF TDZ (declaration executed)
let myVar = 5;
console.log(myVar); // 5 (works now!)

// Why TDZ is good - catches bugs early
function process(input) {
  console.log(result); // ReferenceError (bug caught!)
  let result = input * 2;
  return result;
}

// Bad with var - hides bugs
function processBad(input) {
  console.log(result); // undefined (bug NOT caught)
  var result = input * 2;
  return result;
}

// TDZ = better error detection and safer code!`}
        language="javascript"
        colorTheme="rose"
        icon={AlertCircle}
      />

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

// Entire function is hoisted to top
// Output:
// greet("Alice") -> "Hello, Alice"
// Full function definition hoisted
// Name + Body both hoisted`}
              </pre>
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
// Function assigned later
// Output:
// TypeError!
// greet is undefined
// Function expression not hoisted`}
              </pre>
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

// Arrow function in TDZ
// Output:
// ReferenceError!
// Arrow function in TDZ
// Cannot access before declaration`}
              </pre>
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
console.log(fact);
// Output:
// factorial(5) -> 120
// fact only accessible inside function
// fact not hoisted to outer scope`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Function Hoisting"
        description="Function declarations fully hoisted, expressions not"
        code={`// Function Declaration - FULLY HOISTED
// Can call before declaration
console.log(greet('Alice')); // "Hello, Alice"

function greet(name) {
  return 'Hello, ' + name;
}
// Entire function (name + body) hoisted to top!

// Function Expression - NOT HOISTED
console.log(greetExpr('Bob')); // TypeError!

var greetExpr = function(name) {
  return 'Hello, ' + name;
};
// Only 'var greetExpr' hoisted (as undefined)
// Function assigned later

// Arrow Function - IN TDZ (like let/const)
console.log(greetArrow('Charlie')); // ReferenceError!

const greetArrow = (name) => {
  return 'Hello, ' + name;
};
// Arrow function in TDZ until declaration

// Named Function Expression
var factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // 'fact' accessible inside
};

console.log(factorial(5)); // 120
console.log(fact);          // ReferenceError!
// 'fact' only accessible inside function
// Not hoisted to outer scope`}
        language="javascript"
        colorTheme="emerald"
        icon={Code}
      />

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
console.log(validPerson.name);
// Output:
// ReferenceError before declaration
// Classes in TDZ
// validPerson works after declaration`}
              </pre>
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
console.log(validInstance.value);
// Output:
// ReferenceError!
// Class expression in TDZ
// Works after declaration`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Class Hoisting (ES6+)"
        description="Classes in TDZ like let/const - must declare before use"
        code={`// Class Declaration - IN TDZ
// Cannot use before declaration
const person = new Person('Alice'); // ReferenceError!

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Must declare before use
const validPerson = new Person('Bob'); // Works!
console.log(validPerson.name); // "Bob"

// Class Expression - IN TDZ
// Same behavior as const/let
const instance = new MyClass(); // ReferenceError!

const MyClass = class {
  constructor() {
    this.value = 42;
  }
};

// Works after declaration
const validInstance = new MyClass();
console.log(validInstance.value); // 42

// Classes are NOT like function declarations
// They're hoisted but stay in TDZ until declaration
// Always declare classes before using them!`}
        language="javascript"
        colorTheme="purple"
        icon={Code}
      />

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
// Output: 0, 1, 2
// Output:
// var: hoisted to function scope
// All closures share same i
// let: creates new binding per iteration`}
              </pre>
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
}
// Output:
// All functions hoisted first
// Order does not matter
// Can call before declaration`}
              </pre>
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
  : function() { return 'B'; };
// Output:
// Conditional declarations = unpredictable
// Use function expressions instead
// More predictable behavior`}
              </pre>
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
console.log(module.getCount());
// Output:
// Functions hoisted in IIFE
// Can return before definition
// Clean module pattern`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Real-World Hoisting Patterns"
        description="Common bugs and best practices with hoisting"
        code={`// Classic Loop Bug (var)
// BUG: All timeouts log 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (all closures share same i)

// FIX: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 (each iteration has own i)

// Function Declaration Order - Works!
processData(); // Can call before declaration

function processData() {
  const data = fetchData();
  return validate(data);
}

function fetchData() {
  return { id: 1, name: 'Test' };
}

function validate(data) {
  return data.id && data.name;
}
// All functions hoisted - order doesn't matter

// AVOID: Conditional Function Declarations
if (condition) {
  function doSomething() { return 'A'; }
} else {
  function doSomething() { return 'B'; }
}
// Unpredictable behavior!

// BETTER: Use function expressions
const doSomething = condition 
  ? function() { return 'A'; }
  : function() { return 'B'; };
// Predictable behavior

// Module Pattern with Hoisting
const module = (function() {
  let count = 0;
  
  // Can return before function definitions
  return { increment, getCount };
  
  function increment() {
    count++;
  }
  
  function getCount() {
    return count;
  }
})();

module.increment();
console.log(module.getCount()); // 1`}
        language="javascript"
        colorTheme="blue"
        icon={Sparkles}
      />

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

    </div>
  );
}
