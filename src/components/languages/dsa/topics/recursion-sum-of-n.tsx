'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Calculator,
  ArrowRight, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionSumOfN() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific state
  const [n] = useState(5);
  const [currentValue, setCurrentValue] = useState(5);
  const [result, setResult] = useState(0);
  const [callStack, setCallStack] = useState<number[]>([]);
  const [output, setOutput] = useState<string[]>([]);

  // Detailed steps following the template (40+ steps for recursion)
  const steps = [
    // Initialization (3 steps)
    { step: 1, n: 5, currentValue: 5, result: 0, callStack: [], output: [], currentLine: 1, description: '📋 Initialize: Starting sumOfN(5) | n=5, result=0, stack=[]', action: 'init' },
    { step: 2, n: 5, currentValue: 5, result: 0, callStack: [], output: [], currentLine: 2, description: '📋 Check: n = 5, is n <= 0? NO | n=5, condition: 5<=0? false', action: 'check' },
    { step: 3, n: 5, currentValue: 5, result: 0, callStack: [], output: [], currentLine: 3, description: '📞 Recursive Call: sumOfN(5) = 5 + sumOfN(4) | n=5, calling sumOfN(4)', action: 'recursive' },
    
    // First recursive level (4 steps)
    { step: 4, n: 4, currentValue: 4, result: 0, callStack: [5], output: [], currentLine: 1, description: '📞 Enter: sumOfN(4) called | n=4, stack=[5]', action: 'recursive' },
    { step: 5, n: 4, currentValue: 4, result: 0, callStack: [5], output: [], currentLine: 2, description: '✅ Check: n = 4, is n <= 0? NO | n=4, condition: 4<=0? false', action: 'check' },
    { step: 6, n: 4, currentValue: 4, result: 0, callStack: [5], output: [], currentLine: 3, description: '📞 Recursive Call: sumOfN(4) = 4 + sumOfN(3) | n=4, calling sumOfN(3)', action: 'recursive' },
    
    // Second recursive level (4 steps)
    { step: 7, n: 3, currentValue: 3, result: 0, callStack: [5, 4], output: [], currentLine: 1, description: '📞 Enter: sumOfN(3) called | n=3, stack=[5,4]', action: 'recursive' },
    { step: 8, n: 3, currentValue: 3, result: 0, callStack: [5, 4], output: [], currentLine: 2, description: '✅ Check: n = 3, is n <= 0? NO | n=3, condition: 3<=0? false', action: 'check' },
    { step: 9, n: 3, currentValue: 3, result: 0, callStack: [5, 4], output: [], currentLine: 3, description: '📞 Recursive Call: sumOfN(3) = 3 + sumOfN(2) | n=3, calling sumOfN(2)', action: 'recursive' },
    
    // Third recursive level (4 steps)
    { step: 10, n: 2, currentValue: 2, result: 0, callStack: [5, 4, 3], output: [], currentLine: 1, description: '📞 Enter: sumOfN(2) called | n=2, stack=[5,4,3]', action: 'recursive' },
    { step: 11, n: 2, currentValue: 2, result: 0, callStack: [5, 4, 3], output: [], currentLine: 2, description: '✅ Check: n = 2, is n <= 0? NO | n=2, condition: 2<=0? false', action: 'check' },
    { step: 12, n: 2, currentValue: 2, result: 0, callStack: [5, 4, 3], output: [], currentLine: 3, description: '📞 Recursive Call: sumOfN(2) = 2 + sumOfN(1) | n=2, calling sumOfN(1)', action: 'recursive' },
    
    // Fourth recursive level (4 steps)
    { step: 13, n: 1, currentValue: 1, result: 0, callStack: [5, 4, 3, 2], output: [], currentLine: 1, description: '📞 Enter: sumOfN(1) called | n=1, stack=[5,4,3,2]', action: 'recursive' },
    { step: 14, n: 1, currentValue: 1, result: 0, callStack: [5, 4, 3, 2], output: [], currentLine: 2, description: '✅ Check: n = 1, is n <= 0? NO | n=1, condition: 1<=0? false', action: 'check' },
    { step: 15, n: 1, currentValue: 1, result: 0, callStack: [5, 4, 3, 2], output: [], currentLine: 3, description: '📞 Recursive Call: sumOfN(1) = 1 + sumOfN(0) | n=1, calling sumOfN(0)', action: 'recursive' },
    
    // Fifth recursive level - Base case (3 steps)
    { step: 16, n: 0, currentValue: 0, result: 0, callStack: [5, 4, 3, 2, 1], output: [], currentLine: 1, description: '📞 Enter: sumOfN(0) called | n=0, stack=[5,4,3,2,1]', action: 'recursive' },
    { step: 17, n: 0, currentValue: 0, result: 0, callStack: [5, 4, 3, 2, 1], output: [], currentLine: 2, description: '⚠️ Base Case: n = 0, is n <= 0? YES! | n=0, condition: 0<=0? true', action: 'base' },
    { step: 18, n: 0, currentValue: 0, result: 0, callStack: [5, 4, 3, 2, 1], output: [], currentLine: 4, description: '🔚 Return: sumOfN(0) = 0 (base case) | n=0, return=0', action: 'return' },
    
    // Unwinding phase (20 steps)
    { step: 19, n: 1, currentValue: 0, result: 0, callStack: [5, 4, 3, 2], output: [], currentLine: 3, description: '🔙 Back to sumOfN(1): received 0 | n=1, received=0, stack=[5,4,3,2]', action: 'return' },
    { step: 20, n: 1, currentValue: 1, result: 0, callStack: [5, 4, 3, 2], output: [], currentLine: 3, description: '📊 Calculate: 1 + 0 = 1 | n=1, 1+0=1, result=1', action: 'calculate' },
    { step: 21, n: 1, currentValue: 1, result: 1, callStack: [5, 4, 3, 2], output: [], currentLine: 3, description: '🔚 Return: sumOfN(1) = 1 | n=1, return=1', action: 'return' },
    
    { step: 22, n: 2, currentValue: 1, result: 1, callStack: [5, 4, 3], output: [], currentLine: 3, description: '🔙 Back to sumOfN(2): received 1 | n=2, received=1, stack=[5,4,3]', action: 'return' },
    { step: 23, n: 2, currentValue: 2, result: 1, callStack: [5, 4, 3], output: [], currentLine: 3, description: '📊 Calculate: 2 + 1 = 3 | n=2, 2+1=3, result=3', action: 'calculate' },
    { step: 24, n: 2, currentValue: 2, result: 3, callStack: [5, 4, 3], output: [], currentLine: 3, description: '🔚 Return: sumOfN(2) = 3 | n=2, return=3', action: 'return' },
    
    { step: 25, n: 3, currentValue: 3, result: 3, callStack: [5, 4], output: [], currentLine: 3, description: '🔙 Back to sumOfN(3): received 3 | n=3, received=3, stack=[5,4]', action: 'return' },
    { step: 26, n: 3, currentValue: 3, result: 3, callStack: [5, 4], output: [], currentLine: 3, description: '📊 Calculate: 3 + 3 = 6 | n=3, 3+3=6, result=6', action: 'calculate' },
    { step: 27, n: 3, currentValue: 3, result: 6, callStack: [5, 4], output: [], currentLine: 3, description: '🔚 Return: sumOfN(3) = 6 | n=3, return=6', action: 'return' },
    
    { step: 28, n: 4, currentValue: 6, result: 6, callStack: [5], output: [], currentLine: 3, description: '🔙 Back to sumOfN(4): received 6 | n=4, received=6, stack=[5]', action: 'return' },
    { step: 29, n: 4, currentValue: 4, result: 6, callStack: [5], output: [], currentLine: 3, description: '📊 Calculate: 4 + 6 = 10 | n=4, 4+6=10, result=10', action: 'calculate' },
    { step: 30, n: 4, currentValue: 4, result: 10, callStack: [5], output: [], currentLine: 3, description: '🔚 Return: sumOfN(4) = 10 | n=4, return=10', action: 'return' },
    
    { step: 31, n: 5, currentValue: 10, result: 10, callStack: [], output: [], currentLine: 3, description: '🔙 Back to sumOfN(5): received 10 | n=5, received=10, stack=[]', action: 'return' },
    { step: 32, n: 5, currentValue: 5, result: 10, callStack: [], output: [], currentLine: 3, description: '📊 Calculate: 5 + 10 = 15 | n=5, 5+10=15, result=15', action: 'calculate' },
    { step: 33, n: 5, currentValue: 5, result: 15, callStack: [], output: [], currentLine: 3, description: '🔚 Return: sumOfN(5) = 15 | n=5, return=15', action: 'return' },
    
    // Final steps (3 steps)
    { step: 34, n: 5, currentValue: 5, result: 15, callStack: [], output: ['15'], currentLine: 3, description: '📤 Output: Print result 15 | result=15, output=[15]', action: 'output' },
    { step: 35, n: 5, currentValue: 5, result: 15, callStack: [], output: ['15'], currentLine: 3, description: '🎯 Complete: sumOfN(5) = 15 | FINAL: sumOfN(5) = 15', action: 'complete' },
    { step: 36, n: 5, currentValue: 5, result: 15, callStack: [], output: ['15'], currentLine: 3, description: '🏆 Done! All recursive calls completed | SUCCESS: 1+2+3+4+5 = 15', action: 'done' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    // Generate inline variable values based on current step
    const getInlineValues = () => {
      switch (stepData.action) {
        case 'init':
          return `n=${stepData.n}, result=${stepData.result}, stack=[]`;
        case 'check':
          if (stepData.currentLine === 2) {
            return `n=${stepData.n}, n<=0? ${stepData.n <= 0 ? 'YES' : 'NO'}`;
          }
          return `n=${stepData.n}, result=${stepData.result}`;
        case 'recursive':
          return `n=${stepData.n}, sumOfN(${stepData.n-1}) called, stack=[${stepData.callStack.join(', ')}]`;
        case 'base':
          return `n=${stepData.n}, BASE CASE HIT, return 0`;
        case 'return':
          return `n=${stepData.n}, received=${stepData.currentValue}, result=${stepData.result}`;
        case 'calculate':
          return `n=${stepData.n}, ${stepData.n} + ${stepData.currentValue} = ${stepData.result}`;
        case 'output':
          return `result=${stepData.result}, output=[${stepData.output.join(', ')}]`;
        case 'complete':
        case 'done':
          return `FINAL: sumOfN(${stepData.n}) = ${stepData.result}`;
        default:
          return `n=${stepData.n}, result=${stepData.result}`;
      }
    };

    return [
      { 
        line: 1, 
        code: 'function sumOfN(n) {', 
        active: stepData.currentLine === 1, 
        indent: 0,
        values: stepData.currentLine === 1 ? getInlineValues() : ''
      },
      { 
        line: 2, 
        code: '  if (n <= 0) {', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? getInlineValues() : ''
      },
      { 
        line: 3, 
        code: '    return 0;', 
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
        code: '  return n + sumOfN(n - 1);', 
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
    setCurrentValue(step.n);
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
  const getReturnValue = (stackValue: number, currentStepData: typeof steps[0]) => {
    // During unwinding phase, show what each frame returns
    if (currentStepData.action === 'return' || currentStepData.action === 'calculate') {
      const returnValues: { [key: number]: number } = {
        0: 0,  // sumOfN(0) returns 0
        1: 1,  // sumOfN(1) returns 1
        2: 3,  // sumOfN(2) returns 3
        3: 6,  // sumOfN(3) returns 6
        4: 10, // sumOfN(4) returns 10
        5: 15, // sumOfN(5) returns 15
      };
      return returnValues[stackValue] || null;
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        icon={Calculator}
        category="DSA · Recursion · Basic Recursion"
        title="Sum of N Numbers"
        description="Calculate the sum of first N natural numbers using recursion with detailed visualization of the call stack and unwinding process."
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Basic Recursion', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're calculating with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Problem Explanation */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              What is Sum of N Numbers?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                The sum of N numbers is the total of all natural numbers from 1 to N. For example, sumOfN(5) = 1 + 2 + 3 + 4 + 5 = 15.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg text-slate-800 dark:text-slate-200">n = 5</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-800 dark:text-green-200">15</div>
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
                Sum(n) = n × (n + 1) ÷ 2
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                For n = 5: 5 × 6 ÷ 2 = 15 ✓
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-50 dark:from-emerald-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Recursive Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Base Case</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">When n = 0:</div>
                    <div className="font-mono text-sm">{'if (n <= 0) return 0;'}</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Recursive Case</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">{'For n > 0:'}</div>
                    <div className="font-mono text-sm">{'return n + sumOfN(n - 1);'}</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Example: sumOfN(3)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="font-mono text-sm space-y-1">
                      <div>sumOfN(3) = 3 + sumOfN(2)</div>
                      <div>sumOfN(2) = 2 + sumOfN(1)</div>
                      <div>sumOfN(1) = 1 + sumOfN(0)</div>
                      <div>sumOfN(0) = 0 (base case)</div>
                      <div className="text-emerald-600 dark:text-emerald-400">Result: 3 + 2 + 1 + 0 = 6</div>
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
                <span>Base case prevents infinite recursion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Each call adds the current number to the result of the smaller problem</span>
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
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the recursion builds the call stack and unwinds to calculate the sum</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">sumOfN.js</span>
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
                      <span className="text-slate-500 dark:text-slate-400">n:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].n}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">result:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].result}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">stack:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">[{steps[currentStep].callStack.join(', ')}]</span>
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
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Sum'}
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
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Call Stack Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
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
                  {callStack.map((value, index) => {
                    const isTop = index === callStack.length - 1;
                    const isBaseCase = value === 0;
                    const returnValue = getReturnValue(value, steps[currentStep]);
                    
                    return (
                      <div key={index} className="relative flex flex-col items-center gap-2 w-full max-w-md">
                        {/* Stack Frame */}
                        <div
                          className={`relative w-full p-4 rounded-lg border-2 transition-all duration-500 ${
                            isTop
                              ? 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-500 scale-105 shadow-lg'
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
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
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
                              sumOfN({value})
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                              n = {value}
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
                      <div className="w-full p-4 rounded-lg border-2 bg-emerald-100 dark:bg-emerald-900/40 border-emerald-500 scale-105 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                            Current Call
                          </span>
                        </div>
                        <div className="mt-3 font-mono text-sm">
                          <div className="font-semibold text-slate-800 dark:text-slate-200">
                            sumOfN({steps[currentStep].n})
                          </div>
                          <div className="text-slate-600 dark:text-slate-400">
                            n = {steps[currentStep].n}
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
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Console Output:</p>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="font-mono text-sm text-green-400">
                  <div>$ node sumOfN.js</div>
                  <div>Sum of first 5 numbers: {output[0]}</div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-emerald-600" />
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
                  <span className="text-slate-700 dark:text-slate-300">Each number from n down to 0 is processed exactly once</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Linear relationship with input size</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700 dark:text-slate-300">For n = 1000, we make 1000 function calls</span>
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
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Comparison with Iterative Approach</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Recursive (Current):</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(n) ✅</div>
                  <div>Space: O(n) ⚠️</div>
                  <div>Readability: High ✅</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Iterative (Alternative):</div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <div>Time: O(n) ✅</div>
                  <div>Space: O(1) ✅</div>
                  <div>Readability: Medium ⚠️</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Code Example */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-emerald-600" />
            Complete Code Example
          </CardTitle>
          <CardDescription>Full implementation with console.log statements for debugging</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`function sumOfN(n) {
  console.log(\`Calling sumOfN(\${n})\`);
  
  // Base case: when n is 0 or negative, return 0
  if (n <= 0) {
    console.log(\`Base case reached: sumOfN(\${n}) = 0\`);
    return 0;
  }
  
  // Recursive case: add current n to sum of numbers before it
  const result = n + sumOfN(n - 1);
  console.log(\`sumOfN(\${n}) = \${n} + sumOfN(\${n-1}) = \${result}\`);
  
  return result;
}

// Test the function
const n = 5;
console.log(\`Calculating sum of first \${n} numbers:\`);
const answer = sumOfN(n);
console.log(\`Final result: \${answer}\`);
console.log(\`Verification: 1+2+3+4+5 = \${answer}\`);

// Expected output:
// Calling sumOfN(5)
// Calling sumOfN(4)
// Calling sumOfN(3)
// Calling sumOfN(2)
// Calling sumOfN(1)
// Calling sumOfN(0)
// Base case reached: sumOfN(0) = 0
// sumOfN(1) = 1 + sumOfN(0) = 1
// sumOfN(2) = 2 + sumOfN(1) = 3
// sumOfN(3) = 3 + sumOfN(2) = 6
// sumOfN(4) = 4 + sumOfN(3) = 10
// sumOfN(5) = 5 + sumOfN(4) = 15
// Final result: 15
// Verification: 1+2+3+4+5 = 15`}
          />
        </CardContent>
      </Card>

    </div>
  );
}
