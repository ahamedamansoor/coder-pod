'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, ArrowRight, TrendingUp, Layers
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

interface Step {
  step: number;
  index: number;
  nums: number[];
  result: number[];
  currentNum: number;
  stack: number[];
  currentLine: number;
  description: string;
  action: 'init' | 'loop-start' | 'loop-check' | 'examine' | 'push' | 'pop' | 'calculate' | 'compare' | 'update' | 'found' | 'result' | 'done' | 'check';
  highlighted: number[];
  processingIndex: number;
}

export default function StacksNextGreaterElementI() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific data
  const originalArray = [4, 5, 2, 25];
  const [currentArray, setCurrentArray] = useState([...originalArray]);
  const [currentResult, setCurrentResult] = useState([-1, -1, -1, -1]);
  const [currentStack, setCurrentStack] = useState<number[]>([]);
  const [processingIndex, setProcessingIndex] = useState(-1);
  
  // Detailed steps following COMP_DSA_STRUC guidelines (minimum 25-35 for medium complexity)
  const steps: Step[] = [
    // INITIALIZATION (3 steps)
    { 
      step: 1, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 1, 
      description: '📋 Initialize: Create input array [4, 5, 2, 25] for processing',
      action: 'init',
      highlighted: [],
      processingIndex: -1
    },
    { 
      step: 2, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 2, 
      description: '📋 Initialize: Create result array [-1, -1, -1, -1] with default values',
      action: 'init',
      highlighted: [],
      processingIndex: -1
    },
    { 
      step: 3, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 3, 
      description: '📋 Initialize: Create empty stack to track indices',
      action: 'init',
      highlighted: [],
      processingIndex: -1
    },
    
    // ITERATION 1: Process index 0 (value 4)
    { 
      step: 4, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 4, 
      stack: [], 
      currentLine: 5, 
      description: '🔄 Loop Start: Processing index 0, nums[0] = 4',
      action: 'loop-start',
      highlighted: [0],
      processingIndex: 0
    },
    { 
      step: 5, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 4, 
      stack: [], 
      currentLine: 6, 
      description: '✅ Loop Check: i < nums.length? 0 < 4? YES! Continue processing',
      action: 'loop-check',
      highlighted: [0],
      processingIndex: 0
    },
    { 
      step: 6, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 4, 
      stack: [], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack empty? YES! No elements to compare',
      action: 'check',
      highlighted: [0],
      processingIndex: 0
    },
    { 
      step: 7, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 4, 
      stack: [], 
      currentLine: 8, 
      description: '➕ Push: Add index 0 to stack (tracking value 4)',
      action: 'push',
      highlighted: [0],
      processingIndex: 0
    },
    { 
      step: 8, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 4, 
      stack: [0], 
      currentLine: 8, 
      description: '✅ Update: Stack now contains [0] (indices of values to find greater elements for)',
      action: 'update',
      highlighted: [0],
      processingIndex: 0
    },
    
    // ITERATION 2: Process index 1 (value 5)
    { 
      step: 9, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 5, 
      stack: [0], 
      currentLine: 5, 
      description: '🔄 Loop Start: Processing index 1, nums[1] = 5',
      action: 'loop-start',
      highlighted: [1],
      processingIndex: 1
    },
    { 
      step: 10, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 5, 
      stack: [0], 
      currentLine: 6, 
      description: '✅ Loop Check: i < nums.length? 1 < 4? YES! Continue processing',
      action: 'loop-check',
      highlighted: [1],
      processingIndex: 1
    },
    { 
      step: 11, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 5, 
      stack: [0], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [0]',
      action: 'check',
      highlighted: [1],
      processingIndex: 1
    },
    { 
      step: 12, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 5, 
      stack: [0], 
      currentLine: 7, 
      description: '👉 Examine: Stack top = 0, nums[0] = 4',
      action: 'examine',
      highlighted: [0, 1],
      processingIndex: 1
    },
    { 
      step: 13, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 5, 
      stack: [0], 
      currentLine: 7, 
      description: '🔍 Compare: nums[1] (5) > nums[0] (4)? YES! 5 is greater',
      action: 'compare',
      highlighted: [0, 1],
      processingIndex: 1
    },
    { 
      step: 14, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1, -1], 
      currentNum: 5, 
      stack: [0], 
      currentLine: 8, 
      description: '🔄 Pop: Remove index 0 from stack (found greater element)',
      action: 'pop',
      highlighted: [0, 1],
      processingIndex: 1
    },
    { 
      step: 15, 
      index: 1, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 5, 
      stack: [], 
      currentLine: 9, 
      description: '✅ Update: Set result[0] = 5 (next greater for nums[0])',
      action: 'update',
      highlighted: [0, 1],
      processingIndex: 1
    },
    { 
      step: 16, 
      index: 1, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 5, 
      stack: [], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack empty? YES! No more elements to compare',
      action: 'check',
      highlighted: [1],
      processingIndex: 1
    },
    { 
      step: 17, 
      index: 1, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 5, 
      stack: [], 
      currentLine: 12, 
      description: '➕ Push: Add index 1 to stack (tracking value 5)',
      action: 'push',
      highlighted: [1],
      processingIndex: 1
    },
    { 
      step: 18, 
      index: 1, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 5, 
      stack: [1], 
      currentLine: 12, 
      description: '✅ Update: Stack now contains [1]',
      action: 'update',
      highlighted: [1],
      processingIndex: 1
    },
    
    // ITERATION 3: Process index 2 (value 2)
    { 
      step: 19, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 5, 
      description: '🔄 Loop Start: Processing index 2, nums[2] = 2',
      action: 'loop-start',
      highlighted: [2],
      processingIndex: 2
    },
    { 
      step: 20, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 6, 
      description: '✅ Loop Check: i < nums.length? 2 < 4? YES! Continue processing',
      action: 'loop-check',
      highlighted: [2],
      processingIndex: 2
    },
    { 
      step: 21, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1]',
      action: 'check',
      highlighted: [2],
      processingIndex: 2
    },
    { 
      step: 22, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 7, 
      description: '👉 Examine: Stack top = 1, nums[1] = 5',
      action: 'examine',
      highlighted: [1, 2],
      processingIndex: 2
    },
    { 
      step: 23, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 7, 
      description: '🔍 Compare: nums[2] (2) > nums[1] (5)? NO! 2 is not greater',
      action: 'compare',
      highlighted: [1, 2],
      processingIndex: 2
    },
    { 
      step: 24, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 12, 
      description: '➕ Push: Add index 2 to stack (2 is not greater than 5)',
      action: 'push',
      highlighted: [2],
      processingIndex: 2
    },
    { 
      step: 25, 
      index: 2, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 12, 
      description: '✅ Update: Stack now contains [1, 2]',
      action: 'update',
      highlighted: [2],
      processingIndex: 2
    },
    
    // ITERATION 4: Process index 3 (value 25)
    { 
      step: 26, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 25, 
      stack: [1, 2], 
      currentLine: 5, 
      description: '🔄 Loop Start: Processing index 3, nums[3] = 25',
      action: 'loop-start',
      highlighted: [3],
      processingIndex: 3
    },
    { 
      step: 27, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 25, 
      stack: [1, 2], 
      currentLine: 6, 
      description: '✅ Loop Check: i < nums.length? 3 < 4? YES! Continue processing',
      action: 'loop-check',
      highlighted: [3],
      processingIndex: 3
    },
    { 
      step: 28, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 25, 
      stack: [1, 2], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1, 2]',
      action: 'check',
      highlighted: [3],
      processingIndex: 3
    },
    { 
      step: 29, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 25, 
      stack: [1, 2], 
      currentLine: 7, 
      description: '👉 Examine: Stack top = 2, nums[2] = 2',
      action: 'examine',
      highlighted: [2, 3],
      processingIndex: 3
    },
    { 
      step: 30, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 25, 
      stack: [1, 2], 
      currentLine: 7, 
      description: '🔍 Compare: nums[3] (25) > nums[2] (2)? YES! 25 is greater',
      action: 'compare',
      highlighted: [2, 3],
      processingIndex: 3
    },
    { 
      step: 31, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, -1, -1], 
      currentNum: 25, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '🔄 Pop: Remove index 2 from stack (found greater element)',
      action: 'pop',
      highlighted: [2, 3],
      processingIndex: 3
    },
    { 
      step: 32, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, 25, -1], 
      currentNum: 25, 
      stack: [1], 
      currentLine: 9, 
      description: '✅ Update: Set result[2] = 25 (next greater for nums[2])',
      action: 'update',
      highlighted: [2, 3],
      processingIndex: 3
    },
    { 
      step: 33, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, 25, -1], 
      currentNum: 25, 
      stack: [1], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1]',
      action: 'check',
      highlighted: [1, 3],
      processingIndex: 3
    },
    { 
      step: 34, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, 25, -1], 
      currentNum: 25, 
      stack: [1], 
      currentLine: 7, 
      description: '👉 Examine: Stack top = 1, nums[1] = 5',
      action: 'examine',
      highlighted: [1, 3],
      processingIndex: 3
    },
    { 
      step: 35, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, 25, -1], 
      currentNum: 25, 
      stack: [1], 
      currentLine: 7, 
      description: '🔍 Compare: nums[3] (25) > nums[1] (5)? YES! 25 is greater',
      action: 'compare',
      highlighted: [1, 3],
      processingIndex: 3
    },
    { 
      step: 36, 
      index: 3, 
      nums: originalArray, 
      result: [5, -1, 25, -1], 
      currentNum: 25, 
      stack: [1], 
      currentLine: 8, 
      description: '🔄 Pop: Remove index 1 from stack (found greater element)',
      action: 'pop',
      highlighted: [1, 3],
      processingIndex: 3
    },
    { 
      step: 37, 
      index: 3, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: 25, 
      stack: [], 
      currentLine: 9, 
      description: '✅ Update: Set result[1] = 25 (next greater for nums[1])',
      action: 'update',
      highlighted: [1, 3],
      processingIndex: 3
    },
    { 
      step: 38, 
      index: 3, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: 25, 
      stack: [], 
      currentLine: 7, 
      description: '🔍 Check Stack: Is stack empty? YES! No more elements to compare',
      action: 'check',
      highlighted: [3],
      processingIndex: 3
    },
    { 
      step: 39, 
      index: 3, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: 25, 
      stack: [], 
      currentLine: 12, 
      description: '➕ Push: Add index 3 to stack (tracking value 25)',
      action: 'push',
      highlighted: [3],
      processingIndex: 3
    },
    { 
      step: 40, 
      index: 3, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: 25, 
      stack: [3], 
      currentLine: 12, 
      description: '✅ Update: Stack now contains [3]',
      action: 'update',
      highlighted: [3],
      processingIndex: 3
    },
    
    // COMPLETION (3 steps)
    { 
      step: 41, 
      index: 4, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: -1, 
      stack: [3], 
      currentLine: 5, 
      description: '🎯 Loop Complete: i >= nums.length? YES! 4 >= 4',
      action: 'done',
      highlighted: [],
      processingIndex: -1
    },
    { 
      step: 42, 
      index: 4, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: -1, 
      stack: [3], 
      currentLine: 14, 
      description: '✅ Result: Final result array = [5, 25, 25, -1]',
      action: 'result',
      highlighted: [],
      processingIndex: -1
    },
    { 
      step: 43, 
      index: 4, 
      nums: originalArray, 
      result: [5, 25, 25, -1], 
      currentNum: -1, 
      stack: [3], 
      currentLine: 14, 
      description: '🎯 Algorithm complete! Found next greater elements using stack',
      action: 'done',
      highlighted: [],
      processingIndex: -1
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'function nextGreaterElement(nums) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  const result = new Array(nums.length).fill(-1);', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `result: [${stepData.result.join(', ')}]` : ''
      },
      { 
        line: 3, 
        code: '  const stack = [];', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `stack: [${stepData.stack.join(', ')}]` : ''
      },
      { 
        line: 4, 
        code: '', 
        active: stepData.currentLine === 4, 
        indent: 0,
        values: ''
      },
      { 
        line: 5, 
        code: '  for (let i = 0; i < nums.length; i++) {', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: stepData.currentLine === 5 ? `i: ${stepData.index}` : ''
      },
      { 
        line: 6, 
        code: '    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {', 
        active: stepData.currentLine === 6, 
        indent: 2,
        values: stepData.currentLine === 6 ? `${stepData.stack.length > 0 && stepData.currentNum > originalArray[stepData.stack[stepData.stack.length - 1]] ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 7, 
        code: '      const index = stack.pop();', 
        active: stepData.currentLine === 7, 
        indent: 3,
        values: stepData.currentLine === 7 && stepData.stack.length > 0 ? `index: ${stepData.stack[stepData.stack.length] || ''}` : ''
      },
      { 
        line: 8, 
        code: '      result[index] = nums[i];', 
        active: stepData.currentLine === 8, 
        indent: 3,
        values: stepData.currentLine === 8 ? `result[${stepData.index - 1}] = ${stepData.currentNum}` : ''
      },
      { 
        line: 9, 
        code: '    }', 
        active: stepData.currentLine === 9, 
        indent: 2,
        values: ''
      },
      { 
        line: 10, 
        code: '', 
        active: stepData.currentLine === 10, 
        indent: 0,
        values: ''
      },
      { 
        line: 11, 
        code: '    stack.push(i);', 
        active: stepData.currentLine === 11, 
        indent: 2,
        values: stepData.currentLine === 11 ? `stack.push(${stepData.index})` : ''
      },
      { 
        line: 12, 
        code: '  }', 
        active: stepData.currentLine === 12, 
        indent: 1,
        values: ''
      },
      { 
        line: 13, 
        code: '', 
        active: stepData.currentLine === 13, 
        indent: 0,
        values: ''
      },
      { 
        line: 14, 
        code: '  return result;', 
        active: stepData.currentLine === 14, 
        indent: 1,
        values: stepData.currentLine === 14 ? `return [${stepData.result.join(', ')}]` : ''
      },
      { 
        line: 15, 
        code: '}', 
        active: stepData.currentLine === 15, 
        indent: 0,
        values: ''
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentResult([...step.result]);
    setCurrentStack([...step.stack]);
    setProcessingIndex(step.processingIndex);
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
    setCurrentResult([-1, -1, -1, -1]);
    setCurrentStack([]);
    setProcessingIndex(-1);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TrendingUp}
        category="DSA · Stacks"
        title="Next Greater Element I"
        description="Find the next greater element for each element in an array using stack-based approach"
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Section 1: What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              What is Next Greater Element?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                For each element in the array, find the first element to its right that is greater than it.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">[4, 5, 2, 25]</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">[5, 25, 25, -1]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Examples */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-6">
              Finding Next Greater Elements Step by Step
            </h4>
            
            {/* Example Breakdown */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500 mb-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">Example: [4, 5, 2, 25]</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded">Step-by-Step</span>
                  </div>
                  <div className="space-y-4">
                    {/* Element 4 */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">4</span>
                        <span className="text-slate-500">→ next greater is</span>
                        <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">5</span>
                        <span className="text-slate-400">(first element to right)</span>
                      </div>
                    </div>
                    
                    {/* Element 5 */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">5</span>
                        <span className="text-slate-500">→ next greater is</span>
                        <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">25</span>
                        <span className="text-slate-400">(skip 2, find 25)</span>
                      </div>
                    </div>
                    
                    {/* Element 2 */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">2</span>
                        <span className="text-slate-500">→ next greater is</span>
                        <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">25</span>
                        <span className="text-slate-400">(immediate next)</span>
                      </div>
                    </div>
                    
                    {/* Element 25 */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-purple-100 dark:bg-purple-900/40 px-2 py-1 rounded">25</span>
                        <span className="text-slate-500">→ no greater element</span>
                        <span className="font-mono bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded">-1</span>
                        <span className="text-slate-400">(end of array)</span>
                      </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="text-purple-600 dark:text-purple-400">4</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-green-600 dark:text-green-400">5</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-purple-600 dark:text-purple-400">5</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-green-600 dark:text-green-400">25</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-purple-600 dark:text-purple-400">2</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-green-600 dark:text-green-400">25</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-purple-600 dark:text-purple-400">25</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-red-600 dark:text-red-400">-1</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
                        Original elements
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-3 mr-1"></span>
                        Next greater
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-3 mr-1"></span>
                        No greater
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Key Insight:</strong> We scan from left to right, using a stack to track elements that haven't found their next greater element yet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Stack Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              How the Stack Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize Data Structures</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                    <div className="font-mono text-sm">result = [-1, -1, -1, -1], stack = []</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Process Each Element</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">For each element:</div>
                    <div className="font-mono text-sm">Check if current {'>'} stack top elements</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Update Results</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">When greater found:</div>
                    <div className="font-mono text-sm">result[stack.pop()] = current element</div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Push Current Index</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Always push:</div>
                    <div className="font-mono text-sm">stack.push(current index)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-purple-200 dark:border-purple-700">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Stack maintains indices in decreasing order of values</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Each element is processed exactly once</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Default value -1 when no greater element exists</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the stack algorithm finds next greater elements</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">next-greater-element.js</span>
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
                      <span className="text-slate-500 dark:text-slate-400">Stack:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">[{currentStack.join(', ')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Result:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">[{currentResult.join(', ')}]</span>
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
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'loop-check' && '✅ Loop Check'}
                      {steps[currentStep].action === 'examine' && '📍 Examining Element'}
                      {steps[currentStep].action === 'push' && '➕ Push to Stack'}
                      {steps[currentStep].action === 'pop' && '➖ Pop from Stack'}
                      {steps[currentStep].action === 'compare' && '🔍 Comparing Values'}
                      {steps[currentStep].action === 'update' && '✅ Updating Result'}
                      {steps[currentStep].action === 'check' && '⏸️ Checking Condition'}
                      {steps[currentStep].action === 'result' && '🎯 Final Result'}
                      {steps[currentStep].action === 'done' && '🎯 Complete'}
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
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Processing:</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      {processingIndex >= 0 ? `index ${processingIndex}` : 'None'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {/* Original Array */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Original Array:</div>
                  <div className="flex items-center justify-center gap-2">
                    {originalArray.map((num, idx) => {
                      const isProcessing = processingIndex === idx;
                      const isHighlighted = steps[currentStep].highlighted.includes(idx);
                      const hasResult = currentResult[idx] !== -1;
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          <div
                            className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 transition-all duration-300 ${
                              isProcessing
                                ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white border-purple-500 scale-105 ring-4 ring-purple-300 shadow-lg'
                                : isHighlighted
                                ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white border-blue-500 scale-105 ring-4 ring-blue-300 shadow-lg'
                                : hasResult
                                ? 'bg-gradient-to-br from-green-100 to-green-200 text-green-800 border-green-400'
                                : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 border-slate-300'
                            }`}
                          >
                            {num}
                          </div>
                          
                          <span className={`text-xs font-mono transition-colors duration-500 ${
                            isProcessing ? 'text-purple-600 dark:text-purple-400 font-bold' : 
                            hasResult ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'
                          }`}>
                            [{idx}]
                          </span>

                          {/* Processing Indicator */}
                          {isProcessing && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                              <div className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/80 px-3 py-1.5 rounded-full border-2 border-purple-500 shadow-lg">
                                Processing
                              </div>
                              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-purple-500"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Result Array */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Result Array:</div>
                  <div className="flex items-center justify-center gap-2">
                    {currentResult.map((result, idx) => {
                      const isUpdated = result !== -1;
                      const isHighlighted = steps[currentStep].highlighted.includes(idx);
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          <div
                            className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 transition-all duration-300 ${
                              isUpdated
                                ? 'bg-gradient-to-br from-green-400 to-green-600 text-white border-green-500'
                                : 'bg-gradient-to-br from-red-100 to-red-200 text-red-800 border-red-400'
                            } ${
                              isHighlighted ? 'scale-105 ring-4 ring-blue-300' : ''
                            }`}
                          >
                            {result}
                          </div>
                          
                          <span className={`text-xs font-mono ${
                            isUpdated ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}>
                            [{idx}]
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Stack Visualization */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700 shadow-lg w-full max-w-md">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-sm font-semibold text-purple-900 dark:text-purple-100">Stack State</h5>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-purple-600 dark:text-purple-400">Size: {currentStack.length}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 min-h-[80px]">
                        {currentStack.length === 0 ? (
                          <div className="text-slate-500 italic text-sm bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
                            Empty Stack
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            {[...currentStack].reverse().map((stackIndex, index) => (
                              <div
                                key={index}
                                className="relative group"
                              >
                                <div
                                  className={`w-14 h-14 bg-gradient-to-br ${
                                    index === 0 
                                      ? 'from-purple-500 to-purple-600 shadow-lg scale-110' 
                                      : 'from-purple-400 to-purple-500'
                                  } text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md transition-all duration-300`}
                                >
                                  {originalArray[stackIndex]}
                                </div>
                                
                                {/* Index indicator */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/80 px-2 py-0.5 rounded">
                                  [{stackIndex}]
                                </div>
                                
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                                  <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg">
                                    Value: {originalArray[stackIndex]}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Stack operations indicator */}
                      {steps[currentStep].action === 'push' && (
                        <div className="mt-4 text-center">
                          <div className="inline-flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/40 px-3 py-1.5 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Push Operation
                          </div>
                        </div>
                      )}
                      
                      {steps[currentStep].action === 'pop' && (
                        <div className="mt-4 text-center">
                          <div className="inline-flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/40 px-3 py-1.5 rounded-full">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Pop Operation
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis Card */}
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
                Each element is pushed and popped from stack at most once.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Stack stores indices in worst case (strictly decreasing array).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    
    stack.push(i);
  }
  
  return result;
}

// Example usage:
console.log(nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.log(nextGreaterElement([1, 3, 2, 4])); // [3, 4, 4, -1]`}
      />
    </div>
  );
}
