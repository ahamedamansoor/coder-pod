'use client';

import React, { useState, useEffect } from 'react';
import { Layers, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, RefreshCw, ChevronLeft, ChevronRight, ArrowDown, ArrowUp, Plus, Minus, TrendingDown } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Step {
  step: number;
  operation: 'push' | 'pop' | 'getMin' | 'init';
  value?: number;
  stack: number[];
  minStack: number[];
  currentMin?: number;
  currentLine: number;
  description: string;
}

export default function StacksGetMinimumO1() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [stackState, setStackState] = useState<number[]>([]);
  const [minStackState, setMinStackState] = useState<number[]>([]);
  const [currentMin, setCurrentMin] = useState<number | undefined>(undefined);

  const initialStack: number[] = [];
  const initialMinStack: number[] = [];

  const steps: Step[] = [
    { 
      step: 1, 
      operation: 'init',
      stack: [],
      minStack: [],
      currentMin: undefined,
      currentLine: 1,
      description: '🏗️ Initialize: Create empty main stack and minStack. Both stacks start empty, ready to track minimum elements.'
    },
    { 
      step: 2, 
      operation: 'push',
      value: 5,
      stack: [5],
      minStack: [5],
      currentMin: 5,
      currentLine: 2,
      description: '➕ Push 5: Main stack gets 5. MinStack gets 5 (first element, so it becomes current minimum).'
    },
    { 
      step: 3, 
      operation: 'getMin',
      stack: [5],
      minStack: [5],
      currentMin: 5,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (5) and return it. With one element, minimum is obvious.'
    },
    { 
      step: 4, 
      operation: 'push',
      value: 3,
      stack: [5, 3],
      minStack: [5, 3],
      currentMin: 3,
      currentLine: 2,
      description: '➕ Push 3: Main stack gets 3. Since 3 < 5, minStack gets 3 (new minimum found).'
    },
    { 
      step: 5, 
      operation: 'getMin',
      stack: [5, 3],
      minStack: [5, 3],
      currentMin: 3,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (3) and return it. Minimum updated to 3.'
    },
    { 
      step: 6, 
      operation: 'push',
      value: 7,
      stack: [5, 3, 7],
      minStack: [5, 3, 3],
      currentMin: 3,
      currentLine: 2,
      description: '➕ Push 7: Main stack gets 7. Since 7 > 3, minStack gets 3 (current minimum unchanged).'
    },
    { 
      step: 7, 
      operation: 'getMin',
      stack: [5, 3, 7],
      minStack: [5, 3, 3],
      currentMin: 3,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (3) and return it. Still 3 despite larger elements.'
    },
    { 
      step: 8, 
      operation: 'push',
      value: 1,
      stack: [5, 3, 7, 1],
      minStack: [5, 3, 3, 1],
      currentMin: 1,
      currentLine: 2,
      description: '➕ Push 1: Main stack gets 1. Since 1 < 3, minStack gets 1 (new minimum found).'
    },
    { 
      step: 9, 
      operation: 'getMin',
      stack: [5, 3, 7, 1],
      minStack: [5, 3, 3, 1],
      currentMin: 1,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (1) and return it. New minimum is 1.'
    },
    { 
      step: 10, 
      operation: 'push',
      value: 4,
      stack: [5, 3, 7, 1, 4],
      minStack: [5, 3, 3, 1, 1],
      currentMin: 1,
      currentLine: 2,
      description: '➕ Push 4: Main stack gets 4. Since 4 > 1, minStack gets 1 (minimum stays 1).'
    },
    { 
      step: 11, 
      operation: 'getMin',
      stack: [5, 3, 7, 1, 4],
      minStack: [5, 3, 3, 1, 1],
      currentMin: 1,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (1) and return it. Minimum remains 1.'
    },
    { 
      step: 12, 
      operation: 'pop',
      stack: [5, 3, 7, 1],
      minStack: [5, 3, 3, 1],
      currentMin: 1,
      currentLine: 3,
      description: '➖ Pop 4: Remove 4 from main stack. Remove 1 from minStack. Current minimum remains 1.'
    },
    { 
      step: 13, 
      operation: 'getMin',
      stack: [5, 3, 7, 1],
      minStack: [5, 3, 3, 1],
      currentMin: 1,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (1) and return it. Minimum unchanged after pop.'
    },
    { 
      step: 14, 
      operation: 'pop',
      stack: [5, 3, 7],
      minStack: [5, 3, 3],
      currentMin: 3,
      currentLine: 3,
      description: '➖ Pop 1: Remove 1 from main stack. Remove 1 from minStack. Current minimum becomes 3.'
    },
    { 
      step: 15, 
      operation: 'getMin',
      stack: [5, 3, 7],
      minStack: [5, 3, 3],
      currentMin: 3,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (3) and return it. Minimum reverted to 3.'
    },
    { 
      step: 16, 
      operation: 'push',
      value: 2,
      stack: [5, 3, 7, 2],
      minStack: [5, 3, 3, 2],
      currentMin: 2,
      currentLine: 2,
      description: '➕ Push 2: Main stack gets 2. Since 2 < 3, minStack gets 2 (new minimum found).'
    },
    { 
      step: 17, 
      operation: 'getMin',
      stack: [5, 3, 7, 2],
      minStack: [5, 3, 3, 2],
      currentMin: 2,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (2) and return it. Minimum updated to 2.'
    },
    { 
      step: 18, 
      operation: 'pop',
      stack: [5, 3, 7],
      minStack: [5, 3, 3],
      currentMin: 3,
      currentLine: 3,
      description: '➖ Pop 2: Remove 2 from main stack. Remove 2 from minStack. Current minimum becomes 3.'
    },
    { 
      step: 19, 
      operation: 'pop',
      stack: [5, 3],
      minStack: [5, 3],
      currentMin: 3,
      currentLine: 3,
      description: '➖ Pop 7: Remove 7 from main stack. Remove 3 from minStack. Current minimum remains 3.'
    },
    { 
      step: 20, 
      operation: 'getMin',
      stack: [5, 3],
      minStack: [5, 3],
      currentMin: 3,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (3) and return it. Minimum stays 3.'
    },
    { 
      step: 21, 
      operation: 'pop',
      stack: [5],
      minStack: [5],
      currentMin: 5,
      currentLine: 3,
      description: '➖ Pop 3: Remove 3 from main stack. Remove 3 from minStack. Current minimum becomes 5.'
    },
    { 
      step: 22, 
      operation: 'getMin',
      stack: [5],
      minStack: [5],
      currentMin: 5,
      currentLine: 5,
      description: '🔍 Get Minimum: Look at top of minStack (5) and return it. Only one element left.'
    },
    { 
      step: 23, 
      operation: 'pop',
      stack: [],
      minStack: [],
      currentMin: undefined,
      currentLine: 3,
      description: '➖ Pop 5: Remove 5 from main stack. Remove 5 from minStack. Both stacks empty.'
    },
    { 
      step: 24, 
      operation: 'getMin',
      stack: [],
      minStack: [],
      currentMin: undefined,
      currentLine: 5,
      description: '🔍 Get Minimum: Stack is empty, return undefined. No minimum exists when stack is empty.'
    }
  ];

  const minStackImplementationCode = `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  // Push operation: Add element to top of stack
  push(value) {
    // Push to main stack
    this.stack.push(value);
    
    // Push to minStack based on minimum logic
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      // New minimum found
      this.minStack.push(value);
    } else {
      // Current minimum remains
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  // Pop operation: Remove element from top of stack
  pop() {
    // Remove from both stacks
    this.stack.pop();
    return this.minStack.pop();
  }

  // Get minimum element in O(1) time
  getMin() {
    if (this.minStack.length === 0) {
      return undefined; // or throw error
    }
    return this.minStack[this.minStack.length - 1];
  }

  // Get top element (optional)
  top() {
    if (this.stack.length === 0) {
      return undefined; // or throw error
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if stack is empty (optional)
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get stack size (optional)
  size() {
    return this.stack.length;
  }
}

// Usage Example:
const minStack = new MinStack();

// Push elements
minStack.push(5);
console.log("Current minimum:", minStack.getMin()); // Output: 5

minStack.push(3);
console.log("Current minimum:", minStack.getMin()); // Output: 3

minStack.push(7);
console.log("Current minimum:", minStack.getMin()); // Output: 3

minStack.push(1);
console.log("Current minimum:", minStack.getMin()); // Output: 1

// Pop elements
minStack.pop();
console.log("Current minimum:", minStack.getMin()); // Output: 3

console.log("Top element:", minStack.top()); // Output: 7
console.log("Stack size:", minStack.size()); // Output: 3
console.log("Is empty:", minStack.isEmpty()); // Output: false`;

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const stack = stepData.stack;
    const minStack = stepData.minStack;
    const min = stepData.currentMin;
    const val = stepData.value;
    const op = stepData.operation;
    
    return [
      { line: 1, code: 'class MinStack {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  constructor() {', active: stepData.currentLine === 1, indent: 1 },
      { line: 3, code: '    this.stack = [];', active: false, indent: 2, values: `[${stack.join(', ')}]` },
      { line: 4, code: '    this.minStack = [];', active: false, indent: 2, values: `[${minStack.join(', ')}]` },
      { line: 5, code: '  }', active: false, indent: 1 },
      { line: 6, code: '', active: false, indent: 0 },
      { line: 7, code: '  push(value) {', active: stepData.currentLine === 2, indent: 1, values: op === 'push' ? `push(${val})` : 'Example: ms.push(5)' },
      { line: 8, code: '    this.stack.push(value);', active: stepData.currentLine === 2, indent: 2, values: op === 'push' ? `stack.push(${val})` : '' },
      { line: 9, code: '    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {', active: stepData.currentLine === 2, indent: 2, values: op === 'push' && val !== undefined ? `${val} <= ${minStack[minStack.length - 2] || '∞'} = ${val <= (minStack[minStack.length - 2] || Infinity) ? '✓' : '✗'}` : '' },
      { line: 10, code: '      this.minStack.push(value);', active: stepData.currentLine === 2, indent: 3, values: op === 'push' && val !== undefined && minStack.length > 0 && minStack[minStack.length - 1] === val ? `minStack.push(${val})` : '' },
      { line: 11, code: '    } else {', active: false, indent: 2 },
      { line: 12, code: '      this.minStack.push(this.minStack[this.minStack.length - 1]);', active: stepData.currentLine === 2, indent: 3, values: op === 'push' && val !== undefined && minStack.length > 0 && minStack[minStack.length - 1] !== val ? `minStack.push(${minStack[minStack.length - 1]})` : '' },
      { line: 13, code: '    }', active: false, indent: 2 },
      { line: 14, code: '  }', active: stepData.currentLine === 2, indent: 1 },
      { line: 15, code: '', active: false, indent: 0 },
      { line: 16, code: '  pop() {', active: stepData.currentLine === 3, indent: 1, values: op === 'pop' ? 'pop()' : 'Example: ms.pop()' },
      { line: 17, code: '    this.stack.pop();', active: stepData.currentLine === 3, indent: 2, values: op === 'pop' ? 'stack.pop()' : '' },
      { line: 18, code: '    return this.minStack.pop();', active: stepData.currentLine === 3, indent: 2, values: op === 'pop' && minStack.length > 0 ? `minStack.pop()` : '' },
      { line: 19, code: '  }', active: stepData.currentLine === 3, indent: 1 },
      { line: 20, code: '', active: false, indent: 0 },
      { line: 21, code: '  getMin() {', active: stepData.currentLine === 5, indent: 1, values: op === 'getMin' ? 'getMin()' : 'Example: ms.getMin()' },
      { line: 22, code: '    return this.minStack[this.minStack.length - 1];', active: stepData.currentLine === 5, indent: 2, values: op === 'getMin' && min !== undefined ? `return ${min}` : op === 'getMin' && min === undefined ? 'return undefined' : '' },
      { line: 23, code: '  }', active: stepData.currentLine === 5, indent: 1 },
      { line: 24, code: '}', active: false, indent: 0 }
    ];
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setStackState([...initialStack]);
    setMinStackState([...initialMinStack]);
    setCurrentMin(undefined);

    const speedDelay = animationSpeed === 'slow' ? 3000 : animationSpeed === 'fast' ? 500 : 1500;
    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
        }
      }, index * speedDelay);
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
    setIsAnimating(false);
    goToStep(0);
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStackState([...step.stack]);
    setMinStackState([...step.minStack]);
    setCurrentMin(step.currentMin);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="DSA · Stacks"
        title="Get Minimum Element in O(1)"
        description="Master the technique to find minimum element in constant time using auxiliary stack"
        colorTheme="green"
      />
      
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(1)', 'Space: O(n)'].map((badge, index) => (
          <Badge
            key={`${badge}-${index}`}
            variant={index === 0 ? 'secondary' : 'outline'}
            className="text-sm"
          >
            {badge}
          </Badge>
        ))}
      </div>

      {/* What You'll Learn */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Auxiliary Stack</p>
                <p className="text-sm text-muted-foreground">Use extra stack to track minimums</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">O(1) Minimum</p>
                <p className="text-sm text-muted-foreground">Get minimum in constant time</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Smart Pushing</p>
                <p className="text-sm text-muted-foreground">Push current minimum to minStack</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Synchronized Popping</p>
                <p className="text-sm text-muted-foreground">Pop from both stacks together</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding what we need to solve</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Design a stack that supports push, pop, and top operations, and can retrieve the minimum element in O(1) time.
          </p>

          {/* Step-by-Step Problem Explanation */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                <span className="text-lg">📊</span> Step 1: The Challenge
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                A normal stack can push/pop in O(1), but finding the minimum requires O(n) traversal.
              </p>
              
              {/* Normal Stack Problem Visualization */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-blue-300 dark:border-blue-600 mb-4">
                <div className="text-center mb-3">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Normal Stack - Finding Minimum = O(n)</span>
                </div>
                <div className="flex justify-center items-end gap-2 mb-3">
                  {[5, 3, 8, 2, 7].map((num, idx) => (
                    <div key={idx} className="relative">
                      <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                        num === 2 ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-700 dark:text-red-300 scale-110' : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                      }`}>
                        {num}
                      </div>
                      {num === 2 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600 dark:text-red-400">MIN</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-xs text-red-600 dark:text-red-400 font-medium">❌ Must scan all elements to find minimum</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                <span className="text-lg">⚡</span> Step 2: The Solution Goal
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                We need ALL operations to work in O(1) time, including getMin().
              </p>
              
              {/* Solution Visualization */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-green-300 dark:border-green-600">
                <div className="text-center mb-3">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">Min Stack - All Operations = O(1)</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Stack */}
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Main Stack</span>
                    </div>
                    <div className="flex justify-center items-end gap-1">
                      {[5, 3, 8, 2, 7].map((num, idx) => (
                        <div key={idx} className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-600">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Min Stack */}
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">Min Stack</span>
                    </div>
                    <div className="flex justify-center items-end gap-1">
                      {[5, 3, 3, 2, 2].map((num, idx) => (
                        <div key={idx} className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold border ${
                          idx === 3 ? 'bg-green-500 text-white border-green-600 scale-110' : 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-600'
                        }`}>
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">✅ getMin() = 2 (instant lookup!)</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                <span className="text-lg">🎯</span> Step 3: Operation Requirements
              </h4>
              
              {/* Operation Requirements */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">push(x)</p>
                      <p className="text-xs text-muted-foreground">Add element to top</p>
                    </div>
                    <span className="ml-auto text-xs font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded">O(1)</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                      <Minus className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">pop()</p>
                      <p className="text-xs text-muted-foreground">Remove top element</p>
                    </div>
                    <span className="ml-auto text-xs font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded">O(1)</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <ArrowUp className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">top()</p>
                      <p className="text-xs text-muted-foreground">View top element</p>
                    </div>
                    <span className="ml-auto text-xs font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded">O(1)</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <TrendingDown className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">getMin()</p>
                      <p className="text-xs text-muted-foreground">Get minimum element</p>
                    </div>
                    <span className="ml-auto text-xs font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded">O(1)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
                <span className="text-lg">💡</span> Step 4: Key Insight
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Use an auxiliary stack to track minimums at each level!
              </p>
              
              {/* Key Insight Visualization */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-amber-300 dark:border-amber-600">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Push 5:</span>
                      <span className="text-xs text-muted-foreground">main=[5]</span>
                      <span className="text-xs text-muted-foreground">min=[5]</span>
                      <span className="text-xs text-green-600 font-medium">✓ min=5</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Push 3:</span>
                      <span className="text-xs text-muted-foreground">main=[5,3]</span>
                      <span className="text-xs text-muted-foreground">min=[5,3]</span>
                      <span className="text-xs text-green-600 font-medium">✓ min=3</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Push 7:</span>
                      <span className="text-xs text-muted-foreground">main=[5,3,7]</span>
                      <span className="text-xs text-muted-foreground">min=[5,3,3]</span>
                      <span className="text-xs text-green-600 font-medium">✓ min=3</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">getMin():</span>
                      <span className="text-xs text-muted-foreground">look at min top</span>
                      <span className="text-xs text-green-600 font-medium">→ 3</span>
                      <span className="text-xs text-green-600 font-medium">⚡ O(1)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the auxiliary stack track minimum elements step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={isAnimating ? () => setIsAnimating(false) : handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-purple-300 dark:border-purple-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      disabled={isAnimating}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      disabled={isAnimating}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      disabled={isAnimating}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm">Fast</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0 || isAnimating}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
                  Step {currentStep + 1} / {steps.length}
                </span>
              </div>
              
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1 || isAnimating}
                variant="outline"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Step Description */}
      {currentStep >= 0 && steps[currentStep].description && (
        <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
          currentStepData.operation === 'push' ? 'border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800' :
          currentStepData.operation === 'pop' ? 'border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800' :
          currentStepData.operation === 'getMin' ? 'border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800' :
          'border-purple-200 bg-purple-50 dark:bg-purple-950/20 dark:border-purple-800'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            {currentStepData.operation === 'push' && <Plus className="w-5 h-5 text-green-600" />}
            {currentStepData.operation === 'pop' && <Minus className="w-5 h-5 text-orange-600" />}
            {currentStepData.operation === 'getMin' && <TrendingDown className="w-5 h-5 text-blue-600" />}
            <h3 className="font-bold text-lg">Step {currentStep + 1}</h3>
          </div>
          <p className="text-muted-foreground">{steps[currentStep].description}</p>
        </div>
      )}

      {/* Code Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Code Implementation</CardTitle>
          <CardDescription>
            JavaScript implementation with step-by-step execution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-4 rounded-lg overflow-x-auto">
            {/* Code Viewer with Variable Values */}
            {currentStep >= 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">min-stack-implementation.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

                {/* Code Lines */}
                <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                  {getCodeWithValues(steps[currentStep]).map((lineData) => (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.active
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-400 dark:border-amber-500'
                          : ''
                      }`}
                    >
                      {/* Line Number */}
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-amber-600 dark:text-amber-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      {/* Code with inline values */}
                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">
                            {lineData.values}
                          </span>
                        )}
                      </code>
                    </div>
                  ))}
                </div>

                {/* Variable State Panel */}
                <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">stack:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">[{stackState.join(', ')}]</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">minStack:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">[{minStackState.join(', ')}]</span>
                      </div>
                      {currentMin !== undefined && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">min:</span>
                          <span className="font-semibold text-purple-600 dark:text-purple-400">{currentMin}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stack Visualization */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-green-600" />
            Stack Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Stack */}
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Main Stack</h4>
              <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 min-h-[220px]">
                <div className="flex flex-col-reverse gap-2">
                  {stackState.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">Empty Stack</div>
                  ) : (
                    stackState.map((value, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center h-10 rounded-md font-bold transition-all duration-500 ${
                          index === stackState.length - 1 
                            ? 'bg-blue-500 text-white shadow-lg scale-105' 
                            : 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200'
                        }`}
                      >
                        {value}
                        {index === stackState.length - 1 && (
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">TOP</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Min Stack */}
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Min Stack</h4>
              <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 min-h-[220px]">
                <div className="flex flex-col-reverse gap-2">
                  {minStackState.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">Empty Stack</div>
                  ) : (
                    minStackState.map((value, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center h-10 rounded-md font-bold transition-all duration-500 ${
                          index === minStackState.length - 1 
                            ? 'bg-green-500 text-white shadow-lg scale-105' 
                            : 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200'
                        }`}
                      >
                        {value}
                        {index === minStackState.length - 1 && (
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-green-600 dark:text-green-400 whitespace-nowrap">MIN</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Current Minimum Display */}
          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-6 h-6 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">Current Minimum</h4>
                  <p className="text-sm text-muted-foreground">getMin() operation result</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {currentMin !== undefined ? currentMin : 'Empty'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Time Complexity</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>push():</span>
                  <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">O(1)</span>
                </div>
                <div className="flex justify-between">
                  <span>pop():</span>
                  <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">O(1)</span>
                </div>
                <div className="flex justify-between">
                  <span>getMin():</span>
                  <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">O(1)</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Space Complexity</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Main Stack:</span>
                  <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                </div>
                <div className="flex justify-between">
                  <span>Min Stack:</span>
                  <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">O(n)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Implementation */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>
            Full JavaScript implementation of MinStack with O(1) minimum retrieval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet 
            code={minStackImplementationCode}
            language="javascript"
            title="MinStack Implementation Using Auxiliary Stack"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Ready for More */}
      <Alert className="border-green-200 dark:border-green-800">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Ready for More?</AlertTitle>
        <AlertDescription>
          Try implementing this with different approaches like using a single stack with (value, min) pairs!
        </AlertDescription>
      </Alert>
    </div>
  );
}
