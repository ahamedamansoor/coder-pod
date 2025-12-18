'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, ChevronLeft, ChevronRight, Zap, DollarSign, Activity } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function AmortizedAnalysis() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      description: '📋 Start: Empty dynamic array with capacity 2. Let\'s insert 8 elements and watch resizing!',
      array: [],
      capacity: 2,
      operation: 'Initialize',
      cost: 0,
      totalCost: 0,
      resized: false
    },
    {
      step: 2,
      description: '➕ Insert 1: Array has space. Simple O(1) insertion.',
      array: [1],
      capacity: 2,
      operation: 'Insert',
      cost: 1,
      totalCost: 1,
      resized: false
    },
    {
      step: 3,
      description: '➕ Insert 2: Array is full! Must resize to capacity 4 and copy 1 element. Cost: 2.',
      array: [1, 2],
      capacity: 4,
      operation: 'Insert + Resize',
      cost: 2,
      totalCost: 3,
      resized: true
    },
    {
      step: 4,
      description: '➕ Insert 3: Array has space. Simple O(1) insertion.',
      array: [1, 2, 3],
      capacity: 4,
      operation: 'Insert',
      cost: 1,
      totalCost: 4,
      resized: false
    },
    {
      step: 5,
      description: '➕ Insert 4: Array is full! Must resize to capacity 8 and copy 3 elements. Cost: 4.',
      array: [1, 2, 3, 4],
      capacity: 8,
      operation: 'Insert + Resize',
      cost: 4,
      totalCost: 8,
      resized: true
    },
    {
      step: 6,
      description: '➕ Insert 5: Array has space. Simple O(1) insertion.',
      array: [1, 2, 3, 4, 5],
      capacity: 8,
      operation: 'Insert',
      cost: 1,
      totalCost: 9,
      resized: false
    },
    {
      step: 7,
      description: '➕ Insert 6: Array has space. Simple O(1) insertion.',
      array: [1, 2, 3, 4, 5, 6],
      capacity: 8,
      operation: 'Insert',
      cost: 1,
      totalCost: 10,
      resized: false
    },
    {
      step: 8,
      description: '➕ Insert 7: Array has space. Simple O(1) insertion.',
      array: [1, 2, 3, 4, 5, 6, 7],
      capacity: 8,
      operation: 'Insert',
      cost: 1,
      totalCost: 11,
      resized: false
    },
    {
      step: 9,
      description: '➕ Insert 8: Array is full! Must resize to capacity 16 and copy 7 elements. Cost: 8.',
      array: [1, 2, 3, 4, 5, 6, 7, 8],
      capacity: 16,
      operation: 'Insert + Resize',
      cost: 8,
      totalCost: 19,
      resized: true
    },
    {
      step: 10,
      description: '✅ Done! 8 insertions, total cost: 19. Average: 19/8 ≈ 2.4 per operation. That\'s O(1) amortized!',
      array: [1, 2, 3, 4, 5, 6, 7, 8],
      capacity: 16,
      operation: 'Complete',
      cost: 0,
      totalCost: 19,
      resized: false
    }
  ];

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
        icon={Activity}
        category="DSA · Time Complexity"
        title="Amortized Analysis"
        description="Understanding average cost over a sequence of operations"
        colorTheme="purple"
        badges={[
          { label: 'O(1) Amortized', variant: 'default' },
          { label: 'Average Case', variant: 'secondary' },
          { label: '📊 Sequence Analysis', variant: 'outline' },
        ]}
      />

      {/* What is Amortized Analysis? */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-purple-600" />
            What is Amortized Analysis?
          </CardTitle>
          <CardDescription>
            Analyzing the average cost per operation over a sequence, not worst case of a single operation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Amortized analysis</strong> looks at the <strong>average cost per operation</strong> over a sequence of operations, 
                not the worst-case cost of a single operation. Some operations might be expensive, but if they're rare enough, 
                the <strong>average remains low</strong>!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-300 dark:border-purple-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 🍕 Pizza Party Budget
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Most weeks:</strong> You spend $10 on lunch (cheap!)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Once a month:</strong> Pizza party costs $100 (expensive!)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Average per week:</strong> ($10×3 + $100) / 4 = $32.50 (reasonable!)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm font-bold text-purple-900 dark:text-purple-100 mb-2">
                  💡 The Key Insight
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Even though some operations are expensive (O(n)), if they happen rarely enough, 
                  the <strong>average cost per operation</strong> can still be O(1)!
                  <br />
                  <strong>Example: Dynamic array doubling happens only log(n) times for n insertions!</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Three Methods */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-violet-200 dark:border-violet-700">
            <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-4">📊 Three Methods of Amortized Analysis</h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <span className="text-xl">1️⃣</span> Aggregate Method
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Calculate <strong>total cost of n operations</strong>, then divide by n.
                </p>
                <div className="text-xs font-mono bg-blue-50 dark:bg-blue-900/30 p-2 rounded">
                  Total cost = T(n), Amortized = T(n) / n
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-emerald-300">
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                  <span className="text-xl">2️⃣</span> Accounting Method
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Assign each operation an <strong>amortized cost</strong> (credit). Expensive operations use saved credits.
                </p>
                <div className="text-xs font-mono bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded">
                  Charge more for cheap ops, save credits for expensive ones
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-amber-300">
                <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                  <span className="text-xl">3️⃣</span> Potential Method
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Define a <strong>potential function Φ</strong> that tracks "stored energy" in the data structure.
                </p>
                <div className="text-xs font-mono bg-amber-50 dark:bg-amber-900/30 p-2 rounded">
                  Amortized = Actual + ΔΦ (change in potential)
                </div>
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
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Dynamic Array Resizing: O(1) Amortized
          </CardTitle>
          <CardDescription>Watch how array doubling makes insertions O(1) on average, even though resizing is O(n)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
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
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
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

            {/* Current Step Description */}
            {currentStep >= 0 && steps[currentStep].description && (
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : steps[currentStep].resized
                  ? 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-400 dark:border-orange-600'
                  : 'bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-purple-400 dark:border-purple-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${
                      currentStep === steps.length - 1 
                        ? 'bg-green-500' 
                        : steps[currentStep].resized
                        ? 'bg-orange-500'
                        : 'bg-purple-600'
                    }`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : steps[currentStep].resized ? (
                        <Zap className="w-6 h-6 text-white" />
                      ) : (
                        <Activity className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${
                        currentStep === steps.length - 1 
                          ? 'text-green-900 dark:text-green-100' 
                          : steps[currentStep].resized
                          ? 'text-orange-900 dark:text-orange-100'
                          : 'text-purple-900 dark:text-purple-100'
                      }`}>
                        {steps[currentStep].operation}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Cost: {steps[currentStep].cost} | Total: {steps[currentStep].totalCost}
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed font-medium ${
                    currentStep === steps.length - 1 
                      ? 'text-green-800 dark:text-green-200' 
                      : steps[currentStep].resized
                      ? 'text-orange-800 dark:text-orange-200'
                      : 'text-purple-800 dark:text-purple-200'
                  }`}>
                    {steps[currentStep].description}
                  </p>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">DynamicArray.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">O(1) Amortized</span>
                  </div>
                </div>

                <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                  {[
                    { line: 1, code: 'class DynamicArray {', active: false, indent: 0 },
                    { line: 2, code: '  constructor() {', active: currentStep === 0, indent: 1 },
                    { line: 3, code: '    this.capacity = 2;', active: currentStep === 0, indent: 2, highlight: currentStep === 0 },
                    { line: 4, code: '    this.size = 0;', active: false, indent: 2 },
                    { line: 5, code: '    this.array = new Array(this.capacity);', active: false, indent: 2 },
                    { line: 6, code: '  }', active: false, indent: 1 },
                    { line: 7, code: '  ', active: false, indent: 0 },
                    { line: 8, code: '  push(value) {', active: currentStep > 0 && currentStep < 10, indent: 1 },
                    { line: 9, code: '    if (this.size === this.capacity) {', active: steps[currentStep].resized, indent: 2, highlight: steps[currentStep].resized },
                    { line: 10, code: '      this.resize();  // O(n) cost', active: steps[currentStep].resized, indent: 3, highlight: steps[currentStep].resized },
                    { line: 11, code: '    }', active: false, indent: 2 },
                    { line: 12, code: '    this.array[this.size] = value;', active: currentStep > 0 && currentStep < 10 && !steps[currentStep].resized, indent: 2, highlight: currentStep > 0 && currentStep < 10 && !steps[currentStep].resized },
                    { line: 13, code: '    this.size++;', active: false, indent: 2 },
                    { line: 14, code: '  }', active: false, indent: 1 },
                    { line: 15, code: '  ', active: false, indent: 0 },
                    { line: 16, code: '  resize() {', active: steps[currentStep].resized, indent: 1 },
                    { line: 17, code: '    this.capacity *= 2;  // Double size', active: steps[currentStep].resized, indent: 2, highlight: steps[currentStep].resized },
                    { line: 18, code: '    const newArray = new Array(this.capacity);', active: false, indent: 2 },
                    { line: 19, code: '    for (let i = 0; i < this.size; i++) {', active: false, indent: 2 },
                    { line: 20, code: '      newArray[i] = this.array[i];  // Copy', active: false, indent: 3 },
                    { line: 21, code: '    }', active: false, indent: 2 },
                    { line: 22, code: '    this.array = newArray;', active: false, indent: 2 },
                    { line: 23, code: '  }', active: false, indent: 1 },
                    { line: 24, code: '}', active: false, indent: 0 },
                  ].map((lineData) => (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.highlight
                          ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.highlight
                          ? 'text-purple-600 dark:text-purple-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>
                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                          {lineData.code}
                        </span>
                      </code>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">size:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].array.length}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">capacity:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">operation cost:</span>
                        <span className={`font-semibold ${steps[currentStep].resized ? 'text-orange-600 dark:text-orange-400' : 'text-green-600 dark:text-green-400'}`}>
                          {steps[currentStep].cost > 0 ? steps[currentStep].cost : '-'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Array Display */}
            <div className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-4 text-center flex items-center justify-center gap-2">
                <span>📦</span> Array State (Size: {steps[currentStep].array.length} / Capacity: {steps[currentStep].capacity})
              </h5>
              <div className="flex justify-center gap-2 flex-wrap">
                {Array.from({ length: steps[currentStep].capacity }).map((_, idx) => {
                  const hasValue = idx < steps[currentStep].array.length;
                  const isNew = idx === steps[currentStep].array.length - 1 && steps[currentStep].cost > 0;
                  return (
                    <div
                      key={idx}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold border-2 transition-all duration-500 ${
                        isNew
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-400 shadow-lg scale-125 ring-4 ring-green-300'
                          : hasValue
                          ? 'bg-purple-500 text-white border-purple-400 shadow'
                          : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
                      }`}
                    >
                      {hasValue ? steps[currentStep].array[idx] : ''}
                    </div>
                  );
                })}
              </div>
              {steps[currentStep].resized && currentStep < steps.length - 1 && (
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg border border-orange-400">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                      Resizing! Doubled capacity from {steps[currentStep].capacity / 2} to {steps[currentStep].capacity}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Cost Analysis */}
            <div className="p-6 bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50 dark:from-purple-950/30 dark:via-violet-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-center flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5" />
                Cost Breakdown
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300">
                  <div className="text-3xl font-bold text-purple-600">{steps[currentStep].array.length}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Operations</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300">
                  <div className="text-3xl font-bold text-orange-600">{steps[currentStep].totalCost}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Total Cost</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300">
                  <div className="text-3xl font-bold text-blue-600">
                    {steps[currentStep].array.length > 0 ? (steps[currentStep].totalCost / steps[currentStep].array.length).toFixed(1) : '0'}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Avg per Op</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                  <div className="text-2xl font-bold text-green-600">O(1)</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Amortized</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-center text-sm text-purple-800 dark:text-purple-200">
                  {currentStep === 0 ? (
                    <>🎬 Ready to insert elements and watch the magic of amortized analysis!</>
                  ) : currentStep < steps.length - 1 ? (
                    <>💡 Average cost so far: {(steps[currentStep].totalCost / steps[currentStep].array.length).toFixed(2)} per operation</>
                  ) : (
                    <>🎉 Final average: {(19 / 8).toFixed(2)} ≈ 2.4 per operation. That's O(1) amortized! Even with expensive resizes! 🚀</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Examples */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            Common Amortized Analysis Examples
          </CardTitle>
          <CardDescription>Data structures and operations with O(1) amortized complexity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                1. Dynamic Array (ArrayList, Vector)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-purple-700 dark:text-purple-300">Why O(1) Amortized:</strong> Doubling strategy means resize happens log(n) times. 
                Total cost: n + n/2 + n/4 + ... = 2n. Average: O(1)!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`push() - Usually O(1), occasionally O(n) for resize, O(1) amortized`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-violet-50 dark:bg-violet-950/20 border-violet-300 dark:border-violet-700">
              <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                2. Stack with Two Queues
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-violet-700 dark:text-violet-300">Why O(1) Amortized:</strong> Pop might move n elements between queues, 
                but each element moves at most twice. Total: 2n moves for n operations = O(1)!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`pop() - Occasionally O(n), but O(1) amortized`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                3. Disjoint Set (Union-Find with Path Compression)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-indigo-700 dark:text-indigo-300">Why O(1) Amortized:</strong> Path compression flattens trees. 
                Each find() becomes nearly O(1) after initial expensive operations!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`find() - O(α(n)) ≈ O(1) amortized (inverse Ackermann)`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Understanding Amortized Analysis in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📊 For Sequences</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Amortized analysis only makes sense for a <strong>sequence of operations</strong>, not a single operation!
              </p>
            </div>
            
            <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-lg border border-violet-300 dark:border-violet-700">
              <h5 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">⚡ Better Than Worst Case</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Shows the <strong>true average performance</strong> when worst-case is too pessimistic. More realistic!
              </p>
            </div>
            
            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-300 dark:border-indigo-700">
              <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">🎯 Common Pattern</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Doubling/halving strategies (arrays, hash tables) often have O(1) amortized operations!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Interview Gold</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Knowing amortized analysis shows deep understanding. "This is O(n) worst case, but O(1) amortized!"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
