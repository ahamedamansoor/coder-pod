'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Trash2, Calculator, TrendingDown
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function StacksRemoveKDigits() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [num] = useState('1432219');
  const [k] = useState(3);
  
  // Algorithm state
  const [stack, setStack] = useState<string[]>([]);
  const [removed, setRemoved] = useState<string[]>([]);
  const [kRemaining, setKRemaining] = useState(k);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState('');
  const [result, setResult] = useState('');

  // Steps array - comprehensive breakdown following COMP_DSA_STRUC guidelines
  const steps = [
    // INITIALIZATION (4 steps)
    {
      step: 1,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '',
      result: '',
      currentLine: 1,
      description: '📋 Initialize: Create empty stack to build result',
      action: 'init',
      highlighted: []
    },
    {
      step: 2,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '',
      result: '',
      currentLine: 2,
      description: '📋 Initialize: Set kRemaining = 3 (digits to remove)',
      action: 'init',
      highlighted: []
    },
    {
      step: 3,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '',
      result: '',
      currentLine: 3,
      description: '📋 Initialize: Set currentIndex = 0 (start at first digit)',
      action: 'init',
      highlighted: []
    },
    {
      step: 4,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '',
      result: '',
      currentLine: 4,
      description: '📋 Initialize: Set removed = [] (track removed digits)',
      action: 'init',
      highlighted: []
    },

    // PROCESSING DIGIT 1 - '1' (5 steps)
    {
      step: 5,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '1',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 0',
      action: 'loop-start',
      highlighted: [0]
    },
    {
      step: 6,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '1',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (0 < 7)',
      action: 'loop-check',
      highlighted: [0]
    },
    {
      step: 7,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '1',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[0] = "1"',
      action: 'examine',
      highlighted: [0]
    },
    {
      step: 8,
      stack: [],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '1',
      result: '',
      currentLine: 8,
      description: '🔍 Check: Stack empty? YES! Cannot remove from empty stack',
      action: 'check',
      highlighted: []
    },
    {
      step: 9,
      stack: ['1'],
      removed: [],
      kRemaining: 3,
      currentIndex: 0,
      currentChar: '1',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "1" to stack',
      action: 'update',
      highlighted: [0]
    },

    // PROCESSING DIGIT 2 - '4' (7 steps)
    {
      step: 10,
      stack: ['1'],
      removed: [],
      kRemaining: 3,
      currentIndex: 1,
      currentChar: '4',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 1',
      action: 'loop-start',
      highlighted: [1]
    },
    {
      step: 11,
      stack: ['1'],
      removed: [],
      kRemaining: 3,
      currentIndex: 1,
      currentChar: '4',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (1 < 7)',
      action: 'loop-check',
      highlighted: [1]
    },
    {
      step: 12,
      stack: ['1'],
      removed: [],
      kRemaining: 3,
      currentIndex: 1,
      currentChar: '4',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[1] = "4"',
      action: 'examine',
      highlighted: [1]
    },
    {
      step: 13,
      stack: ['1'],
      removed: [],
      kRemaining: 3,
      currentIndex: 1,
      currentChar: '4',
      result: '',
      currentLine: 8,
      description: '🔍 Compare: stack.top("1") < current("4")? YES! 1 < 4',
      action: 'compare',
      highlighted: [0, 1]
    },
    {
      step: 14,
      stack: ['1'],
      removed: [],
      kRemaining: 3,
      currentIndex: 1,
      currentChar: '4',
      result: '',
      currentLine: 8,
      description: '💡 Decision: Stack top is smaller, keep it (no removal needed)',
      action: 'decision',
      highlighted: [0, 1]
    },
    {
      step: 15,
      stack: ['1', '4'],
      removed: [],
      kRemaining: 3,
      currentIndex: 1,
      currentChar: '4',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "4" to stack',
      action: 'update',
      highlighted: [0, 1]
    },

    // PROCESSING DIGIT 3 - '3' (8 steps)
    {
      step: 16,
      stack: ['1', '4'],
      removed: [],
      kRemaining: 3,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 2',
      action: 'loop-start',
      highlighted: [2]
    },
    {
      step: 17,
      stack: ['1', '4'],
      removed: [],
      kRemaining: 3,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (2 < 7)',
      action: 'loop-check',
      highlighted: [2]
    },
    {
      step: 18,
      stack: ['1', '4'],
      removed: [],
      kRemaining: 3,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[2] = "3"',
      action: 'examine',
      highlighted: [2]
    },
    {
      step: 19,
      stack: ['1', '4'],
      removed: [],
      kRemaining: 3,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 8,
      description: '🔍 Compare: stack.top("4") > current("3")? YES! 4 > 3',
      action: 'compare',
      highlighted: [1, 2]
    },
    {
      step: 20,
      stack: ['1', '4'],
      removed: [],
      kRemaining: 3,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 8,
      description: '💡 Decision: Stack top is larger, remove it to make smaller number',
      action: 'decision',
      highlighted: [1, 2]
    },
    {
      step: 21,
      stack: ['1'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 8,
      description: '➖ Remove: Pop "4" from stack, kRemaining = 2',
      action: 'update',
      highlighted: [1, 2]
    },
    {
      step: 22,
      stack: ['1'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 8,
      description: '🔍 Check: stack.top("1") < current("3")? YES! 1 < 3',
      action: 'compare',
      highlighted: [0, 2]
    },
    {
      step: 23,
      stack: ['1', '3'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 2,
      currentChar: '3',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "3" to stack',
      action: 'update',
      highlighted: [0, 2]
    },

    // PROCESSING DIGIT 4 - '2' (8 steps)
    {
      step: 24,
      stack: ['1', '3'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 3',
      action: 'loop-start',
      highlighted: [3]
    },
    {
      step: 25,
      stack: ['1', '3'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (3 < 7)',
      action: 'loop-check',
      highlighted: [3]
    },
    {
      step: 26,
      stack: ['1', '3'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[3] = "2"',
      action: 'examine',
      highlighted: [3]
    },
    {
      step: 27,
      stack: ['1', '3'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 8,
      description: '🔍 Compare: stack.top("3") > current("2")? YES! 3 > 2',
      action: 'compare',
      highlighted: [2, 3]
    },
    {
      step: 28,
      stack: ['1', '3'],
      removed: ['4'],
      kRemaining: 2,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 8,
      description: '💡 Decision: Stack top is larger, remove it to make smaller number',
      action: 'decision',
      highlighted: [2, 3]
    },
    {
      step: 29,
      stack: ['1'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 8,
      description: '➖ Remove: Pop "3" from stack, kRemaining = 1',
      action: 'update',
      highlighted: [2, 3]
    },
    {
      step: 30,
      stack: ['1'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 8,
      description: '🔍 Compare: stack.top("1") < current("2")? YES! 1 < 2',
      action: 'compare',
      highlighted: [0, 3]
    },
    {
      step: 31,
      stack: ['1', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 3,
      currentChar: '2',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "2" to stack',
      action: 'update',
      highlighted: [0, 3]
    },

    // PROCESSING DIGIT 5 - '2' (8 steps)
    {
      step: 32,
      stack: ['1', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 4,
      currentChar: '2',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 4',
      action: 'loop-start',
      highlighted: [4]
    },
    {
      step: 33,
      stack: ['1', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 4,
      currentChar: '2',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (4 < 7)',
      action: 'loop-check',
      highlighted: [4]
    },
    {
      step: 34,
      stack: ['1', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 4,
      currentChar: '2',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[4] = "2"',
      action: 'examine',
      highlighted: [4]
    },
    {
      step: 35,
      stack: ['1', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 4,
      currentChar: '2',
      result: '',
      currentLine: 8,
      description: '🔍 Compare: stack.top("2") == current("2")? YES! 2 = 2',
      action: 'compare',
      highlighted: [3, 4]
    },
    {
      step: 36,
      stack: ['1', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 4,
      currentChar: '2',
      result: '',
      currentLine: 8,
      description: '💡 Decision: Equal digits, keep stack top (no removal needed)',
      action: 'decision',
      highlighted: [3, 4]
    },
    {
      step: 37,
      stack: ['1', '2', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 4,
      currentChar: '2',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "2" to stack',
      action: 'update',
      highlighted: [3, 4]
    },

    // PROCESSING DIGIT 6 - '1' (8 steps)
    {
      step: 38,
      stack: ['1', '2', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 5',
      action: 'loop-start',
      highlighted: [5]
    },
    {
      step: 39,
      stack: ['1', '2', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (5 < 7)',
      action: 'loop-check',
      highlighted: [5]
    },
    {
      step: 40,
      stack: ['1', '2', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[5] = "1"',
      action: 'examine',
      highlighted: [5]
    },
    {
      step: 41,
      stack: ['1', '2', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 8,
      description: '🔍 Compare: stack.top("2") > current("1")? YES! 2 > 1',
      action: 'compare',
      highlighted: [4, 5]
    },
    {
      step: 42,
      stack: ['1', '2', '2'],
      removed: ['4', '3'],
      kRemaining: 1,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 8,
      description: '💡 Decision: Stack top is larger, remove it to make smaller number',
      action: 'decision',
      highlighted: [4, 5]
    },
    {
      step: 43,
      stack: ['1', '2'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 8,
      description: '➖ Remove: Pop "2" from stack, kRemaining = 0',
      action: 'update',
      highlighted: [4, 5]
    },
    {
      step: 44,
      stack: ['1', '2'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 8,
      description: '⚠️ Check: kRemaining = 0? YES! Cannot remove more digits',
      action: 'check',
      highlighted: []
    },
    {
      step: 45,
      stack: ['1', '2', '1'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 5,
      currentChar: '1',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "1" to stack (no more removals allowed)',
      action: 'update',
      highlighted: [5]
    },

    // PROCESSING DIGIT 7 - '9' (5 steps)
    {
      step: 46,
      stack: ['1', '2', '1'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 6,
      currentChar: '9',
      result: '',
      currentLine: 5,
      description: '🔄 Loop Start: Processing digit at index 6',
      action: 'loop-start',
      highlighted: [6]
    },
    {
      step: 47,
      stack: ['1', '2', '1'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 6,
      currentChar: '9',
      result: '',
      currentLine: 6,
      description: '✅ Loop Check: currentIndex < num.length? YES! (6 < 7)',
      action: 'loop-check',
      highlighted: [6]
    },
    {
      step: 48,
      stack: ['1', '2', '1'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 6,
      currentChar: '9',
      result: '',
      currentLine: 7,
      description: '📍 Access: num[6] = "9"',
      action: 'examine',
      highlighted: [6]
    },
    {
      step: 49,
      stack: ['1', '2', '1'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 6,
      currentChar: '9',
      result: '',
      currentLine: 8,
      description: '⚠️ Check: kRemaining = 0? YES! Cannot remove more digits',
      action: 'check',
      highlighted: []
    },
    {
      step: 50,
      stack: ['1', '2', '1', '9'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 6,
      currentChar: '9',
      result: '',
      currentLine: 9,
      description: '➕ Add: Push "9" to stack',
      action: 'update',
      highlighted: [6]
    },

    // FINAL PROCESSING (4 steps)
    {
      step: 51,
      stack: ['1', '2', '1', '9'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 7,
      currentChar: '',
      result: '',
      currentLine: 10,
      description: '🎯 Loop Complete: currentIndex = 7, loop finished',
      action: 'loop-complete',
      highlighted: []
    },
    {
      step: 52,
      stack: ['1', '2', '1', '9'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 7,
      currentChar: '',
      result: '',
      currentLine: 11,
      description: '📊 Calculate: Join stack = "1219"',
      action: 'calculate',
      highlighted: []
    },
    {
      step: 53,
      stack: ['1', '2', '1', '9'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 7,
      currentChar: '',
      result: '1219',
      currentLine: 12,
      description: '✅ Result: Remove leading zeros (none needed), final = "1219"',
      action: 'result',
      highlighted: []
    },
    {
      step: 54,
      stack: ['1', '2', '1', '9'],
      removed: ['4', '3', '2'],
      kRemaining: 0,
      currentIndex: 7,
      currentChar: '',
      result: '1219',
      currentLine: 13,
      description: '🎯 Algorithm Complete! Smallest number after removing 3 digits: 1219',
      action: 'done',
      highlighted: []
    }
  ];

  // Helper functions
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { 
        line: 1, 
        code: 'function removeKdigits(num, k) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  let stack = [];', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `stack=[${stepData.stack.join(',')}]` : ''
      },
      { 
        line: 3, 
        code: '  let kRemaining = k;', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `kRemaining=${stepData.kRemaining}` : ''
      },
      { 
        line: 4, 
        code: '  let removed = [];', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `removed=[${stepData.removed.join(',')}]` : ''
      },
      { 
        line: 5, 
        code: '  for (let i = 0; i < num.length; i++) {', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: stepData.currentLine === 5 ? `i=${stepData.currentIndex}` : ''
      },
      { 
        line: 6, 
        code: '    let current = num[i];', 
        active: stepData.currentLine === 6, 
        indent: 2,
        values: stepData.currentLine === 6 ? `current="${stepData.currentChar}"` : ''
      },
      { 
        line: 7, 
        code: '    while (stack.length > 0 && kRemaining > 0 &&', 
        active: stepData.currentLine === 7, 
        indent: 2 
      },
      { 
        line: 8, 
        code: '           stack[stack.length - 1] > current) {', 
        active: stepData.currentLine === 8, 
        indent: 3 
      },
      { 
        line: 9, 
        code: '      stack.pop(); kRemaining--;', 
        active: stepData.currentLine === 9, 
        indent: 3,
        values: stepData.currentLine === 9 ? `stack=[${stepData.stack.join(',')}] kRemaining=${stepData.kRemaining}` : ''
      },
      { 
        line: 10, 
        code: '    }', 
        active: stepData.currentLine === 10, 
        indent: 2 
      },
      { 
        line: 11, 
        code: '    stack.push(current);', 
        active: stepData.currentLine === 11, 
        indent: 2,
        values: stepData.currentLine === 11 ? `stack=[${stepData.stack.join(',')}]` : ''
      },
      { 
        line: 12, 
        code: '  }', 
        active: stepData.currentLine === 12, 
        indent: 1 
      },
      { 
        line: 13, 
        code: '  return stack.join("").replace(/^0+/, "") || "0";', 
        active: stepData.currentLine === 13, 
        indent: 1,
        values: stepData.currentLine === 13 ? `result="${stepData.result}"` : ''
      },
      { 
        line: 14, 
        code: '}', 
        active: stepData.currentLine === 14, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStack(step.stack);
    setRemoved(step.removed);
    setKRemaining(step.kRemaining);
    setCurrentIndex(step.currentIndex);
    setCurrentChar(step.currentChar);
    setResult(step.result);
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

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        icon={Trash2}
        category="DSA · Stacks · Monotonic Stack"
        title="Remove K Digits"
        description="Remove K digits to make the smallest possible number using stack-based greedy approach"
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              What is Remove K Digits?
            </h4>
            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300">
                Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
              </p>
              
              {/* Visual Number Representation */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">ORIGINAL NUMBER</div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {['1', '4', '3', '2', '2', '1', '9'].map((digit, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg bg-blue-100 dark:bg-blue-800 border-2 border-blue-400">
                        {digit}
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                  Remove <span className="font-bold text-red-600">3 digits</span> to make the smallest possible number
                </div>
              </div>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">num = "1432219", k = 3</div>
                  <div className="text-xs text-slate-500 mt-1">7 digits, remove 3</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">"1219"</div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">4 digits remain</div>
                </div>
              </div>

              {/* Visual Transformation */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">VISUAL TRANSFORMATION</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-1">
                    {['1', '4', '3', '2', '2', '1', '9'].map((digit, idx) => (
                      <div key={idx} className="w-10 h-10 flex items-center justify-center rounded font-bold text-sm border">
                        {digit}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-xs text-slate-500">↓ Remove 4, 3, 2 (positions 1, 2, 4)</div>
                  <div className="flex items-center justify-center gap-1">
                    {['1', '2', '1', '9'].map((digit, idx) => (
                      <div key={idx} className="w-10 h-10 flex items-center justify-center rounded font-bold text-sm bg-green-100 dark:bg-green-800 border-2 border-green-500">
                        {digit}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-xs text-green-600 dark:text-green-400 font-semibold">Result: 1219</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Removal Strategies
            </h4>
            
            {/* Good Strategy */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Optimal Strategy</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Greedy ✓</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Remove larger digits when smaller digits appear to the right
                  </div>
                  
                  {/* Step-by-step visual */}
                  <div className="space-y-2 mb-3">
                    <div className="text-xs font-semibold text-slate-600">STEP-BY-STEP REMOVAL:</div>
                    <div className="flex items-center gap-1">
                      {['1', '4', '3', '2', '2', '1', '9'].map((digit, idx) => (
                        <div key={idx} className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold border">
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">→ Remove 4 (position 1) because 3 &lt; 4</div>
                    <div className="flex items-center gap-1">
                      {['1', '3', '2', '2', '1', '9'].map((digit, idx) => (
                        <div key={idx} className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold border ${
                          idx === 1 ? 'bg-red-100 dark:bg-red-800 border-red-500 line-through' : 'border'
                        }`}>
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">→ Remove 3 (position 1) because 2 &lt; 3</div>
                    <div className="flex items-center gap-1">
                      {['1', '2', '2', '1', '9'].map((digit, idx) => (
                        <div key={idx} className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold border ${
                          idx === 1 ? 'bg-red-100 dark:bg-red-800 border-red-500 line-through' : 'border'
                        }`}>
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">→ Remove 2 (position 2) because 1 &lt; 2</div>
                    <div className="flex items-center gap-1">
                      {['1', '2', '1', '9'].map((digit, idx) => (
                        <div key={idx} className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold bg-green-100 dark:bg-green-800 border-2 border-green-500">
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-semibold">✓ Final: 1219 (Smallest possible)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bad Strategy */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-red-700 dark:text-red-300">Naive Strategy</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">Not Optimal ✗</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Remove digits from the end without considering the order
                  </div>
                  
                  {/* Step-by-step visual */}
                  <div className="space-y-2 mb-3">
                    <div className="text-xs font-semibold text-slate-600">STEP-BY-STEP REMOVAL:</div>
                    <div className="flex items-center gap-1">
                      {['1', '4', '3', '2', '2', '1', '9'].map((digit, idx) => (
                        <div key={idx} className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold border">
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">→ Remove 9 (last digit)</div>
                    <div className="flex items-center gap-1">
                      {['1', '4', '3', '2', '2', '1'].map((digit, idx) => (
                        <div key={idx} className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold border">
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">→ Remove 1 (last digit)</div>
                    <div className="flex items-center gap-1">
                      {['1', '4', '3', '2', '2'].map((digit, idx) => (
                        <div key={idx} className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold border">
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">→ Remove 2 (last digit)</div>
                    <div className="flex items-center gap-1">
                      {['1', '4', '3', '2'].map((digit, idx) => (
                        <div key={idx} className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold bg-red-100 dark:bg-red-800 border-2 border-red-500">
                          {digit}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400 font-semibold">✗ Final: 1432 (Not smallest)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Summary */}
            <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <span className="font-semibold text-orange-900 dark:text-orange-100">Key Insight</span>
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-green-600">1219</span> &lt; <span className="font-bold text-red-600">1432</span>. 
                The greedy approach removes larger digits early, allowing smaller digits to take higher place values.
              </div>
              <div className="mt-2 p-2 bg-white dark:bg-slate-900 rounded border">
                <div className="text-xs font-mono">
                  1<span className="text-red-500">4</span><span className="text-red-500">3</span>22<span className="text-red-500">1</span>9 = 1,219 (optimal)<br/>
                  1432<span className="text-red-500">1</span><span className="text-red-500">9</span><span className="text-red-500">1</span> = 1,432 (naive)
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TrendingDown className="w-5 h-5" />
              How the Stack Algorithm Works
            </h4>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize Stack</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Create empty stack to build result:</div>
                    <div className="font-mono text-sm mb-3">stack = []</div>
                    
                    {/* Visual representation */}
                    <div className="flex items-center justify-center p-3 bg-purple-50 dark:bg-purple-950/20 rounded border border-purple-200 dark:border-purple-700">
                      <div className="text-center">
                        <div className="text-xs text-purple-600 dark:text-purple-400 mb-2">EMPTY STACK</div>
                        <div className="w-16 h-16 border-2 border-dashed border-purple-400 rounded-lg flex items-center justify-center">
                          <span className="text-purple-400 text-xs">Empty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Process Each Digit with Greedy Logic</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">While stack top &gt; current digit AND K &gt; 0:</div>
                    <div className="font-mono text-sm mb-3">Remove larger digits to make number smaller</div>
                    
                    {/* Visual example */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-700">
                        <div className="text-xs font-semibold text-blue-700 dark:text-blue-300">EXAMPLE: Processing "3" after "4"</div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-100 dark:bg-red-800 border border-red-500 rounded flex items-center justify-center text-xs font-bold line-through">4</div>
                          <span className="text-red-500 text-xs">→</span>
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 border border-blue-500 rounded flex items-center justify-center text-xs font-bold">3</div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Since 3 &lt; 4 and we can still remove digits, we remove 4 to make the number smaller
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Build Final Result</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Join stack and remove leading zeros:</div>
                    <div className="font-mono text-sm mb-3">result = stack.join("").replace(/^0+/, "") || "0"</div>
                    
                    {/* Visual result */}
                    <div className="flex items-center justify-center p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-700">
                      <div className="text-center">
                        <div className="text-xs text-green-600 dark:text-green-400 mb-2">FINAL STACK</div>
                        <div className="flex items-center gap-1 mb-2">
                          {['1', '2', '1', '9'].map((digit, idx) => (
                            <div key={idx} className="w-10 h-10 bg-green-100 dark:bg-green-800 border-2 border-green-500 rounded flex items-center justify-center text-sm font-bold">
                              {digit}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs font-mono text-green-700 dark:text-green-300">
                          result = "1219"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Flow Summary */}
              <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
                <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-3">ALGORITHM FLOW:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-xs text-slate-700 dark:text-slate-300">Start with empty stack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-xs text-slate-700 dark:text-slate-300">For each digit: remove larger digits from stack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-xs text-slate-700 dark:text-slate-300">Push current digit to stack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    <span className="text-xs text-slate-700 dark:text-slate-300">Join stack and remove leading zeros</span>
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
                <span>Greedy Strategy: Always remove larger digits when smaller ones appear</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Monotonic Stack: Maintains increasing order for optimal removal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Edge Cases: Handle leading zeros and K ≥ num.length</span>
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
              <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the stack algorithm processes each digit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls - Line 1 */}
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

          {/* Speed Control - Line 2 */}
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

          {/* Navigation Controls - Line 3 */}
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
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">removeKdigits.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(currentStepData).map((lineData) => (
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

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">stack:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">[{currentStepData.stack.join(',')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">kRemaining:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{currentStepData.kRemaining}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">removed:</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">[{currentStepData.removed.join(',')}]</span>
                    </div>
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
                      Step {currentStepData.step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {currentStepData.action === 'init' && '🚀 Initialization'}
                      {currentStepData.action === 'loop-start' && '🔄 Loop Iteration'}
                      {currentStepData.action === 'loop-check' && '⏸️ Checking Condition'}
                      {currentStepData.action === 'examine' && '📍 Examining Digit'}
                      {currentStepData.action === 'compare' && '🔍 Comparing Values'}
                      {currentStepData.action === 'decision' && '💡 Making Decision'}
                      {currentStepData.action === 'update' && '➕ Updating State'}
                      {currentStepData.action === 'check' && '⚠️ Checking Condition'}
                      {currentStepData.action === 'calculate' && '📊 Calculating Result'}
                      {currentStepData.action === 'result' && '✅ Final Result'}
                      {currentStepData.action === 'done' && '🎯 Algorithm Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-purple-200 dark:bg-purple-800 border border-purple-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Stack</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-200 dark:bg-red-800 border border-red-500 rounded line-through"></div>
                    <span className="text-slate-600 dark:text-slate-400">Removed</span>
                  </div>
                </div>
              </div>
              
              {/* Input Number */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                <div className="text-xs font-semibold text-slate-500 mb-2">INPUT: num = "1432219"</div>
                <div className="flex items-center justify-center gap-2">
                  {num.split('').map((digit, idx) => {
                    const isCurrent = currentStepData.currentIndex === idx;
                    const isRemoved = currentStepData.removed.includes(digit);
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Value Box */}
                        <div
                          className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                            isRemoved
                              ? 'bg-red-200 dark:bg-red-800 border-red-500 line-through opacity-60'
                              : isCurrent
                              ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110 ring-4 ring-purple-300 animate-pulse'
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 opacity-60'
                          }`}
                        >
                          {digit}
                        </div>
                        
                        {/* Index */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                        {/* Current Indicator */}
                        {isCurrent && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/80 px-2.5 py-1 rounded border border-purple-500 shadow-md">
                              Current: {currentStepData.currentChar}
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-purple-500"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stack Visualization */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold text-slate-500 mb-2">STACK: Building Result</div>
                <div className="flex items-center justify-center gap-2 min-h-[80px]">
                  {currentStepData.stack.length === 0 ? (
                    <div className="text-slate-400 dark:text-slate-600 italic">Stack is empty</div>
                  ) : (
                    currentStepData.stack.map((digit, idx) => (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        <div className="w-16 h-16 flex items-center justify-center rounded-lg font-bold text-lg bg-purple-200 dark:bg-purple-800 border-2 border-purple-500">
                          {digit}
                        </div>
                        {idx === currentStepData.stack.length - 1 && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-2 py-1 rounded border border-purple-500">
                              TOP
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Removed Digits */}
              {currentStepData.removed.length > 0 && (
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-700">
                  <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">REMOVED DIGITS: {currentStepData.removed.length}/{k}</div>
                  <div className="flex items-center justify-center gap-2">
                    {currentStepData.removed.map((digit, idx) => (
                      <div key={idx} className="w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg bg-red-200 dark:bg-red-800 border-2 border-red-500 line-through">
                        {digit}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Each digit is processed exactly once. In the worst case, each digit is pushed to and popped from the stack once, giving linear time complexity.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The stack stores at most n digits in the worst case when no digits are removed. Additional space for removed digits tracking.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function removeKdigits(num, k) {
  let stack = [];
  let kRemaining = k;
  
  for (let i = 0; i < num.length; i++) {
    let current = num[i];
    
    // Remove larger digits when smaller digit appears
    while (stack.length > 0 && kRemaining > 0 && 
           stack[stack.length - 1] > current) {
      stack.pop();
      kRemaining--;
    }
    
    stack.push(current);
  }
  
  // Remove remaining digits from end if needed
  while (kRemaining > 0 && stack.length > 0) {
    stack.pop();
    kRemaining--;
  }
  
  // Join and remove leading zeros
  return stack.join("").replace(/^0+/, "") || "0";
}

// Example usage:
console.log(removeKdigits("1432219", 3)); // Output: "1219"
console.log(removeKdigits("10200", 1));   // Output: "200"
console.log(removeKdigits("10", 2));      // Output: "0"`}
      />
    </div>
  );
}
