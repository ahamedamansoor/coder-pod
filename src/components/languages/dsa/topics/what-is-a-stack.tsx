'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  ArrowUp, ArrowDown, ArrowRight, AlertCircle, CheckCircle, Sparkles, XCircle, 
  Zap, Target, TrendingUp, Box, Layers, Play, ChevronLeft, ChevronRight, RotateCcw
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function WhatIsAStack() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Layers} 
        category="DSA · Stacks" 
        title="What is a Stack?" 
        description="Understanding the fundamentals of stacks - a LIFO linear data structure"
        colorTheme="purple"
        badges={[
          { label: 'Fundamental', variant: 'default' },
          { label: 'LIFO', variant: 'success' },
          { label: 'Dynamic Size', variant: 'info' }
        ]}
      />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Introduction to Stacks
          </CardTitle>
          <CardDescription>A fundamental data structure following Last-In-First-Out principle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is a Stack?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO</strong> (Last-In-First-Out) principle. 
              Think of it like a stack of plates - you can only add or remove plates from the top.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 dark:border-purple-600">
                <div className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4" />
                  Push (Insert)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Add element to the top of the stack</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 dark:border-purple-600">
                <div className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4" />
                  Pop (Remove)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Remove element from the top of the stack</p>
              </div>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              The last element added to the stack is always the first one to be removed. This is why it's called LIFO.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600" />
            Visual Representation
          </CardTitle>
          <CardDescription>How a stack works with push and pop operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Stack Operations</h4>
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">Push Operation</div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-purple-600">30</div>
                    <ArrowDown className="w-6 h-6 text-purple-500" />
                    <div className="space-y-1">
                      <div className="w-20 h-8 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100">30</div>
                      <div className="w-20 h-8 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100">20</div>
                      <div className="w-20 h-8 bg-purple-400 dark:bg-purple-600 rounded flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100">10</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">Pop Operation</div>
                  <div className="flex items-center gap-4">
                    <div className="space-y-1">
                      <div className="w-20 h-8 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100">30</div>
                      <div className="w-20 h-8 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100">20</div>
                      <div className="w-20 h-8 bg-purple-400 dark:bg-purple-600 rounded flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100">10</div>
                    </div>
                    <ArrowUp className="w-6 h-6 text-purple-500" />
                    <div className="text-4xl font-bold text-purple-600">30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Complete Stack Example</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-3 py-1.5 rounded border border-purple-500 mb-2">
                    TOP
                  </div>
                  <div className="space-y-0">
                    <div className="w-24 h-10 bg-purple-200 dark:bg-purple-800 rounded-t-lg flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100 border-2 border-purple-500 border-b-0">40</div>
                    <div className="w-24 h-10 bg-purple-300 dark:bg-purple-700 flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100 border-2 border-purple-500 border-b-0">30</div>
                    <div className="w-24 h-10 bg-purple-400 dark:bg-purple-600 flex items-center justify-center text-sm font-bold text-purple-900 dark:text-purple-100 border-2 border-purple-500 border-b-0">20</div>
                    <div className="w-24 h-10 bg-purple-500 dark:bg-purple-500 rounded-b-lg flex items-center justify-center text-sm font-bold text-white border-2 border-purple-500">10</div>
                  </div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border mt-2">
                    BOTTOM
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">Stack State</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">TOP → 40, 30, 20, 10 ← BOTTOM</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">Size: 4 elements</div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                <p>Elements are added and removed only from the <strong>TOP</strong> of the stack</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Stack Animation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Play className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Interactive Stack Animation
          </CardTitle>
          <CardDescription>Watch stack operations (push and pop) in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stack Animation Component */}
          <StackAnimation />
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Stack vs Queue
          </CardTitle>
          <CardDescription>Understanding the key differences between LIFO and FIFO</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                  <ArrowUp className="w-5 h-5" />
                  Stack (LIFO)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Last element added is removed first</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Push/Pop operations at one end</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Function call management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Undo/Redo operations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Queue (FIFO)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">First element added is removed first</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Enqueue at rear, Dequeue at front</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Task scheduling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Print queue management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Basic Stack Operations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <ArrowUp className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Push</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Add an element to the top of the stack.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                Time: O(1)
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <ArrowDown className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Pop</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Remove and return the top element.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                Time: O(1)
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Peek/Top</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                View the top element without removing it.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                Time: O(1)
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-3">
                <Box className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">IsEmpty</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Check if the stack has no elements.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                Time: O(1)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Stack Implementation in JavaScript"
        language="javascript"
        colorTheme="purple"
        code={`// Define a Stack class
class Stack {
  constructor() {
    this.items = [];  // Array to store stack elements
    this.top = -1;    // Track the top index
  }

  // Push: Add element to top
  push(element) {
    this.items.push(element);
    this.top++;
  }

  // Pop: Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.top--;
    return this.items.pop();
  }

  // Peek: View top element without removing
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.top];
  }

  // IsEmpty: Check if stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Size: Get number of elements
  size() {
    return this.top + 1;
  }
}

// Using the stack
const stack = new Stack();

stack.push(10);  // Stack: [10]
stack.push(20);  // Stack: [10, 20]
stack.push(30);  // Stack: [10, 20, 30]

console.log(stack.peek());     // Output: 30
console.log(stack.pop());      // Output: 30
console.log(stack.peek());     // Output: 20
console.log(stack.size());     // Output: 2`}
      />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Time Complexity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-purple-200 dark:border-purple-700">
                  <th className="text-left p-3 font-semibold text-slate-900 dark:text-slate-100">Operation</th>
                  <th className="text-center p-3 font-semibold text-slate-900 dark:text-slate-100">Array Implementation</th>
                  <th className="text-center p-3 font-semibold text-slate-900 dark:text-slate-100">Linked List Implementation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Push</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Pop</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Peek</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700 dark:text-slate-300">IsEmpty</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Real-World Applications of Stacks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Common Applications:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Function call stack in programming languages</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Undo/Redo functionality in text editors</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Browser history (back button)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Expression evaluation and parsing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Balancing parentheses and brackets</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Advanced Applications:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Backtracking algorithms (maze, Sudoku)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Depth-First Search (DFS) traversal</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Memory management in systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Compiler syntax checking</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Monotonic stack problems</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30">
        <Sparkles className="h-5 w-5 text-purple-600" />
        <AlertTitle>Next Steps</AlertTitle>
        <AlertDescription>
          Now that you understand what stacks are, let's learn how to implement and use them:
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Implement stack using arrays and linked lists</li>
            <li>• Solve parentheses balancing problems</li>
            <li>• Learn about monotonic stacks</li>
            <li>• Practice stack-based algorithm problems</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

