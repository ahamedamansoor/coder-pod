'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  Layers,
} from 'lucide-react';

export default function JavaScriptCallStackNew() {

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Design Patterns"
        title="Call Stack Visualization"
        description="Understanding JavaScript execution flow"
        colorTheme="yellow"
      />

      {/* What is Call Stack? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-violet-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-violet-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                The Call Stack: JavaScript's Todo List 📋
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <strong className="text-indigo-700 dark:text-indigo-400">call stack</strong> is a data structure that tracks function calls in your code. Think of it as a stack of plates - you can only add or remove from the top. When a function is called, it's <strong>pushed</strong> onto the stack. When it finishes, it's <strong>popped</strong> off. This is how JavaScript knows where to return after a function completes.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800/30">
            <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-lg">LIFO - Last In, First Out</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              The call stack follows LIFO principle. The last function called is the first one to finish and be removed. Like stacking books - you can only take the top book off first!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How the Call Stack Works</CardTitle>
              <CardDescription>Step-by-step explanation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-2">1️⃣ Function Call (PUSH)</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                When a function is called, JavaScript creates a <strong>stack frame</strong> containing:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>• Function name</li>
                <li>• Function arguments</li>
                <li>• Local variables</li>
                <li>• Return address (where to go back)</li>
              </ul>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                This frame is <strong>pushed</strong> onto the top of the stack.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h5 className="font-bold text-green-900 dark:text-green-200 mb-2">2️⃣ Function Execution</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                JavaScript executes the code inside the function at the top of the stack. If this function calls another function, that new function is pushed on top.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h5 className="font-bold text-orange-900 dark:text-orange-200 mb-2">3️⃣ Function Return (POP)</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When a function finishes (returns), its stack frame is <strong>popped</strong> (removed) from the stack. Control returns to the function below it.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h5 className="font-bold text-purple-900 dark:text-purple-200 mb-2">4️⃣ Repeat</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                This process repeats until the stack is empty. The program is complete when all functions have returned and the stack is clear.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stack Overflow */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Layers className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Stack Overflow Error</CardTitle>
              <CardDescription>When the stack gets too full</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The call stack has a <strong>maximum size</strong>. If you keep pushing functions without popping them (usually due to infinite recursion), you'll get a <strong className="text-red-600 dark:text-red-400">Stack Overflow</strong> error.
          </p>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-3">❌ Causes Stack Overflow</h5>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-100">
{`function recursiveLoop() {
  recursiveLoop(); // Calls itself forever!
  // Never returns, keeps pushing frames
}

recursiveLoop();
// Error: Maximum call stack size exceeded`}</pre>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-3">✅ Safe Recursion (Has Base Case)</h5>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-100">
{`function countdown(n) {
  if (n === 0) return; // Base case - stops recursion
  console.log(n);
  countdown(n - 1); // Eventually hits base case
}

countdown(5); // Safely counts down: 5, 4, 3, 2, 1`}</pre>
            </div>
          </div>

          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
            <AlertTitle className="text-red-900 dark:text-red-200">Prevention</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Always ensure recursive functions have a <strong>base case</strong> that stops the recursion. Also, consider iterative solutions for deep recursion.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

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
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">LIFO Structure</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Last In, First Out<br/>
                    Push on call, pop on return<br/>
                    Like a stack of plates
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Stack Frame</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contains function info<br/>
                    Arguments, variables, return address<br/>
                    Created per function call
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Stack Overflow</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Too many function calls<br/>
                    Usually from infinite recursion<br/>
                    Always have base cases!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Debugging</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    DevTools shows call stack<br/>
                    See function call chain<br/>
                    Helps trace execution flow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              You can see the call stack in Chrome DevTools! When debugging, look at the "Call Stack" panel to see exactly which functions are currently executing and in what order.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
