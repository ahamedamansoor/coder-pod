'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Calculator, BookOpen, TrendingUp, GitBranch, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MasterTheorem() {
  const [selectedExample, setSelectedExample] = useState<'merge' | 'binary' | 'strassen'>('merge');

  const examples = {
    merge: {
      name: 'Merge Sort',
      recurrence: 'T(n) = 2T(n/2) + O(n)',
      a: 2,
      b: 2,
      f: 'n',
      logValue: 'log₂(2) = 1',
      comparison: 'n¹ = n',
      caseNumber: 2,
      solution: 'Θ(n log n)',
      explanation: 'f(n) = Θ(n^log_b(a)) → Case 2 applies',
    },
    binary: {
      name: 'Binary Search',
      recurrence: 'T(n) = T(n/2) + O(1)',
      a: 1,
      b: 2,
      f: '1',
      logValue: 'log₂(1) = 0',
      comparison: 'n⁰ = 1',
      caseNumber: 2,
      solution: 'Θ(log n)',
      explanation: 'f(n) = Θ(n^log_b(a)) → Case 2 applies',
    },
    strassen: {
      name: "Strassen's Matrix Multiplication",
      recurrence: 'T(n) = 7T(n/2) + O(n²)',
      a: 7,
      b: 2,
      f: 'n²',
      logValue: 'log₂(7) ≈ 2.81',
      comparison: 'n^2.81 > n²',
      caseNumber: 1,
      solution: 'Θ(n^log₂(7)) ≈ Θ(n^2.81)',
      explanation: 'f(n) = O(n^(log_b(a) - ε)) → Case 1 applies',
    },
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Calculator}
        category="DSA · Time Complexity"
        title="Recurrence Relations (Master Theorem)"
        description="Mathematical tool for solving divide-and-conquer complexities"
        colorTheme="indigo"
        badges={[
          { label: 'Master Theorem', variant: 'default' },
          { label: 'Divide & Conquer', variant: 'secondary' },
          { label: '🧮 Mathematical', variant: 'outline' },
        ]}
      />

      {/* Beginner Notice */}
      <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500 rounded-full flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                📚 Advanced Topic - Beginners Can Skip!
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>New to algorithms?</strong> This topic is more <strong>mathematical and theoretical</strong> than others. 
                You can absolutely <strong>skip the Master Theorem</strong> for now and focus on understanding the actual complexity values 
                (O(n log n), O(log n), etc.) first!
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full text-xs font-semibold text-green-900 dark:text-green-100">
                  ✅ Learn the basics first
                </div>
                <div className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-xs font-semibold text-blue-900 dark:text-blue-100">
                  ⏰ Come back later
                </div>
                <div className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full text-xs font-semibold text-purple-900 dark:text-purple-100">
                  💼 Useful for interviews
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic mt-3">
                💡 <strong>When to come back:</strong> After you're comfortable with divide-and-conquer algorithms 
                (Merge Sort, Binary Search) and want to understand the math behind their complexity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What are Recurrence Relations? */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-600" />
            What are Recurrence Relations?
          </CardTitle>
          <CardDescription>
            Mathematical equations that define algorithm complexity recursively
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A <strong>recurrence relation</strong> expresses the time complexity of a problem in terms of <strong>smaller subproblems</strong>. 
                Perfect for <strong>divide-and-conquer</strong> algorithms!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  General Form: T(n) = aT(n/b) + f(n)
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-indigo-600">a</span>
                    <span>= Number of subproblems (how many recursive calls)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-indigo-600">b</span>
                    <span>= Factor by which problem size is divided</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-indigo-600">f(n)</span>
                    <span>= Cost of work done outside recursive calls (divide + combine)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-300 dark:border-indigo-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Example: 📦 Sorting Packages
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Merge Sort:</strong> Split n packages into 2 halves, sort each, then merge</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Recurrence:</strong> T(n) = 2T(n/2) + n (2 subproblems, size n/2, O(n) to merge)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Solution:</strong> T(n) = O(n log n)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg border-l-4 border-indigo-500">
                <p className="text-sm font-bold text-indigo-900 dark:text-indigo-100 mb-2">
                  💡 Why Use Master Theorem?
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Instead of manually solving recurrences (tedious!), the Master Theorem gives us a <strong>formula</strong> to instantly 
                  determine the time complexity. Works for most divide-and-conquer algorithms!
                </p>
              </div>
            </div>
          </div>

          {/* Master Theorem Formula */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">🧮 The Master Theorem</h4>
            
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 mb-4">
              <p className="text-center font-mono font-bold text-lg text-purple-900 dark:text-purple-100 mb-2">
                T(n) = aT(n/b) + f(n)
              </p>
              <p className="text-center text-xs text-slate-600 dark:text-slate-400">
                where a ≥ 1, b {'>'} 1, and f(n) is asymptotically positive
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-500 text-white rounded font-bold text-sm">Case 1</span>
                  <h5 className="font-bold text-blue-900 dark:text-blue-100">Recursion Dominates</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  If <strong>f(n) = O(n^(log_b(a) - ε))</strong> for some ε {'>'} 0:
                </p>
                <div className="text-lg font-mono font-bold text-blue-700 dark:text-blue-300 text-center p-2 bg-white dark:bg-slate-900 rounded">
                  T(n) = Θ(n^log_b(a))
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 italic">
                  The recursive calls do most of the work. f(n) grows slower than n^log_b(a).
                </p>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-2 border-emerald-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-emerald-500 text-white rounded font-bold text-sm">Case 2</span>
                  <h5 className="font-bold text-emerald-900 dark:text-emerald-100">Balanced Work</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  If <strong>f(n) = Θ(n^log_b(a))</strong>:
                </p>
                <div className="text-lg font-mono font-bold text-emerald-700 dark:text-emerald-300 text-center p-2 bg-white dark:bg-slate-900 rounded">
                  T(n) = Θ(n^log_b(a) × log n)
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 italic">
                  Work is balanced across all levels. Add log n factor for tree depth.
                </p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-2 border-amber-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-amber-500 text-white rounded font-bold text-sm">Case 3</span>
                  <h5 className="font-bold text-amber-900 dark:text-amber-100">Non-Recursive Work Dominates</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  If <strong>f(n) = Ω(n^(log_b(a) + ε))</strong> for some ε {'>'} 0, AND <strong>af(n/b) ≤ cf(n)</strong> for c {'<'} 1:
                </p>
                <div className="text-lg font-mono font-bold text-amber-700 dark:text-amber-300 text-center p-2 bg-white dark:bg-slate-900 rounded">
                  T(n) = Θ(f(n))
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 italic">
                  The non-recursive work dominates. f(n) grows faster than n^log_b(a).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-indigo-600" />
            Apply Master Theorem: Examples
          </CardTitle>
          <CardDescription>See how to apply the theorem to common divide-and-conquer algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Example Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedExample('merge')}
                variant={selectedExample === 'merge' ? 'default' : 'outline'}
                className={selectedExample === 'merge' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-300'}
              >
                Merge Sort
              </Button>
              <Button
                onClick={() => setSelectedExample('binary')}
                variant={selectedExample === 'binary' ? 'default' : 'outline'}
                className={selectedExample === 'binary' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                Binary Search
              </Button>
              <Button
                onClick={() => setSelectedExample('strassen')}
                variant={selectedExample === 'strassen' ? 'default' : 'outline'}
                className={selectedExample === 'strassen' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-300'}
              >
                Strassen's Algorithm
              </Button>
            </div>

            {/* Selected Example Display */}
            <div className={`p-6 rounded-xl border-2 bg-gradient-to-br ${
              selectedExample === 'merge' 
                ? 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-300 dark:border-emerald-700'
                : selectedExample === 'binary'
                ? 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'
                : 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-300 dark:border-amber-700'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                selectedExample === 'merge' 
                  ? 'text-emerald-900 dark:text-emerald-100'
                  : selectedExample === 'binary'
                  ? 'text-blue-900 dark:text-blue-100'
                  : 'text-amber-900 dark:text-amber-100'
              }`}>
                {currentExample.name}
              </h3>

              <div className="space-y-4">
                {/* Recurrence */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">1️⃣ Recurrence Relation:</h4>
                  <p className="text-2xl font-mono font-bold text-center text-indigo-700 dark:text-indigo-300 py-2">
                    {currentExample.recurrence}
                  </p>
                </div>

                {/* Identify Parameters */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">2️⃣ Identify Parameters:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600">{currentExample.a}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">a (subproblems)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">{currentExample.b}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">b (division factor)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{currentExample.f}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">f(n) (outside work)</div>
                    </div>
                  </div>
                </div>

                {/* Calculate log_b(a) */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">3️⃣ Calculate log_b(a):</h4>
                  <div className="text-center">
                    <p className="text-xl font-mono font-bold text-emerald-700 dark:text-emerald-300">
                      {currentExample.logValue}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      Compare f(n) = {currentExample.f} with {currentExample.comparison}
                    </p>
                  </div>
                </div>

                {/* Determine Case */}
                <div className={`p-4 rounded-lg border-2 ${
                  currentExample.caseNumber === 1
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-400'
                    : currentExample.caseNumber === 2
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400'
                    : 'bg-amber-100 dark:bg-amber-900/30 border-amber-400'
                }`}>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">4️⃣ Determine Which Case:</h4>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className={`px-3 py-1.5 rounded font-bold text-white ${
                      currentExample.caseNumber === 1
                        ? 'bg-blue-500'
                        : currentExample.caseNumber === 2
                        ? 'bg-emerald-500'
                        : 'bg-amber-500'
                    }`}>
                      Case {currentExample.caseNumber}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 text-center">
                    {currentExample.explanation}
                  </p>
                </div>

                {/* Final Solution */}
                <div className={`p-6 rounded-lg border-2 shadow-lg ${
                  selectedExample === 'merge' 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 border-emerald-400'
                    : selectedExample === 'binary'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400'
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 border-amber-400'
                }`}>
                  <h4 className="font-semibold text-white mb-2 text-center">5️⃣ Final Solution:</h4>
                  <p className="text-4xl font-mono font-bold text-center text-white py-3">
                    {currentExample.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decision Flow */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-indigo-600" />
            Decision Flow: Which Case?
          </CardTitle>
          <CardDescription>Follow this flowchart to determine which Master Theorem case applies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <div className="space-y-4">
              {/* Start */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-indigo-400">
                <p className="text-center font-bold text-indigo-900 dark:text-indigo-100">
                  Start: Calculate c = log_b(a)
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-indigo-600 rotate-90" />
              </div>

              {/* Compare */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-400">
                <p className="text-center font-bold text-purple-900 dark:text-purple-100">
                  Compare f(n) with n^c
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Case 1 */}
                <div className="space-y-2">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-400">
                    <p className="text-center font-bold text-blue-900 dark:text-blue-100 mb-2">
                      f(n) {'<'} n^c
                    </p>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                      (polynomially smaller)
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                  </div>
                  <div className="p-4 bg-blue-500 text-white rounded-lg font-bold text-center">
                    Case 1
                    <div className="text-sm font-normal mt-1">Θ(n^c)</div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="space-y-2">
                  <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border-2 border-emerald-400">
                    <p className="text-center font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                      f(n) = n^c
                    </p>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                      (same growth rate)
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-emerald-600 rotate-90" />
                  </div>
                  <div className="p-4 bg-emerald-500 text-white rounded-lg font-bold text-center">
                    Case 2
                    <div className="text-sm font-normal mt-1">Θ(n^c log n)</div>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="space-y-2">
                  <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg border-2 border-amber-400">
                    <p className="text-center font-bold text-amber-900 dark:text-amber-100 mb-2">
                      f(n) {'>'} n^c
                    </p>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                      (polynomially larger)
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-amber-600 rotate-90" />
                  </div>
                  <div className="p-4 bg-amber-500 text-white rounded-lg font-bold text-center">
                    Case 3
                    <div className="text-sm font-normal mt-1">Θ(f(n))</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Examples Table */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Common Recurrences & Solutions
          </CardTitle>
          <CardDescription>Quick reference for popular divide-and-conquer algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-indigo-300 dark:border-indigo-700">
                  <th className="p-3 text-left font-bold">Algorithm</th>
                  <th className="p-3 text-center font-bold">Recurrence</th>
                  <th className="p-3 text-center font-bold">Case</th>
                  <th className="p-3 text-center font-bold">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-200 dark:divide-indigo-800">
                <tr>
                  <td className="p-3 font-semibold">Merge Sort</td>
                  <td className="p-3 text-center font-mono text-sm">T(n) = 2T(n/2) + n</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-500 text-white rounded text-xs">Case 2</span>
                  </td>
                  <td className="p-3 text-center font-mono text-emerald-600 font-bold">Θ(n log n)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Binary Search</td>
                  <td className="p-3 text-center font-mono text-sm">T(n) = T(n/2) + 1</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-500 text-white rounded text-xs">Case 2</span>
                  </td>
                  <td className="p-3 text-center font-mono text-emerald-600 font-bold">Θ(log n)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Karatsuba Multiplication</td>
                  <td className="p-3 text-center font-mono text-sm">T(n) = 3T(n/2) + n</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Case 1</span>
                  </td>
                  <td className="p-3 text-center font-mono text-blue-600 font-bold">Θ(n^1.59)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Strassen's Algorithm</td>
                  <td className="p-3 text-center font-mono text-sm">T(n) = 7T(n/2) + n²</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Case 1</span>
                  </td>
                  <td className="p-3 text-center font-mono text-blue-600 font-bold">Θ(n^2.81)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Linear Search (divide)</td>
                  <td className="p-3 text-center font-mono text-sm">T(n) = T(n-1) + 1</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-amber-500 text-white rounded text-xs">Case 3</span>
                  </td>
                  <td className="p-3 text-center font-mono text-amber-600 font-bold">Θ(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            Practical Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-300 dark:border-indigo-700">
              <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">🎯 When to Use</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Perfect for <strong>divide-and-conquer</strong> algorithms! Merge Sort, Binary Search, Fast Fourier Transform, etc.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⚠️ Limitations</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Only works when subproblems are <strong>equal size</strong> (n/b). Doesn't apply to all recurrences!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Most Common</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Case 2</strong> appears most often! Balanced work across levels (Merge Sort, FFT).
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">✅ Interview Tip</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Show your work! "T(n) = 2T(n/2) + n → log_2(2) = 1 → Case 2 → Θ(n log n)"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
