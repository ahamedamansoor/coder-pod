'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeSnippet } from '@/components/shared';
import { Eraser, Target, Lightbulb, CheckCircle, AlertCircle, Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RemoveSpaces() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [resultString, setResultString] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [isSpace, setIsSpace] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const testString = "Hello World!";
  
  const steps = [
    { 
      step: 1,
      result: '',
      charIndex: -1,
      space: false,
      currentLine: 2,
      description: '📋 Initialize: Create empty result string. We\'ll build the new string by adding only non-space characters from "Hello World!".'
    },
    { 
      step: 2,
      result: '',
      charIndex: 0,
      space: false,
      currentLine: 4,
      description: '🔍 Loop Start: i = 0. Examining character \'H\' at index 0. Is it a space?'
    },
    { 
      step: 3,
      result: '',
      charIndex: 0,
      space: false,
      currentLine: 5,
      description: '❓ Check Space: Is \'H\' === \' \'? No! It\'s a letter. Add it to result.'
    },
    { 
      step: 4,
      result: 'H',
      charIndex: 0,
      space: false,
      currentLine: 6,
      description: '✅ Add Character: result = result + \'H\' = "H". First character added!'
    },
    { 
      step: 5,
      result: 'He',
      charIndex: 1,
      space: false,
      currentLine: 6,
      description: '🔍 i = 1: Character \'e\' is not a space. Add to result: "H" → "He"'
    },
    { 
      step: 6,
      result: 'Hel',
      charIndex: 2,
      space: false,
      currentLine: 6,
      description: '🔍 i = 2: Character \'l\' is not a space. Add to result: "He" → "Hel"'
    },
    { 
      step: 7,
      result: 'Hell',
      charIndex: 3,
      space: false,
      currentLine: 6,
      description: '🔍 i = 3: Character \'l\' is not a space. Add to result: "Hel" → "Hell"'
    },
    { 
      step: 8,
      result: 'Hello',
      charIndex: 4,
      space: false,
      currentLine: 6,
      description: '🔍 i = 4: Character \'o\' is not a space. Add to result: "Hell" → "Hello"'
    },
    { 
      step: 9,
      result: 'Hello',
      charIndex: 5,
      space: true,
      currentLine: 5,
      description: '🔍 i = 5: Character \' \' (space) detected! Is str[5] === \' \'? Yes!'
    },
    { 
      step: 10,
      result: 'Hello',
      charIndex: 5,
      space: true,
      currentLine: 8,
      description: '⊗ Skip Space: Space character found! DO NOT add to result. Continue to next character.'
    },
    { 
      step: 11,
      result: 'HelloW',
      charIndex: 6,
      space: false,
      currentLine: 6,
      description: '🔍 i = 6: Character \'W\' is not a space. Add to result: "Hello" → "HelloW"'
    },
    { 
      step: 12,
      result: 'HelloWo',
      charIndex: 7,
      space: false,
      currentLine: 6,
      description: '🔍 i = 7: Character \'o\' is not a space. Add to result: "HelloW" → "HelloWo"'
    },
    { 
      step: 13,
      result: 'HelloWor',
      charIndex: 8,
      space: false,
      currentLine: 6,
      description: '🔍 i = 8: Character \'r\' is not a space. Add to result: "HelloWo" → "HelloWor"'
    },
    { 
      step: 14,
      result: 'HelloWorl',
      charIndex: 9,
      space: false,
      currentLine: 6,
      description: '🔍 i = 9: Character \'l\' is not a space. Add to result: "HelloWor" → "HelloWorl"'
    },
    { 
      step: 15,
      result: 'HelloWorld',
      charIndex: 10,
      space: false,
      currentLine: 6,
      description: '🔍 i = 10: Character \'d\' is not a space. Add to result: "HelloWorl" → "HelloWorld"'
    },
    { 
      step: 16,
      result: 'HelloWorld!',
      charIndex: 11,
      space: false,
      currentLine: 6,
      description: '🔍 i = 11: Character \'!\' is not a space. Add to result: "HelloWorld" → "HelloWorld!"'
    },
    { 
      step: 17,
      result: 'HelloWorld!',
      charIndex: -1,
      space: false,
      currentLine: 10,
      description: '✅ Loop Complete: Processed all 12 characters. Space removed! Result: "HelloWorld!"'
    },
    { 
      step: 18,
      result: 'HelloWorld!',
      charIndex: -1,
      space: false,
      currentLine: 11,
      description: '🎉 Algorithm Complete! Original "Hello World!" → Result "HelloWorld!" (1 space removed)'
    },
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function removeSpaces(str) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: `  let result = '';`, active: stepData.currentLine === 2, indent: 1, values: `result = "${stepData.result}"` },
      { line: 3, code: `  `, active: false, indent: 1 },
      { line: 4, code: `  for (let i = 0; i < str.length; i++) {`, active: stepData.currentLine === 4, indent: 1, values: stepData.charIndex >= 0 ? `i = ${stepData.charIndex}` : '' },
      { line: 5, code: `    if (str[i] !== ' ') {`, active: stepData.currentLine === 5, indent: 2, values: stepData.charIndex >= 0 ? `'${testString[stepData.charIndex]}' !== ' ' = ${!stepData.space ? '✓' : '✗'}` : '' },
      { line: 6, code: `      result += str[i];`, active: stepData.currentLine === 6, indent: 3, values: stepData.currentLine === 6 ? `result = "${stepData.result}"` : '' },
      { line: 7, code: `    }`, active: false, indent: 2 },
      { line: 8, code: `    // else skip space`, active: stepData.currentLine === 8, indent: 2, comment: true },
      { line: 9, code: `  }`, active: false, indent: 1 },
      { line: 10, code: `  `, active: false, indent: 1 },
      { line: 11, code: `  return result;`, active: stepData.currentLine === 10 || stepData.currentLine === 11, indent: 1, values: stepData.currentLine >= 10 ? `"${stepData.result}"` : '' },
      { line: 12, code: `}`, active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentStep(stepIndex);
    setResultString(step.result);
    setCurrentCharIndex(step.charIndex);
    setIsSpace(step.space);
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
        icon={Eraser}
        category="DSA · Strings"
        title="Remove Spaces from String"
        description="Learn how to remove all spaces from a string using different methods"
        colorTheme="slate"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {['Beginner Friendly', 'Time: O(n)', 'Space: O(n)'].map((badge, index) => (
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
                <p className="font-medium">Space Detection</p>
                <p className="text-sm text-muted-foreground">Identify space characters</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">String Building</p>
                <p className="text-sm text-muted-foreground">Build new string without spaces</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Built-in Methods</p>
                <p className="text-sm text-muted-foreground">Use replace() and split/join</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Character Filtering</p>
                <p className="text-sm text-muted-foreground">Skip unwanted characters</p>
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
            Given a string, remove all space characters from it. For example, "Hello World!" becomes "HelloWorld!".
          </p>

          {/* Visual Before/After */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
              <Eraser className="w-5 h-5" /> Before → After
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border border-red-300 dark:border-red-600">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-3">Original String:</p>
                <div className="flex flex-wrap items-center gap-1">
                  {testString.split('').map((char, idx) => (
                    <div
                      key={idx}
                      className={`w-10 h-10 rounded flex items-center justify-center font-bold text-sm border-2 ${
                        char === ' '
                          ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-900 dark:text-red-100'
                          : 'bg-blue-100 dark:bg-blue-900 border-blue-400 text-blue-900 dark:text-blue-100'
                      }`}
                    >
                      {char === ' ' ? '␣' : char}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-3 text-red-700 dark:text-red-300">
                  Length: {testString.length} characters (includes 1 space)
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="p-2 bg-red-100 dark:bg-red-900/40 rounded-full">
                  <Eraser className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-3">Result String:</p>
                <div className="flex flex-wrap items-center gap-1">
                  {testString.replace(/ /g, '').split('').map((char, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded flex items-center justify-center font-bold text-sm text-green-900 dark:text-green-100"
                    >
                      {char}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center mt-3 text-green-700 dark:text-green-300">
                  Length: {testString.replace(/ /g, '').length} characters (space removed!)
                </p>
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
                { num: 1, title: 'Initialize Result', desc: 'Create empty result string' },
                { num: 2, title: 'Loop Through String', desc: 'For each character in the string' },
                { num: 3, title: 'Check If Space', desc: 'If character !== \' \' (not a space)' },
                { num: 4, title: 'Add to Result', desc: 'Append character to result string' },
                { num: 5, title: 'Skip Spaces', desc: 'If character is space, skip it (do nothing)' },
                { num: 6, title: 'Return Result', desc: 'Return the new string without spaces' },
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
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">O(n)</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">New string</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
              <Eraser className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            How It Works: Visual Animation
          </CardTitle>
          <CardDescription>Watch the algorithm remove spaces step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-red-300 dark:border-red-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-red-900 dark:text-red-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as any)}
                        className="w-4 h-4 text-red-600 border-red-300 focus:ring-red-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-red-800 dark:text-red-200 capitalize">{speed}</span>
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
                    className="border-red-300 dark:border-red-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-red-100 dark:bg-red-900/40 rounded-lg border border-red-300 dark:border-red-700">
                    <span className="text-sm font-semibold text-red-900 dark:text-red-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-red-300 dark:border-red-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">removeSpaces.js</span>
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
                          <span className="ml-3 text-red-600 dark:text-red-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">result:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">"{resultString}"</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">length:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{resultString.length}</span>
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
                  : 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-400 dark:border-red-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-red-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Eraser className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Character Visualization */}
            {currentStep >= 0 && currentCharIndex >= 0 && (
              <div className="mt-6 p-5 bg-white dark:bg-slate-950 rounded-lg border-2 border-red-300 dark:border-red-600 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-red-900 dark:text-red-100">Processing String:</h4>
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-300 dark:border-blue-700">
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Kept: {resultString.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-red-50 dark:bg-red-900/20 rounded-full border border-red-300 dark:border-red-700">
                      <span className="font-semibold text-red-700 dark:text-red-300">Removed: {currentCharIndex + 1 - resultString.length}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {testString.split('').map((char, idx) => {
                    const isCurrentSpace = char === ' ';
                    const isCurrent = idx === currentCharIndex;
                    const isProcessed = idx < currentCharIndex;
                    
                    return (
                      <div
                        key={idx}
                        className={`relative w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm border-2 transition-all duration-500 ${
                          isCurrent
                            ? 'scale-125 shadow-2xl animate-pulse'
                            : isProcessed
                            ? isCurrentSpace
                              ? 'opacity-20 scale-75 line-through'
                              : 'opacity-60 scale-95'
                            : 'opacity-40 scale-90'
                        } ${
                          isCurrentSpace
                            ? 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 border-red-500 text-red-900 dark:text-red-100'
                            : 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-blue-500 text-blue-900 dark:text-blue-100'
                        } ${
                          isCurrent && isCurrentSpace
                            ? 'ring-4 ring-red-400 dark:ring-red-500'
                            : isCurrent
                            ? 'ring-4 ring-blue-400 dark:ring-blue-500'
                            : ''
                        }`}
                      >
                        {char === ' ' ? '␣' : char}
                        {isCurrent && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <div className={`px-2 py-1 text-white text-xs font-bold rounded-full shadow-lg animate-bounce ${
                              isCurrentSpace ? 'bg-red-600' : 'bg-blue-600'
                            }`}>
                              {isCurrentSpace ? 'Skip!' : 'Add!'}
                            </div>
                          </div>
                        )}
                        {isProcessed && !isCurrentSpace && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                            ✓
                          </div>
                        )}
                        {isProcessed && isCurrentSpace && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px]">
                            ✗
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {isSpace && (
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-sm font-semibold text-red-900 dark:text-red-100">
                        ⊗ Space detected! Skipping this character...
                      </span>
                    </div>
                  </div>
                )}
                {!isSpace && currentCharIndex >= 0 && (
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        ✓ Not a space! Adding '{testString[currentCharIndex]}' to result...
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
          <CardDescription>Multiple approaches to remove spaces</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CodeSnippet
            title="Method 1: Loop-based Approach"
            description="Build new string character by character"
            language="javascript"
            colorTheme="blue"
            icon={Eraser}
            code={`function removeSpaces(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }
  
  return result;
}

// Test it
console.log(removeSpaces("Hello World!"));
// Output: "HelloWorld!"

console.log(removeSpaces("  JavaScript  "));
// Output: "JavaScript"`}
          />

          <CodeSnippet
            title="Method 2: Built-in Replace"
            description="Use regex to replace all spaces"
            language="javascript"
            colorTheme="green"
            icon={Eraser}
            code={`function removeSpaces(str) {
  return str.replace(/ /g, '');
  // or: return str.replace(/\\s/g, ''); // removes all whitespace
}

// Test it
console.log(removeSpaces("Hello World!"));
// Output: "HelloWorld!"`}
          />

          <CodeSnippet
            title="Method 3: Split and Join"
            description="Split by space and join with empty string"
            language="javascript"
            colorTheme="purple"
            icon={Eraser}
            code={`function removeSpaces(str) {
  return str.split(' ').join('');
}

// Test it
console.log(removeSpaces("Hello World!"));
// Output: "HelloWorld!"`}
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
                removeSpaces("") // ""
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">2. Only Spaces</h4>
              <p className="text-sm text-muted-foreground">String with only spaces</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeSpaces("     ") // ""
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">3. Multiple Spaces</h4>
              <p className="text-sm text-muted-foreground">Handle consecutive spaces</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeSpaces("Hello    World") // "HelloWorld"
              </code>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold mb-1">4. Leading/Trailing Spaces</h4>
              <p className="text-sm text-muted-foreground">Spaces at start and end</p>
              <code className="text-xs bg-muted px-2 py-1 rounded mt-1 block">
                removeSpaces("  Hello  ") // "Hello"
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
              { name: 'Remove All Adjacent Duplicates In String', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/' },
              { name: 'Backspace String Compare', difficulty: 'Easy', link: 'https://leetcode.com/problems/backspace-string-compare/' },
              { name: 'Remove Outermost Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-outermost-parentheses/' },
              { name: 'Remove All Occurrences of a Substring', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-all-occurrences-of-a-substring/' },
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
              <span>Check each character: <strong>if (char !== ' ')</strong> to skip spaces</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Build new string by concatenating non-space characters</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Alternative methods: <strong>replace(/  /g, ''), split(' ').join('')</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Single pass solution: <strong>O(n) time, O(n) space</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span>Always test edge cases: empty, only spaces, multiple spaces</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
