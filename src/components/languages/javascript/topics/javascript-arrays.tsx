'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Layers,
  Sparkles,
  Code2,
  Lightbulb,
  ListOrdered,
  Plus,
  Minus,
  ShoppingCart,
} from 'lucide-react';

export default function JavaScriptArrays() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="Arrays"
        description="Store multiple values in a single list - like a shopping list for your code"
        colorTheme="yellow"
      />

      {/* What are Arrays? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Arrays: Lists of Data
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                An array is like a <strong className="text-purple-700 dark:text-purple-400">numbered list</strong> where you can store multiple items. Perfect for shopping lists, todo lists, or any collection of similar things!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-purple-200 dark:border-purple-800/30">
            <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-lg">Real-World Example</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Shopping list: ["Milk", "Bread", "Eggs"] • Each item has a number (position) starting from 0
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Arrays */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Creating Arrays</CardTitle>
              <CardDescription>Use square brackets [ ] to make a list</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Array Syntax</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30 mb-4">
                <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                  const items = [item1, item2, item3];
                </code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Put items inside square brackets [ ], separated by commas
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Arrays"
        description="Different types of arrays you can create"
        code={`// Array of strings
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
// Output: ['Apple', 'Banana', 'Orange']

// Array of numbers
const ages = [25, 30, 18, 42];
console.log(ages);
// Output: [25, 30, 18, 42]

// Array of mixed types
const mixed = ['Alice', 25, true, 'Developer'];
console.log(mixed);
// Output: ['Alice', 25, true, 'Developer']

// Empty array
const emptyList = [];
console.log(emptyList);
// Output: []`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Accessing Items */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ListOrdered className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Accessing Array Items</CardTitle>
              <CardDescription>Arrays use index numbers starting from 0</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Index Numbers Start at 0</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-2">Index:</div>
                    <div className="flex gap-2">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-xl border-2 border-blue-200 dark:border-blue-800">
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-2">Value:</div>
                    <div className="flex gap-2">
                      {['🍎', '🍌', '🍊'].map((fruit, i) => (
                        <div key={i} className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-3xl border-2 border-purple-200 dark:border-purple-800">
                          {fruit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Remember: Count Starts at 0!</AlertTitle>
            <AlertDescription className="text-base">
              The first item is [0], second is [1], third is [2]. This is how most programming languages work!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Accessing Array Items"
        description="Get items from an array using their index"
        code={`const colors = ['Red', 'Green', 'Blue', 'Yellow'];

// Access by index
console.log(colors[0]);  // Red (first item)
console.log(colors[1]);  // Green (second item)
console.log(colors[2]);  // Blue (third item)

// Get array length
console.log(colors.length);  // 4 (total items)

// Get last item (length - 1)
const lastColor = colors[colors.length - 1];
console.log(lastColor);  // Yellow

// Index doesn't exist returns undefined
console.log(colors[10]);  // undefined`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Modifying Arrays */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Plus className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Adding & Removing Items</CardTitle>
              <CardDescription>Change what's in your array</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-4">
                <Plus className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">Adding Items</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">array.push(item)</code>
                  <p className="text-xs text-gray-500 mt-1">Add to end</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">array.unshift(item)</code>
                  <p className="text-xs text-gray-500 mt-1">Add to beginning</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-2 mb-4">
                <Minus className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">Removing Items</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">array.pop()</code>
                  <p className="text-xs text-gray-500 mt-1">Remove from end</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">array.shift()</code>
                  <p className="text-xs text-gray-500 mt-1">Remove from beginning</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Adding & Removing Items"
        description="Modify arrays with push, pop, shift, and unshift"
        code={`const fruits = ['Apple', 'Banana'];
console.log(fruits);  // ['Apple', 'Banana']

// Add to end with push()
fruits.push('Orange');
console.log(fruits);  // ['Apple', 'Banana', 'Orange']

// Add to beginning with unshift()
fruits.unshift('Mango');
console.log(fruits);  // ['Mango', 'Apple', 'Banana', 'Orange']

// Remove from end with pop()
const last = fruits.pop();
console.log('Removed:', last);  // Removed: Orange
console.log(fruits);  // ['Mango', 'Apple', 'Banana']

// Remove from beginning with shift()
const first = fruits.shift();
console.log('Removed:', first);  // Removed: Mango
console.log(fruits);  // ['Apple', 'Banana']`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Array Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Useful Array Methods</CardTitle>
              <CardDescription>Built-in tools to work with arrays</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { method: 'includes()', desc: 'Check if item exists', example: 'arr.includes(5) → true' },
              { method: 'indexOf()', desc: 'Find position of item', example: 'arr.indexOf(5) → 2' },
              { method: 'join()', desc: 'Join into string', example: 'arr.join(\', \') → "a, b, c"' },
              { method: 'slice()', desc: 'Copy part of array', example: 'arr.slice(1, 3) → [b, c]' },
              { method: 'reverse()', desc: 'Reverse order', example: 'arr.reverse() → [3, 2, 1]' },
              { method: 'sort()', desc: 'Sort items', example: 'arr.sort() → [1, 2, 3]' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border-2 bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800/30">
                <code className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400 block mb-2">
                  {item.method}
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                <code className="text-xs font-mono text-gray-500 dark:text-gray-500 block">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Common Array Methods"
        description="Essential methods for working with arrays"
        code={`const numbers = [1, 2, 3, 4, 5];

// Check if item exists
console.log(numbers.includes(3));  // true
console.log(numbers.includes(10)); // false

// Find position
console.log(numbers.indexOf(3));   // 2
console.log(numbers.indexOf(10));  // -1 (not found)

// Join into string
const joined = numbers.join(' - ');
console.log(joined);  // "1 - 2 - 3 - 4 - 5"

// Copy part of array (doesn't change original)
const slice = numbers.slice(1, 4);
console.log(slice);  // [2, 3, 4]
console.log(numbers);  // [1, 2, 3, 4, 5] (unchanged)

// Reverse (changes original!)
numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Looping Through Arrays */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Looping Through Arrays</CardTitle>
              <CardDescription>Go through each item in an array</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">for...of Loop (Easy!)</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded-lg p-4 border">
{`for (const item of array) {
  console.log(item);
}`}</pre>
              <p className="text-xs text-gray-500 mt-2">Gets each value directly</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">for Loop (With Index)</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded-lg p-4 border">
{`for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}`}</pre>
              <p className="text-xs text-gray-500 mt-2">Gives you position number too</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Looping Through Arrays"
        description="Different ways to go through all items"
        code={`const fruits = ['Apple', 'Banana', 'Orange'];

// for...of - easiest way
console.log('Using for...of:');
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: Apple
// Output: Banana
// Output: Orange

// Regular for loop - when you need index
console.log('\\nUsing for loop with index:');
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ': ' + fruits[i]);
}
// Output: 0: Apple
// Output: 1: Banana
// Output: 2: Orange

// forEach method
console.log('\\nUsing forEach:');
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output: Apple
// Output: Banana
// Output: Orange`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: Shopping Cart"
        description="Calculate total price from array of items"
        code={`// Shopping cart with prices
const cart = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

// Calculate total
let total = 0;

for (const item of cart) {
  console.log(item.name + ': $' + item.price);
  total += item.price;
}

console.log('---');
console.log('Total: $' + total);

// Output: Laptop: $999
// Output: Mouse: $25
// Output: Keyboard: $75
// Output: ---
// Output: Total: $1099

// Get all product names
const names = [];
for (const item of cart) {
  names.push(item.name);
}

console.log('Products:', names.join(', '));
// Output: Products: Laptop, Mouse, Keyboard`}
        language="javascript"
        colorTheme="yellow"
        icon={ShoppingCart}
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
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arrays = Lists</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store multiple items: [1, 2, 3]
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">0️⃣</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Index Starts at 0</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    First item is array[0], not array[1]
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➕</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">push() Adds Items</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add to end, pop() removes from end
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Loop with for...of</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Easiest way to go through all items
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
