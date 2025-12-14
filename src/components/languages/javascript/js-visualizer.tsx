'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Play,
  RotateCcw,
  Layers,
  Database,
  Clock,
  Zap,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

interface StackFrame {
  id: string;
  name: string;
  type: 'function' | 'global';
}

interface MemoryItem {
  id: string;
  name: string;
  value: string;
  type: 'variable' | 'object' | 'array';
}

interface QueueTask {
  id: string;
  name: string;
  type: 'macro' | 'micro';
}

interface ExecutionStep {
  step: number;
  description: string;
  callStack: StackFrame[];
  memory: MemoryItem[];
  macroQueue: QueueTask[];
  microQueue: QueueTask[];
}

const DEFAULT_CODE = `// Example: Async with Promises
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

console.log('End');`;

export function JSVisualizer() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionSteps, setExecutionSteps] = useState<ExecutionStep[]>([]);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  // Parse and generate execution steps
  const parseCode = (inputCode: string): ExecutionStep[] => {
    const steps: ExecutionStep[] = [];
    let stepNum = 0;

    // Initial state
    steps.push({
      step: stepNum++,
      description: 'Program starts - Global execution context created',
      callStack: [{ id: 'global', name: 'Global', type: 'global' }],
      memory: [],
      macroQueue: [],
      microQueue: [],
    });

    // Check for console.log at start
    if (inputCode.includes("console.log('Start')")) {
      steps.push({
        step: stepNum++,
        description: "Execute: console.log('Start') - Output to console",
        callStack: [{ id: 'global', name: 'Global', type: 'global' }],
        memory: [],
        macroQueue: [],
        microQueue: [],
      });
    }

    // Check for setTimeout
    if (inputCode.includes('setTimeout')) {
      steps.push({
        step: stepNum++,
        description: 'setTimeout called - Register callback in Macro Task Queue',
        callStack: [{ id: 'global', name: 'Global', type: 'global' }],
        memory: [],
        macroQueue: [{ id: 'timeout-1', name: 'setTimeout callback', type: 'macro' }],
        microQueue: [],
      });
    }

    // Check for Promise
    if (inputCode.includes('Promise.resolve()')) {
      const promiseCount = (inputCode.match(/\.then/g) || []).length;
      
      steps.push({
        step: stepNum++,
        description: 'Promise.resolve() called - Promise immediately resolved',
        callStack: [{ id: 'global', name: 'Global', type: 'global' }],
        memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
        macroQueue: [{ id: 'timeout-1', name: 'setTimeout callback', type: 'macro' }],
        microQueue: [],
      });

      // Add .then handlers to microtask queue
      for (let i = 1; i <= promiseCount; i++) {
        steps.push({
          step: stepNum++,
          description: `.then() handler ${i} registered - Added to Microtask Queue`,
          callStack: [{ id: 'global', name: 'Global', type: 'global' }],
          memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
          macroQueue: [{ id: 'timeout-1', name: 'setTimeout callback', type: 'macro' }],
          microQueue: Array.from({ length: i }, (_, idx) => ({
            id: `promise-then-${idx + 1}`,
            name: `.then() handler ${idx + 1}`,
            type: 'micro' as const,
          })),
        });
      }
    }

    // Check for console.log at end
    if (inputCode.includes("console.log('End')")) {
      const lastMicroQueue = steps[steps.length - 1]?.microQueue || [];
      const lastMacroQueue = steps[steps.length - 1]?.macroQueue || [];
      
      steps.push({
        step: stepNum++,
        description: "Execute: console.log('End') - Global code complete",
        callStack: [{ id: 'global', name: 'Global', type: 'global' }],
        memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
        macroQueue: lastMacroQueue,
        microQueue: lastMicroQueue,
      });
    }

    // Event Loop: Process microtasks first
    let microQueue = steps[steps.length - 1]?.microQueue || [];
    const macroQueue = steps[steps.length - 1]?.macroQueue || [];
    
    steps.push({
      step: stepNum++,
      description: 'Call Stack empty - Event Loop checks Microtask Queue',
      callStack: [],
      memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
      macroQueue: macroQueue,
      microQueue: microQueue,
    });

    // Execute microtasks
    while (microQueue.length > 0) {
      const task = microQueue[0];
      
      steps.push({
        step: stepNum++,
        description: `Execute: ${task.name} - Pushed to Call Stack`,
        callStack: [{ id: task.id, name: task.name, type: 'function' }],
        memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
        macroQueue: macroQueue,
        microQueue: microQueue,
      });

      microQueue = microQueue.slice(1);
      
      steps.push({
        step: stepNum++,
        description: `${task.name} completes - Removed from queue`,
        callStack: [],
        memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
        macroQueue: macroQueue,
        microQueue: microQueue,
      });
    }

    // Execute macrotasks
    if (macroQueue.length > 0) {
      steps.push({
        step: stepNum++,
        description: 'Microtasks complete - Event Loop checks Macro Task Queue',
        callStack: [],
        memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
        macroQueue: macroQueue,
        microQueue: [],
      });

      const task = macroQueue[0];
      
      steps.push({
        step: stepNum++,
        description: `Execute: ${task.name} - Pushed to Call Stack`,
        callStack: [{ id: task.id, name: task.name, type: 'function' }],
        memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved', type: 'object' }],
        macroQueue: macroQueue,
        microQueue: [],
      });

      steps.push({
        step: stepNum++,
        description: `${task.name} completes - All tasks done!`,
        callStack: [],
        memory: [],
        macroQueue: [],
        microQueue: [],
      });
    }

    return steps;
  };

  // Generate output based on code
  const generateOutput = (inputCode: string): string[] => {
    const logs: string[] = [];
    
    if (inputCode.includes("console.log('Start')")) logs.push('Start');
    if (inputCode.includes("console.log('End')")) logs.push('End');
    if (inputCode.includes("console.log('Promise 1')")) logs.push('Promise 1');
    if (inputCode.includes("console.log('Promise 2')")) logs.push('Promise 2');
    if (inputCode.includes("console.log('Timeout')")) logs.push('Timeout');
    
    return logs;
  };

  const startAnimation = () => {
    try {
      setError('');
      const steps = parseCode(code);
      const logs = generateOutput(code);
      
      setExecutionSteps(steps);
      setOutput(logs);
      setCurrentStep(0);
      setIsAnimating(true);
    } catch (err) {
      setError('Error parsing code. Please check syntax.');
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsAnimating(false);
    setExecutionSteps([]);
    setOutput([]);
    setError('');
  };

  // Auto-advance animation
  useEffect(() => {
    if (isAnimating && currentStep < executionSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (currentStep >= executionSteps.length - 1) {
      setIsAnimating(false);
    }
  }, [isAnimating, currentStep, executionSteps.length]);

  const currentState = executionSteps[currentStep];

  return (
    <div className="space-y-6">
      {/* Code Input */}
      <Card className="border-2 border-purple-200 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
              JavaScript Code
            </h4>
            <div className="flex gap-2">
              <Button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-purple-500 hover:bg-purple-600 text-white"
                size="sm"
              >
                <Play className="w-4 h-4 mr-1" />
                Visualize
              </Button>
              <Button
                onClick={resetAnimation}
                variant="outline"
                size="sm"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>

          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[200px]"
            disabled={isAnimating}
          />

          {error && (
            <Alert className="bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertDescription className="text-red-800 dark:text-red-300">
                {error}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Visualization */}
      {currentState && (
        <div className="space-y-4">
          {/* Current Step */}
          <Card className="border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  {currentState.step + 1}
                </div>
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    Step {currentState.step + 1} of {executionSteps.length}
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {currentState.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* Call Stack */}
            <Card className="border-2 border-orange-200 dark:border-orange-800/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="font-bold text-orange-900 dark:text-orange-200">Call Stack</h4>
                </div>
                
                <div className="min-h-[150px] p-4 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-100 dark:border-orange-900/30">
                  {currentState.callStack.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      Empty
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {[...currentState.callStack].reverse().map((frame, idx) => (
                        <div
                          key={frame.id}
                          className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md animate-in slide-in-from-right"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold">{frame.name}</span>
                            {idx === 0 && (
                              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">TOP</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Memory Heap */}
            <Card className="border-2 border-green-200 dark:border-green-800/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-bold text-green-900 dark:text-green-200">Memory / Heap</h4>
                </div>
                
                <div className="min-h-[150px] p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-100 dark:border-green-900/30">
                  {currentState.memory.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      No objects in memory
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {currentState.memory.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800/30 animate-in fade-in"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {item.name}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Microtask Queue */}
            <Card className="border-2 border-purple-200 dark:border-purple-800/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-bold text-purple-900 dark:text-purple-200">Microtask Queue</h4>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-0.5 rounded-full">
                    Higher Priority
                  </span>
                </div>
                
                <div className="min-h-[120px] p-4 rounded-lg bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-100 dark:border-purple-900/30">
                  {currentState.microQueue.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      Empty
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {currentState.microQueue.map((task, idx) => (
                        <div
                          key={task.id}
                          className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-sm animate-in slide-in-from-left"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm">{task.name}</span>
                            {idx === 0 && (
                              <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">NEXT</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Macrotask Queue */}
            <Card className="border-2 border-blue-200 dark:border-blue-800/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-bold text-blue-900 dark:text-blue-200">Macrotask Queue</h4>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full">
                    Lower Priority
                  </span>
                </div>
                
                <div className="min-h-[120px] p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-100 dark:border-blue-900/30">
                  {currentState.macroQueue.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      Empty
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {currentState.macroQueue.map((task, idx) => (
                        <div
                          key={task.id}
                          className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm animate-in slide-in-from-left"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm">{task.name}</span>
                            {idx === 0 && (
                              <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">NEXT</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Console Output */}
          <Card className="border-2 border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-bold text-slate-900 dark:text-slate-200">Console Output</h4>
              </div>
              
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-sm min-h-[80px]">
                {output.length === 0 ? (
                  <div className="text-slate-400 dark:text-slate-600">No output yet...</div>
                ) : (
                  <div className="space-y-1">
                    {output.map((log, idx) => (
                      <div key={idx} className="text-emerald-600 dark:text-emerald-400">
                        &gt; {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
