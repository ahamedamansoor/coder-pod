'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw, 
  Target, AlertCircle, CheckCircle, Sparkles, ArrowRight
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LongestPalindromicSubstring() {
  const styleTag = (
    <style jsx>{`
      @keyframes expandGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3); }
        50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.5); }
      }
      @keyframes centerPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
      }
      .expand-glow { animation: expandGlow 1s ease-in-out; }
      .center-pulse { animation: centerPulse 0.6s ease-in-out; }
    `}</style>
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const [inputString] = useState("babad");
  const [start, setStart] = useState(0);
  const [maxLen, setMaxLen] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [left, setLeft] = useState(-1);
  const [right, setRight] = useState(-1);
  const [currentLength, setCurrentLength] = useState(0);
  const [longestPalindrome, setLongestPalindrome] = useState("");
  const [centerType, setCenterType] = useState<'odd' | 'even' | 'none'>('none');

  const steps = [
    { step: 1, left: -1, right: -1, centerIndex: -1, centerType: 'none', currentLine: 1, description: '📋 Initialize: Set start = 0 to track the starting position of longest palindrome.', action: 'init', start: 0, maxLen: 0, currentLength: 0, longestPalindrome: '' },
    { step: 2, left: -1, right: -1, centerIndex: -1, centerType: 'none', currentLine: 2, description: '📋 Initialize: Set maxLen = 0 to track the maximum length found so far.', action: 'init', start: 0, maxLen: 0, currentLength: 0, longestPalindrome: '' },
    { step: 3, left: -1, right: -1, centerIndex: 0, centerType: 'none', currentLine: 4, description: '🔄 Loop Start: Begin checking center positions. Starting at i = 0.', action: 'loop-start', start: 0, maxLen: 0, currentLength: 0, longestPalindrome: '' },
    { step: 4, left: 0, right: 0, centerIndex: 0, centerType: 'odd', currentLine: 5, description: '📍 Center at index 0: Check for odd-length palindrome (single character center).', action: 'check-center', start: 0, maxLen: 0, currentLength: 0, longestPalindrome: '' },
    { step: 5, left: 0, right: 0, centerIndex: 0, centerType: 'odd', currentLine: 6, description: '🔍 Examine: s[0] = "b". Start with single character.', action: 'examine', start: 0, maxLen: 0, currentLength: 1, longestPalindrome: '' },
    { step: 6, left: 0, right: 0, centerIndex: 0, centerType: 'odd', currentLine: 7, description: '✅ Valid: Single character "b" is always a palindrome. Length = 1.', action: 'valid', start: 0, maxLen: 0, currentLength: 1, longestPalindrome: '' },
    { step: 7, left: -1, right: 1, centerIndex: 0, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = -1, right = 1. Check boundaries.', action: 'expand-attempt', start: 0, maxLen: 0, currentLength: 1, longestPalindrome: '' },
    { step: 8, left: -1, right: 1, centerIndex: 0, centerType: 'odd', currentLine: 9, description: '❌ Stop: Left pointer out of bounds (left < 0). Cannot expand further.', action: 'stop-bounds', start: 0, maxLen: 0, currentLength: 1, longestPalindrome: '' },
    { step: 9, left: 0, right: 0, centerIndex: 0, centerType: 'odd', currentLine: 11, description: '✅ Update: Found palindrome "b" with length 1. Update maxLen = 1, start = 0.', action: 'update-max', start: 0, maxLen: 1, currentLength: 1, longestPalindrome: 'b' },
    { step: 10, left: 0, right: 1, centerIndex: 0, centerType: 'even', currentLine: 13, description: '📍 Center between 0 and 1: Check for even-length palindrome.', action: 'check-center', start: 0, maxLen: 1, currentLength: 0, longestPalindrome: 'b' },
    { step: 11, left: 0, right: 1, centerIndex: 0, centerType: 'even', currentLine: 14, description: '🔍 Compare: s[0]="b" vs s[1]="a". Are they equal?', action: 'compare', start: 0, maxLen: 1, currentLength: 0, longestPalindrome: 'b' },
    { step: 12, left: 0, right: 1, centerIndex: 0, centerType: 'even', currentLine: 15, description: '❌ Mismatch: "b" ≠ "a". No even-length palindrome at this center.', action: 'mismatch', start: 0, maxLen: 1, currentLength: 0, longestPalindrome: 'b' },
    { step: 13, left: 0, right: 1, centerIndex: 0, centerType: 'even', currentLine: 16, description: '💭 Decision: Length 0 < maxLen (1). No update needed.', action: 'no-update', start: 0, maxLen: 1, currentLength: 0, longestPalindrome: 'b' },
    { step: 14, left: 1, right: 1, centerIndex: 1, centerType: 'odd', currentLine: 5, description: '📍 Center at index 1: Check for odd-length palindrome.', action: 'check-center', start: 0, maxLen: 1, currentLength: 0, longestPalindrome: 'b' },
    { step: 15, left: 1, right: 1, centerIndex: 1, centerType: 'odd', currentLine: 6, description: '🔍 Examine: s[1] = "a". Start with single character.', action: 'examine', start: 0, maxLen: 1, currentLength: 1, longestPalindrome: 'b' },
    { step: 16, left: 0, right: 2, centerIndex: 1, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = 0, right = 2. Check s[0] vs s[2].', action: 'expand-attempt', start: 0, maxLen: 1, currentLength: 1, longestPalindrome: 'b' },
    { step: 17, left: 0, right: 2, centerIndex: 1, centerType: 'odd', currentLine: 9, description: '🔍 Compare: s[0]="b" vs s[2]="b". Are they equal?', action: 'compare', start: 0, maxLen: 1, currentLength: 1, longestPalindrome: 'b' },
    { step: 18, left: 0, right: 2, centerIndex: 1, centerType: 'odd', currentLine: 10, description: '✅ Match: "b" == "b"! Expand to "bab". Length = 3.', action: 'match', start: 0, maxLen: 1, currentLength: 3, longestPalindrome: 'b' },
    { step: 19, left: -1, right: 3, centerIndex: 1, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = -1, right = 3. Check boundaries.', action: 'expand-attempt', start: 0, maxLen: 1, currentLength: 3, longestPalindrome: 'b' },
    { step: 20, left: -1, right: 3, centerIndex: 1, centerType: 'odd', currentLine: 9, description: '❌ Stop: Left pointer out of bounds (left < 0). Cannot expand.', action: 'stop-bounds', start: 0, maxLen: 1, currentLength: 3, longestPalindrome: 'b' },
    { step: 21, left: 0, right: 2, centerIndex: 1, centerType: 'odd', currentLine: 11, description: '✅ Update: Found "bab" with length 3 > maxLen(1). Update maxLen = 3, start = 0.', action: 'update-max', start: 0, maxLen: 3, currentLength: 3, longestPalindrome: 'bab' },
    { step: 22, left: 1, right: 2, centerIndex: 1, centerType: 'even', currentLine: 13, description: '📍 Center between 1 and 2: Check for even-length palindrome.', action: 'check-center', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 23, left: 1, right: 2, centerIndex: 1, centerType: 'even', currentLine: 14, description: '🔍 Compare: s[1]="a" vs s[2]="b". Are they equal?', action: 'compare', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 24, left: 1, right: 2, centerIndex: 1, centerType: 'even', currentLine: 15, description: '❌ Mismatch: "a" ≠ "b". No even-length palindrome at this center.', action: 'mismatch', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 25, left: 1, right: 2, centerIndex: 1, centerType: 'even', currentLine: 16, description: '💭 Decision: Length 0 < maxLen (3). No update needed.', action: 'no-update', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 26, left: 2, right: 2, centerIndex: 2, centerType: 'odd', currentLine: 5, description: '📍 Center at index 2: Check for odd-length palindrome.', action: 'check-center', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 27, left: 2, right: 2, centerIndex: 2, centerType: 'odd', currentLine: 6, description: '🔍 Examine: s[2] = "b". Start with single character.', action: 'examine', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 28, left: 1, right: 3, centerIndex: 2, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = 1, right = 3. Check s[1] vs s[3].', action: 'expand-attempt', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 29, left: 1, right: 3, centerIndex: 2, centerType: 'odd', currentLine: 9, description: '🔍 Compare: s[1]="a" vs s[3]="a". Are they equal?', action: 'compare', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 30, left: 1, right: 3, centerIndex: 2, centerType: 'odd', currentLine: 10, description: '✅ Match: "a" == "a"! Expand to "aba". Length = 3.', action: 'match', start: 0, maxLen: 3, currentLength: 3, longestPalindrome: 'bab' },
    { step: 31, left: 0, right: 4, centerIndex: 2, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = 0, right = 4. Check s[0] vs s[4].', action: 'expand-attempt', start: 0, maxLen: 3, currentLength: 3, longestPalindrome: 'bab' },
    { step: 32, left: 0, right: 4, centerIndex: 2, centerType: 'odd', currentLine: 9, description: '🔍 Compare: s[0]="b" vs s[4]="d". Are they equal?', action: 'compare', start: 0, maxLen: 3, currentLength: 3, longestPalindrome: 'bab' },
    { step: 33, left: 0, right: 4, centerIndex: 2, centerType: 'odd', currentLine: 10, description: '❌ Mismatch: "b" ≠ "d". Stop expansion. Final: "aba" length 3.', action: 'mismatch-stop', start: 0, maxLen: 3, currentLength: 3, longestPalindrome: 'bab' },
    { step: 34, left: 2, right: 3, centerIndex: 2, centerType: 'even', currentLine: 13, description: '📍 Center between 2 and 3: Check for even-length palindrome.', action: 'check-center', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 35, left: 2, right: 3, centerIndex: 2, centerType: 'even', currentLine: 14, description: '🔍 Compare: s[2]="b" vs s[3]="a". Are they equal?', action: 'compare', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 36, left: 2, right: 3, centerIndex: 2, centerType: 'even', currentLine: 15, description: '❌ Mismatch: "b" ≠ "a". No even-length palindrome at this center.', action: 'mismatch', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 37, left: 2, right: 3, centerIndex: 2, centerType: 'even', currentLine: 16, description: '💭 Decision: Length 0 < maxLen (3). No update needed.', action: 'no-update', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 38, left: 3, right: 3, centerIndex: 3, centerType: 'odd', currentLine: 5, description: '📍 Center at index 3: Check for odd-length palindrome.', action: 'check-center', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 39, left: 3, right: 3, centerIndex: 3, centerType: 'odd', currentLine: 6, description: '🔍 Examine: s[3] = "a". Start with single character.', action: 'examine', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 40, left: 2, right: 4, centerIndex: 3, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = 2, right = 4. Check s[2] vs s[4].', action: 'expand-attempt', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 41, left: 2, right: 4, centerIndex: 3, centerType: 'odd', currentLine: 9, description: '🔍 Compare: s[2]="b" vs s[4]="d". Are they equal?', action: 'compare', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 42, left: 2, right: 4, centerIndex: 3, centerType: 'odd', currentLine: 10, description: '❌ Mismatch: "b" ≠ "d". Stop expansion. Final: "a" length 1 < maxLen.', action: 'mismatch-stop', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 43, left: 3, right: 4, centerIndex: 3, centerType: 'even', currentLine: 13, description: '📍 Center between 3 and 4: Check for even-length palindrome.', action: 'check-center', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 44, left: 3, right: 4, centerIndex: 3, centerType: 'even', currentLine: 14, description: '🔍 Compare: s[3]="a" vs s[4]="d". Are they equal?', action: 'compare', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 45, left: 3, right: 4, centerIndex: 3, centerType: 'even', currentLine: 15, description: '❌ Mismatch: "a" ≠ "d". No even-length palindrome at this center.', action: 'mismatch', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 46, left: 3, right: 4, centerIndex: 3, centerType: 'even', currentLine: 16, description: '💭 Decision: Length 0 < maxLen (3). No update needed.', action: 'no-update', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 47, left: 4, right: 4, centerIndex: 4, centerType: 'odd', currentLine: 5, description: '📍 Center at index 4: Check for odd-length palindrome.', action: 'check-center', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 48, left: 4, right: 4, centerIndex: 4, centerType: 'odd', currentLine: 6, description: '🔍 Examine: s[4] = "d". Start with single character.', action: 'examine', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 49, left: 3, right: 5, centerIndex: 4, centerType: 'odd', currentLine: 8, description: '🔍 Try Expand: left = 3, right = 5. Check boundaries.', action: 'expand-attempt', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 50, left: 3, right: 5, centerIndex: 4, centerType: 'odd', currentLine: 9, description: '❌ Stop: Right pointer out of bounds (right >= length). Cannot expand.', action: 'stop-bounds', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 51, left: 4, right: 4, centerIndex: 4, centerType: 'odd', currentLine: 11, description: '💭 Decision: Length 1 < maxLen (3). No update needed.', action: 'no-update', start: 0, maxLen: 3, currentLength: 1, longestPalindrome: 'bab' },
    { step: 52, left: -1, right: -1, centerIndex: -1, centerType: 'none', currentLine: 18, description: '🎯 Loop Complete: Checked all possible centers. Best palindrome found!', action: 'loop-complete', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
    { step: 53, left: -1, right: -1, centerIndex: -1, centerType: 'none', currentLine: 19, description: '✅ Return Result: s.substring(0, 0+3) = "bab". Algorithm complete!', action: 'done', start: 0, maxLen: 3, currentLength: 0, longestPalindrome: 'bab' },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function longestPalindrome(s) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  let start = 0, maxLen = 0;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `start=${stepData.start}, maxLen=${stepData.maxLen}` : '' },
      { line: 3, code: '  ', active: false, indent: 1 },
      { line: 4, code: '  for (let i = 0; i < s.length; i++) {', active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: stepData.centerIndex >= 0 ? `i=${stepData.centerIndex}` : '' },
      { line: 5, code: '    let len1 = expand(i, i);', active: stepData.centerType === 'odd' && stepData.currentLine > 4, indent: 2, values: stepData.centerType === 'odd' ? `len1=${stepData.currentLength}` : '' },
      { line: 6, code: '    let len2 = expand(i, i+1);', active: stepData.centerType === 'even' && stepData.currentLine > 12, indent: 2, values: stepData.centerType === 'even' ? `len2=${stepData.currentLength}` : '' },
      { line: 7, code: '    let len = max(len1, len2);', active: stepData.currentLine === 11, indent: 2 },
      { line: 8, code: '    if (len > maxLen) {', active: stepData.currentLine === 11, indent: 2 },
      { line: 9, code: '      maxLen = len;', active: stepData.action === 'update-max', indent: 3, values: stepData.action === 'update-max' ? `maxLen=${stepData.maxLen}` : '' },
      { line: 10, code: '      start = i - (len-1)/2;', active: stepData.action === 'update-max', indent: 3, values: stepData.action === 'update-max' ? `start=${stepData.start}` : '' },
      { line: 11, code: '    }', active: false, indent: 2 },
      { line: 12, code: '  }', active: false, indent: 1 },
      { line: 13, code: '  return s.substring(start, start+maxLen);', active: stepData.currentLine === 19, indent: 1, values: stepData.currentLine === 19 ? `"${stepData.longestPalindrome}"` : '' },
      { line: 14, code: '}', active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setLeft(step.left);
    setRight(step.right);
    setCenterIndex(step.centerIndex);
    setCenterType(step.centerType as 'odd' | 'even' | 'none');
    setStart(step.start);
    setMaxLen(step.maxLen);
    setCurrentLength(step.currentLength);
    setLongestPalindrome(step.longestPalindrome);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);
    const speedMap = { slow: 3500, normal: 2500, fast: 1500 };
    const delay = speedMap[animationSpeed];
    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) goToStep(index);
        if (index === steps.length - 1) setTimeout(() => setIsAnimating(false), 2000);
      }, index * delay);
    });
  };

  const handleNext = () => { if (currentStep < steps.length - 1) goToStep(currentStep + 1); };
  const handlePrevious = () => { if (currentStep > 0) goToStep(currentStep - 1); };
  const handleReset = () => { setCurrentStep(0); setIsAnimating(false); goToStep(0); };

  return (
    <div className="space-y-8">
      {styleTag}
      <PageHeader icon={Sparkles} category="DSA · Strings" title="Longest Palindromic Substring" description="Master the expand-around-center algorithm to find the longest palindrome in a string" colorTheme="purple" badges={[{ label: 'Time: O(n²)', variant: 'success' }, { label: 'Space: O(1)', variant: 'info' }, { label: 'Medium', variant: 'default' }]} />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-purple-600" />Understanding the Problem Visually</CardTitle>
          <CardDescription>Let&apos;s break down what we&apos;re looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5" />What is a Palindromic Substring?</h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">A palindromic substring reads the same forwards and backwards. We need to find the <strong>longest</strong> one in the given string.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="font-mono text-lg font-bold text-slate-800 dark:text-slate-200">s = &quot;babad&quot;</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div className="font-mono text-lg font-bold text-green-800 dark:text-green-200">&quot;bab&quot; or &quot;aba&quot;</div>
                </div>
              </div>
            </div>
          </div>
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span>Every character is potentially a palindrome center</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span>Check both odd-length (1 center) and even-length (2 centers)</span></div>
              <div className="flex items-center gap-2"><span className="text-orange-600 font-bold">•</span><span>Expand outward while characters on both sides match</span></div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40"><Play className="w-6 h-6 text-purple-600 dark:text-purple-400" /></div>Step-by-Step Animation</CardTitle>
          <CardDescription>Watch how the algorithm expands around each center (53 detailed steps)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Button onClick={handlePlay} disabled={isAnimating} className="bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700"><Play className="w-4 h-4 mr-2" />{isAnimating ? 'Playing...' : 'Play Animation'}</Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {['slow', 'normal', 'fast'].map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="speed" value={speed} checked={animationSpeed === speed} onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')} disabled={isAnimating} className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={handlePrevious} disabled={currentStep === 0 || isAnimating} variant="outline" size="lg"><ChevronLeft className="w-4 h-4 mr-2" />Previous</Button>
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-100 dark:from-purple-900/40 dark:to-purple-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">Step {currentStep + 1} / {steps.length}</span>
            </div>
            <Button onClick={handleNext} disabled={currentStep === steps.length - 1 || isAnimating} variant="outline" size="lg">Next<ChevronRight className="w-4 h-4 ml-2" /></Button>
          </div>

          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">algorithm.js</span>
                </div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div><span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span></div>
              </div>
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div key={lineData.line} className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${lineData.active ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500' : ''}`}>
                    <span className={`select-none w-6 text-right flex-shrink-0 ${lineData.active ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-400 dark:text-slate-600'}`}>{lineData.line}</span>
                    <code className="flex-1 text-slate-700 dark:text-slate-300"><span style={{ marginLeft: `${lineData.indent * 16}px` }}>{lineData.code}</span>{lineData.values && <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">{lineData.values}</span>}</code>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex gap-4 text-xs"><div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">start:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].start}</span></div><div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">maxLen:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].maxLen}</span></div><div className="flex items-center gap-1.5"><span className="text-slate-500 dark:text-slate-400">type:</span><span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].centerType}</span></div></div>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-600"><CheckCircle className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">Step {steps[currentStep].step} of {steps.length}</div>
                    <div className="text-sm font-medium text-green-900 dark:text-green-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Iteration'}
                      {steps[currentStep].action === 'check-center' && '📍 Checking Center'}
                      {steps[currentStep].action === 'examine' && '🔍 Examining Character'}
                      {steps[currentStep].action === 'expand-attempt' && '➡️ Attempting Expansion'}
                      {steps[currentStep].action === 'compare' && '⚖️ Comparing Characters'}
                      {steps[currentStep].action === 'match' && '✅ Match Found!'}
                      {steps[currentStep].action === 'mismatch' && '❌ Mismatch'}
                      {steps[currentStep].action === 'mismatch-stop' && '⏹️ Stopping Expansion'}
                      {steps[currentStep].action === 'stop-bounds' && '🚧 Boundary Reached'}
                      {steps[currentStep].action === 'update-max' && '🏆 Updating Maximum'}
                      {steps[currentStep].action === 'no-update' && '➖ No Update Needed'}
                      {steps[currentStep].action === 'valid' && '✅ Valid Palindrome'}
                      {steps[currentStep].action === 'loop-complete' && '🎯 Loop Complete'}
                      {steps[currentStep].action === 'done' && '🎉 Algorithm Complete'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-green-900 dark:text-green-50 pl-14">{steps[currentStep].description}</p>
              </div>
            </div>
          )}

          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Visual Representation:</p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-yellow-200 border-2 border-yellow-500"></div><span className="text-slate-600 dark:text-slate-400">Center</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-purple-200 border-2 border-purple-500"></div><span className="text-slate-600 dark:text-slate-400">Expanding</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-green-200 border-2 border-green-500"></div><span className="text-slate-600 dark:text-slate-400">Longest</span></div>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2">
                  {inputString.split('').map((char, idx) => {
                    const isCenter = steps[currentStep].centerIndex === idx;
                    const isInRange = idx >= steps[currentStep].left && idx <= steps[currentStep].right && steps[currentStep].left >= 0;
                    const isInLongest = longestPalindrome && idx >= steps[currentStep].start && idx < steps[currentStep].start + steps[currentStep].maxLen;
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${isCenter ? 'bg-yellow-200 dark:bg-yellow-800 border-yellow-500 scale-125 ring-4 ring-yellow-300 center-pulse' : isInRange && steps[currentStep].action === 'match' ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110 expand-glow' : isInRange ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110' : isInLongest && steps[currentStep].action === 'update-max' ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-110 ring-4 ring-green-300' : isInLongest ? 'bg-green-100 dark:bg-green-900 border-green-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 opacity-60'}`}>{char}</div>
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>
                        {idx === steps[currentStep].left && steps[currentStep].left >= 0 && <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"><div className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/80 px-2.5 py-1 rounded border border-blue-500 shadow-md">Left</div><div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-blue-500"></div></div>}
                        {idx === steps[currentStep].right && steps[currentStep].right >= 0 && steps[currentStep].right < inputString.length && <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center z-20"><div className="text-xs font-bold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/80 px-2.5 py-1 rounded border border-red-500 shadow-md">Right</div><div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-transparent border-b-red-500"></div></div>}
                      </div>
                    );
                  })}
                </div>
                {steps[currentStep].longestPalindrome && <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 text-center"><div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">LONGEST PALINDROME FOUND</div><div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-500"><span className="font-mono text-2xl font-bold text-green-800 dark:text-green-200">{steps[currentStep].longestPalindrome}</span><span className="text-xs text-green-600 dark:text-green-400">Length: {steps[currentStep].maxLen}</span></div></div>}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader><CardTitle>Complexity Analysis</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">⏱️ Time Complexity: O(n²)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">We iterate through each character as a center (O(n)), and for each center we expand outward which takes O(n) in worst case.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">💾 Space Complexity: O(1)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">We only use constant extra space for variables (start, maxLen, left, right).</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet title="Complete Solution" language="javascript" code={`function longestPalindrome(s) {
  if (!s || s.length === 0) return "";
  
  let start = 0, maxLen = 0;
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);     // odd-length
    const len2 = expandAroundCenter(i, i + 1); // even-length
    const len = Math.max(len1, len2);
    
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  
  return s.substring(start, start + maxLen);
}`} />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Related LeetCode Problems
          </CardTitle>
          <CardDescription>Practice similar problems to master this concept</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            <a
              href="https://leetcode.com/problems/longest-palindromic-substring/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      5. Longest Palindromic Substring
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                      Medium
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    The original problem - find the longest palindromic substring using expand around center approach.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>

            <a
              href="https://leetcode.com/problems/palindromic-substrings/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      647. Palindromic Substrings
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                      Medium
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Count the number of palindromic substrings - uses the same expand around center technique.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>

            <a
              href="https://leetcode.com/problems/valid-palindrome/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      125. Valid Palindrome
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                      Easy
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Check if a string is a palindrome - fundamental concept used in expansion logic.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>

            <a
              href="https://leetcode.com/problems/longest-palindrome/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      409. Longest Palindrome
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                      Easy
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Find the length of the longest palindrome that can be built with given characters.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>

            <a
              href="https://leetcode.com/problems/palindrome-partitioning/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      131. Palindrome Partitioning
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                      Medium
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Partition string into palindromic substrings - advanced application combining backtracking.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>

            <a
              href="https://leetcode.com/problems/shortest-palindrome/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      214. Shortest Palindrome
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700">
                      Hard
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Convert string to shortest palindrome by adding characters - challenging variant using KMP.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
