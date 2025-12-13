'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  RefreshCw,
  Sparkles,
  Code2,
  Lightbulb,
  Repeat,
  PlayCircle,
  ShoppingCart,
} from 'lucide-react';

export default function JavaScriptLoops() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="JavaScript Fundamentals"
        title="Loops"
        description="Repeat code automatically instead of writing it over and over"
        colorTheme="yellow"
      />

      {/* What are Loops? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Loops: Repeat Without Repeating Yourself
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Loops let you <strong className="text-cyan-700 dark:text-cyan-400">run the same code multiple times</strong> automatically. Instead of copying and pasting, write it once and let the loop repeat it!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <RefreshCw className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">Like a Repeat Button</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Imagine saying "Play this song 10 times" instead of pressing play 10 times. That's what loops do for code!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Why Use Loops */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Why Use Loops?</CardTitle>
              <CardDescription>See the problem loops solve</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Without Loop */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Without Loops (Bad!)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Printing 1 to 5 - repetitive!
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// What if we need 1 to 100?
// We'd have to write 100 lines!`}</pre>
              </div>
            </div>

            {/* With Loop */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With Loop (Smart!)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Much cleaner!
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Works for 1 to 100 too!
// Just change 5 to 100`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* For Loop */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>for Loop - The Most Common</CardTitle>
              <CardDescription>Repeat a specific number of times</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">How for Loop Works</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-800/30 mb-4">
                <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                  for (let i = 0; i &lt; 5; i++) {'{ ... }'}
                </code>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <code className="text-sm font-mono bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">let i = 0</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Start at 0 (initialization)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <code className="text-sm font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">i &lt; 5</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Keep going while i is less than 5 (condition)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <code className="text-sm font-mono bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">i++</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Add 1 to i after each loop (increment)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Loop Runs: 0, 1, 2, 3, 4</AlertTitle>
            <AlertDescription className="text-base">
              Starts at 0, runs 5 times (0,1,2,3,4), then stops because 5 is NOT less than 5
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="for Loop Examples"
        description="Count, loop through arrays, repeat actions"
        code={`// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log('Count:', i);
}
// Output: Count: 1
// Output: Count: 2
// Output: Count: 3
// Output: Count: 4
// Output: Count: 5

// Loop through an array
const fruits = ['Apple', 'Banana', 'Orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log('Fruit ' + (i + 1) + ':', fruits[i]);
}
// Output: Fruit 1: Apple
// Output: Fruit 2: Banana
// Output: Fruit 3: Orange

// Countdown
for (let i = 5; i >= 1; i--) {
  console.log(i + '...');
}
console.log('Blast off!');
// Output: 5...
// Output: 4...
// Output: 3...
// Output: 2...
// Output: 1...
// Output: Blast off!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* While Loop */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Repeat className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>while Loop - Repeat Until Done</CardTitle>
              <CardDescription>Keep looping as long as a condition is true</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">How while Loop Works</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-800/30 mb-4">
                <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                  while (condition) {'{ ... }'}
                </code>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Keeps running as long as the condition is true. Be careful - if the condition never becomes false, you get an infinite loop!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="while Loop Example"
        description="Repeat until a condition is met"
        code={`// Count with while loop
let count = 1;

while (count <= 5) {
  console.log('Count:', count);
  count++;  // IMPORTANT: Must change count or loop never ends!
}
// Output: Count: 1
// Output: Count: 2
// Output: Count: 3
// Output: Count: 4
// Output: Count: 5

// Keep trying until success
let attempts = 0;
let success = false;

while (!success && attempts < 3) {
  attempts++;
  console.log('Attempt', attempts);
  
  // Simulate: succeed on 3rd try
  if (attempts === 3) {
    success = true;
    console.log('Success!');
  }
}
// Output: Attempt 1
// Output: Attempt 2
// Output: Attempt 3
// Output: Success!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* For...of Loop */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <PlayCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>for...of Loop - Loop Through Arrays Easily</CardTitle>
              <CardDescription>The simplest way to go through array items</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Super Simple!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-800/30">
                <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                  for (const item of array) {'{ ... }'}
                </code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Gets each item from the array automatically. No need for indexes!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="for...of Loop Example"
        description="The easiest way to loop through arrays"
        code={`// Loop through array items
const colors = ['Red', 'Green', 'Blue'];

for (const color of colors) {
  console.log('Color:', color);
}
// Output: Color: Red
// Output: Color: Green
// Output: Color: Blue

// Loop through names
const names = ['Alice', 'Bob', 'Charlie'];

for (const name of names) {
  console.log('Hello, ' + name + '!');
}
// Output: Hello, Alice!
// Output: Hello, Bob!
// Output: Hello, Charlie!

// Works with any iterable
const message = 'Hi!';

for (const letter of message) {
  console.log(letter);
}
// Output: H
// Output: i
// Output: !`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* break and continue */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>break & continue - Control Your Loops</CardTitle>
              <CardDescription>Stop early or skip iterations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-lg mb-3 text-red-700 dark:text-red-300">break - Stop Loop</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30 mb-3">
                <code className="text-sm font-mono">break;</code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exits the loop immediately. Use when you found what you're looking for!
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">continue - Skip to Next</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30 mb-3">
                <code className="text-sm font-mono">continue;</code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Skips the rest of current loop and goes to next iteration
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="break & continue Examples"
        description="Control loop flow with break and continue"
        code={`// break - stop when found
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let found = null;

for (const num of numbers) {
  if (num === 5) {
    found = num;
    break;  // Stop searching!
  }
  console.log('Checking:', num);
}
console.log('Found:', found);
// Output: Checking: 1
// Output: Checking: 2
// Output: Checking: 3
// Output: Checking: 4
// Output: Found: 5

// continue - skip certain items
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;  // Skip 3
  }
  console.log(i);
}
// Output: 1
// Output: 2
// (skips 3)
// Output: 4
// Output: 5`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: Shopping Cart Total"
        description="Calculate total price using a loop"
        code={`// Shopping cart with multiple items
const cart = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 300 }
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
// Output: Monitor: $300
// Output: ---
// Output: Total: $1399`}
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
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">for Loop = Fixed Count</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use when you know how many times to repeat
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">while = Until Condition</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keep going until something becomes false
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">for...of = Easy Arrays</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Simplest way to go through array items
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">break Stops Loop</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Exit early when you find what you need
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
