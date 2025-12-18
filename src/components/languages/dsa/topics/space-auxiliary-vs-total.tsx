'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Database, BookOpen, TrendingUp, Package, Plus, Equal } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function AuxiliaryVsTotalSpace() {
  const [selectedExample, setSelectedExample] = useState<'inplace' | 'merge' | 'reverse'>('merge');

  const examples = {
    inplace: {
      name: 'In-Place Sorting (Bubble Sort)',
      inputSize: 8,
      auxiliarySize: 0,
      totalSize: 8,
      inputSpace: 'O(n)',
      auxiliarySpace: 'O(1)',
      totalSpace: 'O(n)',
      description: 'Only uses a few variables (temp, i, j). No extra arrays!',
      color: 'emerald',
    },
    merge: {
      name: 'Merge Sort',
      inputSize: 8,
      auxiliarySize: 8,
      totalSize: 16,
      inputSpace: 'O(n)',
      auxiliarySpace: 'O(n)',
      totalSpace: 'O(n)',
      description: 'Creates temporary array of size n for merging.',
      color: 'blue',
    },
    reverse: {
      name: 'Reverse Array (Extra Space)',
      inputSize: 8,
      auxiliarySize: 8,
      totalSize: 16,
      inputSpace: 'O(n)',
      auxiliarySpace: 'O(n)',
      totalSpace: 'O(n)',
      description: 'Creates new reversed array instead of reversing in-place.',
      color: 'purple',
    },
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Database}
        category="DSA · Space Complexity"
        title="Auxiliary Space vs Total Space"
        description="Understanding the difference between extra space and total memory usage"
        colorTheme="cyan"
        badges={[
          { label: 'Space Analysis', variant: 'default' },
          { label: 'Memory Management', variant: 'secondary' },
          { label: '💾 Space Efficiency', variant: 'outline' },
        ]}
      />

      {/* Core Concept */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-6 h-6 text-cyan-600" />
            What's the Difference?
          </CardTitle>
          <CardDescription>
            Two ways to measure memory usage of an algorithm
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Kitchen Analogy */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Cooking! 🍳
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-cyan-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine you're cooking a meal. You have <strong>ingredients</strong> (input) and you need <strong>kitchen tools</strong> (auxiliary space) to prepare it.
              </p>

              <div className="space-y-4">
                {/* Input Space */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🥗</div>
                    <div>
                      <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Input Space = Ingredients</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        The vegetables, meat, spices you need to cook (your array/data). 
                        <strong className="text-purple-700 dark:text-purple-300"> You already have these!</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Auxiliary Space */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🍴</div>
                    <div>
                      <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-1">Auxiliary Space = Kitchen Tools</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        The cutting board, bowls, pans you use while cooking. 
                        <strong className="text-emerald-700 dark:text-emerald-300"> Extra tools you need!</strong>
                      </p>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 rounded text-xs">🔪 Knife = temp variable</span>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 rounded text-xs">🥣 Bowl = temp array</span>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 rounded text-xs">📋 Recipe = stack</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total Space */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🍽️</div>
                    <div>
                      <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Total Space = Everything on Counter</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Ingredients + Tools = <strong className="text-blue-700 dark:text-blue-300">Total counter space needed</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Cooking Methods Comparison */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg border-2 border-emerald-400">
                <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                  <span>👨‍🍳</span> Method 1: Minimal Tools
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Chef uses ingredients directly, one knife. <strong>No extra bowls!</strong>
                </p>
                <div className="p-2 bg-white dark:bg-slate-900 rounded text-xs font-mono">
                  Ingredients + 1 knife = <span className="text-emerald-600 font-bold">O(1) auxiliary</span>
                </div>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-2 font-semibold">
                  ✅ In-place sorting (like Bubble Sort)
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-lg border-2 border-orange-400">
                <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <span>👨‍🍳</span> Method 2: Many Tools
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Chef needs extra bowls for each ingredient. <strong>Lots of dishes!</strong>
                </p>
                <div className="p-2 bg-white dark:bg-slate-900 rounded text-xs font-mono">
                  Ingredients + Many bowls = <span className="text-orange-600 font-bold">O(n) auxiliary</span>
                </div>
                <p className="text-xs text-orange-700 dark:text-orange-300 mt-2 font-semibold">
                  ⚠️ Merge Sort (needs temp array)
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-lg border-l-4 border-cyan-500">
              <p className="text-sm font-bold text-cyan-900 dark:text-cyan-100 mb-2">
                💡 The Key Question
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>"How many extra kitchen tools do you need?"</strong> That's auxiliary space! 
                The ingredients (input) are already there, we only care about the <strong>extra tools</strong> the recipe requires.
              </p>
            </div>
          </div>

          {/* Visual Diagram - Core Concept */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-6 text-center text-lg">
              📊 Visual Breakdown
            </h4>

            <div className="space-y-8">
              {/* Input Space */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Input Space (Given)</h5>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div
                      key={num}
                      className="w-14 h-14 bg-purple-500 text-white rounded-lg flex items-center justify-center font-mono font-bold border-2 border-purple-400"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Input array of size n = 8 → <strong>O(n) space</strong>
                </p>
              </div>

              <div className="flex justify-center">
                <Plus className="w-8 h-8 text-cyan-600" />
              </div>

              {/* Auxiliary Space Example 1: In-Place */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-emerald-600" />
                  <h5 className="font-semibold text-emerald-900 dark:text-emerald-100">Auxiliary Space (Example 1: In-Place)</h5>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-bold border-2 border-emerald-400">
                    temp
                  </div>
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-bold border-2 border-emerald-400">
                    i
                  </div>
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xs font-bold border-2 border-emerald-400">
                    j
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Only 3 variables → <strong>O(1) auxiliary space</strong>
                </p>
              </div>

              <div className="flex justify-center">
                <Equal className="w-8 h-8 text-blue-600" />
              </div>

              {/* Total Space */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Total Space</h5>
                </div>
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-400">
                  <p className="text-center text-lg font-mono font-bold text-blue-900 dark:text-blue-100">
                    O(n) + O(1) = O(n)
                  </p>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Input space + Auxiliary space = Total space
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Another Example - Extra Space */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-6 text-center text-lg">
              📊 Example 2: Algorithm Using Extra Space
            </h4>

            <div className="space-y-8">
              {/* Input Space */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Input Space</h5>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div
                      key={num}
                      className="w-14 h-14 bg-purple-500 text-white rounded-lg flex items-center justify-center font-mono font-bold border-2 border-purple-400"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Input array → <strong>O(n) = 8 units</strong>
                </p>
              </div>

              <div className="flex justify-center">
                <Plus className="w-8 h-8 text-cyan-600" />
              </div>

              {/* Auxiliary Space - Temp Array */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-orange-600" />
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Auxiliary Space (Temporary Array)</h5>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div
                      key={num}
                      className="w-14 h-14 bg-orange-500 text-white rounded-lg flex items-center justify-center font-mono font-bold border-2 border-orange-400"
                    >
                      ?
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Temporary array of same size → <strong>O(n) = 8 units</strong>
                </p>
              </div>

              <div className="flex justify-center">
                <Equal className="w-8 h-8 text-blue-600" />
              </div>

              {/* Total Space */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Total Space</h5>
                </div>
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-400">
                  <p className="text-center text-lg font-mono font-bold text-blue-900 dark:text-blue-100">
                    O(n) + O(n) = O(n)
                  </p>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
                    8 + 8 = 16 units total (but still O(n) complexity)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>💡 Notice:</strong> Both examples have <strong>O(n) total space</strong>, but different auxiliary space! 
                  First is O(1), second is O(n). This difference matters for efficiency!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Comparison */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-6 h-6 text-cyan-600" />
            Compare Algorithms: Space Breakdown
          </CardTitle>
          <CardDescription>See how different algorithms use memory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Algorithm Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedExample('inplace')}
                variant={selectedExample === 'inplace' ? 'default' : 'outline'}
                className={selectedExample === 'inplace' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-300'}
              >
                In-Place Sort
              </Button>
              <Button
                onClick={() => setSelectedExample('merge')}
                variant={selectedExample === 'merge' ? 'default' : 'outline'}
                className={selectedExample === 'merge' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                Merge Sort
              </Button>
              <Button
                onClick={() => setSelectedExample('reverse')}
                variant={selectedExample === 'reverse' ? 'default' : 'outline'}
                className={selectedExample === 'reverse' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-300'}
              >
                Reverse (Extra)
              </Button>
            </div>

            {/* Selected Example Display */}
            <div className={`p-6 rounded-xl border-2 bg-gradient-to-br ${
              currentExample.color === 'emerald' 
                ? 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-300 dark:border-emerald-700'
                : currentExample.color === 'blue'
                ? 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700'
                : 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-300 dark:border-purple-700'
            }`}>
              <h3 className={`text-xl font-bold mb-4 text-center ${
                currentExample.color === 'emerald' 
                  ? 'text-emerald-900 dark:text-emerald-100'
                  : currentExample.color === 'blue'
                  ? 'text-blue-900 dark:text-blue-100'
                  : 'text-purple-900 dark:text-purple-100'
              }`}>
                {currentExample.name}
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 text-center mb-6">
                {currentExample.description}
              </p>

              {/* Visual Memory Bars */}
              <div className="space-y-6">
                {/* Input Space Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">Input Space</span>
                    <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">{currentExample.inputSpace}</span>
                  </div>
                  <div className="h-12 bg-purple-500 rounded-lg border-2 border-purple-400 flex items-center justify-center text-white font-bold">
                    {currentExample.inputSize} units
                  </div>
                </div>

                <div className="flex justify-center">
                  <Plus className="w-6 h-6 text-slate-400" />
                </div>

                {/* Auxiliary Space Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${
                      currentExample.color === 'emerald' 
                        ? 'text-emerald-900 dark:text-emerald-100'
                        : currentExample.color === 'blue'
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-purple-900 dark:text-purple-100'
                    }`}>
                      Auxiliary Space
                    </span>
                    <span className={`text-xs font-mono font-bold ${
                      currentExample.color === 'emerald' 
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : currentExample.color === 'blue'
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-purple-700 dark:text-purple-300'
                    }`}>
                      {currentExample.auxiliarySpace}
                    </span>
                  </div>
                  <div 
                    className={`h-12 rounded-lg border-2 flex items-center justify-center text-white font-bold ${
                      currentExample.auxiliarySize === 0
                        ? 'bg-emerald-500 border-emerald-400'
                        : currentExample.color === 'blue'
                        ? 'bg-blue-500 border-blue-400'
                        : 'bg-purple-500 border-purple-400'
                    }`}
                    style={{ 
                      width: currentExample.auxiliarySize === 0 ? '60px' : '100%',
                      minWidth: currentExample.auxiliarySize === 0 ? '60px' : 'auto'
                    }}
                  >
                    {currentExample.auxiliarySize === 0 ? 'None' : `${currentExample.auxiliarySize} units`}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Equal className="w-6 h-6 text-slate-400" />
                </div>

                {/* Total Space Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">Total Space</span>
                    <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">{currentExample.totalSpace}</span>
                  </div>
                  <div className="h-14 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg border-2 border-indigo-400 flex items-center justify-center text-white font-bold text-lg">
                    {currentExample.totalSize} units
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border-2">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{currentExample.inputSize}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Input</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${
                      currentExample.auxiliarySize === 0 
                        ? 'text-emerald-600'
                        : 'text-orange-600'
                    }`}>
                      {currentExample.auxiliarySize}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Auxiliary</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">{currentExample.totalSize}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Examples Table */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-cyan-600" />
            Common Algorithms: Space Analysis
          </CardTitle>
          <CardDescription>Compare auxiliary vs total space for popular algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-cyan-300 dark:border-cyan-700">
                  <th className="p-3 text-left font-bold">Algorithm</th>
                  <th className="p-3 text-center font-bold">Input Space</th>
                  <th className="p-3 text-center font-bold">Auxiliary Space</th>
                  <th className="p-3 text-center font-bold">Total Space</th>
                  <th className="p-3 text-center font-bold">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-200 dark:divide-cyan-800">
                <tr>
                  <td className="p-3 font-semibold">Bubble Sort</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center font-mono text-emerald-600 font-bold">O(1)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">In-place ✅</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Selection Sort</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center font-mono text-emerald-600 font-bold">O(1)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">In-place ✅</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Merge Sort</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center font-mono text-orange-600 font-bold">O(n)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">Needs temp array</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Quick Sort</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center font-mono text-blue-600 font-bold">O(log n)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">Recursion stack</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Binary Search</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center font-mono text-emerald-600 font-bold">O(1)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">Iterative version</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Binary Search (Recursive)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center font-mono text-blue-600 font-bold">O(log n)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">Recursion stack</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Hash Table Insert</td>
                  <td className="p-3 text-center font-mono">-</td>
                  <td className="p-3 text-center font-mono text-purple-600 font-bold">O(n)</td>
                  <td className="p-3 text-center font-mono">O(n)</td>
                  <td className="p-3 text-center text-xs">Stores n elements</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">✅ O(1) Auxiliary</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Best case! Only uses a few variables. In-place algorithms.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚠️ O(log n) Auxiliary</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Usually from recursion stack. Still efficient!
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300">
              <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💾 O(n) Auxiliary</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Needs extra arrays/structures. Tradeoff for speed!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-600" />
            Practical Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">💡 What We Usually Mean</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                When someone says "space complexity", they usually mean <strong>auxiliary space</strong>, 
                not total space! The input is given, so we care about <strong>extra memory</strong>.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 In-Place is Best</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(1) auxiliary space</strong> = in-place algorithm = most space-efficient! 
                Only uses a constant amount of extra memory.
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300 dark:border-emerald-700">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">⚖️ Speed vs Space</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Often there's a tradeoff! Merge Sort uses O(n) extra space but is faster and more stable 
                than in-place O(n²) sorts.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Interview Tip</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Always clarify! "This is O(n) auxiliary space, but O(n) total space since we need to store the input."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
