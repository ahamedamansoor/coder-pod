'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Trophy, BookOpen, TrendingUp, Zap, Target, Award } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ComparingSortingAlgorithms() {
  type ScenarioKey = 'small' | 'large' | 'nearly' | 'stability';
  const [selectedScenario, setSelectedScenario] = useState<ScenarioKey>('small');

  const algorithms = {
    bubble: { name: 'Bubble Sort', bestTime: 'O(n)', avgTime: 'O(n²)', worstTime: 'O(n²)', space: 'O(1)', stable: true, color: 'red' },
    selection: { name: 'Selection Sort', bestTime: 'O(n²)', avgTime: 'O(n²)', worstTime: 'O(n²)', space: 'O(1)', stable: false, color: 'orange' },
    insertion: { name: 'Insertion Sort', bestTime: 'O(n)', avgTime: 'O(n²)', worstTime: 'O(n²)', space: 'O(1)', stable: true, color: 'amber' },
    merge: { name: 'Merge Sort', bestTime: 'O(n log n)', avgTime: 'O(n log n)', worstTime: 'O(n log n)', space: 'O(n)', stable: true, color: 'blue' },
    quick: { name: 'Quick Sort', bestTime: 'O(n log n)', avgTime: 'O(n log n)', worstTime: 'O(n²)', space: 'O(log n)', stable: false, color: 'purple' },
    heap: { name: 'Heap Sort', bestTime: 'O(n log n)', avgTime: 'O(n log n)', worstTime: 'O(n log n)', space: 'O(1)', stable: false, color: 'indigo' },
  } as const;

  type AlgorithmKey = keyof typeof algorithms;

  const scenarios: Record<
    ScenarioKey,
    {
      title: string;
      winner: AlgorithmKey;
      runnerUp: AlgorithmKey;
      description: string;
      reasoning: string;
    }
  > = {
    small: {
      title: 'Small Arrays (n < 50)',
      winner: 'insertion',
      runnerUp: 'bubble',
      description: 'Simple algorithms shine! Low overhead beats complex divide-and-conquer.',
      reasoning: 'Insertion Sort has better constants and cache performance'
    },
    large: {
      title: 'Large Random Arrays (n > 1000)',
      winner: 'quick',
      runnerUp: 'merge',
      description: 'O(n log n) algorithms dominate. QuickSort\'s average case is unbeatable!',
      reasoning: 'QuickSort has best average performance and great cache locality'
    },
    nearly: {
      title: 'Nearly Sorted Arrays',
      winner: 'insertion',
      runnerUp: 'bubble',
      description: 'Adaptive algorithms recognize patterns! O(n) best case wins.',
      reasoning: 'Insertion Sort is O(n) on nearly sorted data'
    },
    stability: {
      title: 'Need Stable Sort',
      winner: 'merge',
      runnerUp: 'insertion',
      description: 'Only stable algorithms qualify. Merge Sort is the O(n log n) champion!',
      reasoning: 'Merge Sort guarantees stability with O(n log n) time'
    },
  };

  const currentScenario = scenarios[selectedScenario];
  const winner = algorithms[currentScenario.winner];
  const runnerUp = algorithms[currentScenario.runnerUp];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Trophy}
        category="DSA · Algorithm Analysis"
        title="Comparing Sorting Algorithms"
        description="Which sorting algorithm wins? It depends on the race!"
        colorTheme="yellow"
        badges={[
          { label: 'Performance', variant: 'default' },
          { label: 'Comparison', variant: 'secondary' },
          { label: '🏆 Best Choice', variant: 'outline' },
        ]}
      />

      {/* Racing Analogy */}
      <Card className="border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            The Sorting Algorithm Olympics 🏆
          </CardTitle>
          <CardDescription>
            Different algorithms excel in different "races" - there's no universal winner!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Racing Analogy */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-700">
            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Olympic Sports! 🏅
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-yellow-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Just like Olympic athletes excel in different events, <strong>sorting algorithms excel in different scenarios</strong>. 
                There's no "best" algorithm - it depends on the race!
              </p>

              <div className="space-y-4">
                {/* Sprint */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🏃</div>
                    <div>
                      <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-1">Sprint (Small Arrays)</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Winner: Insertion Sort</strong> - Simple, fast start, no warmup needed!
                      </p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        Like a sprinter - great at short distances (n {'<'} 50)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Marathon */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🏃‍♂️</div>
                    <div>
                      <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Marathon (Large Arrays)</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Winner: Quick Sort</strong> - Efficient strategy, great endurance!
                      </p>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Like a marathon runner - dominates long distances (n {'>'} 1000)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Obstacle Course */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🤸</div>
                    <div>
                      <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Obstacle Course (Nearly Sorted)</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Winner: Insertion Sort</strong> - Adapts quickly, skips unnecessary work!
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Like a parkour athlete - finds shortcuts when possible
                      </p>
                    </div>
                  </div>
                </div>

                {/* Synchronized Swimming */}
                <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🏊</div>
                    <div>
                      <h5 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">Synchronized (Stable Sort Needed)</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Winner: Merge Sort</strong> - Maintains order perfectly, every time!
                      </p>
                      <p className="text-xs text-cyan-700 dark:text-cyan-300">
                        Like synchronized swimmers - perfect coordination guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-sm font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                💡 The Key Lesson
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Choose the right algorithm for your specific scenario!</strong> Don't use a marathon runner for a sprint, 
                and don't use a sprinter for a marathon. Match the algorithm to your data characteristics!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comprehensive Comparison Table */}
      <Card className="border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-yellow-600" />
            Complete Sorting Algorithm Comparison
          </CardTitle>
          <CardDescription>All the major sorting algorithms at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-yellow-300 dark:border-yellow-700">
                  <th className="p-3 text-left font-bold">Algorithm</th>
                  <th className="p-3 text-center font-bold">Best</th>
                  <th className="p-3 text-center font-bold">Average</th>
                  <th className="p-3 text-center font-bold">Worst</th>
                  <th className="p-3 text-center font-bold">Space</th>
                  <th className="p-3 text-center font-bold">Stable?</th>
                  <th className="p-3 text-center font-bold">When to Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-200 dark:divide-yellow-800">
                {/* Bubble Sort */}
                <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-950/20">
                  <td className="p-3 font-semibold text-red-700 dark:text-red-400">Bubble Sort</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center">✅</td>
                  <td className="p-3 text-xs text-slate-600 dark:text-slate-400">Teaching only</td>
                </tr>

                {/* Selection Sort */}
                <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-950/20">
                  <td className="p-3 font-semibold text-orange-700 dark:text-orange-400">Selection Sort</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center">❌</td>
                  <td className="p-3 text-xs text-slate-600 dark:text-slate-400">Memory limited</td>
                </tr>

                {/* Insertion Sort */}
                <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-950/20 bg-amber-50 dark:bg-amber-950/10">
                  <td className="p-3 font-semibold text-amber-700 dark:text-amber-400">Insertion Sort</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center">✅</td>
                  <td className="p-3 text-xs text-slate-600 dark:text-slate-400"><strong>Small/nearly sorted</strong></td>
                </tr>

                {/* Merge Sort */}
                <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-950/20 bg-blue-50 dark:bg-blue-950/10">
                  <td className="p-3 font-semibold text-blue-700 dark:text-blue-400">Merge Sort</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center">✅</td>
                  <td className="p-3 text-xs text-slate-600 dark:text-slate-400"><strong>Stability needed</strong></td>
                </tr>

                {/* Quick Sort */}
                <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-950/20 bg-purple-50 dark:bg-purple-950/10">
                  <td className="p-3 font-semibold text-purple-700 dark:text-purple-400">Quick Sort</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-center">❌</td>
                  <td className="p-3 text-xs text-slate-600 dark:text-slate-400"><strong>General purpose!</strong></td>
                </tr>

                {/* Heap Sort */}
                <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-950/20">
                  <td className="p-3 font-semibold text-indigo-700 dark:text-indigo-400">Heap Sort</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center">❌</td>
                  <td className="p-3 text-xs text-slate-600 dark:text-slate-400">Guaranteed O(n log n)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">🏆 Champions</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <strong>Quick Sort:</strong> General purpose winner
                <br />
                <strong>Merge Sort:</strong> Stable sort winner
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚡ Speed Demons</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <strong>Insertion Sort:</strong> Best for n {'<'} 50
                <br />
                <strong>Quick Sort:</strong> Fastest average case
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💾 Memory Efficient</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <strong>Heap Sort:</strong> O(1) space, guaranteed
                <br />
                <strong>Selection:</strong> Fewest writes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Scenario Picker */}
      <Card className="border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-yellow-600" />
            Pick Your Scenario: Who Wins?
          </CardTitle>
          <CardDescription>See which algorithm is best for different situations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Scenario Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedScenario('small')}
                variant={selectedScenario === 'small' ? 'default' : 'outline'}
                className={selectedScenario === 'small' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-300'}
              >
                Small Arrays
              </Button>
              <Button
                onClick={() => setSelectedScenario('large')}
                variant={selectedScenario === 'large' ? 'default' : 'outline'}
                className={selectedScenario === 'large' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-300'}
              >
                Large Arrays
              </Button>
              <Button
                onClick={() => setSelectedScenario('nearly')}
                variant={selectedScenario === 'nearly' ? 'default' : 'outline'}
                className={selectedScenario === 'nearly' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                Nearly Sorted
              </Button>
              <Button
                onClick={() => setSelectedScenario('stability')}
                variant={selectedScenario === 'stability' ? 'default' : 'outline'}
                className={selectedScenario === 'stability' ? 'bg-cyan-600 hover:bg-cyan-700' : 'border-cyan-300'}
              >
                Need Stability
              </Button>
            </div>

            {/* Scenario Display */}
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-xl border-2 border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-2 text-center">
                {currentScenario.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">
                {currentScenario.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Winner */}
                <div className="p-5 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 rounded-xl border-2 border-yellow-400 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-100">🥇 Winner</h4>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                      {winner.name}
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Best:</span>
                      <span className="font-mono font-bold">{winner.bestTime}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Average:</span>
                      <span className="font-mono font-bold">{winner.avgTime}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Space:</span>
                      <span className="font-mono font-bold">{winner.space}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Stable:</span>
                      <span>{winner.stable ? '✅ Yes' : '❌ No'}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      <strong>Why:</strong> {currentScenario.reasoning}
                    </p>
                  </div>
                </div>

                {/* Runner Up */}
                <div className="p-5 bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/40 dark:to-gray-900/40 rounded-xl border-2 border-slate-300 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-7 h-7 text-slate-500" />
                    <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300">🥈 Runner Up</h4>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                      {runnerUp.name}
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Best:</span>
                      <span className="font-mono font-bold">{runnerUp.bestTime}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Average:</span>
                      <span className="font-mono font-bold">{runnerUp.avgTime}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Space:</span>
                      <span className="font-mono font-bold">{runnerUp.space}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                      <span>Stable:</span>
                      <span>{runnerUp.stable ? '✅ Yes' : '❌ No'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decision Guide */}
      <Card className="border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-yellow-600" />
            Quick Decision Guide
          </CardTitle>
          <CardDescription>Choose the right algorithm in 10 seconds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">General Purpose? → Quick Sort</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Fastest average case, good cache locality, widely used in libraries (like JavaScript's Array.sort)
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Need Stability? → Merge Sort</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Maintains relative order of equal elements. Used in Python's sort (Timsort is hybrid Merge+Insertion)
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Small Array (n {'<'} 50)? → Insertion Sort</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Simple, fast for small inputs, adaptive for nearly sorted data. Many libraries switch to this for small subarrays!
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Need Guaranteed O(n log n) + O(1) space? → Heap Sort</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No worst case O(n²) like Quick Sort, no O(n) space like Merge Sort. Perfect for constrained environments!
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/20 border-amber-300">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Nearly Sorted Data? → Insertion Sort</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                O(n) best case! Recognizes when data is almost sorted and skips unnecessary comparisons.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm font-bold text-yellow-900 dark:text-yellow-100 mb-2">
              🎯 Pro Tip: Hybrid Approaches
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              Real-world sorting often uses <strong>hybrid algorithms</strong>! 
              Example: <strong>Timsort</strong> (Python) = Merge Sort + Insertion Sort for small chunks.
              <strong> Introsort</strong> (C++) = Quick Sort + Heap Sort fallback for bad pivots.
              Use the best tool for each part of the job!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
