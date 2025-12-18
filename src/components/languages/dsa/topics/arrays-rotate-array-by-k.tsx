'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { RotateCw, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RotateArrayByK() {
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
  const [arrayState, setArrayState] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [highlightIndices, setHighlightIndices] = useState<number[]>([]);
  const [rotationPhase, setRotationPhase] = useState<'init' | 'reverse-all' | 'reverse-first-k' | 'reverse-remaining' | 'done'>('init');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const k = 3; // Rotate by 3 positions
  const n = 7; // Array length
  const initialArray = [1, 2, 3, 4, 5, 6, 7];
  
  const steps = [
    { 
      step: 1,
      array: [1, 2, 3, 4, 5, 6, 7],
      highlight: [],
      phase: 'init',
      currentLine: 2,
      description: '📋 Initialize: Array [1,2,3,4,5,6,7] with n=7. Goal: Rotate RIGHT by k=3 positions using reversal algorithm.'
    },
    { 
      step: 2,
      array: [1, 2, 3, 4, 5, 6, 7],
      highlight: [],
      phase: 'init',
      currentLine: 3,
      description: '🔢 Normalize K: Calculate k % n = 3 % 7 = 3. This handles cases where k > array length (e.g., k=10 becomes k=3).'
    },
    
    // PHASE 1: Reverse entire array [0...6]
    { 
      step: 3,
      array: [1, 2, 3, 4, 5, 6, 7],
      highlight: [0, 6],
      phase: 'reverse-all-start',
      currentLine: 9,
      description: '🔄 Phase 1 - Initialize Pointers: Set start=0, end=6 (n-1). We will reverse the entire array.'
    },
    { 
      step: 4,
      array: [1, 2, 3, 4, 5, 6, 7],
      highlight: [0, 6],
      phase: 'reverse-all',
      currentLine: 7,
      description: '🔍 While Loop Check: Is start(0) < end(6)? Yes! Continue with swap.'
    },
    { 
      step: 5,
      array: [7, 2, 3, 4, 5, 6, 1],
      highlight: [0, 6],
      phase: 'reverse-all',
      currentLine: 8,
      description: '↔️ Swap Elements: Exchange arr[0]↔arr[6]: 1↔7. Array becomes [7,2,3,4,5,6,1].'
    },
    { 
      step: 6,
      array: [7, 2, 3, 4, 5, 6, 1],
      highlight: [1, 5],
      phase: 'reverse-all',
      currentLine: 9,
      description: '👉👈 Move Pointers: start++ (0→1), end-- (6→5). Pointers move inward.'
    },
    { 
      step: 7,
      array: [7, 2, 3, 4, 5, 6, 1],
      highlight: [1, 5],
      phase: 'reverse-all',
      currentLine: 7,
      description: '🔍 While Loop Check: Is start(1) < end(5)? Yes! Continue with swap.'
    },
    { 
      step: 8,
      array: [7, 6, 3, 4, 5, 2, 1],
      highlight: [1, 5],
      phase: 'reverse-all',
      currentLine: 8,
      description: '↔️ Swap Elements: Exchange arr[1]↔arr[5]: 2↔6. Array becomes [7,6,3,4,5,2,1].'
    },
    { 
      step: 9,
      array: [7, 6, 3, 4, 5, 2, 1],
      highlight: [2, 4],
      phase: 'reverse-all',
      currentLine: 9,
      description: '👉👈 Move Pointers: start++ (1→2), end-- (5→4). Pointers getting closer.'
    },
    { 
      step: 10,
      array: [7, 6, 3, 4, 5, 2, 1],
      highlight: [2, 4],
      phase: 'reverse-all',
      currentLine: 7,
      description: '🔍 While Loop Check: Is start(2) < end(4)? Yes! Last swap for this phase.'
    },
    { 
      step: 11,
      array: [7, 6, 5, 4, 3, 2, 1],
      highlight: [2, 4],
      phase: 'reverse-all',
      currentLine: 8,
      description: '↔️ Swap Elements: Exchange arr[2]↔arr[4]: 3↔5. Array becomes [7,6,5,4,3,2,1].'
    },
    { 
      step: 12,
      array: [7, 6, 5, 4, 3, 2, 1],
      highlight: [3, 3],
      phase: 'reverse-all',
      currentLine: 9,
      description: '👉👈 Move Pointers: start++ (2→3), end-- (4→3). Pointers met!'
    },
    { 
      step: 13,
      array: [7, 6, 5, 4, 3, 2, 1],
      highlight: [],
      phase: 'reverse-all',
      currentLine: 7,
      description: '❌ While Loop Check: Is start(3) < end(3)? No! (3 is not less than 3). Exit Phase 1 loop.'
    },
    { 
      step: 14,
      array: [7, 6, 5, 4, 3, 2, 1],
      highlight: [0, 1, 2, 3, 4, 5, 6],
      phase: 'reverse-all',
      currentLine: 13,
      description: '✅ Phase 1 Complete: Entire array reversed [7,6,5,4,3,2,1]. Last k elements now at front (but reversed)!'
    },
    
    // PHASE 2: Reverse first k elements [0...2]
    { 
      step: 15,
      array: [7, 6, 5, 4, 3, 2, 1],
      highlight: [0, 2],
      phase: 'reverse-first-k-start',
      currentLine: 14,
      description: '🔄 Phase 2 - Initialize Pointers: Set start=0, end=2 (k-1). We will reverse first k=3 elements.'
    },
    { 
      step: 16,
      array: [7, 6, 5, 4, 3, 2, 1],
      highlight: [0, 2],
      phase: 'reverse-first-k',
      currentLine: 7,
      description: '🔍 While Loop Check: Is start(0) < end(2)? Yes! Swap needed.'
    },
    { 
      step: 17,
      array: [5, 6, 7, 4, 3, 2, 1],
      highlight: [0, 2],
      phase: 'reverse-first-k',
      currentLine: 8,
      description: '↔️ Swap Elements: Exchange arr[0]↔arr[2]: 7↔5. Array becomes [5,6,7,4,3,2,1].'
    },
    { 
      step: 18,
      array: [5, 6, 7, 4, 3, 2, 1],
      highlight: [1, 1],
      phase: 'reverse-first-k',
      currentLine: 9,
      description: '👉👈 Move Pointers: start++ (0→1), end-- (2→1). Pointers met!'
    },
    { 
      step: 19,
      array: [5, 6, 7, 4, 3, 2, 1],
      highlight: [],
      phase: 'reverse-first-k',
      currentLine: 7,
      description: '❌ While Loop Check: Is start(1) < end(1)? No! (1 is not less than 1). Exit Phase 2 loop.'
    },
    { 
      step: 20,
      array: [5, 6, 7, 4, 3, 2, 1],
      highlight: [0, 1, 2],
      phase: 'reverse-first-k',
      currentLine: 14,
      description: '✅ Phase 2 Complete: First k=3 elements reversed [5,6,7]. Rotated elements now in correct order!'
    },
    
    // PHASE 3: Reverse remaining elements [3...6]
    { 
      step: 21,
      array: [5, 6, 7, 4, 3, 2, 1],
      highlight: [3, 6],
      phase: 'reverse-remaining-start',
      currentLine: 15,
      description: '🔄 Phase 3 - Initialize Pointers: Set start=3 (k), end=6 (n-1). We will reverse remaining n-k=4 elements.'
    },
    { 
      step: 22,
      array: [5, 6, 7, 4, 3, 2, 1],
      highlight: [3, 6],
      phase: 'reverse-remaining',
      currentLine: 7,
      description: '🔍 While Loop Check: Is start(3) < end(6)? Yes! Continue with swap.'
    },
    { 
      step: 23,
      array: [5, 6, 7, 1, 3, 2, 4],
      highlight: [3, 6],
      phase: 'reverse-remaining',
      currentLine: 8,
      description: '↔️ Swap Elements: Exchange arr[3]↔arr[6]: 4↔1. Array becomes [5,6,7,1,3,2,4].'
    },
    { 
      step: 24,
      array: [5, 6, 7, 1, 3, 2, 4],
      highlight: [4, 5],
      phase: 'reverse-remaining',
      currentLine: 9,
      description: '👉👈 Move Pointers: start++ (3→4), end-- (6→5). Pointers move inward.'
    },
    { 
      step: 25,
      array: [5, 6, 7, 1, 3, 2, 4],
      highlight: [4, 5],
      phase: 'reverse-remaining',
      currentLine: 7,
      description: '🔍 While Loop Check: Is start(4) < end(5)? Yes! Last swap for this phase.'
    },
    { 
      step: 26,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [4, 5],
      phase: 'reverse-remaining',
      currentLine: 8,
      description: '↔️ Swap Elements: Exchange arr[4]↔arr[5]: 3↔2. Array becomes [5,6,7,1,2,3,4].'
    },
    { 
      step: 27,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [5, 4],
      phase: 'reverse-remaining',
      currentLine: 9,
      description: '👉👈 Move Pointers: start++ (4→5), end-- (5→4). Pointers crossed!'
    },
    { 
      step: 28,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [],
      phase: 'reverse-remaining',
      currentLine: 7,
      description: '❌ While Loop Check: Is start(5) < end(4)? No! (5 is not less than 4). Exit Phase 3 loop.'
    },
    { 
      step: 29,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [3, 4, 5, 6],
      phase: 'reverse-remaining',
      currentLine: 15,
      description: '✅ Phase 3 Complete: Remaining elements reversed [1,2,3,4]. All elements in correct positions!'
    },
    
    // Verification and Final Steps
    { 
      step: 30,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [],
      phase: 'compare',
      currentLine: 17,
      description: '🎯 Verify Result: All three phases complete! Compare with original [1,2,3,4,5,6,7].'
    },
    { 
      step: 31,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [0, 1, 2],
      phase: 'compare',
      currentLine: 17,
      description: '🔍 Highlight Rotated: Elements [5,6,7] were originally at indices [4,5,6]. Now at beginning [0,1,2]!'
    },
    { 
      step: 32,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [3, 4, 5, 6],
      phase: 'compare',
      currentLine: 17,
      description: '🔍 Highlight Remaining: Elements [1,2,3,4] were originally at indices [0,1,2,3]. Now at end [3,4,5,6]!'
    },
    { 
      step: 33,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [],
      phase: 'done',
      currentLine: 17,
      description: '🎉 Rotation Complete! Array rotated RIGHT by k=3 positions. All elements in correct order!'
    },
    { 
      step: 34,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [],
      phase: 'done',
      currentLine: 17,
      description: '📊 Final Comparison: Original [1,2,3,4,5,6,7] → Rotated [5,6,7,1,2,3,4]. Mission accomplished!'
    },
    { 
      step: 35,
      array: [5, 6, 7, 1, 2, 3, 4],
      highlight: [],
      phase: 'done',
      currentLine: 17,
      description: '💡 Algorithm Insight: Three reversals = rotation! Time O(n), Space O(1). Elegant and efficient!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = stepData.array;
    const phase = stepData.phase;
    
    // Helper to get start/end pointers from highlighted indices
    const getPointers = () => {
      if (highlightIndices.length === 2) {
        return `start=${Math.min(...highlightIndices)}, end=${Math.max(...highlightIndices)}`;
      }
      return '';
    };
    
    return [
      { line: 1, code: 'function rotateArray(arr, k) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  const n = arr.length;`, active: stepData.currentLine === 2, indent: 1, values: `n = ${n}` },
      { line: 3, code: `  k = k % n;  // Handle k > n`, active: stepData.currentLine === 3, indent: 1, values: `k = ${k}` },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  // Helper to reverse array section`, active: false, indent: 1, comment: true },
      { line: 6, code: `  function reverse(start, end) {`, active: stepData.currentLine === 6, indent: 1 },
      { line: 7, code: `    while (start < end) {`, active: stepData.currentLine === 7, indent: 2, values: getPointers() },
      { line: 8, code: `      [arr[start], arr[end]] = [arr[end], arr[start]];`, active: stepData.currentLine === 8, indent: 3, values: stepData.description.includes('Swap Elements') ? getPointers() : '' },
      { line: 9, code: `      start++; end--;`, active: stepData.currentLine === 9, indent: 3, values: stepData.description.includes('Move Pointers') ? getPointers() : '' },
      { line: 10, code: `    }`, active: false, indent: 2 },
      { line: 11, code: `  }`, active: false, indent: 1 },
      { line: 12, code: `  `, active: false, indent: 1 },
      { line: 13, code: `  reverse(0, n - 1);`, active: stepData.currentLine === 13, indent: 1, values: phase.includes('reverse-all') ? '↻ entire array' : '' },
      { line: 14, code: `  reverse(0, k - 1);`, active: stepData.currentLine === 14, indent: 1, values: phase.includes('reverse-first-k') ? `↻ [0...${k-1}]` : '' },
      { line: 15, code: `  reverse(k, n - 1);`, active: stepData.currentLine === 15, indent: 1, values: phase.includes('reverse-remaining') ? `↻ [${k}...${n-1}]` : '' },
      { line: 16, code: `  `, active: false, indent: 1 },
      { line: 17, code: `  return arr;`, active: stepData.currentLine === 17, indent: 1, values: phase === 'done' ? `[${arr.join(', ')}]` : '' },
      { line: 18, code: `}`, active: stepData.currentLine === 18, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setArrayState(step.array);
    setHighlightIndices(step.highlight);
    setRotationPhase(step.phase);
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
        icon={RotateCw}
        category="DSA · Arrays"
        title="Rotate Array by K Positions"
        description="Learn the elegant reversal algorithm to rotate arrays efficiently in O(n) time and O(1) space"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Intermediate', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
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
                <p className="font-medium">Reversal Algorithm</p>
                <p className="text-sm text-muted-foreground">Three reversals to rotate array</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">In-Place Rotation</p>
                <p className="text-sm text-muted-foreground">No extra space needed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Handle Large K</p>
                <p className="text-sm text-muted-foreground">Using modulo operator</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Left & Right Rotation</p>
                <p className="text-sm text-muted-foreground">Works for both directions</p>
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
          <CardDescription>Understanding array rotation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array and a number k, rotate the array to the right by k positions. Elements at the end wrap around to the beginning.
          </p>

          {/* Visual Rotation */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <RotateCw className="w-5 h-5" /> Rotate Right by k=3
            </h4>
            
            <div className="space-y-4">
              {/* Before */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Original:</p>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                        idx >= 4
                          ? 'bg-orange-100 dark:bg-orange-900 border-orange-500 text-orange-900 dark:text-orange-100'
                          : 'bg-blue-100 dark:bg-blue-900 border-blue-400 text-blue-900 dark:text-blue-100'
                      }`}>
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900 border border-blue-400 rounded"></div>
                    <span>Stay in place</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-orange-100 dark:bg-orange-900 border border-orange-500 rounded"></div>
                    <span>Move to front</span>
                  </div>
                </div>
              </div>

              {/* Arrow with rotation */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-full border-2 border-indigo-500">
                  <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">Rotate k=3</span>
                  <RotateCw className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>

              {/* After */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Rotated:</p>
                <div className="flex items-center justify-center gap-2">
                  {[5, 6, 7, 1, 2, 3, 4].map((num, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded flex items-center justify-center font-bold border-2 ${
                        idx < 3
                          ? 'bg-orange-100 dark:bg-orange-900 border-orange-500 text-orange-900 dark:text-orange-100'
                          : 'bg-blue-100 dark:bg-blue-900 border-blue-400 text-blue-900 dark:text-blue-100'
                      }`}>
                        {num}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-3 text-green-700 dark:text-green-300">
                  Last 3 elements moved to front!
                </p>
              </div>
            </div>
          </div>

          {/* Reversal Algorithm Visualization */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔄</span> Reversal Algorithm (3 Steps)
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Reverse Entire Array</h5>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="font-mono">[1,2,3,4,5,6,7]</span>
                      <span>→</span>
                      <span className="font-mono font-bold">[7,6,5,4,3,2,1]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Reverse First k Elements</h5>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="font-mono"><span className="text-orange-600 font-bold">[7,6,5]</span>,4,3,2,1</span>
                      <span>→</span>
                      <span className="font-mono"><span className="font-bold">[5,6,7]</span>,4,3,2,1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-lg border-2 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Reverse Remaining Elements</h5>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="font-mono">5,6,7,<span className="text-blue-600 font-bold">[4,3,2,1]</span></span>
                      <span>→</span>
                      <span className="font-mono font-bold text-green-600">[5,6,7,1,2,3,4]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Works */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              💡 Why Reversal Works
            </h4>
            <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
              <p>• <strong>Step 1:</strong> Reversal puts last k elements at start (but reversed)</p>
              <p>• <strong>Step 2:</strong> Un-reverse first k elements to correct order</p>
              <p>• <strong>Step 3:</strong> Un-reverse remaining elements to correct order</p>
              <p className="mt-3 pt-3 border-t border-purple-300 dark:border-purple-600">
                <strong>Result:</strong> All elements in correct rotated positions!
              </p>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">3 reversals</div>
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
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            Reversal Algorithm: Visual Animation
          </CardTitle>
          <CardDescription>Watch the three-step reversal process rotate the array</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-indigo-300 dark:border-indigo-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-indigo-800 dark:text-indigo-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-indigo-800 dark:text-indigo-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-indigo-800 dark:text-indigo-200">Fast</span>
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
                    className="border-indigo-300 dark:border-indigo-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg border border-indigo-300 dark:border-indigo-700">
                    <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 dark:border-indigo-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">rotateArray.js</span>
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
                          <span className="ml-3 text-indigo-600 dark:text-indigo-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">n:</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{n}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">k:</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{k}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">phase:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{rotationPhase}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Phase Description */}
            {currentStep >= 0 && (
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                steps[currentStep].phase === 'done'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-400 dark:border-indigo-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].phase === 'done' ? 'bg-green-500' : 'bg-indigo-500'}`}>
                      {steps[currentStep].phase === 'done' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <RotateCw className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].phase === 'done' ? 'text-green-900 dark:text-green-100' : 'text-indigo-900 dark:text-indigo-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Phase: {rotationPhase}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].phase === 'done' ? 'text-green-800 dark:text-green-200' : 'text-indigo-800 dark:text-indigo-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${steps[currentStep].phase === 'done' ? 'border-green-300 dark:border-green-700' : 'border-indigo-300 dark:border-indigo-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">n:</span>
                      <span className="text-base font-bold text-slate-700 dark:text-slate-300">{n}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">k:</span>
                      <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">{k}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">phase:</span>
                      <span className="text-base font-bold text-purple-600 dark:text-purple-400">{rotationPhase}</span>
                    </div>
                    {highlightIndices.length > 0 && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-amber-200 dark:border-amber-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">highlighting:</span>
                        <span className="text-base font-bold text-amber-600 dark:text-amber-400">[{highlightIndices.join(', ')}]</span>
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
              <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-3">Current Array State:</p>
              <div className="relative flex gap-2 justify-center flex-wrap min-h-[120px]">
                {(() => {
                  // During swap animation, show pre-swap array state so numbers travel with elements
                  const isSwapping = steps[currentStep].description.includes('Swap Elements');
                  if (isSwapping && currentStep > 0) {
                    // Find the step before swap started
                    for (let i = currentStep - 1; i >= 0; i--) {
                      if (!steps[i].description.includes('Swap Elements')) {
                        return steps[i].array;
                      }
                    }
                  }
                  return arrayState;
                })().map((num, idx) => {
                  const isHighlighted = highlightIndices.includes(idx);
                  const isSwapPair = highlightIndices.length === 2 && isHighlighted;
                  
                  // Determine phase-specific colors
                  let phaseColors = {
                    bg: 'bg-white dark:bg-slate-800',
                    border: 'border-indigo-300 dark:border-indigo-700',
                    text: 'text-slate-900 dark:text-slate-100'
                  };
                  
                  if (isHighlighted) {
                    if (rotationPhase.includes('reverse-all')) {
                      phaseColors = {
                        bg: 'bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-800 dark:to-red-800',
                        border: 'border-orange-500 dark:border-orange-400',
                        text: 'text-orange-900 dark:text-orange-100'
                      };
                    } else if (rotationPhase.includes('reverse-first-k')) {
                      phaseColors = {
                        bg: 'bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800',
                        border: 'border-blue-500 dark:border-blue-400',
                        text: 'text-blue-900 dark:text-blue-100'
                      };
                    } else if (rotationPhase.includes('reverse-remaining')) {
                      phaseColors = {
                        bg: 'bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800',
                        border: 'border-purple-500 dark:border-purple-400',
                        text: 'text-purple-900 dark:text-purple-100'
                      };
                    } else if (rotationPhase === 'compare') {
                      phaseColors = {
                        bg: 'bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-800 dark:to-emerald-800',
                        border: 'border-green-500 dark:border-green-400',
                        text: 'text-green-900 dark:text-green-100'
                      };
                    }
                  }
                  
                  return (
                    <div key={idx} className="relative">
                      {/* Highlight Indicator */}
                      {isHighlighted && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
                          <div className="flex flex-col items-center">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-lg ${
                              rotationPhase.includes('reverse-all') ? 'bg-orange-500 text-white' :
                              rotationPhase.includes('reverse-first-k') ? 'bg-blue-500 text-white' :
                              rotationPhase.includes('reverse-remaining') ? 'bg-purple-500 text-white' :
                              rotationPhase === 'compare' ? 'bg-green-500 text-white' :
                              'bg-indigo-500 text-white'
                            }`}>
                              {rotationPhase.includes('reverse-all') && '🔄 ALL'}
                              {rotationPhase.includes('reverse-first-k') && '🔄 K'}
                              {rotationPhase.includes('reverse-remaining') && '🔄 REST'}
                              {rotationPhase === 'compare' && '✓'}
                              {!rotationPhase.includes('reverse') && rotationPhase !== 'compare' && '↻'}
                            </span>
                            <div className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                              rotationPhase.includes('reverse-all') ? 'border-t-orange-500' :
                              rotationPhase.includes('reverse-first-k') ? 'border-t-blue-500' :
                              rotationPhase.includes('reverse-remaining') ? 'border-t-purple-500' :
                              rotationPhase === 'compare' ? 'border-t-green-500' :
                              'border-t-indigo-600'
                            }`}></div>
                          </div>
                        </div>
                      )}
                      
                      <div
                        className={`relative w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl shadow-sm transition-all duration-300 ${
                          isHighlighted
                            ? `${phaseColors.bg} border-4 ${phaseColors.border} shadow-2xl ring-4 ring-opacity-50`
                            : `${phaseColors.bg} border-2 ${phaseColors.border}`
                        } ${phaseColors.text}`}
                        style={{
                          animation: (() => {
                            const isSwapping = steps[currentStep].description.includes('Swap Elements');
                            if (isSwapping && highlightIndices.length === 2 && isHighlighted) {
                              const leftIdx = Math.min(...highlightIndices);
                              const rightIdx = Math.max(...highlightIndices);
                              if (idx === leftIdx) {
                                return 'swapLeftToRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                              } else if (idx === rightIdx) {
                                return 'swapRightToLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                              }
                            }
                            return 'none';
                          })(),
                          // @ts-ignore - CSS variable
                          '--swap-distance': `${Math.abs(highlightIndices[1] - highlightIndices[0]) * 72}px`,
                          zIndex: (() => {
                            const isSwapping = steps[currentStep].description.includes('Swap Elements');
                            return isSwapping && isHighlighted ? 100 : 1;
                          })(),
                          filter: (() => {
                            const isSwapping = steps[currentStep].description.includes('Swap Elements');
                            return isSwapping && isHighlighted ? 'brightness(1.15) drop-shadow(0 10px 20px rgba(99, 102, 241, 0.4))' : 'brightness(1)';
                          })()
                        }}
                      >
                        {num}

                        {/* Swap Motion Trail */}
                        {(() => {
                          const isSwapping = steps[currentStep].description.includes('Swap Elements');
                          return isSwapping && isHighlighted && (
                            <>
                              <div className="absolute inset-0 bg-gradient-radial from-indigo-400/30 to-transparent rounded-lg"></div>
                              <div className="absolute -inset-2 border-2 border-indigo-400/40 rounded-lg animate-pulse"></div>
                            </>
                          );
                        })()}
                        
                        {/* Swap indicator for pairs */}
                        {isSwapPair && highlightIndices[0] === idx && (
                          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-2xl animate-ping">
                            ↔️
                          </div>
                        )}
                        
                        {/* Original position indicator */}
                        {rotationPhase === 'done' && (
                          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs">
                            {initialArray.indexOf(num) !== idx && (
                              <span className="bg-green-100 dark:bg-green-900/60 px-1.5 py-0.5 rounded text-green-700 dark:text-green-300 font-semibold whitespace-nowrap shadow">
                                from [{initialArray.indexOf(num)}]
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                        [{idx}]
                      </div>
                    </div>
                  );
                })}
                
                {/* Swap Arrow Visualization */}
                {highlightIndices.length === 2 && (
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 animate-pulse z-20">
                    <div className={`px-3 py-1 rounded-full text-white font-bold text-sm shadow-lg ${
                      rotationPhase.includes('reverse-all') ? 'bg-orange-500' :
                      rotationPhase.includes('reverse-first-k') ? 'bg-blue-500' :
                      rotationPhase.includes('reverse-remaining') ? 'bg-purple-500' :
                      'bg-indigo-500'
                    }`}>
                      SWAPPING ↔️
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Rotation Visual Comparison */}
            {rotationPhase === 'done' && (
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Before Rotation:</p>
                  <div className="flex gap-1 justify-center">
                    {initialArray.map((num, idx) => (
                      <div key={idx} className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded font-semibold text-sm">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-400 dark:border-green-600">
                  <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    After Rotation (k={k}):
                  </p>
                  <div className="flex gap-1 justify-center">
                    {arrayState.map((num, idx) => (
                      <div key={idx} className="w-10 h-10 flex items-center justify-center bg-green-200 dark:bg-green-900/40 rounded font-semibold text-sm border border-green-400 dark:border-green-600">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-indigo-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-1">💡 Reversal Algorithm Magic</h4>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    Three simple reversals achieve rotation: <strong>(1)</strong> Reverse entire array, <strong>(2)</strong> Reverse first k elements, <strong>(3)</strong> Reverse remaining elements. This works in <strong>O(n) time</strong> with <strong>O(1) space</strong>!
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
            <RotateCw className="w-6 h-6 text-indigo-600" />
            The Reversal Algorithm
          </CardTitle>
          <CardDescription>Understanding the three-step process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Reverse the entire array</strong>
                <p className="text-sm text-muted-foreground">All elements flip positions</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">[1,2,3,4,5,6,7] → [7,6,5,4,3,2,1]</code>
              </li>
              <li>
                <strong>Reverse first k elements</strong>
                <p className="text-sm text-muted-foreground">Fix the first k elements into correct order</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">[7,6,5,4,3,2,1] → [5,6,7,4,3,2,1]</code>
              </li>
              <li>
                <strong>Reverse remaining n-k elements</strong>
                <p className="text-sm text-muted-foreground">Fix the rest into correct order</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">[5,6,7,4,3,2,1] → [5,6,7,1,2,3,4]</code>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Rotate Array by K (Right Rotation)"
            description="Efficient reversal algorithm approach"
            language="javascript"
            colorTheme="blue"
            icon={RotateCw}
            code={`function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle k > n
  
  // Helper function to reverse array section
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  // Three-step reversal
  reverse(0, n - 1);      // Reverse entire array
  reverse(0, k - 1);      // Reverse first k elements
  reverse(k, n - 1);      // Reverse remaining elements
  
  return arr;
}

// Test it
console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArray([1,2,3,4,5], 2));     // [4,5,1,2,3]
console.log(rotateArray([1,2], 3));           // [2,1] (k=3%2=1)`}
          />

          <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
              <li>• Reversal brings last k elements to front (but reversed)</li>
              <li>• Second reversal fixes those k elements order</li>
              <li>• Third reversal fixes remaining elements order</li>
              <li>• Time Complexity: O(n) - each element visited at most twice</li>
              <li>• Space Complexity: O(1) - no extra array needed</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Left Rotation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-purple-600" />
            Left Rotation
          </CardTitle>
          <CardDescription>Rotate in the opposite direction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To rotate left by k positions, you can either:
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>Call right rotation with (n - k) positions</li>
            <li>Or reverse in different order: reverse first k, then remaining, then all</li>
          </ul>

          <CodeSnippet
            title="Rotate Array Left by K"
            description="Same algorithm, different order"
            language="javascript"
            colorTheme="purple"
            code={`function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;
  
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  // Different order for left rotation
  reverse(0, k - 1);      // Reverse first k elements
  reverse(k, n - 1);      // Reverse remaining elements  
  reverse(0, n - 1);      // Reverse entire array
  
  return arr;
}

// Or simply:
function rotateLeftSimple(arr, k) {
  return rotateArray(arr, arr.length - k);
}

console.log(rotateLeft([1,2,3,4,5,6,7], 3)); // [4,5,6,7,1,2,3]`}
          />
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
              <h4 className="font-semibold mb-1">1. k Greater Than Array Length</h4>
              <p className="text-sm text-muted-foreground">Use modulo: k = k % n</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                rotateArray([1,2,3], 10) // k=10%3=1 → [3,1,2]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. k Equals Zero or Multiple of n</h4>
              <p className="text-sm text-muted-foreground">Array remains unchanged</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                rotateArray([1,2,3], 0) // [1,2,3]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Single Element Array</h4>
              <p className="text-sm text-muted-foreground">No rotation needed</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                rotateArray([1], 5) // [1]
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Empty Array</h4>
              <p className="text-sm text-muted-foreground">Return empty array</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                rotateArray([], 5) // []
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Approaches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Alternative Approaches
          </CardTitle>
          <CardDescription>Other ways to solve this problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Using Extra Array (O(n) space)</h4>
              <p className="text-sm text-muted-foreground mb-2">Simple but uses extra space</p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                result[i] = arr[(i - k + n) % n]
              </code>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. One-by-One Rotation (O(n×k) time)</h4>
              <p className="text-sm text-muted-foreground mb-2">Rotate one position k times - inefficient for large k</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Cyclic Replacements (O(n) time, O(1) space)</h4>
              <p className="text-sm text-muted-foreground mb-2">Follow cycles of replacements - more complex logic</p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800 mt-4">
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                ✅ Reversal algorithm is preferred: simple, efficient, and in-place!
              </p>
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
              { name: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/' },
              { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
              { name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
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
              <span>Reversal algorithm: three reversals achieve rotation efficiently</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Always use k % n to handle k greater than array length</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>In-place rotation: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Left rotation = right rotation by (n - k)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Simple and elegant - one of the best array manipulation tricks</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
