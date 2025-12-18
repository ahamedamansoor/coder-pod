'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Search, BookOpen, TrendingUp, Zap, Binary } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function UnderstandingLogarithmicComplexity() {
  const [halvingStep, setHalvingStep] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState<'binary' | 'power' | 'tree'>('binary');
  const [mergeSortStep, setMergeSortStep] = useState(0);

  // Detailed Merge Sort Steps for O(n log n) - Interactive Animation with ALL steps
  const mergeSortSteps = [
    // Initial
    { step: 0, phase: 'start', level: 0, data: [[8, 3, 5, 1, 9, 6, 2, 7]], description: '🎯 Start: Unsorted array [8,3,5,1,9,6,2,7]. We\'ll use Merge Sort to sort it!', workDone: 0, totalWork: 0 },
    
    // Level 1 - First Split
    { step: 1, phase: 'split', level: 1, data: [[8, 3, 5, 1], [9, 6, 2, 7]], description: '✂️ Level 1 Split: Divide into 2 halves → [8,3,5,1] and [9,6,2,7]', workDone: 0, totalWork: 0 },
    
    // Level 2 - Split left half
    { step: 2, phase: 'split', level: 2, data: [[8, 3], [5, 1], [9, 6, 2, 7]], description: '✂️ Level 2 Split (Left): Split [8,3,5,1] into [8,3] and [5,1]', workDone: 0, totalWork: 0 },
    
    // Level 2 - Split right half
    { step: 3, phase: 'split', level: 2, data: [[8, 3], [5, 1], [9, 6], [2, 7]], description: '✂️ Level 2 Split (Right): Split [9,6,2,7] into [9,6] and [2,7]', workDone: 0, totalWork: 0 },
    
    // Level 3 - Split into singles (left-left)
    { step: 4, phase: 'split', level: 3, data: [[8], [3], [5, 1], [9, 6], [2, 7]], description: '✂️ Level 3 Split: Break [8,3] into [8] and [3] - single elements!', workDone: 0, totalWork: 0 },
    
    // Level 3 - Split into singles (left-right)
    { step: 5, phase: 'split', level: 3, data: [[8], [3], [5], [1], [9, 6], [2, 7]], description: '✂️ Level 3 Split: Break [5,1] into [5] and [1] - base case!', workDone: 0, totalWork: 0 },
    
    // Level 3 - Split into singles (right-left)
    { step: 6, phase: 'split', level: 3, data: [[8], [3], [5], [1], [9], [6], [2, 7]], description: '✂️ Level 3 Split: Break [9,6] into [9] and [6] - singles!', workDone: 0, totalWork: 0 },
    
    // Level 3 - Split into singles (right-right)
    { step: 7, phase: 'split', level: 3, data: [[8], [3], [5], [1], [9], [6], [2], [7]], description: '✂️ Level 3 Split Complete: All 8 elements are now single arrays. Ready to merge!', workDone: 0, totalWork: 0 },
    
    // Merge Phase - Level 3 (pair 1)
    { step: 8, phase: 'merge', level: 3, data: [[3, 8], [5], [1], [9], [6], [2], [7]], description: '🔄 Merge [8] & [3]: Compare 8 vs 3 → 3 is smaller → [3,8]. Work: 2 comparisons', workDone: 2, totalWork: 2, highlight: [0] },
    
    // Merge Phase - Level 3 (pair 2)
    { step: 9, phase: 'merge', level: 3, data: [[3, 8], [1, 5], [9], [6], [2], [7]], description: '🔄 Merge [5] & [1]: Compare 5 vs 1 → 1 is smaller → [1,5]. Work: 2 comparisons', workDone: 2, totalWork: 4, highlight: [1] },
    
    // Merge Phase - Level 3 (pair 3)
    { step: 10, phase: 'merge', level: 3, data: [[3, 8], [1, 5], [6, 9], [2], [7]], description: '🔄 Merge [9] & [6]: Compare 9 vs 6 → 6 is smaller → [6,9]. Work: 2 comparisons', workDone: 2, totalWork: 6, highlight: [2] },
    
    // Merge Phase - Level 3 (pair 4)
    { step: 11, phase: 'merge', level: 3, data: [[3, 8], [1, 5], [6, 9], [2, 7]], description: '🔄 Merge [2] & [7]: Compare 2 vs 7 → 2 is smaller → [2,7]. Work: 2 comparisons', workDone: 2, totalWork: 8, highlight: [3] },
    
    // Merge Phase - Level 2 (left group)
    { step: 12, phase: 'merge', level: 2, data: [[1, 3, 5, 8], [6, 9], [2, 7]], description: '🔄 Merge [3,8] & [1,5]: Compare and merge into [1,3,5,8]. Work: 4 comparisons', workDone: 4, totalWork: 12, highlight: [0] },
    
    // Merge Phase - Level 2 (right group)
    { step: 13, phase: 'merge', level: 2, data: [[1, 3, 5, 8], [2, 6, 7, 9]], description: '🔄 Merge [6,9] & [2,7]: Compare and merge into [2,6,7,9]. Work: 4 comparisons', workDone: 4, totalWork: 16, highlight: [1] },
    
    // Merge Phase - Level 1 (final merge start)
    { step: 14, phase: 'merge', level: 1, data: [[1, 2, 3, 5, 6, 7, 8, 9]], description: '🔄 Final Merge: Merge [1,3,5,8] & [2,6,7,9] → Compare all elements one by one', workDone: 8, totalWork: 24, highlight: [0] },
    
    // Complete
    { step: 15, phase: 'done', level: 0, data: [[1, 2, 3, 5, 6, 7, 8, 9]], description: '✅ Complete! Fully sorted array [1,2,3,5,6,7,8,9]. Total: 24 operations = 8 elements × 3 levels (log₂ 8)', workDone: 0, totalWork: 24, highlight: [0] },
  ];

  const currentMergeStep = mergeSortSteps[mergeSortStep];

  // Phone book search visualization (1000 names)
  const halvingSteps = [
    { remaining: 1000, step: 0, description: 'Start with 1000 names. Open to middle (name 500).' },
    { remaining: 500, step: 1, description: 'Not found. Eliminate half! Now 500 names remain.' },
    { remaining: 250, step: 2, description: 'Check middle again. Eliminate half! 250 names remain.' },
    { remaining: 125, step: 3, description: 'Keep halving! 125 names remain.' },
    { remaining: 63, step: 4, description: 'Still halving! 63 names remain.' },
    { remaining: 32, step: 5, description: 'Getting close! 32 names remain.' },
    { remaining: 16, step: 6, description: 'Almost there! 16 names remain.' },
    { remaining: 8, step: 7, description: 'Very close! 8 names remain.' },
    { remaining: 4, step: 8, description: 'Nearly done! 4 names remain.' },
    { remaining: 2, step: 9, description: 'Just 2 names left!' },
    { remaining: 1, step: 10, description: 'Found it! Only 10 steps for 1000 names!' },
  ];

  const patterns = {
    binary: {
      name: 'Binary Search',
      code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    
    if (arr[mid] < target) 
      left = mid + 1;  // Search right half
    else 
      right = mid - 1; // Search left half
  }
  return -1;
}`,
      pattern: 'Halving the search space each iteration',
      recognition: 'Look for: dividing by 2, left/right pointers moving towards center'
    },
    power: {
      name: 'Power Calculation',
      code: `function power(base, exp) {
  if (exp === 0) return 1;
  
  let half = power(base, exp / 2);
  
  if (exp % 2 === 0)
    return half * half;
  else
    return base * half * half;
}`,
      pattern: 'Dividing the problem size by 2 each recursion',
      recognition: 'Look for: exp / 2, recursive calls reducing problem by half'
    },
    tree: {
      name: 'Tree Height',
      code: `function treeHeight(node) {
  if (!node) return 0;
  
  let leftHeight = treeHeight(node.left);
  let rightHeight = treeHeight(node.right);
  
  return 1 + Math.max(leftHeight, rightHeight);
}`,
      pattern: 'Balanced tree has log n height',
      recognition: 'Look for: tree operations, each level halves the remaining nodes'
    },
  };

  const currentPattern = patterns[selectedPattern];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Binary}
        category="DSA · Algorithm Analysis"
        title="Understanding Logarithmic Complexity"
        description="Master O(log n) - the power of halving"
        colorTheme="teal"
        badges={[
          { label: 'O(log n)', variant: 'default' },
          { label: 'Halving Pattern', variant: 'secondary' },
          { label: '📉 Efficient', variant: 'outline' },
        ]}
      />

      {/* Phone Book Analogy */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-6 h-6 text-teal-600" />
            What is Logarithmic Complexity?
          </CardTitle>
          <CardDescription>
            The magical property: doubling input size only adds one more step!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Phone Book Analogy */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Finding a Name in a Phone Book! 📖
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-teal-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You have a <strong>phone book with 1000 names</strong> (sorted alphabetically). 
                How do you find "Smith, John"?
              </p>

              <div className="space-y-4">
                {/* Wrong Way */}
                <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">❌</div>
                    <div>
                      <h5 className="font-bold text-red-900 dark:text-red-100 mb-1">Linear Search: Page by Page</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Start at page 1. Check each name. "Adams... no. Baker... no. Carter... no..."
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-300 font-semibold">
                        Worst case: Check all 1000 names = <strong>O(n)</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Way */}
                <div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h5 className="font-bold text-teal-900 dark:text-teal-100 mb-1">Binary Search: Open to Middle</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        1. Open to middle (name 500) → "Martinez"<br />
                        2. "Smith" comes after → eliminate first half!<br />
                        3. Open to middle of remaining → repeat!
                      </p>
                      <p className="text-xs text-teal-700 dark:text-teal-300 font-semibold">
                        Only ~10 steps for 1000 names = <strong>O(log n)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Magic */}
            <div className="p-4 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg border-l-4 border-teal-500">
              <p className="text-sm font-bold text-teal-900 dark:text-teal-100 mb-2">
                🪄 The Logarithmic Magic
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Key insight: Each step eliminates HALF of the remaining data!</strong> 
                1000 → 500 → 250 → 125 → ... → 1. How many times can you halve 1000? 
                That's log₂(1000) ≈ 10 steps!
              </p>
            </div>
          </div>

          {/* Visual Halving */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4">📉 What "Halving" Looks Like</h4>
            
            <div className="space-y-3">
              {[
                { n: 1000, steps: 10, color: 'red' },
                { n: 100, steps: 7, color: 'orange' },
                { n: 10, steps: 4, color: 'green' },
              ].map((item) => (
                <div key={item.n} className={`p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-${item.color}-300`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">n = {item.n}</span>
                    <span className={`font-mono font-bold text-${item.color}-600`}>log₂({item.n}) ≈ {item.steps} steps</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: item.steps }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-6 bg-${item.color}-500 rounded flex-1`}
                        style={{ opacity: 1 - (i * 0.08) }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Even with {item.n} items, only {item.steps} steps needed!
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded text-center">
              <p className="text-sm font-bold text-cyan-800 dark:text-cyan-200">
                💡 10× more data? Only +3-4 more steps! That's logarithmic growth!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Halving Demo */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-6 h-6 text-teal-600" />
            Watch Halving in Action: Search 1000 Names
          </CardTitle>
          <CardDescription>See how few steps it takes to find one item among 1000</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
            {/* Controls */}
            <div className="flex justify-center gap-3 mb-6">
              <Button
                onClick={() => setHalvingStep(Math.max(0, halvingStep - 1))}
                disabled={halvingStep === 0}
                variant="outline"
                size="sm"
                className="border-teal-300"
              >
                Previous
              </Button>
              <div className="px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg border border-teal-300">
                <span className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                  Step {halvingStep + 1} / {halvingSteps.length}
                </span>
              </div>
              <Button
                onClick={() => setHalvingStep(Math.min(halvingSteps.length - 1, halvingStep + 1))}
                disabled={halvingStep === halvingSteps.length - 1}
                variant="outline"
                size="sm"
                className="border-teal-300"
              >
                Next
              </Button>
              <Button
                onClick={() => setHalvingStep(0)}
                variant="outline"
                size="sm"
                className="border-teal-300"
              >
                Reset
              </Button>
            </div>

            {/* Description */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                {halvingSteps[halvingStep].description}
              </p>
            </div>

            {/* Visual Representation */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className={`p-6 rounded-xl border-2 transition-all duration-500 ${
                  halvingStep === halvingSteps.length - 1
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-400 scale-110'
                    : 'bg-teal-100 dark:bg-teal-900/30 border-teal-400'
                }`}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-teal-700 dark:text-teal-300 mb-2">
                      {halvingSteps[halvingStep].remaining}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {halvingStep === halvingSteps.length - 1 ? 'Found! 🎉' : 'Names remaining'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Progress</span>
                  <span>Step {halvingStep} of 10</span>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${(halvingStep / 10) * 100}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">1000</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Total items</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{halvingStep}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Steps taken</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-600">~10</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Max steps (log n)</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-teal-600" />
            How to Recognize O(log n) in Code
          </CardTitle>
          <CardDescription>Learn the telltale signs of logarithmic complexity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Pattern Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedPattern('binary')}
                variant={selectedPattern === 'binary' ? 'default' : 'outline'}
                className={selectedPattern === 'binary' ? 'bg-teal-600 hover:bg-teal-700' : 'border-teal-300'}
              >
                Binary Search
              </Button>
              <Button
                onClick={() => setSelectedPattern('power')}
                variant={selectedPattern === 'power' ? 'default' : 'outline'}
                className={selectedPattern === 'power' ? 'bg-cyan-600 hover:bg-cyan-700' : 'border-cyan-300'}
              >
                Power Calculation
              </Button>
              <Button
                onClick={() => setSelectedPattern('tree')}
                variant={selectedPattern === 'tree' ? 'default' : 'outline'}
                className={selectedPattern === 'tree' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                Tree Height
              </Button>
            </div>

            {/* Pattern Display */}
            <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-teal-300">
              <h3 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-4 text-center">
                {currentPattern.name}
              </h3>

              {/* Code */}
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden mb-4">
                <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b">
                  <span className="text-xs text-slate-600 dark:text-slate-400">{selectedPattern}.js</span>
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto">
                  <code>{currentPattern.code}</code>
                </pre>
              </div>

              {/* Analysis */}
              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-teal-300">
                  <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">🔍 The Pattern</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {currentPattern.pattern}
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg border-l-4 border-teal-500">
                  <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">💡 How to Recognize</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {currentPattern.recognition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* O(n log n) Visualization - Merge Sort Tree */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Binary className="w-6 h-6 text-teal-600" />
            Understanding O(n log n): The Merge Sort Tree
          </CardTitle>
          <CardDescription>See how O(log n) becomes O(n log n) when processing all elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            {/* Tournament Bracket Analogy */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-teal-200 dark:border-teal-700">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Think of it Like a Basketball Tournament! 🏀
              </h4>
              
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-teal-300 mb-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  <strong>8 teams</strong> compete. Each round, teams play and winners advance. 
                  How many total games?
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
                    <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Round 1 (Quarter Finals)</h5>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {[1, 2, 3, 4].map((game) => (
                        <div key={game} className="px-3 py-1 bg-purple-500 text-white rounded text-xs font-bold">
                          Game {game}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-purple-700 dark:text-purple-300">
                      8 teams → 4 games (each team plays once)
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Round 2 (Semi Finals)</h5>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {[1, 2].map((game) => (
                        <div key={game} className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-bold">
                          Game {game}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      4 teams → 2 games (each team plays once)
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                    <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">Round 3 (Finals)</h5>
                    <div className="flex gap-2 flex-wrap mb-2">
                      <div className="px-3 py-1 bg-green-500 text-white rounded text-xs font-bold">
                        Championship Game
                      </div>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      2 teams → 1 game (final match!)
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg">
                  <p className="text-sm font-bold text-teal-900 dark:text-teal-100 mb-2">
                    📊 Total Work Calculation
                  </p>
                  <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                    <p><strong>Rounds (levels):</strong> 3 = log₂(8)</p>
                    <p><strong>Teams playing per round:</strong> 8 (everyone plays at each level!)</p>
                    <p><strong>Total games:</strong> 8 - 1 = 7 = <strong>n - 1 ≈ n</strong></p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm font-bold text-teal-900 dark:text-teal-100 mb-2">
                  🎯 Merge Sort is Exactly This!
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>Merge Sort splits n elements into a tree with log n levels.</strong> At EACH level, 
                  we process ALL n elements (merging them back). So: <strong>log n levels × n work per level = O(n log n)</strong>
                </p>
              </div>
            </div>

            {/* Interactive Step-by-Step Merge Sort */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 text-center text-lg">
                🌳 Interactive Merge Sort: Step-by-Step O(n log n)
              </h4>

              {/* Controls */}
              <div className="flex justify-center gap-3 mb-6">
                <Button
                  onClick={() => setMergeSortStep(Math.max(0, mergeSortStep - 1))}
                  disabled={mergeSortStep === 0}
                  variant="outline"
                  size="sm"
                  className="border-blue-300"
                >
                  Previous
                </Button>
                <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg border border-blue-300">
                  <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Step {mergeSortStep + 1} / {mergeSortSteps.length}
                  </span>
                </div>
                <Button
                  onClick={() => setMergeSortStep(Math.min(mergeSortSteps.length - 1, mergeSortStep + 1))}
                  disabled={mergeSortStep === mergeSortSteps.length - 1}
                  variant="outline"
                  size="sm"
                  className="border-blue-300"
                >
                  Next
                </Button>
                <Button
                  onClick={() => setMergeSortStep(0)}
                  variant="outline"
                  size="sm"
                  className="border-blue-300"
                >
                  Reset
                </Button>
              </div>

              {/* Description */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                  {currentMergeStep.description}
                </p>
              </div>

              {/* Current State Visual */}
              <div className="flex justify-center gap-3 flex-wrap mb-6">
                {currentMergeStep.data.map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-2">
                    <div className="flex gap-1">
                      {group.map((num, numIdx) => {
                        const isHighlighted = currentMergeStep.highlight?.includes(groupIdx);
                        const phaseColor = currentMergeStep.phase === 'start' ? 'purple' :
                                         currentMergeStep.phase === 'split' ? 'blue' :
                                         currentMergeStep.phase === 'merge' ? 'green' : 'teal';
                        
                        return (
                          <div
                            key={numIdx}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                              isHighlighted
                                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white scale-110 ring-4 ring-yellow-300 animate-pulse'
                                : phaseColor === 'purple'
                                ? 'bg-purple-500 text-white'
                                : phaseColor === 'blue'
                                ? 'bg-blue-500 text-white'
                                : phaseColor === 'green'
                                ? 'bg-green-500 text-white'
                                : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                            } border-2 ${
                              isHighlighted ? 'border-yellow-300' : 'border-white/30'
                            }`}
                          >
                            {num}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Display */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-purple-300">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Level</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {currentMergeStep.level}
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-blue-300">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Work This Step</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {currentMergeStep.workDone}
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-green-300">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Total Work</div>
                  <div className="text-2xl font-bold text-green-600">
                    {currentMergeStep.totalWork}
                  </div>
                </div>
              </div>

              {/* Phase Indicator */}
              <div className="flex justify-center mb-4">
                <div className={`px-6 py-2 rounded-full font-bold text-sm ${
                  currentMergeStep.phase === 'start'
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                    : currentMergeStep.phase === 'split'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                    : currentMergeStep.phase === 'merge'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                    : 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200'
                }`}>
                  {currentMergeStep.phase === 'start' && '🎯 Starting'}
                  {currentMergeStep.phase === 'split' && '✂️ Splitting Down'}
                  {currentMergeStep.phase === 'merge' && '🔄 Merging Up'}
                  {currentMergeStep.phase === 'done' && '✅ Complete'}
                </div>
              </div>

              {/* Summary Box */}
              <div className="mt-6 p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-teal-400">
                <h5 className="font-bold text-teal-900 dark:text-teal-100 mb-3 text-center">
                  🧮 The O(n log n) Math
                </h5>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Levels = log₂(8)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">×</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Multiply</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">8</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Work per level (n)</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg">
                  <p className="text-center font-mono font-bold text-teal-800 dark:text-teal-200">
                    log₂(n) × n = O(n log n)
                  </p>
                </div>
                <div className="mt-3 text-xs text-center text-slate-600 dark:text-slate-400">
                  Each level processes ALL n elements. There are log n levels. Total = <strong>n log n</strong>!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recognition Rules */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-teal-600" />
            Quick Recognition Rules
          </CardTitle>
          <CardDescription>Spot O(log n) instantly with these patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-teal-50 dark:bg-teal-950/20 border-teal-300">
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                1. Dividing by 2 (or Multiplying by 2)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-teal-700 dark:text-teal-300">Most common!</strong> Look for variables being divided or multiplied by constants.
              </p>
              <div className="space-y-2">
                <pre className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
{`i *= 2;        // i goes 1, 2, 4, 8, 16...
i /= 2;        // i goes n, n/2, n/4, n/8...
mid = (L+R)/2; // Binary search pattern`}
                </pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-300">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                2. Recursive Calls on Half the Data
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-cyan-700 dark:text-cyan-300">Divide and conquer!</strong> Each recursion processes half the input.
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
{`function search(arr, L, R) {
  let mid = (L + R) / 2;
  return search(arr, L, mid); // Half!
}`}
              </pre>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                3. Tree/Graph Height Operations
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-blue-700 dark:text-blue-300">Balanced trees!</strong> Height of balanced binary tree = log n.
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
{`// Height of balanced tree with n nodes
height = log₂(n)
// Each level doubles the nodes`}
              </pre>
            </div>

            <div className="p-5 rounded-xl border-2 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                4. Eliminating Half Each Iteration
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-indigo-700 dark:text-indigo-300">Search space shrinks!</strong> Left/right pointers moving together.
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
{`while (left <= right) {
  // Check middle
  // Eliminate left or right half
  left = mid + 1;  // or
  right = mid - 1;
}`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Comparison */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-teal-600" />
            Why O(log n) is So Efficient
          </CardTitle>
          <CardDescription>See how it compares to other complexities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal-300 dark:border-teal-700">
                  <th className="p-3 text-left font-bold">n (input size)</th>
                  <th className="p-3 text-center font-bold text-emerald-600">O(log n)</th>
                  <th className="p-3 text-center font-bold text-blue-600">O(n)</th>
                  <th className="p-3 text-center font-bold text-orange-600">O(n log n)</th>
                  <th className="p-3 text-center font-bold text-red-600">O(n²)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-200 dark:divide-teal-800">
                <tr>
                  <td className="p-3 font-semibold">10</td>
                  <td className="p-3 text-center font-mono text-emerald-600">~3</td>
                  <td className="p-3 text-center font-mono text-blue-600">10</td>
                  <td className="p-3 text-center font-mono text-orange-600">~33</td>
                  <td className="p-3 text-center font-mono text-red-600">100</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">100</td>
                  <td className="p-3 text-center font-mono text-emerald-600">~7</td>
                  <td className="p-3 text-center font-mono text-blue-600">100</td>
                  <td className="p-3 text-center font-mono text-orange-600">~664</td>
                  <td className="p-3 text-center font-mono text-red-600">10,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">1,000</td>
                  <td className="p-3 text-center font-mono text-emerald-600">~10</td>
                  <td className="p-3 text-center font-mono text-blue-600">1,000</td>
                  <td className="p-3 text-center font-mono text-orange-600">~9,966</td>
                  <td className="p-3 text-center font-mono text-red-600">1,000,000</td>
                </tr>
                <tr className="bg-teal-50 dark:bg-teal-950/20">
                  <td className="p-3 font-semibold">1,000,000</td>
                  <td className="p-3 text-center font-mono text-emerald-600 font-bold">~20</td>
                  <td className="p-3 text-center font-mono text-blue-600">1,000,000</td>
                  <td className="p-3 text-center font-mono text-orange-600">~20M</td>
                  <td className="p-3 text-center font-mono text-red-600">1 trillion!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border-l-4 border-teal-500">
            <p className="text-sm font-bold text-teal-900 dark:text-teal-100 mb-2">
              🚀 The Logarithmic Superpower
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              <strong>O(log n) barely grows!</strong> From 1000 to 1,000,000 items (1000× more data), 
              log n only goes from 10 to 20 steps (2× more work). 
              That's why binary search on sorted data is so powerful - <strong>millions of items, only ~20 comparisons!</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-600" />
            Quick Reference: O(log n)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-300 dark:border-teal-700">
              <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">✅ Signs of O(log n)</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Dividing/multiplying by constant</li>
                <li>• Binary search pattern</li>
                <li>• Balanced tree operations</li>
                <li>• Eliminating half each step</li>
              </ul>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-300 dark:border-cyan-700">
              <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">⚡ Why It's Efficient</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Barely grows with input size</li>
                <li>• 2× data = +1 step</li>
                <li>• 1000× data = +10 steps</li>
                <li>• Perfect for huge datasets</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Common Algorithms</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Binary Search</li>
                <li>• Balanced Tree operations</li>
                <li>• Fast exponentiation</li>
                <li>• Heap insert/delete</li>
              </ul>
            </div>
            
            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-300 dark:border-indigo-700">
              <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">💡 Key Insight</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• log₂(n) = "How many times can you halve n?"</li>
                <li>• 1000 → 500 → 250 → ... → 1</li>
                <li>• Answer: 10 times!</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
