'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw,
  Target, AlertCircle, CheckCircle, Copy, 
  Hash, TrendingUp, Sparkles, Users
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function FindAllDuplicates() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Problem data - Array with duplicates
  const testArray = [4, 3, 2, 7, 8, 2, 3, 1];
  
  // Find All Duplicates - 33 Granular Steps
  const steps = [
    // Initialization (3 steps)
    { step: 1, index: -1, currentNum: null, map: {}, duplicates: [], currentLine: 1, action: 'init', description: '📋 Initialize: Start finding all duplicates in array', checking: null },
    { step: 2, index: -1, currentNum: null, map: {}, duplicates: [], currentLine: 2, action: 'init', description: '📋 Initialize: Create empty map = {} to track frequencies', checking: null },
    { step: 3, index: -1, currentNum: null, map: {}, duplicates: [], currentLine: 3, action: 'init', description: '📋 Initialize: Create duplicates = [] to store results', checking: null },
    
    // Loop start
    { step: 4, index: -1, currentNum: null, map: {}, duplicates: [], currentLine: 5, action: 'loop-start', description: '🔄 Loop: Start iterating through array [4,3,2,7,8,2,3,1]', checking: null },
    
    // Index 0: num=4
    { step: 5, index: 0, currentNum: 4, map: {}, duplicates: [], currentLine: 6, action: 'examine', description: '📍 Index 0: Access nums[0] = 4', checking: null },
    { step: 6, index: 0, currentNum: 4, map: {}, duplicates: [], currentLine: 7, action: 'check', description: '🔍 Check: Is 4 in map? NO (first occurrence)', checking: '4' },
    { step: 7, index: 0, currentNum: 4, map: {'4': 1}, duplicates: [], currentLine: 8, action: 'update', description: '✅ Update: map[4] = 1 (mark as seen once)', checking: null },
    
    // Index 1: num=3
    { step: 8, index: 1, currentNum: 3, map: {'4': 1}, duplicates: [], currentLine: 6, action: 'examine', description: '📍 Index 1: Access nums[1] = 3', checking: null },
    { step: 9, index: 1, currentNum: 3, map: {'4': 1}, duplicates: [], currentLine: 7, action: 'check', description: '🔍 Check: Is 3 in map? NO (first occurrence)', checking: '3' },
    { step: 10, index: 1, currentNum: 3, map: {'4': 1, '3': 1}, duplicates: [], currentLine: 8, action: 'update', description: '✅ Update: map[3] = 1', checking: null },
    
    // Index 2: num=2
    { step: 11, index: 2, currentNum: 2, map: {'4': 1, '3': 1}, duplicates: [], currentLine: 6, action: 'examine', description: '📍 Index 2: Access nums[2] = 2', checking: null },
    { step: 12, index: 2, currentNum: 2, map: {'4': 1, '3': 1}, duplicates: [], currentLine: 7, action: 'check', description: '🔍 Check: Is 2 in map? NO (first occurrence)', checking: '2' },
    { step: 13, index: 2, currentNum: 2, map: {'4': 1, '3': 1, '2': 1}, duplicates: [], currentLine: 8, action: 'update', description: '✅ Update: map[2] = 1', checking: null },
    
    // Index 3: num=7
    { step: 14, index: 3, currentNum: 7, map: {'4': 1, '3': 1, '2': 1}, duplicates: [], currentLine: 6, action: 'examine', description: '📍 Index 3: Access nums[3] = 7', checking: null },
    { step: 15, index: 3, currentNum: 7, map: {'4': 1, '3': 1, '2': 1}, duplicates: [], currentLine: 7, action: 'check', description: '🔍 Check: Is 7 in map? NO (first occurrence)', checking: '7' },
    { step: 16, index: 3, currentNum: 7, map: {'4': 1, '3': 1, '2': 1, '7': 1}, duplicates: [], currentLine: 8, action: 'update', description: '✅ Update: map[7] = 1', checking: null },
    
    // Index 4: num=8
    { step: 17, index: 4, currentNum: 8, map: {'4': 1, '3': 1, '2': 1, '7': 1}, duplicates: [], currentLine: 6, action: 'examine', description: '📍 Index 4: Access nums[4] = 8', checking: null },
    { step: 18, index: 4, currentNum: 8, map: {'4': 1, '3': 1, '2': 1, '7': 1}, duplicates: [], currentLine: 7, action: 'check', description: '🔍 Check: Is 8 in map? NO (first occurrence)', checking: '8' },
    { step: 19, index: 4, currentNum: 8, map: {'4': 1, '3': 1, '2': 1, '7': 1, '8': 1}, duplicates: [], currentLine: 8, action: 'update', description: '✅ Update: map[8] = 1', checking: null },
    
    // Index 5: num=2 (DUPLICATE!)
    { step: 20, index: 5, currentNum: 2, map: {'4': 1, '3': 1, '2': 1, '7': 1, '8': 1}, duplicates: [], currentLine: 6, action: 'examine', description: '📍 Index 5: Access nums[5] = 2', checking: null },
    { step: 21, index: 5, currentNum: 2, map: {'4': 1, '3': 1, '2': 1, '7': 1, '8': 1}, duplicates: [], currentLine: 7, action: 'check', description: '🔍 Check: Is 2 in map? YES! (seen before at index 2)', checking: '2' },
    { step: 22, index: 5, currentNum: 2, map: {'4': 1, '3': 1, '2': 2, '7': 1, '8': 1}, duplicates: [], currentLine: 10, action: 'compare', description: '⚖️ Compare: map[2] === 1? YES! First duplicate occurrence', checking: '2' },
    { step: 23, index: 5, currentNum: 2, map: {'4': 1, '3': 1, '2': 2, '7': 1, '8': 1}, duplicates: [2], currentLine: 11, action: 'found', description: '🎯 Found: Duplicate 2! Add to duplicates → [2]', checking: null },
    { step: 24, index: 5, currentNum: 2, map: {'4': 1, '3': 1, '2': 2, '7': 1, '8': 1}, duplicates: [2], currentLine: 13, action: 'update', description: '✅ Update: Increment map[2] = 2', checking: null },
    
    // Index 6: num=3 (DUPLICATE!)
    { step: 25, index: 6, currentNum: 3, map: {'4': 1, '3': 1, '2': 2, '7': 1, '8': 1}, duplicates: [2], currentLine: 6, action: 'examine', description: '📍 Index 6: Access nums[6] = 3', checking: null },
    { step: 26, index: 6, currentNum: 3, map: {'4': 1, '3': 1, '2': 2, '7': 1, '8': 1}, duplicates: [2], currentLine: 7, action: 'check', description: '🔍 Check: Is 3 in map? YES! (seen before at index 1)', checking: '3' },
    { step: 27, index: 6, currentNum: 3, map: {'4': 1, '3': 1, '2': 2, '7': 1, '8': 1}, duplicates: [2], currentLine: 10, action: 'compare', description: '⚖️ Compare: map[3] === 1? YES! First duplicate occurrence', checking: '3' },
    { step: 28, index: 6, currentNum: 3, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1}, duplicates: [2, 3], currentLine: 11, action: 'found', description: '🎯 Found: Duplicate 3! Add to duplicates → [2,3]', checking: null },
    { step: 29, index: 6, currentNum: 3, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1}, duplicates: [2, 3], currentLine: 13, action: 'update', description: '✅ Update: Increment map[3] = 2', checking: null },
    
    // Index 7: num=1
    { step: 30, index: 7, currentNum: 1, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1}, duplicates: [2, 3], currentLine: 6, action: 'examine', description: '📍 Index 7: Access nums[7] = 1 (last element)', checking: null },
    { step: 31, index: 7, currentNum: 1, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1}, duplicates: [2, 3], currentLine: 7, action: 'check', description: '🔍 Check: Is 1 in map? NO (first occurrence)', checking: '1' },
    { step: 32, index: 7, currentNum: 1, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1, '1': 1}, duplicates: [2, 3], currentLine: 8, action: 'update', description: '✅ Update: map[1] = 1', checking: null },
    
    // Termination (2 steps)
    { step: 33, index: -1, currentNum: null, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1, '1': 1}, duplicates: [2, 3], currentLine: 16, action: 'result', description: '🎯 Return: duplicates = [2,3] - Found all duplicates!', checking: null },
    { step: 34, index: -1, currentNum: null, map: {'4': 1, '3': 2, '2': 2, '7': 1, '8': 1, '1': 1}, duplicates: [2, 3], currentLine: 17, action: 'done', description: '✅ Complete! Successfully found all duplicates in O(n) time!', checking: null },
  ];

  // Code viewer function
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const mapStr = Object.entries(stepData.map).map(([k, v]) => `${k}:${v}`).join(', ');
    const currentNumInMap = stepData.currentNum !== null && stepData.map[stepData.currentNum];
    
    return [
      { line: 1, code: 'function findAllDuplicates(nums) {', active: stepData.currentLine === 1, indent: 0, values: stepData.currentLine >= 1 ? `nums=[${testArray.join(',')}]` : '' },
      { line: 2, code: '  let map = {};', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine >= 2 ? `map={${mapStr}}` : '' },
      { line: 3, code: '  let duplicates = [];', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine >= 3 ? `duplicates=[${stepData.duplicates.join(',')}]` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  for (let i = 0; i < nums.length; i++) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine >= 5 && stepData.index >= 0 ? `i=${stepData.index}, i < ${testArray.length}? ${stepData.index < testArray.length ? 'true' : 'false'}` : '' },
      { line: 6, code: '    let num = nums[i];', active: stepData.currentLine === 6, indent: 2, values: stepData.currentNum !== null ? `num=nums[${stepData.index}]=${stepData.currentNum}` : '' },
      { line: 7, code: '    ', active: false, indent: 2 },
      { line: 8, code: '    if (map[num]) {', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 && stepData.currentNum !== null ? `map[${stepData.currentNum}]=${currentNumInMap || 'undefined'}, ${currentNumInMap ? 'true (exists)' : 'false'}` : '' },
      { line: 9, code: '      // Duplicate found!', active: stepData.currentLine === 10, indent: 3 },
      { line: 10, code: '      if (map[num] === 1) {', active: stepData.currentLine === 10, indent: 3, values: stepData.currentLine === 10 && stepData.currentNum !== null ? `map[${stepData.currentNum}]==${currentNumInMap}? ${currentNumInMap === 1 ? 'true (first dup)' : 'false'}` : '' },
      { line: 11, code: '        duplicates.push(num);', active: stepData.currentLine === 11, indent: 4, values: stepData.currentLine === 11 && stepData.currentNum !== null ? `push ${stepData.currentNum} → [${stepData.duplicates.join(',')}]` : '' },
      { line: 12, code: '      }', active: false, indent: 3 },
      { line: 13, code: '      map[num]++;', active: stepData.currentLine === 13, indent: 3, values: stepData.currentLine === 13 && stepData.currentNum !== null ? `map[${stepData.currentNum}]=${currentNumInMap} → ${(currentNumInMap || 0) + 1}` : '' },
      { line: 14, code: '    } else {', active: false, indent: 2 },
      { line: 15, code: '      map[num] = 1;', active: stepData.currentLine === 8, indent: 3, values: stepData.currentLine === 8 && stepData.currentNum !== null ? `map[${stepData.currentNum}]=1 (first seen)` : '' },
      { line: 16, code: '    }', active: false, indent: 2 },
      { line: 17, code: '  }', active: false, indent: 1 },
      { line: 18, code: '  ', active: false, indent: 1 },
      { line: 19, code: '  return duplicates;', active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 ? `return [${stepData.duplicates.join(',')}]` : '' },
      { line: 20, code: '}', active: stepData.currentLine === 17, indent: 0 },
    ];
  };

  // Navigation functions
  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = { slow: 2000, normal: 1200, fast: 700 };
    const delay = speedMap[animationSpeed];

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnimating(false), 2000);
        }
      }, index * delay);
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
    setCurrentStep(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Copy}
        category="DSA · Arrays · Mixed Array Problems"
        title="Find All Duplicates"
        description="Identify all elements that appear more than once in an array"
        colorTheme="purple"
        badges={[
          { label: 'Hash Map', variant: 'default' },
          { label: 'O(n) Time', variant: 'success' },
          { label: 'O(n) Space', variant: 'secondary' },
        ]}
      />

      {/* Problem Definition */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem
          </CardTitle>
          <CardDescription>
            Finding elements that appear multiple times
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Think of it Like Taking Attendance! 📋
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-purple-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine a teacher calling out student IDs. If someone answers <strong>twice</strong>, 
                they're a <strong>duplicate</strong>! We need to track who we've already seen.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-900 dark:text-purple-100">Example Array: [4, 3, 2, 7, 8, 2, 3, 1]</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <p>• First time seeing <strong>2</strong> at index 2 → Mark as seen ✓</p>
                    <p>• Second time seeing <strong>2</strong> at index 5 → DUPLICATE! 🎯</p>
                    <p>• Same for <strong>3</strong>: indices 1 and 6</p>
                    <p className="font-bold text-purple-700 dark:text-purple-300">→ Result: [2, 3]</p>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">
                    💡 Strategy: Use a Hash Map to remember what we've seen before!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm font-bold text-purple-900 dark:text-purple-100 mb-2">
                🎯 Key Algorithm: Hash Map Frequency Counter
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                For each element: Check if already in map.
                <br />
                If YES and count=1 → Add to duplicates list (first duplicate occurrence)
                <br />
                If NO → Add to map with count=1
              </p>
            </div>
          </div>

          {/* Input/Output Example */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300">
              <div className="text-xs font-semibold text-slate-500 mb-2">INPUT</div>
              <div className="space-y-2 text-sm">
                <div className="font-mono text-purple-700 dark:text-purple-300">[4, 3, 2, 7, 8, 2, 3, 1]</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Array with some duplicate values
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-500">
              <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">OUTPUT</div>
              <div className="text-sm">
                <div className="font-mono font-bold text-purple-800 dark:text-purple-200">
                  [2, 3]
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  ✅ Elements that appeared more than once
                </p>
              </div>
            </div>
          </div>

          {/* Important Concepts Alert */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Hash Map</strong> - Stores frequency counts (O(1) lookup)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Single Pass</strong> - O(n) time, visit each element once</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>First duplicate check</strong> - Only add when count = 1 (avoid duplicates in result)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Space tradeoff</strong> - Use O(n) extra space for O(n) time</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Algorithm Strategy */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Algorithm Strategy
          </CardTitle>
          <CardDescription>Step-by-step approach using hash map</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Initialize Data Structures</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Setup:</div>
                  <div className="font-mono text-sm">
                    <div>map = {'{}'} → track frequencies</div>
                    <div>duplicates = [] → store results</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Check Each Element</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Logic:</div>
                  <div className="text-sm">
                    For each num in array:
                    <br />
                    <span className="text-xs">→ Check if num already in map</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <div className="font-semibold text-green-900 dark:text-green-100 mb-2">Handle Duplicates</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Action:</div>
                  <div className="text-sm">
                    If in map AND count = 1:
                    <br />
                    <span className="text-xs">→ Add to duplicates array</span>
                    <br />
                    <span className="text-xs">→ Increment count</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <div className="font-semibold text-orange-900 dark:text-orange-100 mb-2">First Occurrence</div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">If NOT in map:</div>
                  <div className="text-sm">
                    map[num] = 1
                    <br />
                    <span className="text-xs">→ Mark as seen once</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Interactive Animation with Innovative Visualizations */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Play className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation with Frequency Tracker
          </CardTitle>
          <CardDescription>Watch the hash map track duplicates in real-time</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-purple-300">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            {(['slow', 'normal', 'fast'] as const).map((speed) => (
              <label key={speed} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="speed"
                  value={speed}
                  checked={animationSpeed === speed}
                  onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
                  disabled={isAnimating}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
              className="border-purple-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
              className="border-purple-300"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">findDuplicates.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-400 dark:border-purple-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-purple-600 dark:text-purple-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Index:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].index >= 0 ? steps[currentStep].index : '-'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Current:</span>
                      <span className="font-semibold text-pink-600 dark:text-pink-400">{steps[currentStep].currentNum ?? 'null'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Duplicates Found:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].duplicates.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-sm ${
              steps[currentStep].action === 'done'
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : steps[currentStep].action === 'found'
                ? 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-300 dark:border-orange-700'
                : steps[currentStep].action === 'init'
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
                : 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-300 dark:border-purple-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${
                    steps[currentStep].action === 'done' ? 'bg-green-600' :
                    steps[currentStep].action === 'found' ? 'bg-orange-600' :
                    steps[currentStep].action === 'init' ? 'bg-blue-600' :
                    steps[currentStep].action === 'check' ? 'bg-pink-600' : 'bg-purple-600'
                  }`}>
                    {steps[currentStep].action === 'done' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'found' ? (
                      <Sparkles className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'init' ? (
                      <Target className="w-6 h-6 text-white" />
                    ) : (
                      <Hash className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Start'}
                      {steps[currentStep].action === 'examine' && '📍 Accessing Element'}
                      {steps[currentStep].action === 'check' && '🔍 Checking Map'}
                      {steps[currentStep].action === 'compare' && '⚖️ Comparing Count'}
                      {steps[currentStep].action === 'update' && '➕ Updating Map'}
                      {steps[currentStep].action === 'found' && '🎯 Duplicate Found!'}
                      {steps[currentStep].action === 'result' && '🎯 Returning Result'}
                      {steps[currentStep].action === 'done' && '✅ Complete!'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* INNOVATIVE: Visual Representation with Frequency Tracker */}
          {currentStep >= 0 && (
            <div className="space-y-6">
              
              {/* Frequency Map Visualization - INNOVATIVE! */}
              {Object.keys(steps[currentStep].map).length > 0 && (
                <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                  <h5 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 text-center flex items-center justify-center gap-2">
                    <Hash className="w-5 h-5" />
                    Live Frequency Map (Hash Map)
                  </h5>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {Object.entries(steps[currentStep].map).map(([num, count]) => {
                      const isDuplicate = steps[currentStep].duplicates.includes(parseInt(num));
                      const isChecking = steps[currentStep].checking === num;
                      
                      return (
                        <div
                          key={num}
                          className={`p-3 rounded-lg text-center transition-all duration-500 ${
                            isChecking
                              ? 'bg-yellow-200 dark:bg-yellow-800 ring-4 ring-yellow-400 scale-110 animate-pulse'
                              : isDuplicate
                              ? 'bg-gradient-to-br from-red-200 to-pink-200 dark:from-red-800 dark:to-pink-800 ring-2 ring-red-400'
                              : 'bg-white dark:bg-slate-900 border-2 border-slate-300'
                          }`}
                        >
                          <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{num}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Count: <span className="font-bold text-purple-600">{count}</span>
                          </div>
                          {isDuplicate && (
                            <div className="text-xs font-bold text-red-600 mt-1">
                              ✓ DUP
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white dark:bg-slate-900 border-2 border-slate-300 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Seen Once</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gradient-to-br from-red-200 to-pink-200 dark:from-red-800 dark:to-pink-800 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Duplicate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-200 dark:bg-yellow-800 rounded"></div>
                      <span className="text-slate-600 dark:text-slate-400">Checking</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Array Visualization with Color Coding */}
              <div>
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">Original Array:</p>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2 flex-wrap justify-center">
                    {testArray.map((val, idx) => {
                      const isCurrent = steps[currentStep].index === idx;
                      const isDuplicate = steps[currentStep].duplicates.includes(val);
                      const inMap = steps[currentStep].map[val] !== undefined;
                      const count = steps[currentStep].map[val] || 0;
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {isCurrent && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                              <div className="px-2 py-1 bg-purple-500 text-white rounded font-bold text-sm animate-bounce">
                                i
                              </div>
                            </div>
                          )}
                          <div
                            className={`w-12 h-12 flex flex-col items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                              isCurrent
                                ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110 ring-4 ring-purple-300'
                                : isDuplicate
                                ? 'bg-gradient-to-br from-red-200 to-pink-200 dark:from-red-800 dark:to-pink-800 border-red-500 ring-2 ring-red-400'
                                : inMap && steps[currentStep].index > idx
                                ? 'bg-green-100 dark:bg-green-900/50 border-green-400'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                            } ${
                              isCurrent ? 'text-purple-900 dark:text-purple-100' :
                              isDuplicate ? 'text-red-900 dark:text-red-100' :
                              'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <span>{val}</span>
                            {inMap && count > 1 && steps[currentStep].index >= idx && (
                              <span className="text-[8px] text-red-600 dark:text-red-400 font-bold">×{count}</span>
                            )}
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">[{idx}]</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Duplicates Result Display - INNOVATIVE! */}
              <div>
                <p className="text-sm font-medium text-pink-900 dark:text-pink-100 mb-3">
                  Duplicates Found: ({steps[currentStep].duplicates.length} items)
                </p>
                <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-lg border-2 border-pink-300 dark:border-pink-700">
                  {steps[currentStep].duplicates.length === 0 ? (
                    <div className="text-center text-slate-500 dark:text-slate-400 italic py-4">
                      No duplicates found yet... 🔍
                    </div>
                  ) : (
                    <div className="flex gap-3 flex-wrap justify-center">
                      {steps[currentStep].duplicates.map((val, idx) => (
                        <div
                          key={idx}
                          className="relative"
                        >
                          <div className="w-16 h-16 flex items-center justify-center rounded-xl font-bold text-2xl bg-gradient-to-br from-red-400 to-pink-500 text-white border-4 border-red-300 shadow-lg animate-in zoom-in duration-700">
                            {val}
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                              🎯
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}
        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Complexity Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Time Complexity: O(n)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Single pass through the array</li>
                <li>• Hash map lookup and insertion: O(1) each</li>
                <li>• Total: O(n) where n is array length</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Space Complexity: O(n)
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Hash map stores up to n unique elements</li>
                <li>• Result array stores duplicates (worst case: all duplicates)</li>
                <li>• Total: O(n) extra space</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
                💡 Key Insights
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Hash map provides O(1) lookup - crucial for efficiency</li>
                <li>• Only add to result when count === 1 (prevents duplicate duplicates!)</li>
                <li>• Trade space for time: O(n) space for O(n) time</li>
                <li>• Alternative: Sort first O(n log n), then scan O(n) with O(1) space</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
