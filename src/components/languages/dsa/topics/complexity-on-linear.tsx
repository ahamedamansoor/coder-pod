'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinearTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const array = [3, 7, 2, 9, 4];
  const searchTarget = 9;

  const steps = [
    {
      step: 1,
      index: -1,
      found: false,
      currentLine: 2,
      description: '📋 Initialize: Set index i = 0 (start of array). We\'ll check every single element one by one.'
    },
    {
      step: 2,
      index: -1,
      found: false,
      currentLine: 3,
      description: '🔄 For Loop Start: Loop through each element from index 0 to array.length - 1. We must visit ALL elements.'
    },
    {
      step: 3,
      index: 0,
      found: false,
      currentLine: 4,
      description: '🔍 Check arr[0] = 3: Is 3 equal to target 9? No (3 ≠ 9). Continue to next element.'
    },
    {
      step: 4,
      index: 0,
      found: false,
      currentLine: 3,
      description: '↪️ Increment: i++ moves to next index (0 → 1). Loop continues since i < array.length.'
    },
    {
      step: 5,
      index: 1,
      found: false,
      currentLine: 4,
      description: '🔍 Check arr[1] = 7: Is 7 equal to target 9? No (7 ≠ 9). Keep searching.'
    },
    {
      step: 6,
      index: 1,
      found: false,
      currentLine: 3,
      description: '↪️ Increment: i++ moves to next index (1 → 2). Continue looping.'
    },
    {
      step: 7,
      index: 2,
      found: false,
      currentLine: 4,
      description: '🔍 Check arr[2] = 2: Is 2 equal to target 9? No (2 ≠ 9). Still not found.'
    },
    {
      step: 8,
      index: 2,
      found: false,
      currentLine: 3,
      description: '↪️ Increment: i++ moves to next index (2 → 3). Getting closer!'
    },
    {
      step: 9,
      index: 3,
      found: false,
      currentLine: 4,
      description: '✅ Check arr[3] = 9: Is 9 equal to target 9? Yes! (9 === 9) Found it!'
    },
    {
      step: 10,
      index: 3,
      found: true,
      currentLine: 5,
      description: '🎉 Return i = 3: Target found at index 3! In worst case, we had to check 4 out of 5 elements. That\'s O(n)!'
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function linearSearch(arr, target) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  // Must check every element', active: stepData.currentLine === 2, indent: 1 },
      { line: 3, code: '  for (let i = 0; i < arr.length; i++) {', active: stepData.currentLine === 3, indent: 1, values: stepData.index >= 0 ? `i = ${stepData.index}` : 'i = 0' },
      { line: 4, code: '    if (arr[i] === target) {', active: stepData.currentLine === 4, indent: 2, values: stepData.index >= 0 ? `${array[stepData.index]} === ${searchTarget} = ${stepData.found ? '✓' : '✗'}` : '' },
      { line: 5, code: '      return i;', active: stepData.currentLine === 5, indent: 3, values: stepData.found ? `return ${stepData.index}` : '' },
      { line: 6, code: '    }', active: false, indent: 2 },
      { line: 7, code: '  }', active: false, indent: 1 },
      { line: 8, code: '  ', active: false, indent: 1 },
      { line: 9, code: '  return -1; // not found', active: stepData.currentLine === 9, indent: 1 },
      { line: 10, code: '}', active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);

    const speedDelay = animationSpeed === 'slow' ? 2000 : animationSpeed === 'fast' ? 800 : 1200;

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
    setCurrentStep(0);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TrendingUp}
        category="DSA · Time Complexity"
        title="O(n) - Linear Time Complexity"
        description="The most common complexity - processing each element exactly once"
        colorTheme="orange"
        badges={[
          { label: 'O(n)', variant: 'default' },
          { label: 'Linear', variant: 'default' },
          { label: 'Most Common', variant: 'info' },
        ]}
      />

      {/* What is O(n)? */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            What is O(n) Linear Time?
          </CardTitle>
          <CardDescription>
            Direct proportionality - double the input, double the time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(n) means "linear time"</strong> - the time grows <strong>directly proportional</strong> to input size. 
                Double the data? Double the time!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 📚 Reading Every Page
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Book with 100 pages → Takes 100 minutes (1 min per page)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Book with 200 pages → Takes 200 minutes (exactly double!)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Must read <strong>every single page</strong> - can't skip any! 📖</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">
                  📊 The Linear Relationship
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>10 items → 10 operations</div>
                  <div>100 items → 100 operations</div>
                  <div>1,000 items → 1,000 operations</div>
                  <div>1,000,000 items → 1,000,000 operations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Key Characteristics</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Predictable</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Perfectly linear growth - easy to estimate performance
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Complete Check</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Must visit every element - no shortcuts
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Very Common</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Most algorithms have at least O(n) somewhere
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Single Pass</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  One loop through data is the baseline
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <Search className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            How It Works: Linear Search Animation
          </CardTitle>
          <CardDescription>Watch how O(n) checks every element one by one - searching for {searchTarget}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-cyan-300 dark:border-cyan-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                        className="w-4 h-4 text-cyan-600 border-cyan-300 focus:ring-cyan-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-cyan-800 dark:text-cyan-200 capitalize">{speed}</span>
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
                    className="border-cyan-300 dark:border-cyan-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg border border-cyan-300 dark:border-cyan-700">
                    <span className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-cyan-300 dark:border-cyan-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Code Viewer with Variable Values */}
            {currentStep >= 0 && (
              <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">linearSearch.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                  </div>
                </div>

                {/* Code Lines */}
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
                      {/* Line Number */}
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.active
                          ? 'text-amber-600 dark:text-amber-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>

                      {/* Code with inline values */}
                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                        {lineData.values && (
                          <span className="ml-3 text-cyan-600 dark:text-cyan-400 font-semibold">
                            {lineData.values}
                          </span>
                        )}
                      </code>
                    </div>
                  ))}
                </div>

                {/* Variable State Panel */}
                <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">i:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].index >= 0 ? steps[currentStep].index : 0}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">target:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{searchTarget}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">arr.length:</span>
                        <span className="font-semibold text-orange-600 dark:text-orange-400">{array.length}</span>
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
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                steps[currentStep].found
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-400 dark:border-cyan-600'
              }`}>
                <div className="space-y-3">
                  {/* Header with Step Number */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${steps[currentStep].found ? 'bg-green-500' : 'bg-cyan-600'}`}>
                      {steps[currentStep].found ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Search className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${steps[currentStep].found ? 'text-green-900 dark:text-green-100' : 'text-cyan-900 dark:text-cyan-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Executing Line {steps[currentStep].currentLine}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed font-medium ${steps[currentStep].found ? 'text-green-800 dark:text-green-200' : 'text-cyan-800 dark:text-cyan-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
                {array.map((num, idx) => {
                  const currentStepData = steps[currentStep];
                  const isCurrent = idx === currentStepData.index;
                  const isPassed = idx < currentStepData.index;
                  const isFound = isCurrent && currentStepData.found;

                  return (
                    <div
                      key={idx}
                      className={`
                        relative w-16 h-16 flex flex-col items-center justify-center rounded-lg font-mono text-lg font-bold
                        transition-all duration-500 ease-out
                        ${isFound
                          ? 'bg-green-500 text-white scale-110 shadow-xl ring-2 ring-green-300'
                          : isCurrent
                          ? 'bg-cyan-500 text-white scale-105 shadow-lg ring-2 ring-cyan-300'
                          : isPassed
                          ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 opacity-50'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                        }
                      `}
                    >
                      <span>{num}</span>
                      <span className="absolute -bottom-6 text-xs text-slate-500 dark:text-slate-400">[{idx}]</span>
                      
                      {isCurrent && !isFound && (
                        <div className="absolute -top-8 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                          ↓ i = {idx}
                        </div>
                      )}
                      
                      {isFound && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl">
                          ✓
                        </div>
                      )}

                      {isPassed && (
                        <div className="absolute top-1 right-1 text-xs">✗</div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-center text-sm text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-700">
                {currentStep >= 0 && steps[currentStep].index >= 0 && (
                  <p>Checked {steps[currentStep].index + 1} out of {array.length} elements so far</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common O(n) Operations */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Common O(n) Operations
          </CardTitle>
          <CardDescription>Operations that must process every element</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Linear Search */}
            <div className="p-5 rounded-xl border-2 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                1. Linear Search
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-cyan-700 dark:text-cyan-300">Why O(n):</strong> Must check every element until found. 
                In worst case (not found or at end), checks all n elements.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                array.indexOf(target) // O(n)
              </code>
            </div>

            {/* Array Traversal */}
            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                2. Array Traversal (Sum, Max, etc.)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-blue-700 dark:text-blue-300">Why O(n):</strong> Must visit every element to calculate sum, find max/min, or count occurrences.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`array.reduce((sum, val) => sum + val, 0) // O(n)`}
              </code>
            </div>

            {/* Array Methods */}
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                3. Array Methods (map, filter, forEach)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-purple-700 dark:text-purple-300">Why O(n):</strong> Each method processes every element once.
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded space-y-1">
                <div>{`array.map(x => x * 2)  // O(n)`}</div>
                <div>{`array.filter(x => x > 5)  // O(n)`}</div>
                <div>{`array.forEach(x => console.log(x))  // O(n)`}</div>
              </div>
            </div>

            {/* String Operations */}
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                4. String Traversal
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-green-700 dark:text-green-300">Why O(n):</strong> Checking every character, converting to uppercase/lowercase, or reversing.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                str.toUpperCase() // O(n) - processes each character
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When O(n) is Unavoidable */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            When O(n) is Unavoidable
          </CardTitle>
          <CardDescription>Some problems MUST check every element</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✅ You MUST use O(n) when:</h5>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li>Finding sum, average, or count of all elements</li>
                <li>Checking if array contains a value (unsorted array)</li>
                <li>Finding max/min element</li>
                <li>Copying an array or string</li>
                <li>Applying transformation to every element</li>
                <li>Validating all elements meet a condition</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 O(n) is the BASELINE</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Most problems need at least O(n) because you must <strong>read the input</strong>. 
                Can't solve a problem without looking at the data! O(n) is often the best you can do.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Understanding O(n) in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Good Performance</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                O(n) is very reasonable! Millions of elements can be processed in seconds with modern computers.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Linear Search vs Binary Search</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Unsorted? O(n) linear search. Sorted? O(log n) binary search. Know your data!
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⚠️ Watch for Hidden O(n)</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Methods like .includes(), .indexOf(), .join() are all O(n). Inside a loop? Now it's O(n²)!
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Optimization Tip</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Can't beat O(n) for must-check-all problems, but can improve constants and practical performance!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
