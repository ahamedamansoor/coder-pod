'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Wand2 } from 'lucide-react';

export default function JavaScriptArrayFrom() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Wand2}
        category="Advanced Array Methods"
        title="Array.from()"
        description="Convert anything array-like into a real array - like magic!"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <Wand2 className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                What is Array.from()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">Array.from()</code> as a 
                <strong className="text-purple-700 dark:text-purple-400"> magical converter</strong>! 
                It takes things that look like arrays (strings, NodeLists, Sets, Maps) or even just 
                <strong className="text-fuchsia-700 dark:text-fuchsia-400"> numbers</strong>, and transforms them into real arrays 
                with all the array methods. It can even run a function on each item while converting!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use Array.from()?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Perfect for converting DOM NodeLists, creating number ranges, splitting strings, 
              or transforming Sets/Maps into arrays. Way cleaner than old-school tricks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            What Can Be Converted?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">📝</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Array-like Objects</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Objects with <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-1 rounded">length</code> property 
                and indexed elements
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                NodeList, arguments, strings
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Iterables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Objects that can be iterated over
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Set, Map, strings, generators
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800">
              <div className="text-4xl mb-3">🔢</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Length Object</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pass <code className="text-xs bg-pink-100 dark:bg-pink-900/30 px-1 rounded">{`{length: n}`}</code> to create 
                array of size n
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Great for ranges and sequences
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/10 border-2 border-rose-200 dark:border-rose-800">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">With Mapper</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Second argument runs a function on each element during conversion
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Like map() built-in!
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Syntax</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  Array.from(arrayLike)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Basic conversion</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  Array.from(arrayLike, mapFn)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Convert + transform each element</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  Array.from(arrayLike, mapFn, thisArg)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">With custom 'this' context</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Converting Different Types"
        description="Turn various types into arrays"
        language="javascript"
        colorTheme="purple"
        code={`// 1. Convert String to Array
const text = 'Hello';
const letters = Array.from(text);
console.log(letters);
// ['H', 'e', 'l', 'l', 'o']


// 2. Convert Set to Array
const uniqueNums = new Set([1, 2, 2, 3, 3, 4]);
const numsArray = Array.from(uniqueNums);
console.log(numsArray);
// [1, 2, 3, 4]


// 3. Convert NodeList to Array (DOM)
// HTML: <div class="item">A</div><div class="item">B</div>
const nodeList = document.querySelectorAll('.item');
const elements = Array.from(nodeList);

// Now we can use array methods!
elements.forEach(el => console.log(el.textContent));
// "A"
// "B"


// 4. Convert Map keys/values
const userMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'NYC']
]);

const keys = Array.from(userMap.keys());
console.log(keys);
// ['name', 'age', 'city']

const values = Array.from(userMap.values());
console.log(values);
// ['Alice', 25, 'NYC']


// 5. Convert arguments object (old-style functions)
function sum() {
  const args = Array.from(arguments);
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // 10`}
      />

      <CodeSnippet
        title="Example 2: Creating Ranges and Transforming"
        description="Use Array.from() with mapper function for powerful patterns"
        language="javascript"
        colorTheme="pink"
        code={`// 1. Create range of numbers
const range = Array.from({ length: 5 }, (_, i) => i);
console.log(range);
// [0, 1, 2, 3, 4]

// Start from 1
const range1to5 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range1to5);
// [1, 2, 3, 4, 5]

// Even numbers
const evens = Array.from({ length: 5 }, (_, i) => i * 2);
console.log(evens);
// [0, 2, 4, 6, 8]


// 2. Create repeated values
const fives = Array.from({ length: 5 }, () => 5);
console.log(fives);
// [5, 5, 5, 5, 5]

const greetings = Array.from({ length: 3 }, () => 'Hello');
console.log(greetings);
// ['Hello', 'Hello', 'Hello']


// 3. Transform while converting
const numbers = [1, 2, 3, 4, 5];
const doubled = Array.from(numbers, x => x * 2);
console.log(doubled);
// [2, 4, 6, 8, 10]

// Convert string and uppercase
const name = 'alice';
const upper = Array.from(name, char => char.toUpperCase());
console.log(upper);
// ['A', 'L', 'I', 'C', 'E']

console.log(upper.join(''));
// 'ALICE'


// 4. Generate random numbers
const random = Array.from({ length: 5 }, () => 
  Math.floor(Math.random() * 100)
);
console.log(random);
// [23, 67, 12, 89, 45] (random each time)


// 5. Create alphabet
const alphabet = Array.from({ length: 26 }, (_, i) => 
  String.fromCharCode(65 + i)
);
console.log(alphabet);
// ['A', 'B', 'C', ..., 'Z']`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📱</span>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">DOM Operations</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Convert NodeList to array to use <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded text-xs">map, filter, reduce</code>
              </p>
            </div>

            <div className="p-4 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/20 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔢</span>
                <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100">Number Ranges</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create sequences without loops: <code className="bg-fuchsia-100 dark:bg-fuchsia-900/30 px-1 rounded text-xs">{`Array.from({length: 10}, (_, i) => i)`}</code>
              </p>
            </div>

            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔄</span>
                <h4 className="font-bold text-pink-900 dark:text-pink-100">Set/Map Conversion</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Convert unique collections back to arrays for further processing
              </p>
            </div>

            <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">✂️</span>
                <h4 className="font-bold text-rose-900 dark:text-rose-100">String Splitting</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Split strings into character arrays with proper Unicode support
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Magical Converter</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Turn array-like and iterable objects into real arrays
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">With Mapper</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Second argument transforms elements during conversion
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Create Ranges</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">{`{length: n}`}</code> to generate sequences
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">DOM Friendly</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for NodeList and HTMLCollection conversion
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
