'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ListChecks,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Search,
  ArrowLeftRight,
} from 'lucide-react';

export default function JavaScriptArrayMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ListChecks}
        category="JavaScript Fundamentals"
        title="Array Methods (Basic)"
        description="Essential methods to add, remove, search, and transform array data"
        colorTheme="yellow"
      />

      {/* What are Array Methods */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Array Methods?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Array methods are <strong className="text-yellow-700 dark:text-yellow-400">built-in functions</strong> that help you work with arrays. Instead of writing loops to add, remove, or search items, you can use these ready-made tools!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Think of array methods like buttons on a remote control - each button does a specific job (add channel, remove channel, search channels). You don't need to know how they work inside, just press the button!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Adding Elements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Plus className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Adding Elements - push() & unshift()</CardTitle>
              <CardDescription>Add items to the end or beginning</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
              <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
                <h4 className="text-white font-semibold">push() - Add to End</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Adds one or more elements to the <strong>end</strong> of an array
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana'];

fruits.push('orange');
console.log(fruits);
// ['apple', 'banana', 'orange']

fruits.push('grape', 'mango');
console.log(fruits);
// ['apple', 'banana', 'orange', 'grape', 'mango']`}</pre>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
              <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
                <h4 className="text-white font-semibold">unshift() - Add to Beginning</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Adds one or more elements to the <strong>beginning</strong> of an array
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const fruits = ['banana', 'orange'];

fruits.unshift('apple');
console.log(fruits);
// ['apple', 'banana', 'orange']

fruits.unshift('kiwi', 'mango');
console.log(fruits);
// ['kiwi', 'mango', 'apple', 'banana', 'orange']`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Adding Elements Example"
        description="Building a shopping list"
        code={`const shoppingList = [];

// Add items to end
shoppingList.push('milk');
shoppingList.push('bread');
console.log(shoppingList);  // ['milk', 'bread']

// Add urgent item to beginning
shoppingList.unshift('eggs');
console.log(shoppingList);  // ['eggs', 'milk', 'bread']

// Add multiple items
shoppingList.push('butter', 'cheese');
console.log(shoppingList);
// ['eggs', 'milk', 'bread', 'butter', 'cheese']`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Removing Elements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Minus className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Removing Elements - pop() & shift()</CardTitle>
              <CardDescription>Remove items from the end or beginning</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 overflow-hidden">
              <div className="bg-red-600 dark:bg-red-700 px-4 py-3">
                <h4 className="text-white font-semibold">pop() - Remove from End</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Removes the <strong>last</strong> element and returns it
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana', 'orange'];

const removed = fruits.pop();
console.log(removed);  // 'orange'
console.log(fruits);   // ['apple', 'banana']

fruits.pop();
console.log(fruits);   // ['apple']`}</pre>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
              <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
                <h4 className="text-white font-semibold">shift() - Remove from Beginning</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Removes the <strong>first</strong> element and returns it
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-orange-200 dark:border-orange-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana', 'orange'];

const removed = fruits.shift();
console.log(removed);  // 'apple'
console.log(fruits);   // ['banana', 'orange']

fruits.shift();
console.log(fruits);   // ['orange']`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Queue Simulation"
        description="First in, first out - like a line at a store"
        code={`const queue = [];

// People join the line (add to end)
queue.push('Alice');
queue.push('Bob');
queue.push('Charlie');
console.log('Queue:', queue);
// ['Alice', 'Bob', 'Charlie']

// First person gets served (remove from beginning)
const served = queue.shift();
console.log(served + ' was served');  // Alice was served
console.log('Queue:', queue);
// ['Bob', 'Charlie']

// More people join
queue.push('David');
console.log('Queue:', queue);
// ['Bob', 'Charlie', 'David']`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Searching */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Searching Arrays</CardTitle>
              <CardDescription>Find items and check if they exist</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Search Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">indexOf() - Find position</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns the index of the first occurrence, or -1 if not found
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.indexOf('banana'));  // 1
console.log(fruits.indexOf('grape'));   // -1`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">includes() - Check if exists</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns true if element exists, false otherwise
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));  // true
console.log(fruits.includes('grape'));   // false`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Check User Permissions"
        description="See if a user has specific access"
        code={`const userPermissions = ['read', 'write', 'delete'];

// Check if user can delete
if (userPermissions.includes('delete')) {
  console.log('✅ User can delete files');
} else {
  console.log('❌ User cannot delete files');
}

// Check if user can admin
if (userPermissions.includes('admin')) {
  console.log('User is admin');
} else {
  console.log('User is not admin');
}

// Output:
// ✅ User can delete files
// User is not admin`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* slice & concat */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <ArrowLeftRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Copying & Combining Arrays</CardTitle>
              <CardDescription>slice() and concat() don't modify the original</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Non-Mutating Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">slice() - Extract portion</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns a shallow copy of a portion (start to end)
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

const some = fruits.slice(1, 3);
console.log(some);     // ['banana', 'orange']
console.log(fruits);   // Original unchanged`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">concat() - Join arrays</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Combines two or more arrays into a new array
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana'];
const veggies = ['carrot', 'broccoli'];

const food = fruits.concat(veggies);
console.log(food);
// ['apple', 'banana', 'carrot', 'broccoli']`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="slice() Examples"
        description="Extracting parts of an array"
        code={`const numbers = [10, 20, 30, 40, 50];

// Get items from index 1 to 3 (not including 3)
const slice1 = numbers.slice(1, 3);
console.log(slice1);  // [20, 30]

// Get items from index 2 to end
const slice2 = numbers.slice(2);
console.log(slice2);  // [30, 40, 50]

// Get last 2 items (negative index)
const slice3 = numbers.slice(-2);
console.log(slice3);  // [40, 50]

// Original array is unchanged
console.log(numbers);  // [10, 20, 30, 40, 50]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* join & reverse */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>More Useful Methods</CardTitle>
              <CardDescription>join(), reverse(), and sort()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Transform & Organize</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">join() - Array to String</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Joins all elements into a string with a separator
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.join(', '));  // 'apple, banana, orange'
console.log(fruits.join(' - ')); // 'apple - banana - orange'
console.log(fruits.join(''));    // 'applebananaorange'`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">reverse() - Reverse order</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Reverses the array in place (modifies original!)
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Format Names"
        description="Combining array methods"
        code={`const firstName = 'john';
const lastName = 'doe';

// Split, capitalize, join
const words = [firstName, lastName];

const formatted = words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(formatted);  // 'John Doe'

// Create email from name parts
const email = [firstName, lastName].join('.') + '@company.com';
console.log(email);  // 'john.doe@company.com'`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Methods That Modify</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <strong>push()</strong> - add to end</li>
                <li>• <strong>pop()</strong> - remove from end</li>
                <li>• <strong>unshift()</strong> - add to beginning</li>
                <li>• <strong>shift()</strong> - remove from beginning</li>
                <li>• <strong>reverse()</strong> - reverse order</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Methods That Don't Modify</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <strong>slice()</strong> - extract portion</li>
                <li>• <strong>concat()</strong> - combine arrays</li>
                <li>• <strong>join()</strong> - array to string</li>
                <li>• <strong>indexOf()</strong> - find position</li>
                <li>• <strong>includes()</strong> - check existence</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Next Steps</AlertTitle>
            <AlertDescription className="text-base">
              These are the <strong>basic</strong> array methods. There are more powerful methods like <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">map()</code>, <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">filter()</code>, and <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">reduce()</code> that we'll cover in "Array Iteration Methods"!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
