'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, Award, TrendingDown, Minus } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function BestAverageWorstCase() {
  const [selectedCase, setSelectedCase] = useState<'best' | 'average' | 'worst'>('average');

  const caseData = {
    best: {
      title: 'Best Case',
      icon: Award,
      color: 'emerald',
      complexity: 'O(n log n)',
      array: [5, 3, 7, 2, 8, 1, 9, 4, 6],
      pivotIndex: 4,
      description: 'Pivot always divides array into equal halves',
      partitions: ['Balanced tree depth: log n', 'Each level: O(n) work', 'Total: O(n log n)'],
    },
    average: {
      title: 'Average Case',
      icon: Minus,
      color: 'blue',
      complexity: 'O(n log n)',
      array: [7, 2, 9, 1, 5, 3, 8, 6, 4],
      pivotIndex: 4,
      description: 'Pivot creates reasonably balanced partitions',
      partitions: ['Usually balanced splits', 'Expected depth: log n', 'Total: O(n log n)'],
    },
    worst: {
      title: 'Worst Case',
      icon: TrendingDown,
      color: 'red',
      complexity: 'O(n²)',
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      pivotIndex: 0,
      description: 'Pivot is always the smallest/largest element',
      partitions: ['Unbalanced: one side empty', 'Tree depth: n', 'Total: O(n²)'],
    },
  };

  const currentCase = caseData[selectedCase];
  const Icon = currentCase.icon;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={TrendingUp}
        category="DSA · Time Complexity"
        title="Best, Average, and Worst Case Analysis"
        description="Understanding the different scenarios of algorithm performance"
        colorTheme="blue"
        badges={[
          { label: 'Three Perspectives', variant: 'default' },
          { label: 'Scenario Analysis', variant: 'secondary' },
          { label: '📊 Real Performance', variant: 'outline' },
        ]}
      />

      {/* What are Best/Average/Worst Cases? */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            What are Best, Average, and Worst Cases?
          </CardTitle>
          <CardDescription>
            Three different perspectives on analyzing algorithm performance based on input
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
                Algorithms can perform differently depending on the <strong>input characteristics</strong>. 
                We analyze <strong>three scenarios</strong> to understand the full picture!
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-2 border-emerald-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <h5 className="font-bold text-emerald-900 dark:text-emerald-100">Best Case</h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Most favorable input.</strong> The algorithm performs optimally. 
                    Often unrealistic but shows potential!
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Minus className="w-5 h-5 text-blue-600" />
                    <h5 className="font-bold text-blue-900 dark:text-blue-100">Average Case</h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Typical input.</strong> Expected performance over all possible inputs. 
                    Most realistic for analysis!
                  </p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-300">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                    <h5 className="font-bold text-red-900 dark:text-red-100">Worst Case</h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Least favorable input.</strong> Guarantees performance won't be worse. 
                    Important for critical systems!
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-300 dark:border-blue-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 🚗 Commute to Work
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Best:</strong> No traffic, all green lights → 15 minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Minus className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Average:</strong> Normal traffic → 30 minutes (typical)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Worst:</strong> Rush hour + accident → 60 minutes</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">
                  💡 Which One Matters?
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>Average case</strong> is usually most important (realistic performance).
                  <strong> Worst case</strong> matters for critical systems (guarantees).
                  <strong> Best case</strong> is often ignored (too optimistic).
                </p>
              </div>
            </div>
          </div>

          {/* When Each Matters */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">🎯 When Each Analysis Matters</h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-emerald-300">
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">✅ Best Case: Rarely Used Alone</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Useful for optimistic estimates or when you control input (like sorted data). 
                  But don't rely on it - real inputs aren't always ideal!
                </p>
                <div className="text-xs font-mono bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded">
                  Example: Insertion Sort on already sorted array = O(n)
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⭐ Average Case: Most Realistic</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Most important for typical use! Shows expected performance over random inputs. 
                  Use this to compare algorithms in practice.
                </p>
                <div className="text-xs font-mono bg-blue-50 dark:bg-blue-900/30 p-2 rounded">
                  Example: QuickSort typically O(n log n) on random data
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-red-300">
                <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">🔒 Worst Case: Safety Guarantee</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Critical for safety-critical systems, real-time systems, and adversarial inputs. 
                  Guarantees performance won't be worse!
                </p>
                <div className="text-xs font-mono bg-red-50 dark:bg-red-900/30 p-2 rounded">
                  Example: Merge Sort always O(n log n), even in worst case
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Comparison: QuickSort */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Case Study: QuickSort
          </CardTitle>
          <CardDescription>See how the same algorithm behaves differently in each case</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Case Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedCase('best')}
                variant={selectedCase === 'best' ? 'default' : 'outline'}
                className={selectedCase === 'best' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-300'}
              >
                <Award className="w-4 h-4 mr-2" />
                Best Case
              </Button>
              <Button
                onClick={() => setSelectedCase('average')}
                variant={selectedCase === 'average' ? 'default' : 'outline'}
                className={selectedCase === 'average' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                <Minus className="w-4 h-4 mr-2" />
                Average Case
              </Button>
              <Button
                onClick={() => setSelectedCase('worst')}
                variant={selectedCase === 'worst' ? 'default' : 'outline'}
                className={selectedCase === 'worst' ? 'bg-red-600 hover:bg-red-700' : 'border-red-300'}
              >
                <TrendingDown className="w-4 h-4 mr-2" />
                Worst Case
              </Button>
            </div>

            {/* Selected Case Display */}
            <div className={`p-6 rounded-xl border-2 bg-gradient-to-br ${
              selectedCase === 'best' 
                ? 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-300 dark:border-emerald-700'
                : selectedCase === 'average'
                ? 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'
                : 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-300 dark:border-red-700'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full ${
                  selectedCase === 'best' 
                    ? 'bg-emerald-500'
                    : selectedCase === 'average'
                    ? 'bg-blue-500'
                    : 'bg-red-500'
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${
                    selectedCase === 'best' 
                      ? 'text-emerald-900 dark:text-emerald-100'
                      : selectedCase === 'average'
                      ? 'text-blue-900 dark:text-blue-100'
                      : 'text-red-900 dark:text-red-100'
                  }`}>
                    {currentCase.title}
                  </h3>
                  <p className={`text-2xl font-bold ${
                    selectedCase === 'best' 
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : selectedCase === 'average'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {currentCase.complexity}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
                {currentCase.description}
              </p>

              {/* Array Visualization */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Input Array:</h4>
                <div className="flex justify-center gap-2 flex-wrap">
                  {currentCase.array.map((num, idx) => (
                    <div
                      key={idx}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold border-2 ${
                        idx === currentCase.pivotIndex
                          ? selectedCase === 'best'
                            ? 'bg-emerald-500 text-white border-emerald-400 ring-4 ring-emerald-300'
                            : selectedCase === 'average'
                            ? 'bg-blue-500 text-white border-blue-400 ring-4 ring-blue-300'
                            : 'bg-red-500 text-white border-red-400 ring-4 ring-red-300'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 border-slate-300'
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">
                  Highlighted: Pivot element
                </p>
              </div>

              {/* Partition Explanation */}
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Why {currentCase.complexity}?</h4>
                {currentCase.partitions.map((partition, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      selectedCase === 'best' 
                        ? 'text-emerald-600'
                        : selectedCase === 'average'
                        ? 'text-blue-600'
                        : 'text-red-600'
                    }`} />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{partition}</span>
                  </div>
                ))}
              </div>

              {/* Visual Tree Depth */}
              <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-center">Recursion Tree Depth</h5>
                <div className="flex justify-center items-end gap-4">
                  {selectedCase === 'best' && (
                    <>
                      <div className="w-16 h-20 bg-emerald-500 rounded-t flex items-center justify-center text-white font-bold">log n</div>
                      <div className="text-center text-xs text-slate-600 dark:text-slate-400">Balanced splits</div>
                    </>
                  )}
                  {selectedCase === 'average' && (
                    <>
                      <div className="w-16 h-24 bg-blue-500 rounded-t flex items-center justify-center text-white font-bold">~log n</div>
                      <div className="text-center text-xs text-slate-600 dark:text-slate-400">Mostly balanced</div>
                    </>
                  )}
                  {selectedCase === 'worst' && (
                    <>
                      <div className="w-16 h-40 bg-red-500 rounded-t flex items-center justify-center text-white font-bold">n</div>
                      <div className="text-center text-xs text-slate-600 dark:text-slate-400">Unbalanced chain</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Algorithm Cases */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Common Algorithms: Best vs Average vs Worst
          </CardTitle>
          <CardDescription>How popular algorithms perform in each scenario</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-blue-300 dark:border-blue-700">
                  <th className="p-3 text-left font-bold">Algorithm</th>
                  <th className="p-3 text-center font-bold">
                    <div className="flex items-center justify-center gap-1">
                      <Award className="w-4 h-4 text-emerald-600" />
                      Best
                    </div>
                  </th>
                  <th className="p-3 text-center font-bold">
                    <div className="flex items-center justify-center gap-1">
                      <Minus className="w-4 h-4 text-blue-600" />
                      Average
                    </div>
                  </th>
                  <th className="p-3 text-center font-bold">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingDown className="w-4 h-4 text-red-600" />
                      Worst
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-200 dark:divide-blue-800">
                <tr>
                  <td className="p-3 font-semibold">Binary Search</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(log n)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">QuickSort</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Merge Sort</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(n log n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n log n)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Insertion Sort</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Bubble Sort</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(n²)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n²)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Linear Search</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Hash Table Insert</td>
                  <td className="p-3 text-center font-mono text-emerald-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-red-600">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Best Case Insights
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Often happens when element is found immediately (search) or data is already sorted (sorting).
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <Minus className="w-4 h-4" />
                Average Case Reality
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                This is what you'll see in practice! Random inputs, typical scenarios. Use for comparisons.
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                Worst Case Guarantee
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Can be triggered by adversarial input or unlucky randomness. Important for critical systems!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Practical Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 For Most Software</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Focus on <strong>average case</strong>! It's the most realistic. QuickSort's average O(n log n) beats Merge Sort's guaranteed O(n log n) in practice due to better constants.
              </p>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">🔒 For Critical Systems</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Use <strong>worst case</strong>! Medical devices, real-time systems need guarantees. Choose algorithms with good worst-case (like Merge Sort).
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">💡 Don't Ignore Best Case</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If you can guarantee favorable input (sorted data), best case becomes relevant. Insertion Sort's O(n) beats O(n log n) sorts!
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Interview Tip</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Always mention all three! "QuickSort is O(n log n) average, but O(n²) worst case. Randomized pivot helps avoid worst case."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
