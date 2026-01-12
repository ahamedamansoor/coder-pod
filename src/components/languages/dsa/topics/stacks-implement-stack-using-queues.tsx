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

type StackOperation = 'init' | 'push' | 'pop' | 'transfer' | 'done';

type Step = {
  step: number;
  queue1: number[];
  queue2: number[];
  currentLine: number;
  description: string;
  action: string;
  highlighted: number[];
  operation: StackOperation;
  currentValue: number;
  poppedValue: number | null;
  transferInProgress?: boolean;
  activeQueue?: 1 | 2;
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
    @keyframes queueMove {
      0% { transform: translateX(0); }
      50% { transform: translateX(-10px); }
      100% { transform: translateX(0); }
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
    .queue-move {
      animation: queueMove 0.3s ease-in-out;
    }
  `}</style>
);

export default function StackUsingQueues() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Stack data
  const [inputStack] = useState([10, 20, 30, 40, 50]);
  const [queue1, setQueue1] = useState<number[]>([]);
  const [queue2, setQueue2] = useState<number[]>([]);
  const [currentOperation, setCurrentOperation] = useState<StackOperation>('init');
  const [currentValue, setCurrentValue] = useState(10);
  const [poppedValue, setPoppedValue] = useState<number | null>(null);
  const [transferInProgress, setTransferInProgress] = useState(false);
  const [activeQueue, setActiveQueue] = useState<1 | 2>(1);

  // Comprehensive steps array - following the template's granular approach
  const steps: Step[] = [
    // INITIALIZATION (5 steps)
    {
      step: 1,
      queue1: [],
      queue2: [],
      currentLine: 1,
      description: '📋 Initialize: Create stack using two empty queues',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 2,
      queue1: [],
      queue2: [],
      currentLine: 2,
      description: '📋 Queue1 (mainQueue) will handle most operations',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 3,
      queue1: [],
      queue2: [],
      currentLine: 3,
      description: '📋 Queue2 (tempQueue) assists with pop operations',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 2
    },
    {
      step: 4,
      queue1: [],
      queue2: [],
      currentLine: 4,
      description: '📋 Both queues start empty - stack is empty',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 5,
      queue1: [],
      queue2: [],
      currentLine: 5,
      description: '📋 Ready to perform stack operations using queues',
      action: 'init',
      highlighted: [],
      operation: 'init',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },

    // PUSH OPERATION 1 (6 steps)
    {
      step: 6,
      queue1: [],
      queue2: [],
      currentLine: 8,
      description: '🔄 Push Operation: Adding element 10 to stack',
      action: 'loop-start',
      highlighted: [],
      operation: 'push',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 7,
      queue1: [],
      queue2: [],
      currentLine: 9,
      description: '✅ Push: Simply enqueue to Queue1 (mainQueue)',
      action: 'check',
      highlighted: [],
      operation: 'push',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 8,
      queue1: [],
      queue2: [],
      currentLine: 10,
      description: '📊 Enqueue: Queue1.enqueue(10)',
      action: 'calculate',
      highlighted: [],
      operation: 'push',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 9,
      queue1: [10],
      queue2: [],
      currentLine: 11,
      description: '➕ Update: Queue1 = [10]',
      action: 'update',
      highlighted: [0],
      operation: 'push',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 10,
      queue1: [10],
      queue2: [],
      currentLine: 12,
      description: '✅ Push successful! Element 10 added',
      action: 'found',
      highlighted: [0],
      operation: 'push',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 11,
      queue1: [10],
      queue2: [],
      currentLine: 13,
      description: '📋 Stack state: [10] (top=10)',
      action: 'done',
      highlighted: [0],
      operation: 'push',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },

    // PUSH OPERATION 2 (6 steps)
    {
      step: 12,
      queue1: [10],
      queue2: [],
      currentLine: 16,
      description: '🔄 Push Operation: Adding element 20 to stack',
      action: 'loop-start',
      highlighted: [],
      operation: 'push',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 13,
      queue1: [10],
      queue2: [],
      currentLine: 17,
      description: '✅ Push: Enqueue to Queue1 (no transfer needed)',
      action: 'check',
      highlighted: [],
      operation: 'push',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 14,
      queue1: [10],
      queue2: [],
      currentLine: 18,
      description: '📊 Enqueue: Queue1.enqueue(20)',
      action: 'calculate',
      highlighted: [],
      operation: 'push',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 15,
      queue1: [10, 20],
      queue2: [],
      currentLine: 19,
      description: '➕ Update: Queue1 = [10, 20]',
      action: 'update',
      highlighted: [1],
      operation: 'push',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 16,
      queue1: [10, 20],
      queue2: [],
      currentLine: 20,
      description: '✅ Push successful! Element 20 added',
      action: 'found',
      highlighted: [1],
      operation: 'push',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 17,
      queue1: [10, 20],
      queue2: [],
      currentLine: 21,
      description: '📋 Stack state: [10, 20] (top=20)',
      action: 'done',
      highlighted: [0, 1],
      operation: 'push',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },

    // PUSH MORE ELEMENTS (8 steps)
    {
      step: 18,
      queue1: [10, 20],
      queue2: [],
      currentLine: 24,
      description: '🔄 Push: Adding elements 30, 40, 50',
      action: 'loop-start',
      highlighted: [],
      operation: 'push',
      currentValue: 30,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 19,
      queue1: [10, 20, 30],
      queue2: [],
      currentLine: 25,
      description: '➕ Enqueue 30: Queue1 = [10, 20, 30]',
      action: 'update',
      highlighted: [2],
      operation: 'push',
      currentValue: 30,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 20,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 26,
      description: '➕ Enqueue 40: Queue1 = [10, 20, 30, 40]',
      action: 'update',
      highlighted: [3],
      operation: 'push',
      currentValue: 40,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 21,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 27,
      description: '➕ Enqueue 50: Queue1 = [10, 20, 30, 40, 50]',
      action: 'update',
      highlighted: [4],
      operation: 'push',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 22,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 28,
      description: '📋 Stack state: [10, 20, 30, 40, 50]',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'push',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 23,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 29,
      description: '📊 Queue1 holds: [10, 20, 30, 40, 50] (front to rear)',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'push',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 24,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 30,
      description: '💡 Key Insight: Queue1 stores elements in insertion order',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'push',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 25,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 31,
      description: '📋 Ready for pop operation',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'push',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },

    // POP OPERATION - TRANSFER PHASE (15 steps)
    {
      step: 26,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 34,
      description: '🔄 Pop Operation: Removing top element (50)',
      action: 'loop-start',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 27,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 35,
      description: '✅ Check: Queue1 has more than 1 element? YES! Need to transfer',
      action: 'check',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: true,
      activeQueue: 1
    },
    {
      step: 28,
      queue1: [10, 20, 30, 40, 50],
      queue2: [],
      currentLine: 36,
      description: '🔄 Transfer: Move all except last element from Queue1 to Queue2',
      action: 'transfer',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: true,
      activeQueue: 1
    },
    {
      step: 29,
      queue1: [20, 30, 40, 50],
      queue2: [10],
      currentLine: 37,
      description: '➕ Transfer 1: Dequeue 10 from Queue1, enqueue to Queue2',
      action: 'update',
      highlighted: [0, 0],
      operation: 'pop',
      currentValue: 10,
      poppedValue: null,
      transferInProgress: true,
      activeQueue: 2
    },
    {
      step: 30,
      queue1: [30, 40, 50],
      queue2: [10, 20],
      currentLine: 38,
      description: '➕ Transfer 2: Dequeue 20 from Queue1, enqueue to Queue2',
      action: 'update',
      highlighted: [0, 0, 1],
      operation: 'pop',
      currentValue: 20,
      poppedValue: null,
      transferInProgress: true,
      activeQueue: 2
    },
    {
      step: 31,
      queue1: [40, 50],
      queue2: [10, 20, 30],
      currentLine: 39,
      description: '➕ Transfer 3: Dequeue 30 from Queue1, enqueue to Queue2',
      action: 'update',
      highlighted: [0, 0, 1, 2],
      operation: 'pop',
      currentValue: 30,
      poppedValue: null,
      transferInProgress: true,
      activeQueue: 2
    },
    {
      step: 32,
      queue1: [50],
      queue2: [10, 20, 30, 40],
      currentLine: 40,
      description: '➕ Transfer 4: Dequeue 40 from Queue1, enqueue to Queue2',
      action: 'update',
      highlighted: [0, 0, 1, 2, 3],
      operation: 'pop',
      currentValue: 40,
      poppedValue: null,
      transferInProgress: true,
      activeQueue: 2
    },
    {
      step: 33,
      queue1: [50],
      queue2: [10, 20, 30, 40],
      currentLine: 41,
      description: '✅ Transfer complete! Only element 50 remains in Queue1',
      action: 'found',
      highlighted: [0, 0, 1, 2, 3],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 34,
      queue1: [50],
      queue2: [10, 20, 30, 40],
      currentLine: 42,
      description: '💡 Element 50 is now at front of Queue1 (stack top)',
      action: 'done',
      highlighted: [0],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 35,
      queue1: [50],
      queue2: [10, 20, 30, 40],
      currentLine: 43,
      description: '📊 Stack order restored: [10, 20, 30, 40, 50]',
      action: 'done',
      highlighted: [0, 1, 2, 3, 4],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 2
    },
    {
      step: 36,
      queue1: [50],
      queue2: [10, 20, 30, 40],
      currentLine: 44,
      description: '🎯 Ready to pop top element (50)',
      action: 'done',
      highlighted: [0],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 37,
      queue1: [50],
      queue2: [10, 20, 30, 40],
      currentLine: 45,
      description: '🔄 Swap queues: Queue2 becomes main, Queue1 becomes empty',
      action: 'transfer',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 2
    },
    {
      step: 38,
      queue1: [10, 20, 30, 40],
      queue2: [50],
      currentLine: 46,
      description: '➕ Swapped: Queue1 = [10, 20, 30, 40], Queue2 = [50]',
      action: 'update',
      highlighted: [0, 1, 2, 3, 0],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 1
    },
    {
      step: 39,
      queue1: [10, 20, 30, 40],
      queue2: [50],
      currentLine: 47,
      description: '🎯 Now Queue2 has the element to pop (50)',
      action: 'done',
      highlighted: [0],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 2
    },
    {
      step: 40,
      queue1: [10, 20, 30, 40],
      queue2: [50],
      currentLine: 48,
      description: '✅ Transfer and swap complete!',
      action: 'found',
      highlighted: [0, 1, 2, 3, 0],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 2
    },

    // POP OPERATION - ACTUAL REMOVAL (6 steps)
    {
      step: 41,
      queue1: [10, 20, 30, 40],
      queue2: [50],
      currentLine: 51,
      description: '🔄 Pop: Remove top element from Queue2',
      action: 'loop-start',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: null,
      transferInProgress: false,
      activeQueue: 2
    },
    {
      step: 42,
      queue1: [10, 20, 30, 40],
      queue2: [50],
      currentLine: 52,
      description: '📍 Get element: Queue2.peek() = 50',
      action: 'examine',
      highlighted: [0],
      operation: 'pop',
      currentValue: 50,
      poppedValue: 50
    },
    {
      step: 43,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 53,
      description: '🗑️ Dequeue: Queue2.dequeue() removes 50',
      action: 'update',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: 50
    },
    {
      step: 44,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 54,
      description: '✅ Pop successful! Removed element: 50',
      action: 'found',
      highlighted: [],
      operation: 'pop',
      currentValue: 50,
      poppedValue: 50
    },
    {
      step: 45,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 55,
      description: '📋 Stack state: [10, 20, 30, 40]',
      action: 'done',
      highlighted: [0, 1, 2, 3],
      operation: 'pop',
      currentValue: 50,
      poppedValue: 50
    },
    {
      step: 46,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 56,
      description: '🎯 New top element: 40 (rear of Queue1)',
      action: 'done',
      highlighted: [3],
      operation: 'pop',
      currentValue: 50,
      poppedValue: 50
    },

    // SECOND POP - NO TRANSFER NEEDED (6 steps)
    {
      step: 47,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 59,
      description: '🔄 Second Pop: Remove next top element (40)',
      action: 'loop-start',
      highlighted: [],
      operation: 'pop',
      currentValue: 40,
      poppedValue: 50
    },
    {
      step: 48,
      queue1: [10, 20, 30, 40],
      queue2: [],
      currentLine: 60,
      description: '✅ Check: Queue1 has more than 1 element? YES! Need to transfer',
      action: 'check',
      highlighted: [],
      operation: 'pop',
      currentValue: 40,
      poppedValue: 50
    },
    {
      step: 49,
      queue1: [20, 30, 40],
      queue2: [10],
      currentLine: 61,
      description: '➕ Transfer elements to Queue2, keep last in Queue1',
      action: 'update',
      highlighted: [0, 0],
      operation: 'pop',
      currentValue: 40,
      poppedValue: 50
    },
    {
      step: 50,
      queue1: [30, 40],
      queue2: [10, 20],
      currentLine: 62,
      description: '➕ Continue transfer: [20, 30, 40] → [10, 20]',
      action: 'update',
      highlighted: [0, 0, 1],
      operation: 'pop',
      currentValue: 40,
      poppedValue: 50
    },
    {
      step: 51,
      queue1: [40],
      queue2: [10, 20, 30],
      currentLine: 63,
      description: '➕ Final transfer: [40] → [10, 20, 30]',
      action: 'update',
      highlighted: [0, 0, 1, 2],
      operation: 'pop',
      currentValue: 40,
      poppedValue: 50
    },
    {
      step: 52,
      queue1: [40],
      queue2: [10, 20, 30],
      currentLine: 64,
      description: '✅ Transfer complete! Element 40 ready to pop',
      action: 'found',
      highlighted: [0],
      operation: 'pop',
      currentValue: 40,
      poppedValue: 50
    },

    // PUSH AFTER POP (6 steps)
    {
      step: 53,
      queue1: [40],
      queue2: [10, 20, 30],
      currentLine: 67,
      description: '🔄 Push after Pop: Adding element 60',
      action: 'loop-start',
      highlighted: [],
      operation: 'push',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 54,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 68,
      description: '✅ Push: Enqueue to Queue1 (current main queue)',
      action: 'check',
      highlighted: [1],
      operation: 'push',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 55,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 69,
      description: '📊 Enqueue: Queue1.enqueue(60)',
      action: 'update',
      highlighted: [1],
      operation: 'push',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 56,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 70,
      description: '✅ Push successful! Element 60 added',
      action: 'found',
      highlighted: [1],
      operation: 'push',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 57,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 71,
      description: '📋 Stack state: [10, 20, 30, 40, 60]',
      action: 'done',
      highlighted: [0, 1, 2, 0, 1],
      operation: 'push',
      currentValue: 60,
      poppedValue: 40
    },

    // FINAL STATE AND SUMMARY (5 steps)
    {
      step: 58,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 74,
      description: '🎯 Final Stack State: [10, 20, 30, 40, 60]',
      action: 'done',
      highlighted: [0, 1, 2, 0, 1],
      operation: 'done',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 59,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 75,
      description: '📊 Queue1 (new elements): [40, 60]',
      action: 'done',
      highlighted: [0, 1],
      operation: 'done',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 60,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 76,
      description: '📊 Queue2 (old elements): [10, 20, 30]',
      action: 'done',
      highlighted: [0, 1, 2],
      operation: 'done',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 61,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 77,
      description: '💡 O(n) time for pop, O(1) for push achieved',
      action: 'done',
      highlighted: [0, 1, 2, 0, 1],
      operation: 'done',
      currentValue: 60,
      poppedValue: 40
    },
    {
      step: 62,
      queue1: [40, 60],
      queue2: [10, 20, 30],
      currentLine: 78,
      description: '✅ Stack using queues implementation complete!',
      action: 'result',
      highlighted: [0, 1, 2, 0, 1],
      operation: 'done',
      currentValue: 60,
      poppedValue: 40
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'class StackUsingQueues {', 
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
        code: '    this.queue1 = []; // mainQueue', 
        active: stepData.currentLine === 3, 
        indent: 2,
        values: stepData.currentLine === 3 ? `queue1=[${stepData.queue1.join(', ')}]` : ''
      },
      { 
        line: 4, 
        code: '    this.queue2 = []; // tempQueue', 
        active: stepData.currentLine === 4, 
        indent: 2,
        values: stepData.currentLine === 4 ? `queue2=[${stepData.queue2.join(', ')}]` : ''
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
        code: '  push(value) {', 
        active: stepData.currentLine === 7, 
        indent: 1 
      },
      { 
        line: 8, 
        code: '    // Simply enqueue to queue1', 
        active: stepData.currentLine === 8, 
        indent: 2 
      },
      { 
        line: 9, 
        code: '    this.queue1.push(value);', 
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
        code: '  pop() {', 
        active: stepData.currentLine === 12, 
        indent: 1 
      },
      { 
        line: 13, 
        code: '    // If queue1 has only one element, dequeue it', 
        active: stepData.currentLine === 13, 
        indent: 2 
      },
      { 
        line: 14, 
        code: '    if (this.queue1.length === 1) {', 
        active: stepData.currentLine === 14, 
        indent: 2 
      },
      { 
        line: 15, 
        code: '      return this.queue1.shift();', 
        active: stepData.currentLine === 15, 
        indent: 3 
      },
      { 
        line: 16, 
        code: '    }', 
        active: stepData.currentLine === 16, 
        indent: 2 
      },
      { 
        line: 17, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 18, 
        code: '    // Move all elements except last to queue2', 
        active: stepData.currentLine === 18, 
        indent: 2 
      },
      { 
        line: 19, 
        code: '    while (this.queue1.length > 1) {', 
        active: stepData.currentLine === 19, 
        indent: 3 
      },
      { 
        line: 20, 
        code: '      this.queue2.push(this.queue1.shift());', 
        active: stepData.currentLine === 20, 
        indent: 4 
      },
      { 
        line: 21, 
        code: '    }', 
        active: stepData.currentLine === 21, 
        indent: 3 
      },
      { 
        line: 22, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 23, 
        code: '    // Get the last element (stack top)', 
        active: stepData.currentLine === 23, 
        indent: 2 
      },
      { 
        line: 24, 
        code: '    const lastElement = this.queue1.shift();', 
        active: stepData.currentLine === 24, 
        indent: 3 
      },
      { 
        line: 25, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 26, 
        code: '    // Swap queues back', 
        active: stepData.currentLine === 26, 
        indent: 2 
      },
      { 
        line: 27, 
        code: '    [this.queue1, this.queue2] = [this.queue2, this.queue1];', 
        active: stepData.currentLine === 27, 
        indent: 3 
      },
      { 
        line: 28, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 29, 
        code: '    return lastElement;', 
        active: stepData.currentLine === 29, 
        indent: 2,
        values: stepData.currentLine === 29 && stepData.poppedValue !== null ? `return ${stepData.poppedValue}` : ''
      },
      { 
        line: 30, 
        code: '  }', 
        active: stepData.currentLine === 30, 
        indent: 1 
      },
      { 
        line: 31, 
        code: '}', 
        active: stepData.currentLine === 31, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setQueue1(step.queue1);
    setQueue2(step.queue2);
    setCurrentOperation(step.operation);
    setCurrentValue(step.currentValue);
    setPoppedValue(step.poppedValue);
    setTransferInProgress(step.transferInProgress ?? false);
    setActiveQueue(step.activeQueue ?? 1);
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

  // Get stack state from queues
  const getStackState = () => {
    const queue2Reversed = [...queue2].reverse();
    return [...queue2Reversed, ...queue1];
  };

  return (
    <>
      {styleTag}
      <div className="space-y-8">
        {/* Page Header */}
        <PageHeader
          icon={Layers}
          category="DSA · Stacks · Basic Stack Operations"
          title="Implement Stack Using Queues"
          description="Master the art of implementing LIFO stack behavior using two FIFO queues with efficient operations"
          colorTheme="orange"
          badges={[
            { label: 'Push: O(1)', variant: 'success' },
            { label: 'Pop: O(n)', variant: 'info' },
            { label: 'Intermediate', variant: 'default' },
          ]}
        />

        <div className="container mx-auto px-4 py-8 space-y-8">
          {/* Visual Problem Statement */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-600" />
                Stack Using Two Queues
              </CardTitle>
              <CardDescription>Learn how to implement LIFO stack using FIFO queues efficiently</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* What is Stack Using Queues */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  What is Stack Using Queues?
                </h4>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    A stack can be implemented using two queues where one queue acts as the main storage and the other assists in maintaining LIFO order during pop operations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                      <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                      <div className="font-mono text-sm">Operations: [Push, Pop, Transfer]</div>
                    </div>
                    
                    <div className="p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                      <div className="font-mono text-sm">LIFO behavior with O(1) push, O(n) pop</div>
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
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-start gap-3">
                      <ArrowDown className="w-5 h-5 text-orange-600 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-orange-700 dark:text-orange-300">Push Operation</span>
                          <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">O(1) ✓</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          Simply enqueue the new element to Queue1
                        </div>
                        <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          Queue1.enqueue(value)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-start gap-3">
                      <ArrowUp className="w-5 h-5 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-purple-700 dark:text-purple-300">Pop Operation</span>
                          <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded">O(n) ✓</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          Transfer all except last element to Queue2, then pop
                        </div>
                        <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                          Transfer → Pop → Swap
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
                      <div className="font-semibold mb-2">Initialize Two Queues</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                        <div className="font-mono text-xs">queue1 = [] (main), queue2 = [] (temp)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Push: Enqueue to Queue1</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Always:</div>
                        <div className="font-mono text-xs">queue1.enqueue(value)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Pop: Transfer if Needed</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">If more than 1 element:</div>
                        <div className="font-mono text-xs">move queue1→queue2 (except last)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-2">Swap Queues</div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Result:</div>
                        <div className="font-mono text-xs">queue1 becomes main, queue2 empty</div>
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
                    <span>Push is O(1) - simple enqueue operation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Pop is O(n) - requires transfer operation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Transfer maintains LIFO order by moving elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Queue swap ensures proper structure for next operations</span>
                  </div>
                </AlertDescription>
              </Alert>

            </CardContent>
          </Card>

          {/* Animated Visualization */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
                  <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                Step-by-Step Animation
              </CardTitle>
              <CardDescription>Watch how stack operations work using two queues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Controls */}
              <div className="flex items-center justify-center gap-3">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700"
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
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
                
                <div className="px-6 py-2 bg-gradient-to-r from-orange-100 to-orange-100 dark:from-orange-900/40 dark:to-orange-900/40 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                  <span className="text-sm font-bold text-orange-900 dark:text-orange-100">
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
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">stack-using-queues.js</span>
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
                            ? 'bg-orange-50 dark:bg-orange-900/20 border-l-2 border-orange-400 dark:border-orange-500'
                            : ''
                        }`}
                      >
                        <span className={`select-none w-6 text-right flex-shrink-0 ${
                          lineData.active
                            ? 'text-orange-600 dark:text-orange-400 font-semibold'
                            : 'text-slate-400 dark:text-slate-600'
                        }`}>
                          {lineData.line}
                        </span>

                        <code className="flex-1 text-slate-700 dark:text-slate-300">
                          <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                            {lineData.code}
                          </span>
                          {lineData.values && (
                            <span className="ml-3 text-orange-600 dark:text-orange-400 font-semibold">
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
                          <span className="text-slate-500 dark:text-slate-400">queue1:</span>
                          <span className="font-semibold text-orange-600 dark:text-orange-400">[{steps[currentStep].queue1.join(', ')}]</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">queue2:</span>
                          <span className="font-semibold text-orange-600 dark:text-orange-400">[{steps[currentStep].queue2.join(', ')}]</span>
                        </div>
                        {steps[currentStep].poppedValue !== null && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 dark:text-slate-400">popped:</span>
                            <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].poppedValue}</span>
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

              {/* Visual Queue Representation */}
              {currentStep >= 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Queue Visualization:</p>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-orange-500 rounded"></div>
                        <span>Queue1 (Main)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span>Queue2 (Temp)</span>
                      </div>
                      {transferInProgress && (
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-500 rounded animate-pulse"></div>
                          <span>Transferring</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Queue1 */}
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-center font-semibold text-orange-700 dark:text-orange-300 mb-4">Queue1 (Main Queue)</h4>
                      <div className="flex items-center gap-1 min-h-[60px]">
                        {queue1.length > 0 ? (
                          <>
                            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">front →</div>
                            {queue1.map((value, index) => (
                              <div key={index} className="flex flex-col items-center gap-1">
                                <div
                                  className={`w-12 h-8 flex items-center justify-center rounded border-2 font-bold text-sm transition-all duration-700 ${
                                    activeQueue === 1 && index === queue1.length - 1
                                      ? 'bg-orange-200 dark:bg-orange-800 border-orange-500 scale-110 ring-2 ring-orange-300'
                                      : 'bg-orange-100 dark:bg-orange-900 border-orange-300'
                                  }`}
                                >
                                  {value}
                                </div>
                                {index === 0 && (
                                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">front</span>
                                )}
                                {index === queue1.length - 1 && (
                                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">rear</span>
                                )}
                              </div>
                            ))}
                            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">← rear</div>
                          </>
                        ) : (
                          <div className="flex-1 flex items-center justify-center text-slate-500 dark:text-slate-400 italic">
                            Empty Queue
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Queue2 */}
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-center font-semibold text-purple-700 dark:text-purple-300 mb-4">Queue2 (Temp Queue)</h4>
                      <div className="flex items-center gap-1 min-h-[60px]">
                        {queue2.length > 0 ? (
                          <>
                            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">front →</div>
                            {queue2.map((value, index) => (
                              <div key={index} className="flex flex-col items-center gap-1">
                                <div
                                  className={`w-12 h-8 flex items-center justify-center rounded border-2 font-bold text-sm transition-all duration-700 ${
                                    activeQueue === 2 && index === 0
                                      ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110 ring-2 ring-purple-300'
                                      : 'bg-purple-100 dark:bg-purple-900 border-purple-300'
                                  }`}
                                >
                                  {value}
                                </div>
                                {index === 0 && (
                                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">front</span>
                                )}
                                {index === queue2.length - 1 && (
                                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">rear</span>
                                )}
                              </div>
                            ))}
                            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">← rear</div>
                          </>
                        ) : (
                          <div className="flex-1 flex items-center justify-center text-slate-500 dark:text-slate-400 italic">
                            Empty Queue
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stack State */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Stack State (LIFO Order)</div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          {[...getStackState()].reverse().map((value, index) => (
                            <div key={index} className="flex flex-col items-center gap-1">
                              <div className="w-12 h-8 flex items-center justify-center rounded bg-green-200 dark:bg-green-800 border border-green-500 font-bold text-sm">
                                {value}
                              </div>
                              {index === 0 && (
                                <span className="text-xs font-mono text-green-600 dark:text-green-400">top</span>
                              )}
                            </div>
                          ))}
                        </div>
                        {getStackState().length === 0 && (
                          <span className="text-slate-500 dark:text-slate-400 italic">Empty Stack</span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        Top {getStackState().length > 0 ? `(${getStackState()[getStackState().length - 1]})` : '(empty)'} → Bottom {getStackState().length > 0 ? `(${getStackState()[0]})` : '(empty)'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </CardContent>
          </Card>

          {/* Complexity Analysis */}
          <Card className="border-orange-200 dark:border-orange-800">
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
                    <strong>Push: O(1)</strong> - Always enqueue to Queue1
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Pop: O(n)</strong> - Transfer n-1 elements to Queue2
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    💾 Space Complexity: O(n)
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Uses two queues with total space equal to number of elements. Each element stored once across both queues.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  🎯 Trade-offs
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Push operations are efficient (O(1)), but pop operations require transferring elements (O(n)). This is the opposite of the queue-using-stacks approach where enqueue is O(1) and dequeue is O(1) amortized.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Snippet */}
          <CodeSnippet
            title="Complete Stack Using Queues Implementation"
            language="javascript"
            code={`class StackUsingQueues {
  constructor() {
    this.queue1 = []; // Main queue
    this.queue2 = []; // Temporary queue
  }

  push(value) {
    // Always enqueue to queue1
    this.queue1.push(value);
  }

  pop() {
    // If queue1 is empty, stack is empty
    if (this.queue1.length === 0) {
      return null;
    }

    // If queue1 has only one element, dequeue it
    if (this.queue1.length === 1) {
      return this.queue1.shift();
    }

    // Move all elements except last to queue2
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // Get the last element (stack top)
    const lastElement = this.queue1.shift();

    // Swap queues back
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return lastElement;
  }

  top() {
    if (this.queue1.length === 0) {
      return null;
    }

    if (this.queue1.length === 1) {
      return this.queue1[0];
    }

    // Similar to pop, but don't remove the last element
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    const topElement = this.queue1[0];
    this.queue2.push(this.queue1.shift());

    // Swap queues back
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return topElement;
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  size() {
    return this.queue1.length;
  }
}`}


          />
        </div>
      </div>
    </>
  );
}
