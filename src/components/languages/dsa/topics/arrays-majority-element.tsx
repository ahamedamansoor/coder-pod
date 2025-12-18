'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Play, ChevronLeft, ChevronRight, RotateCcw,
  Target, AlertCircle, CheckCircle, Crown, 
  Lightbulb, Award, Users, TrendingUp, Zap
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function MajorityElement() {
  // Core animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [selectedApproach, setSelectedApproach] = useState<'brute' | 'hashmap' | 'boyer'>('brute');

  // Problem data
  const testArray = [2, 2, 1, 1, 2, 2, 2];
  
  // Boyer-Moore Voting Algorithm - 32 Granular Steps
  const steps = [
    // Initialization (3 steps)
    { step: 1, candidate: null, count: 0, index: -1, currentLine: 1, action: 'init', description: '📋 Initialize: Start Boyer-Moore Voting Algorithm', highlighted: [] },
    { step: 2, candidate: null, count: 0, index: -1, currentLine: 2, action: 'init', description: '📋 Initialize: Set candidate = null (no candidate yet)', highlighted: [] },
    { step: 3, candidate: null, count: 0, index: -1, currentLine: 3, action: 'init', description: '📋 Initialize: Set count = 0 (no votes yet)', highlighted: [] },
    
    // Loop start
    { step: 4, candidate: null, count: 0, index: -1, currentLine: 5, action: 'loop-start', description: '🔄 Loop: Start iterating through array [2,2,1,1,2,2,2]', highlighted: [] },
    
    // Index 0
    { step: 5, candidate: null, count: 0, index: 0, currentLine: 6, action: 'examine', description: '📍 Index 0: Access nums[0] = 2', highlighted: [0] },
    { step: 6, candidate: null, count: 0, index: 0, currentLine: 7, action: 'check', description: '🔍 Check: Is count === 0? YES! (0 === 0)', highlighted: [0] },
    { step: 7, candidate: 2, count: 0, index: 0, currentLine: 8, action: 'update', description: '✅ Update: Set candidate = 2 (new candidate chosen)', highlighted: [0] },
    { step: 8, candidate: 2, count: 1, index: 0, currentLine: 11, action: 'update', description: '➕ Update: count++ → count = 1 (candidate vote increased)', highlighted: [0] },
    
    // Index 1
    { step: 9, candidate: 2, count: 1, index: 1, currentLine: 6, action: 'examine', description: '📍 Index 1: Access nums[1] = 2', highlighted: [1] },
    { step: 10, candidate: 2, count: 1, index: 1, currentLine: 7, action: 'check', description: '🔍 Check: Is count === 0? NO! (1 !== 0)', highlighted: [1] },
    { step: 11, candidate: 2, count: 1, index: 1, currentLine: 10, action: 'compare', description: '⚖️ Compare: nums[1](2) === candidate(2)? YES!', highlighted: [1] },
    { step: 12, candidate: 2, count: 2, index: 1, currentLine: 11, action: 'update', description: '➕ Update: count++ → count = 2 (matching vote, increase)', highlighted: [1] },
    
    // Index 2
    { step: 13, candidate: 2, count: 2, index: 2, currentLine: 6, action: 'examine', description: '📍 Index 2: Access nums[2] = 1', highlighted: [2] },
    { step: 14, candidate: 2, count: 2, index: 2, currentLine: 7, action: 'check', description: '🔍 Check: Is count === 0? NO! (2 !== 0)', highlighted: [2] },
    { step: 15, candidate: 2, count: 2, index: 2, currentLine: 10, action: 'compare', description: '⚖️ Compare: nums[2](1) === candidate(2)? NO! Different element', highlighted: [2] },
    { step: 16, candidate: 2, count: 1, index: 2, currentLine: 13, action: 'update', description: '➖ Update: count-- → count = 1 (opposing vote, decrease)', highlighted: [2] },
    
    // Index 3
    { step: 17, candidate: 2, count: 1, index: 3, currentLine: 6, action: 'examine', description: '📍 Index 3: Access nums[3] = 1', highlighted: [3] },
    { step: 18, candidate: 2, count: 1, index: 3, currentLine: 7, action: 'check', description: '🔍 Check: Is count === 0? NO! (1 !== 0)', highlighted: [3] },
    { step: 19, candidate: 2, count: 1, index: 3, currentLine: 10, action: 'compare', description: '⚖️ Compare: nums[3](1) === candidate(2)? NO! Different again', highlighted: [3] },
    { step: 20, candidate: 2, count: 0, index: 3, currentLine: 13, action: 'update', description: '➖ Update: count-- → count = 0 (votes canceled out!)', highlighted: [3] },
    
    // Index 4
    { step: 21, candidate: 2, count: 0, index: 4, currentLine: 6, action: 'examine', description: '📍 Index 4: Access nums[4] = 2', highlighted: [4] },
    { step: 22, candidate: 2, count: 0, index: 4, currentLine: 7, action: 'check', description: '🔍 Check: Is count === 0? YES! (0 === 0) Time for new candidate!', highlighted: [4] },
    { step: 23, candidate: 2, count: 0, index: 4, currentLine: 8, action: 'update', description: '✅ Update: Set candidate = 2 (re-selected as candidate)', highlighted: [4] },
    { step: 24, candidate: 2, count: 1, index: 4, currentLine: 11, action: 'update', description: '➕ Update: count++ → count = 1 (fresh start with count)', highlighted: [4] },
    
    // Index 5
    { step: 25, candidate: 2, count: 1, index: 5, currentLine: 6, action: 'examine', description: '📍 Index 5: Access nums[5] = 2', highlighted: [5] },
    { step: 26, candidate: 2, count: 1, index: 5, currentLine: 10, action: 'compare', description: '⚖️ Compare: nums[5](2) === candidate(2)? YES! Match found', highlighted: [5] },
    { step: 27, candidate: 2, count: 2, index: 5, currentLine: 11, action: 'update', description: '➕ Update: count++ → count = 2 (building majority)', highlighted: [5] },
    
    // Index 6
    { step: 28, candidate: 2, count: 2, index: 6, currentLine: 6, action: 'examine', description: '📍 Index 6: Access nums[6] = 2 (last element)', highlighted: [6] },
    { step: 29, candidate: 2, count: 2, index: 6, currentLine: 10, action: 'compare', description: '⚖️ Compare: nums[6](2) === candidate(2)? YES! Another match', highlighted: [6] },
    { step: 30, candidate: 2, count: 3, index: 6, currentLine: 11, action: 'update', description: '➕ Update: count++ → count = 3 (strong majority signal)', highlighted: [6] },
    
    // Termination (2 steps)
    { step: 31, candidate: 2, count: 3, index: -1, currentLine: 16, action: 'result', description: '🎯 Return: candidate = 2 (survived all votes!)', highlighted: [0, 1, 4, 5, 6] },
    { step: 32, candidate: 2, count: 3, index: -1, currentLine: 17, action: 'done', description: '✅ Complete! Element 2 is the majority (appears 5/7 times)', highlighted: [0, 1, 4, 5, 6] },
  ];

  // Code viewer function
  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const currentNum = stepData.index >= 0 && stepData.index < testArray.length ? testArray[stepData.index] : null;
    
    return [
      { line: 1, code: 'function majorityElement(nums) {', active: stepData.currentLine === 1, indent: 0, values: stepData.currentLine >= 1 ? `nums=[${testArray.join(',')}]` : '' },
      { line: 2, code: '  let candidate = null;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine >= 2 ? `candidate=${stepData.candidate}` : '' },
      { line: 3, code: '  let count = 0;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine >= 3 ? `count=${stepData.count}` : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  for (const num of nums) {', active: stepData.currentLine === 5, indent: 1, values: stepData.currentLine >= 5 && stepData.index >= 0 ? `index=${stepData.index}, num=${currentNum}` : '' },
      { line: 6, code: '    // Examine current element', active: stepData.currentLine === 6, indent: 2, values: stepData.index >= 0 ? `num=nums[${stepData.index}]=${currentNum}` : '' },
      { line: 7, code: '    if (count === 0) {', active: stepData.currentLine === 7, indent: 2, values: stepData.currentLine === 7 ? `count===${stepData.count}? ${stepData.count === 0 ? 'true' : 'false'}` : '' },
      { line: 8, code: '      candidate = num;', active: stepData.currentLine === 8, indent: 3, values: stepData.currentLine === 8 && currentNum !== null ? `candidate=${currentNum} (new candidate)` : '' },
      { line: 9, code: '    }', active: false, indent: 2 },
      { line: 10, code: '    ', active: false, indent: 2 },
      { line: 11, code: '    count += (num === candidate) ? 1 : -1;', active: stepData.currentLine === 11 || stepData.currentLine === 13, indent: 2, values: (stepData.currentLine === 11 || stepData.currentLine === 13) && currentNum !== null ? `${currentNum}===${stepData.candidate}? ${currentNum === stepData.candidate ? '+1' : '-1'}, count=${stepData.count}` : '' },
      { line: 12, code: '  }', active: false, indent: 1 },
      { line: 13, code: '  ', active: false, indent: 1 },
      { line: 14, code: '  return candidate;', active: stepData.currentLine === 16, indent: 1, values: stepData.currentLine === 16 ? `return ${stepData.candidate}` : '' },
      { line: 15, code: '}', active: stepData.currentLine === 17, indent: 0 },
    ];
  };

  // Navigation functions
  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = { slow: 2500, normal: 1500, fast: 800 };
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
        icon={Crown}
        category="DSA · Arrays · Mixed Array Problems"
        title="Majority Element"
        description="Find the element that appears more than n/2 times in an array"
        colorTheme="amber"
        badges={[
          { label: 'Boyer-Moore Algorithm', variant: 'default' },
          { label: 'Voting', variant: 'secondary' },
          { label: '⚡ O(n) Time, O(1) Space', variant: 'outline' },
        ]}
      />

      {/* Problem Definition */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-amber-600" />
            What is the Majority Element?
          </CardTitle>
          <CardDescription>
            An element that appears more than half the time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Voting! 🗳️
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-amber-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Imagine <strong>7 people voting</strong> for their favorite pizza topping. 
                The <strong>majority winner</strong> must get <strong>more than half</strong> the votes.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-amber-900 dark:text-amber-100">Array: [2, 2, 1, 1, 2, 2, 2]</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <p>• Element <strong>2</strong> appears <strong>5 times</strong></p>
                    <p>• Element <strong>1</strong> appears <strong>2 times</strong></p>
                    <p>• Array length = 7, so need <strong>more than 3.5 votes</strong> (at least 4)</p>
                    <p className="font-bold text-amber-700 dark:text-amber-300">→ Element 2 wins with 5 votes! 👑</p>
                  </div>
                </div>

                <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <p className="text-xs text-red-700 dark:text-red-300 font-semibold">
                    ❌ Example WITHOUT majority: [1, 2, 3, 4] - No element appears more than 2 times (half)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg border-l-4 border-amber-500">
              <p className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-2">
                🎯 Key Definition
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Majority Element:</strong> An element that appears <strong>more than ⌊n/2⌋ times</strong> in an array of size n.
                <br />
                <strong>Guarantee:</strong> Problem assumes majority element always exists!
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300">
              <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Example 1</h5>
              <div className="text-sm space-y-2">
                <p className="font-mono text-green-700 dark:text-green-300">Input: [3,2,3]</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Length = 3, need more than 1.5 votes</p>
                <p className="font-mono font-bold text-green-800 dark:text-green-200">Output: 3 (appears 2 times)</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-300">
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">✅ Example 2</h5>
              <div className="text-sm space-y-2">
                <p className="font-mono text-blue-700 dark:text-blue-300">Input: [2,2,1,1,1,2,2]</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Length = 7, need more than 3.5 votes</p>
                <p className="font-mono font-bold text-blue-800 dark:text-blue-200">Output: 2 (appears 4 times)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Approaches Comparison */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-amber-600" />
            Three Approaches to Find Majority Element
          </CardTitle>
          <CardDescription>Compare brute force, hash map, and optimal Boyer-Moore algorithm</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Approach Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedApproach('brute')}
                variant={selectedApproach === 'brute' ? 'default' : 'outline'}
                className={selectedApproach === 'brute' ? 'bg-red-600 hover:bg-red-700' : 'border-red-300'}
              >
                Brute Force
              </Button>
              <Button
                onClick={() => setSelectedApproach('hashmap')}
                variant={selectedApproach === 'hashmap' ? 'default' : 'outline'}
                className={selectedApproach === 'hashmap' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-300'}
              >
                Hash Map
              </Button>
              <Button
                onClick={() => setSelectedApproach('boyer')}
                variant={selectedApproach === 'boyer' ? 'default' : 'outline'}
                className={selectedApproach === 'boyer' ? 'bg-green-600 hover:bg-green-700' : 'border-green-300'}
              >
                Boyer-Moore (Best!)
              </Button>
            </div>

            {/* Brute Force */}
            {selectedApproach === 'brute' && (
              <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-500 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-100">Approach 1: Brute Force</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Time: <span className="font-mono font-bold text-red-600">O(n²)</span> | Space: <span className="font-mono font-bold">O(1)</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">How it works:</h4>
                    <ol className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                      <li><strong>1.</strong> For each element in array</li>
                      <li><strong>2.</strong> Count how many times it appears (nested loop)</li>
                      <li><strong>3.</strong> If count {'>'} n/2, return that element</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Code:</h4>
                    <pre className="text-xs font-mono bg-red-50 dark:bg-red-900/20 p-3 rounded overflow-x-auto">
{`function majorityElement(nums) {
  const n = nums.length;
  
  for (let i = 0; i < n; i++) {
    let count = 0;
    
    // Count occurrences of nums[i]
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }
    
    if (count > n / 2) {
      return nums[i];
    }
  }
}`}
                    </pre>
                  </div>

                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                    <p className="text-xs font-semibold text-red-800 dark:text-red-200">
                      ⚠️ Too Slow! Nested loops make this O(n²). Not recommended for large arrays.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Hash Map */}
            {selectedApproach === 'hashmap' && (
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Approach 2: Hash Map</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Time: <span className="font-mono font-bold text-green-600">O(n)</span> | Space: <span className="font-mono font-bold text-orange-600">O(n)</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">How it works:</h4>
                    <ol className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                      <li><strong>1.</strong> Create a hash map to store element counts</li>
                      <li><strong>2.</strong> Loop through array once, updating counts</li>
                      <li><strong>3.</strong> Find element with count {'>'} n/2</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Visual Example: [2,2,1,1,2]</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Step 1:</div>
                        <span>map = {'{2: 1}'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Step 2:</div>
                        <span>map = {'{2: 2}'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Step 3:</div>
                        <span>map = {'{2: 2, 1: 1}'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Step 4:</div>
                        <span>map = {'{2: 2, 1: 2}'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Step 5:</div>
                        <span>map = {'{2: 3, 1: 2}'} → 2 has count 3 {'>'} 2.5 ✅</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Code:</h4>
                    <pre className="text-xs font-mono bg-blue-50 dark:bg-blue-900/20 p-3 rounded overflow-x-auto">
{`function majorityElement(nums) {
  const map = new Map();
  const n = nums.length;
  
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    
    if (map.get(num) > n / 2) {
      return num;
    }
  }
}`}
                    </pre>
                  </div>

                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-200">
                      ✅ Fast O(n) time, but uses O(n) extra space for the hash map.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Boyer-Moore */}
            {selectedApproach === 'boyer' && (
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Approach 3: Boyer-Moore Voting Algorithm ⭐</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Time: <span className="font-mono font-bold text-green-600">O(n)</span> | Space: <span className="font-mono font-bold text-green-600">O(1)</span> - OPTIMAL!
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">💡 The Clever Idea:</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Imagine candidates in an election. When votes cancel out (different candidates), 
                      the majority candidate will still have votes left at the end!
                    </p>
                    <ol className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                      <li><strong>1.</strong> Keep a <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">candidate</code> and <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">count</code></li>
                      <li><strong>2.</strong> If count = 0, pick current element as new candidate</li>
                      <li><strong>3.</strong> If element matches candidate, increment count</li>
                      <li><strong>4.</strong> If element differs, decrement count (votes cancel!)</li>
                      <li><strong>5.</strong> Final candidate is the majority element</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Code:</h4>
                    <pre className="text-xs font-mono bg-green-50 dark:bg-green-900/20 p-3 rounded overflow-x-auto">
{`function majorityElement(nums) {
  let candidate = null;
  let count = 0;
  
  for (const num of nums) {
    if (count === 0) {
      candidate = num;  // Pick new candidate
    }
    
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
}`}
                    </pre>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border-l-4 border-green-500">
                    <p className="text-xs font-semibold text-green-800 dark:text-green-200">
                      🏆 BEST SOLUTION! O(n) time, O(1) space. The majority element survives the "voting battle"!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Boyer-Moore Visualization with Code Viewer */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
              <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            Step-by-Step Animation: Boyer-Moore Voting
          </CardTitle>
          <CardDescription>Watch the optimal O(n) time, O(1) space algorithm in action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls - Line 1 */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button onClick={handleReset} disabled={isAnimating} variant="outline" className="border-amber-300">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control - Line 2 */}
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
                  className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">{speed}</span>
              </label>
            ))}
          </div>

          {/* Navigation Controls - Line 3 */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
              className="border-amber-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 rounded-lg border-2 border-amber-300 dark:border-amber-700">
              <span className="text-sm font-bold text-amber-900 dark:text-amber-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
              className="border-amber-300"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Code Viewer */}
          {currentStep >= 0 && (
            <div className="mb-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">majorityElement.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => (
                  <div
                    key={lineData.line}
                    className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                      lineData.active
                        ? 'bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-400 dark:border-amber-500'
                        : ''
                    }`}
                  >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-amber-600 dark:text-amber-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-amber-600 dark:text-amber-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                ))}
              </div>

              {/* Footer with variable values */}
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Candidate:</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">{steps[currentStep].candidate ?? 'null'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Count:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].count}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Index:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].index >= 0 ? steps[currentStep].index : '-'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description Card */}
          {currentStep >= 0 && (
            <div className={`p-6 rounded-xl border-2 shadow-sm ${
              steps[currentStep].action === 'done'
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700'
                : steps[currentStep].action === 'init'
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700'
                : 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-300 dark:border-amber-700'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${
                    steps[currentStep].action === 'done' ? 'bg-green-600' :
                    steps[currentStep].action === 'init' ? 'bg-blue-600' :
                    steps[currentStep].action === 'update' ? 'bg-amber-600' : 'bg-purple-600'
                  }`}>
                    {steps[currentStep].action === 'done' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : steps[currentStep].action === 'init' ? (
                      <Target className="w-6 h-6 text-white" />
                    ) : (
                      <Users className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Loop Start'}
                      {steps[currentStep].action === 'examine' && '📍 Examining Element'}
                      {steps[currentStep].action === 'check' && '🔍 Checking Condition'}
                      {steps[currentStep].action === 'compare' && '⚖️ Comparing Values'}
                      {steps[currentStep].action === 'update' && '➕ Updating Variables'}
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

          {/* Visual Representation (Array) with Innovative Vote Battle */}
          {currentStep >= 0 && (
            <div className="space-y-6">
              
              {/* Vote Battle Meter */}
              {steps[currentStep].candidate !== null && (
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                  <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-3 text-center flex items-center justify-center gap-2">
                    <Crown className="w-5 h-5" />
                    Vote Battle: Candidate {steps[currentStep].candidate}
                  </h5>
                  
                  <div className="space-y-3">
                    {/* Vote Meter */}
                    <div className="relative h-12 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r transition-all duration-700 ${
                          steps[currentStep].count > 0 
                            ? 'from-green-400 to-emerald-500' 
                            : 'from-red-400 to-rose-500'
                        }`}
                        style={{ width: `${Math.min(Math.abs(steps[currentStep].count) * 20, 100)}%` }}
                      >
                        <div className="flex items-center justify-center h-full text-white font-bold">
                          {steps[currentStep].count > 0 ? '👍' : steps[currentStep].count < 0 ? '👎' : ''}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 z-10">
                          Votes: {steps[currentStep].count >= 0 ? '+' : ''}{steps[currentStep].count}
                        </span>
                      </div>
                    </div>
                    
                    {/* Vote Status */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-slate-600 dark:text-slate-400">Supporting Votes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 dark:text-slate-400">Opposing Votes</span>
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Array Visualization */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Array Elements:</p>
                  {steps[currentStep].index >= 0 && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded text-amber-800 dark:text-amber-200">
                        Examining: nums[{steps[currentStep].index}] = {testArray[steps[currentStep].index]}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-2">
                    {testArray.map((val, idx) => {
                      const isCurrent = steps[currentStep].index === idx;
                      const isHighlighted = steps[currentStep].highlighted.includes(idx);
                      const matchesCandidate = val === steps[currentStep].candidate && steps[currentStep].candidate !== null;
                      
                      return (
                        <div key={idx} className="relative flex flex-col items-center gap-2">
                          {/* Vote Indicator Above Box */}
                          {isCurrent && steps[currentStep].candidate !== null && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                              {matchesCandidate ? (
                                <div className="text-2xl animate-bounce">👍</div>
                              ) : (
                                <div className="text-2xl animate-bounce">👎</div>
                              )}
                            </div>
                          )}
                          
                          {/* Value Box */}
                          <div
                            className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                              isHighlighted
                                ? 'bg-green-200 dark:bg-green-800 border-green-500 scale-125 ring-4 ring-green-300 animate-pulse'
                                : isCurrent
                                ? 'bg-amber-200 dark:bg-amber-800 border-amber-500 scale-110 ring-4 ring-amber-300'
                                : matchesCandidate && steps[currentStep].index > idx
                                ? 'bg-green-100 dark:bg-green-900/50 border-green-400'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                            } ${
                              isHighlighted ? 'text-green-900 dark:text-green-100' :
                              isCurrent ? 'text-amber-900 dark:text-amber-100' :
                              'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {val}
                          </div>
                          
                          {/* Candidate Badge */}
                          {val === steps[currentStep].candidate && steps[currentStep].candidate !== null && idx <= steps[currentStep].index && (
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                              <span className="text-xs px-2 py-0.5 bg-purple-500 text-white rounded-full">
                                👑
                              </span>
                            </div>
                          )}
                          
                          {/* Index Label */}
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                            [{idx}]
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Comparison Arrow */}
                  {steps[currentStep].index >= 0 && steps[currentStep].candidate !== null && (
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Current Element</div>
                          <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg font-bold text-amber-900 dark:text-amber-100">
                            {testArray[steps[currentStep].index]}
                          </div>
                        </div>
                        
                        <div className="text-2xl">
                          {testArray[steps[currentStep].index] === steps[currentStep].candidate ? '=' : '≠'}
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Candidate</div>
                          <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg font-bold text-purple-900 dark:text-purple-100">
                            {steps[currentStep].candidate}
                          </div>
                        </div>
                        
                        <div className="text-3xl">
                          →
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Action</div>
                          <div className={`px-4 py-2 rounded-lg font-bold ${
                            testArray[steps[currentStep].index] === steps[currentStep].candidate
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100'
                          }`}>
                            {testArray[steps[currentStep].index] === steps[currentStep].candidate ? 'Count++' : 'Count--'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Vote History Tracker */}
              {steps[currentStep].index >= 0 && (
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      🗳️ Vote History
                    </div>
                    <div className="flex gap-1">
                      {testArray.slice(0, steps[currentStep].index + 1).map((num, idx) => (
                        <div 
                          key={idx}
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                            num === steps[currentStep].candidate
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                          }`}
                          title={`Index ${idx}: ${num}`}
                        >
                          {num === steps[currentStep].candidate ? '✓' : '✗'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-amber-600" />
            Key Insights & Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Why Boyer-Moore Works
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• The majority element appears <strong>more than n/2 times</strong></li>
                <li>• Even if all other elements "vote against" it, majority wins</li>
                <li>• Canceling votes (count--) eliminates minority elements</li>
                <li>• The final candidate standing is guaranteed to be majority</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                When to Use Each Approach
              </h4>
              <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <p><strong>Brute Force:</strong> Never in practice (too slow)</p>
                <p><strong>Hash Map:</strong> When you need to count ALL elements, or if majority not guaranteed</p>
                <p><strong>Boyer-Moore:</strong> When majority is guaranteed and you need optimal O(n) time, O(1) space</p>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/20 border-amber-300">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">
                💡 Pro Tips
              </h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li>• Boyer-Moore assumes majority exists - add verification pass if unsure</li>
                <li>• Works in O(n) time with single pass through array</li>
                <li>• Only uses 2 variables: O(1) space!</li>
                <li>• Can be extended to find elements appearing more than n/3 times</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
