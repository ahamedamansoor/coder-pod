'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Play,
  RotateCcw,
  Layers,
  Database,
  Clock,
  Zap,
  AlertCircle,
  CheckCircle2,
  Pause,
  FastForward,
  Rewind,
  Info,
  ArrowRight,
  ArrowDown,
  Lightbulb,
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
  detailedExplanation: string;
  activeSection: 'callstack' | 'memory' | 'microqueue' | 'macroqueue' | 'eventloop' | 'none';
  callStack: StackFrame[];
  memory: MemoryItem[];
  macroQueue: QueueTask[];
  microQueue: QueueTask[];
  consoleOutput: string[];
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

export function JSVisualizerEnhanced() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [executionSteps, setExecutionSteps] = useState<ExecutionStep[]>([]);
  const [error, setError] = useState<string>('');
  const [showLegend, setShowLegend] = useState(true);

  const speedMap = { slow: 5500, normal: 2500, fast: 1500 };

  // Parse and generate execution steps with detailed explanations (matching event loop workflow)
  const parseCode = (inputCode: string): ExecutionStep[] => {
    const steps: ExecutionStep[] = [];
    let stepNum = 0;
    let consoleOutput: string[] = [];

    // Step 1: Program starts - all queues empty
    steps.push({
      step: stepNum++,
      description: 'Program Starts - All Queues Empty',
      detailedExplanation: 'JavaScript engine is ready. All queues (Call Stack, Memory, Microtask Queue, Macrotask Queue) are empty and waiting for code to execute.',
      activeSection: 'callstack',
      callStack: [],
      memory: [],
      macroQueue: [],
      microQueue: [],
      consoleOutput: [],
    });

    // Step 2: Script execution begins
    steps.push({
      step: stepNum++,
      description: 'Script Execution Begins',
      detailedExplanation: 'The main script starts executing. JavaScript creates the Global Execution Context and pushes it onto the Call Stack.',
      activeSection: 'callstack',
      callStack: [{ id: 'global', name: 'main()', type: 'global' }],
      memory: [],
      macroQueue: [],
      microQueue: [],
      consoleOutput: [],
    });

    // Step 3: First console.log - pushed to stack
    if (inputCode.includes("console.log('Start')")) {
      steps.push({
        step: stepNum++,
        description: "Synchronous Code: console.log('Start') Called",
        detailedExplanation: 'console.log() is pushed onto the Call Stack. This is synchronous code that will execute immediately.',
        activeSection: 'callstack',
        callStack: [
          { id: 'global', name: 'main()', type: 'global' },
          { id: 'log-1', name: 'console.log("Start")', type: 'function' }
        ],
        memory: [],
        macroQueue: [],
        microQueue: [],
        consoleOutput: [],
      });

      // Step 4: Output and pop from stack
      consoleOutput = ['Start'];
      steps.push({
        step: stepNum++,
        description: 'Output: Start (Call Stack Pops)',
        detailedExplanation: 'console.log completes execution and is removed from the Call Stack. "Start" appears in the console output.',
        activeSection: 'none',
        callStack: [{ id: 'global', name: 'main()', type: 'global' }],
        memory: [],
        macroQueue: [],
        microQueue: [],
        consoleOutput: [...consoleOutput],
      });
    }

    // Step 5: setTimeout() - pushed to stack
    if (inputCode.includes('setTimeout')) {
      steps.push({
        step: stepNum++,
        description: 'setTimeout() Called',
        detailedExplanation: 'setTimeout() is pushed onto the Call Stack. This is a Web API function that registers a timed callback.',
        activeSection: 'callstack',
        callStack: [
          { id: 'global', name: 'main()', type: 'global' },
          { id: 'timeout-call', name: 'setTimeout()', type: 'function' }
        ],
        memory: [],
        macroQueue: [],
        microQueue: [],
        consoleOutput: [...consoleOutput],
      });

      // Step 6: Callback moved to Web APIs (browser)
      steps.push({
        step: stepNum++,
        description: 'Callback Moved to Web APIs (Browser Handles Timer)',
        detailedExplanation: 'The callback is registered with the browser Web APIs. The timer starts running in the background. setTimeout() pops from the Call Stack.',
        activeSection: 'memory',
        callStack: [{ id: 'global', name: 'main()', type: 'global' }],
        memory: [{ id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' }],
        macroQueue: [],
        microQueue: [],
        consoleOutput: [...consoleOutput],
      });
    }

    // Step 7: Promise.resolve() - pushed to stack
    if (inputCode.includes('Promise.resolve()')) {
      steps.push({
        step: stepNum++,
        description: 'Promise.resolve() Called',
        detailedExplanation: 'Promise.resolve() is pushed onto the Call Stack. A new Promise will be created and immediately resolved.',
        activeSection: 'callstack',
        callStack: [
          { id: 'global', name: 'main()', type: 'global' },
          { id: 'promise-call', name: 'Promise.resolve()', type: 'function' }
        ],
        memory: [{ id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' }],
        macroQueue: [],
        microQueue: [],
        consoleOutput: [...consoleOutput],
      });

      // Step 8: Promise created and stored in memory
      steps.push({
        step: stepNum++,
        description: 'Promise Created and Stored in Memory',
        detailedExplanation: 'The Promise is created and stored in the Memory Heap. It is immediately resolved. Promise.resolve() pops from the Call Stack.',
        activeSection: 'memory',
        callStack: [{ id: 'global', name: 'main()', type: 'global' }],
        memory: [
          { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
          { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
        ],
        macroQueue: [],
        microQueue: [],
        consoleOutput: [...consoleOutput],
      });

      // Step 9: First .then() callback queued
      steps.push({
        step: stepNum++,
        description: 'Promise Callback Goes to MICROTASK Queue',
        detailedExplanation: 'The first .then() handler is added to the MICROTASK Queue. Microtasks have HIGHER priority than Macrotasks and will execute first!',
        activeSection: 'microqueue',
        callStack: [{ id: 'global', name: 'main()', type: 'global' }],
        memory: [
          { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
          { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
        ],
        macroQueue: [],
        microQueue: [{ id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' }],
        consoleOutput: [...consoleOutput],
      });

      // Step 10: Second .then() callback queued
      steps.push({
        step: stepNum++,
        description: 'Second Promise Callback Also Queued',
        detailedExplanation: 'The second .then() is also added to the Microtask Queue. It will execute after the first one completes.',
        activeSection: 'microqueue',
        callStack: [{ id: 'global', name: 'main()', type: 'global' }],
        memory: [
          { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
          { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
        ],
        macroQueue: [],
        microQueue: [
          { id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' },
          { id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' },
        ],
        consoleOutput: [...consoleOutput],
      });
    }

    // Step 11: Last console.log - pushed to stack
    if (inputCode.includes("console.log('End')")) {
      steps.push({
        step: stepNum++,
        description: "Synchronous Code: console.log('End') Called",
        detailedExplanation: 'The last synchronous code line. console.log("End") is pushed onto the Call Stack.',
        activeSection: 'callstack',
        callStack: [
          { id: 'global', name: 'main()', type: 'global' },
          { id: 'log-2', name: 'console.log("End")', type: 'function' }
        ],
        memory: [
          { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
          { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
        ],
        macroQueue: [],
        microQueue: [
          { id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' },
          { id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' },
        ],
        consoleOutput: [...consoleOutput],
      });

      // Step 12: Output and pop
      consoleOutput = [...consoleOutput, 'End'];
      steps.push({
        step: stepNum++,
        description: 'Output: End',
        detailedExplanation: 'console.log completes execution and pops from the Call Stack. "End" is printed. All synchronous code is now complete!',
        activeSection: 'none',
        callStack: [{ id: 'global', name: 'main()', type: 'global' }],
        memory: [
          { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
          { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
        ],
        macroQueue: [],
        microQueue: [
          { id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' },
          { id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' },
        ],
        consoleOutput: [...consoleOutput],
      });
    }

    // Step 13: main() completes
    steps.push({
      step: stepNum++,
      description: 'main() Completes - Call Stack Empty!',
      detailedExplanation: 'The main script finishes execution. The Call Stack is now empty. All synchronous code has completed.',
      activeSection: 'callstack',
      callStack: [],
      memory: [
        { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
        { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
      ],
      macroQueue: [],
      microQueue: [
        { id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' },
        { id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' },
      ],
      consoleOutput: [...consoleOutput],
    });

    // Step 14: Event Loop checks microtasks
    steps.push({
      step: stepNum++,
      description: 'Event Loop Checks MICROTASKS First (High Priority)',
      detailedExplanation: 'The Event Loop asks: "Is the Call Stack empty?" YES! "Any Microtasks?" YES! The Event Loop will process ALL Microtasks before checking Macrotasks.',
      activeSection: 'eventloop',
      callStack: [],
      memory: [
        { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
        { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
      ],
      macroQueue: [],
      microQueue: [
        { id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' },
        { id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' },
      ],
      consoleOutput: [...consoleOutput],
    });

    // Step 15: First microtask pushed to call stack
    steps.push({
      step: stepNum++,
      description: 'Microtask Executing: Promise.then() #1',
      detailedExplanation: 'The first .then() handler is pushed onto the Call Stack from the Microtask Queue and begins executing.',
      activeSection: 'callstack',
      callStack: [{ id: 'then-1', name: 'Promise.then() #1', type: 'function' }],
      memory: [
        { id: 'timer-1', name: 'setTimeout Timer', value: 'running ⏱️', type: 'object' },
        { id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }
      ],
      macroQueue: [],
      microQueue: [
        { id: 'then-1', name: '() => console.log("Promise 1")', type: 'micro' },
        { id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' },
      ],
      consoleOutput: [...consoleOutput],
    });

    // Step 16: Output and timer completes
    consoleOutput = [...consoleOutput, 'Promise 1'];
    steps.push({
      step: stepNum++,
      description: 'Output: Promise 1 - Timer Completes',
      detailedExplanation: '"Promise 1" is printed! The microtask completes and is removed from both Call Stack and Microtask Queue. Meanwhile, the setTimeout timer finishes and its callback moves to the Macrotask Queue.',
      activeSection: 'macroqueue',
      callStack: [],
      memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [{ id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' }],
      consoleOutput: [...consoleOutput],
    });

    // Step 17: Event loop checks for more microtasks
    steps.push({
      step: stepNum++,
      description: 'Event Loop Checks: More Microtasks?',
      detailedExplanation: 'The Event Loop checks again: "Any more Microtasks?" YES! It will process the next one before touching the Macrotask Queue.',
      activeSection: 'eventloop',
      callStack: [],
      memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [{ id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' }],
      consoleOutput: [...consoleOutput],
    });

    // Step 18: Second microtask pushed to call stack
    steps.push({
      step: stepNum++,
      description: 'Microtask Executing: Promise.then() #2',
      detailedExplanation: 'The second .then() handler is pushed onto the Call Stack from the Microtask Queue and begins executing.',
      activeSection: 'callstack',
      callStack: [{ id: 'then-2', name: 'Promise.then() #2', type: 'function' }],
      memory: [{ id: 'promise-1', name: 'Promise', value: 'resolved ✓', type: 'object' }],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [{ id: 'then-2', name: '() => console.log("Promise 2")', type: 'micro' }],
      consoleOutput: [...consoleOutput],
    });

    // Step 19: Output and complete
    consoleOutput = [...consoleOutput, 'Promise 2'];
    steps.push({
      step: stepNum++,
      description: 'Output: Promise 2',
      detailedExplanation: '"Promise 2" is printed! The microtask completes and pops from the Call Stack. The Microtask Queue is now empty.',
      activeSection: 'none',
      callStack: [],
      memory: [],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [],
      consoleOutput: [...consoleOutput],
    });

    // Step 20: All microtasks complete
    steps.push({
      step: stepNum++,
      description: 'All Microtasks Complete!',
      detailedExplanation: 'Event Loop checks: "Any more Microtasks?" NO! The Microtask Queue is empty. Now the Event Loop can finally process Macrotasks.',
      activeSection: 'eventloop',
      callStack: [],
      memory: [],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [],
      consoleOutput: [...consoleOutput],
    });

    // Step 11: Event loop processes macrotask
    steps.push({
      step: stepNum++,
      description: 'Event Loop Processes MACROTASK (Only After Microtasks Done)',
      detailedExplanation: 'Now that ALL Microtasks are complete, the Event Loop can finally process ONE Macrotask from the Macrotask Queue.',
      activeSection: 'macroqueue',
      callStack: [],
      memory: [],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [],
      consoleOutput: [...consoleOutput],
    });

    // Step 12: Execute macrotask
    steps.push({
      step: stepNum++,
      description: 'Macrotask Executing: setTimeout Callback',
      detailedExplanation: 'The setTimeout callback is pushed onto the Call Stack and begins executing. Notice: It runs AFTER all Promises, even though setTimeout had 0ms delay!',
      activeSection: 'callstack',
      callStack: [{ id: 'timeout-1', name: 'setTimeout callback', type: 'function' }],
      memory: [],
      macroQueue: [{ id: 'timeout-1', name: '() => console.log("Timeout")', type: 'macro' }],
      microQueue: [],
      consoleOutput: [...consoleOutput],
    });

    consoleOutput = [...consoleOutput, 'Timeout'];
    steps.push({
      step: stepNum++,
      description: 'Output: Timeout',
      detailedExplanation: '"Timeout" is printed to the console! The macrotask completes and is removed from both Call Stack and Macrotask Queue.',
      activeSection: 'none',
      callStack: [],
      memory: [],
      macroQueue: [],
      microQueue: [],
      consoleOutput: [...consoleOutput],
    });

    // Final step
    steps.push({
      step: stepNum++,
      description: '✅ Program Complete!',
      detailedExplanation: 'All tasks complete! Final execution order: Start → End → Promise 1 → Promise 2 → Timeout. Key Insight: (1) Synchronous code runs first, (2) then ALL Microtasks, (3) then Macrotasks. This is how the Event Loop works!',
      activeSection: 'none',
      callStack: [],
      memory: [],
      macroQueue: [],
      microQueue: [],
      consoleOutput: [...consoleOutput],
    });

    return steps;
  };

  const startAnimation = () => {
    try {
      setError('');
      const steps = parseCode(code);
      setExecutionSteps(steps);
      setCurrentStep(0);
      setIsAnimating(true);
      setIsPaused(false);
    } catch (err) {
      setError('Error parsing code. Please check syntax.');
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsAnimating(false);
    setIsPaused(false);
    setExecutionSteps([]);
    setError('');
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const stepForward = () => {
    if (currentStep < executionSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Auto-advance animation
  useEffect(() => {
    if (isAnimating && !isPaused && currentStep < executionSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, speedMap[animationSpeed]);
      return () => clearTimeout(timer);
    } else if (currentStep >= executionSteps.length - 1 && isAnimating) {
      setIsAnimating(false);
    }
  }, [isAnimating, isPaused, currentStep, executionSteps.length, animationSpeed]);

  const currentState = executionSteps[currentStep];

  return (
    <div className="space-y-6">
      {/* Legend - Educational Guide */}
      {showLegend && (
        <Card className="border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-bold text-emerald-900 dark:text-emerald-200">Quick Guide - Understanding the Visualizer</h4>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowLegend(false)}>Hide</Button>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Layers className="w-4 h-4 text-orange-600 mt-0.5" />
                <div>
                  <strong className="text-orange-700 dark:text-orange-400">Call Stack:</strong> Functions currently running (LIFO - Last In, First Out)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Database className="w-4 h-4 text-green-600 mt-0.5" />
                <div>
                  <strong className="text-green-700 dark:text-green-400">Memory/Heap:</strong> Where objects and variables are stored
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <strong className="text-purple-700 dark:text-purple-400">Microtask Queue:</strong> Promise callbacks (HIGH priority)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <strong className="text-blue-700 dark:text-blue-400">Macrotask Queue:</strong> setTimeout/setInterval (LOWER priority)
                </div>
              </div>
            </div>
            <Alert className="mt-4 bg-white/80 dark:bg-slate-900/80">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs">
                <strong>Key Rule:</strong> Event Loop processes Microtasks BEFORE Macrotasks. This is why Promises run before setTimeout!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {!showLegend && (
        <Button variant="outline" size="sm" onClick={() => setShowLegend(true)}>
          <Info className="w-4 h-4 mr-1" />
          Show Guide
        </Button>
      )}

      {/* Code Input */}
      <Card className="border-2 border-purple-200 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-purple-600" />
              Step 1: Write or Edit JavaScript Code
            </h4>
            <div className="flex gap-2">
              <Button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg"
                size="sm"
              >
                <Play className="w-4 h-4 mr-1" />
                {isAnimating ? 'Running...' : 'Visualize'}
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
            className="font-mono text-sm min-h-[200px] border-2"
            disabled={isAnimating}
            placeholder="Write your JavaScript code here..."
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
          {/* Playback Controls */}
          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Button
                    onClick={stepBackward}
                    disabled={currentStep === 0}
                    variant="outline"
                    size="sm"
                  >
                    <Rewind className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={togglePause}
                    disabled={!isAnimating}
                    variant="outline"
                    size="sm"
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={stepForward}
                    disabled={currentStep >= executionSteps.length - 1}
                    variant="outline"
                    size="sm"
                  >
                    <FastForward className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Speed:</span>
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <Button
                      key={speed}
                      onClick={() => setAnimationSpeed(speed)}
                      variant={animationSpeed === speed ? 'default' : 'outline'}
                      size="sm"
                      className="capitalize"
                    >
                      {speed}
                    </Button>
                  ))}
                </div>

                <div className="text-sm font-medium">
                  Step {currentState.step + 1} / {executionSteps.length}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300"
                  style={{ width: `${((currentState.step + 1) / executionSteps.length) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Current Step - Large and Prominent */}
          <Card className={`border-2 transition-all duration-500 ${
            currentState.activeSection === 'callstack' ? 'border-orange-400 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 ring-4 ring-orange-200 dark:ring-orange-900/50' :
            currentState.activeSection === 'memory' ? 'border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 ring-4 ring-green-200 dark:ring-green-900/50' :
            currentState.activeSection === 'microqueue' ? 'border-purple-400 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30 ring-4 ring-purple-200 dark:ring-purple-900/50' :
            currentState.activeSection === 'macroqueue' ? 'border-blue-400 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 ring-4 ring-blue-200 dark:ring-blue-900/50' :
            currentState.activeSection === 'eventloop' ? 'border-cyan-400 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 ring-4 ring-cyan-200 dark:ring-cyan-900/50' :
            'border-slate-300 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900'
          }`}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg animate-pulse">
                    {currentState.step + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {currentState.description}
                    </h3>
                    {currentState.activeSection !== 'none' && (
                      <Badge className={`animate-bounce ${
                        currentState.activeSection === 'callstack' ? 'bg-orange-500' :
                        currentState.activeSection === 'memory' ? 'bg-green-500' :
                        currentState.activeSection === 'microqueue' ? 'bg-purple-500' :
                        currentState.activeSection === 'macroqueue' ? 'bg-blue-500' :
                        'bg-cyan-500'
                      }`}>
                        ← Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {currentState.detailedExplanation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* Call Stack */}
            <Card className={`border-2 transition-all duration-500 ${
              currentState.activeSection === 'callstack' 
                ? 'border-orange-400 dark:border-orange-600 ring-4 ring-orange-200 dark:ring-orange-900/50 shadow-xl scale-105' 
                : 'border-orange-200 dark:border-orange-800/30'
            }`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg transition-all ${
                    currentState.activeSection === 'callstack' 
                      ? 'bg-orange-500 animate-pulse' 
                      : 'bg-orange-100 dark:bg-orange-900/30'
                  }`}>
                    <Layers className={`w-5 h-5 ${
                      currentState.activeSection === 'callstack' 
                        ? 'text-white' 
                        : 'text-orange-600 dark:text-orange-400'
                    }`} />
                  </div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-200">Call Stack</h4>
                  {currentState.activeSection === 'callstack' && (
                    <ArrowDown className="w-5 h-5 text-orange-600 animate-bounce" />
                  )}
                </div>
                
                <div className="min-h-[180px] p-4 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-100 dark:border-orange-900/30">
                  {currentState.callStack.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      Empty (Ready for tasks!)
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {[...currentState.callStack].reverse().map((frame, idx) => (
                        <div
                          key={frame.id}
                          className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transition-all duration-700 ease-out"
                          style={{
                            animation: 'scaleIn 0.6s ease-out, slideDown 0.6s ease-out',
                            animationDelay: `${idx * 150}ms`,
                            transformOrigin: 'top center'
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-sm">{frame.name}</span>
                            {idx === 0 && (
                              <Badge className="bg-white/20 text-white text-xs">← TOP</Badge>
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
            <Card className={`border-2 transition-all duration-500 ${
              currentState.activeSection === 'memory' 
                ? 'border-green-400 dark:border-green-600 ring-4 ring-green-200 dark:ring-green-900/50 shadow-xl scale-105' 
                : 'border-green-200 dark:border-green-800/30'
            }`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg transition-all ${
                    currentState.activeSection === 'memory' 
                      ? 'bg-green-500 animate-pulse' 
                      : 'bg-green-100 dark:bg-green-900/30'
                  }`}>
                    <Database className={`w-5 h-5 ${
                      currentState.activeSection === 'memory' 
                        ? 'text-white' 
                        : 'text-green-600 dark:text-green-400'
                    }`} />
                  </div>
                  <h4 className="font-bold text-green-900 dark:text-green-200">Memory / Heap</h4>
                  {currentState.activeSection === 'memory' && (
                    <ArrowDown className="w-5 h-5 text-green-600 animate-bounce" />
                  )}
                </div>
                
                <div className="min-h-[180px] p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-100 dark:border-green-900/30">
                  {currentState.memory.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      No objects stored
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {currentState.memory.map((item, idx) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800/30 transition-all duration-700"
                          style={{
                            animation: 'fadeInGrow 0.7s ease-out',
                            animationDelay: `${idx * 150}ms`
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {item.name}
                            </span>
                            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs">
                              {item.value}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Microtask Queue */}
            <Card className={`border-2 transition-all duration-500 ${
              currentState.activeSection === 'microqueue' 
                ? 'border-purple-400 dark:border-purple-600 ring-4 ring-purple-200 dark:ring-purple-900/50 shadow-xl scale-105' 
                : 'border-purple-200 dark:border-purple-800/30'
            }`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg transition-all ${
                    currentState.activeSection === 'microqueue' 
                      ? 'bg-purple-500 animate-pulse' 
                      : 'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    <Zap className={`w-5 h-5 ${
                      currentState.activeSection === 'microqueue' 
                        ? 'text-white' 
                        : 'text-purple-600 dark:text-purple-400'
                    }`} />
                  </div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-200">Microtask Queue</h4>
                  <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs">
                    HIGH Priority
                  </Badge>
                  {currentState.activeSection === 'microqueue' && (
                    <ArrowDown className="w-5 h-5 text-purple-600 animate-bounce" />
                  )}
                </div>
                
                <div className="min-h-[150px] p-4 rounded-lg bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-100 dark:border-purple-900/30">
                  {currentState.microQueue.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      No tasks queued
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {currentState.microQueue.map((task, idx) => (
                        <div
                          key={task.id}
                          className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-md transition-all duration-700"
                          style={{
                            animation: 'slideInFromTop 0.6s ease-out, glow 1s ease-in-out infinite alternate',
                            animationDelay: `${idx * 150}ms`
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs">{task.name}</span>
                            {idx === 0 && (
                              <Badge className="bg-white/20 text-white text-xs">NEXT →</Badge>
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
            <Card className={`border-2 transition-all duration-500 ${
              currentState.activeSection === 'macroqueue' 
                ? 'border-blue-400 dark:border-blue-600 ring-4 ring-blue-200 dark:ring-blue-900/50 shadow-xl scale-105' 
                : 'border-blue-200 dark:border-blue-800/30'
            }`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg transition-all ${
                    currentState.activeSection === 'macroqueue' 
                      ? 'bg-blue-500 animate-pulse' 
                      : 'bg-blue-100 dark:bg-blue-900/30'
                  }`}>
                    <Clock className={`w-5 h-5 ${
                      currentState.activeSection === 'macroqueue' 
                        ? 'text-white' 
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-200">Macrotask Queue</h4>
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs">
                    LOWER Priority
                  </Badge>
                  {currentState.activeSection === 'macroqueue' && (
                    <ArrowDown className="w-5 h-5 text-blue-600 animate-bounce" />
                  )}
                </div>
                
                <div className="min-h-[150px] p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-100 dark:border-blue-900/30">
                  {currentState.macroQueue.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
                      No tasks queued
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {currentState.macroQueue.map((task, idx) => (
                        <div
                          key={task.id}
                          className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transition-all duration-700"
                          style={{
                            animation: 'slideInFromTop 0.6s ease-out',
                            animationDelay: `${idx * 150}ms`
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs">{task.name}</span>
                            {idx === 0 && (
                              <Badge className="bg-white/20 text-white text-xs">NEXT →</Badge>
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
          <Card className="border-2 border-emerald-200 dark:border-emerald-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-bold text-slate-900 dark:text-slate-200">Console Output</h4>
                <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                  {currentState.consoleOutput.length} logs
                </Badge>
              </div>
              
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 font-mono text-sm min-h-[120px]">
                {currentState.consoleOutput.length === 0 ? (
                  <div className="text-slate-400 dark:text-slate-600">Waiting for output...</div>
                ) : (
                  <div className="space-y-1">
                    {currentState.consoleOutput.map((log, idx) => (
                      <div 
                        key={idx} 
                        className="text-emerald-600 dark:text-emerald-400 transition-all duration-500"
                        style={{ 
                          animation: 'typeIn 0.5s ease-out',
                          animationDelay: `${idx * 100}ms`,
                          opacity: 0,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <span className="text-slate-500 dark:text-slate-500">{idx + 1}.</span> {log}
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

// Add custom animations
const style = document.createElement('style');
style.textContent = `
  @keyframes scaleIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeInGrow {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-30px) translateX(-10px);
      opacity: 0;
    }
    60% {
      transform: translateY(5px) translateX(0);
    }
    100% {
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(168, 85, 247, 0.4);
    }
    100% {
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.4);
    }
  }

  @keyframes typeIn {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('js-visualizer-animations')) {
  style.id = 'js-visualizer-animations';
  document.head.appendChild(style);
}
