'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Layers,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code,
  Lock,
  Eye,
  AlertCircle,
} from 'lucide-react';

export default function JavaScriptScope() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript · Scope & Closures"
        title="Scope"
        description="Master lexical scope, block scope, function scope, and the scope chain - the foundation of JavaScript variable accessibility."
        colorTheme="blue"
      />

      {/* What is Scope? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Scope?
          </CardTitle>
          <CardDescription className="text-base">
            Scope determines where variables are accessible in your code - the visibility rules of JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <strong>Scope</strong> is like a set of rules that determines which parts of your code can "see" and use which variables. Think of it as rooms in a house - you can see what's in your current room, but you might not be able to see what's in other rooms. Understanding scope is <strong>critical</strong> for avoiding bugs, managing memory, and writing clean code.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Visibility</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Where can I access this variable?
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Access control</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Protection</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Prevents naming conflicts and data leaks
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Security</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Hierarchy</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Variables exist in nested levels (scope chain)
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Layered</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Scope Matters</AlertTitle>
            <AlertDescription>
              Poor understanding of scope leads to bugs like variable collisions, memory leaks, and unexpected behavior. Mastering scope helps you write predictable, maintainable code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Global Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Global Scope
          </CardTitle>
          <CardDescription className="text-base">
            Variables declared outside any function or block - accessible everywhere in your code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Global Variable</h4>
              <p className="text-xs text-muted-foreground">
                Declared at the top level, accessible anywhere
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Global variable
const globalName = 'Alice';

function greet() {
  // Can access global variable
  console.log('Hello, ' + globalName);
}

function farewell() {
  // Also can access it
  console.log('Goodbye, ' + globalName);
}

greet();
farewell();
console.log(globalName);
// Output:
// greet() -> "Hello, Alice"
// farewell() -> "Goodbye, Alice"
// globalName -> "Alice"
// Accessible everywhere!`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Window Object (Browser)</h4>
              <p className="text-xs text-muted-foreground">
                Global variables attach to the <code className="font-mono text-xs">window</code> object
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Using var creates global property
var globalCount = 10;

// Same as window.globalCount
console.log(window.globalCount);

// let/const don't attach to window
let localCount = 20;
console.log(window.localCount);

// Use var sparingly!
console.log(globalCount);
// Output:
// window.globalCount -> 10
// window.localCount -> undefined
// let/const are safer`}
              </pre>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Global Scope Warning</AlertTitle>
            <AlertDescription>
              Avoid polluting the global scope! Too many global variables can cause naming conflicts and make debugging difficult. Use modules, closures, or IIFEs to contain your variables.
            </AlertDescription>
          </Alert>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Global Scope Best Practices
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use <code className="font-mono text-xs">const</code> or <code className="font-mono text-xs">let</code> instead of <code className="font-mono text-xs">var</code></li>
              <li>✅ Minimize global variables - use modules or functions</li>
              <li>✅ Prefix globals with descriptive names (APP_CONFIG)</li>
              <li>❌ Avoid implicit globals (variables without declaration)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Global Scope"
        description="Variables accessible everywhere in your code"
        code={`// Global variable
const globalName = 'Alice';

function greet() {
  // Can access global variable
  console.log('Hello, ' + globalName);
}

function farewell() {
  // Also can access it
  console.log('Goodbye, ' + globalName);
}

greet();
// Output: "Hello, Alice"

farewell();
// Output: "Goodbye, Alice"

console.log(globalName);
// Output: "Alice"

// Browser: var creates global property
var globalCount = 10;
console.log(window.globalCount);
// Output: 10

// let/const don't attach to window
let localCount = 20;
console.log(window.localCount);
// Output: undefined`}
        language="javascript"
        colorTheme="blue"
        icon={Code}
      />

      {/* Function Scope */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Function Scope
          </CardTitle>
          <CardDescription className="text-base">
            Variables declared inside a function are only accessible within that function.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Function Scope</h4>
              <p className="text-xs text-muted-foreground">
                Variables stay inside the function
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function calculateTotal() {
  // Function-scoped variables
  const price = 100;
  const tax = 10;
  const total = price + tax;
  
  console.log(total);
  return total;
}

calculateTotal();

// Error! Can't access function variables
console.log(price);
console.log(total);
// Output:
// calculateTotal() -> 110
// price -> ReferenceError
// total -> ReferenceError
// Variables are private to function`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Nested Functions</h4>
              <p className="text-xs text-muted-foreground">
                Inner functions can access outer function variables
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function outer() {
  const outerVar = 'I am outer';
  
  function inner() {
    // Can access outer's variable
    const innerVar = 'I am inner';
    console.log(outerVar);
    console.log(innerVar);
  }
  
  inner();
  // Can't access innerVar
  console.log(innerVar);
}

outer();
// Output:
// inner() can see outerVar
// outer() cannot see innerVar
// innerVar -> ReferenceError`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Parameters are Function-Scoped</h4>
              <p className="text-xs text-muted-foreground">
                Function parameters act like local variables
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function greet(name, age) {
  // name and age are function-scoped
  const message = 'Hello ' + name;
  console.log(message + ', age ' + age);
}

greet('Alice', 25);

// Error! Parameters not accessible outside
console.log(name);
console.log(age);
// Output:
// greet() -> "Hello Alice, age 25"
// name -> ReferenceError
// Parameters are local`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">var vs let/const in Functions</h4>
              <p className="text-xs text-muted-foreground">
                All are function-scoped, but behave differently in blocks
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function test() {
  var x = 1;
  let y = 2;
  const z = 3;
  
  if (true) {
    var x = 10;  // Same x!
    let y = 20;  // New y
    const z = 30; // New z
  }
  
  console.log(x);
  console.log(y);
  console.log(z);
}

test();
// Output:
// x -> 10 (reassigned)
// y -> 2 (block-scoped)
// z -> 3 (block-scoped)`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Function Scope"
        description="Variables private to functions and nested scopes"
        code={`// Function Scope - Variables stay inside
function calculateTotal() {
  const price = 100;
  const tax = 10;
  const total = price + tax;
  
  console.log(total);
  return total;
}

calculateTotal();
// Output: 110

// Can't access function variables outside
// console.log(price); // ReferenceError

// Nested Functions - Inner can access outer
function outer() {
  const outerVar = 'I am outer';
  
  function inner() {
    const innerVar = 'I am inner';
    console.log(outerVar); // Can access outer
    console.log(innerVar);
  }
  
  inner();
  // console.log(innerVar); // ReferenceError
}

outer();
// Output: "I am outer"
// Output: "I am inner"

// Parameters are Function-Scoped
function greet(name, age) {
  const message = 'Hello ' + name;
  console.log(message + ', age ' + age);
}

greet('Alice', 25);
// Output: "Hello Alice, age 25"

// console.log(name); // ReferenceError`}
        language="javascript"
        colorTheme="purple"
        icon={Code}
      />

      {/* Block Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lock className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Block Scope (ES6+)
          </CardTitle>
          <CardDescription className="text-base">
            Variables declared with let/const inside curly braces are only accessible within that block.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">if Statement Block</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">ES6+</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Variables stay inside the if block
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const age = 20;

if (age >= 18) {
  // Block-scoped variable
  const message = 'You can vote';
  let status = 'adult';
  
  console.log(message);
  console.log(status);
}

// Error! Can't access block variables
console.log(message);
console.log(status);
// Output:
// Inside if: "You can vote"
// Inside if: "adult"
// Outside if: ReferenceError
// Variables trapped in block`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">for Loop Block</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Common</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Loop variables stay in the loop
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Block-scoped loop variable
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Error! i not accessible
console.log(i);

// Each iteration has its own i
for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output:
// Loop: 0, 1, 2
// Outside: ReferenceError
// setTimeout: 0, 1
// let creates new i per iteration`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Standalone Block</h4>
              <p className="text-xs text-muted-foreground">
                You can create blocks without if/for/while
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Standalone block scope
{
  const blockVar = 'I am in a block';
  let anotherVar = 'Me too';
  
  console.log(blockVar);
  console.log(anotherVar);
}

// Error! Variables are block-scoped
console.log(blockVar);
console.log(anotherVar);
// Output:
// Inside block: works fine
// Outside block: ReferenceError
// Useful for organizing code`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">var Ignores Block Scope</h4>
              <p className="text-xs text-muted-foreground">
                var is only function-scoped, not block-scoped
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`if (true) {
  var x = 10;     // Function-scoped
  let y = 20;     // Block-scoped
  const z = 30;   // Block-scoped
}

// var leaks out!
console.log(x);

// let/const stay in block
console.log(y);
console.log(z);
// Output:
// x -> 10 (leaked out)
// y -> ReferenceError
// z -> ReferenceError
// Always use let/const!`}
              </pre>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Block Scope Best Practice</AlertTitle>
            <AlertDescription>
              Always use <code className="font-mono text-xs">let</code> or <code className="font-mono text-xs">const</code> instead of <code className="font-mono text-xs">var</code> to avoid variable leakage from blocks. This prevents bugs and makes code more predictable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Block Scope (ES6+)"
        description="let/const stay within curly braces, var leaks out"
        code={`// if Statement Block
const age = 20;

if (age >= 18) {
  const message = 'You can vote';
  let status = 'adult';
  
  console.log(message);
  // Output: "You can vote"
}

// console.log(message); // ReferenceError
// console.log(status);  // ReferenceError

// for Loop Block - let creates new binding
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Output: 0, 1, 2

// console.log(i); // ReferenceError

// Each iteration has its own i
for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1 (correct!)

// Standalone Block
{
  const blockVar = 'I am in a block';
  console.log(blockVar);
  // Output: "I am in a block"
}

// console.log(blockVar); // ReferenceError

// var Ignores Block Scope
if (true) {
  var x = 10;     // Function-scoped (leaks!)
  let y = 20;     // Block-scoped
  const z = 30;   // Block-scoped
}

console.log(x); // Output: 10 (leaked out!)
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError`}
        language="javascript"
        colorTheme="blue"
        icon={Lock}
      />

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in production code every day.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Module Pattern (Private Variables)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Using function scope for privacy
function createModule() {
  // Private variables
  let privateCount = 0;
  const privateSecret = 'hidden';
  
  // Public API
  return {
    increment() {
      privateCount++;
      return privateCount;
    },
    getCount() {
      return privateCount;
    }
  };
}

const module = createModule();
console.log(module.increment());
console.log(module.getCount());
console.log(module.privateCount);
// Output:
// increment() -> 1
// getCount() -> 1
// privateCount -> undefined
// Private variables protected!`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Config Object with Scope
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Using block scope for organization
{
  const API_KEY = 'secret-key';
  const BASE_URL = 'https://api.example.com';
  
  function makeRequest(endpoint) {
    return BASE_URL + endpoint + '?key=' + API_KEY;
  }
  
  window.api = { makeRequest };
}

// API_KEY is not accessible
console.log(typeof API_KEY);
console.log(api.makeRequest('/users'));
// Output:
// API_KEY -> undefined
// makeRequest() -> works
// Config is encapsulated`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Event Handlers with let
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Using let for proper closure
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    console.log('Button ' + i + ' clicked');
  });
}

// Each handler remembers its own i
// Using var would cause all to log same value
// Output:
// Button 0 clicked
// Button 1 clicked
// Button 2 clicked
// let creates new binding per iteration`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Temporary Scope for Cleanup
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Process data without polluting global scope
{
  const rawData = fetchData();
  const processed = processData(rawData);
  const validated = validateData(processed);
  
  saveToDatabase(validated);
}

// All intermediate variables are gone
// Only final result is saved
// Memory is freed automatically
// Output:
// rawData -> gone after block
// processed -> gone after block
// Memory efficient`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Real-World Scope Patterns"
        description="Practical scope usage in production code"
        code={`// Module Pattern - Private Variables
function createModule() {
  // Private variables (function scope)
  let privateCount = 0;
  const privateSecret = 'hidden';
  
  // Public API
  return {
    increment() {
      privateCount++;
      return privateCount;
    },
    getCount() {
      return privateCount;
    }
  };
}

const module = createModule();
console.log(module.increment()); // Output: 1
console.log(module.getCount());  // Output: 1
console.log(module.privateCount); // Output: undefined (private!)

// Config with Block Scope
{
  const API_KEY = 'secret-key';
  const BASE_URL = 'https://api.example.com';
  
  function makeRequest(endpoint) {
    return BASE_URL + endpoint + '?key=' + API_KEY;
  }
  
  window.api = { makeRequest };
}

console.log(typeof API_KEY); // Output: undefined (encapsulated!)
console.log(api.makeRequest('/users')); // Works!

// Event Handlers with let (proper closure)
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    console.log('Button ' + i + ' clicked');
    // Each handler remembers its own i!
  });
}

// Temporary Scope for Cleanup
{
  const rawData = fetchData();
  const processed = processData(rawData);
  const validated = validateData(processed);
  
  saveToDatabase(validated);
  // All intermediate variables freed after block
}`}
        language="javascript"
        colorTheme="purple"
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
              <li>✅ Use <code className="font-mono text-xs">const</code> by default, <code className="font-mono text-xs">let</code> when needed</li>
              <li>✅ Declare variables at the top of their scope</li>
              <li>✅ Keep scope as narrow as possible (block over function)</li>
              <li>✅ Use modules to avoid global scope pollution</li>
              <li>✅ Use IIFEs or blocks for temporary scope</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Never use <code className="font-mono text-xs">var</code> (use <code className="font-mono text-xs">let</code>/<code className="font-mono text-xs">const</code> instead)</li>
              <li>❌ Avoid creating global variables unnecessarily</li>
              <li>❌ Don't rely on hoisting - declare before use</li>
              <li>❌ Avoid variable shadowing (same name in nested scopes)</li>
              <li>❌ Don't create implicit globals (variables without declaration)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
