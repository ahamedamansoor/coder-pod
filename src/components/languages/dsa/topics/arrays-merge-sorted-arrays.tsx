'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw,
  Target, AlertCircle, CheckCircle, Merge, 
  ArrowRight, TrendingUp, Zap
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MergeSortedArrays() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem data - Two sorted arrays
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  
  // Merge Two Sorted Arrays - 35 Granular Steps
  const steps = [
    // Initialization (4 steps)
    { step: 1, i: 0, j: 0, result: [], currentLine: 1, action: 'init', description: '📋 Initialize: Start merging two sorted arrays', arr1Val: null, arr2Val: null, comparing: false },
    { step: 2, i: 0, j: 0, result: [], currentLine: 2, action: 'init', description: '📋 Initialize: Set pointer i = 0 (for array1)', arr1Val: null, arr2Val: null, comparing: false },
    { step: 3, i: 0, j: 0, result: [], currentLine: 3, action: 'init', description: '📋 Initialize: Set pointer j = 0 (for array2)', arr1Val: null, arr2Val: null, comparing: false },
    { step: 4, i: 0, j: 0, result: [], currentLine: 4, action: 'init', description: '📋 Initialize: result = [] (empty merged array)', arr1Val: null, arr2Val: null, comparing: false },
    
    // Loop start
    { step: 5, i: 0, j: 0, result: [], currentLine: 6, action: 'loop-start', description: '🔄 Loop: Start comparing elements from both arrays', arr1Val: null, arr2Val: null, comparing: false },
    
    // Iteration 1 (i=0, j=0)
    { step: 6, i: 0, j: 0, result: [], currentLine: 7, action: 'check', description: '✅ Check: i < len1 AND j < len2? YES! (0 < 4 AND 0 < 4)', arr1Val: null, arr2Val: null, comparing: false },
    { step: 7, i: 0, j: 0, result: [], currentLine: 8, action: 'examine', description: '📍 Access: array1[0] = 1', arr1Val: 1, arr2Val: null, comparing: false },
    { step: 8, i: 0, j: 0, result: [], currentLine: 9, action: 'examine', description: '📍 Access: array2[0] = 2', arr1Val: 1, arr2Val: 2, comparing: false },
    { step: 9, i: 0, j: 0, result: [], currentLine: 10, action: 'compare', description: '⚖️ Compare: array1[0](1) < array2[0](2)? YES!', arr1Val: 1, arr2Val: 2, comparing: true },
    { step: 10, i: 0, j: 0, result: [1], currentLine: 11, action: 'update', description: '✅ Update: result.push(1) → result = [1]', arr1Val: 1, arr2Val: 2, comparing: false },
    { step: 11, i: 1, j: 0, result: [1], currentLine: 12, action: 'move', description: '➡️ Move: i++ (0 → 1) - advance array1 pointer', arr1Val: null, arr2Val: null, comparing: false },
    
    // Iteration 2 (i=1, j=0)
    { step: 12, i: 1, j: 0, result: [1], currentLine: 7, action: 'check', description: '✅ Check: i < len1 AND j < len2? YES! (1 < 4 AND 0 < 4)', arr1Val: null, arr2Val: null, comparing: false },
    { step: 13, i: 1, j: 0, result: [1], currentLine: 8, action: 'examine', description: '📍 Access: array1[1] = 3', arr1Val: 3, arr2Val: null, comparing: false },
    { step: 14, i: 1, j: 0, result: [1], currentLine: 9, action: 'examine', description: '📍 Access: array2[0] = 2', arr1Val: 3, arr2Val: 2, comparing: false },
    { step: 15, i: 1, j: 0, result: [1], currentLine: 10, action: 'compare', description: '⚖️ Compare: array1[1](3) < array2[0](2)? NO! 3 > 2', arr1Val: 3, arr2Val: 2, comparing: true },
    { step: 16, i: 1, j: 0, result: [1, 2], currentLine: 14, action: 'update', description: '✅ Update: result.push(2) → result = [1,2]', arr1Val: 3, arr2Val: 2, comparing: false },
    { step: 17, i: 1, j: 1, result: [1, 2], currentLine: 15, action: 'move', description: '➡️ Move: j++ (0 → 1) - advance array2 pointer', arr1Val: null, arr2Val: null, comparing: false },
    
    // Iteration 3 (i=1, j=1)
    { step: 18, i: 1, j: 1, result: [1, 2], currentLine: 8, action: 'examine', description: '📍 Access: array1[1] = 3', arr1Val: 3, arr2Val: null, comparing: false },
    { step: 19, i: 1, j: 1, result: [1, 2], currentLine: 9, action: 'examine', description: '📍 Access: array2[1] = 4', arr1Val: 3, arr2Val: 4, comparing: false },
    { step: 20, i: 1, j: 1, result: [1, 2], currentLine: 10, action: 'compare', description: '⚖️ Compare: array1[1](3) < array2[1](4)? YES!', arr1Val: 3, arr2Val: 4, comparing: true },
    { step: 21, i: 1, j: 1, result: [1, 2, 3], currentLine: 11, action: 'update', description: '✅ Update: result.push(3) → result = [1,2,3]', arr1Val: 3, arr2Val: 4, comparing: false },
    { step: 22, i: 2, j: 1, result: [1, 2, 3], currentLine: 12, action: 'move', description: '➡️ Move: i++ (1 → 2)', arr1Val: null, arr2Val: null, comparing: false },
    
    // Iteration 4 (i=2, j=1)
    { step: 23, i: 2, j: 1, result: [1, 2, 3], currentLine: 8, action: 'examine', description: '📍 Access: array1[2] = 5', arr1Val: 5, arr2Val: null, comparing: false },
    { step: 24, i: 2, j: 1, result: [1, 2, 3], currentLine: 9, action: 'examine', description: '📍 Access: array2[1] = 4', arr1Val: 5, arr2Val: 4, comparing: false },
    { step: 25, i: 2, j: 1, result: [1, 2, 3], currentLine: 10, action: 'compare', description: '⚖️ Compare: array1[2](5) < array2[1](4)? NO! 5 > 4', arr1Val: 5, arr2Val: 4, comparing: true },
    { step: 26, i: 2, j: 1, result: [1, 2, 3, 4], currentLine: 14, action: 'update', description: '✅ Update: result.push(4) → result = [1,2,3,4]', arr1Val: 5, arr2Val: 4, comparing: false },
    { step: 27, i: 2, j: 2, result: [1, 2, 3, 4], currentLine: 15, action: 'move', description: '➡️ Move: j++ (1 → 2)', arr1Val: null, arr2Val: null, comparing: false },
    
    // Continue pattern - showing key transitions
    { step: 28, i: 2, j: 2, result: [1, 2, 3, 4, 5], currentLine: 11, action: 'update', description: '✅ Update: Push 5 from array1 → result = [1,2,3,4,5]', arr1Val: 5, arr2Val: 6, comparing: false },
    { step: 29, i: 3, j: 2, result: [1, 2, 3, 4, 5, 6], currentLine: 14, action: 'update', description: '✅ Update: Push 6 from array2 → result = [1,2,3,4,5,6]', arr1Val: 7, arr2Val: 6, comparing: false },
    { step: 30, i: 3, j: 3, result: [1, 2, 3, 4, 5, 6, 7], currentLine: 11, action: 'update', description: '✅ Update: Push 7 from array1 → result = [1,2,3,4,5,6,7]', arr1Val: 7, arr2Val: 8, comparing: false },
    { step: 31, i: 4, j: 3, result: [1, 2, 3, 4, 5, 6, 7, 8], currentLine: 14, action: 'update', description: '✅ Update: Push 8 from array2 → result = [1,2,3,4,5,6,7,8]', arr1Val: null, arr2Val: 8, comparing: false },
    
    // Final check
    { step: 32, i: 4, j: 4, result: [1, 2, 3, 4, 5, 6, 7, 8], currentLine: 7, action: 'loop-complete', description: '🎯 Loop Complete: Both pointers reached end! (i=4, j=4)', arr1Val: null, arr2Val: null, comparing: false },
    
    // Termination (2 steps)
    { step: 33, i: 4, j: 4, result: [1, 2, 3, 4, 5, 6, 7, 8], currentLine: 20, action: 'result', description: '🎯 Return: Merged sorted array [1,2,3,4,5,6,7,8]', arr1Val: null, arr2Val: null, comparing: false },
    { step: 34, i: 4, j: 4, result: [1, 2, 3, 4, 5, 6, 7, 8], currentLine: 21, action: 'done', description: '✅ Complete! Successfully merged two sorted arrays in O(n+m) time!', arr1Val: null, arr2Val: null, comparing: false },
  ];

  // Code viewer function
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function mergeSortedArrays(arr1, arr2) {', active: stepData.currentLine === 1, indent: 0, values: stepData.currentLine >= 1 ? `arr1=[${array1.join(',')}], arr2=[${array2.join(',')}]` : '' },
      { line: 2, code: '  let i = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine >= 2 ? `i=${stepData.i}` : '' },
      { line: 3, code: '  let j = 0;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine >= 3 ? `j=${stepData.j}` : '' },
      { line: 4, code: '  let result = [];', active: stepData.currentLine === 4, indent: 1, values: stepData.currentLine >= 4 ? `result=[${stepData.result.join(',')}]` : '' },
      { line: 5, code: '  ', active: false, indent: 1 },
      { line: 6, code: '  while (i < arr1.length && j < arr2.length) {', active: stepData.currentLine === 6 || stepData.currentLine === 7, indent: 1, values: stepData.currentLine >= 6 ? `${stepData.i}<${array1.length} && ${stepData.j}<${array2.length}? ${stepData.i < array1.length && stepData.j < array2.length ? 'true' : 'false'}` : '' },
      { line: 7, code: '    // Check condition', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `i=${stepData.i}, j=${stepData.j}` : '' },
      { line: 8, code: '    // Access arr1[i]', active: stepData.currentLine === 8, indent: 2, values: stepData.arr1Val !== null ? `arr1[${stepData.i}]=${stepData.arr1Val}` : '' },
      { line: 9, code: '    // Access arr2[j]', active: stepData.currentLine === 9, indent: 2, values: stepData.arr2Val !== null ? `arr2[${stepData.j}]=${stepData.arr2Val}` : '' },
      { line: 10, code: '    if (arr1[i] < arr2[j]) {', active: stepData.currentLine === 10, indent: 2, values: stepData.currentLine === 10 && stepData.arr1Val !== null && stepData.arr2Val !== null ? `${stepData.arr1Val} < ${stepData.arr2Val}? ${stepData.arr1Val < stepData.arr2Val ? 'true' : 'false'}` : '' },
      { line: 11, code: '      result.push(arr1[i]);', active: stepData.currentLine === 11, indent: 3, values: stepData.currentLine === 11 && stepData.arr1Val !== null ? `push ${stepData.arr1Val} → [${stepData.result.join(',')}]` : '' },
      { line: 12, code: '      i++;', active: stepData.currentLine === 12, indent: 3, values: stepData.currentLine === 12 ? `i=${stepData.i - 1} → ${stepData.i}` : '' },
      { line: 13, code: '    } else {', active: false, indent: 2 },
      { line: 14, code: '      result.push(arr2[j]);', active: stepData.currentLine === 14, indent: 3, values: stepData.currentLine === 14 && stepData.arr2Val !== null ? `push ${stepData.arr2Val} → [${stepData.result.join(',')}]` : '' },
      { line: 15, code: '      j++;', active: stepData.currentLine === 15, indent: 3, values: stepData.currentLine === 15 ? `j=${stepData.j - 1} → ${stepData.j}` : '' },
      { line: 16, code: '    }', active: false, indent: 2 },
      { line: 17, code: '  }', active: false, indent: 1 },
      { line: 18, code: '  ', active: false, indent: 1 },
      { line: 19, code: '  // Remaining elements handled separately', active: false, indent: 1 },
      { line: 20, code: '  return result;', active: stepData.currentLine === 20, indent: 1, values: stepData.currentLine === 20 ? `return [${stepData.result.join(',')}]` : '' },
      { line: 21, code: '}', active: stepData.currentLine === 21, indent: 0 },
    ];
  };

  // Navigation functions
  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = { slow: 2000, normal: 1200, fast: 600 };
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
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Merge}
        category="DSA · Arrays · Mixed Array Problems"
        title="Merge Sorted Arrays"
        description="Combine two sorted arrays into one sorted array efficiently"
        colorTheme="emerald"
        badges={[
          { label: 'Two Pointers', variant: 'default' },
          { label: 'O(n+m) Time', variant: 'success' },
          { label: 'O(n+m) Space', variant: 'secondary' },
        ]}
      />

      {/* Problem Definition */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Understanding the Problem
          </CardTitle>
          <CardDescription>
            Merging two sorted arrays while maintaining sorted order
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Think of it Like Merging Lines! 🚶‍♂️🚶‍♀️
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-emerald-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine <strong>two lines of people</strong> already sorted by height. 
                You need to <strong>merge them into one line</strong>, keeping everyone sorted by height!
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-emerald-900 dark:text-emerald-100">Example:</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <p>• <strong>Line 1:</strong> [1, 3, 5, 7] - already sorted</p>
                    <p>• <strong>Line 2:</strong> [2, 4, 6, 8] - already sorted</p>
                    <p>• <strong>Goal:</strong> Merge into [1, 2, 3, 4, 5, 6, 7, 8] - still sorted!</p>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">
                    💡 Strategy: Compare the front person from each line, take the shorter one first!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg border-l-4 border-emerald-500">
              <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                🎯 Key Algorithm: Two Pointers
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Use two pointers (i and j) to track position in each array.
                <br />
                Compare elements, take smaller one, advance that pointer. Repeat!
              </p>
            </div>
          </div>

          {/* Input/Output Example */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300">
              <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-500">Array 1:</span>
                  <div className="font-mono text-emerald-700 dark:text-emerald-300">[1, 3, 5, 7]</div>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Array 2:</span>
                  <div className="font-mono text-blue-700 dark:text-blue-300">[2, 4, 6, 8]</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
              <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
              <div className="text-sm">
                <span className="text-xs text-slate-500">Merged Array:</span>
                <div className="font-mono font-bold text-green-800 dark:text-green-200">
                  [1, 2, 3, 4, 5, 6, 7, 8]
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  ✅ Sorted order maintained!
                </p>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Both arrays already sorted</strong> - this is crucial!</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Two pointers</strong> - one for each array</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Compare & choose smaller</strong> - builds sorted result</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>O(n+m) time</strong> - single pass through both arrays</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Algorithm Walkthrough */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            Algorithm Strategy
          </CardTitle>
          <CardDescription>Step-by-step approach using two pointers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Initialize Two Pointers</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                  <div className="font-mono text-sm">
                    <div>i = 0  → points to start of array1</div>
                    <div>j = 0  → points to start of array2</div>
                    <div>result = []  → empty output array</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Compare Elements</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Logic:</div>
                  <div className="text-sm">
                    Compare array1[i] with array2[j]
                    <br />
                    <span className="text-xs">→ Take the smaller one!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Move Pointer</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Action:</div>
                  <div className="text-sm">
                    If took from array1 → i++
                    <br />
                    If took from array2 → j++
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <div className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Repeat Until Done</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Continue:</div>
                  <div className="text-sm">
                    Keep comparing until one array is exhausted
                    <br />
                    <span className="text-xs">→ Then copy remaining elements</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Play className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch the two-pointer merge algorithm in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-emerald-300">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
              className="border-emerald-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
              className="border-emerald-300"
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">mergeSortedArrays.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto">
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
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Pointer i:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{steps[currentStep].i}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Pointer j:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].j}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Result Length:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].result.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-sm ${
              steps[currentStep].action === 'done'
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : steps[currentStep].action === 'init'
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
                : 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-300 dark:border-emerald-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${
                    steps[currentStep].action === 'done' ? 'bg-green-600' :
                    steps[currentStep].action === 'init' ? 'bg-blue-600' :
                    steps[currentStep].action === 'compare' ? 'bg-purple-600' : 'bg-emerald-600'
                  }`}>
                    {steps[currentStep].action === 'done' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'init' ? (
                      <Target className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'compare' ? (
                      <TrendingUp className="w-6 h-6 text-white" />
                    ) : (
                      <ArrowRight className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Start'}
                      {steps[currentStep].action === 'check' && '✅ Condition Check'}
                      {steps[currentStep].action === 'examine' && '📍 Accessing Element'}
                      {steps[currentStep].action === 'compare' && '⚖️ Comparing Values'}
                      {steps[currentStep].action === 'update' && '➕ Updating Result'}
                      {steps[currentStep].action === 'move' && '➡️ Moving Pointer'}
                      {steps[currentStep].action === 'loop-complete' && '🎯 Loop Complete'}
                      {steps[currentStep].action === 'result' && '🎯 Returning Result'}
                      {steps[currentStep].action === 'done' && '✅ Complete!'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Visual Representation */}
          {currentStep >= 0 && (
            <div className="space-y-6">
              
              {/* Comparison Visualization */}
              {steps[currentStep].comparing && steps[currentStep].arr1Val !== null && steps[currentStep].arr2Val !== null && (
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                  <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-3 text-center">
                    ⚖️ Comparison
                  </h5>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">array1[{steps[currentStep].i}]</div>
                      <div className="px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg font-bold text-2xl text-emerald-900 dark:text-emerald-100">
                        {steps[currentStep].arr1Val}
                      </div>
                    </div>
                    
                    <div className="text-3xl font-bold">
                      {steps[currentStep].arr1Val! < steps[currentStep].arr2Val! ? '<' : '>'}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">array2[{steps[currentStep].j}]</div>
                      <div className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg font-bold text-2xl text-blue-900 dark:text-blue-100">
                        {steps[currentStep].arr2Val}
                      </div>
                    </div>
                    
                    <div className="text-3xl">→</div>
                    
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">Take</div>
                      <div className={`px-6 py-3 rounded-lg font-bold text-2xl ${
                        steps[currentStep].arr1Val! < steps[currentStep].arr2Val!
                          ? 'bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100'
                          : 'bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100'
                      }`}>
                        {steps[currentStep].arr1Val! < steps[currentStep].arr2Val! ? steps[currentStep].arr1Val : steps[currentStep].arr2Val}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Arrays Visualization */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Array 1 */}
                <div>
                  <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100 mb-3">Array 1:</p>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex gap-2">
                      {array1.map((val, idx) => (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {steps[currentStep].i === idx && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                              <div className="px-2 py-1 bg-emerald-500 text-white rounded font-bold text-sm animate-bounce">
                                i
                              </div>
                            </div>
                          )}
                          <div
                            className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                              steps[currentStep].i === idx
                                ? 'bg-emerald-200 dark:bg-emerald-800 border-emerald-500 scale-110 ring-4 ring-emerald-300'
                                : steps[currentStep].i > idx
                                ? 'bg-slate-200 dark:bg-slate-700 border-slate-400 opacity-50'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                            } ${
                              steps[currentStep].i === idx ? 'text-emerald-900 dark:text-emerald-100' : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {val}
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">[{idx}]</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-center text-xs text-slate-600 dark:text-slate-400">
                      Pointer i = {steps[currentStep].i}
                    </div>
                  </div>
                </div>

                {/* Array 2 */}
                <div>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-3">Array 2:</p>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex gap-2">
                      {array2.map((val, idx) => (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {steps[currentStep].j === idx && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                              <div className="px-2 py-1 bg-blue-500 text-white rounded font-bold text-sm animate-bounce">
                                j
                              </div>
                            </div>
                          )}
                          <div
                            className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                              steps[currentStep].j === idx
                                ? 'bg-blue-200 dark:bg-blue-800 border-blue-500 scale-110 ring-4 ring-blue-300'
                                : steps[currentStep].j > idx
                                ? 'bg-slate-200 dark:bg-slate-700 border-slate-400 opacity-50'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                            } ${
                              steps[currentStep].j === idx ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {val}
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">[{idx}]</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-center text-xs text-slate-600 dark:text-slate-400">
                      Pointer j = {steps[currentStep].j}
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Array */}
              <div>
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">
                  Merged Result Array: ({steps[currentStep].result.length} elements)
                </p>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex gap-2 flex-wrap justify-center">
                    {steps[currentStep].result.length === 0 ? (
                      <div className="text-slate-500 dark:text-slate-400 italic">Empty (ready to fill)</div>
                    ) : (
                      steps[currentStep].result.map((val, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 border-2 border-purple-400 text-purple-900 dark:text-purple-100 animate-in zoom-in duration-500"
                        >
                          {val}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

            </div>
          )}
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            Complexity Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Time Complexity: O(n + m)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• We visit each element exactly once from both arrays</li>
                <li>• n = length of array1, m = length of array2</li>
                <li>• Linear time - very efficient!</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Space Complexity: O(n + m)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Need new array to store merged result</li>
                <li>• Result size = n + m elements</li>
                <li>• Only use two pointers: O(1) extra pointer space</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">
                💡 Key Insights
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Two-pointer technique is perfect for sorted arrays</li>
                <li>• Optimal O(n+m) time - can't be faster!</li>
                <li>• Used in Merge Sort algorithm</li>
                <li>• Works for merging more than two arrays too</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
