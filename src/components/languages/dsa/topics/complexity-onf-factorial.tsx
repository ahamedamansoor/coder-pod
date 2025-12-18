'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Flame, Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, ChevronLeft, ChevronRight, AlertTriangle, Ban } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FactorialTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      description: '📋 Initial: Generate all permutations of [A, B, C]. Start with first element A.',
      currentPermutation: [],
      allPermutations: [],
      currentChoice: 'A',
      remainingElements: ['B', 'C'],
      totalPermutations: 0,
      currentLine: 1
    },
    {
      step: 2,
      description: '🔄 Choose A first. Remaining: [B, C]. Now choose next element.',
      currentPermutation: ['A'],
      allPermutations: [],
      currentChoice: 'B',
      remainingElements: ['C'],
      totalPermutations: 0,
      currentLine: 2
    },
    {
      step: 3,
      description: '🔄 A → B → C. Only C left. Complete permutation!',
      currentPermutation: ['A', 'B', 'C'],
      allPermutations: [['A', 'B', 'C']],
      currentChoice: 'C',
      remainingElements: [],
      totalPermutations: 1,
      currentLine: 3
    },
    {
      step: 4,
      description: '⬅️ Backtrack! Try A → C instead of A → B.',
      currentPermutation: ['A', 'C'],
      allPermutations: [['A', 'B', 'C']],
      currentChoice: 'B',
      remainingElements: [],
      totalPermutations: 1,
      currentLine: 2
    },
    {
      step: 5,
      description: '🔄 A → C → B. Complete second permutation!',
      currentPermutation: ['A', 'C', 'B'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B']],
      currentChoice: 'B',
      remainingElements: [],
      totalPermutations: 2,
      currentLine: 3
    },
    {
      step: 6,
      description: '⬅️ Backtrack to start! Try B first instead of A.',
      currentPermutation: ['B'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B']],
      currentChoice: 'A',
      remainingElements: ['C'],
      totalPermutations: 2,
      currentLine: 1
    },
    {
      step: 7,
      description: '🔄 B → A → C. Complete third permutation!',
      currentPermutation: ['B', 'A', 'C'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C']],
      currentChoice: 'C',
      remainingElements: [],
      totalPermutations: 3,
      currentLine: 3
    },
    {
      step: 8,
      description: '⬅️ Backtrack! Try B → C → A.',
      currentPermutation: ['B', 'C', 'A'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A']],
      currentChoice: 'A',
      remainingElements: [],
      totalPermutations: 4,
      currentLine: 3
    },
    {
      step: 9,
      description: '⬅️ Backtrack to start! Try C first.',
      currentPermutation: ['C'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A']],
      currentChoice: 'A',
      remainingElements: ['B'],
      totalPermutations: 4,
      currentLine: 1
    },
    {
      step: 10,
      description: '🔄 C → A → B. Fifth permutation!',
      currentPermutation: ['C', 'A', 'B'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B']],
      currentChoice: 'B',
      remainingElements: [],
      totalPermutations: 5,
      currentLine: 3
    },
    {
      step: 11,
      description: '🔄 C → B → A. Final permutation!',
      currentPermutation: ['C', 'B', 'A'],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B'], ['C', 'B', 'A']],
      currentChoice: 'A',
      remainingElements: [],
      totalPermutations: 6,
      currentLine: 3
    },
    {
      step: 12,
      description: '🎉 Complete! Generated all 6 permutations. 3! = 3 × 2 × 1 = 6. That\'s O(n!)!',
      currentPermutation: [],
      allPermutations: [['A', 'B', 'C'], ['A', 'C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B'], ['C', 'B', 'A']],
      currentChoice: '',
      remainingElements: [],
      totalPermutations: 6,
      currentLine: 4
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
        icon={Flame}
        category="DSA · Time Complexity"
        title="O(n!) - Factorial Time Complexity"
        description="The absolute worst - grows faster than anything else!"
        colorTheme="orange"
        badges={[
          { label: 'O(n!)', variant: 'destructive' },
          { label: 'Factorial', variant: 'default' },
          { label: '🔥 Catastrophic Growth', variant: 'outline' },
        ]}
      />

      {/* What is O(n!)? */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-red-600" />
            What is O(n!) Factorial Time?
          </CardTitle>
          <CardDescription>
            The absolute worst complexity - literally impossible for even small inputs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(n!) means "factorial time"</strong> - the time grows as <strong>n factorial</strong> (n × (n-1) × (n-2) × ... × 1). 
                This happens when you need to try <strong>every possible arrangement</strong> of n items!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-300 dark:border-red-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 📷 Group Photo Arrangements
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>3 people:</strong> 6 different arrangements (3! = 6)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>5 people:</strong> 120 arrangements (5! = 120)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>10 people:</strong> 3.6 MILLION arrangements (10! = 3,628,800)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>20 people:</strong> More than atoms in universe! 💀</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 rounded-lg border-l-4 border-red-500">
                <p className="text-sm font-bold text-red-900 dark:text-red-100 mb-2">
                  🔥 The Factorial Explosion
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Each added element multiplies the work by n! Every new item means you must generate ALL arrangements with that item in every position.
                  <br />
                  <strong>Example: 10! = 3,628,800 operations. 11! = 39,916,800 operations! 😱</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Growth Comparison */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4">📊 Factorial Growth is APOCALYPTIC</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-rose-300 dark:border-rose-700">
                    <th className="p-2 text-left">Input (n)</th>
                    <th className="p-2 text-center">Operations (n!)</th>
                    <th className="p-2 text-center">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-200 dark:divide-rose-800">
                  <tr>
                    <td className="p-2 font-mono">3</td>
                    <td className="p-2 text-center font-mono text-orange-600">6</td>
                    <td className="p-2 text-center text-xs">Tiny</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">5</td>
                    <td className="p-2 text-center font-mono text-orange-600">120</td>
                    <td className="p-2 text-center text-xs">Small</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">10</td>
                    <td className="p-2 text-center font-mono text-red-600 font-bold">3,628,800</td>
                    <td className="p-2 text-center text-xs font-semibold text-red-600">Millions!</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">15</td>
                    <td className="p-2 text-center font-mono text-red-700 font-bold">1.3 TRILLION</td>
                    <td className="p-2 text-center text-xs font-semibold text-red-700">Trillions! 💀</td>
                  </tr>
                  <tr className="bg-red-100 dark:bg-red-900/30">
                    <td className="p-2 font-mono font-bold">20</td>
                    <td className="p-2 text-center font-mono text-red-900 dark:text-red-100 font-bold text-xs">2.4 × 10^18</td>
                    <td className="p-2 text-center text-xs font-bold text-red-900 dark:text-red-100">IMPOSSIBLE! 🚫</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded border border-red-400">
              <p className="text-sm text-red-900 dark:text-red-100 font-bold text-center">
                ⚠️ Even O(2^n) is better! 2^20 = 1 million vs 20! = 2.4 quintillion!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrammatic Example */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-red-600" />
            Visual Breakdown: Permutations Explosion
          </CardTitle>
          <CardDescription>See how permutations of [A, B, C] create 3! = 6 arrangements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            
            {/* Decision Tree */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-6 text-center">
                🌳 Decision Tree for Permutations
              </h4>
              
              <div className="space-y-4">
                {/* Level 0 - Choose first */}
                <div className="text-center">
                  <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">Choose 1st element (3 choices)</div>
                  <div className="flex justify-center gap-8">
                    <div className="px-4 py-2 bg-red-500 text-white rounded-lg font-mono font-bold border-2 border-red-400 shadow">A</div>
                    <div className="px-4 py-2 bg-red-500 text-white rounded-lg font-mono font-bold border-2 border-red-400 shadow">B</div>
                    <div className="px-4 py-2 bg-red-500 text-white rounded-lg font-mono font-bold border-2 border-red-400 shadow">C</div>
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex justify-center gap-12">
                  <div className="flex gap-4">
                    <div className="text-2xl text-red-600 dark:text-red-400">╱</div>
                    <div className="text-2xl text-red-600 dark:text-red-400">╲</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl text-red-600 dark:text-red-400">╱</div>
                    <div className="text-2xl text-red-600 dark:text-red-400">╲</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl text-red-600 dark:text-red-400">╱</div>
                    <div className="text-2xl text-red-600 dark:text-red-400">╲</div>
                  </div>
                </div>

                {/* Level 1 - Choose second (2 choices each) */}
                <div className="text-center">
                  <div className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-2">Choose 2nd element (2 choices each = 6 total)</div>
                  <div className="flex justify-center gap-4">
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-orange-500 text-white rounded font-mono text-sm font-bold border border-orange-400">B</div>
                      <div className="px-3 py-1 bg-orange-500 text-white rounded font-mono text-sm font-bold border border-orange-400">C</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-orange-500 text-white rounded font-mono text-sm font-bold border border-orange-400">A</div>
                      <div className="px-3 py-1 bg-orange-500 text-white rounded font-mono text-sm font-bold border border-orange-400">C</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-orange-500 text-white rounded font-mono text-sm font-bold border border-orange-400">A</div>
                      <div className="px-3 py-1 bg-orange-500 text-white rounded font-mono text-sm font-bold border border-orange-400">B</div>
                    </div>
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex justify-center gap-4">
                  <div className="text-xl text-orange-600 dark:text-orange-400">↓</div>
                  <div className="text-xl text-orange-600 dark:text-orange-400">↓</div>
                  <div className="text-xl text-orange-600 dark:text-orange-400">↓</div>
                  <div className="text-xl text-orange-600 dark:text-orange-400">↓</div>
                  <div className="text-xl text-orange-600 dark:text-orange-400">↓</div>
                  <div className="text-xl text-orange-600 dark:text-orange-400">↓</div>
                </div>

                {/* Level 2 - Final permutations */}
                <div className="text-center">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">Choose 3rd element (1 choice each = 6 permutations!)</div>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {[['A','B','C'], ['A','C','B'], ['B','A','C'], ['B','C','A'], ['C','A','B'], ['C','B','A']].map((perm, idx) => (
                      <div key={idx} className="px-3 py-2 bg-green-500 text-white rounded-lg font-mono text-sm font-bold border-2 border-green-400 shadow">
                        {perm.join('')}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-500">
                  <p className="text-center font-bold text-red-900 dark:text-red-100">
                    3 choices × 2 choices × 1 choice = <span className="text-2xl">6 permutations</span> = 3!
                  </p>
                  <p className="text-center text-sm text-red-700 dark:text-red-300 mt-2">
                    Pattern: At each level, branches multiply! That's n! growth! 🔥
                  </p>
                </div>
              </div>
            </div>

            {/* Why O(n!) Explanation */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4">
                🧮 Why is this O(n!)?
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-rose-300 dark:border-rose-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">1️⃣</div>
                    <div>
                      <h5 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">
                        First Position: n choices
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        For the first position, you can choose any of the n elements.
                      </p>
                      <div className="mt-2 text-xs font-mono bg-rose-50 dark:bg-rose-900/30 p-2 rounded">
                        [A, B, C] → First position: 3 choices
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-rose-300 dark:border-rose-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">2️⃣</div>
                    <div>
                      <h5 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">
                        Second Position: (n-1) choices
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        After choosing first element, (n-1) elements remain for second position.
                      </p>
                      <div className="mt-2 text-xs font-mono bg-rose-50 dark:bg-rose-900/30 p-2 rounded">
                        If first = A → Second position: 2 choices [B, C]
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30 rounded-lg border-2 border-rose-500">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h5 className="font-bold text-rose-900 dark:text-rose-100 mb-2">
                        The Multiplication
                      </h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>n</strong> choices × <strong>(n-1)</strong> choices × <strong>(n-2)</strong> ... × <strong>1</strong> = <strong className="text-rose-600 dark:text-rose-400">n!</strong>
                      </p>
                      <div className="mt-2 text-xs bg-white dark:bg-slate-900 p-2 rounded space-y-1">
                        <div><strong>3 elements:</strong> 3 × 2 × 1 = 6 permutations</div>
                        <div><strong>5 elements:</strong> 5 × 4 × 3 × 2 × 1 = 120 permutations</div>
                        <div><strong>10 elements:</strong> 10! = 3,628,800 permutations! 😱</div>
                        <div className="text-rose-600 dark:text-rose-400 font-bold pt-1">
                          Add 1 element → Multiply work by n!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison with Other Complexities */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
                ⚡ Complexity Comparison for n=10
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                  <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    O(n log n) - Fast
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    10 log(10) ≈ 33 operations
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-yellow-300">
                  <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    O(n²) - Slow
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    10² = 100 operations
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">💥</span>
                    O(2^n) - Very Slow
                  </h5>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    2^10 = 1,024 operations
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-500">
                  <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    O(n!) - IMPOSSIBLE
                  </h5>
                  <div className="text-sm text-red-600 dark:text-red-400 font-bold">
                    10! = 3,628,800 operations! 💀
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-red-900 dark:text-red-100 font-semibold">
                  💡 Key Takeaway: O(n!) is 3,544 times WORSE than O(2^n) for just n=10!
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
              <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            How It Works: Generating Permutations
          </CardTitle>
          <CardDescription>Watch the backtracking algorithm generate all 6 permutations of [A, B, C]</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-950/20 dark:to-rose-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            {/* Control Buttons */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white"
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
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
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

            {/* Current Step Description */}
            {currentStep >= 0 && steps[currentStep].description && (
              <div className={`mb-6 p-5 rounded-xl border-2 shadow-lg animate-in slide-in-from-top-4 duration-500 ${
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
                        <Flame className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${currentStep === steps.length - 1 ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'}`}>
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Permutations Generated: {steps[currentStep].totalPermutations} / 6
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed font-medium ${currentStep === steps.length - 1 ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
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
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">permutations.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Backtracking</span>
                  </div>
                </div>

                <div className="p-3 font-mono text-[11px] leading-tight overflow-x-auto">
                  {[
                    { line: 1, code: 'function generatePermutations(arr) {', active: steps[currentStep].currentLine === 1, indent: 0 },
                    { line: 2, code: '  const result = [];', active: false, indent: 1 },
                    { line: 3, code: '  ', active: false, indent: 0 },
                    { line: 4, code: '  function backtrack(current, remaining) {', active: steps[currentStep].currentLine === 2, indent: 1 },
                    { line: 5, code: '    // Base case: no elements left', active: false, indent: 2, comment: true },
                    { line: 6, code: '    if (remaining.length === 0) {', active: steps[currentStep].currentLine === 3 && steps[currentStep].remainingElements.length === 0, indent: 2 },
                    { line: 7, code: '      result.push([...current]);', active: steps[currentStep].currentLine === 3 && steps[currentStep].remainingElements.length === 0, indent: 3 },
                    { line: 8, code: '      return;  // ⬅️ Backtrack!', active: steps[currentStep].description.includes('⬅️'), indent: 3, backtrack: true },
                    { line: 9, code: '    }', active: false, indent: 2 },
                    { line: 10, code: '    ', active: false, indent: 0 },
                    { line: 11, code: '    // Try each remaining element', active: false, indent: 2, comment: true },
                    { line: 12, code: '    for (let i = 0; i < remaining.length; i++) {', active: steps[currentStep].currentLine === 2 && steps[currentStep].remainingElements.length > 0, indent: 2 },
                    { line: 13, code: '      backtrack(', active: false, indent: 3 },
                    { line: 14, code: '        [...current, remaining[i]],', active: steps[currentStep].currentLine === 2, indent: 4 },
                    { line: 15, code: '        remaining.filter((_, idx) => idx !== i)', active: false, indent: 4 },
                    { line: 16, code: '      );', active: false, indent: 3 },
                    { line: 17, code: '    }', active: false, indent: 2 },
                    { line: 18, code: '  }', active: false, indent: 1 },
                    { line: 19, code: '  ', active: false, indent: 0 },
                    { line: 20, code: '  backtrack([], arr);', active: steps[currentStep].currentLine === 1, indent: 1 },
                    { line: 21, code: '  return result;', active: steps[currentStep].currentLine === 4, indent: 1 },
                    { line: 22, code: '}', active: false, indent: 0 },
                  ].map((lineData) => (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.active
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-400 dark:border-amber-500'
                          : lineData.backtrack && steps[currentStep].description.includes('⬅️')
                          ? 'bg-yellow-50 dark:bg-yellow-900/20 border-l-2 border-yellow-400'
                          : lineData.comment
                          ? 'opacity-60'
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
                        <span style={{ marginLeft: `${lineData.indent * 16}px` }} className={lineData.comment ? 'text-slate-500 dark:text-slate-500 italic' : ''}>
                          {lineData.code}
                        </span>
                      </code>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">current:</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">
                          [{steps[currentStep].currentPermutation.map(c => `'${c}'`).join(', ')}]
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">remaining:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          [{steps[currentStep].remainingElements.map(c => `'${c}'`).join(', ')}]
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">result.length:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].totalPermutations}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Visual Representation */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Left: Current State */}
              <div className="space-y-4">
                {/* Available Elements */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-4 text-center flex items-center justify-center gap-2">
                    <span>📦</span> Available Elements
                  </h5>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['A', 'B', 'C'].map((char) => {
                      const isUsed = steps[currentStep].currentPermutation.includes(char);
                      const isRemaining = steps[currentStep].remainingElements.includes(char);
                      return (
                        <div
                          key={char}
                          className={`w-14 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-xl border-2 transition-all duration-500 ${
                            isUsed
                              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 border-gray-400 opacity-50 line-through'
                              : isRemaining
                              ? 'bg-blue-500 text-white border-blue-400 shadow-lg scale-110 animate-pulse'
                              : 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border-blue-300'
                          }`}
                        >
                          {char}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="text-center text-xs text-blue-700 dark:text-blue-300">
                      {steps[currentStep].remainingElements.length > 0 ? (
                        <>Remaining: {steps[currentStep].remainingElements.join(', ')}</>
                      ) : (
                        <>All elements used!</>
                      )}
                    </div>
                    {/* Choices Counter */}
                    <div className="flex justify-center">
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg border-2 border-blue-400">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{steps[currentStep].remainingElements.length > 0 ? steps[currentStep].remainingElements.length : steps[currentStep].currentPermutation.length === 3 ? 0 : 3}</div>
                          <div className="text-[10px] font-semibold opacity-90">
                            {steps[currentStep].remainingElements.length > 0 ? 'Choices Available' : steps[currentStep].currentPermutation.length === 3 ? 'Complete!' : 'Total Choices'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Permutation Building */}
                <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-xl border-2 border-red-300 dark:border-red-700">
                  <h5 className="font-bold text-red-900 dark:text-red-100 mb-4 text-center flex items-center justify-center gap-2">
                    <span>🔨</span> Building Permutation
                  </h5>
                  <div className="flex justify-center gap-3 min-h-[80px] items-center">
                    {steps[currentStep].currentPermutation.length > 0 ? (
                      <>
                        {steps[currentStep].currentPermutation.map((char, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 text-white rounded-lg flex flex-col items-center justify-center font-mono font-bold text-2xl border-2 border-red-400 shadow-lg animate-in zoom-in-50 duration-300">
                              <span>{char}</span>
                              <span className="text-[10px] opacity-80">Pos {idx + 1}</span>
                            </div>
                            {idx < steps[currentStep].currentPermutation.length - 1 && (
                              <div className="text-2xl text-red-600 dark:text-red-400">→</div>
                            )}
                          </div>
                        ))}
                        {steps[currentStep].remainingElements.length > 0 && (
                          <>
                            <div className="text-2xl text-red-600 dark:text-red-400">→</div>
                            <div className="w-16 h-16 border-2 border-dashed border-red-400 rounded-lg flex items-center justify-center text-red-400 text-2xl">
                              ?
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="text-slate-500 dark:text-slate-400 italic">
                        {currentStep === steps.length - 1 ? '✅ All permutations generated!' : '▶️ Starting...'}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-lg border border-red-300">
                      <span className="text-xs font-semibold text-red-900 dark:text-red-100">
                        Length: {steps[currentStep].currentPermutation.length} / 3
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Decision Tree */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-center flex items-center justify-center gap-2">
                  <span>🌳</span> Decision Path
                </h5>
                <div className="space-y-3">
                  {/* Root */}
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg font-mono font-bold text-sm border-2 border-purple-400 shadow">
                      Start []
                    </div>
                  </div>

                  {/* Current Path */}
                  {steps[currentStep].currentPermutation.length > 0 && (
                    <div className="space-y-2">
                      {steps[currentStep].currentPermutation.map((char, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 animate-in slide-in-from-top-2 duration-300">
                          <div className="text-xl text-purple-600 dark:text-purple-400">↓</div>
                          <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-mono font-bold text-sm border-2 border-purple-400 shadow-lg">
                            Choose: {char}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Next Choice Indicator */}
                  {steps[currentStep].remainingElements.length > 0 && (
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <div className="text-xl text-purple-600 dark:text-purple-400 animate-bounce">↓</div>
                      <div className="px-4 py-2 bg-white dark:bg-slate-900 border-2 border-dashed border-purple-400 rounded-lg text-purple-700 dark:text-purple-300 font-mono font-bold text-sm">
                        Next: {steps[currentStep].currentChoice || '?'}
                      </div>
                    </div>
                  )}

                  {/* Backtrack Indicator */}
                  {steps[currentStep].description.includes('⬅️') && (
                    <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500 animate-in slide-in-from-left-4 duration-500">
                      <p className="text-xs font-bold text-yellow-900 dark:text-yellow-100 flex items-center gap-2">
                        <span>⬅️</span> Backtracking! Going back to try different choice
                      </p>
                    </div>
                  )}

                  {/* Complete Indicator */}
                  {steps[currentStep].remainingElements.length === 0 && steps[currentStep].currentPermutation.length === 3 && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500 animate-in zoom-in-50 duration-500">
                      <p className="text-xs font-bold text-green-900 dark:text-green-100 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Permutation Complete!
                      </p>
                    </div>
                  )}

                  {/* Tree Depth Indicator */}
                  <div className="mt-4 pt-4 border-t-2 border-purple-200 dark:border-purple-800">
                    <div className="flex justify-between text-xs text-purple-700 dark:text-purple-300">
                      <span>Tree Depth:</span>
                      <span className="font-bold">{steps[currentStep].currentPermutation.length} / 3</span>
                    </div>
                    <div className="w-full bg-purple-200 dark:bg-purple-900 rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(steps[currentStep].currentPermutation.length / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Generated Permutations */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h5 className="font-bold text-green-900 dark:text-green-100 mb-4 text-center flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Completed Permutations ({steps[currentStep].totalPermutations} / 6)
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {steps[currentStep].allPermutations.length > 0 ? (
                  steps[currentStep].allPermutations.map((perm, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg font-mono font-bold text-center border-2 border-green-400 shadow-lg animate-in zoom-in-50 duration-500"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="text-xs opacity-80 mb-1">#{idx + 1}</div>
                      <div className="text-lg">{perm.join(' → ')}</div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-slate-500 dark:text-slate-400 italic py-8">
                    No permutations generated yet - watch the animation!
                  </div>
                )}
              </div>
            </div>

            {/* Factorial Multiplication Visualization */}
            <div className="mb-6 p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-xl border-2 border-amber-300 dark:border-amber-700">
              <h5 className="font-bold text-amber-900 dark:text-amber-100 mb-4 text-center flex items-center justify-center gap-2">
                <span>🔢</span> Factorial Multiplication at Each Position
              </h5>
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {/* Position 1 */}
                <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                  steps[currentStep].currentPermutation.length >= 1
                    ? 'bg-gradient-to-br from-red-500 to-rose-500 border-red-400 text-white shadow-lg scale-110'
                    : 'bg-white dark:bg-slate-900 border-amber-300 text-amber-900 dark:text-amber-100'
                }`}>
                  <div className="text-center">
                    <div className="text-xs font-semibold opacity-80 mb-1">Position 1</div>
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-[10px] opacity-80 mt-1">choices</div>
                  </div>
                </div>

                <div className="text-3xl font-bold text-amber-600">×</div>

                {/* Position 2 */}
                <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                  steps[currentStep].currentPermutation.length >= 2
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 border-orange-400 text-white shadow-lg scale-110'
                    : steps[currentStep].currentPermutation.length === 1
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-400 text-blue-900 dark:text-blue-100 animate-pulse'
                    : 'bg-white dark:bg-slate-900 border-amber-300 text-amber-900 dark:text-amber-100'
                }`}>
                  <div className="text-center">
                    <div className="text-xs font-semibold opacity-80 mb-1">Position 2</div>
                    <div className="text-3xl font-bold">2</div>
                    <div className="text-[10px] opacity-80 mt-1">choices</div>
                  </div>
                </div>

                <div className="text-3xl font-bold text-amber-600">×</div>

                {/* Position 3 */}
                <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                  steps[currentStep].currentPermutation.length === 3
                    ? 'bg-gradient-to-br from-yellow-500 to-amber-500 border-yellow-400 text-white shadow-lg scale-110'
                    : steps[currentStep].currentPermutation.length === 2
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-400 text-blue-900 dark:text-blue-100 animate-pulse'
                    : 'bg-white dark:bg-slate-900 border-amber-300 text-amber-900 dark:text-amber-100'
                }`}>
                  <div className="text-center">
                    <div className="text-xs font-semibold opacity-80 mb-1">Position 3</div>
                    <div className="text-3xl font-bold">1</div>
                    <div className="text-[10px] opacity-80 mt-1">choice</div>
                  </div>
                </div>

                <div className="text-3xl font-bold text-amber-600">=</div>

                {/* Result */}
                <div className="p-4 rounded-xl border-2 bg-gradient-to-br from-green-500 to-emerald-500 border-green-400 text-white shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold opacity-80 mb-1">Total</div>
                    <div className="text-4xl font-bold">6</div>
                    <div className="text-[10px] opacity-80 mt-1">permutations</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-amber-400">
                <p className="text-center text-sm text-amber-900 dark:text-amber-100 font-semibold">
                  {steps[currentStep].currentPermutation.length === 0 ? (
                    <>📍 Position 1: Pick from 3 elements (A, B, or C)</>
                  ) : steps[currentStep].currentPermutation.length === 1 ? (
                    <>📍 Position 2: Pick from 2 remaining elements</>
                  ) : steps[currentStep].currentPermutation.length === 2 ? (
                    <>📍 Position 3: Only 1 element left - no choice!</>
                  ) : (
                    <>✅ 3 × 2 × 1 = 6 total permutations!</>
                  )}
                </p>
              </div>
            </div>

            {/* Factorial Counter */}
            <div className="p-6 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/30 dark:via-orange-950/30 dark:to-yellow-950/30 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-4 text-center flex items-center justify-center gap-2">
                <span>🔥</span> Factorial Growth Meter
              </h5>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300">
                  <div className="text-3xl font-bold text-orange-600">{steps[currentStep].totalPermutations}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Generated</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-300">
                  <div className="text-3xl font-bold text-red-600">6</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Total (3!)</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300">
                  <div className="text-3xl font-bold text-purple-600">{currentStep + 1}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Current Step</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-rose-300">
                  <div className="text-3xl font-bold text-rose-600">{Math.round((steps[currentStep].totalPermutations / 6) * 100)}%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Progress</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <p className="text-center text-sm text-red-800 dark:text-red-200">
                  {currentStep < 6 ? (
                    <>🔥 Building permutations with backtracking! Step {currentStep + 1}/12</>
                  ) : currentStep < 11 ? (
                    <>💥 More than halfway! {steps[currentStep].totalPermutations} of 6 done! (Step {currentStep + 1}/12)</>
                  ) : (
                    <>🎉 Complete! 3! = 6 permutations. Imagine 10! = 3.6 MILLION! 💀</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common O(n!) Algorithms */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-red-600" />
            Common O(n!) Algorithms
          </CardTitle>
          <CardDescription>Problems where you MUST try all arrangements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                1. Traveling Salesman Problem (Brute Force)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-red-700 dark:text-red-300">Why O(n!):</strong> Visit n cities in all possible orders to find shortest route. 
                Must check all n! permutations.
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded text-red-600 font-semibold">
                ⚠️ 20 cities = 2.4 × 10^18 routes! Physically impossible!
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-700">
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                2. Generate All Permutations
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-rose-700 dark:text-rose-300">Why O(n!):</strong> By definition, must generate n! arrangements. No way around it!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`["A","B","C"] -> 6 permutations | ["A","B","C","D"] -> 24 permutations`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-700">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                3. Solving N-Queens (Naive Approach)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-orange-700 dark:text-orange-300">Why O(n!):</strong> Place n queens on n×n board. 
                Brute force tries all permutations of row positions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why You Should NEVER Use O(n!) */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Why You Should NEVER Use O(n!)
          </CardTitle>
          <CardDescription>The harsh reality of factorial complexity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">🚫 Literally Impossible for n {'>'} 15</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Even with the fastest computers, O(n!) algorithms become impossible for tiny inputs. 
                20! operations would take longer than the age of the universe!
              </p>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">⚠️ Use Dynamic Programming Instead</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Many O(n!) problems can be optimized to O(2^n) or O(n²) with dynamic programming or memoization.
                Traveling Salesman has O(n² 2^n) DP solution!
              </p>
            </div>

            <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">💡 Use Heuristics for Large Inputs</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                When perfect solution is impossible, use approximation algorithms. 
                Good-enough solutions in polynomial time beat perfect solutions that never finish!
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
            Understanding O(n!) in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">🔥 Absolute Worst</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Even worse than O(2^n). n=12 is already pushing limits. Never acceptable in production!
              </p>
            </div>
            
            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-300 dark:border-rose-700">
              <h5 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">💀 Interview Disaster</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If you suggest O(n!) solution, immediately follow with "but I'd optimize this to..."
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎓 Academic Only</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Useful for understanding recursion and backtracking, but never ship this to production!
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Learn DP & Heuristics</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The solution to O(n!) is always optimization. Master dynamic programming and approximation algorithms!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
