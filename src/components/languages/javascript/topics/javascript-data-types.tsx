'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Type,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Hash,
  FileText,
  Binary,
  HelpCircle,
  Circle,
} from 'lucide-react';

export default function JavaScriptDataTypes() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript Fundamentals"
        title="Data Types"
        description="Learn the different types of data you can work with in JavaScript"
        colorTheme="yellow"
      />

      {/* What are Data Types */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Data Types?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Data types are <strong className="text-yellow-700 dark:text-yellow-400">categories</strong> that tell JavaScript what kind of data you're working with. Just like organizing items in drawers - numbers go in one drawer, text in another!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Type className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Think of a fruit basket 🍎, a number counter 🔢, and a light switch 💡. Each holds different types of things - that's what data types are!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 7 Primitive Types */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>7 Primitive Data Types</CardTitle>
              <CardDescription>The basic building blocks of JavaScript</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="font-bold text-lg">String</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Text data</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                'Hello'
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-2">🔢</div>
              <h4 className="font-bold text-lg">Number</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Numbers</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                42
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-bold text-lg">Boolean</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">true/false</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                true
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200 dark:border-gray-800/30">
              <div className="text-3xl mb-2">❔</div>
              <h4 className="font-bold text-lg">Undefined</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Not set yet</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                undefined
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 border-slate-200 dark:border-slate-800/30">
              <div className="text-3xl mb-2">⭕</div>
              <h4 className="font-bold text-lg">Null</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Intentionally empty</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                null
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800/30">
              <div className="text-3xl mb-2">🔑</div>
              <h4 className="font-bold text-lg">Symbol</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Unique identifier</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                Symbol()
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200 dark:border-cyan-800/30">
              <div className="text-3xl mb-2">🔢+</div>
              <h4 className="font-bold text-lg">BigInt</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Very large numbers</p>
              <div className="mt-2 bg-white dark:bg-slate-900 rounded p-1.5 font-mono text-xs border">
                123n
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* String Type */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>1. String - Text Data</CardTitle>
              <CardDescription>For words, sentences, and any text</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Text in Quotes</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Strings are text wrapped in quotes. You can use single quotes, double quotes, or backticks!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const name = 'Alice';        // Single quotes
const city = "New York";     // Double quotes
const message = \`Hello!\`;    // Backticks

console.log(name);     // Alice
console.log(typeof name);  // string`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="String Examples"
        description="Different ways to create strings"
        code={`const firstName = 'John';
const lastName = "Doe";
const greeting = \`Hello, World!\`;

// Strings can contain numbers
const age = "25";  // This is a string, not a number!

// Empty string
const empty = '';

// Multi-line strings with backticks
const address = \`123 Main St
New York, NY
10001\`;

console.log(typeof firstName);  // string`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Number Type */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Hash className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>2. Number - Numeric Data</CardTitle>
              <CardDescription>For counting, calculations, and measurements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Integers and Decimals</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                JavaScript has one number type for all numbers - whole numbers, decimals, negative numbers, all use the same type!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const age = 25;           // Whole number
const price = 19.99;      // Decimal
const temperature = -5;   // Negative

console.log(typeof age);     // number
console.log(typeof price);   // number`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Number Examples"
        description="Working with numbers"
        code={`const score = 100;
const pi = 3.14159;
const negative = -42;

// Math operations
const sum = 10 + 5;        // 15
const product = 10 * 5;    // 50
const quotient = 10 / 5;   // 2

// Special numbers
const infinity = Infinity;
const notANumber = NaN;

console.log(typeof score);      // number
console.log(typeof infinity);   // number
console.log(typeof notANumber); // number`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Boolean Type */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>3. Boolean - True or False</CardTitle>
              <CardDescription>For yes/no questions and conditions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Only Two Values</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Booleans have only two possible values: <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">true</code> or <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">false</code>. Like a light switch - on or off!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const isLoggedIn = true;
const hasPermission = false;
const isAdult = true;

console.log(typeof isLoggedIn);  // boolean

// Used in conditions
if (isLoggedIn) {
  console.log('Welcome!');
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Boolean Examples"
        description="True/false values in action"
        code={`const isOnline = true;
const hasAccount = false;

// Comparison results are booleans
const isEqual = 5 === 5;        // true
const isGreater = 10 > 5;       // true
const isLess = 3 < 2;           // false

console.log(typeof isOnline);   // boolean
console.log(typeof isEqual);    // boolean

// Used in if statements
if (isOnline) {
  console.log('User is online');
}

if (!hasAccount) {
  console.log('Create an account');
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Undefined vs Null */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900/30">
              <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <CardTitle>4. Undefined & 5. Null - "Nothing" Values</CardTitle>
              <CardDescription>Two different ways to represent emptiness</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-gray-200 dark:border-gray-800/30 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 overflow-hidden">
              <div className="bg-gray-600 dark:bg-gray-700 px-4 py-3">
                <h4 className="text-white font-semibold">Undefined - Automatically Empty</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Variables that are declared but not assigned a value are automatically <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-900/30 rounded text-xs">undefined</code>
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`let name;
console.log(name);  // undefined

let age;
console.log(typeof age);  // undefined

// Not set yet!`}</pre>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-slate-200 dark:border-slate-800/30 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 overflow-hidden">
              <div className="bg-slate-600 dark:bg-slate-700 px-4 py-3">
                <h4 className="text-white font-semibold">Null - Intentionally Empty</h4>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  You set a variable to <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900/30 rounded text-xs">null</code> on purpose to say "this is empty by design"
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-slate-200 dark:border-slate-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`let user = null;
console.log(user);  // null

console.log(typeof user);  // object
// (this is a JS quirk!)

// Cleared on purpose!`}</pre>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle>Key Difference</AlertTitle>
            <AlertDescription className="text-base">
              <strong>undefined</strong> = "No value assigned yet" (automatic)<br/>
              <strong>null</strong> = "Intentionally set to nothing" (on purpose)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Undefined vs Null in Action"
        description="Understanding the difference"
        code={`// Undefined - not assigned
let username;
console.log(username);        // undefined
console.log(typeof username); // undefined

// Null - deliberately empty
let currentUser = null;
console.log(currentUser);        // null
console.log(typeof currentUser); // object (quirk!)

// Common uses
let data = null;  // "No data yet"

function getUser(id) {
  if (id === 0) {
    return null;  // "No user found"
  }
  return { id: id, name: 'Alice' };
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Checking Types */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Binary className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Checking Data Types with typeof</CardTitle>
              <CardDescription>Find out what type your data is</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">The typeof Operator</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">typeof</code> to check what type a value is!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`console.log(typeof 'Hello');    // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (quirk!)
console.log(typeof Symbol());   // symbol
console.log(typeof 123n);       // bigint`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="typeof in Real Code"
        description="Checking types before using values"
        code={`function processData(value) {
  console.log('Type:', typeof value);
  
  if (typeof value === 'string') {
    console.log('Length:', value.length);
  }
  
  if (typeof value === 'number') {
    console.log('Doubled:', value * 2);
  }
  
  if (typeof value === 'boolean') {
    console.log('Opposite:', !value);
  }
}

processData('Hello');  // Type: string, Length: 5
processData(42);       // Type: number, Doubled: 84
processData(true);     // Type: boolean, Opposite: false`}
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
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">7 Primitive Types</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <strong>String</strong> - text in quotes</li>
                <li>• <strong>Number</strong> - any number</li>
                <li>• <strong>Boolean</strong> - true/false</li>
                <li>• <strong>Undefined</strong> - not set</li>
                <li>• <strong>Null</strong> - empty on purpose</li>
                <li>• <strong>Symbol</strong> - unique ID</li>
                <li>• <strong>BigInt</strong> - huge numbers</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Remember</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">typeof</code> to check types</li>
                <li>• Strings need quotes</li>
                <li>• Numbers don't need quotes</li>
                <li>• <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">undefined</code> ≠ <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">null</code></li>
                <li>• Booleans are always lowercase</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Circle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>What About Objects and Arrays?</AlertTitle>
            <AlertDescription className="text-base">
              Objects and Arrays are NOT primitive types - they're <strong>reference types</strong>. We'll learn about them in separate topics!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
