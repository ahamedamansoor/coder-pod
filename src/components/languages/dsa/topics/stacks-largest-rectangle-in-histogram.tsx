'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, TrendingUp, BarChart3, Maximize2
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function StacksLargestRectangleInHistogram() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [heights] = useState([2, 1, 5, 6, 2, 3]);
  
  // Algorithm state
  const [stack, setStack] = useState<number[]>([]);
  const [maxArea, setMaxArea] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [poppedHeight, setPoppedHeight] = useState(0);
  const [poppedIndex, setPoppedIndex] = useState(0);
  const [calculatedArea, setCalculatedArea] = useState(0);
  const [result, setResult] = useState(0);

  // Steps array - comprehensive breakdown following COMP_DSA_STRUC guidelines
  const steps = [
    // INITIALIZATION (4 steps)
    {
      step: 1,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 1,
      description: '📋 Initialize: Create empty stack to store indices',
      action: 'init',
      highlighted: []
    },
    {
      step: 2,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 2,
      description: '📋 Initialize: Set maxArea = 0 (track largest rectangle)',
      action: 'init',
      highlighted: []
    },
    {
      step: 3,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 3,
      description: '📋 Initialize: Set i = 0 (start at first bar)',
      action: 'init',
      highlighted: []
    },
    {
      step: 4,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 4,
      description: '📋 Initialize: Set n = 6 (total number of bars)',
      action: 'init',
      highlighted: []
    },

    // PROCESSING BAR 0 - height[0] = 2 (5 steps)
    {
      step: 5,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 5,
      description: '🔄 Loop Start: Processing bar at index 0',
      action: 'loop-start',
      highlighted: [0]
    },
    {
      step: 6,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 6,
      description: '✅ Loop Check: i < n? YES! (0 < 6)',
      action: 'loop-check',
      highlighted: [0]
    },
    {
      step: 7,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 7,
      description: '📍 Access: heights[0] = 2',
      action: 'examine',
      highlighted: [0]
    },
    {
      step: 8,
      stack: [],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? YES! Stack is empty',
      action: 'check',
      highlighted: []
    },
    {
      step: 9,
      stack: [0],
      maxArea: 0,
      currentIndex: 0,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 9,
      description: '➕ Add: Push index 0 to stack',
      action: 'update',
      highlighted: [0]
    },

    // PROCESSING BAR 1 - height[1] = 1 (6 steps)
    {
      step: 10,
      stack: [0],
      maxArea: 0,
      currentIndex: 1,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 5,
      description: '🔄 Loop Start: Processing bar at index 1',
      action: 'loop-start',
      highlighted: [1]
    },
    {
      step: 11,
      stack: [0],
      maxArea: 0,
      currentIndex: 1,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 6,
      description: '✅ Loop Check: i < n? YES! (1 < 6)',
      action: 'loop-check',
      highlighted: [1]
    },
    {
      step: 12,
      stack: [0],
      maxArea: 0,
      currentIndex: 1,
      currentHeight: 1,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 7,
      description: '📍 Access: heights[1] = 1',
      action: 'examine',
      highlighted: [1]
    },
    {
      step: 13,
      stack: [0],
      maxArea: 0,
      currentIndex: 1,
      currentHeight: 1,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? NO! 1 < heights[0](2)',
      action: 'check',
      highlighted: [0, 1]
    },
    {
      step: 14,
      stack: [0],
      maxArea: 0,
      currentIndex: 1,
      currentHeight: 1,
      poppedHeight: 2,
      poppedIndex: 0,
      calculatedArea: 2,
      result: 0,
      currentLine: 10,
      description: '➖ Pop: Pop index 0 (height = 2) from stack',
      action: 'update',
      highlighted: [0, 1]
    },
    {
      step: 15,
      stack: [],
      maxArea: 2,
      currentIndex: 1,
      currentHeight: 1,
      poppedHeight: 2,
      poppedIndex: 0,
      calculatedArea: 2,
      result: 0,
      currentLine: 11,
      description: '📊 Calculate: Area = 2 × 1 = 2, Update maxArea = 2',
      action: 'calculate',
      highlighted: [0, 1]
    },

    // PROCESSING BAR 1 - CONTINUE (3 steps)
    {
      step: 16,
      stack: [],
      maxArea: 2,
      currentIndex: 1,
      currentHeight: 1,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty? YES! Can push current index',
      action: 'check',
      highlighted: [1]
    },
    {
      step: 17,
      stack: [1],
      maxArea: 2,
      currentIndex: 1,
      currentHeight: 1,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 9,
      description: '➕ Add: Push index 1 to stack',
      action: 'update',
      highlighted: [1]
    },

    // PROCESSING BAR 2 - height[2] = 5 (4 steps)
    {
      step: 18,
      stack: [1],
      maxArea: 2,
      currentIndex: 2,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 5,
      description: '🔄 Loop Start: Processing bar at index 2',
      action: 'loop-start',
      highlighted: [2]
    },
    {
      step: 19,
      stack: [1],
      maxArea: 2,
      currentIndex: 2,
      currentHeight: 5,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 7,
      description: '📍 Access: heights[2] = 5',
      action: 'examine',
      highlighted: [2]
    },
    {
      step: 20,
      stack: [1],
      maxArea: 2,
      currentIndex: 2,
      currentHeight: 5,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? YES! 5 >= heights[1](1)',
      action: 'check',
      highlighted: [1, 2]
    },
    {
      step: 21,
      stack: [1, 2],
      maxArea: 2,
      currentIndex: 2,
      currentHeight: 5,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 9,
      description: '➕ Add: Push index 2 to stack',
      action: 'update',
      highlighted: [2]
    },

    // PROCESSING BAR 3 - height[3] = 6 (4 steps)
    {
      step: 22,
      stack: [1, 2],
      maxArea: 2,
      currentIndex: 3,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 5,
      description: '🔄 Loop Start: Processing bar at index 3',
      action: 'loop-start',
      highlighted: [3]
    },
    {
      step: 23,
      stack: [1, 2],
      maxArea: 2,
      currentIndex: 3,
      currentHeight: 6,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 7,
      description: '📍 Access: heights[3] = 6',
      action: 'examine',
      highlighted: [3]
    },
    {
      step: 24,
      stack: [1, 2],
      maxArea: 2,
      currentIndex: 3,
      currentHeight: 6,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? YES! 6 >= heights[2](5)',
      action: 'check',
      highlighted: [2, 3]
    },
    {
      step: 25,
      stack: [1, 2, 3],
      maxArea: 2,
      currentIndex: 3,
      currentHeight: 6,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 9,
      description: '➕ Add: Push index 3 to stack',
      action: 'update',
      highlighted: [3]
    },

    // PROCESSING BAR 4 - height[4] = 2 (8 steps)
    {
      step: 26,
      stack: [1, 2, 3],
      maxArea: 2,
      currentIndex: 4,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 5,
      description: '🔄 Loop Start: Processing bar at index 4',
      action: 'loop-start',
      highlighted: [4]
    },
    {
      step: 27,
      stack: [1, 2, 3],
      maxArea: 2,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 7,
      description: '📍 Access: heights[4] = 2',
      action: 'examine',
      highlighted: [4]
    },
    {
      step: 28,
      stack: [1, 2, 3],
      maxArea: 2,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? NO! 2 < heights[3](6)',
      action: 'check',
      highlighted: [3, 4]
    },
    {
      step: 29,
      stack: [1, 2, 3],
      maxArea: 2,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 6,
      poppedIndex: 3,
      calculatedArea: 6,
      result: 0,
      currentLine: 10,
      description: '➖ Pop: Pop index 3 (height = 6) from stack',
      action: 'update',
      highlighted: [3, 4]
    },
    {
      step: 30,
      stack: [1, 2],
      maxArea: 6,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 6,
      poppedIndex: 3,
      calculatedArea: 6,
      result: 0,
      currentLine: 11,
      description: '📊 Calculate: Area = 6 × 1 = 6, Update maxArea = 6',
      action: 'calculate',
      highlighted: [3, 4]
    },
    {
      step: 31,
      stack: [1, 2],
      maxArea: 6,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? NO! 2 < heights[2](5)',
      action: 'check',
      highlighted: [2, 4]
    },
    {
      step: 32,
      stack: [1, 2],
      maxArea: 6,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 5,
      poppedIndex: 2,
      calculatedArea: 10,
      result: 0,
      currentLine: 10,
      description: '➖ Pop: Pop index 2 (height = 5) from stack',
      action: 'update',
      highlighted: [2, 4]
    },
    {
      step: 33,
      stack: [1],
      maxArea: 10,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 5,
      poppedIndex: 2,
      calculatedArea: 10,
      result: 0,
      currentLine: 11,
      description: '📊 Calculate: Area = 5 × 2 = 10, Update maxArea = 10',
      action: 'calculate',
      highlighted: [2, 4]
    },

    // PROCESSING BAR 4 - CONTINUE (3 steps)
    {
      step: 34,
      stack: [1],
      maxArea: 10,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? YES! 2 >= heights[1](1)',
      action: 'check',
      highlighted: [1, 4]
    },
    {
      step: 35,
      stack: [1, 4],
      maxArea: 10,
      currentIndex: 4,
      currentHeight: 2,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 9,
      description: '➕ Add: Push index 4 to stack',
      action: 'update',
      highlighted: [4]
    },

    // PROCESSING BAR 5 - height[5] = 3 (4 steps)
    {
      step: 36,
      stack: [1, 4],
      maxArea: 10,
      currentIndex: 5,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 5,
      description: '🔄 Loop Start: Processing bar at index 5',
      action: 'loop-start',
      highlighted: [5]
    },
    {
      step: 37,
      stack: [1, 4],
      maxArea: 10,
      currentIndex: 5,
      currentHeight: 3,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 7,
      description: '📍 Access: heights[5] = 3',
      action: 'examine',
      highlighted: [5]
    },
    {
      step: 38,
      stack: [1, 4],
      maxArea: 10,
      currentIndex: 5,
      currentHeight: 3,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 8,
      description: '🔍 Check: Stack empty OR current height >= stack top height? YES! 3 >= heights[4](2)',
      action: 'check',
      highlighted: [4, 5]
    },
    {
      step: 39,
      stack: [1, 4, 5],
      maxArea: 10,
      currentIndex: 5,
      currentHeight: 3,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 9,
      description: '➕ Add: Push index 5 to stack',
      action: 'update',
      highlighted: [5]
    },

    // FINAL PROCESSING - EMPTY STACK (12 steps)
    {
      step: 40,
      stack: [1, 4, 5],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 0,
      currentLine: 13,
      description: '🔄 Loop Complete: i = 6, process remaining stack',
      action: 'loop-complete',
      highlighted: []
    },
    {
      step: 41,
      stack: [1, 4, 5],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 3,
      poppedIndex: 5,
      calculatedArea: 3,
      result: 0,
      currentLine: 15,
      description: '➖ Pop: Pop index 5 (height = 3) from stack',
      action: 'update',
      highlighted: [5]
    },
    {
      step: 42,
      stack: [1, 4],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 3,
      poppedIndex: 5,
      calculatedArea: 3,
      result: 0,
      currentLine: 16,
      description: '📊 Calculate: Area = 3 × 1 = 3, maxArea stays 10',
      action: 'calculate',
      highlighted: [5]
    },
    {
      step: 43,
      stack: [1, 4],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 2,
      poppedIndex: 4,
      calculatedArea: 6,
      result: 0,
      currentLine: 15,
      description: '➖ Pop: Pop index 4 (height = 2) from stack',
      action: 'update',
      highlighted: [4]
    },
    {
      step: 44,
      stack: [1],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 2,
      poppedIndex: 4,
      calculatedArea: 6,
      result: 0,
      currentLine: 16,
      description: '📊 Calculate: Area = 2 × 2 = 4, maxArea stays 10',
      action: 'calculate',
      highlighted: [4]
    },
    {
      step: 45,
      stack: [1],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 1,
      poppedIndex: 1,
      calculatedArea: 6,
      result: 0,
      currentLine: 15,
      description: '➖ Pop: Pop index 1 (height = 1) from stack',
      action: 'update',
      highlighted: [1]
    },
    {
      step: 46,
      stack: [],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 1,
      poppedIndex: 1,
      calculatedArea: 6,
      result: 0,
      currentLine: 16,
      description: '📊 Calculate: Area = 1 × 6 = 6, maxArea stays 10',
      action: 'calculate',
      highlighted: [1]
    },
    {
      step: 47,
      stack: [],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 10,
      currentLine: 17,
      description: '✅ Result: Return maxArea = 10',
      action: 'result',
      highlighted: []
    },
    {
      step: 48,
      stack: [],
      maxArea: 10,
      currentIndex: 6,
      currentHeight: 0,
      poppedHeight: 0,
      poppedIndex: 0,
      calculatedArea: 0,
      result: 10,
      currentLine: 18,
      description: '🎯 Algorithm Complete! Largest rectangle area = 10',
      action: 'done',
      highlighted: []
    }
  ];

  // Helper functions
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { 
        line: 1, 
        code: 'function largestRectangleAreaHistogram(heights) {', 
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
        code: '  let maxArea = 0;', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `maxArea=${stepData.maxArea}` : ''
      },
      { 
        line: 4, 
        code: '  let n = heights.length;', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `n=6` : ''
      },
      { 
        line: 5, 
        code: '  for (let i = 0; i < n; i++) {', 
        active: stepData.currentLine === 5, 
        indent: 1,
        values: stepData.currentLine === 5 ? `i=${stepData.currentIndex}` : ''
      },
      { 
        line: 6, 
        code: '    // Check if current bar is shorter than stack top', 
        active: stepData.currentLine === 6, 
        indent: 2 
      },
      { 
        line: 7, 
        code: '    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {', 
        active: stepData.currentLine === 7, 
        indent: 2,
        values: stepData.currentLine === 7 ? `heights[${stepData.currentIndex}]=${stepData.currentHeight}` : ''
      },
      { 
        line: 8, 
        code: '      let topIndex = stack.pop();', 
        active: stepData.currentLine === 8, 
        indent: 3 
      },
      { 
        line: 9, 
        code: '      let height = heights[topIndex];', 
        active: stepData.currentLine === 9, 
        indent: 3,
        values: stepData.currentLine === 9 ? `height=${stepData.poppedHeight}` : ''
      },
      { 
        line: 10, 
        code: '      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;', 
        active: stepData.currentLine === 10, 
        indent: 3 
      },
      { 
        line: 11, 
        code: '      maxArea = Math.max(maxArea, height * width);', 
        active: stepData.currentLine === 11, 
        indent: 3,
        values: stepData.currentLine === 11 ? `area=${stepData.calculatedArea}, maxArea=${stepData.maxArea}` : ''
      },
      { 
        line: 12, 
        code: '    }', 
        active: stepData.currentLine === 12, 
        indent: 2 
      },
      { 
        line: 13, 
        code: '    stack.push(i);', 
        active: stepData.currentLine === 13, 
        indent: 2,
        values: stepData.currentLine === 13 ? `stack=[${stepData.stack.join(',')}]` : ''
      },
      { 
        line: 14, 
        code: '  }', 
        active: stepData.currentLine === 14, 
        indent: 1 
      },
      { 
        line: 15, 
        code: '  // Process remaining bars in stack', 
        active: stepData.currentLine === 15, 
        indent: 1 
      },
      { 
        line: 16, 
        code: '  while (stack.length > 0) {', 
        active: stepData.currentLine === 16, 
        indent: 1 
      },
      { 
        line: 17, 
        code: '    // Calculate area for remaining bars', 
        active: stepData.currentLine === 17, 
        indent: 2 
      },
      { 
        line: 18, 
        code: '  }', 
        active: stepData.currentLine === 18, 
        indent: 1 
      },
      { 
        line: 19, 
        code: '  return maxArea;', 
        active: stepData.currentLine === 19, 
        indent: 1,
        values: stepData.currentLine === 19 ? `return=${stepData.result}` : ''
      },
      { 
        line: 20, 
        code: '}', 
        active: stepData.currentLine === 20, 
        indent: 0 
      }
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setStack(step.stack);
    setMaxArea(step.maxArea);
    setCurrentIndex(step.currentIndex);
    setCurrentHeight(step.currentHeight);
    setPoppedHeight(step.poppedHeight);
    setPoppedIndex(step.poppedIndex);
    setCalculatedArea(step.calculatedArea);
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
        icon={BarChart3}
        category="DSA · Stacks · Monotonic Stack"
        title="Largest Rectangle in Histogram"
        description="Find the largest rectangular area in a histogram using stack-based approach"
        colorTheme="orange"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Hard', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              What is Largest Rectangle in Histogram?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given an array of bar heights representing a histogram, find the largest rectangular area that can be formed using contiguous bars.
              </p>
              
              {/* Visual Histogram */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">HISTOGRAM EXAMPLE:</div>
                <div className="flex items-end justify-center gap-1 mb-4" style={{ height: '200px' }}>
                  {heights.map((height, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      <div 
                        className="w-12 bg-blue-500 dark:bg-blue-600 border border-blue-600 dark:border-blue-500 rounded-t-sm transition-all duration-500"
                        style={{ height: `${(height / 6) * 160}px` }}
                      >
                        <div className="text-white text-xs font-bold text-center pt-2">
                          {height}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                  Find the largest rectangle using contiguous bars
                </div>
              </div>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg">heights = [2,1,5,6,2,3]</div>
                  <div className="text-xs text-slate-500 mt-1">6 bars with different heights</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">10</div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">Largest rectangle area</div>
                </div>
              </div>

              {/* Visual Solution */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-xs font-semibold text-slate-500 mb-3">OPTIMAL SOLUTION:</div>
                <div className="flex items-end justify-center gap-1 mb-2" style={{ height: '200px' }}>
                  {heights.map((height, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      <div 
                        className={`w-12 border rounded-t-sm ${
                          idx >= 2 && idx <= 3 
                            ? 'bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-500' 
                            : 'bg-slate-300 dark:bg-slate-600 border-slate-400 dark:border-slate-500'
                        }`}
                        style={{ height: `${(height / 6) * 160}px` }}
                      >
                        <div className={`text-xs font-bold text-center pt-2 ${
                          idx >= 2 && idx <= 3 ? 'text-white' : 'text-slate-600 dark:text-slate-300'
                        }`}>
                          {height}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                    Bars 2-3: heights[2,3] = [5,6]
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Width = 2, Min Height = 5 → Area = 5 × 2 = 10
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Approaches
            </h4>
            
            {/* Good Strategy */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Stack Approach (Optimal)</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">O(n) ✓</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Use monotonic stack to efficiently find boundaries for each bar
                  </div>
                  <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                    Stack: [0] → [0,1] → [0,1,2] → [0,1,2,3] → pop → calculate → push...
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
                    <span className="font-semibold text-red-700 dark:text-red-300">Brute Force (Slow)</span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">O(n²) ✗</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Check every possible pair of bars and calculate area
                  </div>
                  <div className="font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                    For each i,j: area = min(heights[i..j]) × (j-i+1)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-50 dark:from-orange-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              How the Stack Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Initialize Stack</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Create empty stack to store indices:</div>
                    <div className="font-mono text-sm">stack = []</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Process Each Bar</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">For each bar, check if it's shorter than stack top:</div>
                    <div className="font-mono text-sm">If current height &lt; stack top height → pop and calculate area</div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Calculate Area</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">When popping, calculate area using width:</div>
                    <div className="font-mono text-sm">width = stack.empty() ? i : i - stack.top() - 1</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2">Process Remaining Stack</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">After processing all bars, empty the stack:</div>
                    <div className="font-mono text-sm">Calculate area for remaining indices with width = n</div>
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
                <span>Monotonic Stack: Maintains increasing heights for efficient boundary finding</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Area Calculation: height × width where width depends on stack boundaries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Time Complexity: Each bar is pushed and popped at most once → O(n)</span>
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
              <Maximize2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the stack algorithm processes each histogram bar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls - Line 1 */}
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
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">largestRectangle.js</span>
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

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">stack:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">[{currentStepData.stack.join(',')}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">maxArea:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{currentStepData.maxArea}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">currentIndex:</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">{currentStepData.currentIndex}</span>
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
                      {currentStepData.action === 'examine' && '📍 Examining Bar'}
                      {currentStepData.action === 'check' && '🔍 Checking Stack'}
                      {currentStepData.action === 'update' && '➕ Updating Stack'}
                      {currentStepData.action === 'calculate' && '📊 Calculating Area'}
                      {currentStepData.action === 'loop-complete' && '🎯 Loop Complete'}
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
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-orange-200 dark:bg-orange-800 border border-orange-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Stack</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-green-200 dark:bg-green-800 border border-green-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Current</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-200 dark:bg-red-800 border border-red-500 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Popped</span>
                  </div>
                </div>
              </div>
              
              {/* Histogram Visualization */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-end justify-center gap-2 mb-4" style={{ height: '200px' }}>
                  {heights.map((height, idx) => {
                    const isCurrent = currentStepData.currentIndex === idx;
                    const isPopped = currentStepData.poppedIndex === idx;
                    const isInStack = currentStepData.stack.includes(idx);
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Bar */}
                        <div
                          className={`w-14 border-2 rounded-t-sm transition-all duration-700 ${
                            isPopped
                              ? 'bg-red-200 dark:bg-red-800 border-red-500 opacity-60'
                              : isCurrent
                              ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-110 ring-4 ring-green-300 animate-pulse'
                              : isInStack
                              ? 'bg-orange-200 dark:bg-orange-800 border-orange-500'
                              : 'bg-slate-200 dark:bg-slate-700 border-slate-400 opacity-60'
                          }`}
                          style={{ height: `${(height / 6) * 160}px` }}
                        >
                          <div className={`text-xs font-bold text-center pt-2 ${
                            isPopped ? 'text-red-700 dark:text-red-300' :
                            isCurrent ? 'text-green-700 dark:text-green-300' :
                            isInStack ? 'text-orange-700 dark:text-orange-300' :
                            'text-slate-600 dark:text-slate-400'
                          }`}>
                            {height}
                          </div>
                        </div>
                        
                        {/* Index */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                        {/* Current Indicator */}
                        {isCurrent && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pb-2">
                            <div className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/80 px-4 py-1 rounded border border-green-500 shadow-md min-w-[100px] text-center">
                              Current: {currentStepData.currentHeight}
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-green-500"></div>
                          </div>
                        )}

                        {/* Popped Indicator */}
                        {isPopped && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pb-2">
                            <div className="text-xs font-bold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/80 px-4 py-1 rounded border border-red-500 shadow-md min-w-[100px] text-center">
                              Popped: {currentStepData.poppedHeight}
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-red-500"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Stack Visualization */}
                <div className="mt-6 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
                  <div className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-2">STACK (indices):</div>
                  <div className="flex items-center justify-center gap-2 min-h-[40px]">
                    {currentStepData.stack.length === 0 ? (
                      <div className="text-orange-600 dark:text-orange-400 italic">Stack is empty</div>
                    ) : (
                      currentStepData.stack.map((idx, stackIdx) => (
                        <div key={idx} className="relative">
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg font-bold bg-orange-200 dark:bg-orange-800 border-2 border-orange-500">
                            {idx}
                          </div>
                          {stackIdx === currentStepData.stack.length - 1 && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                              <div className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/80 px-2 py-1 rounded border border-orange-500">
                                TOP
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Area Calculation */}
                {currentStepData.calculatedArea > 0 && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">AREA CALCULATION:</div>
                    <div className="text-sm font-mono text-green-800 dark:text-green-200">
                      Area = {currentStepData.poppedHeight} × width = {currentStepData.calculatedArea}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Max Area: {currentStepData.maxArea}
                    </div>
                  </div>
                )}
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
                Each histogram bar is pushed to and popped from the stack at most once, giving linear time complexity.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                In the worst case, the stack stores all n indices when heights are in increasing order.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function largestRectangleAreaHistogram(heights) {
  let stack = [];
  let maxArea = 0;
  let n = heights.length;
  
  for (let i = 0; i < n; i++) {
    // Check if current bar is shorter than stack top
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      let height = heights[topIndex];
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  
  // Process remaining bars in stack
  while (stack.length > 0) {
    let topIndex = stack.pop();
    let height = heights[topIndex];
    let width = stack.length === 0 ? n : n - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }
  
  return maxArea;
}

// Example usage:
console.log(largestRectangleAreaHistogram([2,1,5,6,2,3])); // Output: 10
console.log(largestRectangleAreaHistogram([2,4])); // Output: 4`}
      />
    </div>
  );
}
