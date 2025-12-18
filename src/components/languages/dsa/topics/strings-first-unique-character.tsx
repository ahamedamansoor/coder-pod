'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Star, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FirstUniqueCharacter() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [charCounts, setCharCounts] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [phase, setPhase] = useState<'count' | 'find'>('count');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testString = "leetcode";
  
  const steps = [
    { 
      step: 1,
      counts: {},
      index: -1,
      found: -1,
      phase: 'count' as const,
      currentLine: 2,
      description: '📋 Initialize: Find first unique (non-repeating) character in "leetcode". Start by counting all characters.'
    },
    { 
      step: 2,
      counts: {},
      index: -1,
      found: -1,
      phase: 'count' as const,
      currentLine: 3,
      description: '🔢 Create Hash Map: Initialize empty object to store character frequencies.'
    },
    { 
      step: 3,
      counts: { l: 1 },
      index: 0,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'l\': First character at index 0. charCount[\'l\'] = 1'
    },
    { 
      step: 4,
      counts: { l: 1, e: 1 },
      index: 1,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'e\': Character at index 1. charCount[\'e\'] = 1'
    },
    { 
      step: 5,
      counts: { l: 1, e: 2 },
      index: 2,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'e\': Found \'e\' again at index 2! charCount[\'e\'] = 2 (repeating)'
    },
    { 
      step: 6,
      counts: { l: 1, e: 2, t: 1 },
      index: 3,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'t\': Character at index 3. charCount[\'t\'] = 1'
    },
    { 
      step: 7,
      counts: { l: 1, e: 3, t: 1 },
      index: 4,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'e\': Found \'e\' again at index 4! charCount[\'e\'] = 3 (repeating)'
    },
    { 
      step: 8,
      counts: { l: 1, e: 3, t: 1, c: 1 },
      index: 5,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'c\': Character at index 5. charCount[\'c\'] = 1'
    },
    { 
      step: 9,
      counts: { l: 1, e: 3, t: 1, c: 1, o: 1 },
      index: 6,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'o\': Character at index 6. charCount[\'o\'] = 1'
    },
    { 
      step: 10,
      counts: { l: 1, e: 4, t: 1, c: 1, o: 1 },
      index: 7,
      found: -1,
      phase: 'count' as const,
      currentLine: 6,
      description: '📊 Count \'e\': Found \'e\' again at index 7! charCount[\'e\'] = 4 (very repeating). Counting complete!'
    },
    { 
      step: 11,
      counts: { l: 1, e: 4, t: 1, c: 1, o: 1 },
      index: -1,
      found: -1,
      phase: 'find' as const,
      currentLine: 10,
      description: '🔍 Phase 2: Now find the FIRST character with count = 1. Loop through string again.'
    },
    { 
      step: 12,
      counts: { l: 1, e: 4, t: 1, c: 1, o: 1 },
      index: 0,
      found: -1,
      phase: 'find' as const,
      currentLine: 11,
      description: '🔍 Check index 0: char = \'l\', count = 1. Is it unique? Yes! But keep checking...'
    },
    { 
      step: 13,
      counts: { l: 1, e: 4, t: 1, c: 1, o: 1 },
      index: 0,
      found: -1,
      phase: 'find' as const,
      currentLine: 12,
      description: '❓ Check: charCount[\'l\'] === 1? Yes! This is our first unique character!'
    },
    { 
      step: 14,
      counts: { l: 1, e: 4, t: 1, c: 1, o: 1 },
      index: 0,
      found: 0,
      phase: 'find' as const,
      currentLine: 13,
      description: '✅ Found! First unique character is \'l\' at index 0. Return 0!'
    },
    { 
      step: 15,
      counts: { l: 1, e: 4, t: 1, c: 1, o: 1 },
      index: -1,
      found: 0,
      phase: 'find' as const,
      currentLine: 17,
      description: '🎉 Algorithm Complete! Result: index 0 (character \'l\' is the first unique character)'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const countsStr = JSON.stringify(stepData.counts);
    const countsSize = Object.keys(stepData.counts).length;
    
    const showS = `s = "${testString}"`;
    const showCharCount = countsSize > 0 ? `charCount = ${countsStr}` : `charCount = {}`;
    const currentChar = stepData.index >= 0 && stepData.index < testString.length ? testString[stepData.index] : '';
    const showChar = currentChar ? `char = '${currentChar}'` : '';
    const showIndex = stepData.index >= 0 ? `i = ${stepData.index}` : '';
    
    return [
      { line: 1, code: 'function firstUniqChar(s) {', active: stepData.currentLine === 1, indent: 0, values: showS },
      { line: 2, code: `  const charCount = {};`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: showCharCount },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  // First pass: count all characters`, active: false, indent: 1, comment: true },
      { line: 5, code: `  for (let i = 0; i < s.length; i++) {`, active: stepData.currentLine === 5 && stepData.phase === 'count', indent: 1, values: stepData.phase === 'count' && stepData.index >= 0 ? `${showIndex}, ${showChar}` : stepData.phase === 'count' ? 'Count phase' : '' },
      { line: 6, code: `    charCount[s[i]] = (charCount[s[i]] || 0) + 1;`, active: stepData.currentLine === 6 && stepData.phase === 'count', indent: 2, values: stepData.phase === 'count' && currentChar ? `[${currentChar}] = ${(stepData.counts[currentChar] || 1) - 1} + 1 = ${stepData.counts[currentChar]}` : '' },
      { line: 7, code: `  }`, active: false, indent: 1, values: stepData.phase === 'count' && stepData.index === 7 ? showCharCount : '' },
      { line: 8, code: `  `, active: false, indent: 1 },
      { line: 9, code: `  // Second pass: find first unique`, active: false, indent: 1, comment: true },
      { line: 10, code: `  for (let i = 0; i < s.length; i++) {`, active: stepData.currentLine === 10 && stepData.phase === 'find', indent: 1, values: stepData.phase === 'find' && stepData.index >= 0 ? `${showIndex}, ${showChar}` : stepData.phase === 'find' ? 'Find phase' : '' },
      { line: 11, code: `    if (charCount[s[i]] === 1) {`, active: stepData.currentLine === 11 || stepData.currentLine === 12, indent: 2, values: stepData.phase === 'find' && currentChar ? `[${currentChar}] === 1? ${stepData.counts[currentChar] === 1 ? 'Yes ✓' : 'No ✗'}` : '' },
      { line: 12, code: `      return i;`, active: stepData.currentLine === 13, indent: 3, values: stepData.currentLine === 13 ? `return ${stepData.found}` : '' },
      { line: 13, code: `    }`, active: false, indent: 2 },
      { line: 14, code: `  }`, active: false, indent: 1 },
      { line: 15, code: `  `, active: false, indent: 1 },
      { line: 16, code: `  return -1;  // No unique character`, active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 ? 'return -1' : '' },
      { line: 17, code: `}`, active: stepData.currentLine === 17, indent: 0, values: stepData.currentLine === 17 ? `Result: ${stepData.found}` : '' },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCharCounts(step.counts);
    setCurrentIndex(step.index);
    setFoundIndex(step.found);
    setPhase(step.phase);
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
        icon={Star}
        category="DSA · Strings"
        title="First Unique Character"
        description="Learn how to find the first non-repeating character in a string using hash map"
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
                <p className="font-medium">Hash Map Frequency Count</p>
                <p className="text-sm text-muted-foreground">Count character occurrences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Two-Pass Algorithm</p>
                <p className="text-sm text-muted-foreground">Count then find pattern</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Index Tracking</p>
                <p className="text-sm text-muted-foreground">Return position not character</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Edge Case Handling</p>
                <p className="text-sm text-muted-foreground">No unique character scenario</p>
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
          <CardDescription>Understanding unique characters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" /> Character Analysis: "leetcode"
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-amber-300 dark:border-amber-600">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-3">String with indices:</p>
                <div className="flex flex-wrap items-center gap-2">
                  {testString.split('').map((char, idx) => {
                    const count = testString.split('').filter(c => c === char).length;
                    const isUnique = count === 1;
                    const isFirst = isUnique && testString.indexOf(char) === idx;
                    
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg border-2 ${
                            isFirst
                              ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100 ring-4 ring-green-300'
                              : isUnique
                              ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100'
                              : 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100 opacity-60'
                          }`}
                        >
                          {char}
                        </div>
                        <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">×{count}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded"></div>
                    <span className="font-semibold text-green-700 dark:text-green-300">First Unique</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Unique</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded opacity-60"></div>
                    <span className="font-semibold text-red-700 dark:text-red-300">Repeating</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Result:</p>
                <p className="text-lg font-bold text-green-900 dark:text-green-100">
                  Index 0 → Character 'l' (appears once)
                </p>
              </div>
            </div>
          </div>

          {/* Character Frequency */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span> Character Frequency Count
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { char: 'l', count: 1, unique: true },
                  { char: 'e', count: 4, unique: false },
                  { char: 't', count: 1, unique: true },
                  { char: 'c', count: 1, unique: true },
                  { char: 'o', count: 1, unique: true },
                  { char: 'd', count: 1, unique: true },
                ].map((item) => (
                  <div key={item.char} className={`p-3 rounded-lg border-2 ${
                    item.unique
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-red-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">'{item.char}'</span>
                      <span className={`text-sm font-semibold ${
                        item.unique ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                      }`}>
                        ×{item.count}
                      </span>
                    </div>
                  </div>
                ))}
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
                { num: 1, title: 'Create Hash Map', desc: 'Initialize empty object for frequency count' },
                { num: 2, title: 'First Pass: Count', desc: 'Loop through string, count each character' },
                { num: 3, title: 'Second Pass: Find', desc: 'Loop again to find first char with count = 1' },
                { num: 4, title: 'Return Index', desc: 'Return index of first unique character' },
                { num: 5, title: 'Handle Not Found', desc: 'Return -1 if no unique character exists' },
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
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <Star className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm find the first unique character step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-amber-300 dark:border-amber-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-amber-900 dark:text-amber-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-amber-600 border-amber-300 focus:ring-amber-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-amber-800 dark:text-amber-200 capitalize">{speed}</span>
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
                    className="border-amber-300 dark:border-amber-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg border border-amber-300 dark:border-amber-700">
                    <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-amber-300 dark:border-amber-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">firstUniqChar.js</span>
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
                          <span className="ml-3 text-amber-600 dark:text-amber-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">Phase:</span>
                        <span className="font-semibold text-amber-600 dark:text-amber-400">{phase === 'count' ? 'Counting' : 'Finding'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Index:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{currentIndex >= 0 ? currentIndex : '-'}</span>
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
                  : 'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-400 dark:border-amber-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-amber-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Star className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-amber-900 dark:text-amber-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-amber-800 dark:text-amber-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Character Frequency Visualization */}
            {currentStep >= 0 && Object.keys(charCounts).length > 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-amber-300 dark:border-amber-600 shadow-lg">
                <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-4">Character Frequency Map:</h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {Object.entries(charCounts).map(([char, count]) => {
                    const isCurrent = currentIndex >= 0 && testString[currentIndex] === char;
                    const isUnique = count === 1;
                    
                    return (
                      <div
                        key={char}
                        className={`relative p-4 rounded-lg border-2 transition-all duration-500 ${
                          isCurrent
                            ? 'scale-110 shadow-xl ring-4 ring-amber-400 dark:ring-amber-500'
                            : ''
                        } ${
                          isUnique
                            ? 'bg-green-100 dark:bg-green-900/40 border-green-500'
                            : 'bg-red-100 dark:bg-red-900/40 border-red-500'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1">{char}</div>
                          <div className={`text-sm font-semibold ${isUnique ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                            ×{count}
                          </div>
                        </div>
                        {isUnique && foundIndex === testString.indexOf(char) && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                            ✓
                          </div>
                        )}
                      </div>
                    );
                  })}
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
          <CardDescription>Full working code with examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
            title="First Unique Character"
            description="Two-pass hash map approach"
            language="javascript"
            colorTheme="green"
            icon={Star}
            code={`function firstUniqChar(s) {
  const charCount = {};
  
  // First pass: count all characters
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }
  
  // Second pass: find first unique
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }
  
  return -1;  // No unique character
}

// Test cases
console.log(firstUniqChar("leetcode"));
// Output: 0 (first unique char is 'l')

console.log(firstUniqChar("loveleetcode"));
// Output: 2 (first unique char is 'v')

console.log(firstUniqChar("aabb"));
// Output: -1 (no unique character)`}
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
              <h4 className="font-semibold mb-1">1. Empty String</h4>
              <p className="text-sm text-muted-foreground">No characters to check</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                firstUniqChar("") // -1
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. All Repeating</h4>
              <p className="text-sm text-muted-foreground">No unique character exists</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                firstUniqChar("aabbcc") // -1
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Single Character</h4>
              <p className="text-sm text-muted-foreground">One character is always unique</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                firstUniqChar("a") // 0
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Unique at End</h4>
              <p className="text-sm text-muted-foreground">First unique might be last character</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                firstUniqChar("aabbz") // 4
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
              { name: 'First Unique Character in a String', difficulty: 'Easy', link: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
              { name: 'First Letter to Appear Twice', difficulty: 'Easy', link: 'https://leetcode.com/problems/first-letter-to-appear-twice/' },
              { name: 'Find All Numbers Disappeared in an Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/' },
              { name: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/' },
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
              <span>Two-pass algorithm: <strong>Count then Find</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>First pass builds frequency map of all characters</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Second pass finds first character with count = 1</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n)</strong>, Space: <strong>O(1)</strong> (26 letters max)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Return index, not the character itself</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
