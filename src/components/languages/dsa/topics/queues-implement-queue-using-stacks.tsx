'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, ArrowRight,
  ArrowUp, ArrowDown, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

type QueueOperation = 'init' | 'enqueue' | 'dequeue' | 'transfer' | 'done';

type Step = {
  step: number;
  stack1: number[];
  stack2: number[];
  currentLine: number;
  description: string;
  action: string;
  highlighted: number[];
  operation: QueueOperation;
  currentValue: number;
  dequeuedValue: number | null;
  transferInProgress?: boolean;
};

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
    @keyframes stackMove {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
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
    .stack-move {
      animation: stackMove 0.3s ease-in-out;
    }
  `}</style>
);

export default function QueueUsingStacks() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Queue data
  const [inputQueue] = useState([10, 20, 30, 40, 50]);
  const [stack1, setStack1] = useState<number[]>([]);
  const [stack2, setStack2] = useState<number[]>([]);
  const [currentOperation, setCurrentOperation] = useState<QueueOperation>('init');
  const [currentValue, setCurrentValue] = useState(10);
  const [dequeuedValue, setDequeuedValue] = useState<number | null>(null);
  const [transferInProgress, setTransferInProgress] = useState(false);

  // Comprehensive steps array - following the template's granular approach
  const steps: Step[] = [
    // INITIALIZATION (5 steps)
    {
      step: 1,
      stack1: [],
      stack2: [],
      currentLine: 1,
      description: '📋 Initialize: Create queue using two empty stacks',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 2,
      stack1: [],
      stack2: [],
      currentLine: 2,
      description: '📋 Stack1 (enqueueStack) will handle insertions',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 3,
      stack1: [],
      stack2: [],
      currentLine: 3,
      description: '📋 Stack2 (dequeueStack) will handle removals',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 4,
      stack1: [],
      stack2: [],
      currentLine: 4,
      description: '📋 Both stacks start empty - queue is empty',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 5,
      stack1: [],
      stack2: [],
      currentLine: 5,
      description: '📋 Ready to perform queue operations using stacks',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },

    // ENQUEUE OPERATION 1 (6 steps)
    {
      step: 6,
      stack1: [],
      stack2: [],
      currentLine: 8,
      description: '🔄 Enqueue Operation: Adding element 10 to queue',
      action: 'loop-start',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 7,
      stack1: [],
      stack2: [],
      currentLine: 9,
      description: '✅ Enqueue: Simply push to Stack1 (enqueueStack)',
      action: 'check',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 8,
      stack1: [],
      stack2: [],
      currentLine: 10,
      description: '📊 Push: Stack1.push(10)',
      action: 'calculate',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 9,
      stack1: [10],
      stack2: [],
      currentLine: 11,
      description: '➕ Update: Stack1 = [10]',
      action: 'update',
      highlighted: [0],
      operation: 'enqueue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 10,
      stack1: [10],
      stack2: [],
      currentLine: 12,
      description: '✅ Enqueue successful! Element 10 added',
      action: 'found',
      highlighted: [0],
      operation: 'enqueue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 11,
      stack1: [10],
      stack2: [],
      currentLine: 13,
      description: '📋 Queue state: [10] (front=10, rear=10)',
      action: 'done',
      highlighted: [0],
      operation: 'enqueue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },

    // ENQUEUE OPERATION 2 (6 steps)
    {
      step: 12,
      stack1: [10],
      stack2: [],
      currentLine: 16,
      description: '🔄 Enqueue Operation: Adding element 20 to queue',
      action: 'loop-start',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 13,
      stack1: [10],
      stack2: [],
      currentLine: 17,
      description: '✅ Enqueue: Push to Stack1 (no transfer needed)',
      action: 'check',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 14,
      stack1: [10],
      stack2: [],
      currentLine: 18,
      description: '📊 Push: Stack1.push(20)',
      action: 'calculate',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 15,
      stack1: [10, 20],
      stack2: [],
      currentLine: 19,
      description: '➕ Update: Stack1 = [10, 20]',
      action: 'update',
      highlighted: [1],
      operation: 'enqueue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 16,
      stack1: [10, 20],
      stack2: [],
      currentLine: 20,
      description: '✅ Enqueue successful! Element 20 added',
      action: 'found',
      highlighted: [1],
      operation: 'enqueue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 17,
      stack1: [10, 20],
      stack2: [],
      currentLine: 21,
      description: '📋 Queue state: [10, 20] (front=10, rear=20)',
      action: 'done',
      highlighted: [0, 1],
      operation: 'enqueue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: false
    },

    // ENQUEUE MORE ELEMENTS (8 steps)
    {
      step: 18,
      stack1: [10, 20],
      stack2: [],
      currentLine: 24,
      description: '🔄 Enqueue: Adding elements 30, 40, 50',
      action: 'loop-start',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 30,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 19,
      stack1: [10, 20, 30],
      stack2: [],
      currentLine: 25,
      description: '➕ Push 30: Stack1 = [10, 20, 30]',
      action: 'update',
      highlighted: [2],
      operation: 'enqueue',
      currentValue: 30,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 20,
      stack1: [10, 20, 30, 40],
      stack2: [],
      currentLine: 26,
      description: '➕ Push 40: Stack1 = [10, 20, 30, 40]',
      action: 'update',
      highlighted: [3],
      operation: 'enqueue',
      currentValue: 40,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 21,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 27,
      description: '➕ Push 50: Stack1 = [10, 20, 30, 40, 50]',
      action: 'update',
      highlighted: [4],
      operation: 'enqueue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 22,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 28,
      description: '📋 Queue state: [10, 20, 30, 40, 50]',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'enqueue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 23,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 29,
      description: '📊 Stack1 holds: [50, 40, 30, 20, 10] (top to bottom)',
      action: 'done',
      highlighted: [4, 3, 2, 1, 0],
      operation: 'enqueue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 24,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 30,
      description: '💡 Key Insight: Stack1 stores elements in reverse order',
      action: 'done',
      highlighted: [4, 3, 2, 1, 0],
      operation: 'enqueue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 25,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 31,
      description: '📋 Ready for dequeue operation',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'enqueue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: false
    },

    // DEQUEUE OPERATION - TRANSFER PHASE (12 steps)
    {
      step: 26,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 34,
      description: '🔄 Dequeue Operation: Removing front element',
      action: 'loop-start',
      highlighted: [],
      operation: 'dequeue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 27,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 35,
      description: '✅ Check: Stack2 is empty? YES! Need to transfer elements',
      action: 'check',
      highlighted: [],
      operation: 'dequeue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 28,
      stack1: [10, 20, 30, 40, 50],
      stack2: [],
      currentLine: 36,
      description: '🔄 Transfer: Move all elements from Stack1 to Stack2',
      action: 'transfer',
      highlighted: [],
      operation: 'dequeue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 29,
      stack1: [10, 20, 30, 40],
      stack2: [50],
      currentLine: 37,
      description: '➕ Transfer 1: Pop 50 from Stack1, push to Stack2',
      action: 'update',
      highlighted: [3, 0],
      operation: 'dequeue',
      currentValue: 50,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 30,
      stack1: [10, 20, 30],
      stack2: [50, 40],
      currentLine: 38,
      description: '➕ Transfer 2: Pop 40 from Stack1, push to Stack2',
      action: 'update',
      highlighted: [2, 0, 1],
      operation: 'dequeue',
      currentValue: 40,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 31,
      stack1: [10, 20],
      stack2: [50, 40, 30],
      currentLine: 39,
      description: '➕ Transfer 3: Pop 30 from Stack1, push to Stack2',
      action: 'update',
      highlighted: [1, 0, 1, 2],
      operation: 'dequeue',
      currentValue: 30,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 32,
      stack1: [10],
      stack2: [50, 40, 30, 20],
      currentLine: 40,
      description: '➕ Transfer 4: Pop 20 from Stack1, push to Stack2',
      action: 'update',
      highlighted: [0, 0, 1, 2, 3],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 33,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 41,
      description: '➕ Transfer 5: Pop 10 from Stack1, push to Stack2',
      action: 'update',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: true
    },
    {
      step: 34,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 42,
      description: '✅ Transfer complete! Stack1 is empty',
      action: 'found',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 35,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 43,
      description: '💡 Now Stack2 has elements in correct queue order',
      action: 'done',
      highlighted: [4, 3, 2, 1, 0],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 36,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 44,
      description: '📊 Queue order restored: [10, 20, 30, 40, 50]',
      action: 'done',
      highlighted: [4, 3, 2, 1, 0],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 37,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 45,
      description: '🎯 Ready to dequeue front element (10)',
      action: 'done',
      highlighted: [4],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },

    // DEQUEUE OPERATION - ACTUAL REMOVAL (6 steps)
    {
      step: 38,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 48,
      description: '🔄 Dequeue: Remove front element from Stack2',
      action: 'loop-start',
      highlighted: [],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: null,
      transferInProgress: false
    },
    {
      step: 39,
      stack1: [],
      stack2: [50, 40, 30, 20, 10],
      currentLine: 49,
      description: '📍 Get element: Stack2.peek() = 10',
      action: 'examine',
      highlighted: [4],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: 10
    },
    {
      step: 40,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 50,
      description: '🗑️ Pop: Stack2.pop() removes 10',
      action: 'update',
      highlighted: [3],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: 10
    },
    {
      step: 41,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 51,
      description: '✅ Dequeue successful! Removed element: 10',
      action: 'found',
      highlighted: [3],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: 10
    },
    {
      step: 42,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 52,
      description: '📋 Queue state: [20, 30, 40, 50]',
      action: 'done',
      highlighted: [3, 2, 1, 0],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: 10
    },
    {
      step: 43,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 53,
      description: '🎯 New front element: 20 (top of Stack2)',
      action: 'done',
      highlighted: [3],
      operation: 'dequeue',
      currentValue: 10,
      dequeuedValue: 10
    },

    // SECOND DEQUEUE - NO TRANSFER NEEDED (6 steps)
    {
      step: 44,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 56,
      description: '🔄 Second Dequeue: Remove next front element',
      action: 'loop-start',
      highlighted: [],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: 10
    },
    {
      step: 45,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 57,
      description: '✅ Check: Stack2 is not empty? YES! No transfer needed',
      action: 'check',
      highlighted: [3],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: 10
    },
    {
      step: 46,
      stack1: [],
      stack2: [50, 40, 30, 20],
      currentLine: 58,
      description: '📍 Get element: Stack2.peek() = 20',
      action: 'examine',
      highlighted: [3],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: 20
    },
    {
      step: 47,
      stack1: [],
      stack2: [50, 40, 30],
      currentLine: 59,
      description: '🗑️ Pop: Stack2.pop() removes 20',
      action: 'update',
      highlighted: [2],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: 20
    },
    {
      step: 48,
      stack1: [],
      stack2: [50, 40, 30],
      currentLine: 60,
      description: '✅ Dequeue successful! Removed element: 20',
      action: 'found',
      highlighted: [2],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: 20
    },
    {
      step: 49,
      stack1: [],
      stack2: [50, 40, 30],
      currentLine: 61,
      description: '📋 Queue state: [30, 40, 50]',
      action: 'done',
      highlighted: [2, 1, 0],
      operation: 'dequeue',
      currentValue: 20,
      dequeuedValue: 20
    },

    // ENQUEUE AFTER DEQUEUE (6 steps)
    {
      step: 50,
      stack1: [],
      stack2: [50, 40, 30],
      currentLine: 64,
      description: '🔄 Enqueue after Dequeue: Adding element 60',
      action: 'loop-start',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 51,
      stack1: [],
      stack2: [50, 40, 30],
      currentLine: 65,
      description: '✅ Enqueue: Push to Stack1 (Stack2 has elements)',
      action: 'check',
      highlighted: [],
      operation: 'enqueue',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 52,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 66,
      description: '📊 Push: Stack1.push(60)',
      action: 'update',
      highlighted: [0],
      operation: 'enqueue',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 53,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 67,
      description: '➕ Update: Stack1 = [60]',
      action: 'update',
      highlighted: [0],
      operation: 'enqueue',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 54,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 68,
      description: '✅ Enqueue successful! Element 60 added',
      action: 'found',
      highlighted: [0],
      operation: 'enqueue',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 55,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 69,
      description: '📋 Queue state: [30, 40, 50, 60]',
      action: 'done',
      highlighted: [2, 1, 0, 0],
      operation: 'enqueue',
      currentValue: 60,
      dequeuedValue: 20
    },

    // FINAL STATE AND SUMMARY (5 steps)
    {
      step: 56,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 72,
      description: '🎯 Final Queue State: [30, 40, 50, 60]',
      action: 'done',
      highlighted: [2, 1, 0, 0],
      operation: 'done',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 57,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 73,
      description: '📊 Stack1 (new elements): [60]',
      action: 'done',
      highlighted: [0],
      operation: 'done',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 58,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 74,
      description: '📊 Stack2 (old elements): [50, 40, 30]',
      action: 'done',
      highlighted: [2, 1, 0],
      operation: 'done',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 59,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 75,
      description: '💡 Amortized O(1) operations achieved',
      action: 'done',
      highlighted: [2, 1, 0, 0],
      operation: 'done',
      currentValue: 60,
      dequeuedValue: 20
    },
    {
      step: 60,
      stack1: [60],
      stack2: [50, 40, 30],
      currentLine: 76,
      description: '✅ Queue using stacks implementation complete!',
      action: 'result',
      highlighted: [2, 1, 0, 0],
      operation: 'done',
      currentValue: 60,
      dequeuedValue: 20
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'class QueueUsingStacks {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  constructor() {', 
        active: stepData.currentLine === 2, 
        indent: 1 
      },
      { 
        line: 3, 
        code: '    this.stack1 = []; // enqueueStack', 
        active: stepData.currentLine === 3, 
        indent: 2,
        values: stepData.currentLine === 3 ? `stack1=[${stepData.stack1.join(', ')}]` : ''
      },
      { 
        line: 4, 
        code: '    this.stack2 = []; // dequeueStack', 
        active: stepData.currentLine === 4, 
        indent: 2,
        values: stepData.currentLine === 4 ? `stack2=[${stepData.stack2.join(', ')}]` : ''
      },
      { 
        line: 5, 
        code: '  }', 
        active: stepData.currentLine === 5, 
        indent: 1 
      },
      { 
        line: 6, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 7, 
        code: '  enqueue(value) {', 
        active: stepData.currentLine === 7, 
        indent: 1 
      },
      { 
        line: 8, 
        code: '    // Simply push to stack1', 
        active: stepData.currentLine === 8, 
        indent: 2 
      },
      { 
        line: 9, 
        code: '    this.stack1.push(value);', 
        active: stepData.currentLine === 9, 
        indent: 2,
        values: stepData.currentLine === 9 ? `push(${stepData.currentValue})` : ''
      },
      { 
        line: 10, 
        code: '  }', 
        active: stepData.currentLine === 10, 
        indent: 1 
      },
      { 
        line: 11, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 12, 
        code: '  dequeue() {', 
        active: stepData.currentLine === 12, 
        indent: 1 
      },
      { 
        line: 13, 
        code: '    // If stack2 is empty, transfer from stack1', 
        active: stepData.currentLine === 13, 
        indent: 2 
      },
      { 
        line: 14, 
        code: '    if (this.stack2.length === 0) {', 
        active: stepData.currentLine === 14, 
        indent: 2 
      },
      { 
        line: 15, 
        code: '      while (this.stack1.length > 0) {', 
        active: stepData.currentLine === 15, 
        indent: 3 
      },
      { 
        line: 16, 
        code: '        this.stack2.push(this.stack1.pop());', 
        active: stepData.currentLine === 16, 
        indent: 4 
      },
      { 
        line: 17, 
        code: '      }', 
        active: stepData.currentLine === 17, 
        indent: 3 
      },
      { 
        line: 18, 
        code: '    }', 
        active: stepData.currentLine === 18, 
        indent: 2 
      },
      { 
        line: 19, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 20, 
        code: '    // Pop from stack2', 
        active: stepData.currentLine === 20, 
        indent: 2 
      },
      { 
        line: 21, 
        code: '    return this.stack2.pop();', 
        active: stepData.currentLine === 21, 
        indent: 2,
        values: stepData.currentLine === 21 && stepData.dequeuedValue !== null ? `return ${stepData.dequeuedValue}` : ''
      },
      { 
        line: 22, 
        code: '  }', 
        active: stepData.currentLine === 22, 
        indent: 1 
      },
      { 
        line: 23, 
        code: '}', 
        active: stepData.currentLine === 23, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStack1(step.stack1);
    setStack2(step.stack2);
    setCurrentOperation(step.operation);
    setCurrentValue(step.currentValue);
    setDequeuedValue(step.dequeuedValue);
    setTransferInProgress(step.transferInProgress ?? false);
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

  // Get queue state from stacks
  const getQueueState = () => {
    const stack2Reversed = [...stack2].reverse();
    const stack1Reversed = [...stack1].reverse();
    return [...stack2Reversed, ...stack1Reversed];
  };

  return (
    <>
      {styleTag}
      <div className="space-y-8">
        {/* Page Header */}
        <PageHeader
          icon={Layers}
          category="DSA · Queues · Basic Queue Operations"
          title="Implement Queue Using Stacks"
          description="Master the art of implementing FIFO queue behavior using two LIFO stacks with amortized O(1) operations"
          colorTheme="purple"
          badges={[
            { label: 'Enqueue: O(1)', variant: 'success' },
            { label: 'Dequeue: O(1) amortized', variant: 'info' },
            { label: 'Intermediate', variant: 'default' },
          ]}
        />

        <div className="container mx-auto px-4 py-8 space-y-8">
          {/* Visual Problem Statement */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-600" />
                Queue Using Two Stacks
              </CardTitle>
              <CardDescription>Learn how to implement FIFO queue using LIFO stacks efficiently</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* What is Queue Using Stacks */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  What is Queue Using Stacks?
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    A queue can be implemented using two stacks where one stack handles enqueue operations and the other handles dequeue operations. The key insight is that elements are transferred between stacks to maintain FIFO order.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                      <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                      <div className="font-mono text-sm">Operations: [Enqueue, Dequeue, Transfer]</div>
                    </div>
                    
                    <div className="p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                      <div className="font-mono text-sm">FIFO behavior with O(1) amortized operations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
                  How It Works
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start gap-3">
                      <ArrowDown className="w-5 h-5 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-blue-700 dark:text-blue-300">Enqueue Operation</span>
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">O(1) ✓</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          Simply push the new element onto Stack1 (enqueueStack)
                        </div>
                        <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          Stack1.push(value)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-start gap-3">
                      <ArrowUp className="w-5 h-5 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-purple-700 dark:text-purple-300">Dequeue Operation</span>
                          <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded">O(1) amortized ✓</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          If Stack2 is empty, transfer all elements from Stack1, then pop from Stack2
                        </div>
                        <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          Stack2.pop() // after transfer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Algorithm Steps */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Key Algorithm Steps
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Initialize Two Stacks</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                        <div className="font-mono text-xs">stack1 = [] (enqueue), stack2 = [] (dequeue)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Enqueue: Push to Stack1</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Always:</div>
                        <div className="font-mono text-xs">stack1.push(value)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Dequeue: Transfer if Needed</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Condition:</div>
                        <div className="font-mono text-xs">if stack2 empty: transfer all from stack1</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Pop from Stack2</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Result:</div>
                        <div className="font-mono text-xs">return stack2.pop() // FIFO order maintained</div>
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
                    <span>Amortized O(1) time complexity (transfer cost distributed)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Stack1 stores elements in reverse order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Stack2 stores elements in correct queue order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Transfer only happens when Stack2 is empty</span>
                  </div>
                </AlertDescription>
              </Alert>

            </CardContent>
          </Card>

          {/* Animated Visualization */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                  <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                Step-by-Step Animation
              </CardTitle>
              <CardDescription>Watch how queue operations work using two stacks</CardDescription>
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
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      </div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">queue-using-stacks.js</span>
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

                  <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">stack1:</span>
                          <span className="font-semibold text-purple-600 dark:text-purple-400">[{steps[currentStep].stack1.join(', ')}]</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">stack2:</span>
                          <span className="font-semibold text-purple-600 dark:text-purple-400">[{steps[currentStep].stack2.join(', ')}]</span>
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
                          {steps[currentStep].action === 'transfer' && '🔄 Transferring'}
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

              {/* Visual Stack Representation */}
              {currentStep >= 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Stack Visualization:</p>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span>Stack1 (Enqueue)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span>Stack2 (Dequeue)</span>
                      </div>
                      {transferInProgress && (
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-orange-500 rounded animate-pulse"></div>
                          <span>Transferring</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Stack1 */}
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-center font-semibold text-blue-700 dark:text-blue-300 mb-4">Stack1 (Enqueue Stack)</h4>
                      <div className="flex flex-col-reverse items-center gap-1 min-h-[200px]">
                        {[...Array(5)].map((_, index) => {
                          const stackIndex = 4 - index;
                          const hasValue = stackIndex < stack1.length;
                          const value = hasValue ? stack1[stackIndex] : null;
                          const isTop = stackIndex === stack1.length - 1 && stack1.length > 0;
                          
                          return (
                            <div
                              key={index}
                              className={`w-16 h-12 flex items-center justify-center rounded border-2 font-bold transition-all duration-700 ${
                                hasValue
                                  ? isTop
                                    ? 'bg-blue-200 dark:bg-blue-800 border-blue-500 scale-110 ring-2 ring-blue-300'
                                    : 'bg-blue-100 dark:bg-blue-900 border-blue-300'
                                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-30'
                              }`}
                            >
                              {value !== null ? value : ''}
                            </div>
                          );
                        })}
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">bottom</div>
                      </div>
                      <div className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">
                        top →
                      </div>
                    </div>

                    {/* Stack2 */}
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-center font-semibold text-purple-700 dark:text-purple-300 mb-4">Stack2 (Dequeue Stack)</h4>
                      <div className="flex flex-col-reverse items-center gap-1 min-h-[200px]">
                        {[...Array(5)].map((_, index) => {
                          const stackIndex = 4 - index;
                          const hasValue = stackIndex < stack2.length;
                          const value = hasValue ? stack2[stackIndex] : null;
                          const isTop = stackIndex === stack2.length - 1 && stack2.length > 0;
                          
                          return (
                            <div
                              key={index}
                              className={`w-16 h-12 flex items-center justify-center rounded border-2 font-bold transition-all duration-700 ${
                                hasValue
                                  ? isTop
                                    ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110 ring-2 ring-purple-300'
                                    : 'bg-purple-100 dark:bg-purple-900 border-purple-300'
                                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-30'
                              }`}
                            >
                              {value !== null ? value : ''}
                            </div>
                          );
                        })}
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">bottom</div>
                      </div>
                      <div className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">
                        top →
                      </div>
                    </div>
                  </div>

                  {/* Queue State */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Queue State (FIFO Order)</div>
                      <div className="flex items-center justify-center gap-2">
                        {getQueueState().map((value, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <div className="w-12 h-8 flex items-center justify-center rounded bg-green-200 dark:bg-green-800 border border-green-500 font-bold text-sm">
                              {value}
                            </div>
                            {index < getQueueState().length - 1 && (
                              <ArrowRight className="w-4 h-4 text-green-600 dark:text-green-400" />
                            )}
                          </div>
                        ))}
                        {getQueueState().length === 0 && (
                          <span className="text-slate-500 dark:text-slate-400 italic">Empty Queue</span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        Front {getQueueState().length > 0 ? `(${getQueueState()[0]})` : '(empty)'} → Rear {getQueueState().length > 0 ? `(${getQueueState()[getQueueState().length - 1]})` : '(empty)'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </CardContent>
          </Card>

          {/* Complexity Analysis */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle>Complexity Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                    ⏱️ Time Complexity
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    <strong>Enqueue: O(1)</strong> - Always push to Stack1
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Dequeue: O(1) amortized</strong> - Transfer cost distributed across operations
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    💾 Space Complexity: O(n)
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Uses two stacks with total space equal to number of elements. Each element stored once across both stacks.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  🎯 Amortized Analysis
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Each element is pushed and popped at most twice (once to Stack1, once to Stack2). Over n operations, total work is O(n), making average time per operation O(1).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Snippet */}
          <CodeSnippet
            title="Complete Queue Using Stacks Implementation"
            language="javascript"
            code={`class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // For enqueue operations
    this.stack2 = []; // For dequeue operations
  }

  enqueue(value) {
    // Always push to stack1
    this.stack1.push(value);
  }

  dequeue() {
    // If stack2 is empty, transfer all elements from stack1
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    
    // Pop from stack2 (FIFO order maintained)
    if (this.stack2.length === 0) {
      return null; // Queue is empty
    }
    
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    
    return this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : null;
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  size() {
    return this.stack1.length + this.stack2.length;
  }
}`}


          />
        </div>
      </div>
    </>
  );
}
