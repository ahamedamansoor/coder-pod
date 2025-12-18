'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, CheckCheck, Search, ArrowRight, Minimize2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LongestSubstringWithoutRepeating() {
  const str = "abcabcbb";
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowStart, setWindowStart] = useState(0);
  const [windowEnd, setWindowEnd] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [currentLength, setCurrentLength] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      start: 0,
      end: 0,
      charSet: new Set(),
      maxLen: 0,
      currentLen: 0,
      currentLine: 2,
      description: '📋 Line 2-4: Initialize. maxLength = 0, left = 0, charSet = {}. Ready to track unique characters.',
      action: 'init',
      highlighted: [],
      inWindow: []
    },
    {
      step: 2,
      start: 0,
      end: 0,
      charSet: new Set(),
      maxLen: 0,
      currentLen: 0,
      currentLine: 6,
      description: '🔄 Line 6: Start Loop. right = 0, processing first character s[0] = "a".',
      action: 'init',
      highlighted: [0],
      inWindow: []
    },
    {
      step: 3,
      start: 0,
      end: 0,
      charSet: new Set(),
      maxLen: 0,
      currentLen: 0,
      currentLine: 8,
      description: '🔍 Line 8: Check Duplicate. charSet.has("a")? NO. No duplicates, proceed to add.',
      action: 'init',
      highlighted: [0],
      inWindow: []
    },
    {
      step: 4,
      start: 0,
      end: 0,
      charSet: new Set(['a']),
      maxLen: 1,
      currentLen: 1,
      currentLine: 14,
      description: '➕ Line 14: Add Character. s[0] = "a", charSet.add("a"). First character added, charSet = {"a"}.',
      action: 'add',
      highlighted: [0],
      inWindow: [0],
      addedChar: 'a'
    },
    {
      step: 5,
      start: 0,
      end: 0,
      charSet: new Set(['a']),
      maxLen: 1,
      currentLen: 1,
      currentLine: 15,
      description: '📊 Line 15: Update Max. maxLength = max(0, 1) = 1. Current window: "a", length = 1.',
      action: 'update-max',
      highlighted: [0],
      inWindow: [0]
    },
    {
      step: 6,
      start: 0,
      end: 1,
      charSet: new Set(['a']),
      maxLen: 1,
      currentLen: 1,
      currentLine: 6,
      description: '🔄 Line 6: Next Iteration. right = 1, processing s[1] = "b". Window expands right.',
      action: 'init',
      highlighted: [0, 1],
      inWindow: [0]
    },
    {
      step: 7,
      start: 0,
      end: 1,
      charSet: new Set(['a']),
      maxLen: 1,
      currentLen: 1,
      currentLine: 8,
      description: '🔍 Line 8: Check Duplicate. charSet.has("b")? NO. No duplicates, proceed to add.',
      action: 'init',
      highlighted: [0, 1],
      inWindow: [0]
    },
    {
      step: 8,
      start: 0,
      end: 1,
      charSet: new Set(['a', 'b']),
      maxLen: 2,
      currentLen: 2,
      currentLine: 14,
      description: '➕ Line 14: Add Character. s[1] = "b", charSet.add("b"). No duplicates, charSet = {"a", "b"}.',
      action: 'add',
      highlighted: [0, 1],
      inWindow: [0, 1],
      addedChar: 'b'
    },
    {
      step: 9,
      start: 0,
      end: 1,
      charSet: new Set(['a', 'b']),
      maxLen: 2,
      currentLen: 2,
      currentLine: 15,
      description: '📊 Line 15: Update Max. maxLength = max(1, 2) = 2. Current window: "ab", length = 2.',
      action: 'update-max',
      highlighted: [0, 1],
      inWindow: [0, 1]
    },
    {
      step: 10,
      start: 0,
      end: 2,
      charSet: new Set(['a', 'b']),
      maxLen: 2,
      currentLen: 2,
      currentLine: 6,
      description: '🔄 Line 6: Next Iteration. right = 2, processing s[2] = "c". Window expands right.',
      action: 'init',
      highlighted: [0, 1, 2],
      inWindow: [0, 1]
    },
    {
      step: 11,
      start: 0,
      end: 2,
      charSet: new Set(['a', 'b']),
      maxLen: 2,
      currentLen: 2,
      currentLine: 8,
      description: '🔍 Line 8: Check Duplicate. charSet.has("c")? NO. No duplicates, proceed to add.',
      action: 'init',
      highlighted: [0, 1, 2],
      inWindow: [0, 1]
    },
    {
      step: 12,
      start: 0,
      end: 2,
      charSet: new Set(['a', 'b', 'c']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 14,
      description: '➕ Line 14: Add Character. s[2] = "c", charSet.add("c"). No duplicates, charSet = {"a", "b", "c"}.',
      action: 'add',
      highlighted: [0, 1, 2],
      inWindow: [0, 1, 2],
      addedChar: 'c'
    },
    {
      step: 13,
      start: 0,
      end: 2,
      charSet: new Set(['a', 'b', 'c']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 15,
      description: '📊 Line 15: Update Max. maxLength = max(2, 3) = 3. Current window: "abc", length = 3. New max!',
      action: 'update-max',
      highlighted: [0, 1, 2],
      inWindow: [0, 1, 2]
    },
    {
      step: 14,
      start: 0,
      end: 3,
      charSet: new Set(['a', 'b', 'c']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 6,
      description: '🔄 Line 6: Next Iteration. right = 3, processing s[3] = "a". Check for duplicate.',
      action: 'init',
      highlighted: [0, 1, 2, 3],
      inWindow: [0, 1, 2]
    },
    {
      step: 15,
      start: 0,
      end: 3,
      charSet: new Set(['a', 'b', 'c']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 8,
      description: '⚠️ Line 8: Duplicate Detected! charSet.has("a") = true. Enter while loop to remove.',
      action: 'duplicate',
      highlighted: [0, 1, 2, 3],
      inWindow: [0, 1, 2],
      duplicateChar: 'a',
      duplicateIndex: 3
    },
    {
      step: 16,
      start: 0,
      end: 3,
      charSet: new Set(['b', 'c']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 9,
      description: '➖ Line 9: Remove Character. charSet.delete(s[0] = "a"), left++ (left = 1). charSet = {"b", "c"}.',
      action: 'remove',
      highlighted: [1, 2, 3],
      inWindow: [1, 2],
      removedChar: 'a',
      removedIndex: 0
    },
    {
      step: 17,
      start: 1,
      end: 3,
      charSet: new Set(['b', 'c']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 8,
      description: '🔍 Line 8: Re-check. charSet.has("a")? NO. Duplicate removed, can now add.',
      action: 'init',
      highlighted: [1, 2, 3],
      inWindow: [1, 2]
    },
    {
      step: 18,
      start: 1,
      end: 3,
      charSet: new Set(['b', 'c', 'a']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 14,
      description: '➕ Line 14: Add Character. s[3] = "a", charSet.add("a"). Window: "bca", charSet = {"b", "c", "a"}.',
      action: 'add',
      highlighted: [1, 2, 3],
      inWindow: [1, 2, 3],
      addedChar: 'a'
    },
    {
      step: 19,
      start: 1,
      end: 3,
      charSet: new Set(['b', 'c', 'a']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 15,
      description: '📊 Line 15: Update Max. maxLength = max(3, 3) = 3. Current window: "bca", length = 3.',
      action: 'update-max',
      highlighted: [1, 2, 3],
      inWindow: [1, 2, 3]
    },
    {
      step: 20,
      start: 1,
      end: 4,
      charSet: new Set(['b', 'c', 'a']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 6,
      description: '🔄 Line 6: Next Iteration. right = 4, processing s[4] = "b". Check for duplicate.',
      action: 'init',
      highlighted: [1, 2, 3, 4],
      inWindow: [1, 2, 3]
    },
    {
      step: 21,
      start: 1,
      end: 4,
      charSet: new Set(['b', 'c', 'a']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 8,
      description: '⚠️ Line 8: Duplicate Detected! charSet.has("b") = true. Must remove from left.',
      action: 'duplicate',
      highlighted: [1, 2, 3, 4],
      inWindow: [1, 2, 3],
      duplicateChar: 'b',
      duplicateIndex: 4
    },
    {
      step: 22,
      start: 1,
      end: 4,
      charSet: new Set(['c', 'a']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 9,
      description: '➖ Line 9: Remove Character. charSet.delete(s[1] = "b"), left++ (left = 2). charSet = {"c", "a"}.',
      action: 'remove',
      highlighted: [2, 3, 4],
      inWindow: [2, 3],
      removedChar: 'b',
      removedIndex: 1
    },
    {
      step: 23,
      start: 2,
      end: 4,
      charSet: new Set(['c', 'a']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 8,
      description: '🔍 Line 8: Re-check. charSet.has("b")? NO. Duplicate removed, can now add.',
      action: 'init',
      highlighted: [2, 3, 4],
      inWindow: [2, 3]
    },
    {
      step: 24,
      start: 2,
      end: 4,
      charSet: new Set(['c', 'a', 'b']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 14,
      description: '➕ Line 14: Add Character. s[4] = "b", charSet.add("b"). Window: "cab", charSet = {"c", "a", "b"}.',
      action: 'add',
      highlighted: [2, 3, 4],
      inWindow: [2, 3, 4],
      addedChar: 'b'
    },
    {
      step: 25,
      start: 2,
      end: 4,
      charSet: new Set(['c', 'a', 'b']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 15,
      description: '📊 Line 15: Update Max. maxLength = max(3, 3) = 3. Current window: "cab", length = 3.',
      action: 'update-max',
      highlighted: [2, 3, 4],
      inWindow: [2, 3, 4]
    },
    {
      step: 26,
      start: 2,
      end: 5,
      charSet: new Set(['c', 'a', 'b']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 6,
      description: '🔄 Line 6: Next Iteration. right = 5, processing s[5] = "c". Check for duplicate.',
      action: 'init',
      highlighted: [2, 3, 4, 5],
      inWindow: [2, 3, 4]
    },
    {
      step: 27,
      start: 2,
      end: 5,
      charSet: new Set(['c', 'a', 'b']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 8,
      description: '⚠️ Line 8: Duplicate Detected! charSet.has("c") = true. Must remove from left.',
      action: 'duplicate',
      highlighted: [2, 3, 4, 5],
      inWindow: [2, 3, 4],
      duplicateChar: 'c',
      duplicateIndex: 5
    },
    {
      step: 28,
      start: 2,
      end: 5,
      charSet: new Set(['a', 'b']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 9,
      description: '➖ Line 9: Remove Character. charSet.delete(s[2] = "c"), left++ (left = 3). charSet = {"a", "b"}.',
      action: 'remove',
      highlighted: [3, 4, 5],
      inWindow: [3, 4],
      removedChar: 'c',
      removedIndex: 2
    },
    {
      step: 29,
      start: 3,
      end: 5,
      charSet: new Set(['a', 'b']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 8,
      description: '🔍 Line 8: Re-check. charSet.has("c")? NO. Duplicate removed, can now add.',
      action: 'init',
      highlighted: [3, 4, 5],
      inWindow: [3, 4]
    },
    {
      step: 30,
      start: 3,
      end: 5,
      charSet: new Set(['a', 'b', 'c']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 14,
      description: '➕ Line 14: Add Character. s[5] = "c", charSet.add("c"). Window: "abc", charSet = {"a", "b", "c"}.',
      action: 'add',
      highlighted: [3, 4, 5],
      inWindow: [3, 4, 5],
      addedChar: 'c'
    },
    {
      step: 17,
      start: 3,
      end: 6,
      charSet: new Set(['a', 'b', 'c']),
      maxLen: 3,
      currentLen: 3,
      currentLine: 8,
      description: '⚠️ Line 8: Duplicate Detected! s[6] = "b", charSet.has("b") = true. Must remove from left.',
      action: 'duplicate',
      highlighted: [3, 4, 5, 6],
      inWindow: [3, 4, 5],
      duplicateChar: 'b',
      duplicateIndex: 6
    },
    {
      step: 18,
      start: 3,
      end: 6,
      charSet: new Set(['b', 'c']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 9,
      description: '➖ Line 9: Remove Character. charSet.delete(s[3] = "a"), left++. charSet = {"b", "c"}.',
      action: 'remove',
      highlighted: [4, 5, 6],
      inWindow: [4, 5],
      removedChar: 'a',
      removedIndex: 3
    },
    {
      step: 19,
      start: 4,
      end: 6,
      charSet: new Set(['c']),
      maxLen: 3,
      currentLen: 1,
      currentLine: 9,
      description: '➖ Line 9: Remove Again. charSet.delete(s[4] = "b"), left++. Still duplicate, charSet = {"c"}.',
      action: 'remove',
      highlighted: [5, 6],
      inWindow: [5],
      removedChar: 'b',
      removedIndex: 4
    },
    {
      step: 20,
      start: 5,
      end: 6,
      charSet: new Set(['c', 'b']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 7,
      description: '➕ Line 14: Add Character. s[6] = "b", charSet.add("b"). Window: "cb", charSet = {"c", "b"}.',
      action: 'add',
      highlighted: [5, 6],
      inWindow: [5, 6],
      addedChar: 'b'
    },
    {
      step: 21,
      start: 5,
      end: 7,
      charSet: new Set(['c', 'b']),
      maxLen: 3,
      currentLen: 2,
      currentLine: 8,
      description: '⚠️ Line 8: Duplicate Detected! s[7] = "b", charSet.has("b") = true. Must remove from left.',
      action: 'duplicate',
      highlighted: [5, 6, 7],
      inWindow: [5, 6],
      duplicateChar: 'b',
      duplicateIndex: 7
    },
    {
      step: 22,
      start: 5,
      end: 7,
      charSet: new Set(['b']),
      maxLen: 3,
      currentLen: 1,
      currentLine: 9,
      description: '➖ Line 9: Remove Character. charSet.delete(s[5] = "c"), left++. charSet = {"b"}.',
      action: 'remove',
      highlighted: [6, 7],
      inWindow: [6],
      removedChar: 'c',
      removedIndex: 5
    },
    {
      step: 23,
      start: 6,
      end: 7,
      charSet: new Set(),
      maxLen: 3,
      currentLen: 0,
      currentLine: 9,
      description: '➖ Line 9: Remove Again. charSet.delete(s[6] = "b"), left++. charSet = {} (empty now).',
      action: 'remove',
      highlighted: [7],
      inWindow: [],
      removedChar: 'b',
      removedIndex: 6
    },
    {
      step: 24,
      start: 7,
      end: 7,
      charSet: new Set(['b']),
      maxLen: 3,
      currentLen: 1,
      currentLine: 7,
      description: '➕ Line 14: Add Character. s[7] = "b", charSet.add("b"). Window: "b", charSet = {"b"}.',
      action: 'add',
      highlighted: [7],
      inWindow: [7],
      addedChar: 'b'
    },
    {
      step: 25,
      start: 7,
      end: 7,
      charSet: new Set(['b']),
      maxLen: 3,
      currentLen: 1,
      currentLine: 14,
      description: '🏁 Line 18: End Reached. Loop complete, processed all characters. maxLength = 3.',
      action: 'complete',
      highlighted: [7],
      inWindow: [7]
    },
    {
      step: 26,
      start: 7,
      end: 7,
      charSet: new Set(['b']),
      maxLen: 3,
      currentLen: 1,
      currentLine: 14,
      description: '🏆 Line 18: Return maxLength = 3. Longest substring: "abc" with length 3!',
      action: 'result',
      highlighted: [0, 1, 2],
      inWindow: []
    },
    {
      step: 27,
      start: 7,
      end: 7,
      charSet: new Set(['b']),
      maxLen: 3,
      currentLen: 1,
      currentLine: 14,
      description: '🎯 Success! Time Complexity: O(n), Space Complexity: O(min(n,m)). Efficient sliding window!',
      action: 'done',
      highlighted: [],
      inWindow: []
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function lengthOfLongestSubstring(s) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let maxLength = 0;`, active: stepData.currentLine === 2, indent: 1, values: `maxLength = ${stepData.maxLen}` },
      { line: 3, code: `  let left = 0;`, active: stepData.currentLine === 3, indent: 1, values: `left = ${stepData.start}` },
      { line: 4, code: `  const charSet = new Set();`, active: stepData.currentLine === 4, indent: 1, values: `size = ${stepData.charSet.size}` },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let right = 0; right < s.length; right++) {`, active: stepData.currentLine === 6, indent: 1, values: stepData.end >= 0 ? `right = ${stepData.end}` : '' },
      { line: 7, code: `    // Remove duplicates from left`, active: false, indent: 2, comment: true },
      { line: 8, code: `    while (charSet.has(s[right])) {`, active: stepData.action === 'duplicate', indent: 2 },
      { line: 9, code: `      charSet.delete(s[left]);`, active: stepData.action === 'remove', indent: 3, values: stepData.action === 'remove' && stepData.removedChar ? `remove '${stepData.removedChar}'` : '' },
      { line: 10, code: `      left++;`, active: stepData.action === 'remove', indent: 3 },
      { line: 11, code: `    }`, active: false, indent: 2 },
      { line: 12, code: `    `, active: false, indent: 2 },
      { line: 13, code: `    // Add current character`, active: false, indent: 2, comment: true },
      { line: 14, code: `    charSet.add(s[right]);`, active: stepData.action === 'add', indent: 2, values: stepData.action === 'add' && stepData.addedChar ? `add '${stepData.addedChar}'` : '' },
      { line: 15, code: `    maxLength = Math.max(maxLength, right - left + 1);`, active: stepData.action === 'update-max', indent: 2, values: stepData.action === 'update-max' ? `max(${stepData.maxLen}, ${stepData.currentLen})` : '' },
      { line: 16, code: `  }`, active: false, indent: 1 },
      { line: 17, code: `  `, active: false, indent: 1 },
      { line: 18, code: `  return maxLength;`, active: stepData.currentLine === 14, indent: 1, values: stepData.action === 'result' ? `→ ${stepData.maxLen}` : '' },
      { line: 19, code: `}`, active: stepData.currentLine === 15, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setWindowStart(step.start);
    setWindowEnd(step.end);
    setMaxLength(step.maxLen);
    setCurrentLength(step.currentLen);
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
          }, 2000);
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
    setMaxLength(0);
    setCurrentLength(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Search}
        category="DSA · Sliding Window"
        title="Longest Substring Without Repeating Characters"
        description="Find the length of the longest substring without repeating characters using a sliding window approach with a HashSet."
        colorTheme="indigo"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(min(n,m))', variant: 'info' },
          { label: 'Sliding Window', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
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
                Given a string <strong className="text-blue-600 dark:text-blue-400">s</strong>, find the <strong>length</strong> of the longest substring without <strong className="text-red-600 dark:text-red-400">repeating characters</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">String (s):</span>
                      <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">"abcabcbb"</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-500">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">OUTPUT</div>
                  <div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Length of longest substring:</span>
                    <div className="font-mono text-lg font-bold text-green-700 dark:text-green-300">3</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Substring: "abc"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison of Substrings */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Minimize2 className="w-5 h-5" />
              Comparing Different Substrings
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Let's look at different possible substrings from "abcabcbb":
            </p>
            
            <div className="space-y-4">
              {/* Valid Substring 1 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-700 dark:text-green-300">Substring: "abc"</span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded">Valid ✓</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {['a','b','c'].map((char, idx) => (
                        <div key={idx} className="px-2 py-1 rounded font-mono text-sm font-bold bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 border-2 border-green-500">
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Length: <strong>3</strong> • No repeating characters ✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Valid Substring 2 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Substring: "ab"</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded">Valid but shorter</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {['a','b'].map((char, idx) => (
                        <div key={idx} className="px-2 py-1 rounded font-mono text-sm font-bold bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 border border-blue-500">
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Length: <strong>2</strong> • No repeating but not maximum
                    </div>
                  </div>
                </div>
              </div>

              {/* Invalid Substring */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-red-700 dark:text-red-300">Substring: "abca"</span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded">Invalid ✗</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {['a','b','c','a'].map((char, idx) => (
                        <div key={idx} className={`px-2 py-1 rounded font-mono text-sm font-bold ${
                          (idx === 0 || idx === 3)
                            ? 'bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100 border-2 border-red-500'
                            : 'bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 border border-yellow-500'
                        }`}>
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-red-600 dark:text-red-400">
                      Length: <strong>4</strong> • Has duplicate: 'a' appears twice ❌
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Visual Flow */}
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              How the Algorithm Works (Visual Steps)
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Use a HashSet for Unique Characters</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Track characters in current window:</div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-500 rounded font-mono font-bold text-indigo-700 dark:text-indigo-300">Set {'{ }'}</div>
                      <div className="text-xs text-slate-400 self-center">→ O(1) lookup!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Expand Window with Right Pointer</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Keep adding characters until duplicate found:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-12">Start:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-indigo-200 dark:bg-indigo-800 rounded font-mono text-xs">a</div>
                          <div className="text-xs text-slate-400">→ Set: {'{'}'a'{'}'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-12">Expand:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-indigo-200 dark:bg-indigo-800 rounded font-mono text-xs">a b c</div>
                          <div className="text-xs text-slate-400">→ Set: {'{'}'a','b','c'{'}'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-12">Duplicate:</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-red-200 dark:bg-red-800 rounded font-mono text-xs">a b c a</div>
                          <div className="text-xs text-red-600 dark:text-red-400 font-semibold">✗ 'a' already in set!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Shrink Window with Left Pointer</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">When duplicate found, remove characters from left:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-20">Remove 'a':</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-green-200 dark:bg-green-800 rounded font-mono text-xs">b c</div>
                          <div className="text-xs text-slate-400">→ Set: {'{'}'b','c'{'}'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-slate-500 w-20">Can add 'a':</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-green-200 dark:bg-green-800 rounded font-mono text-xs">b c a</div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-semibold">✓ Valid again!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Track Maximum Length</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Keep updating the maximum as we go:</div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-emerald-200 dark:bg-emerald-800 rounded font-mono text-sm font-bold">maxLength = 3</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Best so far!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Constraints */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Substring</strong> must be contiguous (consecutive characters)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>No repeating</strong> means each character appears at most once</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>We want the <strong>maximum length</strong>, not the substring itself (though we can find it)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Sliding window</strong> moves in one pass through the string (O(n) time)</span>
              </div>
            </AlertDescription>
          </Alert>

          {/* Visual Diagram */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📝</span> Example String
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-indigo-300 dark:border-indigo-600">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">s = "</span>
                {str.split('').map((char, idx) => (
                  <div key={idx} className="flex flex-col items-center px-3 py-2 rounded bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-300">
                    <div className="text-lg font-bold text-indigo-700 dark:text-indigo-300">{char}</div>
                    <div className="text-xs text-slate-500 mt-1">[{idx}]</div>
                  </div>
                ))}
                <span className="text-sm font-mono text-slate-600 dark:text-slate-400">"</span>
              </div>
              
              <div className="mt-4 text-center text-sm">
                <div className="inline-flex items-center gap-2 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded border border-indigo-200 dark:border-indigo-700">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  <span className="text-slate-700 dark:text-slate-300">Longest substring: <strong>"abc"</strong> (length = 3)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Explanation */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">💡</span> The Sliding Window + HashSet Approach
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Maintain a HashSet</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Keep track of <strong>unique characters</strong> in the current window using a Set for O(1) lookups.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Expand & Shrink Window</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Expand window by moving <strong>right pointer</strong>. If duplicate found, shrink by moving <strong>left pointer</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Track Maximum Length</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Update <strong>maxLength</strong> whenever we have a valid window (no duplicates).
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Each character visited at most twice</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(min(n,m))</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">m = charset size (26 for lowercase)</div>
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
              <Search className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            Sliding Window: Visual Animation
          </CardTitle>
          <CardDescription>Watch the window expand and shrink to find the longest substring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              {/* Play and Reset Buttons */}
              <div className="flex gap-3 justify-center flex-wrap items-center">
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

              {/* Speed Controls */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 mr-1">Speed:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="slow"
                      checked={animationSpeed === 'slow'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      disabled={isAnimating}
                      className="w-3.5 h-3.5 text-indigo-600 cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Slow</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="normal"
                      checked={animationSpeed === 'normal'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      disabled={isAnimating}
                      className="w-3.5 h-3.5 text-indigo-600 cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Normal</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="speed"
                      value="fast"
                      checked={animationSpeed === 'fast'}
                      onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                      disabled={isAnimating}
                      className="w-3.5 h-3.5 text-indigo-600 cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Fast</span>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">longestSubstring.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

                <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
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
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">[{windowStart}-{windowEnd}]</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Current:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{currentLength}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Max:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{maxLength}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Step Card */}
            {currentStep >= 0 && (
              <div className="mb-6 p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700 shadow-sm animate-in slide-in-from-top-4 duration-500">
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${
                      steps[currentStep].action === 'done' || steps[currentStep].action === 'result'
                        ? 'bg-green-500'
                        : 'bg-green-600'
                    }`}>
                      {steps[currentStep].action === 'done' || steps[currentStep].action === 'result' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <CheckCheck className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-900 dark:text-green-100">
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine} | Action: {steps[currentStep].action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed font-medium text-green-800 dark:text-green-200">
                    {steps[currentStep].description}
                  </p>

                  {/* Variable Values */}
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-green-300 dark:border-green-700">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-green-200 dark:border-green-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">left:</span>
                      <span className="text-base font-bold text-green-600 dark:text-green-400">{windowStart}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">right:</span>
                      <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{windowEnd}</span>
                    </div>
                    {windowEnd < str.length && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-cyan-200 dark:border-cyan-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">s[right]:</span>
                        <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">"{str[windowEnd]}"</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-purple-200 dark:border-purple-800">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">maxLength:</span>
                      <span className="text-base font-bold text-purple-600 dark:text-purple-400">{maxLength}</span>
                    </div>
                    {steps[currentStep].action === 'duplicate' && steps[currentStep].duplicateChar && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-red-200 dark:border-red-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">duplicate:</span>
                        <span className="text-base font-bold text-red-600 dark:text-red-400">"{steps[currentStep].duplicateChar}"</span>
                      </div>
                    )}
                    {steps[currentStep].action === 'update-max' && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-900/40 rounded-lg border border-green-200 dark:border-green-800">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">match:</span>
                        <span className="text-base font-bold text-green-600 dark:text-green-400">✓ YES</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* String Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">String with Sliding Window:</p>
                <div className="flex items-center gap-3 text-xs">
                  {currentStep > 0 && (
                    <>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded text-green-700 dark:text-green-300 font-semibold">left = {windowStart}</span>
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-700 rounded text-emerald-700 dark:text-emerald-300 font-semibold">right = {windowEnd}</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 rounded text-purple-700 dark:text-purple-300 font-semibold">maxLen = {maxLength}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center gap-2">
                    {/* Window Overlay */}
                    {currentStep > 0 && steps[currentStep] && steps[currentStep].inWindow.length > 0 && (
                      <div
                        className="absolute -top-2 h-[4.5rem] bg-indigo-500/10 dark:bg-indigo-400/10 border-2 border-indigo-500 rounded-lg transition-all duration-700 pointer-events-none"
                        style={{
                          left: `calc(${steps[currentStep].inWindow[0] * (3.5 + 0.5)}rem - 0.5rem)`,
                          width: `calc(${steps[currentStep].inWindow.length * 3.5}rem + ${(steps[currentStep].inWindow.length - 1) * 0.5}rem + 1rem)`
                        }}
                      >
                        {/* Left edge label */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-1">
                          <div className="text-[10px] font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/80 px-1.5 py-0.5 rounded border border-green-500 whitespace-nowrap">
                            start
                          </div>
                        </div>
                        
                        {/* Right edge label */}
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full ml-1">
                          <div className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/80 px-1.5 py-0.5 rounded border border-emerald-500 whitespace-nowrap">
                            end
                          </div>
                        </div>
                        
                        {/* Bottom label with substring */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-0.5 rounded whitespace-nowrap shadow-sm">
                          Window: "{str.substring(windowStart, windowEnd + 1)}" (len={steps[currentStep].inWindow.length})
                        </div>
                      </div>
                    )}

                  {str.split('').map((char, idx) => {
                  const isInWindow = steps[currentStep] && steps[currentStep].inWindow.includes(idx);
                  const isHighlighted = steps[currentStep] && steps[currentStep].highlighted.includes(idx);
                  const isDuplicate = steps[currentStep] && steps[currentStep].duplicateIndex === idx;
                  const isRemoved = steps[currentStep] && steps[currentStep].removedIndex === idx;

                  return (
                    <div key={idx} className="relative flex flex-col items-center gap-2">
                      {/* Left Pointer */}
                      {idx === windowStart && currentStep > 0 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                          <div className="text-[10px] font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/70 px-2 py-0.5 rounded border border-green-500 shadow-sm">
                            L
                          </div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-green-500"></div>
                        </div>
                      )}

                      {/* Right Pointer */}
                      {idx === windowEnd && currentStep > 0 && windowStart !== windowEnd && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                          <div className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/70 px-2 py-0.5 rounded border border-emerald-500 shadow-sm">
                            R
                          </div>
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-emerald-500"></div>
                        </div>
                      )}

                      {/* Character Box */}
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                          isDuplicate
                            ? 'bg-orange-200 dark:bg-orange-800 border-orange-500 text-orange-900 dark:text-orange-100 scale-125 ring-4 ring-orange-300 animate-pulse'
                            : isRemoved
                            ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100 scale-90 opacity-50'
                            : isInWindow
                            ? 'bg-indigo-200 dark:bg-indigo-800 border-indigo-500 text-indigo-900 dark:text-indigo-100 scale-110 ring-4 ring-indigo-300'
                            : isHighlighted
                            ? 'bg-indigo-100 dark:bg-indigo-900 border-indigo-500 text-indigo-900 dark:text-indigo-100'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 text-slate-600 opacity-40'
                        }`}
                      >
                        {char}
                      </div>
                      
                      {/* Index */}
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>
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
                <div className="w-6 h-6 bg-indigo-200 dark:bg-indigo-800 border-2 border-indigo-500 rounded ring-2 ring-indigo-300"></div>
                <span className="text-slate-700 dark:text-slate-300">Current Window (Valid)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-200 dark:bg-orange-800 border-2 border-orange-500 rounded ring-2 ring-orange-300"></div>
                <span className="text-slate-700 dark:text-slate-300">Duplicate Found</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 dark:bg-red-900 border-2 border-red-500 rounded"></div>
                <span className="text-slate-700 dark:text-slate-300">Removed from Window</span>
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
            code={`function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  const charSet = new Set();
  
  for (let right = 0; right < s.length; right++) {
    // Remove duplicates from left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    // Add current character
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Example usage
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
// Output: 3 (substring: "abc")`}
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
                <span className="text-lg">1️⃣</span> Empty String
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When input string is empty, return <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">0</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = ""<br/>
                  Output: 0
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">2️⃣</span> All Unique Characters
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When all characters are unique, the entire string is the answer.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "abcdef"<br/>
                  Output: 6 (entire string)
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">3️⃣</span> All Same Character
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                When all characters are the same, answer is always <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">1</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "aaaaaaa"<br/>
                  Output: 1
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">4️⃣</span> Single Character
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                String with one character returns <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">1</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "a"<br/>
                  Output: 1
                </code>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <span className="text-lg">5️⃣</span> Spaces and Special Characters
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                Spaces and special characters count as unique characters.
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded border border-orange-200 dark:border-orange-700">
                <code className="text-xs text-slate-700 dark:text-slate-300">
                  s = "a b c a"<br/>
                  Output: 4 ("a b c" with space)
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
                    Longest Substring with At Most K Distinct Characters
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Extension of this problem with a constraint on number of distinct characters.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Medium</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Longest Repeating Character Replacement
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Similar sliding window pattern but with character replacement allowed.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Medium</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Minimum Window Substring
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Find minimum window that contains all characters from target string.
                  </p>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded">Hard</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Permutation in String
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Check if string contains permutation of another string using sliding window.
                  </p>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Medium</span>
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
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">HashSet for O(1) Lookups</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Using a HashSet allows constant-time checks for duplicate characters, making the algorithm efficient.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Two Pointers Technique</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Left pointer</strong> shrinks the window when duplicate is found. <strong>Right pointer</strong> always expands to explore new characters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Greedy Expansion</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Always try to expand the window as much as possible before shrinking. This ensures we don't miss any potential longer substrings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">O(n) Time, O(min(n,m)) Space</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Each character is visited at most twice (once by right, once by left). Space depends on character set size (m) or string length (n), whichever is smaller.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Classic Sliding Window Pattern</h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  This is the foundation for many substring/subarray problems. Master the <strong>expand → check → shrink</strong> pattern!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
