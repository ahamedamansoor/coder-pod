'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Layers,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  Lock,
  Eye,
  AlertCircle,
} from 'lucide-react';

interface JavaScriptScopeProps {
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
  <title>Scope Demo</title>
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
    <h1>Scope Demonstration</h1>
    <p>Open the browser console (F12) to see scope examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./scope-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== JavaScript Scope Demo ===\\n');

// 1. Global Scope
console.log('1. GLOBAL SCOPE:');
const globalVar = 'I am global';

function showGlobal() {
  console.log(globalVar);
}

showGlobal();
console.log(globalVar);

// 2. Function Scope
console.log('\\n2. FUNCTION SCOPE:');
function outerFunction() {
  const functionVar = 'I am in function scope';
  console.log(functionVar);
  
  if (true) {
    console.log(functionVar);
  }
}

outerFunction();

// 3. Block Scope (let/const)
console.log('\\n3. BLOCK SCOPE:');
if (true) {
  const blockVar = 'I am in block scope';
  let anotherBlockVar = 'Me too';
  console.log(blockVar);
  console.log(anotherBlockVar);
}

// 4. Lexical Scope
console.log('\\n4. LEXICAL SCOPE:');
function outer() {
  const outerVar = 'Outer';
  
  function inner() {
    const innerVar = 'Inner';
    console.log(outerVar + ' accessible from ' + innerVar);
  }
  
  inner();
}

outer();

// 5. Scope Chain
console.log('\\n5. SCOPE CHAIN:');
const level1 = 'Level 1';

function firstLevel() {
  const level2 = 'Level 2';
  
  function secondLevel() {
    const level3 = 'Level 3';
    console.log(level1, level2, level3);
  }
  
  secondLevel();
}

firstLevel();

console.log('\\nAll scope examples demonstrated!');
`;

export default function JavaScriptScope({ onOpenWebPlayground }: JavaScriptScopeProps) {
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
console.log(globalName);`}
              </pre>
              <SnippetOutput lines={['greet() -> "Hello, Alice"', 'farewell() -> "Goodbye, Alice"', 'globalName -> "Alice"', 'Accessible everywhere!']} />
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
console.log(globalCount);`}
              </pre>
              <SnippetOutput lines={['window.globalCount -> 10', 'window.localCount -> undefined', 'let/const are safer']} />
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
console.log(total);`}
              </pre>
              <SnippetOutput lines={['calculateTotal() -> 110', 'price -> ReferenceError', 'total -> ReferenceError', 'Variables are private to function']} />
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

outer();`}
              </pre>
              <SnippetOutput lines={['inner() can see outerVar', 'outer() cannot see innerVar', 'innerVar -> ReferenceError']} />
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
console.log(age);`}
              </pre>
              <SnippetOutput lines={['greet() -> "Hello Alice, age 25"', 'name -> ReferenceError', 'Parameters are local']} />
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

test();`}
              </pre>
              <SnippetOutput lines={['x -> 10 (reassigned)', 'y -> 2 (block-scoped)', 'z -> 3 (block-scoped)']} />
            </div>
          </div>
        </CardContent>
      </Card>

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
console.log(status);`}
              </pre>
              <SnippetOutput lines={['Inside if: "You can vote"', 'Inside if: "adult"', 'Outside if: ReferenceError', 'Variables trapped in block']} />
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
}`}
              </pre>
              <SnippetOutput lines={['Loop: 0, 1, 2', 'Outside: ReferenceError', 'setTimeout: 0, 1', 'let creates new i per iteration']} />
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
console.log(anotherVar);`}
              </pre>
              <SnippetOutput lines={['Inside block: works fine', 'Outside block: ReferenceError', 'Useful for organizing code']} />
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
console.log(z);`}
              </pre>
              <SnippetOutput lines={['x -> 10 (leaked out)', 'y -> ReferenceError', 'z -> ReferenceError', 'Always use let/const!']} />
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
console.log(module.privateCount);`}
              </pre>
              <SnippetOutput lines={['increment() -> 1', 'getCount() -> 1', 'privateCount -> undefined', 'Private variables protected!']} />
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
console.log(api.makeRequest('/users'));`}
              </pre>
              <SnippetOutput lines={['API_KEY -> undefined', 'makeRequest() -> works', 'Config is encapsulated']} />
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
// Using var would cause all to log same value`}
              </pre>
              <SnippetOutput lines={['Button 0 clicked', 'Button 1 clicked', 'Button 2 clicked', 'let creates new binding per iteration']} />
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
// Memory is freed automatically`}
              </pre>
              <SnippetOutput lines={['rawData -> gone after block', 'processed -> gone after block', 'Memory efficient']} />
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

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practice Scope Concepts
          </CardTitle>
          <CardDescription className="text-base">
            Interactive demo covering global, function, and block scope. Open the console to see how scope works!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">scope-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">All scope types demonstrated</span>
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
