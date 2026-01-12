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

type StepAction =
  | 'init'
  | 'check'
  | 'recursive'
  | 'base'
  | 'return'
  | 'calculate'
  | 'output'
  | 'complete'
  | 'done';

type Step = {
  step: number;
  n: number;
  currentValue: number;
  result: number;
  callStack: number[];
  output: string[];
  currentLine: number;
  description: string;
  action: StepAction;
};

export default function RecursionFactorial() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific state
  const [n] = useState(5);
  const [currentValue, setCurrentValue] = useState(5);
  const [result, setResult] = useState(1);
  const [callStack, setCallStack] = useState<number[]>([]);
  const [output, setOutput] = useState<string[]>([]);

  // Detailed steps following the template (40+ steps for recursion)
  const steps: Step[] = [
    // Initialization (3 steps)
    { step: 1, n: 5, currentValue: 5, result: 1, callStack: [], output: [], currentLine: 1, description: '📋 Initialize: Starting factorial(5) | n=5, result=1, stack=[]', action: 'init' },
    { step: 2, n: 5, currentValue: 5, result: 1, callStack: [], output: [], currentLine: 2, description: '📋 Check: n = 5, is n <= 1? NO | n=5, condition: 5<=1? false', action: 'check' },
    { step: 3, n: 5, currentValue: 5, result: 1, callStack: [], output: [], currentLine: 3, description: '📞 Recursive Call: factorial(5) = 5 × factorial(4) | n=5, calling factorial(4)', action: 'recursive' },
    
    // First recursive level (4 steps)
    { step: 4, n: 4, currentValue: 4, result: 1, callStack: [5], output: [], currentLine: 1, description: '📞 Enter: factorial(4) called | n=4, stack=[5]', action: 'recursive' },
    { step: 5, n: 4, currentValue: 4, result: 1, callStack: [5], output: [], currentLine: 2, description: '✅ Check: n = 4, is n <= 1? NO | n=4, condition: 4<=1? false', action: 'check' },
    { step: 6, n: 4, currentValue: 4, result: 1, callStack: [5], output: [], currentLine: 3, description: '📞 Recursive Call: factorial(4) = 4 × factorial(3) | n=4, calling factorial(3)', action: 'recursive' },
    
    // Second recursive level (4 steps)
    { step: 7, n: 3, currentValue: 3, result: 1, callStack: [5, 4], output: [], currentLine: 1, description: '📞 Enter: factorial(3) called | n=3, stack=[5,4]', action: 'recursive' },
    { step: 8, n: 3, currentValue: 3, result: 1, callStack: [5, 4], output: [], currentLine: 2, description: '✅ Check: n = 3, is n <= 1? NO | n=3, condition: 3<=1? false', action: 'check' },
    { step: 9, n: 3, currentValue: 3, result: 1, callStack: [5, 4], output: [], currentLine: 3, description: '📞 Recursive Call: factorial(3) = 3 × factorial(2) | n=3, calling factorial(2)', action: 'recursive' },
    
    // Third recursive level (4 steps)
    { step: 10, n: 2, currentValue: 2, result: 1, callStack: [5, 4, 3], output: [], currentLine: 1, description: '📞 Enter: factorial(2) called | n=2, stack=[5,4,3]', action: 'recursive' },
    { step: 11, n: 2, currentValue: 2, result: 1, callStack: [5, 4, 3], output: [], currentLine: 2, description: '✅ Check: n = 2, is n <= 1? NO | n=2, condition: 2<=1? false', action: 'check' },
    { step: 12, n: 2, currentValue: 2, result: 1, callStack: [5, 4, 3], output: [], currentLine: 3, description: '📞 Recursive Call: factorial(2) = 2 × factorial(1) | n=2, calling factorial(1)', action: 'recursive' },
    
    // Fourth recursive level (4 steps)
    { step: 13, n: 1, currentValue: 1, result: 1, callStack: [5, 4, 3, 2], output: [], currentLine: 1, description: '📞 Enter: factorial(1) called | n=1, stack=[5,4,3,2]', action: 'recursive' },
    { step: 14, n: 1, currentValue: 1, result: 1, callStack: [5, 4, 3, 2], output: [], currentLine: 2, description: '⚠️ Base Case: n = 1, is n <= 1? YES! | n=1, condition: 1<=1? true', action: 'base' },
    { step: 15, n: 1, currentValue: 1, result: 1, callStack: [5, 4, 3, 2], output: [], currentLine: 4, description: '🔚 Return: factorial(1) = 1 (base case) | n=1, return=1', action: 'return' },
    
    // Unwinding phase (24 steps)
    { step: 16, n: 2, currentValue: 1, result: 1, callStack: [5, 4, 3], output: [], currentLine: 3, description: '🔙 Back to factorial(2): received 1 | n=2, received=1, stack=[5,4,3]', action: 'return' },
    { step: 17, n: 2, currentValue: 2, result: 1, callStack: [5, 4, 3], output: [], currentLine: 3, description: '📊 Calculate: 2 × 1 = 2 | n=2, 2×1=2, result=2', action: 'calculate' },
    { step: 18, n: 2, currentValue: 2, result: 2, callStack: [5, 4, 3], output: [], currentLine: 3, description: '🔚 Return: factorial(2) = 2 | n=2, return=2', action: 'return' },
    
    { step: 19, n: 3, currentValue: 2, result: 2, callStack: [5, 4], output: [], currentLine: 3, description: '🔙 Back to factorial(3): received 2 | n=3, received=2, stack=[5,4]', action: 'return' },
    { step: 20, n: 3, currentValue: 3, result: 2, callStack: [5, 4], output: [], currentLine: 3, description: '📊 Calculate: 3 × 2 = 6 | n=3, 3×2=6, result=6', action: 'calculate' },
    { step: 21, n: 3, currentValue: 3, result: 6, callStack: [5, 4], output: [], currentLine: 3, description: '🔚 Return: factorial(3) = 6 | n=3, return=6', action: 'return' },
    
    { step: 22, n: 4, currentValue: 6, result: 6, callStack: [5], output: [], currentLine: 3, description: '🔙 Back to factorial(4): received 6 | n=4, received=6, stack=[5]', action: 'return' },
    { step: 23, n: 4, currentValue: 4, result: 6, callStack: [5], output: [], currentLine: 3, description: '📊 Calculate: 4 × 6 = 24 | n=4, 4×6=24, result=24', action: 'calculate' },
    { step: 24, n: 4, currentValue: 4, result: 24, callStack: [5], output: [], currentLine: 3, description: '🔚 Return: factorial(4) = 24 | n=4, return=24', action: 'return' },
    
    { step: 25, n: 5, currentValue: 24, result: 24, callStack: [], output: [], currentLine: 3, description: '🔙 Back to factorial(5): received 24 | n=5, received=24, stack=[]', action: 'return' },
    { step: 26, n: 5, currentValue: 5, result: 24, callStack: [], output: [], currentLine: 3, description: '📊 Calculate: 5 × 24 = 120 | n=5, 5×24=120, result=120', action: 'calculate' },
    { step: 27, n: 5, currentValue: 5, result: 120, callStack: [], output: [], currentLine: 3, description: '🔚 Return: factorial(5) = 120 | n=5, return=120', action: 'return' },
    
    // Final steps (3 steps)
    { step: 28, n: 5, currentValue: 5, result: 120, callStack: [], output: ['120'], currentLine: 3, description: '📤 Output: Print result 120 | result=120, output=[120]', action: 'output' },
    { step: 29, n: 5, currentValue: 5, result: 120, callStack: [], output: ['120'], currentLine: 3, description: '🎯 Complete: factorial(5) = 120 | FINAL: factorial(5) = 120', action: 'complete' },
    { step: 30, n: 5, currentValue: 5, result: 120, callStack: [], output: ['120'], currentLine: 3, description: '🏆 Done! All recursive calls completed | SUCCESS: 5! = 120', action: 'done' },
  ];

  const getCodeWithValues = (stepData: Step) => {
    // Generate inline variable values based on current step
    const getInlineValues = () => {
      switch (stepData.action) {
        case 'init':
          return `n=${stepData.n}, result=${stepData.result}, stack=[]`;
        case 'check':
          if (stepData.currentLine === 2) {
            return `n=${stepData.n}, n<=1? ${stepData.n <= 1 ? 'YES' : 'NO'}`;
          }
          return `n=${stepData.n}, result=${stepData.result}`;
        case 'recursive':
          return `n=${stepData.n}, factorial(${stepData.n-1}) called, stack=[${stepData.callStack.join(', ')}]`;
        case 'base':
          return `n=${stepData.n}, BASE CASE HIT, return 1`;
        case 'return':
          return `n=${stepData.n}, received=${stepData.currentValue}, result=${stepData.result}`;
        case 'calculate':
          return `n=${stepData.n}, ${stepData.n} × ${stepData.currentValue} = ${stepData.result}`;
        case 'output':
          return `result=${stepData.result}, output=[${stepData.output.join(', ')}]`;
        case 'complete':
        case 'done':
          return `FINAL: factorial(${stepData.n}) = ${stepData.result}`;
        default:
          return `n=${stepData.n}, result=${stepData.result}`;
      }
    };

    return [
      { 
        line: 1, 
        code: 'function factorial(n) {', 
        active: stepData.currentLine === 1, 
        indent: 0,
        values: stepData.currentLine === 1 ? `n=${stepData.n}` : ''
      },
      { 
        line: 2, 
        code: '  if (n <= 1) {', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `n=${stepData.n}, n<=1? ${stepData.n <= 1 ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 3, 
        code: '    return 1;', 
        active: stepData.currentLine === 4, 
        indent: 2,
        values: stepData.currentLine === 4 ? `n=${stepData.currentValue}, BASE CASE` : ''
      },
      { 
        line: 4, 
        code: '  }', 
        active: false, 
        indent: 1 
      },
      { 
        line: 5, 
        code: '  return n * factorial(n - 1);', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `n=${stepData.currentValue}, factorial(${stepData.n-1})` : ''
      },
      { 
        line: 6, 
        code: '}', 
        active: false, 
        indent: 0,
        values: stepData.action === 'complete' || stepData.action === 'done' ? `return ${stepData.result}` : ''
      },
      { 
        line: 7, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 8, 
        code: 'console.log(factorial(5));', 
        active: stepData.currentLine === 3 && stepData.step === 28, 
        indent: 0,
        values: stepData.step === 28 ? `Output: ${stepData.output.join(', ')}` : ''
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentValue(step.currentValue);
    setResult(step.result);
    setCallStack(step.callStack);
    setOutput(step.output);
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
        icon={Calculator}
        category="DSA · Recursion"
        title="Factorial Using Recursion"
        description="Learn how recursion works by implementing the factorial function step by step"
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Easy', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding Factorial Visually
          </CardTitle>
          <CardDescription>Let's break down what factorial means and how recursion calculates it</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is Factorial? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              What is Factorial?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Factorial of a number n (written as n!) is the product of all positive integers from 1 to n.
              </p>
              
              {/* Mathematical Formula */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-2">MATHEMATICAL FORMULA</div>
                <div className="font-mono text-lg text-center text-purple-700 dark:text-purple-300">
                  n! = n × (n-1) × (n-2) × ... × 2 × 1
                </div>
              </div>
              
              {/* Examples */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">EXAMPLE: 5!</div>
                  <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                    5! = 5 × 4 × 3 × 2 × 1 = 120
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">BASE CASE</div>
                  <div className="font-mono text-sm text-green-700 dark:text-green-300">
                    1! = 1<br/>
                    0! = 1 (by definition)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recursive Pattern */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Recursive Pattern
            </h4>
            
            <div className="space-y-4">
              {/* Valid Case */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Recursive Case</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">n &gt; 1 ✓</span>
                    </div>
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300 mb-2">
                      factorial(n) = n × factorial(n-1)
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      For n &gt; 1, multiply n by factorial of (n-1)
                    </div>
                  </div>
                </div>
              </div>

              {/* Base Case */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Base Case</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">n &lt;= 1 ✓</span>
                    </div>
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300 mb-2">
                      factorial(1) = 1<br/>
                      factorial(0) = 1
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      When n &lt;= 1, return 1 (stops recursion)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How Recursion Calculates Factorial
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Check Base Case</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">If n &lt;= 1, return 1</div>
                    <div className="font-mono text-sm text-purple-700 dark:text-purple-300">
                      if (n &lt;= 1) return 1;
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Recursive Call</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Otherwise, multiply by factorial of (n-1)</div>
                    <div className="font-mono text-sm text-purple-700 dark:text-purple-300">
                      return n * factorial(n - 1);
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Stack Unwinding</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Results multiply as stack unwinds</div>
                    <div className="font-mono text-sm text-purple-700 dark:text-purple-300">
                      5! = 5 × 4! = 5 × 4 × 3! = 5 × 4 × 3 × 2! = 5 × 4 × 3 × 2 × 1! = 120
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
                <span><strong>Base Case:</strong> n &lt;= 1 prevents infinite recursion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Recursive Case:</strong> n × factorial(n-1) breaks problem into smaller subproblem</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Tail Recursion:</strong> Recursive call is the last operation</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how recursion calculates factorial(5)</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">factorial.js</span>
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
                      <span className="text-slate-500 dark:text-slate-400">Current N:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].currentValue}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Result:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].result}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Stack Depth:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].callStack.length}</span>
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
                      {steps[currentStep].action === 'check' && '🔍 Checking'}
                      {steps[currentStep].action === 'recursive' && '📞 Recursive Call'}
                      {steps[currentStep].action === 'base' && '⚠️ Base Case'}
                      {steps[currentStep].action === 'return' && '🔚 Return'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating'}
                      {steps[currentStep].action === 'output' && '📤 Output'}
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
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Call Stack Visualization (Vertical):</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
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
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 text-center">Stack Frames</h4>
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
                            const isBaseCase = value === 1;
                            
                            // Calculate return value based on current step and position
                            const getReturnValue = () => {
                              const step = steps[currentStep];
                              if (!step) return null;
                              
                              // Base case returns 1
                              if (value === 1 && step.action === 'return' && step.n === 1) {
                                return 1;
                              }
                              
                              // Calculate return values during unwinding phase
                              if (step.action === 'return' || step.action === 'calculate') {
                                // Map stack values to their return values
                                const returnMap: { [key: number]: number } = {
                                  1: 1,    // factorial(1) = 1
                                  2: 2,    // factorial(2) = 2
                                  3: 6,    // factorial(3) = 6
                                  4: 24,   // factorial(4) = 24
                                  5: 120   // factorial(5) = 120
                                };
                                
                                // Show return value when the frame is about to be popped or has been popped
                                if (step.step >= 15) { // After base case is hit
                                  const remainingStack = step.callStack;
                                  // If this frame is not in the current stack, it has returned
                                  if (!remainingStack.includes(value)) {
                                    return returnMap[value];
                                  }
                                  // If this is the top frame and we're in return/calculate phase
                                  if (isTop && (step.action === 'return' || step.action === 'calculate')) {
                                    return returnMap[value];
                                  }
                                }
                              }
                              
                              return null;
                            };
                            
                            const returnValue = getReturnValue();
                            
                            return (
                              <div key={index} className="relative">
                                <div
                                  className={`p-3 rounded-lg font-bold text-center transition-all duration-500 ${
                                    isTop && isAnimating
                                      ? 'ring-4 ring-purple-400 ring-opacity-75 scale-105 shadow-lg'
                                      : ''
                                  } ${
                                    isBaseCase
                                      ? 'bg-red-500 text-white border-2 border-red-600'
                                      : isTop
                                      ? 'bg-purple-500 text-white border-2 border-purple-600'
                                      : 'bg-blue-500 text-white border-2 border-blue-600'
                                  }`}
                                >
                                  <div className="text-sm">factorial({value})</div>
                                  <div className="text-xs mt-1 opacity-90">n = {value}</div>
                                </div>
                                
                                {/* Return value indicator */}
                                {returnValue !== null && (
                                  <div className="absolute -right-20 top-1/2 -translate-y-1/2">
                                    <div className="text-xs text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded border border-green-300 dark:border-green-700">
                                      <div className="flex items-center gap-1">
                                        <span>↩️</span>
                                        <span>{returnValue}</span>
                                      </div>
                                      <div className="text-xs opacity-75">returns</div>
                                    </div>
                                  </div>
                                )}
                                
                                {/* Stack Pointer for top frame */}
                                {isTop && returnValue === null && (
                                  <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                                    <div className="text-xs text-purple-600 dark:text-purple-400 font-bold">
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
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 text-center">Stack Explanation</h4>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 min-h-[300px]">
                    <div className="space-y-3">
                      {/* Current Step */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {currentStep}
                        </div>
                        <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                          Current Step Analysis
                        </div>
                      </div>
                      
                      {/* Step-specific explanations */}
                      <div className="text-sm leading-relaxed text-purple-900 dark:text-purple-50">
                        {currentStep === 0 && (
                          <div>
                            <div className="font-semibold mb-2">🚀 Initialization</div>
                            <div>Starting the factorial calculation. The call stack is empty, ready to receive the first function call.</div>
                          </div>
                        )}
                        {currentStep === 1 && (
                          <div>
                            <div className="font-semibold mb-2">📞 First Call</div>
                            <div>factorial(5) is called and pushed to the stack. Since 5 &gt; 1, it will call factorial(4).</div>
                          </div>
                        )}
                        {currentStep === 2 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Building Stack</div>
                            <div>factorial(4) is added on top of factorial(5). The stack is growing upward.</div>
                          </div>
                        )}
                        {currentStep === 3 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Continuing Growth</div>
                            <div>factorial(3) is pushed. Each call waits for the next one to complete.</div>
                          </div>
                        )}
                        {currentStep === 4 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Final Call</div>
                            <div>factorial(2) reaches the last recursive call before base case.</div>
                          </div>
                        )}
                        {currentStep === 5 && (
                          <div>
                            <div className="font-semibold mb-2">📞 Base Case Call</div>
                            <div>factorial(1) reaches the base case. No more recursive calls will be made.</div>
                          </div>
                        )}
                        {currentStep === 6 && (
                          <div>
                            <div className="font-semibold mb-2">⚠️ Base Case Hit</div>
                            <div>The base case (n=1) is reached. The recursion stops and begins unwinding.</div>
                          </div>
                        )}
                        {currentStep === 7 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 First Return</div>
                            <div>factorial(1) returns 1 and is popped. Control goes back to factorial(2).</div>
                          </div>
                        )}
                        {currentStep === 8 && (
                          <div>
                            <div className="font-semibold mb-2">📊 First Calculation</div>
                            <div>factorial(2) calculates 2 × 1 = 2. This is why we get factorial!</div>
                          </div>
                        )}
                        {currentStep === 9 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 Stack Shrinking</div>
                            <div>factorial(2) completes and is removed. Stack is getting smaller.</div>
                          </div>
                        )}
                        {currentStep === 10 && (
                          <div>
                            <div className="font-semibold mb-2">📊 Second Calculation</div>
                            <div>factorial(3) calculates 3 × 2 = 6. Notice how 6 comes from previous result.</div>
                          </div>
                        )}
                        {currentStep === 11 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 Almost Done</div>
                            <div>factorial(3) finishes. Only two frames remain.</div>
                          </div>
                        )}
                        {currentStep === 12 && (
                          <div>
                            <div className="font-semibold mb-2">📊 Third Calculation</div>
                            <div>factorial(4) calculates 4 × 6 = 24. Building up the final result.</div>
                          </div>
                        )}
                        {currentStep === 13 && (
                          <div>
                            <div className="font-semibold mb-2">🔙 Final Return</div>
                            <div>factorial(4) completes. Only one frame remains.</div>
                          </div>
                        )}
                        {currentStep === 14 && (
                          <div>
                            <div className="font-semibold mb-2">📊 Final Calculation</div>
                            <div>factorial(5) calculates 5 × 24 = 120. The final result!</div>
                          </div>
                        )}
                        {currentStep === 15 && (
                          <div>
                            <div className="font-semibold mb-2">🎯 Complete!</div>
                            <div>Stack is empty! All recursive calls have completed. Output: 120</div>
                          </div>
                        )}
                        {currentStep >= 16 && (
                          <div>
                            <div className="font-semibold mb-2">🏆 Done!</div>
                            <div>factorial(5) = 120 successfully calculated!</div>
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
                          <div>• <strong>Factorial Pattern:</strong> Multiply during unwinding phase</div>
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
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Console Output:</p>
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
      <Card className="border-purple-200 dark:border-purple-800">
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
                We make one recursive call for each number from n down to 1, resulting in n calls total.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The call stack stores n frames during the recursion, one for each number from n to 1.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5));  // Output: 120
console.log(factorial(3));  // Output: 6
console.log(factorial(1));  // Output: 1
console.log(factorial(0));  // Output: 1`}
      />

    </div>
  );
}
