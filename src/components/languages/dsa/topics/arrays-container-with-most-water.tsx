'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Droplet, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ContainerWithMostWater() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [heights] = useState([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(8);
  const [maxArea, setMaxArea] = useState(0);
  const [currentArea, setCurrentArea] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      left: 0,
      right: 8,
      currentLine: 2,
      description: '📋 Initialize: Set maxArea = 0. Will track the largest container found.',
      action: 'init',
      width: 0,
      height: 0,
      area: 0,
      maxArea: 0
    },
    {
      step: 2,
      left: 0,
      right: 8,
      currentLine: 3,
      description: '📋 Initialize: Set left = 0. Left pointer at height[0] = 1.',
      action: 'init',
      width: 0,
      height: 0,
      area: 0,
      maxArea: 0
    },
    {
      step: 3,
      left: 0,
      right: 8,
      currentLine: 4,
      description: '📋 Initialize: Set right = 8 (array.length - 1). Right pointer at height[8] = 7.',
      action: 'init',
      width: 0,
      height: 0,
      area: 0,
      maxArea: 0
    },
    {
      step: 4,
      left: 0,
      right: 8,
      currentLine: 6,
      description: '✅ Loop Check: Is left(0) < right(8)? Yes! Pointers haven\'t crossed, continue.',
      action: 'checking',
      width: 8,
      height: 0,
      area: 0,
      maxArea: 0
    },
    {
      step: 5,
      left: 0,
      right: 8,
      currentLine: 7,
      description: '📏 Calculate Width: width = right(8) - left(0) = 8. This is the distance between the two pointers.',
      action: 'calculating-width',
      width: 8,
      height: 0,
      area: 0,
      maxArea: 0
    },
    {
      step: 6,
      left: 0,
      right: 8,
      currentLine: 7,
      description: '📐 Calculate Height: h = min(height[0], height[8]) = min(1, 7) = 1. We use the minimum because water can only be as high as the shorter line.',
      action: 'calculating-height',
      width: 8,
      height: 1,
      area: 0,
      maxArea: 0
    },
    {
      step: 7,
      left: 0,
      right: 8,
      currentLine: 7,
      description: '🧮 Calculate Area: area = width(8) × height(1) = 8. This is the amount of water that can be trapped between these two lines.',
      action: 'calculate',
      width: 8,
      height: 1,
      area: 8,
      maxArea: 0
    },
    {
      step: 8,
      left: 0,
      right: 8,
      currentLine: 8,
      description: '🎉 Update Maximum: area(8) > maxArea(0) → NEW MAX! Set maxArea = 8. This is now our best container found so far.',
      action: 'update-max',
      width: 8,
      height: 1,
      area: 8,
      maxArea: 8
    },
    {
      step: 9,
      left: 0,
      right: 8,
      currentLine: 11,
      description: '🤔 Decision: height[0]=1 < height[8]=7 → Move left pointer. We move the pointer at the shorter line to potentially find a taller line.',
      action: 'deciding',
      width: 8,
      height: 1,
      area: 8,
      maxArea: 8
    },
    {
      step: 10,
      left: 1,
      right: 8,
      currentLine: 11,
      description: '➡️ Move Left: left++ → 1. Now at height[1] = 8. Moving left pointer because it was at the shorter line.',
      action: 'move-left',
      width: 7,
      height: 7,
      area: 8,
      maxArea: 8
    },
    {
      step: 11,
      left: 1,
      right: 8,
      currentLine: 7,
      description: '🧮 Calculate: width=7, height=min(8,7)=7 → area = 7 × 7 = 49. This is a much larger container!',
      action: 'calculate',
      width: 7,
      height: 7,
      area: 49,
      maxArea: 8
    },
    {
      step: 12,
      left: 1,
      right: 8,
      currentLine: 8,
      description: '🎉 Update Maximum: area(49) > maxArea(8) → NEW MAX! Set maxArea = 49! This is significantly better than our previous best.',
      action: 'update-max',
      width: 7,
      height: 7,
      area: 49,
      maxArea: 49
    },
    {
      step: 13,
      left: 1,
      right: 8,
      currentLine: 13,
      description: '🤔 Decision: height[1]=8 > height[8]=7 → Move right pointer. Right side has the shorter line, so we move it to find a potentially taller one.',
      action: 'deciding',
      width: 7,
      height: 7,
      area: 49,
      maxArea: 49
    },
    {
      step: 14,
      left: 1,
      right: 7,
      currentLine: 13,
      description: '⬅️ Move Right: right-- → 7. Now at height[7] = 3. Unfortunately, this line is even shorter than before.',
      action: 'move-right',
      width: 6,
      height: 3,
      area: 49,
      maxArea: 49
    },
    {
      step: 15,
      left: 1,
      right: 7,
      currentLine: 7,
      description: '🧮 Calculate: width=6, height=min(8,3)=3 → area = 6 × 3 = 18. The short line at right limits our container height.',
      action: 'calculate',
      width: 6,
      height: 3,
      area: 18,
      maxArea: 49
    },
    {
      step: 16,
      left: 1,
      right: 7,
      currentLine: 8,
      description: '⚖️ Compare: area(18) < maxArea(49) → No update needed. This container is smaller than our current best.',
      action: 'comparing',
      width: 6,
      height: 3,
      area: 18,
      maxArea: 49
    },
    {
      step: 17,
      left: 1,
      right: 6,
      currentLine: 13,
      description: '⬅️ Move Right: height[7]=3 < height[1]=8 → right-- → 6. Moving right pointer since it has the shorter line.',
      action: 'move-right',
      width: 5,
      height: 8,
      area: 18,
      maxArea: 49
    },
    {
      step: 18,
      left: 1,
      right: 6,
      currentLine: 7,
      description: '🧮 Calculate: width=5, height=min(8,8)=8 → area = 5 × 8 = 40. Both lines are equal height now!',
      action: 'calculate',
      width: 5,
      height: 8,
      area: 40,
      maxArea: 49
    },
    {
      step: 19,
      left: 1,
      right: 6,
      currentLine: 8,
      description: '⚖️ Compare: area(40) < maxArea(49) → No update needed. Still not better than our best of 49.',
      action: 'comparing',
      width: 5,
      height: 8,
      area: 40,
      maxArea: 49
    },
    {
      step: 20,
      left: 1,
      right: 5,
      currentLine: 13,
      description: '⬅️ Continue Narrowing: Move right pointer → 5. Even though heights are equal, we need to continue searching.',
      action: 'move-right',
      width: 4,
      height: 4,
      area: 40,
      maxArea: 49
    },
    {
      step: 21,
      left: 1,
      right: 5,
      currentLine: 6,
      description: '✅ Loop Check: Is left(1) < right(5)? Yes! Pointers haven\'t crossed yet, continue searching.',
      action: 'checking',
      width: 4,
      height: 4,
      area: 16,
      maxArea: 49
    },
    {
      step: 22,
      left: 2,
      right: 4,
      currentLine: 6,
      description: '🔄 Converging: Pointers narrowing as we search for better containers. Skipping iterations for brevity.',
      action: 'converging',
      width: 2,
      height: 2,
      area: 4,
      maxArea: 49
    },
    {
      step: 23,
      left: 5,
      right: 4,
      currentLine: 6,
      description: '✅ Loop Check: Is left(5) < right(4)? NO! Pointers have crossed, time to exit loop.',
      action: 'checking',
      width: 0,
      height: 0,
      area: 0,
      maxArea: 49
    },
    {
      step: 24,
      left: 5,
      right: 4,
      currentLine: 16,
      description: '🏆 Result: Maximum area = 49. The optimal container was between indices 1 and 8 with heights [8, 7] and width 7.',
      action: 'result',
      width: 0,
      height: 0,
      area: 0,
      maxArea: 49
    },
    {
      step: 25,
      left: 5,
      right: 4,
      currentLine: 16,
      description: '🎯 Complete! Greedy two-pointer approach found optimal solution in O(n) time!',
      action: 'done',
      width: 0,
      height: 0,
      area: 0,
      maxArea: 49
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function maxArea(height) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let maxArea = 0;`, active: stepData.currentLine === 2, indent: 1, values: `maxArea = ${stepData.maxArea}` },
      { line: 3, code: `  let left = 0;`, active: stepData.currentLine === 3, indent: 1, values: `left = ${stepData.left}` },
      { line: 4, code: `  let right = height.length - 1;`, active: stepData.currentLine === 3, indent: 1, values: `right = ${stepData.right}` },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  while (left < right) {`, active: stepData.currentLine === 6, indent: 1, values: `${stepData.left} < ${stepData.right}` },
      { line: 7, code: `    const width = right - left;`, active: stepData.currentLine === 7, indent: 2, values: `width = ${stepData.width}` },
      { line: 8, code: `    const h = Math.min(height[left], height[right]);`, active: stepData.currentLine === 7, indent: 2, values: `h = ${stepData.height}` },
      { line: 9, code: `    const area = width * h;`, active: stepData.currentLine === 7, indent: 2, values: `area = ${stepData.area}` },
      { line: 10, code: `    maxArea = Math.max(maxArea, area);`, active: stepData.currentLine === 7 && stepData.area > stepData.maxArea, indent: 2, values: stepData.area > stepData.maxArea ? `→ ${stepData.area}` : '' },
      { line: 11, code: `    `, active: false, indent: 2 },
      { line: 12, code: `    if (height[left] < height[right]) {`, active: stepData.currentLine === 11, indent: 2, values: `${heights[stepData.left]} < ${heights[stepData.right]}` },
      { line: 13, code: `      left++;`, active: stepData.action === 'move-left', indent: 3, values: stepData.action === 'move-left' ? `→ ${stepData.left}` : '' },
      { line: 14, code: `    } else {`, active: false, indent: 2 },
      { line: 15, code: `      right--;`, active: stepData.action === 'move-right', indent: 3, values: stepData.action === 'move-right' ? `→ ${stepData.right}` : '' },
      { line: 16, code: `    }`, active: false, indent: 2 },
      { line: 17, code: `  }`, active: false, indent: 1 },
      { line: 18, code: `  `, active: false, indent: 1 },
      { line: 19, code: `  return maxArea;`, active: stepData.currentLine === 16, indent: 1, values: stepData.action === 'done' ? `${stepData.maxArea}` : '' },
      { line: 20, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeft(step.left);
    setRight(step.right);
    setMaxArea(step.maxArea);
    setCurrentArea(step.area);
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
        icon={Droplet}
        category="DSA · Two Pointers"
        title="Container With Most Water"
        description="Learn to find the maximum area container using the two-pointer greedy approach"
        colorTheme="cyan"
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
                <p className="font-medium">Two-Pointer Greedy Strategy</p>
                <p className="text-sm text-muted-foreground">Move pointer with smaller height</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Area Calculation</p>
                <p className="text-sm text-muted-foreground">width × min(height[left], height[right])</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Optimization Technique</p>
                <p className="text-sm text-muted-foreground">Skip impossible candidates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Classic Interview Problem</p>
                <p className="text-sm text-muted-foreground">Very popular LeetCode question</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Problem */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-cyan-600" />
            The Problem
          </CardTitle>
          <CardDescription>Understanding the container area problem</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array of heights representing vertical lines, find two lines that together with the x-axis form a container that holds the most water. The container's area is determined by the shorter of the two lines and the distance between them.
          </p>

          {/* Visual Diagram 1: Array Representation */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span> Step 1: Array Represents Vertical Lines
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Each number in the array represents the height of a vertical line at that position.
            </p>
            
            {/* Array visualization */}
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-300 dark:border-slate-600">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">height = [</span>
                {[1, 8, 6, 2, 5, 4, 8, 3, 7].map((h, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{h}</div>
                    <div className="text-xs text-slate-400">↓</div>
                  </div>
                ))}
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">]</span>
              </div>
              
              {/* Visual bars */}
              <div className="flex items-end justify-center gap-3 h-32 border-t-2 border-slate-300 dark:border-slate-600 pt-2 relative">
                {[1, 8, 6, 2, 5, 4, 8, 3, 7].map((h, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                    {/* Height label above bar */}
                    <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/60 px-1.5 py-0.5 rounded mb-1">
                      {h}
                    </div>
                    <div className="w-full flex items-end justify-center" style={{ height: '100%' }}>
                      <div
                        className="w-full bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-600 dark:to-slate-500 rounded-t border border-slate-500 dark:border-slate-400 relative"
                        style={{ height: `${(h / 8) * 100}%` }}
                      >
                        {/* Height markers */}
                        {h > 3 && (
                          <div className="absolute inset-0 flex flex-col justify-between p-1">
                            {[...Array(Math.min(h, 4))].map((_, i) => (
                              <div key={i} className="w-full h-px bg-white/40"></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Index label below bar */}
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded mt-1">[{idx}]</span>
                  </div>
                ))}
              </div>
              
              {/* Legend explanation */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2 bg-cyan-50 dark:bg-cyan-900/20 rounded border border-cyan-200 dark:border-cyan-700">
                  <div className="w-6 h-6 bg-cyan-100 dark:bg-cyan-900/60 rounded flex items-center justify-center font-bold text-cyan-700 dark:text-cyan-300">h</div>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Height</strong> of line (how tall)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/20 rounded border border-slate-200 dark:border-slate-700">
                  <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center font-mono font-bold text-slate-700 dark:text-slate-300">[ ]</div>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Index</strong> position in array</span>
                </div>
              </div>
            </div>
          </div>

          {/* Height & Index Explanation Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Understanding Height & Index
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">h</div>
                  <div>
                    <p className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">Height (h)</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      The <strong>vertical measurement</strong> of each line. For example, <code className="bg-cyan-100 dark:bg-cyan-900/60 px-1 py-0.5 rounded text-cyan-700 dark:text-cyan-300">h=8</code> means the line is 8 units tall.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center font-mono font-bold">[i]</div>
                  <div>
                    <p className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">Index [i]</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      The <strong>position</strong> in the array (0-based). For example, <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-slate-700 dark:text-slate-300">[1]</code> is the second element (index 1).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">💡</div>
                  <div>
                    <p className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">Key Insight</p>
                    <p className="text-indigo-800 dark:text-indigo-200">
                      <strong>Width</strong> = difference between indices (distance)<br/>
                      <strong>Height</strong> = minimum of two heights (water level)<br/>
                      <strong>Area</strong> = Width × Height
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Diagram 2: Container Formation */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">💧</span> Step 2: Two Lines Form a Container
            </h4>
            <p className="text-sm text-cyan-800 dark:text-cyan-200 mb-4">
              Pick any two lines - they act as walls. The space between them can hold water up to the height of the shorter line.
            </p>
            
            {/* Container example */}
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-cyan-300 dark:border-cyan-600">
              <div className="flex items-end justify-center gap-3 h-40 relative">
                {/* Example with index 1 and 8 */}
                {[1, 8, 6, 2, 5, 4, 8, 3, 7].map((h, idx) => {
                  const isLeft = idx === 1;
                  const isRight = idx === 8;
                  const isInContainer = idx >= 1 && idx <= 8;
                  
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1 flex-1 relative z-10">
                      {/* Pointer labels */}
                      {isLeft && (
                        <div className="absolute -top-8 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded">
                          LEFT
                        </div>
                      )}
                      {isRight && (
                        <div className="absolute -top-8 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                          RIGHT
                        </div>
                      )}
                      
                      <div className="w-full flex items-end justify-center" style={{ height: '100%' }}>
                        <div
                          className={`w-full rounded-t border-2 ${
                            isLeft || isRight
                              ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 border-cyan-700 shadow-lg'
                              : 'bg-gradient-to-t from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-600 border-slate-400 dark:border-slate-500 opacity-30'
                          }`}
                          style={{ height: `${(h / 8) * 100}%` }}
                        >
                          <div className="text-xs font-bold text-white text-center mt-1">{h}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                {/* Water overlay */}
                <div 
                  className="absolute bottom-0 bg-cyan-400/30 dark:bg-cyan-600/30 border-2 border-dashed border-cyan-600 dark:border-cyan-400 rounded-t"
                  style={{ 
                    left: '11.1%',
                    right: '0%',
                    height: '87.5%'
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-600 dark:bg-cyan-400"></div>
                </div>
              </div>
              
              {/* Explanation labels */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-300 dark:border-purple-700">
                  <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold mb-1">Width</div>
                  <div className="text-sm font-bold text-purple-900 dark:text-purple-100">8 - 1 = 7</div>
                </div>
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-300 dark:border-emerald-700">
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Height</div>
                  <div className="text-sm font-bold text-emerald-900 dark:text-emerald-100">min(8, 7) = 7</div>
                </div>
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded border-2 border-cyan-500 dark:border-cyan-600">
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-1">Area</div>
                  <div className="text-lg font-bold text-cyan-900 dark:text-cyan-100">7 × 7 = 49</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Diagram 3: Why Shorter Line Matters */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Step 3: Water Level = Shorter Line
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-200 mb-4">
              Water can only fill up to the height of the <strong>shorter line</strong>, otherwise it would overflow!
            </p>
            
            {/* Side by side comparison */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Correct - shorter line */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <div className="text-center mb-2">
                  <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">Correct</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-center gap-4 h-32 relative">
                  {/* Taller line (8) */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full flex items-end" style={{ height: '100%' }}>
                      <div className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t border-2 border-green-700" style={{ height: '100%' }}>
                        <div className="text-xs font-bold text-white text-center mt-1">8</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shorter line (5) */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full flex items-end" style={{ height: '100%' }}>
                      <div className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t border-2 border-green-700" style={{ height: '62.5%' }}>
                        <div className="text-xs font-bold text-white text-center mt-1">5</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Water fill */}
                  <div className="absolute bottom-0 left-0 right-0 bg-cyan-400/40 border-t-2 border-cyan-600" style={{ height: '62.5%' }}></div>
                </div>
                
                <p className="text-xs text-center mt-3 text-green-700 dark:text-green-300">
                  Water fills to height <strong>5</strong> (shorter line)
                </p>
              </div>
              
              {/* Incorrect - overflow */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-red-500">
                <div className="text-center mb-2">
                  <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">
                    <X className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-700 dark:text-red-300">Would Overflow!</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-center gap-4 h-32 relative">
                  {/* Taller line (8) */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full flex items-end" style={{ height: '100%' }}>
                      <div className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t border-2 border-red-700" style={{ height: '100%' }}>
                        <div className="text-xs font-bold text-white text-center mt-1">8</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shorter line (5) - water would overflow here */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full flex items-end" style={{ height: '100%' }}>
                      <div className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t border-2 border-red-700" style={{ height: '62.5%' }}>
                        <div className="text-xs font-bold text-white text-center mt-1">5</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overflow water */}
                  <div className="absolute bottom-0 left-0 right-0 bg-red-400/40 border-t-2 border-red-600" style={{ height: '100%' }}></div>
                  
                  {/* Overflow arrows */}
                  <div className="absolute right-0 top-8 text-red-600 text-2xl animate-bounce">→💧</div>
                </div>
                
                <p className="text-xs text-center mt-3 text-red-700 dark:text-red-300">
                  Can't fill to height <strong>8</strong> - water overflows!
                </p>
              </div>
            </div>
          </div>

          {/* Formula Card */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2 text-lg">
              📐 The Formula
            </h4>
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-purple-300 dark:border-purple-600">
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                  Area = Width × Height
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">where:</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-700">
                    <div className="font-semibold text-purple-700 dark:text-purple-300">Width</div>
                    <div className="text-slate-700 dark:text-slate-300 mt-1">right_index - left_index</div>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-700">
                    <div className="font-semibold text-purple-700 dark:text-purple-300">Height</div>
                    <div className="text-slate-700 dark:text-slate-300 mt-1">min(height[left], height[right])</div>
                  </div>
                </div>
                <div className="text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 p-2 rounded border border-amber-300 dark:border-amber-700 mt-3">
                  ⚠️ Always use the <strong>shorter</strong> of the two lines as height!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            Two-Pointer Greedy Algorithm: Visual Animation
          </CardTitle>
          <CardDescription>Watch pointers converge, calculating container areas to find maximum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-cyan-300 dark:border-cyan-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-6">
                <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">Speed:</span>
                {(['slow', 'normal', 'fast'] as const).map((speed) => (
                  <label
                    key={speed}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="speed"
                      value={speed}
                      checked={animationSpeed === speed}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-cyan-600 border-cyan-300 focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100 capitalize">{speed}</span>
                  </label>
                ))}
              </div>

              {/* Stepper Controls */}
              {currentStep >= 0 && (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    onClick={handlePrevious}
                    disabled={isAnimating || currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="border-cyan-300 dark:border-cyan-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg border border-cyan-300 dark:border-cyan-700">
                    <span className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-cyan-300 dark:border-cyan-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">maxArea.js</span>
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
                          <span className="ml-3 text-cyan-600 dark:text-cyan-400 font-semibold">
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
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">{left}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">right:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{right}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">maxArea:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{maxArea}</span>
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
                steps[currentStep].action === 'update-max'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600 ring-4 ring-green-200 dark:ring-green-900/50'
                  : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : steps[currentStep].action === 'calculate' || steps[currentStep].action === 'calculating-width' || steps[currentStep].action === 'calculating-height'
                  ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-400 dark:border-purple-600'
                  : steps[currentStep].action === 'move-left' || steps[currentStep].action === 'move-right' || steps[currentStep].action === 'deciding'
                  ? 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-400 dark:border-orange-600'
                  : 'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-400 dark:border-cyan-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${
                    steps[currentStep].action === 'update-max'
                      ? 'bg-green-500 animate-pulse'
                      : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                      ? 'bg-green-500'
                      : steps[currentStep].action === 'calculate' || steps[currentStep].action === 'calculating-width' || steps[currentStep].action === 'calculating-height'
                      ? 'bg-purple-600'
                      : steps[currentStep].action === 'move-left'
                      ? 'bg-cyan-600'
                      : steps[currentStep].action === 'move-right'
                      ? 'bg-blue-600'
                      : steps[currentStep].action === 'deciding'
                      ? 'bg-orange-500'
                      : 'bg-cyan-600'
                  }`}>
                    {steps[currentStep].action === 'update-max' ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'calculate' || steps[currentStep].action.includes('calculating') ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    ) : steps[currentStep].action === 'move-left' ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    ) : steps[currentStep].action === 'move-right' ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                    ) : steps[currentStep].action === 'deciding' ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <Droplet className="w-6 h-6 text-white" />
                    )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${
                        steps[currentStep].action === 'update-max'
                          ? 'text-green-700 dark:text-green-300'
                          : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                          ? 'text-green-700 dark:text-green-300'
                          : steps[currentStep].action.includes('calculating') || steps[currentStep].action === 'calculate'
                          ? 'text-purple-700 dark:text-purple-300'
                          : steps[currentStep].action.includes('move') || steps[currentStep].action === 'deciding'
                          ? 'text-orange-700 dark:text-orange-300'
                          : 'text-cyan-700 dark:text-cyan-300'
                      }`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${
                      steps[currentStep].action === 'update-max'
                        ? 'text-green-900 dark:text-green-100'
                        : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                        ? 'text-green-900 dark:text-green-100'
                        : steps[currentStep].action.includes('calculating') || steps[currentStep].action === 'calculate'
                        ? 'text-purple-900 dark:text-purple-100'
                        : steps[currentStep].action.includes('move') || steps[currentStep].action === 'deciding'
                        ? 'text-orange-900 dark:text-orange-100'
                        : 'text-cyan-900 dark:text-cyan-100'
                    }`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${
                    steps[currentStep].action === 'update-max'
                      ? 'border-green-300 dark:border-green-700'
                      : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                      ? 'border-green-300 dark:border-green-700'
                      : steps[currentStep].action.includes('calculating') || steps[currentStep].action === 'calculate'
                      ? 'border-purple-300 dark:border-purple-700'
                      : steps[currentStep].action.includes('move') || steps[currentStep].action === 'deciding'
                      ? 'border-orange-300 dark:border-orange-700'
                      : 'border-cyan-300 dark:border-cyan-700'
                  }`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">left:</span>
                      <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-blue-200 dark:border-blue-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">right:</span>
                      <span className="text-base font-bold text-blue-600 dark:text-blue-400">{steps[currentStep].right}</span>
                    </div>
                    {steps[currentStep].left < heights.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">height[left]:</span>
                        <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">{heights[steps[currentStep].left]}</span>
                      </div>
                    )}
                    {steps[currentStep].right < heights.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-blue-200 dark:border-blue-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">height[right]:</span>
                        <span className="text-base font-bold text-blue-600 dark:text-blue-400">{heights[steps[currentStep].right]}</span>
                      </div>
                    )}
                    {steps[currentStep].width > 0 && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">width:</span>
                        <span className="text-base font-bold text-purple-600 dark:text-purple-400">{steps[currentStep].width}</span>
                      </div>
                    )}
                    {steps[currentStep].height > 0 && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">height:</span>
                        <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{steps[currentStep].height}</span>
                      </div>
                    )}
                    {steps[currentStep].area > 0 && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-amber-200 dark:border-amber-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">area:</span>
                        <span className="text-base font-bold text-amber-600 dark:text-amber-400">{steps[currentStep].area}</span>
                      </div>
                    )}
                    <div className={`flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border ${
                      steps[currentStep].action === 'update-max' || steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                        ? 'border-green-200 dark:border-green-800'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">maxArea:</span>
                      <span className={`text-base font-bold ${
                        steps[currentStep].action === 'update-max' || steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}>{steps[currentStep].maxArea}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bar Chart Visualization - REBUILT FROM SCRATCH */}
            <div className="mb-6 w-full">
              <p className="text-sm font-medium text-cyan-900 dark:text-cyan-100 mb-3">Container Heights:</p>
              <div className="bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300 dark:border-slate-700 p-8 overflow-hidden">
                {/* Chart with fixed dimensions - increased height to fit all content */}
                <div className="relative overflow-visible" style={{ height: '580px', paddingTop: '30px' }}>
                  {/* Y-axis scale (0-8) with grid lines */}
                  <div className="absolute left-0 top-0 bottom-16 w-10">
                    {[8, 7, 6, 5, 4, 3, 2, 1, 0].map((level) => (
                      <div key={level} className="absolute w-full" style={{ bottom: `${level * 50}px` }}>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{level}</span>
                        {level > 0 && (
                          <div className="absolute left-12 top-0 w-full h-px bg-slate-200 dark:bg-slate-700" style={{ width: '650px' }}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Animated container visualization */}
                  {currentStep > 1 && (steps[currentStep].action === 'calculate' || steps[currentStep].action === 'calculating-height' || steps[currentStep].action === 'calculating-width' || steps[currentStep].action === 'comparing') && (
                    <>
                      {/* Water fill area */}
                      <div 
                        className="absolute bg-cyan-500/20 dark:bg-cyan-600/20 border-2 border-cyan-500 dark:border-cyan-400 border-dashed rounded-t-lg transition-all duration-700 animate-pulse z-60"
                        style={{
                          left: `${56 + (left * 76)}px`,
                          width: `${(right - left) * 76 + 60}px`,
                          bottom: '96px',
                          height: `${Math.min(heights[left], heights[right]) * 50}px`
                        }}
                      />
                      
                      {/* Height indicator line (horizontal at water level) */}
                      <div 
                        className="absolute border-t-2 border-cyan-600 dark:border-cyan-400 transition-all duration-700 z-60"
                        style={{
                          left: `${56 + (left * 76)}px`,
                          width: `${(right - left) * 76 + 60}px`,
                          bottom: `${96 + Math.min(heights[left], heights[right]) * 50}px`
                        }}
                      >
                        <div className="absolute -left-16 top-0 -translate-y-1/2 bg-cyan-600 dark:bg-cyan-400 text-white text-xs font-bold px-2 py-1 rounded shadow-lg z-70">
                          H = {Math.min(heights[left], heights[right])}
                        </div>
                      </div>
                      
                      {/* Width indicator line (at bottom) */}
                      <div 
                        className="absolute flex items-center justify-center transition-all duration-700 z-60"
                        style={{
                          left: `${56 + (left * 76)}px`,
                          width: `${(right - left) * 76 + 60}px`,
                          bottom: '72px'
                        }}
                      >
                        <div className="flex items-center gap-2 bg-purple-600 dark:bg-purple-400 text-white px-3 py-1 rounded-full shadow-lg text-xs font-bold z-50">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                          </svg>
                          W = {right - left}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Vertical height lines on left and right bars */}
                      <div 
                        className="absolute w-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-700 animate-pulse z-60"
                        style={{
                          left: `${86 + (left * 76)}px`,
                          bottom: '96px',
                          height: `${heights[left] * 50}px`
                        }}
                      />
                      <div 
                        className="absolute w-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-700 animate-pulse z-60"
                        style={{
                          left: `${86 + (right * 76)}px`,
                          bottom: '96px',
                          height: `${heights[right] * 50}px`
                        }}
                      />
                    </>
                  )}
                  
                  {/* LEFT and RIGHT labels above chart */}
                  {currentStep > 0 && (
                    <>
                      <div 
                        className="absolute text-sm font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900 px-3 py-1.5 rounded-full z-50 shadow-lg transition-all duration-500"
                        style={{
                          left: `${56 + (left * 76) + 30}px`,
                          top: '20px'
                        }}
                      >
                        ← LEFT [{left}]
                      </div>
                      <div 
                        className="absolute text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1.5 rounded-full z-50 shadow-lg transition-all duration-500"
                        style={{
                          left: `${56 + (right * 76) + 30}px`,
                          top: '20px'
                        }}
                      >
                        RIGHT [{right}] →
                      </div>
                    </>
                  )}
                  
                  {/* Bars */}
                  <div className="absolute left-14 bottom-24 flex items-end gap-4" style={{ height: '400px' }}>
                    {heights.map((h, idx) => {
                      const isLeft = idx === left && currentStep > 0;
                      const isRight = idx === right && currentStep > 0;
                      const barHeight = h * 50; // Each unit = 50px exactly

                      return (
                        <div key={idx} className="flex flex-col items-center relative" style={{ width: '60px' }}>
                          {/* Bar container */}
                          <div className="relative w-full" style={{ height: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            {/* Height label on top */}
                            <div className={`absolute -top-8 left-1/2 -translate-x-1/2 text-lg font-bold px-2 py-1 rounded z-20 ${
                              isLeft
                                ? 'bg-cyan-600 text-white'
                                : isRight
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-400 dark:bg-slate-600 text-white'
                            }`}>
                              {h}
                            </div>
                            
                            {/* Bar */}
                            <div
                              className={`w-full rounded-t-lg transition-all duration-500 flex items-center justify-center text-white font-bold text-xl z-10 relative ${
                                isLeft
                                  ? 'bg-gradient-to-t from-cyan-700 to-cyan-500 border-2 border-cyan-600'
                                  : isRight
                                  ? 'bg-gradient-to-t from-blue-700 to-blue-500 border-2 border-blue-600'
                                  : 'bg-gradient-to-t from-slate-500 to-slate-400 dark:from-slate-700 dark:to-slate-600 opacity-60'
                              }`}
                              style={{ height: `${barHeight}px` }}
                            >
                              {h >= 3 && (isLeft || isRight) && <span>{h}</span>}
                            </div>
                          </div>
                          
                          {/* Index - positioned below baseline */}
                          <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm font-bold px-2 py-1 rounded ${
                            isLeft
                              ? 'bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100'
                              : isRight
                              ? 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {idx}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* X-axis baseline with 0 label */}
                  <div className="absolute left-14 bottom-24 h-0.5 bg-slate-500 dark:bg-slate-500" style={{ width: '620px' }}>
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600">
                      0
                    </div>
                  </div>
                </div>
                
                {/* Explanation Steps */}
                {currentStep > 1 && (steps[currentStep].action === 'calculate' || steps[currentStep].action === 'calculating-height' || steps[currentStep].action === 'calculating-width' || steps[currentStep].action === 'comparing') && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-lg border-2 border-cyan-200 dark:border-cyan-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                        <h4 className="text-sm font-bold text-cyan-900 dark:text-cyan-100">Find Container Width</h4>
                      </div>
                      <p className="text-xs text-cyan-800 dark:text-cyan-200 mb-1">Distance between LEFT ({left}) and RIGHT ({right}) pointers = <strong>{right - left} units</strong></p>
                      <div className="text-xs text-cyan-700 dark:text-cyan-300 font-mono bg-cyan-100/50 dark:bg-cyan-900/30 px-2 py-1 rounded">
                        width = {right} - {left} = {right - left}
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                        <h4 className="text-sm font-bold text-purple-900 dark:text-purple-100">Two Lines Form a Container</h4>
                      </div>
                      <div className="flex items-end justify-center gap-4 mt-3 mb-2">
                        <div className="flex flex-col items-center">
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1">{heights[left]}</div>
                          <div className="w-12 bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-t" style={{ height: `${heights[left] * 8}px` }}></div>
                          <div className="text-xs font-semibold text-purple-800 dark:text-purple-200 mt-1">LEFT</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">{heights[right]}</div>
                          <div className="w-12 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t" style={{ height: `${heights[right] * 8}px` }}></div>
                          <div className="text-xs font-semibold text-purple-800 dark:text-purple-200 mt-1">RIGHT</div>
                        </div>
                      </div>
                      <p className="text-xs text-purple-800 dark:text-purple-200 text-center">These two bars form the container walls</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">3</div>
                        <h4 className="text-sm font-bold text-green-900 dark:text-green-100">Water Level = Shorter Line</h4>
                      </div>
                      <div className="flex items-end justify-center gap-4 mt-3 mb-2 relative">
                        <div className="flex flex-col items-center">
                          <div className={`text-xs font-bold mb-1 ${heights[left] <= heights[right] ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'}`}>
                            {heights[left]} {heights[left] <= heights[right] ? '⬅ SHORTER' : ''}
                          </div>
                          <div className="w-12 bg-gradient-to-t from-cyan-700 to-cyan-500 rounded-t relative" style={{ height: `${heights[left] * 8}px` }}>
                            {heights[left] <= heights[right] && (
                              <div className="absolute inset-0 border-2 border-amber-500 rounded-t animate-pulse"></div>
                            )}
                          </div>
                          <div className="text-xs font-semibold text-green-800 dark:text-green-200 mt-1">LEFT</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className={`text-xs font-bold mb-1 ${heights[right] < heights[left] ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'}`}>
                            {heights[right]} {heights[right] < heights[left] ? '⬅ SHORTER' : ''}
                          </div>
                          <div className="w-12 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t relative" style={{ height: `${heights[right] * 8}px` }}>
                            {heights[right] < heights[left] && (
                              <div className="absolute inset-0 border-2 border-amber-500 rounded-t animate-pulse"></div>
                            )}
                          </div>
                          <div className="text-xs font-semibold text-green-800 dark:text-green-200 mt-1">RIGHT</div>
                        </div>
                        <div className="absolute border-t-2 border-dashed border-amber-600 dark:border-amber-400" style={{ 
                          width: '100%', 
                          bottom: `${Math.min(heights[left], heights[right]) * 8}px`,
                          left: 0
                        }}>
                          <div className="absolute -right-2 -top-3 text-xs font-bold text-amber-600 dark:text-amber-400">Water Level: {Math.min(heights[left], heights[right])}</div>
                        </div>
                      </div>
                      <p className="text-xs text-green-800 dark:text-green-200 text-center mt-2">Area = {right - left} × {Math.min(heights[left], heights[right])} = <strong>{steps[currentStep].area} units²</strong></p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Area Display */}
            {currentStep > 1 && steps[currentStep].action !== 'done' && (
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Width</p>
                    <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">{steps[currentStep].width}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Height</p>
                    <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">{steps[currentStep].height}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Area</p>
                    <p className={`text-2xl font-bold ${steps[currentStep].area === steps[currentStep].maxArea ? 'text-green-600 dark:text-green-400' : 'text-cyan-600 dark:text-cyan-400'}`}>
                      {steps[currentStep].area}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Result Display */}
            {steps[currentStep].action === 'done' && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 animate-bounce" />
                  <div>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">Maximum Area: {maxArea}</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Found using two-pointer greedy approach</p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-lg border border-cyan-300 dark:border-cyan-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-cyan-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">💡 Greedy Strategy</h4>
                  <p className="text-sm text-cyan-800 dark:text-cyan-200">
                    Always move the pointer with the <strong>smaller height</strong>. Why? Because the area is limited by the shorter line, so we need to try finding a taller line. Moving the taller pointer would only decrease the width without any chance of increasing height. <strong>O(n) time, O(1) space</strong>.
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
            <Droplet className="w-6 h-6 text-cyan-600" />
            The Two-Pointer Greedy Approach
          </CardTitle>
          <CardDescription>Understanding why this strategy works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Start with maximum width</strong>
                <p className="text-sm text-muted-foreground">left = 0, right = n-1 (furthest apart)</p>
              </li>
              <li>
                <strong>Calculate current area</strong>
                <p className="text-sm text-muted-foreground">area = (right - left) × min(height[left], height[right])</p>
              </li>
              <li>
                <strong>Update maximum if needed</strong>
                <p className="text-sm text-muted-foreground">maxArea = max(maxArea, area)</p>
              </li>
              <li>
                <strong>Move the pointer with smaller height</strong>
                <p className="text-sm text-muted-foreground">If height[left] &lt; height[right]: left++, else: right--</p>
              </li>
              <li>
                <strong>Repeat until pointers meet</strong>
                <p className="text-sm text-muted-foreground">Continue while left &lt; right</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Container With Most Water"
            description="Efficient two-pointer solution"
            language="javascript"
            colorTheme="blue"
            icon={Droplet}
            code={`function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    // Calculate current area
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;
    
    // Update maximum area
    maxArea = Math.max(maxArea, area);
    
    // Move pointer with smaller height (greedy choice)
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}

// Test it
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));                // 1
console.log(maxArea([4,3,2,1,4]));          // 16`}
          />

          <div className="bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Greedy Strategy Works
            </h4>
            <ul className="text-sm text-cyan-800 dark:text-cyan-200 space-y-1">
              <li>• The area is limited by the <strong>shorter line</strong></li>
              <li>• Moving the taller pointer only <strong>decreases width</strong> without chance of more height</li>
              <li>• Moving the shorter pointer gives <strong>potential for a taller line</strong></li>
              <li>• This greedy choice ensures we don't miss the optimal solution</li>
              <li>• Time Complexity: <strong>O(n)</strong> - single pass through array</li>
              <li>• Space Complexity: <strong>O(1)</strong> - only a few variables</li>
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
              <h4 className="font-semibold mb-1">1. Two Elements</h4>
              <p className="text-sm text-muted-foreground">Minimum valid input - only one possible container</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxArea([1, 1]) // 1 (width=1, height=1)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. All Same Height</h4>
              <p className="text-sm text-muted-foreground">Maximum area at the widest points</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxArea([5,5,5,5]) // 15 (width=3, height=5)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Increasing Heights</h4>
              <p className="text-sm text-muted-foreground">Tallest lines at the ends</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxArea([1,2,3,4,5]) // 6 (indices 0 and 4)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Decreasing Heights</h4>
              <p className="text-sm text-muted-foreground">Similar to increasing, check ends first</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                maxArea([5,4,3,2,1]) // 6 (indices 0 and 4)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-cyan-600" />
            Related Problems
          </CardTitle>
          <CardDescription>Similar challenges to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">1. Trapping Rain Water</p>
              <p className="text-sm text-muted-foreground">Calculate water trapped between bars (harder version)</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Largest Rectangle in Histogram</p>
              <p className="text-sm text-muted-foreground">Find maximum rectangular area in histogram</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. Maximal Rectangle</p>
              <p className="text-sm text-muted-foreground">Find largest rectangle in 2D binary matrix</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Product of Array Except Self</p>
              <p className="text-sm text-muted-foreground">Another two-pointer technique application</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-cyan-200 dark:border-cyan-800 bg-cyan-50/50 dark:bg-cyan-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-900 dark:text-cyan-100">
            <CheckCircle className="w-6 h-6" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
              <span>Start with widest container (left=0, right=n-1), move inward</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
              <span>Area = (right - left) × min(height[left], height[right])</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
              <span>Greedy choice: always move the pointer with smaller height</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
              <span>Optimal solution: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
              <span>Very popular interview question - understand the greedy proof!</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
