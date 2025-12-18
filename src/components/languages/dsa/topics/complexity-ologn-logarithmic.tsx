'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Lightbulb, CheckCircle, Play, RotateCcw, TrendingUp, BookOpen, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LogarithmicTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [searchTarget] = useState(7);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const steps = [
    {
      step: 1,
      left: 0,
      right: 7,
      mid: -1,
      found: false,
      currentLine: 2,
      description: '📋 Initialize: Set left pointer = 0 (start of array). Binary search always starts from the beginning.'
    },
    {
      step: 2,
      left: 0,
      right: 7,
      mid: -1,
      found: false,
      currentLine: 3,
      description: '📋 Initialize: Set right pointer = 7 (arr.length - 1). This marks the end of our search range.'
    },
    {
      step: 3,
      left: 0,
      right: 7,
      mid: -1,
      found: false,
      currentLine: 5,
      description: '🔄 While Loop Check: Is left (0) ≤ right (7)? Yes! We have a valid search range, continue.'
    },
    {
      step: 4,
      left: 0,
      right: 7,
      mid: 3,
      found: false,
      currentLine: 6,
      description: '🧮 Calculate Middle: mid = floor((0 + 7) / 2) = 3. We check the middle element to divide the problem in half.'
    },
    {
      step: 5,
      left: 0,
      right: 7,
      mid: 3,
      found: false,
      currentLine: 8,
      description: '🔍 Compare: Is arr[3] = 4 equal to target 7? No (4 ≠ 7). We need to decide which half to search.'
    },
    {
      step: 6,
      left: 0,
      right: 7,
      mid: 3,
      found: false,
      currentLine: 12,
      description: '➡️ Decide: 4 < 7, so target must be in the RIGHT half. Update left = mid + 1 = 4. Eliminate left half!'
    },
    {
      step: 7,
      left: 4,
      right: 7,
      mid: 3,
      found: false,
      currentLine: 5,
      description: '🔄 Loop Iteration 2: Is left (4) ≤ right (7)? Yes! Search range is now [4...7]. Continue searching.'
    },
    {
      step: 8,
      left: 4,
      right: 7,
      mid: 5,
      found: false,
      currentLine: 6,
      description: '🧮 Calculate Middle: mid = floor((4 + 7) / 2) = 5. Check the middle of the new range [4...7].'
    },
    {
      step: 9,
      left: 4,
      right: 7,
      mid: 5,
      found: false,
      currentLine: 8,
      description: '🔍 Compare: Is arr[5] = 6 equal to target 7? No (6 ≠ 7). Still not found, continue.'
    },
    {
      step: 10,
      left: 4,
      right: 7,
      mid: 5,
      found: false,
      currentLine: 12,
      description: '➡️ Decide: 6 < 7, so target is still in the RIGHT half. Update left = 5 + 1 = 6. Getting closer!'
    },
    {
      step: 11,
      left: 6,
      right: 7,
      mid: 5,
      found: false,
      currentLine: 5,
      description: '🔄 Loop Iteration 3: Is left (6) ≤ right (7)? Yes! Search range is now [6...7]. Almost there!'
    },
    {
      step: 12,
      left: 6,
      right: 7,
      mid: 6,
      found: false,
      currentLine: 6,
      description: '🧮 Calculate Middle: mid = floor((6 + 7) / 2) = 6. Checking the middle of final range [6...7].'
    },
    {
      step: 13,
      left: 6,
      right: 7,
      mid: 6,
      found: true,
      currentLine: 8,
      description: '✅ Found! arr[6] = 7 equals target 7. Binary search successfully found the element!'
    },
    {
      step: 14,
      left: 6,
      right: 7,
      mid: 6,
      found: true,
      currentLine: 9,
      description: '🎉 Return mid = 6. Target found at index 6! Notice we only checked 3 elements out of 8. That\'s O(log n) efficiency!'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function binarySearch(arr, target) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let left = 0;', active: stepData.currentLine === 2, indent: 1, values: `left = ${stepData.left}` },
      { line: 3, code: '  let right = arr.length - 1;', active: stepData.currentLine === 3, indent: 1, values: `right = ${stepData.right}` },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  while (left <= right) {', active: stepData.currentLine === 5, indent: 1, values: `${stepData.left} <= ${stepData.right} = ${stepData.left <= stepData.right ? '✓' : '✗'}` },
      { line: 6, code: '    let mid = Math.floor((left + right) / 2);', active: stepData.currentLine === 6, indent: 2, values: stepData.mid >= 0 ? `mid = ${stepData.mid}` : '' },
      { line: 7, code: '    ', active: false, indent: 2 },
      { line: 8, code: '    if (arr[mid] === target) {', active: stepData.currentLine === 8, indent: 2, values: stepData.mid >= 0 ? `${sortedArray[stepData.mid]} === ${searchTarget} = ${stepData.found ? '✓' : '✗'}` : '' },
      { line: 9, code: '      return mid;', active: stepData.currentLine === 9, indent: 3, values: stepData.found ? `return ${stepData.mid}` : '' },
      { line: 10, code: '    }', active: false, indent: 2 },
      { line: 11, code: '    ', active: false, indent: 2 },
      { line: 12, code: '    if (arr[mid] < target) {', active: stepData.currentLine === 12, indent: 2, values: stepData.mid >= 0 && stepData.currentLine === 12 ? `${sortedArray[stepData.mid]} < ${searchTarget}` : '' },
      { line: 13, code: '      left = mid + 1;', active: stepData.currentLine === 12, indent: 3, values: stepData.currentLine === 12 && stepData.mid >= 0 ? `left = ${stepData.mid + 1}` : '' },
      { line: 14, code: '    } else {', active: false, indent: 2 },
      { line: 15, code: '      right = mid - 1;', active: stepData.currentLine === 15, indent: 3, values: stepData.currentLine === 15 && stepData.mid >= 0 ? `right = ${stepData.mid - 1}` : '' },
      { line: 16, code: '    }', active: false, indent: 2 },
      { line: 17, code: '  }', active: false, indent: 1 },
      { line: 18, code: '  ', active: false, indent: 1 },
      { line: 19, code: '  return -1;', active: stepData.currentLine === 19, indent: 1 },
      { line: 20, code: '}', active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);

    const speedDelay = animationSpeed === 'slow' ? 2000 : animationSpeed === 'fast' ? 800 : 1200;

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
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Activity}
        category="DSA · Time Complexity"
        title="O(log n) - Logarithmic Time Complexity"
        description="One of the most efficient complexities - cuts the problem in half with each step!"
        colorTheme="orange"
        badges={[
          { label: 'O(log n)', variant: 'success' },
          { label: 'Logarithmic', variant: 'default' },
          { label: '⚡ Very Fast', variant: 'info' },
        ]}
      />

      {/* What is O(log n)? */}
      <Card className="border-lime-200 dark:border-lime-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-lime-600" />
            What is O(log n) Logarithmic Time?
          </CardTitle>
          <CardDescription>
            The magic of "divide and conquer"
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/30 dark:to-green-950/30 p-6 rounded-xl border-2 border-lime-200 dark:border-lime-700">
            <h4 className="font-bold text-lime-900 dark:text-lime-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(log n) means "logarithmic time"</strong> - the operation gets only <strong>slightly slower</strong> as data grows, 
                because you <strong>cut the problem in half</strong> with each step!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-lime-300 dark:border-lime-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 📖 Finding a Word in a Dictionary
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>You open the dictionary in the <strong>middle</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Your word comes before/after? Eliminate <strong>half the book</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Repeat with remaining half → <strong>find word in ~10 steps</strong> even with 1,000 pages! 🚀</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-lime-100 to-green-100 dark:from-lime-900/30 dark:to-green-900/30 rounded-lg border-l-4 border-lime-500">
                <p className="text-sm font-bold text-lime-900 dark:text-lime-100 mb-2">
                  🎯 The Power of O(log n)
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>1,000 items → ~10 steps</div>
                  <div>1,000,000 items → ~20 steps</div>
                  <div>1,000,000,000 items → ~30 steps</div>
                  <div>Even millions? Still fast! ⚡</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrammatic Example */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-6 h-6 text-orange-600" />
            Visual Breakdown: How Binary Search Works
          </CardTitle>
          <CardDescription>Step-by-step diagram showing binary search for target 7 in [1, 2, 3, 4, 5, 6, 7, 8]</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            
            {/* Step-by-Step Search Process */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6 text-center">
                🔍 Binary Search Process
              </h4>
              
              <div className="space-y-8">
                {/* Initial State */}
                <div>
                  <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    Initial Array (8 elements) - Looking for 7
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                      <div
                        key={idx}
                        className="w-14 h-14 bg-lime-100 dark:bg-lime-900 border-2 border-lime-400 dark:border-lime-600 rounded flex flex-col items-center justify-center font-mono font-bold text-lime-900 dark:text-lime-100"
                      >
                        <span>{num}</span>
                        <span className="text-xs text-slate-500">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Left = 0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-rose-500 rounded"></div>
                      <span>Right = 7</span>
                    </div>
                    <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded font-semibold">
                      Search Range: 8 elements
                    </div>
                  </div>
                </div>

                {/* Iteration 1 */}
                <div>
                  <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    Iteration 1: Check Middle (mid = 3)
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                      <div
                        key={idx}
                        className={`w-14 h-14 border-2 rounded flex flex-col items-center justify-center font-mono font-bold ${
                          idx === 3
                            ? 'bg-orange-500 text-white border-orange-400 scale-110 shadow-lg'
                            : 'bg-lime-100 dark:bg-lime-900 border-lime-400 dark:border-lime-600 text-lime-900 dark:text-lime-100'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-xs opacity-70">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-3 bg-white dark:bg-slate-900 rounded-lg border border-orange-300">
                      <p className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                        Compare: arr[3] = 4 vs target 7
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        4 {'<'} 7 → Search RIGHT half
                      </p>
                    </div>
                  </div>
                </div>

                {/* After Iteration 1 - Eliminated Left */}
                <div>
                  <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    Eliminate Left Half (4 elements eliminated!)
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                      <div
                        key={idx}
                        className={`w-14 h-14 border-2 rounded flex flex-col items-center justify-center font-mono font-bold ${
                          idx <= 3
                            ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-600 opacity-40'
                            : 'bg-lime-100 dark:bg-lime-900 border-lime-400 dark:border-lime-600 text-lime-900 dark:text-lime-100'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-xs opacity-70">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Left = 4</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-rose-500 rounded"></div>
                      <span>Right = 7</span>
                    </div>
                    <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded font-semibold">
                      Search Range: 4 elements (halved!)
                    </div>
                  </div>
                </div>

                {/* Iteration 2 */}
                <div>
                  <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    Iteration 2: Check Middle (mid = 5)
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                      <div
                        key={idx}
                        className={`w-14 h-14 border-2 rounded flex flex-col items-center justify-center font-mono font-bold ${
                          idx <= 3
                            ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-600 opacity-40'
                            : idx === 5
                            ? 'bg-orange-500 text-white border-orange-400 scale-110 shadow-lg'
                            : 'bg-lime-100 dark:bg-lime-900 border-lime-400 dark:border-lime-600 text-lime-900 dark:text-lime-100'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-xs opacity-70">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-3 bg-white dark:bg-slate-900 rounded-lg border border-orange-300">
                      <p className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                        Compare: arr[5] = 6 vs target 7
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        6 {'<'} 7 → Search RIGHT half again
                      </p>
                    </div>
                  </div>
                </div>

                {/* After Iteration 2 */}
                <div>
                  <div className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                    Eliminate More Elements (6 total eliminated!)
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                      <div
                        key={idx}
                        className={`w-14 h-14 border-2 rounded flex flex-col items-center justify-center font-mono font-bold ${
                          idx <= 5
                            ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-600 opacity-40'
                            : 'bg-lime-100 dark:bg-lime-900 border-lime-400 dark:border-lime-600 text-lime-900 dark:text-lime-100'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-xs opacity-70">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Left = 6</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-rose-500 rounded"></div>
                      <span>Right = 7</span>
                    </div>
                    <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded font-semibold">
                      Search Range: 2 elements
                    </div>
                  </div>
                </div>

                {/* Iteration 3 - Found */}
                <div>
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                    Iteration 3: Found! (mid = 6)
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                      <div
                        key={idx}
                        className={`w-14 h-14 border-2 rounded flex flex-col items-center justify-center font-mono font-bold ${
                          idx <= 5
                            ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-600 opacity-40'
                            : idx === 6
                            ? 'bg-green-500 text-white border-green-400 scale-125 shadow-2xl ring-4 ring-green-300'
                            : 'bg-lime-100 dark:bg-lime-900 border-lime-400 dark:border-lime-600 text-lime-900 dark:text-lime-100'
                        }`}
                      >
                        <span>{num}</span>
                        <span className="text-xs opacity-70">[{idx}]</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                      <p className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                        ✅ Found! arr[6] = 7
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Only checked 3 elements out of 8! That's the power of O(log n)! 🚀
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why O(log n) Explanation */}
            <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/30 dark:to-green-950/30 p-6 rounded-xl border-2 border-lime-200 dark:border-lime-700">
              <h4 className="font-bold text-lime-900 dark:text-lime-100 mb-4">
                🧮 Why is this O(log n)?
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-lime-300 dark:border-lime-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">1️⃣</div>
                    <div>
                      <h5 className="font-semibold text-lime-900 dark:text-lime-100 mb-2">
                        Halving the Problem Each Step
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Every comparison eliminates half of the remaining elements.
                      </p>
                      <div className="mt-2 text-xs font-mono bg-lime-50 dark:bg-lime-900/30 p-2 rounded space-y-1">
                        <div>Start: 8 elements</div>
                        <div>After step 1: 4 elements (8 ÷ 2)</div>
                        <div>After step 2: 2 elements (4 ÷ 2)</div>
                        <div>After step 3: 1 element (2 ÷ 2) → Found!</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-lime-300 dark:border-lime-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">2️⃣</div>
                    <div>
                      <h5 className="font-semibold text-lime-900 dark:text-lime-100 mb-2">
                        Logarithmic Growth
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        How many times can you divide n by 2 until you reach 1? That's log₂(n)!
                      </p>
                      <div className="mt-2 text-xs font-mono bg-lime-50 dark:bg-lime-900/30 p-2 rounded space-y-1">
                        <div><strong>8 elements:</strong> 8 → 4 → 2 → 1 = 3 steps (log₂(8) = 3)</div>
                        <div><strong>1024 elements:</strong> 10 steps (log₂(1024) = 10)</div>
                        <div><strong>1,000,000 elements:</strong> ~20 steps! 🤯</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-lime-100 to-green-100 dark:from-lime-900/30 dark:to-green-900/30 rounded-lg border-2 border-lime-500">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h5 className="font-bold text-lime-900 dark:text-lime-100 mb-2">
                        The Formula
                      </h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>Maximum steps = log₂(n)</strong>
                      </p>
                      <div className="mt-2 text-xs bg-white dark:bg-slate-900 p-2 rounded">
                        Because we divide the search space in half each time, the number of steps grows logarithmically.
                        <br />
                        <strong className="text-lime-600 dark:text-lime-400">Doubling input size only adds 1 more step!</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison with Linear Search */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
                ⚡ Binary Search vs Linear Search
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Binary Search - O(log n)
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <div>✅ 8 items → 3 comparisons</div>
                    <div>✅ 1,000 items → ~10 comparisons</div>
                    <div>✅ 1,000,000 items → ~20 comparisons</div>
                  </div>
                  <p className="text-xs mt-2 text-orange-600 dark:text-orange-400 font-semibold">
                    ⚠️ Requires sorted array!
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300">
                  <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🐌</span>
                    Linear Search - O(n)
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <div>8 items → up to 8 comparisons</div>
                    <div>1,000 items → up to 1,000 comparisons</div>
                    <div>1,000,000 items → up to 1,000,000!</div>
                  </div>
                  <p className="text-xs mt-2 text-green-600 dark:text-green-400 font-semibold">
                    ✅ Works on unsorted arrays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Search className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            How It Works: Binary Search Animation
          </CardTitle>
          <CardDescription>Watch how O(log n) cuts the search space in half with each iteration - searching for {searchTarget}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-orange-300 dark:border-orange-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-orange-900 dark:text-orange-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                        className="w-4 h-4 text-orange-600 border-orange-300 focus:ring-orange-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-orange-800 dark:text-orange-200 capitalize">{speed}</span>
                    </label>
                  ))}
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
                    className="border-orange-300 dark:border-orange-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg border border-orange-300 dark:border-orange-700">
                    <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 dark:border-orange-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">binarySearch.js</span>
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
                          <span className="ml-3 text-orange-600 dark:text-orange-400 font-semibold">
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
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].left}</span>
                      </div>
                      {steps[currentStep].mid >= 0 && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">mid:</span>
                          <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].mid}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">right:</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">{steps[currentStep].right}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">target:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{searchTarget}</span>
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
                steps[currentStep].found
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-400 dark:border-orange-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].found ? 'bg-green-500' : 'bg-orange-600'}`}>
                      {steps[currentStep].found ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Search className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].found ? 'text-green-900 dark:text-green-100' : 'text-orange-900 dark:text-orange-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].found ? 'text-green-800 dark:text-green-200' : 'text-orange-800 dark:text-orange-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
                {sortedArray.map((num, idx) => {
                  const currentStepData = steps[currentStep];
                  const isInRange = idx >= currentStepData.left && idx <= currentStepData.right;
                  const isMid = idx === currentStepData.mid;
                  const isFound = isMid && currentStepData.found;
                  const isEliminated = !isInRange && currentStepData.mid >= 0;

                  return (
                    <div
                      key={idx}
                      className={`
                        relative w-14 h-14 flex flex-col items-center justify-center rounded-lg font-mono text-lg font-bold
                        transition-all duration-500 ease-out
                        ${isFound
                          ? 'bg-green-500 text-white scale-110 shadow-xl ring-2 ring-green-300'
                          : isMid
                          ? 'bg-orange-500 text-white scale-105 shadow-lg ring-2 ring-orange-300'
                          : isInRange
                          ? 'bg-lime-100 dark:bg-lime-900 text-lime-900 dark:text-lime-100 border-2 border-lime-400 dark:border-lime-600'
                          : isEliminated
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 opacity-30 scale-90'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                        }
                      `}
                    >
                      <span>{num}</span>
                      <span className="absolute -bottom-6 text-xs text-slate-500 dark:text-slate-400">[{idx}]</span>
                      
                      {isMid && !isFound && (
                        <div className="absolute -top-8 text-xs font-semibold text-orange-600 dark:text-orange-400">
                          ↓ MID
                        </div>
                      )}
                      
                      {isFound && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl">
                          ✓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Range Indicators */}
              {currentStep >= 0 && steps[currentStep].mid >= 0 && (
                <div className="flex items-center justify-center gap-6 text-sm font-mono pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-slate-700 dark:text-slate-300">Left: {steps[currentStep].left}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-slate-700 dark:text-slate-300">Mid: {steps[currentStep].mid}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-rose-500 rounded"></div>
                    <span className="text-slate-700 dark:text-slate-300">Right: {steps[currentStep].right}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common O(log n) Operations */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            Common O(log n) Operations
          </CardTitle>
          <CardDescription>Real-world examples of logarithmic time operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Binary Search */}
            <div className="p-5 rounded-xl border-2 bg-lime-50 dark:bg-lime-950/20 border-lime-300 dark:border-lime-700">
              <h4 className="font-semibold text-lime-900 dark:text-lime-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                1. Binary Search
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-lime-700 dark:text-lime-300">Why O(log n):</strong> Each comparison eliminates half of the remaining elements. 
                With n elements, you need at most log₂(n) comparisons!
              </p>
            </div>

            {/* Balanced Tree Operations */}
            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                2. Balanced Binary Tree Operations
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-blue-700 dark:text-blue-300">Why O(log n):</strong> In a balanced binary tree, each level cuts the problem in half. 
                Height of balanced tree = log₂(n), so operations take O(log n) time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* O(log n) vs O(n) Comparison */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            O(log n) vs O(n): The Power of Logarithmic Time
          </CardTitle>
          <CardDescription>See why O(log n) is so much faster than O(n)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900/30">
                    <th className="p-3 text-left border border-purple-300 dark:border-purple-700 font-semibold text-purple-900 dark:text-purple-100">Array Size (n)</th>
                    <th className="p-3 text-center border border-purple-300 dark:border-purple-700 font-semibold text-lime-900 dark:text-lime-100 bg-lime-50 dark:bg-lime-900/20">O(log n) Steps</th>
                    <th className="p-3 text-center border border-purple-300 dark:border-purple-700 font-semibold text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/20">O(n) Steps</th>
                    <th className="p-3 text-center border border-purple-300 dark:border-purple-700 font-semibold text-orange-900 dark:text-orange-100 bg-orange-50 dark:bg-orange-900/20">Speed Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { n: '10', logN: '~4', linear: '10', diff: '2.5x faster' },
                    { n: '100', logN: '~7', linear: '100', diff: '14x faster' },
                    { n: '1,000', logN: '~10', linear: '1,000', diff: '100x faster' },
                    { n: '10,000', logN: '~14', linear: '10,000', diff: '714x faster' },
                    { n: '1,000,000', logN: '~20', linear: '1,000,000', diff: '50,000x faster!' },
                    { n: '1,000,000,000', logN: '~30', linear: '1,000,000,000', diff: '33 million x faster! 🚀' }
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900/30' : 'bg-white dark:bg-slate-900/10'}>
                      <td className="p-3 border border-purple-300 dark:border-purple-700 font-mono text-sm font-semibold">{row.n}</td>
                      <td className="p-3 border border-purple-300 dark:border-purple-700 text-center font-mono text-lime-700 dark:text-lime-300 font-bold">{row.logN}</td>
                      <td className="p-3 border border-purple-300 dark:border-purple-700 text-center font-mono text-blue-700 dark:text-blue-300">{row.linear}</td>
                      <td className="p-3 border border-purple-300 dark:border-purple-700 text-center font-semibold text-orange-700 dark:text-orange-300">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Visual Growth Chart */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">📊 Growth Comparison</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-lime-700 dark:text-lime-300">O(log n) - Very Slow Growth</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">1M items = 20 steps</span>
                  </div>
                  <div className="h-3 bg-lime-200 dark:bg-lime-900 rounded-full overflow-hidden">
                    <div className="h-full bg-lime-600 dark:bg-lime-400" style={{ width: '2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">O(n) - Linear Growth</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">1M items = 1M steps</span>
                  </div>
                  <div className="h-3 bg-blue-200 dark:bg-blue-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 dark:bg-blue-400" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center mt-4 text-purple-700 dark:text-purple-300">
                O(log n) grows so slowly, it's almost flat compared to O(n)!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Understanding Logarithms */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            Understanding Logarithms (log₂)
          </CardTitle>
          <CardDescription>What does log₂(n) actually mean?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">The Question Logarithms Answer:</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                <strong>log₂(n)</strong> asks: "How many times do I need to divide n by 2 to get down to 1?"
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-300 dark:border-blue-600">
                  <div className="text-center mb-2">
                    <span className="text-2xl font-bold text-blue-600">log₂(8) = 3</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <div>8 ÷ 2 = 4</div>
                    <div>4 ÷ 2 = 2</div>
                    <div>2 ÷ 2 = 1</div>
                    <div className="text-blue-600 font-bold pt-1">3 divisions!</div>
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-300 dark:border-blue-600">
                  <div className="text-center mb-2">
                    <span className="text-2xl font-bold text-blue-600">log₂(64) = 6</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <div>64 → 32 → 16 → 8 → 4 → 2 → 1</div>
                    <div className="text-blue-600 font-bold pt-1">6 divisions!</div>
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-300 dark:border-blue-600">
                  <div className="text-center mb-2">
                    <span className="text-2xl font-bold text-blue-600">log₂(1024) = 10</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <div>1024 → 512 → 256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1</div>
                    <div className="text-blue-600 font-bold pt-1">10 divisions!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500">
              <p className="text-sm text-cyan-900 dark:text-cyan-100 font-semibold mb-2">💡 Pro Tip:</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Every time you double the input size, you only add <strong>one more step</strong> in O(log n)!
                <br />
                <span className="text-xs">Example: 1,000 items → 10 steps. 2,000 items → 11 steps. 1,000,000 items → 20 steps.</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Requirements for O(log n) */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-amber-600" />
            Requirements for O(log n) to Work
          </CardTitle>
          <CardDescription>Not all problems can achieve logarithmic time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ When You CAN Use O(log n):</h4>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <div>
                    <strong>Data is sorted or structured</strong> - Binary search requires sorted arrays, BST requires tree structure
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <div>
                    <strong>You can eliminate half each time</strong> - Must be able to make a decision that cuts problem space in half
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <div>
                    <strong>Problem has "divide and conquer" nature</strong> - Can split into smaller subproblems
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <div>
                    <strong>Direct access to middle element</strong> - Arrays allow O(1) access, linked lists don't
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ When You CANNOT Use O(log n):</h4>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">1.</span>
                  <div>
                    <strong>Unsorted data</strong> - Binary search doesn't work on unsorted arrays (must sort first: O(n log n))
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">2.</span>
                  <div>
                    <strong>Need to check all elements</strong> - Finding sum of array, checking all elements for a condition
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">3.</span>
                  <div>
                    <strong>Linked lists (usually)</strong> - Can't access middle in O(1), so binary search becomes O(n)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">4.</span>
                  <div>
                    <strong>Matrix traversal</strong> - Visiting all cells requires O(n×m)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-red-600" />
            Common Mistakes with O(log n)
          </CardTitle>
          <CardDescription>Avoid these pitfalls when working with logarithmic algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Mistake #1: Assuming O(log n) is Always Fast</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                O(log n) means the growth rate is logarithmic, not that it's fast. Constants matter!
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Example: An O(log n) algorithm with 1 million operations per step could be slower than O(n) with 1 operation per step for small inputs.
              </p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Mistake #2: Forgetting the Sorting Cost</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Binary search is O(log n), but if you need to sort first, total time is O(n log n) + O(log n) = O(n log n).
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300">
                For a single search, just use linear search O(n). Binary search wins when searching multiple times!
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚠️ Mistake #3: Using Binary Search on Linked Lists</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Binary search needs O(1) access to middle element. Linked lists need O(n) to reach middle.
              </p>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                Result: "Binary search" on linked list is actually O(n log n), not O(log n)!
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💭 Mistake #4: Confusing log₂ vs log₁₀</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                In Big O, we typically use log₂ (base 2) because we divide by 2.
              </p>
              <p className="text-xs text-purple-700 dark:text-purple-300">
                Good news: All logarithm bases differ by a constant factor, so O(log₂ n) = O(log₁₀ n) in Big O notation!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600" />
            Practical Tips for Using O(log n)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 Interview Questions</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                When you see "sorted array" in a problem, think binary search (O(log n))!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚡ Optimization Hint</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If you're searching the same sorted array many times, binary search saves massive time!
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔍 Problem Recognition</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Keywords: "sorted", "balanced tree", "divide in half", "search efficiently"
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Real World Uses</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Databases, phone books, Git bisect, library systems - all use O(log n) search!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
