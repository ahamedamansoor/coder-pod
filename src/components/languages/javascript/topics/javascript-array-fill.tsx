'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, PaintBucket } from 'lucide-react';

export default function JavaScriptArrayFill() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={PaintBucket}
        category="Advanced Array Methods"
        title="Array fill()"
        description="Fill arrays with values - like a paint bucket for arrays!"
        colorTheme="orange"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-yellow-50/30 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-xl">
              <PaintBucket className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                What is Array fill()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded">fill()</code> as a 
                <strong className="text-orange-700 dark:text-orange-400"> paint bucket tool</strong> for arrays! 
                It replaces elements with a <strong className="text-amber-700 dark:text-amber-400">static value</strong> - 
                you can fill the entire array or just a specific range. Perfect for initializing arrays with default values 
                or resetting portions to a specific state.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Important!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">fill()</code> modifies the 
              <strong> original array</strong> (it's mutable)! It doesn't create a new array.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            How fill() Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 border-2 border-orange-200 dark:border-orange-800">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Fill All</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded text-xs">arr.fill(value)</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Replaces every element</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 border-2 border-amber-200 dark:border-amber-800">
              <div className="text-4xl mb-3">✂️</div>
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Fill Range</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded text-xs">arr.fill(val, start, end)</code>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">From start to end index</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-50 to-lime-50 dark:from-yellow-900/20 dark:to-lime-900/10 border-2 border-yellow-200 dark:border-yellow-800">
              <div className="text-4xl mb-3">↩️</div>
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Returns Array</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Returns the modified array
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Chainable!</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Syntax & Parameters</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  arr.fill(value, start?, end?)
                </code>
                <div className="mt-3 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                  <div>• <strong className="text-purple-700 dark:text-purple-300">value</strong>: The value to fill (any type)</div>
                  <div>• <strong className="text-purple-700 dark:text-purple-300">start</strong>: Starting index (default: 0)</div>
                  <div>• <strong className="text-purple-700 dark:text-purple-300">end</strong>: Ending index (default: array.length, not included)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">⚠️ Watch Out!</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If you fill with an <strong>object or array</strong>, all elements will reference the 
              <strong> same object</strong>! Changing one changes all. Use <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">Array.from()</code> with 
              a function if you need unique objects.
            </p>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Basic fill() Operations"
        description="Fill entire arrays or specific ranges"
        language="javascript"
        colorTheme="orange"
        code={`// Create array and fill all elements
const arr1 = [1, 2, 3, 4, 5];
arr1.fill(0);
console.log(arr1);
// [0, 0, 0, 0, 0]  All elements replaced!


// Fill with different value
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(99);
console.log(arr2);
// [99, 99, 99, 99, 99]


// Fill a range - from index 1 to 3 (not including 3)
const arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 1, 3);
console.log(arr3);
// [1, 0, 0, 4, 5]  Only indices 1 and 2 changed


// Fill from start index to end
const arr4 = [1, 2, 3, 4, 5];
arr4.fill(0, 2);  // From index 2 to end
console.log(arr4);
// [1, 2, 0, 0, 0]


// Negative indices work too!
const arr5 = [1, 2, 3, 4, 5];
arr5.fill(0, -2);  // Last 2 elements
console.log(arr5);
// [1, 2, 3, 0, 0]


// Create pre-filled array
const zeros = new Array(5).fill(0);
console.log(zeros);
// [0, 0, 0, 0, 0]

const defaults = new Array(3).fill('N/A');
console.log(defaults);
// ['N/A', 'N/A', 'N/A']`}
      />

      <CodeSnippet
        title="Example 2: Practical Use Cases"
        description="Real-world scenarios for fill()"
        language="javascript"
        colorTheme="amber"
        code={`// 1. Initialize grid/matrix
const grid = Array(3)
  .fill(null)
  .map(() => Array(3).fill(0));

console.log(grid);
// [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
// 3x3 grid filled with zeros


// 2. Reset array portions
const scores = [95, 87, 92, 78, 88];
// Reset middle 3 scores to 0
scores.fill(0, 1, 4);
console.log(scores);
// [95, 0, 0, 0, 88]


// 3. Create boolean flags array
const flags = new Array(5).fill(false);
console.log(flags);
// [false, false, false, false, false]

// Toggle some flags
flags[1] = true;
flags[3] = true;
console.log(flags);
// [false, true, false, true, false]


// 4. Initialize with strings
const placeholders = new Array(4).fill('Loading...');
console.log(placeholders);
// ['Loading...', 'Loading...', 'Loading...', 'Loading...']


// 5. ⚠️ Object reference problem
const bad = new Array(3).fill({ count: 0 });
bad[0].count = 5;
console.log(bad);
// [{ count: 5 }, { count: 5 }, { count: 5 }]
// All reference same object! ❌

// Solution: Use Array.from() with function
const good = Array.from({ length: 3 }, () => ({ count: 0 }));
good[0].count = 5;
console.log(good);
// [{ count: 5 }, { count: 0 }, { count: 0 }]
// Each is unique object! ✅`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">0️⃣</span>
              <h4 className="font-bold text-orange-900 dark:text-orange-100">Initialize with Zeros</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-orange-200 dark:border-orange-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                const arr = new Array(10).fill(0);
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔄</span>
              <h4 className="font-bold text-amber-900 dark:text-amber-100">Reset Portion</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-amber-200 dark:border-amber-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                arr.fill(null, 2, 5);  // Reset indices 2-4
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎲</span>
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100">Same Default Value</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-yellow-200 dark:border-yellow-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                const defaults = new Array(5).fill('pending');
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-lime-50 dark:bg-lime-950/20 border-2 border-lime-200 dark:border-lime-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⛓️</span>
              <h4 className="font-bold text-lime-900 dark:text-lime-100">Chain with Other Methods</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-lime-200 dark:border-lime-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                arr.fill(0).map((_, i) {'=>'} i * 2);
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Fill Arrays</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Replace elements with static value quickly
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Mutable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modifies original array, doesn't create new one
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✂️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Range Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use start/end parameters to fill specific sections
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-lime-200 dark:border-lime-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Object Caveat</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Objects are referenced, not copied - use with care
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
