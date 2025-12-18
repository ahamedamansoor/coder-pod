'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { TrendingUp, TrendingDown, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FindLargestSmallest() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentLargest, setCurrentLargest] = useState(5);
  const [currentSmallest, setCurrentSmallest] = useState(5);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [comparisonState, setComparisonState] = useState<'checking' | 'larger' | 'smaller' | 'same' | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const arrayData = [5, 2, 9, 1, 7, 3];
  
  const steps = [
    { 
      step: 1, 
      largest: 5, 
      smallest: 5, 
      elementIndex: 0, 
      comparison: null,
      currentLine: 3,
      i: 0,
      description: '📋 Initialize: Set largest = arr[0] = 5. This is our starting point - assume first element is the largest until we find a bigger one.'
    },
    { 
      step: 2, 
      largest: 5, 
      smallest: 5, 
      elementIndex: 0, 
      comparison: null,
      currentLine: 4,
      i: 0,
      description: '📋 Initialize: Set smallest = arr[0] = 5. Similarly, assume first element is the smallest until we find a smaller one.'
    },
    { 
      step: 3, 
      largest: 5, 
      smallest: 5, 
      elementIndex: 0, 
      comparison: null,
      currentLine: 6,
      i: 0,
      description: '🔄 For Loop: Starting loop at i = 1 (not 0) because we already used arr[0] to initialize largest and smallest. Loop condition: i < arr.length (i < 6).'
    },
    { 
      step: 4, 
      largest: 5, 
      smallest: 5, 
      elementIndex: 1, 
      comparison: 'examining',
      currentLine: 6,
      i: 1,
      description: '🔍 Loop Iteration 1: Now at i = 1, examining arr[1] = 2. We will compare this element with both our current largest (5) and smallest (5) values.'
    },
    { 
      step: 5, 
      largest: 5, 
      smallest: 5, 
      elementIndex: 1, 
      comparison: 'checking-larger',
      currentLine: 5,
      i: 1,
      description: '⬆️ Check Largest: Is 2 > 5? No (2 is not greater than 5), so largest remains 5. No update needed.'
    },
    { 
      step: 6, 
      largest: 5, 
      smallest: 2, 
      elementIndex: 1, 
      comparison: 'smaller',
      currentLine: 7,
      i: 1,
      description: '⬇️ Check Smallest: Is 2 < 5? Yes! Found a smaller value. Update smallest from 5 to 2. New smallest = 2.'
    },
    { 
      step: 7, 
      largest: 5, 
      smallest: 2, 
      elementIndex: 2, 
      comparison: 'examining',
      currentLine: 6,
      i: 2,
      description: '🔍 Examining arr[2] = 9. This is the largest number in our array. Let\'s see how the algorithm discovers this.'
    },
    { 
      step: 8, 
      largest: 9, 
      smallest: 2, 
      elementIndex: 2, 
      comparison: 'larger',
      currentLine: 5,
      i: 2,
      description: '⬆️ Check Largest: Is 9 > 5? Yes! Found a new maximum. Update largest from 5 to 9. New largest = 9.'
    },
    { 
      step: 9, 
      largest: 9, 
      smallest: 2, 
      elementIndex: 2, 
      comparison: 'checking-smaller',
      currentLine: 7,
      i: 2,
      description: '⬇️ Check Smallest: Is 9 < 2? No (9 is much larger than 2), so smallest remains 2. No update needed.'
    },
    { 
      step: 10, 
      largest: 9, 
      smallest: 2, 
      elementIndex: 3, 
      comparison: 'examining',
      currentLine: 6,
      i: 3,
      description: '🔍 Examining arr[3] = 1. This is actually the smallest number in our entire array. The algorithm will find it now.'
    },
    { 
      step: 11, 
      largest: 9, 
      smallest: 2, 
      elementIndex: 3, 
      comparison: 'checking-larger',
      currentLine: 5,
      i: 3,
      description: '⬆️ Check Largest: Is 1 > 9? No (1 is much smaller than 9), so largest remains 9. No update needed.'
    },
    { 
      step: 12, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 3, 
      comparison: 'smaller',
      currentLine: 7,
      i: 3,
      description: '⬇️ Check Smallest: Is 1 < 2? Yes! Found an even smaller value. Update smallest from 2 to 1. New smallest = 1.'
    },
    { 
      step: 13, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 4, 
      comparison: 'examining',
      currentLine: 6,
      i: 4,
      description: '🔍 Loop Iteration 4: Now at i = 4, examining arr[4] = 7. Let\'s check if it updates largest or smallest.'
    },
    { 
      step: 14, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 4, 
      comparison: 'checking-larger',
      currentLine: 5,
      i: 4,
      description: '⬆️ Check Largest: Is 7 > 9? No (7 is not greater than 9), so largest remains 9. No update needed.'
    },
    { 
      step: 15, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 4, 
      comparison: 'checking-smaller',
      currentLine: 7,
      i: 4,
      description: '⬇️ Check Smallest: Is 7 < 1? No (7 is greater than 1), so smallest remains 1. No update needed.'
    },
    { 
      step: 16, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 5, 
      comparison: 'examining',
      currentLine: 6,
      i: 5,
      description: '🔍 Loop Iteration 5: Now at i = 5, examining arr[5] = 3. Last element! Let\'s check both conditions.'
    },
    { 
      step: 17, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 5, 
      comparison: 'checking-larger',
      currentLine: 5,
      i: 5,
      description: '⬆️ Check Largest: Is 3 > 9? No (3 is not greater than 9), so largest remains 9. No update needed.'
    },
    { 
      step: 18, 
      largest: 9, 
      smallest: 1, 
      elementIndex: 5, 
      comparison: 'checking-smaller',
      currentLine: 7,
      i: 5,
      description: '⬇️ Check Smallest: Is 3 < 1? No (3 is greater than 1), so smallest remains 1. No update needed.'
    },
    { 
      step: 19, 
      largest: 9, 
      smallest: 1, 
      elementIndex: -1, 
      comparison: null,
      currentLine: 11,
      i: 6,
      description: '🔄 Loop Complete: We have examined all 6 elements. The loop condition (i < arr.length) is now false, so we exit.'
    },
    { 
      step: 20, 
      largest: 9, 
      smallest: 1, 
      elementIndex: -1, 
      comparison: null,
      currentLine: 11,
      i: 6,
      description: '✅ Final Result: largest = 9 (found at index 2), smallest = 1 (found at index 3). Algorithm completed successfully!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = arrayData;
    return [
      { line: 1, code: 'function findMinMax(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  // arr = [${arr.join(', ')}]`, active: false, indent: 1, comment: true },
      { line: 3, code: `  let largest = arr[0];`, active: stepData.currentLine === 3, indent: 1, values: `largest = ${stepData.largest}` },
      { line: 4, code: `  let smallest = arr[0];`, active: stepData.currentLine === 4, indent: 1, values: `smallest = ${stepData.smallest}` },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let i = 1; i < arr.length; i++) {`, active: stepData.currentLine === 6, indent: 1, values: `i = ${stepData.i}` },
      { line: 7, code: `    if (arr[i] > largest) {`, active: stepData.currentLine === 5, indent: 2, values: `${arr[stepData.i]} > ${stepData.largest} = ${stepData.comparison === 'larger' ? '✓' : '✗'}` },
      { line: 8, code: `      largest = arr[i];`, active: stepData.currentLine === 5 && stepData.comparison === 'larger', indent: 3, values: stepData.comparison === 'larger' ? `largest = ${stepData.largest}` : '' },
      { line: 9, code: `    }`, active: false, indent: 2 },
      { line: 10, code: `    if (arr[i] < smallest) {`, active: stepData.currentLine === 7, indent: 2, values: `${arr[stepData.i]} < ${stepData.smallest} = ${stepData.comparison === 'smaller' ? '✓' : '✗'}` },
      { line: 11, code: `      smallest = arr[i];`, active: stepData.currentLine === 7 && stepData.comparison === 'smaller', indent: 3, values: stepData.comparison === 'smaller' ? `smallest = ${stepData.smallest}` : '' },
      { line: 12, code: `    }`, active: false, indent: 2 },
      { line: 13, code: `  }`, active: stepData.currentLine === 9, indent: 1 },
      { line: 14, code: `  `, active: false, indent: 1 },
      { line: 15, code: `  return { largest, smallest };`, active: stepData.currentLine === 11, indent: 1, values: `{ largest: ${stepData.largest}, smallest: ${stepData.smallest} }` },
      { line: 16, code: `}`, active: stepData.currentLine === 12, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentElementIndex(step.elementIndex);
    setComparisonState(step.comparison as any);
    setCurrentLargest(step.largest);
    setCurrentSmallest(step.smallest);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setCurrentLargest(5);
    setCurrentSmallest(5);
    setCurrentElementIndex(0);
    setComparisonState(null);

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
    setCurrentStep(0);
    setCurrentLargest(5);
    setCurrentSmallest(5);
    setCurrentElementIndex(0);
    setComparisonState(null);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Target}
        category="DSA · Arrays"
        title="Find Largest & Smallest Element"
        description="Learn how to find the maximum and minimum values in an array - a fundamental operation in programming"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
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
                <p className="font-medium">Find Maximum Element</p>
                <p className="text-sm text-muted-foreground">Locate the largest value in an array</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Find Minimum Element</p>
                <p className="text-sm text-muted-foreground">Locate the smallest value in an array</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Find Both Together</p>
                <p className="text-sm text-muted-foreground">Optimize by finding both in one pass</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Handle Edge Cases</p>
                <p className="text-sm text-muted-foreground">Deal with empty arrays and single elements</p>
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
          <CardDescription>Understanding what we need to solve</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array of numbers, we need to find the largest (maximum) and smallest (minimum) elements in the array.
          </p>

          {/* Visual Array */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span> Example Array
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
              <div className="flex items-center justify-center gap-3 mb-4">
                {[5, 2, 9, 1, 7, 3].map((num, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 ${
                      num === 9
                        ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                        : num === 1
                        ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}>
                      {num}
                    </div>
                    <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                  </div>
                ))}
              </div>
              
              {/* Labels */}
              <div className="flex items-center justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">Largest: 9</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold text-red-700 dark:text-red-300">Smallest: 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* How to Find */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔍</span> How to Find Them
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">Initialize Variables</h5>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                      Set max = first element, min = first element
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="px-3 py-2 bg-green-100 dark:bg-green-900/30 border border-green-400 rounded">
                    max = <strong>5</strong>
                  </div>
                  <div className="px-3 py-2 bg-red-100 dark:bg-red-900/30 border border-red-400 rounded">
                    min = <strong>5</strong>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">Compare Each Element</h5>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                      For each number: if bigger than max, update max; if smaller than min, update min
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { val: 2, maxUpdate: false, minUpdate: true },
                    { val: 9, maxUpdate: true, minUpdate: false },
                    { val: 1, maxUpdate: false, minUpdate: true },
                    { val: 7, maxUpdate: false, minUpdate: false },
                    { val: 3, maxUpdate: false, minUpdate: false },
                  ].map((item, idx) => (
                    <div key={idx} className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded text-center">
                      <div className="font-bold">{item.val}</div>
                      {item.maxUpdate && <div className="text-green-600 text-[10px]">→ max</div>}
                      {item.minUpdate && <div className="text-red-600 text-[10px]">→ min</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-lg border-2 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-900 dark:text-green-100">Result</h5>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="px-4 py-2 bg-white dark:bg-slate-950 border-2 border-green-500 rounded font-bold">
                        max = <span className="text-green-600">9</span>
                      </div>
                      <div className="px-4 py-2 bg-white dark:bg-slate-950 border-2 border-red-500 rounded font-bold">
                        min = <span className="text-red-600">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-purple-300 dark:border-purple-600">
                <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Time Complexity</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">O(n)</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Check each element once</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-purple-300 dark:border-purple-600">
                <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Space Complexity</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">O(1)</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Only 2 variables needed</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm find the largest and smallest elements step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-purple-300 dark:border-purple-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-purple-800 dark:text-purple-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-purple-800 dark:text-purple-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-purple-800 dark:text-purple-200">Fast</span>
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
                    className="border-purple-300 dark:border-purple-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg border border-purple-300 dark:border-purple-700">
                    <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-purple-300 dark:border-purple-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">findMinMax.js</span>
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
                          : lineData.comment
                          ? 'opacity-50'
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
                          <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">i:</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{steps[currentStep].i}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">largest:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{currentLargest}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">smallest:</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">{currentSmallest}</span>
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
            {currentStep >= 0 && steps[currentStep].description && (
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-400 dark:border-blue-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-blue-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Target className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-blue-900 dark:text-blue-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-blue-800 dark:text-blue-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${currentStep === steps.length - 1 ? 'border-green-300 dark:border-green-700' : 'border-blue-300 dark:border-blue-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">largest:</span>
                      <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{steps[currentStep].largest}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-rose-200 dark:border-rose-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">smallest:</span>
                      <span className="text-base font-bold text-rose-600 dark:text-rose-400">{steps[currentStep].smallest}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">i:</span>
                      <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">{steps[currentStep].i}</span>
                    </div>
                    {steps[currentStep].elementIndex >= 0 && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-amber-200 dark:border-amber-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[{steps[currentStep].i}]:</span>
                        <span className="text-base font-bold text-amber-600 dark:text-amber-400">{arrayData[steps[currentStep].elementIndex]}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">array:</span>
                      <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">[{arrayData.join(', ')}]</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Status Message */}
            {currentStep >= 0 && comparisonState && (
              <div className="mb-4 p-4 rounded-xl border-2 animate-in slide-in-from-top-4 duration-500">
                {comparisonState === 'larger' && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500 animate-bounce">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100">Found Larger Value!</p>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {arrayData[currentElementIndex]} is bigger than {currentLargest !== steps[currentStep].largest ? steps[currentStep-1]?.largest : currentLargest} → Updating max
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {comparisonState === 'smaller' && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border-red-400 dark:border-red-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-red-500 animate-bounce">
                        <TrendingDown className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-red-900 dark:text-red-100">Found Smaller Value!</p>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          {arrayData[currentElementIndex]} is smaller than {currentSmallest !== steps[currentStep].smallest ? steps[currentStep-1]?.smallest : currentSmallest} → Updating min
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {comparisonState === 'same' && (
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 border-slate-400 dark:border-slate-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-slate-500">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100">No Change Needed</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {arrayData[currentElementIndex]} is between min ({currentSmallest}) and max ({currentLargest})
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">Array Elements:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {arrayData.map((num, idx) => (
                  <div key={idx} className="relative">
                    {/* Current Element Indicator Arrow */}
                    {currentElementIndex === idx && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            Checking...
                          </span>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600 dark:border-t-purple-400"></div>
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={`relative w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl shadow-sm transition-all duration-700 ${
                        currentElementIndex === idx
                          ? 'bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 border-4 border-purple-500 dark:border-purple-400 scale-125 shadow-2xl shadow-purple-500/50 ring-4 ring-purple-300/50'
                          : idx < currentElementIndex
                          ? 'bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 opacity-70'
                          : 'bg-white dark:bg-slate-800 border-2 border-purple-300 dark:border-purple-700'
                      }`}
                    >
                      {num}
                      
                      {/* Green Badge for Largest */}
                      {currentStep >= 0 && arrayData[idx] === currentLargest && (
                        <div className="absolute -top-3 -right-3 animate-in zoom-in-50 duration-500">
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                            <div className="relative w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                              <TrendingUp className="w-4 h-4 text-white" strokeWidth={3} />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Red Badge for Smallest */}
                      {currentStep >= 0 && arrayData[idx] === currentSmallest && (
                        <div className="absolute -bottom-3 -right-3 animate-in zoom-in-50 duration-500">
                          <div className="relative">
                            <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                            <div className="relative w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                              <TrendingDown className="w-4 h-4 text-white" strokeWidth={3} />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Checkmark for processed elements */}
                      {idx < currentElementIndex && currentStep > 0 && (
                        <div className="absolute -top-1 -left-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
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

            {/* Current State Trackers */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              <div className={`p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700 transition-all duration-300 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900 dark:text-green-100">Current Largest</span>
                </div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 transition-all duration-500">
                  {currentLargest}
                </div>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Updates when bigger value found</p>
              </div>
              
              <div className={`p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700 transition-all duration-300 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900 dark:text-red-100">Current Smallest</span>
                </div>
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 transition-all duration-500">
                  {currentSmallest}
                </div>
                <p className="text-xs text-red-700 dark:text-red-300 mt-1">Updates when smaller value found</p>
              </div>
            </div>

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-300 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-purple-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">💡 Key Insight</h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    We compare each element with our current largest and smallest values. 
                    By checking all elements once, we guarantee finding both extremes in <strong>O(n) time</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Approach 1: Find Largest */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Approach 1: Finding the Largest Element
          </CardTitle>
          <CardDescription>The most common approach - iterate through the array</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Step-by-Step Logic:</h4>
            <ol className="space-y-2 ml-6 list-decimal">
              <li>Start by assuming the first element is the largest</li>
              <li>Loop through the rest of the array</li>
              <li>If you find a number bigger than your current largest, update it</li>
              <li>After checking all elements, you have the largest number</li>
            </ol>
          </div>

          <CodeSnippet
            title="Find Largest Element"
            description="Simple approach to find the maximum value"
            language="javascript"
            colorTheme="green"
            icon={TrendingUp}
            code={`function findLargest(arr) {
  // Handle empty array
  if (arr.length === 0) {
    return null;
  }
  
  // Start with first element as largest
  let largest = arr[0];
  
  // Check each element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  
  return largest;
}

// Test it
const numbers = [5, 2, 9, 1, 7, 3];
const result = findLargest(numbers);
console.log('Array:', numbers);
console.log('Largest:', result);`}
          />

          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• We compare each element with the current largest</li>
              <li>• Time Complexity: O(n) - we check each element once</li>
              <li>• Space Complexity: O(1) - we only use one variable</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Approach 2: Find Smallest */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="w-6 h-6 text-red-600" />
            Approach 2: Finding the Smallest Element
          </CardTitle>
          <CardDescription>Same logic, but looking for the minimum</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Step-by-Step Logic:</h4>
            <ol className="space-y-2 ml-6 list-decimal">
              <li>Start by assuming the first element is the smallest</li>
              <li>Loop through the rest of the array</li>
              <li>If you find a number smaller than your current smallest, update it</li>
              <li>After checking all elements, you have the smallest number</li>
            </ol>
          </div>

          <CodeSnippet
            title="Find Smallest Element"
            description="Simple approach to find the minimum value"
            language="javascript"
            colorTheme="red"
            icon={TrendingDown}
            code={`function findSmallest(arr) {
  // Handle empty array
  if (arr.length === 0) {
    return null;
  }
  
  // Start with first element as smallest
  let smallest = arr[0];
  
  // Check each element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  
  return smallest;
}

// Test it
const numbers = [5, 2, 9, 1, 7, 3];
const result = findSmallest(numbers);
console.log('Array:', numbers);
console.log('Smallest:', result);`}
          />
        </CardContent>
      </Card>

      {/* Approach 3: Find Both Together */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Approach 3: Finding Both in One Pass (Optimized)
          </CardTitle>
          <CardDescription>More efficient - find both max and min in a single loop</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Why This is Better:</h4>
            <p className="text-sm text-muted-foreground">
              Instead of looping through the array twice (once for max, once for min), 
              we can find both in a single pass. This is more efficient!
            </p>
          </div>

          <CodeSnippet
            title="Find Both Largest & Smallest"
            description="Optimized approach to find both values at once"
            language="javascript"
            colorTheme="purple"
            icon={Target}
            code={`function findMinMax(arr) {
  // Handle empty array
  if (arr.length === 0) {
    return { min: null, max: null };
  }
  
  // Start with first element for both
  let min = arr[0];
  let max = arr[0];
  
  // Check each element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return { min, max };
}

// Test it
const numbers = [5, 2, 9, 1, 7, 3];
const result = findMinMax(numbers);
console.log('Array:', numbers);
console.log('Smallest:', result.min);
console.log('Largest:', result.max);`}
          />

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⚡ Performance Benefit</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              This approach only loops through the array <strong>once</strong> instead of twice, 
              making it roughly <strong>2x faster</strong> when you need both values!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Using Built-in Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            Bonus: Using JavaScript Built-in Methods
          </CardTitle>
          <CardDescription>Quick way using Math.max() and Math.min()</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            JavaScript has built-in methods that make this even easier! However, understanding 
            the manual approach helps you learn the algorithm logic.
          </p>

          <CodeSnippet
            title="Using Built-in Methods"
            description="Quick and clean solution"
            language="javascript"
            colorTheme="amber"
            icon={Lightbulb}
            code={`// Using Math.max() and Math.min()
const numbers = [5, 2, 9, 1, 7, 3];

// Spread operator (...) unpacks array
const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);

console.log('Array:', numbers);
console.log('Largest:', largest);
console.log('Smallest:', smallest);

// Or using reduce (functional approach)
const max = numbers.reduce((a, b) => Math.max(a, b));
const min = numbers.reduce((a, b) => Math.min(a, b));

console.log('\\nUsing reduce:');
console.log('Max:', max);
console.log('Min:', min);`}
          />

          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">💡 When to Use Each</h4>
            <ul className="text-sm text-amber-800 dark:amber-blue-200 space-y-1">
              <li>• <strong>Manual loop:</strong> Best for learning, interviews, or custom logic</li>
              <li>• <strong>Math.max/min:</strong> Quick and clean for simple cases</li>
              <li>• <strong>Reduce:</strong> Functional programming style, good for chaining operations</li>
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
          <CardDescription>Always handle these scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">1. Empty Array</h4>
              <p className="text-sm text-muted-foreground">What if the array has no elements?</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findLargest([]) // Should return null or throw error
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Single Element</h4>
              <p className="text-sm text-muted-foreground">Array with only one number</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findLargest([5]) // Should return 5
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. All Same Numbers</h4>
              <p className="text-sm text-muted-foreground">All elements are identical</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findLargest([5, 5, 5, 5]) // Should return 5
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Negative Numbers</h4>
              <p className="text-sm text-muted-foreground">Don't forget about negative values!</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findLargest([-5, -2, -9]) // Should return -2 (least negative)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Practice Problems
          </CardTitle>
          <CardDescription>Master these related problems on LeetCode</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Kth Largest Element in an Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
              { name: 'Third Maximum Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/third-maximum-number/' },
              { name: 'Largest Number At Least Twice of Others', difficulty: 'Easy', link: 'https://leetcode.com/problems/largest-number-at-least-twice-of-others/' },
              { name: 'Maximum Product of Three Numbers', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-product-of-three-numbers/' },
              { name: 'Find Peak Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-peak-element/' },
            ].map((problem, index) => (
              <a
                key={index}
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {problem.name}
                    </h4>
                    <span className={`text-xs font-medium ${
                      problem.difficulty === 'Easy' ? 'text-green-600' :
                      problem.difficulty === 'Medium' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
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
              <span>Finding largest/smallest requires checking every element - <strong>O(n) time</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Only need one variable to track the max/min - <strong>O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Can find both in a single pass for better performance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Always handle edge cases: empty arrays, single elements, negative numbers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>JavaScript has built-in methods, but learning the manual approach builds problem-solving skills</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
