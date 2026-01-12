'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CodeSnippet } from '@/components/shared';
import { Layers, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, RefreshCw, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Plus, Minus } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

type StackOperation =
  | 'init'
  | 'push-check'
  | 'push-increment'
  | 'push-insert'
  | 'push-complete'
  | 'pop-check'
  | 'pop-store'
  | 'pop-decrement'
  | 'pop-complete'
  | 'peek-check'
  | 'peek-return'
  | 'peek-complete'
  | 'none';

type Step = {
  step: number;
  array: number[];
  top: number;
  operation: StackOperation;
  currentLine: number;
  description: string;
};

export default function ImplementStackUsingArrays() {
  // CSS for stack animations
  const stackStyles = `
    @keyframes pushDown {
      0% {
        transform: translateY(-100px) scale(0.8);
        opacity: 0;
      }
      50% {
        transform: translateY(-50px) scale(1.1);
        opacity: 0.7;
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }
    
    @keyframes popUp {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translateY(-50px) scale(1.1);
        opacity: 0.7;
      }
      100% {
        transform: translateY(-100px) scale(0.8);
        opacity: 0;
      }
    }
    
    @keyframes highlightTop {
      0%, 100% {
        background-color: rgb(147, 51, 234);
        transform: scale(1);
      }
      50% {
        background-color: rgb(196, 111, 255);
        transform: scale(1.05);
      }
    }
    
    .push-animation {
      animation: pushDown 0.8s ease-out;
    }
    
    .pop-animation {
      animation: popUp 0.8s ease-out;
    }
    
    .top-element {
      animation: highlightTop 2s ease-in-out infinite;
    }
  `;

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stackArray, setStackArray] = useState([10, 20, 30]);
  const [top, setTop] = useState(2);
  const [operation, setOperation] = useState<StackOperation>('none');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [newValue, setNewValue] = useState(40);

  const initialStack = [10, 20, 30];
  
  const steps: Step[] = [
    { 
      step: 1, 
      array: [10, 20, 30],
      top: 2,
      operation: 'init',
      currentLine: 2,
      description: '📋 Initialize: Create an array to hold stack elements and initialize top = -1 (empty stack).'
    },
    { 
      step: 2, 
      array: [10, 20, 30],
      top: 2,
      operation: 'init',
      currentLine: 3,
      description: '📋 Array Setup: We use array[0..n-1] where top points to the last element. Initially top = -1 means empty.'
    },
    { 
      step: 3, 
      array: [10, 20, 30],
      top: 2,
      operation: 'push-check',
      currentLine: 6,
      description: '🔍 Push Check: Is stack full? top (2) < capacity-1? Yes! We have space, continue with push operation.'
    },
    { 
      step: 4, 
      array: [10, 20, 30, 40],
      top: 3,
      operation: 'push-increment',
      currentLine: 7,
      description: '⬆️ Increment Top: Move top pointer from 2 to 3 to make space for new element at array[3].'
    },
    { 
      step: 5, 
      array: [10, 20, 30, 40],
      top: 3,
      operation: 'push-insert',
      currentLine: 8,
      description: '➕ Insert Element: Place value 40 at array[top] = array[3]. Stack now has 4 elements!'
    },
    { 
      step: 6, 
      array: [10, 20, 30, 40],
      top: 3,
      operation: 'push-complete',
      currentLine: 9,
      description: '✅ Push Complete: Successfully added 40 to stack. Top element is now 40 (array[3]).'
    },
    { 
      step: 7, 
      array: [10, 20, 30, 40],
      top: 3,
      operation: 'pop-check',
      currentLine: 13,
      description: '🔍 Pop Check: Is stack empty? top (3) === -1? No! Stack has elements, continue with pop.'
    },
    { 
      step: 8, 
      array: [10, 20, 30, 40],
      top: 3,
      operation: 'pop-store',
      currentLine: 14,
      description: '💾 Store Top: Save array[top] = array[3] = 40 in temp variable to return after removal.'
    },
    { 
      step: 9, 
      array: [10, 20, 30, 40],
      top: 2,
      operation: 'pop-decrement',
      currentLine: 15,
      description: '⬇️ Decrement Top: Move top pointer from 3 to 2, effectively removing 40 from stack.'
    },
    { 
      step: 10, 
      array: [10, 20, 30],
      top: 2,
      operation: 'pop-complete',
      currentLine: 16,
      description: '✅ Pop Complete: Successfully removed 40. Stack now has 3 elements, top = 30 (array[2]).'
    },
    { 
      step: 11, 
      array: [10, 20, 30],
      top: 2,
      operation: 'peek-check',
      currentLine: 20,
      description: '🔍 Peek Check: Is stack empty? top (2) === -1? No! Stack has elements, continue with peek.'
    },
    { 
      step: 12, 
      array: [10, 20, 30],
      top: 2,
      operation: 'peek-return',
      currentLine: 21,
      description: '👁️ Return Top: Return array[top] = array[2] = 30 without removing it. Top pointer stays at 2.'
    },
    { 
      step: 13, 
      array: [10, 20, 30],
      top: 2,
      operation: 'peek-complete',
      currentLine: 22,
      description: '✅ Peek Complete: Successfully viewed top element 30. Stack remains unchanged with top = 30.'
    }
  ];

  const stackImplementationCode = `class Stack {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.top = -1; // Initialize top to -1 (empty stack)
    this.capacity = capacity;
  }

  // Push operation: Add element to top of stack
  push(value) {
    // Check if stack is full
    if (this.top === this.capacity - 1) {
      console.log("Stack Overflow");
      return;
    }
    
    // Increment top pointer
    this.top++;
    
    // Insert element at top position
    this.array[this.top] = value;
    
    console.log(\`Pushed \${value} to stack\`);
  }

  // Pop operation: Remove and return top element
  pop() {
    // Check if stack is empty
    if (this.top === -1) {
      console.log("Stack Underflow");
      return -1;
    }
    
    // Store top element to return
    const value = this.array[this.top];
    
    // Decrement top pointer
    this.top--;
    
    return value;
  }

  // Peek operation: Return top element without removing
  peek() {
    // Check if stack is empty
    if (this.top === -1) {
      console.log("Stack is empty");
      return -1;
    }
    
    // Return top element
    return this.array[this.top];
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Check if stack is full
  isFull() {
    return this.top === this.capacity - 1;
  }

  // Get current size of stack
  size() {
    return this.top + 1;
  }
}

// Usage example
const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());   // 30
console.log(stack.peek());  // 20
console.log(stack.size());  // 2`;

  const getCodeWithValues = (stepData: Step) => {
    const arr = stepData.array;
    const top = stepData.top;
    
    return [
      { line: 1, code: 'class Stack {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  constructor(capacity) {', active: stepData.currentLine === 2, indent: 1 },
      { line: 3, code: '    this.array = new Array(capacity);', active: false, indent: 2 },
      { line: 4, code: `    this.top = -1;`, active: stepData.currentLine === 2, indent: 2, values: stepData.currentLine === 2 ? `top = ${top}` : '' },
      { line: 5, code: '  }', active: false, indent: 1 },
      { line: 6, code: '', active: false, indent: 0 },
      { line: 7, code: '  push(value) {', active: stepData.currentLine >= 6 && stepData.currentLine <= 9, indent: 1 },
      { line: 8, code: '    if (this.top === this.capacity - 1) {', active: stepData.currentLine === 6, indent: 2, values: stepData.currentLine === 6 ? `${top} < 4 = ✓` : '' },
      { line: 9, code: '      return "Stack Overflow";', active: stepData.currentLine === 6, indent: 3 },
      { line: 10, code: '    }', active: stepData.currentLine === 6, indent: 2 },
      { line: 11, code: `    this.top++;`, active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `top = ${top}` : '' },
      { line: 12, code: `    this.array[this.top] = value;`, active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `array[${top}] = ${arr[top]}` : '' },
      { line: 13, code: '  }', active: stepData.currentLine === 9, indent: 1 },
      { line: 14, code: '', active: false, indent: 0 },
      { line: 15, code: '  pop() {', active: stepData.currentLine >= 13 && stepData.currentLine <= 16, indent: 1 },
      { line: 16, code: '    if (this.top === -1) {', active: stepData.currentLine === 13, indent: 2, values: stepData.currentLine === 13 ? `${top} > -1 = ✓` : '' },
      { line: 17, code: '      return "Stack Underflow";', active: stepData.currentLine === 13, indent: 3 },
      { line: 18, code: '    }', active: stepData.currentLine === 13, indent: 2 },
      { line: 19, code: `    const value = this.array[this.top];`, active: stepData.currentLine === 14, indent: 2, values: stepData.currentLine === 14 ? `value = ${arr[top + 1]}` : '' },
      { line: 20, code: `    this.top--;`, active: stepData.currentLine === 15, indent: 2, values: stepData.currentLine === 15 ? `top = ${top}` : '' },
      { line: 21, code: '    return value;', active: stepData.currentLine === 16, indent: 2 },
      { line: 22, code: '  }', active: stepData.currentLine === 16, indent: 1 },
      { line: 23, code: '', active: false, indent: 0 },
      { line: 24, code: '  peek() {', active: stepData.currentLine >= 20 && stepData.currentLine <= 22, indent: 1 },
      { line: 25, code: '    if (this.top === -1) {', active: stepData.currentLine === 20, indent: 2, values: stepData.currentLine === 20 ? `${top} > -1 = ✓` : '' },
      { line: 26, code: '      return "Stack is empty";', active: stepData.currentLine === 20, indent: 3 },
      { line: 27, code: '    }', active: stepData.currentLine === 20, indent: 2 },
      { line: 28, code: `    return this.array[this.top];`, active: stepData.currentLine === 21, indent: 2, values: stepData.currentLine === 21 ? `return ${arr[top]}` : '' },
      { line: 29, code: '  }', active: stepData.currentLine === 22, indent: 1 },
      { line: 30, code: '', active: false, indent: 0 },
      { line: 31, code: '  isEmpty() {', active: false, indent: 1 },
      { line: 32, code: '    return this.top === -1;', active: false, indent: 2 },
      { line: 33, code: '  }', active: false, indent: 1 },
      { line: 34, code: '', active: false, indent: 0 },
      { line: 35, code: '  isFull() {', active: false, indent: 1 },
      { line: 36, code: '    return this.top === this.capacity - 1;', active: false, indent: 2 },
      { line: 37, code: '  }', active: false, indent: 1 },
      { line: 38, code: '', active: false, indent: 0 },
      { line: 39, code: '  size() {', active: false, indent: 1 },
      { line: 40, code: '    return this.top + 1;', active: false, indent: 2 },
      { line: 41, code: '  }', active: false, indent: 1 },
      { line: 42, code: '}', active: false, indent: 0 }
    ];
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setStackArray([...initialStack]);
    setTop(2);

    const speedMap = { slow: 2000, normal: 1200, fast: 600 };
    const delay = speedMap[animationSpeed];

    steps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (steps[index].array) {
          setStackArray([...steps[index].array]);
        }
        if (steps[index].top !== undefined) {
          setTop(steps[index].top);
        }
        setOperation(steps[index].operation);
        
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnimating(false), delay);
        }
      }, index * delay);
    });
  };

  const handleReset = () => {
    setCurrentStep(0);
    setStackArray([...initialStack]);
    setTop(2);
    setOperation('none');
    setIsAnimating(false);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      setStackArray([...steps[newStep].array]);
      setTop(steps[newStep].top);
      setOperation(steps[newStep].operation);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      setStackArray([...steps[newStep].array]);
      setTop(steps[newStep].top);
      setOperation(steps[newStep].operation);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setStackArray([...steps[stepIndex].array]);
    setTop(steps[stepIndex].top);
    setOperation(steps[stepIndex].operation);
  };

  return (
    <div className="space-y-8">
      <style jsx>{stackStyles}</style>
      <PageHeader
        icon={Layers}
        category="DSA · Stacks"
        title="Implement Stack Using Arrays"
        description="Learn how to implement a stack data structure using arrays with push, pop, and peek operations"
        colorTheme="purple"
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
      <Card className="border-purple-200 dark:border-purple-800">
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
                <p className="font-medium">Array-Based Stack</p>
                <p className="text-sm text-muted-foreground">Use arrays to implement stack</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Top Pointer Management</p>
                <p className="text-sm text-muted-foreground">Track top element efficiently</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Push/Pop Operations</p>
                <p className="text-sm text-muted-foreground">Add and remove elements</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">LIFO Principle</p>
                <p className="text-sm text-muted-foreground">Last In, First Out</p>
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
          <CardDescription>Understanding what we need to implement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Implement a stack data structure using an array with push, pop, peek, and other essential operations.
          </p>

          {/* Stack Operations Overview */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> Stack Operations
            </h4>
            
            <div className="space-y-4">
              {/* Push Operation */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">Push Operation:</p>
                <div className="flex items-center justify-center gap-2">
                  {[10, 20, 30].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 border-2 border-purple-400 dark:border-purple-600 rounded-lg flex items-center justify-center font-bold text-lg text-purple-900 dark:text-purple-100">
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center">
                    <Plus className="w-6 h-6 text-purple-600" />
                    <span className="text-xs text-slate-500 mt-1">push(40)</span>
                  </div>
                  <div className="flex flex-col items-center opacity-50">
                    <div className="w-14 h-14 bg-purple-200 dark:bg-purple-800 border-2 border-purple-400 dark:border-purple-600 rounded-lg flex items-center justify-center font-bold text-lg text-purple-900 dark:text-purple-100 border-dashed">
                      40
                    </div>
                    <span className="text-xs text-slate-500 mt-1">[3]</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <ArrowDown className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto animate-bounce" />
              </div>

              {/* After Push */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">After Push:</p>
                <div className="flex items-center justify-center gap-2">
                  {[10, 20, 30, 40].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-green-100 dark:bg-green-900 border-2 border-green-500 dark:border-green-600 rounded-lg flex items-center justify-center font-bold text-lg text-green-900 dark:text-green-100">
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                      {idx === 3 && (
                        <span className="text-xs font-bold text-green-600 mt-1">TOP</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Array Implementation Strategy */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🗄️</span> Array Implementation Strategy
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[10, 20, 30, 40].map((num, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-400">[{idx}]</div>
                    {idx === 3 && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400">TOP</div>
                    )}
                    <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                      idx === 3
                        ? 'bg-purple-100 dark:bg-purple-900 border-purple-500 text-purple-900 dark:text-purple-100 scale-110'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}>
                      {num}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="text-2xl">📍</div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Top pointer at index 3</span>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-600">
                <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  <strong>Operations:</strong> push() → top++, pop() → top--, peek() → array[top]
                </p>
              </div>
            </div>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-purple-300 dark:border-purple-600">
                <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Push/Pop/Peek</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">O(1)</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Constant time</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-purple-300 dark:border-purple-600">
                <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">O(n)</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Array size n</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-purple-600" />
            Animation Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-sm capitalize">{speed}</span>
              </label>
            ))}
          </div>

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
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the stack operations work step-by-step with array implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            {/* Code Viewer with Variable Values */}
            {currentStep >= 0 && (
              <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">stack-implementation.js</span>
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
                        <span className="text-slate-500 dark:text-slate-400">top:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{top}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">size:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{top + 1}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">array:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">[{stackArray.slice(0, top + 1).join(', ')}]</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stack Visualization */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-lg border border-purple-300 dark:border-purple-700">
              <div className="space-y-6">
                {/* Current Operation Display */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
                    {steps[currentStep].operation.replace('-', ' ').toUpperCase()}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {steps[currentStep].description}
                  </p>
                </div>

                {/* Array Implementation */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Array Implementation:</p>
                  <div className="flex items-center justify-center gap-3">
                    {stackArray.map((value, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div
                          className={`w-16 h-12 flex items-center justify-center rounded border-2 font-mono text-sm font-bold transition-all duration-500 ${
                            index === top
                              ? 'bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-800 dark:to-amber-800 border-4 border-orange-500 dark:border-orange-400 shadow-2xl shadow-orange-500/60'
                              : index <= top
                              ? 'bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 border-purple-400'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-300 border-dashed'
                          } ${
                            operation === 'push-insert' && index === top ? 'push-animation' :
                            operation === 'pop-decrement' && index === top + 1 ? 'pop-animation' : ''
                          }`}
                        >
                          {index <= top ? value : ''}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">[{index}]</div>
                        {index === top && (
                          <div className="flex items-center gap-1">
                            <ArrowDown className="w-4 h-4 text-purple-600" />
                            <span className="text-xs font-bold text-purple-600">TOP</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack View */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Stack View (LIFO):</p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex flex-col items-center gap-2">
                      {stackArray.slice().reverse().map((value, index) => {
                        const actualIndex = stackArray.length - 1 - index;
                        return (
                          <div key={actualIndex} className="flex items-center gap-2">
                            <div
                              className={`w-16 h-12 flex items-center justify-center rounded border-2 font-mono text-sm font-bold transition-all duration-500 ${
                                actualIndex === top
                                  ? 'bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-800 dark:to-amber-800 border-4 border-orange-500 dark:border-orange-400 shadow-2xl shadow-orange-500/60'
                                  : 'bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 border-purple-400'
                              } ${
                                operation === 'push-insert' && actualIndex === top ? 'push-animation' :
                                operation === 'pop-decrement' && actualIndex === top + 1 ? 'pop-animation' : ''
                              }`}
                            >
                              {value}
                            </div>
                            {actualIndex === top && (
                              <span className="text-xs font-bold text-purple-600">← TOP</span>
                            )}
                          </div>
                        );
                      })}
                      <div className="border-t-2 border-purple-400 pt-2 w-16 text-center">
                        <div className="text-xs text-slate-600 dark:text-slate-400">BOTTOM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Implementation */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>
            Full JavaScript implementation of stack using arrays
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet 
            code={stackImplementationCode}
            language="javascript"
            title="Stack Implementation Using Arrays"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="border-green-200 dark:border-green-800">
        <CheckCircle className="w-4 h-4" />
        <AlertTitle>Ready for More?</AlertTitle>
        <AlertDescription>
          Now that you understand stack implementation using arrays, try implementing two stacks in one array or get minimum element in O(1) time!
        </AlertDescription>
      </Alert>
    </div>
  );
}
