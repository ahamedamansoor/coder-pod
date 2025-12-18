'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Maximize2, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MaximumSumSubarrayK() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [array] = useState([2, 1, 5, 1, 3, 2]);
  const [k] = useState(3);
  const [windowStart, setWindowStart] = useState(0);
  const [windowEnd, setWindowEnd] = useState(2);
  const [currentSum, setCurrentSum] = useState(8);
  const [maxSum, setMaxSum] = useState(8);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      start: 0,
      end: 0,
      sum: 0,
      maxSum: 0,
      currentLine: 2,
      description: '📋 Initialize: maxSum = 0, windowSum = 0. Starting with empty variables to track our results.',
      action: 'init-vars',
      highlighted: []
    },
    {
      step: 2,
      start: 0,
      end: 0,
      sum: 0,
      maxSum: 0,
      currentLine: 6,
      description: '📦 Build first window of size k=3. Start at index 0. We need to build the initial window before we can start sliding.',
      action: 'init-window',
      highlighted: []
    },
    {
      step: 3,
      start: 0,
      end: 0,
      sum: 2,
      maxSum: 0,
      currentLine: 7,
      description: '➕ Add arr[0]=2 to window → windowSum = 0+2 = 2. Building the first window by adding elements one by one.',
      action: 'init',
      highlighted: [0]
    },
    {
      step: 4,
      start: 0,
      end: 1,
      sum: 2,
      maxSum: 0,
      currentLine: 7,
      description: '📊 Window now contains: [2]. First element added to our sliding window.',
      action: 'init',
      highlighted: [0]
    },
    {
      step: 5,
      start: 0,
      end: 1,
      sum: 3,
      maxSum: 0,
      currentLine: 7,
      description: '➕ Add arr[1]=1 to window → windowSum = 2+1 = 3. Continuing to build our first window of size K.',
      action: 'init',
      highlighted: [0, 1]
    },
    {
      step: 6,
      start: 0,
      end: 2,
      sum: 3,
      maxSum: 0,
      currentLine: 7,
      description: '📊 Window now contains: [2, 1]. Two elements added so far, need one more.',
      action: 'init',
      highlighted: [0, 1]
    },
    {
      step: 7,
      start: 0,
      end: 2,
      sum: 8,
      maxSum: 0,
      currentLine: 7,
      description: '➕ Add arr[2]=5 to window → windowSum = 3+5 = 8. Final element to complete our first window!',
      action: 'init',
      highlighted: [0, 1, 2]
    },
    {
      step: 8,
      start: 0,
      end: 2,
      sum: 8,
      maxSum: 8,
      currentLine: 9,
      description: '✅ First window complete: [2,1,5]. Set maxSum = 8. This is our baseline - first window sum becomes our initial maximum.',
      action: 'init-complete',
      highlighted: [0, 1, 2]
    },
    {
      step: 9,
      start: 0,
      end: 2,
      sum: 8,
      maxSum: 8,
      currentLine: 12,
      description: '🔄 Start sliding window. Current: [0-2], sum=8. Now we begin sliding to check all other windows of size K.',
      action: 'prepare-slide',
      highlighted: [0, 1, 2]
    },
    {
      step: 10,
      start: 0,
      end: 2,
      sum: 8,
      maxSum: 8,
      currentLine: 13,
      description: '➖ Slide window right: Remove leftmost arr[0]=2. To slide, we first remove the leftmost element from our window sum.',
      action: 'removing',
      highlighted: [0, 1, 2],
      removed: 0
    },
    {
      step: 11,
      start: 1,
      end: 2,
      sum: 6,
      maxSum: 8,
      currentLine: 13,
      description: '⬅️ After removal: windowSum = 8-2 = 6. We subtracted the element that left the window.',
      action: 'removed',
      highlighted: [1, 2]
    },
    {
      step: 12,
      start: 1,
      end: 3,
      sum: 6,
      maxSum: 8,
      currentLine: 13,
      description: '➕ Add rightmost arr[3]=1. Now we add the new element entering the window from the right.',
      action: 'adding',
      highlighted: [1, 2, 3],
      added: 3
    },
    {
      step: 13,
      start: 1,
      end: 3,
      sum: 7,
      maxSum: 8,
      currentLine: 13,
      description: '➡️ After addition: windowSum = 6+1 = 7. Window has slid one position right, new sum calculated!',
      action: 'added',
      highlighted: [1, 2, 3]
    },
    {
      step: 14,
      start: 1,
      end: 3,
      sum: 7,
      maxSum: 8,
      currentLine: 14,
      description: '⚖️ Compare: max(8, 7) = 8. No update needed. Current window sum (7) is not better than our maximum (8).',
      action: 'compare',
      highlighted: [1, 2, 3]
    },
    {
      step: 15,
      start: 1,
      end: 3,
      sum: 7,
      maxSum: 8,
      currentLine: 13,
      description: '➖ Slide again: Remove leftmost arr[1]=1. Continue sliding - remove the left element of current window.',
      action: 'removing',
      highlighted: [1, 2, 3],
      removed: 1
    },
    {
      step: 16,
      start: 2,
      end: 3,
      sum: 6,
      maxSum: 8,
      currentLine: 13,
      description: '⬅️ After removal: windowSum = 7-1 = 6. Element at index 1 removed from window sum.',
      action: 'removed',
      highlighted: [2, 3]
    },
    {
      step: 17,
      start: 2,
      end: 4,
      sum: 6,
      maxSum: 8,
      currentLine: 13,
      description: '➕ Add rightmost arr[4]=3. Adding the next element as window slides right.',
      action: 'adding',
      highlighted: [2, 3, 4],
      added: 4
    },
    {
      step: 18,
      start: 2,
      end: 4,
      sum: 9,
      maxSum: 8,
      currentLine: 13,
      description: '➡️ After addition: windowSum = 6+3 = 9. This looks like a larger sum than before!',
      action: 'added',
      highlighted: [2, 3, 4]
    },
    {
      step: 19,
      start: 2,
      end: 4,
      sum: 9,
      maxSum: 9,
      currentLine: 14,
      description: '🎉 Compare: max(8, 9) = 9 → NEW MAXIMUM! Current window [5,1,3] has sum 9, which is better than our previous max of 8!',
      action: 'new-max',
      highlighted: [2, 3, 4]
    },
    {
      step: 20,
      start: 2,
      end: 4,
      sum: 9,
      maxSum: 9,
      currentLine: 13,
      description: '➖ Slide again: Remove leftmost arr[2]=5. Continuing our slide through the array.',
      action: 'removing',
      highlighted: [2, 3, 4],
      removed: 2
    },
    {
      step: 21,
      start: 3,
      end: 4,
      sum: 4,
      maxSum: 9,
      currentLine: 13,
      description: '⬅️ After removal: windowSum = 9-5 = 4. Removed the large element (5), so sum decreased significantly.',
      action: 'removed',
      highlighted: [3, 4]
    },
    {
      step: 22,
      start: 3,
      end: 5,
      sum: 4,
      maxSum: 9,
      currentLine: 13,
      description: '➕ Add rightmost arr[5]=2. Adding the last element of the array to our window.',
      action: 'adding',
      highlighted: [3, 4, 5],
      added: 5
    },
    {
      step: 23,
      start: 3,
      end: 5,
      sum: 6,
      maxSum: 9,
      currentLine: 13,
      description: '➡️ After addition: windowSum = 4+2 = 6. Final window position reached!',
      action: 'added',
      highlighted: [3, 4, 5]
    },
    {
      step: 24,
      start: 3,
      end: 5,
      sum: 6,
      maxSum: 9,
      currentLine: 14,
      description: '⚖️ Compare: max(9, 6) = 9. No update needed. Last window sum (6) doesn\'t beat our maximum (9).',
      action: 'compare',
      highlighted: [3, 4, 5]
    },
    {
      step: 25,
      start: 3,
      end: 5,
      sum: 6,
      maxSum: 9,
      currentLine: 17,
      description: '🏁 Reached end of array. All windows checked! We\'ve slid through every possible window of size K.',
      action: 'complete',
      highlighted: [3, 4, 5]
    },
    {
      step: 26,
      start: 2,
      end: 4,
      sum: 9,
      maxSum: 9,
      currentLine: 17,
      description: '✓ Maximum sum window: [5,1,3] at indices [2-4] = 9. This window has the highest sum among all windows of size K.',
      action: 'result',
      highlighted: [2, 3, 4]
    },
    {
      step: 27,
      start: 2,
      end: 4,
      sum: 9,
      maxSum: 9,
      currentLine: 17,
      description: '🎯 Sliding window found optimal solution in O(n) time! Instead of O(n×k), we achieved linear time complexity.',
      action: 'done',
      highlighted: [2, 3, 4]
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function maxSumSubarray(arr, k) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let maxSum = 0;`, active: stepData.currentLine === 2, indent: 1, values: `maxSum = ${stepData.maxSum}` },
      { line: 3, code: `  let windowSum = 0;`, active: stepData.currentLine === 3, indent: 1, values: `windowSum = ${stepData.sum}` },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  // Calculate sum of first window`, active: false, indent: 1, comment: true },
      { line: 6, code: `  for (let i = 0; i < k; i++) {`, active: stepData.currentLine === 6, indent: 1, values: stepData.currentLine === 6 ? `k = ${k}` : '' },
      { line: 7, code: `    windowSum += arr[i];`, active: stepData.action === 'init', indent: 2, values: stepData.action === 'init' && stepData.highlighted.length > 0 ? `arr[${stepData.highlighted[stepData.highlighted.length - 1]}] = ${array[stepData.highlighted[stepData.highlighted.length - 1]]} → ${stepData.sum}` : '' },
      { line: 8, code: `  }`, active: false, indent: 1 },
      { line: 9, code: `  maxSum = windowSum;`, active: stepData.action === 'init-complete', indent: 1, values: stepData.action === 'init-complete' ? `maxSum = ${stepData.sum}` : '' },
      { line: 10, code: `  `, active: false, indent: 1 },
      { line: 11, code: `  // Slide the window`, active: false, indent: 1, comment: true },
      { line: 12, code: `  for (let i = k; i < arr.length; i++) {`, active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 ? `i = ${stepData.end + 1}` : '' },
      { line: 13, code: `    windowSum = windowSum - arr[i - k] + arr[i];`, active: stepData.action === 'removing' || stepData.action === 'removed' || stepData.action === 'adding' || stepData.action === 'added', indent: 2, values: stepData.action === 'removing' && stepData.removed !== undefined ? `remove arr[${stepData.removed}] = ${array[stepData.removed]}` : stepData.action === 'removed' ? `${stepData.sum}` : stepData.action === 'adding' && stepData.added !== undefined ? `add arr[${stepData.added}] = ${array[stepData.added]}` : stepData.action === 'added' ? `windowSum = ${stepData.sum}` : '' },
      { line: 14, code: `    maxSum = Math.max(maxSum, windowSum);`, active: stepData.action === 'compare' || stepData.action === 'new-max', indent: 2, values: stepData.action === 'compare' || stepData.action === 'new-max' ? `max(${stepData.maxSum === stepData.sum && stepData.action === 'new-max' ? Math.min(...steps.filter(s => s.step < stepData.step).map(s => s.maxSum)) : stepData.action === 'new-max' ? stepData.sum : stepData.maxSum}, ${stepData.sum}) = ${stepData.maxSum}` : '' },
      { line: 15, code: `  }`, active: false, indent: 1 },
      { line: 16, code: `  `, active: false, indent: 1 },
      { line: 17, code: `  return maxSum;`, active: stepData.action === 'result' || stepData.action === 'done', indent: 1, values: stepData.action === 'result' || stepData.action === 'done' ? `return ${stepData.maxSum}` : '' },
      { line: 18, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setWindowStart(step.start);
    setWindowEnd(step.end);
    setCurrentSum(step.sum);
    setMaxSum(step.maxSum);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speeds = {
      slow: 3000,
      normal: 1500,
      fast: 500
    };
    const delay = speeds[animationSpeed];

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, delay);
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
    setIsAnimating(false);
    goToStep(0);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Maximize2}
        category="DSA · Sliding Window"
        title="Maximum Sum Subarray of Size K"
        description="Learn to find the maximum sum of any contiguous subarray of size K using the sliding window technique"
        colorTheme="emerald"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Sliding Window', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
          <Badge
            key={`${badge}-${index}`}
            variant={index === 0 ? 'secondary' : 'outline'}
            className="text-sm"
          >
            {badge}
          </Badge>
        ))}
      </div>

      {/* What You'll Learn */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Sliding Window Pattern</p>
                <p className="text-sm text-muted-foreground">Move a fixed-size window through array</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Optimize from O(n×k) to O(n)</p>
                <p className="text-sm text-muted-foreground">Avoid recalculating entire window each time</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Window Maintenance</p>
                <p className="text-sm text-muted-foreground">Remove left element, add right element</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Track Maximum</p>
                <p className="text-sm text-muted-foreground">Keep running maximum as window slides</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding the sliding window approach</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array of integers and a number K, find the maximum sum of any contiguous subarray of size K.
          </p>

          {/* Visual Problem */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Find Maximum Sum Window
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-emerald-300 dark:border-emerald-600">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Array: [2, 1, 5, 1, 3, 2], K = 3</p>
                
                {/* All possible windows */}
                <div className="space-y-3">
                  {[
                    { window: [2, 1, 5], sum: 8, indices: '0-2' },
                    { window: [1, 5, 1], sum: 7, indices: '1-3' },
                    { window: [5, 1, 3], sum: 9, indices: '2-4', isMax: true },
                    { window: [1, 3, 2], sum: 6, indices: '3-5' },
                  ].map((item, idx) => (
                    <div key={idx} className={`p-3 rounded border-2 ${item.isMax ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-600'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-600 dark:text-slate-400">Window [{item.indices}]:</span>
                          <div className="flex gap-1">
                            {item.window.map((val, i) => (
                              <div key={i} className={`w-8 h-8 rounded flex items-center justify-center text-sm font-bold border ${item.isMax ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100' : 'bg-slate-100 dark:bg-slate-800 border-slate-400 text-slate-700 dark:text-slate-300'}`}>
                                {val}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded font-bold ${item.isMax ? 'bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                          Sum = {item.sum}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded border-2 border-green-500">
                  <p className="text-center font-bold text-green-900 dark:text-green-100">
                    Maximum Sum = 9 ✓
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Naive vs Sliding Window */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <span className="text-lg">⚠️</span> Naive Approach vs Sliding Window
            </h4>
            
            <div className="space-y-4">
              {/* Naive */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-red-300 dark:border-red-600">
                <div className="flex items-start gap-3 mb-3">
                  <div className="px-2 py-1 bg-red-500 text-white rounded text-xs font-bold">❌ SLOW</div>
                  <div className="flex-1">
                    <p className="font-semibold text-red-900 dark:text-red-100">Naive: Recalculate entire window each time</p>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">For each window, sum all K elements from scratch</p>
                  </div>
                </div>
                <div className="text-xs font-mono bg-red-50 dark:bg-red-900/20 p-2 rounded">
                  Window [0-2]: 2+1+5 = 8<br />
                  Window [1-3]: 1+5+1 = 7 (recalculate all 3)<br />
                  Window [2-4]: 5+1+3 = 9 (recalculate all 3)<br />
                  ...
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  <strong>Time Complexity: O(n × k)</strong> - K additions per window
                </p>
              </div>

              {/* Sliding Window */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <div className="flex items-start gap-3 mb-3">
                  <div className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">✓ FAST</div>
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 dark:text-green-100">Sliding Window: Reuse previous sum</p>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">Remove left element, add right element</p>
                  </div>
                </div>
                <div className="text-xs font-mono bg-green-50 dark:bg-green-900/20 p-2 rounded">
                  Window [0-2]: 2+1+5 = 8<br />
                  Window [1-3]: 8 - 2 + 1 = 7 (1 subtraction, 1 addition)<br />
                  Window [2-4]: 7 - 1 + 3 = 9 (1 subtraction, 1 addition)<br />
                  ...
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  <strong>Time Complexity: O(n)</strong> - 2 operations per window!
                </p>
              </div>
            </div>
          </div>

          {/* Sliding Mechanism */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔄</span> How the Window Slides
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Initial Window (size K)</p>
                </div>
                <div className="flex items-center gap-1">
                  {[2, 1, 5, 1, 3, 2].map((val, idx) => (
                    <div key={idx} className={`w-10 h-10 rounded flex items-center justify-center font-bold border-2 ${idx < 3 ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600'}`}>
                      {val}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">Sum = 2+1+5 = 8, maxSum = 8</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Slide Right: Remove left, Add right</p>
                </div>
                <div className="flex items-center gap-1">
                  {[2, 1, 5, 1, 3, 2].map((val, idx) => (
                    <div key={idx} className={`w-10 h-10 rounded flex items-center justify-center font-bold border-2 ${idx === 0 ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100' : idx >= 1 && idx <= 3 ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-900 dark:text-emerald-100' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600'}`}>
                      {val}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs">
                  <span className="text-red-700 dark:text-red-300">Remove: 2</span>
                  <span className="text-emerald-700 dark:text-emerald-300">Add: 1</span>
                  <span className="text-blue-700 dark:text-blue-300">Sum = 8-2+1 = 7</span>
                </div>
              </div>

              {/* Formula */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded border-2 border-purple-300 dark:border-purple-700">
                <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">Sliding Formula:</p>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>newSum = oldSum - arr[left] + arr[right]</strong>
                </p>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
                  Only 2 operations instead of K operations!
                </p>
              </div>
            </div>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="text-cyan-600 dark:text-cyan-400 font-semibold mb-1">Time</div>
                <div className="text-lg font-bold text-cyan-900 dark:text-cyan-100">O(n)</div>
                <div className="text-xs text-cyan-700 dark:text-cyan-300">Single pass</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="text-cyan-600 dark:text-cyan-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-cyan-900 dark:text-cyan-100">O(1)</div>
                <div className="text-xs text-cyan-700 dark:text-cyan-300">Constant space</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Maximize2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Sliding Window: Visual Animation
          </CardTitle>
          <CardDescription>Watch the window slide through the array to find the maximum sum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-emerald-800 dark:text-emerald-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-emerald-800 dark:text-emerald-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-emerald-800 dark:text-emerald-200">Fast</span>
                  </label>
                </div>
              </div>

              {/* Stepper Controls */}
              {currentStep >= 0 && (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    onClick={handlePrevious}
                    disabled={isAnimating || currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="border-emerald-300 dark:border-emerald-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg border border-emerald-300 dark:border-emerald-700">
                    <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-emerald-300 dark:border-emerald-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">maxSumSubarray.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

                <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                  {getCodeWithValues(steps[currentStep]).map((lineData) => (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.active
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-400 dark:border-amber-500'
                          : lineData.comment
                          ? 'opacity-50'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-amber-600 dark:text-amber-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className={`flex-1 ${
                        lineData.comment
                          ? 'text-emerald-600 dark:text-emerald-400 italic'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}>
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

                <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Window:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">[{windowStart}-{windowEnd}]</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Current Sum:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{currentSum}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Max Sum:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{maxSum}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Step Description */}
            {currentStep >= 0 && (
              <div className={`mb-6 p-4 rounded-xl border-2 animate-in slide-in-from-top-4 duration-500 ${
                steps[currentStep].action === 'new-max'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600 ring-4 ring-green-200 dark:ring-green-900/50'
                  : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : steps[currentStep].action === 'removing' || steps[currentStep].action === 'removed'
                  ? 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-400 dark:border-red-600'
                  : steps[currentStep].action === 'adding' || steps[currentStep].action === 'added'
                  ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400 dark:border-blue-600'
                  : steps[currentStep].action === 'init' || steps[currentStep].action === 'init-complete'
                  ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-400 dark:border-purple-600'
                  : 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-400 dark:border-emerald-600'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    steps[currentStep].action === 'new-max'
                      ? 'bg-green-500 animate-pulse'
                      : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                      ? 'bg-green-500'
                      : steps[currentStep].action === 'removing'
                      ? 'bg-red-500'
                      : steps[currentStep].action === 'removed'
                      ? 'bg-orange-500'
                      : steps[currentStep].action === 'adding'
                      ? 'bg-blue-500'
                      : steps[currentStep].action === 'added'
                      ? 'bg-cyan-500'
                      : steps[currentStep].action === 'init' || steps[currentStep].action === 'init-complete'
                      ? 'bg-purple-600'
                      : 'bg-emerald-600'
                  }`}>
                    {steps[currentStep].action === 'new-max' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : steps[currentStep].action === 'removing' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : steps[currentStep].action === 'removed' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    ) : steps[currentStep].action === 'adding' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    ) : steps[currentStep].action === 'added' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    ) : steps[currentStep].action.includes('init') ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    ) : (
                      <Maximize2 className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className={`text-xs font-semibold uppercase tracking-wider ${
                        steps[currentStep].action === 'new-max'
                          ? 'text-green-700 dark:text-green-300'
                          : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                          ? 'text-green-700 dark:text-green-300'
                          : steps[currentStep].action.includes('remov')
                          ? 'text-red-700 dark:text-red-300'
                          : steps[currentStep].action.includes('add')
                          ? 'text-blue-700 dark:text-blue-300'
                          : steps[currentStep].action.includes('init')
                          ? 'text-purple-700 dark:text-purple-300'
                          : 'text-emerald-700 dark:text-emerald-300'
                      }`}>
                        {steps[currentStep].action === 'new-max' ? '🎉 NEW MAXIMUM!' :
                         steps[currentStep].action === 'init-vars' ? '⚙️ Initialization' :
                         steps[currentStep].action === 'init-window' ? '📦 Building Window' :
                         steps[currentStep].action === 'init' ? '➕ Adding to Window' :
                         steps[currentStep].action === 'init-complete' ? '✅ Window Complete' :
                         steps[currentStep].action === 'prepare-slide' ? '🔄 Prepare to Slide' :
                         steps[currentStep].action === 'removing' ? '➖ Removing Element' :
                         steps[currentStep].action === 'removed' ? '← Element Removed' :
                         steps[currentStep].action === 'adding' ? '➕ Adding Element' :
                         steps[currentStep].action === 'added' ? '→ Element Added' :
                         steps[currentStep].action === 'compare' ? '⚖️ Comparing' :
                         steps[currentStep].action === 'complete' ? '🏁 Complete' :
                         steps[currentStep].action === 'done' ? '✅ Done' :
                         steps[currentStep].action === 'result' ? '🏆 Result' :
                         '🪟 Sliding'}
                      </p>
                    </div>
                    <p className={`font-bold ${
                      steps[currentStep].action === 'new-max'
                        ? 'text-green-900 dark:text-green-100'
                        : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                        ? 'text-green-900 dark:text-green-100'
                        : steps[currentStep].action.includes('remov')
                        ? 'text-red-900 dark:text-red-100'
                        : steps[currentStep].action.includes('add')
                        ? 'text-blue-900 dark:text-blue-100'
                        : steps[currentStep].action.includes('init')
                        ? 'text-purple-900 dark:text-purple-100'
                        : 'text-emerald-900 dark:text-emerald-100'
                    }`}>
                      {steps[currentStep].description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Variable State Display */}
            {currentStep >= 0 && (
              <div className="mb-6 grid grid-cols-4 gap-3">
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">Window Size (K)</div>
                  <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">{k}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Window Sum</div>
                  <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">{currentSum}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Max Sum</div>
                  <div className="text-3xl font-bold text-green-900 dark:text-green-100">{maxSum}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                  <div className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-1">Current Index (i)</div>
                  <div className="text-3xl font-bold text-orange-900 dark:text-orange-100">{steps[currentStep].end >= k ? steps[currentStep].end : '-'}</div>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Array with Sliding Window:</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 rounded text-purple-700 dark:text-purple-300 font-semibold">K = {k}</span>
                  {steps[currentStep].end >= k && (
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/40 border border-orange-300 dark:border-orange-700 rounded text-orange-700 dark:text-orange-300 font-semibold">i = {steps[currentStep].end}</span>
                  )}
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center gap-2">
                    {/* Window Overlay */}
                    {currentStep > 0 && steps[currentStep].highlighted.length > 0 && (
                      <div
                        className="absolute -top-2 h-[4.5rem] bg-purple-500/10 dark:bg-purple-400/10 border-2 border-purple-500 rounded-lg transition-all duration-700 pointer-events-none"
                        style={{
                          left: `calc(${steps[currentStep].start * (3.5 + 0.5)}rem - 0.5rem)`,
                          width: `calc(${k * 3.5}rem + ${(k - 1) * 0.5}rem + 1rem)`
                        }}
                      >
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/60 px-2 py-0.5 rounded whitespace-nowrap shadow-sm">
                          Window (K={k})
                        </div>
                      </div>
                    )}
                
                {array.map((val, idx) => {
                  const isInWindow = steps[currentStep] && steps[currentStep].highlighted.includes(idx);
                  const isRemoved = steps[currentStep] && steps[currentStep].removed === idx;
                  const isAdded = steps[currentStep] && steps[currentStep].added === idx;
                  const isMaxWindow = steps[currentStep] && steps[currentStep].action === 'done' && steps[currentStep].highlighted.includes(idx);

                  return (
                    <div key={idx} className="relative flex flex-col items-center gap-2">
                      {/* Value Box */}
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                          isRemoved
                            ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100 scale-90 opacity-50'
                            : isAdded
                            ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100 scale-110 animate-pulse'
                            : isMaxWindow
                            ? 'bg-amber-200 dark:bg-amber-800 border-amber-500 text-amber-900 dark:text-amber-100 scale-110 ring-4 ring-amber-300'
                            : isInWindow
                            ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-900 dark:text-emerald-100'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600'
                        }`}
                      >
                        {val}
                      </div>
                      
                      {/* Index */}
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">{idx}</span>
                      
                      {/* i pointer indicator - always visible at current index */}
                      {steps[currentStep] && steps[currentStep].end === idx && currentStep > 0 && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                          <div className="text-xs font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/80 px-2.5 py-1 rounded border border-orange-500 shadow-md">
                            i
                          </div>
                          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-orange-500"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
                  </div>
                </div>
              </div>
            </div>

            {/* Result Display */}
            {steps[currentStep].action === 'done' && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 animate-bounce" />
                  <div>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">Maximum Sum Found!</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Max sum = {maxSum} for window size K={k}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 border-2 border-emerald-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Current Window</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-amber-200 dark:bg-amber-800 border-2 border-amber-500 rounded ring-2 ring-amber-300"></div>
                <span className="text-slate-700 dark:text-slate-300">Max Window</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Algorithm Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Maximize2 className="w-6 h-6 text-emerald-600" />
            The Sliding Window Approach
          </CardTitle>
          <CardDescription>Understanding the algorithm step by step</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Calculate sum of first window</strong>
                <p className="text-sm text-muted-foreground">Sum the first K elements, set maxSum = windowSum</p>
              </li>
              <li>
                <strong>Slide the window right</strong>
                <p className="text-sm text-muted-foreground">For each new position: subtract left element, add right element</p>
              </li>
              <li>
                <strong>Update maximum</strong>
                <p className="text-sm text-muted-foreground">After each slide, check if current sum &gt; maxSum</p>
              </li>
              <li>
                <strong>Continue until end</strong>
                <p className="text-sm text-muted-foreground">Slide window through entire array</p>
              </li>
              <li>
                <strong>Return maxSum</strong>
                <p className="text-sm text-muted-foreground">The answer is the maximum sum found</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Maximum Sum Subarray of Size K"
            description="Efficient sliding window solution"
            language="javascript"
            colorTheme="green"
            icon={Maximize2}
            code={`function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    // Remove left element, add right element
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

// Test it
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSumSubarray([2, 3, 4, 1, 5], 2));    // 7
console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39`}
          />

          <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why Sliding Window is Efficient
            </h4>
            <ul className="text-sm text-emerald-800 dark:text-emerald-200 space-y-1">
              <li>• <strong>Reuses computation:</strong> Each new window builds on previous sum</li>
              <li>• <strong>Constant operations:</strong> Only 2 operations per slide (subtract + add)</li>
              <li>• <strong>Single pass:</strong> Traverse array once = O(n) time</li>
              <li>• <strong>No extra space:</strong> Only track windowSum and maxSum = O(1) space</li>
              <li>• <strong>Pattern applies widely:</strong> Use for min/max/average of K-size subarrays</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Edge Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            Important Edge Cases
          </CardTitle>
          <CardDescription>Handle these scenarios properly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">1. K equals array length</h4>
              <p className="text-sm text-muted-foreground">Only one window possible - sum entire array</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxSumSubarray([1,2,3,4], 4) // sum = 10
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. K = 1</h4>
              <p className="text-sm text-muted-foreground">Find maximum single element</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxSumSubarray([1,2,3,4], 1) // 4
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Array has negative numbers</h4>
              <p className="text-sm text-muted-foreground">Algorithm still works - find least negative sum if all windows negative</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxSumSubarray([-1,-2,-3], 2) // -3 (least negative)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. K &gt; array length</h4>
              <p className="text-sm text-muted-foreground">Invalid input - should return error or -1</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxSumSubarray([1,2], 3) // Invalid: K too large
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Related Problems
          </CardTitle>
          <CardDescription>Similar sliding window challenges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">1. Minimum Sum Subarray of Size K</p>
              <p className="text-sm text-muted-foreground">Same approach, track minimum instead</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Average of Subarrays of Size K</p>
              <p className="text-sm text-muted-foreground">Divide windowSum by K for each window</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. First Negative in Every Window of Size K</p>
              <p className="text-sm text-muted-foreground">Track first negative element in sliding window</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Longest Substring with K Distinct Characters</p>
              <p className="text-sm text-muted-foreground">Variable-size sliding window with HashMap</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
            <CheckCircle className="w-6 h-6" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Sliding window optimizes from O(n×k) to O(n) by reusing previous sum</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Calculate first window sum, then slide by removing left and adding right</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Track maximum sum as you slide through the array</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Works with negative numbers - find maximum sum among all windows</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Foundation pattern for many string and array problems</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
