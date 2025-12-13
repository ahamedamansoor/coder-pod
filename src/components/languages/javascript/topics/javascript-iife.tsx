'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Zap,
  Sparkles,
  Lock,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Shield,
  Package,
  Code2,
} from 'lucide-react';

export default function JavaScriptIIFE() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="IIFE (Immediately Invoked Function Expressions)"
        description="Functions that execute immediately - protect your scope and avoid global pollution"
        colorTheme="yellow"
      />

      {/* What are IIFEs */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is an IIFE?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                IIFE stands for <strong className="text-yellow-700 dark:text-yellow-400">"Immediately Invoked Function Expression"</strong>. It's a function that runs as soon as it's defined. Think of it like a function that calls itself automatically!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              It's like a self-destructing message - the function creates a private space, does its work, and disappears, leaving no trace in the global scope!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic IIFE Syntax</CardTitle>
              <CardDescription>Two ways to write an IIFE</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wrap the function in parentheses and add <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">()</code> to invoke it immediately!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Method 1: Recommended
(function() {
  console.log('I run immediately!');
})();

// Method 2: Alternative
(function() {
  console.log('This also works!');
}());

// Both do the same thing!
// Output: I run immediately!
// Output: This also works!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Regular Function vs IIFE"
        description="See the difference between normal functions and IIFEs"
        code={`// Regular function - you must call it
function greet() {
  console.log('Hello!');
}
greet(); // Must call manually
// Output: Hello!

// IIFE - calls itself automatically
(function() {
  console.log('Hi there!');
})(); // Runs immediately!
// Output: Hi there!

// The IIFE executed without us calling it!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Private Scope */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Private Scope - The Main Benefit</CardTitle>
              <CardDescription>Keep variables private and avoid global pollution</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Why Use IIFEs?</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Variables inside an IIFE are <strong>private</strong> - they don't pollute the global scope and can't be accessed from outside!
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Without IIFE</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`var name = 'Alice';
var age = 25;

console.log(name); // Alice
console.log(age);  // 25

// Global scope polluted!
// Anyone can access these ❌`}</pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">✅ With IIFE</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`(function() {
  var name = 'Alice';
  var age = 25;
  
  console.log(name); // Alice
  console.log(age);  // 25
})();

// Try to access outside:
console.log(name); // undefined
console.log(age);  // undefined

// Private! ✅`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="IIFE Prevents Global Pollution"
        description="Variables stay private inside the IIFE"
        code={`// Without IIFE - pollutes global
var counter = 0;
counter++; // Anyone can modify this!

// With IIFE - keeps it private
(function() {
  var counter = 0;
  counter++;
  console.log(counter); // 1
})();

// Can't access it outside
console.log(typeof counter); // undefined

// The counter variable is protected!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* IIFE with Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>IIFE with Parameters</CardTitle>
              <CardDescription>Pass values into your IIFE</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Pass Data In</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You can pass arguments to IIFEs just like regular functions!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// IIFE with parameters
(function(name, age) {
  console.log('Name: ' + name);
  console.log('Age: ' + age);
})('Alice', 25);

// Output:
// Name: Alice
// Age: 25

// Pass any data you need!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Configuration IIFE"
        description="Pass configuration objects to IIFEs"
        code={`// Initialize app with config
(function(config) {
  console.log('App Name: ' + config.name);
  console.log('Version: ' + config.version);
  console.log('Debug Mode: ' + config.debug);
  
  // Setup code here...
  if (config.debug) {
    console.log('Debug mode enabled!');
  }
})({
  name: 'MyApp',
  version: '1.0.0',
  debug: true
});

// Output:
// App Name: MyApp
// Version: 1.0.0
// Debug Mode: true
// Debug mode enabled!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Return Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>IIFEs Can Return Values</CardTitle>
              <CardDescription>Create modules with public APIs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Module Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                IIFEs can return objects with methods - this is the classic <strong>Module Pattern</strong>!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`var counter = (function() {
  var count = 0; // Private!
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1

// Can't access count directly!
console.log(counter.count); // undefined`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Calculator Module"
        description="Create a calculator with private state using IIFE"
        code={`var calculator = (function() {
  var result = 0; // Private variable
  
  return {
    add: function(num) {
      result += num;
      return this;
    },
    subtract: function(num) {
      result -= num;
      return this;
    },
    multiply: function(num) {
      result *= num;
      return this;
    },
    getResult: function() {
      return result;
    },
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

// Chain operations!
calculator
  .add(10)
  .multiply(2)
  .subtract(5);

console.log(calculator.getResult()); // 15

calculator.reset();
console.log(calculator.getResult()); // 0

// 'result' is completely private!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Arrow Function IIFE */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Modern IIFE with Arrow Functions</CardTitle>
              <CardDescription>ES6 syntax for IIFEs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Cleaner Syntax</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You can use arrow functions for shorter IIFE syntax!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Traditional IIFE
(function() {
  console.log('Old style');
})();

// Arrow function IIFE
(() => {
  console.log('Modern style');
})();

// With parameters
((name) => {
  console.log('Hello, ' + name);
})('Alice');

// Output:
// Old style
// Modern style
// Hello, Alice`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Async IIFE"
        description="Use async/await inside an IIFE"
        code={`// Async IIFE - very common in modern JavaScript
(async () => {
  console.log('Starting...');
  
  // Simulate API call
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  await wait(1000);
  console.log('1 second passed');
  
  await wait(1000);
  console.log('2 seconds passed');
  
  console.log('Done!');
})();

// Output:
// Starting...
// (1 second later) 1 second passed
// (1 second later) 2 seconds passed
// Done!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>When to use IIFEs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">1. Avoid Global Pollution</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`(function() {
  var temp = 'temporary';
  // Use temp here
})();
// temp doesn't exist outside`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">2. Create Modules</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`var module = (function() {
  var private = 'secret';
  return {
    public: 'exposed'
  };
})();`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">3. Initialize Code</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`(function() {
  // Setup code
  console.log('App initialized');
  // Runs immediately!
})();`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">4. Async Operations</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`(async () => {
  await fetchData();
  console.log('Done!');
})();`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use IIFEs to avoid global pollution</li>
                <li>• Create private variables with IIFEs</li>
                <li>• Use for one-time initialization</li>
                <li>• Prefer arrow function IIFEs (modern)</li>
                <li>• Return objects for module pattern</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Overusing IIFEs (ES6 modules better)</li>
                <li>• Complex logic in IIFEs (hard to debug)</li>
                <li>• Nesting IIFEs too deeply</li>
                <li>• Using when let/const blocks work</li>
                <li>• Forgetting the wrapping parentheses</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern Alternative</AlertTitle>
            <AlertDescription className="text-base">
              With ES6 modules and block-scoped variables (let/const), IIFEs are less common today. However, they're still useful for one-time setup code, async operations, and understanding JavaScript scope!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
