'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Filter, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RemoveDuplicates() {
  // CSS for copy animation (value moves from j to i)
  const copyStyles = `
    @keyframes copyFromJToI {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      30% {
        transform: translate(0, -60px) scale(1.2);
        opacity: 0.8;
      }
      70% {
        transform: translate(var(--copy-distance), -60px) scale(1.2);
        opacity: 0.8;
      }
      100% {
        transform: translate(var(--copy-distance), 0) scale(1);
        opacity: 1;
      }
    }
    
    @keyframes pulseTarget {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  `;

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [arrayState, setArrayState] = useState([1, 1, 2, 2, 2, 3, 4, 4, 5]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(1);
  const [uniqueLength, setUniqueLength] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const initialArray = [1, 1, 2, 2, 2, 3, 4, 4, 5];
  
  const steps = [
    { 
      step: 1,
      array: [1, 1, 2, 2, 2, 3, 4, 4, 5],
      i: 0,
      j: 0,
      uniqueLength: 1,
      currentLine: 2,
      description: '📋 Initialize: Set i = 0. Pointer i tracks the position of the last unique element found.',
      comparing: false,
      action: 'init'
    },
    { 
      step: 2,
      array: [1, 1, 2, 2, 2, 3, 4, 4, 5],
      i: 0,
      j: 1,
      uniqueLength: 1,
      currentLine: 4,
      description: '🔍 Initialize: Set j = 1. Pointer j scans through array to find next unique element.',
      comparing: false,
      action: 'init'
    },
    { 
      step: 3,
      array: [1, 1, 2, 2, 2, 3, 4, 4, 5],
      i: 0,
      j: 1,
      uniqueLength: 1,
      currentLine: 6,
      description: '⚖️ First Comparison: Compare arr[j]=1 with arr[i]=1. Are they equal?',
      comparing: true,
      action: 'checking',
      isDuplicate: true
    },
    { 
      step: 4,
      array: [1, 1, 2, 2, 2, 3, 4, 4, 5],
      i: 0,
      j: 1,
      uniqueLength: 1,
      currentLine: 6,
      description: '❌ Duplicate Detected: arr[j]=1 == arr[i]=1. Same values! Skip this element, increment j to continue scanning.',
      comparing: true,
      action: 'skip',
      isDuplicate: true
    },
    { 
      step: 5,
      array: [1, 1, 2, 2, 2, 3, 4, 4, 5],
      i: 0,
      j: 2,
      uniqueLength: 1,
      currentLine: 6,
      description: '👉 Move j: j++ → j=2. Now compare arr[j]=2 with arr[i]=1. Different values?',
      comparing: true,
      action: 'checking',
      isDuplicate: false
    },
    { 
      step: 6,
      array: [1, 1, 2, 2, 2, 3, 4, 4, 5],
      i: 0,
      j: 2,
      uniqueLength: 1,
      currentLine: 7,
      description: '✨ Unique Found: arr[j]=2 ≠ arr[i]=1! Found a new unique element. Increment i to make space.',
      comparing: true,
      action: 'found-unique',
      isDuplicate: false
    },
    { 
      step: 7,
      array: [1, 2, 2, 2, 2, 3, 4, 4, 5],
      i: 1,
      j: 2,
      uniqueLength: 2,
      currentLine: 7,
      description: '📝 Copy Operation: arr[++i] = arr[j]. Copy value 2 to position i=1. Array now: [1,2,2,2,2,3,4,4,5].',
      comparing: true,
      action: 'copy',
      isDuplicate: false
    },
    { 
      step: 8,
      array: [1, 2, 2, 2, 2, 3, 4, 4, 5],
      i: 1,
      j: 3,
      uniqueLength: 2,
      currentLine: 6,
      description: '👉 Move j: j++ → j=3. Compare arr[j]=2 with arr[i]=2. Are they equal?',
      comparing: true,
      action: 'checking',
      isDuplicate: true
    },
    { 
      step: 9,
      array: [1, 2, 2, 2, 2, 3, 4, 4, 5],
      i: 1,
      j: 3,
      uniqueLength: 2,
      currentLine: 6,
      description: '❌ Duplicate Detected: arr[j]=2 == arr[i]=2. Same values! Skip this duplicate 2.',
      comparing: true,
      action: 'skip',
      isDuplicate: true
    },
    { 
      step: 10,
      array: [1, 2, 2, 2, 2, 3, 4, 4, 5],
      i: 1,
      j: 4,
      uniqueLength: 2,
      currentLine: 6,
      description: '❌ Another Duplicate: j++ → j=4. arr[j]=2 == arr[i]=2. Yet another duplicate 2! Keep skipping.',
      comparing: true,
      action: 'skip',
      isDuplicate: true
    },
    { 
      step: 11,
      array: [1, 2, 2, 2, 2, 3, 4, 4, 5],
      i: 1,
      j: 5,
      uniqueLength: 2,
      currentLine: 7,
      description: '✨ Unique Found: j++ → j=5. arr[j]=3 ≠ arr[i]=2! Found unique 3 after skipping multiple 2s.',
      comparing: true,
      action: 'found-unique',
      isDuplicate: false
    },
    { 
      step: 12,
      array: [1, 2, 3, 2, 2, 3, 4, 4, 5],
      i: 2,
      j: 5,
      uniqueLength: 3,
      currentLine: 7,
      description: '📝 Copy Operation: arr[++i] = arr[j]. Copy value 3 to position i=2. Unique section growing!',
      comparing: true,
      action: 'copy',
      isDuplicate: false
    },
    { 
      step: 13,
      array: [1, 2, 3, 2, 2, 3, 4, 4, 5],
      i: 2,
      j: 6,
      uniqueLength: 3,
      currentLine: 7,
      description: '✨ Unique Found: j++ → j=6. arr[j]=4 ≠ arr[i]=3! Found unique 4.',
      comparing: true,
      action: 'found-unique',
      isDuplicate: false
    },
    { 
      step: 14,
      array: [1, 2, 3, 4, 2, 3, 4, 4, 5],
      i: 3,
      j: 6,
      uniqueLength: 4,
      currentLine: 7,
      description: '📝 Copy Operation: arr[++i] = arr[j]. Copy value 4 to position i=3. Array: [1,2,3,4,2,3,4,4,5].',
      comparing: true,
      action: 'copy',
      isDuplicate: false
    },
    { 
      step: 15,
      array: [1, 2, 3, 4, 2, 3, 4, 4, 5],
      i: 3,
      j: 7,
      uniqueLength: 4,
      currentLine: 6,
      description: '❌ Duplicate Detected: j++ → j=7. arr[j]=4 == arr[i]=4. Duplicate 4! Skip it.',
      comparing: true,
      action: 'skip',
      isDuplicate: true
    },
    { 
      step: 16,
      array: [1, 2, 3, 4, 2, 3, 4, 4, 5],
      i: 3,
      j: 8,
      uniqueLength: 4,
      currentLine: 7,
      description: '✨ Unique Found: j++ → j=8. arr[j]=5 ≠ arr[i]=4! Last unique element found.',
      comparing: true,
      action: 'found-unique',
      isDuplicate: false
    },
    { 
      step: 17,
      array: [1, 2, 3, 4, 5, 3, 4, 4, 5],
      i: 4,
      j: 8,
      uniqueLength: 5,
      currentLine: 7,
      description: '📝 Copy Operation: arr[++i] = arr[j]. Copy value 5 to position i=4. Final unique array!',
      comparing: true,
      action: 'copy',
      isDuplicate: false
    },
    { 
      step: 18,
      array: [1, 2, 3, 4, 5, 3, 4, 4, 5],
      i: 4,
      j: 9,
      uniqueLength: 5,
      currentLine: 10,
      description: '🔄 Loop Complete: j=9 reached array.length. For loop terminates. Processing done!',
      comparing: false,
      action: 'complete'
    },
    { 
      step: 19,
      array: [1, 2, 3, 4, 5, 3, 4, 4, 5],
      i: 4,
      j: 9,
      uniqueLength: 5,
      currentLine: 10,
      description: '🎯 Result: First i+1=5 elements [1,2,3,4,5] contain all unique values from sorted array!',
      comparing: false,
      action: 'result'
    },
    { 
      step: 20,
      array: [1, 2, 3, 4, 5, 3, 4, 4, 5],
      i: 4,
      j: 9,
      uniqueLength: 5,
      currentLine: 10,
      description: '💡 Insight: Elements after index i=4 are old duplicates/garbage. In-place modification complete!',
      comparing: false,
      action: 'explain'
    },
    { 
      step: 21,
      array: [1, 2, 3, 4, 5, 3, 4, 4, 5],
      i: 4,
      j: 9,
      uniqueLength: 5,
      currentLine: 10,
      description: '↩️ Return Value: return i+1 = 5. This is the new length with only unique elements.',
      comparing: false,
      action: 'return'
    },
    { 
      step: 22,
      array: [1, 2, 3, 4, 5, 3, 4, 4, 5],
      i: 4,
      j: 9,
      uniqueLength: 5,
      currentLine: 10,
      description: '🎉 Algorithm Complete! Modified array in-place with O(1) space, O(n) time. 5 unique elements!',
      comparing: false,
      action: 'done'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = stepData.array;
    return [
      { line: 1, code: 'function removeDuplicates(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  if (arr.length === 0) return 0;`, active: stepData.currentLine === 2, indent: 1 },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  let i = 0;  // Last unique position`, active: stepData.currentLine === 2, indent: 1, values: `i = ${stepData.i}` },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let j = 1; j < arr.length; j++) {`, active: stepData.currentLine === 6, indent: 1, values: `j = ${stepData.j}` },
      { line: 7, code: `    if (arr[j] !== arr[i]) {`, active: stepData.currentLine === 6, indent: 2, values: stepData.comparing ? `${arr[stepData.j]} ${stepData.isDuplicate ? '==' : '!='} ${arr[stepData.i]}` : '' },
      { line: 8, code: `      i++;`, active: stepData.currentLine === 7 && !stepData.isDuplicate, indent: 3, values: stepData.action === 'copy' ? `i → ${stepData.i}` : '' },
      { line: 9, code: `      arr[i] = arr[j];`, active: stepData.currentLine === 7 && !stepData.isDuplicate, indent: 3, values: stepData.action === 'copy' ? `arr[${stepData.i}] = ${arr[stepData.j]}` : '' },
      { line: 10, code: `    }`, active: false, indent: 2 },
      { line: 11, code: `  }`, active: false, indent: 1 },
      { line: 12, code: `  `, active: false, indent: 1 },
      { line: 13, code: `  return i + 1;  // Length of unique`, active: stepData.currentLine === 10, indent: 1, values: stepData.action === 'done' ? `${stepData.uniqueLength}` : '' },
      { line: 14, code: `}`, active: stepData.currentLine === 11, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setArrayState(step.array);
    setI(step.i);
    setJ(step.j);
    setUniqueLength(step.uniqueLength);
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
      <style jsx>{copyStyles}</style>
      <PageHeader
        icon={Filter}
        category="DSA · Arrays"
        title="Remove Duplicates from Sorted Array"
        description="Master the two-pointer technique to remove duplicates in-place efficiently"
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
                <p className="font-medium">Two Pointer Technique</p>
                <p className="text-sm text-muted-foreground">Use i and j pointers effectively</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">In-Place Modification</p>
                <p className="text-sm text-muted-foreground">No extra space required</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Linear Time Solution</p>
                <p className="text-sm text-muted-foreground">Single pass through array</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Interview Classic</p>
                <p className="text-sm text-muted-foreground">Common coding question</p>
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
          <CardDescription>Understanding the challenge</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given a <strong>sorted array</strong>, remove duplicates <strong>in-place</strong> so each element appears only once. Return the new length using O(1) extra space.
          </p>

          {/* Visual Before/After */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filtering Duplicates
            </h4>
            
            <div className="space-y-4">
              {/* Before */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-green-300 dark:border-green-600">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Input (with duplicates):</p>
                <div className="flex items-center justify-center gap-2">
                  {[1, 1, 2, 2, 2, 3, 4, 4, 5].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded flex items-center justify-center font-bold text-sm border-2 ${
                        idx === 0 || idx === 2 || idx === 5 || idx === 6 || idx === 8
                          ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                          : 'bg-red-100 dark:bg-red-900 border-red-400 text-red-900 dark:text-red-100 opacity-60'
                      }`}>
                        {num}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-green-100 dark:bg-green-900 border border-green-500 rounded"></div>
                    <span>Keep (unique)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-100 dark:bg-red-900 border border-red-400 rounded opacity-60"></div>
                    <span>Remove (duplicate)</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="px-4 py-2 bg-green-100 dark:bg-green-900/40 rounded-full border-2 border-green-500">
                  <span className="text-sm font-bold text-green-900 dark:text-green-100">Remove Duplicates</span>
                </div>
              </div>

              {/* After */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Output (unique only):</p>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded flex items-center justify-center font-bold text-sm text-green-900 dark:text-green-100">
                        {num}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-3 text-green-700 dark:text-green-300 font-bold">
                  Length = 5 (unique elements)
                </p>
              </div>
            </div>
          </div>

          {/* Two-Pointer Strategy */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span className="text-lg">👉</span> Two-Pointer In-Place Strategy
            </h4>
            
            <div className="space-y-4">
              {/* Step visualization */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[1, 1, 2, 2, 2, 3, 4, 4, 5].map((num, idx) => (
                    <div key={idx} className="relative">
                      {idx === 0 && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400">i</div>
                      )}
                      {idx === 1 && (
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400">j</div>
                      )}
                      <div className={`w-9 h-9 rounded flex items-center justify-center text-xs font-bold border-2 ${
                        idx === 0
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100'
                          : idx === 1
                          ? 'bg-purple-100 dark:bg-purple-900 border-purple-500 text-purple-900 dark:text-purple-100'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                      }`}>
                        {num}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <p>• <strong className="text-blue-600 dark:text-blue-400">i</strong> = position for next unique element</p>
                  <p>• <strong className="text-purple-600 dark:text-purple-400">j</strong> = scans through array</p>
                  <p>• When <code>arr[j] != arr[i]</code>, copy arr[j] to position i+1</p>
                </div>
              </div>

              {/* Step by step */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                    <span><strong>Start:</strong> i=0 (first element always unique)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                    <span><strong>Scan:</strong> j moves right, comparing with arr[i]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                    <span><strong>Found new:</strong> arr[++i] = arr[j], move i forward</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">✓</div>
                    <span><strong>Return:</strong> i+1 (length of unique elements)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              💡 Key Insight
            </h4>
            <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
              <p>• <strong>Array is sorted</strong>, so duplicates are adjacent!</p>
              <p>• <strong>Compare adjacent elements</strong> (arr[i] vs arr[j])</p>
              <p>• <strong>Skip duplicates</strong> automatically when they match</p>
              <p>• <strong>Overwrite in-place</strong> - no extra space needed</p>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">In-place</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            Two-Pointer Algorithm: Visual Animation
          </CardTitle>
          <CardDescription>Watch how i and j pointers work together to filter duplicates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-teal-300 dark:border-teal-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-teal-900 dark:text-teal-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-teal-600 border-teal-300 focus:ring-teal-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-teal-800 dark:text-teal-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-teal-600 border-teal-300 focus:ring-teal-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-teal-800 dark:text-teal-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-teal-600 border-teal-300 focus:ring-teal-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-teal-800 dark:text-teal-200">Fast</span>
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
                    className="border-teal-300 dark:border-teal-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg border border-teal-300 dark:border-teal-700">
                    <span className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-teal-300 dark:border-teal-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">removeDuplicates.js</span>
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
                          <span className="ml-3 text-teal-600 dark:text-teal-400 font-semibold">
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
                        <span className="font-semibold text-teal-600 dark:text-teal-400">{i}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">j:</span>
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">{j}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">unique:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{uniqueLength}</span>
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
                steps[currentStep].action === 'done'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-400 dark:border-teal-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].action === 'done' ? 'bg-green-500' : 'bg-teal-500'}`}>
                      {steps[currentStep].action === 'done' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Filter className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].action === 'done' ? 'text-green-900 dark:text-green-100' : 'text-teal-900 dark:text-teal-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].action === 'done' ? 'text-green-800 dark:text-green-200' : 'text-teal-800 dark:text-teal-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${steps[currentStep].action === 'done' ? 'border-green-300 dark:border-green-700' : 'border-teal-300 dark:border-teal-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-teal-200 dark:border-teal-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">i (unique):</span>
                      <span className="text-base font-bold text-teal-600 dark:text-teal-400">{steps[currentStep].i}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">j (scan):</span>
                      <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">{steps[currentStep].j}</span>
                    </div>
                    {steps[currentStep].i < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-blue-200 dark:border-blue-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[i]:</span>
                        <span className="text-base font-bold text-blue-600 dark:text-blue-400">{arrayState[steps[currentStep].i]}</span>
                      </div>
                    )}
                    {steps[currentStep].j < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[j]:</span>
                        <span className="text-base font-bold text-purple-600 dark:text-purple-400">{arrayState[steps[currentStep].j]}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-green-200 dark:border-green-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">unique length:</span>
                      <span className="text-base font-bold text-green-600 dark:text-green-400">{steps[currentStep].uniqueLength}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">array:</span>
                      <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">[{arrayState.join(', ')}]</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <p className="text-sm font-medium text-teal-900 dark:text-teal-100 mb-3">Array State:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {(() => {
                  // During copy animation, show pre-copy array state so numbers travel correctly
                  const isCopying = steps[currentStep].action === 'copy';
                  if (isCopying && currentStep > 0) {
                    // Find the step before copy (which should have the pre-copy state)
                    return steps[currentStep - 1].array;
                  }
                  return arrayState;
                })().map((num, idx) => (
                  <div key={idx} className="relative">
                    {/* Pointer Labels */}
                    {idx === i && currentStep > 0 && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            i (unique)
                          </span>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-teal-600 dark:border-t-teal-400"></div>
                        </div>
                      </div>
                    )}
                    
                    {idx === j && j < arrayState.length && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-cyan-600 dark:border-b-cyan-400"></div>
                          <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            j (scan)
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={`relative w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg shadow-sm transition-all duration-300 ${
                        idx === i && currentStep > 0
                          ? 'bg-gradient-to-br from-teal-200 to-teal-300 dark:from-teal-800 dark:to-teal-700 border-4 border-teal-500 dark:border-teal-400 shadow-xl shadow-teal-500/50'
                          : idx === j && j < arrayState.length
                          ? 'bg-gradient-to-br from-cyan-200 to-cyan-300 dark:from-cyan-800 dark:to-cyan-700 border-4 border-cyan-500 dark:border-cyan-400 shadow-xl shadow-cyan-500/50'
                          : idx < uniqueLength && steps[currentStep].action === 'done'
                          ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 border-2 border-green-400 dark:border-green-600'
                          : idx < i
                          ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800'
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }`}
                      style={{
                        animation: (() => {
                          const isCopying = steps[currentStep].action === 'copy';
                          if (isCopying) {
                            if (idx === j) {
                              // Source element (j) moves to target (i)
                              return 'copyFromJToI 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                            } else if (idx === i) {
                              // Target element (i) pulses to show it's receiving
                              return 'pulseTarget 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                            }
                          }
                          return 'none';
                        })(),
                        // @ts-ignore - CSS variable
                        '--copy-distance': `${(i - j) * 64}px`, // 64px = element width + gap
                        zIndex: (() => {
                          const isCopying = steps[currentStep].action === 'copy';
                          return isCopying && idx === j ? 100 : 1;
                        })(),
                        filter: (() => {
                          const isCopying = steps[currentStep].action === 'copy';
                          return isCopying && (idx === i || idx === j) ? 'brightness(1.15) drop-shadow(0 10px 20px rgba(20, 184, 166, 0.4))' : 'brightness(1)';
                        })()
                      }}
                    >
                      {num}

                      {/* Copy Motion Trail */}
                      {(() => {
                        const isCopying = steps[currentStep].action === 'copy';
                        return isCopying && idx === j && (
                          <>
                            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 to-transparent rounded-lg"></div>
                            <div className="absolute -inset-2 border-2 border-cyan-400/40 rounded-lg animate-pulse"></div>
                          </>
                        );
                      })()}
                      
                      {/* Unique checkmark */}
                      {idx < i && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
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

            {/* Unique Elements Display */}
            {steps[currentStep].action === 'done' && (
              <div className="mt-12 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-400 dark:border-green-600">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-900 dark:text-green-100">
                    Unique Elements (Length = {uniqueLength}):
                  </h4>
                </div>
                <div className="flex gap-2 justify-center">
                  {arrayState.slice(0, uniqueLength).map((num, idx) => (
                    <div key={idx} className="w-12 h-12 flex items-center justify-center bg-green-200 dark:bg-green-900/40 rounded-lg font-bold text-lg border-2 border-green-500 dark:border-green-600">
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg border border-teal-300 dark:border-teal-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-teal-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">💡 Two-Pointer Magic</h4>
                  <p className="text-sm text-teal-800 dark:text-teal-200">
                    Pointer <strong>i</strong> tracks the last unique position, pointer <strong>j</strong> scans ahead. When arr[j] ≠ arr[i], we found a new unique element! Copy it to position i+1. This achieves <strong>O(n) time</strong> with <strong>O(1) space</strong>.
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
            <Filter className="w-6 h-6 text-teal-600" />
            The Two-Pointer Approach
          </CardTitle>
          <CardDescription>Understanding the algorithm step-by-step</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Initialize two pointers</strong>
                <p className="text-sm text-muted-foreground">i = 0 (last unique), j = 1 (scanner)</p>
              </li>
              <li>
                <strong>Scan with j pointer</strong>
                <p className="text-sm text-muted-foreground">Compare arr[j] with arr[i]</p>
              </li>
              <li>
                <strong>If different (new unique)</strong>
                <p className="text-sm text-muted-foreground">Increment i, copy arr[j] to arr[i]</p>
              </li>
              <li>
                <strong>If same (duplicate)</strong>
                <p className="text-sm text-muted-foreground">Just move j forward, skip the duplicate</p>
              </li>
              <li>
                <strong>Return i + 1</strong>
                <p className="text-sm text-muted-foreground">Length of unique elements</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Remove Duplicates from Sorted Array"
            description="In-place two-pointer solution"
            language="javascript"
            colorTheme="blue"
            icon={Filter}
            code={`function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  
  let i = 0; // Last unique position
  
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  
  return i + 1; // Length of unique elements
}

// Test it
const arr1 = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const len1 = removeDuplicates(arr1);
console.log(len1);  // 5
console.log(arr1.slice(0, len1)); // [1, 2, 3, 4, 5]

const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const len2 = removeDuplicates(arr2);
console.log(len2);  // 5
console.log(arr2.slice(0, len2)); // [0, 1, 2, 3, 4]`}
          />

          <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
            <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-teal-800 dark:text-teal-200 space-y-1">
              <li>• Array is sorted, so duplicates are adjacent</li>
              <li>• i always points to the last unique element found</li>
              <li>• j scans ahead looking for new unique values</li>
              <li>• When found, we overwrite position i+1 with the new value</li>
              <li>• Time Complexity: O(n) - single pass</li>
              <li>• Space Complexity: O(1) - only two pointers</li>
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
              <h4 className="font-semibold mb-1">1. Empty Array</h4>
              <p className="text-sm text-muted-foreground">Return 0 immediately</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeDuplicates([]) // 0
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Single Element</h4>
              <p className="text-sm text-muted-foreground">Already unique, return 1</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeDuplicates([1]) // 1
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. All Same Elements</h4>
              <p className="text-sm text-muted-foreground">Only one unique element</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeDuplicates([2, 2, 2, 2]) // 1, arr = [2, ...]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. All Unique (No Duplicates)</h4>
              <p className="text-sm text-muted-foreground">Return original length</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeDuplicates([1, 2, 3, 4, 5]) // 5
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">5. Negative Numbers</h4>
              <p className="text-sm text-muted-foreground">Works with any sorted array</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeDuplicates([-3, -3, -1, 0, 0, 1]) // 4, arr = [-3, -1, 0, 1, ...]
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Related Problems & Variations
          </CardTitle>
          <CardDescription>Similar challenges to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">1. Remove Duplicates II</p>
              <p className="text-sm text-muted-foreground">Allow each element to appear at most twice</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Remove Element</p>
              <p className="text-sm text-muted-foreground">Remove all instances of a specific value</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. Move Zeros</p>
              <p className="text-sm text-muted-foreground">Move all zeros to end while maintaining order</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Remove Duplicates from Unsorted Array</p>
              <p className="text-sm text-muted-foreground">Use hash set approach for unsorted arrays</p>
            </div>
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
              <span>Two-pointer technique: i (slow) for unique position, j (fast) for scanning</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Only works on sorted arrays (duplicates are adjacent)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>In-place modification: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Return new length, first k elements contain unique values</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Foundation for many two-pointer interview problems</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
