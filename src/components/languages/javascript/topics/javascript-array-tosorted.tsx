'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Copy } from 'lucide-react';

export default function JavaScriptImmutableArrayMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Copy}
        category="Modern JavaScript (ES2023)"
        title="Immutable Array Methods"
        description="Sort, reverse, and modify arrays without changing the original!"
        colorTheme="green"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <Copy className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What are Immutable Array Methods?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                ES2023 adds <strong className="text-green-700 dark:text-green-400">four new methods</strong> that return 
                <strong className="text-emerald-700 dark:text-emerald-400"> new arrays</strong> instead of modifying the original! 
                <code className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded mx-1">toSorted()</code>, 
                <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">toReversed()</code>, 
                <code className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 rounded">toSpliced()</code>, and 
                <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded">with()</code> are the 
                <strong className="text-teal-700 dark:text-teal-400"> immutable versions</strong> of existing methods!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Immutability FTW!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              These methods never change the original array. Perfect for React, functional programming, and avoiding bugs!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Four Immutable Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">toSorted()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Immutable version of <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded text-xs">sort()</code>
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">↩️</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">toReversed()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Immutable version of <code className="bg-emerald-100 dark:bg-emerald-900/30 px-1 rounded text-xs">reverse()</code>
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">✂️</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">toSpliced()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Immutable version of <code className="bg-teal-100 dark:bg-teal-900/30 px-1 rounded text-xs">splice()</code>
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📝</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">with()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Change one element immutably
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: toSorted() and toReversed()"
        description="Sort and reverse without mutating"
        language="javascript"
        colorTheme="green"
        code={`// toSorted() - immutable sort
const numbers = [3, 1, 4, 1, 5, 9, 2];

// Old way - mutates original
const sorted1 = numbers.sort();
console.log(numbers);  // [1, 1, 2, 3, 4, 5, 9] ❌ Original changed!

// New way - keeps original
const numbers2 = [3, 1, 4, 1, 5, 9, 2];
const sorted2 = numbers2.toSorted();
console.log(numbers2);  // [3, 1, 4, 1, 5, 9, 2] ✅ Original intact!
console.log(sorted2);   // [1, 1, 2, 3, 4, 5, 9]


// Custom sort function works too
const items = [
  { name: 'Apple', price: 2 },
  { name: 'Banana', price: 1 },
  { name: 'Cherry', price: 3 }
];

const byPrice = items.toSorted((a, b) => a.price - b.price);
console.log(items[0].name);   // "Apple" ✅ Original unchanged
console.log(byPrice[0].name); // "Banana" (cheapest)


// toReversed() - immutable reverse
const letters = ['a', 'b', 'c', 'd'];

// Old way - mutates
const reversed1 = letters.reverse();
console.log(letters);  // ['d', 'c', 'b', 'a'] ❌ Original changed!

// New way - keeps original
const letters2 = ['a', 'b', 'c', 'd'];
const reversed2 = letters2.toReversed();
console.log(letters2);  // ['a', 'b', 'c', 'd'] ✅ Original intact!
console.log(reversed2); // ['d', 'c', 'b', 'a']`}
      />

      <CodeSnippet
        title="Example 2: toSpliced() and with()"
        description="Modify arrays immutably"
        language="javascript"
        colorTheme="emerald"
        code={`// toSpliced() - immutable splice
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Old way - mutates original
const removed = fruits.splice(1, 2, 'blueberry');
console.log(fruits);  // ['apple', 'blueberry', 'date'] ❌ Mutated!

// New way - keeps original
const fruits2 = ['apple', 'banana', 'cherry', 'date'];
const newFruits = fruits2.toSpliced(1, 2, 'blueberry');
console.log(fruits2);    // ['apple', 'banana', 'cherry', 'date'] ✅
console.log(newFruits);  // ['apple', 'blueberry', 'date']


// Remove elements
const nums = [1, 2, 3, 4, 5];
const removed2 = nums.toSpliced(2, 2);  // Remove 2 elements from index 2
console.log(nums);      // [1, 2, 3, 4, 5] ✅ Original intact
console.log(removed2);  // [1, 2, 5]


// Insert elements
const colors = ['red', 'blue'];
const inserted = colors.toSpliced(1, 0, 'green', 'yellow');
console.log(colors);    // ['red', 'blue'] ✅
console.log(inserted);  // ['red', 'green', 'yellow', 'blue']


// with() - change single element
const scores = [85, 90, 78, 92];

// Old way - direct mutation
scores[1] = 95;
console.log(scores);  // [85, 95, 78, 92] ❌ Mutated!

// New way - immutable
const scores2 = [85, 90, 78, 92];
const updated = scores2.with(1, 95);
console.log(scores2);  // [85, 90, 78, 92] ✅ Original intact!
console.log(updated);  // [85, 95, 78, 92]


// Negative indices work!
const arr = [10, 20, 30, 40];
const changed = arr.with(-1, 99);  // Change last element
console.log(arr);     // [10, 20, 30, 40] ✅
console.log(changed); // [10, 20, 30, 99]`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Mutable vs Immutable</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                  <th className="p-3 text-left border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">Mutable (Old)</th>
                  <th className="p-3 text-center border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">→</th>
                  <th className="p-3 text-left border border-green-200 dark:border-green-800 text-gray-900 dark:text-gray-100">Immutable (New)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>sort()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">→</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>toSorted()</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>reverse()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">→</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>toReversed()</code></td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>splice()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">→</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>toSpliced()</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>arr[i] = x</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">→</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>with(i, x)</code></td>
                </tr>
              </tbody>
            </table>
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
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Returns Copy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All four methods return new arrays
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Original Safe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Original array never modified
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚛️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">React Friendly</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for state updates in React
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2023</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Latest immutability features
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
