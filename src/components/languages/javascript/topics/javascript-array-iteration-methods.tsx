'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Repeat,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Filter,
  ArrowRight,
  Search,
  Zap,
} from 'lucide-react';

export default function JavaScriptArrayIterationMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript Fundamentals"
        title="Array Iteration Methods"
        description="Powerful methods to transform, filter, and process arrays"
        colorTheme="yellow"
      />

      {/* What are Iteration Methods */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Array Iteration Methods?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Instead of writing <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">for</code> loops, use these <strong className="text-yellow-700 dark:text-yellow-400">built-in methods</strong> to transform, filter, and process arrays in a cleaner, more readable way!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Why Use Them?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              These methods replace manual loops with <strong>declarative code</strong> - you say WHAT you want, not HOW to do it. Your code becomes shorter, clearer, and easier to understand!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Method Categories</CardTitle>
          <CardDescription>Different methods for different tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-lg mb-2">Transform</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">map, flatMap</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold text-lg mb-2">Filter</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">filter, find, some, every</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-bold text-lg mb-2">Reduce</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">reduce, reduceRight</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-bold text-lg mb-2">Latest (ES2023+)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">findLast, toReversed, with</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* map() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>map() - Transform Each Item</CardTitle>
              <CardDescription>Create a new array by transforming every element</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">How map() Works</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Takes each element, applies a function, returns a <strong>new array</strong> with the results. Original array stays unchanged!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`[1, 2, 3].map(x => x * 2)
// Returns: [2, 4, 6]

// Old way (manual loop):
const result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="map() Examples"
        description="Transforming array data"
        code={`const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Square each number
const squared = numbers.map(n => n ** 2);
console.log(squared);  // [1, 4, 9, 16, 25]

// Convert to strings
const strings = numbers.map(n => 'Number: ' + n);
console.log(strings);
// ['Number: 1', 'Number: 2', ...]

// Real-world: Extract property from objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);
console.log(names);  // ['Alice', 'Bob', 'Charlie']

// Add tax to prices
const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
console.log(withTax);  // [11, 22, 33]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* filter() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Filter className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>filter() - Keep Only What You Want</CardTitle>
              <CardDescription>Create a new array with elements that pass a test</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">How filter() Works</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Tests each element with a function. If the function returns <strong>true</strong>, keep it. If <strong>false</strong>, remove it!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`[1, 2, 3, 4, 5].filter(x => x > 3)
// Returns: [4, 5]

// Keeps only elements where condition is true`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="filter() Examples"
        description="Selecting specific items from arrays"
        code={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4, 6, 8, 10]

// Get numbers greater than 5
const big = numbers.filter(n => n > 5);
console.log(big);  // [6, 7, 8, 9, 10]

// Real-world: Filter users by age
const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 30 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);
// [{ name: 'Bob', age: 25 }, { name: 'David', age: 30 }]

// Filter products in stock
const products = [
  { name: 'Laptop', inStock: true },
  { name: 'Phone', inStock: false },
  { name: 'Tablet', inStock: true }
];

const available = products.filter(p => p.inStock);
console.log(available);
// [{ name: 'Laptop', ... }, { name: 'Tablet', ... }]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* reduce() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>reduce() - Combine to Single Value</CardTitle>
              <CardDescription>Process array into a single result (sum, product, object, etc.)</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">How reduce() Works</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Processes array from left to right, accumulating a result. Most powerful but trickiest method!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`array.reduce((accumulator, currentValue) => {
  return newAccumulatorValue;
}, initialValue)

// Example: Sum numbers
[1, 2, 3].reduce((sum, num) => sum + num, 0)
// Returns: 6`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="reduce() Examples"
        description="Combining array values in different ways"
        code={`const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// Find maximum
const max = numbers.reduce((biggest, num) => {
  return num > biggest ? num : biggest;
}, numbers[0]);
console.log(max);  // 5

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, orange: 1 }

// Group by property
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const byAge = people.reduce((groups, person) => {
  const age = person.age;
  if (!groups[age]) groups[age] = [];
  groups[age].push(person);
  return groups;
}, {});
console.log(byAge);
// { 25: [{Alice}, {Charlie}], 30: [{Bob}] }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* find() and findIndex() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Search className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>find() & findIndex() - Search for First Match</CardTitle>
              <CardDescription>Find the first element that matches a condition</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
              <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
                <h4 className="text-white font-semibold">find() - Returns Element</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Returns the <strong>first element</strong> that passes the test, or <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">undefined</code>
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded p-3 border">
{`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: 'Bob' }`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-amber-200 dark:border-amber-800/30 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 overflow-hidden">
              <div className="bg-amber-600 dark:bg-amber-700 px-4 py-3">
                <h4 className="text-white font-semibold">findIndex() - Returns Position</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Returns the <strong>index</strong> of first match, or <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">-1</code>
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded p-3 border">
{`const numbers = [5, 12, 8, 130, 44];

