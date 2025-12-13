'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function JavaScriptArrowFunctions() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowRight}
        category="JavaScript Fundamentals"
        title="Arrow Functions"
        description="Shorter way to write functions - modern JavaScript syntax"
        colorTheme="yellow"
      />

      {/* What are Arrow Functions? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-yellow-50/20 dark:from-amber-950/10 dark:via-orange-950/5 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Arrow Functions: Shorter Syntax
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Arrow functions are a <strong className="text-amber-700 dark:text-amber-400">shorter way to write functions</strong> in modern JavaScript. They use <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded">=&gt;</code> instead of the word "function"!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-amber-200 dark:border-amber-800/30">
            <ArrowRight className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-lg">Fat Arrow =&gt;</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              The <code className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">=&gt;</code> symbol is called a "fat arrow" - it points to what the function returns!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Old vs New */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Old Way vs Arrow Function</CardTitle>
              <CardDescription>See how much shorter arrow functions are!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">Regular Function</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`function greet(name) {
  return 'Hello, ' + name;
}

console.log(greet('Alice'));
// Output: Hello, Alice`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">Arrow Function ✨</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const greet = (name) => {
  return 'Hello, ' + name;
}

console.log(greet('Alice'));
// Output: Hello, Alice`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Write */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How to Write Arrow Functions</CardTitle>
              <CardDescription>Simple conversion steps</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Conversion Steps</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Remove "function" keyword</h5>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                      <code className="text-sm font-mono text-red-600 line-through">function</code>
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200"> (name) {'{ ... }'}</code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Add =&gt; after parameters</h5>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200">(name) </code>
                      <code className="text-sm font-mono text-green-600 dark:text-green-400">=&gt;</code>
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200"> {'{ ... }'}</code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Assign to variable</h5>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                      <code className="text-sm font-mono text-purple-600 dark:text-purple-400">const greet = </code>
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200">(name) =&gt; {'{ ... }'}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Arrow Functions"
        description="Different ways to write arrow functions"
        code={`// Regular arrow function
const greet = (name) => {
  return 'Hello, ' + name;
};

console.log(greet('Bob'));  // Hello, Bob

// Arrow function with multiple parameters
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));  // 8

// Arrow function with no parameters
const sayHi = () => {
  return 'Hi there!';
};

console.log(sayHi());  // Hi there!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Short Syntax */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Even Shorter! - Implicit Return</CardTitle>
              <CardDescription>Skip {'{ }'} and return for one-line functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Super Short Syntax</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                If your function only returns one expression, you can skip the curly braces {'{ }'} and the <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">return</code> keyword!
              </p>
              <div className="grid gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                  <p className="text-xs text-gray-500 mb-2">Long version:</p>
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    const double = (n) =&gt; {'{ return n * 2; }'}
                  </code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                  <p className="text-xs text-gray-500 mb-2">Short version:</p>
                  <code className="text-sm font-mono text-green-600 dark:text-green-400">
                    const double = (n) =&gt; n * 2
                  </code>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle>Implicit Return</AlertTitle>
            <AlertDescription className="text-base">
              When you skip {'{ }'}, the result is automatically returned - this is called "implicit return"
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Short Arrow Function Examples"
        description="One-liners without curly braces"
        code={`// One parameter - can skip parentheses too!
const double = n => n * 2;
console.log(double(5));  // 10

const triple = n => n * 3;
console.log(triple(4));  // 12

// Multiple parameters - need parentheses
const add = (a, b) => a + b;
console.log(add(3, 7));  // 10

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // 20

// No parameters - need empty parentheses
const getNumber = () => 42;
console.log(getNumber());  // 42

const sayHello = () => 'Hello!';
console.log(sayHello());  // Hello!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* When to Use */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>When to Use Arrow Functions</CardTitle>
              <CardDescription>Great for short, simple functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-lg mb-4 text-green-700 dark:text-green-300">✅ Good For</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Short functions</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">One or two lines of code</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Simple operations</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Calculations, transformations</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">•</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Callbacks</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Array methods, setTimeout</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-300">📝 Either Works</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">•</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Use what you prefer</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Both ways work fine!</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">•</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Be consistent</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Pick one style in your project</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">•</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Start simple</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Use regular functions first, then try arrows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Example: Array Operations"
        description="Arrow functions are great with array methods"
        code={`const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Filter even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// Check if all are positive
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);  // true

// Find first number > 3
const firstBig = numbers.find(n => n > 3);
console.log(firstBig);  // 4

// Much cleaner than:
// numbers.map(function(n) {
//   return n * 2;
// })`}
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
                <span className="text-2xl">➡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use =&gt; Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    (params) =&gt; expression
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Shorter Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No "function" keyword needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Implicit Return</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Skip {'{ }'} for one-line functions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Modern JavaScript</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Popular in modern code
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
