'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  FunctionSquare,
  Sparkles,
  Code2,
  Lightbulb,
  Package,
  ArrowRight,
  Calculator,
} from 'lucide-react';

export default function JavaScriptFunctions() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={FunctionSquare}
        category="JavaScript Fundamentals"
        title="Functions"
        description="Reusable blocks of code that you can call over and over"
        colorTheme="yellow"
      />

      {/* What are Functions? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Functions: Your Code Recipes
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A function is like a <strong className="text-blue-700 dark:text-blue-400">recipe</strong> you can use over and over. Write the code once, then "call" the function whenever you need it. Give it ingredients (inputs) and get back a result!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <FunctionSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">Why Use Functions?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              • Avoid repeating code • Make code organized • Easy to test • Change once, fix everywhere
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Function Basics */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>How Functions Work</CardTitle>
              <CardDescription>Define once, use many times</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Two Steps</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Define the Function</h5>
                    <code className="text-sm font-mono bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded block">
                      function sayHello() {'{ ... }'}
                    </code>
                    <p className="text-xs text-gray-500 mt-1">Write what the function does</p>
                  </div>
                </div>

                <div className="text-center text-2xl text-gray-400">↓</div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Call the Function</h5>
                    <code className="text-sm font-mono bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded block">
                      sayHello();
                    </code>
                    <p className="text-xs text-gray-500 mt-1">Run it whenever you need</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Your First Function"
        description="Define a function and call it multiple times"
        code={`// Step 1: Define the function
function sayHello() {
  console.log('Hello, World!');
}

// Step 2: Call it (as many times as you want!)
sayHello();  // Hello, World!
sayHello();  // Hello, World!
sayHello();  // Hello, World!

// Without a function, we'd have to write:
// console.log('Hello, World!');
// console.log('Hello, World!');
// console.log('Hello, World!');`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Parameters - Give Functions Inputs</CardTitle>
              <CardDescription>Make functions flexible by passing in values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Parameters = Inputs</h4>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <span className="font-mono text-sm">greet(name)</span>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <span className="font-mono text-sm">"Alice"</span>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <span className="font-mono text-sm">"Hello, Alice!"</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                Function takes input, processes it, gives output
              </p>
            </div>
          </div>

          <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle>Parameters vs Arguments</AlertTitle>
            <AlertDescription className="text-base">
              <strong>Parameter</strong> = The variable in the function definition<br/>
              <strong>Argument</strong> = The actual value you pass in when calling
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Functions with Parameters"
        description="Pass values into functions to make them flexible"
        code={`// Function with ONE parameter
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice');    // Hello, Alice!
greet('Bob');      // Hello, Bob!
greet('Charlie');  // Hello, Charlie!

// Function with TWO parameters
function add(a, b) {
  console.log(a + ' + ' + b + ' = ' + (a + b));
}

add(5, 3);   // 5 + 3 = 8
add(10, 20); // 10 + 20 = 30
add(7, 2);   // 7 + 2 = 9

// Function with THREE parameters
function introduce(name, age, city) {
  console.log('I am ' + name + ', ' + age + ' years old, from ' + city);
}

introduce('Alice', 25, 'New York');
// Output: I am Alice, 25 years old, from New York`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Return Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <ArrowRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>return - Send Back a Result</CardTitle>
              <CardDescription>Get a value back from a function</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">return Sends Back a Value</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function double(number) {
  return number * 2;
}

const result = double(5);
// result is 10`}</pre>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">return</code> keyword sends a value back, and you can store it in a variable!
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border-2 bg-white dark:bg-slate-900 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">Without return</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 mb-3">
{`function add(a, b) {
  console.log(a + b);
}`}</pre>
              <p className="text-xs text-gray-500">Just prints, can't use the result</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-white dark:bg-slate-900 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">With return ✅</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 mb-3">
{`function add(a, b) {
  return a + b;
}`}</pre>
              <p className="text-xs text-gray-500">Returns value, can use anywhere</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="return Statement Examples"
        description="Get results back from functions"
        code={`// Function that returns a value
function multiply(a, b) {
  return a * b;
}

// Store the returned value
const result1 = multiply(5, 3);
console.log('Result:', result1);  // 15

// Use returned value directly
console.log('10 x 4 =', multiply(10, 4));  // 40

// Return stops the function immediately
function checkAge(age) {
  if (age < 18) {
    return 'Too young';
  }
  return 'Old enough';
}

console.log(checkAge(16));  // Too young
console.log(checkAge(21));  // Old enough

// Function that calculates and returns
function calculateTotal(price, tax) {
  const total = price + (price * tax);
  return total;
}

const finalPrice = calculateTotal(100, 0.08);
console.log('Total: $' + finalPrice);  // Total: $108`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: Calculator"
        description="Build reusable calculator functions"
        code={`// Calculator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero!';
  }
  return a / b;
}

// Use the calculator
console.log('10 + 5 =', add(10, 5));        // 15
console.log('10 - 5 =', subtract(10, 5));   // 5
console.log('10 × 5 =', multiply(10, 5));   // 50
console.log('10 ÷ 5 =', divide(10, 5));     // 2
console.log('10 ÷ 0 =', divide(10, 0));     // Cannot divide by zero!

// Chain functions together
const result = add(multiply(2, 3), 4);
console.log('(2 × 3) + 4 =', result);       // 10`}
        language="javascript"
        colorTheme="yellow"
        icon={Calculator}
      />

      {/* Function Expressions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Other Ways to Write Functions</CardTitle>
              <CardDescription>Arrow functions - a shorter syntax</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Regular Function</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded-lg p-4 border">
{`function greet(name) {
  return 'Hello, ' + name;
}`}</pre>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Arrow Function ➡️</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded-lg p-4 border">
{`const greet = (name) => {
  return 'Hello, ' + name;
}`}</pre>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Both Work the Same!</AlertTitle>
            <AlertDescription className="text-base">
              Arrow functions are just a shorter way to write functions. They're popular in modern JavaScript!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Arrow Function Examples"
        description="Modern, concise function syntax"
        code={`// Regular function
function double(n) {
  return n * 2;
}

// Arrow function - same thing!
const doubleArrow = (n) => {
  return n * 2;
};

// Even shorter - if one line, skip return and {}
const doubleShort = (n) => n * 2;

console.log(double(5));       // 10
console.log(doubleArrow(5));  // 10
console.log(doubleShort(5));  // 10

// No parameters - use empty ()
const sayHi = () => {
  console.log('Hi!');
};

sayHi();  // Hi!

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 7));  // 10`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Functions = Reusable Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Write once, use many times
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Parameters = Inputs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pass values into functions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">↩️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">return = Output</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Send a value back from function
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arrow Functions = Shorter</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern syntax: (x) {'=>'} x * 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
