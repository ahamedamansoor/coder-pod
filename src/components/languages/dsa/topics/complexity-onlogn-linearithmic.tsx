'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Layers, Lightbulb, CheckCircle, Play, RotateCcw, BookOpen, TrendingUp, ChevronLeft, ChevronRight, GitBranch } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinearithmicTimeComplexity() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
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

  const initialArray = [38, 27, 43, 3];

  const steps = [
    {
      step: 1,
      array: [38, 27, 43, 3],
      phase: 'initial',
      description: '📋 Initial Array: [38, 27, 43, 3]. We need to sort this array using Merge Sort, which has O(n log n) time complexity.',
      currentLine: 1,
      divideLevel: 0,
      leftPart: [],
      rightPart: []
    },
    {
      step: 2,
      array: [38, 27, 43, 3],
      phase: 'divide',
      description: '🔪 Divide Step 1: Split array into two halves [38, 27] and [43, 3]. This is the first division (log n divisions total).',
      currentLine: 4,
      divideLevel: 1,
      leftPart: [38, 27],
      rightPart: [43, 3]
    },
    {
      step: 3,
      array: [38, 27, 43, 3],
      phase: 'divide',
      description: '🔪 Divide Step 2: Split [38, 27] into [38] and [27]. Keep dividing until we have single elements.',
      currentLine: 4,
      divideLevel: 2,
      leftPart: [38],
      rightPart: [27]
    },
    {
      step: 4,
      array: [38, 27, 43, 3],
      phase: 'merge',
      description: '🔗 Merge Step 1: Merge [38] and [27] into sorted [27, 38]. Compare and place in order.',
      currentLine: 8,
      divideLevel: 2,
      leftPart: [38],
      rightPart: [27],
      merged: [27, 38]
    },
    {
      step: 5,
      array: [27, 38, 43, 3],
      phase: 'divide',
      description: '🔪 Divide Step 3: Now split [43, 3] into [43] and [3]. Process the right half.',
      currentLine: 4,
      divideLevel: 2,
      leftPart: [43],
      rightPart: [3]
    },
    {
      step: 6,
      array: [27, 38, 43, 3],
      phase: 'merge',
      description: '🔗 Merge Step 2: Merge [43] and [3] into sorted [3, 43]. Right half now sorted.',
      currentLine: 8,
      divideLevel: 2,
      leftPart: [43],
      rightPart: [3],
      merged: [3, 43]
    },
    {
      step: 7,
      array: [27, 38, 3, 43],
      phase: 'merge',
      description: '🔗 Final Merge: Merge [27, 38] and [3, 43] into final sorted array [3, 27, 38, 43]. This takes O(n) time.',
      currentLine: 8,
      divideLevel: 1,
      leftPart: [27, 38],
      rightPart: [3, 43],
      merged: [3, 27, 38, 43]
    },
    {
      step: 8,
      array: [3, 27, 38, 43],
      phase: 'complete',
      description: '✅ Complete! Array sorted in O(n log n) time. We had log₂(4) = 2 levels of division, and O(n) work at each level.',
      currentLine: 12,
      divideLevel: 0,
      leftPart: [],
      rightPart: [],
      merged: [3, 27, 38, 43]
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function mergeSort(arr) {', active: stepData.currentLine === 1, indent: 0 },
      { line: 2, code: '  if (arr.length <= 1) return arr;', active: stepData.currentLine === 2, indent: 1 },
      { line: 3, code: '  ', active: false, indent: 1 },
      { line: 4, code: '  // Divide: Split array in half', active: stepData.currentLine === 4, indent: 1 },
      { line: 5, code: '  const mid = Math.floor(arr.length / 2);', active: stepData.currentLine === 5, indent: 1 },
      { line: 6, code: '  const left = mergeSort(arr.slice(0, mid));', active: stepData.currentLine === 6, indent: 1 },
      { line: 7, code: '  const right = mergeSort(arr.slice(mid));', active: stepData.currentLine === 7, indent: 1 },
      { line: 8, code: '  ', active: false, indent: 1 },
      { line: 9, code: '  // Conquer: Merge sorted halves', active: stepData.currentLine === 8, indent: 1 },
      { line: 10, code: '  return merge(left, right);', active: stepData.currentLine === 8, indent: 1 },
      { line: 11, code: '}', active: false, indent: 0 },
      { line: 12, code: '', active: false, indent: 0 },
      { line: 13, code: '// Sorted!', active: stepData.currentLine === 12, indent: 0 }
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    setCurrentStep(0);

    const speedDelay = animationSpeed === 'slow' ? 2000 : animationSpeed === 'fast' ? 800 : 1200;

    mergeSortSteps.forEach((step, index) => {
      setTimeout(() => {
        if (index < mergeSortSteps.length) {
          goToStep(index);
        }
        
        if (index === mergeSortSteps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
        }
      }, index * speedDelay);
    });
  };

  const handleNext = () => {
    if (currentStep < mergeSortSteps.length - 1) {
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
        icon={Layers}
        category="DSA · Time Complexity"
        title="O(n log n) - Linearithmic Time Complexity"
        description="The sweet spot between linear and quadratic - efficient sorting territory"
        colorTheme="orange"
        badges={[
          { label: 'O(n log n)', variant: 'default' },
          { label: 'Linearithmic', variant: 'default' },
          { label: 'Efficient Sorting', variant: 'success' },
        ]}
      />

      {/* What is O(n log n)? */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600" />
            What is O(n log n) Linearithmic Time?
          </CardTitle>
          <CardDescription>
            The perfect balance - divide and conquer algorithms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(n log n) means "linearithmic time"</strong> - it's <strong>faster than O(n²)</strong> but 
                <strong> slower than O(n)</strong>. You do O(n) work at each of <strong>log n levels</strong>.
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-300 dark:border-purple-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 📚 Organizing a Library
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Divide:</strong> Split books into smaller piles (log n divisions)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Sort each pile:</strong> At each level, touch all n books once</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Merge back:</strong> Combine sorted piles → O(n) work × log n levels = O(n log n)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm font-bold text-purple-900 dark:text-purple-100 mb-2">
                  🎯 Why O(n log n)?
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Merge Sort divides array into halves (log n times), then merges them back (n work per level).
                  <br />
                  <strong>Total: n work × log n levels = O(n log n)</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="text-center mb-2">
                <Badge variant="outline" className="mb-2">Slower</Badge>
                <div className="text-2xl font-bold text-blue-600">O(n²)</div>
              </div>
              <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                1000 items = 1,000,000 ops
              </p>
            </div>

            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-4 border-purple-500 dark:border-purple-600">
              <div className="text-center mb-2">
                <Badge className="mb-2 bg-purple-600">Sweet Spot!</Badge>
                <div className="text-2xl font-bold text-purple-600">O(n log n)</div>
              </div>
              <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                1000 items ≈ 10,000 ops
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="text-center mb-2">
                <Badge variant="outline" className="mb-2">Faster</Badge>
                <div className="text-2xl font-bold text-green-600">O(n)</div>
              </div>
              <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                1000 items = 1,000 ops
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrammatic Example */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-purple-600" />
            Visual Breakdown: How Merge Sort Works
          </CardTitle>
          <CardDescription>Step-by-step diagram showing divide and conquer on [38, 27, 43, 3]</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            
            {/* The Complete Tree View */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-6 text-center">
                📊 Complete Merge Sort Tree
              </h4>
              
              <div className="space-y-6">
                {/* Level 0 - Original */}
                <div className="text-center">
                  <div className="inline-block">
                    <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">Level 0 (Original)</div>
                    <div className="flex gap-2 p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg border-2 border-purple-400">
                      {[38, 27, 43, 3].map((num, idx) => (
                        <div key={idx} className="w-12 h-12 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-purple-900 dark:text-purple-100 border border-purple-300">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="text-3xl text-purple-600">↓</div>
                </div>

                {/* Level 1 - Split into 2 */}
                <div className="flex justify-center gap-12">
                  <div>
                    <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2 text-center">Split Left</div>
                    <div className="flex gap-2 p-3 bg-orange-100 dark:bg-orange-900/40 rounded-lg border-2 border-orange-400">
                      {[38, 27].map((num, idx) => (
                        <div key={idx} className="w-12 h-12 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-orange-900 dark:text-orange-100 border border-orange-300">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 text-center">Split Right</div>
                    <div className="flex gap-2 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg border-2 border-blue-400">
                      {[43, 3].map((num, idx) => (
                        <div key={idx} className="w-12 h-12 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-blue-900 dark:text-blue-100 border border-blue-300">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center gap-48">
                  <div className="text-2xl text-orange-600">↓</div>
                  <div className="text-2xl text-blue-600">↓</div>
                </div>

                {/* Level 2 - Individual Elements */}
                <div className="flex justify-center gap-6">
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 text-center">Single</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg border-2 border-green-400">
                      <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-green-900 dark:text-green-100 border border-green-300">
                        38
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 text-center">Single</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg border-2 border-green-400">
                      <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-green-900 dark:text-green-100 border border-green-300">
                        27
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 text-center">Single</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg border-2 border-green-400">
                      <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-green-900 dark:text-green-100 border border-green-300">
                        43
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 text-center">Single</div>
                    <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg border-2 border-green-400">
                      <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-green-900 dark:text-green-100 border border-green-300">
                        3
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Up - Merging */}
                <div className="text-center">
                  <div className="text-2xl text-cyan-600 font-bold">⬇ Now Merge Back Up! ⬇</div>
                </div>

                {/* Level 2 to 1 - Merge pairs */}
                <div className="flex justify-center gap-12">
                  <div>
                    <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2 text-center">Merge & Sort</div>
                    <div className="flex gap-2 p-3 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg border-2 border-cyan-400">
                      {[27, 38].map((num, idx) => (
                        <div key={idx} className="w-12 h-12 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-cyan-900 dark:text-cyan-100 border border-cyan-300">
                          {num}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-center mt-1 text-slate-600 dark:text-slate-400">38, 27 → 27, 38</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2 text-center">Merge & Sort</div>
                    <div className="flex gap-2 p-3 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg border-2 border-cyan-400">
                      {[3, 43].map((num, idx) => (
                        <div key={idx} className="w-12 h-12 bg-white dark:bg-slate-900 rounded flex items-center justify-center font-mono font-bold text-cyan-900 dark:text-cyan-100 border border-cyan-300">
                          {num}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-center mt-1 text-slate-600 dark:text-slate-400">43, 3 → 3, 43</div>
                  </div>
                </div>

                {/* Arrow Up - Final Merge */}
                <div className="flex justify-center">
                  <div className="text-3xl text-emerald-600">↓</div>
                </div>

                {/* Final Result */}
                <div className="text-center">
                  <div className="inline-block">
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Final Merge & Sort ✅</div>
                    <div className="flex gap-2 p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg border-4 border-emerald-500">
                      {[3, 27, 38, 43].map((num, idx) => (
                        <div key={idx} className="w-14 h-14 bg-emerald-500 text-white rounded flex items-center justify-center font-mono font-bold text-lg shadow-lg">
                          {num}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-center mt-2 font-semibold text-emerald-700 dark:text-emerald-300">
                      Sorted! 🎉
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why O(n log n) Explanation */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                🧮 Why is this O(n log n)?
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-300 dark:border-indigo-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">1️⃣</div>
                    <div>
                      <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                        Divide Phase: log₂(n) levels
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We split the array in half repeatedly until we have single elements.
                        <br />
                        <strong>4 items → 2 levels of splits (log₂(4) = 2)</strong>
                      </p>
                      <div className="mt-2 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded">
                        Level 0: [38,27,43,3] - 4 items<br />
                        Level 1: [38,27] [43,3] - 2 groups<br />
                        Level 2: [38] [27] [43] [3] - 4 singles
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-300 dark:border-indigo-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">2️⃣</div>
                    <div>
                      <h5 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                        Merge Phase: O(n) work per level
                      </h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        At each level, we merge all n elements back together.
                        <br />
                        <strong>Every element is touched once per level</strong>
                      </p>
                      <div className="mt-2 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded">
                        Level 2→1: Merge 4 singles into 2 pairs (4 ops)<br />
                        Level 1→0: Merge 2 pairs into 1 array (4 ops)<br />
                        Total per level: 4 operations
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-purple-500">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                        Final Calculation
                      </h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>log₂(n) levels</strong> × <strong>O(n) work per level</strong> = <strong className="text-purple-600 dark:text-purple-400">O(n log n)</strong>
                      </p>
                      <div className="mt-2 text-xs bg-white dark:bg-slate-900 p-2 rounded">
                        For 4 items: 2 levels × 4 operations = 8 total operations<br />
                        For 8 items: 3 levels × 8 operations = 24 total operations<br />
                        For 1000 items: 10 levels × 1000 operations ≈ 10,000 operations! 🚀
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Visual Animation with Step-by-Step */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
              <GitBranch className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            How It Works: Interactive Merge Sort Animation
          </CardTitle>
          <CardDescription>Step through every split and merge operation with detailed work tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            
            {/* New Step-by-Step Controls */}
            <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 text-center">
                📊 Detailed Step-by-Step Visualization
              </h4>
              
              {/* Controls */}
              <div className="flex justify-center gap-3 mb-6">
                <Button
                  onClick={() => setMergeSortStep(Math.max(0, mergeSortStep - 1))}
                  disabled={mergeSortStep === 0}
                  variant="outline"
                  size="sm"
                  className="border-purple-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg border border-purple-300">
                  <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                    Step {mergeSortStep + 1} / {mergeSortSteps.length}
                  </span>
                </div>
                <Button
                  onClick={() => setMergeSortStep(Math.min(mergeSortSteps.length - 1, mergeSortStep + 1))}
                  disabled={mergeSortStep === mergeSortSteps.length - 1}
                  variant="outline"
                  size="sm"
                  className="border-purple-300"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  onClick={() => setMergeSortStep(0)}
                  variant="outline"
                  size="sm"
                  className="border-purple-300"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
              </div>

              {/* Description */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm text-purple-900 dark:text-purple-100 font-medium">
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
              <div className="mt-6 p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-purple-400">
                <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-3 text-center">
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
                <div className="mt-4 p-3 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg">
                  <p className="text-center font-mono font-bold text-purple-800 dark:text-purple-200">
                    log₂(n) × n = O(n log n)
                  </p>
                </div>
                <div className="mt-3 text-xs text-center text-slate-600 dark:text-slate-400">
                  Each level processes ALL n elements. There are log n levels. Total = <strong>n log n</strong>!
                </div>
              </div>
            </div>

            {/* Original Auto-Play Animation Controls */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handlePlay}
                  disabled={isAnimating}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isAnimating ? 'Playing...' : 'Play Animation'}
                </Button>
                <Button
                  onClick={handleReset}
                  disabled={isAnimating}
                  variant="outline"
                  className="border-indigo-300 dark:border-indigo-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Animation Speed Controls */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">Animation Speed:</span>
                <div className="flex gap-2">
                  {(['slow', 'normal', 'fast'] as const).map((speed) => (
                    <label key={speed} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="speed"
                        value={speed}
                        checked={animationSpeed === speed}
                        onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                        className="w-4 h-4 text-indigo-600 border-indigo-300 focus:ring-indigo-500"
                        disabled={isAnimating}
                      />
                      <span className="text-sm text-indigo-800 dark:text-indigo-200 capitalize">{speed}</span>
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
                    className="border-indigo-300 dark:border-indigo-700"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg border border-indigo-300 dark:border-indigo-700">
                    <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                      Step {currentStep + 1} of {mergeSortSteps.length}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={isAnimating || currentStep === mergeSortSteps.length - 1}
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 dark:border-indigo-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Current Step Description */}
            {currentStep >= 0 && mergeSortSteps[currentStep] && (
              <div className="mb-6 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg border-l-4 border-indigo-500">
                <p className="text-sm text-indigo-900 dark:text-indigo-100 font-medium">
                  {mergeSortSteps[currentStep].description}
                </p>
              </div>
            )}

            {/* Detailed Array Visualization - Same as Step-by-Step */}
            {currentStep >= 0 && mergeSortSteps[currentStep] && (
              <div className="mb-6">
                {/* Current State Visual */}
                <div className="flex justify-center gap-3 flex-wrap mb-6">
                  {mergeSortSteps[currentStep].data.map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-2">
                      <div className="flex gap-1">
                        {group.map((num, numIdx) => {
                          const isHighlighted = mergeSortSteps[currentStep].highlight?.includes(groupIdx);
                          const phaseColor = mergeSortSteps[currentStep].phase === 'start' ? 'purple' :
                                           mergeSortSteps[currentStep].phase === 'split' ? 'blue' :
                                           mergeSortSteps[currentStep].phase === 'merge' ? 'green' : 'teal';
                          
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
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-purple-300">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Level</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {mergeSortSteps[currentStep].level}
                    </div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-blue-300">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Work This Step</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {mergeSortSteps[currentStep].workDone}
                    </div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-center border-2 border-green-300">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Total Work</div>
                    <div className="text-2xl font-bold text-green-600">
                      {mergeSortSteps[currentStep].totalWork}
                    </div>
                  </div>
                </div>

                {/* Phase Indicator */}
                <div className="flex justify-center">
                  <div className={`px-6 py-2 rounded-full font-bold text-sm ${
                    mergeSortSteps[currentStep].phase === 'start'
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                      : mergeSortSteps[currentStep].phase === 'split'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                      : mergeSortSteps[currentStep].phase === 'merge'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                      : 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200'
                  }`}>
                    {mergeSortSteps[currentStep].phase === 'start' && '🎯 Starting'}
                    {mergeSortSteps[currentStep].phase === 'split' && '✂️ Splitting Down'}
                    {mergeSortSteps[currentStep].phase === 'merge' && '🔄 Merging Up'}
                    {mergeSortSteps[currentStep].phase === 'done' && '✅ Complete'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Common O(n log n) Operations */}
      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Common O(n log n) Algorithms
          </CardTitle>
          <CardDescription>The most efficient general-purpose sorting algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                1. Merge Sort
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-purple-700 dark:text-purple-300">Why O(n log n):</strong> Always divides array in half (log n levels), 
                merges n elements at each level. Stable sort, predictable performance.
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
                Best: O(n log n) | Average: O(n log n) | Worst: O(n log n)
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                2. Quick Sort (Average Case)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-blue-700 dark:text-blue-300">Why O(n log n):</strong> Partitions array around pivot (log n levels on average), 
                processes n elements at each level. Fast in practice!
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
                Best: O(n log n) | Average: O(n log n) | Worst: O(n²) ⚠️
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                3. Heap Sort
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-green-700 dark:text-green-300">Why O(n log n):</strong> Build heap (O(n)), then extract n elements, 
                each extraction takes O(log n). Total: O(n log n).
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2 rounded">
                Best: O(n log n) | Average: O(n log n) | Worst: O(n log n)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why O(n log n) is Special */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-amber-600" />
            Why O(n log n) is the Sorting Lower Bound
          </CardTitle>
          <CardDescription>The best you can do for comparison-based sorting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">🎯 Proven Lower Bound</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                It's mathematically proven that <strong>no comparison-based sorting algorithm</strong> can do better than 
                O(n log n) in the worst case!
              </p>
              <div className="text-xs text-amber-800 dark:text-amber-200 space-y-1">
                <div>• Sorting n items requires log₂(n!) comparisons</div>
                <div>• log₂(n!) ≈ n log₂(n) by Stirling's approximation</div>
                <div>• Therefore, O(n log n) is the best possible!</div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">⚡ But Wait... Counting Sort is O(n)!</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Yes! <strong>Non-comparison sorts</strong> like Counting Sort, Radix Sort, and Bucket Sort can be O(n), 
                but they have special requirements (limited range, extra space, etc.). They don't use comparisons!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ When to Use O(n log n)</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  General-purpose sorting of any data type with comparison function. Most versatile!
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎓 Real World Use</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  JavaScript's Array.sort(), Python's sorted(), Java's Arrays.sort() all use O(n log n) algorithms!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600" />
            Understanding O(n log n) in Practice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Excellent Performance</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                O(n log n) is very efficient! Can sort millions of items in seconds. The "go-to" for sorting.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📊 Growth is Gentle</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                log n grows very slowly. Even with 1 billion items, log₂(1B) ≈ 30. So 1B × 30 is manageable!
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Interview Favorite</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                "Sort this array" → Think O(n log n). Merge Sort for stability, Quick Sort for speed!
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300 dark:border-orange-700">
              <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Divide & Conquer</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                O(n log n) often means "divide and conquer" - split problem, solve recursively, combine!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
