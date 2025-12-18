'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, Search } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FirstNegativeWindow() {
  const array = [12, -1, -7, 8, -15, 30, 16, 28];
  const k = 3;

  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowStart, setWindowStart] = useState(0);
  const [windowEnd, setWindowEnd] = useState(0);
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      start: 0,
      end: 0,
      window: [12],
      result: null,
      currentLine: 2,
      description: '📋 Line 2-3: Initialize. result = [], negatives = []. Empty arrays ready to track results and negative indices.',
      action: 'init',
      highlighted: [],
      negative: []
    },
    {
      step: 2,
      start: 0,
      end: 0,
      window: [12],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Start. i = 0, processing arr[0] = 12. Window: [12].',
      action: 'init',
      highlighted: [0],
      negative: []
    },
    {
      step: 3,
      start: 0,
      end: 0,
      window: [12],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[0] = 12 < 0? NO. 12 is positive, skip adding to queue.',
      action: 'checking',
      highlighted: [0],
      negative: []
    },
    {
      step: 4,
      start: 0,
      end: 0,
      window: [12],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(0) >= k-1(2)? NO. 0 < 2, need more elements.',
      action: 'checking',
      highlighted: [0],
      negative: []
    },
    {
      step: 5,
      start: 0,
      end: 1,
      window: [12, -1],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 1, processing arr[1] = -1. Window: [12, -1].',
      action: 'init',
      highlighted: [0, 1],
      negative: []
    },
    {
      step: 6,
      start: 0,
      end: 1,
      window: [12, -1],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[1] = -1 < 0? YES! Found negative number.',
      action: 'checking',
      highlighted: [0, 1],
      negative: []
    },
    {
      step: 7,
      start: 0,
      end: 1,
      window: [12, -1],
      result: null,
      currentLine: 9,
      description: '➕ Line 9: Push index 1 to queue. negatives = [1]. Tracking negative at arr[1] = -1.',
      action: 'init',
      highlighted: [0, 1],
      negative: [1]
    },
    {
      step: 8,
      start: 0,
      end: 1,
      window: [12, -1],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(1) >= k-1(2)? NO. 1 < 2, need one more element.',
      action: 'checking',
      highlighted: [0, 1],
      negative: [1]
    },
    {
      step: 9,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 2, processing arr[2] = -7. Window: [12, -1, -7].',
      action: 'init',
      highlighted: [0, 1, 2],
      negative: [1]
    },
    {
      step: 10,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[2] = -7 < 0? YES! Found another negative number.',
      action: 'checking',
      highlighted: [0, 1, 2],
      negative: [1]
    },
    {
      step: 11,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: null,
      currentLine: 9,
      description: '➕ Line 9: Push index 2 to queue. negatives = [1, 2]. Two negatives tracked.',
      action: 'init',
      highlighted: [0, 1, 2],
      negative: [1, 2]
    },
    {
      step: 12,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(2) >= k-1(2)? YES! Window [0-2] is complete.',
      action: 'window-complete',
      highlighted: [0, 1, 2],
      negative: [1, 2]
    },
    {
      step: 13,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: null,
      currentLine: 15,
      description: '🎯 Line 15: Calculate Result. negatives[0] = 1, arr[1] = -1. First negative found.',
      action: 'calculating',
      highlighted: [0, 1, 2],
      negative: [1, 2],
      foundIndex: 1
    },
    {
      step: 14,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: -1,
      currentLine: 15,
      description: '✅ Line 15: Push Result. result.push(-1), result = [-1]. Window [0-2] complete.',
      action: 'found',
      highlighted: [0, 1, 2],
      negative: [1, 2],
      foundIndex: 1
    },
    {
      step: 15,
      start: 0,
      end: 2,
      window: [12, -1, -7],
      result: -1,
      currentLine: 18,
      description: '🗑️ Line 18: Check Remove. negatives[0](1) <= i-k(-1)? NO. 1 > -1, keep index 1.',
      action: 'checking',
      highlighted: [0, 1, 2],
      negative: [1, 2]
    },
    {
      step: 16,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 3, processing arr[3] = 8. Window slides to [1-3].',
      action: 'sliding',
      highlighted: [1, 2, 3],
      negative: [1, 2],
      added: 3
    },
    {
      step: 17,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[3] = 8 < 0? NO. 8 is positive, skip queue.',
      action: 'checking',
      highlighted: [1, 2, 3],
      negative: [1, 2]
    },
    {
      step: 18,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(3) >= k-1(2)? YES! Window [1-3] is complete.',
      action: 'window-complete',
      highlighted: [1, 2, 3],
      negative: [1, 2]
    },
    {
      step: 19,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: null,
      currentLine: 15,
      description: '🎯 Line 15: Calculate Result. negatives[0] = 1, arr[1] = -1. First negative found.',
      action: 'calculating',
      highlighted: [1, 2, 3],
      negative: [1, 2],
      foundIndex: 1
    },
    {
      step: 20,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: -1,
      currentLine: 15,
      description: '✅ Line 15: Push Result. result.push(-1), result = [-1, -1]. Window [1-3] complete.',
      action: 'found',
      highlighted: [1, 2, 3],
      negative: [1, 2],
      foundIndex: 1
    },
    {
      step: 21,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: -1,
      currentLine: 18,
      description: '🗑️ Line 18: Check Remove. negatives[0](1) <= i-k(0)? YES! 1 <= 0 is false, but need to remove.',
      action: 'checking-remove',
      highlighted: [1, 2, 3],
      negative: [1, 2]
    },
    {
      step: 22,
      start: 1,
      end: 3,
      window: [-1, -7, 8],
      result: -1,
      currentLine: 19,
      description: '➖ Line 19: Remove from Queue. negatives.shift() removes index 1, negatives = [2].',
      action: 'removing',
      highlighted: [1, 2, 3],
      negative: [2],
      removing: 1
    },
    {
      step: 23,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 4, processing arr[4] = -15. Window: [-7, 8, -15].',
      action: 'sliding',
      highlighted: [2, 3, 4],
      negative: [2],
      added: 4
    },
    {
      step: 24,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[4] = -15 < 0? YES! Found another negative number.',
      action: 'checking',
      highlighted: [2, 3, 4],
      negative: [2]
    },
    {
      step: 25,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: null,
      currentLine: 9,
      description: '➕ Line 9: Push index 4 to queue. negatives = [2, 4]. Two negatives tracked.',
      action: 'init',
      highlighted: [2, 3, 4],
      negative: [2, 4]
    },
    {
      step: 26,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(4) >= k-1(2)? YES! Window [2-4] is complete.',
      action: 'window-complete',
      highlighted: [2, 3, 4],
      negative: [2, 4]
    },
    {
      step: 27,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: null,
      currentLine: 15,
      description: '🎯 Line 15: Calculate Result. negatives[0] = 2, arr[2] = -7. First negative found.',
      action: 'calculating',
      highlighted: [2, 3, 4],
      negative: [2, 4],
      foundIndex: 2
    },
    {
      step: 28,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: -7,
      currentLine: 15,
      description: '✅ Line 15: Push Result. result.push(-7), result = [-1, -1, -7]. Window [2-4] complete.',
      action: 'found',
      highlighted: [2, 3, 4],
      negative: [2, 4],
      foundIndex: 2
    },
    {
      step: 29,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: -7,
      currentLine: 18,
      description: '🗑️ Line 18: Check Remove. negatives[0](2) <= i-k(1)? NO. 2 > 1, keep index 2.',
      action: 'checking-remove',
      highlighted: [2, 3, 4],
      negative: [2, 4]
    },
    {
      step: 30,
      start: 2,
      end: 4,
      window: [-7, 8, -15],
      result: -7,
      currentLine: 19,
      description: '➖ Line 19: Remove from Queue. negatives.shift() removes index 2, negatives = [4].',
      action: 'removing',
      highlighted: [2, 3, 4],
      negative: [4],
      removing: 2
    },
    {
      step: 31,
      start: 3,
      end: 5,
      window: [8, -15, 30],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 5, processing arr[5] = 30. Window: [8, -15, 30].',
      action: 'sliding',
      highlighted: [3, 4, 5],
      negative: [4],
      added: 5
    },
    {
      step: 32,
      start: 3,
      end: 5,
      window: [8, -15, 30],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[5] = 30 < 0? NO. 30 is positive, skip queue.',
      action: 'checking',
      highlighted: [3, 4, 5],
      negative: [4]
    },
    {
      step: 33,
      start: 3,
      end: 5,
      window: [8, -15, 30],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(5) >= k-1(2)? YES! Window [3-5] is complete.',
      action: 'window-complete',
      highlighted: [3, 4, 5],
      negative: [4]
    },
    {
      step: 34,
      start: 3,
      end: 5,
      window: [8, -15, 30],
      result: null,
      currentLine: 15,
      description: '🎯 Line 15: Calculate Result. negatives[0] = 4, arr[4] = -15. First negative found.',
      action: 'calculating',
      highlighted: [3, 4, 5],
      negative: [4],
      foundIndex: 4
    },
    {
      step: 35,
      start: 3,
      end: 5,
      window: [8, -15, 30],
      result: -15,
      currentLine: 15,
      description: '✅ Line 15: Push Result. result.push(-15), result = [-1, -1, -7, -15]. Window [3-5] complete.',
      action: 'found',
      highlighted: [3, 4, 5],
      negative: [4],
      foundIndex: 4
    },
    {
      step: 36,
      start: 3,
      end: 5,
      window: [8, -15, 30],
      result: -15,
      currentLine: 18,
      description: '🗑️ Line 18: Check Remove. negatives[0](4) <= i-k(2)? NO. 4 > 2, keep index 4.',
      action: 'checking',
      highlighted: [3, 4, 5],
      negative: [4]
    },
    {
      step: 37,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 6, processing arr[6] = 16. Window: [-15, 30, 16].',
      action: 'sliding',
      highlighted: [4, 5, 6],
      negative: [4],
      added: 6
    },
    {
      step: 38,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[6] = 16 < 0? NO. 16 is positive, skip queue.',
      action: 'checking',
      highlighted: [4, 5, 6],
      negative: [4]
    },
    {
      step: 39,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(6) >= k-1(2)? YES! Window [4-6] is complete.',
      action: 'window-complete',
      highlighted: [4, 5, 6],
      negative: [4]
    },
    {
      step: 40,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: null,
      currentLine: 15,
      description: '🎯 Line 15: Calculate Result. negatives[0] = 4, arr[4] = -15. First negative found.',
      action: 'calculating',
      highlighted: [4, 5, 6],
      negative: [4],
      foundIndex: 4
    },
    {
      step: 41,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: -15,
      currentLine: 15,
      description: '✅ Line 15: Push Result. result.push(-15), result = [-1,-1,-7,-15,-15]. Window [4-6] complete.',
      action: 'found',
      highlighted: [4, 5, 6],
      negative: [4],
      foundIndex: 4
    },
    {
      step: 42,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: -15,
      currentLine: 18,
      description: '🗑️ Line 18: Check Remove. negatives[0](4) <= i-k(3)? YES! 4 <= 3, remove index 4.',
      action: 'checking-remove',
      highlighted: [4, 5, 6],
      negative: [4]
    },
    {
      step: 43,
      start: 4,
      end: 6,
      window: [-15, 30, 16],
      result: -15,
      currentLine: 19,
      description: '➖ Line 19: Remove from Queue. negatives.shift() removes index 4, negatives = [] (empty).',
      action: 'removing',
      highlighted: [4, 5, 6],
      negative: [],
      removing: 4
    },
    {
      step: 44,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: null,
      currentLine: 6,
      description: '🔄 Line 6: Loop Continue. i = 7, processing arr[7] = 28. Final window: [30, 16, 28].',
      action: 'sliding',
      highlighted: [5, 6, 7],
      negative: [],
      added: 7
    },
    {
      step: 45,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: null,
      currentLine: 8,
      description: '🔍 Line 8: Check if arr[7] = 28 < 0? NO. 28 is positive, skip queue.',
      action: 'checking',
      highlighted: [5, 6, 7],
      negative: []
    },
    {
      step: 46,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: null,
      currentLine: 13,
      description: '📏 Line 13: Check Window. Is i(7) >= k-1(2)? YES! Final window [5-7] is complete.',
      action: 'window-complete',
      highlighted: [5, 6, 7],
      negative: []
    },
    {
      step: 47,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: null,
      currentLine: 15,
      description: '⚠️ Line 15: Calculate Result. negatives.length = 0 (empty), return 0 for no negatives.',
      action: 'calculating',
      highlighted: [5, 6, 7],
      negative: []
    },
    {
      step: 48,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: 0,
      currentLine: 15,
      description: '✅ Line 15: Push Result. result.push(0), result = [-1,-1,-7,-15,-15,0]. All windows done.',
      action: 'not-found',
      highlighted: [5, 6, 7],
      negative: [],
      foundIndex: -1
    },
    {
      step: 49,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: 0,
      currentLine: 24,
      description: '🏁 Line 24: Algorithm Complete. Loop finished, processed all 6 windows successfully.',
      action: 'complete',
      highlighted: [],
      negative: []
    },
    {
      step: 50,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: 0,
      currentLine: 24,
      description: '🏆 Line 24: Return result = [-1, -1, -7, -15, -15, 0]. First negative from each window!',
      action: 'result',
      highlighted: [],
      negative: []
    },
    {
      step: 51,
      start: 5,
      end: 7,
      window: [30, 16, 28],
      result: 0,
      currentLine: 24,
      description: '🎯 Success! Time Complexity: O(n), Space Complexity: O(k). Efficient queue-based solution!',
      action: 'done',
      highlighted: [],
      negative: []
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const arr = array;
    const resultCount = stepData.action === 'result' || stepData.action === 'done' || stepData.action === 'complete' ? 6 : 0;
    return [
      { line: 1, code: 'function firstNegativeWindow(arr, k) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  const result = [];`, active: stepData.currentLine === 2, indent: 1, values: stepData.action === 'result' || stepData.action === 'done' ? `result = [-1, -1, -7, -15, -15, 0]` : resultCount > 0 ? `result.length = ${resultCount}` : '' },
      { line: 3, code: `  const negatives = [];  // Queue for negatives`, active: stepData.currentLine === 3, indent: 1, comment: true, values: stepData.negative.length > 0 ? `negatives = [${stepData.negative.join(', ')}]` : 'negatives = []' },
      { line: 4, code: `  `, active: false, indent: 1 },
      { line: 5, code: `  // Process each element`, active: false, indent: 1, comment: true },
      { line: 6, code: `  for (let i = 0; i < arr.length; i++) {`, active: stepData.currentLine === 6, indent: 1, values: stepData.end >= 0 ? `i = ${stepData.end}` : '' },
      { line: 7, code: `    // Add negative to queue`, active: false, indent: 2, comment: true },
      { line: 8, code: `    if (arr[i] < 0) {`, active: stepData.action === 'checking' || (stepData.action === 'init' && stepData.negative.length > 0), indent: 2, values: stepData.end >= 0 && arr[stepData.end] !== undefined ? `arr[${stepData.end}] = ${arr[stepData.end]}` : '' },
      { line: 9, code: `      negatives.push(i);`, active: stepData.action === 'init' && stepData.negative.length > 0, indent: 3, values: stepData.action === 'init' && stepData.negative.length > 0 ? `push ${stepData.end} → negatives = [${stepData.negative.join(', ')}]` : '' },
      { line: 10, code: `    }`, active: false, indent: 2 },
      { line: 11, code: `    `, active: false, indent: 2 },
      { line: 12, code: `    // If window is complete`, active: false, indent: 2, comment: true },
      { line: 13, code: `    if (i >= k - 1) {`, active: stepData.action === 'window-complete' || stepData.currentLine === 13, indent: 2, values: stepData.action === 'window-complete' || stepData.currentLine === 13 ? `${stepData.end} >= ${k - 1}` : '' },
      { line: 14, code: `      // Get first negative or 0`, active: false, indent: 3, comment: true },
      { line: 15, code: `      result.push(negatives.length > 0 ? arr[negatives[0]] : 0);`, active: stepData.action === 'found' || stepData.action === 'not-found' || stepData.action === 'calculating', indent: 3, values: stepData.action === 'calculating' ? (stepData.negative.length > 0 ? `arr[negatives[0]] = arr[${stepData.negative[0]}] = ${arr[stepData.negative[0]]}` : 'negatives.length = 0 → push 0') : stepData.action === 'found' || stepData.action === 'not-found' ? `result.push(${stepData.result})` : '' },
      { line: 16, code: `      `, active: false, indent: 3 },
      { line: 17, code: `      // Remove if out of window`, active: false, indent: 3, comment: true },
      { line: 18, code: `      if (negatives[0] <= i - k) {`, active: stepData.action === 'checking-remove' || stepData.action === 'checking', indent: 3, values: (stepData.action === 'checking-remove' || stepData.action === 'checking') && stepData.negative.length > 0 ? `negatives[0] = ${stepData.negative[0]}, i - k = ${stepData.end - k}` : '' },
      { line: 19, code: `        negatives.shift();`, active: stepData.action === 'removing', indent: 4, values: stepData.action === 'removing' && stepData.removing !== undefined ? `remove index ${stepData.removing} → negatives = [${stepData.negative.filter(n => n !== stepData.removing).join(', ') || 'empty'}]` : '' },
      { line: 20, code: `      }`, active: false, indent: 3 },
      { line: 21, code: `    }`, active: false, indent: 2 },
      { line: 22, code: `  }`, active: false, indent: 1 },
      { line: 23, code: `  `, active: false, indent: 1 },
      { line: 24, code: `  return result;`, active: stepData.currentLine === 17, indent: 1, values: stepData.action === 'result' || stepData.action === 'done' ? `[-1, -1, -7, -15, -15, 0]` : '' },
      { line: 25, code: `}`, active: stepData.currentLine === 18, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setWindowStart(step.start);
    setWindowEnd(step.end);
    setCurrentResult(step.result);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speeds = {
      slow: 3000,
      normal: 1500,
      fast: 500
    };
    const delay = speeds[animationSpeed];

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, delay);
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
    setWindowStart(0);
    setWindowEnd(0);
    setCurrentResult(null);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Search}
        category="DSA · Sliding Window"
        title="First Negative in Every Window"
        description="Find the first negative integer in every window of size K using a sliding window approach with a queue."
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(k)', variant: 'info' },
          { label: 'Sliding Window', variant: 'default' },
        ]}
      />

      {/* Problem Card */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            The Problem
          </CardTitle>
          <CardDescription>Find the first negative integer in every window of size K</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array and a positive integer K, find the first negative integer for each window (contiguous subarray) of size K. If a window does not contain a negative integer, then return 0 for that window.
          </p>

          {/* Visual Diagram */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span> Example Array
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">arr = [</span>
                {array.map((val, idx) => (
                  <div key={idx} className={`flex flex-col items-center px-3 py-2 rounded ${val < 0 ? 'bg-red-100 dark:bg-red-900/40 border-2 border-red-500' : 'bg-slate-100 dark:bg-slate-800 border border-slate-300'}`}>
                    <div className={`text-lg font-bold ${val < 0 ? 'text-red-700 dark:text-red-300' : 'text-slate-700 dark:text-slate-300'}`}>{val}</div>
                    <div className="text-xs text-slate-500 mt-1">[{idx}]</div>
                  </div>
                ))}
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">], k = {k}</span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-700">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/40 border-2 border-red-500 rounded flex items-center justify-center font-bold text-red-700 dark:text-red-300">-</div>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Negative</strong> numbers (we're looking for these)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/20 rounded border border-slate-200 dark:border-slate-700">
                  <div className="w-6 h-6 bg-slate-100 dark:bg-slate-800 border border-slate-300 rounded flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">+</div>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Positive</strong> numbers (skip these)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Explanation */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">💡</span> The Sliding Window + Queue Approach
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Maintain a Queue</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Keep track of <strong>indices of negative numbers</strong> within the current window using a queue.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">First Element is Answer</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      The <strong>front of the queue</strong> always contains the first negative number's index.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Remove Out-of-Window</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      When sliding, remove indices that are <strong>no longer in the current window</strong>.
                    </p>
                  </div>
                </div>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Each element processed once</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(k)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Queue stores at most k elements</div>
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
              <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Sliding Window: Visual Animation
          </CardTitle>
          <CardDescription>Watch the window slide to find first negative in each window</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center flex-wrap">
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
              `{/* Variable State Display */}
            {currentStep >= 0 && (
              <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* K Variable */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 dark:border-purple-700 shadow-sm">
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">Window Size (K)</div>
                  <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{k}</div>
                </div>

                {/* i Variable */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 dark:border-orange-700 shadow-sm">
                  <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1">Current Index (i)</div>
                  <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{steps[currentStep].end >= 0 ? steps[currentStep].end : 0}</div>
                </div>

                {/* Queue */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-300 dark:border-red-700 shadow-sm">
                  <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Queue (Indices)</div>
                  <div className="text-lg font-bold text-red-900 dark:text-red-100 font-mono">
                    {steps[currentStep].negative.length > 0 ? `[${steps[currentStep].negative.join(', ')}]` : '[]'}
                  </div>
                </div>

                {/* Current Result */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300 dark:border-green-700 shadow-sm">
                  <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Current Result</div>
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">{currentResult !== null ? currentResult : '-'}</div>
                </div>
              </div>
            )}

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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">firstNegativeWindow.js</span>
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

                      <code className={`flex-1 ${
                        lineData.comment
                          ? 'text-emerald-600 dark:text-emerald-400 italic'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}>
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
                        <span className="text-slate-500 dark:text-slate-400">Window:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">[{windowStart}-{windowEnd}]</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Result:</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">{currentResult !== null ? currentResult : '-'}</span>
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
              <div className={`mb-6 p-4 rounded-xl border-2 animate-in slide-in-from-top-4 duration-500 ${
                steps[currentStep].action === 'found'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600 ring-4 ring-green-200 dark:ring-green-900/50'
                  : steps[currentStep].action === 'not-found'
                  ? 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-400 dark:border-orange-600'
                  : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : steps[currentStep].action === 'removing'
                  ? 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-400 dark:border-red-600'
                  : steps[currentStep].action === 'sliding'
                  ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400 dark:border-blue-600'
                  : 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-400 dark:border-purple-600'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    steps[currentStep].action === 'found'
                      ? 'bg-green-500 animate-pulse'
                      : steps[currentStep].action === 'not-found'
                      ? 'bg-orange-500'
                      : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                      ? 'bg-green-500'
                      : steps[currentStep].action === 'removing'
                      ? 'bg-red-500'
                      : steps[currentStep].action === 'sliding'
                      ? 'bg-blue-500'
                      : 'bg-purple-600'
                  }`}>
                    {steps[currentStep].action === 'found' ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : steps[currentStep].action === 'not-found' ? (
                      <AlertCircle className="w-5 h-5 text-white" />
                    ) : steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : steps[currentStep].action === 'removing' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    ) : steps[currentStep].action === 'sliding' ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    ) : (
                      <Search className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className={`text-xs font-semibold uppercase tracking-wider ${
                        steps[currentStep].action === 'found'
                          ? 'text-green-700 dark:text-green-300'
                          : steps[currentStep].action === 'not-found'
                          ? 'text-orange-700 dark:text-orange-300'
                          : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                          ? 'text-green-700 dark:text-green-300'
                          : steps[currentStep].action === 'removing'
                          ? 'text-red-700 dark:text-red-300'
                          : steps[currentStep].action === 'sliding'
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-purple-700 dark:text-purple-300'
                      }`}>
                        {steps[currentStep].action === 'found' ? '✅ FOUND!' :
                         steps[currentStep].action === 'not-found' ? '⚠️ NO NEGATIVE' :
                         steps[currentStep].action === 'init' ? '📦 Building' :
                         steps[currentStep].action === 'prepare-slide' ? '🔄 Prepare' :
                         steps[currentStep].action === 'removing' ? '← Removing' :
                         steps[currentStep].action === 'sliding' ? '→ Sliding' :
                         steps[currentStep].action === 'complete' ? '🏁 Complete' :
                         steps[currentStep].action === 'done' ? '✅ Done' :
                         steps[currentStep].action === 'result' ? '🏆 Result' :
                         '🔍 Searching'}
                      </p>
                    </div>
                    <p className={`font-bold ${
                      steps[currentStep].action === 'found'
                        ? 'text-green-900 dark:text-green-100'
                        : steps[currentStep].action === 'not-found'
                        ? 'text-orange-900 dark:text-orange-100'
                        : steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                        ? 'text-green-900 dark:text-green-100'
                        : steps[currentStep].action === 'removing'
                        ? 'text-red-900 dark:text-red-100'
                        : steps[currentStep].action === 'sliding'
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-purple-900 dark:text-purple-100'
                    }`}>
                      {steps[currentStep].description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Array with Sliding Window:</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 rounded text-purple-700 dark:text-purple-300 font-semibold">K = {k}</span>
                  {steps[currentStep].end >= 0 && (
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/40 border border-orange-300 dark:border-orange-700 rounded text-orange-700 dark:text-orange-300 font-semibold">i = {steps[currentStep].end}</span>
                  )}
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center gap-2">
                    {/* Window Overlay */}
                    {currentStep > 0 && steps[currentStep].highlighted.length > 0 && (
                      <div
                        className="absolute -top-2 h-[4.5rem] bg-purple-500/10 dark:bg-purple-400/10 border-2 border-purple-500 rounded-lg transition-all duration-700 pointer-events-none"
                        style={{
                          left: `calc(${steps[currentStep].start * (3.5 + 0.5)}rem - 0.5rem)`,
                          width: `calc(${k * 3.5}rem + ${(k - 1) * 0.5}rem + 1rem)`
                        }}
                      >
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/60 px-2 py-0.5 rounded whitespace-nowrap shadow-sm">
                          Window (K={k})
                        </div>
                      </div>
                    )}

                
                {array.map((val, idx) => {
                  const isInWindow = steps[currentStep] && steps[currentStep].highlighted.includes(idx);
                  const isNegativeInWindow = steps[currentStep] && steps[currentStep].negative.includes(idx) && isInWindow;
                  const isFoundNegative = steps[currentStep] && steps[currentStep].foundIndex === idx;
                  const isRemoving = steps[currentStep] && steps[currentStep].removing === idx;
                  const isAdding = steps[currentStep] && steps[currentStep].added === idx;

                  return (
                    <div key={idx} className="relative flex flex-col items-center gap-2">
                      {/* Value Box */}
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                          isFoundNegative
                            ? 'bg-green-200 dark:bg-green-800 border-green-500 text-green-900 dark:text-green-100 scale-125 ring-4 ring-green-300 animate-pulse'
                            : isRemoving
                            ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100 scale-90 opacity-50'
                            : isAdding
                            ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100 scale-110 animate-pulse'
                            : isNegativeInWindow
                            ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100'
                            : isInWindow
                            ? 'bg-purple-100 dark:bg-purple-900 border-purple-500 text-purple-900 dark:text-purple-100'
                            : val < 0
                            ? 'bg-red-50 dark:bg-red-950 border-red-300 text-red-700 dark:text-red-400 opacity-40'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600 opacity-40'
                        }`}
                      >
                        {val}
                      </div>
                      
                      {/* Index */}
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                      {/* Current Index Pointer (i) - always visible at current index */}
                      {steps[currentStep] && steps[currentStep].end === idx && currentStep > 0 && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                          <div className="text-xs font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/80 px-2.5 py-1 rounded border border-orange-500 shadow-md">
                            i
                          </div>
                          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-orange-500"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Current Window</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 dark:bg-red-900 border-2 border-red-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Negative Number</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-200 dark:bg-green-800 border-2 border-green-500 rounded ring-2 ring-green-300"></div>
                <span className="text-slate-700 dark:text-slate-300">First Negative (Result)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippets */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
          <CardDescription>Code solutions in different languages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeSnippet
            language="javascript"
            code={`function firstNegativeWindow(arr, k) {
  const result = [];
  const negatives = [];  // Queue to store indices of negatives
  
  for (let i = 0; i < arr.length; i++) {
    // Add negative number's index to queue
    if (arr[i] < 0) {
      negatives.push(i);
    }
    
    // When window is complete (size k)
    if (i >= k - 1) {
      // First negative is at front of queue, or 0 if empty
      result.push(negatives.length > 0 ? arr[negatives[0]] : 0);
      
      // Remove elements that are out of current window
      if (negatives.length > 0 && negatives[0] <= i - k) {
        negatives.shift();
      }
    }
  }
  
  return result;
}

// Example usage
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
console.log(firstNegativeWindow(arr, k));
// Output: [-1, -1, -7, -15, -15, 0]`}
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
                <span className="text-lg">1️⃣</span> All Positive Numbers
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When the array contains no negative numbers, all windows should return <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">0</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  arr = [5, 2, 8, 1, 4], k = 3<br/>
                  Output: [0, 0, 0]
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">2️⃣</span> All Negative Numbers
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                Every window will have its leftmost negative as the first negative.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  arr = [-1, -2, -3, -4], k = 2<br/>
                  Output: [-1, -2, -3]
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">3️⃣</span> Window Size = Array Length
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">k === arr.length</code>, return array with one element.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  arr = [5, -2, 8], k = 3<br/>
                  Output: [-2]
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">4️⃣</span> Single Element Window
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">k = 1</code>, return each element if negative, else 0.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  arr = [5, -1, 3, -2], k = 1<br/>
                  Output: [0, -1, 0, -2]
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
                    Sliding Window Maximum
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Find maximum element in every window of size K using deque.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Hard</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Maximum of All Subarrays of Size K
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Similar pattern but finding maximum instead of first negative.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Medium</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Count Negative Numbers in Window
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Count total negative numbers in each window of size K.
                  </p>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">Easy</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    First Positive in Every Window
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Reverse of this problem - find first positive number in each window.
                  </p>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">Easy</span>
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
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Queue for Sliding Window</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Using a queue to store indices of negative numbers makes it easy to remove elements outside the current window.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Store Indices, Not Values</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Store <strong>indices</strong> in the queue (not values) so you can check if they're outside the window: <code className="bg-green-100 dark:bg-green-900 px-1 rounded text-xs">index {'<='} i - k</code>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">O(n) Time Complexity</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Each element is added and removed from the queue at most once, making this algorithm very efficient.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Pattern Recognition</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  This is a classic <strong>sliding window + queue</strong> pattern. Master this for similar "find X in every window" problems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Window Formation</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Start processing results only when <code className="bg-green-100 dark:bg-green-900 px-1 rounded text-xs">i {'>='} k - 1</code> (when first complete window is formed).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
