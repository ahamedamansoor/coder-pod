'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Brackets,
  Sparkles,
  Sliders,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptFunctionParameters() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Brackets}
        category="JavaScript Fundamentals"
        title="Function Parameters"
        description="Pass data into functions - learn defaults, rest parameters, and destructuring"
        colorTheme="yellow"
      />

      {/* What are Parameters */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Function Parameters?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Parameters are <strong className="text-yellow-700 dark:text-yellow-400">named variables</strong> in a function that receive values when the function is called. Think of them as labeled containers that hold the data your function needs.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Parameters vs Arguments</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Parameters</strong> are placeholders in the function definition. <strong>Arguments</strong> are the actual values you pass when calling the function.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <ArrowRight className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Parameters in Action</CardTitle>
              <CardDescription>Understanding how parameters work</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-yellow-600 dark:bg-yellow-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Difference</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When you define a function, you specify <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">parameters</code>. When you call it, you pass <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">arguments</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-yellow-200 dark:border-yellow-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Parameters: name, age
function introduce(name, age) {
  return 'I am ' + name + ', ' + age + ' years old';
}

// Arguments: 'Alice', 25
const message = introduce('Alice', 25);

console.log(message);
// Output: I am Alice, 25 years old`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Parameters Example"
        description="Pass different values to the same function"
        code={`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice');   // Hello, Alice!
greet('Bob');     // Hello, Bob!
greet('Charlie'); // Hello, Charlie!

// Multiple parameters
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));   // 8
console.log(add(10, 20)); // 30`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Default Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Sliders className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Default Parameters</CardTitle>
              <CardDescription>Provide fallback values when arguments aren't supplied</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Why Use Defaults?</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Default parameters let you set fallback values. If someone doesn't pass an argument, the default kicks in automatically!
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Without Default</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function greet(name) {
  console.log('Hello, ' + name);
}

greet();
// Output: Hello, undefined
// Not good! ❌`}</pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">✅ With Default</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}

greet();
// Output: Hello, Guest
// Perfect! ✅`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Default Parameters in Action"
        description="Set default values for optional parameters"
        code={`function greet(name = 'Guest', greeting = 'Hello') {
  return greeting + ', ' + name + '!';
}

// Call with both arguments
console.log(greet('Alice', 'Hi'));
// Output: Hi, Alice!

// Call with one argument
console.log(greet('Bob'));
// Output: Hello, Bob!

// Call with no arguments
console.log(greet());
// Output: Hello, Guest!`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Default with Expressions"
        description="Defaults can be any expression, not just simple values"
        code={`// Default can be a function call or expression
function createUser(name, createdAt = new Date()) {
  return {
    name: name,
    created: createdAt
  };
}

const user1 = createUser('Alice');
console.log(user1);
// { name: 'Alice', created: [current date] }

// Can override with custom date
const customDate = new Date('2024-01-01');
const user2 = createUser('Bob', customDate);
console.log(user2);
// { name: 'Bob', created: 2024-01-01... }`}
        language="javascript"
        colorTheme="yellow"
      />

      <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
        <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <AlertTitle>When Defaults Apply</AlertTitle>
        <AlertDescription className="text-base">
          Default values are used when the argument is <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">undefined</code>. Passing <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">null</code> or <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">0</code> will NOT trigger the default!
        </AlertDescription>
      </Alert>

      {/* Rest Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Rest Parameters (...)</CardTitle>
              <CardDescription>Collect multiple arguments into a single array</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Accept Any Number of Arguments!</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The rest parameter syntax <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">...name</code> collects all remaining arguments into an array. Perfect for flexible functions!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));           // 3
console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum());               // 0

// numbers becomes an array!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Mixing Regular and Rest Parameters"
        description="Combine fixed parameters with rest parameters"
        code={`// First parameter is required, rest are collected
function createList(title, ...items) {
  return {
    title: title,
    items: items,
    count: items.length
  };
}

const groceries = createList(
  'Shopping',
  'Milk',
  'Bread',
  'Eggs',
  'Butter'
);

console.log(groceries);
// Output: {
//   title: 'Shopping',
//   items: ['Milk', 'Bread', 'Eggs', 'Butter'],
//   count: 4
// }`}
        language="javascript"
        colorTheme="yellow"
      />

      <Alert className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/30">
        <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        <AlertTitle>Rest Must Be Last!</AlertTitle>
        <AlertDescription className="text-base">
          The rest parameter must always be the last parameter in the function signature. You can't have parameters after <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">...rest</code>
        </AlertDescription>
      </Alert>

      {/* Destructuring Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Brackets className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Destructuring Parameters</CardTitle>
              <CardDescription>Extract values from objects and arrays directly in the function signature</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Pull What You Need!</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Instead of passing an entire object and accessing properties inside, you can destructure right in the parameter list!
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Without Destructuring</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function displayUser(user) {
  return user.name + 
    ' (' + user.email + ')';
}

// Have to repeat 'user.'`}</pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">✅ With Destructuring</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function displayUser({ name, email }) {
  return name + ' (' + email + ')';
}

// Much cleaner! ✅`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object Destructuring with Defaults"
        description="Combine destructuring with default values"
        code={`// Destructure object parameter with defaults
function displayUser({ name, email, role = 'user' }) {
  return name + ' (' + email + ') - Role: ' + role;
}

const user1 = { 
  name: 'Alice', 
  email: 'alice@example.com', 
  role: 'admin' 
};

const user2 = { 
  name: 'Bob', 
  email: 'bob@example.com' 
};

console.log(displayUser(user1));
// Output: Alice (alice@example.com) - Role: admin

console.log(displayUser(user2));
// Output: Bob (bob@example.com) - Role: user`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Array Destructuring"
        description="Extract array elements by position"
        code={`// Destructure array parameter
function getCoordinates([x, y, z = 0]) {
  return {
    x: x,
    y: y,
    z: z
  };
}

console.log(getCoordinates([10, 20, 30]));
// Output: { x: 10, y: 20, z: 30 }

console.log(getCoordinates([5, 15]));
// Output: { x: 5, y: 15, z: 0 }

// Skip elements with commas
function getFirstAndThird([first, , third]) {
  return { first, third };
}

console.log(getFirstAndThird([1, 2, 3]));
// Output: { first: 1, third: 3 }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real-World Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Options Object Pattern</CardTitle>
              <CardDescription>The most common pattern in modern JavaScript</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Professional Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Instead of many individual parameters, pass a single options object with defaults. This pattern is used everywhere in modern JavaScript!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Options object with destructuring + defaults
function createButton({
  text,
  color = 'blue',
  size = 'medium',
  disabled = false
}) {
  return 'Button: ' + text + 
    ' (' + color + ', ' + size + ')';
}

// Only pass what you need!
const btn = createButton({
  text: 'Click Me',
  color: 'red'
});

console.log(btn);
// Output: Button: Click Me (red, medium)`}</pre>
              </div>
            </div>
          </div>

          <Alert className="bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/30">
            <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle>Why This Pattern is Great</AlertTitle>
            <AlertDescription className="text-base space-y-2">
              <div>✅ Self-documenting - parameter names are clear</div>
              <div>✅ Order doesn't matter - pass properties in any order</div>
              <div>✅ Optional parameters - just omit what you don't need</div>
              <div>✅ Default values - built-in fallbacks</div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Math Functions with Rest"
        description="Accept unlimited arguments for calculations"
        code={`// Calculate average of any number of values
function average(...numbers) {
  if (numbers.length === 0) return 0;
  
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

console.log(average(10, 20, 30));
// Output: 20

console.log(average(5, 15, 25, 35));
// Output: 20

// Find maximum
function max(...numbers) {
  if (numbers.length === 0) return -Infinity;
  return Math.max(...numbers);
}

console.log(max(3, 7, 2, 9, 1));
// Output: 9`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use defaults for optional parameters</li>
                <li>• Destructure only the fields you need</li>
                <li>• Prefer rest over the arguments object</li>
                <li>• Use options object for many parameters</li>
                <li>• Put rest parameter last</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Too many individual parameters</li>
                <li>• Mutating parameter objects</li>
                <li>• Using the old arguments object</li>
                <li>• Parameters after rest parameter</li>
                <li>• Unclear parameter names</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
