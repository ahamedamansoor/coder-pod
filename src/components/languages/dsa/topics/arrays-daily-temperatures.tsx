'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Thermometer,
  ArrowRight, TrendingUp, Calendar
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

interface Step {
  step: number;
  currentDay: number;
  stack: number[];
  result: number[];
  currentLine: number;
  description: string;
  action: 'init' | 'loop-start' | 'loop-check' | 'push' | 'pop' | 'calculate' | 'update' | 'done';
  highlighted: number[];
  stackTop?: number;
  waitingDays?: number;
}

export default function ArraysDailyTemperatures() {
  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [currentDay, setCurrentDay] = useState(0);
  const [stack, setStack] = useState<number[]>([]);
  const [result, setResult] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

  const steps: Step[] = [
    // Initialization
    {
      step: 1,
      currentDay: 0,
      stack: [],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 2,
      description: '📋 Initialize: Create empty stack to store indices',
      action: 'init',
      highlighted: []
    },
    {
      step: 2,
      currentDay: 0,
      stack: [],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 3,
      description: '📋 Initialize: Create result array filled with 0s',
      action: 'init',
      highlighted: []
    },
    
    // Day 0 (73°F)
    {
      step: 3,
      currentDay: 0,
      stack: [],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 0: Start processing temperature 73°F',
      action: 'loop-start',
      highlighted: [0]
    },
    {
      step: 4,
      currentDay: 0,
      stack: [],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '✅ Check: Stack empty? YES! Push day 0 to stack',
      action: 'push',
      highlighted: [0],
      stackTop: 0
    },
    {
      step: 5,
      currentDay: 0,
      stack: [0],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 0 (73°F) to stack',
      action: 'push',
      highlighted: [0],
      stackTop: 0
    },

    // Day 1 (74°F)
    {
      step: 6,
      currentDay: 1,
      stack: [0],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 1: Processing temperature 74°F',
      action: 'loop-start',
      highlighted: [1]
    },
    {
      step: 7,
      currentDay: 1,
      stack: [0],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: Stack not empty AND 74°F > 73°F? YES!',
      action: 'loop-check',
      highlighted: [1, 0]
    },
    {
      step: 8,
      currentDay: 1,
      stack: [0],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '📊 Calculate: Day 1 - Day 0 = 1 day wait for Day 0',
      action: 'calculate',
      highlighted: [1, 0],
      stackTop: 0,
      waitingDays: 1
    },
    {
      step: 9,
      currentDay: 1,
      stack: [0],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 8,
      description: '✅ Update: result[0] = 1 (Day 0 waits 1 day)',
      action: 'update',
      highlighted: [1, 0]
    },
    {
      step: 10,
      currentDay: 1,
      stack: [],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 9,
      description: '🗑️ Pop: Remove day 0 from stack (found warmer day)',
      action: 'pop',
      highlighted: [1]
    },
    {
      step: 11,
      currentDay: 1,
      stack: [],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: Stack empty? YES! Push day 1',
      action: 'push',
      highlighted: [1]
    },
    {
      step: 12,
      currentDay: 1,
      stack: [1],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 1 (74°F) to stack',
      action: 'push',
      highlighted: [1],
      stackTop: 1
    },

    // Day 2 (75°F)
    {
      step: 13,
      currentDay: 2,
      stack: [1],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 2: Processing temperature 75°F',
      action: 'loop-start',
      highlighted: [2]
    },
    {
      step: 14,
      currentDay: 2,
      stack: [1],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: Stack not empty AND 75°F > 74°F? YES!',
      action: 'loop-check',
      highlighted: [2, 1]
    },
    {
      step: 15,
      currentDay: 2,
      stack: [1],
      result: [1, 0, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '📊 Calculate: Day 2 - Day 1 = 1 day wait for Day 1',
      action: 'calculate',
      highlighted: [2, 1],
      stackTop: 1,
      waitingDays: 1
    },
    {
      step: 16,
      currentDay: 2,
      stack: [1],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 8,
      description: '✅ Update: result[1] = 1 (Day 1 waits 1 day)',
      action: 'update',
      highlighted: [2, 1]
    },
    {
      step: 17,
      currentDay: 2,
      stack: [],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 9,
      description: '🗑️ Pop: Remove day 1 from stack (found warmer day)',
      action: 'pop',
      highlighted: [2]
    },
    {
      step: 18,
      currentDay: 2,
      stack: [],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: Stack empty? YES! Push day 2',
      action: 'push',
      highlighted: [2]
    },
    {
      step: 19,
      currentDay: 2,
      stack: [2],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 2 (75°F) to stack',
      action: 'push',
      highlighted: [2],
      stackTop: 2
    },

    // Day 3 (71°F) - Colder, just push
    {
      step: 20,
      currentDay: 3,
      stack: [2],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 3: Processing temperature 71°F',
      action: 'loop-start',
      highlighted: [3]
    },
    {
      step: 21,
      currentDay: 3,
      stack: [2],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 71°F > 75°F? NO! Just push day 3',
      action: 'push',
      highlighted: [3, 2]
    },
    {
      step: 22,
      currentDay: 3,
      stack: [2, 3],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 3 (71°F) to stack',
      action: 'push',
      highlighted: [3],
      stackTop: 3
    },

    // Day 4 (69°F) - Colder, just push
    {
      step: 23,
      currentDay: 4,
      stack: [2, 3],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 4: Processing temperature 69°F',
      action: 'loop-start',
      highlighted: [4]
    },
    {
      step: 24,
      currentDay: 4,
      stack: [2, 3],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 69°F > 71°F? NO! Just push day 4',
      action: 'push',
      highlighted: [4, 3]
    },
    {
      step: 25,
      currentDay: 4,
      stack: [2, 3, 4],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 4 (69°F) to stack',
      action: 'push',
      highlighted: [4],
      stackTop: 4
    },

    // Day 5 (72°F) - Warmer than 69°F and 71°F
    {
      step: 26,
      currentDay: 5,
      stack: [2, 3, 4],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 5: Processing temperature 72°F',
      action: 'loop-start',
      highlighted: [5]
    },
    {
      step: 27,
      currentDay: 5,
      stack: [2, 3, 4],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 72°F > 69°F? YES! Process day 4',
      action: 'loop-check',
      highlighted: [5, 4]
    },
    {
      step: 28,
      currentDay: 5,
      stack: [2, 3, 4],
      result: [1, 1, 0, 0, 0, 0, 0, 0],
      currentLine: 7,
      description: '📊 Calculate: Day 5 - Day 4 = 1 day wait for Day 4',
      action: 'calculate',
      highlighted: [5, 4],
      stackTop: 4,
      waitingDays: 1
    },
    {
      step: 29,
      currentDay: 5,
      stack: [2, 3, 4],
      result: [1, 1, 0, 0, 1, 0, 0, 0],
      currentLine: 8,
      description: '✅ Update: result[4] = 1 (Day 4 waits 1 day)',
      action: 'update',
      highlighted: [5, 4]
    },
    {
      step: 30,
      currentDay: 5,
      stack: [2, 3],
      result: [1, 1, 0, 0, 1, 0, 0, 0],
      currentLine: 9,
      description: '🗑️ Pop: Remove day 4 from stack',
      action: 'pop',
      highlighted: [5, 3]
    },
    {
      step: 31,
      currentDay: 5,
      stack: [2, 3],
      result: [1, 1, 0, 0, 1, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 72°F > 71°F? YES! Process day 3',
      action: 'loop-check',
      highlighted: [5, 3]
    },
    {
      step: 32,
      currentDay: 5,
      stack: [2, 3],
      result: [1, 1, 0, 0, 1, 0, 0, 0],
      currentLine: 7,
      description: '📊 Calculate: Day 5 - Day 3 = 2 days wait for Day 3',
      action: 'calculate',
      highlighted: [5, 3],
      stackTop: 3,
      waitingDays: 2
    },
    {
      step: 33,
      currentDay: 5,
      stack: [2, 3],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 8,
      description: '✅ Update: result[3] = 2 (Day 3 waits 2 days)',
      action: 'update',
      highlighted: [5, 3]
    },
    {
      step: 34,
      currentDay: 5,
      stack: [2],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 9,
      description: '🗑️ Pop: Remove day 3 from stack',
      action: 'pop',
      highlighted: [5, 2]
    },
    {
      step: 35,
      currentDay: 5,
      stack: [2],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 72°F > 75°F? NO! Push day 5',
      action: 'push',
      highlighted: [5, 2]
    },
    {
      step: 36,
      currentDay: 5,
      stack: [2, 5],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 5 (72°F) to stack',
      action: 'push',
      highlighted: [5],
      stackTop: 5
    },

    // Day 6 (76°F) - Warmer than all in stack
    {
      step: 37,
      currentDay: 6,
      stack: [2, 5],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 5,
      description: '🔄 Day 6: Processing temperature 76°F',
      action: 'loop-start',
      highlighted: [6]
    },
    {
      step: 38,
      currentDay: 6,
      stack: [2, 5],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 76°F > 72°F? YES! Process day 5',
      action: 'loop-check',
      highlighted: [6, 5]
    },
    {
      step: 39,
      currentDay: 6,
      stack: [2, 5],
      result: [1, 1, 0, 2, 1, 0, 0, 0],
      currentLine: 7,
      description: '📊 Calculate: Day 6 - Day 5 = 1 day wait for Day 5',
      action: 'calculate',
      highlighted: [6, 5],
      stackTop: 5,
      waitingDays: 1
    },
    {
      step: 40,
      currentDay: 6,
      stack: [2, 5],
      result: [1, 1, 0, 2, 1, 1, 0, 0],
      currentLine: 8,
      description: '✅ Update: result[5] = 1 (Day 5 waits 1 day)',
      action: 'update',
      highlighted: [6, 5]
    },
    {
      step: 41,
      currentDay: 6,
      stack: [2],
      result: [1, 1, 0, 2, 1, 1, 0, 0],
      currentLine: 9,
      description: '🗑️ Pop: Remove day 5 from stack',
      action: 'pop',
      highlighted: [6, 2]
    },
    {
      step: 42,
      currentDay: 6,
      stack: [2],
      result: [1, 1, 0, 2, 1, 1, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 76°F > 75°F? YES! Process day 2',
      action: 'loop-check',
      highlighted: [6, 2]
    },
    {
      step: 43,
      currentDay: 6,
      stack: [2],
      result: [1, 1, 0, 2, 1, 1, 0, 0],
      currentLine: 7,
      description: '📊 Calculate: Day 6 - Day 2 = 4 days wait for Day 2',
      action: 'calculate',
      highlighted: [6, 2],
      stackTop: 2,
      waitingDays: 4
    },
    {
      step: 44,
      currentDay: 6,
      stack: [2],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 8,
      description: '✅ Update: result[2] = 4 (Day 2 waits 4 days)',
      action: 'update',
      highlighted: [6, 2]
    },
    {
      step: 45,
      currentDay: 6,
      stack: [],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 9,
      description: '🗑️ Pop: Remove day 2 from stack',
      action: 'pop',
      highlighted: [6]
    },
    {
      step: 46,
      currentDay: 6,
      stack: [],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 6,
      description: '🔍 Check: Stack empty? YES! Push day 6',
      action: 'push',
      highlighted: [6]
    },
    {
      step: 47,
      currentDay: 6,
      stack: [6],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 6 (76°F) to stack',
      action: 'push',
      highlighted: [6],
      stackTop: 6
    },

    // Day 7 (73°F) - Colder, just push
    {
      step: 48,
      currentDay: 7,
      stack: [6],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 5,
      description: '🔄 Day 7: Processing temperature 73°F',
      action: 'loop-start',
      highlighted: [7]
    },
    {
      step: 49,
      currentDay: 7,
      stack: [6],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 6,
      description: '🔍 Check: 73°F > 76°F? NO! Just push day 7',
      action: 'push',
      highlighted: [7, 6]
    },
    {
      step: 50,
      currentDay: 7,
      stack: [6, 7],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 7,
      description: '➕ Push: Add day 7 (73°F) to stack',
      action: 'push',
      highlighted: [7],
      stackTop: 7
    },

    // Complete
    {
      step: 51,
      currentDay: 8,
      stack: [6, 7],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
      currentLine: 11,
      description: '🎯 Algorithm complete! Return result array',
      action: 'done',
      highlighted: []
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'function dailyTemperatures(temperatures) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  const stack = []; // stores indices', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `stack: [${stepData.stack.join(', ')}]` : ''
      },
      { 
        line: 3, 
        code: '  const result = new Array(temperatures.length).fill(0);', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `result: [${stepData.result.join(', ')}]` : ''
      },
      { 
        line: 4, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 5, 
        code: '  for (let i = 0; i < temperatures.length; i++) {', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: stepData.currentLine === 5 ? `i: ${stepData.currentDay}, temp: ${temperatures[stepData.currentDay] || 'N/A'}°F` : ''
      },
      { 
        line: 6, 
        code: '    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {', 
        active: stepData.currentLine === 6, 
        indent: 2,
        values: stepData.currentLine === 6 && stepData.stack.length > 0 ? 
          `stackTop: ${stepData.stack[stepData.stack.length - 1]}, topTemp: ${temperatures[stepData.stack[stepData.stack.length - 1]]}°F` : ''
      },
      { 
        line: 7, 
        code: '      const idx = stack.pop();', 
        active: stepData.currentLine === 7, 
        indent: 3,
        values: stepData.currentLine === 7 && stepData.waitingDays !== undefined ? 
          `waitDays: ${stepData.waitingDays}` : ''
      },
      { 
        line: 8, 
        code: '      result[idx] = i - idx;', 
        active: stepData.currentLine === 8, 
        indent: 3,
        values: stepData.currentLine === 8 && stepData.waitingDays !== undefined ? 
          `result[${stepData.stackTop || 'N/A'}] = ${stepData.waitingDays}` : ''
      },
      { 
        line: 9, 
        code: '    }', 
        active: stepData.currentLine === 9, 
        indent: 2 
      },
      { 
        line: 10, 
        code: '    stack.push(i);', 
        active: stepData.currentLine === 10, 
        indent: 2,
        values: stepData.currentLine === 10 ? `push: ${stepData.currentDay}` : ''
      },
      { 
        line: 11, 
        code: '  }', 
        active: stepData.currentLine === 11, 
        indent: 1 
      },
      { 
        line: 12, 
        code: '', 
        active: false, 
        indent: 0 
      },
      { 
        line: 13, 
        code: '  return result;', 
        active: stepData.currentLine === 13, 
        indent: 1 
      },
      { 
        line: 14, 
        code: '}', 
        active: false, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentDay(step.currentDay);
    setStack([...step.stack]);
    setResult([...step.result]);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 2000,
      normal: 1200,
      fast: 600
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

  const getTemperatureColor = (temp: number, isHighlighted: boolean) => {
    if (isHighlighted) {
      if (temp >= 75) return 'bg-red-500 text-white border-red-600 scale-110 ring-4 ring-red-300 animate-pulse';
      if (temp >= 70) return 'bg-orange-500 text-white border-orange-600 scale-110 ring-4 ring-orange-300 animate-pulse';
      return 'bg-blue-500 text-white border-blue-600 scale-110 ring-4 ring-blue-300 animate-pulse';
    }
    if (temp >= 75) return 'bg-red-100 text-red-700 border-red-300';
    if (temp >= 70) return 'bg-orange-100 text-orange-700 border-orange-300';
    return 'bg-blue-100 text-blue-700 border-blue-300';
  };

  const getStackColor = (dayIndex: number, stackTop: number | undefined) => {
    if (stackTop !== undefined && dayIndex === stackTop) {
      return 'bg-gradient-to-br from-purple-500 to-purple-600 text-white border-purple-700 scale-110 shadow-lg';
    }
    return 'bg-gradient-to-br from-slate-500 to-slate-600 text-white border-slate-700';
  };

  return (
    <div className="space-y-6">
      <PageHeader
        icon={Thermometer}
        category="DSA · Arrays · Stack"
        title="Daily Temperatures"
        description="Find how many days you have to wait until a warmer temperature occurs for each day using a monotonic stack approach"
        colorTheme="orange"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Stack', variant: 'default' },
        ]}
      />

      {/* Understanding the Problem */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Understanding Daily Temperatures
          </CardTitle>
          <CardDescription>Let's visualize how we find warmer days using a stack</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? - Diagrammatic Explanation */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6 flex items-center gap-2">
              <Thermometer className="w-5 h-5" />
              Understanding Daily Temperatures Problem
            </h4>
            
            {/* Temperature Timeline Visualization */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-4">📅 Temperature Timeline - What We Need to Find:</div>
              
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-orange-200 dark:border-orange-700 min-h-[300px]">
                {/* Days and Temperatures */}
                <div className="flex items-center justify-between mb-8 relative">
                  {temperatures.map((temp, idx) => (
                    <div key={idx} className="flex flex-col items-center relative">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-sm border-2 ${
                        temp >= 75 ? 'bg-red-100 text-red-700 border-red-300' :
                        temp >= 70 ? 'bg-orange-100 text-orange-700 border-orange-300' :
                        'bg-blue-100 text-blue-700 border-blue-300'
                      }`}>
                        {temp}°
                      </div>
                      <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-2">Day {idx}</div>
                    </div>
                  ))}
                  
                  {/* Arrow overlays positioned relative to temperature boxes */}
                  <div className="absolute top-6 left-0 right-0 h-40 pointer-events-none">
                    {/* Day 0 (73°F) to Day 1 (74°F) arrow - +1 day */}
                    <div className="absolute left-[6.25%] flex flex-col items-start z-10">
                      <div className="flex items-center">
                        <div className="w-10 md:w-12 lg:w-16 h-1 bg-orange-500 shadow-sm"></div>
                        <div className="w-0 h-0 border-l-[8px] border-r-0 border-t-[6px] border-b-[6px] border-transparent border-l-orange-500"></div>
                      </div>
                      <span className="mt-2 ml-2 text-xs font-bold text-orange-700 bg-orange-50 px-2 py-1 rounded-full border-2 border-orange-300 shadow-sm whitespace-nowrap">+1 day</span>
                    </div>
                    
                    {/* Day 1 (74°F) to Day 2 (75°F) arrow - +1 day */}
                    <div className="absolute left-[18.75%] top-8 md:top-10 flex flex-col items-start z-10">
                      <div className="flex items-center">
                        <div className="w-10 md:w-12 lg:w-16 h-1 bg-orange-500 shadow-sm"></div>
                        <div className="w-0 h-0 border-l-[8px] border-r-0 border-t-[6px] border-b-[6px] border-transparent border-l-orange-500"></div>
                      </div>
                      <span className="mt-2 ml-2 text-xs font-bold text-orange-700 bg-orange-50 px-2 py-1 rounded-full border-2 border-orange-300 shadow-sm whitespace-nowrap">+1 day</span>
                    </div>
                    
                    {/* Day 2 (75°F) to Day 6 (76°F) arrow - +4 days */}
                    <div className="absolute left-[31.25%] top-16 md:top-20 flex flex-col items-start">
                      <div className="flex items-center" style={{width: '800%'}}>
                        <div className="w-full h-1 bg-red-500 shadow-sm"></div>
                        <div className="w-0 h-0 border-l-[8px] border-r-0 border-t-[6px] border-b-[6px] border-transparent border-l-red-500"></div>
                      </div>
                      <span className="mt-2 ml-2 text-xs font-bold text-red-700 bg-red-50 px-2 py-1 rounded-full border-2 border-red-300 shadow-sm whitespace-nowrap">+4 days</span>
                    </div>
                    
                    {/* Day 3 (71°F) to Day 5 (72°F) arrow - +2 days */}
                    <div className="absolute left-[43.75%] top-24 md:top-28 flex flex-col items-start">
                      <div className="flex items-center" style={{width: '430%'}}>
                        <div className="w-full h-1 bg-orange-500 shadow-sm"></div>
                        <div className="w-0 h-0 border-l-[8px] border-r-0 border-t-[6px] border-b-[6px] border-transparent border-l-orange-500"></div>
                      </div>
                      <span className="mt-2 ml-2 text-xs font-bold text-orange-700 bg-orange-50 px-2 py-1 rounded-full border-2 border-orange-300 shadow-sm whitespace-nowrap">+2 days</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center text-xs text-slate-600 dark:text-slate-400 pt-[100px]">
                  Each day waits for the next warmer temperature → Shows how many days to wait
                </div>
              </div>
            </div>

            {/* Input/Output with Visual Explanation */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">📊 INPUT</div>
                <div className="font-mono text-lg mb-2">[73, 74, 75, 71, 69, 72, 76, 73]</div>
                <div className="text-xs text-slate-500">Daily temperatures for 8 days</div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-3">🎯 OUTPUT</div>
                <div className="font-mono text-lg mb-2">[1, 1, 4, 2, 1, 1, 0, 0]</div>
                <div className="text-xs text-slate-500">Days to wait for warmer temp</div>
              </div>
            </div>

            {/* Visual Step-by-Step Explanation */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-orange-200 dark:border-orange-700">
              <div className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-4">🔍 How to Read the Results:</div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">0</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 0 (73°F) → waits <span className="font-bold text-orange-600">1 day</span> for 74°F</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Warmer temperature found on Day 1</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-orange-200 dark:border-orange-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[0]</span> = 73°F</div>
                        <div><span className="text-purple-600">temperatures[1]</span> = 74°F</div>
                        <div><span className="text-green-600">result[0]</span> = 1 - 0 = <span className="font-bold">1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 1 (74°F) → waits <span className="font-bold text-orange-600">1 day</span> for 75°F</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Warmer temperature found on Day 2</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-orange-200 dark:border-orange-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[1]</span> = 74°F</div>
                        <div><span className="text-purple-600">temperatures[2]</span> = 75°F</div>
                        <div><span className="text-green-600">result[1]</span> = 2 - 1 = <span className="font-bold">1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 2 (75°F) → waits <span className="font-bold text-red-600">4 days</span> for 76°F</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Warmer temperature found on Day 6</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-orange-200 dark:border-orange-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[2]</span> = 75°F</div>
                        <div><span className="text-purple-600">temperatures[6]</span> = 76°F</div>
                        <div><span className="text-green-600">result[2]</span> = 6 - 2 = <span className="font-bold">4</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 3 (71°F) → waits <span className="font-bold text-orange-600">2 days</span> for 72°F</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Warmer temperature found on Day 5</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-orange-200 dark:border-orange-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[3]</span> = 71°F</div>
                        <div><span className="text-purple-600">temperatures[5]</span> = 72°F</div>
                        <div><span className="text-green-600">result[3]</span> = 5 - 3 = <span className="font-bold">2</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">4</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 4 (69°F) → waits <span className="font-bold text-orange-600">1 day</span> for 72°F</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Warmer temperature found on Day 5</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-orange-200 dark:border-orange-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[4]</span> = 69°F</div>
                        <div><span className="text-purple-600">temperatures[5]</span> = 72°F</div>
                        <div><span className="text-green-600">result[4]</span> = 5 - 4 = <span className="font-bold">1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">5</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 5 (72°F) → waits <span className="font-bold text-orange-600">1 day</span> for 76°F</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Warmer temperature found on Day 6</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-orange-200 dark:border-orange-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[5]</span> = 72°F</div>
                        <div><span className="text-purple-600">temperatures[6]</span> = 76°F</div>
                        <div><span className="text-green-600">result[5]</span> = 6 - 5 = <span className="font-bold">1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-slate-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">6</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 6 (76°F) → waits <span className="font-bold text-slate-600">0 days</span></div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">No warmer day exists after Day 6</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[6]</span> = 76°F</div>
                        <div><span className="text-red-600">No warmer temperature found</span></div>
                        <div><span className="text-green-600">result[6]</span> = <span className="font-bold">0</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-slate-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">7</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Day 7 (73°F) → waits <span className="font-bold text-slate-600">0 days</span></div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">No warmer day exists after Day 7</div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-mono space-y-1">
                        <div><span className="text-purple-600">temperatures[7]</span> = 73°F</div>
                        <div><span className="text-red-600">No warmer temperature found</span></div>
                        <div><span className="text-green-600">result[7]</span> = <span className="font-bold">0</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">How It Works - Stack Approach</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Day waiting example */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Day 0 (73°F)</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Waits 1 day for 74°F
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">73°</span>
                      <ArrowRight className="w-3 h-3 text-blue-500" />
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">74°</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack behavior */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Monotonic Stack</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Stores indices in decreasing temperature order
                    </div>
                    <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                      Stack: [2, 3, 4] → [2, 5]
                    </div>
                  </div>
                </div>
              </div>

              {/* Result calculation */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-green-700 dark:text-green-300 mb-2">Calculation</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Days wait = Current Day - Previous Day
                    </div>
                    <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                      Day 6 - Day 2 = 4 days
                    </div>
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
                <span><strong>Monotonic Stack:</strong> Stack maintains decreasing temperature order</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Pop & Calculate:</strong> When warmer day found, pop and calculate wait time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Push Current:</strong> Always push current day index after processing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>O(n) Time:</strong> Each element pushed and popped at most once</span>
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
              <Thermometer className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the stack algorithm processes each day</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
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
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as typeof speed)}
                  disabled={isAnimating}
                  className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation */}
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 rounded-lg border-2 border-orange-300 dark:border-orange-700">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">dailyTemperatures.js</span>
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
                      <span className="text-slate-500 dark:text-slate-400">Day:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{currentDay}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Stack:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">[{stack.join(', ')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Result:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">[{result.join(', ')}]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
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
                      {steps[currentStep].action === 'loop-start' && '🔄 Processing Day'}
                      {steps[currentStep].action === 'loop-check' && '🔍 Checking Stack'}
                      {steps[currentStep].action === 'push' && '➕ Push to Stack'}
                      {steps[currentStep].action === 'pop' && '🗑️ Pop from Stack'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Wait Time'}
                      {steps[currentStep].action === 'update' && '✅ Updating Result'}
                      {steps[currentStep].action === 'done' && '🎯 Algorithm Complete'}
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
            <div className="space-y-6">
              {/* Temperature Array */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Temperature Array:</p>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Hot (≥75°F)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-orange-500 rounded"></div>
                      <span>Warm (70-74°F)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Cool {'(<70°F)'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-3">
                    {temperatures.map((temp, idx) => {
                      const isHighlighted = steps[currentStep].highlighted.includes(idx);
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {/* Temperature Box */}
                          <div
                            className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                              getTemperatureColor(temp, isHighlighted)
                            }`}
                          >
                            {temp}°
                          </div>
                          
                          {/* Day Index */}
                          <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Day {idx}</span>

                          {/* Current Day Indicator */}
                          {isHighlighted && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                              <div className="text-xs font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/80 px-2.5 py-1 rounded border border-orange-500 shadow-md">
                                Current
                              </div>
                              <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-orange-500"></div>
                            </div>
                          )}

                          {/* Result Value */}
                          {result[idx] > 0 && (
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                              <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">
                                Wait: {result[idx]} days
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Stack Visualization */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Stack (Indices):</p>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Top → Bottom (decreasing temperatures)
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-2 min-h-[100px]">
                    {stack.length === 0 ? (
                      <div className="text-slate-400 dark:text-slate-600 italic">Stack is empty</div>
                    ) : (
                      [...stack].reverse().map((dayIndex, reverseIdx) => {
                        const isTop = reverseIdx === 0;
                        const temp = temperatures[dayIndex];
                        
                        return (
                          <div key={dayIndex} className="relative flex flex-col items-center gap-2">
                            {/* Stack Element */}
                            <div
                              className={`w-24 h-14 flex items-center justify-center rounded-lg font-bold text-sm border-2 transition-all duration-700 ${
                                getStackColor(dayIndex, steps[currentStep].stackTop)
                              }`}
                            >
                              Day {dayIndex} - {temp}°
                            </div>
                            
                            {/* Top Indicator */}
                            {isTop && (
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                <div className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-2 py-1 rounded border border-purple-500">
                                  TOP
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>

              {/* Result Array */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-green-900 dark:text-green-100">Result Array:</p>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Days to wait for warmer temperature
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-3">
                    {result.map((waitDays, idx) => (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Result Box */}
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                            waitDays > 0 
                              ? 'bg-green-100 text-green-700 border-green-300' 
                              : 'bg-slate-100 text-slate-500 border-slate-300'
                          }`}
                        >
                          {waitDays}
                        </div>
                        
                        {/* Day Index */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>
                      </div>
                    ))}
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
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Each temperature is pushed to stack once and popped at most once. 
                Total operations = 2n, where n is number of days.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Stack stores at most n indices in worst case (strictly decreasing temperatures).
                Result array uses O(n) additional space.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Solution */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function dailyTemperatures(temperatures) {
  const stack = []; // stores indices of days with decreasing temperatures
  const result = new Array(temperatures.length).fill(0);
  
  for (let i = 0; i < temperatures.length; i++) {
    // While current temperature is warmer than temperature at stack top
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop(); // Get the day waiting for warmer temperature
      result[idx] = i - idx;   // Calculate wait days: current day - previous day
    }
    
    stack.push(i); // Add current day to stack
  }
  
  return result;
}`}
      />
    </div>
  );
}
