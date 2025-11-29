'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Layers,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  AlertTriangle,
  TrendingUp,
  Box,
  Zap,
  RefreshCw,
  Terminal,
} from 'lucide-react';

interface JavaScriptCallStackProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const ExecutionTrace = ({ steps }: { steps: { stack: string[]; description: string }[] }) => (
  <div className="mt-3 space-y-2">
    {steps.map((step, index) => (
      <div key={index} className="flex items-start gap-3">
        <Badge className="mt-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs min-w-[60px] justify-center">
          Step {index + 1}
        </Badge>
        <div className="flex-1 space-y-1">
          <p className="text-xs text-muted-foreground">{step.description}</p>
          <div className="flex gap-1">
            {step.stack.map((frame, i) => (
              <div
                key={i}
                className="px-3 py-1.5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 rounded text-xs font-mono"
              >
                {frame}
              </div>
            ))}
            {step.stack.length === 0 && (
              <div className="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded text-xs text-gray-400">
                [empty]
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Call Stack Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
      max-width: 600px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { 
      color: #667eea; 
      margin-bottom: 16px; 
      font-size: 32px; 
    }
    p { 
      color: #64748b; 
      font-size: 18px; 
      margin-bottom: 24px;
    }
    .console-hint { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      font-family: monospace; 
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📚 Call Stack</h1>
    <p>Open the browser console to see the call stack in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("📚 Call Stack Demo\\n");

// Example 1: Simple call stack
console.log("1. SIMPLE CALL STACK:");
function third() {
  console.log("  → third() executing");
  console.log("  → Stack: [global] → first() → second() → third()");
}

function second() {
  console.log("  → second() executing");
  third();
  console.log("  → second() completed");
}

function first() {
  console.log("  → first() executing");
  second();
  console.log("  → first() completed");
}

console.log("→ Starting execution");
first();
console.log("→ All done!\\n");

// Example 2: Return values
console.log("2. RETURN VALUES:");
function multiply(a, b) {
  return a * b;
}

function calculate(x) {
  const result = multiply(x, 2);
  return result + 10;
}

const answer = calculate(5);
console.log("Answer:", answer);
console.log("Stack trace: [global] → calculate() → multiply()\\n");

// Example 3: Error stack
console.log("3. ERROR STACK TRACE:");
function buggyFunction() {
  throw new Error("Something went wrong!");
}

function caller() {
  buggyFunction();
}

try {
  caller();
} catch (error) {
  console.log("Error caught!");
  console.log("Stack trace shows:");
  console.log(error.stack);
}

console.log("\\n💡 Open DevTools to see the call stack!");`;

// Animated Call Stack Component
const AnimatedCallStack = () => {
  const [stack, setStack] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const executionSteps = [
    { stack: [], code: 'printSquare(5)', output: 'Calling printSquare(5)' },
    { stack: ['printSquare(5)'], code: 'square(5)', output: 'printSquare calls square(5)' },
    { stack: ['printSquare(5)', 'square(5)'], code: 'multiply(5, 5)', output: 'square calls multiply(5, 5)' },
    { stack: ['printSquare(5)', 'square(5)', 'multiply(5, 5)'], code: 'return 25', output: 'multiply returns 25' },
    { stack: ['printSquare(5)', 'square(5)'], code: 'return 25', output: 'square returns 25' },
    { stack: ['printSquare(5)'], code: 'console.log(25)', output: 'printSquare logs: 25' },
    { stack: [], code: 'Done!', output: 'All functions completed' },
  ];

  const runAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStack([]);
    setOutput([]);
    setCurrentStep(0);

    for (let i = 0; i < executionSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setCurrentStep(i);
      setStack(executionSteps[i].stack);
      setOutput(prev => [...prev, executionSteps[i].output]);
    }

    setIsAnimating(false);
  };

  const reset = () => {
    setStack([]);
    setOutput([]);
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
          Animated Call Stack Visualization
        </CardTitle>
        <CardDescription className="text-base">
          Watch the stack grow and shrink as functions are called and completed
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Stack Visualization */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Call Stack</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 text-xs">
                {stack.length === 0 ? 'Empty' : `${stack.length} frame${stack.length > 1 ? 's' : ''}`}
              </Badge>
            </div>
            
            <div className="min-h-[300px] p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col-reverse justify-start gap-2">
              {stack.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  [Stack is empty]
                </div>
              ) : (
                stack.map((frame, index) => (
                  <div
                    key={`${frame}-${index}`}
                    className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-mono text-sm shadow-lg animate-in slide-in-from-bottom-5 duration-500"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {frame}
                  </div>
                ))
              )}
            </div>

            {/* Current Code */}
            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Current:</p>
              <code className="text-sm font-mono text-blue-900 dark:text-blue-100">
                {executionSteps[currentStep]?.code || 'Ready to start'}
              </code>
            </div>
          </div>

          {/* Output Log */}
          <div className="space-y-3">
            <h4 className="font-semibold">Execution Log</h4>
            <div className="min-h-[300px] p-4 bg-slate-900 dark:bg-slate-950 rounded-xl border border-slate-700 font-mono text-xs">
              {output.length === 0 ? (
                <div className="text-slate-500">Waiting to execute...</div>
              ) : (
                <div className="space-y-1">
                  {output.map((line, index) => (
                    <div
                      key={index}
                      className="text-emerald-400 animate-in fade-in duration-300"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      → {line}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Code Example */}
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border">
              <p className="text-xs font-semibold mb-2">Code:</p>
              <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(num) {
  const result = square(num);
  console.log(result);
}

printSquare(5);`}</pre>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={runAnimation}
            disabled={isAnimating}
            className="bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50"
          >
            {isAnimating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Animating...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Animation
              </>
            )}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            disabled={isAnimating}
          >
            Reset
          </Button>
        </div>

        <Alert>
          <Sparkles className="h-4 w-4" />
          <AlertTitle>How to Use</AlertTitle>
          <AlertDescription>
            Click "Run Animation" to see functions being pushed onto the stack (bottom to top) and popped off as they complete. Notice how the stack grows when functions call other functions, then shrinks as they return.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

// Animated Recursion Stack Component
const AnimatedRecursionStack = () => {
  const [stack, setStack] = useState<Array<{ func: string; value: string }>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [phase, setPhase] = useState<'building' | 'unwinding' | 'done'>('building');

  const executionSteps = [
    { stack: [{ func: 'factorial(4)', value: '?' }], output: 'Calculating factorial(4)', phase: 'building' },
    { stack: [{ func: 'factorial(4)', value: '?' }, { func: 'factorial(3)', value: '?' }], output: 'Calculating factorial(3)', phase: 'building' },
    { stack: [{ func: 'factorial(4)', value: '?' }, { func: 'factorial(3)', value: '?' }, { func: 'factorial(2)', value: '?' }], output: 'Calculating factorial(2)', phase: 'building' },
    { stack: [{ func: 'factorial(4)', value: '?' }, { func: 'factorial(3)', value: '?' }, { func: 'factorial(2)', value: '?' }, { func: 'factorial(1)', value: '?' }], output: 'Calculating factorial(1)', phase: 'building' },
    { stack: [{ func: 'factorial(4)', value: '?' }, { func: 'factorial(3)', value: '?' }, { func: 'factorial(2)', value: '?' }, { func: 'factorial(1)', value: '1' }], output: 'Base case! factorial(1) = 1', phase: 'unwinding' },
    { stack: [{ func: 'factorial(4)', value: '?' }, { func: 'factorial(3)', value: '?' }, { func: 'factorial(2)', value: '2' }], output: 'factorial(2) returns 2 * 1 = 2', phase: 'unwinding' },
    { stack: [{ func: 'factorial(4)', value: '?' }, { func: 'factorial(3)', value: '6' }], output: 'factorial(3) returns 3 * 2 = 6', phase: 'unwinding' },
    { stack: [{ func: 'factorial(4)', value: '24' }], output: 'factorial(4) returns 4 * 6 = 24', phase: 'unwinding' },
    { stack: [], output: 'Final result: 24', phase: 'done' },
  ];

  const runAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStack([]);
    setOutput([]);
    setCurrentStep(0);
    setPhase('building');

    for (let i = 0; i < executionSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1400));
      setCurrentStep(i);
      setStack(executionSteps[i].stack);
      setPhase(executionSteps[i].phase as any);
      setOutput(prev => [...prev, executionSteps[i].output]);
    }

    setIsAnimating(false);
  };

  const reset = () => {
    setStack([]);
    setOutput([]);
    setCurrentStep(0);
    setIsAnimating(false);
    setPhase('building');
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl">
          <RefreshCw className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
          Animated Recursion Stack
        </CardTitle>
        <CardDescription className="text-base">
          Watch the stack build up during recursive calls, then unwind as values are returned
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Stack Visualization */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Call Stack</h4>
              <div className="flex gap-2">
                <Badge className={`text-xs ${
                  phase === 'building' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' 
                    : phase === 'unwinding'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30'
                }`}>
                  {phase === 'building' ? '📈 Building' : phase === 'unwinding' ? '📉 Unwinding' : '✅ Done'}
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 text-xs">
                  {stack.length} {stack.length === 1 ? 'frame' : 'frames'}
                </Badge>
              </div>
            </div>
            
            <div className="min-h-[350px] p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col-reverse justify-start gap-2">
              {stack.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  {phase === 'done' ? '✅ Stack Empty - Execution Complete!' : '[Stack is empty]'}
                </div>
              ) : (
                stack.map((frame, index) => (
                  <div
                    key={`${frame.func}-${index}`}
                    className={`px-4 py-3 rounded-lg font-mono text-sm shadow-lg transition-all duration-500 ${
                      frame.value === '?'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    } animate-in slide-in-from-bottom-5`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{frame.func}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        frame.value === '?' 
                          ? 'bg-white/20' 
                          : 'bg-white/30'
                      }`}>
                        = {frame.value}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Legend */}
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <span className="text-muted-foreground">Waiting for value</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <span className="text-muted-foreground">Has return value</span>
              </div>
            </div>
          </div>

          {/* Output Log */}
          <div className="space-y-3">
            <h4 className="font-semibold">Execution Flow</h4>
            <div className="min-h-[350px] p-4 bg-slate-900 dark:bg-slate-950 rounded-xl border border-slate-700 font-mono text-xs">
              {output.length === 0 ? (
                <div className="text-slate-500">Click "Run Animation" to start...</div>
              ) : (
                <div className="space-y-1.5">
                  {output.map((line, index) => (
                    <div
                      key={index}
                      className={`animate-in fade-in duration-300 ${
                        line.includes('Base case') || line.includes('Final result')
                          ? 'text-yellow-400 font-bold'
                          : line.includes('returns')
                          ? 'text-green-400'
                          : 'text-cyan-400'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {line.includes('Base case') && '🎯 '}
                      {line.includes('returns') && '↩️  '}
                      {line.includes('Calculating') && '→ '}
                      {line.includes('Final') && '✅ '}
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Code Reference */}
            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border">
              <p className="text-xs font-semibold mb-2">Code:</p>
              <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(4);`}</pre>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={runAnimation}
            disabled={isAnimating}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 disabled:opacity-50"
          >
            {isAnimating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Animating...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Recursion Animation
              </>
            )}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            disabled={isAnimating}
          >
            Reset
          </Button>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Key Observation</AlertTitle>
          <AlertDescription>
            Notice how the stack <strong className="text-blue-600 dark:text-blue-400">builds up</strong> (blue frames) as each recursive call waits for the next, then <strong className="text-green-600 dark:text-green-400">unwinds</strong> (green frames) as values are calculated and returned from the base case upward.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptCallStack({ onOpenWebPlayground }: JavaScriptCallStackProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript · Asynchronous Programming"
        title="Call Stack"
        description="Understanding how JavaScript manages function execution with the call stack - the foundation of synchronous code execution and debugging."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is the Call Stack?
          </CardTitle>
          <CardDescription className="text-base">
            A data structure that tracks function calls in your JavaScript code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 3-Column Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">LIFO Structure</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Last In, First Out - like a stack of plates, you can only add/remove from the top
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Stack</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Execution Context</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Each function call creates a new frame with its own variables and scope
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Frames</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Debugging Tool</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Error stack traces show you exactly where things went wrong
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Traces</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why the Call Stack Matters</AlertTitle>
            <AlertDescription>
              The call stack is fundamental to how JavaScript runs your code. It determines execution order, manages function scope, and helps you debug errors. Understanding it is essential for mastering JavaScript, especially async operations and performance optimization.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <RefreshCw className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            How the Call Stack Works
          </CardTitle>
          <CardDescription className="text-base">
            Step-by-step visualization of function calls being pushed and popped
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Simple example with trace */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">1. Basic Example</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(num) {
  const result = square(num);
  console.log(result);
}

printSquare(5);`}</pre>
            <ExecutionTrace steps={[
              { stack: [], description: 'Start: Stack is empty' },
              { stack: ['printSquare(5)'], description: 'printSquare(5) is called and pushed onto stack' },
              { stack: ['printSquare(5)', 'square(5)'], description: 'Inside printSquare, square(5) is called and pushed' },
              { stack: ['printSquare(5)', 'square(5)', 'multiply(5, 5)'], description: 'Inside square, multiply(5, 5) is called and pushed' },
              { stack: ['printSquare(5)', 'square(5)'], description: 'multiply returns 25, pops off stack' },
              { stack: ['printSquare(5)'], description: 'square returns 25, pops off stack' },
              { stack: [], description: 'printSquare logs 25 and completes, stack is empty' },
            ]} />
            <SnippetOutput lines={['25']} />
          </div>

          {/* Push and Pop operations */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                PUSH: Function Called
              </h4>
              <p className="text-xs text-muted-foreground">
                When a function is called, it's pushed onto the stack with its execution context
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
{`function greet() {
  console.log("Hello");
}

greet(); // ← Pushes greet() onto stack`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <ArrowUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                POP: Function Returns
              </h4>
              <p className="text-xs text-muted-foreground">
                When a function completes (returns), it's popped off the stack
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
{`function add(a, b) {
  return a + b; // ← Returns, pops off stack
}

add(2, 3);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Call Stack Visualization */}
      <AnimatedCallStack />

      {/* Stack Frames */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Box className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Stack Frames & Execution Context
          </CardTitle>
          <CardDescription className="text-base">
            Each function call creates a frame with its own scope and variables
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">Understanding Stack Frames</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function outer() {
  const outerVar = "I'm outer";
  console.log("1. In outer()");
  
  function inner() {
    const innerVar = "I'm inner";
    console.log("2. In inner()");
    console.log("3. Can access outerVar:", outerVar);
  }
  
  inner();
  console.log("4. Back in outer()");
  // innerVar is not accessible here
}

outer();`}</pre>
            <ExecutionTrace steps={[
              { stack: [], description: 'Start: Empty stack' },
              { stack: ['outer()'], description: 'outer() called, frame created with outerVar' },
              { stack: ['outer()', 'inner()'], description: 'inner() called inside outer, new frame with innerVar' },
              { stack: ['outer()'], description: 'inner() completes, frame destroyed, innerVar gone' },
              { stack: [], description: 'outer() completes, frame destroyed, outerVar gone' },
            ]} />
            <SnippetOutput lines={[
              '1. In outer()',
              '2. In inner()',
              "3. Can access outerVar: I'm outer",
              '4. Back in outer()'
            ]} />
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Each Frame Has Its Own:</AlertTitle>
            <AlertDescription>
              • Local variables<br/>
              • Function parameters<br/>
              • Return address (where to go after completion)<br/>
              • Reference to outer scope (closure)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Recursion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <RefreshCw className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Recursion and the Call Stack
          </CardTitle>
          <CardDescription className="text-base">
            How recursive functions build up the stack before unwinding
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Recursive Factorial
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function factorial(n) {
  console.log(\`Calculating factorial(\${n})\`);
  
  // Base case: stop recursion
  if (n <= 1) {
    console.log("Base case reached!");
    return 1;
  }
  
  // Recursive case
  const result = n * factorial(n - 1);
  console.log(\`Returning \${n} * factorial(\${n - 1}) = \${result}\`);
  return result;
}

console.log("Final result:", factorial(4));`}</pre>
            <ExecutionTrace steps={[
              { stack: ['factorial(4)'], description: 'factorial(4) called' },
              { stack: ['factorial(4)', 'factorial(3)'], description: 'factorial(4) calls factorial(3)' },
              { stack: ['factorial(4)', 'factorial(3)', 'factorial(2)'], description: 'factorial(3) calls factorial(2)' },
              { stack: ['factorial(4)', 'factorial(3)', 'factorial(2)', 'factorial(1)'], description: 'factorial(2) calls factorial(1)' },
              { stack: ['factorial(4)', 'factorial(3)', 'factorial(2)'], description: 'factorial(1) returns 1, pops off' },
              { stack: ['factorial(4)', 'factorial(3)'], description: 'factorial(2) returns 2, pops off' },
              { stack: ['factorial(4)'], description: 'factorial(3) returns 6, pops off' },
              { stack: [], description: 'factorial(4) returns 24, stack empty' },
            ]} />
            <SnippetOutput lines={[
              'Calculating factorial(4)',
              'Calculating factorial(3)',
              'Calculating factorial(2)',
              'Calculating factorial(1)',
              'Base case reached!',
              'Returning 2 * factorial(1) = 2',
              'Returning 3 * factorial(2) = 6',
              'Returning 4 * factorial(3) = 24',
              'Final result: 24'
            ]} />
          </div>

          {/* Animated Recursion Visualization */}
          <AnimatedRecursionStack />
        </CardContent>
      </Card>

      {/* Stack Overflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-red-600/80 dark:text-red-400/80" />
            Stack Overflow Errors
          </CardTitle>
          <CardDescription className="text-base">
            What happens when the stack gets too deep
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Stack Limit</AlertTitle>
            <AlertDescription>
              The call stack has a maximum size. If you nest functions too deeply (usually from infinite recursion), you'll get a <strong>RangeError: Maximum call stack size exceeded</strong>.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bad example */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Causes Stack Overflow</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function infiniteLoop() {
  // No base case!
  return infiniteLoop();
}

infiniteLoop();
// RangeError: Maximum call 
// stack size exceeded`}</pre>
            </div>

            {/* Good example */}
            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Has Base Case</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function countdown(n) {
  // Base case stops recursion
  if (n <= 0) {
    return "Done!";
  }
  return countdown(n - 1);
}

countdown(5); // Works fine`}</pre>
            </div>
          </div>

          {/* Real-world example */}
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Real-World: Fixing Stack Overflow
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Problem: Deep recursion
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// sumArray(new Array(100000).fill(1)); // Stack overflow!

// Solution: Use iteration instead
function sumArrayIterative(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

sumArrayIterative(new Array(100000).fill(1)); // Works!
console.log("Sum calculated successfully");`}</pre>
            <SnippetOutput lines={[
              'Sum calculated successfully',
              '',
              '// Iteration uses constant stack space',
              '// Recursion uses O(n) stack space'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Error Stack Traces */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Terminal className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Reading Error Stack Traces
          </CardTitle>
          <CardDescription className="text-base">
            Using the call stack to debug errors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">Understanding Stack Traces</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

function calculate(x, y) {
  return divide(x, y);
}

function processData(num1, num2) {
  const result = calculate(num1, num2);
  console.log("Result:", result);
}

try {
  processData(10, 0);
} catch (error) {
  console.error(error.message);
  console.log("\\nStack trace:");
  console.log(error.stack);
}`}</pre>
            <SnippetOutput lines={[
              'Cannot divide by zero!',
              '',
              'Stack trace:',
              'Error: Cannot divide by zero!',
              '    at divide (<anonymous>:3:11)',
              '    at calculate (<anonymous>:9:10)',
              '    at processData (<anonymous>:13:18)',
              '    at <anonymous>:18:3',
              '',
              '// Read from bottom to top to see call order',
              '// Shows exact line numbers where error occurred'
            ]} />
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Reading Stack Traces</AlertTitle>
            <AlertDescription>
              Stack traces read from <strong>bottom to top</strong>. The bottom shows where execution started, and the top shows where the error occurred. Each line shows the function name and line number, helping you trace the bug's origin.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Common Mistakes
          </CardTitle>
          <CardDescription className="text-base">
            Stack-related issues developers encounter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Missing Base Case in Recursion</h4>
              <p className="text-xs text-muted-foreground mb-2">Recursive functions without base cases cause stack overflow</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`function badRecursion(n) {
  return n + badRecursion(n - 1); // Never stops!
}`}</pre>
            </div>

            <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Circular Function Calls</h4>
              <p className="text-xs text-muted-foreground mb-2">Functions calling each other indefinitely</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`function a() { return b(); }
function b() { return a(); } // Infinite loop!`}</pre>
            </div>

            <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Deeply Nested Callbacks</h4>
              <p className="text-xs text-muted-foreground mb-2">Too many nested functions create large stack</p>
              <pre className="bg-white dark:bg-gray-900 rounded p-2 font-mono text-xs">
{`// Callback hell
a(() => {
  b(() => {
    c(() => {
      d(() => { /* ... */ });
    });
  });
});
// Use Promises or async/await instead`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Working effectively with the call stack
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This ✅
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Always include base cases in recursive functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use iteration for large datasets instead of deep recursion</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Read error stack traces from bottom to top</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use DevTools debugger to inspect the call stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Keep functions focused and shallow</span>
                </li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't create infinite recursion without base cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't ignore stack overflow errors - fix the root cause</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use recursion for simple loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't nest functions excessively deep</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't confuse the call stack with the heap (memory)</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              The call stack is synchronous and single-threaded. When you see async code, remember it doesn't stay on the stack - it moves to the task queue and event loop. Understanding the call stack is the first step to mastering JavaScript's execution model!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Playground */}
      {onOpenWebPlayground && (
        <Card className="border border-blue-200/60 dark:border-blue-900/30 bg-white/95 dark:bg-slate-950/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              See the call stack in action with live examples
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
              className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
            >
              Run in Playground
            </Button>
            <p className="text-sm text-muted-foreground">
              The console demonstrates call stack execution order, nested calls, and error stack traces.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
