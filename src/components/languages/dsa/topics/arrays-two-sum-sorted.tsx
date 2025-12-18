'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Plus, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function TwoSumSorted() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [arrayState] = useState([2, 7, 11, 15, 20]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(4);
  const [currentSum, setCurrentSum] = useState(0);
  const [found, setFound] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const target = 18;
  
  const steps = [
    // === INITIALIZATION (3 steps) ===
    { step: 1, left: 0, right: 4, sum: 0, currentLine: 2,
      description: '📋 Initialize: Set left = 0. Left pointer starts at the beginning of the sorted array.',
      action: 'init', comparison: null },
    { step: 2, left: 0, right: 4, sum: 0, currentLine: 3,
      description: '📋 Initialize: Set right = 4 (arr.length - 1). Right pointer starts at the end.',
      action: 'init', comparison: null },
    { step: 3, left: 0, right: 4, sum: 0, currentLine: 4,
      description: '🔄 While Loop: Begin while loop. Will continue as long as left < right.',
      action: 'loop-start', comparison: null },
    
    // === ITERATION 1: left=0, right=4, sum=22 (TOO LARGE) ===
    { step: 4, left: 0, right: 4, sum: 0, currentLine: 4,
      description: '✅ Loop Check: Is left(0) < right(4)? Yes! Pointers haven\'t crossed, continue.',
      action: 'loop-check', comparison: null },
    { step: 5, left: 0, right: 4, sum: 22, currentLine: 5,
      description: '➕ Calculate Sum: sum = arr[0] + arr[4] = 2 + 20 = 22.',
      action: 'calculating', comparison: null },
    { step: 6, left: 0, right: 4, sum: 22, currentLine: 6,
      description: '❓ Check Condition: Is sum(22) === target(18)? No.',
      action: 'check-equal', comparison: 'not-equal' },
    { step: 7, left: 0, right: 4, sum: 22, currentLine: 7,
      description: '❓ Check Condition: Is sum(22) < target(18)? No.',
      action: 'check-less', comparison: 'not-less' },
    { step: 8, left: 0, right: 4, sum: 22, currentLine: 8,
      description: '⚖️ Comparison Result: sum(22) > target(18). Sum is TOO LARGE!',
      action: 'comparing', comparison: 'greater' },
    { step: 9, left: 0, right: 4, sum: 22, currentLine: 9,
      description: '⬅️ Decision: Sum too large → Decrease right pointer. right-- to get smaller sum.',
      action: 'decision-decrease', comparison: 'greater' },
    
    // === ITERATION 2: left=0, right=3, sum=17 (TOO SMALL) ===
    { step: 10, left: 0, right: 3, sum: 0, currentLine: 4,
      description: '✅ Loop Check: right updated to 3. Is left(0) < right(3)? Yes! Continue.',
      action: 'loop-check', comparison: null },
    { step: 11, left: 0, right: 3, sum: 17, currentLine: 5,
      description: '➕ Calculate Sum: sum = arr[0] + arr[3] = 2 + 15 = 17.',
      action: 'calculating', comparison: null },
    { step: 12, left: 0, right: 3, sum: 17, currentLine: 6,
      description: '❓ Check Condition: Is sum(17) === target(18)? No.',
      action: 'check-equal', comparison: 'not-equal' },
    { step: 13, left: 0, right: 3, sum: 17, currentLine: 7,
      description: '❓ Check Condition: Is sum(17) < target(18)? Yes!',
      action: 'check-less', comparison: 'less' },
    { step: 14, left: 0, right: 3, sum: 17, currentLine: 8,
      description: '⚖️ Comparison Result: sum(17) < target(18). Sum is TOO SMALL!',
      action: 'comparing', comparison: 'less' },
    { step: 15, left: 0, right: 3, sum: 17, currentLine: 8,
      description: '➡️ Decision: Sum too small → Increase left pointer. left++ to get larger sum.',
      action: 'decision-increase', comparison: 'less' },
    
    // === ITERATION 3: left=1, right=3, sum=22 (TOO LARGE) ===
    { step: 16, left: 1, right: 3, sum: 0, currentLine: 4,
      description: '✅ Loop Check: left updated to 1. Is left(1) < right(3)? Yes! Continue.',
      action: 'loop-check', comparison: null },
    { step: 17, left: 1, right: 3, sum: 22, currentLine: 5,
      description: '➕ Calculate Sum: sum = arr[1] + arr[3] = 7 + 15 = 22.',
      action: 'calculating', comparison: null },
    { step: 18, left: 1, right: 3, sum: 22, currentLine: 6,
      description: '❓ Check Condition: Is sum(22) === target(18)? No.',
      action: 'check-equal', comparison: 'not-equal' },
    { step: 19, left: 1, right: 3, sum: 22, currentLine: 7,
      description: '❓ Check Condition: Is sum(22) < target(18)? No.',
      action: 'check-less', comparison: 'not-less' },
    { step: 20, left: 1, right: 3, sum: 22, currentLine: 8,
      description: '⚖️ Comparison Result: sum(22) > target(18). Still TOO LARGE!',
      action: 'comparing', comparison: 'greater' },
    { step: 21, left: 1, right: 3, sum: 22, currentLine: 9,
      description: '⬅️ Decision: Sum too large → Decrease right pointer again. right-- → 2.',
      action: 'decision-decrease', comparison: 'greater' },
    
    // === ITERATION 4: left=1, right=2, sum=18 (FOUND!) ===
    { step: 22, left: 1, right: 2, sum: 0, currentLine: 4,
      description: '✅ Loop Check: right updated to 2. Is left(1) < right(2)? Yes! Continue.',
      action: 'loop-check', comparison: null },
    { step: 23, left: 1, right: 2, sum: 18, currentLine: 5,
      description: '➕ Calculate Sum: sum = arr[1] + arr[2] = 7 + 11 = 18.',
      action: 'calculating', comparison: null },
    { step: 24, left: 1, right: 2, sum: 18, currentLine: 6,
      description: '🎯 Perfect Match: Is sum(18) === target(18)? YES! Found the solution!',
      action: 'check-equal', comparison: 'equal' },
    { step: 25, left: 1, right: 2, sum: 18, currentLine: 7,
      description: '✅ Return Solution: arr[1]=7 + arr[2]=11 = 18. Return indices [1, 2]!',
      action: 'found', comparison: 'equal' },
    { step: 26, left: 1, right: 2, sum: 18, currentLine: 7,
      description: '🎉 Success: Found pair that sums to target in O(n) time, O(1) space. Algorithm complete!',
      action: 'done', comparison: 'equal' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = arrayState;
    return [
      { line: 1, code: 'function twoSum(arr, target) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let left = 0;`, active: stepData.currentLine === 2, indent: 1, values: `left = ${stepData.left}` },
      { line: 3, code: `  let right = arr.length - 1;`, active: stepData.currentLine === 3, indent: 1, values: `right = ${stepData.right}` },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  while (left < right) {`, active: stepData.currentLine === 5, indent: 1, values: `${stepData.left} < ${stepData.right}` },
      { line: 6, code: `    const sum = arr[left] + arr[right];`, active: stepData.currentLine === 6, indent: 2, values: stepData.sum > 0 ? `${arr[stepData.left]} + ${arr[stepData.right]} = ${stepData.sum}` : '' },
      { line: 7, code: `    `, active: false, indent: 2 },
      { line: 8, code: `    if (sum === target) {`, active: stepData.currentLine === 7, indent: 2, values: stepData.comparison === 'equal' ? `${stepData.sum} == ${target} ✓` : '' },
      { line: 9, code: `      return [left, right];`, active: stepData.currentLine === 7 && stepData.action === 'found', indent: 3, values: stepData.action === 'found' ? `[${stepData.left}, ${stepData.right}]` : '' },
      { line: 10, code: `    } else if (sum < target) {`, active: stepData.currentLine === 6 && stepData.comparison === 'less', indent: 2, values: stepData.comparison === 'less' ? `${stepData.sum} < ${target}` : '' },
      { line: 11, code: `      left++;  // Need larger sum`, active: stepData.action === 'too-small', indent: 3, values: stepData.action === 'too-small' ? `left → ${stepData.left + 1}` : '' },
      { line: 12, code: `    } else {`, active: stepData.currentLine === 6 && stepData.comparison === 'greater', indent: 2, values: stepData.comparison === 'greater' ? `${stepData.sum} > ${target}` : '' },
      { line: 13, code: `      right--;  // Need smaller sum`, active: stepData.action === 'too-large', indent: 3, values: stepData.action === 'too-large' ? `right → ${stepData.right - 1}` : '' },
      { line: 14, code: `    }`, active: false, indent: 2 },
      { line: 15, code: `  }`, active: false, indent: 1 },
      { line: 16, code: `  `, active: false, indent: 1 },
      { line: 17, code: `  return [];  // Not found`, active: stepData.currentLine === 17, indent: 1 },
      { line: 18, code: `}`, active: stepData.currentLine === 18, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeft(step.left);
    setRight(step.right);
    setCurrentSum(step.sum);
    setFound(step.action === 'found');
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
      <PageHeader
        icon={Plus}
        category="DSA · Two Pointers"
        title="Two Sum (Sorted Array)"
        description="Master the two-pointer technique to find two numbers that add up to a target efficiently"
        colorTheme="blue"
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
                <p className="font-medium">Two-Pointer Technique</p>
                <p className="text-sm text-muted-foreground">Opposite ends converge inward</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Binary Search Alternative</p>
                <p className="text-sm text-muted-foreground">Better than nested loops</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Sorted Array Property</p>
                <p className="text-sm text-muted-foreground">Leverage sorting for optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Classic Interview Question</p>
                <p className="text-sm text-muted-foreground">Very common in coding tests</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding the challenge</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given a <strong>sorted array</strong> of integers and a target value, find two numbers that add up to the target. Return the <strong>indices</strong> of these two numbers.
          </p>

          {/* Visual Problem */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5" /> Find Two Numbers That Sum to Target
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-3">Array & Target:</p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  {[2, 7, 11, 15, 20].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded flex items-center justify-center font-bold text-lg border-2 ${
                        idx === 1 || idx === 2
                          ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100 ring-4 ring-green-400'
                          : 'bg-blue-100 dark:bg-blue-900 border-blue-400 text-blue-900 dark:text-blue-100'
                      }`}>
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 rounded-lg">
                    <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Target = 18</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-600">
                  <p className="text-sm text-center">
                    <span className="font-bold text-green-700 dark:text-green-300">7 + 11 = 18 ✓</span>
                  </p>
                  <p className="text-xs text-center text-green-600 dark:text-green-400 mt-1">
                    Return indices [1, 2]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Pointer Strategy */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">👈👉</span> Two-Pointer Approach
            </h4>
            
            <div className="space-y-4">
              {/* Visual pointers */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[2, 7, 11, 15, 20].map((num, idx) => (
                    <div key={idx} className="relative">
                      {idx === 0 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">LEFT</div>
                      )}
                      {idx === 4 && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">RIGHT</div>
                      )}
                      <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                        idx === 0 || idx === 4
                          ? 'bg-amber-100 dark:bg-amber-900 border-amber-500 text-amber-900 dark:text-amber-100'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                      }`}>
                        {num}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-cyan-800 dark:text-cyan-200">
                  <p>• <strong>Start:</strong> left at beginning, right at end</p>
                  <p>• <strong>Sum = arr[left] + arr[right]</strong></p>
                  <p>• If sum &lt; target: move left → (need bigger sum)</p>
                  <p>• If sum &gt; target: move right ← (need smaller sum)</p>
                  <p>• If sum == target: Found it! ✓</p>
                </div>
              </div>

              {/* Example steps */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-3">Example with target=18:</p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="w-24">left=0, right=4</span>
                    <span>→</span>
                    <span>2+20=22</span>
                    <span className="text-red-600">(&gt;18)</span>
                    <span className="text-red-600">right--</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="w-24">left=0, right=3</span>
                    <span>→</span>
                    <span>2+15=17</span>
                    <span className="text-orange-600">(&lt;18)</span>
                    <span className="text-orange-600">left++</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-500">
                    <span className="w-24">left=1, right=2</span>
                    <span>→</span>
                    <span>7+11=18</span>
                    <span className="text-green-600 font-bold">(==18) ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Sorted Array Helps */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              💡 Why Sorted Array is Key
            </h4>
            <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
              <p>• <strong>Predictable behavior:</strong> Moving left increases sum, moving right decreases sum</p>
              <p>• <strong>No need to check all pairs:</strong> O(n) instead of O(n²)</p>
              <p>• <strong>Greedy decision:</strong> Each move gets us closer to target</p>
              <p>• <strong>Guaranteed to find:</strong> Pointers will meet at solution</p>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two pointers</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            Two-Pointer Algorithm: Visual Animation
          </CardTitle>
          <CardDescription>Watch left and right pointers converge to find the target sum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            {/* Target Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border-2 border-purple-400 dark:border-purple-600">
              <div className="text-center">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-1">Target Sum</p>
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">{target}</p>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-blue-300 dark:border-blue-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-blue-800 dark:text-blue-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-blue-800 dark:text-blue-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-blue-800 dark:text-blue-200">Fast</span>
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
                    className="border-blue-300 dark:border-blue-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg border border-blue-300 dark:border-blue-700">
                    <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 dark:border-blue-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Code Viewer with Variable Values */}
            {currentStep >= 0 && (
              <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">twoSum.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

                {/* Code Lines */}
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
                          <span className="ml-3 text-blue-600 dark:text-blue-400 font-semibold">
                            {lineData.values}
                          </span>
                        )}
                      </code>
                    </div>
                  ))}
                </div>

                {/* Variable State Panel */}
                <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">left:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{left}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">right:</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{right}</span>
                      </div>
                      {currentSum > 0 && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">sum:</span>
                          <span className={`font-semibold ${
                            found ? 'text-green-600 dark:text-green-400' : 'text-purple-600 dark:text-purple-400'
                          }`}>{currentSum}</span>
                        </div>
                      )}
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
                found
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-400 dark:border-blue-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${found ? 'bg-green-500' : 'bg-blue-500'}`}>
                      {found ? <CheckCircle className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${found ? 'text-green-900 dark:text-green-100' : 'text-blue-900 dark:text-blue-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${found ? 'text-green-800 dark:text-green-200' : 'text-blue-800 dark:text-blue-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${found ? 'border-green-300 dark:border-green-700' : 'border-blue-300 dark:border-blue-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-blue-200 dark:border-blue-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">left:</span>
                      <span className="text-base font-bold text-blue-600 dark:text-blue-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">right:</span>
                      <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">{steps[currentStep].right}</span>
                    </div>
                    {steps[currentStep].left < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[left]:</span>
                        <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">{arrayState[steps[currentStep].left]}</span>
                      </div>
                    )}
                    {steps[currentStep].right < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[right]:</span>
                        <span className="text-base font-bold text-purple-600 dark:text-purple-400">{arrayState[steps[currentStep].right]}</span>
                      </div>
                    )}
                    {steps[currentStep].sum > 0 && (
                      <div className={`flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border ${found ? 'border-green-200 dark:border-green-800' : 'border-amber-200 dark:border-amber-800'}`}>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">sum:</span>
                        <span className={`text-base font-bold ${found ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>{steps[currentStep].sum}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">target:</span>
                      <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">{target}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-3">Array & Pointers:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {arrayState.map((num, idx) => (
                  <div key={idx} className="relative">
                    {/* Left Pointer Label */}
                    {idx === left && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            left
                          </span>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600 dark:border-t-blue-400"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Right Pointer Label */}
                    {idx === right && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-indigo-600 dark:border-b-indigo-400"></div>
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            right
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={`relative w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg shadow-sm transition-all duration-700 ${
                        idx === left && idx === right
                          ? 'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 border-4 border-purple-500 dark:border-purple-400 scale-110 shadow-xl'
                          : idx === left
                          ? 'bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 border-4 border-blue-500 dark:border-blue-400 scale-110 shadow-xl shadow-blue-500/50'
                          : idx === right
                          ? 'bg-gradient-to-br from-indigo-200 to-indigo-300 dark:from-indigo-800 dark:to-indigo-700 border-4 border-indigo-500 dark:border-indigo-400 scale-110 shadow-xl shadow-indigo-500/50'
                          : found && (idx === left || idx === right)
                          ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 border-2 border-green-400 dark:border-green-600'
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {num}
                      
                      {/* Found checkmark */}
                      {found && (idx === left || idx === right) && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center animate-bounce">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                      [{idx}]
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Sum Display */}
            {currentSum > 0 && (
              <div className="mt-8 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">arr[{left}]</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{arrayState[left]}</p>
                  </div>
                  <Plus className="w-8 h-8 text-slate-400" />
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">arr[{right}]</p>
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{arrayState[right]}</p>
                  </div>
                  <span className="text-2xl font-bold text-slate-400">=</span>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">sum</p>
                    <p className={`text-3xl font-bold ${
                      found ? 'text-green-600 dark:text-green-400' : 
                      currentSum > target ? 'text-red-600 dark:text-red-400' : 
                      'text-orange-600 dark:text-orange-400'
                    }`}>{currentSum}</p>
                  </div>
                  {found && (
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 animate-bounce" />
                  )}
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-300 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-blue-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">💡 Two-Pointer Strategy</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Start from both ends. If sum is <strong>too large</strong>, move right pointer left (need smaller numbers). If sum is <strong>too small</strong>, move left pointer right (need larger numbers). Array is sorted, so this guarantees we find the solution in <strong>O(n) time</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Algorithm Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-6 h-6 text-blue-600" />
            The Two-Pointer Approach
          </CardTitle>
          <CardDescription>Understanding the algorithm</CardDescription>
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
                <strong>Calculate sum</strong>
                <p className="text-sm text-muted-foreground">sum = arr[left] + arr[right]</p>
              </li>
              <li>
                <strong>If sum equals target</strong>
                <p className="text-sm text-muted-foreground">Found! Return [left, right]</p>
              </li>
              <li>
                <strong>If sum is less than target</strong>
                <p className="text-sm text-muted-foreground">Need larger sum → move left pointer right (left++)</p>
              </li>
              <li>
                <strong>If sum is greater than target</strong>
                <p className="text-sm text-muted-foreground">Need smaller sum → move right pointer left (right--)</p>
              </li>
              <li>
                <strong>Repeat until pointers meet</strong>
                <p className="text-sm text-muted-foreground">If no solution found, return empty array</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Two Sum - Sorted Array"
            description="Optimal two-pointer solution"
            language="javascript"
            colorTheme="blue"
            icon={Plus}
            code={`function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;  // Need larger sum
    } else {
      right--;  // Need smaller sum
    }
  }
  
  return [];  // Not found
}

// Test it
console.log(twoSum([2, 7, 11, 15, 20], 18));  // [1, 2]
console.log(twoSum([1, 2, 3, 4, 6], 6));      // [1, 3]
console.log(twoSum([2, 3, 4], 10));           // []`}
          />

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Array is sorted, so moving pointers intelligently works</li>
              <li>• If sum too large, only way to reduce is move right left</li>
              <li>• If sum too small, only way to increase is move left right</li>
              <li>• Pointers always converge toward solution</li>
              <li>• Time Complexity: O(n) - single pass</li>
              <li>• Space Complexity: O(1) - only two pointers</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Comparison with Hash Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Two Sum: Unsorted Array (Hash Map)
          </CardTitle>
          <CardDescription>Alternative approach for unsorted arrays</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            If the array is <strong>NOT sorted</strong>, we cannot use two pointers. Instead, use a hash map to store values we've seen.
          </p>

          <CodeSnippet
            title="Two Sum - Unsorted Array"
            description="Hash map approach for unsorted arrays"
            language="javascript"
            colorTheme="purple"
            code={`function twoSumUnsorted(arr, target) {
  const map = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(arr[i], i);
  }
  
  return [];
}

// Test it
console.log(twoSumUnsorted([3, 2, 4], 6));      // [1, 2]
console.log(twoSumUnsorted([15, 7, 2, 11], 9)); // [1, 2]`}
          />

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Comparison</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-800 dark:text-purple-200">
              <div>
                <p className="font-semibold mb-1">Two Pointers (Sorted)</p>
                <ul className="space-y-1">
                  <li>• Time: O(n)</li>
                  <li>• Space: O(1)</li>
                  <li>• Requires sorted array</li>
                  <li>• No extra data structure</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Hash Map (Unsorted)</p>
                <ul className="space-y-1">
                  <li>• Time: O(n)</li>
                  <li>• Space: O(n)</li>
                  <li>• Works on any array</li>
                  <li>• Uses hash map</li>
                </ul>
              </div>
            </div>
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
              <h4 className="font-semibold mb-1">1. Two Elements</h4>
              <p className="text-sm text-muted-foreground">Minimum case - only solution is [0, 1]</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                twoSum([1, 2], 3) // [0, 1]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. No Solution</h4>
              <p className="text-sm text-muted-foreground">Target cannot be achieved</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                twoSum([1, 2, 3], 10) // []
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Negative Numbers</h4>
              <p className="text-sm text-muted-foreground">Works with negatives too</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                twoSum([-1, 0, 2, 3], 2) // [1, 2]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Duplicate Values</h4>
              <p className="text-sm text-muted-foreground">Array may have duplicates</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                twoSum([1, 1, 1, 3, 3], 6) // [3, 4]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">5. Target is Zero</h4>
              <p className="text-sm text-muted-foreground">Negative + positive = 0</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                twoSum([-3, -1, 0, 1, 3], 0) // [1, 3]
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Related Problems
          </CardTitle>
          <CardDescription>Similar challenges to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">1. Three Sum</p>
              <p className="text-sm text-muted-foreground">Find three numbers that sum to target (O(n²))</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Two Sum II (Return Values)</p>
              <p className="text-sm text-muted-foreground">Return values instead of indices</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. Container With Most Water</p>
              <p className="text-sm text-muted-foreground">Two pointers to maximize area</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Valid Palindrome</p>
              <p className="text-sm text-muted-foreground">Two pointers from ends converging</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <CheckCircle className="w-6 h-6" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Two-pointer technique: start from both ends, converge inward</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Only works on sorted arrays (leverage sorted property)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Optimal solution: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>For unsorted arrays, use hash map (O(n) time, O(n) space)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Foundation for many two-pointer problems (Three Sum, etc.)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
