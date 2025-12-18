'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { MoveRight, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MoveZeros() {
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
  const [arrayState, setArrayState] = useState([0, 1, 0, 3, 12, 0, 5]);
  const [nonZeroPos, setNonZeroPos] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const initialArray = [0, 1, 0, 3, 12, 0, 5];
  
  const steps = [
    // === INITIALIZATION (2 steps) ===
    { step: 1, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 0, currentLine: 2,
      description: '📋 Initialize: Set nonZeroPos = 0. This pointer tracks where to place the next non-zero element.',
      action: 'init', isZero: null },
    { step: 2, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 0, currentLine: 3,
      description: '🔄 Loop Start: For loop begins with currentPos = 0. Will iterate through entire array.',
      action: 'loop-start', isZero: null },
    
    // === ITERATION 1: currentPos=0, arr[0]=0 (ZERO - SKIP) ===
    { step: 3, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 0, currentLine: 3,
      description: '✅ Loop Check: Is currentPos(0) < array.length(7)? Yes! Enter loop body.',
      action: 'loop-check', isZero: null },
    { step: 4, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 0, currentLine: 4,
      description: '🔍 Examine Element: Check arr[0] = 0. Is it zero or non-zero?',
      action: 'examining', isZero: true },
    { step: 5, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 0, currentLine: 4,
      description: '❌ Condition Check: arr[0] !== 0? 0 !== 0 is FALSE. Skip swap, no action taken.',
      action: 'comparison-false', isZero: true },
    
    // === ITERATION 2: currentPos=1, arr[1]=1 (NON-ZERO - SWAP) ===
    { step: 6, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 1, currentLine: 3,
      description: '✅ Loop Check: currentPos++ → 1. Is 1 < 7? Yes! Continue.',
      action: 'loop-check', isZero: null },
    { step: 7, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 1, currentLine: 4,
      description: '🔍 Examine Element: Check arr[1] = 1. Is it zero or non-zero?',
      action: 'examining', isZero: false },
    { step: 8, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 1, currentLine: 4,
      description: '✅ Condition Check: arr[1] !== 0? 1 !== 0 is TRUE! Will perform swap.',
      action: 'comparison-true', isZero: false },
    { step: 9, array: [0, 1, 0, 3, 12, 0, 5], nonZeroPos: 0, currentPos: 1, currentLine: 5,
      description: '🔄 Swapping: Swap arr[currentPos] ↔ arr[nonZeroPos]. Swap arr[1] ↔ arr[0].',
      action: 'swapping', isZero: false, swapFrom: 1, swapTo: 0 },
    { step: 10, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 1, currentLine: 6,
      description: '✨ Swap Complete: arr[0]=1 now. Increment nonZeroPos++ → 1. First non-zero placed!',
      action: 'move', isZero: false, swapFrom: 1, swapTo: 0 },
    
    // === ITERATION 3: currentPos=2, arr[2]=0 (ZERO - SKIP) ===
    { step: 11, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 2, currentLine: 3,
      description: '✅ Loop Check: currentPos++ → 2. Is 2 < 7? Yes! Continue.',
      action: 'loop-check', isZero: null },
    { step: 12, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 2, currentLine: 4,
      description: '🔍 Examine Element: Check arr[2] = 0. Is it zero or non-zero?',
      action: 'examining', isZero: true },
    { step: 13, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 2, currentLine: 4,
      description: '❌ Condition Check: arr[2] !== 0? 0 !== 0 is FALSE. Skip swap.',
      action: 'comparison-false', isZero: true },
    
    // === ITERATION 4: currentPos=3, arr[3]=3 (NON-ZERO - SWAP) ===
    { step: 14, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 3, currentLine: 3,
      description: '✅ Loop Check: currentPos++ → 3. Is 3 < 7? Yes! Continue.',
      action: 'loop-check', isZero: null },
    { step: 15, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 3, currentLine: 4,
      description: '🔍 Examine Element: Check arr[3] = 3. Is it zero or non-zero?',
      action: 'examining', isZero: false },
    { step: 16, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 3, currentLine: 4,
      description: '✅ Condition Check: arr[3] !== 0? 3 !== 0 is TRUE! Will perform swap.',
      action: 'comparison-true', isZero: false },
    { step: 17, array: [1, 0, 0, 3, 12, 0, 5], nonZeroPos: 1, currentPos: 3, currentLine: 5,
      description: '🔄 Swapping: Swap arr[currentPos] ↔ arr[nonZeroPos]. Swap arr[3] ↔ arr[1].',
      action: 'swapping', isZero: false, swapFrom: 3, swapTo: 1 },
    { step: 18, array: [1, 3, 0, 0, 12, 0, 5], nonZeroPos: 2, currentPos: 3, currentLine: 6,
      description: '✨ Swap Complete: arr[1]=3 now. Increment nonZeroPos++ → 2. Second non-zero placed!',
      action: 'move', isZero: false, swapFrom: 3, swapTo: 1 },
    
    // === ITERATION 5: currentPos=4, arr[4]=12 (NON-ZERO - SWAP) ===
    { step: 19, array: [1, 3, 0, 0, 12, 0, 5], nonZeroPos: 2, currentPos: 4, currentLine: 3,
      description: '✅ Loop Check: currentPos++ → 4. Is 4 < 7? Yes! Continue.',
      action: 'loop-check', isZero: null },
    { step: 20, array: [1, 3, 0, 0, 12, 0, 5], nonZeroPos: 2, currentPos: 4, currentLine: 4,
      description: '🔍 Examine Element: Check arr[4] = 12. Is it zero or non-zero?',
      action: 'examining', isZero: false },
    { step: 21, array: [1, 3, 0, 0, 12, 0, 5], nonZeroPos: 2, currentPos: 4, currentLine: 4,
      description: '✅ Condition Check: arr[4] !== 0? 12 !== 0 is TRUE! Will perform swap.',
      action: 'comparison-true', isZero: false },
    { step: 22, array: [1, 3, 0, 0, 12, 0, 5], nonZeroPos: 2, currentPos: 4, currentLine: 5,
      description: '🔄 Swapping: Swap arr[currentPos] ↔ arr[nonZeroPos]. Swap arr[4] ↔ arr[2].',
      action: 'swapping', isZero: false, swapFrom: 4, swapTo: 2 },
    { step: 23, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 4, currentLine: 6,
      description: '✨ Swap Complete: arr[2]=12 now. Increment nonZeroPos++ → 3. Third non-zero placed!',
      action: 'move', isZero: false, swapFrom: 4, swapTo: 2 },
    
    // === ITERATION 6: currentPos=5, arr[5]=0 (ZERO - SKIP) ===
    { step: 24, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 5, currentLine: 3,
      description: '✅ Loop Check: currentPos++ → 5. Is 5 < 7? Yes! Continue.',
      action: 'loop-check', isZero: null },
    { step: 25, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 5, currentLine: 4,
      description: '🔍 Examine Element: Check arr[5] = 0. Is it zero or non-zero?',
      action: 'examining', isZero: true },
    { step: 26, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 5, currentLine: 4,
      description: '❌ Condition Check: arr[5] !== 0? 0 !== 0 is FALSE. Skip swap.',
      action: 'comparison-false', isZero: true },
    
    // === ITERATION 7: currentPos=6, arr[6]=5 (NON-ZERO - SWAP) ===
    { step: 27, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 6, currentLine: 3,
      description: '✅ Loop Check: currentPos++ → 6. Is 6 < 7? Yes! Last iteration!',
      action: 'loop-check', isZero: null },
    { step: 28, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 6, currentLine: 4,
      description: '🔍 Examine Element: Check arr[6] = 5. Is it zero or non-zero?',
      action: 'examining', isZero: false },
    { step: 29, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 6, currentLine: 4,
      description: '✅ Condition Check: arr[6] !== 0? 5 !== 0 is TRUE! Will perform final swap.',
      action: 'comparison-true', isZero: false },
    { step: 30, array: [1, 3, 12, 0, 0, 0, 5], nonZeroPos: 3, currentPos: 6, currentLine: 5,
      description: '🔄 Swapping: Swap arr[currentPos] ↔ arr[nonZeroPos]. Swap arr[6] ↔ arr[3].',
      action: 'swapping', isZero: false, swapFrom: 6, swapTo: 3 },
    { step: 31, array: [1, 3, 12, 5, 0, 0, 0], nonZeroPos: 4, currentPos: 6, currentLine: 6,
      description: '✨ Swap Complete: arr[3]=5 now. Increment nonZeroPos++ → 4. Fourth non-zero placed!',
      action: 'move', isZero: false, swapFrom: 6, swapTo: 3 },
    
    // === LOOP TERMINATION ===
    { step: 32, array: [1, 3, 12, 5, 0, 0, 0], nonZeroPos: 4, currentPos: 7, currentLine: 3,
      description: '🏁 Loop Termination: currentPos++ → 7. Is 7 < 7? NO! Exit loop.',
      action: 'loop-complete', isZero: null },
    { step: 33, array: [1, 3, 12, 5, 0, 0, 0], nonZeroPos: 4, currentPos: 7, currentLine: 9,
      description: '🎯 Algorithm Complete: All non-zeros [1,3,12,5] at positions [0-3]. Zeros naturally at end!',
      action: 'result', isZero: null },
    { step: 34, array: [1, 3, 12, 5, 0, 0, 0], nonZeroPos: 4, currentPos: 7, currentLine: 10,
      description: '✅ Success: Original [0,1,0,3,12,0,5] → Final [1,3,12,5,0,0,0]. O(n) time, O(1) space!',
      action: 'done', isZero: null },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = stepData.array;
    return [
      { line: 1, code: 'function moveZeroes(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let nonZeroPos = 0;`, active: stepData.currentLine === 2, indent: 1, values: `nonZeroPos = ${stepData.nonZeroPos}` },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  // Move all non-zero elements to front`, active: false, indent: 1, comment: true },
      { line: 5, code: `  for (let i = 0; i < arr.length; i++) {`, active: stepData.currentLine === 5, indent: 1, values: `i = ${stepData.currentPos}` },
      { line: 6, code: `    if (arr[i] !== 0) {`, active: stepData.currentLine === 5, indent: 2, values: stepData.isZero !== null ? `${arr[stepData.currentPos]} ${stepData.isZero ? '==' : '!='} 0` : '' },
      { line: 7, code: `      arr[nonZeroPos] = arr[i];`, active: stepData.currentLine === 6 && !stepData.isZero, indent: 3, values: stepData.action === 'move' ? `arr[${stepData.nonZeroPos}] = ${arr[stepData.swapFrom!]}` : '' },
      { line: 8, code: `      nonZeroPos++;`, active: stepData.currentLine === 6 && !stepData.isZero, indent: 3, values: stepData.action === 'move' ? `→ ${stepData.nonZeroPos}` : '' },
      { line: 9, code: `    }`, active: false, indent: 2 },
      { line: 10, code: `  }`, active: false, indent: 1 },
      { line: 11, code: `  `, active: false, indent: 1 },
      { line: 12, code: `  // Fill remaining with zeros`, active: stepData.currentLine === 10, indent: 1, comment: true },
      { line: 13, code: `  for (let i = nonZeroPos; i < arr.length; i++) {`, active: stepData.currentLine === 10, indent: 1 },
      { line: 14, code: `    arr[i] = 0;`, active: stepData.currentLine === 10, indent: 2 },
      { line: 15, code: `  }`, active: false, indent: 1 },
      { line: 16, code: `}`, active: stepData.currentLine === 12, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setArrayState(step.array);
    setNonZeroPos(step.nonZeroPos);
    setCurrentPos(step.currentPos);
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
      <style jsx>{swapStyles}</style>
      <PageHeader
        icon={MoveRight}
        category="DSA · Arrays"
        title="Move Zeros to End"
        description="Learn to move all zeros to the end while maintaining the order of non-zero elements"
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
                <p className="font-medium">Two-Pass Approach</p>
                <p className="text-sm text-muted-foreground">Move non-zeros, then fill zeros</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">In-Place Modification</p>
                <p className="text-sm text-muted-foreground">No extra space needed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Maintain Order</p>
                <p className="text-sm text-muted-foreground">Relative order of non-zeros preserved</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Optimal Solution</p>
                <p className="text-sm text-muted-foreground">Single scan O(n) approach</p>
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
            Given an array of integers, move all <strong>0's to the end</strong> while maintaining the <strong>relative order of non-zero elements</strong>. Must be done <strong>in-place</strong>.
          </p>

          {/* Visual Before/After */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <MoveRight className="w-5 h-5" /> Moving Zeros to End
            </h4>
            
            <div className="space-y-4">
              {/* Before */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-orange-300 dark:border-orange-600">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3">Before:</p>
                <div className="flex items-center justify-center gap-2">
                  {[0, 1, 0, 3, 12, 0, 5].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                        num === 0
                          ? 'bg-slate-200 dark:bg-slate-700 border-slate-400 text-slate-600 dark:text-slate-400'
                          : 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                      }`}>
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/40 rounded-full border-2 border-orange-500">
                  <span className="text-sm font-bold text-orange-900 dark:text-orange-100">Move 0's →</span>
                </div>
              </div>

              {/* After */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">After:</p>
                <div className="flex items-center justify-center gap-2">
                  {[1, 3, 12, 5, 0, 0, 0].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                        num === 0
                          ? 'bg-slate-200 dark:bg-slate-700 border-slate-400 text-slate-600 dark:text-slate-400'
                          : 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                      }`}>
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-3 text-green-700 dark:text-green-300">
                  Non-zeros keep order: 1 → 3 → 12 → 5 ✓
                </p>
              </div>
            </div>
          </div>

          {/* Snowball Strategy */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span className="text-lg">❄️</span> Snowball Strategy
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Think of zeros as a "snowball" that grows as we move through the array:
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-100">Snowball Size = 0</p>
                      <p className="text-blue-700 dark:text-blue-300">Start with empty snowball</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-100">Hit a 0?</p>
                      <p className="text-blue-700 dark:text-blue-300">Snowball grows bigger (size++)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-100">Hit non-zero?</p>
                      <p className="text-blue-700 dark:text-blue-300">Swap with position (current - snowball size)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual example */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Example: Snowball grows from size 0 → 1 → 2 → 3</p>
                <div className="flex items-center justify-center gap-1 text-xs">
                  <span>[0,1,0,3,12,0,5]</span>
                  <span>→</span>
                  <span>[1,0,0,3,12,0,5]</span>
                  <span>→</span>
                  <span>[1,3,0,0,12,0,5]</span>
                  <span>→</span>
                  <span>[1,3,12,0,0,0,5]</span>
                  <span>→</span>
                  <span>[1,3,12,5,0,0,0]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative: Two-Pointer */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">👉</span> Alternative: Two-Pointer Method
            </h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <div className="space-y-3 text-sm text-cyan-800 dark:text-cyan-200">
                  <p>• <strong>Pointer i:</strong> Position for next non-zero element</p>
                  <p>• <strong>Pointer j:</strong> Scans through array</p>
                  <p>• When <code>arr[j] != 0</code>, place at position i and increment i</p>
                  <p>• After scan, fill remaining positions with 0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              💡 Key Points
            </h4>
            <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
              <p>• <strong>Order matters:</strong> Non-zeros must stay in same relative order</p>
              <p>• <strong>In-place:</strong> No extra array allowed</p>
              <p>• <strong>Efficient:</strong> Single pass through array is optimal</p>
              <p>• <strong>Two approaches:</strong> Snowball (swap) or Two-pointer (overwrite)</p>
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
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            Two-Pointer Algorithm: Visual Animation
          </CardTitle>
          <CardDescription>Watch how we move non-zeros to front and fill zeros at end</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-emerald-800 dark:text-emerald-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-emerald-800 dark:text-emerald-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-emerald-800 dark:text-emerald-200">Fast</span>
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
                    className="border-emerald-300 dark:border-emerald-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg border border-emerald-300 dark:border-emerald-700">
                    <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-emerald-300 dark:border-emerald-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">moveZeroes.js</span>
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
                          <span className="ml-3 text-emerald-600 dark:text-emerald-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">nonZeroPos:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{nonZeroPos}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">i:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{currentPos}</span>
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
                steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-400 dark:border-emerald-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? 'bg-green-500' : 'bg-emerald-500'}`}>
                      {steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <MoveRight className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? 'text-green-900 dark:text-green-100' : 'text-emerald-900 dark:text-emerald-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? 'text-green-800 dark:text-green-200' : 'text-emerald-800 dark:text-emerald-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? 'border-green-300 dark:border-green-700' : 'border-emerald-300 dark:border-emerald-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">nonZeroPos:</span>
                      <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{steps[currentStep].nonZeroPos}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-green-200 dark:border-green-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">currentPos:</span>
                      <span className="text-base font-bold text-green-600 dark:text-green-400">{steps[currentStep].currentPos}</span>
                    </div>
                    {steps[currentStep].currentPos < arrayState.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-blue-200 dark:border-blue-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">arr[{steps[currentStep].currentPos}]:</span>
                        <span className="text-base font-bold text-blue-600 dark:text-blue-400">{arrayState[steps[currentStep].currentPos]}</span>
                      </div>
                    )}
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
              <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100 mb-3">Array State:</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {(() => {
                  // During swap animation, show pre-swap array state so numbers travel correctly
                  const isSwapping = steps[currentStep].action === 'swapping';
                  if (isSwapping && currentStep > 0) {
                    // Find the step before swap (which should have the pre-swap state)
                    return steps[currentStep - 1].array;
                  }
                  return arrayState;
                })().map((num, idx) => (
                  <div key={idx} className="relative">
                    {/* NonZeroPos Label */}
                    {idx === nonZeroPos && currentStep > 0 && steps[currentStep].action !== 'done' && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            next slot
                          </span>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-emerald-600 dark:border-t-emerald-400"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* CurrentPos Label */}
                    {idx === currentPos && currentPos < arrayState.length && steps[currentStep].action !== 'done' && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-green-600 dark:border-b-green-400"></div>
                          <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/60 px-2 py-1 rounded-full whitespace-nowrap">
                            scanning
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={`relative w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg shadow-sm transition-all duration-300 ${
                        idx === nonZeroPos && currentStep > 0 && steps[currentStep].action !== 'done'
                          ? 'bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-800 dark:to-emerald-700 border-4 border-emerald-500 dark:border-emerald-400 shadow-xl shadow-emerald-500/50'
                          : idx === currentPos && currentPos < arrayState.length && steps[currentStep].action !== 'done'
                          ? 'bg-gradient-to-br from-green-200 to-green-300 dark:from-green-800 dark:to-green-700 border-4 border-green-500 dark:border-green-400 shadow-xl shadow-green-500/50'
                          : num === 0 && steps[currentStep].action === 'done'
                          ? 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 border-2 border-slate-400 dark:border-slate-600 opacity-60'
                          : num !== 0 && steps[currentStep].action === 'done'
                          ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 border-2 border-blue-400 dark:border-blue-600'
                          : num === 0
                          ? 'bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 opacity-60'
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }`}
                      style={{
                        animation: (() => {
                          const isSwapping = steps[currentStep].action === 'swapping';
                          const swapFrom = steps[currentStep].swapFrom;
                          const swapTo = steps[currentStep].swapTo;
                          
                          if (isSwapping && swapFrom !== undefined && swapTo !== undefined) {
                            if (idx === swapFrom) {
                              // swapFrom is currentPos (right side), moving LEFT to nonZeroPos
                              return 'swapRightToLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                            } else if (idx === swapTo) {
                              // swapTo is nonZeroPos (left side), moving RIGHT to currentPos
                              return 'swapLeftToRight 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                            }
                          }
                          return 'none';
                        })(),
                        // @ts-ignore - CSS variable
                        '--swap-distance': (() => {
                          const isSwapping = steps[currentStep].action === 'swapping';
                          const swapFrom = steps[currentStep].swapFrom;
                          const swapTo = steps[currentStep].swapTo;
                          
                          if (isSwapping && swapFrom !== undefined && swapTo !== undefined) {
                            return `${Math.abs(swapFrom - swapTo) * 64}px`; // 64px = element width + gap
                          }
                          return '0px';
                        })(),
                        zIndex: (() => {
                          const isSwapping = steps[currentStep].action === 'swapping';
                          const swapFrom = steps[currentStep].swapFrom;
                          const swapTo = steps[currentStep].swapTo;
                          
                          if (isSwapping && (idx === swapFrom || idx === swapTo)) {
                            return 100;
                          }
                          return 1;
                        })()
                      }}
                    >
                      {num}
                      
                      {/* Zero indicator */}
                      {num === 0 && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-slate-600 dark:bg-slate-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">0</span>
                        </div>
                      )}
                      
                      {/* Non-zero moved indicator */}
                      {num !== 0 && idx < nonZeroPos && steps[currentStep].action !== 'init' && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
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

            {/* Final Result Display */}
            {steps[currentStep].action === 'done' && (
              <div className="mt-12 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Before:</p>
                  <div className="flex gap-1 justify-center flex-wrap">
                    {initialArray.map((num, idx) => (
                      <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded font-semibold text-sm ${
                        num === 0 ? 'bg-slate-200 dark:bg-slate-800 opacity-60' : 'bg-slate-200 dark:bg-slate-800'
                      }`}>
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-400 dark:border-blue-600">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    After:
                  </p>
                  <div className="flex gap-1 justify-center flex-wrap">
                    {arrayState.map((num, idx) => (
                      <div key={idx} className={`w-10 h-10 flex items-center justify-center rounded font-semibold text-sm border ${
                        num === 0 
                          ? 'bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-600 opacity-60' 
                          : 'bg-blue-200 dark:bg-blue-900/40 border-blue-400 dark:border-blue-600'
                      }`}>
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-emerald-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">💡 Two-Pass Strategy</h4>
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
                    <strong>Pass 1:</strong> Move all non-zero elements to front (in order). <strong>Pass 2:</strong> Fill remaining positions with zeros. This maintains order and achieves <strong>O(n) time</strong> with <strong>O(1) space</strong>.
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
            <MoveRight className="w-6 h-6 text-emerald-600" />
            The Algorithm
          </CardTitle>
          <CardDescription>Understanding the two-pass approach</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Initialize nonZeroPos = 0</strong>
                <p className="text-sm text-muted-foreground">Tracks where to place next non-zero element</p>
              </li>
              <li>
                <strong>First pass: Move non-zeros</strong>
                <p className="text-sm text-muted-foreground">Scan array, copy non-zero elements to nonZeroPos, increment it</p>
              </li>
              <li>
                <strong>Second pass: Fill zeros</strong>
                <p className="text-sm text-muted-foreground">Fill remaining positions from nonZeroPos to end with 0</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Move Zeros to End"
            description="In-place two-pass solution"
            language="javascript"
            colorTheme="blue"
            icon={MoveRight}
            code={`function moveZeroes(arr) {
  let nonZeroPos = 0;
  
  // First pass: Move all non-zero elements to front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroPos] = arr[i];
      nonZeroPos++;
    }
  }
  
  // Second pass: Fill remaining with zeros
  for (let i = nonZeroPos; i < arr.length; i++) {
    arr[i] = 0;
  }
  
  return arr;
}

// Test it
const arr1 = [0, 1, 0, 3, 12, 0, 5];
moveZeroes(arr1);
console.log(arr1); // [1, 3, 12, 5, 0, 0, 0]

const arr2 = [0, 0, 1];
moveZeroes(arr2);
console.log(arr2); // [1, 0, 0]

const arr3 = [2, 1];
moveZeroes(arr3);
console.log(arr3); // [2, 1]`}
          />

          <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-emerald-800 dark:text-emerald-200 space-y-1">
              <li>• Non-zeros are copied in order they appear (maintains relative order)</li>
              <li>• nonZeroPos tracks how many non-zeros found so far</li>
              <li>• After first pass, all non-zeros are at front</li>
              <li>• Second pass fills rest with zeros</li>
              <li>• Time Complexity: O(n) - two passes</li>
              <li>• Space Complexity: O(1) - in-place</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Alternative: One-Pass Swap Approach */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Alternative: One-Pass Swap
          </CardTitle>
          <CardDescription>Optimal solution with fewer writes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Instead of overwriting, we can swap non-zeros with the element at nonZeroPos. This reduces the number of write operations.
          </p>

          <CodeSnippet
            title="Move Zeros - One Pass Swap"
            description="Swap-based approach"
            language="javascript"
            colorTheme="purple"
            code={`function moveZeroesOptimized(arr) {
  let nonZeroPos = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap only if positions are different
      if (i !== nonZeroPos) {
        [arr[nonZeroPos], arr[i]] = [arr[i], arr[nonZeroPos]];
      }
      nonZeroPos++;
    }
  }
  
  return arr;
}

// Test it
const arr = [0, 1, 0, 3, 12];
moveZeroesOptimized(arr);
console.log(arr); // [1, 3, 12, 0, 0]`}
          />

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Comparison</h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• <strong>Two-pass:</strong> Simple to understand, always n writes worst case</li>
              <li>• <strong>One-pass swap:</strong> Fewer writes (only when swapping needed), same O(n) time</li>
              <li>• Both are O(1) space and maintain relative order</li>
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
              <h4 className="font-semibold mb-1">1. No Zeros</h4>
              <p className="text-sm text-muted-foreground">Array remains unchanged</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                moveZeroes([1, 2, 3, 4]) // [1, 2, 3, 4]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. All Zeros</h4>
              <p className="text-sm text-muted-foreground">Array remains all zeros</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                moveZeroes([0, 0, 0, 0]) // [0, 0, 0, 0]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Single Element</h4>
              <p className="text-sm text-muted-foreground">No movement needed</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                moveZeroes([0]) // [0] or moveZeroes([5]) // [5]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Zeros Already at End</h4>
              <p className="text-sm text-muted-foreground">Array already in correct state</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                moveZeroes([1, 2, 3, 0, 0]) // [1, 2, 3, 0, 0]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">5. Negative Numbers</h4>
              <p className="text-sm text-muted-foreground">Only zeros move, negatives stay in order</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                moveZeroes([0, -1, 0, 3, -2]) // [-1, 3, -2, 0, 0]
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
            Related Problems
          </CardTitle>
          <CardDescription>Similar challenges to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">1. Remove Element</p>
              <p className="text-sm text-muted-foreground">Remove all instances of a specific value in-place</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Sort Colors (Dutch Flag)</p>
              <p className="text-sm text-muted-foreground">Sort array of 0s, 1s, and 2s in one pass</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. Partition Array</p>
              <p className="text-sm text-muted-foreground">Partition based on a condition</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Move Negatives to Left</p>
              <p className="text-sm text-muted-foreground">Similar concept with different condition</p>
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
              <span>Two-pass approach: move non-zeros, then fill zeros</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Maintains relative order of non-zero elements</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>In-place modification: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>One-pass swap variant possible for optimization</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Common interview problem testing two-pointer technique</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
