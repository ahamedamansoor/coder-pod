'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CodeSnippet } from '@/components/shared';
import { Layers, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, RefreshCw, ChevronLeft, ChevronRight, ArrowDown, ArrowUp, Plus, Minus } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function TwoStacksOneArray() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [arrayState, setArrayState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [top1, setTop1] = useState(-1);
  const [top2, setTop2] = useState(10);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const initialArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const capacity = 10;

  type Step = {
    step: number;
    operation: 'push1' | 'push2' | 'pop1' | 'pop2' | 'init';
    value?: number;
    array: number[];
    top1: number;
    top2: number;
    currentLine: number;
    description: string;
  };

  const steps: Step[] = [
    { 
      step: 1, 
      operation: 'init',
      array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      top1: -1,
      top2: 10,
      currentLine: 1,
      description: '🏗️ Initialize: Set top1 = -1 (empty Stack 1) and top2 = 10 (empty Stack 2). Both stacks share the same array of capacity 10.'
    },
    { 
      step: 2, 
      operation: 'push1',
      value: 10,
      array: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      top1: 0,
      top2: 10,
      currentLine: 2,
      description: '➕ Push 10 to Stack 1: Check space (0 < 9 ✓), move top1 from -1→0, store 10 at array[0]. Stack 1 now has [10].'
    },
    { 
      step: 3, 
      operation: 'push2',
      value: 20,
      array: [10, 0, 0, 0, 0, 0, 0, 0, 0, 20],
      top1: 0,
      top2: 9,
      currentLine: 3,
      description: '➕ Push 20 to Stack 2: Check space (0 < 8 ✓), move top2 from 10→9, store 20 at array[9]. Stack 2 now has [20].'
    },
    { 
      step: 4, 
      operation: 'push1',
      value: 30,
      array: [10, 30, 0, 0, 0, 0, 0, 0, 0, 20],
      top1: 1,
      top2: 9,
      currentLine: 2,
      description: '➕ Push 30 to Stack 1: Check space (1 < 8 ✓), move top1 from 0→1, store 30 at array[1]. Stack 1: [10, 30].'
    },
    { 
      step: 5, 
      operation: 'push2',
      value: 40,
      array: [10, 30, 0, 0, 0, 0, 0, 0, 40, 20],
      top1: 1,
      top2: 8,
      currentLine: 3,
      description: '➕ Push 40 to Stack 2: Check space (1 < 7 ✓), move top2 from 9→8, store 40 at array[8]. Stack 2: [20, 40].'
    },
    { 
      step: 6, 
      operation: 'push1',
      value: 50,
      array: [10, 30, 50, 0, 0, 0, 0, 0, 40, 20],
      top1: 2,
      top2: 8,
      currentLine: 2,
      description: '➕ Push 50 to Stack 1: Check space (2 < 7 ✓), move top1 from 1→2, store 50 at array[2]. Stack 1: [10, 30, 50].'
    },
    { 
      step: 7, 
      operation: 'push2',
      value: 60,
      array: [10, 30, 50, 0, 0, 0, 0, 60, 40, 20],
      top1: 2,
      top2: 7,
      currentLine: 3,
      description: '➕ Push 60 to Stack 2: Check space (2 < 6 ✓), move top2 from 8→7, store 60 at array[7]. Stack 2: [20, 40, 60].'
    },
    { 
      step: 8, 
      operation: 'push1',
      value: 70,
      array: [10, 30, 50, 70, 0, 0, 0, 60, 40, 20],
      top1: 3,
      top2: 7,
      currentLine: 2,
      description: '➕ Push 70 to Stack 1: Check space (3 < 6 ✓), move top1 from 2→3, store 70 at array[3]. Stack 1: [10, 30, 50, 70].'
    },
    { 
      step: 9, 
      operation: 'push2',
      value: 80,
      array: [10, 30, 50, 70, 0, 0, 80, 60, 40, 20],
      top1: 3,
      top2: 6,
      currentLine: 3,
      description: '➕ Push 80 to Stack 2: Check space (3 < 5 ✓), move top2 from 7→6, store 80 at array[6]. Stack 2: [20, 40, 60, 80].'
    },
    { 
      step: 10, 
      operation: 'push1',
      value: 90,
      array: [10, 30, 50, 70, 90, 0, 80, 60, 40, 20],
      top1: 4,
      top2: 6,
      currentLine: 2,
      description: '➕ Push 90 to Stack 1: Check space (4 < 5 ✓), move top1 from 3→4, store 90 at array[4]. Stack 1: [10, 30, 50, 70, 90].'
    },
    { 
      step: 11, 
      operation: 'push2',
      value: 100,
      array: [10, 30, 50, 70, 90, 100, 80, 60, 40, 20],
      top1: 4,
      top2: 5,
      currentLine: 3,
      description: '➕ Push 100 to Stack 2: Check space (4 < 4 ✗). Stack Overflow! Pointers meet, no space left. Array is full.'
    },
    { 
      step: 12, 
      operation: 'pop1',
      array: [10, 30, 50, 70, 0, 100, 80, 60, 40, 20],
      top1: 3,
      top2: 5,
      currentLine: 4,
      description: '➖ Pop from Stack 1: Get 90 from array[4], move top1 from 4→3, return 90. Stack 1: [10, 30, 50, 70].'
    },
    { 
      step: 13, 
      operation: 'pop2',
      array: [10, 30, 50, 70, 0, 0, 80, 60, 40, 20],
      top1: 3,
      top2: 6,
      currentLine: 5,
      description: '➖ Pop from Stack 2: Get 100 from array[5], move top2 from 5→6, return 100. Stack 2: [20, 40, 60, 80].'
    },
    { 
      step: 14, 
      operation: 'push2',
      value: 110,
      array: [10, 30, 50, 70, 0, 110, 80, 60, 40, 20],
      top1: 3,
      top2: 5,
      currentLine: 3,
      description: '➕ Push 110 to Stack 2: Space available (3 < 4 ✓), move top2 from 6→5, store 110 at array[5]. Stack 2: [20, 40, 60, 80, 110].'
    },
    { 
      step: 15, 
      operation: 'push1',
      value: 120,
      array: [10, 30, 50, 70, 120, 110, 80, 60, 40, 20],
      top1: 4,
      top2: 5,
      currentLine: 2,
      description: '➕ Push 120 to Stack 1: Space available (4 < 4 ✗). Stack Overflow! No space between stacks again.'
    },
    { 
      step: 16, 
      operation: 'pop1',
      array: [10, 30, 50, 70, 0, 110, 80, 60, 40, 20],
      top1: 3,
      top2: 5,
      currentLine: 4,
      description: '➖ Pop from Stack 1: Get 120 from array[4], move top1 from 4→3, return 120. Stack 1: [10, 30, 50, 70].'
    },
    { 
      step: 17, 
      operation: 'pop1',
      array: [10, 30, 50, 0, 0, 110, 80, 60, 40, 20],
      top1: 2,
      top2: 5,
      currentLine: 4,
      description: '➖ Pop from Stack 1: Get 70 from array[3], move top1 from 3→2, return 70. Stack 1: [10, 30, 50].'
    },
    { 
      step: 18, 
      operation: 'push1',
      value: 130,
      array: [10, 30, 50, 130, 0, 110, 80, 60, 40, 20],
      top1: 3,
      top2: 5,
      currentLine: 2,
      description: '➕ Push 130 to Stack 1: Space available (3 < 4 ✓), move top1 from 2→3, store 130 at array[3]. Stack 1: [10, 30, 50, 130].'
    },
    { 
      step: 19, 
      operation: 'pop2',
      array: [10, 30, 50, 130, 0, 0, 80, 60, 40, 20],
      top1: 3,
      top2: 6,
      currentLine: 5,
      description: '➖ Pop from Stack 2: Get 110 from array[5], move top2 from 5→6, return 110. Stack 2: [20, 40, 60, 80].'
    },
    { 
      step: 20, 
      operation: 'push2',
      value: 140,
      array: [10, 30, 50, 130, 0, 140, 80, 60, 40, 20],
      top1: 3,
      top2: 5,
      currentLine: 3,
      description: '➕ Push 140 to Stack 2: Space available (3 < 4 ✓), move top2 from 6→5, store 140 at array[5]. Stack 2: [20, 40, 60, 80, 140].'
    },
    { 
      step: 21, 
      operation: 'pop1',
      array: [10, 30, 50, 0, 0, 140, 80, 60, 40, 20],
      top1: 2,
      top2: 5,
      currentLine: 4,
      description: '➖ Pop from Stack 1: Get 130 from array[3], move top1 from 3→2, return 130. Stack 1: [10, 30, 50].'
    },
    { 
      step: 22, 
      operation: 'pop2',
      array: [10, 30, 50, 0, 0, 0, 80, 60, 40, 20],
      top1: 2,
      top2: 6,
      currentLine: 5,
      description: '➖ Pop from Stack 2: Get 140 from array[5], move top2 from 5→6, return 140. Stack 2: [20, 40, 60, 80].'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = stepData.array;
    const t1 = stepData.top1;
    const t2 = stepData.top2;
    const op = stepData.operation;
    const val = stepData.value;
    
    return [
      { line: 1, code: 'class TwoStacks {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  constructor(capacity) {', active: stepData.currentLine === 1, indent: 1 },
      { line: 3, code: '    this.array = new Array(capacity);', active: false, indent: 2, values: `[${arr.join(', ')}]` },
      { line: 4, code: `    this.top1 = -1;`, active: stepData.currentLine === 1, indent: 2, values: `top1 = ${t1}` },
      { line: 5, code: `    this.top2 = capacity;`, active: stepData.currentLine === 1, indent: 2, values: `top2 = ${t2}` },
      { line: 6, code: '  }', active: false, indent: 1 },
      { line: 7, code: '', active: false, indent: 0 },
      { line: 8, code: '  // Push to Stack 1 (left side)', active: false, indent: 0, values: op === 'push1' ? `push1(${val})` : 'Example: ts.push1(10)' },
      { line: 9, code: '  push1(value) {', active: stepData.currentLine === 2, indent: 1 },
      { line: 10, code: '    if (this.top1 < this.top2 - 1) {', active: stepData.currentLine === 2, indent: 2, values: stepData.currentLine === 2 ? `${t1} < ${t2 - 1} = ${t1 < t2 - 1 ? '✓' : '✗'}` : '' },
      { line: 11, code: '      this.top1++;', active: stepData.currentLine === 2, indent: 2, values: stepData.currentLine === 2 && op === 'push1' ? `top1 = ${t1}` : '' },
      { line: 12, code: `      this.array[this.top1] = value;`, active: stepData.currentLine === 2, indent: 2, values: stepData.currentLine === 2 && op === 'push1' ? `array[${t1}] = ${val}` : '' },
      { line: 13, code: '    } else {', active: false, indent: 2 },
      { line: 14, code: '      return "Stack Overflow";', active: false, indent: 3, values: stepData.currentLine === 2 && op === 'push1' && !(t1 < t2 - 1) ? 'OVERFLOW!' : '' },
      { line: 15, code: '    }', active: false, indent: 2 },
      { line: 16, code: '  }', active: stepData.currentLine === 2, indent: 1 },
      { line: 17, code: '', active: false, indent: 0 },
      { line: 18, code: '  // Push to Stack 2 (right side)', active: false, indent: 0, values: op === 'push2' ? `push2(${val})` : 'Example: ts.push2(20)' },
      { line: 19, code: '  push2(value) {', active: stepData.currentLine === 3, indent: 1 },
      { line: 20, code: '    if (this.top1 < this.top2 - 1) {', active: stepData.currentLine === 3, indent: 2, values: stepData.currentLine === 3 ? `${t1} < ${t2 - 1} = ${t1 < t2 - 1 ? '✓' : '✗'}` : '' },
      { line: 21, code: '      this.top2--;', active: stepData.currentLine === 3, indent: 2, values: stepData.currentLine === 3 && op === 'push2' ? `top2 = ${t2}` : '' },
      { line: 22, code: `      this.array[this.top2] = value;`, active: stepData.currentLine === 3, indent: 2, values: stepData.currentLine === 3 && op === 'push2' ? `array[${t2}] = ${val}` : '' },
      { line: 23, code: '    } else {', active: false, indent: 2 },
      { line: 24, code: '      return "Stack Overflow";', active: false, indent: 3, values: stepData.currentLine === 3 && op === 'push2' && !(t1 < t2 - 1) ? 'OVERFLOW!' : '' },
      { line: 25, code: '    }', active: false, indent: 2 },
      { line: 26, code: '  }', active: stepData.currentLine === 3, indent: 1 },
      { line: 27, code: '', active: false, indent: 0 },
      { line: 28, code: '  // Pop from Stack 1', active: false, indent: 0, values: op === 'pop1' ? 'pop1()' : 'Example: let val = ts.pop1()' },
      { line: 29, code: '  pop1() {', active: stepData.currentLine === 4, indent: 1 },
      { line: 30, code: '    if (this.top1 >= 0) {', active: stepData.currentLine === 4, indent: 2, values: stepData.currentLine === 4 ? `${t1 + 1} >= 0 = ✓` : '' },
      { line: 31, code: `      const value = this.array[this.top1];`, active: stepData.currentLine === 4, indent: 2, values: stepData.currentLine === 4 && op === 'pop1' ? `value = ${arr[t1 + 1]}` : '' },
      { line: 32, code: '      this.top1--;', active: stepData.currentLine === 4, indent: 2, values: stepData.currentLine === 4 && op === 'pop1' ? `top1 = ${t1}` : '' },
      { line: 33, code: '      return value;', active: stepData.currentLine === 4, indent: 2, values: stepData.currentLine === 4 && op === 'pop1' ? `return ${arr[t1 + 1]}` : '' },
      { line: 34, code: '    } else {', active: false, indent: 2 },
      { line: 35, code: '      return "Stack Underflow";', active: false, indent: 3, values: op === 'pop1' && t1 === -1 ? 'UNDERFLOW!' : '' },
      { line: 36, code: '    }', active: false, indent: 2 },
      { line: 37, code: '  }', active: stepData.currentLine === 4, indent: 1 },
      { line: 38, code: '', active: false, indent: 0 },
      { line: 39, code: '  // Pop from Stack 2', active: false, indent: 0, values: op === 'pop2' ? 'pop2()' : 'Example: let val = ts.pop2()' },
      { line: 40, code: '  pop2() {', active: stepData.currentLine === 5, indent: 1 },
      { line: 41, code: '    if (this.top2 < this.capacity) {', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 ? `${t2} < 10 = ✓` : '' },
      { line: 42, code: `      const value = this.array[this.top2];`, active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 && op === 'pop2' ? `value = ${arr[t2 - 1]}` : '' },
      { line: 43, code: '      this.top2++;', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 && op === 'pop2' ? `top2 = ${t2}` : '' },
      { line: 44, code: '      return value;', active: stepData.currentLine === 5, indent: 2, values: stepData.currentLine === 5 && op === 'pop2' ? `return ${arr[t2 - 1]}` : '' },
      { line: 45, code: '    } else {', active: false, indent: 2 },
      { line: 46, code: '      return "Stack Underflow";', active: false, indent: 3, values: op === 'pop2' && t2 === 10 ? 'UNDERFLOW!' : '' },
      { line: 47, code: '    }', active: false, indent: 2 },
      { line: 48, code: '  }', active: stepData.currentLine === 5, indent: 1 },
      { line: 49, code: '}', active: false, indent: 0 }
    ];
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setArrayState([...initialArray]);
    setTop1(-1);
    setTop2(10);

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
    setArrayState([...step.array]);
    setTop1(step.top1);
    setTop2(step.top2);
  };

  const currentStepData = steps[currentStep];

  const twoStacksImplementationCode = `class TwoStacks {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.top1 = -1;           // Stack 1 starts from left
    this.top2 = capacity;      // Stack 2 starts from right
  }

  // Push to Stack 1 (grows right)
  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.array[this.top1] = value;
    } else {
      return "Stack Overflow";
    }
  }

  // Push to Stack 2 (grows left)
  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.array[this.top2] = value;
    } else {
      return "Stack Overflow";
    }
  }

  // Pop from Stack 1
  pop1() {
    if (this.top1 >= 0) {
      const value = this.array[this.top1];
      this.top1--;
      return value;
    } else {
      return "Stack Underflow";
    }
  }

  // Pop from Stack 2
  pop2() {
    if (this.top2 < this.capacity) {
      const value = this.array[this.top2];
      this.top2++;
      return value;
    } else {
      return "Stack Underflow";
    }
  }

  // Check if Stack 1 is empty
  isEmpty1() {
    return this.top1 === -1;
  }

  // Check if Stack 2 is empty
  isEmpty2() {
    return this.top2 === this.capacity;
  }

  // Get size of Stack 1
  size1() {
    return this.top1 + 1;
  }

  // Get size of Stack 2
  size2() {
    return this.capacity - this.top2;
  }
}`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="DSA · Stacks"
        title="Two Stacks in One Array"
        description="Master space-efficient implementation of two stacks sharing a single array"
        colorTheme="purple"
      />
      
      <div className="w-full flex flex-wrap items-center justify-center gap-2 px-4">
        {['Stack Design', 'Space: O(n)', 'Time: O(1)', 'Medium'].map((badge, index) => (
          <Badge
            key={`${badge}-${index}`}
            variant={index === 0 ? 'secondary' : 'outline'}
            className="text-sm"
          >
            {badge}
          </Badge>
        ))}
      </div>

      {/* The Problem */}
      <Card className="w-full mx-4 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding what we need to solve</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Implement two stacks in a single array. Stack 1 grows from left to right (starting at index 0), 
            while Stack 2 grows from right to left (starting at the last index). This space-efficient approach 
            allows two stacks to share the same array without wasting memory.
          </p>

          {/* Before and After */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> Space-Efficient Design
            </h4>
            
            <div className="space-y-4">
              {/* Traditional Approach */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">Traditional Approach (Wasted Space):</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">Stack 1</p>
                    <div className="flex items-center justify-center gap-1">
                      {[10, 30, 0, 0, 0].map((num, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 border border-purple-400 dark:border-purple-600 rounded flex items-center justify-center font-bold text-xs text-purple-900 dark:text-purple-100">
                            {num !== 0 ? num : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-2xl text-slate-400">+</div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">Stack 2</p>
                    <div className="flex items-center justify-center gap-1">
                      {[20, 40, 0, 0, 0].map((num, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 border border-blue-400 dark:border-blue-600 rounded flex items-center justify-center font-bold text-xs text-blue-900 dark:text-blue-100">
                            {num !== 0 ? num : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <ArrowDown className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto" />
              </div>

              {/* Efficient Approach */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Efficient Approach (Shared Array):</p>
                <div className="flex items-center justify-center gap-1">
                  {[10, 30, 0, 0, 0, 0, 0, 0, 40, 20].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-8 h-8 border-2 rounded flex items-center justify-center font-bold text-xs ${
                        idx <= 1 ? 'bg-purple-100 dark:bg-purple-900 border-purple-400 dark:border-purple-600 text-purple-900 dark:text-purple-100' :
                        idx >= 8 ? 'bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-100' :
                        'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-400'
                      }`}>
                        {num !== 0 ? num : ''}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <ArrowDown className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-bold text-purple-600">Stack 1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowDown className="w-3 h-3 text-blue-600" />
                    <span className="text-xs font-bold text-blue-600">Stack 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Stacks Strategy */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔄</span> Two-Stacks Strategy
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 text-center">Stack 1 (Left → Right)</h5>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[10, 30, 0, 0, 0].map((num, idx) => (
                      <div key={idx} className="relative">
                        {idx === 1 && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400">TOP1</div>
                        )}
                        <div className={`w-10 h-10 rounded flex items-center justify-center font-bold border-2 ${
                          idx <= 1
                            ? 'bg-purple-100 dark:bg-purple-900 border-purple-500 text-purple-900 dark:text-purple-100 scale-110'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                        }`}>
                          {num !== 0 ? num : ''}
                        </div>
                        <span className="text-xs text-slate-500 mt-1 text-center block">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    Grows from index 0 towards right
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 text-center">Stack 2 (Right → Left)</h5>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[0, 0, 0, 0, 0].map((num, idx) => (
                      <div key={idx} className="relative">
                        {idx === 3 && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400">TOP2</div>
                        )}
                        <div className={`w-10 h-10 rounded flex items-center justify-center font-bold border-2 ${
                          idx >= 3
                            ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100 scale-110'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                        }`}>
                          {num !== 0 ? num : ''}
                        </div>
                        <span className="text-xs text-slate-500 mt-1 text-center block">[{idx + 5}]</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    Grows from last index towards left
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="text-2xl">🤝</div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Meet in the middle!</span>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-700">
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                  ⚠️ Overflow Condition: top1 + 1 == top2
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                  When the two pointers meet, there's no space left!
                </p>
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
          <CardDescription>Watch two stacks share a single array efficiently</CardDescription>
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
                      className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-purple-800 dark:text-purple-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-purple-800 dark:text-purple-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-purple-800 dark:text-purple-200">Fast</span>
                  </label>
                </div>
              </div>

              {/* Stepper Controls */}
              {currentStep >= 0 && (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    onClick={handlePrevious}
                    disabled={isAnimating || currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="border-purple-300 dark:border-purple-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg border border-purple-300 dark:border-purple-700">
                    <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-purple-300 dark:border-purple-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">two-stacks.js</span>
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
                        <span className="text-slate-500 dark:text-slate-400">top1:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{top1}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">top2:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{top2}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">space:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{top2 - top1 - 1}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Two Stacks Visualization */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-lg border border-purple-300 dark:border-purple-700">
              <div className="space-y-6">
                {/* Current Operation Display */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
                    {currentStepData.operation.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    {currentStepData.value && `(${currentStepData.value})`}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {currentStepData.description}
                  </p>
                </div>

                {/* Array with Two Stacks */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Shared Array Visualization:</p>
                  <div className="flex items-center justify-center gap-2">
                    {arrayState.map((value, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div
                          className={`w-14 h-14 flex items-center justify-center rounded border-2 font-mono text-sm font-bold transition-all duration-500 ${
                            index <= top1
                              ? 'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 border-4 border-purple-500 dark:border-purple-400 shadow-lg'
                              : index >= top2
                              ? 'bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 border-4 border-blue-500 dark:border-blue-400 shadow-lg'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-300 border-dashed'
                          } ${
                            (currentStepData.operation === 'push1' && index === top1) || 
                            (currentStepData.operation === 'pop1' && index === top1 + 1) 
                              ? 'scale-110 shadow-2xl'
                              : ''
                          } ${
                            (currentStepData.operation === 'push2' && index === top2) || 
                            (currentStepData.operation === 'pop2' && index === top2 - 1) 
                              ? 'scale-110 shadow-2xl'
                              : ''
                          }`}
                        >
                          {value !== 0 ? value : ''}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">[{index}]</div>
                        {index === top1 && top1 >= 0 && (
                          <div className="flex items-center gap-1">
                            <ArrowDown className="w-3 h-3 text-purple-600" />
                            <span className="text-xs font-bold text-purple-600">TOP1</span>
                          </div>
                        )}
                        {index === top2 && top2 < capacity && (
                          <div className="flex items-center gap-1">
                            <ArrowDown className="w-3 h-3 text-blue-600" />
                            <span className="text-xs font-bold text-blue-600">TOP2</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Views */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Stack 1 View */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 text-center">Stack 1 (Left to Right)</p>
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        {arrayState.slice(0, top1 + 1).reverse().map((value, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-12 h-10 bg-purple-200 dark:bg-purple-800 border-2 border-purple-400 rounded flex items-center justify-center font-mono text-sm font-bold text-purple-900 dark:text-purple-100">
                              {value}
                            </div>
                            {index === 0 && (
                              <span className="text-xs font-bold text-purple-600">← TOP1</span>
                            )}
                          </div>
                        ))}
                        {top1 === -1 && (
                          <div className="text-xs text-slate-500 italic">Empty Stack</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stack 2 View */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 text-center">Stack 2 (Right to Left)</p>
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        {arrayState.slice(top2).reverse().map((value, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-12 h-10 bg-blue-200 dark:bg-blue-800 border-2 border-blue-400 rounded flex items-center justify-center font-mono text-sm font-bold text-blue-900 dark:text-blue-100">
                              {value}
                            </div>
                            {index === 0 && (
                              <span className="text-xs font-bold text-blue-600">← TOP2</span>
                            )}
                          </div>
                        ))}
                        {top2 === capacity && (
                          <div className="text-xs text-slate-500 italic">Empty Stack</div>
                        )}
                      </div>
                    </div>
                  </div>
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
            Full JavaScript implementation of two stacks in one array
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet 
            code={twoStacksImplementationCode}
            language="javascript"
            title="Two Stacks Implementation"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Key Concepts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Space Efficiency</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Two stacks share one array, utilizing space that would otherwise be wasted if each stack had its own array.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Growth Strategy</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Stack 1 grows rightward from index 0, while Stack 2 grows leftward from the last index.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Overflow Condition</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Overflow occurs when top1 + 1 == top2, meaning no space is left between the two stacks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Time Complexity</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  All operations (push, pop, peek) are O(1) as they only involve pointer manipulation.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert className="border-green-200 dark:border-green-800 mx-4">
        <CheckCircle className="w-4 h-4" />
        <AlertTitle>Ready for More?</AlertTitle>
        <AlertDescription>
          Now that you understand two stacks in one array, try implementing three stacks in one array or get minimum element in O(1) time!
        </AlertDescription>
      </Alert>
    </div>
  );
}
