'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Shuffle, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ValidAnagram() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [charCounts, setCharCounts] = useState<Record<string, number>>({});
  const [currentChar, setCurrentChar] = useState('');
  const [currentString, setCurrentString] = useState<'s' | 't' | 'compare'>('s');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testString1 = "listen";
  const testString2 = "silent";
  
  type Step = {
    step: number;
    counts: Record<string, number>;
    char: string;
    stringType: 's' | 't' | 'compare';
    currentLine: number;
    description: string;
  };

  const steps: Step[] = [
    { 
      step: 1,
      counts: {},
      char: '',
      stringType: 's' as const,
      currentLine: 2,
      description: '📋 Initialize: Check if "listen" and "silent" are anagrams. First, verify lengths are equal.'
    },
    { 
      step: 2,
      counts: {},
      char: '',
      stringType: 's' as const,
      currentLine: 3,
      description: '✓ Length Check: Both strings have 6 characters. Proceed to count characters.'
    },
    { 
      step: 3,
      counts: {},
      char: '',
      stringType: 's' as const,
      currentLine: 5,
      description: '🔢 Create Hash Map: Initialize empty object to count character frequencies.'
    },
    { 
      step: 4,
      counts: { l: 1 },
      char: 'l',
      stringType: 's' as const,
      currentLine: 8,
      description: '📊 Count \'l\': First character of "listen". charCount[\'l\'] = 1'
    },
    { 
      step: 5,
      counts: { l: 1, i: 1 },
      char: 'i',
      stringType: 's' as const,
      currentLine: 8,
      description: '📊 Count \'i\': Second character. charCount[\'i\'] = 1'
    },
    { 
      step: 6,
      counts: { l: 1, i: 1, s: 1 },
      char: 's',
      stringType: 's' as const,
      currentLine: 8,
      description: '📊 Count \'s\': Third character. charCount[\'s\'] = 1'
    },
    { 
      step: 7,
      counts: { l: 1, i: 1, s: 1, t: 1 },
      char: 't',
      stringType: 's' as const,
      currentLine: 8,
      description: '📊 Count \'t\': Fourth character. charCount[\'t\'] = 1'
    },
    { 
      step: 8,
      counts: { l: 1, i: 1, s: 1, t: 1, e: 1 },
      char: 'e',
      stringType: 's' as const,
      currentLine: 8,
      description: '📊 Count \'e\': Fifth character. charCount[\'e\'] = 1'
    },
    { 
      step: 9,
      counts: { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 },
      char: 'n',
      stringType: 's' as const,
      currentLine: 8,
      description: '📊 Count \'n\': Last character. charCount[\'n\'] = 1. First string complete!'
    },
    { 
      step: 10,
      counts: { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 },
      char: '',
      stringType: 't' as const,
      currentLine: 12,
      description: '🔄 Switch to String 2: Now process "silent" and decrement counts.'
    },
    { 
      step: 11,
      counts: { l: 1, i: 1, s: 0, t: 1, e: 1, n: 1 },
      char: 's',
      stringType: 't' as const,
      currentLine: 13,
      description: '➖ Decrement \'s\': Found in "silent". charCount[\'s\'] = 1 - 1 = 0'
    },
    { 
      step: 12,
      counts: { l: 1, i: 0, s: 0, t: 1, e: 1, n: 1 },
      char: 'i',
      stringType: 't' as const,
      currentLine: 13,
      description: '➖ Decrement \'i\': charCount[\'i\'] = 1 - 1 = 0'
    },
    { 
      step: 13,
      counts: { l: 0, i: 0, s: 0, t: 1, e: 1, n: 1 },
      char: 'l',
      stringType: 't' as const,
      currentLine: 13,
      description: '➖ Decrement \'l\': charCount[\'l\'] = 1 - 1 = 0'
    },
    { 
      step: 14,
      counts: { l: 0, i: 0, s: 0, t: 1, e: 0, n: 1 },
      char: 'e',
      stringType: 't' as const,
      currentLine: 13,
      description: '➖ Decrement \'e\': charCount[\'e\'] = 1 - 1 = 0'
    },
    { 
      step: 15,
      counts: { l: 0, i: 0, s: 0, t: 1, e: 0, n: 0 },
      char: 'n',
      stringType: 't' as const,
      currentLine: 13,
      description: '➖ Decrement \'n\': charCount[\'n\'] = 1 - 1 = 0'
    },
    { 
      step: 16,
      counts: { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 },
      char: 't',
      stringType: 't' as const,
      currentLine: 13,
      description: '➖ Decrement \'t\': charCount[\'t\'] = 1 - 1 = 0. Second string complete!'
    },
    { 
      step: 17,
      counts: { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 },
      char: '',
      stringType: 'compare' as const,
      currentLine: 18,
      description: '🔍 Verify Counts: Check if all character counts are zero.'
    },
    { 
      step: 18,
      counts: { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 },
      char: '',
      stringType: 'compare' as const,
      currentLine: 19,
      description: '✅ All Zeros: Every count is 0! Strings have same characters with same frequencies.'
    },
    { 
      step: 19,
      counts: { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 },
      char: '',
      stringType: 'compare' as const,
      currentLine: 23,
      description: '🎉 Result: TRUE! "listen" and "silent" are valid anagrams!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const countsStr = JSON.stringify(stepData.counts);
    const countsSize = Object.keys(stepData.counts).length;
    
    // Helper to show current state of variables
    const showS = `s = "${testString1}"`;
    const showT = `t = "${testString2}"`;
    const showCharCount = countsSize > 0 ? `charCount = ${countsStr}` : `charCount = {}`;
    const showChar = stepData.char ? `char = '${stepData.char}'` : '';
    
    return [
      { line: 1, code: 'function isAnagram(s, t) {', active: stepData.currentLine === 1, indent: 0, values: `${showS}, ${showT}` },
      { line: 2, code: `  if (s.length !== t.length) return false;`, active: stepData.currentLine === 2, indent: 1, values: `${testString1.length} !== ${testString2.length}? false ✓` },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  const charCount = {};`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: showCharCount },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  // Count characters in first string`, active: false, indent: 1, comment: true },
      { line: 7, code: `  for (let char of s) {`, active: stepData.currentLine === 7 && stepData.stringType === 's', indent: 1, values: stepData.stringType === 's' && stepData.char ? `${showChar}, ${showCharCount}` : stepData.stringType === 's' ? 'Loop through "listen"' : '' },
      { line: 8, code: `    charCount[char] = (charCount[char] || 0) + 1;`, active: stepData.currentLine === 8 && stepData.stringType === 's', indent: 2, values: stepData.stringType === 's' && stepData.char ? `${showChar}, [${stepData.char}] = ${stepData.counts[stepData.char] - 1 || 0} + 1 = ${stepData.counts[stepData.char]}` : '' },
      { line: 9, code: `  }`, active: false, indent: 1, values: stepData.stringType === 's' && !stepData.char && countsSize > 0 ? showCharCount : '' },
      { line: 10, code: `  `, active: false, indent: 1 },
      { line: 11, code: `  // Decrement for second string`, active: false, indent: 1, comment: true },
      { line: 12, code: `  for (let char of t) {`, active: stepData.currentLine === 12 && stepData.stringType === 't', indent: 1, values: stepData.stringType === 't' && stepData.char ? `${showChar}, ${showCharCount}` : stepData.stringType === 't' ? 'Loop through "silent"' : '' },
      { line: 13, code: `    if (!charCount[char]) return false;`, active: stepData.currentLine === 13 && stepData.stringType === 't', indent: 2, values: stepData.stringType === 't' && stepData.char ? `${showChar}, [${stepData.char}] exists? ${stepData.counts[stepData.char] !== undefined ? 'Yes ✓' : 'No ✗'}` : '' },
      { line: 14, code: `    charCount[char]--;`, active: stepData.currentLine === 13 && stepData.stringType === 't', indent: 2, values: stepData.stringType === 't' && stepData.char ? `[${stepData.char}] = ${(stepData.counts[stepData.char] || 0) + 1} - 1 = ${stepData.counts[stepData.char]}` : '' },
      { line: 15, code: `  }`, active: false, indent: 1, values: stepData.stringType === 't' && !stepData.char && countsSize > 0 ? showCharCount : '' },
      { line: 16, code: `  `, active: false, indent: 1 },
      { line: 17, code: `  // Check all counts are zero`, active: false, indent: 1, comment: true },
      { line: 18, code: `  for (let count of Object.values(charCount)) {`, active: stepData.currentLine === 18, indent: 1, values: stepData.currentLine === 18 ? `values = [${Object.values(stepData.counts).join(', ')}]` : '' },
      { line: 19, code: `    if (count !== 0) return false;`, active: stepData.currentLine === 19, indent: 2, values: stepData.currentLine === 19 ? `All zeros? ${Object.values(stepData.counts).every(c => c === 0) ? 'Yes ✓' : 'No ✗'}` : '' },
      { line: 20, code: `  }`, active: false, indent: 1 },
      { line: 21, code: `  `, active: false, indent: 1 },
      { line: 22, code: `  return true;`, active: stepData.currentLine === 22 || stepData.currentLine === 23, indent: 1, values: stepData.currentLine >= 22 ? 'return true ✓' : '' },
      { line: 23, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCharCounts(step.counts);
    setCurrentChar(step.char);
    setCurrentString(step.stringType);
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
        icon={Shuffle}
        category="DSA · Strings"
        title="Valid Anagram"
        description="Learn how to check if two strings are anagrams using character frequency counting"
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
                <p className="font-medium">Hash Map Technique</p>
                <p className="text-sm text-muted-foreground">Count character frequencies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Character Comparison</p>
                <p className="text-sm text-muted-foreground">Verify same characters exist</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Multiple Approaches</p>
                <p className="text-sm text-muted-foreground">Sorting vs Hash Map</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Edge Case Handling</p>
                <p className="text-sm text-muted-foreground">Different lengths and special chars</p>
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
          <CardDescription>Understanding anagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another, using all original letters exactly once.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <Shuffle className="w-5 h-5" /> Anagram Example
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-green-300 dark:border-green-600">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">String 1: "listen"</p>
                <div className="flex flex-wrap items-center gap-2">
                  {testString1.split('').map((char, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 rounded-lg flex items-center justify-center font-bold text-blue-900 dark:text-blue-100"
                    >
                      {char}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Shuffle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">String 2: "silent"</p>
                <div className="flex flex-wrap items-center gap-2">
                  {testString2.split('').map((char, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 rounded-lg flex items-center justify-center font-bold text-purple-900 dark:text-purple-100"
                    >
                      {char}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-3 text-green-700 dark:text-green-300 font-semibold">
                  ✓ Same characters, same frequencies → Valid Anagram!
                </p>
              </div>
            </div>
          </div>

          {/* Character Frequency */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span> Character Frequency Table
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="font-bold text-center p-2 bg-cyan-100 dark:bg-cyan-900/40 rounded">Character</div>
                <div className="font-bold text-center p-2 bg-cyan-100 dark:bg-cyan-900/40 rounded">"listen"</div>
                <div className="font-bold text-center p-2 bg-cyan-100 dark:bg-cyan-900/40 rounded">"silent"</div>
                
                {['l', 'i', 's', 't', 'e', 'n'].map((char) => (
                  <>
                    <div key={`${char}-char`} className="text-center p-2 font-bold">{char}</div>
                    <div key={`${char}-count1`} className="text-center p-2">1</div>
                    <div key={`${char}-count2`} className="text-center p-2">1</div>
                  </>
                ))}
              </div>
              <p className="text-xs text-center mt-3 text-cyan-700 dark:text-cyan-300">
                All characters appear exactly once in both strings!
              </p>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Algorithm Steps
            </h4>
            
            <div className="space-y-3">
              {[
                { num: 1, title: 'Length Check', desc: 'If lengths differ, not an anagram' },
                { num: 2, title: 'Create Hash Map', desc: 'Initialize empty object for counts' },
                { num: 3, title: 'Count String 1', desc: 'Count each character in first string' },
                { num: 4, title: 'Process String 2', desc: 'Decrement counts for second string' },
                { num: 5, title: 'Verify Counts', desc: 'Check all counts are zero' },
                { num: 6, title: 'Return Result', desc: 'True if all counts zero, false otherwise' },
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two passes</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(1)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">26 letters max</div>
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
              <Shuffle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm check if strings are anagrams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
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
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-purple-600 border-purple-300 focus:ring-purple-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-purple-800 dark:text-purple-200 capitalize">{speed}</span>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">isAnagram.js</span>
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

                      <code className="flex-1">
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
                        <span className="text-slate-500 dark:text-slate-400">charCount:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{JSON.stringify(charCounts)}</span>
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
                  : 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-400 dark:border-purple-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-purple-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Shuffle className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-purple-900 dark:text-purple-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-purple-800 dark:text-purple-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Character Frequency Visualization */}
            {currentStep >= 0 && Object.keys(charCounts).length > 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-purple-300 dark:border-purple-600 shadow-lg">
                <h4 className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-4">Character Frequency Map:</h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {Object.entries(charCounts).map(([char, count]) => (
                    <div
                      key={char}
                      className={`relative p-4 rounded-lg border-2 transition-all duration-500 ${
                        currentChar === char
                          ? 'scale-110 shadow-xl ring-4 ring-purple-400 dark:ring-purple-500'
                          : ''
                      } ${
                        count === 0
                          ? 'bg-green-100 dark:bg-green-900/40 border-green-500'
                          : 'bg-purple-100 dark:bg-purple-900/40 border-purple-500'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">{char}</div>
                        <div className={`text-sm font-semibold ${count === 0 ? 'text-green-700 dark:text-green-300' : 'text-purple-700 dark:text-purple-300'}`}>
                          {count}
                        </div>
                      </div>
                      {count === 0 && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
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
          <CardDescription>Multiple approaches to check anagrams</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
            title="Method 1: Hash Map (Optimal)"
            description="Count character frequencies"
            language="javascript"
            colorTheme="purple"
            icon={Shuffle}
            code={`function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const charCount = {};
  
  // Count characters in first string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Decrement for second string
  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  
  // Check all counts are zero
  for (let count of Object.values(charCount)) {
    if (count !== 0) return false;
  }
  
  return true;
}

// Test it
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false`}
          />

          <CodeSnippet
            title="Method 2: Sorting"
            description="Sort both strings and compare"
            language="javascript"
            colorTheme="blue"
            icon={Shuffle}
            code={`function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  
  return sortedS === sortedT;
}

// Test it
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("anagram", "nagaram")); // true`}
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
              <h4 className="font-semibold mb-1">1. Different Lengths</h4>
              <p className="text-sm text-muted-foreground">Strings with different lengths can't be anagrams</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isAnagram("abc", "abcd") // false
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Empty Strings</h4>
              <p className="text-sm text-muted-foreground">Two empty strings are anagrams</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isAnagram("", "") // true
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Case Sensitivity</h4>
              <p className="text-sm text-muted-foreground">Consider if uppercase and lowercase are different</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isAnagram("Listen", "silent") // false (case-sensitive)
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Special Characters</h4>
              <p className="text-sm text-muted-foreground">Handle spaces and special characters</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                isAnagram("a-b", "b-a") // true
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
              { name: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/' },
              { name: 'Group Anagrams', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/' },
              { name: 'Find All Anagrams in a String', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' },
              { name: 'Minimum Number of Steps to Make Two Strings Anagram', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/' },
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
              <span>Hash map approach: <strong>O(n) time, O(1) space</strong> (26 letters max)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Count characters in first string, decrement for second string</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Sorting approach: <strong>O(n log n) time</strong> - simpler but slower</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Always check lengths first for early return</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Handle edge cases: empty strings, case sensitivity, special characters</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
