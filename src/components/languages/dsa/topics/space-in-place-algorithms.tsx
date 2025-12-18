'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Repeat, BookOpen, TrendingUp, ArrowRightLeft, Package, Copy } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function InPlaceAlgorithms() {
  const [swapStep, setSwapStep] = useState(0);
  const [selectedExample, setSelectedExample] = useState<'bubble' | 'reverse' | 'merge'>('reverse');

  const swapAnimation = [
    { array: [5, 2, 8, 1], highlight: [0, 3], description: 'Original array - want to swap positions 0 and 3', temp: null },
    { array: [5, 2, 8, 1], highlight: [0], description: 'Store 5 in temp variable', temp: 5 },
    { array: [1, 2, 8, 1], highlight: [0, 3], description: 'Copy 1 to position 0', temp: 5 },
    { array: [1, 2, 8, 5], highlight: [3], description: 'Copy temp (5) to position 3. Swap complete!', temp: 5 },
    { array: [1, 2, 8, 5], highlight: [], description: 'Done! Used only 1 extra variable (O(1) space)', temp: null },
  ];

  const examples = {
    reverse: {
      name: 'Reverse Array (In-Place)',
      before: [1, 2, 3, 4, 5, 6],
      after: [6, 5, 4, 3, 2, 1],
      space: 'O(1)',
      isInPlace: true,
      method: 'Two pointers swap from ends',
    },
    bubble: {
      name: 'Bubble Sort',
      before: [5, 2, 8, 1, 9],
      after: [1, 2, 5, 8, 9],
      space: 'O(1)',
      isInPlace: true,
      method: 'Adjacent swaps only',
    },
    merge: {
      name: 'Merge Sort (NOT In-Place)',
      before: [5, 2, 8, 1],
      after: [1, 2, 5, 8],
      space: 'O(n)',
      isInPlace: false,
      method: 'Creates temporary arrays',
    },
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Repeat}
        category="DSA · Space Complexity"
        title="In-Place Algorithms"
        description="Algorithms that modify data with minimal extra memory"
        colorTheme="green"
        badges={[
          { label: 'O(1) Space', variant: 'default' },
          { label: 'Memory Efficient', variant: 'secondary' },
          { label: '♻️ Reuse Memory', variant: 'outline' },
        ]}
      />

      {/* Library Analogy */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            What is In-Place?
          </CardTitle>
          <CardDescription>
            Algorithms that modify data with O(1) auxiliary space
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Creative Library Analogy */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Organizing a Library! 📚
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-green-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine you need to <strong>rearrange books on a shelf</strong> from random order to alphabetical order.
              </p>

              <div className="space-y-4">
                {/* In-Place Method */}
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h5 className="font-bold text-green-900 dark:text-green-100 mb-1">In-Place Method: Swap Books Directly</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Pick two books, swap their positions on the shelf. <strong>No extra shelf needed!</strong>
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded">📕 Pick book A</span>
                        <ArrowRightLeft className="w-4 h-4 text-green-600" />
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded">📗 Pick book B</span>
                        <span className="ml-2">→ Swap!</span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300 mt-2 font-semibold">
                        Space needed: Just your two hands = <strong>O(1) auxiliary</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* NOT In-Place Method */}
                <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">❌</div>
                    <div>
                      <h5 className="font-bold text-red-900 dark:text-red-100 mb-1">NOT In-Place: Use Another Shelf</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Take books to a <strong>separate empty shelf</strong>, arrange them there, then move back. <strong>Wasteful!</strong>
                      </p>
                      <div className="flex items-center gap-2 text-xs flex-wrap">
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/50 rounded">📕 Original shelf</span>
                        <span>→</span>
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 rounded">🆕 Extra shelf (temporary)</span>
                        <span>→</span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/50 rounded">📗 Back to original</span>
                      </div>
                      <p className="text-xs text-red-700 dark:text-red-300 mt-2 font-semibold">
                        Space needed: Entire extra shelf = <strong>O(n) auxiliary</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border-l-4 border-green-500">
              <p className="text-sm font-bold text-green-900 dark:text-green-100 mb-2">
                💡 The In-Place Secret
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Modify the original data structure directly</strong> instead of creating copies! 
                Use only a <strong>constant amount</strong> of extra variables (like temp, i, j). That's O(1) space!
              </p>
            </div>
          </div>

          {/* Definition Box */}
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-center">📖 Formal Definition</h4>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-400">
              <p className="text-sm text-slate-700 dark:text-slate-300 text-center mb-3">
                An algorithm is <strong className="text-blue-700 dark:text-blue-300">in-place</strong> if it uses <strong>O(1) auxiliary space</strong>.
              </p>
              <div className="flex justify-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Input space doesn't count</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Few variables OK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No temp arrays</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Swap Animation */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft className="w-6 h-6 text-green-600" />
            How In-Place Works: The Swap Technique
          </CardTitle>
          <CardDescription>Watch how we swap elements using only O(1) extra space</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            {/* Step Controls */}
            <div className="flex justify-center gap-3 mb-6">
              <Button
                onClick={() => setSwapStep(Math.max(0, swapStep - 1))}
                disabled={swapStep === 0}
                variant="outline"
                size="sm"
                className="border-green-300"
              >
                Previous
              </Button>
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/40 rounded-lg border border-green-300">
                <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                  Step {swapStep + 1} / {swapAnimation.length}
                </span>
              </div>
              <Button
                onClick={() => setSwapStep(Math.min(swapAnimation.length - 1, swapStep + 1))}
                disabled={swapStep === swapAnimation.length - 1}
                variant="outline"
                size="sm"
                className="border-green-300"
              >
                Next
              </Button>
              <Button
                onClick={() => setSwapStep(0)}
                variant="outline"
                size="sm"
                className="border-green-300"
              >
                Reset
              </Button>
            </div>

            {/* Current Description */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                {swapAnimation[swapStep].description}
              </p>
            </div>

            {/* Array Visualization */}
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Array:</h5>
                <div className="flex justify-center gap-3">
                  {swapAnimation[swapStep].array.map((num, idx) => (
                    <div
                      key={idx}
                      className={`w-16 h-16 rounded-lg flex items-center justify-center font-mono font-bold text-2xl border-2 transition-all duration-500 ${
                        swapAnimation[swapStep].highlight.includes(idx)
                          ? 'bg-amber-500 text-white border-amber-400 scale-125 ring-4 ring-amber-300 animate-pulse'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 border-slate-300'
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Temp Variable */}
              <div className="flex justify-center">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 min-w-[200px]">
                  <h5 className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2 text-center">
                    Temp Variable (Only Extra Space)
                  </h5>
                  <div className="flex justify-center">
                    {swapAnimation[swapStep].temp !== null ? (
                      <div className="w-16 h-16 bg-purple-500 text-white rounded-lg flex items-center justify-center font-mono font-bold text-2xl border-2 border-purple-400 animate-in zoom-in-50">
                        {swapAnimation[swapStep].temp}
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                        -
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-center text-purple-700 dark:text-purple-300 mt-2">
                    O(1) space
                  </p>
                </div>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="mt-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">swap.js</span>
              </div>
              <div className="p-3 font-mono text-xs">
                <div className="text-slate-500 dark:text-slate-500">// Classic 3-step swap (in-place)</div>
                <div className={swapStep === 1 ? 'bg-amber-50 dark:bg-amber-900/20' : ''}>temp = arr[0];     <span className="text-slate-500">// Store first value</span></div>
                <div className={swapStep === 2 ? 'bg-amber-50 dark:bg-amber-900/20' : ''}>arr[0] = arr[3];   <span className="text-slate-500">// Copy second to first</span></div>
                <div className={swapStep === 3 ? 'bg-amber-50 dark:bg-amber-900/20' : ''}>arr[3] = temp;     <span className="text-slate-500">// Copy temp to second</span></div>
                <div className="mt-2 text-green-600 dark:text-green-400">// Space used: O(1) for temp variable only!</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Algorithm Comparison */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-6 h-6 text-green-600" />
            In-Place vs Not In-Place
          </CardTitle>
          <CardDescription>Compare how different algorithms handle space</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedExample('reverse')}
                variant={selectedExample === 'reverse' ? 'default' : 'outline'}
                className={selectedExample === 'reverse' ? 'bg-green-600 hover:bg-green-700' : 'border-green-300'}
              >
                Reverse (In-Place)
              </Button>
              <Button
                onClick={() => setSelectedExample('bubble')}
                variant={selectedExample === 'bubble' ? 'default' : 'outline'}
                className={selectedExample === 'bubble' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-300'}
              >
                Bubble Sort (In-Place)
              </Button>
              <Button
                onClick={() => setSelectedExample('merge')}
                variant={selectedExample === 'merge' ? 'default' : 'outline'}
                className={selectedExample === 'merge' ? 'bg-red-600 hover:bg-red-700' : 'border-red-300'}
              >
                Merge Sort (NOT)
              </Button>
            </div>

            {/* Example Display */}
            <div className={`p-6 rounded-xl border-2 ${
              currentExample.isInPlace
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-300 dark:border-red-700'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${
                  currentExample.isInPlace
                    ? 'text-green-900 dark:text-green-100'
                    : 'text-red-900 dark:text-red-100'
                }`}>
                  {currentExample.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  currentExample.isInPlace
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {currentExample.isInPlace ? '✅ In-Place' : '❌ NOT In-Place'}
                </span>
              </div>

              <div className="space-y-4">
                {/* Before */}
                <div>
                  <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Before:</h5>
                  <div className="flex gap-2 flex-wrap">
                    {currentExample.before.map((num, idx) => (
                      <div
                        key={idx}
                        className="w-12 h-12 bg-slate-300 dark:bg-slate-700 rounded-lg flex items-center justify-center font-mono font-bold border-2 border-slate-400"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Method */}
                <div className="flex justify-center">
                  <div className={`px-4 py-2 rounded-lg ${
                    currentExample.isInPlace
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100'
                  }`}>
                    <p className="text-sm font-semibold">{currentExample.method}</p>
                  </div>
                </div>

                {/* After */}
                <div>
                  <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">After:</h5>
                  <div className="flex gap-2 flex-wrap">
                    {currentExample.after.map((num, idx) => (
                      <div
                        key={idx}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold border-2 ${
                          currentExample.isInPlace
                            ? 'bg-green-500 text-white border-green-400'
                            : 'bg-orange-500 text-white border-orange-400'
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Space Summary */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Auxiliary Space:</span>
                    <span className={`font-mono font-bold text-lg ${
                      currentExample.isInPlace
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                      {currentExample.space}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common In-Place Algorithms */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Common In-Place Algorithms
          </CardTitle>
          <CardDescription>Popular algorithms that use O(1) auxiliary space</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                1. Bubble Sort
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-green-700 dark:text-green-300">Why In-Place:</strong> Only swaps adjacent elements. 
                Uses temp variable for swapping = O(1) extra space!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`for (i = 0; i < n; i++) swap(arr[i], arr[i+1]);  // O(1) space`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                2. Selection Sort
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-emerald-700 dark:text-emerald-300">Why In-Place:</strong> Finds minimum and swaps. 
                Only needs variables for min index and temp.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`minIdx = findMin(arr); swap(arr[0], arr[minIdx]);  // O(1) space`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-300">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                3. Reverse Array (Two Pointers)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-cyan-700 dark:text-cyan-300">Why In-Place:</strong> Swaps elements from both ends moving inward. 
                Uses two pointer variables only!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`left = 0, right = n-1; swap(arr[left++], arr[right--]);  // O(1)`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/20 border-red-300">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <Copy className="w-5 h-5" />
                4. Merge Sort (NOT In-Place)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-red-700 dark:text-red-300">Why NOT:</strong> Creates temporary array of size n for merging. 
                That's O(n) auxiliary space!
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block">
                {`temp = new Array(n); merge(left, right, temp);  // O(n) space ❌`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advantages & Disadvantages */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            In-Place: Pros & Cons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Advantages */}
            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100 flex items-center gap-2">
                <span className="text-xl">✅</span> Advantages
              </h4>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">💾 Memory Efficient</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Uses minimal extra memory. Perfect for memory-constrained systems!
                </p>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300">
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">⚡ Better Cache Performance</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Works with original data = better CPU cache usage = faster in practice!
                </p>
              </div>

              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-300">
                <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">🎯 Simpler Code</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  No need to manage temporary arrays. Less code = fewer bugs!
                </p>
              </div>
            </div>

            {/* Disadvantages */}
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Disadvantages
              </h4>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300">
                <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">💥 Can't Preserve Original</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Modifies input directly. If you need original data later, tough luck!
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300">
                <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🐌 Sometimes Slower</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Bubble Sort is in-place but O(n²). Merge Sort uses O(n) space but faster O(n log n)!
                </p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-300">
                <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">🔧 More Complex Logic</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Careful pointer manipulation needed. More room for off-by-one errors!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">
              💡 When to Use In-Place?
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              <strong>Use in-place when:</strong> Memory is limited, you don't need original data, or algorithm is already efficient (Quick Sort in-place version).
              <br />
              <strong>Avoid when:</strong> Need to preserve original, or non-in-place version is much faster (Merge Sort over Bubble Sort).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
