'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Type, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function CountVowelsConsonants() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [vowelCount, setVowelCount] = useState(0);
  const [consonantCount, setConsonantCount] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [charType, setCharType] = useState<'vowel' | 'consonant' | 'other' | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testString = "Hello World!";
  
  const steps = [
    { 
      step: 1,
      vowels: 0,
      consonants: 0,
      charIndex: -1,
      type: null,
      currentLine: 2,
      description: '📋 Initialize: Set vowelCount = 0 and consonantCount = 0. We\'ll examine each character in "Hello World!".'
    },
    { 
      step: 2,
      vowels: 0,
      consonants: 0,
      charIndex: -1,
      type: null,
      currentLine: 3,
      description: '📋 Initialize: Convert string to lowercase for easier comparison. "Hello World!" becomes "hello world!".'
    },
    { 
      step: 3,
      vowels: 0,
      consonants: 0,
      charIndex: 0,
      type: null,
      currentLine: 5,
      description: '🔍 Loop Start: i = 0. Examining character \'H\' (lowercase: \'h\') at index 0.'
    },
    { 
      step: 4,
      vowels: 0,
      consonants: 0,
      charIndex: 0,
      type: null,
      currentLine: 6,
      description: '🔤 Check Letter: Is \'h\' a letter? Yes! (a-z or A-Z). Continue checking if it\'s a vowel or consonant.'
    },
    { 
      step: 5,
      vowels: 0,
      consonants: 0,
      charIndex: 0,
      type: null,
      currentLine: 7,
      description: '❓ Check Vowel: Is \'h\' a vowel (a, e, i, o, u)? No! \'h\' is not in the vowel set.'
    },
    { 
      step: 6,
      vowels: 0,
      consonants: 1,
      charIndex: 0,
      type: 'consonant',
      currentLine: 10,
      description: '✅ Found Consonant: \'h\' is a consonant! Increment consonantCount (0→1).'
    },
    { 
      step: 7,
      vowels: 1,
      consonants: 1,
      charIndex: 1,
      type: 'vowel',
      currentLine: 8,
      description: '🔍 i = 1: Character \'e\' is a vowel! Increment vowelCount (0→1). Total: 1 vowel, 1 consonant.'
    },
    { 
      step: 8,
      vowels: 1,
      consonants: 2,
      charIndex: 2,
      type: 'consonant',
      currentLine: 10,
      description: '🔍 i = 2: Character \'l\' is a consonant! Increment consonantCount (1→2). Total: 1 vowel, 2 consonants.'
    },
    { 
      step: 9,
      vowels: 1,
      consonants: 3,
      charIndex: 3,
      type: 'consonant',
      currentLine: 10,
      description: '🔍 i = 3: Character \'l\' is a consonant! Increment consonantCount (2→3). Total: 1 vowel, 3 consonants.'
    },
    { 
      step: 10,
      vowels: 2,
      consonants: 3,
      charIndex: 4,
      type: 'vowel',
      currentLine: 8,
      description: '🔍 i = 4: Character \'o\' is a vowel! Increment vowelCount (1→2). Total: 2 vowels, 3 consonants.'
    },
    { 
      step: 11,
      vowels: 2,
      consonants: 3,
      charIndex: 5,
      type: 'other',
      currentLine: 6,
      description: '🔍 i = 5: Character \' \' (space) is not a letter. Skip it! No counters change.'
    },
    { 
      step: 12,
      vowels: 2,
      consonants: 4,
      charIndex: 6,
      type: 'consonant',
      currentLine: 10,
      description: '🔍 i = 6: Character \'W\' (lowercase: \'w\') is a consonant! Increment consonantCount (3→4).'
    },
    { 
      step: 13,
      vowels: 3,
      consonants: 4,
      charIndex: 7,
      type: 'vowel',
      currentLine: 8,
      description: '🔍 i = 7: Character \'o\' is a vowel! Increment vowelCount (2→3). Total: 3 vowels, 4 consonants.'
    },
    { 
      step: 14,
      vowels: 3,
      consonants: 5,
      charIndex: 8,
      type: 'consonant',
      currentLine: 10,
      description: '🔍 i = 8: Character \'r\' is a consonant! Increment consonantCount (4→5).'
    },
    { 
      step: 15,
      vowels: 3,
      consonants: 6,
      charIndex: 9,
      type: 'consonant',
      currentLine: 10,
      description: '🔍 i = 9: Character \'l\' is a consonant! Increment consonantCount (5→6).'
    },
    { 
      step: 16,
      vowels: 3,
      consonants: 7,
      charIndex: 10,
      type: 'consonant',
      currentLine: 10,
      description: '🔍 i = 10: Character \'d\' is a consonant! Increment consonantCount (6→7).'
    },
    { 
      step: 17,
      vowels: 3,
      consonants: 7,
      charIndex: 11,
      type: 'other',
      currentLine: 6,
      description: '🔍 i = 11: Character \'!\' is not a letter. Skip it! Final count remains: 3 vowels, 7 consonants.'
    },
    { 
      step: 18,
      vowels: 3,
      consonants: 7,
      charIndex: -1,
      type: null,
      currentLine: 13,
      description: '✅ Loop Complete: Examined all 12 characters. Final Result: 3 vowels, 7 consonants!'
    },
    { 
      step: 19,
      vowels: 3,
      consonants: 7,
      charIndex: -1,
      type: null,
      currentLine: 14,
      description: '🎉 Algorithm Complete! "Hello World!" contains 3 vowels (e, o, o) and 7 consonants (H, l, l, W, r, l, d).'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function countVowelsConsonants(str) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let vowelCount = 0;`, active: stepData.currentLine === 2, indent: 1, values: `vowels = ${stepData.vowels}` },
      { line: 3, code: `  let consonantCount = 0;`, active: stepData.currentLine === 3, indent: 1, values: `consonants = ${stepData.consonants}` },
      { line: 4, code: `  const vowels = 'aeiouAEIOU';`, active: false, indent: 1 },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let i = 0; i < str.length; i++) {`, active: stepData.currentLine === 5, indent: 1, values: stepData.charIndex >= 0 ? `i = ${stepData.charIndex}` : '' },
      { line: 7, code: `    const char = str[i];`, active: stepData.currentLine === 6, indent: 2, values: stepData.charIndex >= 0 ? `char = '${testString[stepData.charIndex]}'` : '' },
      { line: 8, code: `    `, active: false, indent: 2 },
      { line: 9, code: `    if (/[a-zA-Z]/.test(char)) {`, active: stepData.currentLine === 6, indent: 2, values: stepData.type !== 'other' && stepData.charIndex >= 0 ? '✓ is letter' : stepData.charIndex >= 0 ? '✗ not letter' : '' },
      { line: 10, code: `      if (vowels.includes(char)) {`, active: stepData.currentLine === 7, indent: 3, values: stepData.type === 'vowel' ? '✓ is vowel' : stepData.type === 'consonant' ? '✗ is consonant' : '' },
      { line: 11, code: `        vowelCount++;`, active: stepData.currentLine === 8 && stepData.type === 'vowel', indent: 4, values: stepData.type === 'vowel' ? `vowels = ${stepData.vowels}` : '' },
      { line: 12, code: `      } else {`, active: false, indent: 3 },
      { line: 13, code: `        consonantCount++;`, active: stepData.currentLine === 10 && stepData.type === 'consonant', indent: 4, values: stepData.type === 'consonant' ? `consonants = ${stepData.consonants}` : '' },
      { line: 14, code: `      }`, active: false, indent: 3 },
      { line: 15, code: `    }`, active: false, indent: 2 },
      { line: 16, code: `  }`, active: false, indent: 1 },
      { line: 17, code: `  `, active: false, indent: 1 },
      { line: 18, code: `  return { vowelCount, consonantCount };`, active: stepData.currentLine === 13 || stepData.currentLine === 14, indent: 1, values: stepData.currentLine >= 13 ? `{${stepData.vowels}, ${stepData.consonants}}` : '' },
      { line: 19, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setVowelCount(step.vowels);
    setConsonantCount(step.consonants);
    setCurrentCharIndex(step.charIndex);
    setCharType(step.type as any);
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
        icon={Type}
        category="DSA · Strings"
        title="Count Vowels and Consonants"
        description="Learn how to count vowels and consonants in a string using character checking"
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
                <p className="font-medium">Character Checking</p>
                <p className="text-sm text-muted-foreground">Identify vowels and consonants</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">String Traversal</p>
                <p className="text-sm text-muted-foreground">Loop through each character</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Case Handling</p>
                <p className="text-sm text-muted-foreground">Handle uppercase and lowercase</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Filter Non-Letters</p>
                <p className="text-sm text-muted-foreground">Skip spaces and special characters</p>
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
          <CardDescription>Understanding what we need to solve</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given a string, count how many vowels (a, e, i, o, u) and consonants it contains. Ignore spaces, numbers, and special characters.
          </p>

          {/* Visual String Analysis */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Type className="w-5 h-5" /> Analyzing "Hello World!"
            </h4>
            
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-purple-300 dark:border-purple-600">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {testString.split('').map((char, idx) => {
                  const isVowel = 'aeiouAEIOU'.includes(char);
                  const isLetter = /[a-zA-Z]/.test(char);
                  const isConsonant = isLetter && !isVowel;
                  
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded flex items-center justify-center font-bold text-sm border-2 ${
                        isVowel
                          ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                          : isConsonant
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100'
                          : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500'
                      }`}>
                        {char === ' ' ? '␣' : char}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded"></div>
                  <span className="font-semibold text-green-700 dark:text-green-300">Vowels: 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 rounded"></div>
                  <span className="font-semibold text-blue-700 dark:text-blue-300">Consonants: 7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Other: 2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Algorithm Steps
            </h4>
            
            <div className="space-y-3">
              {[
                { num: 1, title: 'Initialize Counters', desc: 'Set vowelCount = 0, consonantCount = 0' },
                { num: 2, title: 'Loop Through String', desc: 'For each character in the string' },
                { num: 3, title: 'Check if Letter', desc: 'Skip if not a letter (space, number, symbol)' },
                { num: 4, title: 'Check Vowel', desc: 'If char is in "aeiouAEIOU", increment vowelCount' },
                { num: 5, title: 'Else Consonant', desc: 'Otherwise, increment consonantCount' },
                { num: 6, title: 'Return Result', desc: 'Return both counts as an object' },
              ].map((step) => (
                <div key={step.num} className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-cyan-300 dark:border-cyan-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">{step.title}</h5>
                      <p className="text-sm text-cyan-800 dark:text-cyan-200">{step.desc}</p>
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
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Two counters</div>
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
              <Type className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm count vowels and consonants step-by-step</CardDescription>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">countVowelsConsonants.js</span>
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
                        <span className="text-slate-500 dark:text-slate-400">vowels:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{vowelCount}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">consonants:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{consonantCount}</span>
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
                        <Type className="w-6 h-6 text-white" />
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

            {/* Character Visualization */}
            {currentStep >= 0 && currentCharIndex >= 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-purple-300 dark:border-purple-600 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-purple-900 dark:text-purple-100">Current String Analysis:</h4>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-300 dark:border-green-700">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="font-semibold text-green-700 dark:text-green-300">{vowelCount} vowels</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-300 dark:border-blue-700">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="font-semibold text-blue-700 dark:text-blue-300">{consonantCount} consonants</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {testString.split('').map((char, idx) => {
                    const isVowel = 'aeiouAEIOU'.includes(char);
                    const isLetter = /[a-zA-Z]/.test(char);
                    const isConsonant = isLetter && !isVowel;
                    const isCurrent = idx === currentCharIndex;
                    const isProcessed = idx < currentCharIndex;
                    
                    return (
                      <div
                        key={idx}
                        className={`relative w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm border-2 transition-all duration-500 ${
                          isCurrent
                            ? 'scale-125 shadow-2xl animate-pulse'
                            : isProcessed
                            ? 'opacity-60 scale-95'
                            : 'opacity-40 scale-90'
                        } ${
                          isVowel
                            ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 border-green-500 text-green-900 dark:text-green-100'
                            : isConsonant
                            ? 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-blue-500 text-blue-900 dark:text-blue-100'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-gray-300 dark:border-gray-600 text-gray-500'
                        } ${
                          isCurrent && isVowel
                            ? 'ring-4 ring-green-400 dark:ring-green-500'
                            : isCurrent && isConsonant
                            ? 'ring-4 ring-blue-400 dark:ring-blue-500'
                            : isCurrent
                            ? 'ring-4 ring-purple-400 dark:ring-purple-500'
                            : ''
                        }`}
                      >
                        {char === ' ' ? '␣' : char}
                        {isCurrent && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <div className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded-full shadow-lg animate-bounce">
                              Checking...
                            </div>
                          </div>
                        )}
                        {isProcessed && isVowel && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                            V
                          </div>
                        )}
                        {isProcessed && isConsonant && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px]">
                            C
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {charType && (
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full animate-pulse ${
                        charType === 'vowel' ? 'bg-green-500' :
                        charType === 'consonant' ? 'bg-blue-500' :
                        'bg-gray-500'
                      }`}></div>
                      <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                        {charType === 'vowel' && '✓ Vowel found! Incrementing vowel count...'}
                        {charType === 'consonant' && '✓ Consonant found! Incrementing consonant count...'}
                        {charType === 'other' && '⊗ Not a letter - skipping...'}
                      </span>
                    </div>
                  </div>
                )}
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
            title="Count Vowels and Consonants"
            description="Complete function with test cases"
            language="javascript"
            colorTheme="green"
            icon={Type}
            code={`function countVowelsConsonants(str) {
  let vowelCount = 0;
  let consonantCount = 0;
  const vowels = 'aeiouAEIOU';
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // Check if character is a letter
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  
  return { vowelCount, consonantCount };
}

// Test cases
console.log(countVowelsConsonants("Hello World!"));
// Output: { vowelCount: 3, consonantCount: 7 }

console.log(countVowelsConsonants("JavaScript"));
// Output: { vowelCount: 3, consonantCount: 7 }

console.log(countVowelsConsonants("aEiOu"));
// Output: { vowelCount: 5, consonantCount: 0 }

console.log(countVowelsConsonants("bcdfg"));
// Output: { vowelCount: 0, consonantCount: 5 }`}
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
              <p className="text-sm text-muted-foreground">String with no characters</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                countVowelsConsonants("") // {'{ vowelCount: 0, consonantCount: 0 }'}
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Only Spaces/Special Chars</h4>
              <p className="text-sm text-muted-foreground">No letters to count</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                countVowelsConsonants("123 !@#") // {'{ vowelCount: 0, consonantCount: 0 }'}
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Only Vowels</h4>
              <p className="text-sm text-muted-foreground">String with no consonants</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                countVowelsConsonants("aeiou") // {'{ vowelCount: 5, consonantCount: 0 }'}
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Mixed Case</h4>
              <p className="text-sm text-muted-foreground">Handle uppercase and lowercase</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                countVowelsConsonants("HeLLo") // {'{ vowelCount: 2, consonantCount: 3 }'}
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
              { name: 'Vowel Spellchecker', difficulty: 'Medium', link: 'https://leetcode.com/problems/vowel-spellchecker/' },
              { name: 'Remove Vowels from a String', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-vowels-from-a-string/' },
              { name: 'Count the Number of Vowel Strings in Range', difficulty: 'Easy', link: 'https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/' },
              { name: 'Reverse Vowels of a String', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-vowels-of-a-string/' },
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
              <span>Use character checking to identify vowels: <strong>includes() or regex</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Filter out non-letters using regex: <strong>/[a-zA-Z]/.test(char)</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Handle both cases by including both in vowel string</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Single pass solution: <strong>O(n) time, O(1) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Remember: if it's a letter and not a vowel, it's a consonant</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
