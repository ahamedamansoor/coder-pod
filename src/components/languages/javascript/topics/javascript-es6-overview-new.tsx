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
  Rocket,
  Star,
  Zap,
} from 'lucide-react';

export default function JavaScriptES6OverviewNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Rocket}
        category="JavaScript ES6+"
        title="ES6+ Overview"
        description="Modern JavaScript features that make coding easier and cleaner"
        colorTheme="yellow"
      />

      {/* What is ES6+? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is ES6+ (ES2015+)?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                ES6 (ECMAScript 2015) brought <strong className="text-purple-700 dark:text-purple-400">massive improvements</strong> to JavaScript. Every year since, new features are added. These modern features make code cleaner, shorter, and easier to read!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-purple-200 dark:border-purple-800/30">
            <Star className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-lg">Why Learn ES6+?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Modern JavaScript is <strong>easier to write</strong>, more <strong>readable</strong>, and comes with powerful new features that save you time and effort!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* let & const */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>let & const - Better Variables</CardTitle>
              <CardDescription>Block-scoped variables instead of var</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - var Problems</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// var has function scope
var name = 'Alice';
var name = 'Bob';  // Can redeclare!

if (true) {
  var age = 25;
}
console.log(age);  // 25 - leaks out!

// Hoisting confusion
console.log(x);  // undefined
var x = 10;`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - let & const</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// let has block scope
let name = 'Alice';
// let name = 'Bob';  // Error!

if (true) {
  let age = 25;
}
// console.log(age);  // Error - not accessible!

// const for constants
const PI = 3.14;
// PI = 3.15;  // Error - can't reassign!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Arrow Functions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Arrow Functions - Shorter Syntax</CardTitle>
              <CardDescription>Cleaner function expressions</CardDescription>
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
{`// Traditional function
const add = function(a, b) {
  return a + b;
};

// Array methods
const numbers = [1, 2, 3];
const doubled = numbers.map(function(n) {
  return n * 2;
});`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - Arrow Functions</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Arrow function
const add = (a, b) => {
  return a + b;
};

// Or even shorter!
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Template Literals */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Template Literals - String Interpolation</CardTitle>
              <CardDescription>Embed expressions in strings with backticks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - String Concatenation</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const name = 'Alice';
const age = 25;

// Messy concatenation
const message = 'Hello, ' + name + 
  '! You are ' + age + ' years old.';

// Multi-line strings
const html = '<div>\\n' +
  '  <h1>Title</h1>\\n' +
  '</div>';`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - Template Literals</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const name = 'Alice';
const age = 25;

// Clean interpolation
const message = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line strings (no \\n needed!)
const html = \`<div>
  <h1>Title</h1>
</div>\`;`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete ES6+ Features Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Complete ES6+ Features Overview
        </h2>

        {/* Variables & Scope */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500 text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Variables & Scope</CardTitle>
                <CardDescription>Better variable declarations with block scoping</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">let - Block-Scoped Variable</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Can be reassigned<br/>
                  • Block-scoped (only exists within {'{}'} braces)<br/>
                  • No hoisting confusion<br/>
                  • Cannot be redeclared in same scope
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">const - Block-Scoped Constant</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Cannot be reassigned (reference is constant)<br/>
                  • Block-scoped<br/>
                  • Object/array contents can still be modified<br/>
                  • Must be initialized when declared
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Functions */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800">
          <CardHeader className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500 text-white">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Functions</CardTitle>
                <CardDescription>Cleaner function syntax and features</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-800/30">
                <h4 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-400">Arrow Functions (=&gt;)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Shorter syntax<br/>
                  • Implicit return for single expressions<br/>
                  • Lexical this binding<br/>
                  • No arguments object
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-800/30">
                <h4 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-400">Default Parameters</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Set default values for parameters<br/>
                  • Cleaner than OR operator workaround<br/>
                  • Can use expressions<br/>
                  • Parameters evaluated at call time
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-800/30">
                <h4 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-400">Rest Parameters (...)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Collect remaining arguments into array<br/>
                  • Replaces arguments object<br/>
                  • Must be last parameter<br/>
                  • Real array with all methods
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-800/30">
                <h4 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-400">Spread Operator (...)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Expand arrays/objects<br/>
                  • Copy arrays/objects easily<br/>
                  • Merge arrays/objects<br/>
                  • Pass array as function arguments
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Structures */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500 text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Data Structures & Destructuring</CardTitle>
                <CardDescription>Work with data more efficiently</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Array Destructuring</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Extract values by position<br/>
                  • Skip unwanted values<br/>
                  • Swap variables easily<br/>
                  • Works with iterables
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Object Destructuring</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Extract properties by name<br/>
                  • Rename during extraction<br/>
                  • Set default values<br/>
                  • Nested destructuring
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Template Literals</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • String interpolation with ${'{}'}<br/>
                  • Multi-line strings<br/>
                  • Embed expressions<br/>
                  • Tagged templates
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Enhanced Object Literals</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Shorthand property names<br/>
                  • Shorthand method definitions<br/>
                  • Computed property names<br/>
                  • Cleaner object creation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Classes & OOP */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500 text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Classes & Object-Oriented Programming</CardTitle>
                <CardDescription>Modern class syntax for OOP</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Classes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Constructor method<br/>
                  • Instance methods<br/>
                  • Static methods<br/>
                  • Cleaner than prototypes
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Inheritance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • extends keyword<br/>
                  • super() for parent constructor<br/>
                  • Method overriding<br/>
                  • Single inheritance
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Getters & Setters</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • get keyword<br/>
                  • set keyword<br/>
                  • Computed properties<br/>
                  • Validation on set
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Async Programming */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500 text-white">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Asynchronous Programming</CardTitle>
                <CardDescription>Handle async operations elegantly</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">Promises</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Better than callbacks<br/>
                  • then/catch/finally chains<br/>
                  • Promise.all/race/allSettled<br/>
                  • Avoids callback hell
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">async/await (ES2017)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Write async code like sync<br/>
                  • async keyword for functions<br/>
                  • await pauses execution<br/>
                  • try/catch for errors
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">Generators (function*)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Pausable functions<br/>
                  • yield keyword<br/>
                  • Iterator protocol<br/>
                  • Lazy evaluation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules */}
        <Card className="border-2 border-pink-200 dark:border-pink-800">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pink-500 text-white">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Modules & Code Organization</CardTitle>
                <CardDescription>Import and export code between files</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/30">
                <h4 className="font-semibold mb-2 text-pink-700 dark:text-pink-400">Named Exports</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • export const/function/class<br/>
                  • Multiple exports per file<br/>
                  • Import with {'{}'} braces<br/>
                  • Can rename on import
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/30">
                <h4 className="font-semibold mb-2 text-pink-700 dark:text-pink-400">Default Exports</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • export default<br/>
                  • One per file<br/>
                  • Import without {'{}'}<br/>
                  • Name on import is flexible
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/30">
                <h4 className="font-semibold mb-2 text-pink-700 dark:text-pink-400">Import Variations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • import * as Name<br/>
                  • Rename imports (as)<br/>
                  • Dynamic imports (lazy loading)<br/>
                  • Side-effect imports
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-pink-200 dark:border-pink-800/30">
                <h4 className="font-semibold mb-2 text-pink-700 dark:text-pink-400">Module Benefits</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Code organization<br/>
                  • Reusability<br/>
                  • Dependency management<br/>
                  • Tree-shaking (dead code elimination)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Features */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500 text-white">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Additional ES6+ Features</CardTitle>
                <CardDescription>More modern JavaScript capabilities</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Symbols</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Unique identifiers<br/>
                  • Private-like properties<br/>
                  • Well-known symbols<br/>
                  • Iterator protocol
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Iterators & for...of</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Iterate over values<br/>
                  • Works with arrays, strings, Maps<br/>
                  • Custom iterators<br/>
                  • Cleaner than for...in
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Map & Set</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Map: key-value pairs (any type)<br/>
                  • Set: unique values collection<br/>
                  • Better than plain objects<br/>
                  • WeakMap & WeakSet variants
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Proxy & Reflect</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Intercept object operations<br/>
                  • Custom behavior for gets/sets<br/>
                  • Validation and logging<br/>
                  • Vue 3 reactivity uses Proxy
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">New Array Methods</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • find/findIndex<br/>
                  • includes<br/>
                  • Array.from<br/>
                  • flat/flatMap (ES2019)
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
                <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">New String Methods</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • startsWith/endsWith<br/>
                  • includes<br/>
                  • repeat<br/>
                  • padStart/padEnd
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key ES6+ Features Summary */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-rose-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">ES6+ Features Summary</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <span className="text-xl">📦</span>
                  Variables
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <code className="text-blue-600 dark:text-blue-400">let</code> - block-scoped variable</li>
                  <li>• <code className="text-blue-600 dark:text-blue-400">const</code> - constant (can't reassign)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <span className="text-xl">⚡</span>
                  Functions
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Arrow functions <code className="text-cyan-600 dark:text-cyan-400">=&gt;</code></li>
                  <li>• Default parameters</li>
                  <li>• Rest parameters <code className="text-cyan-600 dark:text-cyan-400">...args</code></li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <span className="text-xl">🎁</span>
                  Data Structures
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Destructuring <code className="text-purple-600 dark:text-purple-400">[a, b] = arr</code></li>
                  <li>• Spread operator <code className="text-purple-600 dark:text-purple-400">...arr</code></li>
                  <li>• Template literals <code className="text-purple-600 dark:text-purple-400">{`\`\${x}\``}</code></li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <span className="text-xl">🏗️</span>
                  OOP
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Classes <code className="text-green-600 dark:text-green-400">class Person</code></li>
                  <li>• Inheritance <code className="text-green-600 dark:text-green-400">extends</code></li>
                  <li>• Constructor & methods</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <span className="text-xl">⏰</span>
                  Async
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Promises</li>
                  <li>• <code className="text-orange-600 dark:text-orange-400">async/await</code></li>
                  <li>• <code className="text-orange-600 dark:text-orange-400">.then()/.catch()</code></li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <span className="text-xl">📂</span>
                  Modules
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <code className="text-pink-600 dark:text-pink-400">import/export</code></li>
                  <li>• Named exports</li>
                  <li>• Default exports</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use const & let</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefer <code>const</code>, use <code>let</code> when needed. Never use <code>var</code>!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arrow Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Shorter syntax: <code>(x) =&gt; x * 2</code> instead of <code>function</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Destructuring</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Extract values easily: <code>[a, b] = array</code> or <code>{'{ x, y } = obj'}</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Template Literals</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use backticks: <code>`Hello ${'${name}'}`</code> for string interpolation
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
