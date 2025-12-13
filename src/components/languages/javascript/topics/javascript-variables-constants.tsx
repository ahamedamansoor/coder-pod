'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Box,
  Lock,
  Unlock,
  Sparkles,
  Code2,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';

export default function JavaScriptVariablesConstants() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Box}
        category="JavaScript Fundamentals"
        title="Variables & Constants"
        description="Store and manage data in your programs - let, const, and var explained"
        colorTheme="yellow"
      />

      {/* What are Variables */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Variables?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Variables are <strong className="text-yellow-700 dark:text-yellow-400">labeled containers</strong> that store data in your program. Think of them like boxes with names on them - you can put things in, take things out, and change what's inside!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Box className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              A variable is like a labeled jar. You write a name on the jar (variable name), put something inside (value), and use that name whenever you need what's in the jar!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Three Keywords */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Three Ways to Create Variables</CardTitle>
              <CardDescription>JavaScript has three keywords: let, const, and var</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-4">
                <Unlock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-xl">let</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                For values that <strong>can change</strong>
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                Use when you need to reassign
              </div>
              <div className="bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs border">
                let age = 25;
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-xl">const</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                For values that <strong>stay the same</strong>
              </p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 mb-3 font-semibold">
                ⭐ Recommended - use by default
              </div>
              <div className="bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs border">
                const name = 'Alice';
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-xl">var</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                The <strong>old way</strong> (avoid it)
              </p>
              <div className="text-xs text-red-600 dark:text-red-400 mb-3 font-semibold">
                ⚠️ Use let or const instead
              </div>
              <div className="bg-white dark:bg-slate-900 rounded p-2 font-mono text-xs border">
                var old = 'legacy';
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Variables - Basic Syntax"
        description="How to create variables with let and const"
        code={`// Using let (can change)
let age = 25;
console.log(age);  // 25

age = 26;  // Can reassign!
console.log(age);  // 26

// Using const (cannot change)
const name = 'Alice';
console.log(name);  // Alice

// name = 'Bob';  // ERROR! Can't reassign const
// This would throw an error

// Multiple variables at once
let x = 5, y = 10, z = 15;
console.log(x, y, z);  // 5 10 15`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* let vs const */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>let vs const - When to Use Which?</CardTitle>
              <CardDescription>Choosing the right keyword</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
              <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Unlock className="w-4 h-4" />
                  Use let
                </h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  When you know the value will change later
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`let counter = 0;

counter++;  // Now 1
counter++;  // Now 2
counter++;  // Now 3

console.log(counter);  // 3

// Perfect for counters,
// loops, and changing values!`}</pre>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
              <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Use const (Recommended)
                </h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  When the value won't change (most of the time!)
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const name = 'Alice';
const age = 25;
const isStudent = true;

// These won't change!
// Prevents accidental reassignment
// Makes code more predictable ✅`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Example"
        description="Using let and const together"
        code={`// Use const for values that don't change
const userName = 'Alice';
const maxAttempts = 3;
const greeting = 'Welcome!';

// Use let for values that do change
let attempts = 0;
let isLoggedIn = false;

attempts++;
console.log('Attempts: ' + attempts);  // 1

if (attempts < maxAttempts) {
  isLoggedIn = true;
  console.log(greeting + ' ' + userName);
}

// Output:
// Attempts: 1
// Welcome! Alice`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Variable Naming Rules */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Variable Naming Rules</CardTitle>
              <CardDescription>What you can and can't name your variables</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Valid Names ✅</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-2 font-mono">age</div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-2 font-mono">userName</div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-2 font-mono">_private</div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-2 font-mono">$amount</div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-2 font-mono">number1</div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                • Start with letter, _, or $<br/>
                • Can contain letters, numbers, _, $<br/>
                • Use camelCase convention
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Invalid Names ❌</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-red-50 dark:bg-red-950/20 rounded p-2 font-mono">1name</div>
                <div className="bg-red-50 dark:bg-red-950/20 rounded p-2 font-mono">user-name</div>
                <div className="bg-red-50 dark:bg-red-950/20 rounded p-2 font-mono">user name</div>
                <div className="bg-red-50 dark:bg-red-950/20 rounded p-2 font-mono">let</div>
                <div className="bg-red-50 dark:bg-red-950/20 rounded p-2 font-mono">class</div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                • Can't start with number<br/>
                • No hyphens or spaces<br/>
                • Can't use reserved words
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Good Naming Practices"
        description="Use descriptive, meaningful names"
        code={`// ❌ Bad: unclear names
let x = 25;
let y = 'Alice';
let z = true;

// ✅ Good: descriptive names
let userAge = 25;
let userName = 'Alice';
let isLoggedIn = true;

// ❌ Bad: abbreviations
let usrNm = 'Bob';
let addr = '123 Main St';

// ✅ Good: full words
let username = 'Bob';
let address = '123 Main St';

// Use camelCase for variables
let firstName = 'Alice';
let lastName = 'Smith';
let totalAmount = 100;`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* const with Objects and Arrays */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Important: const with Objects & Arrays</CardTitle>
              <CardDescription>const prevents reassignment, not modification</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Common Confusion</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                With <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">const</code>, you can't reassign the variable, but you CAN modify the contents of objects and arrays!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// With arrays
const colors = ['red', 'blue'];

colors.push('green');  // ✅ Works!
console.log(colors);   // ['red', 'blue', 'green']

// colors = ['yellow'];  // ❌ Error! Can't reassign

// With objects
const user = { name: 'Alice', age: 25 };

user.age = 26;  // ✅ Works! Can modify
console.log(user.age);  // 26

// user = { name: 'Bob' };  // ❌ Error! Can't reassign`}</pre>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Remember</AlertTitle>
            <AlertDescription className="text-base">
              <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">const</code> means the <strong>variable binding</strong> is constant, not the value itself. For objects and arrays, the reference stays the same, but you can change what's inside!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Why Avoid var */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Why Avoid var?</CardTitle>
              <CardDescription>The problems with the old way</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 px-4 py-3">
              <h4 className="text-white font-semibold">Problems with var</h4>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h5 className="font-semibold mb-2 text-red-700 dark:text-red-300">1. Function Scope (not block scope)</h5>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`if (true) {
  var x = 5;
}
console.log(x);  // 5 - leaks out! ❌

if (true) {
  let y = 10;
}
console.log(y);  // Error - stays inside! ✅`}</pre>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-red-700 dark:text-red-300">2. Hoisting Issues</h5>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`console.log(a);  // undefined (not error!) ❌
var a = 5;

console.log(b);  // Error! ✅
let b = 10;`}</pre>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-red-700 dark:text-red-300">3. Can Redeclare</h5>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`var name = 'Alice';
var name = 'Bob';  // No error! ❌

let age = 25;
let age = 30;  // Error! ✅ Prevents bugs`}</pre>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/30">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle>Simple Rule</AlertTitle>
            <AlertDescription className="text-base">
              <strong>Never use var</strong>. Always use <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">const</code> by default, and <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">let</code> when you need to reassign!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

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
                <li>• Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">const</code> by default</li>
                <li>• Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">let</code> only when you need to reassign</li>
                <li>• Use descriptive, meaningful names</li>
                <li>• Follow camelCase convention</li>
                <li>• Declare variables at the top</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Never use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">var</code></li>
                <li>• Don't use single letters (except loops)</li>
                <li>• Avoid abbreviations</li>
                <li>• Don't use reserved keywords</li>
                <li>• Don't reassign const variables</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
