'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Repeat, BookOpen, TrendingUp, Layers, ArrowDown, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function IterativeVsRecursiveSpace() {
  const [callStackStep, setCallStackStep] = useState(0);
  const [selectedExample, setSelectedExample] = useState<'factorial' | 'sum' | 'fibonacci'>('factorial');

  // Factorial(4) call stack animation
  const callStackSteps = [
    { 
      stack: [], 
      description: 'Start: Call factorial(4)', 
      current: 4,
      result: null
    },
    { 
      stack: ['factorial(4)'], 
      description: 'Push factorial(4) to stack, call factorial(3)', 
      current: 3,
      result: null
    },
    { 
      stack: ['factorial(4)', 'factorial(3)'], 
      description: 'Push factorial(3) to stack, call factorial(2)', 
      current: 2,
      result: null
    },
    { 
      stack: ['factorial(4)', 'factorial(3)', 'factorial(2)'], 
      description: 'Push factorial(2) to stack, call factorial(1)', 
      current: 1,
      result: null
    },
    { 
      stack: ['factorial(4)', 'factorial(3)', 'factorial(2)', 'factorial(1)'], 
      description: 'Base case! factorial(1) = 1. Start returning...', 
      current: 1,
      result: 1
    },
    { 
      stack: ['factorial(4)', 'factorial(3)', 'factorial(2)'], 
      description: 'Pop factorial(1). factorial(2) = 2 × 1 = 2', 
      current: 2,
      result: 2
    },
    { 
      stack: ['factorial(4)', 'factorial(3)'], 
      description: 'Pop factorial(2). factorial(3) = 3 × 2 = 6', 
      current: 3,
      result: 6
    },
    { 
      stack: ['factorial(4)'], 
      description: 'Pop factorial(3). factorial(4) = 4 × 6 = 24', 
      current: 4,
      result: 24
    },
    { 
      stack: [], 
      description: 'Done! Stack empty. Result = 24', 
      current: null,
      result: 24
    },
  ];

  const examples = {
    factorial: {
      name: 'Factorial(n)',
      iterative: {
        code: `function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}`,
        space: 'O(1)',
        description: 'Only uses result and i variables'
      },
      recursive: {
        code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`,
        space: 'O(n)',
        description: 'Stack holds n recursive calls'
      }
    },
    sum: {
      name: 'Sum Array',
      iterative: {
        code: `function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`,
        space: 'O(1)',
        description: 'Only uses sum and i variables'
      },
      recursive: {
        code: `function sumArray(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumArray(arr, i + 1);
}`,
        space: 'O(n)',
        description: 'Stack holds n recursive calls'
      }
    },
    fibonacci: {
      name: 'Fibonacci(n)',
      iterative: {
        code: `function fib(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}`,
        space: 'O(1)',
        description: 'Only uses a, b, temp, i'
      },
      recursive: {
        code: `function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}`,
        space: 'O(n)',
        description: 'Max stack depth is n'
      }
    },
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="DSA · Space Complexity"
        title="Iterative vs Recursive Space Complexity"
        description="Understanding how recursion uses the call stack"
        colorTheme="orange"
        badges={[
          { label: 'Call Stack', variant: 'default' },
          { label: 'Memory Usage', variant: 'secondary' },
          { label: '🔄 Conversion', variant: 'outline' },
        ]}
      />

      {/* Staircase Analogy */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-orange-600" />
            What's the Difference?
          </CardTitle>
          <CardDescription>
            Two ways to solve the same problem with different space requirements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Staircase Analogy */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Going Down a Building! 🏢
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-orange-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You're on the 5th floor and need to get to the ground floor. 
                <strong> Two different approaches:</strong>
              </p>

              <div className="space-y-4">
                {/* Iterative: Stairs */}
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🚶</div>
                    <div>
                      <h5 className="font-bold text-green-900 dark:text-green-100 mb-1">Iterative: Take the Stairs</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Walk down step by step: 5th → 4th → 3rd → 2nd → 1st → Ground
                      </p>
                      <div className="flex items-center gap-2 text-xs flex-wrap mb-2">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded">Step 1</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded">Step 2</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded">Step 3...</span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300 font-semibold">
                        💡 <strong>Memory:</strong> Only need to remember "current floor" = <strong>O(1) space</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recursive: Elevator Trail */}
                <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">📋</div>
                    <div>
                      <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Recursive: Leave Breadcrumb Trail</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Leave a sticky note at each floor: "Remember to come back here!"
                        Go all the way down, then retrace using notes.
                      </p>
                      <div className="space-y-1 text-xs mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 rounded text-[10px]">Floor 5: "Come back"</span>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <ArrowDown className="w-3 h-3" />
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 rounded text-[10px]">Floor 4: "Come back"</span>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                          <ArrowDown className="w-3 h-3" />
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 rounded text-[10px]">Floor 3: "Come back"...</span>
                        </div>
                      </div>
                      <p className="text-xs text-orange-700 dark:text-orange-300 font-semibold">
                        💡 <strong>Memory:</strong> Need to store all sticky notes = <strong>O(n) space</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="p-4 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm font-bold text-orange-900 dark:text-orange-100 mb-2">
                💡 The Call Stack Secret
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Recursion uses the "call stack"</strong> - like those sticky notes! 
                Each recursive call adds a frame to the stack. That's O(n) space for n calls. 
                <strong>Iteration uses a loop</strong> - no sticky notes needed, just keep walking. That's O(1) space!
              </p>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-6 text-center text-lg">
              📊 Space Comparison
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Iterative */}
              <div className="space-y-3">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-400">
                  <h5 className="font-bold text-green-900 dark:text-green-100 mb-2 text-center">🔁 Iterative</h5>
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-lg flex flex-col items-center justify-center border-2 border-green-400">
                      <div className="text-xs">Loop</div>
                      <div className="text-lg font-bold">i</div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-slate-600 dark:text-slate-400 mb-2">
                    Only loop variables in memory
                  </p>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded text-center">
                    <span className="font-mono font-bold text-green-600">O(1) space</span>
                  </div>
                </div>
              </div>

              {/* Recursive */}
              <div className="space-y-3">
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-2 border-orange-400">
                  <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-2 text-center">🔄 Recursive</h5>
                  <div className="flex flex-col items-center gap-1 mb-3">
                    {[5, 4, 3, 2, 1].map((n) => (
                      <div key={n} className="w-16 h-10 bg-orange-500 text-white rounded flex items-center justify-center text-xs font-bold border border-orange-400">
                        f({n})
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-slate-600 dark:text-slate-400 mb-2">
                    Stack holds all n recursive calls
                  </p>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded text-center">
                    <span className="font-mono font-bold text-orange-600">O(n) space</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call Stack Animation */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-orange-600" />
            Watch the Call Stack Grow: factorial(4)
          </CardTitle>
          <CardDescription>See how recursion builds up stack frames, then unwinds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            {/* Controls */}
            <div className="flex justify-center gap-3 mb-6">
              <Button
                onClick={() => setCallStackStep(Math.max(0, callStackStep - 1))}
                disabled={callStackStep === 0}
                variant="outline"
                size="sm"
                className="border-orange-300"
              >
                Previous
              </Button>
              <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg border border-orange-300">
                <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                  Step {callStackStep + 1} / {callStackSteps.length}
                </span>
              </div>
              <Button
                onClick={() => setCallStackStep(Math.min(callStackSteps.length - 1, callStackStep + 1))}
                disabled={callStackStep === callStackSteps.length - 1}
                variant="outline"
                size="sm"
                className="border-orange-300"
              >
                Next
              </Button>
              <Button
                onClick={() => setCallStackStep(0)}
                variant="outline"
                size="sm"
                className="border-orange-300"
              >
                Reset
              </Button>
            </div>

            {/* Description */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                {callStackSteps[callStackStep].description}
              </p>
            </div>

            {/* Call Stack Visualization */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Stack */}
              <div>
                <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 text-center">📚 Call Stack</h5>
                <div className="min-h-[300px] p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 flex flex-col-reverse items-center justify-start gap-2">
                  {callStackSteps[callStackStep].stack.length === 0 ? (
                    <div className="text-slate-400 dark:text-slate-600 italic text-sm">Stack Empty</div>
                  ) : (
                    callStackSteps[callStackStep].stack.map((call, idx) => (
                      <div
                        key={idx}
                        className="w-full p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-mono font-bold text-center border-2 border-orange-400 shadow-lg animate-in zoom-in-50 duration-300"
                      >
                        {call}
                      </div>
                    ))
                  )}
                </div>
                <p className="text-xs text-center text-orange-700 dark:text-orange-300 mt-2 font-semibold">
                  Stack Size: {callStackSteps[callStackStep].stack.length} frames
                </p>
              </div>

              {/* Current State */}
              <div>
                <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 text-center">📍 Current State</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Computing:</div>
                    <div className="text-2xl font-mono font-bold text-purple-700 dark:text-purple-300 text-center">
                      {callStackSteps[callStackStep].current !== null ? `factorial(${callStackSteps[callStackStep].current})` : 'Done!'}
                    </div>
                  </div>

                  {callStackSteps[callStackStep].result !== null && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-300 animate-in zoom-in-50">
                      <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Result:</div>
                      <div className="text-3xl font-mono font-bold text-green-700 dark:text-green-300 text-center">
                        {callStackSteps[callStackStep].result}
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-2 border-orange-300">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Space Used:</div>
                    <div className="text-lg font-mono font-bold text-orange-700 dark:text-orange-300 text-center">
                      O({callStackSteps[callStackStep].stack.length || 1}) space
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Side-by-Side Code Comparison */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Repeat className="w-6 h-6 text-orange-600" />
            Code Comparison: Same Problem, Different Space
          </CardTitle>
          <CardDescription>Toggle between examples to see iterative vs recursive implementations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedExample('factorial')}
                variant={selectedExample === 'factorial' ? 'default' : 'outline'}
                className={selectedExample === 'factorial' ? 'bg-orange-600 hover:bg-orange-700' : 'border-orange-300'}
              >
                Factorial
              </Button>
              <Button
                onClick={() => setSelectedExample('sum')}
                variant={selectedExample === 'sum' ? 'default' : 'outline'}
                className={selectedExample === 'sum' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-300'}
              >
                Sum Array
              </Button>
              <Button
                onClick={() => setSelectedExample('fibonacci')}
                variant={selectedExample === 'fibonacci' ? 'default' : 'outline'}
                className={selectedExample === 'fibonacci' ? 'bg-yellow-600 hover:bg-yellow-700' : 'border-yellow-300'}
              >
                Fibonacci
              </Button>
            </div>

            <h3 className="text-xl font-bold text-center text-orange-900 dark:text-orange-100">
              {currentExample.name}
            </h3>

            {/* Code Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Iterative */}
              <div className="space-y-3">
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-300">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <span>🔁</span> Iterative Version
                  </h4>
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden mb-3">
                    <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b">
                      <span className="text-xs text-slate-600 dark:text-slate-400">iterative.js</span>
                    </div>
                    <pre className="p-3 text-xs font-mono overflow-x-auto">
                      <code>{currentExample.iterative.code}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    {currentExample.iterative.description}
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded border-2 border-green-400">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Space:</div>
                      <div className="text-2xl font-mono font-bold text-green-600">
                        {currentExample.iterative.space}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recursive */}
              <div className="space-y-3">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-2 border-orange-300">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                    <span>🔄</span> Recursive Version
                  </h4>
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden mb-3">
                    <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b">
                      <span className="text-xs text-slate-600 dark:text-slate-400">recursive.js</span>
                    </div>
                    <pre className="p-3 text-xs font-mono overflow-x-auto">
                      <code>{currentExample.recursive.code}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    {currentExample.recursive.description}
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded border-2 border-orange-400">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Space:</div>
                      <div className="text-2xl font-mono font-bold text-orange-600">
                        {currentExample.recursive.space}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Use Each */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            When to Use Each Approach
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Use Iterative */}
            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100 flex items-center gap-2">
                <span className="text-xl">✅</span> Prefer Iterative When...
              </h4>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">💾 Space Matters</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Embedded systems, large n values, or memory constraints
                </p>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300">
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">⚡ Performance Critical</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Iterative often faster (no function call overhead)
                </p>
              </div>

              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-300">
                <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">📝 Simple Logic</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Problem naturally fits loops (sum, search)
                </p>
              </div>
            </div>

            {/* Use Recursive */}
            <div className="space-y-3">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 flex items-center gap-2">
                <span className="text-xl">🎯</span> Prefer Recursive When...
              </h4>
              
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300">
                <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🌳 Tree/Graph Problems</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Natural recursion (DFS, tree traversal, backtracking)
                </p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-300">
                <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✨ Elegant Solution</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Much simpler code (factorial, fibonacci)
                </p>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-300">
                <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🔁 Divide & Conquer</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Problem breaks into subproblems (Merge Sort, Binary Search)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm font-bold text-orange-900 dark:text-orange-100 mb-2">
              💡 Pro Tip: Can You Convert?
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              <strong>Any recursion can be converted to iteration!</strong> Use a manual stack (array) to simulate the call stack. 
              But for tree/graph problems, recursive is usually cleaner. For simple problems, iterative saves space!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
