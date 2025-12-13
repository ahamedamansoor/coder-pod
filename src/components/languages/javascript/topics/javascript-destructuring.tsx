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
  Package,
  Boxes,
  Gift,
} from 'lucide-react';

export default function JavaScriptDestructuring() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript Fundamentals"
        title="Destructuring"
        description="Unpack values from arrays and objects - extract what you need easily"
        colorTheme="yellow"
      />

      {/* What is Destructuring? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-blue-50/20 dark:from-teal-950/10 dark:via-cyan-950/5 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Destructuring: Unpack Values
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Destructuring is like <strong className="text-teal-700 dark:text-teal-400">unpacking a box</strong> - you take out exactly what you need from an array or object. It's a shortcut for extracting multiple values at once!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-teal-200 dark:border-teal-800/30">
            <Gift className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <AlertTitle className="text-lg">Like Opening a Gift Box</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Instead of taking items out one by one, destructuring lets you grab multiple items in one line!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Array Destructuring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Array Destructuring</CardTitle>
              <CardDescription>Extract values from arrays by position</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Verbose</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const colors = ['red', 'green', 'blue'];

const first = colors[0];
const second = colors[1];
const third = colors[2];

console.log(first);   // red
console.log(second);  // green
console.log(third);   // blue`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Destructuring - Clean!</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const colors = ['red', 'green', 'blue'];

// Get all three in one line!
const [first, second, third] = colors;

console.log(first);   // red
console.log(second);  // green
console.log(third);   // blue`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Array Destructuring Basics"
        description="Extract array values by position"
        code={`// Basic array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;

console.log(first);   // apple
console.log(second);  // banana
console.log(third);   // orange

// Skip items you don't need
const numbers = [1, 2, 3, 4, 5];
const [one, , three, , five] = numbers;  // Skip 2 and 4

console.log(one);    // 1
console.log(three);  // 3
console.log(five);   // 5

// Get only what you need
const [firstItem] = ['a', 'b', 'c'];
console.log(firstItem);  // a

const [, secondItem] = ['x', 'y', 'z'];
console.log(secondItem);  // y`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object Destructuring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Boxes className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Object Destructuring</CardTitle>
              <CardDescription>Extract properties by name</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Repetitive</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice',
  age: 25,
  city: 'Boston'
};

const name = user.name;
const age = user.age;
const city = user.city;`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Destructuring - Simple!</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice',
  age: 25,
  city: 'Boston'
};

// Extract all in one line!
const { name, age, city } = user;`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object Destructuring Basics"
        description="Extract properties by matching names"
        code={`// Basic object destructuring
const person = {
  name: 'Bob',
  age: 30,
  job: 'Developer'
};

// Extract by property name
const { name, age, job } = person;

console.log(name);  // Bob
console.log(age);   // 30
console.log(job);   // Developer

// Order doesn't matter!
const { job: jobTitle, name: fullName } = person;
console.log(jobTitle);  // Developer
console.log(fullName);  // Bob

// Get only what you need
const { name: userName } = person;
console.log(userName);  // Bob`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Renaming Variables */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Rename Variables</CardTitle>
              <CardDescription>Give extracted values different names</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Use : to Rename</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">propertyName: newName</code> to rename during destructuring
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = { name: 'Alice', age: 25 };

// Rename during destructuring
const { name: userName, age: userAge } = user;

console.log(userName);  // Alice
console.log(userAge);   // 25
// name and age don't exist!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Renaming Example"
        description="Give properties new variable names"
        code={`const product = {
  id: 101,
  name: 'Laptop',
  price: 999
};

// Rename to avoid conflicts
const { 
  id: productId, 
  name: productName, 
  price: productPrice 
} = product;

console.log(productId);     // 101
console.log(productName);   // Laptop
console.log(productPrice);  // 999

// Useful when you need clearer names
const settings = { lang: 'en', theme: 'dark' };
const { lang: language, theme: colorTheme } = settings;

console.log(language);    // en
console.log(colorTheme);  // dark`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Default Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Default Values</CardTitle>
              <CardDescription>Provide fallback values if property doesn't exist</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Use = for Defaults</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Add <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">= defaultValue</code> to use a fallback if the property is missing
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = { name: 'Bob' };

// age doesn't exist, use default
const { name, age = 25 } = user;

console.log(name);  // Bob
console.log(age);   // 25 (default)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Default Values Example"
        description="Prevent undefined with default values"
        code={`// Without defaults
const settings = { theme: 'dark' };
const { theme, fontSize } = settings;

console.log(theme);     // dark
console.log(fontSize);  // undefined ⚠️

// With defaults
const { theme: colorTheme, fontSize = 14 } = settings;

console.log(colorTheme);  // dark
console.log(fontSize);    // 14 (default used)

// Multiple defaults
const config = { title: 'My App' };
const { 
  title = 'Untitled', 
  version = '1.0', 
  lang = 'en' 
} = config;

console.log(title);    // My App (exists)
console.log(version);  // 1.0 (default)
console.log(lang);     // en (default)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: Function Parameters"
        description="Destructure directly in function parameters"
        code={`// Destructure object parameter
function displayUser({ name, age, city }) {
  console.log('Name: ' + name);
  console.log('Age: ' + age);
  console.log('City: ' + city);
}

const user = {
  name: 'Emma',
  age: 28,
  city: 'Seattle'
};

displayUser(user);
// Output: Name: Emma
// Output: Age: 28
// Output: City: Seattle

// With defaults in parameters
function createProfile({ 
  username, 
  role = 'user', 
  isActive = true 
}) {
  console.log('Username: ' + username);
  console.log('Role: ' + role);
  console.log('Active: ' + isActive);
}

createProfile({ username: 'alice123' });
// Output: Username: alice123
// Output: Role: user (default)
// Output: Active: true (default)

createProfile({ 
  username: 'bob456', 
  role: 'admin', 
  isActive: false 
});
// Output: Username: bob456
// Output: Role: admin
// Output: Active: false`}
        language="javascript"
        colorTheme="yellow"
        icon={Package}
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
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arrays = [a, b, c]</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Extract by position with square brackets
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Objects = {'{ x, y }'}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Extract by name with curly braces
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✏️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rename with :</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {'{ name: newName }'} gives new variable name
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Defaults with =</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {'{ x = 5 }'} provides fallback value
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
