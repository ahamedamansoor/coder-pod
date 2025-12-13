'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
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
} from 'lucide-react';

export default function JavaScriptHigherOrderFunctions() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="Higher-Order Functions"
        description="Functions that accept or return other functions - the foundation of functional programming"
        colorTheme="yellow"
      />

      {/* What are Higher-Order Functions */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Higher-Order Functions?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A higher-order function is a function that <strong className="text-yellow-700 dark:text-yellow-400">accepts other functions as arguments</strong> or <strong className="text-yellow-700 dark:text-yellow-400">returns a function</strong>. They treat functions as data!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold">Accept Functions</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Take other functions as parameters (callbacks)
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Example: map, filter, forEach
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold">Return Functions</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create and return new functions
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Example: function factories
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Why Higher-Order?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              They're called "higher-order" because they operate at a <strong>higher level of abstraction</strong> - instead of working directly with data, they work with functions that work with data!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Type 1: Accept Functions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Type 1: Functions That Accept Functions</CardTitle>
              <CardDescription>Take a function as a parameter</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Most Common Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Array methods like <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">map</code>, <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">filter</code>, and <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">reduce</code> are higher-order functions!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const numbers = [1, 2, 3, 4, 5];

// map is a higher-order function
// It accepts a function as an argument
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);
// Output: [2, 4, 6, 8, 10]

// filter also accepts a function
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens);
// Output: [2, 4]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Your Own Higher-Order Function"
        description="Build a function that accepts another function"
        code={`// Our own higher-order function!
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

// Use it with different functions
repeat(3, function(i) {
  console.log('Hello ' + i);
});
// Output:
// Hello 0
// Hello 1
// Hello 2

repeat(3, function(i) {
  console.log('Count: ' + (i + 1));
});
// Output:
// Count: 1
// Count: 2
// Count: 3`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Real-World: Custom Filter Function"
        description="Build your own filter-like higher-order function"
        code={`function filterArray(array, testFunction) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (testFunction(array[i])) {
      result.push(array[i]);
    }
  }
  
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evens = filterArray(numbers, function(num) {
  return num % 2 === 0;
});
console.log(evens);
// Output: [2, 4, 6, 8, 10]

// Filter numbers greater than 5
const greaterThan5 = filterArray(numbers, function(num) {
  return num > 5;
});
console.log(greaterThan5);
// Output: [6, 7, 8, 9, 10]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Type 2: Return Functions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Type 2: Functions That Return Functions</CardTitle>
              <CardDescription>Create specialized functions on the fly</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Function Factories</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                A function that returns another function is like a factory - it creates customized functions!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function makeMultiplier(factor) {
  // Return a new function
  return function(number) {
    return number * factor;
  };
}

// Create specialized functions
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// Each function remembers its 'factor'!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Greeting Generator"
        description="Create customized greeting functions"
        code={`function makeGreeter(greeting) {
  return function(name) {
    return greeting + ', ' + name + '!';
  };
}

// Create different greeters
const sayHi = makeGreeter('Hi');
const sayHello = makeGreeter('Hello');
const sayWelcome = makeGreeter('Welcome');

console.log(sayHi('Alice'));
// Output: Hi, Alice!

console.log(sayHello('Bob'));
// Output: Hello, Bob!

console.log(sayWelcome('Charlie'));
// Output: Welcome, Charlie!

// Same pattern, different behavior!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Both Together */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Combining Both Types</CardTitle>
              <CardDescription>Functions that accept AND return functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Most Powerful Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Some higher-order functions both accept a function AND return a new function!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function withLogging(fn) {
  // Accept a function, return a new function
  return function(...args) {
    console.log('Calling with:', args);
    const result = fn(...args);
    console.log('Result:', result);
    return result;
  };
}

// Original function
function add(a, b) {
  return a + b;
}

// Wrap it with logging
const addWithLogging = withLogging(add);

addWithLogging(3, 5);
// Output:
// Calling with: [3, 5]
// Result: 8`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Rate Limiting"
        description="Create a function wrapper that limits how often a function can be called"
        code={`function rateLimit(fn, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    } else {
      console.log('Rate limit - too fast!');
    }
  };
}

// Original function
function saveData(data) {
  console.log('Saving:', data);
}

// Wrapped with rate limiting (1 second)
const saveWithLimit = rateLimit(saveData, 1000);

saveWithLimit('First');   // Saving: First
saveWithLimit('Second');  // Rate limit - too fast!
setTimeout(() => {
  saveWithLimit('Third'); // Saving: Third (after 1 sec)
}, 1100);`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Common Patterns</CardTitle>
              <CardDescription>Real-world uses of higher-order functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Sorting with Compare Function</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const numbers = [5, 2, 8, 1, 9];

// sort accepts a function!
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
// [1, 2, 5, 8, 9]`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">Array reduce</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce(
  function(total, num) {
    return total + num;
  },
  0
);

console.log(sum); // 15`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">Function Composition</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const add2 = x => x + 2;
const mult3 = x => x * 3;

const add2ThenMult3 = compose(mult3, add2);
console.log(add2ThenMult3(5)); // 21`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Memoization</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function memoize(fn) {
  const cache = {};
  return function(arg) {
    if (cache[arg]) {
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Debouncing Search"
        description="Higher-order function to limit search API calls"
        code={`function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Search function
function searchAPI(query) {
  console.log('Searching for:', query);
  // API call would go here
}

// Wrap with debounce
const debouncedSearch = debounce(searchAPI, 500);

// User types rapidly
debouncedSearch('j');
debouncedSearch('ja');
debouncedSearch('jav');
debouncedSearch('java');

// Only ONE search happens after user stops typing!
// Output (after 500ms): Searching for: java`}
        language="javascript"
        colorTheme="yellow"
      />

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
                <li>• Use built-in HOFs (map, filter, reduce)</li>
                <li>• Name returned functions clearly</li>
                <li>• Keep higher-order functions simple</li>
                <li>• Use for reusable patterns</li>
                <li>• Document expected function signatures</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Over-abstracting simple code</li>
                <li>• Creating overly complex functions</li>
                <li>• Using when loops are clearer</li>
                <li>• Forgetting about readability</li>
                <li>• Nesting too many HOFs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
