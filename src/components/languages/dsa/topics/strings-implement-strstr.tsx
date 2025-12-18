'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Search, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ImplementStrStr() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentI, setCurrentI] = useState(-1);
  const [currentJ, setCurrentJ] = useState(-1);
  const [matchFound, setMatchFound] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const haystack = "hello";
  const needle = "ll";
  
  const steps = [
    { 
      step: 1,
      i: -1,
      j: -1,
      match: false,
      currentLine: 2,
      description: '📋 Initialize: Find "ll" in "hello". Return the index where needle starts, or -1 if not found.'
    },
    { 
      step: 2,
      i: -1,
      j: -1,
      match: false,
      currentLine: 3,
      description: '❓ Edge Case: Is needle empty? No! needle = "ll" (length 2). Continue with algorithm.'
    },
    { 
      step: 3,
      i: 0,
      j: -1,
      match: false,
      currentLine: 5,
      description: '🔁 Loop Start: for (i = 0; i <= 5-2; i++). Start at i = 0. Check if pattern starts here.'
    },
    { 
      step: 4,
      i: 0,
      j: -1,
      match: false,
      currentLine: 6,
      description: '✂️ Get Substring: haystack.substring(0, 0+2) = "hello".substring(0, 2) = "he"'
    },
    { 
      step: 5,
      i: 0,
      j: -1,
      match: false,
      currentLine: 7,
      description: '❓ Compare: Does "he" === "ll"? No! Characters don\'t match. Move to next position.'
    },
    { 
      step: 6,
      i: 1,
      j: -1,
      match: false,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 1. Now check if pattern starts at position 1.'
    },
    { 
      step: 7,
      i: 1,
      j: -1,
      match: false,
      currentLine: 6,
      description: '✂️ Get Substring: haystack.substring(1, 1+2) = "hello".substring(1, 3) = "el"'
    },
    { 
      step: 8,
      i: 1,
      j: -1,
      match: false,
      currentLine: 7,
      description: '❓ Compare: Does "el" === "ll"? No! Still not matching. Continue searching.'
    },
    { 
      step: 9,
      i: 2,
      j: -1,
      match: false,
      currentLine: 5,
      description: '🔁 Loop Continue: i = 2. Check if pattern starts at position 2.'
    },
    { 
      step: 10,
      i: 2,
      j: -1,
      match: false,
      currentLine: 6,
      description: '✂️ Get Substring: haystack.substring(2, 2+2) = "hello".substring(2, 4) = "ll"'
    },
    { 
      step: 11,
      i: 2,
      j: -1,
      match: true,
      currentLine: 7,
      description: '✅ Compare: Does "ll" === "ll"? Yes! Perfect match! Found needle at index 2!'
    },
    { 
      step: 12,
      i: 2,
      j: -1,
      match: true,
      currentLine: 8,
      description: '🎉 Return Index: return i = 2. Needle "ll" found at position 2 in "hello"!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const showHaystack = `haystack = "${haystack}"`;
    const showNeedle = `needle = "${needle}"`;
    const showI = stepData.i >= 0 ? `i = ${stepData.i}` : '';
    const substring = stepData.i >= 0 ? haystack.substring(stepData.i, stepData.i + needle.length) : '';
    const showSubstring = substring ? `substring = "${substring}"` : '';
    
    return [
      { line: 1, code: 'function strStr(haystack, needle) {', active: stepData.currentLine === 1, indent: 0, values: `${showHaystack}, ${showNeedle}` },
      { line: 2, code: `  if (needle === "") return 0;`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: `"${needle}" === ""? false` },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  for (let i = 0; i <= haystack.length - needle.length; i++) {`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: showI ? `${showI}, check until ${haystack.length - needle.length}` : `Loop: i <= ${haystack.length - needle.length}` },
      { line: 5, code: `    const sub = haystack.substring(i, i + needle.length);`, active: stepData.currentLine === 6, indent: 2, values: showSubstring ? `${showSubstring} from [${stepData.i}, ${stepData.i + needle.length})` : '' },
      { line: 6, code: `    `, active: false, indent: 2 },
      { line: 7, code: `    if (sub === needle) {`, active: stepData.currentLine === 7, indent: 2, values: substring ? `"${substring}" === "${needle}"? ${stepData.match ? 'Yes ✓' : 'No ✗'}` : '' },
      { line: 8, code: `      return i;`, active: stepData.currentLine === 8, indent: 3, values: stepData.match ? `return ${stepData.i}` : '' },
      { line: 9, code: `    }`, active: false, indent: 2 },
      { line: 10, code: `  }`, active: false, indent: 1 },
      { line: 11, code: `  `, active: false, indent: 1 },
      { line: 12, code: `  return -1;  // Not found`, active: stepData.currentLine === 12, indent: 1, values: stepData.currentLine === 12 ? 'return -1' : '' },
      { line: 13, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setCurrentI(step.i);
    setCurrentJ(step.j);
    setMatchFound(step.match);
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
        icon={Search}
        category="DSA · Strings"
        title="Implement strStr()"
        description="Learn how to find the first occurrence of a substring (needle) in a string (haystack)"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(n*m)', 'Space: O(1)'].map((badge, index) => (
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
                <p className="font-medium">Substring Matching</p>
                <p className="text-sm text-muted-foreground">Find pattern in text</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Sliding Window Pattern</p>
                <p className="text-sm text-muted-foreground">Check each possible position</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">String.substring() Usage</p>
                <p className="text-sm text-muted-foreground">Extract portions of string</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Edge Case Handling</p>
                <p className="text-sm text-muted-foreground">Empty needle and not found</p>
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
          <CardDescription>Find the needle in the haystack</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. This is essentially implementing the <code className="text-sm bg-muted px-1.5 py-0.5 rounded">indexOf()</code> method.
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-sky-200 dark:border-sky-700">
            <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" /> Search Example: Find "ll" in "hello"
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-sky-300 dark:border-sky-600">
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-300 mb-3">Haystack: "hello"</p>
                <div className="flex gap-1 mb-6">
                  {haystack.split('').map((char, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded flex items-center justify-center font-bold text-lg border-2 transition-all duration-300 ${
                          currentI === 2 && (idx === 2 || idx === 3)
                            ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100 scale-110 shadow-lg'
                            : currentI >= 0 && idx >= currentI && idx < currentI + needle.length
                            ? 'bg-yellow-100 dark:bg-yellow-900 border-yellow-500 text-yellow-900 dark:text-yellow-100'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-600'
                        }`}
                      >
                        {char}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">Needle: "ll"</p>
                <div className="flex gap-1">
                  {needle.split('').map((char, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 rounded flex items-center justify-center font-bold text-lg text-purple-900 dark:text-purple-100">
                        {char}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">[{idx}]</span>
                    </div>
                  ))}
                </div>
              </div>

              {matchFound && (
                <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">✓ Found at index:</p>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100">2</p>
                </div>
              )}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🔍</span> How Substring Matching Works
            </h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-950 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Position 0:</span>
                  <span className="text-xs text-red-600 dark:text-red-400">✗ No match</span>
                </div>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-500 rounded font-mono font-bold text-sm">h</div>
                  <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-500 rounded font-mono font-bold text-sm">e</div>
                  <span className="mx-2 text-red-600">≠</span>
                  <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-500 rounded font-mono font-bold text-sm">l</div>
                  <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-500 rounded font-mono font-bold text-sm">l</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-950 p-3 rounded border border-cyan-300 dark:border-cyan-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Position 1:</span>
                  <span className="text-xs text-red-600 dark:text-red-400">✗ No match</span>
                </div>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-500 rounded font-mono font-bold text-sm">e</div>
                  <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-500 rounded font-mono font-bold text-sm">l</div>
                  <span className="mx-2 text-red-600">≠</span>
                  <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-500 rounded font-mono font-bold text-sm">l</div>
                  <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-500 rounded font-mono font-bold text-sm">l</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-950 p-3 rounded border-2 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">Position 2:</span>
                  <span className="text-xs text-green-600 dark:text-green-400 font-bold">✓ MATCH!</span>
                </div>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-green-100 dark:bg-green-900/40 border-2 border-green-500 rounded font-mono font-bold text-sm">l</div>
                  <div className="px-2 py-1 bg-green-100 dark:bg-green-900/40 border-2 border-green-500 rounded font-mono font-bold text-sm">l</div>
                  <span className="mx-2 text-green-600">=</span>
                  <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-500 rounded font-mono font-bold text-sm">l</div>
                  <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 border border-purple-500 rounded font-mono font-bold text-sm">l</div>
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
                { num: 1, title: 'Handle Empty Needle', desc: 'If needle is empty, return 0 (convention)' },
                { num: 2, title: 'Loop Through Haystack', desc: 'For each position from 0 to length - needle.length' },
                { num: 3, title: 'Extract Substring', desc: 'Get substring of needle.length starting at current position' },
                { num: 4, title: 'Compare Strings', desc: 'Check if extracted substring equals needle' },
                { num: 5, title: 'Return on Match', desc: 'If match found, return current index' },
                { num: 6, title: 'Return -1', desc: 'If no match found after all positions, return -1' },
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
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n*m)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">n = haystack, m = needle</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(1)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">No extra space</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-sky-200 dark:border-sky-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/40">
              <Search className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm search for the needle step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-sky-200 dark:border-sky-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-sky-300 dark:border-sky-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-sky-900 dark:text-sky-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-sky-600 border-sky-300 focus:ring-sky-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-sky-800 dark:text-sky-200 capitalize">{speed}</span>
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
                    className="border-sky-300 dark:border-sky-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-sky-100 dark:bg-sky-900/40 rounded-lg border border-sky-300 dark:border-sky-700">
                    <span className="text-sm font-semibold text-sky-900 dark:text-sky-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-sky-300 dark:border-sky-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">strStr.js</span>
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
                          ? 'bg-sky-50 dark:bg-sky-900/20 border-l-2 border-sky-400 dark:border-sky-500'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-sky-600 dark:text-sky-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-sky-600 dark:text-sky-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">position:</span>
                        <span className="font-semibold text-sky-600 dark:text-sky-400">{currentI >= 0 ? currentI : '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">checking:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{currentI >= 0 ? `"${haystack.substring(currentI, currentI + needle.length)}"` : '-'}</span>
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
                  : 'bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border-sky-400 dark:border-sky-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-sky-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Search className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-sky-900 dark:text-sky-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-sky-800 dark:text-sky-200'}`}>
                    {steps[currentStep].description}
                  </p>
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
            title="Implement strStr() - Brute Force"
            description="Check each position with substring"
            language="javascript"
            colorTheme="blue"
            icon={Search}
            code={`function strStr(haystack, needle) {
  if (needle === "") return 0;
  
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const sub = haystack.substring(i, i + needle.length);
    
    if (sub === needle) {
      return i;
    }
  }
  
  return -1;  // Not found
}

// Test cases
console.log(strStr("hello", "ll"));
// Output: 2

console.log(strStr("aaaaa", "bba"));
// Output: -1

console.log(strStr("", ""));
// Output: 0`}
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
              <h4 className="font-semibold mb-1">1. Empty Needle</h4>
              <p className="text-sm text-muted-foreground">By convention, empty needle returns 0</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                strStr("hello", "") // 0
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Needle Not Found</h4>
              <p className="text-sm text-muted-foreground">Return -1 when needle doesn't exist</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                strStr("hello", "world") // -1
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Needle Longer Than Haystack</h4>
              <p className="text-sm text-muted-foreground">Can't find longer string in shorter one</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                strStr("hi", "hello") // -1
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Needle at End</h4>
              <p className="text-sm text-muted-foreground">Handle needle appearing at the end</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                strStr("hello", "lo") // 3
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
              { name: 'Find the Index of the First Occurrence in a String', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/' },
              { name: 'Implement strStr()', difficulty: 'Easy', link: 'https://leetcode.com/problems/implement-strstr/' },
              { name: 'Repeated Substring Pattern', difficulty: 'Easy', link: 'https://leetcode.com/problems/repeated-substring-pattern/' },
              { name: 'Shortest Palindrome', difficulty: 'Hard', link: 'https://leetcode.com/problems/shortest-palindrome/' },
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
              <span>Check each position where needle could start (sliding window)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Use <strong>substring()</strong> to extract portion of haystack for comparison</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Loop only until <strong>haystack.length - needle.length</strong> to avoid out of bounds</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n*m)</strong> where n = haystack length, m = needle length</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Empty needle returns 0 by convention (matches at start)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
