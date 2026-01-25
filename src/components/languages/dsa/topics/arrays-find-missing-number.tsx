'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Search, Calculator
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FindMissingNumber() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem-specific data
  const [numbers] = useState([3, 0, 1]); // Example array with missing number
  const [expectedSum, setExpectedSum] = useState(0);
  const [actualSum, setActualSum] = useState(0);
  const [missingNumber, setMissingNumber] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  // Steps array - COMPREHENSIVE BREAKDOWN
  const steps = [
    // INITIALIZATION (5 steps)
    {
      step: 1,
      description: '📋 Initialize: Set n = length of array = 3',
      action: 'init',
      currentLine: 1,
      expectedSum: 0,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: null,
    },
    {
      step: 2,
      description: '📋 Calculate expected sum using formula: n * (n + 1) / 2',
      action: 'calculate',
      currentLine: 2,
      expectedSum: 0,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: null,
    },
    {
      step: 3,
      description: '📊 Compute: 3 * (3 + 1) / 2 = 3 * 4 / 2 = 6',
      action: 'calculate',
      currentLine: 2,
      expectedSum: 6,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: null,
    },
    {
      step: 4,
      description: '📋 Initialize actualSum = 0 for summing array elements',
      action: 'init',
      currentLine: 3,
      expectedSum: 6,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: null,
    },
    {
      step: 5,
      description: '📋 Initialize index i = 0 for array traversal',
      action: 'init',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: null,
    },

    // ITERATION 1 - Process first element (6 steps)
    {
      step: 6,
      description: '🔄 Loop Iteration: Starting with i = 0',
      action: 'loop-start',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: 0,
    },
    {
      step: 7,
      description: '✅ Loop Check: i(0) < n(3)? YES! Continue...',
      action: 'loop-check',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: 0,
    },
    {
      step: 8,
      description: '📍 Access: nums[0] = 3',
      action: 'examine',
      currentLine: 5,
      expectedSum: 6,
      actualSum: 0,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: 0,
    },
    {
      step: 9,
      description: '📊 Update: actualSum = 0 + 3 = 3',
      action: 'update',
      currentLine: 5,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 0,
      highlightedIndex: 0,
    },
    {
      step: 10,
      description: '➕ Increment: i++ (0 → 1)',
      action: 'move',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 1,
      highlightedIndex: null,
    },

    // ITERATION 2 - Process second element (6 steps)
    {
      step: 11,
      description: '🔄 Loop Iteration: Now i = 1',
      action: 'loop-start',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 1,
      highlightedIndex: 1,
    },
    {
      step: 12,
      description: '✅ Loop Check: i(1) < n(3)? YES! Continue...',
      action: 'loop-check',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 1,
      highlightedIndex: 1,
    },
    {
      step: 13,
      description: '📍 Access: nums[1] = 0',
      action: 'examine',
      currentLine: 5,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 1,
      highlightedIndex: 1,
    },
    {
      step: 14,
      description: '📊 Update: actualSum = 3 + 0 = 3',
      action: 'update',
      currentLine: 5,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 1,
      highlightedIndex: 1,
    },
    {
      step: 15,
      description: '➕ Increment: i++ (1 → 2)',
      action: 'move',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 2,
      highlightedIndex: null,
    },

    // ITERATION 3 - Process third element (6 steps)
    {
      step: 16,
      description: '🔄 Loop Iteration: Now i = 2',
      action: 'loop-start',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 2,
      highlightedIndex: 2,
    },
    {
      step: 17,
      description: '✅ Loop Check: i(2) < n(3)? YES! Continue...',
      action: 'loop-check',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 2,
      highlightedIndex: 2,
    },
    {
      step: 18,
      description: '📍 Access: nums[2] = 1',
      action: 'examine',
      currentLine: 5,
      expectedSum: 6,
      actualSum: 3,
      missingNumber: 0,
      currentIndex: 2,
      highlightedIndex: 2,
    },
    {
      step: 19,
      description: '📊 Update: actualSum = 3 + 1 = 4',
      action: 'update',
      currentLine: 5,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 0,
      currentIndex: 2,
      highlightedIndex: 2,
    },
    {
      step: 20,
      description: '➕ Increment: i++ (2 → 3)',
      action: 'move',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 0,
      currentIndex: 3,
      highlightedIndex: null,
    },

    // LOOP TERMINATION (2 steps)
    {
      step: 21,
      description: '🎯 Loop Check: i(3) < n(3)? NO! Loop ends.',
      action: 'loop-complete',
      currentLine: 4,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 0,
      currentIndex: 3,
      highlightedIndex: null,
    },
    {
      step: 22,
      description: '📋 Calculate missing number: expectedSum - actualSum',
      action: 'calculate',
      currentLine: 6,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 0,
      currentIndex: 3,
      highlightedIndex: null,
    },

    // FINAL CALCULATION (3 steps)
    {
      step: 23,
      description: '📊 Compute: 6 - 4 = 2',
      action: 'calculate',
      currentLine: 6,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 2,
      currentIndex: 3,
      highlightedIndex: null,
    },
    {
      step: 24,
      description: '✅ Found! Missing number is 2',
      action: 'found',
      currentLine: 7,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 2,
      currentIndex: 3,
      highlightedIndex: null,
    },
    {
      step: 25,
      description: '🎯 Return result: 2',
      action: 'result',
      currentLine: 7,
      expectedSum: 6,
      actualSum: 4,
      missingNumber: 2,
      currentIndex: 3,
      highlightedIndex: null,
    },
  ];

  // Helper functions
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { 
        line: 1, 
        code: 'function missingNumber(nums) {', 
        active: stepData.currentLine === 1, 
        indent: 0 
      },
      { 
        line: 2, 
        code: '  const n = nums.length;', 
        active: stepData.currentLine === 2, 
        indent: 1,
        values: stepData.currentLine === 2 ? `n=${stepData.currentIndex}` : ''
      },
      { 
        line: 3, 
        code: '  const expectedSum = n * (n + 1) / 2;', 
        active: stepData.currentLine === 3, 
        indent: 1,
        values: stepData.currentLine === 3 ? `expectedSum=${stepData.expectedSum}` : ''
      },
      { 
        line: 4, 
        code: '  let actualSum = 0;', 
        active: stepData.currentLine === 4, 
        indent: 1,
        values: stepData.currentLine === 4 ? `actualSum=${stepData.actualSum}` : ''
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
        code: '    actualSum += nums[i];', 
        active: stepData.currentLine === 6, 
        indent: 2,
        values: stepData.currentLine === 6 ? `actualSum=${stepData.actualSum}` : ''
      },
      { 
        line: 7, 
        code: '  }', 
        active: stepData.currentLine === 7, 
        indent: 1 
      },
      { 
        line: 8, 
        code: '  return expectedSum - actualSum;', 
        active: stepData.currentLine === 8, 
        indent: 1,
        values: stepData.currentLine === 8 ? `return=${stepData.missingNumber}` : ''
      },
      { 
        line: 9, 
        code: '}', 
        active: stepData.currentLine === 9, 
        indent: 0 
      },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setExpectedSum(step.expectedSum);
    setActualSum(step.actualSum);
    setMissingNumber(step.missingNumber);
    setCurrentIndex(step.currentIndex);
    setHighlightedIndex(step.highlightedIndex);
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

  return (
    <>
      <PageHeader
        icon={Search}
        category="DSA · Arrays"
        title="Find Missing Number in Arrays"
        description="Learn to find the missing number in an array containing n distinct numbers from 0 to n using mathematical approach"
        colorTheme="blue"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Mathematical', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" />
              What is a Missing Number Problem?
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given an array of size <strong>n</strong> containing distinct numbers from <strong>0</strong> to <strong>n</strong>, 
                find the one number that is missing from the array.
              </p>
              
              {/* Input/Output Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-sm text-slate-900 dark:text-slate-100">
                    [3, 0, 1]
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Array of size 3, numbers from 0 to 3
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-sm text-green-900 dark:text-green-100">
                    2
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Missing number found
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparisons */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">
              Comparing Different Cases
            </h4>
            
            {/* Valid Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-700 dark:text-green-300">Valid Case Example</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded">Valid ✓</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-600 dark:text-slate-400">Array:</span>
                    <div className="flex gap-1">
                      {[3, 0, 1].map((num, idx) => (
                        <div key={idx} className="w-8 h-8 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded flex items-center justify-center text-sm font-bold text-blue-800 dark:text-blue-200">
                          {num}
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-600 dark:text-slate-400">→ Missing: <strong className="text-green-600 dark:text-green-400">2</strong></span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Contains numbers 0, 1, 3. Missing number 2 from range 0-3.
                  </div>
                </div>
              </div>
            </div>

            {/* Another Valid Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Another Example</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded">Valid ✓</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-600 dark:text-slate-400">Array:</span>
                    <div className="flex gap-1">
                      {[0, 1].map((num, idx) => (
                        <div key={idx} className="w-8 h-8 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded flex items-center justify-center text-sm font-bold text-blue-800 dark:text-blue-200">
                          {num}
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-600 dark:text-slate-400">→ Missing: <strong className="text-green-600 dark:text-green-400">2</strong></span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Contains numbers 0, 1. Missing number 2 from range 0-2.
                  </div>
                </div>
              </div>
            </div>

            {/* Edge Case */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-orange-700 dark:text-orange-300">Edge Case</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/40 rounded">Edge ⚠️</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-600 dark:text-slate-400">Array:</span>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded flex items-center justify-center text-sm font-bold text-blue-800 dark:text-blue-200">
                        0
                      </div>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400">→ Missing: <strong className="text-green-600 dark:text-green-400">1</strong></span>
                  </div>
                  <div className="text-xs text-orange-600 dark:text-orange-400">
                    Single element array. Missing number 1 from range 0-1.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              How the Mathematical Approach Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Calculate Expected Sum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Use formula for sum of first n numbers:</div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded">
                      Sum = n × (n + 1) ÷ 2
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">For n = 3:</div>
                      <div className="font-mono text-lg text-emerald-600 dark:text-emerald-400 mt-1">
                        3 × (3 + 1) ÷ 2 = 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Calculate Actual Sum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Sum all elements in the array:</div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded">
                      actualSum = 3 + 0 + 1 = 4
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex gap-2">
                      {[3, 0, 1].map((num, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded flex items-center justify-center text-sm font-bold text-blue-800 dark:text-blue-200">
                            {num}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {idx === 0 ? '3' : idx === 1 ? '+ 0' : '+ 1'}
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 ml-2">= 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Find Missing Number</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border mb-3">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Subtract actual sum from expected sum:</div>
                    <div className="font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded">
                      missing = expectedSum - actualSum
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Calculation:</div>
                      <div className="font-mono text-lg text-emerald-600 dark:text-emerald-400 mt-1">
                        6 - 4 = 2
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400 font-bold mt-2">
                        ✓ Missing number is 2
                      </div>
                    </div>
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
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">Mathematical formula: Sum of first n numbers = n(n+1)/2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">Time complexity: O(n) - single pass through array</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">Space complexity: O(1) - only using variables</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">Works for any array with distinct numbers from 0 to n</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how the algorithm works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline">
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
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
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">missing-number.js</span>
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
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-400 dark:border-blue-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
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

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">expectedSum:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].expectedSum}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">actualSum:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].actualSum}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">missing:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].missingNumber}</span>
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
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'loop-check' && '✅ Loop Check'}
                      {steps[currentStep].action === 'examine' && '📍 Access Element'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating'}
                      {steps[currentStep].action === 'update' && '➕ Updating'}
                      {steps[currentStep].action === 'move' && '➡️ Moving'}
                      {steps[currentStep].action === 'loop-complete' && '🎯 Loop Complete'}
                      {steps[currentStep].action === 'found' && '✅ Found!'}
                      {steps[currentStep].action === 'result' && '🎯 Result'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">expectedSum:</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].expectedSum}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 dark:text-slate-400">actualSum:</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].actualSum}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-slate-500 mb-2">ARRAY</div>
                    <div className="flex gap-2">
                      {numbers.map((num, idx) => {
                        const isHighlighted = highlightedIndex === idx;
                        const isProcessed = idx < currentIndex;
                        
                        return (
                          <div key={idx} className="relative flex flex-col items-center gap-2">
                            <div
                              className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                                isHighlighted
                                  ? 'bg-blue-200 dark:bg-blue-800 border-blue-500 scale-125 ring-4 ring-blue-300 animate-pulse'
                                  : isProcessed
                                  ? 'bg-green-100 dark:bg-green-800 border-green-400'
                                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                              }`}
                            >
                              {num}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              [{idx}]
                            </div>
                            {isHighlighted && (
                              <div className="absolute -top-8 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                Current
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs font-semibold text-slate-500 mb-2">RANGE 0-n</div>
                    <div className="flex gap-2">
                      {[0, 1, 2, 3].map((num) => {
                        const isMissing = num === steps[currentStep].missingNumber && steps[currentStep].missingNumber > 0;
                        
                        return (
                          <div key={num} className="relative flex flex-col items-center gap-2">
                            <div
                              className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                                isMissing
                                  ? 'bg-red-100 dark:bg-red-800 border-red-400 scale-110'
                                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                              }`}
                            >
                              {num}
                            </div>
                            {isMissing && (
                              <div className="absolute -top-8 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                Missing!
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Calculation Display */}
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Current Calculation
                    </div>
                    <div className="font-mono text-lg text-blue-700 dark:text-blue-300">
                      {steps[currentStep].expectedSum} - {steps[currentStep].actualSum} = {steps[currentStep].missingNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Code Example */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Complete Code Example
          </CardTitle>
          <CardDescription>See the full implementation with function call and output</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            code={`function findMissingNumber(nums) {
  // Calculate the expected sum of numbers from 0 to n
  const n = nums.length;
  const expectedSum = n * (n + 1) / 2;
  
  // Calculate the actual sum of array elements
  let actualSum = 0;
  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }
  
  // The missing number is the difference
  return expectedSum - actualSum;
}

// Test the function with different examples
console.log("=== Find Missing Number Examples ===");

// Example 1: Missing number is 2
const arr1 = [3, 0, 1];
const result1 = findMissingNumber(arr1);
console.log("Array:", arr1);
console.log("Missing number:", result1); // Output: 2

// Example 2: Missing number is 1
const arr2 = [0, 2];
const result2 = findMissingNumber(arr2);
console.log("\\nArray:", arr2);
console.log("Missing number:", result2); // Output: 1

// Example 3: Missing number is 0
const arr3 = [1];
const result3 = findMissingNumber(arr3);
console.log("\\nArray:", arr3);
console.log("Missing number:", result3); // Output: 0

// Example 4: Missing number is 4
const arr4 = [0, 1, 2, 3];
const result4 = findMissingNumber(arr4);
console.log("\\nArray:", arr4);
console.log("Missing number:", result4); // Output: 4

// Example 5: Larger array
const arr5 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result5 = findMissingNumber(arr5);
console.log("\\nArray:", arr5);
console.log("Missing number:", result5); // Output: 8`}
            language="javascript"
            title="find-missing-number.js"
          />
        </CardContent>
      </Card>
    </>
  );
}
