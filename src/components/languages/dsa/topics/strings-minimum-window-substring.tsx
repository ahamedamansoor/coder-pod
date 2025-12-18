'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, Search, Minimize2, ArrowRight } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MinimumWindowSubstring() {
  const s = "ADOBECODEBANC";
  const t = "ABC";
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowStart, setWindowStart] = useState(0);
  const [windowEnd, setWindowEnd] = useState(0);
  const [minStart, setMinStart] = useState(-1);
  const [minLen, setMinLen] = useState(Infinity);

  type Step = {
    step: number;
    left: number;
    right: number;
    currentLine: number;
    description: string;
    action: string;
    highlighted: number[];
    inWindow: number[];
    targetMap: Record<string, number>;
    windowMap: Record<string, number>;
    formed: number;
    required: number;
    minStart: number;
    minLen: number;
    tryRemove?: number;
    addedChar?: string;
    removedChar?: string;
  };

  const steps: Step[] = [
    {
      step: 1, left: 0, right: 0, currentLine: 2,
      description: '📋 Initialize: Build target map {A:1, B:1, C:1}. Need 3 unique chars.',
      action: 'init', highlighted: [], inWindow: [],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: {}, formed: 0, required: 3, minStart: -1, minLen: Infinity
    },
    {
      step: 2, left: 0, right: 0, currentLine: 8,
      description: 'Expand: Add s[0]="A" to window. Window map: {A:1}',
      action: 'expand', highlighted: [0], inWindow: [0],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A: 1 }, formed: 1, required: 3, minStart: -1, minLen: Infinity, addedChar: 'A'
    },
    {
      step: 3, left: 0, right: 0, currentLine: 9,
      description: '✓ "A" requirement met! (1/3 unique chars satisfied)',
      action: 'check', highlighted: [0], inWindow: [0],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A: 1 }, formed: 1, required: 3, minStart: -1, minLen: Infinity
    },
    {
      step: 4, left: 0, right: 1, currentLine: 8,
      description: 'Expand: Add s[1]="D" to window. Not in target, but keep it.',
      action: 'expand', highlighted: [0,1], inWindow: [0,1],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1 }, formed: 1, required: 3, minStart: -1, minLen: Infinity, addedChar: 'D'
    },
    {
      step: 5, left: 0, right: 2, currentLine: 8,
      description: 'Expand: Add s[2]="O" to window. Not in target.',
      action: 'expand', highlighted: [0,1,2], inWindow: [0,1,2],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1 }, formed: 1, required: 3, minStart: -1, minLen: Infinity, addedChar: 'O'
    },
    {
      step: 6, left: 0, right: 3, currentLine: 8,
      description: 'Expand: Add s[3]="B" to window. Window map: {A:1, D:1, O:1, B:1}',
      action: 'expand', highlighted: [0,1,2,3], inWindow: [0,1,2,3],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1 }, formed: 2, required: 3, minStart: -1, minLen: Infinity, addedChar: 'B'
    },
    {
      step: 7, left: 0, right: 3, currentLine: 9,
      description: '✓ "B" requirement met! (2/3 unique chars satisfied)',
      action: 'check', highlighted: [0,1,2,3], inWindow: [0,1,2,3],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1 }, formed: 2, required: 3, minStart: -1, minLen: Infinity
    },
    {
      step: 8, left: 0, right: 4, currentLine: 8,
      description: 'Expand: Add s[4]="E" to window. Not in target.',
      action: 'expand', highlighted: [0,1,2,3,4], inWindow: [0,1,2,3,4],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1, E:1 }, formed: 2, required: 3, minStart: -1, minLen: Infinity, addedChar: 'E'
    },
    {
      step: 9, left: 0, right: 5, currentLine: 8,
      description: 'Expand: Add s[5]="C" to window. Window: "ADOBEC"',
      action: 'expand', highlighted: [0,1,2,3,4,5], inWindow: [0,1,2,3,4,5],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1, E:1, C:1 }, formed: 3, required: 3, minStart: -1, minLen: Infinity, addedChar: 'C'
    },
    {
      step: 10, left: 0, right: 5, currentLine: 9,
      description: '✓ "C" requirement met! (3/3 unique chars satisfied)',
      action: 'check', highlighted: [0,1,2,3,4,5], inWindow: [0,1,2,3,4,5],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1, E:1, C:1 }, formed: 3, required: 3, minStart: -1, minLen: Infinity
    },
    {
      step: 11, left: 0, right: 5, currentLine: 10,
      description: '🎉 VALID WINDOW! All 3 chars satisfied. Length = 6',
      action: 'valid', highlighted: [0,1,2,3,4,5], inWindow: [0,1,2,3,4,5],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1, E:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 12, left: 0, right: 5, currentLine: 11,
      description: '💾 Save minimum: "ADOBEC" (start=0, length=6)',
      action: 'update-min', highlighted: [0,1,2,3,4,5], inWindow: [0,1,2,3,4,5],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1, E:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 13, left: 0, right: 5, currentLine: 14,
      description: '🔍 Try shrinking: Can we remove "A" from left?',
      action: 'try-shrink', highlighted: [0,1,2,3,4,5], inWindow: [0,1,2,3,4,5],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, D:1, O:1, B:1, E:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6, tryRemove: 0
    },
    {
      step: 14, left: 1, right: 5, currentLine: 15,
      description: '❌ Removed "A"! Now invalid (2/3). Need to expand right...',
      action: 'shrink-invalid', highlighted: [1,2,3,4,5], inWindow: [1,2,3,4,5],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:1, O:1, B:1, E:1, C:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, removedChar: 'A'
    },
    {
      step: 15, left: 1, right: 6, currentLine: 8,
      description: 'Expand: Add s[6]="O" to window.',
      action: 'expand', highlighted: [1,2,3,4,5,6], inWindow: [1,2,3,4,5,6],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:1, O:2, B:1, E:1, C:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, addedChar: 'O'
    },
    {
      step: 16, left: 1, right: 7, currentLine: 8,
      description: 'Expand: Add s[7]="D" to window.',
      action: 'expand', highlighted: [1,2,3,4,5,6,7], inWindow: [1,2,3,4,5,6,7],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:2, O:2, B:1, E:1, C:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, addedChar: 'D'
    },
    {
      step: 17, left: 1, right: 8, currentLine: 8,
      description: 'Expand: Add s[8]="E" to window.',
      action: 'expand', highlighted: [1,2,3,4,5,6,7,8], inWindow: [1,2,3,4,5,6,7,8],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:2, O:2, B:1, E:2, C:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, addedChar: 'E'
    },
    {
      step: 18, left: 1, right: 9, currentLine: 8,
      description: 'Expand: Add s[9]="B" to window.',
      action: 'expand', highlighted: [1,2,3,4,5,6,7,8,9], inWindow: [1,2,3,4,5,6,7,8,9],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:2, O:2, B:2, E:2, C:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, addedChar: 'B'
    },
    {
      step: 19, left: 1, right: 10, currentLine: 8,
      description: 'Expand: Add s[10]="A" to window. Window: "ODECODEBA"',
      action: 'expand', highlighted: [1,2,3,4,5,6,7,8,9,10], inWindow: [1,2,3,4,5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:2, O:2, B:2, E:2, C:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6, addedChar: 'A'
    },
    {
      step: 20, left: 1, right: 10, currentLine: 9,
      description: '✓ "A" requirement restored! (3/3 unique chars satisfied)',
      action: 'check', highlighted: [1,2,3,4,5,6,7,8,9,10], inWindow: [1,2,3,4,5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:2, O:2, B:2, E:2, C:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 21, left: 1, right: 10, currentLine: 10,
      description: '🎉 Valid again! But length=10 > current min=6. Keep shrinking...',
      action: 'compare', highlighted: [1,2,3,4,5,6,7,8,9,10], inWindow: [1,2,3,4,5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:2, O:2, B:2, E:2, C:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 22, left: 2, right: 10, currentLine: 14,
      description: '🔍 Shrink: Remove s[1]="D" (extra, not breaking validity).',
      action: 'shrink-valid', highlighted: [2,3,4,5,6,7,8,9,10], inWindow: [2,3,4,5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:1, O:2, B:2, E:2, C:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 23, left: 3, right: 10, currentLine: 14,
      description: '🔍 Shrink: Remove s[2]="O" (extra, not breaking validity).',
      action: 'shrink-valid', highlighted: [3,4,5,6,7,8,9,10], inWindow: [3,4,5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:1, O:1, B:2, E:2, C:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 24, left: 4, right: 10, currentLine: 14,
      description: '🔍 Shrink: Remove s[3]="B" (extra copy, still have B:1).',
      action: 'shrink-valid', highlighted: [4,5,6,7,8,9,10], inWindow: [4,5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:1, O:1, B:1, E:2, C:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 25, left: 5, right: 10, currentLine: 14,
      description: '🔍 Shrink: Remove s[4]="E" (not in target). Window: "CODEBA"',
      action: 'shrink-valid', highlighted: [5,6,7,8,9,10], inWindow: [5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { C:1, O:1, D:1, E:1, B:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 26, left: 5, right: 10, currentLine: 14,
      description: '🔍 Try removing "C"... but that breaks the window!',
      action: 'try-shrink', highlighted: [5,6,7,8,9,10], inWindow: [5,6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { C:1, O:1, D:1, E:1, B:1, A:1 }, formed: 3, required: 3, minStart: 0, minLen: 6, tryRemove: 5
    },
    {
      step: 27, left: 6, right: 10, currentLine: 15,
      description: '❌ Removed "C"! Invalid (2/3). Expand right again...',
      action: 'shrink-invalid', highlighted: [6,7,8,9,10], inWindow: [6,7,8,9,10],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { O:1, D:1, E:1, B:1, A:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, removedChar: 'C'
    },
    {
      step: 28, left: 6, right: 11, currentLine: 8,
      description: 'Expand: Add s[11]="N" to window.',
      action: 'expand', highlighted: [6,7,8,9,10,11], inWindow: [6,7,8,9,10,11],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { O:1, D:1, E:1, B:1, A:1, N:1 }, formed: 2, required: 3, minStart: 0, minLen: 6, addedChar: 'N'
    },
    {
      step: 29, left: 6, right: 12, currentLine: 8,
      description: 'Expand: Add s[12]="C" to window. Window: "ODEBANC"',
      action: 'expand', highlighted: [6,7,8,9,10,11,12], inWindow: [6,7,8,9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { O:1, D:1, E:1, B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6, addedChar: 'C'
    },
    {
      step: 30, left: 6, right: 12, currentLine: 9,
      description: '✓ "C" requirement restored! (3/3 unique chars satisfied)',
      action: 'check', highlighted: [6,7,8,9,10,11,12], inWindow: [6,7,8,9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { O:1, D:1, E:1, B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 31, left: 6, right: 12, currentLine: 10,
      description: '🎉 Valid! Length=7, still > min=6. Can we shrink more?',
      action: 'compare', highlighted: [6,7,8,9,10,11,12], inWindow: [6,7,8,9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { O:1, D:1, E:1, B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 32, left: 7, right: 12, currentLine: 14,
      description: '🔍 Shrink: Remove s[6]="O" (not in target).',
      action: 'shrink-valid', highlighted: [7,8,9,10,11,12], inWindow: [7,8,9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { D:1, E:1, B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 33, left: 8, right: 12, currentLine: 14,
      description: '🔍 Shrink: Remove s[7]="D" (not in target).',
      action: 'shrink-valid', highlighted: [8,9,10,11,12], inWindow: [8,9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { E:1, B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 34, left: 9, right: 12, currentLine: 14,
      description: '🔍 Shrink: Remove s[8]="E" (not in target). Window: "BANC"',
      action: 'shrink-valid', highlighted: [9,10,11,12], inWindow: [9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 0, minLen: 6
    },
    {
      step: 35, left: 9, right: 12, currentLine: 11,
      description: '🎯 NEW MINIMUM! "BANC" has length=4 < previous 6!',
      action: 'update-min', highlighted: [9,10,11,12], inWindow: [9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 9, minLen: 4
    },
    {
      step: 36, left: 9, right: 12, currentLine: 14,
      description: '🔍 Try removing "B"... but we need it!',
      action: 'try-shrink', highlighted: [9,10,11,12], inWindow: [9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 9, minLen: 4, tryRemove: 9
    },
    {
      step: 37, left: 10, right: 12, currentLine: 15,
      description: '❌ Window "ANC" invalid (missing B). Cannot shrink further!',
      action: 'shrink-invalid', highlighted: [10,11,12], inWindow: [10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { A:1, N:1, C:1 }, formed: 2, required: 3, minStart: 9, minLen: 4, removedChar: 'B'
    },
    {
      step: 38, left: 10, right: 12, currentLine: 17,
      description: '✓ End of string reached. No more characters to add.',
      action: 'complete', highlighted: [9,10,11,12], inWindow: [9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 9, minLen: 4
    },
    {
      step: 39, left: 9, right: 12, currentLine: 17,
      description: '🏆 RESULT: Minimum window is "BANC" (indices 9-12, length=4)',
      action: 'result', highlighted: [9,10,11,12], inWindow: [9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 9, minLen: 4
    },
    {
      step: 40, left: 9, right: 12, currentLine: 17,
      description: '🎯 Time: O(m+n), Space: O(m+n) where m=|S|, n=|T|',
      action: 'done', highlighted: [9,10,11,12], inWindow: [9,10,11,12],
      targetMap: { A: 1, B: 1, C: 1 }, windowMap: { B:1, A:1, N:1, C:1 }, formed: 3, required: 3, minStart: 9, minLen: 4
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const currentChar = stepData.right >= 0 && stepData.right < s.length ? s[stepData.right] : '';
    const leftChar = stepData.left >= 0 && stepData.left < s.length ? s[stepData.left] : '';
    const currentLen = stepData.right - stepData.left + 1;
    
    return [
      { line: 1, code: 'function minWindow(s, t) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  const targetMap = buildFreqMap(t);`, active: stepData.currentLine === 2, indent: 1, comment: true, values: stepData.currentLine === 2 ? `targetMap={A:1, B:1, C:1}` : '' },
      { line: 3, code: `  let required = Object.keys(targetMap).length;`, active: stepData.currentLine === 2, indent: 1, values: `required=${stepData.required}` },
      { line: 4, code: `  let formed = 0;`, active: stepData.currentLine === 2, indent: 1, values: `formed=${stepData.formed}` },
      { line: 5, code: `  const windowMap = {};`, active: false, indent: 1 },
      { line: 6, code: `  `, active: false, indent: 1 },
      { line: 7, code: `  let left = 0, minLen = Infinity, minStart = -1;`, active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `left=0, minLen=∞, minStart=-1` : '' },
      { line: 8, code: `  `, active: false, indent: 1 },
      { line: 9, code: `  for (let right = 0; right < s.length; right++) {`, active: stepData.currentLine === 8, indent: 1, values: stepData.currentLine === 8 || stepData.right >= 0 ? `right=${stepData.right}` : '' },
      { line: 10, code: `    const char = s[right];`, active: stepData.action === 'expand', indent: 2, values: stepData.action === 'expand' ? `char='${currentChar}'` : '' },
      { line: 11, code: `    windowMap[char] = (windowMap[char] || 0) + 1;`, active: stepData.action === 'expand', indent: 2, values: stepData.action === 'expand' ? `windowMap['${currentChar}']=${stepData.windowMap[currentChar] || 1}` : '' },
      { line: 12, code: `    if (targetMap[char] && windowMap[char] === targetMap[char])`, active: stepData.action === 'check', indent: 2, values: stepData.action === 'check' ? `checking '${currentChar}': formed=${stepData.formed}` : '' },
      { line: 13, code: `      formed++;`, active: stepData.action === 'check', indent: 3, values: stepData.action === 'check' ? `formed=${stepData.formed}` : '' },
      { line: 14, code: `    `, active: false, indent: 2 },
      { line: 15, code: `    while (formed === required) {`, active: stepData.action === 'valid' || stepData.action === 'shrink-valid' || stepData.action === 'try-shrink', indent: 2, values: (stepData.action === 'valid' || stepData.action === 'shrink-valid' || stepData.action === 'try-shrink') ? `formed=${stepData.formed}, required=${stepData.required}` : '' },
      { line: 16, code: `      const len = right - left + 1;`, active: stepData.action === 'compare' || stepData.action === 'update-min', indent: 3, values: (stepData.action === 'compare' || stepData.action === 'update-min') ? `len=${currentLen}` : '' },
      { line: 17, code: `      if (len < minLen) {`, active: stepData.action === 'update-min', indent: 3, values: stepData.action === 'update-min' ? `${currentLen} < ${stepData.minLen === Infinity ? '∞' : stepData.minLen}` : '' },
      { line: 18, code: `        minLen = len; minStart = left;`, active: stepData.action === 'update-min', indent: 4, values: stepData.action === 'update-min' ? `minLen=${stepData.minLen}, minStart=${stepData.minStart}` : '' },
      { line: 19, code: `      }`, active: false, indent: 3 },
      { line: 20, code: `      `, active: false, indent: 3 },
      { line: 21, code: `      const leftChar = s[left];`, active: stepData.action === 'shrink-valid' || stepData.action === 'shrink-invalid' || stepData.action === 'try-shrink', indent: 3, values: (stepData.action === 'shrink-valid' || stepData.action === 'shrink-invalid' || stepData.action === 'try-shrink') ? `leftChar='${leftChar}', left=${stepData.left}` : '' },
      { line: 22, code: `      windowMap[leftChar]--;`, active: stepData.action === 'shrink-valid' || stepData.action === 'shrink-invalid', indent: 3, values: (stepData.action === 'shrink-valid' || stepData.action === 'shrink-invalid') ? `windowMap['${leftChar}']=${stepData.windowMap[leftChar] || 0}` : '' },
      { line: 23, code: `      if (targetMap[leftChar] && `, active: stepData.action === 'shrink-invalid', indent: 3 },
      { line: 24, code: `          windowMap[leftChar] < targetMap[leftChar]) formed--;`, active: stepData.action === 'shrink-invalid', indent: 3, values: stepData.action === 'shrink-invalid' ? `formed=${stepData.formed}` : '' },
      { line: 25, code: `      left++;`, active: stepData.action === 'shrink-valid' || stepData.action === 'shrink-invalid', indent: 3, values: (stepData.action === 'shrink-valid' || stepData.action === 'shrink-invalid') ? `left=${stepData.left + 1}` : '' },
      { line: 26, code: `    }`, active: false, indent: 2 },
      { line: 27, code: `  }`, active: false, indent: 1 },
      { line: 28, code: `  return minStart === -1 ? "" : s.substring(minStart, minStart + minLen);`, active: stepData.currentLine === 17 || stepData.action === 'result' || stepData.action === 'done', indent: 1, values: (stepData.action === 'result' || stepData.action === 'done') ? `result="${s.substring(stepData.minStart, stepData.minStart + stepData.minLen)}"` : '' },
      { line: 29, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setWindowStart(step.left);
    setWindowEnd(step.right);
    setMinStart(step.minStart);
    setMinLen(step.minLen);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

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
      }, index * 2500);
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
    setWindowStart(0);
    setWindowEnd(0);
    setMinStart(-1);
    setMinLen(Infinity);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Minimize2}
        category="DSA · Sliding Window"
        title="Minimum Window Substring"
        description="Find the minimum window in S that contains all characters from T using sliding window with HashMaps."
        colorTheme="teal"
        badges={[
          { label: 'Time: O(m+n)', variant: 'success' },
          { label: 'Space: O(m+n)', variant: 'info' },
          { label: 'Hard', variant: 'destructive' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-teal-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we're looking for with diagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What are we looking for? */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" />
              What We're Looking For
            </h4>
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Given two strings <strong className="text-blue-600 dark:text-blue-400">S</strong> (source) and <strong className="text-amber-600 dark:text-amber-400">T</strong> (target), find the <strong>smallest substring</strong> in S that contains <strong>all characters</strong> from T.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Source String (S):</span>
                      <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">"ADOBECODEBANC"</div>
                    </div>
                    <div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Target String (T):</span>
                      <div className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400">"ABC"</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Minimum Window:</span>
                    <div className="font-mono text-lg font-bold text-green-700 dark:text-green-300">"BANC"</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Length: 4 characters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison of Windows */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Minimize2 className="w-5 h-5" />
              Comparing Different Windows
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Let's look at different possible windows and see which one is the minimum:
            </p>
            
            <div className="space-y-4">
              {/* Valid Window 1 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Window 1: "ADOBEC"</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded">Valid ✓</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {['A','D','O','B','E','C'].map((char, idx) => (
                        <div key={idx} className={`px-2 py-1 rounded font-mono text-sm font-bold ${
                          ['A','B','C'].includes(char) 
                            ? 'bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 border-2 border-green-500'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                        }`}>
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Length: <strong>6</strong> • Contains: A, B, C ✓ • But not minimum ❌
                    </div>
                  </div>
                </div>
              </div>

              {/* Valid Window 2 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-emerald-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-300">Window 2: "BANC"</span>
                      <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded font-bold">Minimum! 🎯</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {['B','A','N','C'].map((char, idx) => (
                        <div key={idx} className={`px-2 py-1 rounded font-mono text-sm font-bold ${
                          ['A','B','C'].includes(char)
                            ? 'bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 border-2 border-emerald-500 scale-110'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                        }`}>
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      Length: <strong>4</strong> • Contains: A, B, C ✓ • This is the answer! ✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Invalid Window */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-red-700 dark:text-red-300">Window 3: "DOBEC"</span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded">Invalid ✗</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {['D','O','B','E','C'].map((char, idx) => (
                        <div key={idx} className={`px-2 py-1 rounded font-mono text-sm font-bold ${
                          ['B','C'].includes(char)
                            ? 'bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 border border-yellow-500'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                        }`}>
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400">
                      Length: <strong>5</strong> • Missing: A ❌ • Not valid
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Visual Flow */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works (Visual Steps)
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Identify Target Characters</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Target T = "ABC" means we need:</div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 border border-amber-500 rounded font-mono font-bold text-amber-700 dark:text-amber-300">A × 1</div>
                      <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 border border-amber-500 rounded font-mono font-bold text-amber-700 dark:text-amber-300">B × 1</div>
                      <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 border border-amber-500 rounded font-mono font-bold text-amber-700 dark:text-amber-300">C × 1</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Expand Window Until Valid</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Keep adding characters until we have all of A, B, C:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-12">Start:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-teal-200 dark:bg-teal-800 rounded font-mono text-xs">A</div>
                          <div className="text-xs text-slate-400">→ Need B, C</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-12">Expand:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-teal-200 dark:bg-teal-800 rounded font-mono text-xs">A D O B</div>
                          <div className="text-xs text-slate-400">→ Need C</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-12">Valid:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-green-200 dark:bg-green-800 rounded font-mono text-xs font-bold">A D O B E C</div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-semibold">✓ All found!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Shrink to Find Minimum</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Try removing characters from left while staying valid:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-16">Current:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-green-200 dark:bg-green-800 rounded font-mono text-xs">A D O B E C</div>
                          <div className="text-xs text-slate-400">(length: 6)</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-16">Remove A:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded font-mono text-xs line-through">D O B E C</div>
                          <div className="text-xs text-red-600 dark:text-red-400">✗ Missing A!</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-16">Find next:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-emerald-200 dark:bg-emerald-800 rounded font-mono text-xs font-bold">B A N C</div>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">✓ Smaller! (length: 4)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Constraints */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Constraints</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Must contain <strong>all characters</strong> from T (including duplicates if any)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Window can contain <strong>extra characters</strong> not in T</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>We want the <strong>shortest</strong> such window</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>If no valid window exists, return <strong>empty string</strong></span>
              </div>
            </AlertDescription>
          </Alert>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">📝 Example</h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-teal-300 dark:border-teal-600 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">String S:</p>
                <div className="flex gap-1 flex-wrap">
                  {s.split('').map((char, idx) => (
                    <div key={idx} className="flex flex-col items-center px-2 py-1 rounded bg-teal-100 dark:bg-teal-900/40 border border-teal-300">
                      <div className="text-sm font-bold text-teal-700 dark:text-teal-300">{char}</div>
                      <div className="text-[10px] text-slate-500">{idx}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Target T:</p>
                <div className="flex gap-2">
                  {t.split('').map((char, idx) => (
                    <div key={idx} className="px-3 py-2 rounded bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-500">
                      <div className="text-lg font-bold text-amber-700 dark:text-amber-300">{char}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-3 border-t border-teal-200 dark:border-teal-700">
                <div className="inline-flex items-center gap-2 p-3 bg-teal-50 dark:bg-teal-900/20 rounded border border-teal-200 dark:border-teal-700">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  <span className="text-slate-700 dark:text-slate-300">Answer: <strong className="text-teal-700 dark:text-teal-300">"BANC"</strong> (length = 4)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Explanation */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">💡 The Algorithm (Sliding Window + HashMap)</h4>
            
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Build Target HashMap</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Count frequency of each character in <strong>T</strong>. Example: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">{'{A:1, B:1, C:1}'}</code>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Expand Window (Right Pointer)</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Move <strong>right</strong> pointer to add characters. Track counts in <strong>windowMap</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Check If Valid Window</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Use <strong>"formed"</strong> counter: When <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">formed === required</code>, window contains all chars!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Shrink Window (Left Pointer)</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      When valid, try shrinking from <strong>left</strong> to minimize length. Update minimum if smaller found.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-950/30 dark:to-yellow-950/30 p-4 rounded-xl border-2 border-amber-300 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
              💡 Key Insight
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              The <strong>"formed"</strong> counter tracks how many unique characters have met their target frequency. This avoids checking every character in the HashMap on each iteration, making the algorithm efficient!
            </p>
          </div>

          {/* Complexity */}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 p-4 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">⚡ Complexity Analysis</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Time</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(m + n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Each character visited at most twice</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(m + n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two HashMaps for character frequencies</div>
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
              <Search className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            Visual Animation: Step-by-Step
          </CardTitle>
          <CardDescription>Watch how the window expands and shrinks to find the minimum substring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
            {/* Controls */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center flex-wrap">
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

              {/* Stepper */}
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
                    Step {currentStep + 1} / {steps.length}
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
            </div>

            {/* Code Viewer */}
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">minWindow.js</span>
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
                        ? 'bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-400 dark:border-amber-500'
                        : lineData.comment
                        ? 'opacity-50'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-amber-600 dark:text-amber-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>
                    
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

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Window:</span>
                      <span className="font-semibold text-teal-600 dark:text-teal-400">[{windowStart}-{windowEnd}]</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Satisfied:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].formed}/{steps[currentStep].required}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Min:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{minLen === Infinity ? '∞' : minLen}</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Step {currentStep + 1} / {steps.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Step Description */}
            <div className={`mb-6 p-4 rounded-xl border-2 animate-in slide-in-from-top-4 duration-500 ${
              steps[currentStep].action === 'update-min'
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600 ring-4 ring-green-200 dark:ring-green-900/50'
                : steps[currentStep].action === 'valid'
                ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400 dark:border-blue-600'
                : steps[currentStep].action === 'shrink-invalid'
                ? 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-400 dark:border-red-600'
                : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                : steps[currentStep].action === 'shrink-valid'
                ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-400 dark:border-purple-600'
                : steps[currentStep].action === 'expand'
                ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400 dark:border-blue-600'
                : 'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-400 dark:border-teal-600'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  steps[currentStep].action === 'update-min'
                    ? 'bg-green-500 animate-pulse'
                    : steps[currentStep].action === 'valid'
                    ? 'bg-blue-500'
                    : steps[currentStep].action === 'shrink-invalid'
                    ? 'bg-red-500'
                    : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                    ? 'bg-green-500'
                    : steps[currentStep].action === 'shrink-valid'
                    ? 'bg-purple-500'
                    : steps[currentStep].action === 'expand'
                    ? 'bg-blue-500'
                    : 'bg-teal-600'
                }`}>
                  {steps[currentStep].action === 'update-min' || steps[currentStep].action === 'result' ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : steps[currentStep].action === 'shrink-invalid' ? (
                    <AlertCircle className="w-5 h-5 text-white" />
                  ) : (
                    <Search className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`text-xs font-semibold uppercase tracking-wider ${
                      steps[currentStep].action === 'update-min'
                        ? 'text-green-700 dark:text-green-300'
                        : steps[currentStep].action === 'valid'
                        ? 'text-blue-700 dark:text-blue-300'
                        : steps[currentStep].action === 'shrink-invalid'
                        ? 'text-red-700 dark:text-red-300'
                        : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                        ? 'text-green-700 dark:text-green-300'
                        : steps[currentStep].action === 'shrink-valid'
                        ? 'text-purple-700 dark:text-purple-300'
                        : steps[currentStep].action === 'expand'
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-teal-700 dark:text-teal-300'
                    }`}>
                      {steps[currentStep].action === 'update-min' ? '🎉 NEW MINIMUM!' :
                       steps[currentStep].action === 'init' ? '⚙️ INITIALIZATION' :
                       steps[currentStep].action === 'expand' ? '→ EXPANDING WINDOW' :
                       steps[currentStep].action === 'valid' ? '✓ VALID WINDOW' :
                       steps[currentStep].action === 'shrink-invalid' ? '⚠️ INVALID - EXPAND' :
                       steps[currentStep].action === 'shrink-valid' ? '← SHRINKING' :
                       steps[currentStep].action === 'try-shrink' ? '🔍 TRY SHRINK' :
                       steps[currentStep].action === 'compare' ? '📊 COMPARING' :
                       steps[currentStep].action === 'result' ? '🏆 RESULT' :
                       steps[currentStep].action === 'done' ? '✅ COMPLETE' :
                       '🔍 PROCESSING'}
                    </p>
                  </div>
                  <p className={`font-bold ${
                    steps[currentStep].action === 'update-min'
                      ? 'text-green-900 dark:text-green-100'
                      : steps[currentStep].action === 'valid'
                      ? 'text-blue-900 dark:text-blue-100'
                      : steps[currentStep].action === 'shrink-invalid'
                      ? 'text-red-900 dark:text-red-100'
                      : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                      ? 'text-green-900 dark:text-green-100'
                      : steps[currentStep].action === 'shrink-valid'
                      ? 'text-purple-900 dark:text-purple-100'
                      : steps[currentStep].action === 'expand'
                      ? 'text-blue-900 dark:text-blue-100'
                      : 'text-teal-900 dark:text-teal-100'
                  }`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            </div>

            {/* String Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-teal-900 dark:text-teal-100">String S with Sliding Window:</p>
                <div className="flex items-center gap-3 text-xs flex-wrap">
                  {currentStep > 0 && (
                    <>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded text-green-700 dark:text-green-300 font-semibold">left = {windowStart}</span>
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-700 rounded text-emerald-700 dark:text-emerald-300 font-semibold">right = {windowEnd}</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-700 rounded text-blue-700 dark:text-blue-300 font-semibold">formed = {steps[currentStep].formed}/{steps[currentStep].required}</span>
                      {minLen !== Infinity && (
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 rounded text-purple-700 dark:text-purple-300 font-semibold">minLen = {minLen}</span>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center gap-1 flex-wrap">
                    {/* Window Overlay */}
                    {currentStep > 0 && steps[currentStep].inWindow.length > 0 && (
                      <div
                        className="absolute -top-2 h-[3.5rem] bg-teal-500/10 dark:bg-teal-400/10 border-2 border-teal-500 rounded-lg transition-all duration-700 pointer-events-none"
                        style={{
                          left: `calc(${steps[currentStep].inWindow[0] * (3 + 0.25)}rem - 0.5rem)`,
                          width: `calc(${steps[currentStep].inWindow.length * 3}rem + ${(steps[currentStep].inWindow.length - 1) * 0.25}rem + 1rem)`
                        }}
                      >
                        {/* Start pointer at left edge */}
                        <div className="absolute -left-1 -top-8 flex flex-col items-center z-20">
                          <div className="text-[10px] font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/80 px-2 py-0.5 rounded border border-green-500 shadow-sm">
                            start
                          </div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-green-500"></div>
                        </div>
                        
                        {/* End pointer at right edge */}
                        <div className="absolute -right-1 -top-8 flex flex-col items-center z-20">
                          <div className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-500 shadow-sm">
                            end
                          </div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-emerald-500"></div>
                        </div>
                        
                        {/* Bottom label with substring */}
                        <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-[10px] font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/60 px-2 py-0.5 rounded whitespace-nowrap shadow-sm max-w-xs overflow-hidden text-ellipsis">
                          Window: "{s.substring(windowStart, windowEnd + 1)}" (len={steps[currentStep].inWindow.length})
                        </div>
                      </div>
                    )}
                {s.split('').map((char, idx) => {
                  const isInWindow = steps[currentStep] && steps[currentStep].inWindow.includes(idx);
                  const isHighlighted = steps[currentStep] && steps[currentStep].highlighted.includes(idx);
                  const isTryRemove = steps[currentStep] && steps[currentStep].tryRemove === idx;
                  const isMinWindow = minStart !== -1 && idx >= minStart && idx < minStart + minLen;

                  return (
                    <div key={idx} className="relative flex flex-col items-center gap-2">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-base border-2 transition-all duration-700 ${
                          isTryRemove
                            ? 'bg-orange-200 dark:bg-orange-800 border-orange-500 text-orange-900 dark:text-orange-100 scale-110 ring-4 ring-orange-300 animate-pulse'
                            : isInWindow && isMinWindow && steps[currentStep].action === 'result'
                            ? 'bg-green-200 dark:bg-green-800 border-green-500 text-green-900 dark:text-green-100 scale-125 ring-4 ring-green-300 animate-pulse'
                            : isInWindow
                            ? 'bg-teal-200 dark:bg-teal-800 border-teal-500 text-teal-900 dark:text-teal-100 scale-110 ring-4 ring-teal-300'
                            : isHighlighted
                            ? 'bg-teal-100 dark:bg-teal-900 border-teal-500 text-teal-900 dark:text-teal-100'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600 opacity-40'
                        }`}
                      >
                        {char}
                      </div>
                      <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400">{idx}</span>
                    </div>
                  );
                })}
                  </div>
                </div>
              </div>
            </div>

            {/* HashMap Visualization */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 className="text-sm font-bold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Target Map (T)
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {Object.entries(steps[currentStep].targetMap).map(([char, count]) => (
                    <div key={char} className="px-3 py-2 bg-amber-100 dark:bg-amber-900/40 border border-amber-300 rounded">
                      <div className="text-xs text-amber-600 dark:text-amber-400">
                        <span className="font-bold">{char}</span>: {count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-teal-200 dark:border-teal-700">
                <h4 className="text-sm font-bold text-teal-700 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Window Map
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {Object.keys(steps[currentStep].windowMap).length > 0 ? (
                    Object.entries(steps[currentStep].windowMap).map(([char, count]) => {
                      const targetCount = steps[currentStep].targetMap[char];
                      const isSatisfied = targetCount && count >= targetCount;
                      
                      return (
                        <div key={char} className={`px-3 py-2 border rounded ${
                          isSatisfied
                            ? 'bg-green-100 dark:bg-green-900/40 border-green-400'
                            : 'bg-teal-100 dark:bg-teal-900/40 border-teal-300'
                        }`}>
                          <div className={`text-xs ${
                            isSatisfied
                              ? 'text-green-700 dark:text-green-300'
                              : 'text-teal-600 dark:text-teal-400'
                          }`}>
                            <span className="font-bold">{char}</span>: {count}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-xs text-slate-500">Empty</span>
                  )}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 text-xs flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-teal-200 dark:bg-teal-800 border-2 border-teal-500 rounded ring-2 ring-teal-300"></div>
                <span className="text-slate-700 dark:text-slate-300">Current Window</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-200 dark:bg-green-800 border-2 border-green-500 rounded ring-2 ring-green-300"></div>
                <span className="text-slate-700 dark:text-slate-300">Minimum Window</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-200 dark:bg-orange-800 border-2 border-orange-500 rounded ring-2 ring-orange-300"></div>
                <span className="text-slate-700 dark:text-slate-300">Trying to Remove</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Implementation</CardTitle>
          <CardDescription>Full code with explanation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeSnippet
            language="javascript"
            code={`function minWindow(s, t) {
  // Build frequency map for target string
  const targetMap = {};
  for (let char of t) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }
  
  let required = Object.keys(targetMap).length;  // Unique chars needed
  let formed = 0;  // Unique chars satisfied in current window
  const windowMap = {};
  
  let left = 0, minLen = Infinity, minStart = -1;
  
  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowMap[char] = (windowMap[char] || 0) + 1;
    
    // Check if this character's requirement is met
    if (targetMap[char] && windowMap[char] === targetMap[char]) {
      formed++;
    }
    
    // Try to shrink window from left while valid
    while (formed === required) {
      const windowLen = right - left + 1;
      
      // Update minimum if smaller window found
      if (windowLen < minLen) {
        minLen = windowLen;
        minStart = left;
      }
      
      // Try removing leftmost character
      const leftChar = s[left];
      windowMap[leftChar]--;
      
      // Check if removing this char makes window invalid
      if (targetMap[leftChar] && 
          windowMap[leftChar] < targetMap[leftChar]) {
        formed--;
      }
      
      left++;
    }
  }
  
  return minStart === -1 ? "" : s.substring(minStart, minStart + minLen);
}

// Example usage
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t));  // Output: "BANC"`}
          />
        </CardContent>
      </Card>

      {/* Important Edge Cases */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            Important Edge Cases
          </CardTitle>
          <CardDescription>Critical scenarios to consider</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">1️⃣</span> No Valid Window
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When S doesn't contain all characters from T, return empty string <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">""</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "a", t = "aa"<br/>
                  Output: "" (not enough 'a's)
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">2️⃣</span> T Longer Than S
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                If target string is longer than source, immediately return empty string.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "ab", t = "abc"<br/>
                  Output: ""
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">3️⃣</span> Duplicate Characters in T
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                Must satisfy frequency requirements. If T = "AA", window must have at least 2 A's.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "ABC", t = "AA"<br/>
                  Output: "" (only one 'A')
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">4️⃣</span> Entire String is Answer
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When no characters can be removed, entire S is the minimum window.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "ABC", t = "ABC"<br/>
                  Output: "ABC"
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">5️⃣</span> Case Sensitivity
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                'A' and 'a' are considered different characters.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "aAb", t = "A"<br/>
                  Output: "A" (not "a")
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Related Problems
          </CardTitle>
          <CardDescription>Similar problems to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Longest Substring Without Repeating Characters
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Similar sliding window pattern but finding maximum instead of minimum.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Medium</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Find All Anagrams in a String
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Similar HashMap technique to find all permutations of pattern in string.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Medium</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Substring with Concatenation of All Words
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    More complex version with multiple words instead of characters.
                  </p>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded">Hard</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Smallest Range Covering Elements from K Lists
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Similar concept applied to multiple sorted lists instead of strings.
                  </p>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded">Hard</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Key Takeaways
          </CardTitle>
          <CardDescription>Important concepts to remember</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Two HashMaps Pattern</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Use <strong>targetMap</strong> to store requirements and <strong>windowMap</strong> to track current window. This makes checking validity efficient.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">The "formed" Counter Optimization</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Instead of checking all characters every time, use a <code className="bg-green-100 dark:bg-green-900 px-1 rounded text-xs">formed</code> counter to track satisfied unique characters. This reduces checks from O(m) to O(1).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Expand → Shrink Strategy</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Always expand window first with <strong>right pointer</strong>. When valid, aggressively shrink from <strong>left</strong> to find minimum. This ensures we don't miss any valid windows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Frequency-Based Validation</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Check <code className="bg-green-100 dark:bg-green-900 px-1 rounded text-xs">windowMap[char] === targetMap[char]</code> to know when a character's requirement is exactly met. Increment <strong>formed</strong> only at exact match.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">O(m + n) Time Complexity</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Building target map takes O(n). Each character in S is visited at most twice (right pointer once, left pointer once), giving O(m) for main loop. Total: O(m + n).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Master This Pattern!</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  This is one of the <strong>hardest sliding window problems</strong>. Once you understand this, simpler variants become much easier. Focus on the "formed counter" technique!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
