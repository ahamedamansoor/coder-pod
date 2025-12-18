'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { ArrowLeftRight, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ReverseArray() {
  // CSS for rectangular swap animation
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
  const [arrayState, setArrayState] = useState([5, 2, 9, 1, 7, 3]);
  const [leftPointer, setLeftPointer] = useState(0);
  const [rightPointer, setRightPointer] = useState(5);
  const [swapping, setSwapping] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const initialArray = [5, 2, 9, 1, 7, 3];
  
  const steps = [
    { 
      step: 1, 
      array: [5, 2, 9, 1, 7, 3],
      left: 0,
      right: 5,
      swap: false,
      currentLine: 2,
      temp: null,
      description: '📋 Initialize: Set left pointer = 0 (start of array). This pointer will move rightward during the reversal process.'
    },
    { 
      step: 2, 
      array: [5, 2, 9, 1, 7, 3],
      left: 0,
      right: 5,
      swap: false,
      currentLine: 3,
      temp: null,
      description: '📋 Initialize: Set right pointer = 5 (arr.length - 1). This pointer starts at the end and will move leftward.'
    },
    { 
      step: 3, 
      array: [5, 2, 9, 1, 7, 3],
      left: 0,
      right: 5,
      swap: false,
      currentLine: 4,
      temp: null,
      description: '🔄 While Loop Check: Is left (0) < right (5)? Yes! Pointers haven\'t crossed yet, so we continue with the swap.'
    },
    { 
      step: 4, 
      array: [5, 2, 9, 1, 7, 3],
      left: 0,
      right: 5,
      swap: 'preparing',
      currentLine: 5,
      temp: 5,
      description: '💾 Step 1 of Swap: Save arr[0] = 5 in temp variable. We need this because we\'re about to overwrite arr[0].'
    },
    { 
      step: 5, 
      array: [3, 2, 9, 1, 7, 3],
      left: 0,
      right: 5,
      swap: 'swapping',
      currentLine: 6,
      temp: 5,
      description: '➡️ Step 2 of Swap: Copy arr[5] = 3 to arr[0]. Now arr[0] changes from 5 to 3.'
    },
    { 
      step: 6, 
      array: [3, 2, 9, 1, 7, 5],
      left: 0,
      right: 5,
      swap: true,
      currentLine: 7,
      temp: 5,
      description: '✅ Step 3 of Swap: Complete swap by setting arr[5] = temp = 5. First and last elements are now swapped! (5 ↔ 3)'
    },
    { 
      step: 7, 
      array: [3, 2, 9, 1, 7, 5],
      left: 1,
      right: 4,
      swap: false,
      currentLine: 8,
      temp: null,
      description: '👉👈 Move Pointers: Increment left (0→1) and decrement right (5→4). Pointers move toward the center for next swap.'
    },
    { 
      step: 8, 
      array: [3, 2, 9, 1, 7, 5],
      left: 1,
      right: 4,
      swap: false,
      currentLine: 4,
      temp: null,
      description: '🔄 While Loop Check: Is left (1) < right (4)? Yes! Pointers still haven\'t met, continue with next swap.'
    },
    { 
      step: 9, 
      array: [3, 2, 9, 1, 7, 5],
      left: 1,
      right: 4,
      swap: 'preparing',
      currentLine: 5,
      temp: 2,
      description: '💾 Step 1 of Swap: Save arr[1] = 2 in temp variable before overwriting it.'
    },
    { 
      step: 10, 
      array: [3, 7, 9, 1, 7, 5],
      left: 1,
      right: 4,
      swap: 'swapping',
      currentLine: 6,
      temp: 2,
      description: '➡️ Step 2 of Swap: Copy arr[4] = 7 to arr[1]. Now arr[1] changes from 2 to 7.'
    },
    { 
      step: 11, 
      array: [3, 7, 9, 1, 2, 5],
      left: 1,
      right: 4,
      swap: true,
      currentLine: 7,
      temp: 2,
      description: '✅ Step 3 of Swap: Complete swap by setting arr[4] = temp = 2. Second swap complete! (2 ↔ 7)'
    },
    { 
      step: 12, 
      array: [3, 7, 9, 1, 2, 5],
      left: 2,
      right: 3,
      swap: false,
      currentLine: 8,
      temp: null,
      description: '👉👈 Move Pointers: Increment left (1→2) and decrement right (4→3). Getting closer to the center.'
    },
    { 
      step: 13, 
      array: [3, 7, 9, 1, 2, 5],
      left: 2,
      right: 3,
      swap: false,
      currentLine: 4,
      temp: null,
      description: '🔄 While Loop Check: Is left (2) < right (3)? Yes! One more swap needed before pointers meet.'
    },
    { 
      step: 14, 
      array: [3, 7, 9, 1, 2, 5],
      left: 2,
      right: 3,
      swap: 'preparing',
      currentLine: 5,
      temp: 9,
      description: '💾 Step 1 of Swap: Save arr[2] = 9 in temp variable. Last swap in progress.'
    },
    { 
      step: 15, 
      array: [3, 7, 1, 1, 2, 5],
      left: 2,
      right: 3,
      swap: 'swapping',
      currentLine: 6,
      temp: 9,
      description: '➡️ Step 2 of Swap: Copy arr[3] = 1 to arr[2]. Now arr[2] changes from 9 to 1.'
    },
    { 
      step: 16, 
      array: [3, 7, 1, 9, 2, 5],
      left: 2,
      right: 3,
      swap: true,
      currentLine: 7,
      temp: 9,
      description: '✅ Step 3 of Swap: Complete swap by setting arr[3] = temp = 9. Final swap complete! (9 ↔ 1)'
    },
    { 
      step: 17, 
      array: [3, 7, 1, 9, 2, 5],
      left: 3,
      right: 2,
      swap: false,
      currentLine: 8,
      temp: null,
      description: '👉👈 Move Pointers: Increment left (2→3) and decrement right (3→2). Now pointers have crossed!'
    },
    { 
      step: 18, 
      array: [3, 7, 1, 9, 2, 5],
      left: 3,
      right: 2,
      swap: false,
      currentLine: 4,
      temp: null,
      description: '❌ While Loop Check: Is left (3) < right (2)? No! (3 is not less than 2) - Pointers have crossed, exit loop.'
    },
    { 
      step: 19, 
      array: [3, 7, 1, 9, 2, 5],
      left: 3,
      right: 2,
      swap: false,
      currentLine: 11,
      temp: null,
      description: '🎉 Complete! Array successfully reversed from [5,2,9,1,7,3] to [3,7,1,9,2,5]. All elements in reverse order!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = stepData.array;
    return [
      { line: 1, code: 'function reverseArray(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let left = 0;`, active: stepData.currentLine === 2, indent: 1, values: `left = ${stepData.left}` },
      { line: 3, code: `  let right = arr.length - 1;`, active: stepData.currentLine === 3, indent: 1, values: `right = ${stepData.right}` },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  while (left < right) {`, active: stepData.currentLine === 4, indent: 1, values: `${stepData.left} < ${stepData.right} = ${stepData.left < stepData.right ? '✓' : '✗'}` },
      { line: 6, code: `    let temp = arr[left];`, active: stepData.currentLine === 5 && stepData.temp !== null, indent: 2, values: stepData.temp !== null ? `temp = ${stepData.temp}` : '' },
      { line: 7, code: `    arr[left] = arr[right];`, active: stepData.currentLine === 6, indent: 2, values: stepData.swap ? `arr[${stepData.left}] = ${arr[stepData.left]}` : '' },
      { line: 8, code: `    arr[right] = temp;`, active: stepData.currentLine === 7, indent: 2, values: stepData.swap ? `arr[${stepData.right}] = ${arr[stepData.right]}` : '' },
      { line: 9, code: `    `, active: false, indent: 2 },
      { line: 10, code: `    left++;`, active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `left = ${stepData.left}` : '' },
      { line: 11, code: `    right--;`, active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `right = ${stepData.right}` : '' },
      { line: 12, code: `  }`, active: false, indent: 1 },
      { line: 13, code: `  `, active: false, indent: 1 },
      { line: 14, code: `  return arr;`, active: stepData.currentLine === 11, indent: 1, values: `[${arr.join(', ')}]` },
      { line: 15, code: `}`, active: stepData.currentLine === 12, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeftPointer(step.left);
    setRightPointer(step.right);
    setSwapping(step.swap !== false);
    setArrayState([...step.array]);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    setArrayState([...initialArray]);
    setLeftPointer(0);
    setRightPointer(5);
    setSwapping(false);

    const speedDelay = animationSpeed === 'slow' ? 3000 : animationSpeed === 'fast' ? 500 : 1500;

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
            setSwapping(false);
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
    setArrayState([...initialArray]);
    setLeftPointer(0);
    setRightPointer(5);
    setSwapping(false);
  };

  return (
    <div className="space-y-8">
      <style jsx>{swapStyles}</style>
      <PageHeader
        icon={RefreshCw}
        category="DSA · Arrays"
        title="Reverse an Array"
        description="Learn how to reverse an array in-place using the two-pointer technique"
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
                <p className="font-medium">Two-Pointer Technique</p>
                <p className="text-sm text-muted-foreground">Use two pointers from both ends</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">In-Place Reversal</p>
                <p className="text-sm text-muted-foreground">No extra space needed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Element Swapping</p>
                <p className="text-sm text-muted-foreground">Swap elements using temp variable</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Built-in Methods</p>
                <p className="text-sm text-muted-foreground">Quick reversal with .reverse()</p>
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
            Given an array, reverse it in-place so the first element becomes the last, second becomes second-to-last, and so on.
          </p>

          {/* Before and After */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" /> Before → After
            </h4>
            
            <div className="space-y-4">
              {/* Before */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Original Array:</p>
                <div className="flex items-center justify-center gap-2">
                  {[5, 2, 9, 1, 7, 3].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 border-2 border-blue-400 dark:border-blue-600 rounded-lg flex items-center justify-center font-bold text-lg text-blue-900 dark:text-blue-100">
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <RefreshCw className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto animate-spin" style={{ animationDuration: '3s' }} />
              </div>

              {/* After */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Reversed Array:</p>
                <div className="flex items-center justify-center gap-2">
                  {[3, 7, 1, 9, 2, 5].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-green-100 dark:bg-green-900 border-2 border-green-500 dark:border-green-600 rounded-lg flex items-center justify-center font-bold text-lg text-green-900 dark:text-green-100">
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Two-Pointer Swapping Strategy */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔄</span> Two-Pointer Swapping
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[5, 2, 9, 1, 7, 3].map((num, idx) => (
                  <div key={idx} className="relative">
                    {idx === 0 && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400">LEFT</div>
                    )}
                    {idx === 5 && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400">RIGHT</div>
                    )}
                    <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                      idx === 0 || idx === 5
                        ? 'bg-amber-100 dark:bg-amber-900 border-amber-500 text-amber-900 dark:text-amber-100 scale-110'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}>
                      {num}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="text-2xl">↕️</div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Swap first & last</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                {[3, 2, 9, 1, 7, 5].map((num, idx) => (
                  <div key={idx} className="relative">
                    {idx === 1 && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-600 dark:text-cyan-400">LEFT</div>
                    )}
                    {idx === 4 && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400">RIGHT</div>
                    )}
                    <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                      idx === 0 || idx === 5
                        ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                        : idx === 1 || idx === 4
                        ? 'bg-amber-100 dark:bg-amber-900 border-amber-500 text-amber-900 dark:text-amber-100 scale-110'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}>
                      {num}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-center mt-4 text-cyan-800 dark:text-cyan-200">
                Move pointers inward and keep swapping until they meet in the middle
              </p>
            </div>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              ⚡ Efficiency
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-purple-300 dark:border-purple-600">
                <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Time</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">O(n)</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">n/2 swaps</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-purple-300 dark:border-purple-600">
                <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">O(1)</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">In-place</div>
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
              <ArrowLeftRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the two-pointer technique reverse the array step-by-step</CardDescription>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">reverseArray.js</span>
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
                        <span className="text-slate-500 dark:text-slate-400">left:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{leftPointer}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">right:</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">{rightPointer}</span>
                      </div>
                      {steps[currentStep].temp !== null && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">temp:</span>
                          <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].temp}</span>
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
            {currentStep >= 0 && steps[currentStep].description && (
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-400 dark:border-purple-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-purple-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <ArrowLeftRight className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-purple-900 dark:text-purple-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-purple-800 dark:text-purple-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${currentStep === steps.length - 1 ? 'border-green-300 dark:border-green-700' : 'border-purple-300 dark:border-purple-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-blue-200 dark:border-blue-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">left:</span>
                      <span className="text-base font-bold text-blue-600 dark:text-blue-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-rose-200 dark:border-rose-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">right:</span>
                      <span className="text-base font-bold text-rose-600 dark:text-rose-400">{steps[currentStep].right}</span>
                    </div>
                    {steps[currentStep].temp !== null && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-orange-200 dark:border-orange-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">temp:</span>
                        <span className="text-base font-bold text-orange-600 dark:text-orange-400">{steps[currentStep].temp}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">array:</span>
                      <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">[{steps[currentStep].array.join(', ')}]</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Swap Status Message */}
            {currentStep >= 0 && swapping && (
              <div className="mb-4 p-4 rounded-xl border-2 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-400 dark:border-orange-600 animate-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-orange-500 animate-bounce">
                    <ArrowLeftRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-orange-900 dark:text-orange-100">Swapping Elements!</p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Position {leftPointer} ↔ Position {rightPointer}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">Array Elements:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {(() => {
                  // During swap, find the array state before swap sequence started
                  if (swapping && currentStep > 0) {
                    // Look backwards to find last step with swap: false
                    for (let i = currentStep - 1; i >= 0; i--) {
                      if (steps[i].swap === false) {
                        return steps[i].array;
                      }
                    }
                    return initialArray;
                  }
                  return arrayState;
                })().map((num, idx) => (
                  <div key={`${idx}-${num}`} className="relative">
                    {/* Left Pointer */}
                    {currentStep >= 0 && leftPointer === idx && leftPointer <= rightPointer && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/60 px-2 py-1 rounded-full whitespace-nowrap animate-bounce">
                            ← LEFT
                          </span>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600 dark:border-t-blue-400"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Right Pointer */}
                    {currentStep >= 0 && rightPointer === idx && leftPointer <= rightPointer && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-red-600 dark:border-b-red-400"></div>
                          <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/60 px-2 py-1 rounded-full whitespace-nowrap animate-bounce">
                            RIGHT →
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={`relative w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl shadow-lg transition-all duration-300 ${
                        (leftPointer === idx || rightPointer === idx) && leftPointer <= rightPointer
                          ? 'bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-800 dark:to-amber-800 border-4 border-orange-500 dark:border-orange-400 shadow-2xl shadow-orange-500/60'
                          : 'bg-white dark:bg-slate-800 border-2 border-purple-300 dark:border-purple-700'
                      }`}
                      style={{
                        animation: swapping && leftPointer === idx 
                          ? 'swapLeftToRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                          : swapping && rightPointer === idx 
                          ? 'swapRightToLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                          : 'none',
                        // @ts-ignore - CSS variable
                        '--swap-distance': `${(rightPointer - leftPointer) * 72}px`,
                        zIndex: swapping && (leftPointer === idx || rightPointer === idx) ? 100 : 1,
                        filter: swapping && (leftPointer === idx || rightPointer === idx) ? 'brightness(1.15) drop-shadow(0 10px 20px rgba(251, 146, 60, 0.4))' : 'brightness(1)'
                      }}
                    >
                      {num}
                      
                      {/* Swap Motion Trail */}
                      {swapping && (leftPointer === idx || rightPointer === idx) && (
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
                ))}
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
                    By moving two pointers inward and swapping elements, we reverse the array in <strong>O(n/2) = O(n) time</strong> 
                    using only <strong>O(1) extra space</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Approach 1: Two-Pointer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowLeftRight className="w-6 h-6 text-purple-600" />
            Approach 1: Two-Pointer Technique (In-Place)
          </CardTitle>
          <CardDescription>Most efficient - reverses array without extra space</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Step-by-Step Logic:</h4>
            <ol className="space-y-2 ml-6 list-decimal">
              <li>Place one pointer at the start (left = 0)</li>
              <li>Place another pointer at the end (right = length - 1)</li>
              <li>While left &lt; right:</li>
              <ul className="ml-6 list-disc space-y-1 mt-1">
                <li>Swap elements at left and right positions</li>
                <li>Move left pointer forward (left++)</li>
                <li>Move right pointer backward (right--)</li>
              </ul>
              <li>When pointers meet, array is reversed</li>
            </ol>
          </div>

          <CodeSnippet
            title="Two-Pointer Reversal"
            description="In-place reversal with O(1) space"
            language="javascript"
            colorTheme="purple"
            icon={ArrowLeftRight}
            code={`function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Swap elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Move pointers
    left++;
    right--;
  }
  
  return arr;
}

// Test it
const numbers = [5, 2, 9, 1, 7, 3];
console.log('Original:', numbers);
reverseArray(numbers);
console.log('Reversed:', numbers);`}
          />

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• Swaps first with last, second with second-last, etc.</li>
              <li>• Time Complexity: O(n) - visits each element once</li>
              <li>• Space Complexity: O(1) - only uses temp variable</li>
              <li>• Modifies array in-place (no extra array needed)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Approach 2: Using Built-in Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            Approach 2: Using Built-in Method
          </CardTitle>
          <CardDescription>Quick and clean solution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            JavaScript has a built-in <code className="bg-muted px-2 py-1 rounded">.reverse()</code> method! 
            However, understanding the two-pointer approach helps you learn the algorithm logic.
          </p>

          <CodeSnippet
            title="Using .reverse() Method"
            description="One-liner solution"
            language="javascript"
            colorTheme="amber"
            icon={Lightbulb}
            code={`// Using built-in reverse()
const numbers = [5, 2, 9, 1, 7, 3];
console.log('Original:', numbers);

numbers.reverse();
console.log('Reversed:', numbers);

// Or create a reversed copy
const original = [5, 2, 9, 1, 7, 3];
const reversed = [...original].reverse();
console.log('Original:', original);
console.log('Reversed copy:', reversed);`}
          />

          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">💡 When to Use Each</h4>
            <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
              <li>• <strong>Two-pointer:</strong> Best for learning, interviews, or custom logic</li>
              <li>• <strong>.reverse():</strong> Quick and clean for production code</li>
              <li>• <strong>[...arr].reverse():</strong> When you need to keep original array unchanged</li>
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
              <p className="text-sm text-muted-foreground">Array with no elements</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                reverseArray([]) // Should return []
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Single Element</h4>
              <p className="text-sm text-muted-foreground">Array with only one element</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                reverseArray([5]) // Should return [5]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Two Elements</h4>
              <p className="text-sm text-muted-foreground">Simplest swap case</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                reverseArray([5, 3]) // Should return [3, 5]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Odd vs Even Length</h4>
              <p className="text-sm text-muted-foreground">Both work the same way</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                reverseArray([1, 2, 3]) // [3, 2, 1] - middle stays<br/>
                reverseArray([1, 2, 3, 4]) // [4, 3, 2, 1]
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
              { name: 'Rotate Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-array/' },
              { name: 'Pancake Sorting', difficulty: 'Medium', link: 'https://leetcode.com/problems/pancake-sorting/' },
              { name: 'Reverse Pairs', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-pairs/' },
              { name: 'Reverse Subarray To Maximize Array Value', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/' },
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
              <span>Two-pointer technique is efficient - <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Swap elements from both ends moving inward</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Stop when left pointer meets or crosses right pointer</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Works for arrays of any length (even 0 or 1 elements)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>JavaScript's .reverse() is convenient but learning the algorithm is valuable</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
