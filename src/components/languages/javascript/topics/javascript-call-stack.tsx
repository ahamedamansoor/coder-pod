'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Layers,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  RotateCcw,
  Pause,
} from 'lucide-react';

interface StackFrame {
  name: string;
  color: string;
}

interface AnimationStep {
  stack: StackFrame[];
  description: string;
  code?: string;
}

export default function JavaScriptCallStack() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const animationSteps: AnimationStep[] = [
    {
      stack: [],
      description: 'Program starts - call stack is empty',
      code: '// Code execution begins'
    },
    {
      stack: [{ name: 'main()', color: 'from-blue-400 to-blue-600' }],
      description: 'main() is called - pushed onto stack',
      code: 'function main() {'
    },
    {
      stack: [
        { name: 'main()', color: 'from-blue-400 to-blue-600' },
        { name: 'greet()', color: 'from-green-400 to-green-600' }
      ],
      description: 'greet() is called - pushed onto stack',
      code: '  greet();'
    },
    {
      stack: [
        { name: 'main()', color: 'from-blue-400 to-blue-600' },
        { name: 'greet()', color: 'from-green-400 to-green-600' },
        { name: 'sayHello()', color: 'from-purple-400 to-purple-600' }
      ],
      description: 'sayHello() is called inside greet() - pushed onto stack',
      code: '  function greet() { sayHello(); }'
    },
    {
      stack: [
        { name: 'main()', color: 'from-blue-400 to-blue-600' },
        { name: 'greet()', color: 'from-green-400 to-green-600' }
      ],
      description: 'sayHello() finishes - popped off stack',
      code: '  // sayHello() returns'
    },
    {
      stack: [{ name: 'main()', color: 'from-blue-400 to-blue-600' }],
      description: 'greet() finishes - popped off stack',
      code: '  // greet() returns'
    },
    {
      stack: [],
      description: 'main() finishes - stack is empty again',
      code: '} // program ends'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < animationSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= animationSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    } else if (currentStep >= animationSteps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, animationSteps.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentStep < animationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="Call Stack"
        description="How JavaScript tracks function execution with a stack data structure"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is the Call Stack?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The call stack is a <strong className="text-yellow-700 dark:text-yellow-400">data structure</strong> that JavaScript uses to keep track of function calls. Like a stack of plates - last in, first out (LIFO)!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Layers className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Stack of Plates Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Think of stacking plates: you add plates on top (push) and remove from the top (pop). You can't remove a plate from the middle - only from the top! Same with function calls.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Interactive Call Stack Visualization</CardTitle>
              <CardDescription>Watch how functions are pushed and popped</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                ← Prev
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleNext}
                disabled={currentStep === animationSteps.length - 1}
              >
                Next →
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleReset}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Stack Visualization */}
            <div className="space-y-4">
              <div className="text-center font-semibold text-gray-700 dark:text-gray-300">
                Call Stack
              </div>
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-xl p-6 min-h-[400px] flex flex-col-reverse gap-2">
                {animationSteps[currentStep].stack.length === 0 ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-600 text-lg">
                      Empty Stack
                    </div>
                  </div>
                ) : (
                  animationSteps[currentStep].stack.map((frame, index) => (
                    <div
                      key={index}
                      className={`
                        bg-gradient-to-r ${frame.color} 
                        text-white font-mono font-semibold
                        px-6 py-4 rounded-lg shadow-lg
                        transform transition-all duration-500 ease-out
                        animate-in slide-in-from-bottom-4 fade-in
                      `}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{frame.name}</span>
                        {index === animationSteps[currentStep].stack.length - 1 && (
                          <span className="text-xs bg-white/20 px-2 py-1 rounded">
                            TOP
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                ↑ Functions are added on top (LIFO - Last In, First Out)
              </div>
            </div>

            {/* Description and Code */}
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    {currentStep + 1}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Step {currentStep + 1} of {animationSteps.length}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {animationSteps[currentStep].description}
                </p>
                {animationSteps[currentStep].code && (
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 mt-3">
                    <code className="text-emerald-400 font-mono text-sm">
                      {animationSteps[currentStep].code}
                    </code>
                  </div>
                )}
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-200">
                  Stack Size: {animationSteps[currentStep].stack.length}
                </h4>
                <div className="text-sm text-amber-700 dark:text-amber-300">
                  {animationSteps[currentStep].stack.length === 0 && '✓ Stack is empty'}
                  {animationSteps[currentStep].stack.length === 1 && '→ One function executing'}
                  {animationSteps[currentStep].stack.length > 1 && 
                    `→ ${animationSteps[currentStep].stack.length} functions nested`}
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-900 border rounded-lg p-4">
                <strong>Current operation:</strong>
                <div className="mt-2">
                  {currentStep === 0 && '🟢 Program starts'}
                  {currentStep > 0 && currentStep < animationSteps.length - 1 && 
                    (animationSteps[currentStep].stack.length > animationSteps[currentStep - 1].stack.length 
                      ? '📥 Function pushed onto stack' 
                      : '📤 Function popped off stack')}
                  {currentStep === animationSteps.length - 1 && '✅ Program complete'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
              {animationSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentStep 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle>How the Call Stack Works</CardTitle>
          <CardDescription>Push and pop operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
                  ↓
                </div>
                <h3 className="font-bold text-lg text-green-900 dark:text-green-100">
                  Push (Add)
                </h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When a function is <strong>called</strong>, it's pushed onto the top of the stack.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">
                  ↑
                </div>
                <h3 className="font-bold text-lg text-red-900 dark:text-red-100">
                  Pop (Remove)
                </h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When a function <strong>returns</strong>, it's popped off the top of the stack.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Call Stack Example"
        description="See how functions are tracked"
        code={`function first() {
  console.log('Inside first');
  second();
  console.log('Back to first');
}

function second() {
  console.log('Inside second');
  third();
  console.log('Back to second');
}

function third() {
  console.log('Inside third');
}

first();

// Call stack progression:
// 1. [first]
// 2. [first, second]
// 3. [first, second, third]
// 4. [first, second]        (third returns)
// 5. [first]                (second returns)
// 6. []                     (first returns)

// Output:
// Inside first
// Inside second
// Inside third
// Back to second
// Back to first`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Stack Overflow */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Stack Overflow Error</CardTitle>
              <CardDescription>When the stack gets too deep</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle>Maximum Call Stack Size Exceeded</AlertTitle>
            <AlertDescription>
              The stack has a limited size. If you have too many nested function calls (usually from infinite recursion), you'll get a stack overflow error!
            </AlertDescription>
          </Alert>

          <div className="bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
            <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">
              Common Cause: Infinite Recursion
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-slate-50 dark:bg-slate-950 rounded p-4">
{`function recursive() {
  recursive();  // Calls itself forever!
}

recursive();  // ❌ Stack overflow!`}</pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Stack Overflow Example"
        description="What causes stack overflow"
        code={`// BAD: Infinite recursion (stack overflow)
function countdown(n) {
  console.log(n);
  countdown(n - 1);  // No base case!
}

// countdown(10);  // Don't run this! Stack overflow

// GOOD: Proper recursion with base case
function countdownGood(n) {
  if (n <= 0) {
    console.log('Done!');
    return;  // Base case - stops recursion
  }
  console.log(n);
  countdownGood(n - 1);
}

countdownGood(5);
// Output:
// 5
// 4
// 3
// 2
// 1
// Done!

// Stack progression:
// [countdown(5)]
// [countdown(5), countdown(4)]
// [countdown(5), countdown(4), countdown(3)]
// [countdown(5), countdown(4), countdown(3), countdown(2)]
// [countdown(5), countdown(4), countdown(3), countdown(2), countdown(1)]
// [countdown(5), countdown(4), countdown(3), countdown(2)]
// [countdown(5), countdown(4), countdown(3)]
// [countdown(5), countdown(4)]
// [countdown(5)]
// []`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">How It Works ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Functions are pushed when called</li>
                <li>• Functions are popped when they return</li>
                <li>• LIFO - Last In, First Out</li>
                <li>• Tracks execution order</li>
                <li>• JavaScript is single-threaded</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Watch Out ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Stack has limited size</li>
                <li>• Infinite recursion causes overflow</li>
                <li>• Always have base case in recursion</li>
                <li>• Deep nesting can be problematic</li>
                <li>• Stack traces show call history</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Summary</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Call Stack:</strong> Tracks function execution order</div>
              <div><strong>Push:</strong> Add function when called</div>
              <div><strong>Pop:</strong> Remove function when it returns</div>
              <div><strong>LIFO:</strong> Last function in is first one out</div>
              <div><strong>Stack Overflow:</strong> Too many nested calls</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Understanding Errors</AlertTitle>
            <AlertDescription className="text-base">
              When you see an error in the console, the stack trace shows you the call stack at the moment of the error - helping you debug where the problem occurred!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
