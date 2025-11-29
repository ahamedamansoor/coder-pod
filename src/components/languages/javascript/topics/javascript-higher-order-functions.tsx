'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput, InteractivePlayground } from '@/components/shared';
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Code2,
  Zap,
  GitBranch,
  ListFilter,
} from 'lucide-react';

interface JavaScriptHigherOrderFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Higher-Order Functions Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 48px 32px;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
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
      margin-bottom: 8px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Monaco', monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Higher-Order Functions</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Higher-Order Functions Demo ===\\n');

// 1. Function Returning Function
console.log('1️⃣ FUNCTION RETURNING FUNCTION:');
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log('double(5):', double(5));
console.log('triple(5):', triple(5));
console.log('');

// 2. Function Accepting Function
console.log('2️⃣ FUNCTION ACCEPTING FUNCTION:');
function repeatAction(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

let sum = 0;
repeatAction(5, (i) => { sum += i; });
console.log('Sum after repeatAction(5):', sum);
console.log('');

// 3. Array Higher-Order Methods
console.log('3️⃣ ARRAY HIGHER-ORDER METHODS:');
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2);
console.log('map(x => x * 2):', doubled);

const evens = numbers.filter(x => x % 2 === 0);
console.log('filter(x => x % 2 === 0):', evens);

const total = numbers.reduce((acc, x) => acc + x, 0);
console.log('reduce(sum):', total);
console.log('');

// 4. Function Composition
console.log('4️⃣ FUNCTION COMPOSITION:');
const addTax = (price) => price * 1.1;
const addShipping = (price) => price + 5;

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const finalPrice = compose(addTax, addShipping);
const result = finalPrice(100);
console.log('finalPrice(100):', '$' + result.toFixed(2));

console.log('\\n✅ All demos complete!');`;

export default function JavaScriptHigherOrderFunctions({ onOpenWebPlayground }: JavaScriptHigherOrderFunctionsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript · Functions"
        title="Higher-Order Functions"
        description="Master functions that accept or return other functions for powerful code composition"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Higher-Order Functions?
          </CardTitle>
          <CardDescription className="text-base">
            Functions that treat other functions as data—accepting them as arguments or returning them as results
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Accept Functions</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Take other functions as parameters (like callbacks)
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Example: map, filter
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-cyan-600/80 dark:text-cyan-400/80" />
              <h3 className="font-semibold">Return Functions</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Create and return new functions on the fly
            </p>
            <Badge className="bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-300/50 dark:border-cyan-700/40">
              Factory pattern
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Powerful Patterns</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Enable composition, decorators, and functional programming
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Composable
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is HOF */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Understanding Higher-Order Functions
          </CardTitle>
          <CardDescription className="text-base">
            A higher-order function is simply a function that works with other functions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            In JavaScript, functions are <strong>first-class citizens</strong>—meaning they can be treated like any other value. You can store them in variables, pass them as arguments, and return them from other functions. Higher-order functions take advantage of this powerful feature.
          </p>
          
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">simple-example.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Basic higher-order function</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// A higher-order function that accepts a function
function greetUser(name, formatter) {
  const formattedName = formatter(name);
  return 'Hello, ' + formattedName + '!';
}

// Functions to pass in
function uppercase(str) {
  return str.toUpperCase();
}

function lowercase(str) {
  return str.toLowerCase();
}

// Use different formatters
console.log(greetUser('Alice', uppercase));
// Output: "Hello, ALICE!"

console.log(greetUser('BOB', lowercase));
// Output: "Hello, bob!"`}
            </pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              Instead of hardcoding behavior, higher-order functions let you pass in the behavior as a parameter. This makes your code more flexible and reusable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Type 1: Accept Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowRight className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Type 1: Functions That Accept Functions
          </CardTitle>
          <CardDescription className="text-base">
            Pass functions as arguments to create flexible, reusable code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Basic Example: Custom Repeat</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
                <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">custom-repeat.js</span>
                <span className="text-blue-600/70 dark:text-blue-400/70">Function accepts callback</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Higher-order function that accepts a function
