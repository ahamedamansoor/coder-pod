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
  PackageOpen,
  Package,
  Copy,
} from 'lucide-react';

export default function JavaScriptSpreadRest() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={PackageOpen}
        category="JavaScript Fundamentals"
        title="Spread & Rest Operators"
        description="Three dots ... that do powerful things - spread items out or collect them together"
        colorTheme="yellow"
      />

      {/* What are ... */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                The Three Dots: ... (Ellipsis)
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Three dots <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-base">...</code> work like magic! They can <strong className="text-blue-700 dark:text-blue-400">spread items out</strong> (expand) or <strong className="text-indigo-700 dark:text-indigo-400">collect items together</strong> (gather). Same syntax, different uses!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <PackageOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">Two Different Jobs</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Spread</strong> = Unpack items from array/object<br/>
              <strong>Rest</strong> = Pack multiple items into array
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Spread Operator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <PackageOpen className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Spread Operator - Unpack Items</CardTitle>
              <CardDescription>Take items out of an array or object</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Spread = Unpack</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">...</code> to <strong>unpack</strong> (spread) array items or object properties
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const arr = [1, 2, 3];

// Without spread
console.log(arr);      // [1, 2, 3]

// With spread - unpacks items
console.log(...arr);   // 1 2 3`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Spread Arrays - Combine Arrays"
        description="Merge multiple arrays into one"
        code={`const fruits = ['apple', 'banana'];
const veggies = ['carrot', 'broccoli'];

// Combine arrays with spread
const food = [...fruits, ...veggies];

console.log(food);
// Output: ['apple', 'banana', 'carrot', 'broccoli']

// Add items while combining
const allFood = ['pizza', ...fruits, 'burger', ...veggies];
console.log(allFood);
// Output: ['pizza', 'apple', 'banana', 'burger', 'carrot', 'broccoli']`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Spread Arrays - Copy Arrays"
        description="Make a copy of an array"
        code={`const original = [1, 2, 3];

// Copy array with spread
const copy = [...original];

console.log(copy);  // [1, 2, 3]

// Change copy doesn't affect original
copy.push(4);
console.log(original);  // [1, 2, 3] (unchanged)
console.log(copy);      // [1, 2, 3, 4] (changed)

// Without spread - shares same reference!
const notACopy = original;
notACopy.push(5);
console.log(original);  // [1, 2, 3, 5] (changed too! ⚠️)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Spread Objects */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Copy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Spread Objects</CardTitle>
              <CardDescription>Unpack object properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Combine Objects</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Spread works with objects too - copy or merge properties
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = { name: 'Alice', age: 25 };
const job = { title: 'Developer', company: 'Tech Corp' };

// Combine objects
const employee = { ...person, ...job };

console.log(employee);
// { name: 'Alice', age: 25, title: 'Developer', company: 'Tech Corp' }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Spread Objects Example"
        description="Copy and merge objects"
        code={`// Copy object
const user = { name: 'Bob', age: 30 };
const userCopy = { ...user };

console.log(userCopy);  // { name: 'Bob', age: 30 }

// Merge objects
const defaults = { theme: 'light', lang: 'en' };
const userSettings = { theme: 'dark' };

const settings = { ...defaults, ...userSettings };
console.log(settings);
// { theme: 'dark', lang: 'en' }
// theme from userSettings overwrites defaults

// Add properties while copying
const admin = { ...user, role: 'admin', active: true };
console.log(admin);
// { name: 'Bob', age: 30, role: 'admin', active: true }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Rest Operator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Rest Operator - Collect Items</CardTitle>
              <CardDescription>Gather remaining items into an array</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Rest = Collect Remaining</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">...</code> to <strong>collect</strong> the rest of the items into an array
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Get first item, collect rest
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]`}</pre>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Rest Must Be Last</AlertTitle>
            <AlertDescription className="text-base">
              The rest operator <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">...rest</code> must always be the last item!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Rest with Arrays"
        description="Collect remaining array items"
        code={`// Get first item, rest go into array
const [first, ...others] = ['a', 'b', 'c', 'd'];

console.log(first);   // 'a'
console.log(others);  // ['b', 'c', 'd']

// Get first two, rest in array
const [one, two, ...remaining] = [1, 2, 3, 4, 5];

console.log(one);        // 1
console.log(two);        // 2
console.log(remaining);  // [3, 4, 5]

// Skip items with commas
const [, , third, ...rest] = [10, 20, 30, 40, 50];

console.log(third);  // 30
console.log(rest);   // [40, 50]`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Rest with Objects"
        description="Collect remaining object properties"
        code={`// Get name, collect rest of properties
const user = {
  name: 'Alice',
  age: 25,
  city: 'Boston',
  country: 'USA'
};

const { name, ...otherInfo } = user;

console.log(name);       // 'Alice'
console.log(otherInfo);  // { age: 25, city: 'Boston', country: 'USA' }

// Extract specific properties
const { city, ...userData } = user;

console.log(city);       // 'Boston'
console.log(userData);   // { name: 'Alice', age: 25, country: 'USA' }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Rest in Functions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Rest in Functions</CardTitle>
              <CardDescription>Accept unlimited arguments</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Collect Function Arguments</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use rest in function parameters to accept any number of arguments
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function sum(...numbers) {
  // numbers is an array of all arguments
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Rest Parameters in Functions"
        description="Accept variable number of arguments"
        code={`// Function that adds all numbers
function add(...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(add(1, 2));           // 3
console.log(add(1, 2, 3));        // 6
console.log(add(1, 2, 3, 4, 5));  // 15

// Combine regular params with rest
function introduce(firstName, lastName, ...hobbies) {
  console.log('Name: ' + firstName + ' ' + lastName);
  console.log('Hobbies: ' + hobbies.join(', '));
}

introduce('Alice', 'Johnson', 'reading', 'coding', 'gaming');
// Output: Name: Alice Johnson
// Output: Hobbies: reading, coding, gaming`}
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
                <span className="text-2xl">📤</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Spread = Unpack</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    [...array] spreads items out
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📥</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rest = Collect</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    [...rest] gathers items into array
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Combine Arrays</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    [...a, ...b] merges arrays
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rest Must Be Last</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    [first, ...rest] - rest is always last
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