// Stack Animation Component
function StackAnimation() {
  // Custom animations for stack operations
  const styleTag = (
    <style jsx>{`
      @keyframes push-down {
        0% {
          transform: translateY(-100px) scale(0.8);
          opacity: 0;
        }
        50% {
          transform: translateY(-50px) scale(1.1);
          opacity: 0.8;
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }
      
      @keyframes pop-up {
        0% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        50% {
          transform: translateY(-50px) scale(1.2);
          opacity: 0.8;
        }
        100% {
          transform: translateY(-150px) scale(0.8);
          opacity: 0;
        }
      }
      
      @keyframes highlight-top {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 20px 10px rgba(147, 51, 234, 0.4);
        }
      }
      
      .push-animation {
        animation: push-down 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .pop-animation {
        animation: pop-up 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .highlight-top {
        animation: highlight-top 1s ease-in-out infinite;
      }
    `}</style>
  );

  // Animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Stack operations - 24 steps with detailed explanations
  const steps = [
    // Initial state (3 steps)
    { step: 1, stack: [10, 20, 30], action: 'init', description: '📋 Initial Stack: We start with [10, 20, 30] where 30 is at the TOP', operation: 'none' },
    { step: 2, stack: [10, 20, 30], action: 'explain-lifo', description: '💡 LIFO Principle: Last In (30) will be First Out when we pop', operation: 'none' },
    { step: 3, stack: [10, 20, 30], action: 'ready', description: '✅ Ready: Stack is ready for operations - TOP element is 30', operation: 'none' },
    
    // Push 40 (6 steps) - more detailed
    { step: 4, stack: [10, 20, 30], action: 'push-start', description: '🔄 Push Operation: We want to ADD 40 to the stack', operation: 'push', value: 40 },
    { step: 5, stack: [10, 20, 30], action: 'push-position', description: '📍 Position: 40 will be placed at the TOP (above 30)', operation: 'none' },
    { step: 6, stack: [10, 20, 30, 40], action: 'push-complete', description: '✅ Push Complete: 40 added - new stack is [10, 20, 30, 40]', operation: 'none' },
    { step: 7, stack: [10, 20, 30, 40], action: 'verify-top', description: '👁️ New TOP: 40 is now the top element (last added)', operation: 'none' },
    { step: 8, stack: [10, 20, 30, 40], action: 'verify-size', description: '📏 Size Changed: Stack size increased from 3 to 4 elements', operation: 'none' },
    { step: 9, stack: [10, 20, 30, 40], action: 'ready-next', description: '⏭️ Ready: Stack prepared for next operation', operation: 'none' },
    
    // Push 50 (6 steps) - more detailed
    { step: 10, stack: [10, 20, 30, 40], action: 'push-start', description: '🔄 Push Operation: Now we ADD 50 to the stack', operation: 'push', value: 50 },
    { step: 11, stack: [10, 20, 30, 40], action: 'push-position', description: '📍 Position: 50 will become the new TOP (above 40)', operation: 'none' },
    { step: 12, stack: [10, 20, 30, 40, 50], action: 'push-complete', description: '✅ Push Complete: 50 added - new stack is [10, 20, 30, 40, 50]', operation: 'none' },
    { step: 13, stack: [10, 20, 30, 40, 50], action: 'verify-top', description: '👁️ New TOP: 50 is now the top element (most recent)', operation: 'none' },
    { step: 14, stack: [10, 20, 30, 40, 50], action: 'verify-size', description: '📏 Size Changed: Stack size increased from 4 to 5 elements', operation: 'none' },
    { step: 15, stack: [10, 20, 30, 40, 50], action: 'ready-next', description: '⏭️ Ready: Stack prepared for next operation', operation: 'none' },
    
    // Pop 50 (6 steps) - more detailed
    { step: 16, stack: [10, 20, 30, 40, 50], action: 'pop-start', description: '🔄 Pop Operation: We will REMOVE the TOP element (50)', operation: 'pop', value: 50 },
    { step: 17, stack: [10, 20, 30, 40, 50], action: 'pop-explain', description: '💡 LIFO in Action: 50 was last added, so it will be first removed', operation: 'none' },
    { step: 18, stack: [10, 20, 30, 40], action: 'pop-complete', description: '✅ Pop Complete: 50 removed - stack is now [10, 20, 30, 40]', operation: 'none' },
    { step: 19, stack: [10, 20, 30, 40], action: 'verify-top', description: '👁️ New TOP: 40 is now the top element (was second)', operation: 'none' },
    { step: 20, stack: [10, 20, 30, 40], action: 'verify-size', description: '📏 Size Changed: Stack size decreased from 5 to 4 elements', operation: 'none' },
    { step: 21, stack: [10, 20, 30, 40], action: 'ready-next', description: '⏭️ Ready: Stack prepared for next operation', operation: 'none' },
    
    // Final state (3 steps)
    { step: 22, stack: [10, 20, 30, 40], action: 'complete', description: '🎉 Complete: Stack operations finished successfully!', operation: 'none' },
    { step: 23, stack: [10, 20, 30, 40], action: 'summary', description: '📊 Summary: Demonstrated LIFO - Last In (50) was First Out', operation: 'none' },
    { step: 24, stack: [10, 20, 30, 40], action: 'final-state', description: '✅ Final Stack: [10, 20, 30, 40] with 40 at the TOP', operation: 'none' },
  ];

  // Enhanced animation styles with more visual feedback
  const enhancedStyleTag = (
    <style jsx>{`
      @keyframes push-down {
        0% {
          transform: translateY(-100px) scale(0.8) rotateX(90deg);
          opacity: 0;
        }
        25% {
          transform: translateY(-75px) scale(1.1) rotateX(45deg);
          opacity: 0.5;
        }
        50% {
          transform: translateY(-50px) scale(1.2) rotateX(20deg);
          opacity: 0.8;
        }
        75% {
          transform: translateY(-25px) scale(1.05) rotateX(5deg);
          opacity: 0.9;
        }
        100% {
          transform: translateY(0) scale(1) rotateX(0deg);
          opacity: 1;
        }
      }
      
      @keyframes pop-up {
        0% {
          transform: translateY(0) scale(1) rotateX(0deg);
          opacity: 1;
        }
        25% {
          transform: translateY(-25px) scale(1.1) rotateX(-15deg);
          opacity: 0.9;
        }
        50% {
          transform: translateY(-75px) scale(1.3) rotateX(-45deg);
          opacity: 0.7;
        }
        75% {
          transform: translateY(-125px) scale(1.2) rotateX(-75deg);
          opacity: 0.4;
        }
        100% {
          transform: translateY(-200px) scale(0.8) rotateX(-90deg);
          opacity: 0;
        }
      }
      
      @keyframes highlight-top {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4);
          border-color: rgb(147, 51, 234);
        }
        25% {
          transform: scale(1.02);
          box-shadow: 0 0 15px 5px rgba(147, 51, 234, 0.3);
          border-color: rgb(167, 71, 254);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 25px 10px rgba(147, 51, 234, 0.5);
          border-color: rgb(196, 111, 255);
        }
        75% {
          transform: scale(1.02);
          box-shadow: 0 0 15px 5px rgba(147, 51, 234, 0.3);
          border-color: rgb(167, 71, 254);
        }
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px 2px rgba(34, 197, 94, 0.3);
        }
        50% {
          box-shadow: 0 0 20px 8px rgba(34, 197, 94, 0.6);
        }
      }
      
      @keyframes stack-bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }
      
      .push-animation {
        animation: push-down 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .pop-animation {
        animation: pop-up 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .highlight-top {
        animation: highlight-top 2s ease-in-out infinite;
      }
      
      .new-element {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .stack-container {
        perspective: 1000px;
        transform-style: preserve-3d;
      }
      
      .stack-element {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
      }
      
      .stack-element:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
    `}</style>
  );

  // Navigation functions
  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = { slow: 1800, normal: 1200, fast: 600 };
    const delay = speedMap[animationSpeed];

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnimating(false), 2000);
        }
      }, index * delay);
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-6">
      {enhancedStyleTag}
      
      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={handlePlay}
          disabled={isAnimating}
          className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
        >
          <Play className="w-4 h-4 mr-2" />
          {isAnimating ? 'Playing...' : 'Play Animation'}
        </Button>
        <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-purple-300">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Speed Control */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
        {(['slow', 'normal', 'fast'] as const).map((speed) => (
          <label key={speed} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="speed"
              value={speed}
              checked={animationSpeed === speed}
              onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
              disabled={isAnimating}
              className="w-4 h-4 text-purple-600 focus:ring-purple-500"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
          </label>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0 || isAnimating}
          variant="outline"
          size="lg"
          className="border-purple-300"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
          <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
            Step {currentStep + 1} / {steps.length}
          </span>
        </div>
        
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1 || isAnimating}
          variant="outline"
          size="lg"
          className="border-purple-300"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Step Description */}
      {currentStep >= 0 && (
        <div className={`p-6 rounded-xl border-2 shadow-lg animate-in slide-in-from-bottom-4 fade-in duration-500 ${
          steps[currentStep].action === 'complete' || steps[currentStep].action === 'summary' || steps[currentStep].action === 'final-state'
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
            : steps[currentStep].action === 'push-start' || steps[currentStep].action === 'push-complete' || steps[currentStep].action === 'push-position'
            ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
            : steps[currentStep].action === 'pop-start' || steps[currentStep].action === 'pop-complete' || steps[currentStep].action === 'pop-explain'
            ? 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-300 dark:border-red-700'
            : steps[currentStep].action === 'verify-top' || steps[currentStep].action === 'verify-size'
            ? 'bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 border-cyan-300 dark:border-cyan-700'
            : steps[currentStep].action === 'explain-lifo'
            ? 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-300 dark:border-amber-700'
            : 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-300 dark:border-purple-700'
        }`}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-full shadow-lg animate-pulse ${
                steps[currentStep].action === 'complete' || steps[currentStep].action === 'summary' || steps[currentStep].action === 'final-state' ? 'bg-green-600 ring-4 ring-green-300' :
                steps[currentStep].action === 'push-start' || steps[currentStep].action === 'push-complete' || steps[currentStep].action === 'push-position' ? 'bg-blue-600 ring-4 ring-blue-300' :
                steps[currentStep].action === 'pop-start' || steps[currentStep].action === 'pop-complete' || steps[currentStep].action === 'pop-explain' ? 'bg-orange-600 ring-4 ring-orange-300' :
                steps[currentStep].action === 'verify-top' || steps[currentStep].action === 'verify-size' ? 'bg-cyan-600 ring-4 ring-cyan-300' :
                steps[currentStep].action === 'explain-lifo' ? 'bg-amber-600 ring-4 ring-amber-300' :
                'bg-purple-600 ring-4 ring-purple-300'
              }`}>
                {(steps[currentStep].action === 'complete' || steps[currentStep].action === 'summary' || steps[currentStep].action === 'final-state') ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (steps[currentStep].action === 'push-start' || steps[currentStep].action === 'push-complete' || steps[currentStep].action === 'push-position') ? (
                  <ArrowDown className="w-6 h-6 text-white" />
                ) : (steps[currentStep].action === 'pop-start' || steps[currentStep].action === 'pop-complete' || steps[currentStep].action === 'pop-explain') ? (
                  <ArrowUp className="w-6 h-6 text-white" />
                ) : (steps[currentStep].action === 'verify-top' || steps[currentStep].action === 'verify-size') ? (
                  <Target className="w-6 h-6 text-white" />
                ) : (steps[currentStep].action === 'explain-lifo') ? (
                  <Sparkles className="w-6 h-6 text-white" />
                ) : (
                  <Layers className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide">
                  Step {steps[currentStep].step} of {steps.length}
                </div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                  {steps[currentStep].action === 'init' && '🚀 Initialization'}
                  {steps[currentStep].action === 'explain-lifo' && '💡 Understanding LIFO'}
                  {steps[currentStep].action === 'ready' && '✅ Ready State'}
                  {steps[currentStep].action === 'push-start' && '📥 Push Starting'}
                  {steps[currentStep].action === 'push-position' && '📍 Position Planning'}
                  {steps[currentStep].action === 'push-complete' && '✅ Push Complete'}
                  {steps[currentStep].action === 'verify-top' && '👁️ Verify Top Element'}
                  {steps[currentStep].action === 'verify-size' && '📏 Check Stack Size'}
                  {steps[currentStep].action === 'pop-start' && '📤 Pop Starting'}
                  {steps[currentStep].action === 'pop-explain' && '💡 Understanding Pop'}
                  {steps[currentStep].action === 'pop-complete' && '✅ Pop Complete'}
                  {steps[currentStep].action === 'ready-next' && '⏭️ Ready for Next'}
                  {steps[currentStep].action === 'complete' && '🎉 Complete'}
                  {steps[currentStep].action === 'summary' && '📊 Summary'}
                  {steps[currentStep].action === 'final-state' && '✅ Final State'}
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 pl-14">
              {steps[currentStep].description}
            </p>
          </div>
        </div>
      )}

      {/* Enhanced Stack Visualization */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Interactive Stack Visualization:</p>
          <div className="flex items-center gap-3 text-xs">
            <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">
              Size: <span className="font-bold text-purple-700 dark:text-purple-300">{steps[currentStep].stack.length}</span>
            </div>
            {steps[currentStep].stack.length > 0 && (
              <div className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 rounded">
                Top: <span className="font-bold text-violet-700 dark:text-violet-300">{steps[currentStep].stack[steps[currentStep].stack.length - 1]}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="flex justify-center min-h-[500px]">
            <div className="flex flex-col items-center gap-4 relative stack-container">
              {/* TOP indicator with enhanced styling */}
              <div className="relative">
                <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-bold text-sm shadow-lg animate-in slide-in-from-top-4 fade-in duration-500">
                  TOP → Last In, First Out
                </div>
                {steps[currentStep].stack.length > 0 && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-purple-400"></div>
                )}
              </div>
              
              {/* Enhanced Stack elements */}
              <div className="flex flex-col-reverse gap-2 min-h-[300px] justify-end relative">
                {/* Visual stack base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-500 dark:to-slate-600 rounded-full"></div>
                
                {steps[currentStep].stack.map((value, idx) => {
                  const isTop = idx === steps[currentStep].stack.length - 1;
                  const isAnimating = (steps[currentStep].action === 'push-start' || steps[currentStep].action === 'push-complete' || steps[currentStep].action === 'push-position') && isTop;
                  const isPopping = (steps[currentStep].action === 'pop-start' || steps[currentStep].action === 'pop-explain') && isTop;
                  const isNewlyAdded = (steps[currentStep].action === 'push-complete' || steps[currentStep].action === 'verify-top') && value === steps[currentStep - 1]?.value && isTop;
                  const isBottom = idx === 0;
                  
                  return (
                    <div key={idx} className="relative flex flex-col items-center group">
                      {/* Enhanced element box with glassmorphism effect */}
                      <div
                        className={`stack-element w-24 h-14 flex items-center justify-center rounded-xl font-bold text-xl border-2 transition-all duration-700 ${
                          isPopping
                            ? 'pop-animation bg-gradient-to-br from-red-300 to-red-400 dark:from-red-800 dark:to-red-900 border-red-500 shadow-red-500/30'
                            : isAnimating
                            ? 'push-animation bg-gradient-to-br from-blue-300 to-blue-400 dark:from-blue-800 dark:to-blue-900 border-blue-500 shadow-blue-500/30'
                            : isNewlyAdded
                            ? 'new-element bg-gradient-to-br from-green-300 to-green-400 dark:from-green-800 dark:to-green-900 border-green-500 shadow-green-500/30 scale-105'
                            : isTop
                            ? 'highlight-top bg-gradient-to-br from-purple-300 to-purple-400 dark:from-purple-800 dark:to-purple-900 border-purple-500 shadow-purple-500/30'
                            : isBottom
                            ? 'bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 border-slate-500 shadow-slate-500/20'
                            : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 border-slate-400 shadow-slate-400/20'
                        } ${
                          isTop ? 'text-purple-900 dark:text-purple-100 shadow-lg' : 
                          isBottom ? 'text-slate-700 dark:text-slate-300' :
                          'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isTop && <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>}
                          <span className="font-mono">{value}</span>
                          {isBottom && <div className="w-2 h-2 bg-slate-500 rounded-full"></div>}
                        </div>
                      </div>
                      
                      {/* Enhanced badges and indicators */}
                      <div className="absolute -top-2 -right-2 flex gap-1">
                        {isNewlyAdded && (
                          <div className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-bold animate-pulse shadow-lg">
                            NEW
                          </div>
                        )}
                        {isTop && (
                          <div className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full font-bold animate-pulse shadow-lg">
                            TOP
                          </div>
                        )}
                      </div>
                      
                      {/* Position indicator */}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          [{idx}]
                        </span>
                        {isTop && (
                          <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                            LIFO Target
                          </span>
                        )}
                        {isBottom && (
                          <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                            Base
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {/* Empty stack indicator */}
                {steps[currentStep].stack.length === 0 && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-14 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800">
                      <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">Empty Stack</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Ready for operations</div>
                  </div>
                )}
              </div>
              
              {/* BOTTOM indicator */}
              <div className="relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-slate-400"></div>
                <div className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-500 dark:to-slate-600 text-white rounded-lg font-bold text-sm shadow-lg">
                  BOTTOM → First In, Last Out
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced operation indicators */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <ArrowDown className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">PUSH adds to TOP</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <ArrowUp className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-orange-700 dark:text-orange-300 font-medium">POP removes from TOP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
