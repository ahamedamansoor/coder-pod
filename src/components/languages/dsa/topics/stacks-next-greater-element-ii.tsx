'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, ArrowRight, TrendingUp, Layers, RefreshCw
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
  action: 'init' | 'loop-start' | 'loop-check' | 'examine' | 'push' | 'pop' | 'calculate' | 'compare' | 'update' | 'found' | 'result' | 'done' | 'circular-check' | 'check';
  highlighted: number[];
  processingIndex: number;
  isCircular: boolean;
}

export default function StacksNextGreaterElementII() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  
  // Problem-specific data
  const originalArray = [1, 2, 1];
  const [currentArray, setCurrentArray] = useState([...originalArray]);
  const [currentResult, setCurrentResult] = useState([-1, -1, -1]);
  const [currentStack, setCurrentStack] = useState<number[]>([]);
  const [processingIndex, setProcessingIndex] = useState(-1);
  const [isCircular, setIsCircular] = useState(false);
  
  // Detailed steps following COMP_DSA_STRUC guidelines (minimum 35-45 for circular complexity)
  const steps: Step[] = [
    // INITIALIZATION (4 steps)
    { 
      step: 1, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 1, 
      description: '📋 Initialize: Create input array [1, 2, 1] for circular processing',
      action: 'init',
      highlighted: [],
      processingIndex: -1,
      isCircular: false
    },
    { 
      step: 2, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 2, 
      description: '📋 Initialize: Create result array [-1, -1, -1] with default values',
      action: 'init',
      highlighted: [],
      processingIndex: -1,
      isCircular: false
    },
    { 
      step: 3, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 3, 
      description: '📋 Initialize: Create empty stack to track indices',
      action: 'init',
      highlighted: [],
      processingIndex: -1,
      isCircular: false
    },
    { 
      step: 4, 
      index: -1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: -1, 
      stack: [], 
      currentLine: 4, 
      description: '🔄 Circular Setup: Process array twice to handle circular nature',
      action: 'init',
      highlighted: [],
      processingIndex: -1,
      isCircular: false
    },
    
    // FIRST PASS: Regular iteration (indices 0, 1, 2)
    // ITERATION 1: Process index 0 (value 1)
    { 
      step: 5, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 1, 
      stack: [], 
      currentLine: 6, 
      description: '🔄 Pass 1: Processing index 0, nums[0] = 1',
      action: 'loop-start',
      highlighted: [0],
      processingIndex: 0,
      isCircular: false
    },
    { 
      step: 6, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 1, 
      stack: [], 
      currentLine: 7, 
      description: '✅ Loop Check: i < nums.length? 0 < 3? YES! Continue processing',
      action: 'loop-check',
      highlighted: [0],
      processingIndex: 0,
      isCircular: false
    },
    { 
      step: 7, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 1, 
      stack: [], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack empty? YES! No elements to compare',
      action: 'check',
      highlighted: [0],
      processingIndex: 0,
      isCircular: false
    },
    { 
      step: 8, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 1, 
      stack: [], 
      currentLine: 9, 
      description: '➕ Push: Add index 0 to stack (tracking value 1)',
      action: 'push',
      highlighted: [0],
      processingIndex: 0,
      isCircular: false
    },
    { 
      step: 9, 
      index: 0, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 1, 
      stack: [0], 
      currentLine: 9, 
      description: '✅ Update: Stack now contains [0] (indices of values to find greater elements for)',
      action: 'update',
      highlighted: [0],
      processingIndex: 0,
      isCircular: false
    },
    
    // ITERATION 2: Process index 1 (value 2)
    { 
      step: 10, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 2, 
      stack: [0], 
      currentLine: 6, 
      description: '🔄 Pass 1: Processing index 1, nums[1] = 2',
      action: 'loop-start',
      highlighted: [1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 11, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 2, 
      stack: [0], 
      currentLine: 7, 
      description: '✅ Loop Check: i < nums.length? 1 < 3? YES! Continue processing',
      action: 'loop-check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 12, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 2, 
      stack: [0], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [0]',
      action: 'check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 13, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 2, 
      stack: [0], 
      currentLine: 8, 
      description: '👉 Examine: Stack top = 0, nums[0] = 1',
      action: 'examine',
      highlighted: [0, 1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 14, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 2, 
      stack: [0], 
      currentLine: 8, 
      description: '🔍 Compare: nums[1] (2) > nums[0] (1)? YES! 2 is greater',
      action: 'compare',
      highlighted: [0, 1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 15, 
      index: 1, 
      nums: originalArray, 
      result: [-1, -1, -1], 
      currentNum: 2, 
      stack: [0], 
      currentLine: 9, 
      description: '🔄 Pop: Remove index 0 from stack (found greater element)',
      action: 'pop',
      highlighted: [0, 1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 16, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [], 
      currentLine: 10, 
      description: '✅ Update: Set result[0] = 2 (next greater for nums[0])',
      action: 'update',
      highlighted: [0, 1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 17, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack empty? YES! No more elements to compare',
      action: 'check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 18, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [], 
      currentLine: 13, 
      description: '➕ Push: Add index 1 to stack (tracking value 2)',
      action: 'push',
      highlighted: [1],
      processingIndex: 1,
      isCircular: false
    },
    { 
      step: 19, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 13, 
      description: '✅ Update: Stack now contains [1]',
      action: 'update',
      highlighted: [1],
      processingIndex: 1,
      isCircular: false
    },
    
    // ITERATION 3: Process index 2 (value 1)
    { 
      step: 20, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 6, 
      description: '🔄 Pass 1: Processing index 2, nums[2] = 1',
      action: 'loop-start',
      highlighted: [2],
      processingIndex: 2,
      isCircular: false
    },
    { 
      step: 21, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 7, 
      description: '✅ Loop Check: i < nums.length? 2 < 3? YES! Continue processing',
      action: 'loop-check',
      highlighted: [2],
      processingIndex: 2,
      isCircular: false
    },
    { 
      step: 22, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1]',
      action: 'check',
      highlighted: [2],
      processingIndex: 2,
      isCircular: false
    },
    { 
      step: 23, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 8, 
      description: '👉 Examine: Stack top = 1, nums[1] = 2',
      action: 'examine',
      highlighted: [1, 2],
      processingIndex: 2,
      isCircular: false
    },
    { 
      step: 24, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 8, 
      description: '🔍 Compare: nums[2] (1) > nums[1] (2)? NO! 1 is not greater',
      action: 'compare',
      highlighted: [1, 2],
      processingIndex: 2,
      isCircular: false
    },
    { 
      step: 25, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 13, 
      description: '➕ Push: Add index 2 to stack (1 is not greater than 2)',
      action: 'push',
      highlighted: [2],
      processingIndex: 2,
      isCircular: false
    },
    { 
      step: 26, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 13, 
      description: '✅ Update: Stack now contains [1, 2]',
      action: 'update',
      highlighted: [2],
      processingIndex: 2,
      isCircular: false
    },
    
    // SECOND PASS: Circular iteration (indices 0, 1, 2 again)
    // ITERATION 4: Process index 0 again (value 1) - CIRCULAR
    { 
      step: 27, 
      index: 0, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 6, 
      description: '🔄 Pass 2 (Circular): Processing index 0 again, nums[0] = 1',
      action: 'loop-start',
      highlighted: [0],
      processingIndex: 0,
      isCircular: true
    },
    { 
      step: 28, 
      index: 0, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 7, 
      description: '✅ Circular Check: i < nums.length * 2? 3 < 6? YES! Continue circular processing',
      action: 'circular-check',
      highlighted: [0],
      processingIndex: 0,
      isCircular: true
    },
    { 
      step: 29, 
      index: 0, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1, 2]',
      action: 'check',
      highlighted: [0],
      processingIndex: 0,
      isCircular: true
    },
    { 
      step: 30, 
      index: 0, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '👉 Examine: Stack top = 2, nums[2] = 1',
      action: 'examine',
      highlighted: [0, 2],
      processingIndex: 0,
      isCircular: true
    },
    { 
      step: 31, 
      index: 0, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '🔍 Compare: nums[0] (1) > nums[2] (1)? NO! Equal values',
      action: 'compare',
      highlighted: [0, 2],
      processingIndex: 0,
      isCircular: true
    },
    { 
      step: 32, 
      index: 0, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 1, 
      stack: [1, 2], 
      currentLine: 13, 
      description: '➕ Skip Push: Index 0 already in stack, skip (avoid duplicates)',
      action: 'check',
      highlighted: [0],
      processingIndex: 0,
      isCircular: true
    },
    
    // ITERATION 5: Process index 1 again (value 2) - CIRCULAR
    { 
      step: 33, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 6, 
      description: '🔄 Pass 2 (Circular): Processing index 1 again, nums[1] = 2',
      action: 'loop-start',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 34, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 7, 
      description: '✅ Circular Check: i < nums.length * 2? 4 < 6? YES! Continue circular processing',
      action: 'circular-check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 35, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1, 2]',
      action: 'check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 36, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '👉 Examine: Stack top = 2, nums[2] = 1',
      action: 'examine',
      highlighted: [1, 2],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 37, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 8, 
      description: '🔍 Compare: nums[1] (2) > nums[2] (1)? YES! 2 is greater',
      action: 'compare',
      highlighted: [1, 2],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 38, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, -1], 
      currentNum: 2, 
      stack: [1, 2], 
      currentLine: 9, 
      description: '🔄 Pop: Remove index 2 from stack (found greater element)',
      action: 'pop',
      highlighted: [1, 2],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 39, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 10, 
      description: '✅ Update: Set result[2] = 2 (next greater for nums[2] via circular)',
      action: 'update',
      highlighted: [1, 2],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 40, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1]',
      action: 'check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 41, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 8, 
      description: '👉 Examine: Stack top = 1, nums[1] = 2 (same index)',
      action: 'examine',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 42, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 8, 
      description: '🔍 Compare: nums[1] (2) > nums[1] (2)? NO! Same index, skip',
      action: 'compare',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    { 
      step: 43, 
      index: 1, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 2, 
      stack: [1], 
      currentLine: 13, 
      description: '➕ Skip Push: Index 1 already in stack, skip (avoid duplicates)',
      action: 'check',
      highlighted: [1],
      processingIndex: 1,
      isCircular: true
    },
    
    // ITERATION 6: Process index 2 again (value 1) - CIRCULAR
    { 
      step: 44, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 6, 
      description: '🔄 Pass 2 (Circular): Processing index 2 again, nums[2] = 1',
      action: 'loop-start',
      highlighted: [2],
      processingIndex: 2,
      isCircular: true
    },
    { 
      step: 45, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 7, 
      description: '✅ Circular Check: i < nums.length * 2? 5 < 6? YES! Continue circular processing',
      action: 'circular-check',
      highlighted: [2],
      processingIndex: 2,
      isCircular: true
    },
    { 
      step: 46, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 8, 
      description: '🔍 Check Stack: Is stack not empty? YES! Stack has [1]',
      action: 'check',
      highlighted: [2],
      processingIndex: 2,
      isCircular: true
    },
    { 
      step: 47, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 8, 
      description: '👉 Examine: Stack top = 1, nums[1] = 2',
      action: 'examine',
      highlighted: [1, 2],
      processingIndex: 2,
      isCircular: true
    },
    { 
      step: 48, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 8, 
      description: '🔍 Compare: nums[2] (1) > nums[1] (2)? NO! 1 is not greater',
      action: 'compare',
      highlighted: [1, 2],
      processingIndex: 2,
      isCircular: true
    },
    { 
      step: 49, 
      index: 2, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: 1, 
      stack: [1], 
      currentLine: 13, 
      description: '➕ Skip Push: Index 2 already in stack, skip (avoid duplicates)',
      action: 'check',
      highlighted: [2],
      processingIndex: 2,
      isCircular: true
    },
    
    // COMPLETION (4 steps)
    { 
      step: 50, 
      index: 6, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: -1, 
      stack: [1], 
      currentLine: 6, 
      description: '🎯 Loop Complete: i >= nums.length * 2? YES! 6 >= 6',
      action: 'done',
      highlighted: [],
      processingIndex: -1,
      isCircular: true
    },
    { 
      step: 51, 
      index: 6, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: -1, 
      stack: [1], 
      currentLine: 15, 
      description: '✅ Result: Final result array = [2, -1, 2]',
      action: 'result',
      highlighted: [],
      processingIndex: -1,
      isCircular: true
    },
    { 
      step: 52, 
      index: 6, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: -1, 
      stack: [1], 
      currentLine: 15, 
      description: '🎯 Algorithm complete! Found next greater elements using circular stack',
      action: 'done',
      highlighted: [],
      processingIndex: -1,
      isCircular: true
    },
    { 
      step: 53, 
      index: 6, 
      nums: originalArray, 
      result: [2, -1, 2], 
      currentNum: -1, 
      stack: [1], 
      currentLine: 15, 
      description: '💡 Key Insight: Circular arrays require 2 passes to find elements that wrap around',
      action: 'done',
      highlighted: [],
      processingIndex: -1,
      isCircular: true
    }
  ];

  const getCodeWithValues = (stepData: Step) => {
    return [
      { 
        line: 1, 
        code: 'function nextGreaterElements(nums) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  const n = nums.length;', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `n: ${originalArray.length}` : ''
      },
      { 
        line: 3, 
        code: '  const result = new Array(n).fill(-1);', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `result: [${stepData.result.join(', ')}]` : ''
      },
      { 
        line: 4, 
        code: '  const stack = [];', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `stack: [${stepData.stack.join(', ')}]` : ''
      },
      { 
        line: 5, 
        code: '', 
        active: stepData.currentLine === 5, 
        indent: 0,
        values: ''
      },
      { 
        line: 6, 
        code: '  for (let i = 0; i < n * 2; i++) {', 
        active: stepData.currentLine === 6, 
        indent: 1,
        values: stepData.currentLine === 6 ? `i: ${stepData.index}, n*2: ${originalArray.length * 2}` : ''
      },
      { 
        line: 7, 
        code: '    while (stack.length > 0 && nums[i % n] > nums[stack[stack.length - 1]]) {', 
        active: stepData.currentLine === 7, 
        indent: 2,
        values: stepData.currentLine === 7 ? `${stepData.stack.length > 0 && stepData.currentNum > originalArray[stepData.stack[stepData.stack.length - 1]] ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 8, 
        code: '      const index = stack.pop();', 
        active: stepData.currentLine === 8, 
        indent: 3,
        values: stepData.currentLine === 8 && stepData.stack.length > 0 ? `index: ${stepData.stack[stepData.stack.length] || ''}` : ''
      },
      { 
        line: 9, 
        code: '      result[index] = nums[i % n];', 
        active: stepData.currentLine === 9, 
        indent: 3,
        values: stepData.currentLine === 9 ? `result[${stepData.index - 1}] = ${stepData.currentNum}` : ''
      },
      { 
        line: 10, 
        code: '    }', 
        active: stepData.currentLine === 10, 
        indent: 2,
        values: ''
      },
      { 
        line: 11, 
        code: '', 
        active: stepData.currentLine === 11, 
        indent: 0,
        values: ''
      },
      { 
        line: 12, 
        code: '    if (i < n) {', 
        active: stepData.currentLine === 12, 
        indent: 2,
        values: stepData.currentLine === 12 ? `${stepData.index < originalArray.length ? 'YES' : 'NO'}` : ''
      },
      { 
        line: 13, 
        code: '      stack.push(i);', 
        active: stepData.currentLine === 13, 
        indent: 3,
        values: stepData.currentLine === 13 && stepData.index < originalArray.length ? `stack.push(${stepData.index})` : ''
      },
      { 
        line: 14, 
        code: '    }', 
        active: stepData.currentLine === 14, 
        indent: 2,
        values: ''
      },
      { 
        line: 15, 
        code: '  }', 
        active: stepData.currentLine === 15, 
        indent: 1,
        values: ''
      },
      { 
        line: 16, 
        code: '', 
        active: stepData.currentLine === 16, 
        indent: 0,
        values: ''
      },
      { 
        line: 17, 
        code: '  return result;', 
        active: stepData.currentLine === 17, 
        indent: 1,
        values: stepData.currentLine === 17 ? `return [${stepData.result.join(', ')}]` : ''
      },
      { 
        line: 18, 
        code: '}', 
        active: stepData.currentLine === 18, 
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
    setIsCircular(step.isCircular);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 3000,
      normal: 2000,
      fast: 1200
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
    setCurrentResult([-1, -1, -1]);
    setCurrentStack([]);
    setProcessingIndex(-1);
    setIsCircular(false);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={RefreshCw}
        category="DSA · Stacks"
        title="Next Greater Element II"
        description="Find the next greater element in a circular array using stack-based approach"
        colorTheme="orange"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Medium', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement Card */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Understanding Circular Next Greater Element
          </CardTitle>
          <CardDescription>Learn how to handle circular arrays when finding next greater elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Section 1: What makes it circular? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              What Makes It Circular?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                In a circular array, the search wraps around to the beginning when reaching the end.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">[1, 2, 1]</div>
                  <div className="text-xs text-slate-500 mt-1">Circular: [1, 2, 1, 1, 2, 1]</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">[2, -1, 2]</div>
                  <div className="text-xs text-green-600 mt-1">Last element wraps to first!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Examples */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6">
              Circular Search Explained Step by Step
            </h4>
            
            {/* Example Breakdown */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500 mb-6">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-orange-700 dark:text-orange-300">Example: [1, 2, 1]</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Circular</span>
                  </div>
                  <div className="space-y-4">
                    {/* Element 1 */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">1</span>
                        <span className="text-slate-500">→ next greater is</span>
                        <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">2</span>
                        <span className="text-slate-400">(immediate next)</span>
                      </div>
                    </div>
                    
                    {/* Element 2 */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">2</span>
                        <span className="text-slate-500">→ no greater element</span>
                        <span className="font-mono bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded">-1</span>
                        <span className="text-slate-400">(max in array)</span>
                      </div>
                    </div>
                    
                    {/* Element 1 (last) */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">1</span>
                        <span className="text-slate-500">→ wraps around to find</span>
                        <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">2</span>
                        <span className="text-slate-400">(circular search!)</span>
                      </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                      <div className="font-mono text-sm text-center mb-2">
                        <span className="text-orange-600 dark:text-orange-400">1</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-green-600 dark:text-green-400">2</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-orange-600 dark:text-orange-400">2</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-red-600 dark:text-red-400">-1</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-orange-600 dark:text-orange-400">1</span>
                        <span className="text-slate-400">↻</span>
                        <span className="text-green-600 dark:text-green-400">2</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                        Original elements
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-3 mr-1"></span>
                        Next greater
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-3 mr-1"></span>
                        No greater
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-3 mr-1"></span>
                        Circular wrap
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Key Insight:</strong> Process array twice (2n iterations) to handle the circular nature. Only push indices in first pass.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Circular Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Circular Stack Algorithm
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize for Circular Processing</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                    <div className="font-mono text-sm">result = [-1, -1, -1], stack = []</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Process Array Twice</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Loop:</div>
                    <div className="font-mono text-sm">for (let i = 0; i {'<'} n * 2; i++)</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Use Modulo for Circular Access</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Access:</div>
                    <div className="font-mono text-sm">nums[i % n] // wraps around</div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Push Only in First Pass</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Condition:</div>
                    <div className="font-mono text-sm">if (i {'<'} n) stack.push(i)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Circular Array Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Process array twice (2n iterations) for circular search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Use modulo operator (i % n) for circular indexing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Only push indices in first pass to avoid duplicates</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization Card */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the circular stack algorithm finds next greater elements</CardDescription>
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">next-greater-element-circular.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {isCircular ? 'Circular Mode' : 'Normal Mode'}
                  </span>
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
                      <span className="text-slate-500 dark:text-slate-400">Stack:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">[{currentStack.join(', ')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Result:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">[{currentResult.join(', ')}]</span>
                    </div>
                    {isCircular && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Mode:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">Circular</span>
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
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'loop-check' && '✅ Loop Check'}
                      {steps[currentStep].action === 'circular-check' && '🔄 Circular Check'}
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
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Processing:</span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">
                      {processingIndex >= 0 ? `index ${processingIndex}` : 'None'}
                    </span>
                  </div>
                  {isCircular && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Mode:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Circular</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {/* Original Array */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    Original Array {isCircular && '(Circular View)'}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {originalArray.map((num, idx) => {
                      const isProcessing = processingIndex === idx;
                      const isHighlighted = steps[currentStep].highlighted.includes(idx);
                      const hasResult = currentResult[idx] !== -1;
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          <div
                            className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 transition-all duration-300 ${
                              isProcessing
                                ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white border-orange-500 scale-105 ring-4 ring-orange-300 shadow-lg'
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
                            isProcessing ? 'text-orange-600 dark:text-orange-400 font-bold' : 
                            hasResult ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'
                          }`}>
                            [{idx}]
                          </span>

                          {/* Processing Indicator */}
                          {isProcessing && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                              <div className="text-xs font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/80 px-3 py-1.5 rounded-full border-2 border-orange-500 shadow-lg">
                                {isCircular ? 'Circular' : 'Processing'}
                              </div>
                              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-orange-500"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Circular Visualization */}
                  {isCircular && (
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        <span>Array repeats: [1, 2, 1, 1, 2, 1]</span>
                      </div>
                    </div>
                  )}
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
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700 shadow-lg w-full max-w-md">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-sm font-semibold text-orange-900 dark:text-orange-100">Stack State</h5>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-orange-600 dark:text-orange-400">Size: {currentStack.length}</span>
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
                                      ? 'from-orange-500 to-orange-600 shadow-lg scale-110' 
                                      : 'from-orange-400 to-orange-500'
                                  } text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md transition-all duration-300`}
                                >
                                  {originalArray[stackIndex]}
                                </div>
                                
                                {/* Index indicator */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/80 px-2 py-0.5 rounded">
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
                          <div className="inline-flex items-center gap-2 text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/40 px-3 py-1.5 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Push Operation
                          </div>
                        </div>
                      )}
                      
                      {steps[currentStep].action === 'pop' && (
                        <div className="mt-4 text-center">
                          <div className="inline-flex items-center gap-2 text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/40 px-3 py-1.5 rounded-full">
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
                Each element is pushed and popped at most once, even with 2n iterations.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Stack stores at most n indices in worst case scenario.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  
  // Process array twice for circular search
  for (let i = 0; i < n * 2; i++) {
    // Use modulo for circular indexing
    const currentNum = nums[i % n];
    
    // Find next greater elements
    while (stack.length > 0 && currentNum > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = currentNum;
    }
    
    // Only push indices in first pass
    if (i < n) {
      stack.push(i);
    }
  }
  
  return result;
}

// Example usage:
console.log(nextGreaterElements([1, 2, 1]));     // [2, -1, 2]
console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2, 3, 4, -1, 4]
console.log(nextGreaterElements([2, 1, 2, 5, 3])); // [5, 2, 5, -1, 5]`}
      />
    </div>
  );
}
