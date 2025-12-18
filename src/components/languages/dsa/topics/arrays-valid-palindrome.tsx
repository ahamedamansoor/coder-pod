'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { CheckCheck, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ValidPalindrome() {
  // Inject CSS animations for pointer convergence and matching
  const styleTag = (
    <style jsx>{`
      @keyframes matchGlow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3);
        }
        50% {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.5);
        }
      }
      
      @keyframes pointerPulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
      
      @keyframes convergeLine {
        0% {
          opacity: 0;
          transform: scaleX(0);
        }
        100% {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      
      .match-glow {
        animation: matchGlow 1s ease-in-out;
      }
      
      .pointer-pulse {
        animation: pointerPulse 0.6s ease-in-out;
      }
    `}</style>
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [testString] = useState("A man, a plan, a canal: Panama");
  const [cleanedString] = useState("amanaplanacanalpanama");
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(20);
  const [isPalindrome, setIsPalindrome] = useState(true);
  const [comparison, setComparison] = useState<{ match: boolean; chars: [string, string] } | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  type Step = {
    step: number;
    left: number;
    right: number;
    currentLine: number;
    description: string;
    action: string;
    comparison: { match: boolean; chars: [string, string] } | null;
    isPalindrome: boolean;
  };

  const steps: Step[] = [
    // === INITIALIZATION (3 steps) ===
    { step: 1, left: 0, right: 20, currentLine: 2,
      description: '📋 Clean String: Remove non-alphanumeric characters and convert to lowercase.',
      action: 'clean', comparison: null, isPalindrome: true },
    { step: 2, left: 0, right: 20, currentLine: 5,
      description: '📋 Initialize: Set left = 0. Left pointer at s[0] = "a".',
      action: 'init', comparison: null, isPalindrome: true },
    { step: 3, left: 0, right: 20, currentLine: 6,
      description: '📋 Initialize: Set right = 20 (s.length - 1). Right pointer at s[20] = "a".',
      action: 'init', comparison: null, isPalindrome: true },
    
    // === ITERATION 1: left=0, right=20, 'a' == 'a' ===
    { step: 4, left: 0, right: 20, currentLine: 8,
      description: '✅ Loop Check: Is left(0) < right(20)? Yes! Pointers haven\'t crossed, continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 5, left: 0, right: 20, currentLine: 9,
      description: '🔍 Examine: Check s[left(0)] and s[right(20)]. Reading "a" and "a".',
      action: 'examining', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    { step: 6, left: 0, right: 20, currentLine: 9,
      description: '✅ Comparison: s[0]="a" === s[20]="a"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    { step: 7, left: 0, right: 20, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 1, right-- → 19.',
      action: 'moving', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    
    // === ITERATION 2: left=1, right=19, 'm' == 'm' ===
    { step: 8, left: 1, right: 19, currentLine: 8,
      description: '✅ Loop Check: Is left(1) < right(19)? Yes! Continue checking.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 9, left: 1, right: 19, currentLine: 9,
      description: '🔍 Examine: Check s[left(1)] and s[right(19)]. Reading "m" and "m".',
      action: 'examining', comparison: { match: true, chars: ['m', 'm'] }, isPalindrome: true },
    { step: 10, left: 1, right: 19, currentLine: 9,
      description: '✅ Comparison: s[1]="m" === s[19]="m"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['m', 'm'] }, isPalindrome: true },
    { step: 11, left: 1, right: 19, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 2, right-- → 18.',
      action: 'moving', comparison: { match: true, chars: ['m', 'm'] }, isPalindrome: true },
    
    // === ITERATION 3: left=2, right=18, 'a' == 'a' ===
    { step: 12, left: 2, right: 18, currentLine: 8,
      description: '✅ Loop Check: Is left(2) < right(18)? Yes! Continue checking.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 13, left: 2, right: 18, currentLine: 9,
      description: '✅ Comparison: s[2]="a" === s[18]="a"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    { step: 14, left: 2, right: 18, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 3, right-- → 17.',
      action: 'moving', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    
    // === ITERATION 4: left=3, right=17, 'n' == 'n' ===
    { step: 15, left: 3, right: 17, currentLine: 8,
      description: '✅ Loop Check: Is left(3) < right(17)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 16, left: 3, right: 17, currentLine: 9,
      description: '✅ Comparison: s[3]="n" === s[17]="n"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['n', 'n'] }, isPalindrome: true },
    { step: 17, left: 3, right: 17, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 4, right-- → 16.',
      action: 'moving', comparison: { match: true, chars: ['n', 'n'] }, isPalindrome: true },
    
    // === ITERATION 5: left=4, right=16, 'a' == 'a' ===
    { step: 18, left: 4, right: 16, currentLine: 8,
      description: '✅ Loop Check: Is left(4) < right(16)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 19, left: 4, right: 16, currentLine: 9,
      description: '✅ Comparison: s[4]="a" === s[16]="a"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    { step: 20, left: 4, right: 16, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 5, right-- → 15.',
      action: 'moving', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    
    // === ITERATION 6: left=5, right=15, 'p' == 'p' ===
    { step: 21, left: 5, right: 15, currentLine: 8,
      description: '✅ Loop Check: Is left(5) < right(15)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 22, left: 5, right: 15, currentLine: 9,
      description: '✅ Comparison: s[5]="p" === s[15]="p"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['p', 'p'] }, isPalindrome: true },
    { step: 23, left: 5, right: 15, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 6, right-- → 14.',
      action: 'moving', comparison: { match: true, chars: ['p', 'p'] }, isPalindrome: true },
    
    // === ITERATION 7: left=6, right=14, 'l' == 'l' ===
    { step: 24, left: 6, right: 14, currentLine: 8,
      description: '✅ Loop Check: Is left(6) < right(14)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 25, left: 6, right: 14, currentLine: 9,
      description: '✅ Comparison: s[6]="l" === s[14]="l"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['l', 'l'] }, isPalindrome: true },
    { step: 26, left: 6, right: 14, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 7, right-- → 13.',
      action: 'moving', comparison: { match: true, chars: ['l', 'l'] }, isPalindrome: true },
    
    // === ITERATION 8: left=7, right=13, 'a' == 'a' ===
    { step: 27, left: 7, right: 13, currentLine: 8,
      description: '✅ Loop Check: Is left(7) < right(13)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 28, left: 7, right: 13, currentLine: 9,
      description: '✅ Comparison: s[7]="a" === s[13]="a"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    { step: 29, left: 7, right: 13, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 8, right-- → 12.',
      action: 'moving', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    
    // === ITERATION 9: left=8, right=12, 'n' == 'n' ===
    { step: 30, left: 8, right: 12, currentLine: 8,
      description: '✅ Loop Check: Is left(8) < right(12)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 31, left: 8, right: 12, currentLine: 9,
      description: '✅ Comparison: s[8]="n" === s[12]="n"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['n', 'n'] }, isPalindrome: true },
    { step: 32, left: 8, right: 12, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 9, right-- → 11.',
      action: 'moving', comparison: { match: true, chars: ['n', 'n'] }, isPalindrome: true },
    
    // === ITERATION 10: left=9, right=11, 'a' == 'a' ===
    { step: 33, left: 9, right: 11, currentLine: 8,
      description: '✅ Loop Check: Is left(9) < right(11)? Yes! Continue.',
      action: 'loop-check', comparison: null, isPalindrome: true },
    { step: 34, left: 9, right: 11, currentLine: 9,
      description: '✅ Comparison: s[9]="a" === s[11]="a"? YES! Match confirmed!',
      action: 'compare', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    { step: 35, left: 9, right: 11, currentLine: 12,
      description: '➡️ Move Pointers: Characters match. left++ → 10, right-- → 10. Converging!',
      action: 'moving', comparison: { match: true, chars: ['a', 'a'] }, isPalindrome: true },
    
    // === ITERATION 11: left=10, right=10 (MEET IN MIDDLE) ===
    { step: 36, left: 10, right: 10, currentLine: 8,
      description: '🎯 Loop Check: Is left(10) < right(10)? NO! Pointers met at center!',
      action: 'loop-complete', comparison: null, isPalindrome: true },
    { step: 37, left: 10, right: 10, currentLine: 16,
      description: '✅ Return True: Loop complete, all characters matched! Valid palindrome!',
      action: 'done', comparison: null, isPalindrome: true },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function isPalindrome(s) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  // Clean: remove non-alphanumeric, lowercase`, active: stepData.currentLine === 2, indent: 1, comment: true },
      { line: 3, code: `  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();`, active: stepData.currentLine === 2, indent: 1, values: stepData.action === 'clean' ? `"${cleanedString}"` : '' },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  let left = 0;`, active: stepData.currentLine === 5, indent: 1, values: `left = ${stepData.left}` },
      { line: 6, code: `  let right = s.length - 1;`, active: stepData.currentLine === 6, indent: 1, values: `right = ${stepData.right}` },
      { line: 7, code: `  `, active: false, indent: 1 },
      { line: 8, code: `  while (left < right) {`, active: stepData.currentLine === 8 || stepData.action === 'loop-check' || stepData.action === 'loop-complete', indent: 1, values: stepData.action === 'loop-check' || stepData.action === 'loop-complete' ? `${stepData.left} < ${stepData.right}` : '' },
      { line: 9, code: `    if (s[left] !== s[right]) {`, active: stepData.currentLine === 9 || stepData.action === 'examining' || stepData.action === 'compare', indent: 2, values: stepData.comparison ? `"${stepData.comparison.chars[0]}" ${stepData.comparison.match ? '==' : '!='} "${stepData.comparison.chars[1]}"` : '' },
      { line: 10, code: `      return false;  // Not a palindrome`, active: stepData.currentLine === 10 && !stepData.comparison?.match, indent: 3 },
      { line: 11, code: `    }`, active: false, indent: 2 },
      { line: 12, code: `    left++;`, active: stepData.action === 'moving' && stepData.comparison?.match, indent: 2, values: stepData.action === 'moving' && stepData.comparison?.match ? `${stepData.left} → ${stepData.left + 1}` : '' },
      { line: 13, code: `    right--;`, active: stepData.action === 'moving' && stepData.comparison?.match, indent: 2, values: stepData.action === 'moving' && stepData.comparison?.match ? `${stepData.right} → ${stepData.right - 1}` : '' },
      { line: 14, code: `  }`, active: false, indent: 1 },
      { line: 15, code: `  `, active: false, indent: 1 },
      { line: 16, code: `  return true;  // Is a palindrome!`, active: stepData.currentLine === 16 || stepData.action === 'done', indent: 1, values: stepData.action === 'done' ? '✓' : '' },
      { line: 17, code: `}`, active: stepData.currentLine === 17, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeft(step.left);
    setRight(step.right);
    setIsPalindrome(step.isPalindrome);
    setComparison(step.comparison);
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
      {styleTag}
      <PageHeader
        icon={CheckCheck}
        category="DSA · Two Pointers"
        title="Valid Palindrome"
        description="Master the two-pointer technique to check if a string is a palindrome efficiently"
        colorTheme="green"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Two Pointer', 'Time: O(n)', 'Space: O(1)'].map((badge, index) => (
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
                <p className="font-medium">Two-Pointer Convergence</p>
                <p className="text-sm text-muted-foreground">Pointers meet in the middle</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">String Preprocessing</p>
                <p className="text-sm text-muted-foreground">Clean and normalize input</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Character Comparison</p>
                <p className="text-sm text-muted-foreground">Check symmetry efficiently</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Classic Interview Problem</p>
                <p className="text-sm text-muted-foreground">Very common question</p>
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
          <CardDescription>Understanding palindrome validation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            A palindrome reads the same backward as forward (ignoring spaces, punctuation, and case). Determine if a given string is a valid palindrome.
          </p>

          {/* Visual Palindrome */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <CheckCheck className="w-5 h-5" /> What is a Palindrome?
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-green-300 dark:border-green-600">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Example: "A man, a plan, a canal: Panama"</p>
                
                {/* Original string */}
                <div className="mb-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Original:</p>
                  <div className="flex items-center justify-center gap-1 flex-wrap">
                    {"A man, a plan, a canal: Panama".split('').map((char, idx) => (
                      <div key={idx} className={`w-7 h-7 flex items-center justify-center text-xs font-mono ${
                        /[a-zA-Z0-9]/.test(char)
                          ? 'bg-green-100 dark:bg-green-900 border border-green-400 rounded'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-300'
                      }`}>
                        {char === ' ' ? '·' : char}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-center mb-4">
                  <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/40 rounded text-xs font-semibold text-green-700 dark:text-green-300">
                    Clean & Lowercase ↓
                  </div>
                </div>

                {/* Cleaned string */}
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Cleaned:</p>
                  <div className="flex items-center justify-center gap-1 flex-wrap">
                    {"amanaplanacanalpanama".split('').map((char, idx) => (
                      <div key={idx} className="w-7 h-7 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded flex items-center justify-center text-xs font-mono font-bold text-green-900 dark:text-green-100">
                        {char}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-400">
                  <p className="text-sm text-center font-bold text-green-700 dark:text-green-300">
                    Reads same forwards ← → backwards ✓
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Pointer Comparison */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <span className="text-lg">👈👉</span> Two-Pointer Verification
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Compare characters from both ends moving toward the center:
                </p>
                
                {/* Visual comparison */}
                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="flex items-center justify-center gap-1">
                    {"amanaplanacanalpanama".split('').map((char, idx) => (
                      <div key={idx} className={`w-6 h-6 flex items-center justify-center text-xs font-mono rounded ${
                        idx === 0 || idx === 20
                          ? 'bg-blue-200 dark:bg-blue-800 border-2 border-blue-500 font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 border border-slate-300'
                      }`}>
                        {char}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-blue-700 dark:text-blue-300">
                    Compare s[0]='a' with s[20]='a' → Match! ✓
                  </p>

                  {/* Step 2 */}
                  <div className="flex items-center justify-center gap-1">
                    {"amanaplanacanalpanama".split('').map((char, idx) => (
                      <div key={idx} className={`w-6 h-6 flex items-center justify-center text-xs font-mono rounded ${
                        idx === 1 || idx === 19
                          ? 'bg-blue-200 dark:bg-blue-800 border-2 border-blue-500 font-bold'
                          : (idx === 0 || idx === 20)
                          ? 'bg-green-100 dark:bg-green-900 border border-green-500 opacity-50'
                          : 'bg-slate-100 dark:bg-slate-800 border border-slate-300'
                      }`}>
                        {char}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-blue-700 dark:text-blue-300">
                    Compare s[1]='m' with s[19]='m' → Match! ✓
                  </p>

                  <div className="text-center text-slate-600 dark:text-slate-400 text-xs">
                    ... continue comparing until pointers meet ...
                  </div>

                  {/* Final */}
                  <div className="flex items-center justify-center gap-1">
                    {"amanaplanacanalpanama".split('').map((char, idx) => (
                      <div key={idx} className={`w-6 h-6 flex items-center justify-center text-xs font-mono rounded ${
                        idx === 10
                          ? 'bg-blue-200 dark:bg-blue-800 border-2 border-blue-500 font-bold'
                          : 'bg-green-100 dark:bg-green-900 border border-green-500 opacity-50'
                      }`}>
                        {char}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-green-700 dark:text-green-300 font-bold">
                    Pointers meet at center - All matched! ✓
                  </p>
                </div>
              </div>

              {/* Logic */}
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <p>• <strong>Start:</strong> left = 0, right = length-1</p>
                  <p>• <strong>Compare:</strong> If s[left] ≠ s[right], return false</p>
                  <p>• <strong>Move:</strong> left++, right--</p>
                  <p>• <strong>Repeat:</strong> Until left ≥ right</p>
                  <p>• <strong>Success:</strong> All matched = palindrome! ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Palindrome Example */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Non-Palindrome Example
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-red-300 dark:border-red-600">
              <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-3">"race a car" → "raceacar"</p>
              
              <div className="flex items-center justify-center gap-1 mb-3">
                {"raceacar".split('').map((char, idx) => (
                  <div key={idx} className={`w-8 h-8 flex items-center justify-center text-sm font-mono rounded ${
                    idx === 0 || idx === 8
                      ? 'bg-red-200 dark:bg-red-800 border-2 border-red-500 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 border border-slate-300'
                  }`}>
                    {char}
                  </div>
                ))}
              </div>
              
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-400">
                <p className="text-sm text-center font-bold text-red-700 dark:text-red-300">
                  s[0]='r' ≠ s[8]='r' ... wait, they match!
                </p>
                <p className="text-sm text-center font-bold text-red-700 dark:text-red-300 mt-1">
                  But s[1]='a' ≠ s[7]='a'... they match too!
                </p>
                <p className="text-sm text-center font-bold text-red-700 dark:text-red-300 mt-1">
                  Eventually: s[4]='a' ≠ s[4]='c' → NOT a palindrome ✗
                </p>
              </div>
            </div>
          </div>

          {/* Key Steps */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              💡 Key Steps
            </h4>
            <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <p><strong>Step 1:</strong> Clean string - remove non-alphanumeric, convert to lowercase</p>
              <p><strong>Step 2:</strong> Use two pointers from both ends</p>
              <p><strong>Step 3:</strong> Compare characters at each position</p>
              <p><strong>Step 4:</strong> If any mismatch, return false immediately</p>
              <p><strong>Step 5:</strong> If all match, return true!</p>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two pointers</div>
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
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            Two-Pointer Algorithm: Visual Animation
          </CardTitle>
          <CardDescription>Watch pointers converge from both ends, checking character matches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            {/* Test String Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-lg border-2 border-slate-300 dark:border-slate-700">
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Original String:</p>
                  <p className="text-lg font-mono text-slate-900 dark:text-slate-100">"{testString}"</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">After Cleaning:</p>
                  <p className="text-lg font-mono text-green-700 dark:text-green-300 font-semibold">"{cleanedString}"</p>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
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

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-green-900 dark:text-green-100">Animation Speed:</span>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-green-600 border-green-300 focus:ring-green-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-green-800 dark:text-green-200">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-green-600 border-green-300 focus:ring-green-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-green-800 dark:text-green-200">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      className="w-4 h-4 text-green-600 border-green-300 focus:ring-green-500"
                      disabled={isAnimating}
                    />
                    <span className="text-sm text-green-800 dark:text-green-200">Fast</span>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">isPalindrome.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

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
                          <span className="ml-3 text-green-600 dark:text-green-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">left:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{left}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">right:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{right}</span>
                      </div>
                      {comparison && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">match:</span>
                          <span className={`font-semibold ${comparison.match ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {comparison.match ? '✓' : '✗'}
                          </span>
                        </div>
                      )}
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
                  : 'bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-400 dark:border-green-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].action === 'done' ? 'bg-green-500' : 'bg-green-600'}`}>
                      {steps[currentStep].action === 'done' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <CheckCheck className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].action === 'done' ? 'text-green-900 dark:text-green-100' : 'text-green-900 dark:text-green-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].action === 'done' ? 'text-green-800 dark:text-green-200' : 'text-green-800 dark:text-green-200'}`}>
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className={`flex flex-wrap gap-3 pt-2 border-t ${steps[currentStep].action === 'done' ? 'border-green-300 dark:border-green-700' : 'border-green-300 dark:border-green-700'}`}>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-green-200 dark:border-green-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">left:</span>
                      <span className="text-base font-bold text-green-600 dark:text-green-400">{steps[currentStep].left}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">right:</span>
                      <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{steps[currentStep].right}</span>
                    </div>
                    {steps[currentStep].left < cleanedString.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">s[left]:</span>
                        <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">"{cleanedString[steps[currentStep].left]}"</span>
                      </div>
                    )}
                    {steps[currentStep].right < cleanedString.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">s[right]:</span>
                        <span className="text-base font-bold text-purple-600 dark:text-purple-400">"{cleanedString[steps[currentStep].right]}"</span>
                      </div>
                    )}
                    {steps[currentStep].comparison && (
                      <div className={`flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border ${steps[currentStep].comparison.match ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'}`}>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">match:</span>
                        <span className={`text-base font-bold ${steps[currentStep].comparison.match ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {steps[currentStep].comparison.match ? '✓ YES' : '✗ NO'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* String Visualization */}
            <div className="mb-6">
              <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-3">Character Comparison:</p>
              <div className="flex gap-1 justify-center flex-wrap">
                {cleanedString.split('').map((char, idx) => (
                  <div key={idx} className="relative">
                    {/* Left Pointer */}
                    {idx === left && currentStep > 1 && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/60 px-2 py-1 rounded-full">
                            left
                          </span>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600 dark:border-t-green-400"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Right Pointer */}
                    {idx === right && currentStep > 1 && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-emerald-600 dark:border-b-emerald-400"></div>
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-1 rounded-full">
                            right
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={`relative w-10 h-10 flex items-center justify-center rounded font-bold text-sm shadow-sm transition-all duration-700 ${
                        idx === left && idx === right && currentStep > 1
                          ? 'bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 border-4 border-purple-500 scale-110 pointer-pulse'
                          : idx === left && currentStep > 1
                          ? `bg-gradient-to-br from-green-200 to-green-300 dark:from-green-800 dark:to-green-700 border-4 border-green-500 scale-110 shadow-xl pointer-pulse ${
                              steps[currentStep].action === 'compare' && comparison?.match ? 'match-glow' : ''
                            }`
                          : idx === right && currentStep > 1
                          ? `bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-800 dark:to-emerald-700 border-4 border-emerald-500 scale-110 shadow-xl pointer-pulse ${
                              steps[currentStep].action === 'compare' && comparison?.match ? 'match-glow' : ''
                            }`
                          : idx < left || idx > right
                          ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 opacity-50'
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {char}
                      
                      {/* Matched checkmark with animation */}
                      {idx < left && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Comparison Display */}
            {comparison && currentStep > 1 && (
              <div className="mt-8 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">s[{left}]</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{comparison.chars[0]}</p>
                  </div>
                  {comparison.match ? (
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  ) : (
                    <X className="w-10 h-10 text-red-600 dark:text-red-400" />
                  )}
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">s[{right}]</p>
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{comparison.chars[1]}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Result Display */}
            {steps[currentStep].action === 'done' && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 animate-bounce" />
                  <div>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">Valid Palindrome!</p>
                    <p className="text-sm text-green-700 dark:text-green-300">All characters matched perfectly</p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border border-green-300 dark:border-green-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-green-600">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">💡 Palindrome Check Strategy</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Start from both ends and move inward. If any pair of characters don't match, it's not a palindrome. If pointers meet in the middle with all matches, it's valid! <strong>O(n) time, O(1) space</strong>.
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
            <CheckCheck className="w-6 h-6 text-green-600" />
            The Two-Pointer Approach
          </CardTitle>
          <CardDescription>Understanding the palindrome check</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">How It Works:</h4>
            <ol className="space-y-3 ml-6 list-decimal">
              <li>
                <strong>Clean the string</strong>
                <p className="text-sm text-muted-foreground">Remove non-alphanumeric, convert to lowercase</p>
              </li>
              <li>
                <strong>Initialize pointers</strong>
                <p className="text-sm text-muted-foreground">left = 0, right = length - 1</p>
              </li>
              <li>
                <strong>Compare characters</strong>
                <p className="text-sm text-muted-foreground">If s[left] ≠ s[right], return false</p>
              </li>
              <li>
                <strong>Move pointers inward</strong>
                <p className="text-sm text-muted-foreground">left++, right-- until they meet</p>
              </li>
              <li>
                <strong>All matched?</strong>
                <p className="text-sm text-muted-foreground">If loop completes, it's a palindrome</p>
              </li>
            </ol>
          </div>

          <CodeSnippet
            title="Valid Palindrome"
            description="Efficient two-pointer solution"
            language="javascript"
            colorTheme="blue"
            icon={CheckCheck}
            code={`function isPalindrome(s) {
  // Clean: remove non-alphanumeric, convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;  // Not a palindrome
    }
    left++;
    right--;
  }
  
  return true;  // Is a palindrome!
}

// Test it
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false
console.log(isPalindrome("Was it a car or a cat I saw?"));   // true
console.log(isPalindrome(" "));                              // true (empty after cleaning)`}
          />

          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Why This Works
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Palindrome has mirror symmetry - same from both ends</li>
              <li>• If any pair doesn't match, not a palindrome</li>
              <li>• Only need to check half the string (pointers meet in middle)</li>
              <li>• Early exit on mismatch saves time</li>
              <li>• Time Complexity: O(n) - single pass</li>
              <li>• Space Complexity: O(1) if in-place, O(n) for cleaned string</li>
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
              <h4 className="font-semibold mb-1">1. Empty String</h4>
              <p className="text-sm text-muted-foreground">Considered valid palindrome</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isPalindrome("") // true
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Only Non-Alphanumeric</h4>
              <p className="text-sm text-muted-foreground">Becomes empty after cleaning</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isPalindrome(".,!?") // true
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Single Character</h4>
              <p className="text-sm text-muted-foreground">Always a palindrome</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isPalindrome("a") // true
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Mixed Case</h4>
              <p className="text-sm text-muted-foreground">Must convert to same case</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isPalindrome("Aa") // true (both become 'a')
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">5. Numbers Included</h4>
              <p className="text-sm text-muted-foreground">Numbers are alphanumeric</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isPalindrome("0P0") // false (0 ≠ p ≠ 0)
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
              <p className="font-medium mb-1">1. Palindrome Linked List</p>
              <p className="text-sm text-muted-foreground">Check if a linked list is a palindrome</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">2. Longest Palindromic Substring</p>
              <p className="text-sm text-muted-foreground">Find the longest palindrome within a string</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">3. Valid Palindrome II</p>
              <p className="text-sm text-muted-foreground">Check if palindrome after removing at most one character</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">4. Palindrome Number</p>
              <p className="text-sm text-muted-foreground">Check if an integer is a palindrome</p>
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
              <span>Two pointers start from both ends, move inward checking matches</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Preprocessing: remove non-alphanumeric, convert to lowercase</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Early exit on mismatch for efficiency</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Optimal solution: <strong>O(n) time, O(1) space</strong> (in-place)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Classic interview problem testing string manipulation and two pointers</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
