'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Layers } from 'lucide-react';

export default function JavaScriptArrayFlat() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="Advanced Array Methods"
        title="Array flat() & flatMap()"
        description="Flatten nested arrays like unpacking nested boxes!"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-purple-50/30 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-xl">
              <Layers className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What is Array flat()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">flat()</code> as 
                <strong className="text-blue-700 dark:text-blue-400"> unpacking nested boxes</strong>! 
                When you have arrays inside arrays (like <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded">[1, [2, 3], [4, [5]]]</code>), 
                flat() unpacks them into one single-level array. And <strong className="text-indigo-700 dark:text-indigo-400">flatMap()</strong> is like 
                doing map() then flat() in one go - super efficient!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use flat()?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Perfect for cleaning up nested data from APIs, flattening tree structures, or simplifying complex array operations. 
              No more manual nested loops!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📦</span>
            How flat() Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">1️⃣</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Default (1 level)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">arr.flat()</code> unpacks one level
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl mb-3">🔢</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Custom Depth</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded text-xs">flat(2)</code> unpacks 2 levels deep
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">∞</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Full Flatten</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <code className="bg-purple-100 dark:bg-purple-900/30 px-1.5 py-0.5 rounded text-xs">flat(Infinity)</code> unpacks all levels!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/20 border-2 border-cyan-200 dark:border-cyan-800">
            <h4 className="font-bold text-lg text-cyan-900 dark:text-cyan-100 mb-4">flatMap() - Map + Flat</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <code className="bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">flatMap()</code> runs a function on each element 
              (like map), then flattens the result by 1 level. More efficient than doing both separately!
            </p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                arr.flatMap(x {'=>'} [x * 2]) // Map then flatten
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Flattening Nested Arrays"
        description="Unpack arrays at different depths"
        language="javascript"
        colorTheme="blue"
        code={`// Nested array
const nested = [1, [2, 3], [4, [5, 6]], 7];

// Flatten 1 level (default)
const flat1 = nested.flat();
console.log(flat1);
// [1, 2, 3, 4, [5, 6], 7]
// Notice [5, 6] is still nested!


// Flatten 2 levels
const flat2 = nested.flat(2);
console.log(flat2);
// [1, 2, 3, 4, 5, 6, 7]
// Completely flat now!


// Flatten ALL levels (Infinity)
const deepNested = [1, [2, [3, [4, [5]]]]];
const fullyFlat = deepNested.flat(Infinity);
console.log(fullyFlat);
// [1, 2, 3, 4, 5]
// No matter how deep, it unpacks everything!


// Real-world: Flatten categories from API
const products = [
  { name: 'Phone', tags: ['electronics', 'mobile'] },
  { name: 'Laptop', tags: ['electronics', 'computer'] },
  { name: 'Shirt', tags: ['clothing', 'fashion'] }
];

const allTags = products.map(p => p.tags).flat();
console.log(allTags);
// ['electronics', 'mobile', 'electronics', 'computer', 'clothing', 'fashion']

// Get unique tags
const uniqueTags = [...new Set(allTags)];
console.log(uniqueTags);
// ['electronics', 'mobile', 'computer', 'clothing', 'fashion']`}
      />

      <CodeSnippet
        title="Example 2: Using flatMap()"
        description="Map and flatten in one efficient step"
        language="javascript"
        colorTheme="indigo"
        code={`// Split sentences into words
const sentences = [
  'Hello world',
  'How are you',
  'JavaScript is awesome'
];

// Using map + flat (2 steps)
const words1 = sentences.map(s => s.split(' ')).flat();
console.log(words1);
// ['Hello', 'world', 'How', 'are', 'you', 'JavaScript', 'is', 'awesome']

// Using flatMap (1 step - better!)
const words2 = sentences.flatMap(s => s.split(' '));
console.log(words2);
// ['Hello', 'world', 'How', 'are', 'you', 'JavaScript', 'is', 'awesome']


// Real-world: Duplicate array elements
const numbers = [1, 2, 3, 4];

// Create pairs [n, n]
const doubled = numbers.flatMap(n => [n, n]);
console.log(doubled);
// [1, 1, 2, 2, 3, 3, 4, 4]


// Filter while mapping
const nums = [1, 2, 3, 4, 5];

// Only return even numbers, doubled
const evenDoubled = nums.flatMap(n => 
  n % 2 === 0 ? [n * 2] : []  // Return empty array to skip odds
);
console.log(evenDoubled);
// [4, 8]  // Only 2*2 and 4*2


// Generate ranges
const ranges = [2, 3, 1].flatMap(n => 
  Array.from({ length: n }, (_, i) => i)
);
console.log(ranges);
// [0, 1, 0, 1, 2, 0]  // 2 numbers, 3 numbers, 1 number`}
      />

      <Card>
        <CardHeader>
          <CardTitle>flat() vs flatMap()</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Use flat() When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Already have nested arrays</li>
                <li>✅ Just need to flatten</li>
                <li>✅ Control depth with number</li>
                <li>✅ Simple unpacking needed</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Use flatMap() When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Need to map + flatten</li>
                <li>✅ Creating nested results</li>
                <li>✅ Performance matters</li>
                <li>✅ Filtering + mapping together</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Unpack Nested</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">flat()</code> removes array nesting levels
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Control Depth</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pass number to control how many levels to unpack
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">flatMap()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    More efficient than <code className="text-xs">map().flat()</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">∞</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Full Flatten</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">flat(Infinity)</code> for any depth
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
