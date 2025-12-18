'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, Hash, Plus, Check, X } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Badge } from '@/components/ui/badge';

export default function SubarraySumEqualsK() {
  const array = [1, 2, 3, -2, 5];
  const k = 5;

  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefixSum, setPrefixSum] = useState(0);
  const [count, setCount] = useState(0);

  type Step = {
    step: number;
    index: number;
    prefixSum: number;
    count: number;
    hashMap: Record<number, number>;
    currentLine: number;
    description: string;
    action: string;
    highlighted: number[];
    found: boolean;
    subarrayRange?: [number, number];
  };

  const steps: Step[] = [
    {
      step: 1,
      index: -1,
      prefixSum: 0,
      count: 0,
      hashMap: { 0: 1 },
      currentLine: 2,
      description: 'Initialize: HashMap with {0: 1} to handle subarrays starting from index 0',
      action: 'init',
      highlighted: [],
      found: false,
    },
    {
      step: 2,
      index: 0,
      prefixSum: 1,
      count: 0,
      hashMap: { 0: 1, 1: 1 },
      currentLine: 6,
      description: 'Index 0: prefixSum = 1, check if (1 - 5 = -4) exists in map → No',
      action: 'check',
      highlighted: [0],
      found: false,
    },
    {
      step: 3,
      index: 0,
      prefixSum: 1,
      count: 0,
      hashMap: { 0: 1, 1: 1 },
      currentLine: 10,
      description: 'Add prefixSum=1 to HashMap',
      action: 'add',
      highlighted: [0],
      found: false,
    },
    {
      step: 4,
      index: 1,
      prefixSum: 3,
      count: 0,
      hashMap: { 0: 1, 1: 1, 3: 1 },
      currentLine: 6,
      description: 'Index 1: prefixSum = 3, check if (3 - 5 = -2) exists in map → No',
      action: 'check',
      highlighted: [1],
      found: false,
    },
    {
      step: 5,
      index: 1,
      prefixSum: 3,
      count: 0,
      hashMap: { 0: 1, 1: 1, 3: 1 },
      currentLine: 10,
      description: 'Add prefixSum=3 to HashMap',
      action: 'add',
      highlighted: [1],
      found: false,
    },
    {
      step: 6,
      index: 2,
      prefixSum: 6,
      count: 0,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1 },
      currentLine: 6,
      description: 'Index 2: prefixSum = 6, check if (6 - 5 = 1) exists in map → Yes! Found 1 subarray',
      action: 'check',
      highlighted: [2],
      found: true,
      subarrayRange: [1, 2],
    },
    {
      step: 7,
      index: 2,
      prefixSum: 6,
      count: 1,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1 },
      currentLine: 8,
      description: 'count += map[1] = 1. Total count = 1. Subarray [2,3] sums to 5',
      action: 'found',
      highlighted: [2],
      found: true,
      subarrayRange: [1, 2],
    },
    {
      step: 8,
      index: 2,
      prefixSum: 6,
      count: 1,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1 },
      currentLine: 10,
      description: 'Add prefixSum=6 to HashMap',
      action: 'add',
      highlighted: [2],
      found: false,
    },
    {
      step: 9,
      index: 3,
      prefixSum: 4,
      count: 1,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1, 4: 1 },
      currentLine: 6,
      description: 'Index 3: prefixSum = 4, check if (4 - 5 = -1) exists in map → No',
      action: 'check',
      highlighted: [3],
      found: false,
    },
    {
      step: 10,
      index: 3,
      prefixSum: 4,
      count: 1,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1, 4: 1 },
      currentLine: 10,
      description: 'Add prefixSum=4 to HashMap',
      action: 'add',
      highlighted: [3],
      found: false,
    },
    {
      step: 11,
      index: 4,
      prefixSum: 9,
      count: 1,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1, 4: 1, 9: 1 },
      currentLine: 6,
      description: 'Index 4: prefixSum = 9, check if (9 - 5 = 4) exists in map → Yes! Found another subarray',
      action: 'check',
      highlighted: [4],
      found: true,
      subarrayRange: [3, 4],
    },
    {
      step: 12,
      index: 4,
      prefixSum: 9,
      count: 2,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1, 4: 1, 9: 1 },
      currentLine: 8,
      description: 'count += map[4] = 1. Total count = 2. Subarray [-2,5] sums to 5',
      action: 'found',
      highlighted: [4],
      found: true,
      subarrayRange: [3, 4],
    },
    {
      step: 13,
      index: 4,
      prefixSum: 9,
      count: 2,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1, 4: 1, 9: 1 },
      currentLine: 10,
      description: 'Add prefixSum=9 to HashMap',
      action: 'add',
      highlighted: [4],
      found: false,
    },
    {
      step: 14,
      index: 4,
      prefixSum: 9,
      count: 2,
      hashMap: { 0: 1, 1: 1, 3: 1, 6: 1, 4: 1, 9: 1 },
      currentLine: 13,
      description: '✅ Result: Found 2 subarrays with sum = 5',
      action: 'result',
      highlighted: [],
      found: false,
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: `function subarraySum(nums, k) {`, active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  const map = new Map();`, active: stepData.currentLine === 2, indent: 1 },
      { line: 3, code: `  map.set(0, 1);`, active: stepData.currentLine === 2, indent: 1, comment: '// Handle subarrays from start' },
      { line: 4, code: `  let prefixSum = 0, count = 0;`, active: stepData.currentLine === 3, indent: 1, values: stepData.action !== 'init' ? `prefixSum=${stepData.prefixSum}, count=${stepData.count}` : '' },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let num of nums) {`, active: stepData.currentLine === 4, indent: 1 },
      { line: 7, code: `    prefixSum += num;`, active: stepData.currentLine === 5, indent: 2, values: stepData.index >= 0 ? `prefixSum=${stepData.prefixSum}` : '' },
      { line: 8, code: `    `, active: false, indent: 2 },
      { line: 9, code: `    if (map.has(prefixSum - k)) {`, active: stepData.currentLine === 6 || stepData.action === 'check', indent: 2, values: stepData.action === 'check' ? `Check: ${stepData.prefixSum} - ${k} = ${stepData.prefixSum - k}` : '' },
      { line: 10, code: `      count += map.get(prefixSum - k);`, active: stepData.currentLine === 8 || stepData.action === 'found', indent: 3, values: stepData.action === 'found' ? `count = ${stepData.count}` : '' },
      { line: 11, code: `    }`, active: false, indent: 2 },
      { line: 12, code: `    `, active: false, indent: 2 },
      { line: 13, code: `    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);`, active: stepData.currentLine === 10 || stepData.action === 'add', indent: 2 },
      { line: 14, code: `  }`, active: false, indent: 1 },
      { line: 15, code: `  `, active: false, indent: 1 },
      { line: 16, code: `  return count;`, active: stepData.currentLine === 13 || stepData.action === 'result', indent: 1, values: stepData.action === 'result' ? `→ ${stepData.count}` : '' },
      { line: 17, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentIndex(step.index);
    setPrefixSum(step.prefixSum);
    setCount(step.count);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

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
      }, index * 2500);
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
    setCurrentIndex(0);
    setPrefixSum(0);
    setCount(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Hash}
        category="DSA · Prefix Sum & Hash Map"
        title="Subarray Sum Equals K"
        description="Find the total number of continuous subarrays whose sum equals K using prefix sum and hash map technique."
        colorTheme="green"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(n)', variant: 'info' },
          { label: 'Hash Map', variant: 'default' },
        ]}
      />

      {/* Problem Card */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Problem Statement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Given an array of integers <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-sm font-mono">nums</code> and 
              an integer <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-sm font-mono">k</code>, 
              return the total number of <strong>continuous subarrays</strong> whose sum equals to <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-sm font-mono">k</code>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Example Input
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <div>
                  <span className="text-slate-600 dark:text-slate-400">nums = </span>
                  <span className="text-green-600 dark:text-green-400">[1, 2, 3, -2, 5]</span>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400">k = </span>
                  <span className="text-green-600 dark:text-green-400">5</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4" />
                Expected Output
              </h4>
              <div className="font-mono text-sm">
                <span className="text-slate-600 dark:text-slate-400">Output = </span>
                <span className="text-green-600 dark:text-green-400 font-bold">2</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Subarrays: [2,3] and [-2,5]
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Approach Card */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Hash className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Approach: Prefix Sum + Hash Map
          </CardTitle>
          <CardDescription>
            Use cumulative sum and hash map to efficiently find subarrays
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Key Insight</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                If we have a cumulative sum (prefix sum) at index <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">i</code>, 
                and we want a subarray sum of <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">k</code>, 
                we need to check if <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">(prefixSum - k)</code> exists before index <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">i</code>.
              </p>
              <div className="p-3 bg-white dark:bg-slate-900 rounded border border-green-300 dark:border-green-700">
                <code className="text-sm text-green-700 dark:text-green-300">
                  If prefixSum[i] - prefixSum[j] = k, then subarray[j+1...i] sums to k
                </code>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex gap-3 items-start p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Initialize HashMap</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Store {'{0: 1}'} to handle subarrays starting from index 0</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Calculate Prefix Sum</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">For each element, add it to running prefix sum</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Check (prefixSum - k)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">If found in map, add its frequency to count</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">Update HashMap</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Store current prefix sum with its frequency</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Hash className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Visual Animation
          </CardTitle>
          <CardDescription>Watch how prefix sum and hash map work together</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-green-300 dark:border-green-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Stepper Controls */}
              {currentStep >= 0 && (
                <div className="flex items-center justify-center gap-3">
                  <Button
                    onClick={handlePrevious}
                    disabled={isAnimating || currentStep === 0}
                    variant="outline"
                    size="sm"
                    className="border-green-300 dark:border-green-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900/40 rounded-lg border border-green-300 dark:border-green-700">
                    <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-green-300 dark:border-green-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">subarraySum.js</span>
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
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-400 dark:border-amber-500'
                          : lineData.comment
                          ? 'opacity-50'
                          : ''
                      }`}
                    >
                      <span className="text-slate-400 dark:text-slate-600 select-none w-6 text-right flex-shrink-0">
                        {lineData.line}
                      </span>
                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                          {lineData.comment && <span className="text-slate-500 dark:text-slate-500 ml-2">{lineData.comment}</span>}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-green-600 dark:text-green-400 font-semibold">
                            {lineData.values}
                          </span>
                        )}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-900 dark:text-green-100 mb-3">
                Array: [1, 2, 3, -2, 5] | Target K = {k}
              </h4>
              <div className="flex gap-2 justify-center mb-4">
                {array.map((num, idx) => {
                  const isHighlighted = steps[currentStep]?.highlighted.includes(idx);
                  const isInSubarray = steps[currentStep]?.subarrayRange && 
                    idx >= steps[currentStep].subarrayRange[0] && 
                    idx <= steps[currentStep].subarrayRange[1];
                  
                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col items-center transition-all duration-300 ${
                        isHighlighted ? 'scale-110' : ''
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          isInSubarray
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg ring-2 ring-green-400'
                            : isHighlighted
                            ? 'bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-lg'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        i={idx}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hash Map Display */}
            <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Hash Map (PrefixSum → Frequency)
              </h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(steps[currentStep]?.hashMap || {}).map(([key, value]) => (
                  <div
                    key={key}
                    className="px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border border-green-300 dark:border-green-700"
                  >
                    <span className="text-sm font-mono">
                      <span className="text-green-700 dark:text-green-300 font-bold">{key}</span>
                      {' → '}
                      <span className="text-green-600 dark:text-green-400">{value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current State */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Prefix Sum</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {steps[currentStep]?.prefixSum}
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Subarrays Found</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {steps[currentStep]?.count}
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Index</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {steps[currentStep]?.index === -1 ? '-' : steps[currentStep]?.index}
                </div>
              </div>
            </div>

            {/* Step Description */}
            {steps[currentStep] && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-300 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    steps[currentStep].found 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {steps[currentStep].found ? <Check className="w-4 h-4" /> : <Hash className="w-4 h-4" />}
                  </div>
                  <p className="text-sm text-green-900 dark:text-green-100 font-medium leading-relaxed">
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Time Complexity</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="font-mono border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-200"
                  >
                    O(n)
                  </Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Single pass through array</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We iterate through the array once, and hash map operations are O(1)
                </p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Space Complexity</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="font-mono border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800/50 dark:bg-sky-950/30 dark:text-sky-200"
                  >
                    O(n)
                  </Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Hash map storage</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  In worst case, we store n prefix sums in the hash map
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Code */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle>Complete Implementation</CardTitle>
          <CardDescription>Full solution with detailed comments</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`function subarraySum(nums, k) {
  // HashMap to store prefix sum frequencies
  const map = new Map();
  map.set(0, 1); // Handle subarrays starting from index 0
  
  let prefixSum = 0;
  let count = 0;
  
  for (let num of nums) {
    // Add current element to prefix sum
    prefixSum += num;
    
    // Check if (prefixSum - k) exists in map
    // If yes, it means there are subarrays ending at current index with sum = k
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    
    // Store/update current prefix sum in map
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  
  return count;
}

// Example usage
console.log(subarraySum([1, 2, 3, -2, 5], 5)); // Output: 2
console.log(subarraySum([1, 1, 1], 2));        // Output: 2
console.log(subarraySum([1, 2, 3], 3));        // Output: 2`}
          />
        </CardContent>
      </Card>

      {/* Important Edge Cases */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <X className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            Important Edge Cases
          </CardTitle>
          <CardDescription>Critical scenarios to consider</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">1. Empty Array</h4>
              <code className="text-sm bg-white dark:bg-slate-900 px-2 py-1 rounded">
                nums = [], k = 0 → Output: 0
              </code>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                No subarrays exist in empty array
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">2. Single Element Equals K</h4>
              <code className="text-sm bg-white dark:bg-slate-900 px-2 py-1 rounded">
                nums = [5], k = 5 → Output: 1
              </code>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                The map.set(0, 1) initialization handles this case
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">3. Negative Numbers</h4>
              <code className="text-sm bg-white dark:bg-slate-900 px-2 py-1 rounded">
                nums = [1, -1, 0], k = 0 → Output: 3
              </code>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Multiple subarrays: [-1, 1], [0], [1, -1, 0] all sum to 0
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">4. Duplicate Prefix Sums</h4>
              <code className="text-sm bg-white dark:bg-slate-900 px-2 py-1 rounded">
                nums = [1, 1, 1], k = 2 → Output: 2
              </code>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Same prefix sum can occur multiple times - that's why we store frequency
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">5. No Valid Subarray</h4>
              <code className="text-sm bg-white dark:bg-slate-900 px-2 py-1 rounded">
                nums = [1, 2, 3], k = 10 → Output: 0
              </code>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                No subarray sums to k, return 0
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

	      {/* Related Problems */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Related Problems
          </CardTitle>
          <CardDescription>Practice similar problems to master the pattern</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
	            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
	              <div className="flex items-start justify-between mb-2">
	                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Continuous Subarray Sum</h4>
	                <Badge
	                  variant="outline"
	                  className="border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-200"
	                >
	                  Medium
	                </Badge>
	              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Check if array has subarray of size at least 2 that sums to multiple of k
              </p>
            </div>

	            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
	              <div className="flex items-start justify-between mb-2">
	                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Contiguous Array</h4>
	                <Badge
	                  variant="outline"
	                  className="border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-200"
	                >
	                  Medium
	                </Badge>
	              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Find maximum length subarray with equal 0s and 1s
              </p>
            </div>

	            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
	              <div className="flex items-start justify-between mb-2">
	                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Find Pivot Index</h4>
	                <Badge
	                  variant="outline"
	                  className="border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-200"
	                >
	                  Easy
	                </Badge>
	              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Find index where left sum equals right sum using prefix sum
              </p>
            </div>

	            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
	              <div className="flex items-start justify-between mb-2">
	                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Range Sum Query</h4>
	                <Badge
	                  variant="outline"
	                  className="border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-200"
	                >
	                  Easy
	                </Badge>
	              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Efficiently calculate sum of elements in a given range
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Key Takeaways
          </CardTitle>
          <CardDescription>Important concepts to remember</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex gap-3 items-start p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-100">Prefix Sum Pattern</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  If <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">prefixSum[i] - prefixSum[j] = k</code>, 
                  then subarray from <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">j+1</code> to <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">i</code> sums to <code className="px-1 py-0.5 bg-white dark:bg-slate-800 rounded text-xs">k</code>
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-100">Initialize with {'{0: 1}'}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Essential for handling subarrays that start from index 0 and directly sum to k
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-100">Store Frequency, Not Just Existence</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Same prefix sum can occur multiple times, each occurrence represents a valid subarray
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-100">O(n) Time vs O(n²) Brute Force</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Hash map reduces checking all subarrays from O(n²) to O(n) single pass
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                5
              </div>
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-100">Works with Negative Numbers</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Unlike sliding window which requires all positive numbers, this approach handles negatives
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                6
              </div>
              <div>
                <p className="font-medium text-purple-900 dark:text-purple-100">Classic Interview Problem</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Frequently asked at FAANG companies - master this pattern!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
