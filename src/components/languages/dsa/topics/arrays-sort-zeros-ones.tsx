'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { ArrowUpDown, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function SortZerosOnes() {
  // CSS for rectangular swap animation (same as reverse array)
  const swapStyles = `
    @keyframes swapLeftToRight {
      0% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(0, -80px) scale(1.1);
      }
      50% {
        transform: translate(var(--swap-distance), -80px) scale(1.1);
      }
      75% {
        transform: translate(var(--swap-distance), -80px) scale(1.1);
      }
      100% {
        transform: translate(var(--swap-distance), 0) scale(1);
      }
    }
    
    @keyframes swapRightToLeft {
      0% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(0, 80px) scale(1.1);
      }
      50% {
        transform: translate(calc(var(--swap-distance) * -1), 80px) scale(1.1);
      }
      75% {
        transform: translate(calc(var(--swap-distance) * -1), 80px) scale(1.1);
      }
      100% {
        transform: translate(calc(var(--swap-distance) * -1), 0) scale(1);
      }
    }
  `;
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [arrayState, setArrayState] = useState([0, 1, 1, 0, 1, 0, 0, 1]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(7);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      left: 0,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 3,
      description: '📋 Initialize: Set left = 0. Left pointer will place 0s on the left side.',
      action: 'init',
      swapIndices: []
    },
    {
      step: 2,
      left: 0,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 3,
      description: '📋 Initialize: Set right = 7 (arr.length - 1). Right pointer will place 1s on right side.',
      action: 'init',
      swapIndices: []
    },
    {
      step: 3,
      left: 0,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 5,
      description: '✅ Loop Check: Is left(0) < right(7)? Yes! Pointers haven\'t crossed, continue.',
      action: 'checking',
      swapIndices: []
    },
    {
      step: 4,
      left: 0,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 7,
      description: '🔍 Check Left: Is arr[left(0)] === 0? arr[0] = 0. YES! Already correct position.',
      action: 'checking-left',
      swapIndices: []
    },
    {
      step: 5,
      left: 1,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 7,
      description: '➡️ Move Left: 0 is in correct position. left++ → 1.',
      action: 'move-left',
      swapIndices: []
    },
    {
      step: 6,
      left: 1,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 7,
      description: '🔍 Check Left: Is arr[left(1)] === 0? arr[1] = 1. No, check next condition.',
      action: 'checking-left',
      swapIndices: []
    },
    {
      step: 7,
      left: 1,
      right: 7,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 11,
      description: '🔍 Check Right: Is arr[right(7)] === 1? arr[7] = 1. YES! Already correct position.',
      action: 'checking-right',
      swapIndices: []
    },
    {
      step: 8,
      left: 1,
      right: 6,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 11,
      description: '⬅️ Move Right: 1 is in correct position. right-- → 6.',
      action: 'move-right',
      swapIndices: []
    },
    {
      step: 9,
      left: 1,
      right: 6,
      array: [0, 1, 1, 0, 1, 0, 0, 1],
      currentLine: 11,
      description: '🔍 Check Right: Is arr[right(6)] === 1? arr[6] = 0. No! Wrong position, need swap!',
      action: 'checking-right',
      swapIndices: []
    },
    {
      step: 10,
      left: 1,
      right: 6,
      array: [0, 0, 1, 0, 1, 0, 1, 1],
      currentLine: 11,
      description: '🔄 Swap: arr[left(1)]=1 ↔ arr[right(6)]=0. Both move to correct sides!',
      action: 'swap',
      swapIndices: [1, 6]
    },
    {
      step: 11,
      left: 2,
      right: 5,
      array: [0, 0, 1, 0, 1, 0, 1, 1],
      currentLine: 11,
      description: '➡️⬅️ Move Both: After swap, left++ → 2 and right-- → 5.',
      action: 'after-swap',
      swapIndices: []
    },
    {
      step: 12,
      left: 2,
      right: 5,
      array: [0, 0, 1, 0, 1, 0, 1, 1],
      currentLine: 7,
      description: '🔍 Check Left: Is arr[left(2)] === 0? arr[2] = 1. No, check next condition.',
      action: 'checking-left',
      swapIndices: []
    },
    {
      step: 13,
      left: 2,
      right: 5,
      array: [0, 0, 1, 0, 1, 0, 1, 1],
      currentLine: 11,
      description: '🔍 Check Right: Is arr[right(5)] === 1? arr[5] = 0. No! Wrong position, need swap!',
      action: 'checking-right',
      swapIndices: []
    },
    {
      step: 14,
      left: 2,
      right: 5,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 11,
      description: '🔄 Swap: arr[left(2)]=1 ↔ arr[right(5)]=0. Both move to correct sides!',
      action: 'swap',
      swapIndices: [2, 5]
    },
    {
      step: 15,
      left: 3,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 11,
      description: '➡️⬅️ Move Both: After swap, left++ → 3 and right-- → 4.',
      action: 'after-swap',
      swapIndices: []
    },
    {
      step: 16,
      left: 3,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 7,
      description: '🔍 Check Left: Is arr[left(3)] === 0? arr[3] = 0. YES! Already correct position.',
      action: 'checking-left',
      swapIndices: []
    },
    {
      step: 17,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 7,
      description: '➡️ Move Left: 0 is in correct position. left++ → 4.',
      action: 'move-left',
      swapIndices: []
    },
    {
      step: 18,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 5,
      description: '✅ Loop Check: Is left(4) < right(4)? NO! Pointers met, exit loop.',
      action: 'checking',
      swapIndices: []
    },
    {
      step: 19,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 14,
      description: '🎯 Loop Complete: Pointers met at index 4. Sorting finished!',
      action: 'loop-complete',
      swapIndices: []
    },
    {
      step: 20,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 14,
      description: '✅ Verify Left Side: All 0s on the left [0, 0, 0, 0].',
      action: 'verifying',
      swapIndices: []
    },
    {
      step: 21,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 14,
      description: '✅ Verify Right Side: All 1s on the right [1, 1, 1, 1].',
      action: 'verifying',
      swapIndices: []
    },
    {
      step: 22,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 14,
      description: '✅ Return Result: Array sorted successfully → [0, 0, 0, 0, 1, 1, 1, 1].',
      action: 'result',
      swapIndices: []
    },
    {
      step: 23,
      left: 4,
      right: 4,
      array: [0, 0, 0, 0, 1, 1, 1, 1],
      currentLine: 14,
      description: '🎯 Complete! Two-pointer technique sorted binary array in O(n) time, O(1) space!',
      action: 'done',
      swapIndices: []
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function sortZerosOnes(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let left = 0;`, active: stepData.currentLine === 3, indent: 1, values: `left = ${stepData.left}` },
      { line: 3, code: `  let right = arr.length - 1;`, active: stepData.currentLine === 3, indent: 1, values: `right = ${stepData.right}` },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  while (left < right) {`, active: stepData.currentLine === 5 || stepData.action === 'checking', indent: 1, values: stepData.action === 'checking' ? `${stepData.left} < ${stepData.right}` : '' },
      { line: 6, code: `    if (arr[left] === 0) {`, active: stepData.currentLine === 7 || stepData.action === 'checking-left', indent: 2, values: stepData.action === 'checking-left' && stepData.array[stepData.left] === 0 ? `arr[${stepData.left}] = 0 ✓` : stepData.action === 'checking-left' ? `arr[${stepData.left}] = 1` : '' },
      { line: 7, code: `      left++;`, active: stepData.action === 'move-left', indent: 3, values: stepData.action === 'move-left' ? `${stepData.left - 1} → ${stepData.left}` : '' },
      { line: 8, code: `    }`, active: false, indent: 2 },
      { line: 9, code: `    else if (arr[right] === 1) {`, active: stepData.currentLine === 11 || stepData.action === 'checking-right', indent: 2, values: stepData.action === 'checking-right' && stepData.array[stepData.right] === 1 ? `arr[${stepData.right}] = 1 ✓` : stepData.action === 'checking-right' ? `arr[${stepData.right}] = 0` : '' },
      { line: 10, code: `      right--;`, active: stepData.action === 'move-right', indent: 3, values: stepData.action === 'move-right' ? `${stepData.right + 1} → ${stepData.right}` : '' },
      { line: 11, code: `    }`, active: false, indent: 2 },
      { line: 12, code: `    else {`, active: stepData.action === 'swap' || stepData.action === 'after-swap', indent: 2 },
      { line: 13, code: `      [arr[left], arr[right]] = [arr[right], arr[left]];`, active: stepData.action === 'swap', indent: 3, values: stepData.swapIndices.length > 0 ? `swap(${stepData.swapIndices[0]}, ${stepData.swapIndices[1]})` : '' },
      { line: 14, code: `      left++;`, active: stepData.action === 'after-swap', indent: 3, values: stepData.action === 'after-swap' ? `→ ${stepData.left}` : '' },
      { line: 15, code: `      right--;`, active: stepData.action === 'after-swap', indent: 3, values: stepData.action === 'after-swap' ? `→ ${stepData.right}` : '' },
      { line: 16, code: `    }`, active: false, indent: 2 },
      { line: 17, code: `  }`, active: false, indent: 1 },
      { line: 18, code: `  `, active: false, indent: 1 },
      { line: 19, code: `  return arr;`, active: stepData.currentLine === 14 && stepData.action === 'done', indent: 1, values: stepData.action === 'done' ? '✓' : '' },
      { line: 20, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setArrayState([...step.array]);
    setLeft(step.left);
    setRight(step.right);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedDelay = animationSpeed === 'slow' ? 3000 : animationSpeed === 'fast' ? 500 : 1500;

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
      }, index * speedDelay);
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
      <style jsx>{swapStyles}</style>
      <PageHeader
        icon={ArrowUpDown}
        category="DSA · Two Pointers"
        title="Sort Array of 0s and 1s"
        description="Learn to sort a binary array in-place using the two-pointer technique in O(n) time"
        colorTheme="indigo"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Two Pointer', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
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
                <p className="font-medium">Two-Pointer Approach</p>
                <p className="text-sm text-muted-foreground">Sort from both ends simultaneously</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">In-Place Sorting</p>
                <p className="text-sm text-muted-foreground">No extra space needed, O(1) space</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Optimal Time</p>
                <p className="text-sm text-muted-foreground">Single pass through array, O(n) time</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Dutch Flag Variant</p>
                <p className="text-sm text-muted-foreground">Foundation for 3-color sorting</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding binary array sorting</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array containing only 0s and 1s, sort the array in ascending order (all 0s first, then all 1s) using in-place sorting with O(n) time complexity and O(1) space complexity.
          </p>

          {/* Visual Problem Explanation */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Goal: All 0s on Left, All 1s on Right
            </h4>
            
            <div className="space-y-4">
              {/* Before */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Before (Unsorted):</p>
                <div className="flex items-center justify-center gap-2">
                  {[0, 1, 1, 0, 1, 0, 0, 1].map((val, idx) => (
                    <div
                      key={idx}
                      className={`w-12 h-12 flex items-center justify-center rounded font-bold text-lg border-2 ${
                        val === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-100'
                          : 'bg-orange-100 dark:bg-orange-900 border-orange-400 dark:border-orange-600 text-orange-900 dark:text-orange-100'
                      }`}
                    >
                      {val}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-2xl text-indigo-600 dark:text-indigo-400">↓</div>

              {/* After */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">After (Sorted):</p>
                <div className="flex items-center justify-center gap-2">
                  {[0, 0, 0, 0, 1, 1, 1, 1].map((val, idx) => (
                    <div
                      key={idx}
                      className={`w-12 h-12 flex items-center justify-center rounded font-bold text-lg border-2 ${
                        val === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-100'
                          : 'bg-orange-100 dark:bg-orange-900 border-orange-400 dark:border-orange-600 text-orange-900 dark:text-orange-100'
                      }`}
                    >
                      {val}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-8 mt-3 text-xs font-semibold">
                  <div className="text-blue-700 dark:text-blue-300">← All 0s →</div>
                  <div className="text-orange-700 dark:text-orange-300">← All 1s →</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Pointer Visualization */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">👈👉</span> Two-Pointer Swapping Process
            </h4>
            
            <div className="space-y-4">
              {/* Initial state */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Step 1: Start with pointers at both ends</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[0, 1, 1, 0, 1, 0, 0, 1].map((val, idx) => (
                    <div key={idx} className="relative">
                      {idx === 0 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">L</div>
                      )}
                      {idx === 7 && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">R</div>
                      )}
                      <div className={`w-10 h-10 flex items-center justify-center rounded font-bold border-2 ${
                        idx === 0 || idx === 7
                          ? 'bg-amber-100 dark:bg-amber-900 border-amber-500'
                          : val === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-400'
                          : 'bg-orange-100 dark:bg-orange-900 border-orange-400'
                      }`}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center text-cyan-700 dark:text-cyan-300 mt-3">
                  arr[L]=0 (good), L++ → Skip this 0
                </p>
              </div>

              {/* After first move */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Step 2: Left found a 1, Right found a 1</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[0, 1, 1, 0, 1, 0, 0, 1].map((val, idx) => (
                    <div key={idx} className="relative">
                      {idx === 1 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">L</div>
                      )}
                      {idx === 7 && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">R</div>
                      )}
                      <div className={`w-10 h-10 flex items-center justify-center rounded font-bold border-2 ${
                        idx === 0
                          ? 'bg-green-100 dark:bg-green-900 border-green-500'
                          : idx === 1 || idx === 7
                          ? 'bg-amber-100 dark:bg-amber-900 border-amber-500'
                          : val === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-400'
                          : 'bg-orange-100 dark:bg-orange-900 border-orange-400'
                      }`}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center text-cyan-700 dark:text-cyan-300 mt-3">
                  arr[R]=1 (good), R-- → Skip this 1
                </p>
              </div>

              {/* Swap needed */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-amber-500">
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-3">Step 3: Found swap opportunity!</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[0, 1, 1, 0, 1, 0, 0, 1].map((val, idx) => (
                    <div key={idx} className="relative">
                      {idx === 1 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">L</div>
                      )}
                      {idx === 6 && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">R</div>
                      )}
                      <div className={`w-10 h-10 flex items-center justify-center rounded font-bold border-2 ${
                        idx === 0 || idx === 7
                          ? 'bg-green-100 dark:bg-green-900 border-green-500'
                          : idx === 1 || idx === 6
                          ? 'bg-red-200 dark:bg-red-800 border-red-500 animate-pulse'
                          : val === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-400'
                          : 'bg-orange-100 dark:bg-orange-900 border-orange-400'
                      }`}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center font-bold text-red-700 dark:text-red-300 mt-3">
                  arr[L]=1 AND arr[R]=0 → SWAP! ↔️
                </p>
              </div>

              {/* After swap */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-3">Step 4: After swap, continue...</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[0, 0, 1, 0, 1, 0, 1, 1].map((val, idx) => (
                    <div key={idx} className="relative">
                      {idx === 2 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">L</div>
                      )}
                      {idx === 5 && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">R</div>
                      )}
                      <div className={`w-10 h-10 flex items-center justify-center rounded font-bold border-2 ${
                        idx <= 1 || idx >= 6
                          ? 'bg-green-100 dark:bg-green-900 border-green-500'
                          : idx === 2 || idx === 5
                          ? 'bg-amber-100 dark:bg-amber-900 border-amber-500'
                          : val === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-400'
                          : 'bg-orange-100 dark:bg-orange-900 border-orange-400'
                      }`}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center text-green-700 dark:text-green-300 mt-3">
                  Both L++ and R-- after swap, continue sorting...
                </p>
              </div>
            </div>
          </div>

          {/* Decision Tree */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              🌳 Decision Logic
            </h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
                <div className="space-y-4">
                  {/* Condition 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                    <div className="flex-1">
                      <p className="font-semibold text-purple-900 dark:text-purple-100">If arr[left] == 0</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">→ Good position! Move left++</p>
                    </div>
                  </div>

                  {/* Condition 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                    <div className="flex-1">
                      <p className="font-semibold text-purple-900 dark:text-purple-100">Else if arr[right] == 1</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">→ Good position! Move right--</p>
                    </div>
                  </div>

                  {/* Condition 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                    <div className="flex-1">
                      <p className="font-semibold text-purple-900 dark:text-purple-100">Else (left=1, right=0)</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">→ Swap them! Then left++, right--</p>
                    </div>
                  </div>

                  {/* Stop condition */}
                  <div className="flex items-start gap-3 pt-3 border-t border-purple-300 dark:border-purple-600">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">✓</div>
                    <div className="flex-1">
                      <p className="font-semibold text-purple-900 dark:text-purple-100">While left &lt; right</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">→ When pointers meet or cross, array is sorted!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-950/30 dark:to-yellow-950/30 p-4 rounded-xl border-2 border-amber-300 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
              💡 Key Insight
            </h4>
            <div className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
              <p>• <strong>Greedy approach:</strong> Place elements in correct positions as we encounter them</p>
              <p>• <strong>Skip what's right:</strong> 0s on left and 1s on right are already sorted</p>
              <p>• <strong>Swap what's wrong:</strong> Only swap when 1 is on left and 0 is on right</p>
              <p>• <strong>Single pass:</strong> Each element checked at most once = O(n) time</p>
            </div>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 p-4 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Time</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Single pass</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(1)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">In-place</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <ArrowUpDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Two-Pointer Sorting: Visual Animation
          </CardTitle>
          <CardDescription>Watch the array get sorted using two pointers from both ends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-indigo-300 dark:border-indigo-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-indigo-800 dark:text-indigo-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-indigo-800 dark:text-indigo-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-indigo-800 dark:text-indigo-200">Fast</span>
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
                    className="border-indigo-300 dark:border-indigo-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg border border-indigo-300 dark:border-indigo-700">
                    <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 dark:border-indigo-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">sortZerosOnes.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
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
                          : ''
                      }`}
                    >
                      {/* Line Number */}
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-amber-600 dark:text-amber-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      {/* Code with inline values */}
                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-indigo-600 dark:text-indigo-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">left:</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{left}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">right:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{right}</span>
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
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                steps[currentStep].action === 'done'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-400 dark:border-indigo-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].action === 'done' ? 'bg-green-500' : 'bg-indigo-600'}`}>
                      {steps[currentStep].action === 'done' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <ArrowUpDown className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].action === 'done' ? 'text-green-900 dark:text-green-100' : 'text-indigo-900 dark:text-indigo-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].action === 'done' ? 'text-green-800 dark:text-green-200' : 'text-indigo-800 dark:text-indigo-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${steps[currentStep].action === 'done' ? 'border-green-300 dark:border-green-700' : 'border-indigo-300 dark:border-indigo-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">left:</span>
                      <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">right:</span>
                      <span className="text-base font-bold text-purple-600 dark:text-purple-400">{steps[currentStep].right}</span>
                    </div>
                    {steps[currentStep].left < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[left]:</span>
                        <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">{arrayState[steps[currentStep].left]}</span>
                      </div>
                    )}
                    {steps[currentStep].right < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-amber-200 dark:border-amber-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[right]:</span>
                        <span className="text-base font-bold text-amber-600 dark:text-amber-400">{arrayState[steps[currentStep].right]}</span>
                      </div>
                    )}
                    {steps[currentStep].swapIndices.length > 0 && (
                      <div className={`flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-orange-200 dark:border-orange-800`}>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">swapping:</span>
                        <span className="text-base font-bold text-orange-600 dark:text-orange-400">[{steps[currentStep].swapIndices.join(', ')}]</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-3">Array State:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {(() => {
                  // During swap animation, show the array state BEFORE the swap
                  // This way the numbers don't change, the boxes move with their original values
                  if (steps[currentStep].action === 'swap' && currentStep > 0) {
                    // Look backwards to find the array state before swap
                    for (let i = currentStep - 1; i >= 0; i--) {
                      if (steps[i].action !== 'swap') {
                        return steps[i].array;
                      }
                    }
                  }
                  return arrayState;
                })().map((val, idx) => {
                  const isLeft = idx === left && currentStep > 0;
                  const isRight = idx === right && currentStep > 0;
                  const isSwapping = steps[currentStep].swapIndices.includes(idx);

                  return (
                    <div key={`${idx}-${val}`} className="relative">
                      {/* Left Pointer */}
                      {isLeft && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                          <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-1 rounded-full whitespace-nowrap animate-bounce">
                              ← LEFT
                            </span>
                            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400"></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Right Pointer */}
                      {isRight && (
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                          <div className="flex flex-col items-center">
                            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-purple-600 dark:border-b-purple-400"></div>
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/60 px-2 py-1 rounded-full whitespace-nowrap animate-bounce">
                              RIGHT →
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div
                        className={`relative w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl shadow-lg transition-all duration-300 ${
                          (isLeft || isRight) && left <= right
                            ? 'bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-800 dark:to-amber-800 border-4 border-orange-500 dark:border-orange-400 shadow-2xl shadow-orange-500/60'
                            : val === 0
                            ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-100'
                            : 'bg-orange-100 dark:bg-orange-900 border-2 border-orange-400 dark:border-orange-600 text-orange-900 dark:text-orange-100'
                        }`}
                        style={{
                          animation: steps[currentStep].action === 'swap' && left === idx 
                            ? 'swapLeftToRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                            : steps[currentStep].action === 'swap' && right === idx 
                            ? 'swapRightToLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                            : 'none',
                          // @ts-ignore - CSS variable
                          '--swap-distance': `${(right - left) * 72}px`,
                          zIndex: steps[currentStep].action === 'swap' && (left === idx || right === idx) ? 100 : 1,
                          filter: steps[currentStep].action === 'swap' && (left === idx || right === idx) ? 'brightness(1.15) drop-shadow(0 10px 20px rgba(251, 146, 60, 0.4))' : 'brightness(1)'
                        }}
                      >
                        {val}
                        
                        {/* Swap Motion Trail */}
                        {steps[currentStep].action === 'swap' && (left === idx || right === idx) && (
                          <>
                            <div className="absolute inset-0 bg-gradient-radial from-orange-400/30 to-transparent rounded-lg"></div>
                            <div className="absolute -inset-2 border-2 border-orange-400/40 rounded-lg animate-pulse"></div>
                          </>
                        )}
                      </div>
                      
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        [{idx}]
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Result Display */}
            {steps[currentStep].action === 'done' && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 animate-bounce" />
                  <div>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">Array Sorted Successfully!</p>
                    <p className="text-sm text-green-700 dark:text-green-300">All 0s before all 1s using O(n) time, O(1) space</p>
                  </div>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 border-2 border-blue-400 dark:border-blue-600 rounded flex items-center justify-center font-bold text-blue-900 dark:text-blue-100">0</div>
                <span className="text-slate-700 dark:text-slate-300">Zero</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900 border-2 border-orange-400 dark:border-orange-600 rounded flex items-center justify-center font-bold text-orange-900 dark:text-orange-100">1</div>
                <span className="text-slate-700 dark:text-slate-300">One</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Algorithm Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpDown className="w-6 h-6 text-indigo-600" />
            The Two-Pointer Approach
          </CardTitle>
          <CardDescription>Understanding the sorting strategy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Initialize two pointers</strong>
                <p className="text-sm text-muted-foreground">left = 0 (start), right = n-1 (end)</p>
              </li>
              <li>
                <strong>If left element is 0</strong>
                <p className="text-sm text-muted-foreground">It's already in correct position, move left++</p>
              </li>
              <li>
                <strong>If right element is 1</strong>
                <p className="text-sm text-muted-foreground">It's already in correct position, move right--</p>
              </li>
              <li>
                <strong>Otherwise swap</strong>
                <p className="text-sm text-muted-foreground">Left has 1 and right has 0, swap them and move both pointers</p>
              </li>
              <li>
                <strong>Repeat until left ≥ right</strong>
                <p className="text-sm text-muted-foreground">Array is sorted when pointers meet or cross</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Sort 0s and 1s"
            description="Efficient two-pointer solution"
            language="javascript"
            colorTheme="blue"
            icon={ArrowUpDown}
            code={`function sortZerosOnes(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // If left element is 0, move left pointer
    if (arr[left] === 0) {
      left++;
    }
    // If right element is 1, move right pointer
    else if (arr[right] === 1) {
      right--;
    }
    // Otherwise swap elements
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  
  return arr;
}

// Test it
console.log(sortZerosOnes([0,1,1,0,1,0,0,1])); // [0,0,0,0,1,1,1,1]
console.log(sortZerosOnes([1,1,1,0,0,0]));     // [0,0,0,1,1,1]
console.log(sortZerosOnes([0,1]));             // [0,1]`}
          />

          <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Approach Works
            </h4>
            <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
              <li>• Works from <strong>both ends simultaneously</strong></li>
              <li>• Only swaps when necessary (left=1, right=0)</li>
              <li>• Skips elements already in correct position</li>
              <li>• Single pass through array = <strong>O(n) time</strong></li>
              <li>• No extra space needed = <strong>O(1) space</strong></li>
              <li>• Foundation for Dutch National Flag problem (3 colors)</li>
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
              <h4 className="font-semibold mb-1">1. Already Sorted</h4>
              <p className="text-sm text-muted-foreground">If array is already sorted, algorithm completes in O(n) by skipping swaps</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                sortZerosOnes([0,0,0,1,1,1]) // No swaps needed
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Reverse Sorted</h4>
              <p className="text-sm text-muted-foreground">Worst case but still O(n), each pair needs swap</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                sortZerosOnes([1,1,1,0,0,0]) // Maximum swaps
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. All Same Elements</h4>
              <p className="text-sm text-muted-foreground">Only one pointer moves, no swaps</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                sortZerosOnes([0,0,0,0]) // left moves to end
                sortZerosOnes([1,1,1,1]) // right moves to start
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Two Elements</h4>
              <p className="text-sm text-muted-foreground">Minimum size array</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                sortZerosOnes([1,0]) // One swap → [0,1]
                sortZerosOnes([0,1]) // No swap needed
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Related Problems
          </CardTitle>
          <CardDescription>Similar challenges to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">1. Sort Colors (Dutch National Flag)</p>
              <p className="text-sm text-muted-foreground">Sort array of 0s, 1s, and 2s - extends this approach</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Partition Array</p>
              <p className="text-sm text-muted-foreground">Partition array around a pivot (QuickSort partition)</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. Segregate Even and Odd</p>
              <p className="text-sm text-muted-foreground">Similar two-pointer technique for even/odd numbers</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Move Negatives to One Side</p>
              <p className="text-sm text-muted-foreground">Partition negative and positive numbers</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
            <CheckCircle className="w-6 h-6" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
              <span>Use two pointers (left at start, right at end) to sort in-place</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
              <span>Skip elements already in correct position (left=0, right=1)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
              <span>Swap only when left=1 and right=0, then move both pointers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
              <span>Optimal solution: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
              <span>Foundation for Dutch National Flag problem (sorting 3 colors)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
