'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Repeat,
  AlertTriangle,
  Play,
  RotateCcw,
} from 'lucide-react';

export default function JavaScriptRecursionNew() {
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxSteps = 11; // 5 calls down + 1 base case + 5 returns up

  useEffect(() => {
    if (isAnimating && animationStep < maxSteps) {
      const timer = setTimeout(() => {
        setAnimationStep(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (animationStep >= maxSteps) {
      setIsAnimating(false);
    }
  }, [animationStep, isAnimating]);

  const startAnimation = () => {
    setAnimationStep(0);
    setIsAnimating(true);
  };

  const resetAnimation = () => {
    setAnimationStep(0);
    setIsAnimating(false);
  };

  const getCallStackItems = () => {
    if (animationStep === 0) return [];
    
    const items = [];
    const callPhase = Math.min(animationStep, 5);
    const returnPhase = Math.max(0, animationStep - 6);

    for (let i = 5; i >= 5 - callPhase + 1; i--) {
      const isReturning = animationStep > 5 && i > 5 - returnPhase;
      const returnValue = isReturning ? calculateFactorial(i) : null;
      items.push({ n: i, isReturning, returnValue });
    }
    return items;
  };

  const calculateFactorial = (n: number): number => {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  const getCurrentMessage = () => {
    if (animationStep === 0) return "Click 'Start Animation' to visualize factorial(5)";
    if (animationStep <= 5) return `Calling factorial(${6 - animationStep})...`;
    if (animationStep === 6) return "Base case reached! factorial(1) = 1";
    if (animationStep <= 11) return `Returning values up the call stack...`;
    return "Animation complete! factorial(5) = 120";
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript Design Patterns"
        title="Recursion"
        description="Functions that call themselves"
        colorTheme="yellow"
      />

      {/* What is Recursion? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-fuchsia-50/20 dark:from-violet-950/10 dark:via-purple-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Recursion: A Function Calling Itself
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-violet-700 dark:text-violet-400">Recursion</strong> is when a function calls itself to solve a problem by breaking it into smaller, similar sub-problems. Perfect for tree structures, factorial, Fibonacci, and divide-and-conquer!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-violet-200 dark:border-violet-800/30">
            <Repeat className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            <AlertTitle className="text-lg">Two Key Parts</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>1. Base Case</strong> - When to stop (prevents infinite loop)<br/>
              <strong>2. Recursive Case</strong> - Function calls itself with smaller input
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Recursion Visualization */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/20 dark:from-emerald-950/10 dark:via-teal-950/5 dark:to-cyan-950/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Play className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <CardTitle>Recursion Visualization</CardTitle>
                <CardDescription>Watch factorial(5) execute step by step</CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                size="sm"
              >
                <Play className="w-4 h-4 mr-1" />
                Start
              </Button>
              <Button
                onClick={resetAnimation}
                variant="outline"
                size="sm"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status Message */}
          <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
            <p className="text-center text-lg font-semibold text-emerald-700 dark:text-emerald-400">
              {getCurrentMessage()}
            </p>
          </div>

          {/* Call Stack Visualization */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Repeat className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Call Stack (Top to Bottom):
            </h4>
            
            <div className="space-y-2 min-h-[300px] p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-2 border-slate-200 dark:border-slate-800">
              {getCallStackItems().length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-slate-400 dark:text-slate-600 text-lg">
                    Call stack is empty. Click Start to begin!
                  </p>
                </div>
              ) : (
                getCallStackItems().map((item, index) => (
                  <div
                    key={`${item.n}-${index}`}
                    className={`p-4 rounded-lg border-2 transition-all duration-500 transform ${
                      item.isReturning
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-700 scale-105 shadow-lg'
                        : 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-400 dark:border-blue-700'
                    } ${index === 0 ? 'animate-pulse' : ''}`}
                    style={{
                      marginLeft: `${index * 20}px`,
                      animation: index === 0 && !item.isReturning ? 'slideInDown 0.5s ease-out' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          item.isReturning 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                            : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        }`}>
                          {item.n}
                        </div>
                        <div>
                          <p className="font-mono text-sm font-semibold text-gray-800 dark:text-gray-200">
                            factorial({item.n})
                          </p>
                          {item.n === 1 && animationStep >= 6 && (
                            <p className="text-xs text-green-700 dark:text-green-400 font-semibold">
                              ✅ Base Case!
                            </p>
                          )}
                        </div>
                      </div>
                      {item.isReturning && (
                        <div className="flex items-center gap-2">
                          <span className="text-green-700 dark:text-green-400 font-semibold text-sm">
                            Returns
                          </span>
                          <div className="px-3 py-1 bg-green-500 text-white rounded-full font-bold text-lg shadow-md">
                            {item.returnValue}
                          </div>
                        </div>
                      )}
                      {!item.isReturning && index === 0 && (
                        <span className="text-blue-700 dark:text-blue-400 text-xs font-semibold animate-bounce">
                          Calling...
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 justify-center flex-wrap p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 border-2 border-blue-400 dark:border-blue-700"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Calling Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-400 dark:border-green-700"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Returning Phase</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Recursion */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Recursion</CardTitle>
              <CardDescription>Base case + recursive case</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Iterative */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">Iterative (Loop)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Countdown with loop
function countdown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log('Done!');
}

countdown(5);
// 5 4 3 2 1 Done!

// Factorial with loop
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120`}</pre>
              </div>
            </div>

            {/* Recursive */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Recursive</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Countdown with recursion
function countdown(n) {
  if (n <= 0) {           // Base case
    console.log('Done!');
    return;
  }
  console.log(n);
  countdown(n - 1);       // Recursive case
}

countdown(5);
// 5 4 3 2 1 Done!

// Factorial with recursion
function factorial(n) {
  if (n <= 1) return 1;   // Base case
  return n * factorial(n - 1); // Recursive
}

console.log(factorial(5)); // 120
// 5 * 4 * 3 * 2 * 1 = 120`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="How Recursion Works"
        description="Understanding the call stack"
        code={`// Factorial: 5! = 5 * 4 * 3 * 2 * 1
function factorial(n) {
  console.log('Called with:', n);
  
  if (n <= 1) {
    console.log('Base case reached!');
    return 1;
  }
  
  const result = n * factorial(n - 1);
  console.log(\`Returning \${n} * factorial(\${n - 1}) = \${result}\`);
  return result;
}

factorial(5);

// Output shows call stack:
// Called with: 5
// Called with: 4
// Called with: 3
// Called with: 2
// Called with: 1
// Base case reached!
// Returning 2 * factorial(1) = 2
// Returning 3 * factorial(2) = 6
// Returning 4 * factorial(3) = 24
// Returning 5 * factorial(4) = 120

// Visualization:
// factorial(5)
//   └─ 5 * factorial(4)
//        └─ 4 * factorial(3)
//             └─ 3 * factorial(2)
//                  └─ 2 * factorial(1)
//                       └─ 1 (base case)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Common Recursive Patterns</CardTitle>
              <CardDescription>Fibonacci, sum, power</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Classic Examples</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

// Sum of array
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5])); // 15

// Power function
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 5)); // 32

// Reverse string
function reverse(str) {
  if (str === '') return '';
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('hello')); // 'olleh'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Array and Object Recursion"
        description="Nested structures"
        code={`// Find max in array
function findMax(arr) {
  if (arr.length === 1) return arr[0];
  const restMax = findMax(arr.slice(1));
  return arr[0] > restMax ? arr[0] : restMax;
}

console.log(findMax([3, 7, 2, 9, 1])); // 9

// Flatten nested array
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // Recursive
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]

// Deep clone object
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  const cloned = {};
  for (const key in obj) {
    cloned[key] = deepClone(obj[key]); // Recursive
  }
  return cloned;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = deepClone(original);
console.log(copy); // Deep copy of original

// Count objects in nested structure
function countObjects(obj) {
  let count = 1; // Count current object
  
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      count += countObjects(obj[key]); // Recursive
    }
  }
  
  return count;
}

const nested = { a: { b: { c: {} } }, d: {} };
console.log(countObjects(nested)); // 4`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Tree Recursion */}
      <CodeSnippet
        title="Tree Traversal"
        description="Perfect use case for recursion"
        code={`// Binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Create a tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Pre-order traversal (Root, Left, Right)
function preOrder(node) {
  if (node === null) return;
  
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

preOrder(root); // 1 2 4 5 3

// In-order traversal (Left, Root, Right)
function inOrder(node) {
  if (node === null) return;
  
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

inOrder(root); // 4 2 5 1 3

// Post-order traversal (Left, Right, Root)
function postOrder(node) {
  if (node === null) return;
  
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

postOrder(root); // 4 5 2 3 1

// Sum all values in tree
function sumTree(node) {
  if (node === null) return 0;
  
  return node.value + sumTree(node.left) + sumTree(node.right);
}

console.log(sumTree(root)); // 15

// Find max depth
function maxDepth(node) {
  if (node === null) return 0;
  
  const leftDepth = maxDepth(node.left);
  const rightDepth = maxDepth(node.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}

console.log(maxDepth(root)); // 3`}
        language="javascript"
        colorTheme="yellow"
        icon={Repeat}
      />

      {/* Tail Recursion */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Tail Recursion Optimization</CardTitle>
              <CardDescription>When recursion is the last operation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Not Tail Recursive */}
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 overflow-hidden">
              <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-3 border-b-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">Not Tail Recursive</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Must wait for recursive call
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
  //     ^ operation after recursion
}

// Stack grows:
// factorial(5)
//   5 * factorial(4)
//     4 * factorial(3)
//       3 * factorial(2)
//         2 * factorial(1)
//           1

// Each call must wait!`}</pre>
              </div>
            </div>

            {/* Tail Recursive */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Tail Recursive</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Recursion is last operation
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
  //     ^ nothing after recursion
}

// Accumulator carries result:
// factorial(5, 1)
// factorial(4, 5)
// factorial(3, 20)
// factorial(2, 60)
// factorial(1, 120)
// return 120

// Can be optimized by compiler!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Pitfalls</CardTitle>
              <CardDescription>Avoid these mistakes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Missing Base Case</h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`function countdown(n) {
  console.log(n);
  countdown(n - 1); // Never stops!
}
// RangeError: Maximum call stack size exceeded`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Wrong Base Case</h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`function fibonacci(n) {
  if (n === 1) return 1; // Missing n === 0
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(0); // Infinite recursion!`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Not Moving Toward Base Case</h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr); // Not getting smaller!
}
// Infinite recursion`}</pre>
          </div>
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
                <span className="text-2xl">🔁</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Self-Calling</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Function calls itself<br/>
                    Breaks problem into smaller parts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Base Case</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Critical stopping condition<br/>
                    Prevents infinite loops
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌲</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect For Trees</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tree traversal, nested objects<br/>
                    Natural fit for hierarchical data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Call Stack</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Each call uses memory<br/>
                    Watch for stack overflow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              When stuck, ask: "What's the simplest case?" (base case) and "How can I make the problem smaller?" (recursive case). Always ensure you're moving toward the base case!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
