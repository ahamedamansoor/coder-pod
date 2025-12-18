'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, ChevronLeft, ChevronRight, Repeat } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function QuadraticTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const initialArray = [5, 3, 8, 4];

  // CSS animations for arc swaps
  const swapAnimationStyles = `
    @keyframes swap-arc-up-right-down {
      0% {
        transform: translate(0, 0);
        z-index: 20;
      }
      33% {
        transform: translate(30px, -50px);
        z-index: 20;
      }
      66% {
        transform: translate(76px, -50px);
        z-index: 20;
      }
      100% {
        transform: translate(76px, 0);
        z-index: 1;
      }
    }
    
    @keyframes swap-arc-down-left-up {
      0% {
        transform: translate(0, 0);
        z-index: 1;
      }
      33% {
        transform: translate(-30px, 50px);
        z-index: 1;
      }
      66% {
        transform: translate(-76px, 50px);
        z-index: 1;
      }
      100% {
        transform: translate(-76px, 0);
        z-index: 20;
      }
    }
    
    .animate-swap-right {
      animation: swap-arc-up-right-down 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    .animate-swap-left {
      animation: swap-arc-down-left-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  `;

  const steps = [
    {
      step: 1,
      array: [5, 3, 8, 4],
      outerLoop: 0,
      innerLoop: -1,
      comparing: [],
      swapped: false,
      description: '📋 Initial Array: [5, 3, 8, 4]. Bubble Sort uses nested loops - outer loop runs n times, inner loop runs n times. That\'s O(n²)!',
      currentLine: 1
    },
    {
      step: 2,
      array: [5, 3, 8, 4],
      outerLoop: 0,
      innerLoop: 0,
      comparing: [0, 1],
      swapped: false,
      description: '🔄 Outer Loop i=0 | Inner Loop j=0: Compare arr[0]=5 with arr[1]=3. Is 5 > 3? YES! Need to swap.',
      currentLine: 4
    },
    {
      step: 3,
      array: [3, 5, 8, 4],
      outerLoop: 0,
      innerLoop: 0,
      comparing: [0, 1],
      swapped: true,
      description: '🔀 Swap! [5, 3] becomes [3, 5]. First comparison done. Continue inner loop.',
      currentLine: 5
    },
    {
      step: 4,
      array: [3, 5, 8, 4],
      outerLoop: 0,
      innerLoop: 1,
      comparing: [1, 2],
      swapped: false,
      description: '🔄 Outer Loop i=0 | Inner Loop j=1: Compare arr[1]=5 with arr[2]=8. Is 5 > 8? NO. No swap needed.',
      currentLine: 4
    },
    {
      step: 5,
      array: [3, 5, 8, 4],
      outerLoop: 0,
      innerLoop: 2,
      comparing: [2, 3],
      swapped: false,
      description: '🔄 Outer Loop i=0 | Inner Loop j=2: Compare arr[2]=8 with arr[3]=4. Is 8 > 4? YES! Need to swap.',
      currentLine: 4
    },
    {
      step: 6,
      array: [3, 5, 4, 8],
      outerLoop: 0,
      innerLoop: 2,
      comparing: [2, 3],
      swapped: true,
      description: '🔀 Swap! [8, 4] becomes [4, 8]. First pass complete. Largest element (8) bubbled to end!',
      currentLine: 5
    },
    {
      step: 7,
      array: [3, 5, 4, 8],
      outerLoop: 1,
      innerLoop: 0,
      comparing: [0, 1],
      swapped: false,
      description: '🔄 Outer Loop i=1 | Inner Loop j=0: Compare arr[0]=3 with arr[1]=5. Is 3 > 5? NO. No swap.',
      currentLine: 4
    },
    {
      step: 8,
      array: [3, 5, 4, 8],
      outerLoop: 1,
      innerLoop: 1,
      comparing: [1, 2],
      swapped: false,
      description: '🔄 Outer Loop i=1 | Inner Loop j=1: Compare arr[1]=5 with arr[2]=4. Is 5 > 4? YES! Need to swap.',
      currentLine: 4
    },
    {
      step: 9,
      array: [3, 4, 5, 8],
      outerLoop: 1,
      innerLoop: 1,
      comparing: [1, 2],
      swapped: true,
      description: '🔀 Swap! [5, 4] becomes [4, 5]. Second pass complete. Second largest (5) in place!',
      currentLine: 5
    },
    {
      step: 10,
      array: [3, 4, 5, 8],
      outerLoop: 2,
      innerLoop: 0,
      comparing: [0, 1],
      swapped: false,
      description: '🔄 Outer Loop i=2 | Inner Loop j=0: Compare arr[0]=3 with arr[1]=4. Is 3 > 4? NO. Already sorted!',
      currentLine: 4
    },
    {
      step: 11,
      array: [3, 4, 5, 8],
      outerLoop: 3,
      innerLoop: -1,
      comparing: [],
      swapped: false,
      description: '✅ Complete! Array sorted. We made 3 passes (outer loop), each pass compared n elements (inner loop). Total: O(n²)!',
      currentLine: 7
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    // Get current values for display
    const i = stepData.outerLoop;
    const j = stepData.innerLoop;
    const arrJ = j >= 0 && j < stepData.array.length ? stepData.array[j] : '';
    const arrJPlus1 = j >= 0 && j + 1 < stepData.array.length ? stepData.array[j + 1] : '';
    
    return [
      { line: 1, code: 'function bubbleSort(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  // Outer loop: n iterations', active: stepData.currentLine === 2, indent: 1, values: i >= 0 ? `i = ${i}` : '' },
      { line: 3, code: '  for (let i = 0; i < arr.length; i++) {', active: stepData.currentLine === 2, indent: 1, values: i >= 0 ? `i = ${i}` : '' },
      { line: 4, code: '    // Inner loop: n iterations', active: stepData.currentLine === 3, indent: 2, values: j >= 0 ? `j = ${j}` : '' },
      { line: 5, code: '    for (let j = 0; j < arr.length - 1; j++) {', active: stepData.currentLine === 3, indent: 2, values: j >= 0 ? `i = ${i}, j = ${j}` : '' },
      { line: 6, code: '      if (arr[j] > arr[j + 1]) {', active: stepData.currentLine === 4, indent: 3, values: j >= 0 ? `arr[${j}]=${arrJ}, arr[${j+1}]=${arrJPlus1}` : '' },
      { line: 7, code: '        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];', active: stepData.currentLine === 5, indent: 4, values: j >= 0 ? `${arrJ} ⇄ ${arrJPlus1}` : '' },
      { line: 8, code: '      }', active: false, indent: 3 },
      { line: 9, code: '    }', active: false, indent: 2 },
      { line: 10, code: '  }', active: false, indent: 1 },
      { line: 11, code: '  return arr;', active: stepData.currentLine === 7, indent: 1, values: `[${stepData.array.join(', ')}]` },
      { line: 12, code: '}', active: false, indent: 0 }
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
      <style>{swapAnimationStyles}</style>
      <PageHeader
        icon={AlertTriangle}
        category="DSA · Time Complexity"
        title="O(n²) - Quadratic Time Complexity"
        description="Nested loops alert - grows very fast, avoid for large datasets"
        colorTheme="orange"
        badges={[
          { label: 'O(n²)', variant: 'destructive' },
          { label: 'Quadratic', variant: 'default' },
          { label: 'Avoid if Possible', variant: 'outline' },
        ]}
      />

      {/* What is O(n²)? */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            What is O(n²) Quadratic Time?
          </CardTitle>
          <CardDescription>
            Nested loops - when operations grow as the square of input size
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(n²) means "quadratic time"</strong> - the time grows as the <strong>square</strong> of input size. 
                Double the input? <strong>4× the time!</strong> This happens with <strong>nested loops</strong>.
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 🤝 Handshakes at a Party
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>4 people:</strong> Each person shakes hands with 3 others = 6 handshakes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>10 people:</strong> 45 handshakes (grows fast!)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>100 people:</strong> 4,950 handshakes! That's quadratic growth 📈</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg border-l-4 border-red-500">
                <p className="text-sm font-bold text-red-900 dark:text-red-100 mb-2">
                  ⚠️ The Nested Loop Problem
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Outer loop runs n times. Inner loop runs n times. Total operations: n × n = n²
                  <br />
                  <strong>Example: 1,000 items = 1,000,000 operations! 😱</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Growth Comparison */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4">📊 How Fast Does O(n²) Grow?</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-orange-300 dark:border-orange-700">
                    <th className="p-2 text-left">Input Size (n)</th>
                    <th className="p-2 text-center">Operations (n²)</th>
                    <th className="p-2 text-center">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-200 dark:divide-orange-800">
                  <tr>
                    <td className="p-2 font-mono">10</td>
                    <td className="p-2 text-center font-mono text-orange-600">100</td>
                    <td className="p-2 text-center text-xs">baseline</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">100</td>
                    <td className="p-2 text-center font-mono text-orange-600">10,000</td>
                    <td className="p-2 text-center text-xs">10× input = 100× time</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">1,000</td>
                    <td className="p-2 text-center font-mono text-red-600 font-bold">1,000,000</td>
                    <td className="p-2 text-center text-xs font-semibold text-red-600">Million ops!</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">10,000</td>
                    <td className="p-2 text-center font-mono text-red-700 font-bold">100,000,000</td>
                    <td className="p-2 text-center text-xs font-semibold text-red-700">100 million! 😱</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrammatic Example */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Repeat className="w-6 h-6 text-red-600" />
            Visual Breakdown: How Nested Loops Create O(n²)
          </CardTitle>
          <CardDescription>Step-by-step diagram showing bubble sort on [5, 3, 8, 4] - nested loops in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            
            {/* Nested Loop Structure */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-6 text-center">
                🔄 Understanding Nested Loops
              </h4>
              
              <div className="space-y-6">
                {/* Outer Loop Visualization */}
                <div className="p-5 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-400">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Outer Loop</span>
                    Runs n times (4 times for our array)
                  </h5>
                  <div className="flex items-center gap-2 justify-center flex-wrap">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg border-2 border-orange-500">
                        <div className="text-center font-mono font-bold text-orange-900 dark:text-orange-100">
                          i = {i}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center mt-3 text-orange-700 dark:text-orange-300">
                    Each outer loop iteration runs the entire inner loop
                  </p>
                </div>

                {/* Inner Loop for each Outer */}
                <div className="p-5 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-400">
                  <h5 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Inner Loop</span>
                    Runs n times for EACH outer loop iteration
                  </h5>
                  <div className="space-y-3">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="px-3 py-2 bg-orange-100 dark:bg-orange-900/40 rounded border border-orange-500 font-mono text-sm font-semibold text-orange-900 dark:text-orange-100 min-w-[60px] text-center">
                          i = {i}
                        </div>
                        <div className="text-xl text-red-600">→</div>
                        <div className="flex items-center gap-1 flex-wrap">
                          {[0, 1, 2].map((j) => (
                            <div key={j} className="px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded border border-red-400 font-mono text-xs text-red-900 dark:text-red-100">
                              j={j}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                          {i === 0 && '(3 comparisons)'}
                          {i === 1 && '(3 comparisons)'}
                          {i === 2 && '(3 comparisons)'}
                          {i === 3 && '(3 comparisons)'}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-300">
                    <p className="text-sm font-bold text-red-900 dark:text-red-100 text-center">
                      Total: 4 outer × 3 inner = 12 operations ≈ n² operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why O(n²) Explanation */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">
                🧮 Why is this O(n²)?
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">1️⃣</div>
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                        Outer Loop: n iterations
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        The outer loop runs once for each element in the array.
                      </p>
                      <div className="mt-2 text-xs font-mono bg-red-50 dark:bg-red-900/30 p-2 rounded">
                        For 4 elements: Loop runs 4 times (i = 0, 1, 2, 3)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">2️⃣</div>
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                        Inner Loop: n iterations (for EACH outer)
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        For every single outer loop iteration, the inner loop runs n times.
                      </p>
                      <div className="mt-2 text-xs font-mono bg-red-50 dark:bg-red-900/30 p-2 rounded space-y-1">
                        <div>Outer i=0: Inner runs 3 times (j = 0, 1, 2)</div>
                        <div>Outer i=1: Inner runs 3 times (j = 0, 1, 2)</div>
                        <div>Outer i=2: Inner runs 3 times (j = 0, 1, 2)</div>
                        <div>Outer i=3: Inner runs 3 times (j = 0, 1, 2)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg border-2 border-red-500">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">
                        The Multiplication
                      </h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>n outer iterations</strong> × <strong>n inner iterations</strong> = <strong className="text-red-600 dark:text-red-400">n × n = n²</strong>
                      </p>
                      <div className="mt-2 text-xs bg-white dark:bg-slate-900 p-2 rounded space-y-1">
                        <div><strong>4 elements:</strong> 4 × 3 ≈ 12 operations (n²)</div>
                        <div><strong>10 elements:</strong> 10 × 9 ≈ 90 operations (n²)</div>
                        <div><strong>100 elements:</strong> 100 × 99 ≈ 10,000 operations! 😱</div>
                        <div className="text-red-600 dark:text-red-400 font-bold pt-1">
                          Double input → 4× operations!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison with Better Algorithms */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
                ⚡ O(n²) vs Better Sorting Algorithms
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-300">
                  <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🐌</span>
                    Bubble Sort - O(n²)
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <div>10 items → ~100 operations</div>
                    <div>100 items → ~10,000 operations</div>
                    <div>1,000 items → ~1,000,000 operations</div>
                  </div>
                  <p className="text-xs mt-2 text-red-600 dark:text-red-400 font-semibold">
                    ⚠️ Too slow for large datasets!
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                  <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Merge Sort - O(n log n)
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <div>10 items → ~33 operations</div>
                    <div>100 items → ~664 operations</div>
                    <div>1,000 items → ~10,000 operations</div>
                  </div>
                  <p className="text-xs mt-2 text-green-600 dark:text-green-400 font-semibold">
                    ✅ Much better for large data!
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                <p className="text-sm text-amber-900 dark:text-amber-100 font-semibold">
                  💡 Key Takeaway: For 1,000 items, Merge Sort is ~100x faster than Bubble Sort!
                </p>
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
              <Repeat className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            How It Works: Bubble Sort Animation
          </CardTitle>
          <CardDescription>Watch nested loops in action - sorting [5, 3, 8, 4]</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-orange-300 dark:border-orange-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-orange-900 dark:text-orange-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                        className="w-4 h-4 text-orange-600 border-orange-300 focus:ring-orange-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-orange-800 dark:text-orange-200 capitalize">{speed}</span>
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
                    className="border-orange-300 dark:border-orange-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg border border-orange-300 dark:border-orange-700">
                    <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === steps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 dark:border-orange-700"
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">bubbleSort.js</span>
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
                          <span className="ml-3 text-orange-600 dark:text-orange-400 font-semibold">
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
                        <span className="text-slate-500 dark:text-slate-400">Outer (i):</span>
                        <span className="font-semibold text-orange-600 dark:text-orange-400">{steps[currentStep].outerLoop >= 0 ? steps[currentStep].outerLoop : '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Inner (j):</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">{steps[currentStep].innerLoop >= 0 ? steps[currentStep].innerLoop : '-'}</span>
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
                  : steps[currentStep].swapped
                  ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-400 dark:border-blue-600'
                  : 'bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-400 dark:border-orange-600'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${
                      currentStep === steps.length - 1 ? 'bg-green-500' :
                      steps[currentStep].swapped ? 'bg-blue-600' : 'bg-orange-600'
                    }`}>
                      {currentStep === steps.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Repeat className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${
                        currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' :
                        steps[currentStep].swapped ? 'text-blue-900 dark:text-blue-100' :
                        'text-orange-900 dark:text-orange-100'
                      }`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {steps[currentStep].swapped ? 'Swapping Elements' : 'Comparing Elements'}
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed font-medium ${
                    currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' :
                    steps[currentStep].swapped ? 'text-blue-800 dark:text-blue-200' :
                    'text-orange-800 dark:text-orange-200'
                  }`}>
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            )}

            {/* Array Visualization */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
                {steps[currentStep].array.map((num, idx) => {
                  const isComparing = steps[currentStep].comparing.includes(idx);
                  const isSwapped = steps[currentStep].swapped && steps[currentStep].comparing.includes(idx);
                  const isComplete = currentStep === steps.length - 1;
                  const isI = steps[currentStep].outerLoop === idx;
                  const isJ = steps[currentStep].innerLoop === idx;
                  const isJPlus1 = steps[currentStep].innerLoop === idx - 1 && idx > 0;
                  
                  // Determine if this is left or right element in swap
                  const isLeftSwap = isSwapped && steps[currentStep].comparing[0] === idx;
                  const isRightSwap = isSwapped && steps[currentStep].comparing[1] === idx;
                  
                  // During swap animation, show PREVIOUS step's values (before swap)
                  // So numbers stay with their moving boxes
                  const displayValue = isSwapped && currentStep > 0 
                    ? steps[currentStep - 1].array[idx]
                    : num;

                  return (
                    <div
                      key={`${idx}-${currentStep}`}
                      className={`
                        relative w-16 h-16 flex flex-col items-center justify-center rounded-lg font-mono text-lg font-bold
                        ${isLeftSwap ? 'animate-swap-right' : ''}
                        ${isRightSwap ? 'animate-swap-left' : ''}
                        ${!isSwapped ? 'transition-all duration-300 ease-out' : ''}
                        ${isComplete
                          ? 'bg-green-500 text-white scale-105 shadow-lg'
                          : isSwapped
                          ? 'bg-blue-500 text-white scale-110 shadow-xl ring-4 ring-blue-300 dark:ring-blue-500'
                          : isComparing
                          ? 'bg-orange-500 text-white scale-105 shadow-md ring-2 ring-orange-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                        }
                      `}
                    >
                      <span className="relative z-10">{displayValue}</span>
                      <span className="absolute -bottom-6 text-xs text-slate-500 dark:text-slate-400">[{idx}]</span>
                      
                      {/* Show i pointer (outer loop) - only when not comparing */}
                      {isI && !isComplete && !isComparing && (
                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-30">
                          <div className="flex flex-col items-center">
                            <div className="px-2 py-1 bg-orange-600 text-white text-xs font-bold rounded shadow-lg">
                              i={steps[currentStep].outerLoop}
                            </div>
                            <div className="text-orange-500 text-lg font-bold">↓</div>
                          </div>
                        </div>
                      )}
                      
                      {/* Show j pointer on arr[j] */}
                      {isJ && steps[currentStep].innerLoop >= 0 && !isComplete && (
                        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-30">
                          <div className="flex flex-col items-center">
                            <div className="text-red-500 text-xl font-bold animate-pulse">↑</div>
                            <div className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded shadow-lg">
                              arr[j]
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Show j+1 label on arr[j+1] when comparing */}
                      {isJPlus1 && isComparing && !isComplete && (
                        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-30">
                          <div className="flex flex-col items-center">
                            <div className="text-purple-500 text-xl font-bold animate-pulse">↑</div>
                            <div className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded shadow-lg">
                              arr[j+1]
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Enhanced swap indicator */}
                      {isSwapped && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30">
                          <div className="flex flex-col items-center">
                            <div className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                              SWAPPING
                            </div>
                            <div className="text-blue-500 text-3xl font-bold mt-1">⇄</div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Loop indicators legend */}
              <div className="flex items-center justify-center gap-6 text-sm pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded">i</div>
                  <span className="text-slate-700 dark:text-slate-300">Outer Loop (i): {steps[currentStep].outerLoop >= 0 ? steps[currentStep].outerLoop : '-'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">j</div>
                  <span className="text-slate-700 dark:text-slate-300">Inner Loop (j): {steps[currentStep].innerLoop >= 0 ? steps[currentStep].innerLoop : '-'}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common O(n²) Operations */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-red-600" />
            Common O(n²) Algorithms
          </CardTitle>
          <CardDescription>Operations with nested loops - be cautious with large data!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                1. Bubble Sort, Selection Sort, Insertion Sort
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-orange-700 dark:text-orange-300">Why O(n²):</strong> Two nested loops. 
                Outer loop runs n times, inner loop runs n times. Simple but slow for large arrays.
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded text-red-600 font-semibold">
                ⚠️ Avoid for arrays larger than ~1000 elements!
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                2. Nested Loop Array Operations
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-red-700 dark:text-red-300">Why O(n²):</strong> Checking all pairs, 
                finding duplicates with nested loops, matrix operations.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`for (i) { for (j) { compare arr[i] with arr[j] } }`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                3. When O(n²) is Acceptable
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Small datasets (n {'<'} 100), educational purposes, or when simplicity matters more than performance. 
                Sometimes O(n²) with small constant is better than complex O(n log n)!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Avoid O(n²) */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600" />
            How to Avoid O(n²)
          </CardTitle>
          <CardDescription>Strategies to improve quadratic algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Use Better Sorting Algorithms</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Replace Bubble/Selection/Insertion Sort with Merge Sort, Quick Sort, or Heap Sort (O(n log n))
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
                <div>❌ Bad: Bubble Sort - O(n²)</div>
                <div className="text-green-600 font-semibold">✅ Good: Merge Sort - O(n log n)</div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✅ Use Hash Maps / Sets</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Replace nested loop lookups with O(1) hash table lookups. Huge performance win!
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded space-y-1">
                <div>❌ Bad: Nested loop to find duplicates - O(n²)</div>
                <div className="text-blue-600 font-semibold">✅ Good: Use Set to track seen items - O(n)</div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">✅ Two Pointers / Sliding Window</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                Many nested loop problems can be solved with two pointers in O(n)
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded space-y-1">
                <div>❌ Bad: Two nested loops - O(n²)</div>
                <div className="text-purple-600 font-semibold">✅ Good: Two pointers from ends - O(n)</div>
              </div>
            </div>

            <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">⚡ Pre-sorting Can Help</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Sort once (O(n log n)), then use binary search (O(log n)) instead of linear search (O(n)). 
                Total: O(n log n) instead of O(n²)!
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
            Understanding O(n²) in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Watch Out!</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                O(n²) becomes painful fast. 10,000 items = 100 million operations = several seconds!
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🎯 Interview Red Flag</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If your solution has nested loops, interviewer will ask: "Can you do better?"
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💡 Small Data is OK</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                For small arrays ({'<'} 100 elements), O(n²) is perfectly fine. Don't over-optimize!
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ First Solution</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                O(n²) brute force is often the first solution. Then optimize to O(n log n) or O(n)!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
