'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw,
  Target, AlertCircle, CheckCircle, Search, 
  RotateCw, TrendingUp, Zap, ArrowRight
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function SearchRotatedSortedArray() {
  // Custom animations style tag
  const styleTag = (
    <style jsx>{`
      @keyframes lift-and-examine {
        0% {
          transform: translateY(0) scale(1);
        }
        25% {
          transform: translateY(-20px) scale(1.15);
        }
        50% {
          transform: translateY(-24px) scale(1.2) rotate(2deg);
        }
        75% {
          transform: translateY(-20px) scale(1.15) rotate(-2deg);
        }
        100% {
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes arc-left {
        0% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(-30px, -30px) scale(1.3) rotate(-10deg);
        }
        100% {
          transform: translate(0, 0) scale(1);
        }
      }
      
      @keyframes arc-right {
        0% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(30px, -30px) scale(1.3) rotate(10deg);
        }
        100% {
          transform: translate(0, 0) scale(1);
        }
      }
      
      @keyframes mid-spotlight {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
        }
        50% {
          transform: scale(1.25) translateY(-10px);
          box-shadow: 0 0 30px 10px rgba(168, 85, 247, 0.4);
        }
      }
      
      .lift-examine {
        animation: lift-and-examine 1.2s ease-in-out;
      }
      
      .arc-left {
        animation: arc-left 1s ease-in-out;
      }
      
      .arc-right {
        animation: arc-right 1s ease-in-out;
      }
      
      .mid-spotlight {
        animation: mid-spotlight 1.5s ease-in-out infinite;
      }
    `}</style>
  );
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem data - Rotated sorted array
  const testArray = [4, 5, 6, 7, 0, 1, 2];
  const targetValue = 0;
  
  // Search in Rotated Sorted Array - 38 Granular Steps (Expanded for Better Understanding)
  const steps = [
    // Initialization (3 steps)
    { step: 1, left: 0, right: 6, mid: -1, target: 0, currentLine: 1, action: 'init', description: '📋 Initialize: Search for target 0 in rotated array [4,5,6,7,0,1,2]', found: false, sortedSide: null },
    { step: 2, left: 0, right: 6, mid: -1, target: 0, currentLine: 2, action: 'init', description: '📋 Initialize: Set left = 0 (start of array)', found: false, sortedSide: null },
    { step: 3, left: 0, right: 6, mid: -1, target: 0, currentLine: 3, action: 'init', description: '📋 Initialize: Set right = 6 (end of array)', found: false, sortedSide: null },
    
    // Iteration 1 (Expanded: 12 steps)
    { step: 4, left: 0, right: 6, mid: -1, target: 0, currentLine: 5, action: 'loop-start', description: '🔄 Loop Iteration 1: Start binary search', found: false, sortedSide: null },
    { step: 5, left: 0, right: 6, mid: -1, target: 0, currentLine: 5, action: 'loop-check', description: '✅ Check: left(0) <= right(6)? YES! (0 ≤ 6) Continue search', found: false, sortedSide: null },
    { step: 6, left: 0, right: 6, mid: -1, target: 0, currentLine: 6, action: 'calculate', description: '📊 Calculate: mid = floor((0 + 6) / 2) = floor(3) = 3', found: false, sortedSide: null },
    { step: 7, left: 0, right: 6, mid: 3, target: 0, currentLine: 6, action: 'examine', description: '📍 Access: arr[left] = arr[0] = 4', found: false, sortedSide: null },
    { step: 8, left: 0, right: 6, mid: 3, target: 0, currentLine: 7, action: 'examine', description: '📍 Access: arr[mid] = arr[3] = 7', found: false, sortedSide: null },
    { step: 9, left: 0, right: 6, mid: 3, target: 0, currentLine: 8, action: 'compare', description: '⚖️ Compare: arr[3](7) === target(0)? NO (7 ≠ 0)', found: false, sortedSide: null },
    { step: 10, left: 0, right: 6, mid: 3, target: 0, currentLine: 10, action: 'check', description: '🔍 Determine Sorted Half: arr[0](4) ≤ arr[3](7)? YES! (4 ≤ 7)', found: false, sortedSide: null },
    { step: 11, left: 0, right: 6, mid: 3, target: 0, currentLine: 10, action: 'check', description: '📗 Conclusion: Left half [4,5,6,7] is sorted in ascending order', found: false, sortedSide: 'left' },
    { step: 12, left: 0, right: 6, mid: 3, target: 0, currentLine: 11, action: 'check', description: '🔍 Check if target in sorted range: arr[0](4) ≤ target(0)?', found: false, sortedSide: 'left' },
    { step: 13, left: 0, right: 6, mid: 3, target: 0, currentLine: 11, action: 'compare', description: '⚖️ Range Check: 4 ≤ 0? NO! Target too small for left half', found: false, sortedSide: 'left' },
    { step: 14, left: 0, right: 6, mid: 3, target: 0, currentLine: 14, action: 'decision', description: '💡 Decision: Target(0) NOT in sorted left [4-7] → Must be in right half', found: false, sortedSide: 'left' },
    { step: 15, left: 4, right: 6, mid: 3, target: 0, currentLine: 15, action: 'move', description: '➡️ Move: left = mid + 1 = 3 + 1 = 4 → Search right [0,1,2]', found: false, sortedSide: null },
    
    // Iteration 2 (Expanded: 13 steps)
    { step: 16, left: 4, right: 6, mid: -1, target: 0, currentLine: 5, action: 'loop-start', description: '🔄 Loop Iteration 2: Searching in narrowed range', found: false, sortedSide: null },
    { step: 17, left: 4, right: 6, mid: -1, target: 0, currentLine: 5, action: 'loop-check', description: '✅ Check: left(4) <= right(6)? YES! (4 ≤ 6) Continue', found: false, sortedSide: null },
    { step: 18, left: 4, right: 6, mid: -1, target: 0, currentLine: 6, action: 'calculate', description: '📊 Calculate: mid = floor((4 + 6) / 2) = floor(5) = 5', found: false, sortedSide: null },
    { step: 19, left: 4, right: 6, mid: 5, target: 0, currentLine: 6, action: 'examine', description: '📍 Access: arr[left] = arr[4] = 0', found: false, sortedSide: null },
    { step: 20, left: 4, right: 6, mid: 5, target: 0, currentLine: 7, action: 'examine', description: '📍 Access: arr[mid] = arr[5] = 1', found: false, sortedSide: null },
    { step: 21, left: 4, right: 6, mid: 5, target: 0, currentLine: 8, action: 'compare', description: '⚖️ Compare: arr[5](1) === target(0)? NO (1 ≠ 0)', found: false, sortedSide: null },
    { step: 22, left: 4, right: 6, mid: 5, target: 0, currentLine: 10, action: 'check', description: '🔍 Determine Sorted Half: arr[4](0) ≤ arr[5](1)? YES! (0 ≤ 1)', found: false, sortedSide: null },
    { step: 23, left: 4, right: 6, mid: 5, target: 0, currentLine: 10, action: 'check', description: '📗 Conclusion: Left half [0,1] is sorted in ascending order', found: false, sortedSide: 'left' },
    { step: 24, left: 4, right: 6, mid: 5, target: 0, currentLine: 11, action: 'check', description: '🔍 Check if target in sorted range: arr[4](0) ≤ target(0) ≤ arr[5](1)?', found: false, sortedSide: 'left' },
    { step: 25, left: 4, right: 6, mid: 5, target: 0, currentLine: 11, action: 'compare', description: '⚖️ Range Check: 0 ≤ 0 ≤ 1? YES! Target in sorted left half', found: false, sortedSide: 'left' },
    { step: 26, left: 4, right: 6, mid: 5, target: 0, currentLine: 12, action: 'decision', description: '💡 Decision: Target(0) IS in sorted left [0-1] → Search left', found: false, sortedSide: 'left' },
    { step: 27, left: 4, right: 4, mid: 5, target: 0, currentLine: 13, action: 'move', description: '⬅️ Move: right = mid - 1 = 5 - 1 = 4 → Search left [0]', found: false, sortedSide: null },
    
    // Iteration 3 (Expanded: 8 steps)
    { step: 28, left: 4, right: 4, mid: -1, target: 0, currentLine: 5, action: 'loop-start', description: '🔄 Loop Iteration 3: Final check (one element left)', found: false, sortedSide: null },
    { step: 29, left: 4, right: 4, mid: -1, target: 0, currentLine: 5, action: 'loop-check', description: '✅ Check: left(4) <= right(4)? YES! (4 = 4) Last iteration', found: false, sortedSide: null },
    { step: 30, left: 4, right: 4, mid: -1, target: 0, currentLine: 6, action: 'calculate', description: '📊 Calculate: mid = floor((4 + 4) / 2) = floor(4) = 4', found: false, sortedSide: null },
    { step: 31, left: 4, right: 4, mid: 4, target: 0, currentLine: 7, action: 'examine', description: '📍 Access: arr[mid] = arr[4] = 0', found: false, sortedSide: null },
    { step: 32, left: 4, right: 4, mid: 4, target: 0, currentLine: 8, action: 'compare', description: '⚖️ Compare: arr[4](0) === target(0)? Checking...', found: false, sortedSide: null },
    { step: 33, left: 4, right: 4, mid: 4, target: 0, currentLine: 8, action: 'compare', description: '🎯 Match Found! arr[4](0) === target(0)? YES! (0 = 0)', found: false, sortedSide: null },
    { step: 34, left: 4, right: 4, mid: 4, target: 0, currentLine: 9, action: 'found', description: '🎉 Success! Target 0 found at index 4!', found: true, sortedSide: null },
    
    // Termination (3 steps)
    { step: 35, left: 4, right: 4, mid: 4, target: 0, currentLine: 20, action: 'result', description: '🎯 Return: index = 4 (target found successfully)', found: true, sortedSide: null },
    { step: 36, left: 4, right: 4, mid: 4, target: 0, currentLine: 21, action: 'done', description: '✅ Complete! Found target in O(log n) = log₂(7) ≈ 3 iterations', found: true, sortedSide: null },
  ];

  // Code viewer function
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const leftVal = testArray[stepData.left] ?? Number.NaN;
    const midVal = testArray[stepData.mid] ?? Number.NaN;
    const rightVal = testArray[stepData.right] ?? Number.NaN;
    
    return [
      { line: 1, code: 'function search(nums, target) {', active: stepData.currentLine === 1, indent: 0, values: stepData.currentLine >= 1 ? `nums=[${testArray.join(',')}], target=${stepData.target}` : '' },
      { line: 2, code: '  let left = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine >= 2 ? `left=${stepData.left}` : '' },
      { line: 3, code: '  let right = nums.length - 1;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine >= 3 ? `right=${stepData.right}, nums.length=${testArray.length}` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  while (left <= right) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine >= 5 ? `${stepData.left} <= ${stepData.right}? ${stepData.left <= stepData.right ? 'true' : 'false'}` : '' },
      { line: 6, code: '    let mid = Math.floor((left + right) / 2);', active: stepData.currentLine === 6, indent: 2, values: stepData.mid >= 0 ? `mid=⌊(${stepData.left}+${stepData.right})/2⌋=${stepData.mid}` : '' },
      { line: 7, code: '    ', active: false, indent: 2 },
      { line: 8, code: '    if (nums[mid] === target) {', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 && stepData.mid >= 0 ? `nums[${stepData.mid}]=${midVal}, target=${stepData.target}, ${midVal}===${stepData.target}? ${midVal === stepData.target ? 'true' : 'false'}` : '' },
      { line: 9, code: '      return mid;  // Found!', active: stepData.currentLine === 9, indent: 3, values: stepData.currentLine === 9 ? `return ${stepData.mid}` : '' },
      { line: 10, code: '    }', active: false, indent: 2 },
      { line: 11, code: '    ', active: false, indent: 2 },
      { line: 12, code: '    // Check which half is sorted', active: stepData.currentLine === 10, indent: 2 },
      { line: 13, code: '    if (nums[left] <= nums[mid]) {', active: stepData.currentLine === 10, indent: 2, values: stepData.currentLine === 10 && stepData.mid >= 0 ? `nums[${stepData.left}]=${leftVal} <= nums[${stepData.mid}]=${midVal}? ${leftVal <= midVal ? 'true (left sorted)' : 'false'}` : '' },
      { line: 14, code: '      // Left half is sorted', active: stepData.currentLine === 11, indent: 3 },
      { line: 15, code: '      if (nums[left] <= target && target < nums[mid]) {', active: stepData.currentLine === 11, indent: 3, values: stepData.currentLine === 11 && stepData.mid >= 0 ? `${leftVal}<=${stepData.target} && ${stepData.target}<${midVal}? ${leftVal <= stepData.target && stepData.target < midVal ? 'true' : 'false'}` : '' },
      { line: 16, code: '        right = mid - 1;', active: stepData.currentLine === 13, indent: 4, values: stepData.currentLine === 13 && stepData.mid >= 0 ? `right=${stepData.mid}-1=${stepData.right}` : '' },
      { line: 17, code: '      } else {', active: false, indent: 3 },
      { line: 18, code: '        left = mid + 1;', active: stepData.currentLine === 15, indent: 4, values: stepData.currentLine === 15 && stepData.mid >= 0 ? `left=${stepData.mid}+1=${stepData.left}` : '' },
      { line: 19, code: '      }', active: false, indent: 3 },
      { line: 20, code: '    } else {', active: false, indent: 2 },
      { line: 21, code: '      // Right half is sorted', active: false, indent: 3 },
      { line: 22, code: '      if (nums[mid] < target && target <= nums[right]) {', active: false, indent: 3 },
      { line: 23, code: '        left = mid + 1;', active: false, indent: 4 },
      { line: 24, code: '      } else {', active: false, indent: 3 },
      { line: 25, code: '        right = mid - 1;', active: false, indent: 4 },
      { line: 26, code: '      }', active: false, indent: 3 },
      { line: 27, code: '    }', active: false, indent: 2 },
      { line: 28, code: '  }', active: false, indent: 1 },
      { line: 29, code: '  ', active: false, indent: 1 },
      { line: 30, code: '  return -1;  // Not found', active: stepData.currentLine === 20, indent: 1, values: stepData.currentLine === 20 ? `return -1` : '' },
      { line: 31, code: '}', active: stepData.currentLine === 21, indent: 0 },
    ];
  };

  // Navigation functions
  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = { slow: 2200, normal: 1400, fast: 800 };
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
      {styleTag}
      <PageHeader
        icon={Search}
        category="DSA · Arrays · Mixed Array Problems"
        title="Search in Rotated Sorted Array"
        description="Find a target value in a sorted array that has been rotated"
        colorTheme="indigo"
        badges={[
          { label: 'Binary Search', variant: 'default' },
          { label: 'O(log n) Time', variant: 'success' },
          { label: 'O(1) Space', variant: 'secondary' },
        ]}
      />

      {/* Problem Definition */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Understanding the Problem
          </CardTitle>
          <CardDescription>
            Binary search with a twist - the array has been rotated!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <RotateCw className="w-5 h-5" />
              Think of it Like a Rotated Clock! 🕐
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-indigo-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine numbers arranged in a circle. A <strong>sorted array</strong> [0,1,2,4,5,6,7] 
                gets <strong>rotated</strong> to become [4,5,6,7,0,1,2]. 
                Still sorted, but the starting point shifted!
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                    <span className="font-bold text-indigo-900 dark:text-indigo-100">Original: [0, 1, 2, 4, 5, 6, 7]</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <RotateCw className="w-5 h-5 text-indigo-600" />
                    <span className="font-bold text-indigo-900 dark:text-indigo-100">Rotated: [4, 5, 6, 7, 0, 1, 2]</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 mt-3">
                    <p>• <strong>Rotation point:</strong> Between 7 and 0 (index 4)</p>
                    <p>• <strong>Left half [4,5,6,7]:</strong> Sorted ✓</p>
                    <p>• <strong>Right half [0,1,2]:</strong> Sorted ✓</p>
                    <p className="font-bold text-indigo-700 dark:text-indigo-300">→ One half is ALWAYS sorted!</p>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">
                    💡 Key Insight: Use binary search, but check which half is sorted first!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-lg border-l-4 border-indigo-500">
              <p className="text-sm font-bold text-indigo-900 dark:text-indigo-100 mb-2">
                🎯 Modified Binary Search Strategy
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                At each step: Identify which half is sorted → Check if target in sorted range → Adjust left/right pointers
              </p>
            </div>
          </div>

          {/* Visual Example */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300">
              <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-500">Array:</span>
                  <div className="font-mono text-indigo-700 dark:text-indigo-300">[4, 5, 6, 7, 0, 1, 2]</div>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Target:</span>
                  <div className="font-mono text-blue-700 dark:text-blue-300">0</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
              <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
              <div className="text-sm">
                <div className="font-mono font-bold text-green-800 dark:text-green-200">
                  4
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  ✅ Index where target was found
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
                <span><strong>Rotated but still sorted</strong> - in two parts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>One half always sorted</strong> - use this to decide direction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>O(log n) time</strong> - binary search efficiency maintained</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Compare arr[left] ≤ arr[mid]</strong> - determines sorted half</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Algorithm Strategy */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            Algorithm Strategy
          </CardTitle>
          <CardDescription>Modified binary search for rotated arrays</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Calculate Mid Point</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Same as regular binary search:</div>
                  <div className="font-mono text-sm">
                    mid = (left + right) / 2
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Check if Found</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Simple check:</div>
                  <div className="text-sm">
                    If arr[mid] === target → Return mid
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Identify Sorted Half</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Key check:</div>
                  <div className="text-sm space-y-1">
                    <div>If arr[left] ≤ arr[mid] → Left half sorted</div>
                    <div>Else → Right half sorted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <div className="font-semibold text-green-900 dark:text-green-100 mb-2">Check Target Range</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">In sorted half:</div>
                  <div className="text-sm">
                    Is target in sorted half's range?
                    <br />
                    <span className="text-xs">→ YES: Search sorted half</span>
                    <br />
                    <span className="text-xs">→ NO: Search other half</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <Play className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch binary search navigate the rotated array</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-indigo-300">
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
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
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
              className="border-indigo-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
              <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
              className="border-indigo-300"
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">searchRotated.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border-l-2 border-indigo-400 dark:border-indigo-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-indigo-600 dark:text-indigo-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-indigo-50/30 dark:from-slate-800/50 dark:to-indigo-900/20 px-4 py-3">
                <div className="space-y-2">
                  {/* Primary Variables */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Left:</span>
                        <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded font-mono font-bold text-sm text-indigo-700 dark:text-indigo-300">
                          {steps[currentStep].left}
                        </span>
                        {steps[currentStep].left >= 0 && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            = <span className="font-semibold text-indigo-600 dark:text-indigo-400">{testArray[steps[currentStep].left]}</span>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Mid:</span>
                        <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono font-bold text-sm text-purple-700 dark:text-purple-300">
                          {steps[currentStep].mid >= 0 ? steps[currentStep].mid : '-'}
                        </span>
                        {steps[currentStep].mid >= 0 && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            = <span className="font-semibold text-purple-600 dark:text-purple-400">{testArray[steps[currentStep].mid]}</span>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Right:</span>
                        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono font-bold text-sm text-blue-700 dark:text-blue-300">
                          {steps[currentStep].right}
                        </span>
                        {steps[currentStep].right >= 0 && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            = <span className="font-semibold text-blue-600 dark:text-blue-400">{testArray[steps[currentStep].right]}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Target:</span>
                      <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded font-mono font-bold text-sm text-amber-700 dark:text-amber-300">
                        {steps[currentStep].target}
                      </span>
                    </div>
                  </div>
                  
                  {/* Secondary Info */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex gap-6 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400">Range Size:</span>
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                          {steps[currentStep].right - steps[currentStep].left + 1} elements
                        </span>
                      </div>
                      {steps[currentStep].sortedSide && (
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 dark:text-slate-400">Sorted Side:</span>
                          <span className={`font-semibold ${steps[currentStep].sortedSide === 'left' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                            {steps[currentStep].sortedSide === 'left' ? '📗 Left' : '📘 Right'}
                          </span>
                        </div>
                      )}
                      {steps[currentStep].found && (
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 dark:text-slate-400">Status:</span>
                          <span className="font-semibold text-green-600 dark:text-green-400">✓ Found!</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs">
                      <span className="text-slate-500 dark:text-slate-400">Action:</span>
                      <span className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded font-medium text-slate-700 dark:text-slate-300">
                        {steps[currentStep].action}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-lg animate-in slide-in-from-bottom-4 fade-in duration-500 ${
              steps[currentStep].action === 'done' || steps[currentStep].action === 'found'
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : steps[currentStep].action === 'init'
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
                : 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-300 dark:border-indigo-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full shadow-lg animate-pulse ${
                    steps[currentStep].action === 'done' || steps[currentStep].action === 'found' ? 'bg-green-600 ring-4 ring-green-300' :
                    steps[currentStep].action === 'init' ? 'bg-blue-600 ring-4 ring-blue-300' :
                    steps[currentStep].action === 'check' ? 'bg-purple-600 ring-4 ring-purple-300' : 'bg-indigo-600 ring-4 ring-indigo-300'
                  }`}>
                    {(steps[currentStep].action === 'done' || steps[currentStep].action === 'found') ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'init' ? (
                      <Target className="w-6 h-6 text-white" />
                    ) : (
                      <Search className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-check' && '✅ Loop Condition Check'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculating Mid'}
                      {steps[currentStep].action === 'examine' && '📍 Examining Element'}
                      {steps[currentStep].action === 'compare' && '⚖️ Comparing Values'}
                      {steps[currentStep].action === 'check' && '🔍 Checking Sorted Half'}
                      {steps[currentStep].action === 'decision' && '💡 Making Decision'}
                      {steps[currentStep].action === 'move' && '➡️ Moving Pointers'}
                      {steps[currentStep].action === 'found' && '🎯 Target Found!'}
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

          {/* INNOVATIVE: Visual Representation with Rotation Point */}
          {currentStep >= 0 && (
            <div className="space-y-6">
              
              {/* Initialization Phase Indicator */}
              {steps[currentStep].action === 'init' && (
                <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-400 dark:border-blue-600 animate-in slide-in-from-left-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500 text-white rounded-full shadow-lg animate-pulse">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-1">
                        🚀 Initialization Phase
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Setting up pointers: left = {steps[currentStep].left}, right = {steps[currentStep].right}, target = {steps[currentStep].target}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Loop Status Indicator */}
              {(steps[currentStep].action === 'loop-start' || steps[currentStep].action === 'loop-check') && (
                <div className="p-5 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 rounded-xl border-2 border-cyan-400 dark:border-cyan-600 animate-in slide-in-from-right-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500 text-white rounded-full shadow-lg animate-pulse">
                      <RotateCcw className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-cyan-900 dark:text-cyan-100 mb-1">
                        {steps[currentStep].action === 'loop-start' ? '🔄 Loop Starting' : '✅ Checking Loop Condition'}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {steps[currentStep].action === 'loop-check' && (
                          <>Is left({steps[currentStep].left}) ≤ right({steps[currentStep].right})? {steps[currentStep].left <= steps[currentStep].right ? 'YES ✓' : 'NO ✗'}</>
                        )}
                        {steps[currentStep].action === 'loop-start' && 'Binary search iteration beginning...'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Calculate Mid Indicator */}
              {steps[currentStep].action === 'calculate' && steps[currentStep].mid >= 0 && (
                <div className="p-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-xl border-2 border-violet-400 dark:border-violet-600 animate-in slide-in-from-bottom-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-violet-500 text-white rounded-full shadow-lg animate-pulse">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-violet-900 dark:text-violet-100 mb-1">
                          📊 Calculating Mid Point
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          mid = floor(({steps[currentStep].left} + {steps[currentStep].right}) / 2) = {steps[currentStep].mid}
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-violet-200 dark:bg-violet-800 rounded-lg font-mono font-bold text-lg text-violet-900 dark:text-violet-100 shadow-md animate-bounce">
                      {steps[currentStep].mid}
                    </div>
                  </div>
                </div>
              )}

              {/* Examine Array Access Indicator */}
              {steps[currentStep].action === 'examine' && steps[currentStep].mid >= 0 && (
                <div className="p-5 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-xl border-2 border-amber-400 dark:border-amber-600 animate-in slide-in-from-top-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-500 text-white rounded-full shadow-lg animate-pulse">
                      <Search className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-2">
                        📍 Accessing Array Element
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Reading: arr[{steps[currentStep].mid}]
                        </div>
                        <div className="px-3 py-1 bg-amber-200 dark:bg-amber-800 rounded font-mono font-bold text-amber-900 dark:text-amber-100 shadow-md">
                          = {testArray[steps[currentStep].mid]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Pointer Movement Indicator */}
              {steps[currentStep].action === 'move' && (
                <div className="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-xl border-2 border-rose-400 dark:border-rose-600 animate-in slide-in-from-left-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-rose-500 text-white rounded-full shadow-lg animate-pulse">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-rose-900 dark:text-rose-100 mb-2">
                        {steps[currentStep].description.includes('left =') ? '➡️ Moving Left Pointer' : '⬅️ Moving Right Pointer'}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        New search range: [{steps[currentStep].left}...{steps[currentStep].right}]
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-rose-200 dark:bg-rose-800 rounded-lg font-bold text-rose-900 dark:text-rose-100 shadow-md">
                      Range: {steps[currentStep].right - steps[currentStep].left + 1}
                    </div>
                  </div>
                </div>
              )}

              {/* Success/Completion Indicators */}
              {(steps[currentStep].action === 'found' || steps[currentStep].action === 'result' || steps[currentStep].action === 'done') && (
                <div className="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-xl border-4 border-green-400 dark:border-green-600 animate-in zoom-in fade-in duration-700 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-2xl animate-bounce ring-4 ring-green-300">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                        {steps[currentStep].action === 'found' && '🎉 Target Found!'}
                        {steps[currentStep].action === 'result' && '🎯 Returning Result'}
                        {steps[currentStep].action === 'done' && '✅ Search Complete!'}
                      </div>
                      <div className="text-sm text-slate-700 dark:text-slate-300">
                        {steps[currentStep].action === 'found' && `Target value ${targetValue} located at index ${steps[currentStep].mid}`}
                        {steps[currentStep].action === 'result' && `Successfully found target in O(log n) time`}
                        {steps[currentStep].action === 'done' && `Binary search completed in ${steps[currentStep].step <= 15 ? '1' : steps[currentStep].step <= 27 ? '2' : '3'} iterations`}
                      </div>
                    </div>
                    {steps[currentStep].mid >= 0 && (
                      <div className="px-5 py-3 bg-green-200 dark:bg-green-800 rounded-xl font-mono font-bold text-2xl text-green-900 dark:text-green-100 shadow-lg animate-pulse">
                        Index: {steps[currentStep].mid}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Iteration Counter - NEW! */}
              {steps[currentStep].step >= 4 && steps[currentStep].step <= 34 && (
                <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 animate-in slide-in-from-left-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-cyan-600 text-white rounded-lg font-bold text-lg shadow-lg animate-pulse">
                        {steps[currentStep].step <= 15 ? '1' : steps[currentStep].step <= 27 ? '2' : '3'}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-cyan-900 dark:text-cyan-100">
                          Binary Search Iteration {steps[currentStep].step <= 15 ? '1' : steps[currentStep].step <= 27 ? '2' : '3'}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {steps[currentStep].step <= 15 && 'Checking full range [0-6]'}
                          {steps[currentStep].step > 15 && steps[currentStep].step <= 27 && 'Narrowed to right half [4-6]'}
                          {steps[currentStep].step > 27 && 'Final check [4-4]'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Search Space</div>
                      <div className="text-2xl font-bold text-cyan-600 animate-in zoom-in duration-300">
                        {steps[currentStep].right - steps[currentStep].left + 1}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">elements</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Decision Flow Visualizer - NEW! */}
              {(steps[currentStep].action === 'compare' || steps[currentStep].action === 'decision') && steps[currentStep].mid >= 0 && (
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700 animate-in slide-in-from-bottom-4 fade-in duration-500 shadow-lg">
                  <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-center">
                    🧠 Decision Logic
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <div className="text-center p-3 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 animate-in zoom-in duration-300 shadow-lg">
                        <div className="text-xs text-slate-500 mb-1">Current Value</div>
                        <div className="text-xl font-bold text-purple-600 animate-pulse">{testArray[steps[currentStep].mid]}</div>
                      </div>
                      <div className="text-2xl animate-in zoom-in duration-500 delay-150">
                        {testArray[steps[currentStep].mid] === targetValue ? '✓' : '≠'}
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-slate-900 rounded-lg border-2 border-pink-300 animate-in zoom-in duration-300 delay-100 shadow-lg">
                        <div className="text-xs text-slate-500 mb-1">Target</div>
                        <div className="text-xl font-bold text-pink-600 animate-pulse">{targetValue}</div>
                      </div>
                    </div>
                    {testArray[steps[currentStep].mid] !== targetValue && (
                      <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-300 animate-in slide-in-from-top-2 duration-500 delay-300 shadow-md">
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 animate-pulse">
                          {steps[currentStep].action === 'decision' 
                            ? (steps[currentStep].description.includes('NOT in') 
                              ? '➡️ Search RIGHT half' 
                              : '⬅️ Search LEFT half')
                            : '🔍 Not a match, continue searching...'}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Rotation Point Indicator */}
              <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl border-2 border-orange-300 dark:border-orange-700 animate-in fade-in duration-700 shadow-md">
                <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-3 text-center flex items-center justify-center gap-2">
                  <RotateCw className="w-5 h-5" />
                  Rotation Point: Between indices 3 and 4
                </h5>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span>Array rotated at pivot → [4,5,6,7] | [0,1,2]</span>
                </div>
              </div>

              {/* Enhanced Sorted Half Indicator with Arrows */}
              {steps[currentStep].sortedSide && (
                <div className={`p-5 rounded-xl border-2 animate-in slide-in-from-top-4 fade-in duration-500 shadow-lg ${
                  steps[currentStep].sortedSide === 'left'
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400'
                    : 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400'
                }`}>
                  <div className="space-y-3">
                    <div className="text-center font-bold text-lg animate-in zoom-in duration-300">
                      {steps[currentStep].sortedSide === 'left' ? '📗 Left Half is Sorted' : '📘 Right Half is Sorted'}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      {steps[currentStep].sortedSide === 'left' ? (
                        <>
                          <div className="px-3 py-1 bg-green-200 dark:bg-green-800 rounded font-mono animate-in slide-in-from-left-4 duration-500 shadow-md">
                            [{steps[currentStep].left}...{steps[currentStep].mid}]
                          </div>
                          <span className="text-green-700 dark:text-green-300 animate-pulse">← Checking this range</span>
                        </>
                      ) : (
                        <>
                          <span className="text-blue-700 dark:text-blue-300 animate-pulse">Checking this range →</span>
                          <div className="px-3 py-1 bg-blue-200 dark:bg-blue-800 rounded font-mono animate-in slide-in-from-right-4 duration-500 shadow-md">
                            [{steps[currentStep].mid}...{steps[currentStep].right}]
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Array Visualization with Search Range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Rotated Array:</p>
                  <div className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                    Target: <span className="font-bold text-purple-700 dark:text-purple-300">{targetValue}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2 flex-wrap justify-center">
                    {testArray.map((val, idx) => {
                      const isLeft = idx === steps[currentStep].left;
                      const isRight = idx === steps[currentStep].right;
                      const isMid = idx === steps[currentStep].mid;
                      const isFound = steps[currentStep].found && idx === steps[currentStep].mid;
                      const inRange = idx >= steps[currentStep].left && idx <= steps[currentStep].right;
                      const isRotationPoint = idx === 4; // Between 7 and 0
                      
                      // Determine animation class based on state
                      const getAnimationClass = () => {
                        if (isFound) return '';
                        if (isMid && steps[currentStep].action === 'examine') return 'lift-examine';
                        if (isLeft && steps[currentStep].action === 'examine') return 'arc-left';
                        if (isRight && steps[currentStep].action === 'examine') return 'arc-right';
                        return '';
                      };
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {/* Pointer Labels */}
                          {isLeft && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-in slide-in-from-top-4 fade-in duration-500">
                              <div className="px-2 py-1 bg-indigo-500 text-white rounded font-bold text-sm shadow-lg animate-pulse">
                                L
                              </div>
                            </div>
                          )}
                          {isMid && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-in slide-in-from-top-4 fade-in duration-500">
                              <div className="px-2 py-1 bg-purple-500 text-white rounded font-bold text-sm shadow-lg animate-pulse ring-2 ring-purple-300">
                                M
                              </div>
                            </div>
                          )}
                          {isRight && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-in slide-in-from-top-4 fade-in duration-500">
                              <div className="px-2 py-1 bg-blue-500 text-white rounded font-bold text-sm shadow-lg animate-pulse">
                                R
                              </div>
                            </div>
                          )}
                          
                          {/* Rotation Point Marker */}
                          {isRotationPoint && (
                            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 animate-in zoom-in duration-500">
                              <div className="text-xl text-orange-500">
                                🔄
                              </div>
                            </div>
                          )}
                          
                          {/* Value Box */}
                          <div
                            className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-lg border-2 ${getAnimationClass()} ${!getAnimationClass() ? 'transition-all duration-700' : ''} ${
                              isFound
                                ? 'bg-gradient-to-br from-green-300 to-emerald-400 border-green-500 scale-125 ring-4 ring-green-300 shadow-2xl shadow-green-500/50 animate-[bounce_1s_ease-in-out_3]'
                                : isMid
                                ? 'bg-gradient-to-br from-purple-300 to-violet-400 dark:bg-gradient-to-br dark:from-purple-700 dark:to-violet-700 border-purple-500 scale-125 ring-4 ring-purple-300 shadow-2xl shadow-purple-500/50 animate-[bounce_1s_ease-in-out_2]'
                                : isLeft || isRight
                                ? 'bg-gradient-to-br from-indigo-200 to-blue-300 dark:bg-gradient-to-br dark:from-indigo-800 dark:to-blue-800 border-indigo-500 scale-110 ring-4 ring-indigo-300 shadow-xl shadow-indigo-500/30 animate-pulse'
                                : inRange
                                ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-400 shadow-md'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-300 opacity-50'
                            } ${
                              isFound ? 'text-green-900 dark:text-green-100' :
                              isMid ? 'text-purple-900 dark:text-purple-100' :
                              inRange ? 'text-blue-900 dark:text-blue-100' :
                              'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {val}
                          </div>
                          
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">[{idx}]</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Search Range Indicator */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-400 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Search Range</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-200 dark:bg-purple-800 border-2 border-purple-500 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Mid Point</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-green-300 to-emerald-400 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Found!</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            Complexity Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Time Complexity: O(log n)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Binary search halves search space each iteration</li>
                <li>• Even with rotation, still O(log n) comparisons</li>
                <li>• Maximum log₂(n) iterations</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Space Complexity: O(1)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Only use three pointers: left, mid, right</li>
                <li>• No additional data structures needed</li>
                <li>• Constant space usage</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
                💡 Key Insights
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Modified binary search maintains O(log n) efficiency</li>
                <li>• Key: Always one half is properly sorted</li>
                <li>• Check if target in sorted half's range before deciding direction</li>
                <li>• Works for any rotation point (0 to n-1)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
