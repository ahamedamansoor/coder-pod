'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Minimize2, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function StringCompression() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentCount, setCurrentCount] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const chars = ["a","a","b","b","b","b","b","b","c","c","c","c"];
  
  const steps = [
    { 
      step: 1,
      result: [],
      index: -1,
      count: 0,
      currentLine: 2,
      description: '📋 Initialize: Compress ["a","a","b","b","b","b","b","b","c","c","c","c"]. Modify array in-place and return new length.'
    },
    { 
      step: 2,
      result: [],
      index: 0,
      count: 0,
      currentLine: 3,
      description: '📝 Set write = 0: Pointer to write position in array. We\'ll overwrite original array starting from index 0.'
    },
    { 
      step: 3,
      result: [],
      index: 0,
      count: 0,
      currentLine: 5,
      description: '🔁 Loop Start: i = 0. Start reading from index 0. Current character = "a".'
    },
    { 
      step: 4,
      result: [],
      index: 0,
      count: 1,
      currentLine: 6,
      description: '🔢 Initialize count = 1: Found first "a". Start counting consecutive occurrences.'
    },
    { 
      step: 5,
      result: [],
      index: 0,
      count: 1,
      currentLine: 9,
      description: '❓ Check Next: Is i+1 (1) < 12 AND chars[1] === chars[0]? Is "a" === "a"? Yes! Continue counting.'
    },
    { 
      step: 6,
      result: [],
      index: 0,
      count: 2,
      currentLine: 10,
      description: '➕ Increment count: count = 2. Move i to next position (i = 1). Still seeing "a".'
    },
    { 
      step: 7,
      result: [],
      index: 0,
      count: 2,
      currentLine: 9,
      description: '❓ Check Next: Is i+1 (2) < 12 AND chars[2] === chars[1]? Is "b" === "a"? No! Different character.'
    },
    { 
      step: 8,
      result: ["a"],
      index: 0,
      count: 2,
      currentLine: 14,
      description: '📝 Write Character: chars[write] = chars[0] = "a". Write pointer still at 0.'
    },
    { 
      step: 9,
      result: ["a"],
      index: 1,
      count: 2,
      currentLine: 15,
      description: '➡️ Move write: write = 1. Move to next position for writing count.'
    },
    { 
      step: 10,
      result: ["a"],
      index: 1,
      count: 2,
      currentLine: 17,
      description: '❓ Check count: Is count > 1? Is 2 > 1? Yes! Need to write the count as well.'
    },
    { 
      step: 11,
      result: ["a", "2"],
      index: 2,
      count: 2,
      currentLine: 18,
      description: '📝 Write Count: Convert 2 to string "2". chars[1] = "2". write = 2. First group complete: "a2".'
    },
    { 
      step: 12,
      result: ["a", "2"],
      index: 2,
      count: 0,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 2. Now processing "b". Start new group.'
    },
    { 
      step: 13,
      result: ["a", "2"],
      index: 2,
      count: 1,
      currentLine: 6,
      description: '🔢 Initialize count = 1: Found first "b". Start counting consecutive "b"s.'
    },
    { 
      step: 14,
      result: ["a", "2"],
      index: 2,
      count: 2,
      currentLine: 10,
      description: '➕ Increment count: chars[3] === "b"? Yes! count = 2, i = 3.'
    },
    { 
      step: 15,
      result: ["a", "2"],
      index: 2,
      count: 3,
      currentLine: 10,
      description: '➕ Increment count: chars[4] === "b"? Yes! count = 3, i = 4.'
    },
    { 
      step: 16,
      result: ["a", "2"],
      index: 2,
      count: 4,
      currentLine: 10,
      description: '➕ Increment count: chars[5] === "b"? Yes! count = 4, i = 5.'
    },
    { 
      step: 17,
      result: ["a", "2"],
      index: 2,
      count: 5,
      currentLine: 10,
      description: '➕ Increment count: chars[6] === "b"? Yes! count = 5, i = 6.'
    },
    { 
      step: 18,
      result: ["a", "2"],
      index: 2,
      count: 6,
      currentLine: 10,
      description: '➕ Increment count: chars[7] === "b"? Yes! count = 6, i = 7.'
    },
    { 
      step: 19,
      result: ["a", "2"],
      index: 2,
      count: 6,
      currentLine: 9,
      description: '❓ Check Next: Is chars[8] === "b"? Is "c" === "b"? No! Stop counting. Found 6 consecutive "b"s.'
    },
    { 
      step: 20,
      result: ["a", "2", "b"],
      index: 2,
      count: 6,
      currentLine: 14,
      description: '📝 Write Character: chars[2] = "b". Write the character at position 2.'
    },
    { 
      step: 21,
      result: ["a", "2", "b"],
      index: 3,
      count: 6,
      currentLine: 15,
      description: '➡️ Move write: write = 3. Ready to write count.'
    },
    { 
      step: 22,
      result: ["a", "2", "b"],
      index: 3,
      count: 6,
      currentLine: 17,
      description: '❓ Check count: Is 6 > 1? Yes! Write the count.'
    },
    { 
      step: 23,
      result: ["a", "2", "b", "6"],
      index: 4,
      count: 6,
      currentLine: 18,
      description: '📝 Write Count: chars[3] = "6". write = 4. Second group complete: "b6".'
    },
    { 
      step: 24,
      result: ["a", "2", "b", "6"],
      index: 8,
      count: 0,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 8. Now processing "c". Start new group.'
    },
    { 
      step: 25,
      result: ["a", "2", "b", "6"],
      index: 8,
      count: 1,
      currentLine: 6,
      description: '🔢 Initialize count = 1: Found first "c". Start counting consecutive "c"s.'
    },
    { 
      step: 26,
      result: ["a", "2", "b", "6"],
      index: 8,
      count: 2,
      currentLine: 10,
      description: '➕ Increment count: chars[9] === "c"? Yes! count = 2, i = 9.'
    },
    { 
      step: 27,
      result: ["a", "2", "b", "6"],
      index: 8,
      count: 3,
      currentLine: 10,
      description: '➕ Increment count: chars[10] === "c"? Yes! count = 3, i = 10.'
    },
    { 
      step: 28,
      result: ["a", "2", "b", "6"],
      index: 8,
      count: 4,
      currentLine: 10,
      description: '➕ Increment count: chars[11] === "c"? Yes! count = 4, i = 11.'
    },
    { 
      step: 29,
      result: ["a", "2", "b", "6"],
      index: 8,
      count: 4,
      currentLine: 9,
      description: '❓ Check Next: Is i+1 (12) < 12? No! Reached end of array. Found 4 consecutive "c"s.'
    },
    { 
      step: 30,
      result: ["a", "2", "b", "6", "c"],
      index: 4,
      count: 4,
      currentLine: 14,
      description: '📝 Write Character: chars[4] = "c". Write the character at position 4.'
    },
    { 
      step: 31,
      result: ["a", "2", "b", "6", "c"],
      index: 5,
      count: 4,
      currentLine: 15,
      description: '➡️ Move write: write = 5. Ready to write count.'
    },
    { 
      step: 32,
      result: ["a", "2", "b", "6", "c"],
      index: 5,
      count: 4,
      currentLine: 17,
      description: '❓ Check count: Is 4 > 1? Yes! Write the count.'
    },
    { 
      step: 33,
      result: ["a", "2", "b", "6", "c", "4"],
      index: 6,
      count: 4,
      currentLine: 18,
      description: '📝 Write Count: chars[5] = "4". write = 6. Third group complete: "c4".'
    },
    { 
      step: 34,
      result: ["a", "2", "b", "6", "c", "4"],
      index: 12,
      count: 0,
      currentLine: 23,
      description: '🔚 Loop End: i = 12, but 12 < 12 is false. Exit loop. All characters processed!'
    },
    { 
      step: 35,
      result: ["a", "2", "b", "6", "c", "4"],
      index: 6,
      count: 0,
      currentLine: 25,
      description: '🎉 Return Length: return write = 6. Compressed array: ["a","2","b","6","c","4"]. Original 12 chars → 6 chars!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const showChars = `chars = [${chars.slice(0, 4).map(c => `"${c}"`).join(',')}...] (${chars.length})`;
    const showWrite = stepData.index >= 0 && stepData.index <= 6 ? `write = ${stepData.index}` : '';
    const showCount = stepData.count > 0 ? `count = ${stepData.count}` : '';
    const showResult = stepData.result.length > 0 ? `result = [${stepData.result.map(c => `"${c}"`).join(',')}]` : '';
    
    return [
      { line: 1, code: 'function compress(chars) {', active: stepData.currentLine === 1, indent: 0, values: showChars },
      { line: 2, code: `  let write = 0;`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: showWrite },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  for (let i = 0; i < chars.length; i++) {`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: stepData.index >= 0 && stepData.index < chars.length ? `i = ${stepData.index}, char = "${chars[stepData.index]}"` : '' },
      { line: 5, code: `    let count = 1;`, active: stepData.currentLine === 6, indent: 2, values: showCount },
      { line: 6, code: `    `, active: false, indent: 2 },
      { line: 7, code: `    // Count consecutive characters`, active: false, indent: 2, comment: true },
      { line: 8, code: `    while (i + 1 < chars.length && chars[i + 1] === chars[i]) {`, active: stepData.currentLine === 9, indent: 2, values: stepData.currentLine === 9 ? `Check: ${stepData.count > 0 ? `count = ${stepData.count}` : ''}` : '' },
      { line: 9, code: `      count++;`, active: stepData.currentLine === 10, indent: 3, values: stepData.currentLine === 10 ? `count = ${stepData.count}` : '' },
      { line: 10, code: `      i++;`, active: stepData.currentLine === 10, indent: 3 },
      { line: 11, code: `    }`, active: false, indent: 2 },
      { line: 12, code: `    `, active: false, indent: 2 },
      { line: 13, code: `    chars[write++] = chars[i];`, active: stepData.currentLine === 14 || stepData.currentLine === 15, indent: 2, values: stepData.currentLine === 14 && stepData.result.length > 0 ? `chars[${stepData.index}] = "${stepData.result[stepData.result.length - 1]}"` : '' },
      { line: 14, code: `    `, active: false, indent: 2 },
      { line: 15, code: `    if (count > 1) {`, active: stepData.currentLine === 17, indent: 2, values: stepData.currentLine === 17 ? `${stepData.count} > 1? ${stepData.count > 1 ? 'Yes' : 'No'}` : '' },
      { line: 16, code: `      for (let digit of String(count)) {`, active: stepData.currentLine === 18, indent: 3, values: stepData.currentLine === 18 && stepData.count > 0 ? `Write "${stepData.count}"` : '' },
      { line: 17, code: `        chars[write++] = digit;`, active: stepData.currentLine === 18, indent: 4 },
      { line: 18, code: `      }`, active: false, indent: 3 },
      { line: 19, code: `    }`, active: false, indent: 2 },
      { line: 20, code: `  }`, active: false, indent: 1 },
      { line: 21, code: `  `, active: false, indent: 1 },
      { line: 22, code: `  return write;`, active: stepData.currentLine === 23 || stepData.currentLine === 25, indent: 1, values: stepData.currentLine >= 23 ? `return ${stepData.index}` : '' },
      { line: 23, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setResult(step.result);
    setCurrentIndex(step.index);
    setCurrentCount(step.count);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedDelay = animationSpeed === 'slow' ? 2000 : animationSpeed === 'fast' ? 500 : 1000;

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 1500);
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
      <PageHeader
        icon={Minimize2}
        category="DSA · Strings"
        title="String Compression"
        description="Learn how to compress strings by replacing consecutive characters with character + count"
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
                <p className="font-medium">In-Place Modification</p>
                <p className="text-sm text-muted-foreground">Modify array without extra space</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Two Pointer Technique</p>
                <p className="text-sm text-muted-foreground">Read and write pointers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Consecutive Counting</p>
                <p className="text-sm text-muted-foreground">Count same characters</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Number to String</p>
                <p className="text-sm text-muted-foreground">Convert counts to digits</p>
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
          <CardDescription>Compress strings with character counts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars, if the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length. The compressed string s should not be returned separately, but instead be stored in the input character array chars.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4 flex items-center gap-2">
              <Minimize2 className="w-5 h-5" /> Compression Example
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-rose-300 dark:border-rose-600">
                <p className="text-sm font-semibold text-rose-700 dark:text-rose-300 mb-3">Before: ["a","a","b","b","b","b","b","b","c","c","c","c"]</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {chars.map((char, idx) => (
                    <div key={idx} className="w-10 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center font-mono font-bold text-sm">
                      {char}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Length: 12 characters</p>
              </div>

              <div className="flex items-center justify-center">
                <Minimize2 className="w-8 h-8 text-rose-600 dark:text-rose-400" />
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">After: ["a","2","b","6","c","4"]</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["a","2","b","6","c","4"].map((char, idx) => (
                    <div key={idx} className={`w-10 h-10 rounded flex items-center justify-center font-mono font-bold text-sm border-2 ${
                      isNaN(Number(char))
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-500'
                        : 'bg-purple-100 dark:bg-purple-900 border-purple-500'
                    }`}>
                      {char}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-green-700 dark:text-green-300">Compressed length: 6 characters (50% reduction!)</p>
              </div>
            </div>
          </div>

          {/* How Compression Works */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📦</span> Compression Rules
            </h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-950 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">a a</span>
                  <span className="text-cyan-600">→</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">a</span>
                  <span className="text-2xl font-bold text-purple-700 dark:text-purple-300">2</span>
                  <span className="text-sm text-cyan-700 dark:text-cyan-300">(2 consecutive "a"s)</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-950 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">b b b b b b</span>
                  <span className="text-cyan-600">→</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">b</span>
                  <span className="text-2xl font-bold text-purple-700 dark:text-purple-300">6</span>
                  <span className="text-sm text-cyan-700 dark:text-cyan-300">(6 consecutive "b"s)</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-950 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">c c c c</span>
                  <span className="text-cyan-600">→</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">c</span>
                  <span className="text-2xl font-bold text-purple-700 dark:text-purple-300">4</span>
                  <span className="text-sm text-cyan-700 dark:text-cyan-300">(4 consecutive "c"s)</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-950 p-3 rounded border-2 border-orange-500">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">a</span>
                  <span className="text-orange-600">→</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">a</span>
                  <span className="text-sm text-orange-700 dark:text-orange-300">⚠️ Single char: don't write count!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Algorithm Steps
            </h4>
            
            <div className="space-y-3">
              {[
                { num: 1, title: 'Initialize write pointer', desc: 'Track where to write in the array (write = 0)' },
                { num: 2, title: 'Loop through characters', desc: 'For each character, count consecutive occurrences' },
                { num: 3, title: 'Count consecutive', desc: 'Use while loop to count same characters' },
                { num: 4, title: 'Write character', desc: 'Write the character at write position' },
                { num: 5, title: 'Write count if > 1', desc: 'If count > 1, write each digit of count' },
                { num: 6, title: 'Return new length', desc: 'Return write pointer (compressed length)' },
              ].map((step) => (
                <div key={step.num} className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{step.title}</h5>
                      <p className="text-sm text-purple-800 dark:text-purple-200">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">In-place modification</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/40">
              <Minimize2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm compress the string step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-rose-300 dark:border-rose-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-rose-900 dark:text-rose-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-rose-600 border-rose-300 focus:ring-rose-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-rose-800 dark:text-rose-200 capitalize">{speed}</span>
                    </label>
                  ))}
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
                    className="border-rose-300 dark:border-rose-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg border border-rose-300 dark:border-rose-700">
                    <span className="text-sm font-semibold text-rose-900 dark:text-rose-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-rose-300 dark:border-rose-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">compress.js</span>
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
                          ? 'bg-rose-50 dark:bg-rose-900/20 border-l-2 border-rose-400 dark:border-rose-500'
                          : lineData.comment
                          ? 'opacity-50'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-rose-600 dark:text-rose-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-rose-600 dark:text-rose-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">count:</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">{currentCount || '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">compressed:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{result.length}</span>
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
            {currentStep >= 0 && steps[currentStep].description && (
              <div className={`p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border-rose-400 dark:border-rose-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-rose-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Minimize2 className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-rose-900 dark:text-rose-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-rose-800 dark:text-rose-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Result Visualization */}
            {currentStep >= 0 && result.length > 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-rose-300 dark:border-rose-600 shadow-lg">
                <h4 className="text-sm font-semibold text-rose-900 dark:text-rose-100 mb-4">Compressed Array (so far):</h4>
                
                <div className="flex flex-wrap gap-2">
                  {result.map((char, idx) => (
                    <div
                      key={idx}
                      className={`w-14 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-xl border-2 transition-all duration-300 ${
                        isNaN(Number(char))
                          ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-500 text-blue-900 dark:text-blue-100'
                          : 'bg-purple-100 dark:bg-purple-900/40 border-purple-500 text-purple-900 dark:text-purple-100'
                      }`}
                    >
                      {char}
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-slate-500 mt-3">
                  Original: {chars.length} chars → Current: {result.length} chars
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Complete Implementation
          </CardTitle>
          <CardDescription>Full working code with examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
            title="String Compression"
            description="In-place compression with two pointers"
            language="javascript"
            colorTheme="pink"
            icon={Minimize2}
            code={`function compress(chars) {
  let write = 0;
  
  for (let i = 0; i < chars.length; i++) {
    let count = 1;
    
    // Count consecutive characters
    while (i + 1 < chars.length && chars[i + 1] === chars[i]) {
      count++;
      i++;
    }
    
    chars[write++] = chars[i];
    
    if (count > 1) {
      for (let digit of String(count)) {
        chars[write++] = digit;
      }
    }
  }
  
  return write;
}

// Test cases
let chars1 = ["a","a","b","b","c","c","c"];
console.log(compress(chars1));
// Output: 6, chars = ["a","2","b","2","c","3"]

let chars2 = ["a"];
console.log(compress(chars2));
// Output: 1, chars = ["a"]

let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars3));
// Output: 4, chars = ["a","b","1","2"]`}
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
          <CardDescription>Always handle these scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">1. Single Character</h4>
              <p className="text-sm text-muted-foreground">Don't write count if it's 1</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                compress(["a"]) // ["a"], length = 1
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. No Compression Possible</h4>
              <p className="text-sm text-muted-foreground">All different characters</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                compress(["a","b","c"]) // ["a","b","c"], length = 3
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Large Counts</h4>
              <p className="text-sm text-muted-foreground">Count {'>'}  9 needs multiple digits</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                compress(["a","a","a",...]) // ["a","1","2"] if 12 a&apos;s
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. All Same Character</h4>
              <p className="text-sm text-muted-foreground">Maximum compression ratio</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                compress(["a","a","a","a","a"]) // ["a","5"], length = 2
              </code>
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
              { name: 'String Compression', difficulty: 'Medium', link: 'https://leetcode.com/problems/string-compression/' },
              { name: 'String Compression II', difficulty: 'Hard', link: 'https://leetcode.com/problems/string-compression-ii/' },
              { name: 'Count and Say', difficulty: 'Medium', link: 'https://leetcode.com/problems/count-and-say/' },
              { name: 'Encode and Decode Strings', difficulty: 'Medium', link: 'https://leetcode.com/problems/encode-and-decode-strings/' },
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
              <span>Use <strong>write pointer</strong> to track where to write compressed data</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Count consecutive characters with while loop</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Write character first, then count <strong>only if count {'>'}  1</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Handle multi-digit counts by converting to string and iterating digits</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n)</strong>, Space: <strong>O(1)</strong> (in-place modification)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
