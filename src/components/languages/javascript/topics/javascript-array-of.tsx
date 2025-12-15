'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Package } from 'lucide-react';

export default function JavaScriptArrayOf() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="Advanced Array Methods"
        title="Array.of()"
        description="Create arrays the predictable way - no surprises!"
        colorTheme="green"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <Package className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What is Array.of()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <code className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded">Array.of()</code> as the 
                <strong className="text-green-700 dark:text-green-400"> consistent array creator</strong>! 
                Unlike <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">new Array()</code> which has 
                <strong className="text-emerald-700 dark:text-emerald-400"> weird behavior</strong> with numbers, 
                Array.of() always creates an array with the exact items you pass - simple and predictable!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">The Problem It Solves</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">new Array(3)</code> creates 
              empty array with 3 slots, but <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">Array.of(3)</code> creates 
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">[3]</code> - one element with value 3!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚖️</span>
            Array.of() vs new Array() vs []
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                  <th className="p-3 text-left border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">Code</th>
                  <th className="p-3 text-left border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">Result</th>
                  <th className="p-3 text-left border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-green-600 dark:text-green-400">Array.of(3)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>[3]</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    ✅ Array with one element: 3
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-red-600 dark:text-red-400">new Array(3)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>[empty × 3]</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    ⚠️ Empty array with 3 slots
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-green-600 dark:text-green-400">Array.of(1, 2, 3)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>[1, 2, 3]</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    ✅ Array with three elements
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-green-600 dark:text-green-400">new Array(1, 2, 3)</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>[1, 2, 3]</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    ✅ Array with three elements
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">[3]</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>[3]</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    ✅ Array literal (most common)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">⚠️ The new Array() Gotcha</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <code className="bg-red-100 dark:bg-red-900/30 px-1.5 py-0.5 rounded">new Array(n)</code> with a 
              <strong> single number</strong> creates empty slots, not an array with that number!
            </p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-red-200 dark:border-red-700">
              <div className="space-y-2 text-xs font-mono">
                <div className="text-red-600 dark:text-red-400">new Array(5) → [empty × 5]  ❌ Confusing!</div>
                <div className="text-green-600 dark:text-green-400">Array.of(5) → [5]  ✅ Predictable!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Consistent Behavior"
        description="See how Array.of() always does what you expect"
        language="javascript"
        colorTheme="green"
        code={`// Single number - THE BIG DIFFERENCE
console.log(new Array(3));
// [empty × 3]  ⚠️ Empty array with 3 slots!

console.log(Array.of(3));
// [3]  ✅ Array with one element: 3


// Multiple elements - Both work the same
console.log(new Array(1, 2, 3));
// [1, 2, 3]

console.log(Array.of(1, 2, 3));
// [1, 2, 3]


// Mixed types - Array.of() handles everything
console.log(Array.of('hello', 42, true, null, { name: 'Alice' }));
// ['hello', 42, true, null, { name: 'Alice' }]


// No arguments
console.log(Array.of());
// []  Empty array

console.log(new Array());
// []  Also empty array (both same here)


// Strings work too
console.log(Array.of('single'));
// ['single']

console.log(Array.of('a', 'b', 'c'));
// ['a', 'b', 'c']`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="When Array.of() is actually useful"
        language="javascript"
        colorTheme="emerald"
        code={`// 1. Creating array from function arguments
function createArrayFromArgs(...args) {
  return Array.of(...args);  // Always consistent!
}

console.log(createArrayFromArgs(5));
// [5]  ✅

console.log(createArrayFromArgs(1, 2, 3));
// [1, 2, 3]


// 2. Wrapping single values
function wrapInArray(value) {
  return Array.of(value);  // Guaranteed array with 1 element
}

console.log(wrapInArray(42));        // [42]
console.log(wrapInArray('hello'));   // ['hello']
console.log(wrapInArray(null));      // [null]


// 3. When dealing with dynamic values
const userInput = 7;  // Could be any number

// Safe way - always creates [7]
const safeArray = Array.of(userInput);
console.log(safeArray);  // [7]

// Risky way - creates empty array with 7 slots!
const riskyArray = new Array(userInput);
console.log(riskyArray);  // [empty × 7]  ⚠️


// 4. Creating arrays programmatically
function createArrayWithValue(val) {
  // Want array with that specific value
  return Array.of(val);
}

const nums = [1, 5, 10, 100].map(n => createArrayWithValue(n));
console.log(nums);
// [[1], [5], [10], [100]]


// 5. Converting generator values
function* numberGenerator() {
  yield 3;
  yield 7;
}

const gen = numberGenerator();
const firstValue = gen.next().value;
const arr = Array.of(firstValue);
console.log(arr);  // [3]  ✅ Not [empty × 3]!`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            When to Use Each
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">✅ Use [] (Array Literal)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Most common and recommended</strong> for creating arrays when you know the values
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-blue-200 dark:border-blue-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  const arr = [1, 2, 3];  // Simple and clear!
                </code>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Use Array.of()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                When dealing with <strong>dynamic single values</strong> that might be numbers
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-green-200 dark:border-green-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  const arr = Array.of(userInput);  // Safe with any value!
                </code>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">⚠️ Use new Array(n)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Only</strong> when you want to create empty array with specific length
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-amber-200 dark:border-amber-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  const empty = new Array(10);  // [empty × 10]
                </code>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">✅ Use Array.from()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                When creating ranges or sequences with <strong>transformations</strong>
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-purple-200 dark:border-purple-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  const range = Array.from({`{length: 5}`}, (_, i) {'=>'} i);
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Predictable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always creates array with exact arguments passed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Single Numbers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">Array.of(5)</code> gives <code className="text-xs">[5]</code> not empty array
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for wrapping dynamic values safely
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Best Practice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">[]</code> for literals, <code className="text-xs">Array.of()</code> for dynamic values
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
