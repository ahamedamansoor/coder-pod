'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ExponentialTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      n: 4,
      currentCall: 'fib(4)',
      description: '📋 Initial Call: Calculate fib(4). This will branch into two recursive calls: fib(3) and fib(2).',
      currentLine: 1,
      callStack: ['fib(4)'],
      totalCalls: 1
    },
    {
      step: 2,
      n: 4,
      currentCall: 'fib(3)',
      description: '🌳 Branch Left: fib(4) calls fib(3). Each call spawns 2 more calls - exponential branching begins!',
      currentLine: 3,
      callStack: ['fib(4)', 'fib(3)'],
      totalCalls: 2
    },
    {
      step: 3,
      n: 4,
      currentCall: 'fib(2)',
      description: '🌳 Branch Left: fib(3) calls fib(2). The tree keeps growing deeper.',
      currentLine: 3,
      callStack: ['fib(4)', 'fib(3)', 'fib(2)'],
      totalCalls: 3
    },
    {
      step: 4,
      n: 4,
      currentCall: 'fib(1)',
      description: '✅ Base Case: fib(2) calls fib(1). Return 1 (base case reached).',
      currentLine: 2,
      callStack: ['fib(4)', 'fib(3)', 'fib(2)', 'fib(1)'],
      totalCalls: 4
    },
    {
      step: 5,
      n: 4,
      currentCall: 'fib(0)',
      description: '✅ Base Case: fib(2) also calls fib(0). Return 0 (another base case).',
      currentLine: 2,
      callStack: ['fib(4)', 'fib(3)', 'fib(2)', 'fib(0)'],
      totalCalls: 5
    },
    {
      step: 6,
      n: 4,
      currentCall: 'fib(1)',
      description: '🌳 Branch Right: Now fib(3) explores its right branch, calling fib(1). Return 1.',
      currentLine: 3,
      callStack: ['fib(4)', 'fib(3)', 'fib(1)'],
      totalCalls: 6
    },
    {
      step: 7,
      n: 4,
      currentCall: 'fib(2)',
      description: '🌳 Branch Right: fib(4) now explores its right branch, calling fib(2).',
      currentLine: 3,
      callStack: ['fib(4)', 'fib(2)'],
      totalCalls: 7
    },
    {
      step: 8,
      n: 4,
      currentCall: 'fib(1)',
      description: '✅ Base Case: fib(2) calls fib(1). Return 1. Notice we\'re recalculating values!',
      currentLine: 2,
      callStack: ['fib(4)', 'fib(2)', 'fib(1)'],
      totalCalls: 8
    },
    {
      step: 9,
      n: 4,
      currentCall: 'fib(0)',
      description: '✅ Base Case: fib(2) calls fib(0). Return 0. Many redundant calculations!',
      currentLine: 2,
      callStack: ['fib(4)', 'fib(2)', 'fib(0)'],
      totalCalls: 9
    },
    {
      step: 10,
      n: 4,
      currentCall: 'Complete',
      description: '🎉 Complete! fib(4) = 3. But notice: We made 9 function calls for just n=4! This grows exponentially: O(2^n)!',
      currentLine: 4,
      callStack: [],
      totalCalls: 9
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function fib(n) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  if (n <= 1) return n;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentCall.includes('(1)') || stepData.currentCall.includes('(0)') ? '✓ Base case' : '' },
      { line: 3, code: '  return fib(n-1) + fib(n-2);', active: stepData.currentLine === 3, indent: 1, values: stepData.currentCall },
      { line: 4, code: '}', active: stepData.currentLine === 4, indent: 0 },
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
        icon={Zap}
        category="DSA · Time Complexity"
        title="O(2^n) - Exponential Time Complexity"
        description="Extremely fast growth - doubles with each additional input!"
        colorTheme="orange"
        badges={[
          { label: 'O(2^n)', variant: 'destructive' },
          { label: 'Exponential', variant: 'default' },
          { label: '💥 Explosive Growth', variant: 'outline' },
        ]}
      />

      {/* What is O(2^n)? */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-rose-600" />
            What is O(2^n) Exponential Time?
          </CardTitle>
          <CardDescription>
            The worst practical complexity - grows faster than you can imagine
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(2^n) means "exponential time"</strong> - the time <strong>doubles</strong> with each additional input. 
                Add 1 more item? <strong>2× the time!</strong> This happens with <strong>naive recursive algorithms</strong>.
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-rose-300 dark:border-rose-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 🧬 Cell Division
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>1 cell</strong> divides into <strong>2 cells</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>2 cells</strong> divide into <strong>4 cells</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>4 cells</strong> divide into <strong>8 cells</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>After 30 divisions:</strong> Over 1 billion cells! 💥</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30 rounded-lg border-l-4 border-rose-500">
                <p className="text-sm font-bold text-rose-900 dark:text-rose-100 mb-2">
                  ⚠️ The Exponential Explosion
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Each recursive call spawns 2 more calls, which spawn 2 more each, creating a tree that doubles at every level.
                  <br />
                  <strong>Example: fib(30) makes over 2 BILLION function calls! 😱</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Growth Comparison */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">📊 Exponential Growth is TERRIFYING</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-red-300 dark:border-red-700">
                    <th className="p-2 text-left">Input (n)</th>
                    <th className="p-2 text-center">Operations (2^n)</th>
                    <th className="p-2 text-center">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-200 dark:divide-red-800">
                  <tr>
                    <td className="p-2 font-mono">5</td>
                    <td className="p-2 text-center font-mono text-orange-600">32</td>
                    <td className="p-2 text-center text-xs">Manageable</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">10</td>
                    <td className="p-2 text-center font-mono text-orange-600">1,024</td>
                    <td className="p-2 text-center text-xs">+1 item = 2× time</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">20</td>
                    <td className="p-2 text-center font-mono text-red-600 font-bold">1,048,576</td>
                    <td className="p-2 text-center text-xs font-semibold text-red-600">Over a MILLION!</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">30</td>
                    <td className="p-2 text-center font-mono text-red-700 font-bold">1,073,741,824</td>
                    <td className="p-2 text-center text-xs font-semibold text-red-700">Over a BILLION! 💀</td>
                  </tr>
                  <tr className="bg-red-100 dark:bg-red-900/30">
                    <td className="p-2 font-mono font-bold">40</td>
                    <td className="p-2 text-center font-mono text-red-900 dark:text-red-100 font-bold">1+ TRILLION</td>
                    <td className="p-2 text-center text-xs font-bold text-red-900 dark:text-red-100">Impossible! 🚫</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrammatic Example */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-rose-600" />
            Visual Breakdown: Recursive Tree Explosion
          </CardTitle>
          <CardDescription>Step-by-step diagram showing how fib(4) creates exponential branching</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            
            {/* Complete Recursive Tree */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-6 text-center">
                🌳 Complete Recursive Tree for fib(4)
              </h4>
              
              <div className="space-y-4">
                {/* Level 0 */}
                <div className="text-center mb-3">
                  <div className="inline-block">
                    <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">Level 0 (1 call)</div>
                    <div className="px-6 py-3 bg-rose-500 text-white rounded-lg font-mono font-bold text-lg border-2 border-rose-400 shadow-lg">
                      fib(4)
                    </div>
                  </div>
                </div>

                {/* Arrows from Level 0 to Level 1 */}
                <div className="flex justify-center gap-28 mb-2">
                  <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">╱</div>
                  <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">╲</div>
                </div>

                {/* Level 1 */}
                <div className="flex justify-center gap-32 mb-3">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2">Level 1 (2 calls)</div>
                    <div className="px-5 py-2 bg-orange-500 text-white rounded-lg font-mono font-bold border-2 border-orange-400">
                      fib(3)
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2">&nbsp;</div>
                    <div className="px-5 py-2 bg-orange-500 text-white rounded-lg font-mono font-bold border-2 border-orange-400">
                      fib(2)
                    </div>
                  </div>
                </div>

                {/* Arrows from Level 1 to Level 2 */}
                <div className="flex justify-center mb-2">
                  <div className="flex gap-4" style={{ marginRight: '180px' }}>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">╱</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">╲</div>
                  </div>
                  <div className="flex gap-4" style={{ marginLeft: '100px' }}>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">╱</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">╲</div>
                  </div>
                </div>

                {/* Level 2 with proper grouping */}
                <div className="flex justify-center items-start gap-32 mb-3">
                  {/* Left group from fib(3) */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">Level 2 (4 calls)</div>
                    <div className="flex gap-3">
                      <div className="px-4 py-2 bg-amber-500 text-white rounded font-mono text-sm font-bold border border-amber-400">
                        fib(2)
                      </div>
                      <div className="px-4 py-2 bg-amber-500 text-white rounded font-mono text-sm font-bold border border-amber-400">
                        fib(1)
                      </div>
                    </div>
                    
                    {/* Arrows from fib(2) to Level 3 */}
                    <div className="flex gap-3 my-2" style={{ marginRight: '50px' }}>
                      <div className="text-xl font-bold text-amber-600 dark:text-amber-400">╱</div>
                      <div className="text-xl font-bold text-amber-600 dark:text-amber-400">╲</div>
                    </div>
                    
                    {/* Level 3 base cases under left fib(2) */}
                    <div className="flex gap-2" style={{ marginRight: '50px' }}>
                      <div className="text-center">
                        <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Level 3</div>
                        <div className="px-3 py-1 bg-green-500 text-white rounded font-mono text-xs font-bold border border-green-400">
                          fib(1)
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">(3 calls)</div>
                        <div className="px-3 py-1 bg-green-500 text-white rounded font-mono text-xs font-bold border border-green-400">
                          fib(0)
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right group from fib(2) */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">&nbsp;</div>
                    <div className="flex gap-3">
                      <div className="px-4 py-2 bg-amber-500 text-white rounded font-mono text-sm font-bold border border-amber-400">
                        fib(1)
                      </div>
                      <div className="px-4 py-2 bg-amber-500 text-white rounded font-mono text-sm font-bold border border-amber-400">
                        fib(0)
                      </div>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2">✓ Base cases</div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-500">
                  <p className="text-center font-bold text-red-900 dark:text-red-100">
                    Total Function Calls: 1 + 2 + 4 + 3 = <span className="text-2xl">9 calls</span> for just fib(4)!
                  </p>
                  <p className="text-center text-sm text-red-700 dark:text-red-300 mt-2">
                    Notice: Tree doubles at each level! That's 2^n growth! 💥
                  </p>
                </div>
              </div>
            </div>

            {/* Exponential Branching Pattern */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6 text-center">
                📈 Exponential Branching Pattern
              </h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {/* Level 0 */}
                  <div className="col-span-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-rose-400">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-rose-600 mb-2">Level 0</div>
                        <div className="flex justify-center">
                          <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                            1
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">1 call = 2^0</p>
                      </div>
                    </div>
                  </div>

                  {/* Level 1 */}
                  <div className="col-span-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-400">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-orange-600 mb-2">Level 1</div>
                        <div className="flex justify-center gap-4">
                          {[1, 2].map((n) => (
                            <div key={n} className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                              {n}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">2 calls = 2^1</p>
                      </div>
                    </div>
                  </div>

                  {/* Level 2 */}
                  <div className="col-span-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-amber-400">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-amber-600 mb-2">Level 2</div>
                        <div className="flex justify-center gap-3">
                          {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                              {n}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">4 calls = 2^2</p>
                      </div>
                    </div>
                  </div>

                  {/* Level 3 */}
                  <div className="col-span-4">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-yellow-400">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-600 mb-2">Level 3</div>
                        <div className="flex justify-center gap-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <div key={n} className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {n}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">8 calls = 2^3</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 rounded-lg border-2 border-red-500">
                  <p className="text-center font-bold text-red-900 dark:text-red-100 mb-2">
                    Pattern: Each level DOUBLES the number of calls!
                  </p>
                  <div className="text-center text-sm text-red-700 dark:text-red-300 space-y-1">
                    <div>Level 0: 1 call</div>
                    <div>Level 1: 2 calls (doubled!)</div>
                    <div>Level 2: 4 calls (doubled!)</div>
                    <div>Level 3: 8 calls (doubled!)</div>
                    <div className="font-bold text-lg pt-2">Level n: 2^n calls! 💥</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why O(2^n) Explanation */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">
                🧮 Why is this O(2^n)?
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">1️⃣</div>
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                        Binary Branching
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Each function call spawns exactly 2 more calls (except base cases).
                      </p>
                      <div className="mt-2 text-xs font-mono bg-red-50 dark:bg-red-900/30 p-2 rounded">
                        fib(n) → fib(n-1) + fib(n-2)  // Always 2 branches
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">2️⃣</div>
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                        Tree Height = n
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        The recursion goes n levels deep (from n down to 0).
                      </p>
                      <div className="mt-2 text-xs font-mono bg-red-50 dark:bg-red-900/30 p-2 rounded space-y-1">
                        <div>fib(4) → 4 levels deep</div>
                        <div>fib(10) → 10 levels deep</div>
                        <div>fib(n) → n levels deep</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 rounded-lg border-2 border-red-500">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">
                        The Formula
                      </h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>2 branches per call</strong> × <strong>n levels deep</strong> ≈ <strong className="text-red-600 dark:text-red-400">2^n total calls</strong>
                      </p>
                      <div className="mt-2 text-xs bg-white dark:bg-slate-900 p-2 rounded space-y-1">
                        <div><strong>fib(4):</strong> ~2^4 = 16 calls (actually 9, close enough)</div>
                        <div><strong>fib(10):</strong> ~2^10 = 1,024 calls!</div>
                        <div><strong>fib(30):</strong> ~2^30 = 1 BILLION calls! 😱</div>
                        <div className="text-red-600 dark:text-red-400 font-bold pt-1">
                          Add 1 to n → DOUBLE the work!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution: Memoization */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">
                ✅ The Solution: Memoization (Dynamic Programming)
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-400">
                  <h5 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                    Cache Results to Avoid Redundant Calculations
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    In the tree above, fib(2) is calculated multiple times! With memoization, 
                    we calculate it once and reuse the result.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-300">
                      <div className="text-xs font-semibold text-red-600 mb-1">❌ Without Memoization</div>
                      <div className="text-sm text-slate-700 dark:text-slate-300">
                        fib(4) = 9 calls<br />
                        fib(10) = 177 calls<br />
                        fib(30) = 2,692,537 calls! 💀
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-300">
                      <div className="text-xs font-semibold text-green-600 mb-1">✅ With Memoization</div>
                      <div className="text-sm text-slate-700 dark:text-slate-300">
                        fib(4) = 5 calls<br />
                        fib(10) = 11 calls<br />
                        fib(30) = 31 calls! 🚀
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                    💡 Result: O(2^n) → O(n) with just a cache! This is the power of Dynamic Programming!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            How It Works: Fibonacci Recursive Tree
          </CardTitle>
          <CardDescription>Watch exponential branching - calculating fib(4) makes 9 function calls!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-950/20 dark:to-rose-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white"
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
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">fibonacci.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Recursive</span>
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
                        <span className="text-slate-500 dark:text-slate-400">Current:</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">{steps[currentStep].currentCall}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Total Calls:</span>
                        <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].totalCalls}</span>
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
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-600'
                  : 'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/30 dark:to-orange-950/30 border-rose-400 dark:border-rose-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-rose-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Zap className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-rose-900 dark:text-rose-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Function Call: {steps[currentStep].currentCall}
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-rose-800 dark:text-rose-200'}`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Enhanced Visual Tree & Call Stack */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Visual Recursive Tree */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-center flex items-center justify-center gap-2">
                  <span>🌳</span> Recursive Tree Growth
                </h5>
                <div className="space-y-4">
                  {/* Root */}
                  <div className="flex justify-center mb-2">
                    <div className={`px-4 py-2 rounded-lg font-mono font-bold text-sm border-2 transition-all duration-500 ${
                      currentStep >= 1 
                        ? 'bg-rose-500 text-white border-rose-400 shadow-lg scale-110' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-400 border-gray-300'
                    }`}>
                      fib(4)
                    </div>
                  </div>

                  {/* Arrows from Root to Level 1 */}
                  {currentStep >= 2 && (
                    <div className="flex justify-center gap-24 mb-1">
                      <div className="text-rose-600 dark:text-rose-400 text-3xl font-bold">╱</div>
                      <div className="text-rose-600 dark:text-rose-400 text-3xl font-bold">╲</div>
                    </div>
                  )}

                  {/* Level 1 branches */}
                  {currentStep >= 2 && (
                    <div className="flex justify-center gap-16 mb-2 animate-in fade-in-0 slide-in-from-top-4 duration-500">
                      <div className={`px-3 py-2 rounded-lg font-mono font-bold text-xs border-2 transition-all duration-500 ${
                        currentStep >= 2 && currentStep <= 6
                          ? 'bg-orange-500 text-white border-orange-400 shadow-lg scale-110'
                          : 'bg-orange-200 dark:bg-orange-900 text-orange-900 dark:text-orange-100 border-orange-300'
                      }`}>
                        fib(3)
                      </div>
                      <div className={`px-3 py-2 rounded-lg font-mono font-bold text-xs border-2 transition-all duration-500 ${
                        currentStep >= 7
                          ? 'bg-orange-500 text-white border-orange-400 shadow-lg scale-110'
                          : 'bg-orange-200 dark:bg-orange-900 text-orange-900 dark:text-orange-100 border-orange-300'
                      }`}>
                        fib(2)
                      </div>
                    </div>
                  )}

                  {/* Arrows from Level 1 to Level 2 */}
                  {currentStep >= 3 && (
                    <div className="flex justify-center gap-2 mb-1">
                      <div className="flex gap-6">
                        <div className="text-orange-600 dark:text-orange-400 text-2xl font-bold">╱</div>
                        <div className="text-orange-600 dark:text-orange-400 text-2xl font-bold">╲</div>
                      </div>
                      <div className="w-24"></div>
                      <div className="flex gap-6">
                        <div className="text-orange-600 dark:text-orange-400 text-2xl font-bold">╱</div>
                        <div className="text-orange-600 dark:text-orange-400 text-2xl font-bold">╲</div>
                      </div>
                    </div>
                  )}

                  {/* Level 2 branches */}
                  {currentStep >= 3 && (
                    <div className="flex justify-center items-start gap-20 mb-2 animate-in fade-in-0 slide-in-from-top-4 duration-500">
                      {/* Left group from fib(3) */}
                      <div className="flex flex-col items-center">
                        <div className="flex gap-2">
                          <div className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${
                            currentStep === 3 || currentStep === 4 || currentStep === 5
                              ? 'bg-amber-500 text-white border-amber-400 shadow scale-105'
                              : 'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border-amber-300'
                          }`}>
                            fib(2)
                          </div>
                          <div className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${
                            currentStep === 6
                              ? 'bg-amber-500 text-white border-amber-400 shadow scale-105'
                              : 'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border-amber-300'
                          }`}>
                            fib(1)
                          </div>
                        </div>
                        
                        {/* Arrows from fib(2) to its children */}
                        {currentStep >= 4 && (
                          <div className="flex gap-3 my-1 animate-in fade-in-0 duration-300">
                            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">╱</div>
                            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">╲</div>
                          </div>
                        )}
                        
                        {/* Level 3 base cases under fib(2) */}
                        {currentStep >= 4 && (
                          <div className="flex gap-2 animate-in fade-in-0 slide-in-from-top-4 duration-500">
                            <div className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${
                              currentStep === 4
                                ? 'bg-green-500 text-white border-green-400 shadow-lg ring-2 ring-green-300 scale-110'
                                : 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-100 border-green-300'
                            }`}>
                              fib(1)
                            </div>
                            <div className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${
                              currentStep === 5
                                ? 'bg-green-500 text-white border-green-400 shadow-lg ring-2 ring-green-300 scale-110'
                                : 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-100 border-green-300'
                            }`}>
                              fib(0)
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Right group from fib(2) */}
                      <div className="flex gap-2">
                        <div className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${
                          currentStep === 8
                            ? 'bg-amber-500 text-white border-amber-400 shadow scale-105'
                            : 'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border-amber-300'
                        }`}>
                          fib(1)
                        </div>
                        <div className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${
                          currentStep === 9
                            ? 'bg-amber-500 text-white border-amber-400 shadow scale-105'
                            : 'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border-amber-300'
                        }`}>
                          fib(0)
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Progress Indicator */}
                  <div className="pt-4 border-t-2 border-purple-200 dark:border-purple-800">
                    <div className="text-center space-y-2">
                      <div className="flex justify-between text-xs text-purple-700 dark:text-purple-300">
                        <span>Tree Depth</span>
                        <span className="font-bold">{Math.min(currentStep, 4)} / 4 levels</span>
                      </div>
                      <div className="w-full bg-purple-200 dark:bg-purple-900 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(Math.min(currentStep, 4) / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Call Stack */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-4 text-center flex items-center justify-center gap-2">
                  <span>📚</span> Call Stack (LIFO)
                </h5>
                <div className="space-y-3 min-h-[200px]">
                  {steps[currentStep].callStack.length > 0 ? (
                    <>
                      {steps[currentStep].callStack.map((call, idx) => (
                        <div
                          key={idx}
                          className={`relative p-3 rounded-lg font-mono text-sm font-bold text-center transition-all duration-500 animate-in slide-in-from-right-2 ${
                            idx === steps[currentStep].callStack.length - 1
                              ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white scale-105 shadow-2xl ring-4 ring-rose-300 dark:ring-rose-600'
                              : 'bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-slate-800 dark:text-slate-200'
                          }`}
                          style={{ 
                            marginLeft: `${idx * 16}px`,
                            zIndex: steps[currentStep].callStack.length - idx
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs opacity-70">Depth {idx}</span>
                            <span>{call}</span>
                            {idx === steps[currentStep].callStack.length - 1 && (
                              <span className="text-xs animate-pulse">← Active</span>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {/* Stack Metrics */}
                      <div className="pt-4 border-t-2 border-blue-200 dark:border-blue-800 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-700 dark:text-blue-300">Stack Depth:</span>
                          <span className="font-bold text-blue-900 dark:text-blue-100">{steps[currentStep].callStack.length}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-700 dark:text-blue-300">Calls Made:</span>
                          <span className="font-bold text-blue-900 dark:text-blue-100">{steps[currentStep].totalCalls}</span>
                        </div>
                        <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(steps[currentStep].totalCalls / 9) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-8 text-center text-slate-500 dark:text-slate-400 animate-in fade-in-0 zoom-in-50 duration-700">
                      <CheckCircle className="w-16 h-16 mx-auto mb-3 text-green-500 animate-bounce" />
                      <p className="font-bold text-lg text-green-600 dark:text-green-400">All Calls Completed!</p>
                      <p className="text-sm mt-2">Total: {steps[currentStep].totalCalls} function calls</p>
                    </div>
                  )}
                </div>

                {/* Legend */}
                <div className="mt-4 pt-4 border-t-2 border-blue-200 dark:border-blue-800">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gradient-to-r from-rose-500 to-red-500 rounded shadow"></div>
                      <span className="text-slate-700 dark:text-slate-300">Active Call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded"></div>
                      <span className="text-slate-700 dark:text-slate-300">Waiting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exponential Growth Meter */}
            <div className="mt-6 p-6 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/30 dark:via-orange-950/30 dark:to-yellow-950/30 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-4 text-center flex items-center justify-center gap-2">
                <span>💥</span> Exponential Growth Meter
              </h5>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300">
                  <div className="text-3xl font-bold text-orange-600">{steps[currentStep].totalCalls}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Total Calls</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-300">
                  <div className="text-3xl font-bold text-red-600">{steps[currentStep].callStack.length}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Max Depth</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-rose-300">
                  <div className="text-3xl font-bold text-rose-600">{Math.round((steps[currentStep].totalCalls / 9) * 100)}%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Progress</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <p className="text-center text-sm text-red-800 dark:text-red-200">
                  {currentStep < 5 ? (
                    <>⚠️ Calls are doubling with each level! This is exponential growth!</>
                  ) : currentStep < 9 ? (
                    <>💥 Already made {steps[currentStep].totalCalls} calls for just fib(4)!</>
                  ) : (
                    <>🎉 Completed! 9 calls for n=4. Imagine fib(30) = 2.7 MILLION calls! 💀</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common O(2^n) Algorithms */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-rose-600" />
            Common O(2^n) Algorithms
          </CardTitle>
          <CardDescription>Operations that should almost always be avoided for large inputs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-700">
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                1. Recursive Fibonacci (without memoization)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-rose-700 dark:text-rose-300">Why O(2^n):</strong> Each call makes 2 more calls, 
                creating a binary tree of height n. Total calls ≈ 2^n.
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded text-rose-600 font-semibold">
                ⚠️ fib(50) would take YEARS to compute!
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                2. Power Set / All Subsets
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-red-700 dark:text-red-300">Why O(2^n):</strong> For n elements, there are 2^n possible subsets. 
                Must generate all of them.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`[1,2,3] has 8 subsets: [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                3. Brute Force Password Cracking
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-orange-700 dark:text-orange-300">Why O(2^n) or worse:</strong> Must try all possible combinations. 
                This is why long passwords are important! Each added character exponentially increases security.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Avoid O(2^n) */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600" />
            How to Avoid O(2^n)
          </CardTitle>
          <CardDescription>Optimization strategies to escape exponential hell</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Use Dynamic Programming (Memoization)</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Cache results of expensive recursive calls. Turns Fibonacci from O(2^n) to O(n)!
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
                <div className="text-rose-600">❌ Bad: fib(50) = 2^50 calls</div>
                <div className="text-green-600 font-semibold">✅ Good: fib(50) with memo = 50 calls</div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✅ Use Iterative Solutions</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Replace recursion with loops. Often converts O(2^n) to O(n) or better.
              </p>
            </div>

            <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">✅ Look for Mathematical Formulas</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Fibonacci has a direct formula! Sometimes math can skip all the computation.
              </p>
            </div>

            <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚠️ Accept That Some Problems Are Hard</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Some problems (like NP-complete problems) genuinely require exponential time. Focus on keeping n small!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            Understanding O(2^n) in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-300 dark:border-rose-700">
              <h5 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">🚨 Absolute Worst</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Even n=30 can take forever. NEVER use O(2^n) algorithms for any reasonable input size.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">💀 Interview Killer</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If your solution is O(2^n), the interviewer will ask you to optimize. Always mention if you notice it!
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎓 Learning Tool</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Naive recursive solutions are great for understanding problems, then optimize from there.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Memoization Saves Lives</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Adding a cache can turn O(2^n) to O(n). Learn dynamic programming - it's a career skill!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
