'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ArrowUp,
  Sparkles,
  Code2,
  Lightbulb,
  AlertTriangle,
} from 'lucide-react';

export default function JavaScriptHoisting() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowUp}
        category="JavaScript Fundamentals"
        title="Hoisting"
        description="Why you can use some things before declaring them - JavaScript's behind-the-scenes magic"
        colorTheme="yellow"
      />

      {/* What is Hoisting? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Hoisting: Moving to the Top
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Hoisting is JavaScript's <strong className="text-indigo-700 dark:text-indigo-400">weird behavior</strong> where declarations are "lifted" to the top of their scope. It's like JavaScript reads your code twice - first to find all declarations, then to run it!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800/30">
            <ArrowUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-lg">Think of It Like This</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Imagine JavaScript scans your code first, writes down all variable names at the top, then starts running your code. That's hoisting!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* var Hoisting */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>var is Hoisted</CardTitle>
              <CardDescription>You can use var before declaring it (but it's undefined)</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">What JavaScript Does</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">What You Write:</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`console.log(x);  // ???
var x = 5;
console.log(x);  // 5`}</pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">What JavaScript Sees:</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`var x;  // Moved to top!
console.log(x);  // undefined
x = 5;
console.log(x);  // 5`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="var Hoisting Example"
        description="Declaration moves to top, but value assignment stays in place"
        code={`// This works (but gives undefined)
console.log(name);  // undefined (not an error!)
var name = 'Alice';
console.log(name);  // Alice

// Output: undefined
// Output: Alice

// Why? JavaScript does this behind the scenes:
var name;           // Declaration hoisted
console.log(name);  // undefined
name = 'Alice';     // Assignment stays here
console.log(name);  // Alice`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* let and const NOT Hoisted */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>let & const Are NOT Hoisted</CardTitle>
              <CardDescription>Using them before declaration causes an error</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 px-4 py-3">
              <h4 className="text-white font-semibold">⚠️ This Causes an Error!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-red-200 dark:border-red-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`console.log(age);  // ❌ ERROR!
let age = 25;

console.log(city);  // ❌ ERROR!
const city = 'Boston';

// Error: Cannot access before initialization`}</pre>
              </div>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>This is Actually Good!</AlertTitle>
            <AlertDescription className="text-base">
              let and const prevent hoisting confusion. They force you to declare before using, making code clearer and catching bugs early.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="let & const Don't Hoist"
        description="You must declare let and const before using them"
        code={`// var - works but confusing
console.log(x);  // undefined (weird but works)
var x = 10;

// let - gives error (better!)
console.log(y);  // ❌ ReferenceError
let y = 20;

// const - also gives error
console.log(z);  // ❌ ReferenceError
const z = 30;

// CORRECT WAY: Declare first, then use
let age = 25;
console.log(age);  // 25 ✅

const name = 'Bob';
console.log(name);  // Bob ✅`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Function Hoisting */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Functions ARE Hoisted</CardTitle>
              <CardDescription>You can call functions before declaring them</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Functions Move to Top</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Function declarations are fully hoisted - you can call them anywhere!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Call function BEFORE declaring it
greet();  // Works! Prints "Hello!"

// Function declaration
function greet() {
  console.log('Hello!');
}

greet();  // Also works`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Function Hoisting Example"
        description="Function declarations can be called before they appear in code"
        code={`// Call function before declaration - works!
sayHello();  // Hello!
add(5, 3);   // 8

// Function declarations are hoisted
function sayHello() {
  console.log('Hello!');
}

function add(a, b) {
  console.log(a + b);
}

// But function expressions are NOT hoisted
greet();  // ❌ ERROR!
const greet = function() {
  console.log('Hi!');
};

// Arrow functions are also NOT hoisted
welcome();  // ❌ ERROR!
const welcome = () => {
  console.log('Welcome!');
};`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Quick Comparison</CardTitle>
              <CardDescription>What gets hoisted and what doesn't</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold mb-3 text-amber-700 dark:text-amber-300">var</h4>
              <div className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Hoisted as undefined</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Can cause bugs</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">let & const</h4>
              <div className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✅</span>
                  <span>NOT hoisted</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✅</span>
                  <span>Safer to use</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">functions</h4>
              <div className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✨</span>
                  <span>Fully hoisted</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✨</span>
                  <span>Can use before declaring</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Hoisting Summary Example"
        description="See all hoisting behaviors in one example"
        code={`// HOISTING TEST

// 1. var - hoisted as undefined
console.log(myVar);  // undefined (no error)
var myVar = 'Hello';

// 2. let - NOT hoisted
// console.log(myLet);  // ❌ Would cause error
let myLet = 'World';

// 3. const - NOT hoisted
// console.log(myConst);  // ❌ Would cause error
const myConst = '!';

// 4. Function declaration - fully hoisted
sayHi();  // Works! Prints "Hi!"

function sayHi() {
  console.log('Hi!');
}

// 5. Function expression - NOT hoisted
// sayBye();  // ❌ Would cause error

const sayBye = function() {
  console.log('Bye!');
};

sayBye();  // Works when called after declaration`}
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
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">var = Hoisted</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can use before declaring (becomes undefined)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">let/const = NOT Hoisted</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Must declare before using (gives error)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Functions = Fully Hoisted</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can call before declaring
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Best Practice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always declare at the top to avoid confusion
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
