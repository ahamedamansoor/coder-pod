'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, ArrowRight,
  Plus, Minus, RotateCw
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

const styleTag = (
  <style jsx>{`
    @keyframes slideIn {
      0% { transform: translateX(-20px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
      50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8); }
    }
    .slide-in {
      animation: slideIn 0.3s ease-out;
    }
    .pulse {
      animation: pulse 0.5s ease-in-out;
    }
    .glow {
      animation: glow 1s ease-in-out infinite;
    }
  `}</style>
);

type QueueOperation = 'init' | 'enqueue' | 'dequeue' | 'full' | 'empty' | 'done';

type Step = {
  step: number;
  front: number;
  rear: number;
  size: number;
  currentLine: number;
  description: string;
  action: string;
  highlighted: number[];
  operation: QueueOperation;
  newValue: number;
  dequeuedValue: number | null;
};

export default function CircularQueue() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Queue data
  const [queueData] = useState([10, 20, 30, 40, 50]);
  const [queue] = useState<Array<number | null>>([10, 20, 30, 40, 50, null, null, null]);
  const [front, setFront] = useState(0);
  const [rear, setRear] = useState(4);
  const [size, setSize] = useState(5);
  const [capacity] = useState(8);
  
  // Operation state
  const [operation, setOperation] = useState<QueueOperation>('init');
  const [newValue, setNewValue] = useState(60);
  const [dequeuedValue, setDequeuedValue] = useState<number | null>(null);

  // Comprehensive steps array - following the template's granular approach
  const steps: Step[] = [
    // INITIALIZATION (5 steps)
    {
      step: 1,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 1,
      description: '📋 Initialize: Create circular queue with capacity = 8',
      action: 'init',
      highlighted: [],
      operation: 'init',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 2,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 2,
      description: '📋 Set front pointer = 0 (points to first element)',
      action: 'init',
      highlighted: [0],
      operation: 'init',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 3,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 3,
      description: '📋 Set rear pointer = 4 (points to last element)',
      action: 'init',
      highlighted: [4],
      operation: 'init',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 4,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 4,
      description: '📋 Set current size = 5 (number of elements)',
      action: 'init',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'init',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 5,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 5,
      description: '📋 Initialize queue with elements: [10, 20, 30, 40, 50]',
      action: 'init',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'init',
      newValue: 60,
      dequeuedValue: null
    },

    // ENQUEUE OPERATION (12 steps)
    {
      step: 6,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 8,
      description: '🔄 Enqueue Operation: Starting to add element 60',
      action: 'loop-start',
      highlighted: [],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 7,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 9,
      description: '✅ Check: Is queue full? size(5) < capacity(8)? YES! Space available',
      action: 'check',
      highlighted: [],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 8,
      front: 0,
      rear: 4,
      size: 5,
      currentLine: 10,
      description: '📊 Calculate new rear: (rear + 1) % capacity = (4 + 1) % 8 = 5',
      action: 'calculate',
      highlighted: [5],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 9,
      front: 0,
      rear: 5,
      size: 5,
      currentLine: 11,
      description: '➕ Update rear pointer: 4 → 5',
      action: 'update',
      highlighted: [5],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 10,
      front: 0,
      rear: 5,
      size: 5,
      currentLine: 12,
      description: '💾 Insert value: queue[5] = 60',
      action: 'update',
      highlighted: [5],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 11,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 13,
      description: '➕ Increment size: 5 → 6',
      action: 'update',
      highlighted: [0, 1, 2, 3, 4, 5],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 12,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 14,
      description: '✅ Enqueue successful! Element 60 added at position 5',
      action: 'found',
      highlighted: [5],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 13,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 15,
      description: '📋 Queue state: [10, 20, 30, 40, 50, 60, _, _]',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4, 5],
      operation: 'enqueue',
      newValue: 60,
      dequeuedValue: null
    },

    // DEQUEUE OPERATION (12 steps)
    {
      step: 14,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 18,
      description: '🔄 Dequeue Operation: Starting to remove element',
      action: 'loop-start',
      highlighted: [],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 15,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 19,
      description: '✅ Check: Is queue empty? size(6) > 0? YES! Elements available',
      action: 'check',
      highlighted: [0],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: null
    },
    {
      step: 16,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 20,
      description: '📍 Get element: queue[front] = queue[0] = 10',
      action: 'examine',
      highlighted: [0],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },
    {
      step: 17,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 21,
      description: '📊 Store dequeued value: removed = 10',
      action: 'calculate',
      highlighted: [0],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },
    {
      step: 18,
      front: 0,
      rear: 5,
      size: 6,
      currentLine: 22,
      description: '🗑️ Remove element: queue[0] = null',
      action: 'update',
      highlighted: [0],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },
    {
      step: 19,
      front: 1,
      rear: 5,
      size: 6,
      currentLine: 23,
      description: '➕ Update front pointer: 0 → 1 (front = (front + 1) % capacity)',
      action: 'update',
      highlighted: [1],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },
    {
      step: 20,
      front: 1,
      rear: 5,
      size: 5,
      currentLine: 24,
      description: '➖ Decrement size: 6 → 5',
      action: 'update',
      highlighted: [1, 2, 3, 4, 5],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },
    {
      step: 21,
      front: 1,
      rear: 5,
      size: 5,
      currentLine: 25,
      description: '✅ Dequeue successful! Removed element: 10',
      action: 'found',
      highlighted: [],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },
    {
      step: 22,
      front: 1,
      rear: 5,
      size: 5,
      currentLine: 26,
      description: '📋 Queue state: [_, 20, 30, 40, 50, 60, _, _]',
      action: 'done',
      highlighted: [1, 2, 3, 4, 5],
      operation: 'dequeue',
      newValue: 60,
      dequeuedValue: 10
    },

    // WRAP AROUND DEMONSTRATION (10 steps)
    {
      step: 23,
      front: 1,
      rear: 5,
      size: 5,
      currentLine: 29,
      description: '🔄 Wrap Around Demo: Adding elements to show circular nature',
      action: 'loop-start',
      highlighted: [],
      operation: 'enqueue',
      newValue: 70,
      dequeuedValue: 10
    },
    {
      step: 24,
      front: 1,
      rear: 5,
      size: 5,
      currentLine: 30,
      description: '📊 Calculate: (rear + 1) % capacity = (5 + 1) % 8 = 6',
      action: 'calculate',
      highlighted: [6],
      operation: 'enqueue',
      newValue: 70,
      dequeuedValue: 10
    },
    {
      step: 25,
      front: 1,
      rear: 6,
      size: 6,
      currentLine: 31,
      description: '➕ Update rear: 5 → 6, Insert: queue[6] = 70',
      action: 'update',
      highlighted: [6],
      operation: 'enqueue',
      newValue: 70,
      dequeuedValue: 10
    },
    {
      step: 26,
      front: 1,
      rear: 6,
      size: 7,
      currentLine: 32,
      description: '➕ Increment size: 5 → 7',
      action: 'update',
      highlighted: [1, 2, 3, 4, 5, 6],
      operation: 'enqueue',
      newValue: 70,
      dequeuedValue: 10
    },
    {
      step: 27,
      front: 1,
      rear: 6,
      size: 7,
      currentLine: 33,
      description: '📊 Calculate: (rear + 1) % capacity = (6 + 1) % 8 = 7',
      action: 'calculate',
      highlighted: [7],
      operation: 'enqueue',
      newValue: 80,
      dequeuedValue: 10
    },
    {
      step: 28,
      front: 1,
      rear: 7,
      size: 8,
      currentLine: 34,
      description: '➕ Update rear: 6 → 7, Insert: queue[7] = 80',
      action: 'update',
      highlighted: [7],
      operation: 'enqueue',
      newValue: 80,
      dequeuedValue: 10
    },
    {
      step: 29,
      front: 1,
      rear: 7,
      size: 8,
      currentLine: 35,
      description: '➕ Increment size: 7 → 8',
      action: 'update',
      highlighted: [1, 2, 3, 4, 5, 6, 7],
      operation: 'enqueue',
      newValue: 80,
      dequeuedValue: 10
    },
    {
      step: 30,
      front: 1,
      rear: 7,
      size: 8,
      currentLine: 36,
      description: '📋 Queue is now FULL! All positions occupied',
      action: 'done',
      highlighted: [1, 2, 3, 4, 5, 6, 7],
      operation: 'full',
      newValue: 80,
      dequeuedValue: 10
    },
    {
      step: 31,
      front: 1,
      rear: 7,
      size: 8,
      currentLine: 37,
      description: '🎯 Key Insight: Rear wrapped from 7 to 0 if we add more',
      action: 'done',
      highlighted: [7, 0],
      operation: 'full',
      newValue: 80,
      dequeuedValue: 10
    },
    {
      step: 32,
      front: 1,
      rear: 7,
      size: 8,
      currentLine: 38,
      description: '✅ Circular queue implementation complete!',
      action: 'result',
      highlighted: [1, 2, 3, 4, 5, 6, 7],
      operation: 'done',
      newValue: 80,
      dequeuedValue: 10
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'class CircularQueue {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  constructor(capacity) {', 
        active: stepData.currentLine === 2, 
        indent: 1 
      },
      { 
        line: 3, 
        code: '    this.capacity = capacity;', 
        active: stepData.currentLine === 3, 
        indent: 2,
        values: stepData.currentLine === 3 ? `capacity=${capacity}` : ''
      },
      { 
        line: 4, 
        code: '    this.front = 0;', 
        active: stepData.currentLine === 4, 
        indent: 2,
        values: stepData.currentLine === 4 ? `front=${stepData.front}` : ''
      },
      { 
        line: 5, 
        code: '    this.rear = capacity - 1;', 
        active: stepData.currentLine === 5, 
        indent: 2,
        values: stepData.currentLine === 5 ? `rear=${stepData.rear}` : ''
      },
      { 
        line: 6, 
        code: '    this.size = 0;', 
        active: stepData.currentLine === 6, 
        indent: 2,
        values: stepData.currentLine === 6 ? `size=${stepData.size}` : ''
      },
      { 
        line: 7, 
        code: '    this.queue = new Array(capacity);', 
        active: stepData.currentLine === 7, 
        indent: 2 
      },
      { 
        line: 8, 
        code: '  }', 
        active: stepData.currentLine === 8, 
        indent: 1 
      },
      { 
        line: 9, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 10, 
        code: '  enqueue(value) {', 
        active: stepData.currentLine === 10, 
        indent: 1 
      },
      { 
        line: 11, 
        code: '    if (this.size === this.capacity) return false;', 
        active: stepData.currentLine === 11, 
        indent: 2 
      },
      { 
        line: 12, 
        code: '    this.rear = (this.rear + 1) % this.capacity;', 
        active: stepData.currentLine === 12, 
        indent: 2,
        values: stepData.currentLine === 12 ? `rear=${stepData.rear}` : ''
      },
      { 
        line: 13, 
        code: '    this.queue[this.rear] = value;', 
        active: stepData.currentLine === 13, 
        indent: 2,
        values: stepData.currentLine === 13 ? `queue[${stepData.rear}]=${stepData.newValue}` : ''
      },
      { 
        line: 14, 
        code: '    this.size++;', 
        active: stepData.currentLine === 14, 
        indent: 2,
        values: stepData.currentLine === 14 ? `size=${stepData.size}` : ''
      },
      { 
        line: 15, 
        code: '    return true;', 
        active: stepData.currentLine === 15, 
        indent: 2 
      },
      { 
        line: 16, 
        code: '  }', 
        active: stepData.currentLine === 16, 
        indent: 1 
      },
      { 
        line: 17, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 18, 
        code: '  dequeue() {', 
        active: stepData.currentLine === 18, 
        indent: 1 
      },
      { 
        line: 19, 
        code: '    if (this.size === 0) return null;', 
        active: stepData.currentLine === 19, 
        indent: 2 
      },
      { 
        line: 20, 
        code: '    const value = this.queue[this.front];', 
        active: stepData.currentLine === 20, 
        indent: 2,
        values: stepData.currentLine === 20 ? `value=${stepData.dequeuedValue}` : ''
      },
      { 
        line: 21, 
        code: '    this.queue[this.front] = null;', 
        active: stepData.currentLine === 21, 
        indent: 2 
      },
      { 
        line: 22, 
        code: '    this.front = (this.front + 1) % this.capacity;', 
        active: stepData.currentLine === 22, 
        indent: 2,
        values: stepData.currentLine === 22 ? `front=${stepData.front}` : ''
      },
      { 
        line: 23, 
        code: '    this.size--;', 
        active: stepData.currentLine === 23, 
        indent: 2,
        values: stepData.currentLine === 23 ? `size=${stepData.size}` : ''
      },
      { 
        line: 24, 
        code: '    return value;', 
        active: stepData.currentLine === 24, 
        indent: 2 
      },
      { 
        line: 25, 
        code: '  }', 
        active: stepData.currentLine === 25, 
        indent: 1 
      },
      { 
        line: 26, 
        code: '}', 
        active: stepData.currentLine === 26, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setFront(step.front);
    setRear(step.rear);
    setSize(step.size);
    setOperation(step.operation);
    setNewValue(step.newValue);
    setDequeuedValue(step.dequeuedValue);
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
    <>
      {styleTag}
      <div className="space-y-8">
        {/* Page Header */}
        <PageHeader
          icon={RotateCw}
          category="DSA · Queues · Basic Queue Operations"
          title="Implement Circular Queue"
          description="Master circular queue implementation with efficient space utilization and wrap-around operations"
          colorTheme="blue"
          badges={[
            { label: 'Time: O(1)', variant: 'success' },
            { label: 'Space: O(n)', variant: 'info' },
            { label: 'Intermediate', variant: 'default' },
          ]}
        />

        <div className="container mx-auto px-4 py-8 space-y-8">
          {/* Visual Problem Statement */}
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Understanding Circular Queue
              </CardTitle>
              <CardDescription>Learn how circular queues efficiently utilize array space</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* What is Circular Queue */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                  <RotateCw className="w-5 h-5" />
                  What is a Circular Queue?
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    A circular queue is a linear data structure that follows the FIFO principle but uses a single array efficiently by connecting the end of the queue back to the front, forming a circle.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                      <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                      <div className="font-mono text-sm">Queue Operations: [Enqueue, Dequeue, Front, Rear]</div>
                    </div>
                    
                    <div className="p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                      <div className="font-mono text-sm">Efficient O(1) operations with no wasted space</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Comparison */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
                  Circular vs Linear Queue
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-600 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-orange-700 dark:text-orange-300">Linear Queue Problem</span>
                          <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Inefficient ✗</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          After dequeuing elements, the front moves forward but those empty spaces can never be reused!
                        </div>
                        <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          [_, _, _, 40, 50] ← Wasted space at front
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-green-700 dark:text-green-300">Circular Queue Solution</span>
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Efficient ✓</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          Rear wraps around to reuse empty spaces at the front!
                        </div>
                        <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          [60, 70, _, 40, 50] ← Space reused!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Algorithm Steps */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  How Circular Queue Works
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Initialize Pointers</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                        <div className="font-mono text-xs">front = 0, rear = capacity-1, size = 0</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Enqueue Operation</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Formula:</div>
                        <div className="font-mono text-xs">rear = (rear + 1) % capacity</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Dequeue Operation</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Formula:</div>
                        <div className="font-mono text-xs">front = (front + 1) % capacity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Concepts */}
              <Alert className="border-orange-200 dark:border-orange-700">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <AlertTitle>Key Concepts</AlertTitle>
                <AlertDescription className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Modulo operator (%) enables wrap-around behavior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Front points to first element, Rear points to last element</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Size tracks current number of elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>100% space utilization compared to linear queue</span>
                  </div>
                </AlertDescription>
              </Alert>

            </CardContent>
          </Card>

          {/* Animated Visualization */}
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                  <RotateCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                Step-by-Step Animation
              </CardTitle>
              <CardDescription>Watch how the circular queue operations work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Controls */}
              <div className="flex items-center justify-center gap-3">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
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
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                
                <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
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
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">circular-queue.js</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                    </div>
                  </div>

                  <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                    {getCodeWithValues(steps[currentStep]).map((lineData) => (
                      <div
                        key={lineData.line}
                        className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                          lineData.active
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500'
                            : ''
                        }`}
                      >
                        <span className={`select-none w-6 text-right flex-shrink-0 ${
                          lineData.active
                            ? 'text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-slate-400 dark:text-slate-600'
                        }`}>
                          {lineData.line}
                        </span>

                        <code className="flex-1 text-slate-700 dark:text-slate-300">
                          <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                            {lineData.code}
                          </span>
                          {lineData.values && (
                            <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">
                              {lineData.values}
                            </span>
                          )}
                        </code>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">front:</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].front}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">rear:</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].rear}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">size:</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].size}</span>
                        </div>
                        {steps[currentStep].dequeuedValue !== null && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 dark:text-slate-400">removed:</span>
                            <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].dequeuedValue}</span>
                          </div>
                        )}
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
                          {steps[currentStep].action === 'loop-start' && '🔄 Operation Start'}
                          {steps[currentStep].action === 'check' && '🔍 Checking Condition'}
                          {steps[currentStep].action === 'calculate' && '📊 Calculating'}
                          {steps[currentStep].action === 'update' && '➕ Updating'}
                          {steps[currentStep].action === 'examine' && '📍 Examining'}
                          {steps[currentStep].action === 'found' && '✅ Operation Complete'}
                          {steps[currentStep].action === 'done' && '🎯 State Update'}
                          {steps[currentStep].action === 'result' && '🏆 Final Result'}
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                      {steps[currentStep].description}
                    </p>
                  </div>
                </div>
              )}

              {/* Visual Queue Representation */}
              {currentStep >= 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Circular Queue Visualization:</p>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span>Front</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span>Rear</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-orange-500 rounded"></div>
                        <span>Current</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    {/* Circular Layout */}
                    <div className="relative w-96 h-96 mx-auto">
                      {/* Queue elements in circular arrangement */}
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                        const angle = (index * 45 - 90) * (Math.PI / 180);
                        const x = 192 + 120 * Math.cos(angle);
                        const y = 192 + 120 * Math.sin(angle);
                        
                        const isFront = steps[currentStep].front === index;
                        const isRear = steps[currentStep].rear === index;
                        const isHighlighted = steps[currentStep].highlighted.includes(index);
                        const hasValue = queue[index] !== null;
                        
                        return (
                          <div
                            key={index}
                            className="absolute flex flex-col items-center gap-2"
                            style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
                          >
                            {/* Value Box */}
                            <div
                              className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                                isFront && isRear
                                  ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-125 ring-4 ring-purple-300 animate-pulse'
                                  : isFront
                                  ? 'bg-blue-200 dark:bg-blue-800 border-blue-500 scale-110'
                                  : isRear
                                  ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-110'
                                  : isHighlighted
                                  ? 'bg-orange-200 dark:bg-orange-800 border-orange-500 scale-110'
                                  : hasValue
                                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-40'
                              }`}
                            >
                              {hasValue ? queue[index] : '_'}
                            </div>
                            
                            {/* Index */}
                            <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{index}]</span>

                            {/* Pointers */}
                            {isFront && (
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                                <div className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/80 px-2.5 py-1 rounded border border-blue-500 shadow-md">
                                  Front
                                </div>
                                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-blue-500"></div>
                              </div>
                            )}
                            
                            {isRear && (
                              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-transparent border-b-green-500"></div>
                                <div className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/80 px-2.5 py-1 rounded border border-green-500 shadow-md">
                                  Rear
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                      
                      {/* Center info */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          Size: {steps[currentStep].size}/{capacity}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {steps[currentStep].size === capacity ? 'FULL' : 
                           steps[currentStep].size === 0 ? 'EMPTY' : 'AVAILABLE'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </CardContent>
          </Card>

          {/* Complexity Analysis */}
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle>Complexity Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                    ⏱️ Time Complexity: O(1)
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Both enqueue and dequeue operations take constant time O(1) because they only involve pointer updates and modulo calculations, no traversal needed.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    💾 Space Complexity: O(n)
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Uses a fixed-size array of capacity n. Unlike linear queue, circular queue achieves 100% space utilization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Snippet */}
          <CodeSnippet
            title="Complete Circular Queue Implementation"
            language="javascript"
            code={`class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = capacity - 1;
    this.size = 0;
    this.queue = new Array(capacity);
  }

  enqueue(value) {
    if (this.size === this.capacity) return false; // Queue full
    
    this.rear = (this.rear + 1) % this.capacity; // Wrap around
    this.queue[this.rear] = value;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.size === 0) return null; // Queue empty
    
    const value = this.queue[this.front];
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.capacity; // Wrap around
    this.size--;
    return value;
  }

  front() {
    return this.size === 0 ? null : this.queue[this.front];
  }

  rear() {
    return this.size === 0 ? null : this.queue[this.rear];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}`}
          />
        </div>
      </div>
    </>
  );
}