const index = numbers.findIndex(n => n > 10);
console.log(index);  // 1 (position of 12)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Find User by Email"
        description="Searching through user data"
        code={`const users = [
  { id: 1, email: 'alice@example.com', role: 'user' },
  { id: 2, email: 'bob@example.com', role: 'admin' },
  { id: 3, email: 'charlie@example.com', role: 'user' }
];

// Find user by email
const user = users.find(u => u.email === 'bob@example.com');
console.log(user);
// { id: 2, email: 'bob@example.com', role: 'admin' }

// Find admin user
const admin = users.find(u => u.role === 'admin');
console.log(admin.email);  // 'bob@example.com'

// Find index for updating
const index = users.findIndex(u => u.id === 3);
if (index !== -1) {
  users[index].role = 'admin';
  console.log('Updated user 3 to admin');
}

// Handle not found
const missing = users.find(u => u.id === 999);
if (missing) {
  console.log('Found user');
} else {
  console.log('User not found');  // This runs
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* some() and every() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>some() & every() - Test Conditions</CardTitle>
              <CardDescription>Check if some or all elements pass a test</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
              <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
                <h4 className="text-white font-semibold">some() - At Least One</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Returns <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">true</code> if <strong>at least one</strong> element passes
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded p-3 border">
{`const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven);  // true`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
              <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
                <h4 className="text-white font-semibold">every() - All Must Pass</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Returns <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">true</code> if <strong>all</strong> elements pass
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 rounded p-3 border">
{`const numbers = [2, 4, 6, 8];

const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven);  // true`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="some() & every() Examples"
        description="Testing array conditions"
        code={`const numbers = [1, 2, 3, 4, 5];

// Check if any number is greater than 4
const hasLarge = numbers.some(n => n > 4);
console.log(hasLarge);  // true

// Check if all numbers are positive
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);  // true

// Check if all numbers are even
const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven);  // false

// Real-world: Form validation
const fields = [
  { name: 'email', value: 'test@example.com', valid: true },
  { name: 'password', value: '', valid: false },
  { name: 'username', value: 'john', valid: true }
];

// Check if any field is invalid
const hasErrors = fields.some(field => !field.valid);
console.log(hasErrors);  // true

// Check if all fields are valid
const allValid = fields.every(field => field.valid);
console.log(allValid);  // false

// Real-world: Check permissions
const permissions = ['read', 'write', 'delete'];
const canDelete = permissions.some(p => p === 'delete');
console.log(canDelete);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Latest Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Latest Features (ES2022-2023)</CardTitle>
              <CardDescription>Modern array methods - findLast(), at(), toReversed(), with()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-pink-200 dark:border-pink-800/30 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-pink-600 dark:bg-pink-700 px-4 py-3">
              <h4 className="text-white font-semibold">New Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">findLast() - Search from End</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Like <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">find()</code> but starts from the end
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const numbers = [1, 2, 3, 4, 5, 4, 3];
const last = numbers.findLast(n => n === 4);
console.log(last);  // 4 (the last 4)`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">at() - Negative Indexing</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Access elements with negative indexes (from end)
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const arr = ['a', 'b', 'c', 'd'];
console.log(arr.at(-1));   // 'd' (last item)
console.log(arr.at(-2));   // 'c' (second to last)`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">toReversed() - Non-Mutating Reverse</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns reversed copy without modifying original
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const arr = [1, 2, 3];
const reversed = arr.toReversed();
console.log(reversed);  // [3, 2, 1]
console.log(arr);       // [1, 2, 3] (unchanged)`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <h5 className="font-semibold mb-2">with() - Replace at Index</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Returns copy with one element changed
                </p>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const arr = [1, 2, 3, 4];
const newArr = arr.with(2, 99);
console.log(newArr);  // [1, 2, 99, 4]
console.log(arr);     // [1, 2, 3, 4] (unchanged)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Latest Features Examples"
        description="Using modern array methods"
        code={`// findLast() - Find from end
const logs = [
  { time: '10:00', message: 'Started' },
  { time: '10:30', message: 'Error' },
  { time: '11:00', message: 'Fixed' },
  { time: '11:30', message: 'Error' }
];

const lastError = logs.findLast(log => log.message === 'Error');
console.log(lastError);  // { time: '11:30', message: 'Error' }

// findLastIndex()
const lastErrorIndex = logs.findLastIndex(log => log.message === 'Error');
console.log(lastErrorIndex);  // 3

// at() - Negative indexing
const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits.at(-1));   // 'date' (last)
console.log(fruits.at(-2));   // 'cherry' (second to last)
console.log(fruits.at(0));    // 'apple' (first)

// toReversed() - Non-mutating reverse
const numbers = [1, 2, 3, 4, 5];
const reversed = numbers.toReversed();
console.log(reversed);  // [5, 4, 3, 2, 1]
console.log(numbers);   // [1, 2, 3, 4, 5] (original unchanged)

// toSorted() - Non-mutating sort
const unsorted = [3, 1, 4, 1, 5];
const sorted = unsorted.toSorted();
console.log(sorted);    // [1, 1, 3, 4, 5]
console.log(unsorted);  // [3, 1, 4, 1, 5] (original unchanged)

// with() - Replace at index
const scores = [85, 90, 78, 92];
const updated = scores.with(2, 95);
console.log(updated);  // [85, 90, 95, 92]
console.log(scores);   // [85, 90, 78, 92] (original unchanged)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* forEach() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Repeat className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>forEach() - Execute Function for Each</CardTitle>
              <CardDescription>Run code for every element (no return value)</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">When to Use forEach()</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use when you need to <strong>do something</strong> with each element but don't need a new array. Good for side effects like logging, updating DOM, etc.
              </p>
              <Alert className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/30">
                <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                <AlertDescription className="text-sm">
                  <strong>Note:</strong> forEach() can't be stopped early (no break/return). Use <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">for...of</code> if you need that!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="forEach() Examples"
        description="Executing code for each element"
        code={`const numbers = [1, 2, 3, 4, 5];

// Print each number
numbers.forEach(num => {
  console.log(num);
});
// Output: 1, 2, 3, 4, 5

// With index
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});

// Real-world: Update user display
const users = ['Alice', 'Bob', 'Charlie'];

users.forEach(user => {
  console.log('Welcome, ' + user + '!');
});
// Welcome, Alice!
// Welcome, Bob!
// Welcome, Charlie!

// Side effects: Accumulate in external variable
let total = 0;
const prices = [10, 20, 30];

prices.forEach(price => {
  total += price;
});

console.log('Total:', total);  // Total: 60

// Can't break out (this is limitation)
const nums = [1, 2, 3, 4, 5];
nums.forEach(n => {
  console.log(n);
  // return; does NOT stop forEach!
});`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Chaining */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Method Chaining</CardTitle>
              <CardDescription>Combine multiple methods for powerful transformations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Chain Methods Together</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Since most methods return arrays, you can <strong>chain them</strong> to create complex transformations in readable steps!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`numbers
  .filter(n => n > 10)    // Keep large numbers
  .map(n => n * 2)        // Double them
  .reduce((a, b) => a + b, 0)  // Sum them up`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Method Chaining Examples"
        description="Combining methods for complex operations"
        code={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get sum of even numbers doubled
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(n => n * 2)           // [4, 8, 12, 16, 20]
  .reduce((sum, n) => sum + n, 0);  // 60

console.log(result);  // 60

// Real-world: Process user data
const users = [
  { name: 'Alice', age: 17, active: true },
  { name: 'Bob', age: 25, active: true },
  { name: 'Charlie', age: 30, active: false },
  { name: 'David', age: 22, active: true }
];

const activeAdultNames = users
  .filter(u => u.active)           // Active users only
  .filter(u => u.age >= 18)        // Adults only
  .map(u => u.name)                // Get names
  .map(name => name.toUpperCase()); // Uppercase

console.log(activeAdultNames);  // ['BOB', 'DAVID']

// Calculate average price of discounted items
const products = [
  { name: 'Laptop', price: 1000, onSale: true },
  { name: 'Mouse', price: 50, onSale: false },
  { name: 'Keyboard', price: 100, onSale: true },
  { name: 'Monitor', price: 300, onSale: true }
];

const avgSalePrice = products
  .filter(p => p.onSale)
  .map(p => p.price * 0.8)  // 20% off
  .reduce((sum, price, i, arr) => {
    return i === arr.length - 1 
      ? (sum + price) / arr.length 
      : sum + price;
  }, 0);

console.log(avgSalePrice);  // Average of discounted prices`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Reference & Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>map()</strong> to transform all elements</li>
                <li>• Use <strong>filter()</strong> to keep some elements</li>
                <li>• Use <strong>find()</strong> to get first match</li>
                <li>• Use <strong>reduce()</strong> for single values</li>
                <li>• Chain methods for complex operations</li>
                <li>• Use arrow functions for brevity</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use forEach() if you need a return value</li>
                <li>• Don't modify original array in map/filter</li>
                <li>• Don't forget initial value in reduce()</li>
                <li>• Don't over-chain (hard to debug)</li>
                <li>• Don't use when performance critical (large arrays)</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Method Comparison</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Returns New Array:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1">map, filter, slice, concat, flat, flatMap</div>
              </div>
              <div>
                <strong>Returns Single Value:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1">reduce, find, some, every, includes</div>
              </div>
              <div>
                <strong>No Return (Side Effects):</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1">forEach</div>
              </div>
              <div>
                <strong>Latest (Non-Mutating):</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1">toReversed, toSorted, toSpliced, with</div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Performance Tip</AlertTitle>
            <AlertDescription className="text-base">
              For very large arrays (millions of items), traditional <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">for</code> loops are faster. For normal use, array methods are clearer and the performance difference is negligible!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