function repeatAction(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

// Pass different functions to create different behaviors
repeatAction(3, (i) => console.log(\`Count: \${i}\`));
// Output:
// Count: 0
// Count: 1
// Count: 2

repeatAction(3, (i) => console.log(\`* \${i * 2}\`));
// Output:
// * 0
// * 2
// * 4`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Real-World: Array Methods</h4>
            <p className="text-sm text-muted-foreground">
              JavaScript's built-in array methods are higher-order functions
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
                <h5 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <ListFilter className="w-5 h-5" />
                  map() - Transform
                </h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const nums = [1, 2, 3];

const doubled = nums.map(x => x * 2);

console.log(doubled);
// Output: [2, 4, 6]`}
                </pre>
                <p className="text-xs text-muted-foreground mt-2">
                  Transforms each element using callback
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
                <h5 className="font-semibold mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <ListFilter className="w-5 h-5" />
                  filter() - Select
                </h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const nums = [1, 2, 3, 4];

const evens = nums.filter(x => x % 2 === 0);

console.log(evens);
// Output: [2, 4]`}
                </pre>
                <p className="text-xs text-muted-foreground mt-2">
                  Keeps only elements that pass test
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
                <h5 className="font-semibold mb-3 flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <ListFilter className="w-5 h-5" />
                  reduce() - Combine
                </h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const nums = [1, 2, 3];

const sum = nums.reduce((acc, x) => acc + x, 0);

console.log(sum);
// Output: 6`}
                </pre>
                <p className="text-xs text-muted-foreground mt-2">
                  Reduces array to single value
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
                <h5 className="font-semibold mb-3 flex items-center gap-2 text-amber-700 dark:text-amber-300">
                  <ListFilter className="w-5 h-5" />
                  forEach() - Iterate
                </h5>
                <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const items = ['a', 'b', 'c'];

items.forEach((item, index) => {
  console.log(\`\${index}:\`, item);
});

// Output:
// 0: a
// 1: b
// 2: c`}
                </pre>
                <p className="text-xs text-muted-foreground mt-2">
                  Executes callback for each item
                </p>
              </div>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Use Higher-Order Functions?</AlertTitle>
            <AlertDescription>
              They make code more declarative and reusable. Instead of writing loops everywhere, you describe what you want to do with the data.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Type 2: Return Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Type 2: Functions That Return Functions
          </CardTitle>
          <CardDescription className="text-base">
            Create specialized functions dynamically—the factory pattern
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Example 1: Multiplier Factory</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30">
                <span className="uppercase tracking-wide text-cyan-700 dark:text-cyan-300">multiplier-factory.js</span>
                <span className="text-cyan-600/70 dark:text-cyan-400/70">Creates specialized functions</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Higher-order function returns a new function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Create specialized multiplier functions
const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(tenTimes(5));  // 50`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Example 2: Greeting Factory</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
                <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">greeting-factory.js</span>
                <span className="text-purple-600/70 dark:text-purple-400/70">Personalized greetings</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`function createGreeter(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeter('Hello');
const sayHola = createGreeter('Hola');
const sayBonjour = createGreeter('Bonjour');

console.log(sayHello('Alice'));     // "Hello, Alice!"
console.log(sayHola('Carlos'));     // "Hola, Carlos!"
console.log(sayBonjour('Marie'));   // "Bonjour, Marie!"`}
              </pre>
            </div>
          </div>

          <Alert className="bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800">
            <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Closures Power This Pattern</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              The returned function "remembers" parameters from its parent function, allowing it to access those values even after the parent has finished executing.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Common Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll encounter in real applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Debounce
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Control function execution rate (search, scroll events)
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => fn(...args),
      delay
    );
  };
}

// Usage: Search with debouncing
const search = debounce(
  (query) => console.log('Searching:', query),
  300
);

search('a');    // Cancelled
search('ap');   // Cancelled
search('app');  // Executes after 300ms
// Output: "Searching: app"`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Memoization
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Cache function results to avoid repeated calculations
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log('From cache');
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Usage: Expensive calculation
const square = memoize((n) => {
  console.log('Calculating...');
  return n * n;
});

square(5);  // Calculating... → 25
square(5);  // From cache → 25`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive names for returned functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Keep functions pure (no side effects)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Use array methods instead of loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Compose small, focused functions</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Creating deeply nested function returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Modifying external state inside callbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Overusing clever patterns when simple code is clearer</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Forgetting to handle edge cases</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Takeaway</AlertTitle>
            <AlertDescription>
              Higher-order functions are powerful tools for abstraction and composition. Use them to write cleaner, more maintainable code—but don't sacrifice readability for cleverness.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="Interactive Higher-Order Functions Playground"
          description="Experiment with map, filter, reduce, function composition, currying, and see how HOFs enable powerful abstractions."
          features={[
            'Map, Filter, Reduce',
            'Function Composition',
            'Currying',
            'Real-world Patterns'
          ]}
          buttonText="Open HOF Playground"
          onLaunchPlayground={onOpenWebPlayground}
          playgroundData={{
            html: playgroundHtml,
            css: '',
            js: playgroundJs
          }}
          colorTheme="purple"
        />
      )}
      
    </div>
  );
}
