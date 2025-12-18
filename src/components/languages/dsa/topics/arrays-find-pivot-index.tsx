'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, Scale, ArrowRight, TrendingUp } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FindPivotIndex() {
  const nums = [1, 7, 3, 6, 5, 6];
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      index: -1,
      leftSum: 0,
      rightSum: 0,
      totalSum: 0,
      currentLine: 2,
      description: '📋 Step 1: Calculate total sum of array [1,7,3,6,5,6]',
      action: 'init',
      highlighted: []
    },
    {
      step: 2,
      index: -1,
      leftSum: 0,
      rightSum: 0,
      totalSum: 28,
      currentLine: 2,
      description: '✓ Total sum = 1+7+3+6+5+6 = 28. Initialize leftSum = 0.',
      action: 'init',
      highlighted: []
    },
    {
      step: 3,
      index: 0,
      leftSum: 0,
      rightSum: 0,
      totalSum: 28,
      currentLine: 5,
      description: '🔄 Loop starts: i = 0, checking index 0 (value = 1)',
      action: 'loop-start',
      highlighted: [0]
    },
    {
      step: 4,
      index: 0,
      leftSum: 0,
      rightSum: 27,
      totalSum: 28,
      currentLine: 6,
      description: '📊 Calculate rightSum: totalSum(28) - leftSum(0) - nums[0](1) = 27',
      action: 'calculate',
      highlighted: [0]
    },
    {
      step: 5,
      index: 0,
      leftSum: 0,
      rightSum: 27,
      totalSum: 28,
      currentLine: 8,
      description: '❌ Check: leftSum(0) === rightSum(27)? NO. Not balanced.',
      action: 'check',
      highlighted: [0]
    },
    {
      step: 6,
      index: 0,
      leftSum: 1,
      rightSum: 27,
      totalSum: 28,
      currentLine: 12,
      description: '➕ Update leftSum: leftSum = 0 + nums[0](1) = 1',
      action: 'update',
      highlighted: [0]
    },
    {
      step: 7,
      index: 1,
      leftSum: 1,
      rightSum: 27,
      totalSum: 28,
      currentLine: 5,
      description: '🔄 Next iteration: i = 1, checking index 1 (value = 7)',
      action: 'loop-start',
      highlighted: [1]
    },
    {
      step: 8,
      index: 1,
      leftSum: 1,
      rightSum: 20,
      totalSum: 28,
      currentLine: 6,
      description: '📊 Calculate rightSum: totalSum(28) - leftSum(1) - nums[1](7) = 20',
      action: 'calculate',
      highlighted: [1]
    },
    {
      step: 9,
      index: 1,
      leftSum: 1,
      rightSum: 20,
      totalSum: 28,
      currentLine: 8,
      description: '❌ Check: leftSum(1) === rightSum(20)? NO. Not balanced.',
      action: 'check',
      highlighted: [1]
    },
    {
      step: 10,
      index: 1,
      leftSum: 8,
      rightSum: 20,
      totalSum: 28,
      currentLine: 12,
      description: '➕ Update leftSum: leftSum = 1 + nums[1](7) = 8',
      action: 'update',
      highlighted: [1]
    },
    {
      step: 11,
      index: 2,
      leftSum: 8,
      rightSum: 20,
      totalSum: 28,
      currentLine: 5,
      description: '🔄 Next iteration: i = 2, checking index 2 (value = 3)',
      action: 'loop-start',
      highlighted: [2]
    },
    {
      step: 12,
      index: 2,
      leftSum: 8,
      rightSum: 17,
      totalSum: 28,
      currentLine: 6,
      description: '📊 Calculate rightSum: totalSum(28) - leftSum(8) - nums[2](3) = 17',
      action: 'calculate',
      highlighted: [2]
    },
    {
      step: 13,
      index: 2,
      leftSum: 8,
      rightSum: 17,
      totalSum: 28,
      currentLine: 8,
      description: '❌ Check: leftSum(8) === rightSum(17)? NO. Not balanced.',
      action: 'check',
      highlighted: [2]
    },
    {
      step: 14,
      index: 2,
      leftSum: 11,
      rightSum: 17,
      totalSum: 28,
      currentLine: 12,
      description: '➕ Update leftSum: leftSum = 8 + nums[2](3) = 11',
      action: 'update',
      highlighted: [2]
    },
    {
      step: 15,
      index: 3,
      leftSum: 11,
      rightSum: 17,
      totalSum: 28,
      currentLine: 5,
      description: '🔄 Next iteration: i = 3, checking index 3 (value = 6)',
      action: 'loop-start',
      highlighted: [3]
    },
    {
      step: 16,
      index: 3,
      leftSum: 11,
      rightSum: 11,
      totalSum: 28,
      currentLine: 6,
      description: '📊 Calculate rightSum: totalSum(28) - leftSum(11) - nums[3](6) = 11',
      action: 'calculate',
      highlighted: [3]
    },
    {
      step: 17,
      index: 3,
      leftSum: 11,
      rightSum: 11,
      totalSum: 28,
      currentLine: 8,
      description: '✅ Check: leftSum(11) === rightSum(11)? YES! Balanced! 🎯',
      action: 'found',
      highlighted: [3]
    },
    {
      step: 18,
      index: 3,
      leftSum: 11,
      rightSum: 11,
      totalSum: 28,
      currentLine: 9,
      description: '🎯 Return i = 3 as the pivot index. Left side sum equals right side sum!',
      action: 'result',
      highlighted: [3]
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function pivotIndex(nums) {', active: false, indent: 0 },
      { line: 2, code: '  const totalSum = nums.reduce((a,b) => a + b, 0);', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `totalSum=${stepData.totalSum}` : '' },
      { line: 3, code: '  let leftSum = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `leftSum=0` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  for (let i = 0; i < nums.length; i++) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine === 5 && stepData.index >= 0 ? `i=${stepData.index}` : '' },
      { line: 6, code: '    const rightSum = totalSum - leftSum - nums[i];', active: stepData.currentLine === 6, indent: 2, values: stepData.currentLine === 6 ? `rightSum=${stepData.rightSum}` : '' },
      { line: 7, code: '    ', active: false, indent: 2 },
      { line: 8, code: '    if (leftSum === rightSum) {', active: stepData.currentLine === 8 || stepData.currentLine === 9, indent: 2, values: stepData.currentLine >= 8 ? `${stepData.leftSum} === ${stepData.rightSum}?` : '' },
      { line: 9, code: '      return i;', active: stepData.currentLine === 9, indent: 3, values: stepData.action === 'result' ? `return ${stepData.index}` : '' },
      { line: 10, code: '    }', active: false, indent: 2 },
      { line: 11, code: '    ', active: false, indent: 2 },
      { line: 12, code: '    leftSum += nums[i];', active: stepData.currentLine === 12, indent: 2, values: stepData.currentLine === 12 ? `leftSum+=${stepData.index >= 0 ? nums[stepData.index] : ''}` : '' },
      { line: 13, code: '  }', active: false, indent: 1 },
      { line: 14, code: '  ', active: false, indent: 1 },
      { line: 15, code: '  return -1;', active: false, indent: 1 },
      { line: 16, code: '}', active: false, indent: 0 },
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
        icon={Scale}
        category="DSA · Arrays"
        title="Find Pivot Index"
        description="Find the pivot index where the sum of elements on the left equals the sum of elements on the right."
        colorTheme="emerald"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Easy', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              What is a Pivot Index?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                The <strong className="text-emerald-600 dark:text-emerald-400">pivot index</strong> is a position where the sum of all numbers to the <strong>left</strong> equals the sum of all numbers to the <strong>right</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Array:</span>
                      <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">[1, 7, 3, 6, 5, 6]</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Pivot Index:</span>
                    <div className="font-mono text-lg font-bold text-green-700 dark:text-green-300">3</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Left sum = Right sum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Balance Comparison */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Visual Balance at Different Indices
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Let's check different positions to find where left and right sums are equal:
            </p>
            
            <div className="space-y-4">
              {/* Index 0 - Not balanced */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-red-700 dark:text-red-300">Index 0: [1] | 7, 3, 6, 5, 6</span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded">Not balanced ✗</span>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex gap-1">
                        <div className="text-xs text-slate-500">Left:</div>
                        <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">[]</div>
                      </div>
                      <div className="px-3 py-1 bg-red-200 dark:bg-red-800 rounded font-mono text-sm font-bold border-2 border-red-500">1</div>
                      <div className="flex gap-1">
                        <div className="text-xs text-slate-500">Right:</div>
                        <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">[7,3,6,5,6]</div>
                      </div>
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400">
                      leftSum: <strong>0</strong> ≠ rightSum: <strong>27</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Index 3 - Balanced! */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Index 3: 1, 7, 3 | [6] | 5, 6</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded font-bold">Balanced! ✓</span>
                    </div>
                    <div className="flex gap-4 mb-2 items-center">
                      <div className="flex gap-1">
                        <div className="text-xs text-slate-500">Left:</div>
                        <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">[1,7,3]</div>
                      </div>
                      <div className="px-3 py-1 bg-green-200 dark:bg-green-800 rounded font-mono text-sm font-bold border-2 border-green-500 scale-110">6</div>
                      <div className="flex gap-1">
                        <div className="text-xs text-slate-500">Right:</div>
                        <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">[5,6]</div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      leftSum: <strong>11</strong> = rightSum: <strong>11</strong> ✓ This is the answer!
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Balance Scale */}
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
                <div className="text-center mb-3">
                  <Scale className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-emerald-900 dark:text-emerald-100">Perfect Balance!</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded border border-emerald-300">
                    <div className="text-xs text-slate-500 mb-1">Left Side</div>
                    <div className="font-mono text-lg font-bold text-emerald-700 dark:text-emerald-300">1+7+3 = 11</div>
                  </div>
                  <div className="text-2xl text-emerald-600">⚖️</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded border border-emerald-300">
                    <div className="text-xs text-slate-500 mb-1">Right Side</div>
                    <div className="font-mono text-lg font-bold text-emerald-700 dark:text-emerald-300">5+6 = 11</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Visual Flow */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Calculate Total Sum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Sum all elements first:</div>
                    <div className="flex items-center gap-2">
                      <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">1 + 7 + 3 + 6 + 5 + 6 = </div>
                      <div className="px-3 py-1 bg-emerald-200 dark:bg-emerald-800 rounded font-mono font-bold text-emerald-700 dark:text-emerald-300">28</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Iterate Through Each Index</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">For each position, calculate:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-24">leftSum:</div>
                        <div className="text-xs text-slate-700 dark:text-slate-300">Sum of all elements before current index</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-24">rightSum:</div>
                        <div className="text-xs text-slate-700 dark:text-slate-300">totalSum - leftSum - current element</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Check Balance</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">At each position, check if:</div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-sm">leftSum</div>
                      <div className="text-lg">=</div>
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-sm">rightSum</div>
                      <div className="text-xs text-green-600 dark:text-green-400">→ Found pivot!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Update Left Sum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">If not balanced, add current element to leftSum:</div>
                    <div className="flex items-center gap-2">
                      <div className="font-mono text-sm text-slate-700 dark:text-slate-300">leftSum += nums[i]</div>
                      <div className="text-xs text-slate-400">→ Move to next index</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>The <strong>pivot element itself</strong> is not included in left or right sums</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>If <strong>no pivot exists</strong>, return -1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>At index 0, leftSum = 0 (no elements on left)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>At last index, rightSum = 0 (no elements on right)</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the algorithm finds the pivot index</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
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
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
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
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
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
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">pivotIndex.js</span>
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
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
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
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">i (index):</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].index}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">leftSum:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].leftSum}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">rightSum:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].rightSum}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">totalSum:</span>
                        <span className="font-semibold text-amber-600 dark:text-amber-400">{steps[currentStep].totalSum}</span>
                      </div>
                      {steps[currentStep].index >= 0 && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">nums[i]:</span>
                          <span className="font-semibold text-teal-600 dark:text-teal-400">{nums[steps[currentStep].index]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-700 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400">Action:</span>
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded font-medium">
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

          {/* Current Step Description */}
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
                      {steps[currentStep].action === 'calculate' && '📊 Calculating'}
                      {steps[currentStep].action === 'check' && '🔍 Checking Balance'}
                      {steps[currentStep].action === 'update' && '➕ Updating Sum'}
                      {steps[currentStep].action === 'found' && '✅ Pivot Found!'}
                      {steps[currentStep].action === 'result' && '🎯 Return Result'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Array Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Array Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  {currentStep > 0 && (
                    <>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-700 rounded text-blue-700 dark:text-blue-300 font-semibold">
                        leftSum = {steps[currentStep].leftSum}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 rounded text-purple-700 dark:text-purple-300 font-semibold">
                        rightSum = {steps[currentStep].rightSum}
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {nums.map((val, idx) => {
                    const isCurrent = steps[currentStep].index === idx;
                    const isPivot = steps[currentStep].action === 'found' && steps[currentStep].index === idx;
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Value Box */}
                        <div
                          className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                            isPivot
                              ? 'bg-green-200 dark:bg-green-800 border-green-500 text-green-900 dark:text-green-100 scale-125 ring-4 ring-green-300 animate-pulse'
                              : isCurrent
                              ? 'bg-emerald-200 dark:bg-emerald-800 border-emerald-500 text-emerald-900 dark:text-emerald-100 scale-110'
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600 opacity-60'
                          }`}
                        >
                          {val}
                        </div>
                        
                        {/* Index */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                        {/* Current Index Indicator */}
                        {isCurrent && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-2.5 py-1 rounded border border-emerald-500 shadow-md">
                              Checking
                            </div>
                            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-emerald-500"></div>
                          </div>
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
      <Card className="border-emerald-200 dark:border-emerald-800">
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
                We iterate through the array once to calculate total sum O(n), then iterate once more to find pivot O(n). Total: O(n) + O(n) = O(n).
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We only use a few variables (leftSum, rightSum, totalSum) regardless of input size. No extra data structures needed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function pivotIndex(nums) {
  // Calculate total sum
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  
  // Check each index
  for (let i = 0; i < nums.length; i++) {
    // Calculate right sum
    const rightSum = totalSum - leftSum - nums[i];
    
    // Check if balanced
    if (leftSum === rightSum) {
      return i;  // Found pivot!
    }
    
    // Add current to left sum
    leftSum += nums[i];
  }
  
  return -1;  // No pivot found
}`}
      />
    </div>
  );
}
