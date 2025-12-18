'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, TrendingUp, ArrowRight, Layers } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ProductOfArrayExceptSelf() {
  const nums = [1, 2, 3, 4];
  const n = nums.length;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    // === INITIALIZATION (Steps 1-3) ===
    {
      step: 1,
      index: -1,
      leftProduct: 1,
      rightProduct: 1,
      output: [0, 0, 0, 0],
      leftProducts: [1, 1, 1, 1],
      rightProducts: [1, 1, 1, 1],
      currentLine: 2,
      description: '📋 Initialize: Create output array [0,0,0,0] and set leftProduct = 1',
      action: 'init',
      phase: 'init',
      highlighted: []
    },
    {
      step: 2,
      index: -1,
      leftProduct: 1,
      rightProduct: 1,
      output: [0, 0, 0, 0],
      leftProducts: [1, 1, 1, 1],
      rightProducts: [1, 1, 1, 1],
      currentLine: 3,
      description: '📋 Phase 1 Starting: Calculate left products (product of all elements to the left)',
      action: 'init',
      phase: 'left-start',
      highlighted: []
    },

    // === LEFT PASS (Steps 3-10) ===
    // Index 0
    {
      step: 3,
      index: 0,
      leftProduct: 1,
      rightProduct: 1,
      output: [1, 0, 0, 0],
      leftProducts: [1, 1, 1, 1],
      rightProducts: [1, 1, 1, 1],
      currentLine: 5,
      description: '🔄 Left Pass i=0: output[0] = leftProduct(1). No elements to the left.',
      action: 'left-pass',
      phase: 'left',
      highlighted: [0]
    },
    {
      step: 4,
      index: 0,
      leftProduct: 1,
      rightProduct: 1,
      output: [1, 0, 0, 0],
      leftProducts: [1, 1, 1, 1],
      rightProducts: [1, 1, 1, 1],
      currentLine: 6,
      description: '➕ Update leftProduct: leftProduct = 1 × nums[0](1) = 1',
      action: 'update-left',
      phase: 'left',
      highlighted: [0]
    },

    // Index 1
    {
      step: 5,
      index: 1,
      leftProduct: 1,
      rightProduct: 1,
      output: [1, 1, 0, 0],
      leftProducts: [1, 1, 1, 1],
      rightProducts: [1, 1, 1, 1],
      currentLine: 5,
      description: '🔄 Left Pass i=1: output[1] = leftProduct(1). Product of left = 1',
      action: 'left-pass',
      phase: 'left',
      highlighted: [1]
    },
    {
      step: 6,
      index: 1,
      leftProduct: 2,
      rightProduct: 1,
      output: [1, 1, 0, 0],
      leftProducts: [1, 1, 2, 1],
      rightProducts: [1, 1, 1, 1],
      currentLine: 6,
      description: '➕ Update leftProduct: leftProduct = 1 × nums[1](2) = 2',
      action: 'update-left',
      phase: 'left',
      highlighted: [1]
    },

    // Index 2
    {
      step: 7,
      index: 2,
      leftProduct: 2,
      rightProduct: 1,
      output: [1, 1, 2, 0],
      leftProducts: [1, 1, 2, 2],
      rightProducts: [1, 1, 1, 1],
      currentLine: 5,
      description: '🔄 Left Pass i=2: output[2] = leftProduct(2). Product of left = 1×2 = 2',
      action: 'left-pass',
      phase: 'left',
      highlighted: [2]
    },
    {
      step: 8,
      index: 2,
      leftProduct: 6,
      rightProduct: 1,
      output: [1, 1, 2, 0],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 1, 1],
      currentLine: 6,
      description: '➕ Update leftProduct: leftProduct = 2 × nums[2](3) = 6',
      action: 'update-left',
      phase: 'left',
      highlighted: [2]
    },

    // Index 3
    {
      step: 9,
      index: 3,
      leftProduct: 6,
      rightProduct: 1,
      output: [1, 1, 2, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 1, 1],
      currentLine: 5,
      description: '🔄 Left Pass i=3: output[3] = leftProduct(6). Product of left = 1×2×3 = 6',
      action: 'left-pass',
      phase: 'left',
      highlighted: [3]
    },
    {
      step: 10,
      index: 3,
      leftProduct: 24,
      rightProduct: 1,
      output: [1, 1, 2, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 1, 1],
      currentLine: 6,
      description: '➕ Update leftProduct: leftProduct = 6 × nums[3](4) = 24',
      action: 'update-left',
      phase: 'left',
      highlighted: [3]
    },

    // === RIGHT PASS STARTING (Step 11) ===
    {
      step: 11,
      index: -1,
      leftProduct: 24,
      rightProduct: 1,
      output: [1, 1, 2, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 1, 1],
      currentLine: 9,
      description: '📋 Phase 2 Starting: Reset rightProduct = 1. Calculate right products (traverse right to left)',
      action: 'init',
      phase: 'right-start',
      highlighted: []
    },

    // === RIGHT PASS (Steps 12-19) ===
    // Index 3
    {
      step: 12,
      index: 3,
      leftProduct: 24,
      rightProduct: 1,
      output: [1, 1, 2, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 1, 1],
      currentLine: 11,
      description: '🔄 Right Pass i=3: output[3] = output[3](6) × rightProduct(1) = 6. No elements to the right.',
      action: 'right-pass',
      phase: 'right',
      highlighted: [3]
    },
    {
      step: 13,
      index: 3,
      leftProduct: 24,
      rightProduct: 4,
      output: [1, 1, 2, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 1, 4],
      currentLine: 12,
      description: '➕ Update rightProduct: rightProduct = 1 × nums[3](4) = 4',
      action: 'update-right',
      phase: 'right',
      highlighted: [3]
    },

    // Index 2
    {
      step: 14,
      index: 2,
      leftProduct: 24,
      rightProduct: 4,
      output: [1, 1, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 4, 4],
      currentLine: 11,
      description: '🔄 Right Pass i=2: output[2] = output[2](2) × rightProduct(4) = 8. Product of right = 4',
      action: 'right-pass',
      phase: 'right',
      highlighted: [2]
    },
    {
      step: 15,
      index: 2,
      leftProduct: 24,
      rightProduct: 12,
      output: [1, 1, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 1, 12, 4],
      currentLine: 12,
      description: '➕ Update rightProduct: rightProduct = 4 × nums[2](3) = 12',
      action: 'update-right',
      phase: 'right',
      highlighted: [2]
    },

    // Index 1
    {
      step: 16,
      index: 1,
      leftProduct: 24,
      rightProduct: 12,
      output: [1, 12, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 12, 12, 4],
      currentLine: 11,
      description: '🔄 Right Pass i=1: output[1] = output[1](1) × rightProduct(12) = 12. Product of right = 3×4 = 12',
      action: 'right-pass',
      phase: 'right',
      highlighted: [1]
    },
    {
      step: 17,
      index: 1,
      leftProduct: 24,
      rightProduct: 24,
      output: [1, 12, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [1, 24, 12, 4],
      currentLine: 12,
      description: '➕ Update rightProduct: rightProduct = 12 × nums[1](2) = 24',
      action: 'update-right',
      phase: 'right',
      highlighted: [1]
    },

    // Index 0
    {
      step: 18,
      index: 0,
      leftProduct: 24,
      rightProduct: 24,
      output: [24, 12, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [24, 24, 12, 4],
      currentLine: 11,
      description: '🔄 Right Pass i=0: output[0] = output[0](1) × rightProduct(24) = 24. Product of right = 2×3×4 = 24',
      action: 'right-pass',
      phase: 'right',
      highlighted: [0]
    },
    {
      step: 19,
      index: 0,
      leftProduct: 24,
      rightProduct: 24,
      output: [24, 12, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [24, 24, 12, 4],
      currentLine: 12,
      description: '✅ Right Pass Complete! Final output: [24, 12, 8, 6]',
      action: 'update-right',
      phase: 'right',
      highlighted: [0]
    },

    // === RESULT (Step 20) ===
    {
      step: 20,
      index: -1,
      leftProduct: 24,
      rightProduct: 24,
      output: [24, 12, 8, 6],
      leftProducts: [1, 1, 2, 6],
      rightProducts: [24, 24, 12, 4],
      currentLine: 15,
      description: '🎯 Return Result: [24, 12, 8, 6] - Product of all elements except self at each position!',
      action: 'result',
      phase: 'done',
      highlighted: [0, 1, 2, 3]
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    return [
      { line: 1, code: 'function productExceptSelf(nums) {', active: false, indent: 0 },
      { line: 2, code: '  const output = new Array(nums.length);', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine === 2 ? `output=[${stepData.output.join(',')}]` : '' },
      { line: 3, code: '  let leftProduct = 1;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine === 3 ? 'leftProduct=1' : '' },
      { line: 4, code: '  ', active: false, indent: 1 },
      { line: 5, code: '  for (let i = 0; i < nums.length; i++) {', active: stepData.currentLine === 5 && stepData.phase === 'left', indent: 1, values: stepData.phase === 'left' && stepData.index >= 0 ? `i=${stepData.index}` : '' },
      { line: 6, code: '    output[i] = leftProduct;', active: stepData.currentLine === 5 && stepData.action === 'left-pass', indent: 2, values: stepData.action === 'left-pass' ? `output[${stepData.index}]=${stepData.leftProducts[stepData.index]}` : '' },
      { line: 7, code: '    leftProduct *= nums[i];', active: stepData.currentLine === 6 && stepData.action === 'update-left', indent: 2, values: stepData.action === 'update-left' ? `leftProduct=${stepData.leftProduct}` : '' },
      { line: 8, code: '  }', active: false, indent: 1 },
      { line: 9, code: '  ', active: false, indent: 1 },
      { line: 10, code: '  let rightProduct = 1;', active: stepData.currentLine === 9, indent: 1, values: stepData.currentLine === 9 ? 'rightProduct=1' : '' },
      { line: 11, code: '  for (let i = nums.length - 1; i >= 0; i--) {', active: stepData.currentLine === 11 && stepData.phase === 'right', indent: 1, values: stepData.phase === 'right' && stepData.index >= 0 ? `i=${stepData.index}` : '' },
      { line: 12, code: '    output[i] *= rightProduct;', active: stepData.currentLine === 11 && stepData.action === 'right-pass', indent: 2, values: stepData.action === 'right-pass' ? `output[${stepData.index}]=${stepData.output[stepData.index]}` : '' },
      { line: 13, code: '    rightProduct *= nums[i];', active: stepData.currentLine === 12 && stepData.action === 'update-right', indent: 2, values: stepData.action === 'update-right' ? `rightProduct=${stepData.rightProduct}` : '' },
      { line: 14, code: '  }', active: false, indent: 1 },
      { line: 15, code: '  ', active: false, indent: 1 },
      { line: 16, code: '  return output;', active: stepData.currentLine === 15, indent: 1, values: stepData.action === 'result' ? `[${stepData.output.join(',')}]` : '' },
      { line: 17, code: '}', active: false, indent: 0 },
    ];
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handlePlay = () => {
    setIsAnimating(true);
    goToStep(0);

    const speedMap = {
      slow: 3500,
      normal: 2500,
      fast: 1500
    };
    const delay = speedMap[animationSpeed];

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index < steps.length) {
          goToStep(index);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
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
        icon={Layers}
        category="DSA · Arrays"
        title="Product of Array Except Self"
        description="Calculate the product of all elements except the element at each index using left and right product passes."
        colorTheme="purple"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Two Pass', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down what we need to calculate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is Product Except Self? */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              What is "Product Except Self"?
            </h4>
            
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                For each position i, calculate the product of all elements in the array <strong>except</strong> the element at position i.
              </p>

              {/* Example Breakdown */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-300 dark:border-purple-600">
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">Example: nums = [1, 2, 3, 4]</p>
                
                <div className="space-y-3">
                  {[
                    { idx: 0, exclude: '1', others: '2 × 3 × 4', result: '24' },
                    { idx: 1, exclude: '2', others: '1 × 3 × 4', result: '12' },
                    { idx: 2, exclude: '3', others: '1 × 2 × 4', result: '8' },
                    { idx: 3, exclude: '4', others: '1 × 2 × 3', result: '6' },
                  ].map((item) => (
                    <div key={item.idx} className="flex items-center gap-3 text-xs">
                      <div className="w-20 font-mono text-slate-600 dark:text-slate-400">
                        output[{item.idx}]:
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded text-red-700 dark:text-red-300 font-bold line-through">
                          {item.exclude}
                        </span>
                        <span className="text-slate-500">→</span>
                        <span className="text-slate-700 dark:text-slate-300">{item.others}</span>
                        <span className="text-slate-500">=</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded text-green-700 dark:text-green-300 font-bold">
                          {item.result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-400">
                  <p className="text-sm text-center font-bold text-purple-700 dark:text-purple-300">
                    Result: [24, 12, 8, 6]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Pass Approach */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              The Two-Pass Approach (Without Division!)
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We use two passes to build the result without division:
              </p>

              {/* Pass 1: Left Products */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-green-700 dark:text-green-300 mb-2">Pass 1: Left to Right (Left Products)</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                      For each position, store the product of all elements to its LEFT
                    </p>
                    
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1, 2, 3, 4].map((val, idx) => (
                        <div key={idx} className="w-12 h-12 bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 rounded flex items-center justify-center text-sm font-mono">
                          {val}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center gap-1">
                      {[1, 1, 2, 6].map((val, idx) => (
                        <div key={idx} className="w-12 h-12 bg-green-100 dark:bg-green-900/40 border-2 border-green-500 rounded flex items-center justify-center text-sm font-mono font-bold text-green-700 dark:text-green-300">
                          {val}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center text-green-700 dark:text-green-300 mt-2">
                      [1, 1, 2, 6] ← Left products
                    </p>
                  </div>
                </div>
              </div>

              {/* Pass 2: Right Products */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Pass 2: Right to Left (Multiply with Right Products)</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                      Multiply each position by the product of all elements to its RIGHT
                    </p>
                    
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1, 1, 2, 6].map((val, idx) => (
                        <div key={idx} className="w-12 h-12 bg-green-100 dark:bg-green-900/40 border-2 border-green-500 rounded flex items-center justify-center text-sm font-mono">
                          {val}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center text-slate-500 mb-2">× (right products)</p>
                    
                    <div className="flex items-center justify-center gap-1">
                      {[24, 12, 8, 6].map((val, idx) => (
                        <div key={idx} className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 border-2 border-blue-500 rounded flex items-center justify-center text-sm font-mono font-bold text-blue-700 dark:text-blue-300">
                          {val}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center text-blue-700 dark:text-blue-300 mt-2">
                      [24, 12, 8, 6] ← Final result!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Initialize Output Array</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Create array and set leftProduct = 1</div>
                    <code className="text-xs text-purple-700 dark:text-purple-300">output = [], leftProduct = 1</code>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Left Pass (Forward)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Store product of all left elements, then multiply leftProduct by current element</div>
                    <code className="text-xs text-purple-700 dark:text-purple-300 block">output[i] = leftProduct</code>
                    <code className="text-xs text-purple-700 dark:text-purple-300">leftProduct *= nums[i]</code>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Right Pass (Backward)</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Multiply output by product of all right elements, then multiply rightProduct by current element</div>
                    <code className="text-xs text-purple-700 dark:text-purple-300 block">output[i] *= rightProduct</code>
                    <code className="text-xs text-purple-700 dark:text-purple-300">rightProduct *= nums[i]</code>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Return Result</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Output array now contains product except self for each position!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Concepts */}
          <Alert className="border-orange-200 dark:border-orange-700">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Important Concepts</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>No Division:</strong> This solution doesn't use division, so it works even with zeros</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>O(1) Space:</strong> Only uses output array (doesn't count as extra space)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Two Passes:</strong> First pass left→right, second pass right→left</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Running Product:</strong> Maintain cumulative product as we traverse</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how we calculate products using two passes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button
              onClick={handleReset}
              disabled={isAnimating}
              variant="outline"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">Speed:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="slow"
                checked={animationSpeed === 'slow'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'slow')}
                disabled={isAnimating}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Slow</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="normal"
                checked={animationSpeed === 'normal'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'normal')}
                disabled={isAnimating}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Normal</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="speed"
                value="fast"
                checked={animationSpeed === 'fast'}
                onChange={(e) => setAnimationSpeed(e.target.value as 'fast')}
                disabled={isAnimating}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </label>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isAnimating}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="px-6 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <span className="text-sm font-bold text-purple-900 dark:text-purple-100">
                Step {currentStep + 1} / {steps.length}
              </span>
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || isAnimating}
              variant="outline"
              size="lg"
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">productExceptSelf.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto max-h-96 overflow-y-auto">
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
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">i:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{steps[currentStep].index}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">leftProduct:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{steps[currentStep].leftProduct}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">rightProduct:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].rightProduct}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">output:</span>
                        <span className="font-semibold text-amber-600 dark:text-amber-400">[{steps[currentStep].output.join(',')}]</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-700 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400">Phase:</span>
                      <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded font-medium">
                        {steps[currentStep].phase}
                      </span>
                    </div>
                    <div className="text-slate-400">
                      Step {currentStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step Description */}
          {currentStep >= 0 && (
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-300 dark:border-purple-700 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-purple-600">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className="text-sm font-medium text-purple-900 dark:text-purple-100 mt-0.5">
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'left-pass' && '➡️ Left Pass'}
                      {steps[currentStep].action === 'update-left' && '➕ Update Left Product'}
                      {steps[currentStep].action === 'right-pass' && '⬅️ Right Pass'}
                      {steps[currentStep].action === 'update-right' && '➕ Update Right Product'}
                      {steps[currentStep].action === 'result' && '🎯 Result'}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-purple-900 dark:text-purple-50 pl-14">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          )}

          {/* Array Visualization */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Array Visualization:</p>
              </div>
              
              <div className="space-y-4">
                {/* Input Array */}
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Input: nums = [1, 2, 3, 4]</p>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      {nums.map((val, idx) => {
                        const isCurrent = steps[currentStep].index === idx;
                        
                        return (
                          <div key={idx} className="relative flex flex-col items-center gap-2">
                            <div
                              className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                                isCurrent
                                  ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110'
                                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                              }`}
                            >
                              {val}
                            </div>
                            
                            <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>

                            {isCurrent && (
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                                <div className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/80 px-2.5 py-1 rounded border border-purple-500 shadow-md">
                                  Current
                                </div>
                                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-purple-500"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Output Array */}
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Output: [{steps[currentStep].output.join(', ')}]</p>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      {steps[currentStep].output.map((val, idx) => {
                        const isCurrent = steps[currentStep].index === idx;
                        const isDone = steps[currentStep].phase === 'done';
                        
                        return (
                          <div key={idx} className="relative flex flex-col items-center gap-2">
                            <div
                              className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold text-lg border-2 transition-all duration-700 ${
                                isDone
                                  ? 'bg-green-200 dark:bg-green-800 border-green-500 animate-pulse'
                                  : isCurrent
                                  ? 'bg-purple-200 dark:bg-purple-800 border-purple-500 scale-110'
                                  : val !== 0
                                  ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-400'
                                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300'
                              }`}
                            >
                              {val}
                            </div>
                            
                            <span className="text-xs font-mono text-slate-600 dark:text-slate-400">[{idx}]</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </CardContent>
      </Card>

      {/* Complexity Analysis */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We traverse the array twice (once left-to-right, once right-to-left), resulting in O(n) + O(n) = O(n) time complexity.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We only use constant extra space (leftProduct and rightProduct variables). The output array doesn't count as extra space.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Snippet */}
      <CodeSnippet
        title="Complete Solution"
        language="javascript"
        code={`function productExceptSelf(nums) {
  const output = new Array(nums.length);
  let leftProduct = 1;
  
  // Left pass: Store product of all elements to the left
  for (let i = 0; i < nums.length; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }
  
  // Right pass: Multiply by product of all elements to the right
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return output;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4]));  // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));  // Output: [0, 0, 9, 0, 0]`}
      />
    </div>
  );
}
