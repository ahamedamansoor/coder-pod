'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw,
  Target, AlertCircle, CheckCircle, ArrowRight,
  RefreshCw, Shuffle, TrendingUp, Zap
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ReverseString() {
  // Custom swap animations style tag
  const styleTag = (
    <style jsx>{`
      @keyframes swap-to-right {
        0% {
          transform: translate(0, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
        25% {
          transform: translate(0, -40px) scale(1.2) rotate(5deg);
          z-index: 10;
        }
        50% {
          transform: translate(150px, -50px) scale(1.3) rotate(10deg);
          z-index: 10;
        }
        75% {
          transform: translate(300px, -40px) scale(1.2) rotate(5deg);
          z-index: 10;
        }
        100% {
          transform: translate(320px, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
      }
      
      @keyframes swap-to-left {
        0% {
          transform: translate(0, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
        25% {
          transform: translate(0, 40px) scale(1.2) rotate(-5deg);
          z-index: 10;
        }
        50% {
          transform: translate(-150px, 50px) scale(1.3) rotate(-10deg);
          z-index: 10;
        }
        75% {
          transform: translate(-300px, 20px) scale(1.2) rotate(-5deg);
          z-index: 10;
        }
        100% {
          transform: translate(-320px, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
      }
      
      @keyframes swap-to-right-short {
        0% {
          transform: translate(0, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
        25% {
          transform: translate(0, -35px) scale(1.2) rotate(5deg);
          z-index: 10;
        }
        50% {
          transform: translate(60px, -45px) scale(1.3) rotate(10deg);
          z-index: 10;
        }
        75% {
          transform: translate(120px, -35px) scale(1.2) rotate(5deg);
          z-index: 10;
        }
        100% {
          transform: translate(160px, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
      }
      
      @keyframes swap-to-left-short {
        0% {
          transform: translate(0, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
        25% {
          transform: translate(0, 35px) scale(1.2) rotate(-5deg);
          z-index: 10;
        }
        50% {
          transform: translate(-60px, 45px) scale(1.3) rotate(-10deg);
          z-index: 10;
        }
        75% {
          transform: translate(-120px, 20px) scale(1.2) rotate(-5deg);
          z-index: 10;
        }
        100% {
          transform: translate(-160px, 0) scale(1) rotate(0deg);
          z-index: 1;
        }
      }
      
      .swap-right {
        animation: swap-to-right 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .swap-left {
        animation: swap-to-left 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .swap-right-short {
        animation: swap-to-right-short 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .swap-left-short {
        animation: swap-to-left-short 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    `}</style>
  );
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem data - String to reverse
  const testString = ['h', 'e', 'l', 'l', 'o'];
  
  // Reverse String - 32 Granular Steps (Two Pointers Approach)
  const steps = [
    // Initialization (3 steps)
    { step: 1, left: 0, right: 4, currentLine: 1, action: 'init', description: '📋 Initialize: Reverse string ["h","e","l","l","o"] in-place', swapIndex: -1 },
    { step: 2, left: 0, right: 4, currentLine: 2, action: 'init', description: '📋 Initialize: Set left pointer = 0 (start of string)', swapIndex: -1 },
    { step: 3, left: 0, right: 4, currentLine: 3, action: 'init', description: '📋 Initialize: Set right pointer = 4 (end of string)', swapIndex: -1 },
    
    // Iteration 1 - Swap 'h' and 'o' (8 steps)
    { step: 4, left: 0, right: 4, currentLine: 5, action: 'loop-start', description: '🔄 Iteration 1: Starting two-pointer swap', swapIndex: -1 },
    { step: 5, left: 0, right: 4, currentLine: 5, action: 'loop-check', description: '✅ Loop Check: left(0) < right(4)? YES! (0 < 4) Continue swapping', swapIndex: -1 },
    { step: 6, left: 0, right: 4, currentLine: 6, action: 'examine', description: '👉 Access: s[left] = s[0] = "h"', swapIndex: -1 },
    { step: 7, left: 0, right: 4, currentLine: 7, action: 'examine', description: '👈 Access: s[right] = s[4] = "o"', swapIndex: -1 },
    { step: 8, left: 0, right: 4, currentLine: 8, action: 'swap', description: '🔄 Swap: Exchange s[0]("h") ↔ s[4]("o")', swapIndex: 0 },
    { step: 9, left: 0, right: 4, currentLine: 9, action: 'complete', description: '✅ Complete: String is now ["o","e","l","l","h"]', swapIndex: -1 },
    { step: 10, left: 1, right: 4, currentLine: 10, action: 'move', description: '➡️ Move: left++ (0 → 1)', swapIndex: -1 },
    { step: 11, left: 1, right: 3, currentLine: 11, action: 'move', description: '⬅️ Move: right-- (4 → 3)', swapIndex: -1 },
    
    // Iteration 2 - Swap 'e' and 'l' (8 steps)
    { step: 12, left: 1, right: 3, currentLine: 5, action: 'loop-start', description: '🔄 Iteration 2: Continuing with narrowed pointers', swapIndex: -1 },
    { step: 13, left: 1, right: 3, currentLine: 5, action: 'loop-check', description: '✅ Loop Check: left(1) < right(3)? YES! (1 < 3) Continue', swapIndex: -1 },
    { step: 14, left: 1, right: 3, currentLine: 6, action: 'examine', description: '👉 Access: s[left] = s[1] = "e"', swapIndex: -1 },
    { step: 15, left: 1, right: 3, currentLine: 7, action: 'examine', description: '👈 Access: s[right] = s[3] = "l"', swapIndex: -1 },
    { step: 16, left: 1, right: 3, currentLine: 8, action: 'swap', description: '🔄 Swap: Exchange s[1]("e") ↔ s[3]("l")', swapIndex: 1 },
    { step: 17, left: 1, right: 3, currentLine: 9, action: 'complete', description: '✅ Complete: String is now ["o","l","l","e","h"]', swapIndex: -1 },
    { step: 18, left: 2, right: 3, currentLine: 10, action: 'move', description: '➡️ Move: left++ (1 → 2)', swapIndex: -1 },
    { step: 19, left: 2, right: 2, currentLine: 11, action: 'move', description: '⬅️ Move: right-- (3 → 2)', swapIndex: -1 },
    
    // Iteration 3 - Pointers meet (5 steps)
    { step: 20, left: 2, right: 2, currentLine: 5, action: 'loop-start', description: '🔄 Iteration 3: Final check (pointers meeting)', swapIndex: -1 },
    { step: 21, left: 2, right: 2, currentLine: 5, action: 'loop-check', description: '⏸️ Loop Check: left(2) < right(2)? NO! (2 = 2) Pointers met!', swapIndex: -1 },
    { step: 22, left: 2, right: 2, currentLine: 5, action: 'check', description: '🎯 Condition Failed: left is NOT less than right, exit loop', swapIndex: -1 },
    { step: 23, left: 2, right: 2, currentLine: 13, action: 'done', description: '✅ Done: No more swaps needed, string fully reversed!', swapIndex: -1 },
    
    // Verification (3 steps)
    { step: 24, left: 2, right: 2, currentLine: 14, action: 'result', description: '🎉 Result: Original "hello" → Reversed "olleh"', swapIndex: -1 },
    { step: 25, left: 2, right: 2, currentLine: 15, action: 'complete', description: '✅ Complete: In-place reversal done in O(n/2) = O(n) time!', swapIndex: -1 },
  ];

  // Get string state at current step
  const getStringAtStep = (stepIndex: number) => {
    const result = [...testString];
    
    // Apply all swaps up to current step
    for (let i = 0; i <= stepIndex; i++) {
      const step = steps[i];
      if (step.action === 'swap') {
        // Swap based on which iteration
        if (step.swapIndex === 0) {
          // First swap: indices 0 and 4
          [result[0], result[4]] = [result[4], result[0]];
        } else if (step.swapIndex === 1) {
          // Second swap: indices 1 and 3
          [result[1], result[3]] = [result[3], result[1]];
        }
      }
    }
    
    return result;
  };

  // Code viewer function
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const currentString = getStringAtStep(steps.indexOf(stepData));
    const leftChar = stepData.left >= 0 && stepData.left < currentString.length ? currentString[stepData.left] : '';
    const rightChar = stepData.right >= 0 && stepData.right < currentString.length ? currentString[stepData.right] : '';
    
    return [
      { line: 1, code: 'function reverseString(s) {', active: stepData.currentLine === 1, indent: 0, values: stepData.currentLine >= 1 ? `s=["${currentString.join('","')}"]` : '' },
      { line: 2, code: '  let left = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine >= 2 ? `left=${stepData.left}` : '' },
      { line: 3, code: '  let right = s.length - 1;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine >= 3 ? `right=${stepData.right}, s.length=${currentString.length}` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  while (left < right) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine >= 5 ? `${stepData.left} < ${stepData.right}? ${stepData.left < stepData.right ? 'true' : 'false'}` : '' },
      { line: 6, code: '    // Access left character', active: stepData.currentLine === 6, indent: 2, values: stepData.currentLine === 6 ? `s[${stepData.left}]="${leftChar}"` : '' },
      { line: 7, code: '    // Access right character', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `s[${stepData.right}]="${rightChar}"` : '' },
      { line: 8, code: '    // Swap characters', active: stepData.currentLine === 8, indent: 2, values: stepData.currentLine === 8 ? `"${leftChar}" ↔ "${rightChar}"` : '' },
      { line: 9, code: '    [s[left], s[right]] = [s[right], s[left]];', active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `s=["${currentString.join('","')}"]` : '' },
      { line: 10, code: '    left++;', active: stepData.currentLine === 10, indent: 2, values: stepData.currentLine === 10 ? `left=${stepData.left}` : '' },
      { line: 11, code: '    right--;', active: stepData.currentLine === 11, indent: 2, values: stepData.currentLine === 11 ? `right=${stepData.right}` : '' },
      { line: 12, code: '  }', active: false, indent: 1 },
      { line: 13, code: '  ', active: false, indent: 1 },
      { line: 14, code: '  return s;  // Reversed in-place', active: stepData.currentLine === 14, indent: 1, values: stepData.currentLine === 14 ? `s=["${currentString.join('","')}"]` : '' },
      { line: 15, code: '}', active: stepData.currentLine === 15, indent: 0 },
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
        icon={RefreshCw}
        category="DSA · Strings · Two Pointers"
        title="Reverse String"
        description="Reverse a string in-place using two pointers technique"
        colorTheme="purple"
        badges={[
          { label: 'Two Pointers', variant: 'default' },
          { label: 'O(n) Time', variant: 'success' },
          { label: 'O(1) Space', variant: 'secondary' },
        ]}
      />

      {/* Problem Definition */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>
            Learn how to reverse a string efficiently using the two-pointer technique
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Shuffle className="w-5 h-5" />
              What is String Reversal?
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-purple-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Reversing a string means rearranging characters so the <strong>first becomes last</strong>, 
                the <strong>second becomes second-to-last</strong>, and so on. We'll do this <strong>in-place</strong> 
                (without extra space) using two pointers moving towards each other!
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-900 dark:text-purple-100">Original: "hello"</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-900 dark:text-purple-100">Reversed: "olleh"</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 mt-3">
                    <p>• <strong>Two Pointers:</strong> One at start, one at end</p>
                    <p>• <strong>Swap & Move:</strong> Exchange characters, move pointers inward</p>
                    <p>• <strong>Stop Condition:</strong> When pointers meet in the middle</p>
                    <p className="font-bold text-purple-700 dark:text-purple-300">→ In-place means O(1) extra space!</p>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">
                    💡 Key Insight: Only need to swap n/2 times (half the string length)!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm font-bold text-purple-900 dark:text-purple-100 mb-2">
                🎯 Two Pointers Strategy
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Start with left=0 and right=n-1 → Swap characters → Move pointers inward → Repeat until they meet
              </p>
            </div>
          </div>

          {/* Visual Example */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300">
              <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-500">String Array:</span>
                  <div className="font-mono text-purple-700 dark:text-purple-300">["h", "e", "l", "l", "o"]</div>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Task:</span>
                  <div className="text-slate-700 dark:text-slate-300">Reverse in-place</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
              <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
              <div className="text-sm">
                <div className="font-mono font-bold text-green-800 dark:text-green-200 mb-2">
                  ["o", "l", "l", "e", "h"]
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  ✅ Characters reversed in original array
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
                <span><strong>Two Pointers</strong> - Start from both ends, move towards middle</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>In-place Reversal</strong> - No extra array needed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>O(n/2) swaps</strong> - Only swap half the elements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>{`Stop when left >= right`}</strong> - Pointers meet in middle</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Algorithm Strategy */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Algorithm Strategy
          </CardTitle>
          <CardDescription>Step-by-step approach to reverse the string</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Initialize Two Pointers</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup pointers at both ends:</div>
                  <div className="font-mono text-sm space-y-1">
                    <div>left = 0 (start)</div>
                    <div>right = n - 1 (end)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <div className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Swap Characters</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Exchange characters at both pointers:</div>
                  <div className="text-sm">
                    [s[left], s[right]] = [s[right], s[left]]
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <div className="font-semibold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Move Pointers Inward</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Move both pointers closer:</div>
                  <div className="text-sm space-y-1">
                    <div>left++ (move right)</div>
                    <div>right-- (move left)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <div className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Repeat Until Pointers Meet</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Stop condition:</div>
                  <div className="text-sm">
                    Continue while left &lt; right
                    <br />
                    <span className="text-xs">{`When left >= right, reversal is complete!`}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Play className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch the two-pointer technique in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-purple-300">
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
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
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
              className="border-purple-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
              className="border-purple-300"
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">reverseString.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
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

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Left:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Right:</span>
                      <span className="font-semibold text-violet-600 dark:text-violet-400">{steps[currentStep].right}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-lg animate-in slide-in-from-bottom-4 fade-in duration-500 ${
              steps[currentStep].action === 'done' || steps[currentStep].action === 'complete'
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : steps[currentStep].action === 'init'
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
                : 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-300 dark:border-purple-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full shadow-lg animate-pulse ${
                    steps[currentStep].action === 'done' || steps[currentStep].action === 'complete' ? 'bg-green-600 ring-4 ring-green-300' :
                    steps[currentStep].action === 'init' ? 'bg-blue-600 ring-4 ring-blue-300' :
                    steps[currentStep].action === 'swap' ? 'bg-violet-600 ring-4 ring-violet-300' : 'bg-purple-600 ring-4 ring-purple-300'
                  }`}>
                    {(steps[currentStep].action === 'done' || steps[currentStep].action === 'complete') ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'init' ? (
                      <Target className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'swap' ? (
                      <Shuffle className="w-6 h-6 text-white" />
                    ) : (
                      <RefreshCw className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'loop-check' && '✅ Loop Check'}
                      {steps[currentStep].action === 'examine' && '📍 Examining'}
                      {steps[currentStep].action === 'swap' && '🔄 Swapping'}
                      {steps[currentStep].action === 'move' && '➡️ Moving Pointers'}
                      {steps[currentStep].action === 'check' && '⏸️ Checking Condition'}
                      {steps[currentStep].action === 'complete' && '✅ Complete'}
                      {steps[currentStep].action === 'result' && '🎉 Result'}
                      {steps[currentStep].action === 'done' && '✅ Done'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* INNOVATIVE: Visual Representation */}
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
                        Setting up pointers: left = {steps[currentStep].left}, right = {steps[currentStep].right}
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
                          <>Is left({steps[currentStep].left}) &lt; right({steps[currentStep].right})? {steps[currentStep].left < steps[currentStep].right ? 'YES ✓' : 'NO ✗'}</>
                        )}
                        {steps[currentStep].action === 'loop-start' && 'Preparing to swap characters...'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Swap Indicator */}
              {steps[currentStep].action === 'swap' && (
                <div className="p-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-xl border-2 border-violet-400 dark:border-violet-600 animate-in slide-in-from-bottom-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-violet-500 text-white rounded-full shadow-lg animate-pulse">
                        <Shuffle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-violet-900 dark:text-violet-100 mb-1">
                          🔄 Swapping Characters
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Exchanging s[{steps[currentStep].left}] ↔ s[{steps[currentStep].right}]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Examine Indicator */}
              {steps[currentStep].action === 'examine' && (
                <div className="p-5 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-xl border-2 border-amber-400 dark:border-amber-600 animate-in slide-in-from-top-4 fade-in duration-500 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-500 text-white rounded-full shadow-lg animate-pulse">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-2">
                        📍 Accessing Character
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Reading character at position {steps[currentStep].description.includes('left') ? steps[currentStep].left : steps[currentStep].right}
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
                        {steps[currentStep].description.includes('left++') ? '➡️ Moving Left Pointer' : '⬅️ Moving Right Pointer'}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Pointers now at: left={steps[currentStep].left}, right={steps[currentStep].right}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Success/Completion Indicators */}
              {(steps[currentStep].action === 'done' || steps[currentStep].action === 'result' || steps[currentStep].action === 'complete') && (
                <div className="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-xl border-4 border-green-400 dark:border-green-600 animate-in zoom-in fade-in duration-700 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-2xl animate-bounce ring-4 ring-green-300">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                        {steps[currentStep].action === 'done' && '✅ Reversal Complete!'}
                        {steps[currentStep].action === 'result' && '🎉 Success!'}
                        {steps[currentStep].action === 'complete' && '✅ Done!'}
                      </div>
                      <div className="text-sm text-slate-700 dark:text-slate-300">
                        String successfully reversed in-place using two pointers
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* String Visualization */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-purple-900 dark:text-purple-100">String Array:</p>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                      Original: <span className="font-bold text-purple-700 dark:text-purple-300">"hello"</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2 flex-wrap justify-center">
                    {getStringAtStep(currentStep).map((char, idx) => {
                      const isLeft = idx === steps[currentStep].left;
                      const isRight = idx === steps[currentStep].right;
                      const isSwapping = steps[currentStep].action === 'swap' && (idx === steps[currentStep].left || idx === steps[currentStep].right);
                      
                      // Determine swap animation class
                      const getSwapAnimationClass = () => {
                        if (steps[currentStep].action !== 'swap') return '';
                        
                        // First swap (indices 0 and 4) - long distance
                        if (steps[currentStep].swapIndex === 0) {
                          if (idx === 0) return 'swap-right';
                          if (idx === 4) return 'swap-left';
                        }
                        // Second swap (indices 1 and 3) - shorter distance
                        if (steps[currentStep].swapIndex === 1) {
                          if (idx === 1) return 'swap-right-short';
                          if (idx === 3) return 'swap-left-short';
                        }
                        return '';
                      };
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {/* Pointer Labels */}
                          {isLeft && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-in slide-in-from-top-4 fade-in duration-500">
                              <div className="px-2 py-1 bg-purple-500 text-white rounded font-bold text-sm shadow-lg animate-pulse">
                                L
                              </div>
                            </div>
                          )}
                          {isRight && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-in slide-in-from-top-4 fade-in duration-500">
                              <div className="px-2 py-1 bg-violet-500 text-white rounded font-bold text-sm shadow-lg animate-pulse">
                                R
                              </div>
                            </div>
                          )}
                          
                          {/* Character Box */}
                          <div
                            className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-xl border-2 ${getSwapAnimationClass()} ${!getSwapAnimationClass() ? 'transition-all duration-700' : ''} ${
                              isSwapping
                                ? 'bg-gradient-to-br from-violet-300 to-purple-400 border-violet-500 scale-125 ring-4 ring-violet-300 shadow-2xl shadow-violet-500/50'
                                : isLeft || isRight
                                ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110 ring-4 ring-purple-300 shadow-xl shadow-purple-500/30 animate-pulse'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                            } ${
                              isSwapping ? 'text-violet-900 dark:text-violet-100' :
                              (isLeft || isRight) ? 'text-purple-900 dark:text-purple-100' :
                              'text-slate-700 dark:text-slate-300'
                            }`}
                            style={{ position: 'relative' }}
                          >
                            {char}
                          </div>
                          
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">[{idx}]</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-200 dark:bg-purple-800 border-2 border-purple-500 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Active Pointers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-violet-300 to-purple-400 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Swapping</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Complexity Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Time Complexity: O(n)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• We visit each character once</li>
                <li>• Actually O(n/2) swaps, simplified to O(n)</li>
                <li>• Linear time relative to string length</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Space Complexity: O(1)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Only use two pointers: left and right</li>
                <li>• In-place reversal - no extra array needed</li>
                <li>• Constant space regardless of input size</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
                💡 Key Insights
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Two pointers is the most efficient approach for in-place reversal</li>
                <li>• Only need to swap n/2 pairs of characters</li>
                <li>• Works for any character string (letters, numbers, symbols)</li>
                <li>• Common interview question - test understanding of pointers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Implementation */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Complete Implementation
          </CardTitle>
          <CardDescription>Full JavaScript solution</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`/**
 * Reverse String - Two Pointers Approach
 * Time: O(n), Space: O(1)
 */
function reverseString(s) {
  // Initialize two pointers
  let left = 0;
  let right = s.length - 1;
  
  // Swap characters while pointers haven't met
  while (left < right) {
    // Swap characters at left and right positions
    [s[left], s[right]] = [s[right], s[left]];
    
    // Move pointers towards each other
    left++;
    right--;
  }
  
  return s;  // String is reversed in-place
}

// Example usage:
const str = ['h', 'e', 'l', 'l', 'o'];
reverseString(str);
console.log(str);  // Output: ['o', 'l', 'l', 'e', 'h']

// Example 2:
const str2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(str2);
console.log(str2);  // Output: ['h', 'a', 'n', 'n', 'a', 'H']`}
            showLineNumbers={true}
          />
        </CardContent>
      </Card>
    </div>
  );
}
