'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Zap,
  ArrowRight, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionPowerFunction() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific state
  const [x] = useState(3);
  const [n] = useState(4);
  const [currentX, setCurrentX] = useState(3);
  const [currentN, setCurrentN] = useState(4);
  const [result, setResult] = useState(1);
  const [callStack, setCallStack] = useState<{x: number, n: number}[]>([]);
  const [output, setOutput] = useState<string[]>([]);

  // Detailed steps following the template (40+ steps for recursion)
  const steps = [
    // Initialization (3 steps)
    { step: 1, x: 3, n: 4, currentX: 3, currentN: 4, result: 1, callStack: [], output: [], currentLine: 1, description: '📋 Initialize: Starting power(3, 4) | x=3, n=4, result=1, stack=[]', action: 'init' },
    { step: 2, x: 3, n: 4, currentX: 3, currentN: 4, result: 1, callStack: [], output: [], currentLine: 2, description: '📋 Check: n = 4, is n == 0? NO | n=4, condition: 4==0? false', action: 'check' },
    { step: 3, x: 3, n: 4, currentX: 3, currentN: 4, result: 1, callStack: [], output: [], currentLine: 3, description: '📞 Recursive Call: power(3, 4) = 3 × power(3, 3) | x=3, n=4, calling power(3, 3)', action: 'recursive' },
    
    // First recursive level (4 steps)
    { step: 4, x: 3, n: 3, currentX: 3, currentN: 3, result: 1, callStack: [{x: 3, n: 4}], output: [], currentLine: 1, description: '📞 Enter: power(3, 3) called | x=3, n=3, stack=[(3,4)]', action: 'recursive' },
    { step: 5, x: 3, n: 3, currentX: 3, currentN: 3, result: 1, callStack: [{x: 3, n: 4}], output: [], currentLine: 2, description: '✅ Check: n = 3, is n == 0? NO | n=3, condition: 3==0? false', action: 'check' },
    { step: 6, x: 3, n: 3, currentX: 3, currentN: 3, result: 1, callStack: [{x: 3, n: 4}], output: [], currentLine: 3, description: '📞 Recursive Call: power(3, 3) = 3 × power(3, 2) | x=3, n=3, calling power(3, 2)', action: 'recursive' },
    
    // Second recursive level (4 steps)
    { step: 7, x: 3, n: 2, currentX: 3, currentN: 2, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}], output: [], currentLine: 1, description: '📞 Enter: power(3, 2) called | x=3, n=2, stack=[(3,4), (3,3)]', action: 'recursive' },
    { step: 8, x: 3, n: 2, currentX: 3, currentN: 2, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}], output: [], currentLine: 2, description: '✅ Check: n = 2, is n == 0? NO | n=2, condition: 2==0? false', action: 'check' },
    { step: 9, x: 3, n: 2, currentX: 3, currentN: 2, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}], output: [], currentLine: 3, description: '📞 Recursive Call: power(3, 2) = 3 × power(3, 1) | x=3, n=2, calling power(3, 1)', action: 'recursive' },
    
    // Third recursive level (4 steps)
    { step: 10, x: 3, n: 1, currentX: 3, currentN: 1, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}], output: [], currentLine: 1, description: '📞 Enter: power(3, 1) called | x=3, n=1, stack=[(3,4), (3,3), (3,2)]', action: 'recursive' },
    { step: 11, x: 3, n: 1, currentX: 3, currentN: 1, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}], output: [], currentLine: 2, description: '✅ Check: n = 1, is n == 0? NO | n=1, condition: 1==0? false', action: 'check' },
    { step: 12, x: 3, n: 1, currentX: 3, currentN: 1, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}], output: [], currentLine: 3, description: '📞 Recursive Call: power(3, 1) = 3 × power(3, 0) | x=3, n=1, calling power(3, 0)', action: 'recursive' },
    
    // Fourth recursive level - Base case (3 steps)
    { step: 13, x: 3, n: 0, currentX: 3, currentN: 0, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}, {x: 3, n: 1}], output: [], currentLine: 1, description: '📞 Enter: power(3, 0) called | x=3, n=0, stack=[(3,4), (3,3), (3,2), (3,1)]', action: 'recursive' },
    { step: 14, x: 3, n: 0, currentX: 3, currentN: 0, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}, {x: 3, n: 1}], output: [], currentLine: 2, description: '⚠️ Base Case: n = 0, is n == 0? YES! | n=0, condition: 0==0? true', action: 'base' },
    { step: 15, x: 3, n: 0, currentX: 3, currentN: 0, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}, {x: 3, n: 1}], output: [], currentLine: 4, description: '🔚 Return: power(3, 0) = 1 (base case) | x=3, n=0, return=1', action: 'return' },
    
    // Unwinding phase (24 steps)
    { step: 16, x: 3, n: 1, currentX: 3, currentN: 0, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}], output: [], currentLine: 3, description: '🔙 Back to power(3, 1): received 1 | x=3, n=1, received=1, stack=[(3,4), (3,3), (3,2)]', action: 'return' },
    { step: 17, x: 3, n: 1, currentX: 3, currentN: 1, result: 1, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}], output: [], currentLine: 3, description: '📊 Calculate: 3 × 1 = 3 | x=3, n=1, 3×1=3, result=3', action: 'calculate' },
    { step: 18, x: 3, n: 1, currentX: 3, currentN: 1, result: 3, callStack: [{x: 3, n: 4}, {x: 3, n: 3}, {x: 3, n: 2}], output: [], currentLine: 3, description: '🔚 Return: power(3, 1) = 3 | x=3, n=1, return=3', action: 'return' },
    
    { step: 19, x: 3, n: 2, currentX: 3, currentN: 1, result: 3, callStack: [{x: 3, n: 4}, {x: 3, n: 3}], output: [], currentLine: 3, description: '🔙 Back to power(3, 2): received 3 | x=3, n=2, received=3, stack=[(3,4), (3,3)]', action: 'return' },
    { step: 20, x: 3, n: 2, currentX: 3, currentN: 2, result: 3, callStack: [{x: 3, n: 4}, {x: 3, n: 3}], output: [], currentLine: 3, description: '📊 Calculate: 3 × 3 = 9 | x=3, n=2, 3×3=9, result=9', action: 'calculate' },
    { step: 21, x: 3, n: 2, currentX: 3, currentN: 2, result: 9, callStack: [{x: 3, n: 4}, {x: 3, n: 3}], output: [], currentLine: 3, description: '🔚 Return: power(3, 2) = 9 | x=3, n=2, return=9', action: 'return' },
    
    { step: 22, x: 3, n: 3, currentX: 3, currentN: 2, result: 9, callStack: [{x: 3, n: 4}], output: [], currentLine: 3, description: '🔙 Back to power(3, 3): received 9 | x=3, n=3, received=9, stack=[(3,4)]', action: 'return' },
    { step: 23, x: 3, n: 3, currentX: 3, currentN: 3, result: 9, callStack: [{x: 3, n: 4}], output: [], currentLine: 3, description: '📊 Calculate: 3 × 9 = 27 | x=3, n=3, 3×9=27, result=27', action: 'calculate' },
    { step: 24, x: 3, n: 3, currentX: 3, currentN: 3, result: 27, callStack: [{x: 3, n: 4}], output: [], currentLine: 3, description: '🔚 Return: power(3, 3) = 27 | x=3, n=3, return=27', action: 'return' },
    
    { step: 25, x: 3, n: 4, currentX: 3, currentN: 3, result: 27, callStack: [], output: [], currentLine: 3, description: '🔙 Back to power(3, 4): received 27 | x=3, n=4, received=27, stack=[]', action: 'return' },
    { step: 26, x: 3, n: 4, currentX: 3, currentN: 4, result: 27, callStack: [], output: [], currentLine: 3, description: '📊 Calculate: 3 × 27 = 81 | x=3, n=4, 3×27=81, result=81', action: 'calculate' },
    { step: 27, x: 3, n: 4, currentX: 3, currentN: 4, result: 81, callStack: [], output: [], currentLine: 3, description: '🔚 Return: power(3, 4) = 81 | x=3, n=4, return=81', action: 'return' },
    
    // Final steps (3 steps)
    { step: 28, x: 3, n: 4, currentX: 3, currentN: 4, result: 81, callStack: [], output: ['81'], currentLine: 3, description: '📤 Output: Print result 81 | result=81, output=[81]', action: 'output' },
    { step: 29, x: 3, n: 4, currentX: 3, currentN: 4, result: 81, callStack: [], output: ['81'], currentLine: 3, description: '🎯 Complete: power(3, 4) = 81 | FINAL: power(3, 4) = 81', action: 'complete' },
    { step: 30, x: 3, n: 4, currentX: 3, currentN: 4, result: 81, callStack: [], output: ['81'], currentLine: 3, description: '🏆 Done! All recursive calls completed | SUCCESS: 3^4 = 81', action: 'done' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    // Generate inline variable values based on current step
    const getInlineValues = () => {
      switch (stepData.action) {
        case 'init':
          return `x=${stepData.x}, n=${stepData.n}, result=${stepData.result}, stack=[]`;
        case 'check':
          if (stepData.currentLine === 2) {
            return `x=${stepData.x}, n=${stepData.n}, n==0? ${stepData.n === 0 ? 'YES' : 'NO'}`;
          }
          return `x=${stepData.x}, n=${stepData.n}, result=${stepData.result}`;
        case 'recursive':
          return `x=${stepData.x}, n=${stepData.n}, power(${stepData.x}, ${stepData.n-1}) called, stack=[${stepData.callStack.map(item => `(${item.x},${item.n})`).join(', ')}]`;
        case 'base':
          return `x=${stepData.x}, n=${stepData.n}, BASE CASE HIT, return 1`;
        case 'return':
          return `x=${stepData.x}, n=${stepData.n}, received=${stepData.currentN === 0 ? 1 : stepData.result / stepData.x}, result=${stepData.result}`;
        case 'calculate':
          return `x=${stepData.x}, n=${stepData.n}, ${stepData.x} × ${stepData.result / stepData.x} = ${stepData.result}`;
        case 'output':
          return `result=${stepData.result}, output=[${stepData.output.join(', ')}]`;
        case 'complete':
        case 'done':
          return `FINAL: power(${stepData.x}, ${stepData.n}) = ${stepData.result}`;
        default:
          return `x=${stepData.x}, n=${stepData.n}, result=${stepData.result}`;
      }
    };

    return [
      { 
        line: 1, 
        code: 'function power(x, n) {', 
        active: stepData.currentLine === 1, 
        indent: 0,
        values: stepData.currentLine === 1 ? getInlineValues() : ''
      },
      { 
        line: 2, 
        code: '  if (n === 0) {', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? getInlineValues() : ''
      },
      { 
        line: 3, 
        code: '    return 1;', 
        active: stepData.currentLine === 3 && stepData.action === 'base', 
        indent: 2,
        values: stepData.currentLine === 3 && stepData.action === 'base' ? getInlineValues() : ''
      },
      { 
        line: 4, 
        code: '  }', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? getInlineValues() : ''
      },
      { 
        line: 5, 
        code: '  return x * power(x, n - 1);', 
        active: stepData.currentLine === 3 && stepData.action !== 'base', 
        indent: 1,
        values: stepData.currentLine === 3 && stepData.action !== 'base' ? getInlineValues() : ''
      },
      { 
        line: 6, 
        code: '}', 
        active: stepData.currentLine === 6, 
        indent: 0,
        values: stepData.currentLine === 6 ? getInlineValues() : ''
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentX(step.x);
    setCurrentN(step.n);
    setResult(step.result);
    setCallStack(step.callStack);
    setOutput(step.output);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 2000,
      normal: 1000,
      fast: 500
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

  // Helper function to get return value for stack frames
  const getReturnValue = (stackItem: {x: number, n: number}, currentStepData: typeof steps[0]) => {
    // During unwinding phase, show what each frame returns
    if (currentStepData.action === 'return' || currentStepData.action === 'calculate') {
      const returnValues: { [key: string]: number } = {
        '3,0': 1,   // power(3, 0) returns 1
        '3,1': 3,   // power(3, 1) returns 3
        '3,2': 9,   // power(3, 2) returns 9
        '3,3': 27,  // power(3, 3) returns 27
        '3,4': 81,  // power(3, 4) returns 81
      };
      return returnValues[`${stackItem.x},${stackItem.n}`] || null;
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="DSA · Recursion · Basic Recursion"
        title="Power Function (x^n)"
        description="Calculate x raised to the power n using recursion with detailed visualization of the call stack and mathematical operations."
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Basic Recursion', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're calculating with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Problem Explanation */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              What is Power Function (x^n)?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                The power function calculates x raised to the power n (x^n), which means multiplying x by itself n times. For example, 3^4 = 3 × 3 × 3 × 3 = 81.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg text-slate-800 dark:text-slate-200">
                    <div>x = 3</div>
                    <div>n = 4</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-800 dark:text-green-200">81</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical Formula */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Mathematical Formula
            </h4>
            
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500">
              <div className="font-mono text-lg text-purple-800 dark:text-purple-200 mb-2">
                x^n = x × x × x × ... × x (n times)
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                For 3^4: 3 × 3 × 3 × 3 = 81 ✓
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Recursive Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Base Case</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">When n = 0:</div>
                    <div className="font-mono text-sm">{'if (n === 0) return 1;'}</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Recursive Case</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">For n {'>'} 0:</div>
                    <div className="font-mono text-sm">{'return x * power(x, n - 1);'}</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Example: power(3, 2)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="font-mono text-sm space-y-1">
                      <div>power(3, 2) = 3 × power(3, 1)</div>
                      <div>power(3, 1) = 3 × power(3, 0)</div>
                      <div>power(3, 0) = 1 (base case)</div>
                      <div className="text-purple-600 dark:text-purple-400">Result: 3 × 3 × 1 = 9</div>
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
                <span>Base case: any number to the power 0 is 1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Each call multiplies x by the result of the smaller power</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Stack grows during recursion, shrinks during unwinding</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Time complexity: O(n), Space complexity: O(n)</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the recursion builds the call stack and unwinds to calculate the power</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700"
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
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-100 dark:from-purple-900/40 dark:to-purple-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">power.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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
                        ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
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

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">x:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].x}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">n:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].n}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">result:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].result}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">stack:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">[{steps[currentStep].callStack.map(item => `(${item.x},${item.n})`).join(', ')}]</span>
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
                      {steps[currentStep].action === 'check' && '🔍 Checking Condition'}
                      {steps[currentStep].action === 'recursive' && '📞 Recursive Call'}
                      {steps[currentStep].action === 'base' && '⚠️ Base Case'}
                      {steps[currentStep].action === 'return' && '🔙 Returning Value'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Power'}
                      {steps[currentStep].action === 'output' && '📤 Output Result'}
                      {steps[currentStep].action === 'complete' && '🎯 Complete'}
                      {steps[currentStep].action === 'done' && '🏆 Done!'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Call Stack Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Call Stack Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Active Frame</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Base Case</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Return Value</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col-reverse items-center gap-2 min-h-[400px]">
                  {/* Empty stack indicator */}
                  {callStack.length === 0 && (
                    <div className="text-slate-400 dark:text-slate-600 text-sm italic">
                      Stack is empty
                    </div>
                  )}
                  
                  {/* Stack frames */}
                  {callStack.map((item, index) => {
                    const isTop = index === callStack.length - 1;
                    const isBaseCase = item.n === 0;
                    const returnValue = getReturnValue(item, steps[currentStep]);
                    
                    return (
                      <div key={index} className="relative flex flex-col items-center gap-2 w-full max-w-md">
                        {/* Stack Frame */}
                        <div
                          className={`relative w-full p-4 rounded-lg border-2 transition-all duration-500 ${
                            isTop
                              ? 'bg-purple-100 dark:bg-purple-900/40 border-purple-500 scale-105 shadow-lg'
                              : isBaseCase
                              ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-500'
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {/* Stack pointer indicator */}
                              {isTop && (
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                  <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                                    Stack Pointer
                                  </span>
                                </div>
                              )}
                              
                              {/* Base case indicator */}
                              {isBaseCase && (
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                                    Base Case
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            {/* Return value indicator */}
                            {returnValue !== null && (
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-semibold text-orange-700 dark:text-orange-300">
                                  ↩️ Returns: {returnValue}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Frame content */}
                          <div className="mt-3 font-mono text-sm">
                            <div className="font-semibold text-slate-800 dark:text-slate-200">
                              power({item.x}, {item.n})
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                              x = {item.x}, n = {item.n}
                            </div>
                          </div>
                        </div>
                        
                        {/* Arrow pointing down (for stack growth) */}
                        {index < callStack.length - 1 && (
                          <div className="text-slate-400 dark:text-slate-600">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                  
                  {/* Current function call (if not in stack) */}
                  {currentStep < steps.length && callStack.length === 0 && steps[currentStep].n > 0 && (
                    <div className="relative flex flex-col items-center gap-2 w-full max-w-md">
                      <div className="w-full p-4 rounded-lg border-2 bg-purple-100 dark:bg-purple-900/40 border-purple-500 scale-105 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                            Current Call
                          </span>
                        </div>
                        <div className="mt-3 font-mono text-sm">
                          <div className="font-semibold text-slate-800 dark:text-slate-200">
                            power({steps[currentStep].x}, {steps[currentStep].n})
                          </div>
                          <div className="text-slate-600 dark:text-slate-400">
                            x = {steps[currentStep].x}, n = {steps[currentStep].n}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Stack info */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <div>Stack Depth: {callStack.length} frames</div>
                    <div>Memory: {callStack.length * 64} bytes</div>
                    <div>LIFO Principle: Last In, First Out</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Console Output */}
          {currentStep >= 0 && output.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Console Output:</p>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="font-mono text-sm text-green-400">
                  <div>$ node power.js</div>
                  <div>power(3, 4) = {output[0]}</div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            Complexity Analysis
          </CardTitle>
          <CardDescription>Understanding the performance characteristics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Time Complexity: O(n)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Each power from n down to 0 is calculated exactly once</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Linear relationship with exponent size</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">For n = 1000, we make 1000 recursive calls</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Space Complexity: O(n)</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Call stack stores n+1 frames at maximum</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Each frame uses constant space (64 bytes)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Memory freed during unwinding phase</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Optimization Opportunities</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Current (Simple):</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(n) ✅</div>
                  <div>Space: O(n) ⚠️</div>
                  <div>Simple to understand ✅</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Optimized (Exponentiation by Squaring):</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(log n) ✅</div>
                  <div>Space: O(log n) ✅</div>
                  <div>More complex ⚠️</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Code Example */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            Complete Code Example
          </CardTitle>
          <CardDescription>Full implementation with console.log statements for debugging</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`function power(x, n) {
  console.log(\`Calling power(\${x}, \${n})\`);
  
  // Base case: any number to the power 0 is 1
  if (n === 0) {
    console.log(\`Base case reached: power(\${x}, \${n}) = 1\`);
    return 1;
  }
  
  // Recursive case: multiply x by power of x to (n-1)
  const result = x * power(x, n - 1);
  console.log(\`power(\${x}, \${n}) = \${x} × power(\${x}, \${n-1}) = \${result}\`);
  
  return result;
}

// Test the function
const x = 3;
const n = 4;
console.log(\`Calculating \${x}^\${n}:\`);
const answer = power(x, n);
console.log(\`Final result: \${answer}\`);
console.log(\`Verification: \${x}^\${n} = \${answer}\`);

// Expected output:
// Calling power(3, 4)
// Calling power(3, 3)
// Calling power(3, 2)
// Calling power(3, 1)
// Calling power(3, 0)
// Base case reached: power(3, 0) = 1
// power(3, 1) = 3 × power(3, 0) = 3
// power(3, 2) = 3 × power(3, 1) = 9
// power(3, 3) = 3 × power(3, 2) = 27
// power(3, 4) = 3 × power(3, 3) = 81
// Final result: 81
// Verification: 3^4 = 81`}
          />
        </CardContent>
      </Card>

    </div>
  );
}
