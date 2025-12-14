'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Cpu,
  CheckCircle,
  Cog,
  Zap,
  Lightbulb,
  Layers,
} from 'lucide-react';

export default function JavaScriptJSEngine() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Cpu}
        category="JavaScript Fundamentals"
        title="JavaScript Engine"
        description="How JavaScript actually runs under the hood"
        colorTheme="purple"
      />

      {/* What is a JS Engine */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-violet-50/30 to-indigo-50/20 dark:from-purple-950/10 dark:via-violet-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is a JavaScript Engine?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A JavaScript engine is a <strong className="text-purple-700 dark:text-purple-400">program that reads</strong> your JavaScript code and <strong className="text-violet-700 dark:text-violet-400">executes it</strong>. Think of it as a translator that converts your code into instructions the computer can understand and run.
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Imagine you write instructions in English, but your robot only understands beeps and boops. The JavaScript engine is like a translator that reads your English (JavaScript code) and tells the robot what to do in its language (machine code).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Popular Engines */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Cog className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Popular JavaScript Engines</CardTitle>
              <CardDescription>Different engines power different platforms</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 text-xl">V8</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Made by Google - the fastest engine
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Powers Chrome browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Powers Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Powers Edge browser</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/30 dark:to-amber-900/30 border-2 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 text-xl">SpiderMonkey</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Made by Mozilla - the first JS engine ever
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Powers Firefox browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Created in 1995</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Written in C++</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-xl">JavaScriptCore</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Made by Apple (also called Nitro)
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Powers Safari browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Used in iOS apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Optimized for Apple devices</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-xl">Chakra</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Made by Microsoft (legacy)
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Powered old Edge browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Now replaced by V8</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Open source</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Engine Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>How the Engine Works</CardTitle>
              <CardDescription>The journey from code to execution</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Parsing</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Engine reads your code and breaks it into pieces (tokens)
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                  const x = 5; → [const] [x] [=] [5] [;]
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">AST Creation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Creates an Abstract Syntax Tree (AST) - a tree structure of your code
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                  Tree showing relationships between variables, functions, etc.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Interpretation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Converts AST to bytecode (intermediate code)
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                  Bytecode is faster to execute than source code
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Optimization (JIT)</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Just-In-Time compilation - converts hot code to machine code
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                  Frequently run code gets super fast compilation
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Execution</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Finally runs the optimized machine code
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                  Your code executes and produces results!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* JIT Compilation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>JIT Compilation - The Secret to Speed</CardTitle>
              <CardDescription>Why modern JavaScript is so fast</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30 mb-4">
            <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>What is JIT?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Just-In-Time compilation means the engine compiles your code <strong>while it runs</strong>, not before. It watches which code runs often and makes that code super fast!
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">❄️ Cold Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Code that runs rarely or just once
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">→</span>
                  <span>Runs as interpreted bytecode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">→</span>
                  <span>Fast enough for occasional use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400">→</span>
                  <span>No optimization needed</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">🔥 Hot Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Code that runs frequently (inside loops, etc.)
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400">→</span>
                  <span>Gets compiled to machine code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400">→</span>
                  <span>Runs 100x faster!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400">→</span>
                  <span>Heavily optimized</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example */}
      <Card>
        <CardHeader>
          <CardTitle>Example: Engine in Action</CardTitle>
          <CardDescription>What happens when you run code</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Your JavaScript code
function add(a, b) {
  return a + b;
}

// Call it many times in a loop
for (let i = 0; i < 1000000; i++) {
  add(5, 3);
}

// What the engine does:

// 1️⃣ PARSING
// Reads your code: function, add, parameters a & b, return, etc.

// 2️⃣ AST CREATION
// Creates tree structure:
// FunctionDeclaration
//   ├─ name: "add"
//   ├─ params: [a, b]
//   └─ body: ReturnStatement
//       └─ BinaryExpression (a + b)

// 3️⃣ INTERPRETATION
// Converts to bytecode (simplified):
// LoadArg 0    // Load 'a'
// LoadArg 1    // Load 'b'
// Add          // Add them
// Return       // Return result

// 4️⃣ OPTIMIZATION (JIT)
// Engine notices: "Hey, add() is called 1 million times!"
// Compiles to MACHINE CODE for maximum speed
// Now runs 100x faster!

// 5️⃣ EXECUTION
// Result: 8 (executed 1 million times super fast!)


// 🎯 KEY POINT:
// The engine is smart! It doesn't optimize everything immediately.
// It watches your code run and optimizes the hot spots!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Memory Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Cog className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Memory Management</CardTitle>
              <CardDescription>How engines handle memory</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Heap</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Where objects, arrays, and functions are stored. Unstructured memory pool.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Stack</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Where function calls and primitive values are stored. LIFO (Last In, First Out).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Garbage Collection</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Engine automatically frees memory that's no longer needed. You don't have to manually delete anything!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Code Executor</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Engine reads and runs your code<br/>
                    Converts to machine instructions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">V8 is King</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Powers Chrome and Node.js<br/>
                    Fastest modern engine
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">JIT Magic</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimizes while running<br/>
                    Hot code gets super fast
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🧹</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto Memory</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Garbage collection automatic<br/>
                    No manual memory management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-300 dark:border-purple-700">
            <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">You Don't Need to Worry!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The engine handles <strong>all the complex stuff automatically</strong>. You just write JavaScript, and the engine makes it run fast. That's the beauty of modern JavaScript!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
