'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Layers, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LongestCommonPrefix() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [prefix, setPrefix] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [mismatchFound, setMismatchFound] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testStrings = ["flower", "flow", "flight"];
  
  const steps = [
    { 
      step: 1,
      prefix: '',
      charIdx: 0,
      strIdx: 0,
      mismatch: false,
      currentLine: 2,
      description: '📋 Initialize: Find longest common prefix among ["flower", "flow", "flight"]. Start with first string as base.'
    },
    { 
      step: 2,
      prefix: '',
      charIdx: 0,
      strIdx: 0,
      mismatch: false,
      currentLine: 3,
      description: '✓ Empty Array Check: strs.length === 0? No! We have 3 strings. Continue with algorithm.'
    },
    { 
      step: 3,
      prefix: 'flower',
      charIdx: 0,
      strIdx: 0,
      mismatch: false,
      currentLine: 5,
      description: '🔤 Set Prefix: prefix = strs[0] = "flower". This is our starting prefix. Now compare with remaining strings.'
    },
    { 
      step: 4,
      prefix: 'flower',
      charIdx: 0,
      strIdx: 1,
      mismatch: false,
      currentLine: 6,
      description: '🔁 Loop Start: for (i = 1; i < 3; i++). Starting with i = 1, checking string "flow".'
    },
    { 
      step: 5,
      prefix: 'flower',
      charIdx: 0,
      strIdx: 1,
      mismatch: false,
      currentLine: 7,
      description: '🔍 Check indexOf: "flow".indexOf("flower") = -1 (not found). Is -1 !== 0? Yes! Enter while loop to shorten.'
    },
    { 
      step: 6,
      prefix: 'flower',
      charIdx: 0,
      strIdx: 1,
      mismatch: true,
      currentLine: 8,
      description: '✂️ Shorten Prefix (1st time): prefix.substring(0, 6-1) = "flower".substring(0, 5) = "flowe"'
    },
    { 
      step: 7,
      prefix: 'flowe',
      charIdx: 0,
      strIdx: 1,
      mismatch: false,
      currentLine: 7,
      description: '🔍 Check indexOf Again: "flow".indexOf("flowe") = -1. Is -1 !== 0? Yes! Still not matching, shorten again.'
    },
    { 
      step: 8,
      prefix: 'flowe',
      charIdx: 0,
      strIdx: 1,
      mismatch: true,
      currentLine: 8,
      description: '✂️ Shorten Prefix (2nd time): "flowe".substring(0, 4) = "flow"'
    },
    { 
      step: 9,
      prefix: 'flow',
      charIdx: 0,
      strIdx: 1,
      mismatch: false,
      currentLine: 7,
      description: '🔍 Check indexOf Again: "flow".indexOf("flow") = 0. Is 0 !== 0? No! Match found! Exit while loop.'
    },
    { 
      step: 10,
      prefix: 'flow',
      charIdx: 0,
      strIdx: 1,
      mismatch: false,
      currentLine: 6,
      description: '✅ String "flow" Matched: prefix = "flow" works for string at i=1. Move to next iteration (i=2).'
    },
    { 
      step: 11,
      prefix: 'flow',
      charIdx: 0,
      strIdx: 2,
      mismatch: false,
      currentLine: 6,
      description: '🔁 Loop Continue: i = 2. Now checking string "flight" with current prefix "flow".'
    },
    { 
      step: 12,
      prefix: 'flow',
      charIdx: 0,
      strIdx: 2,
      mismatch: false,
      currentLine: 7,
      description: '🔍 Check indexOf: "flight".indexOf("flow") = -1 (not found). Is -1 !== 0? Yes! Enter while loop.'
    },
    { 
      step: 13,
      prefix: 'flow',
      charIdx: 0,
      strIdx: 2,
      mismatch: true,
      currentLine: 8,
      description: '✂️ Shorten Prefix (1st time): "flow".substring(0, 3) = "flo"'
    },
    { 
      step: 14,
      prefix: 'flo',
      charIdx: 0,
      strIdx: 2,
      mismatch: false,
      currentLine: 7,
      description: '🔍 Check indexOf Again: "flight".indexOf("flo") = -1. Is -1 !== 0? Yes! Not matching yet, shorten again.'
    },
    { 
      step: 15,
      prefix: 'flo',
      charIdx: 0,
      strIdx: 2,
      mismatch: true,
      currentLine: 8,
      description: '✂️ Shorten Prefix (2nd time): "flo".substring(0, 2) = "fl"'
    },
    { 
      step: 16,
      prefix: 'fl',
      charIdx: 0,
      strIdx: 2,
      mismatch: false,
      currentLine: 7,
      description: '🔍 Check indexOf Again: "flight".indexOf("fl") = 0. Is 0 !== 0? No! Match found! Exit while loop.'
    },
    { 
      step: 17,
      prefix: 'fl',
      charIdx: 0,
      strIdx: 2,
      mismatch: false,
      currentLine: 6,
      description: '✅ String "flight" Matched: prefix = "fl" works for string at i=2. Move to next iteration (i=3).'
    },
    { 
      step: 18,
      prefix: 'fl',
      charIdx: 0,
      strIdx: 3,
      mismatch: false,
      currentLine: 6,
      description: '🔚 Loop End: i = 3, but 3 < 3 is false. Exit for loop. All strings processed!'
    },
    { 
      step: 19,
      prefix: 'fl',
      charIdx: 0,
      strIdx: 3,
      mismatch: false,
      currentLine: 12,
      description: '📊 All Strings Checked: Successfully compared "flower", "flow", "flight". Common prefix = "fl".'
    },
    { 
      step: 20,
      prefix: 'fl',
      charIdx: 0,
      strIdx: 3,
      mismatch: false,
      currentLine: 13,
      description: '🎉 Return Result: return "fl". This is the longest common prefix for all three strings!'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const showStrs = `strs = ${JSON.stringify(testStrings)}`;
    const showPrefix = `prefix = "${stepData.prefix}"`;
    const showI = stepData.strIdx > 0 && stepData.strIdx <= testStrings.length ? `i = ${stepData.strIdx}` : '';
    const currentString = stepData.strIdx > 0 && stepData.strIdx <= testStrings.length ? testStrings[stepData.strIdx - 1] : '';
    
    return [
      { line: 1, code: 'function longestCommonPrefix(strs) {', active: stepData.currentLine === 1, indent: 0, values: showStrs },
      { line: 2, code: `  if (strs.length === 0) return "";`, active: stepData.currentLine === 2 || stepData.currentLine === 3, indent: 1, values: `${testStrings.length} === 0? No, continue` },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  let prefix = strs[0];`, active: stepData.currentLine === 4 || stepData.currentLine === 5, indent: 1, values: showPrefix },
      { line: 5, code: `  `, active: false, indent: 1 },
      { line: 6, code: `  for (let i = 1; i < strs.length; i++) {`, active: stepData.currentLine === 6 || stepData.currentLine === 7, indent: 1, values: showI ? `${showI}, checking "${currentString}"` : 'Loop through strings' },
      { line: 7, code: `    while (strs[i].indexOf(prefix) !== 0) {`, active: stepData.currentLine === 7 || stepData.currentLine === 8, indent: 2, values: currentString ? `"${currentString}".indexOf("${stepData.prefix}") !== 0? ${currentString.indexOf(stepData.prefix) !== 0 ? 'Yes, shorten' : 'No, match!'}` : '' },
      { line: 8, code: `      prefix = prefix.substring(0, prefix.length - 1);`, active: stepData.currentLine === 8, indent: 3, values: stepData.currentLine === 8 && stepData.prefix ? `"${testStrings[stepData.strIdx - 1] ? testStrings[stepData.strIdx - 1].substring(0, stepData.prefix.length + 1) : stepData.prefix}" → "${stepData.prefix}"` : '' },
      { line: 9, code: `      if (prefix === "") return "";`, active: false, indent: 3, values: stepData.prefix === '' ? 'Empty, return ""' : '' },
      { line: 10, code: `    }`, active: false, indent: 2 },
      { line: 11, code: `  }`, active: false, indent: 1 },
      { line: 12, code: `  `, active: false, indent: 1 },
      { line: 13, code: `  return prefix;`, active: stepData.currentLine === 12 || stepData.currentLine === 13, indent: 1, values: stepData.currentLine >= 12 ? `return "${stepData.prefix}"` : '' },
      { line: 14, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setPrefix(step.prefix);
    setCurrentCharIndex(step.charIdx);
    setCurrentStringIndex(step.strIdx);
    setMismatchFound(step.mismatch);
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
        icon={Layers}
        category="DSA · Strings"
        title="Longest Common Prefix"
        description="Learn how to find the longest common prefix string amongst an array of strings"
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
                <p className="font-medium">Horizontal Scanning</p>
                <p className="text-sm text-muted-foreground">Compare strings one by one</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">String Comparison</p>
                <p className="text-sm text-muted-foreground">Using indexOf() method</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Prefix Shortening</p>
                <p className="text-sm text-muted-foreground">Gradually reduce prefix</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Edge Case Handling</p>
                <p className="text-sm text-muted-foreground">Empty arrays and no common prefix</p>
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
          <CardDescription>Understanding common prefix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base">
            Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
          </p>

          {/* Visual Example */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> String Comparison
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Input Strings:</p>
                <div className="space-y-2">
                  {testStrings.map((str, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-500 w-4">{idx + 1}.</span>
                      <div className="flex gap-1">
                        {str.split('').map((char, charIdx) => {
                          const isInPrefix = charIdx < prefix.length && prefix[charIdx] === char;
                          const allMatch = testStrings.every(s => s[charIdx] === char);
                          
                          return (
                            <div
                              key={charIdx}
                              className={`w-10 h-10 rounded flex items-center justify-center font-bold text-sm border-2 ${
                                isInPrefix && allMatch
                                  ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-900 dark:text-green-100'
                                  : isInPrefix
                                  ? 'bg-yellow-100 dark:bg-yellow-900 border-yellow-500 text-yellow-900 dark:text-yellow-100'
                                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-600'
                              }`}
                            >
                              {char}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded"></div>
                    <span className="font-semibold text-green-700 dark:text-green-300">Common Prefix</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
                    <span className="font-semibold text-yellow-700 dark:text-yellow-300">Partial Match</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-slate-100 border-2 border-slate-300 rounded"></div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Different</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">Result:</p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                  "{prefix || 'fl'}" {/* Show final result */}
                </p>
              </div>
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> Algorithm Steps (Horizontal Scanning)
            </h4>
            
            <div className="space-y-3">
              {[
                { num: 1, title: 'Handle Edge Case', desc: 'If array is empty, return ""' },
                { num: 2, title: 'Initialize Prefix', desc: 'Set prefix = first string' },
                { num: 3, title: 'Loop Through Strings', desc: 'For each remaining string...' },
                { num: 4, title: 'Check if Prefix Matches', desc: 'Use indexOf() to check if string starts with prefix' },
                { num: 5, title: 'Shorten if Needed', desc: 'If not match, remove last character from prefix' },
                { num: 6, title: 'Repeat', desc: 'Keep shortening until match or prefix is empty' },
                { num: 7, title: 'Return Result', desc: 'Return final common prefix' },
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
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n*m)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">n strings, m chars each</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded border border-emerald-300 dark:border-emerald-600">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Space</div>
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(1)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">In-place comparison</div>
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
              <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm find the longest common prefix step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
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

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-indigo-800 dark:text-indigo-200 capitalize">{speed}</span>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">longestCommonPrefix.js</span>
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
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 border-l-2 border-indigo-400 dark:border-indigo-500'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-indigo-600 dark:text-indigo-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">prefix:</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">"{prefix}"</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">checking:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{currentStringIndex > 0 && currentStringIndex <= testStrings.length ? testStrings[currentStringIndex - 1] : '-'}</span>
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
                  : 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-400 dark:border-indigo-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-indigo-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Layers className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-indigo-900 dark:text-indigo-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-indigo-800 dark:text-indigo-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* String Comparison Visualization */}
            {currentStep >= 0 && prefix && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-indigo-300 dark:border-indigo-600 shadow-lg">
                <h4 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Current Prefix: "{prefix}"</h4>
                <div className="space-y-3">
                  {testStrings.map((str, idx) => {
                    const matches = str.startsWith(prefix);
                    const processed = idx < currentStringIndex - 1 || (idx === currentStringIndex - 1 && matches);
                    
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                          idx === currentStringIndex - 1
                            ? 'ring-4 ring-indigo-400 dark:ring-indigo-500 scale-105'
                            : ''
                        } ${
                          processed && matches
                            ? 'bg-green-100 dark:bg-green-900/40 border-green-500'
                            : processed
                            ? 'bg-slate-100 dark:bg-slate-800 border-slate-400'
                            : 'bg-white dark:bg-slate-900 border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{idx + 1}.</span>
                            <span className="font-mono font-bold text-lg">{str}</span>
                          </div>
                          {processed && (
                            <div className={`text-xs font-semibold px-2 py-1 rounded ${
                              matches
                                ? 'bg-green-500 text-white'
                                : 'bg-slate-400 text-white'
                            }`}>
                              {matches ? '✓ Match' : '✗ Adjusted'}
                            </div>
                          )}
                        </div>
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
          <CardDescription>Multiple approaches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
            title="Method 1: Horizontal Scanning"
            description="Compare strings one by one"
            language="javascript"
            colorTheme="blue"
            icon={Layers}
            code={`function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  
  return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"]));
// Output: "fl"

console.log(longestCommonPrefix(["dog","racecar","car"]));
// Output: "" (no common prefix)`}
          />

          <CodeSnippet
            title="Method 2: Vertical Scanning"
            description="Compare characters column by column"
            language="javascript"
            colorTheme="purple"
            icon={Layers}
            code={`function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  
  return strs[0];
}`}
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
              <h4 className="font-semibold mb-1">1. Empty Array</h4>
              <p className="text-sm text-muted-foreground">No strings to compare</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                longestCommonPrefix([]) // ""
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. No Common Prefix</h4>
              <p className="text-sm text-muted-foreground">Strings don't share any prefix</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                longestCommonPrefix(["dog","racecar","car"]) // ""
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Single String</h4>
              <p className="text-sm text-muted-foreground">Array with one string</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                longestCommonPrefix(["hello"]) // "hello"
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Empty Strings</h4>
              <p className="text-sm text-muted-foreground">Array contains empty string</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                longestCommonPrefix(["flower","flow",""]) // ""
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
              { name: 'Longest Common Prefix', difficulty: 'Easy', link: 'https://leetcode.com/problems/longest-common-prefix/' },
              { name: 'Longest Common Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-common-subsequence/' },
              { name: 'Longest Common Subpath', difficulty: 'Hard', link: 'https://leetcode.com/problems/longest-common-subpath/' },
              { name: 'Shortest Common Supersequence', difficulty: 'Hard', link: 'https://leetcode.com/problems/shortest-common-supersequence/' },
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
              <span>Start with first string as prefix, then compare with others</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Use <strong>indexOf(prefix) !== 0</strong> to check if string starts with prefix</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Gradually shorten prefix by removing last character</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Time: <strong>O(n*m)</strong> where n = number of strings, m = length of prefix</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Handle edge cases: empty array, no common prefix, empty strings</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
