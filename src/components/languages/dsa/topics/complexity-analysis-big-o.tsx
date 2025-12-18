'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Timer, TrendingUp, AlertCircle, Lightbulb, CheckCircle, Zap, BarChart3, Activity, Brain, BookOpen, Target } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function BigONotation() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Timer}
        category="DSA · Complexity Analysis"
        title="Big O Notation Fundamentals"
        description="Master the language of algorithm efficiency. Learn how to analyze and compare the performance of different algorithms."
        colorTheme="orange"
        badges={[
          { label: 'Foundation', variant: 'default' },
          { label: 'Critical Skill', variant: 'success' },
          { label: 'Interview Favorite', variant: 'info' },
        ]}
      />

      {/* What is Big O - Simplified */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-600" />
            What is Big O Notation?
          </CardTitle>
          <CardDescription>
            Think of it as a way to measure how your code slows down as data grows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Analogy */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Analogy: Reading Books
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-orange-300 dark:border-orange-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  Imagine you're looking for a specific word in different scenarios:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">1</div>
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Looking at the cover (O(1))</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Same time whether it's 1 book or 1000 books - you just look at the cover!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">2</div>
                    <div>
                      <div className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Reading every page (O(n))</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        10 pages takes 10 minutes, 100 pages takes 100 minutes - time grows with pages!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">3</div>
                    <div>
                      <div className="font-semibold text-red-700 dark:text-red-300 mb-1">Comparing every page (O(n²))</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        10 pages = 100 comparisons, 100 pages = 10,000 comparisons - gets slow fast!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formal Definition */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">The Formal Definition</h4>
            
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              <strong>Big O notation</strong> describes how the <strong>runtime</strong> or <strong>space</strong> requirements 
              of an algorithm grow as the input size (<code className="text-blue-700 dark:text-blue-300">n</code>) increases.
            </p>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span><strong>Focuses on:</strong> Worst-case scenario</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span><strong>Ignores:</strong> Constant factors (2n becomes n)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span><strong>Drops:</strong> Lower-order terms (n² + n becomes n²)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span><strong>Measures:</strong> Growth rate, not exact time</span>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700">
            <Target className="h-5 w-5 text-orange-600" />
            <AlertTitle>Why Big O Matters</AlertTitle>
            <AlertDescription>
              Big O helps you predict how your algorithm will perform with larger datasets. An algorithm that works 
              fine with 10 items might crash with 10,000 items if it has poor time complexity!
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Common Complexities with Visual Scale */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-orange-600" />
            Common Time Complexities (From Best to Worst)
          </CardTitle>
          <CardDescription>Understanding how different complexities compare</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Visual Scale */}
            <div className="bg-gradient-to-r from-green-50 via-yellow-50 via-orange-50 to-red-50 dark:from-green-950/30 dark:via-yellow-950/30 dark:via-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">Performance Scale</h4>
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-green-700 dark:text-green-300">⚡ Excellent</span>
                <span className="text-blue-700 dark:text-blue-300">👍 Good</span>
                <span className="text-yellow-700 dark:text-yellow-300">⚠️ Fair</span>
                <span className="text-orange-700 dark:text-orange-300">😰 Poor</span>
                <span className="text-red-700 dark:text-red-300">💀 Terrible</span>
              </div>
            </div>

            {/* O(1) - Constant */}
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-2xl font-bold text-green-700 dark:text-green-300">O(1)</code>
                    <Badge className="bg-green-600">Constant Time - ⚡ Excellent</Badge>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>What it means:</strong> Takes the same time regardless of input size. Like pressing a light switch!
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">Real Examples:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Accessing array element: <code>arr[5]</code></li>
                      <li>• Adding to hash map: <code>map.set(key, value)</code></li>
                      <li>• Pushing to stack: <code>stack.push(item)</code></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* O(log n) - Logarithmic */}
            <div className="p-5 rounded-xl border-2 bg-lime-50 dark:bg-lime-950/20 border-lime-300 dark:border-lime-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-2xl font-bold text-lime-700 dark:text-lime-300">O(log n)</code>
                    <Badge className="bg-lime-600">Logarithmic - 👍 Great</Badge>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>What it means:</strong> Cuts problem in half each step. Like finding a word in a dictionary!
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-lime-200 dark:border-lime-800">
                    <p className="text-xs font-semibold text-lime-700 dark:text-lime-300 mb-2">Real Examples:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Binary search in sorted array</li>
                      <li>• Finding element in balanced BST</li>
                    </ul>
                    <div className="mt-3 p-2 bg-lime-100 dark:bg-lime-900/30 rounded text-xs">
                      <strong className="text-lime-700 dark:text-lime-300">Why it's fast:</strong> For 1 million items, only needs ~20 steps!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* O(n) - Linear */}
            <div className="p-5 rounded-xl border-2 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-300 dark:border-yellow-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">O(n)</code>
                    <Badge className="bg-yellow-600">Linear Time - 👌 Good</Badge>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>What it means:</strong> Time grows directly with input size. If input doubles, time doubles.
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Real Examples:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Finding max/min in unsorted array</li>
                      <li>• Linear search</li>
                      <li>• Single loop through data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* O(n log n) - Linearithmic */}
            <div className="p-5 rounded-xl border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-300 dark:border-orange-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-2xl font-bold text-orange-700 dark:text-orange-300">O(n log n)</code>
                    <Badge className="bg-orange-600">Linearithmic - ⚠️ Acceptable</Badge>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>What it means:</strong> Common in efficient sorting. Best you can do for comparison-based sorting!
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-2">Real Examples:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Merge Sort</li>
                      <li>• Quick Sort (average case)</li>
                      <li>• Heap Sort</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* O(n²) - Quadratic */}
            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-2xl font-bold text-red-700 dark:text-red-300">O(n²)</code>
                    <Badge className="bg-red-600">Quadratic - 😰 Poor</Badge>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>What it means:</strong> Nested loops! Gets slow fast with more data.
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">Real Examples:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Bubble Sort, Insertion Sort</li>
                      <li>• Checking all pairs in array</li>
                    </ul>
                    <div className="mt-3 p-2 bg-red-100 dark:bg-red-900/30 rounded text-xs">
                      <strong className="text-red-700 dark:text-red-300">Warning:</strong> 100 items = 10,000 operations!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* O(2^n) - Exponential */}
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-2xl font-bold text-purple-700 dark:text-purple-300">O(2ⁿ)</code>
                    <Badge className="bg-purple-600">Exponential - 💀 Very Poor</Badge>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong>What it means:</strong> Doubles with each addition. Quickly becomes impossible!
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">Real Examples:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Recursive Fibonacci (naive)</li>
                      <li>• Generating all subsets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Rules for Calculating Big O */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Rules for Calculating Big O
          </CardTitle>
          <CardDescription>Master these rules to analyze any algorithm</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Rule 1 */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Drop Constants</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    O(2n) → <strong>O(n)</strong> | O(500) → <strong>O(1)</strong> | O(13n²) → <strong>O(n²)</strong>
                  </p>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Why:</strong> Big O cares about growth rate, not exact numbers. O(2n) and O(n) grow the same way.
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Drop Non-Dominant Terms</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    O(n² + n) → <strong>O(n²)</strong> | O(n + log n) → <strong>O(n)</strong>
                  </p>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Why:</strong> As n grows large, the dominant term matters most. n² dwarfs n when n is big.
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Different Inputs, Different Variables</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Two separate arrays: <strong>O(a + b)</strong> NOT O(n)
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
                    <code className="text-xs text-slate-700 dark:text-slate-300">
                      for (let i = 0; i &lt; arrA.length; i++) &#123; &#125; // O(a)<br/>
                      for (let j = 0; j &lt; arrB.length; j++) &#123; &#125; // O(b)<br/>
                      <span className="text-green-700 dark:text-green-300">// Total: O(a + b) NOT O(n)</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 4 */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Nested Loops = Multiply</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    2 nested loops: <strong>O(n²)</strong> | 3 nested loops: <strong>O(n³)</strong>
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded border border-orange-200 dark:border-orange-800">
                    <code className="text-xs text-slate-700 dark:text-slate-300">
                      for (let i = 0; i &lt; n; i++) &#123; // n times<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j &lt; n; j++) &#123; // n times<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// ...<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                      &#125;<br/>
                      <span className="text-orange-700 dark:text-orange-300">// Total: n × n = O(n²)</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 5 */}
            <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Sequential Loops = Add</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Two separate loops: <strong>O(n + m)</strong> → <strong>O(n)</strong> if same input
                  </p>
                  <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded border border-red-200 dark:border-red-800">
                    <code className="text-xs text-slate-700 dark:text-slate-300">
                      for (let i = 0; i &lt; n; i++) &#123; &#125; // O(n)<br/>
                      for (let j = 0; j &lt; n; j++) &#123; &#125; // O(n)<br/>
                      <span className="text-red-700 dark:text-red-300">// Total: O(n + n) = O(2n) = O(n)</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            Common Mistakes to Avoid
          </CardTitle>
          <CardDescription>Learn from these frequent misunderstandings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Mistake #1: Confusing Best Case with Big O</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Wrong:</strong> "Quick sort is O(n log n) because that's the average case"
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Right:</strong> "Quick sort is O(n²) worst case, but O(n log n) average case"
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                  Big O describes the <strong>worst case</strong> unless specified otherwise!
                </p>
              </AlertDescription>
            </Alert>

            <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Mistake #2: Thinking Big O is Exact Time</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Wrong:</strong> "O(n) is always faster than O(n²)"
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Right:</strong> "O(n) is faster than O(n²) for large enough n"
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                  For small inputs, O(n²) with small constants might be faster than O(n) with large constants!
                </p>
              </AlertDescription>
            </Alert>

            <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Mistake #3: Forgetting Hidden Operations</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  <code>arr.sort()</code> inside a loop isn't O(n) — it's O(n² log n)!
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                  Always consider the complexity of built-in methods you're calling!
                </p>
              </AlertDescription>
            </Alert>

            <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Mistake #4: Ignoring Space Complexity</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  An algorithm can be O(n) time but O(n²) space! Always consider both.
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                  Creating new arrays, using recursion, and hash maps all use extra space!
                </p>
              </AlertDescription>
            </Alert>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
