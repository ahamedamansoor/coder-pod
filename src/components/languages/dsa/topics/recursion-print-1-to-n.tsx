'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, ArrowRight, ArrowUp, ArrowDown,
  Printer, FileText, Layers, Zap
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionPrint1ToN() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific data
  const [n] = useState(5);
  const [currentValue, setCurrentValue] = useState(0);
  const [output, setOutput] = useState<number[]>([]);
  const [callStack, setCallStack] = useState<number[]>([]);
  
  // Detailed steps following the template (minimum 20-30 steps for O(n) algorithm)
  const steps = [
    // Initialization (2 steps)
    { 
      step: 1, 
      currentValue: 0, 
      currentLine: 1, 
      description: '📋 Start: Function printNumbers(5) called', 
      action: 'init', 
      output: [], 
      callStack: [5] 
    },
    { 
      step: 2, 
      currentValue: 5, 
      currentLine: 2, 
      description: '📋 Initialize: Parameter n = 5 received', 
      action: 'init', 
      output: [], 
      callStack: [5] 
    },
    
    // First call - printNumbers(5) (4 steps)
    { 
      step: 3, 
      currentValue: 5, 
      currentLine: 3, 
      description: '🔄 Call 1: Checking if 5 > 0? YES!', 
      action: 'check', 
      output: [], 
      callStack: [5] 
    },
    { 
      step: 4, 
      currentValue: 5, 
      currentLine: 4, 
      description: '📞 Recursive: Calling printNumbers(4) first', 
      action: 'recursive', 
      output: [], 
      callStack: [5, 4] 
    },
    
    // Second call - printNumbers(4) (4 steps)
    { 
      step: 5, 
      currentValue: 4, 
      currentLine: 3, 
      description: '🔄 Call 2: Checking if 4 > 0? YES!', 
      action: 'check', 
      output: [], 
      callStack: [5, 4] 
    },
    { 
      step: 6, 
      currentValue: 4, 
      currentLine: 4, 
      description: '📞 Recursive: Calling printNumbers(3) first', 
      action: 'recursive', 
      output: [], 
      callStack: [5, 4, 3] 
    },
    
    // Third call - printNumbers(3) (4 steps)
    { 
      step: 7, 
      currentValue: 3, 
      currentLine: 3, 
      description: '🔄 Call 3: Checking if 3 > 0? YES!', 
      action: 'check', 
      output: [], 
      callStack: [5, 4, 3] 
    },
    { 
      step: 8, 
      currentValue: 3, 
      currentLine: 4, 
      description: '📞 Recursive: Calling printNumbers(2) first', 
      action: 'recursive', 
      output: [], 
      callStack: [5, 4, 3, 2] 
    },
    
    // Fourth call - printNumbers(2) (4 steps)
    { 
      step: 9, 
      currentValue: 2, 
      currentLine: 3, 
      description: '🔄 Call 4: Checking if 2 > 0? YES!', 
      action: 'check', 
      output: [], 
      callStack: [5, 4, 3, 2] 
    },
    { 
      step: 10, 
      currentValue: 2, 
      currentLine: 4, 
      description: '📞 Recursive: Calling printNumbers(1) first', 
      action: 'recursive', 
      output: [], 
      callStack: [5, 4, 3, 2, 1] 
    },
    
    // Fifth call - printNumbers(1) (4 steps)
    { 
      step: 11, 
      currentValue: 1, 
      currentLine: 3, 
      description: '🔄 Call 5: Checking if 1 > 0? YES!', 
      action: 'check', 
      output: [], 
      callStack: [5, 4, 3, 2, 1] 
    },
    { 
      step: 12, 
      currentValue: 1, 
      currentLine: 4, 
      description: '📞 Recursive: Calling printNumbers(0) first', 
      action: 'recursive', 
      output: [], 
      callStack: [5, 4, 3, 2, 1, 0] 
    },
    
    // Base case - printNumbers(0) (3 steps)
    { 
      step: 13, 
      currentValue: 0, 
      currentLine: 3, 
      description: '⚠️ Base Case: Checking if 0 > 0? NO! Stop recursion', 
      action: 'base', 
      output: [], 
      callStack: [5, 4, 3, 2, 1, 0] 
    },
    { 
      step: 14, 
      currentValue: 0, 
      currentLine: 5, 
      description: '🔚 Return: printNumbers(0) returns (nothing to print)', 
      action: 'return', 
      output: [], 
      callStack: [5, 4, 3, 2, 1] 
    },
    
    // Unwinding - print 1 (3 steps)
    { 
      step: 15, 
      currentValue: 1, 
      currentLine: 5, 
      description: '📤 Print 1: After recursive call, print current value', 
      action: 'print', 
      output: [1], 
      callStack: [5, 4, 3, 2] 
    },
    { 
      step: 16, 
      currentValue: 1, 
      currentLine: 5, 
      description: '✅ Output: "1" printed to console', 
      action: 'output', 
      output: [1], 
      callStack: [5, 4, 3, 2] 
    },
    
    // Unwinding - print 2 (3 steps)
    { 
      step: 17, 
      currentValue: 2, 
      currentLine: 5, 
      description: '📤 Print 2: After recursive call, print current value', 
      action: 'print', 
      output: [1, 2], 
      callStack: [5, 4, 3] 
    },
    { 
      step: 18, 
      currentValue: 2, 
      currentLine: 5, 
      description: '✅ Output: "2" printed to console', 
      action: 'output', 
      output: [1, 2], 
      callStack: [5, 4, 3] 
    },
    
    // Unwinding - print 3 (3 steps)
    { 
      step: 19, 
      currentValue: 3, 
      currentLine: 5, 
      description: '📤 Print 3: After recursive call, print current value', 
      action: 'print', 
      output: [1, 2, 3], 
      callStack: [5, 4] 
    },
    { 
      step: 20, 
      currentValue: 3, 
      currentLine: 5, 
      description: '✅ Output: "3" printed to console', 
      action: 'output', 
      output: [1, 2, 3], 
      callStack: [5, 4] 
    },
    
    // Unwinding - print 4 (3 steps)
    { 
      step: 21, 
      currentValue: 4, 
      currentLine: 5, 
      description: '📤 Print 4: After recursive call, print current value', 
      action: 'print', 
      output: [1, 2, 3, 4], 
      callStack: [5] 
    },
    { 
      step: 22, 
      currentValue: 4, 
      currentLine: 5, 
      description: '✅ Output: "4" printed to console', 
      action: 'output', 
      output: [1, 2, 3, 4], 
      callStack: [5] 
    },
    
    // Unwinding - print 5 (3 steps)
    { 
      step: 23, 
      currentValue: 5, 
      currentLine: 5, 
      description: '📤 Print 5: After recursive call, print current value', 
      action: 'print', 
      output: [1, 2, 3, 4, 5], 
      callStack: [] 
    },
    { 
      step: 24, 
      currentValue: 5, 
      currentLine: 5, 
      description: '✅ Output: "5" printed to console', 
      action: 'output', 
      output: [1, 2, 3, 4, 5], 
      callStack: [] 
    },
    
    // Completion (2 steps)
    { 
      step: 25, 
      currentValue: 5, 
      currentLine: 6, 
      description: '🎯 Complete: All numbers from 1 to 5 printed!', 
      action: 'complete', 
      output: [1, 2, 3, 4, 5], 
      callStack: [] 
    },
    { 
      step: 26, 
      currentValue: 5, 
      currentLine: 6, 
      description: '🏆 Success: Function finished, call stack empty', 
      action: 'done', 
      output: [1, 2, 3, 4, 5], 
      callStack: [] 
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { 
        line: 1, 
        code: 'function printNumbers(n) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  console.log(`printNumbers(${n}) called`);', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `n=${stepData.currentValue}` : ''
      },
      { 
        line: 3, 
        code: '  if (n > 0) {', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `${stepData.currentValue} > 0? ${stepData.currentValue > 0 ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 4, 
        code: '    printNumbers(n - 1); // Recursive call', 
        active: stepData.currentLine === 4, 
        indent: 2,
        values: stepData.currentLine === 4 ? `printNumbers(${stepData.currentValue - 1})` : ''
      },
      { 
        line: 5, 
        code: '    console.log(n); // Print after recursive call', 
        active: stepData.currentLine === 5, 
        indent: 2,
        values: stepData.currentLine === 5 && stepData.action === 'print' ? `Print: ${stepData.currentValue}` : ''
      },
      { 
        line: 6, 
        code: '  }', 
        active: stepData.currentLine === 6, 
        indent: 1 
      },
      { 
        line: 7, 
        code: '}', 
        active: stepData.currentLine === 7, 
        indent: 0 
      },
      { 
        line: 8, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 9, 
        code: '// Call the function', 
        active: false, 
        indent: 0 
      },
      { 
        line: 10, 
        code: 'printNumbers(5);', 
        active: false, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentValue(step.currentValue);
    setOutput(step.output);
    setCallStack(step.callStack);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 3500,
      normal: 2500,
      fast: 1500
    };
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
    goToStep(0);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Printer}
        category="DSA · Recursion"
        title="Print 1 to N"
        description="Learn recursion by printing numbers from 1 to N using recursive calls"
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Beginner', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're trying to achieve</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              What is Print 1 to N?
            </h4>
            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300">
                We need to create a function that prints all numbers from 1 to N in order, using recursion.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">N = 5</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg">1, 2, 3, 4, 5</div>
                </div>
              </div>

              {/* Visual Flow Diagram */}
              <div className="bg-white dark:bg-slate-900 rounded-lg border p-4">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 text-center">Visual Flow: printNumbers(3)</h5>
                
                {/* Step 1: Building the Call Stack */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2 text-center">STEP 1: Building the Call Stack (Going Down)</div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">printNumbers(3)</div>
                      <ArrowDown className="w-4 h-4 text-blue-500 mt-1" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">printNumbers(2)</div>
                      <ArrowDown className="w-4 h-4 text-blue-500 mt-1" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">printNumbers(1)</div>
                      <ArrowDown className="w-4 h-4 text-blue-500 mt-1" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">0</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">printNumbers(0)</div>
                      <div className="text-xs text-red-600 dark:text-red-400 mt-1">Base Case!</div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-slate-600 dark:text-slate-400">
                    We keep calling printNumbers(n-1) until we reach n = 0
                  </div>
                </div>

                {/* Step 2: Unwinding and Printing */}
                <div>
                  <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 text-center">STEP 2: Unwinding and Printing (Going Up)</div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Print: 1</div>
                      <ArrowUp className="w-4 h-4 text-green-500 mt-1" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Print: 2</div>
                      <ArrowUp className="w-4 h-4 text-green-500 mt-1" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Print: 3</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Done!</div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-slate-600 dark:text-slate-400">
                    As functions return, we print in reverse order: 1, 2, 3
                  </div>
                </div>
              </div>

              {/* Key Insight Box */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Key Insight: Head Recursion</h5>
                    <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <div><strong>Why does this work?</strong> Because we call the function FIRST, then print.</div>
                      <div><strong>Order matters:</strong> If we printed before the recursive call, we'd get: 3, 2, 1</div>
                      <div><strong>Think like a stack:</strong> Last in, first out (LIFO) - printNumbers(1) finishes first!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Understanding the Recursive Pattern
            </h4>
            
            {/* Head vs Tail Recursion Comparison */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Head Recursion (Correct) */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Head Recursion (Correct)</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">✓ Ascending</span>
                    </div>
                    
                    {/* Visual Flow */}
                    <div className="mb-3 p-2 bg-green-50 dark:bg-green-950/20 rounded">
                      <div className="text-xs font-mono space-y-1">
                        <div>printNumbers(3) {`{`}</div>
                        <div className="ml-4">printNumbers(2) {`{`}</div>
                        <div className="ml-8">printNumbers(1) {`{`}</div>
                        <div className="ml-12">printNumbers(0) {`{`} // Base case</div>
                        <div className="ml-12">{`}`}</div>
                        <div className="ml-8">console.log(1) // Print 1</div>
                        <div className="ml-8">{`}`}</div>
                        <div className="ml-4">console.log(2) // Print 2</div>
                        <div className="ml-4">{`}`}</div>
                        <div>console.log(3) // Print 3</div>
                        <div>{`}`}</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      <strong>Output:</strong> 1, 2, 3<br/>
                      <strong>Why:</strong> Recursive call FIRST, then print
                    </div>
                  </div>
                </div>
              </div>

              {/* Tail Recursion (Incorrect for this problem) */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-orange-700 dark:text-orange-300">Tail Recursion (Wrong Order)</span>
                      <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">✗ Descending</span>
                    </div>
                    
                    {/* Visual Flow */}
                    <div className="mb-3 p-2 bg-orange-50 dark:bg-orange-950/20 rounded">
                      <div className="text-xs font-mono space-y-1">
                        <div>printNumbers(3) {`{`}</div>
                        <div className="ml-4">console.log(3) // Print 3 FIRST</div>
                        <div className="ml-4">printNumbers(2) {`{`}</div>
                        <div className="ml-8">console.log(2) // Print 2 FIRST</div>
                        <div className="ml-8">printNumbers(1) {`{`}</div>
                        <div className="ml-12">console.log(1) // Print 1 FIRST</div>
                        <div className="ml-12">printNumbers(0) {`{`} // Base case</div>
                        <div className="ml-12">{`}`}</div>
                        <div className="ml-8">{`}`}</div>
                        <div className="ml-4">{`}`}</div>
                        <div>{`}`}</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      <strong>Output:</strong> 3, 2, 1<br/>
                      <strong>Why:</strong> Print FIRST, then recursive call
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="bg-white dark:bg-slate-900 rounded-lg border p-4">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 text-center">Step-by-Step Breakdown: printNumbers(3)</h5>
              
              <div className="space-y-4">
                {/* Phase 1: Stack Building */}
                <div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">PHASE 1: Stack Building (Recursive Calls)</div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300">
                      <div className="font-bold">Call 1</div>
                      <div>printNumbers(3)</div>
                      <div className="text-blue-600">→ call 2</div>
                    </div>
                    <div className="text-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300">
                      <div className="font-bold">Call 2</div>
                      <div>printNumbers(2)</div>
                      <div className="text-blue-600">→ call 3</div>
                    </div>
                    <div className="text-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300">
                      <div className="font-bold">Call 3</div>
                      <div>printNumbers(1)</div>
                      <div className="text-blue-600">→ call 4</div>
                    </div>
                    <div className="text-center p-2 bg-red-100 dark:bg-red-900/30 rounded border border-red-300">
                      <div className="font-bold">Call 4</div>
                      <div>printNumbers(0)</div>
                      <div className="text-red-600">Base case!</div>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Stack Unwinding */}
                <div>
                  <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">PHASE 2: Stack Unwinding (Printing)</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300">
                      <div className="font-bold">Return 1</div>
                      <div>printNumbers(1)</div>
                      <div className="text-green-600">Print: 1</div>
                    </div>
                    <div className="text-center p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300">
                      <div className="font-bold">Return 2</div>
                      <div>printNumbers(2)</div>
                      <div className="text-green-600">Print: 2</div>
                    </div>
                    <div className="text-center p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-300">
                      <div className="font-bold">Return 3</div>
                      <div>printNumbers(3)</div>
                      <div className="text-green-600">Print: 3</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Call Stack Visualization */}
              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-4">Call Stack Visualization (Real Stack Structure):</div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Stack Building Phase */}
                  <div>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 text-center">BUILDING PHASE</div>
                    <div className="relative">
                      {/* Stack Container */}
                      <div className="w-32 mx-auto border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900">
                        {/* Stack Frames */}
                        <div className="p-1 space-y-1">
                          <div className="bg-blue-500 text-white text-xs p-2 rounded text-center font-bold">printNumbers(3)</div>
                          <div className="bg-blue-500 text-white text-xs p-2 rounded text-center font-bold">printNumbers(2)</div>
                          <div className="bg-blue-500 text-white text-xs p-2 rounded text-center font-bold">printNumbers(1)</div>
                          <div className="bg-red-500 text-white text-xs p-2 rounded text-center font-bold">printNumbers(0)</div>
                        </div>
                      </div>
                      {/* Stack Pointer */}
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          <div>↑</div>
                          <div>SP</div>
                        </div>
                      </div>
                      {/* Labels */}
                      <div className="text-xs text-center mt-2 text-slate-600 dark:text-slate-400">
                        Push: 3 → 2 → 1 → 0
                      </div>
                    </div>
                  </div>

                  {/* Transition Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <ArrowDown className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                      <div className="text-xs text-slate-600 dark:text-slate-400">Base Case</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Reached</div>
                      <ArrowDown className="w-6 h-6 text-slate-500 mx-auto mt-1" />
                      <div className="text-xs text-slate-600 dark:text-slate-400">Unwinding</div>
                    </div>
                  </div>

                  {/* Stack Unwinding Phase */}
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 text-center">UNWINDING PHASE</div>
                    <div className="relative">
                      {/* Stack Container */}
                      <div className="w-32 mx-auto border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900">
                        {/* Stack Frames */}
                        <div className="p-1 space-y-1">
                          <div className="bg-green-500 text-white text-xs p-2 rounded text-center font-bold">Print: 3 ✓</div>
                          <div className="bg-green-500 text-white text-xs p-2 rounded text-center font-bold">Print: 2 ✓</div>
                          <div className="bg-green-500 text-white text-xs p-2 rounded text-center font-bold">Print: 1 ✓</div>
                          <div className="bg-slate-200 dark:bg-slate-700 text-slate-500 text-xs p-2 rounded text-center font-bold line-through">printNumbers(0)</div>
                        </div>
                      </div>
                      {/* Stack Pointer */}
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          <div>↓</div>
                          <div>SP</div>
                        </div>
                      </div>
                      {/* Labels */}
                      <div className="text-xs text-center mt-2 text-slate-600 dark:text-slate-400">
                        Pop: 0 ← 1 ← 2 ← 3
                      </div>
                    </div>
                  </div>
                </div>

                {/* LIFO Explanation */}
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-700">
                  <div className="flex items-start gap-2">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">LIFO:</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300">
                      <strong>Last In, First Out</strong> - printNumbers(0) was called last but finishes first, 
                      printNumbers(1) finishes next, and so on. That's why we get 1, 2, 3 in output!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Recursive Call First</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Before printing current number, we call the function with N-1:</div>
                    <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                      printNumbers(5) calls printNumbers(4)<br/>
                      printNumbers(4) calls printNumbers(3)<br/>
                      ...until printNumbers(0)
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Base Case Reached</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">When N = 0, we stop recursion and return:</div>
                    <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                      {'if (n > 0) { ... } // n = 0, so condition fails'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Print While Unwinding</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">As functions return, we print in reverse order:</div>
                    <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                      printNumbers(1) prints: 1<br/>
                      printNumbers(2) prints: 2<br/>
                      printNumbers(3) prints: 3<br/>
                      printNumbers(4) prints: 4<br/>
                      printNumbers(5) prints: 5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Head Recursion:</strong> Recursive call happens BEFORE the current operation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Stack Building:</strong> First we build the call stack (5→4→3→2→1→0)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Stack Unwinding:</strong> Then we unwind and print (1←2←3←4←5)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Order Matters:</strong> Printing after recursive call gives ascending order</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      
      
      {/* Animated Visualization Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the recursion builds and unwinds the call stack</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="slow"
                checked={animationSpeed === 'slow'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'slow')}
                disabled={isAnimating}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Slow</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="normal"
                checked={animationSpeed === 'normal'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'normal')}
                disabled={isAnimating}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Normal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="fast"
                checked={animationSpeed === 'fast'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'fast')}
                disabled={isAnimating}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </label>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Code Viewer */}
          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">printNumbers.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Current N:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].currentValue}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Output:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        [{steps[currentStep].output.join(', ')}]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description Card */}
          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-600">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'check' && '🔄 Condition Check'}
                      {steps[currentStep].action === 'recursive' && '📞 Recursive Call'}
                      {steps[currentStep].action === 'base' && '⚠️ Base Case'}
                      {steps[currentStep].action === 'return' && '🔚 Return'}
                      {steps[currentStep].action === 'print' && '📤 Printing'}
                      {steps[currentStep].action === 'output' && '✅ Output'}
                      {steps[currentStep].action === 'complete' && '🎯 Complete'}
                      {steps[currentStep].action === 'done' && '🏆 Done'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation - Call Stack (Vertical) */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Call Stack Visualization (Vertical):</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Active Call</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Waiting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Base Case</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Vertical Stack Display */}
                <div>
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3 text-center">Stack Frames</h4>
                  <div className="relative">
                    {/* Stack Container */}
                    <div className="w-56 mx-auto border-4 border-slate-400 dark:border-slate-600 rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 min-h-[300px] flex flex-col justify-end p-3">
                      {/* Stack Frames */}
                      <div className="space-y-2">
                        {callStack.length === 0 ? (
                          <div className="text-center text-slate-500 dark:text-slate-400 text-sm py-8">
                            <div className="mb-2">📭</div>
                            Stack Empty
                          </div>
                        ) : (
                          callStack.map((value, index) => {
                            const isTop = index === callStack.length - 1;
                            const isBaseCase = value === 0;
                            
                            return (
                              <div key={index} className="relative">
                                <div
                                  className={`p-3 rounded-lg font-bold text-center transition-all duration-500 ${
                                    isTop && isAnimating
                                      ? 'ring-4 ring-emerald-400 ring-opacity-75 scale-105 shadow-lg'
                                      : ''
                                  } ${
                                    isBaseCase
                                      ? 'bg-red-500 text-white border-2 border-red-600'
                                      : isTop
                                      ? 'bg-emerald-500 text-white border-2 border-emerald-600'
                                      : 'bg-blue-500 text-white border-2 border-blue-600'
                                  }`}
                                >
                                  <div className="text-sm">printNumbers({value})</div>
                                  <div className="text-xs mt-1 opacity-90">n = {value}</div>
                                </div>
                                
                                {/* Stack Pointer for top frame */}
                                {isTop && (
                                  <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                                      <div className="flex items-center gap-1">
                                        <span>←</span>
                                        <span>SP</span>
                                      </div>
                                      <div>Top</div>
                                    </div>
                                  </div>
                                )}
                                
                                {/* Base case indicator */}
                                {isBaseCase && (
                                  <div className="absolute -left-16 top-1/2 -translate-y-1/2">
                                    <div className="text-xs text-red-600 dark:text-red-400 font-bold">
                                      <div>⚠️</div>
                                      <div>Base!</div>
                                    </div>
                                  </div>
                                )}
                                
                                {/* Memory indicator */}
                                <div className="absolute -right-16 bottom-0">
                                  <div className="text-xs text-slate-500 dark:text-slate-400">
                                    64 bytes
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                    
                    {/* Stack Labels */}
                    <div className="text-center mt-3 space-y-1">
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        <strong>Stack Depth:</strong> {callStack.length} frame{callStack.length !== 1 ? 's' : ''}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        <strong>Total Memory:</strong> {callStack.length * 64} bytes
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        <strong>LIFO:</strong> Last In, First Out
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explanation Panel */}
                <div>
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3 text-center">Stack Explanation</h4>
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 min-h-[300px]">
                    <div className="space-y-3">
                      {/* Current Step */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {currentStep}
                        </div>
                        <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                          Current Step Analysis
                        </div>
                      </div>
                      
                      {/* Step-specific explanations */}
                      <div className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-50">
                        {currentStep === 0 && (
                          <div>
                            <div className="font-semibold mb-2">🚀 Initialization</div>
                            <div>Starting the recursive process. The call stack is empty, ready to receive the first function call.</div>
                          </div>
                        )}
                        {currentStep === 1 && (
                          <div>
                            <div className="font-semibold mb-2">📞 First Call</div>
                            <div>printNumbers(3) is called and pushed to the stack. Since 3 &gt; 0, it will call printNumbers(2).</div>
                          </div>
                        )}
                        {currentStep === 2 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Building Stack</div>
                            <div>printNumbers(2) is added on top of printNumbers(3). The stack is growing upward.</div>
                          </div>
                        )}
                        {currentStep === 3 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Continuing Growth</div>
                            <div>printNumbers(1) is pushed. Each call waits for the next one to complete.</div>
                          </div>
                        )}
                        {currentStep === 4 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Final Call</div>
                            <div>printNumbers(0) reaches the base case. No more recursive calls will be made.</div>
                          </div>
                        )}
                        {currentStep === 5 && (
                          <div>
                            <div className="font-semibold mb-2">⚠️ Base Case Hit</div>
                            <div>The base case (n=0) is reached. The recursion stops and begins unwinding.</div>
                          </div>
                        )}
                        {currentStep === 6 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 First Return</div>
                            <div>printNumbers(0) returns and is popped. Control goes back to printNumbers(1).</div>
                          </div>
                        )}
                        {currentStep === 7 && (
                          <div>
                            <div className="font-semibold mb-2">📤 First Print</div>
                            <div>printNumbers(1) prints "1". This is why we get ascending order!</div>
                          </div>
                        )}
                        {currentStep === 8 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 Stack Shrinking</div>
                            <div>printNumbers(1) completes and is removed. Stack is getting smaller.</div>
                          </div>
                        )}
                        {currentStep === 9 && (
                          <div>
                            <div className="font-semibold mb-2">📤 Second Print</div>
                            <div>printNumbers(2) prints "2". Notice how 2 comes after 1.</div>
                          </div>
                        )}
                        {currentStep === 10 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 Almost Done</div>
                            <div>printNumbers(2) finishes. Only one frame remains.</div>
                          </div>
                        )}
                        {currentStep === 11 && (
                          <div>
                            <div className="font-semibold mb-2">📤 Final Print</div>
                            <div>printNumbers(3) prints "3". The last number in our sequence.</div>
                          </div>
                        )}
                        {currentStep === 12 && (
                          <div>
                            <div className="font-semibold mb-2">🎯 Complete!</div>
                            <div>Stack is empty! All recursive calls have completed. Output: 1, 2, 3</div>
                          </div>
                        )}
                      </div>
                      
                      {/* Key Insights */}
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">💡 Key Insights:</div>
                        <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                          <div>• <strong>LIFO Principle:</strong> Last function called finishes first</div>
                          <div>• <strong>Stack Growth:</strong> Each recursive call adds a frame (64 bytes)</div>
                          <div>• <strong>Stack Shrink:</strong> Each return removes a frame</div>
                          <div>• <strong>Head Recursion:</strong> Call first, then print → ascending order</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Output Display */}
          {currentStep >= 0 && output.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Console Output:</p>
              </div>
              
              <div className="p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border border-slate-700">
                <div className="font-mono text-sm text-green-400">
                  {output.map((value, index) => (
                    <div key={index} className="mb-1">
                      <span className="text-slate-500">$</span> {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We make exactly n+1 function calls (from n down to 0), so time complexity is linear with respect to n.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The call stack can grow up to n+1 frames deep, so space complexity is linear with respect to n.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function printNumbers(n) {
  console.log(\`printNumbers(\${n}) called\`);
  
  if (n > 0) {
    printNumbers(n - 1); // Recursive call first
    console.log(n);      // Print after recursive call
  }
}

// Test the function
console.log("Starting printNumbers(5):");
printNumbers(5);
console.log("Function completed!");

// Output will be:
// printNumbers(5) called
// printNumbers(4) called  
// printNumbers(3) called
// printNumbers(2) called
// printNumbers(1) called
// printNumbers(0) called
// 1
// 2
// 3
// 4
// 5`}
      />
    </div>
  );
}
