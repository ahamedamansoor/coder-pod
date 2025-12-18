'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, ChevronLeft, ChevronRight, Hash, X } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function SquareRootTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const n = 29;
  const sqrtN = Math.floor(Math.sqrt(n));

  const steps = [
    {
      step: 1,
      description: '📋 Start: Check if 29 is prime. Instead of checking all numbers from 2 to 29, we only check up to √29 ≈ 5.4',
      currentCheck: 0,
      checkedNumbers: [],
      isPrime: true,
      limit: sqrtN,
      formula: 'sqrt(29) = 5.4 → check up to 5'
    },
    {
      step: 2,
      description: '🔍 Check divisor 2: Is 29 divisible by 2? 29 % 2 = 1 (not divisible)',
      currentCheck: 2,
      checkedNumbers: [2],
      isPrime: true,
      limit: sqrtN,
      formula: '29 ÷ 2 = 14.5 (not divisible)'
    },
    {
      step: 3,
      description: '🔍 Check divisor 3: Is 29 divisible by 3? 29 % 3 = 2 (not divisible)',
      currentCheck: 3,
      checkedNumbers: [2, 3],
      isPrime: true,
      limit: sqrtN,
      formula: '29 ÷ 3 = 9.67 (not divisible)'
    },
    {
      step: 4,
      description: '🔍 Check divisor 4: Is 29 divisible by 4? 29 % 4 = 1 (not divisible)',
      currentCheck: 4,
      checkedNumbers: [2, 3, 4],
      isPrime: true,
      limit: sqrtN,
      formula: '29 ÷ 4 = 7.25 (not divisible)'
    },
    {
      step: 5,
      description: '🔍 Check divisor 5: Is 29 divisible by 5? 29 % 5 = 4 (not divisible)',
      currentCheck: 5,
      checkedNumbers: [2, 3, 4, 5],
      isPrime: true,
      limit: sqrtN,
      formula: '29 ÷ 5 = 5.8 (not divisible)'
    },
    {
      step: 6,
      description: '✅ Done! Checked only 4 numbers (2-5) instead of 27 numbers (2-28). 29 is PRIME!',
      currentCheck: sqrtN + 1,
      checkedNumbers: [2, 3, 4, 5],
      isPrime: true,
      limit: sqrtN,
      formula: 'Checked √29 ≈ 5 numbers instead of 27!'
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
        icon={CheckCircle2}
        category="DSA · Time Complexity"
        title="O(√n) - Square Root Time Complexity"
        description="Better than linear - only check up to the square root!"
        colorTheme="emerald"
        badges={[
          { label: 'O(√n)', variant: 'default' },
          { label: 'Square Root', variant: 'secondary' },
          { label: '⚡ Efficient', variant: 'outline' },
        ]}
      />

      {/* What is O(√n)? */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            What is O(√n) Square Root Time?
          </CardTitle>
          <CardDescription>
            Faster than O(n) - only iterate up to the square root of n
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(√n) means "square root time"</strong> - the operations grow as the <strong>square root of n</strong>. 
                This happens when you realize you only need to check <strong>half the problem space</strong> due to mathematical properties!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 dark:border-emerald-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 🎯 Finding Factors
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Finding factors of 100:</strong> You only check up to √100 = 10</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Why?</strong> If 100 = a × b and a {'>'} 10, then b must be {'<'} 10</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Result:</strong> Check 10 numbers instead of 98! 🎉</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg border-l-4 border-emerald-500">
                <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                  💡 The Key Insight
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  For prime checking: If n has a divisor larger than √n, it MUST also have a divisor smaller than √n (they come in pairs!).
                  So checking up to √n is enough!
                  <br />
                  <strong>Example: For n=100, if we find 2 divides 100, we know 50 also divides it!</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Growth Comparison */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">📊 Square Root Growth vs Linear</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-green-300 dark:border-green-700">
                    <th className="p-2 text-left">Input (n)</th>
                    <th className="p-2 text-center">O(√n) Operations</th>
                    <th className="p-2 text-center">O(n) Operations</th>
                    <th className="p-2 text-center">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-200 dark:divide-green-800">
                  <tr>
                    <td className="p-2 font-mono">10</td>
                    <td className="p-2 text-center font-mono text-emerald-600 font-bold">3</td>
                    <td className="p-2 text-center font-mono text-slate-600">10</td>
                    <td className="p-2 text-center text-xs">70% faster!</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">100</td>
                    <td className="p-2 text-center font-mono text-emerald-600 font-bold">10</td>
                    <td className="p-2 text-center font-mono text-slate-600">100</td>
                    <td className="p-2 text-center text-xs font-semibold text-emerald-600">90% faster!</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">1,000</td>
                    <td className="p-2 text-center font-mono text-emerald-600 font-bold">31</td>
                    <td className="p-2 text-center font-mono text-slate-600">1,000</td>
                    <td className="p-2 text-center text-xs font-semibold text-emerald-600">97% faster!</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">1,000,000</td>
                    <td className="p-2 text-center font-mono text-emerald-600 font-bold">1,000</td>
                    <td className="p-2 text-center font-mono text-slate-600">1,000,000</td>
                    <td className="p-2 text-center text-xs font-semibold text-emerald-600">99.9% faster! 🚀</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-400">
              <p className="text-sm text-emerald-900 dark:text-emerald-100 font-bold text-center">
                ⚡ The bigger n gets, the better O(√n) looks compared to O(n)!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Animation */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
              <Hash className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            How It Works: Checking if 29 is Prime
          </CardTitle>
          <CardDescription>Watch how we only check up to √29 ≈ 5.4 instead of checking all 27 numbers!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                        className="w-4 h-4 text-emerald-600 border-emerald-300 focus:ring-emerald-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-emerald-800 dark:text-emerald-200 capitalize">{speed}</span>
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
                    className="border-emerald-300 dark:border-emerald-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg border border-emerald-300 dark:border-emerald-700">
                    <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-emerald-300 dark:border-emerald-700"
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
                  : 'bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950/30 dark:to-cyan-950/30 border-emerald-400 dark:border-emerald-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-emerald-600'}`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Hash className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-emerald-900 dark:text-emerald-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {steps[currentStep].formula}
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-emerald-800 dark:text-emerald-200'}`}>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">isPrime.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">O(√n)</span>
                  </div>
                </div>

                <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                  {[
                    { line: 1, code: 'function isPrime(n) {', active: currentStep === 0, indent: 0 },
                    { line: 2, code: '  if (n < 2) return false;', active: false, indent: 1 },
                    { line: 3, code: '  ', active: false, indent: 0 },
                    { line: 4, code: '  // Only check up to √n', active: currentStep === 0, indent: 1, comment: true },
                    { line: 5, code: '  const limit = Math.sqrt(n);', active: currentStep === 0, indent: 1, highlight: currentStep === 0 },
                    { line: 6, code: '  ', active: false, indent: 0 },
                    { line: 7, code: '  for (let i = 2; i <= limit; i++) {', active: currentStep > 0 && currentStep < 6, indent: 1, highlight: currentStep > 0 && currentStep < 6 },
                    { line: 8, code: '    if (n % i === 0) {', active: currentStep > 0 && currentStep < 6, indent: 2, highlight: currentStep > 0 && currentStep < 6 },
                    { line: 9, code: '      return false;  // Found divisor', active: false, indent: 3 },
                    { line: 10, code: '    }', active: false, indent: 2 },
                    { line: 11, code: '  }', active: false, indent: 1 },
                    { line: 12, code: '  ', active: false, indent: 0 },
                    { line: 13, code: '  return true;  // No divisors found', active: currentStep === 5, indent: 1, highlight: currentStep === 5 },
                    { line: 14, code: '}', active: false, indent: 0 },
                  ].map((lineData) => (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.highlight
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-400 dark:border-emerald-500'
                          : lineData.comment
                          ? 'opacity-60'
                          : ''
                      }`}
                    >
                      <span className={`select-none w-6 text-right flex-shrink-0 ${
                        lineData.highlight
                          ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        {lineData.line}
                      </span>
                      <code className="flex-1">
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }} className={lineData.comment ? 'text-slate-500 dark:text-slate-500 italic' : ''}>
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
                        <span className="text-slate-500 dark:text-slate-400">n:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{n}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">limit:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">√{n} = {sqrtN}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">i:</span>
                        <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].currentCheck > 0 ? steps[currentStep].currentCheck : '-'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Number Line */}
            <div className="mb-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-center flex items-center justify-center gap-2">
                <span>🔢</span> Checking Numbers: 2 to √29
              </h5>
              <div className="space-y-4">
                {/* Numbers being checked */}
                <div className="flex justify-center gap-2 flex-wrap">
                  {[2, 3, 4, 5].map((num) => {
                    const isChecked = steps[currentStep].checkedNumbers.includes(num);
                    const isCurrent = steps[currentStep].currentCheck === num;
                    return (
                      <div
                        key={num}
                        className={`w-14 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-xl border-2 transition-all duration-500 ${
                          isCurrent
                            ? 'bg-gradient-to-br from-emerald-500 to-green-500 text-white border-emerald-400 shadow-lg scale-125 ring-4 ring-emerald-300'
                            : isChecked
                            ? 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-100 border-green-400'
                            : 'bg-gray-200 dark:bg-gray-800 text-gray-500 border-gray-300'
                        }`}
                      >
                        {num}
                      </div>
                    );
                  })}
                </div>

                {/* Skipped numbers indicator */}
                <div className="flex justify-center items-center gap-3">
                  <div className="h-px w-16 bg-slate-300"></div>
                  <div className="px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Skipped: 6 to 28 (23 numbers!)
                    </span>
                  </div>
                  <div className="h-px w-16 bg-slate-300"></div>
                </div>

                {/* Target number */}
                <div className="flex justify-center">
                  <div className="px-6 py-3 bg-purple-500 text-white rounded-lg font-mono font-bold text-2xl border-2 border-purple-400 shadow-lg">
                    Target: 29
                  </div>
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="p-6 bg-gradient-to-r from-emerald-50 via-green-50 to-cyan-50 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 text-center flex items-center justify-center gap-2">
                <span>⚡</span> Efficiency Comparison
              </h5>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-emerald-300">
                  <div className="text-3xl font-bold text-emerald-600">{steps[currentStep].checkedNumbers.length}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Checked (√n)</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300">
                  <div className="text-3xl font-bold text-slate-600">27</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Would Check (n-2)</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                  <div className="text-3xl font-bold text-green-600">{Math.round((1 - steps[currentStep].checkedNumbers.length / 27) * 100)}%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Faster!</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <p className="text-center text-sm text-emerald-800 dark:text-emerald-200">
                  {currentStep < 5 ? (
                    <>⚡ Checking only up to √29 = {sqrtN}. Much faster than checking all 27 numbers!</>
                  ) : (
                    <>🎉 Complete! Checked only {steps[currentStep].checkedNumbers.length} numbers instead of 27. That's O(√n)! 🚀</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common O(√n) Algorithms */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            Common O(√n) Algorithms
          </CardTitle>
          <CardDescription>Smart algorithms that only need to check up to the square root</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                1. Prime Number Checking
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-emerald-700 dark:text-emerald-300">Why O(√n):</strong> If n = a × b and a {'>'} √n, then b {'<'} √n. 
                So checking up to √n finds all factor pairs!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; }`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                2. Finding All Divisors
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-green-700 dark:text-green-300">Why O(√n):</strong> Check numbers up to √n. For each divisor i found, 
                n/i is also a divisor. Get all divisors in √n time!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`for (let i = 1; i <= Math.sqrt(n); i++) { if (n % i === 0) divisors.push(i, n/i); }`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-300 dark:border-cyan-700">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                3. Pollard's Rho Algorithm (factorization step)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-cyan-700 dark:text-cyan-300">Why O(√n):</strong> Part of advanced integer factorization. 
                Uses mathematical properties to find factors in roughly √n iterations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            Understanding O(√n) in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">⚡ Very Efficient</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Better than O(n)! For large numbers, you skip checking most values. Great for number theory!
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 Mathematical Insight</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Requires understanding the problem's mathematical properties to realize you only need √n iterations.
              </p>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">💡 Common Optimization</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If you're checking all values up to n, ask: "Can I stop at √n?" Often the answer is yes!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Interview Friendly</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Showing you know to optimize O(n) to O(√n) demonstrates strong problem-solving skills!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
