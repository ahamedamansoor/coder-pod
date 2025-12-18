'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, TrendingUp, ArrowRight, BarChart3 } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MaximumSubarrayKadane() {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const n = nums.length;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    // === INITIALIZATION (Steps 1-2) ===
    {
      step: 1,
      index: -1,
      currentSum: Number.NEGATIVE_INFINITY,
      maxSum: Number.NEGATIVE_INFINITY,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 0,
      currentLine: 2,
      description: '📋 Initialize: Set maxSum = -∞ (negative infinity) to handle all negative arrays',
      action: 'init',
      highlighted: [],
      isMaxUpdate: false
    },
    {
      step: 2,
      index: -1,
      currentSum: 0,
      maxSum: Number.NEGATIVE_INFINITY,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 0,
      currentLine: 3,
      description: '📋 Initialize: Set currentSum = 0 to start tracking subarray sum',
      action: 'init',
      highlighted: [],
      isMaxUpdate: false
    },

    // === INDEX 0: -2 ===
    {
      step: 3,
      index: 0,
      currentSum: 0,
      maxSum: Number.NEGATIVE_INFINITY,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 0,
      currentLine: 5,
      description: '🔄 Loop i=0: Examining nums[0] = -2',
      action: 'loop-start',
      highlighted: [0],
      isMaxUpdate: false
    },
    {
      step: 4,
      index: 0,
      currentSum: -2,
      maxSum: Number.NEGATIVE_INFINITY,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 0,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(-2, 0 + (-2)) = max(-2, -2) = -2',
      action: 'calculate',
      highlighted: [0],
      isMaxUpdate: false
    },
    {
      step: 5,
      index: 0,
      currentSum: -2,
      maxSum: -2,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 0,
      currentLine: 10,
      description: '✅ Update maxSum: maxSum = max(-∞, -2) = -2. New maximum found!',
      action: 'update-max',
      highlighted: [0],
      isMaxUpdate: true
    },

    // === INDEX 1: 1 ===
    {
      step: 6,
      index: 1,
      currentSum: -2,
      maxSum: -2,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 1,
      currentLine: 5,
      description: '🔄 Loop i=1: Examining nums[1] = 1',
      action: 'loop-start',
      highlighted: [1],
      isMaxUpdate: false
    },
    {
      step: 7,
      index: 1,
      currentSum: 1,
      maxSum: -2,
      subarrayStart: 0,
      subarrayEnd: 0,
      tempStart: 1,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(1, -2 + 1) = max(1, -1) = 1. Start new subarray!',
      action: 'calculate',
      highlighted: [1],
      isMaxUpdate: false
    },
    {
      step: 8,
      index: 1,
      currentSum: 1,
      maxSum: 1,
      subarrayStart: 1,
      subarrayEnd: 1,
      tempStart: 1,
      currentLine: 10,
      description: '✅ Update maxSum: maxSum = max(-2, 1) = 1. New maximum found!',
      action: 'update-max',
      highlighted: [1],
      isMaxUpdate: true
    },

    // === INDEX 2: -3 ===
    {
      step: 9,
      index: 2,
      currentSum: 1,
      maxSum: 1,
      subarrayStart: 1,
      subarrayEnd: 1,
      tempStart: 1,
      currentLine: 5,
      description: '🔄 Loop i=2: Examining nums[2] = -3',
      action: 'loop-start',
      highlighted: [2],
      isMaxUpdate: false
    },
    {
      step: 10,
      index: 2,
      currentSum: -2,
      maxSum: 1,
      subarrayStart: 1,
      subarrayEnd: 1,
      tempStart: 1,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(-3, 1 + (-3)) = max(-3, -2) = -2. Continue current subarray',
      action: 'calculate',
      highlighted: [1, 2],
      isMaxUpdate: false
    },
    {
      step: 11,
      index: 2,
      currentSum: -2,
      maxSum: 1,
      subarrayStart: 1,
      subarrayEnd: 1,
      tempStart: 1,
      currentLine: 10,
      description: '❌ Check maxSum: max(1, -2) = 1. No update needed.',
      action: 'check',
      highlighted: [1, 2],
      isMaxUpdate: false
    },

    // === INDEX 3: 4 ===
    {
      step: 12,
      index: 3,
      currentSum: -2,
      maxSum: 1,
      subarrayStart: 1,
      subarrayEnd: 1,
      tempStart: 3,
      currentLine: 5,
      description: '🔄 Loop i=3: Examining nums[3] = 4',
      action: 'loop-start',
      highlighted: [3],
      isMaxUpdate: false
    },
    {
      step: 13,
      index: 3,
      currentSum: 4,
      maxSum: 1,
      subarrayStart: 1,
      subarrayEnd: 1,
      tempStart: 3,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(4, -2 + 4) = max(4, 2) = 4. Start new subarray!',
      action: 'calculate',
      highlighted: [3],
      isMaxUpdate: false
    },
    {
      step: 14,
      index: 3,
      currentSum: 4,
      maxSum: 4,
      subarrayStart: 3,
      subarrayEnd: 3,
      tempStart: 3,
      currentLine: 10,
      description: '✅ Update maxSum: maxSum = max(1, 4) = 4. New maximum found!',
      action: 'update-max',
      highlighted: [3],
      isMaxUpdate: true
    },

    // === INDEX 4: -1 ===
    {
      step: 15,
      index: 4,
      currentSum: 4,
      maxSum: 4,
      subarrayStart: 3,
      subarrayEnd: 3,
      tempStart: 3,
      currentLine: 5,
      description: '🔄 Loop i=4: Examining nums[4] = -1',
      action: 'loop-start',
      highlighted: [4],
      isMaxUpdate: false
    },
    {
      step: 16,
      index: 4,
      currentSum: 3,
      maxSum: 4,
      subarrayStart: 3,
      subarrayEnd: 3,
      tempStart: 3,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(-1, 4 + (-1)) = max(-1, 3) = 3. Continue current subarray',
      action: 'calculate',
      highlighted: [3, 4],
      isMaxUpdate: false
    },
    {
      step: 17,
      index: 4,
      currentSum: 3,
      maxSum: 4,
      subarrayStart: 3,
      subarrayEnd: 3,
      tempStart: 3,
      currentLine: 10,
      description: '❌ Check maxSum: max(4, 3) = 4. No update needed.',
      action: 'check',
      highlighted: [3, 4],
      isMaxUpdate: false
    },

    // === INDEX 5: 2 ===
    {
      step: 18,
      index: 5,
      currentSum: 3,
      maxSum: 4,
      subarrayStart: 3,
      subarrayEnd: 3,
      tempStart: 3,
      currentLine: 5,
      description: '🔄 Loop i=5: Examining nums[5] = 2',
      action: 'loop-start',
      highlighted: [5],
      isMaxUpdate: false
    },
    {
      step: 19,
      index: 5,
      currentSum: 5,
      maxSum: 4,
      subarrayStart: 3,
      subarrayEnd: 3,
      tempStart: 3,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(2, 3 + 2) = max(2, 5) = 5. Continue current subarray',
      action: 'calculate',
      highlighted: [3, 4, 5],
      isMaxUpdate: false
    },
    {
      step: 20,
      index: 5,
      currentSum: 5,
      maxSum: 5,
      subarrayStart: 3,
      subarrayEnd: 5,
      tempStart: 3,
      currentLine: 10,
      description: '✅ Update maxSum: maxSum = max(4, 5) = 5. New maximum found!',
      action: 'update-max',
      highlighted: [3, 4, 5],
      isMaxUpdate: true
    },

    // === INDEX 6: 1 ===
    {
      step: 21,
      index: 6,
      currentSum: 5,
      maxSum: 5,
      subarrayStart: 3,
      subarrayEnd: 5,
      tempStart: 3,
      currentLine: 5,
      description: '🔄 Loop i=6: Examining nums[6] = 1',
      action: 'loop-start',
      highlighted: [6],
      isMaxUpdate: false
    },
    {
      step: 22,
      index: 6,
      currentSum: 6,
      maxSum: 5,
      subarrayStart: 3,
      subarrayEnd: 5,
      tempStart: 3,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(1, 5 + 1) = max(1, 6) = 6. Continue current subarray',
      action: 'calculate',
      highlighted: [3, 4, 5, 6],
      isMaxUpdate: false
    },
    {
      step: 23,
      index: 6,
      currentSum: 6,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 10,
      description: '✅ Update maxSum: maxSum = max(5, 6) = 6. New maximum found!',
      action: 'update-max',
      highlighted: [3, 4, 5, 6],
      isMaxUpdate: true
    },

    // === INDEX 7: -5 ===
    {
      step: 24,
      index: 7,
      currentSum: 6,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 5,
      description: '🔄 Loop i=7: Examining nums[7] = -5',
      action: 'loop-start',
      highlighted: [7],
      isMaxUpdate: false
    },
    {
      step: 25,
      index: 7,
      currentSum: 1,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(-5, 6 + (-5)) = max(-5, 1) = 1. Continue current subarray',
      action: 'calculate',
      highlighted: [3, 4, 5, 6, 7],
      isMaxUpdate: false
    },
    {
      step: 26,
      index: 7,
      currentSum: 1,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 10,
      description: '❌ Check maxSum: max(6, 1) = 6. No update needed.',
      action: 'check',
      highlighted: [3, 4, 5, 6, 7],
      isMaxUpdate: false
    },

    // === INDEX 8: 4 ===
    {
      step: 27,
      index: 8,
      currentSum: 1,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 5,
      description: '🔄 Loop i=8: Examining nums[8] = 4 (last element)',
      action: 'loop-start',
      highlighted: [8],
      isMaxUpdate: false
    },
    {
      step: 28,
      index: 8,
      currentSum: 5,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 6,
      description: '➕ Update currentSum: currentSum = max(4, 1 + 4) = max(4, 5) = 5. Continue current subarray',
      action: 'calculate',
      highlighted: [3, 4, 5, 6, 7, 8],
      isMaxUpdate: false
    },
    {
      step: 29,
      index: 8,
      currentSum: 5,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 10,
      description: '❌ Check maxSum: max(6, 5) = 6. No update needed.',
      action: 'check',
      highlighted: [3, 4, 5, 6, 7, 8],
      isMaxUpdate: false
    },

    // === RESULT ===
    {
      step: 30,
      index: -1,
      currentSum: 5,
      maxSum: 6,
      subarrayStart: 3,
      subarrayEnd: 6,
      tempStart: 3,
      currentLine: 14,
      description: '🎯 Return maxSum = 6. The maximum subarray is [4, -1, 2, 1] with sum 6!',
      action: 'result',
      highlighted: [3, 4, 5, 6],
      isMaxUpdate: false
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const maxSumDisplay = stepData.maxSum === Number.NEGATIVE_INFINITY ? '-∞' : stepData.maxSum;
    const currentSumDisplay = stepData.currentSum === Number.NEGATIVE_INFINITY ? '-∞' : stepData.currentSum;
    const showLoopVars = stepData.index >= 0;
    
    return [
      { line: 1, code: 'function maxSubArray(nums) {', active: false, indent: 0, values: '' },
      { line: 2, code: '  let maxSum = -Infinity;', active: stepData.currentLine === 2, indent: 1, values: `maxSum=${maxSumDisplay}` },
      { line: 3, code: '  let currentSum = 0;', active: stepData.currentLine === 3, indent: 1, values: `currentSum=${currentSumDisplay}` },
      { line: 4, code: '  ', active: false, indent: 1, values: '' },
      { line: 5, code: '  for (let i = 0; i < nums.length; i++) {', active: stepData.currentLine === 5, indent: 1, values: showLoopVars ? `i=${stepData.index}, nums[${stepData.index}]=${nums[stepData.index]}` : '' },
      { line: 6, code: '    currentSum = Math.max(nums[i], currentSum + nums[i]);', active: stepData.currentLine === 6, indent: 2, values: showLoopVars ? `nums[i]=${nums[stepData.index]}, currentSum+nums[i]=${stepData.index >= 0 ? (steps[Math.max(0, currentStep - 1)]?.currentSum || 0) + nums[stepData.index] : 0} → ${currentSumDisplay}` : '' },
      { line: 7, code: '    ', active: false, indent: 2, values: '' },
      { line: 8, code: '    // Key insight: Either start new subarray at current', active: false, indent: 2, comment: true, values: '' },
      { line: 9, code: '    // element, or extend existing subarray', active: false, indent: 2, comment: true, values: '' },
      { line: 10, code: '    ', active: false, indent: 2, values: '' },
      { line: 11, code: '    maxSum = Math.max(maxSum, currentSum);', active: stepData.currentLine === 10 || stepData.action === 'update-max' || stepData.action === 'check', indent: 2, values: showLoopVars ? `max(${maxSumDisplay}, ${currentSumDisplay}) → ${stepData.maxSum === Number.NEGATIVE_INFINITY ? '-∞' : stepData.maxSum}` : `maxSum=${maxSumDisplay}` },
      { line: 12, code: '  }', active: false, indent: 1, values: '' },
      { line: 13, code: '  ', active: false, indent: 1, values: '' },
      { line: 14, code: '  return maxSum;', active: stepData.currentLine === 14, indent: 1, values: stepData.action === 'result' ? `return ${stepData.maxSum}` : '' },
      { line: 15, code: '}', active: false, indent: 0, values: '' },
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
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
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
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
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TrendingUp}
        category="DSA · Arrays"
        title="Maximum Subarray Sum (Kadane's Algorithm)"
        description="Find the contiguous subarray with the largest sum using Kadane's efficient O(n) algorithm."
        colorTheme="orange"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Dynamic Programming', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is Maximum Subarray Sum? */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              What is "Maximum Subarray Sum"?
            </h4>
            
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Given an array of integers, find the <strong>contiguous subarray</strong> (containing at least one number) which has the <strong>largest sum</strong>.
              </p>

              {/* Example */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-orange-300 dark:border-orange-600">
                <p className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-3">Example: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]</p>
                
                <div className="space-y-3">
                  {/* Visual Array */}
                  <div className="flex items-center justify-center gap-1">
                    {nums.map((val, idx) => (
                      <div key={idx} className={`w-10 h-10 flex items-center justify-center text-xs font-mono rounded ${
                        idx >= 3 && idx <= 6
                          ? 'bg-green-200 dark:bg-green-800 border-2 border-green-500 font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 border border-slate-300'
                      }`}>
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* Highlighted subarray */}
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-400">
                    <p className="text-sm text-center font-bold text-green-700 dark:text-green-300">
                      Maximum Subarray: [4, -1, 2, 1] → Sum = 6
                    </p>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-1">
                      (indices 3 to 6)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kadane's Algorithm Approach */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Kadane's Algorithm: The Key Insight
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                At each position, we have two choices:
              </p>

              <div className="space-y-3">
                {/* Choice 1 */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-green-700 dark:text-green-300 mb-2">Choice 1: Extend the existing subarray</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Add current element to the running sum if it increases the total
                      </p>
                      <code className="text-xs text-green-700 dark:text-green-300 block mt-2">
                        currentSum + nums[i]
                      </code>
                    </div>
                  </div>
                </div>

                {/* Choice 2 */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Choice 2: Start a new subarray</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Begin fresh from current element if previous sum was dragging us down
                      </p>
                      <code className="text-xs text-blue-700 dark:text-blue-300 block mt-2">
                        nums[i]
                      </code>
                    </div>
                  </div>
                </div>

                {/* The Decision */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <p className="text-sm font-bold text-purple-900 dark:text-purple-100 text-center">
                    currentSum = max(nums[i], currentSum + nums[i])
                  </p>
                  <p className="text-xs text-center text-purple-700 dark:text-purple-300 mt-2">
                    Always pick the better option!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Kadane's Works */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Why This Works: The Magic of Kadane's Algorithm
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Track Running Sum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Maintain <code className="text-purple-700 dark:text-purple-300">currentSum</code> - the best sum ending at current position</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Smart Decision at Each Step</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      If adding current element makes sum worse than starting fresh, start fresh!
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Track Global Maximum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Keep <code className="text-purple-700 dark:text-purple-300">maxSum</code> to remember the best sum seen so far</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Walkthrough */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">Quick Example</h4>
            
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 bg-white dark:bg-slate-900 rounded">
                <span className="text-slate-500">i=0, nums[0]=-2:</span> <span className="text-emerald-700 dark:text-emerald-300">currentSum=max(-2, 0-2)=-2, maxSum=-2</span>
              </div>
              <div className="p-2 bg-white dark:bg-slate-900 rounded">
                <span className="text-slate-500">i=1, nums[1]=1:</span> <span className="text-emerald-700 dark:text-emerald-300">currentSum=max(1, -2+1)=1, maxSum=1</span>
              </div>
              <div className="p-2 bg-white dark:bg-slate-900 rounded">
                <span className="text-slate-500">i=2, nums[2]=-3:</span> <span className="text-emerald-700 dark:text-emerald-300">currentSum=max(-3, 1-3)=-2, maxSum=1</span>
              </div>
              <div className="p-2 bg-white dark:bg-slate-900 rounded">
                <span className="text-slate-500">i=3, nums[3]=4:</span> <span className="text-emerald-700 dark:text-emerald-300">currentSum=max(4, -2+4)=4, maxSum=4 ✓</span>
              </div>
              <div className="p-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded border border-green-500">
                <span className="font-bold text-green-700 dark:text-green-300">Continue... Final maxSum = 6</span>
              </div>
            </div>
          </div>

          {/* Important Concepts */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Dynamic Programming:</strong> Optimal substructure - best ending at position i builds on best ending at i-1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Greedy Choice:</strong> At each step, make locally optimal decision (extend or start fresh)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Single Pass:</strong> Only need one traversal through the array - O(n) time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Handles Negatives:</strong> Works correctly even with all negative numbers</span>
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
              <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch Kadane's algorithm find the maximum subarray</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button
              onClick={handleReset}
              disabled={isAnimating}
              variant="outline"
            >
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-lg border-2 border-orange-300 dark:border-orange-700">
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
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">kadane.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
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
                    } ${lineData.comment ? 'opacity-60' : ''}`}
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
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">i:</span>
                        <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].index}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">currentSum:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].currentSum === Number.NEGATIVE_INFINITY ? '-∞' : steps[currentStep].currentSum}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">maxSum:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].maxSum === Number.NEGATIVE_INFINITY ? '-∞' : steps[currentStep].maxSum}</span>
                      </div>
                      {steps[currentStep].index >= 0 && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">nums[i]:</span>
                          <span className="font-semibold text-purple-600 dark:text-purple-400">{nums[steps[currentStep].index]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-700 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400">Action:</span>
                      <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded font-medium">
                        {steps[currentStep].action}
                      </span>
                    </div>
                    <div className="text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-sm ${
              steps[currentStep].isMaxUpdate
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-300 dark:border-orange-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${
                    steps[currentStep].isMaxUpdate ? 'bg-green-600' : 'bg-orange-600'
                  }`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${
                      steps[currentStep].isMaxUpdate
                        ? 'text-green-700 dark:text-green-400'
                        : 'text-orange-700 dark:text-orange-400'
                    }`}>
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className={`text-sm font-medium mt-0.5 ${
                      steps[currentStep].isMaxUpdate
                        ? 'text-green-900 dark:text-green-100'
                        : 'text-orange-900 dark:text-orange-100'
                    }`}>
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Sum'}
                      {steps[currentStep].action === 'check' && '❌ Checking Maximum'}
                      {steps[currentStep].action === 'update-max' && '✅ Maximum Updated!'}
                      {steps[currentStep].action === 'result' && '🎯 Final Result'}
                    </div>
                  </div>
                </div>
                <p className={`text-base leading-relaxed pl-14 ${
                  steps[currentStep].isMaxUpdate
                    ? 'text-green-900 dark:text-green-50'
                    : 'text-orange-900 dark:text-orange-50'
                }`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Array Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Array Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-700 rounded text-blue-700 dark:text-blue-300 font-semibold">
                    currentSum = {steps[currentStep].currentSum === Number.NEGATIVE_INFINITY ? '-∞' : steps[currentStep].currentSum}
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded text-green-700 dark:text-green-300 font-semibold">
                    maxSum = {steps[currentStep].maxSum === Number.NEGATIVE_INFINITY ? '-∞' : steps[currentStep].maxSum}
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {nums.map((val, idx) => {
                    const isCurrent = steps[currentStep].index === idx;
                    const isInMaxSubarray = idx >= steps[currentStep].subarrayStart && idx <= steps[currentStep].subarrayEnd && steps[currentStep].action === 'result';
                    const isInCurrentSubarray = steps[currentStep].highlighted.includes(idx);
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-sm border-2 transition-all duration-700 ${
                            isInMaxSubarray
                              ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-125 ring-4 ring-green-300 animate-pulse'
                              : isCurrent
                              ? 'bg-orange-200 dark:bg-orange-800 border-orange-500 scale-110 shadow-lg shadow-orange-300'
                              : isInCurrentSubarray
                              ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-400'
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 opacity-60'
                          }`}
                        >
                          {val}
                        </div>
                        
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                        {isCurrent && (
                          <>
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 animate-bounce">
                              <div className="text-xs font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/80 px-2.5 py-1 rounded border border-orange-500 shadow-md whitespace-nowrap">
                                i = {idx}
                              </div>
                              <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-orange-500"></div>
                            </div>
                            
                            {/* Pulse ring animation */}
                            <div className="absolute inset-0 rounded-lg border-2 border-orange-400 animate-ping opacity-75"></div>
                          </>
                        )}
                      </div>
                    );
                  })}
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
                We traverse the array exactly once, performing constant-time operations at each element. This makes Kadane's algorithm extremely efficient for finding the maximum subarray sum.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Only uses two variables (currentSum and maxSum) regardless of input size, making it a space-efficient solution with constant space complexity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution - Kadane's Algorithm"
        language="javascript"
        code={`function maxSubArray(nums) {
  let maxSum = -Infinity;  // Handle all negative arrays
  let currentSum = 0;       // Running sum of current subarray
  
  for (let i = 0; i < nums.length; i++) {
    // Key decision: extend existing subarray or start fresh?
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    
    // Update global maximum if current is better
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));  // Output: 6
console.log(maxSubArray([1]));                        // Output: 1
console.log(maxSubArray([5,4,-1,7,8]));              // Output: 23
console.log(maxSubArray([-1,-2,-3,-4]));             // Output: -1`}
      />
    </div>
  );
}
