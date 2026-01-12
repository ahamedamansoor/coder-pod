'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Layers, ArrowUp, ArrowDown, AlertTriangle, CheckCircle, Sparkles, XCircle, 
  Zap, Target, Database, Box, Play, Pause, RotateCcw, Cpu, HardDrive, 
  SkipForward, SkipBack, FastForward
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { useState, useEffect, useCallback } from 'react';

interface StackFrame {
  id: number;
  function: string;
  parameter: number;
  returnValue?: number;
  isActive: boolean;
  isCompleted: boolean;
}

export default function RecursionCallStackMemory() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stackFrames, setStackFrames] = useState<StackFrame[]>([]);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1500);
  const [isStepByStep, setIsStepByStep] = useState(false);

  const factorialSteps = [
    { action: 'push', function: 'factorial(4)', param: 4, description: 'Calling factorial(4)' },
    { action: 'push', function: 'factorial(3)', param: 3, description: 'Calling factorial(3)' },
    { action: 'push', function: 'factorial(2)', param: 2, description: 'Calling factorial(2)' },
    { action: 'push', function: 'factorial(1)', param: 1, description: 'Calling factorial(1)' },
    { action: 'base', function: 'factorial(0)', param: 0, description: 'Base case reached! Return 1' },
    { action: 'pop', function: 'factorial(1)', param: 1, returnValue: 1, description: 'Return 1 * 1 = 1' },
    { action: 'pop', function: 'factorial(2)', param: 2, returnValue: 2, description: 'Return 2 * 1 = 2' },
    { action: 'pop', function: 'factorial(3)', param: 3, returnValue: 6, description: 'Return 3 * 2 = 6' },
    { action: 'pop', function: 'factorial(4)', param: 4, returnValue: 24, description: 'Return 4 * 6 = 24' },
  ];

  const executeStep = useCallback((stepIndex: number) => {
    const step = factorialSteps[stepIndex];
    
    if (step.action === 'push') {
      setStackFrames(prev => [...prev, {
        id: prev.length,
        function: step.function,
        parameter: step.param,
        isActive: true,
        isCompleted: false
      }]);
      setMemoryUsage(prev => prev + 64);
    } else if (step.action === 'base') {
      setStackFrames(prev => [...prev, {
        id: prev.length,
        function: step.function,
        parameter: step.param,
        returnValue: 1,
        isActive: true,
        isCompleted: false
      }]);
      setMemoryUsage(prev => prev + 64);
    } else if (step.action === 'pop') {
      setStackFrames(prev => {
        const updated = prev.map(frame => 
          frame.id === prev.length - 1 
            ? { ...frame, returnValue: step.returnValue, isCompleted: true, isActive: false }
            : frame
        );
        return updated;
      });
      setTimeout(() => {
        setStackFrames(prev => prev.slice(0, -1));
        setMemoryUsage(prev => Math.max(0, prev - 64));
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (isAnimating && !isPaused && !isStepByStep && currentStep < factorialSteps.length) {
      const timer = setTimeout(() => {
        executeStep(currentStep);
        setCurrentStep(prev => prev + 1);
      }, animationSpeed);

      return () => clearTimeout(timer);
    } else if (currentStep >= factorialSteps.length) {
      setIsAnimating(false);
    }
  }, [isAnimating, isPaused, currentStep, isStepByStep, animationSpeed, executeStep]);

  const startAnimation = () => {
    setCurrentStep(0);
    setStackFrames([]);
    setMemoryUsage(0);
    setIsPaused(false);
    setIsAnimating(true);
    setIsStepByStep(false);
  };

  const pauseAnimation = () => {
    setIsPaused(!isPaused);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setCurrentStep(0);
    setStackFrames([]);
    setMemoryUsage(0);
    setIsPaused(false);
    setIsStepByStep(false);
  };

  const nextStep = () => {
    if (currentStep < factorialSteps.length) {
      executeStep(currentStep);
      setCurrentStep(prev => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      // Rebuild stack to previous state
      rebuildStackToStep(currentStep - 1);
    }
  };

  const rebuildStackToStep = (targetStep: number) => {
    const newStack: StackFrame[] = [];
    let newMemory = 0;
    
    for (let i = 0; i < targetStep; i++) {
      const step = factorialSteps[i];
      if (step.action === 'push' || step.action === 'base') {
        newStack.push({
          id: i,
          function: step.function,
          parameter: step.param,
          returnValue: step.returnValue,
          isActive: i === targetStep - 1,
          isCompleted: false
        });
        newMemory += 64;
      }
    }
    
    setStackFrames(newStack);
    setMemoryUsage(newMemory);
  };

  const toggleStepByStep = () => {
    setIsStepByStep(!isStepByStep);
    if (!isStepByStep) {
      setIsPaused(false);
      setIsAnimating(false);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Layers} 
        category="DSA · Recursion" 
        title="Call stack and memory" 
        description="Understanding how recursion uses memory and the call stack mechanism"
        colorTheme="orange"
        badges={[
          { label: 'Memory Management', variant: 'default' },
          { label: 'Stack Operations', variant: 'success' },
          { label: 'Performance', variant: 'destructive' }
        ]}
      />

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-6 h-6 text-orange-600" />
            What is the Call Stack?
          </CardTitle>
          <CardDescription>The memory structure that makes recursion possible</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              The Call Stack Explained
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              The <strong>call stack</strong> is a memory structure that tracks function calls. 
              When a function is called, a <strong>stack frame</strong> is pushed onto the stack. 
              When the function returns, its frame is popped off.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4" />
                  Push (Function Call)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Add new frame to stack</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4" />
                  Pop (Function Return)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Remove frame from stack</p>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/30">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Stack Overflow</AlertTitle>
            <AlertDescription>
              If the call stack grows too large (usually {'>'}10,000 frames), you get a 
              <strong> stack overflow error</strong>. This happens with infinite recursion!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-orange-600" />
            Animated Call Stack Visualization
          </CardTitle>
          <CardDescription>Watch how factorial(4) uses the call stack</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button 
                onClick={startAnimation} 
                disabled={isAnimating}
                className="flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Start Animation
              </Button>
              <Button 
                onClick={pauseAnimation} 
                disabled={!isAnimating}
                variant="outline"
                className="flex items-center gap-2"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                {isPaused ? 'Resume' : 'Pause'}
              </Button>
              <Button 
                onClick={resetAnimation} 
                variant="outline"
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
              
              <div className="h-8 w-px bg-slate-300 dark:bg-slate-600" />
              
              <Button 
                onClick={toggleStepByStep}
                variant={isStepByStep ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                <FastForward className="w-4 h-4" />
                Step-by-Step
              </Button>
              
              {isStepByStep && (
                <>
                  <Button 
                    onClick={previousStep} 
                    disabled={currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <SkipBack className="w-3 h-3" />
                    Previous
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    disabled={currentStep >= factorialSteps.length}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    Next
                    <SkipForward className="w-3 h-3" />
                  </Button>
                </>
              )}
            </div>
            
            {!isStepByStep && (
              <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <label className="text-sm font-medium">Speed:</label>
                <div className="flex items-center gap-3 flex-1 max-w-xs">
                  <span className="text-xs text-slate-500">Slow</span>
                  <Slider
                    value={[animationSpeed]}
                    onValueChange={(value) => setAnimationSpeed(value[0])}
                    max={3000}
                    min={500}
                    step={100}
                    className="flex-1"
                  />
                  <span className="text-xs text-slate-500">Fast</span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  {animationSpeed}ms
                </span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-600" />
                Call Stack
              </h4>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-950/10 rounded-lg border-2 border-orange-200 dark:border-orange-700"></div>
                <div className="relative min-h-[300px] p-4 space-y-2">
                  {stackFrames.length === 0 ? (
                    <div className="flex items-center justify-center h-64 text-slate-500 dark:text-slate-400">
                      <div className="text-center">
                        <Layers className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Stack is empty</p>
                        <p className="text-sm">Click "Start Animation" to begin</p>
                      </div>
                    </div>
                  ) : (
                    [...stackFrames].reverse().map((frame, index) => (
                      <div
                        key={frame.id}
                        className={`p-3 rounded-lg border-2 transition-all duration-500 transform ${
                          frame.isActive 
                            ? 'bg-orange-100 dark:bg-orange-900/50 border-orange-500 dark:border-orange-400 scale-105 shadow-lg' 
                            : frame.isCompleted
                            ? 'bg-green-100 dark:bg-green-900/50 border-green-500 dark:border-green-400'
                            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-mono font-semibold">
                            {frame.function}
                          </div>
                          {frame.returnValue !== undefined && (
                            <div className="text-sm font-bold text-green-600 dark:text-green-400">
                              → {frame.returnValue}
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          n = {frame.parameter}
                        </div>
                        {frame.isActive && (
                          <div className="text-xs text-orange-600 dark:text-orange-400 mt-1 animate-pulse">
                            Processing...
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-orange-600" />
                Memory Usage
              </h4>
              <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Stack Frames:</span>
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      {stackFrames.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Memory Used:</span>
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      {memoryUsage} bytes
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 flex items-center justify-center"
                      style={{ width: `${Math.min((memoryUsage / 1024) * 100, 100)}%` }}
                    >
                      {memoryUsage > 0 && (
                        <span className="text-xs text-white font-semibold">
                          {Math.round((memoryUsage / 1024) * 100)}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Current Step:</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  {currentStep < factorialSteps.length 
                    ? factorialSteps[currentStep].description 
                    : 'Animation Complete! 🎉'
                  }
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Progress:</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {currentStep} / {factorialSteps.length}
                    </span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 rounded-full"
                      style={{ width: `${(currentStep / factorialSteps.length) * 100}%` }}
                    />
                  </div>
                  {currentStep < factorialSteps.length && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                      <strong>Next:</strong> {factorialSteps[currentStep].action === 'push' ? 'Push' : 
                                   factorialSteps[currentStep].action === 'base' ? 'Base Case' : 'Pop'} operation
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-600" />
            Memory Implications
          </CardTitle>
          <CardDescription>How recursion affects memory usage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Space Complexity</h4>
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Good: O(log n)</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Binary search, balanced trees - logarithmic stack depth
                  </p>
                  <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    recursion depth ≈ log₂(n)
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-900 dark:text-yellow-100">Caution: O(n)</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Linear recursion - stack depth equals input size
                  </p>
                  <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    recursion depth = n
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-900 dark:text-red-100">Danger: O(2ⁿ)</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Exponential recursion - stack grows exponentially
                  </p>
                  <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    recursion depth = 2ⁿ
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Stack Frame Contents</h4>
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Box className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Parameters</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Function arguments (4-8 bytes each)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Box className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Local Variables</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Variables declared in function</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Box className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Return Address</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Where to return after completion</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Box className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Saved Registers</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">CPU state restoration</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Average Frame Size</h5>
                <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                  32-128 bytes per frame
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Varies by architecture and function complexity
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle>Recursion vs Iteration: Memory Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Recursive Factorial</h4>
              </div>
              <CodeSnippet
                title="Recursive Approach"
                language="javascript"
                code={`function factorial(n) {
  console.log(\`Entering factorial(\${n}) - Stack frame added\`);
  
  if (n <= 1) {
    console.log(\`Base case: factorial(\${n}) = 1 - Returning\`);
    return 1;
  }
  
  const result = n * factorial(n - 1);
  console.log(\`Returning factorial(\${n}) = \${result} - Stack frame removed\`);
  return result;
}

// Test with memory tracking
console.log("=== Recursive Factorial ===");
console.log("Before: Stack depth = 0");
const recursiveResult = factorial(4);
console.log(\`Result: \${recursiveResult}\`);
console.log("After: Stack depth = 0\\n");`}
              />
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Stack Frames:</span>
                  <span className="font-bold text-orange-600">n frames</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Memory:</span>
                  <span className="font-bold text-orange-600">O(n)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Max n (safe):</span>
                  <span className="font-bold text-orange-600">~10,000</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Iterative Factorial</h4>
              </div>
              <CodeSnippet
                title="Iterative Approach"
                language="javascript"
                code={`function factorial(n) {
  console.log(\`Starting factorial(\${n}) - Single stack frame\`);
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
    console.log(\`Step \${i}: result = \${result}\`);
  }
  
  console.log(\`Completed factorial(\${n}) = \${result}\`);
  return result;
}

// Test with memory tracking
console.log("=== Iterative Factorial ===");
console.log("Before: Stack depth = 0");
const iterativeResult = factorial(4);
console.log(\`Result: \${iterativeResult}\`);
console.log("After: Stack depth = 0");`}
              />
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Stack Frames:</span>
                  <span className="font-bold text-green-600">1 frame</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Memory:</span>
                  <span className="font-bold text-green-600">O(1)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Max n (safe):</span>
                  <span className="font-bold text-green-600">~10⁶⁺</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-orange-200 dark:border-orange-700 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
        <Sparkles className="h-5 w-5 text-orange-600" />
        <AlertTitle>Next Steps</AlertTitle>
        <AlertDescription>
          Now that you understand call stack and memory implications, let's explore:
          <ul className="mt-2 space-y-1 text-sm">
            <li>• When to choose recursion over iteration</li>
            <li>• Tail recursion optimization techniques</li>
            <li>• Converting recursive solutions to iterative</li>
            <li>• Practice with memory-efficient recursive patterns</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
