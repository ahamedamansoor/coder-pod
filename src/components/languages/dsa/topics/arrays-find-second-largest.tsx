'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Trophy, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FindSecondLargest() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [largest, setLargest] = useState(5);
  const [secondLargest, setSecondLargest] = useState(-Infinity);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [comparisonState, setComparisonState] = useState<'new-largest' | 'new-second' | 'no-change' | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const arrayData = [5, 2, 9, 1, 7, 3];
  
  const steps = [
    { 
      step: 1, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 0, 
      comparison: null,
      currentLine: 3,
      i: 0,
      description: '📋 Initialize: Set largest = arr[0] = 5. This is our starting point - assume first element is the largest until we find a bigger one.'
    },
    { 
      step: 2, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 0, 
      comparison: null,
      currentLine: 4,
      i: 0,
      description: '📋 Initialize: Set secondLargest = -∞ (negative infinity). We haven\'t found a second distinct value yet.'
    },
    { 
      step: 3, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 1, 
      comparison: 'examining',
      currentLine: 6,
      i: 1,
      description: '🔍 Loop Iteration 1: Now at i = 1, examining arr[1] = 2. We\'ll check if it should be our largest or second largest.'
    },
    { 
      step: 4, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 1, 
      comparison: 'checking-largest',
      currentLine: 5,
      i: 1,
      description: '⬆️ Check Largest: Is 2 > 5? No (2 is not greater than 5), so largest remains 5. Continue to next check.'
    },
    { 
      step: 5, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 1, 
      comparison: 'no-change',
      currentLine: 7,
      i: 1,
      description: '🔄 Check Second: Is 2 > -∞ and 2 ≠ 5? Yes and not equal to largest, so update secondLargest = 2.'
    },
    { 
      step: 6, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 2, 
      comparison: 'examining',
      currentLine: 6,
      i: 2,
      description: '🔍 Loop Iteration 2: Now at i = 2, examining arr[2] = 9. This is actually the largest! Let\'s see how we handle it.'
    },
    { 
      step: 7, 
      largest: 5, 
      secondLargest: -Infinity, 
      elementIndex: 2, 
      comparison: 'checking-largest',
      currentLine: 5,
      i: 2,
      description: '⬆️ Check Largest: Is 9 > 5? Yes! Found a new maximum. We need to cascade the values.'
    },
    { 
      step: 8, 
      largest: 5, 
      secondLargest: 5, 
      elementIndex: 2, 
      comparison: 'updating-second',
      currentLine: 5,
      i: 2,
      description: '🔄 Cascade Values: Before overwriting largest, save current largest (5) as secondLargest. This preserves the ranking.'
    },
    { 
      step: 9, 
      largest: 9, 
      secondLargest: 5, 
      elementIndex: 2, 
      comparison: 'new-largest',
      currentLine: 5,
      i: 2,
      description: '✅ Update Largest: Set largest = 9. Now we have: 1st = 9, 2nd = 5. Rankings updated!'
    },
    { 
      step: 10, 
      largest: 9, 
      secondLargest: 5, 
      elementIndex: 3, 
      comparison: 'examining',
      currentLine: 6,
      i: 3,
      description: '🔍 Loop Iteration 3: Now at i = 3, examining arr[3] = 1. Too small to affect our top 2.'
    },
    { 
      step: 11, 
      largest: 9, 
      secondLargest: 5, 
      elementIndex: 3, 
      comparison: 'no-change',
      currentLine: 9,
      i: 3,
      description: '❌ Both Checks Failed: Is 1 > 9? No. Is 1 > 5? No. Element too small, no updates needed.'
    },
    { 
      step: 12, 
      largest: 9, 
      secondLargest: 5, 
      elementIndex: 4, 
      comparison: 'examining',
      currentLine: 6,
      i: 4,
      description: '🔍 Loop Iteration 4: Now at i = 4, examining arr[4] = 7. This could be our new second largest!'
    },
    { 
      step: 13, 
      largest: 9, 
      secondLargest: 5, 
      elementIndex: 4, 
      comparison: 'checking-largest',
      currentLine: 5,
      i: 4,
      description: '⬆️ Check Largest: Is 7 > 9? No (7 is not greater than 9), so largest stays 9. Check second...'
    },
    { 
      step: 14, 
      largest: 9, 
      secondLargest: 7, 
      elementIndex: 4, 
      comparison: 'new-second',
      currentLine: 7,
      i: 4,
      description: '🔄 Update Second: Is 7 > 5 and 7 ≠ 9? Yes! Found better second place. Update secondLargest from 5 to 7.'
    },
    { 
      step: 15, 
      largest: 9, 
      secondLargest: 7, 
      elementIndex: 5, 
      comparison: 'examining',
      currentLine: 6,
      i: 5,
      description: '🔍 Loop Iteration 5: Now at i = 5, examining arr[5] = 3. Last element - let\'s check if it affects rankings.'
    },
    { 
      step: 16, 
      largest: 9, 
      secondLargest: 7, 
      elementIndex: 5, 
      comparison: 'no-change',
      currentLine: 9,
      i: 5,
      description: '❌ Both Checks Failed: Is 3 > 9? No. Is 3 > 7? No. Too small to affect top 2 rankings.'
    },
    { 
      step: 17, 
      largest: 9, 
      secondLargest: 7, 
      elementIndex: -1, 
      comparison: null,
      currentLine: 11,
      i: 6,
      description: '🔄 Loop Complete: We have examined all 6 elements. The loop condition (i < arr.length) is now false, so we exit.'
    },
    { 
      step: 18, 
      largest: 9, 
      secondLargest: 7, 
      elementIndex: -1, 
      comparison: null,
      currentLine: 11,
      i: 6,
      description: '✅ Final Result: Second Largest Element = 7 (found at index 4). Algorithm completed successfully!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = arrayData;
    const secLargest = stepData.secondLargest === -Infinity ? '-∞' : stepData.secondLargest;
    return [
      { line: 1, code: 'function findSecondLargest(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  // arr = [${arr.join(', ')}]`, active: false, indent: 1, comment: true },
      { line: 3, code: `  let largest = arr[0];`, active: stepData.currentLine === 3, indent: 1, values: `largest = ${stepData.largest}` },
      { line: 4, code: `  let secondLargest = -Infinity;`, active: stepData.currentLine === 4, indent: 1, values: `secondLargest = ${secLargest}` },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let i = 1; i < arr.length; i++) {`, active: stepData.currentLine === 6, indent: 1, values: `i = ${stepData.i}` },
      { line: 7, code: `    if (arr[i] > largest) {`, active: stepData.currentLine === 5, indent: 2, values: stepData.i > 0 ? `${arr[stepData.i]} > ${stepData.largest} = ${stepData.comparison === 'new-largest' ? '✓' : '✗'}` : '' },
      { line: 8, code: `      secondLargest = largest;`, active: stepData.currentLine === 5 && stepData.comparison === 'new-largest', indent: 3, values: stepData.comparison === 'new-largest' ? `secondLargest = ${steps[stepData.step - 2]?.largest || 5}` : '' },
      { line: 9, code: `      largest = arr[i];`, active: stepData.currentLine === 5 && stepData.comparison === 'new-largest', indent: 3, values: stepData.comparison === 'new-largest' ? `largest = ${stepData.largest}` : '' },
      { line: 10, code: `    } else if (arr[i] > secondLargest && arr[i] != largest) {`, active: stepData.currentLine === 7, indent: 2, values: stepData.i > 0 && stepData.comparison !== 'new-largest' ? `${arr[stepData.i]} > ${secLargest} = ${stepData.comparison === 'new-second' ? '✓' : '✗'}` : '' },
      { line: 11, code: `      secondLargest = arr[i];`, active: stepData.currentLine === 7 && stepData.comparison === 'new-second', indent: 3, values: stepData.comparison === 'new-second' ? `secondLargest = ${stepData.secondLargest}` : '' },
      { line: 12, code: `    }`, active: false, indent: 2 },
      { line: 13, code: `  }`, active: stepData.currentLine === 9, indent: 1 },
      { line: 14, code: `  `, active: false, indent: 1 },
      { line: 15, code: `  return secondLargest;`, active: stepData.currentLine === 11, indent: 1, values: `${secLargest}` },
      { line: 16, code: `}`, active: stepData.currentLine === 12, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentElementIndex(step.elementIndex);
    setComparisonState(step.comparison as any);
    setLargest(step.largest);
    setSecondLargest(step.secondLargest);
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
        icon={Trophy}
        category="DSA · Arrays"
        title="Find Second Largest Element"
        description="Learn how to find the second largest element in an array efficiently"
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
                <p className="font-medium">Track Two Variables</p>
                <p className="text-sm text-muted-foreground">Maintain largest and second largest</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Single Pass Solution</p>
                <p className="text-sm text-muted-foreground">O(n) time complexity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Handle Edge Cases</p>
                <p className="text-sm text-muted-foreground">Deal with duplicates properly</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Alternative Methods</p>
                <p className="text-sm text-muted-foreground">Sorting vs linear scan</p>
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
            Given an array of integers, find the second largest distinct element. If all elements are the same or there's only one distinct element, return -1.
          </p>

          {/* Visual Array with Rankings */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5" /> Finding the Second Place
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-amber-300 dark:border-amber-600">
              <div className="flex items-center justify-center gap-3 mb-4">
                {[5, 2, 9, 1, 7, 3].map((num, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl border-2 ${
                      num === 9
                        ? 'bg-yellow-200 dark:bg-yellow-800 border-yellow-500 text-yellow-900 dark:text-yellow-100 ring-4 ring-yellow-400'
                        : num === 7
                        ? 'bg-gray-200 dark:bg-gray-700 border-gray-500 text-gray-900 dark:text-gray-100 ring-4 ring-gray-400'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}>
                      {num}
                    </div>
                    {num === 9 && (
                      <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                        <Trophy className="w-3 h-3" /> 1st
                      </div>
                    )}
                    {num === 7 && (
                      <div className="text-xs font-bold text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <Trophy className="w-3 h-3" /> 2nd
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-yellow-200 dark:bg-yellow-800 border-2 border-yellow-500 rounded"></div>
                  <span className="font-semibold text-yellow-700 dark:text-yellow-300">Largest: 9</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 border-2 border-gray-500 rounded"></div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">2nd Largest: 7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Tracking Strategy
            </h4>
            
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Initialize Trackers</h5>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="px-3 py-2 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 rounded">
                        first = <strong>-∞</strong>
                      </div>
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-900/30 border border-gray-400 rounded">
                        second = <strong>-∞</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">For Each Element</h5>
                    <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">if num &gt; first</span>
                        <span>→ second = first, first = num</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-gray-100 dark:bg-gray-900/30 px-2 py-1 rounded">else if num &gt; second</span>
                        <span>→ second = num</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-lg border-2 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Result</h5>
                    <div className="px-4 py-2 bg-white dark:bg-slate-950 border-2 border-gray-500 rounded font-bold text-lg">
                      second = <span className="text-gray-600">7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Walkthrough */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📝</span> Step-by-Step Example
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-purple-300 dark:border-purple-600">
                      <th className="p-2 text-left">Element</th>
                      <th className="p-2 text-center">first</th>
                      <th className="p-2 text-center">second</th>
                      <th className="p-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-purple-200 dark:border-purple-700">
                      <td className="p-2 font-bold">5</td>
                      <td className="p-2 text-center text-yellow-600">5</td>
                      <td className="p-2 text-center text-gray-600">-∞</td>
                      <td className="p-2 text-purple-700 dark:text-purple-300">New first</td>
                    </tr>
                    <tr className="border-b border-purple-200 dark:border-purple-700">
                      <td className="p-2 font-bold">2</td>
                      <td className="p-2 text-center text-yellow-600">5</td>
                      <td className="p-2 text-center text-gray-600">2</td>
                      <td className="p-2 text-purple-700 dark:text-purple-300">New second</td>
                    </tr>
                    <tr className="border-b border-purple-200 dark:border-purple-700">
                      <td className="p-2 font-bold">9</td>
                      <td className="p-2 text-center text-yellow-600">9</td>
                      <td className="p-2 text-center text-gray-600">5</td>
                      <td className="p-2 text-purple-700 dark:text-purple-300">9 becomes first, 5 becomes second</td>
                    </tr>
                    <tr className="border-b border-purple-200 dark:border-purple-700">
                      <td className="p-2 font-bold">1</td>
                      <td className="p-2 text-center text-yellow-600">9</td>
                      <td className="p-2 text-center text-gray-600">5</td>
                      <td className="p-2 text-purple-700 dark:text-purple-300">Skip (too small)</td>
                    </tr>
                    <tr className="border-b border-purple-200 dark:border-purple-700">
                      <td className="p-2 font-bold">7</td>
                      <td className="p-2 text-center text-yellow-600">9</td>
                      <td className="p-2 text-center text-gray-600">7</td>
                      <td className="p-2 text-purple-700 dark:text-purple-300">7 &gt; 5, new second!</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">3</td>
                      <td className="p-2 text-center text-yellow-600">9</td>
                      <td className="p-2 text-center text-gray-600">7</td>
                      <td className="p-2 text-purple-700 dark:text-purple-300">Skip (smaller than second)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two variables</div>
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
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm find the second largest element step-by-step</CardDescription>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">findSecondLargest.js</span>
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
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{largest}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">2nd:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{secondLargest === -Infinity ? '-∞' : secondLargest}</span>
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
                  : 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-400 dark:border-purple-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-purple-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Trophy className="w-6 h-6 text-white" />
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
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">largest:</span>
                      <span className="text-base font-bold text-yellow-600 dark:text-yellow-400">{steps[currentStep].largest}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-gray-200 dark:border-gray-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">secondLargest:</span>
                      <span className="text-base font-bold text-gray-600 dark:text-gray-400">{steps[currentStep].secondLargest === -Infinity ? '-∞' : steps[currentStep].secondLargest}</span>
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
                {comparisonState === 'new-largest' && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500 animate-bounce">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100">New Largest Found!</p>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {arrayData[currentElementIndex]} is the new largest. Previous largest ({steps[currentStep - 1]?.largest}) becomes second largest.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {comparisonState === 'new-second' && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400 dark:border-blue-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-500 animate-bounce">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-blue-900 dark:text-blue-100">New Second Largest!</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          {arrayData[currentElementIndex]} is greater than previous second largest → Updated!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {comparisonState === 'no-change' && (
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 border-slate-400 dark:border-slate-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-slate-500">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100">No Change</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {arrayData[currentElementIndex]} doesn't affect largest or second largest
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
                    {/* Current Element Indicator */}
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
                      
                      {/* Largest Badge */}
                      {currentStep >= 0 && num === largest && (
                        <div className="absolute -top-3 -right-3 animate-in zoom-in-50 duration-500">
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                            <div className="relative w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                              <span className="text-white text-xs font-bold">1st</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Second Largest Badge */}
                      {currentStep >= 0 && num === secondLargest && secondLargest !== -Infinity && (
                        <div className="absolute -bottom-3 -right-3 animate-in zoom-in-50 duration-500">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                            <div className="relative w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                              <span className="text-white text-xs font-bold">2nd</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Checkmark for processed */}
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
                  <Trophy className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900 dark:text-green-100">Largest</span>
                </div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 transition-all duration-500">
                  {largest}
                </div>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Maximum value found</p>
              </div>
              
              <div className={`p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-300 dark:border-blue-700 transition-all duration-300 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900 dark:text-blue-100">Second Largest</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-500">
                  {secondLargest === -Infinity ? '-∞' : secondLargest}
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Runner-up value</p>
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
                    When we find a new largest, the old largest becomes the second largest! This algorithm finds the second largest in <strong>O(n) time</strong> with just <strong>O(1) space</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Approach */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-purple-600" />
            Linear Scan Approach
          </CardTitle>
          <CardDescription>Most efficient - single pass through array</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Algorithm Logic:</h4>
            <ol className="space-y-2 ml-6 list-decimal">
              <li>Initialize largest = arr[0] and secondLargest = -Infinity</li>
              <li>For each element from index 1 onwards:</li>
              <ul className="ml-6 list-disc space-y-1 mt-1">
                <li>If element &gt; largest: set secondLargest = largest, then largest = element</li>
                <li>Else if element &gt; secondLargest AND element ≠ largest: update secondLargest</li>
              </ul>
              <li>Return secondLargest</li>
            </ol>
          </div>

          <CodeSnippet
            title="Find Second Largest"
            description="Efficient single-pass solution"
            language="javascript"
            colorTheme="purple"
            icon={Trophy}
            code={`function findSecondLargest(arr) {
  if (arr.length < 2) {
    return undefined; // Not enough elements
  }
  
  let largest = arr[0];
  let secondLargest = -Infinity;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  
  return secondLargest === -Infinity ? undefined : secondLargest;
}

// Test it
console.log(findSecondLargest([5, 2, 9, 1, 7, 3])); // 7
console.log(findSecondLargest([10, 10, 10]));       // undefined
console.log(findSecondLargest([5, 5, 3, 3]));       // 3`}
          />

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• When new largest found, old largest becomes second largest</li>
              <li>• Handles duplicates by checking element ≠ largest</li>
              <li>• Time Complexity: O(n) - single pass</li>
              <li>• Space Complexity: O(1) - only two variables</li>
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
              <h4 className="font-semibold mb-1">1. Less Than 2 Elements</h4>
              <p className="text-sm text-muted-foreground">Array has 0 or 1 element - no second largest exists</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findSecondLargest([5]) // undefined
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. All Elements Same</h4>
              <p className="text-sm text-muted-foreground">All elements are identical</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findSecondLargest([5, 5, 5]) // undefined
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Only Two Distinct</h4>
              <p className="text-sm text-muted-foreground">Array has exactly two distinct values</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findSecondLargest([5, 3, 5, 3]) // 3
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Negative Numbers</h4>
              <p className="text-sm text-muted-foreground">Array contains negative values</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                findSecondLargest([-1, -5, -3, -2]) // -2
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
              { name: 'Top K Frequent Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
              { name: 'Find K Closest Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-k-closest-elements/' },
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
              <span>Track two variables: largest and secondLargest</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>When new largest found, old largest becomes second largest</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Check element ≠ largest to handle duplicates properly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Single pass solution: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Handle edge cases: empty, single element, all same values</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
