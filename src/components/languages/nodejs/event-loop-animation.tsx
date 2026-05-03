'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Zap, Clock, ArrowRight, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';

interface EventLoopAnimationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AnimationStep {
  title: string;
  description: string;
  explanation: string;
  components: {
    callStack: string[];
    eventLoop: 'idle' | 'checking' | 'executing' | 'processing';
    callbackQueue: string[];
    api: string[];
    microtasks: string[];
  };
  codeHighlight?: number[];
  flowAnimation?: {
    from: string;
    to: string;
    type: 'move' | 'pulse' | 'rotate';
  };
}

export default function EventLoopAnimation({ isOpen, onClose }: EventLoopAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1500);
  const [isMuted, setIsMuted] = useState(false);
  const [showCode, setShowCode] = useState(true);
  const [showExplanation, setShowExplanation] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const steps: AnimationStep[] = [
    {
      title: "1. Script Execution Begins",
      description: "JavaScript starts executing from top to bottom",
      explanation: "The main script enters the Call Stack. This is the synchronous execution phase where all top-level code runs.",
      components: {
        callStack: ['main()'],
        eventLoop: 'idle',
        callbackQueue: [],
        api: [],
        microtasks: []
      },
      codeHighlight: [1, 2],
      flowAnimation: { from: 'script', to: 'callstack', type: 'move' }
    },
    {
      title: "2. First Console Log",
      description: "console.log('Start') executes synchronously",
      explanation: "Synchronous operations execute immediately in the Call Stack. 'Start' is logged to the console.",
      components: {
        callStack: ['console.log("Start")', 'main()'],
        eventLoop: 'idle',
        callbackQueue: [],
        api: [],
        microtasks: []
      },
      codeHighlight: [2],
      flowAnimation: { from: 'callstack', to: 'console', type: 'pulse' }
    },
    {
      title: "3. setTimeout Registration",
      description: "Async timer is registered with Web APIs",
      explanation: "setTimeout is handed off to Web APIs (browser/Node.js APIs). The timer starts counting down in the background.",
      components: {
        callStack: ['setTimeout(callback, 2000)', 'main()'],
        eventLoop: 'idle',
        callbackQueue: [],
        api: ['⏰ setTimeout(callback, 2000)'],
        microtasks: []
      },
      codeHighlight: [3, 4, 5, 6],
      flowAnimation: { from: 'callstack', to: 'api', type: 'move' }
    },
    {
      title: "4. Promise Creation",
      description: "Promise.resolve() creates a microtask",
      explanation: "Promises create microtasks, which have higher priority than macrotasks (like setTimeout).",
      components: {
        callStack: ['Promise.resolve()', 'main()'],
        eventLoop: 'idle',
        callbackQueue: [],
        api: ['⏰ setTimeout(callback, 2000)'],
        microtasks: ['Promise.then()']
      },
      codeHighlight: [8, 9],
      flowAnimation: { from: 'callstack', to: 'microtasks', type: 'move' }
    },
    {
      title: "5. Second Console Log",
      description: "console.log('End') executes synchronously",
      explanation: "The last synchronous code executes. The Call Stack will be empty after this.",
      components: {
        callStack: ['console.log("End")', 'main()'],
        eventLoop: 'idle',
        callbackQueue: [],
        api: ['⏰ setTimeout(callback, 2000)'],
        microtasks: ['Promise.then()']
      },
      codeHighlight: [11],
      flowAnimation: { from: 'callstack', to: 'console', type: 'pulse' }
    },
    {
      title: "6. Call Stack Empty",
      description: "Main script completes, Call Stack is empty",
      explanation: "With the Call Stack empty, the Event Loop can start processing queued tasks.",
      components: {
        callStack: [],
        eventLoop: 'checking',
        callbackQueue: [],
        api: ['⏰ setTimeout(callback, 2000)'],
        microtasks: ['Promise.then()']
      },
      flowAnimation: { from: 'eventloop', to: 'microtasks', type: 'rotate' }
    },
    {
      title: "7. Microtask Processing",
      description: "Event Loop processes microtasks first",
      explanation: "Microtasks have priority! The Event Loop processes all microtasks before any macrotasks.",
      components: {
        callStack: ['Promise.then()'],
        eventLoop: 'executing',
        callbackQueue: [],
        api: ['⏰ setTimeout(callback, 2000)'],
        microtasks: []
      },
      codeHighlight: [9],
      flowAnimation: { from: 'microtasks', to: 'callstack', type: 'move' }
    },
    {
      title: "8. Timer Completes",
      description: "setTimeout timer expires, callback moves to queue",
      explanation: "After 2000ms, the timer completes and the callback is moved from Web APIs to the Callback Queue.",
      components: {
        callStack: [],
        eventLoop: 'checking',
        callbackQueue: ['setTimeout callback'],
        api: [],
        microtasks: []
      },
      codeHighlight: [4],
      flowAnimation: { from: 'api', to: 'queue', type: 'move' }
    },
    {
      title: "9. Callback Execution",
      description: "Event Loop processes the callback",
      explanation: "The Event Loop moves the callback from the queue to the Call Stack for execution.",
      components: {
        callStack: ['setTimeout callback'],
        eventLoop: 'executing',
        callbackQueue: [],
        api: [],
        microtasks: []
      },
      codeHighlight: [5, 6],
      flowAnimation: { from: 'queue', to: 'callstack', type: 'move' }
    },
    {
      title: "10. Animation Complete",
      description: "All tasks processed, program ends",
      explanation: "The Event Loop continues running, waiting for new tasks. This is the core of Node.js concurrency!",
      components: {
        callStack: [],
        eventLoop: 'idle',
        callbackQueue: [],
        api: [],
        microtasks: []
      },
      flowAnimation: { from: 'eventloop', to: 'eventloop', type: 'pulse' }
    }
  ];

  const codeExample = `console.log("Start");

setTimeout(() => {
  console.log("Timer callback executed");
}, 2000);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");`;

  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, animationSpeed);
      return () => clearTimeout(timer);
    } else if (isPlaying && currentStep === steps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, animationSpeed, steps.length]);

  useEffect(() => {
    if (autoPlay && isOpen) {
      setIsPlaying(true);
    }
  }, [autoPlay, isOpen]);

  const handlePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(true);
  };
  const handlePause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(false);
  };
  const handleReset = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(false);
    setCurrentStep(0);
  };
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentComponents = steps[currentStep].components;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg">
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Node.js Event Loop - Interactive Animation
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Advanced Controls */}
          <div className="flex flex-wrap items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <Button
                onClick={(e) => handlePrevious(e)}
                disabled={currentStep === 0}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                <SkipBack className="w-4 h-4" />
                Prev
              </Button>
              <Button
                onClick={(e) => isPlaying ? handlePause(e) : handlePlay(e)}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                size="sm"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                onClick={(e) => handleNext(e)}
                disabled={currentStep === steps.length - 1}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                Next
                <SkipForward className="w-4 h-4" />
              </Button>
              <Button onClick={(e) => handleReset(e)} variant="outline" size="sm" className="flex items-center gap-1">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Speed:</span>
                <select
                  value={animationSpeed}
                  onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                  className="px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-800"
                >
                  <option value={3000}>🐢 Slow</option>
                  <option value={1500}>⚡ Normal</option>
                  <option value={750}>🚀 Fast</option>
                  <option value={400}>⚡️ Turbo</option>
                </select>
              </div>
              
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setAutoPlay(!autoPlay);
                }}
                variant={autoPlay ? "default" : "outline"}
                size="sm"
              >
                Auto-play
              </Button>
            </div>
          </div>

          {/* Step Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                {steps[currentStep].title}
              </h3>
              <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">
                {steps[currentStep].description}
              </p>
              {showExplanation && (
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                  {steps[currentStep].explanation}
                </p>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExplanation(!showExplanation);
                }}
                variant="outline"
                size="sm"
                className="justify-start"
              >
                {showExplanation ? 'Hide' : 'Show'} Explanation
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCode(!showCode);
                }}
                variant="outline"
                size="sm"
                className="justify-start"
              >
                {showCode ? 'Hide' : 'Show'} Code
              </Button>
            </div>
          </div>

          {/* Enhanced Event Loop Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Call Stack */}
            <div className="border-2 border-red-200 dark:border-red-800 rounded-xl p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10">
              <h4 className="font-bold mb-3 flex items-center gap-2 text-red-700 dark:text-red-300">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                Call Stack
                <span className="text-xs bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded-full">
                  LIFO
                </span>
              </h4>
              <div className="space-y-2 min-h-[120px]">
                {currentComponents.callStack.length === 0 ? (
                  <div className="text-slate-400 text-sm italic text-center py-4">Empty Stack</div>
                ) : (
                  currentComponents.callStack.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 text-red-800 dark:text-red-200 rounded-lg text-sm font-mono border border-red-300 dark:border-red-700 shadow-sm transform transition-all duration-300 hover:scale-105"
                      style={{
                        opacity: 1 - (index * 0.2),
                        transform: `translateY(${index * 2}px)`
                      }}
                    >
                      {item}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Middle Column - APIs and Event Loop */}
            <div className="space-y-4">
              {/* Web APIs */}
              <div className="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Clock className="w-4 h-4" />
                  Web APIs
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded-full">
                    Async
                  </span>
                </h4>
                <div className="space-y-2 min-h-[80px]">
                  {currentComponents.api.length === 0 ? (
                    <div className="text-slate-400 text-sm italic text-center py-2">No APIs</div>
                  ) : (
                    currentComponents.api.map((item, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-mono border border-blue-300 dark:border-blue-700 shadow-sm animate-pulse"
                      >
                        {item}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Event Loop - Enhanced */}
              <div className="border-2 border-purple-200 dark:border-purple-800 rounded-xl p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <Zap className="w-4 h-4" />
                  Event Loop
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded-full">
                    Heart
                  </span>
                </h4>
                <div className="flex items-center justify-center min-h-[80px]">
                  <div
                    className={`px-4 py-3 rounded-xl font-bold text-sm transition-all duration-500 transform ${
                      currentComponents.eventLoop === 'idle'
                        ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 scale-100'
                        : currentComponents.eventLoop === 'checking'
                        ? 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-200 animate-pulse scale-110'
                        : currentComponents.eventLoop === 'processing'
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 animate-spin scale-105'
                        : currentComponents.eventLoop === 'executing'
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 animate-bounce scale-110'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {currentComponents.eventLoop === 'idle' && '⏸️ Idle'}
                    {currentComponents.eventLoop === 'checking' && '🔍 Checking'}
                    {currentComponents.eventLoop === 'processing' && '⚙️ Processing'}
                    {currentComponents.eventLoop === 'executing' && '▶️ Executing'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Queues */}
            <div className="space-y-4">
              {/* Microtask Queue */}
              <div className="border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  Microtask Queue
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded-full">
                    Priority
                  </span>
                </h4>
                <div className="space-y-2 min-h-[80px]">
                  {currentComponents.microtasks.length === 0 ? (
                    <div className="text-slate-400 text-sm italic text-center py-2">Empty</div>
                  ) : (
                    currentComponents.microtasks.map((item, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg text-sm font-mono border border-yellow-300 dark:border-yellow-700 shadow-sm animate-pulse"
                      >
                        {item}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Callback Queue */}
              <div className="border-2 border-green-200 dark:border-green-800 rounded-xl p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-green-700 dark:text-green-300">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  Callback Queue
                  <span className="text-xs bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded-full">
                    FIFO
                  </span>
                </h4>
                <div className="space-y-2 min-h-[80px]">
                  {currentComponents.callbackQueue.length === 0 ? (
                    <div className="text-slate-400 text-sm italic text-center py-2">Empty Queue</div>
                  ) : (
                    currentComponents.callbackQueue.map((item, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 rounded-lg text-sm font-mono border border-green-300 dark:border-green-700 shadow-sm"
                      >
                        {item}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Progress Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentStep(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-purple-600 scale-150 shadow-lg shadow-purple-500/50'
                      : index < currentStep
                      ? 'bg-green-500 scale-110'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  title={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Code Example */}
          {showCode && (
            <div className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl border border-slate-700">
              <h4 className="font-bold mb-3 text-green-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Example Code:
              </h4>
              <pre className="text-sm font-mono leading-relaxed">
                <code>{codeExample.split('\n').map((line, index) => {
                  const isHighlighted = steps[currentStep].codeHighlight?.includes(index + 1);
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${
                        isHighlighted 
                          ? 'bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded -mx-2 my-1 border-l-2 border-yellow-500' 
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="text-slate-500 mr-3 select-none">{String(index + 1).padStart(2, '0')}</span>
                      {line}
                    </div>
                  );
                })}</code>
              </pre>
            </div>
          )}

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">🔴 Call Stack</h5>
              <p className="text-xs text-red-600 dark:text-red-400">LIFO - Last In, First Out. Synchronous code executes here.</p>
            </div>
            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">🟣 Event Loop</h5>
              <p className="text-xs text-purple-600 dark:text-purple-400">Heart of Node.js. Coordinates task execution.</p>
            </div>
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">🟡 Microtasks</h5>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">Highest priority! Processed before callbacks.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
