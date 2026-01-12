'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, ArrowRight,
  Plus, Minus, Users, ArrowLeft
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

type QueueOperation = 'enqueue' | 'dequeue' | null;

type StepComparison = {
  left: string;
  right: string;
  result: string;
};

type Step = {
  step: number;
  front: number;
  rear: number;
  size: number;
  currentValue: number;
  operation: QueueOperation;
  currentLine: number;
  description: string;
  action: string;
  highlighted: number[];
  comparison: StepComparison | null;
};

export default function QueuesImplementQueueUsingArrays() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Queue data and state
  const [queue] = useState([10, 20, 30, 0, 0]); // Initial queue with capacity 5
  const [front, setFront] = useState(0);
  const [rear, setRear] = useState(2);
  const [size, setSize] = useState(3);
  const [currentValue, setCurrentValue] = useState(0);
  const [operation, setOperation] = useState<QueueOperation>(null);

  // Comprehensive steps for queue operations using arrays
  const steps: Step[] = [
    // Initialization
    {
      step: 1,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 0,
      operation: null,
      currentLine: 1,
      description: '📋 Initialize: Queue array with capacity 5 created',
      action: 'init',
      highlighted: [],
      comparison: null
    },
    {
      step: 2,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 0,
      operation: null,
      currentLine: 2,
      description: '📋 Initialize: front = 0 (points to first element)',
      action: 'init',
      highlighted: [0],
      comparison: null
    },
    {
      step: 3,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 0,
      operation: null,
      currentLine: 3,
      description: '📋 Initialize: rear = 2 (points to last element)',
      action: 'init',
      highlighted: [2],
      comparison: null
    },
    {
      step: 4,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 0,
      operation: null,
      currentLine: 4,
      description: '📋 Initialize: size = 3 (current number of elements)',
      action: 'init',
      highlighted: [0, 1, 2],
      comparison: null
    },

    // ENQUEUE Operation - Adding element 40
    {
      step: 5,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 40,
      operation: 'enqueue',
      currentLine: 7,
      description: '➕ ENQUEUE: Attempting to add element 40 to queue',
      action: 'enqueue-start',
      highlighted: [],
      comparison: null
    },
    {
      step: 6,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 40,
      operation: 'enqueue',
      currentLine: 8,
      description: '🔍 Check: Is queue full? size(3) < capacity(5)? YES!',
      action: 'check',
      highlighted: [],
      comparison: { left: 'size', right: 'capacity', result: '3 < 5 = true' }
    },
    {
      step: 7,
      front: 0,
      rear: 2,
      size: 3,
      currentValue: 40,
      operation: 'enqueue',
      currentLine: 9,
      description: '➡️ Move: rear++ (2 → 3) to make space for new element',
      action: 'move',
      highlighted: [3],
      comparison: null
    },
    {
      step: 8,
      front: 0,
      rear: 3,
      size: 3,
      currentValue: 40,
      operation: 'enqueue',
      currentLine: 10,
      description: '📍 Insert: Place 40 at queue[rear] = queue[3]',
      action: 'insert',
      highlighted: [3],
      comparison: null
    },
    {
      step: 9,
      front: 0,
      rear: 3,
      size: 4,
      currentValue: 40,
      operation: 'enqueue',
      currentLine: 11,
      description: '📊 Update: size++ (3 → 4), element 40 added successfully',
      action: 'update',
      highlighted: [0, 1, 2, 3],
      comparison: null
    },

    // DEQUEUE Operation - Removing element
    {
      step: 10,
      front: 0,
      rear: 3,
      size: 4,
      currentValue: 10,
      operation: 'dequeue',
      currentLine: 14,
      description: '➖ DEQUEUE: Attempting to remove element from queue',
      action: 'dequeue-start',
      highlighted: [],
      comparison: null
    },
    {
      step: 11,
      front: 0,
      rear: 3,
      size: 4,
      currentValue: 10,
      operation: 'dequeue',
      currentLine: 15,
      description: '🔍 Check: Is queue empty? size(4) > 0? YES!',
      action: 'check',
      highlighted: [0, 1, 2, 3],
      comparison: { left: 'size', right: '0', result: '4 > 0 = true' }
    },
    {
      step: 12,
      front: 0,
      rear: 3,
      size: 4,
      currentValue: 10,
      operation: 'dequeue',
      currentLine: 16,
      description: '📍 Access: Get element at queue[front] = queue[0] = 10',
      action: 'access',
      highlighted: [0],
      comparison: null
    },
    {
      step: 13,
      front: 0,
      rear: 3,
      size: 4,
      currentValue: 10,
      operation: 'dequeue',
      currentLine: 17,
      description: '🗑️ Remove: Element 10 removed from queue (will be overwritten)',
      action: 'remove',
      highlighted: [0],
      comparison: null
    },
    {
      step: 14,
      front: 1,
      rear: 3,
      size: 3,
      currentValue: 10,
      operation: 'dequeue',
      currentLine: 18,
      description: '➡️ Move: front++ (0 → 1) to point to next element',
      action: 'move',
      highlighted: [1],
      comparison: null
    },
    {
      step: 15,
      front: 1,
      rear: 3,
      size: 3,
      currentValue: 10,
      operation: 'dequeue',
      currentLine: 19,
      description: '📊 Update: size-- (4 → 3), dequeue operation complete',
      action: 'update',
      highlighted: [1, 2, 3],
      comparison: null
    },

    // ENQUEUE Operation - Adding element 50
    {
      step: 16,
      front: 1,
      rear: 3,
      size: 3,
      currentValue: 50,
      operation: 'enqueue',
      currentLine: 7,
      description: '➕ ENQUEUE: Attempting to add element 50 to queue',
      action: 'enqueue-start',
      highlighted: [],
      comparison: null
    },
    {
      step: 17,
      front: 1,
      rear: 3,
      size: 3,
      currentValue: 50,
      operation: 'enqueue',
      currentLine: 8,
      description: '🔍 Check: Is queue full? size(3) < capacity(5)? YES!',
      action: 'check',
      highlighted: [],
      comparison: { left: 'size', right: 'capacity', result: '3 < 5 = true' }
    },
    {
      step: 18,
      front: 1,
      rear: 3,
      size: 3,
      currentValue: 50,
      operation: 'enqueue',
      currentLine: 9,
      description: '➡️ Move: rear++ (3 → 4) to make space for new element',
      action: 'move',
      highlighted: [4],
      comparison: null
    },
    {
      step: 19,
      front: 1,
      rear: 4,
      size: 3,
      currentValue: 50,
      operation: 'enqueue',
      currentLine: 10,
      description: '📍 Insert: Place 50 at queue[rear] = queue[4]',
      action: 'insert',
      highlighted: [4],
      comparison: null
    },
    {
      step: 20,
      front: 1,
      rear: 4,
      size: 4,
      currentValue: 50,
      operation: 'enqueue',
      currentLine: 11,
      description: '📊 Update: size++ (3 → 4), element 50 added successfully',
      action: 'update',
      highlighted: [1, 2, 3, 4],
      comparison: null
    },

    // Final state
    {
      step: 21,
      front: 1,
      rear: 4,
      size: 4,
      currentValue: 50,
      operation: null,
      currentLine: 22,
      description: '✅ Queue operations complete! Final state shown',
      action: 'done',
      highlighted: [1, 2, 3, 4],
      comparison: null
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'class QueueUsingArray {', 
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
        code: '    this.queue = new Array(capacity).fill(0);', 
        active: stepData.currentLine === 3, 
        indent: 2,
        values: stepData.currentLine === 3 ? `[${queue.join(', ')}]` : ''
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
        code: '    this.rear = -1;', 
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
        code: '  }', 
        active: stepData.currentLine === 7, 
        indent: 1 
      },
      { 
        line: 8, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 9, 
        code: '  enqueue(value) {', 
        active: stepData.currentLine === 9, 
        indent: 1 
      },
      { 
        line: 10, 
        code: '    if (this.size >= this.capacity) {', 
        active: stepData.currentLine === 10, 
        indent: 2 
      },
      { 
        line: 11, 
        code: '      throw new Error("Queue is full");', 
        active: stepData.currentLine === 11, 
        indent: 3 
      },
      { 
        line: 12, 
        code: '    }', 
        active: stepData.currentLine === 12, 
        indent: 2 
      },
      { 
        line: 13, 
        code: '    this.rear++;', 
        active: stepData.currentLine === 13, 
        indent: 2,
        values: stepData.currentLine === 13 ? `rear=${stepData.rear}` : ''
      },
      { 
        line: 14, 
        code: '    this.queue[this.rear] = value;', 
        active: stepData.currentLine === 14, 
        indent: 2,
        values: stepData.currentLine === 14 && stepData.operation === 'enqueue' ? `queue[${stepData.rear}]=${stepData.currentValue}` : ''
      },
      { 
        line: 15, 
        code: '    this.size++;', 
        active: stepData.currentLine === 15, 
        indent: 2,
        values: stepData.currentLine === 15 ? `size=${stepData.size}` : ''
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
        code: '    if (this.size === 0) {', 
        active: stepData.currentLine === 19, 
        indent: 2 
      },
      { 
        line: 20, 
        code: '      throw new Error("Queue is empty");', 
        active: stepData.currentLine === 20, 
        indent: 3 
      },
      { 
        line: 21, 
        code: '    }', 
        active: stepData.currentLine === 21, 
        indent: 2 
      },
      { 
        line: 22, 
        code: '    const value = this.queue[this.front];', 
        active: stepData.currentLine === 22, 
        indent: 2,
        values: stepData.currentLine === 22 && stepData.operation === 'dequeue' ? `value=${stepData.currentValue}` : ''
      },
      { 
        line: 23, 
        code: '    this.front++;', 
        active: stepData.currentLine === 23, 
        indent: 2,
        values: stepData.currentLine === 23 ? `front=${stepData.front}` : ''
      },
      { 
        line: 24, 
        code: '    this.size--;', 
        active: stepData.currentLine === 24, 
        indent: 2,
        values: stepData.currentLine === 24 ? `size=${stepData.size}` : ''
      },
      { 
        line: 25, 
        code: '    return value;', 
        active: stepData.currentLine === 25, 
        indent: 2 
      },
      { 
        line: 26, 
        code: '  }', 
        active: stepData.currentLine === 26, 
        indent: 1 
      },
      { 
        line: 27, 
        code: '}', 
        active: stepData.currentLine === 27, 
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
    setCurrentValue(step.currentValue);
    setOperation(step.operation);
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
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Users}
        category="DSA · Queues · Implementation"
        title="Implement Queue Using Arrays"
        description="Learn how to implement a queue data structure using arrays with step-by-step visualization of enqueue and dequeue operations"
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(1)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Arrays', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding Queue Implementation with Arrays
          </CardTitle>
          <CardDescription>Let's visualize how queue operations work using array indices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is Queue Implementation? */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              What is Queue Using Arrays?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                A queue implemented using arrays stores elements in a fixed-size array with two pointers:
                <strong> front</strong> (points to first element) and <strong> rear</strong> (points to last element).
              </p>
              
              {/* Key Properties */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">KEY PROPERTIES</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span><strong>front:</strong> Index of first element</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span><strong>rear:</strong> Index of last element</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span><strong>size:</strong> Current element count</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span><strong>capacity:</strong> Maximum elements</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">OPERATIONS</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Plus className="w-3 h-3 text-green-600" />
                      <span><strong>enqueue:</strong> Add to rear (O(1))</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Minus className="w-3 h-3 text-red-600" />
                      <span><strong>dequeue:</strong> Remove from front (O(1))</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-3 h-3 text-blue-600" />
                      <span><strong>peek:</strong> View front element</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-orange-600" />
                      <span><strong>isEmpty:</strong> Check if empty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Queue Operations Visualization
            </h4>
            
            {/* Enqueue Example */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Enqueue Operation</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Add to Rear ✓</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    1. Check if queue is full<br/>
                    2. Increment rear pointer<br/>
                    3. Insert element at queue[rear]<br/>
                    4. Increment size
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-700">
                    <code className="text-xs">rear++; queue[rear] = value; size++;</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Dequeue Example */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Dequeue Operation</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">Remove from Front ✓</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    1. Check if queue is empty<br/>
                    2. Get element from queue[front]<br/>
                    3. Increment front pointer<br/>
                    4. Decrement size
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-700">
                    <code className="text-xs">value = queue[front]; front++; size--;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How Array-Based Queue Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Array Structure</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Fixed-size array stores elements:</div>
                    <code className="text-xs">queue = [10, 20, 30, 0, 0] // capacity = 5</code>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Pointer Management</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Two pointers track queue bounds:</div>
                    <code className="text-xs">front = 0, rear = 2, size = 3</code>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">FIFO Principle</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">First In First Out maintained:</div>
                    <code className="text-xs">enqueue(40) → rear moves → dequeue() → front moves</code>
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
                <span>Array queues have fixed capacity - need to handle overflow</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Front and rear pointers move forward - don't wrap around</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Space is wasted when elements are dequeued (can't reuse space)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>All operations are O(1) time complexity</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how enqueue and dequeue operations work</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">queue-array.js</span>
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
                      <span className="text-slate-500 dark:text-slate-400">front:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].front}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">rear:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].rear}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">size:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].size}</span>
                    </div>
                    {steps[currentStep].operation && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">operation:</span>
                        <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].operation}</span>
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
                      {steps[currentStep].action === 'enqueue-start' && '➕ Starting Enqueue'}
                      {steps[currentStep].action === 'dequeue-start' && '➖ Starting Dequeue'}
                      {steps[currentStep].action === 'check' && '🔍 Checking Condition'}
                      {steps[currentStep].action === 'move' && '➡️ Moving Pointer'}
                      {steps[currentStep].action === 'insert' && '📍 Inserting Element'}
                      {steps[currentStep].action === 'access' && '👁️ Accessing Element'}
                      {steps[currentStep].action === 'remove' && '🗑️ Removing Element'}
                      {steps[currentStep].action === 'update' && '📊 Updating Variables'}
                      {steps[currentStep].action === 'done' && '✅ Operation Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Queue Array Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                    <span>Front</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Rear</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Active</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {queue.map((val, idx) => {
                    const isFront = steps[currentStep].front === idx;
                    const isRear = steps[currentStep].rear === idx;
                    const isActive = steps[currentStep].highlighted.includes(idx);
                    const isUsed = idx >= steps[currentStep].front && idx <= steps[currentStep].rear && steps[currentStep].size > 0;
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Value Box */}
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                            isActive
                              ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-125 ring-4 ring-purple-300 animate-pulse'
                              : isFront
                              ? 'bg-emerald-200 dark:bg-emerald-800 border-emerald-500 scale-110'
                              : isRear
                              ? 'bg-blue-200 dark:bg-blue-800 border-blue-500 scale-110'
                              : isUsed
                              ? 'bg-teal-100 dark:bg-teal-900 border-teal-400'
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 opacity-40'
                          }`}
                        >
                          {isUsed || isActive ? val : ''}
                        </div>
                        
                        {/* Index */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                        {/* Front Indicator */}
                        {isFront && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-2.5 py-1 rounded border border-emerald-500 shadow-md">
                              FRONT
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-emerald-500"></div>
                          </div>
                        )}

                        {/* Rear Indicator */}
                        {isRear && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/80 px-2.5 py-1 rounded border border-blue-500 shadow-md">
                              REAR
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-blue-500"></div>
                          </div>
                        )}

                        {/* Current Operation Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/80 px-2.5 py-1 rounded border border-purple-500 shadow-md">
                              {steps[currentStep].operation === 'enqueue' ? 'INSERTING' : 
                               steps[currentStep].operation === 'dequeue' ? 'REMOVING' : 'ACTIVE'}
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-transparent border-b-purple-500"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Capacity Info */}
                <div className="mt-6 flex justify-center">
                  <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                    Capacity: 5 | Used: {steps[currentStep].size} | Available: {5 - steps[currentStep].size}
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
      <Card className="border-emerald-200 dark:border-emerald-800">
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
                Both enqueue and dequeue operations take constant time as they only involve pointer movement and single array access. No traversal needed!
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Array size is fixed at creation time. Space = capacity of array, regardless of current number of elements.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Queue Implementation Using Arrays"
        language="javascript"
        code={`class QueueUsingArray {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity).fill(0);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  // Add element to rear of queue
  enqueue(value) {
    if (this.size >= this.capacity) {
      throw new Error("Queue is full - cannot enqueue");
    }
    
    this.rear++;
    this.queue[this.rear] = value;
    this.size++;
    console.log(\`Enqueued \${value} at index \${this.rear}\`);
  }

  // Remove element from front of queue
  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty - cannot dequeue");
    }
    
    const value = this.queue[this.front];
    console.log(\`Dequeued \${value} from index \${this.front}\`);
    
    this.front++;
    this.size--;
    return value;
  }

  // View front element without removing
  peek() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.front];
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get current size
  getSize() {
    return this.size;
  }

  // Display queue contents
  display() {
    if (this.size === 0) {
      console.log("Queue is empty");
      return;
    }
    
    let result = "Queue: [";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.queue[i];
      if (i < this.rear) result += ", ";
    }
    result += "]";
    console.log(result);
    console.log(\`Front: \${this.front}, Rear: \${this.rear}, Size: \${this.size}\`);
  }
}

// Example usage
const queue = new QueueUsingArray(5);

console.log("=== Queue Operations Demo ===");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Queue: [10, 20, 30]

console.log("Dequeued:", queue.dequeue()); // Dequeued: 10
queue.display(); // Queue: [20, 30]

queue.enqueue(40);
queue.enqueue(50);
queue.display(); // Queue: [20, 30, 40, 50]

console.log("Front element:", queue.peek()); // Front element: 20
console.log("Queue size:", queue.getSize()); // Queue size: 4
console.log("Is empty?", queue.isEmpty()); // Is empty? false`}
      />

    </div>
  );
}
