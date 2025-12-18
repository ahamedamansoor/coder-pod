'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Calculator, BookOpen, TrendingUp, Layers, AlertCircle } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function AnalyzingNestedLoops() {
  const [selectedPattern, setSelectedPattern] = useState<'nn' | 'ni' | 'nlogn' | 'nnn'>('nn');

  const patterns = {
    nn: {
      name: 'Classic O(n²)',
      code: `for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Do something
  }
}`,
      complexity: 'O(n²)',
      iterations: 'n × n = n²',
      explanation: 'Outer loop runs n times. For EACH outer iteration, inner loop runs n times.',
      visual: 'n rows × n columns = n² cells',
      example: 'Bubble Sort, Matrix operations'
    },
    ni: {
      name: 'Triangle O(n²)',
      code: `for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    // Do something
  }
}`,
      complexity: 'O(n²)',
      iterations: '0 + 1 + 2 + ... + n = n(n+1)/2 ≈ n²',
      explanation: 'Inner loop runs 0, then 1, then 2... times. Sum of first n numbers = n²/2.',
      visual: 'Triangle: 1 + 2 + 3 + ... + n',
      example: 'Selection Sort, Counting pairs'
    },
    nlogn: {
      name: 'Binary Jump O(n log n)',
      code: `for (let i = 0; i < n; i++) {
  for (let j = 1; j < n; j *= 2) {
    // Do something
  }
}`,
      complexity: 'O(n log n)',
      iterations: 'n × log n',
      explanation: 'Outer loop runs n times. Inner loop doubles each time = log n iterations.',
      visual: 'n rows × log n columns',
      example: 'Some divide-and-conquer preprocessing'
    },
    nnn: {
      name: 'Triple Loop O(n³)',
      code: `for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      // Do something
    }
  }
}`,
      complexity: 'O(n³)',
      iterations: 'n × n × n = n³',
      explanation: 'Three nested loops, each running n times. Multiply them all!',
      visual: '3D cube: n × n × n',
      example: '3-sum problem, Matrix multiplication'
    },
  };

  const currentPattern = patterns[selectedPattern];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="DSA · Algorithm Analysis"
        title="Analyzing Nested Loops"
        description="Master the art of calculating time complexity for nested loops"
        colorTheme="indigo"
        badges={[
          { label: 'Pattern Recognition', variant: 'default' },
          { label: 'Complexity Math', variant: 'secondary' },
          { label: '🔢 Calculation', variant: 'outline' },
        ]}
      />

      {/* Apartment Building Analogy */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-600" />
            Understanding Nested Loops
          </CardTitle>
          <CardDescription>
            The key principle: nested loops multiply, not add!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Apartment Analogy */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Delivering Mail to an Apartment Building! 🏢
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-indigo-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You need to deliver mail to every apartment. The building has <strong>n floors</strong>, 
                and each floor has <strong>n apartments</strong>. How many deliveries?
              </p>

              <div className="space-y-4">
                {/* Single Loop */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🚶</div>
                    <div>
                      <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Single Loop: One Hallway</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Walk down one hallway with n apartments. Visit each apartment once.
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded">
                        for (i = 0; i {'<'} n; i++) → n apartments = <strong>O(n)</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nested Loop */}
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🏢</div>
                    <div>
                      <h5 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">Nested Loop: Entire Building</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Visit all n floors. On EACH floor, visit n apartments. <strong>Multiply!</strong>
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded mb-2">
                        for (floor = 0; floor {'<'} n; floor++)<br />
                        {'  '}for (apt = 0; apt {'<'} n; apt++)
                      </div>
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded">
                        <strong>n floors × n apartments = n² total visits!</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Grid */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 text-center">Visual: 5 Floors × 5 Apartments = 25 Visits</h5>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((floor) => (
                      <div key={floor} className="flex gap-2 items-center">
                        <span className="text-xs font-bold text-purple-700 dark:text-purple-300 w-16">Floor {floor}:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((apt) => (
                            <div
                              key={apt}
                              className="w-8 h-8 bg-indigo-500 text-white rounded flex items-center justify-center text-xs font-bold border border-indigo-400"
                            >
                              {apt}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-purple-700 dark:text-purple-300 mt-3 font-semibold">
                    Count all boxes = 25 = 5² = n²
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg border-l-4 border-indigo-500">
              <p className="text-sm font-bold text-indigo-900 dark:text-indigo-100 mb-2">
                🔑 The Golden Rule
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Nested loops MULTIPLY, not add!</strong> If outer loop runs n times and inner loop runs m times, 
                total iterations = <strong>n × m</strong>. For nested loop running n times each: n × n = <strong>n²</strong>
              </p>
            </div>
          </div>

          {/* The Multiplication Principle */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">🧮 Why Multiply, Not Add?</h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">❌ Wrong: Adding</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  "Outer loop runs n times + inner loop runs n times = 2n = O(n)" <strong>NO!</strong>
                </p>
                <p className="text-xs text-red-700 dark:text-red-300">
                  This is wrong because the inner loop runs n times <strong>FOR EACH</strong> outer iteration!
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Correct: Multiplying</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  "Outer loop runs n times. <strong>For each</strong> iteration, inner runs n times = n × n = n²"
                </p>
                <div className="text-xs bg-green-50 dark:bg-green-900/30 p-2 rounded mt-2">
                  When i=0: inner runs n times<br />
                  When i=1: inner runs n times<br />
                  When i=2: inner runs n times<br />
                  ...<br />
                  Total = n + n + n + ... (n times) = <strong>n × n = n²</strong>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-600" />
            Common Nested Loop Patterns
          </CardTitle>
          <CardDescription>Learn to recognize these patterns instantly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Pattern Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedPattern('nn')}
                variant={selectedPattern === 'nn' ? 'default' : 'outline'}
                className={selectedPattern === 'nn' ? 'bg-indigo-600 hover:bg-indigo-700' : 'border-indigo-300'}
              >
                O(n²) Square
              </Button>
              <Button
                onClick={() => setSelectedPattern('ni')}
                variant={selectedPattern === 'ni' ? 'default' : 'outline'}
                className={selectedPattern === 'ni' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-300'}
              >
                O(n²) Triangle
              </Button>
              <Button
                onClick={() => setSelectedPattern('nlogn')}
                variant={selectedPattern === 'nlogn' ? 'default' : 'outline'}
                className={selectedPattern === 'nlogn' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                O(n log n)
              </Button>
              <Button
                onClick={() => setSelectedPattern('nnn')}
                variant={selectedPattern === 'nnn' ? 'default' : 'outline'}
                className={selectedPattern === 'nnn' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-300'}
              >
                O(n³) Cube
              </Button>
            </div>

            {/* Pattern Display */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border-2 border-indigo-300">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2 text-center">
                {currentPattern.name}
              </h3>
              <div className="text-center mb-6">
                <span className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-2xl font-mono font-bold">
                  {currentPattern.complexity}
                </span>
              </div>

              <div className="space-y-4">
                {/* Code */}
                <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b">
                    <span className="text-xs text-slate-600 dark:text-slate-400">code.js</span>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-x-auto">
                    <code>{currentPattern.code}</code>
                  </pre>
                </div>

                {/* Analysis */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300">
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📊 Total Iterations</h5>
                    <p className="text-lg font-mono font-bold text-purple-700 dark:text-purple-300">
                      {currentPattern.iterations}
                    </p>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300">
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎨 Visual Pattern</h5>
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      {currentPattern.visual}
                    </p>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    <strong>Why this complexity:</strong>
                  </p>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    {currentPattern.explanation}
                  </p>
                </div>

                {/* Example Use */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded border">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Real-world example:</strong> {currentPattern.example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Calculation */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-600" />
            Step-by-Step: Calculate Any Nested Loop
          </CardTitle>
          <CardDescription>Follow these steps to analyze any nested loop</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Identify Each Loop's Range</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Look at loop conditions. How many times does each loop run?
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-3 rounded font-mono">
                for (i = 0; i {'<'} n; i++) → runs <strong>n times</strong><br />
                for (j = 0; j {'<'} m; j++) → runs <strong>m times</strong>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Check for Dependencies</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Does inner loop depend on outer loop variable?
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-white dark:bg-slate-900 p-2 rounded">
                  <strong>Independent:</strong> <code>j {'<'} n</code> → inner always runs n times
                </div>
                <div className="bg-white dark:bg-slate-900 p-2 rounded">
                  <strong>Dependent:</strong> <code>j {'<'} i</code> → inner runs 0, 1, 2, ... i times
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Multiply (or Sum)</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                If independent: multiply. If dependent: sum the series.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-white dark:bg-slate-900 p-2 rounded">
                  <strong>Independent:</strong> n × m iterations
                </div>
                <div className="bg-white dark:bg-slate-900 p-2 rounded">
                  <strong>Dependent:</strong> 0 + 1 + 2 + ... + n = n(n+1)/2 ≈ n²
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">Drop Constants & Lower Terms</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Simplify to Big O notation
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-3 rounded">
                n²/2 + n → drop /2 and +n → <strong>O(n²)</strong><br />
                3n³ + 2n² + n → drop constants and lower terms → <strong>O(n³)</strong>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Common Mistakes to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <span>❌</span> Mistake 1: Adding Instead of Multiplying
              </h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded">
                  <strong className="text-red-700">Wrong:</strong> "Two loops = O(n) + O(n) = O(2n) = O(n)"
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong className="text-green-700">Right:</strong> "Nested loops = O(n) × O(n) = O(n²)"
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-300">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                <span>❌</span> Mistake 2: Forgetting Dependent Loops
              </h4>
              <div className="text-sm">
                <p className="mb-2">For <code>j {'<'} i</code>, the inner loop doesn't always run n times!</p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded font-mono text-xs">
                  i=0: j runs 0 times<br />
                  i=1: j runs 1 time<br />
                  i=2: j runs 2 times<br />
                  Total = 0+1+2+...+n = n²/2 = <strong>still O(n²)</strong>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/20 border-amber-300">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                <span>❌</span> Mistake 3: Ignoring Early Breaks
              </h4>
              <div className="text-sm">
                <p className="mb-2">If loop has <code>break</code> that exits early, complexity changes!</p>
                <pre className="p-3 bg-white dark:bg-slate-900 rounded font-mono text-xs overflow-x-auto">
{`for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    if (arr[i] == arr[j]) break; // May exit early!
  }
}`}
                </pre>
                <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
                  Best case: O(n), Worst case: O(n²). Be specific about which case you're analyzing!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Problems */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Quick Practice: What's the Complexity?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Problem 1 */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-l-4 border-indigo-500">
              <div className="mb-2">
                <span className="px-2 py-1 bg-indigo-500 text-white rounded text-xs font-bold">Problem 1</span>
              </div>
              <pre className="text-xs font-mono mb-3 bg-white dark:bg-slate-900 p-3 rounded">
{`for (i = 0; i < n; i++) {
  for (j = i; j < n; j++) {
    print(i, j);
  }
}`}
              </pre>
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900">
                  Click to see answer
                </summary>
                <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded">
                  <strong>Answer: O(n²)</strong><br />
                  When i=0: j runs n times<br />
                  When i=1: j runs n-1 times<br />
                  When i=2: j runs n-2 times<br />
                  Total = n + (n-1) + (n-2) + ... + 1 = n(n+1)/2 ≈ <strong>O(n²)</strong>
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
              <div className="mb-2">
                <span className="px-2 py-1 bg-purple-500 text-white rounded text-xs font-bold">Problem 2</span>
              </div>
              <pre className="text-xs font-mono mb-3 bg-white dark:bg-slate-900 p-3 rounded">
{`for (i = 1; i < n; i *= 2) {
  for (j = 0; j < n; j++) {
    print(i, j);
  }
}`}
              </pre>
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-purple-700 dark:text-purple-300 hover:text-purple-900">
                  Click to see answer
                </summary>
                <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded">
                  <strong>Answer: O(n log n)</strong><br />
                  Outer loop: i doubles each time (1, 2, 4, 8...) = log n iterations<br />
                  Inner loop: always runs n times<br />
                  Total = log n × n = <strong>O(n log n)</strong>
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
              <div className="mb-2">
                <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold">Problem 3</span>
              </div>
              <pre className="text-xs font-mono mb-3 bg-white dark:bg-slate-900 p-3 rounded">
{`for (i = 0; i < n; i++) {
  for (j = 0; j < i * i; j++) {
    print(i, j);
  }
}`}
              </pre>
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-900">
                  Click to see answer
                </summary>
                <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded">
                  <strong>Answer: O(n³)</strong><br />
                  When i=0: j runs 0 times<br />
                  When i=1: j runs 1 time<br />
                  When i=2: j runs 4 times<br />
                  When i=3: j runs 9 times<br />
                  Total = 0² + 1² + 2² + ... + n² = n(n+1)(2n+1)/6 ≈ <strong>O(n³)</strong>
                </div>
              </details>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            Quick Reference Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 text-center">🎯 Nested Loop Complexity Cheat Sheet</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <code className="text-xs">for (i=0; i{'<'}n) for (j=0; j{'<'}n)</code>
                <div className="mt-1 font-bold text-indigo-600">→ O(n²)</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <code className="text-xs">for (i=0; i{'<'}n) for (j=0; j{'<'}i)</code>
                <div className="mt-1 font-bold text-purple-600">→ O(n²)</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <code className="text-xs">for (i=0; i{'<'}n) for (j=1; j{'<'}n; j*=2)</code>
                <div className="mt-1 font-bold text-blue-600">→ O(n log n)</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <code className="text-xs">3 nested loops to n</code>
                <div className="mt-1 font-bold text-pink-600">→ O(n³)</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded text-center">
              <p className="text-xs font-bold text-indigo-800 dark:text-indigo-200">
                Remember: Count loops × check dependencies × multiply (or sum) × simplify!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
