'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Play, ChevronLeft, ChevronRight, RotateCcw, Target, AlertCircle, CheckCircle, TrendingUp, ArrowRight, DollarSign, Lightbulb, BookOpen } from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function BestTimeBuySellStock() {
  const prices = [7, 1, 5, 3, 6, 4];
  const n = prices.length;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const steps = [
    {
      step: 1,
      index: -1,
      minPrice: Number.POSITIVE_INFINITY,
      maxProfit: 0,
      buyDay: -1,
      sellDay: -1,
      currentLine: 2,
      description: '📋 Initialize: Set minPrice = ∞ (infinity) to track lowest price seen so far',
      action: 'init',
      highlighted: [],
      isProfitUpdate: false
    },
    {
      step: 2,
      index: -1,
      minPrice: Number.POSITIVE_INFINITY,
      maxProfit: 0,
      buyDay: -1,
      sellDay: -1,
      currentLine: 3,
      description: '📋 Initialize: Set maxProfit = 0 (at minimum we make no transaction)',
      action: 'init',
      highlighted: [],
      isProfitUpdate: false
    },
    {
      step: 3,
      index: 0,
      minPrice: Number.POSITIVE_INFINITY,
      maxProfit: 0,
      buyDay: -1,
      sellDay: -1,
      currentLine: 5,
      description: '🔄 Day 0: Examining price = $7',
      action: 'loop-start',
      highlighted: [0],
      isProfitUpdate: false
    },
    {
      step: 4,
      index: 0,
      minPrice: 7,
      maxProfit: 0,
      buyDay: 0,
      sellDay: -1,
      currentLine: 6,
      description: '💰 Update minPrice: min(∞, 7) = $7. This is our buying opportunity!',
      action: 'update-min',
      highlighted: [0],
      isProfitUpdate: false
    },
    {
      step: 5,
      index: 0,
      minPrice: 7,
      maxProfit: 0,
      buyDay: 0,
      sellDay: -1,
      currentLine: 10,
      description: '📊 Calculate Profit: price - minPrice = 7 - 7 = $0. No profit yet.',
      action: 'calculate',
      highlighted: [0],
      isProfitUpdate: false
    },
    {
      step: 6,
      index: 0,
      minPrice: 7,
      maxProfit: 0,
      buyDay: 0,
      sellDay: -1,
      currentLine: 11,
      description: '❌ Check maxProfit: max(0, 0) = $0. No update needed.',
      action: 'check',
      highlighted: [0],
      isProfitUpdate: false
    },
    {
      step: 7,
      index: 1,
      minPrice: 7,
      maxProfit: 0,
      buyDay: 0,
      sellDay: -1,
      currentLine: 5,
      description: '🔄 Day 1: Examining price = $1',
      action: 'loop-start',
      highlighted: [1],
      isProfitUpdate: false
    },
    {
      step: 8,
      index: 1,
      minPrice: 1,
      maxProfit: 0,
      buyDay: 1,
      sellDay: -1,
      currentLine: 6,
      description: '💰 Update minPrice: min(7, 1) = $1. Better buying opportunity found!',
      action: 'update-min',
      highlighted: [1],
      isProfitUpdate: false
    },
    {
      step: 9,
      index: 1,
      minPrice: 1,
      maxProfit: 0,
      buyDay: 1,
      sellDay: -1,
      currentLine: 10,
      description: '📊 Calculate Profit: price - minPrice = 1 - 1 = $0. Still no profit.',
      action: 'calculate',
      highlighted: [1],
      isProfitUpdate: false
    },
    {
      step: 10,
      index: 1,
      minPrice: 1,
      maxProfit: 0,
      buyDay: 1,
      sellDay: -1,
      currentLine: 11,
      description: '❌ Check maxProfit: max(0, 0) = $0. No update needed.',
      action: 'check',
      highlighted: [1],
      isProfitUpdate: false
    },
    {
      step: 11,
      index: 2,
      minPrice: 1,
      maxProfit: 0,
      buyDay: 1,
      sellDay: -1,
      currentLine: 5,
      description: '🔄 Day 2: Examining price = $5',
      action: 'loop-start',
      highlighted: [2],
      isProfitUpdate: false
    },
    {
      step: 12,
      index: 2,
      minPrice: 1,
      maxProfit: 0,
      buyDay: 1,
      sellDay: -1,
      currentLine: 6,
      description: '💰 Check minPrice: min(1, 5) = $1. Keep current buy price.',
      action: 'check-min',
      highlighted: [1, 2],
      isProfitUpdate: false
    },
    {
      step: 13,
      index: 2,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 10,
      description: '📊 Calculate Profit: price - minPrice = 5 - 1 = $4. Good profit!',
      action: 'calculate',
      highlighted: [1, 2],
      isProfitUpdate: false
    },
    {
      step: 14,
      index: 2,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 11,
      description: '✅ Update maxProfit: max(0, 4) = $4. New maximum profit found!',
      action: 'update-max',
      highlighted: [1, 2],
      isProfitUpdate: true
    },
    {
      step: 15,
      index: 3,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 5,
      description: '🔄 Day 3: Examining price = $3',
      action: 'loop-start',
      highlighted: [3],
      isProfitUpdate: false
    },
    {
      step: 16,
      index: 3,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 6,
      description: '💰 Check minPrice: min(1, 3) = $1. Keep current buy price.',
      action: 'check-min',
      highlighted: [1, 3],
      isProfitUpdate: false
    },
    {
      step: 17,
      index: 3,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 10,
      description: '📊 Calculate Profit: price - minPrice = 3 - 1 = $2. Lower than current max.',
      action: 'calculate',
      highlighted: [1, 3],
      isProfitUpdate: false
    },
    {
      step: 18,
      index: 3,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 11,
      description: '❌ Check maxProfit: max(4, 2) = $4. No update needed.',
      action: 'check',
      highlighted: [1, 2],
      isProfitUpdate: false
    },
    {
      step: 19,
      index: 4,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 5,
      description: '🔄 Day 4: Examining price = $6',
      action: 'loop-start',
      highlighted: [4],
      isProfitUpdate: false
    },
    {
      step: 20,
      index: 4,
      minPrice: 1,
      maxProfit: 4,
      buyDay: 1,
      sellDay: 2,
      currentLine: 6,
      description: '💰 Check minPrice: min(1, 6) = $1. Keep current buy price.',
      action: 'check-min',
      highlighted: [1, 4],
      isProfitUpdate: false
    },
    {
      step: 21,
      index: 4,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 10,
      description: '📊 Calculate Profit: price - minPrice = 6 - 1 = $5. Even better profit!',
      action: 'calculate',
      highlighted: [1, 4],
      isProfitUpdate: false
    },
    {
      step: 22,
      index: 4,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 11,
      description: '✅ Update maxProfit: max(4, 5) = $5. New maximum profit found!',
      action: 'update-max',
      highlighted: [1, 4],
      isProfitUpdate: true
    },
    {
      step: 23,
      index: 5,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 5,
      description: '🔄 Day 5: Examining price = $4 (last day)',
      action: 'loop-start',
      highlighted: [5],
      isProfitUpdate: false
    },
    {
      step: 24,
      index: 5,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 6,
      description: '💰 Check minPrice: min(1, 4) = $1. Keep current buy price.',
      action: 'check-min',
      highlighted: [1, 5],
      isProfitUpdate: false
    },
    {
      step: 25,
      index: 5,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 10,
      description: '📊 Calculate Profit: price - minPrice = 4 - 1 = $3. Lower than current max.',
      action: 'calculate',
      highlighted: [1, 5],
      isProfitUpdate: false
    },
    {
      step: 26,
      index: 5,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 11,
      description: '❌ Check maxProfit: max(5, 3) = $5. No update needed.',
      action: 'check',
      highlighted: [1, 4],
      isProfitUpdate: false
    },
    {
      step: 27,
      index: -1,
      minPrice: 1,
      maxProfit: 5,
      buyDay: 1,
      sellDay: 4,
      currentLine: 14,
      description: '🎯 Return maxProfit = $5. Buy on day 1 at $1, sell on day 4 at $6!',
      action: 'result',
      highlighted: [1, 4],
      isProfitUpdate: false
    }
  ];

  const getCodeWithValues = (stepData: typeof steps[0]) => {
    const minPriceDisplay = stepData.minPrice === Number.POSITIVE_INFINITY ? '∞' : stepData.minPrice;
    const showLoopVars = stepData.index >= 0;
    const currentPrice = showLoopVars ? prices[stepData.index] : 0;
    const profit = showLoopVars && stepData.minPrice !== Number.POSITIVE_INFINITY ? currentPrice - stepData.minPrice : 0;
    
    return [
      { line: 1, code: 'function maxProfit(prices) {', active: false, indent: 0, values: stepData.currentLine >= 1 ? `prices=[${prices.map(p => '$' + p).join(',')}]` : '' },
      { line: 2, code: '  let minPrice = Infinity;', active: stepData.currentLine === 2, indent: 1, values: stepData.currentLine >= 2 ? `minPrice=${minPriceDisplay === '∞' ? '∞' : '$' + minPriceDisplay}` : '' },
      { line: 3, code: '  let maxProfit = 0;', active: stepData.currentLine === 3, indent: 1, values: stepData.currentLine >= 3 ? `maxProfit=$${stepData.maxProfit}` : '' },
      { line: 4, code: '  ', active: false, indent: 1, values: '' },
      { line: 5, code: '  for (let i = 0; i < prices.length; i++) {', active: stepData.currentLine === 5, indent: 1, values: showLoopVars ? `i=${stepData.index}, i<${prices.length}? ${stepData.index < prices.length ? 'true' : 'false'}` : '' },
      { line: 6, code: '    minPrice = Math.min(minPrice, prices[i]);', active: stepData.currentLine === 6 || stepData.action === 'update-min' || stepData.action === 'check-min', indent: 2, values: showLoopVars ? `prices[${stepData.index}]=$${currentPrice}, min($${minPriceDisplay}, $${currentPrice})=$${stepData.minPrice === Number.POSITIVE_INFINITY ? currentPrice : Math.min(stepData.minPrice, currentPrice)}` : '' },
      { line: 7, code: '    let profit = prices[i] - minPrice;', active: stepData.currentLine === 10 || stepData.action === 'calculate', indent: 2, values: showLoopVars && stepData.minPrice !== Number.POSITIVE_INFINITY ? `profit=$${currentPrice}-$${stepData.minPrice}=$${profit}` : '' },
      { line: 8, code: '    maxProfit = Math.max(maxProfit, profit);', active: stepData.currentLine === 11 || stepData.action === 'update-max' || stepData.action === 'check', indent: 2, values: showLoopVars ? `max($${stepData.maxProfit}, $${profit})=$${Math.max(stepData.maxProfit, profit)}` : '' },
      { line: 9, code: '  }', active: false, indent: 1, values: '' },
      { line: 10, code: '  return maxProfit;', active: stepData.currentLine === 14, indent: 1, values: stepData.action === 'result' ? `return $${stepData.maxProfit}` : '' },
      { line: 11, code: '}', active: false, indent: 0, values: '' },
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
        icon={DollarSign}
        category="DSA · Arrays"
        title="Best Time to Buy and Sell Stock"
        description="Find the maximum profit by buying and selling stock once using a single-pass greedy algorithm."
        colorTheme="green"
        badges={[
          { label: 'Time: O(n)', variant: 'success' },
          { label: 'Space: O(1)', variant: 'info' },
          { label: 'Greedy Algorithm', variant: 'default' },
        ]}
      />

      {/* Visual Problem Statement */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-green-600" />
            Understanding the Problem Visually
          </CardTitle>
          <CardDescription>Let's break down the stock trading problem with clear examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* What is the Problem? */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              What is "Best Time to Buy and Sell Stock"?
            </h4>
            
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Given an array of stock <strong>prices</strong> where <code>prices[i]</code> is the price on day <code>i</code>, find the <strong>maximum profit</strong> you can achieve from <strong>one transaction</strong> (buy once, sell once).
              </p>

              {/* Example */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-green-300 dark:border-green-600">
                <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-3">Example: prices = [7, 1, 5, 3, 6, 4]</p>
                
                <div className="space-y-3">
                  {/* Visual Price Chart */}
                  <div className="flex items-end justify-center gap-2 h-24">
                    {prices.map((price, idx) => (
                      <div key={idx} className="relative flex flex-col items-center gap-1">
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300">${price}</div>
                        <div
                          className={`w-12 rounded-t transition-all ${
                            idx === 1 ? 'bg-red-500' : idx === 4 ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'
                          }`}
                          style={{ height: `${price * 10}px` }}
                        ></div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Day {idx}</div>
                      </div>
                    ))}
                  </div>

                  {/* Transaction explanation */}
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-400">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-bold text-red-700 dark:text-red-300">Buy</span> on Day 1 at <span className="font-mono">$1</span>
                      </div>
                      <span className="text-2xl">→</span>
                      <div>
                        <span className="font-bold text-green-700 dark:text-green-300">Sell</span> on Day 4 at <span className="font-mono">$6</span>
                      </div>
                      <span className="text-2xl">=</span>
                      <div className="px-3 py-1 bg-green-600 text-white rounded-lg font-bold">
                        Profit: $5
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-900 dark:text-amber-100">Important Rules</AlertTitle>
                <AlertDescription className="text-amber-800 dark:text-amber-200 space-y-1">
                  <div>• You must <strong>buy before you sell</strong> (can't sell before buying)</div>
                  <div>• Only <strong>one transaction</strong> allowed (one buy + one sell)</div>
                  <div>• If no profit possible, return <strong>0</strong></div>
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* The Greedy Approach */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              The Greedy Approach: Track Minimum Price
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The key insight: <strong>Always buy at the lowest price seen so far</strong>, then calculate profit for selling at current price.
              </p>

              <div className="space-y-3">
                {/* Strategy 1 */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Strategy 1: Track Minimum Buy Price</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Keep updating <code className="text-blue-700 dark:text-blue-300">minPrice</code> as we traverse - this represents the best buying opportunity so far
                      </p>
                      <code className="text-xs text-blue-700 dark:text-blue-300 block mt-2">
                        minPrice = min(minPrice, currentPrice)
                      </code>
                    </div>
                  </div>
                </div>

                {/* Strategy 2 */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-green-700 dark:text-green-300 mb-2">Strategy 2: Calculate Potential Profit</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        At each day, calculate profit if we sell today after buying at <code className="text-green-700 dark:text-green-300">minPrice</code>
                      </p>
                      <code className="text-xs text-green-700 dark:text-green-300 block mt-2">
                        profit = currentPrice - minPrice
                      </code>
                    </div>
                  </div>
                </div>

                {/* Strategy 3 */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Strategy 3: Track Maximum Profit</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Keep updating <code className="text-purple-700 dark:text-purple-300">maxProfit</code> whenever we find a better profit
                      </p>
                      <code className="text-xs text-purple-700 dark:text-purple-300 block mt-2">
                        maxProfit = max(maxProfit, profit)
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Algorithm */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              How the Algorithm Works
            </h4>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Initialize Variables</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Set <code>minPrice = ∞</code> and <code>maxProfit = 0</code></div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Iterate Through Prices</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400">For each day, update minimum price and calculate potential profit</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Update Maximum Profit</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Track the best profit found across all days</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Return Result</div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Return <code>maxProfit</code> - the best transaction found</div>
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
                <span><strong>Single Pass:</strong> Only need one traversal through array - O(n) time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Greedy Choice:</strong> Always buy at lowest price seen so far</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>No Look-Ahead:</strong> Decision made based only on past and present, not future</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Constant Space:</strong> Only two variables needed regardless of input size</span>
              </div>
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Complexity Analysis - SHOWN EARLY FOR BASICS */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle>Complexity Analysis</CardTitle>
          <CardDescription>Understanding the efficiency of our solution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                ⏱️ Time Complexity: O(n)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                We traverse the array exactly once, performing constant-time operations (min, max, subtraction) at each element. This makes the solution extremely efficient for any input size.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                💾 Space Complexity: O(1)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Only uses two variables (minPrice and maxProfit) regardless of input size, making it a space-efficient solution with constant auxiliary space.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Visualization */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Step-by-Step Animation
          </CardTitle>
          <CardDescription>Watch how we find the best buy and sell days</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={isAnimating}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
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
                className="w-4 h-4 text-green-600 focus:ring-green-500"
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
                className="w-4 h-4 text-green-600 focus:ring-green-500"
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
                className="w-4 h-4 text-green-600 focus:ring-green-500"
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
            
            <div className="px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-2 border-green-300 dark:border-green-700">
              <span className="text-sm font-bold text-green-900 dark:text-green-100">
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
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 ml-2">stock.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Running</span>
                </div>
              </div>

              <div className="p-3 font-mono text-xs leading-tight overflow-x-auto">
                {getCodeWithValues(steps[currentStep]).map((lineData) => {
                  const isComment = lineData.code.trim().startsWith('//');
                  return (
                    <div
                      key={lineData.line}
                      className={`flex items-center gap-3 py-0.5 px-2 -mx-2 rounded transition-all duration-300 ${
                        lineData.active
                          ? 'bg-green-50 dark:bg-green-900/20 border-l-2 border-green-400 dark:border-green-500'
                          : ''
                      } ${isComment ? 'opacity-60' : ''}`}
                    >
                    <span className={`select-none w-6 text-right flex-shrink-0 ${
                      lineData.active
                        ? 'text-green-600 dark:text-green-400 font-semibold'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {lineData.line}
                    </span>

                    <code className="flex-1 text-slate-700 dark:text-slate-300">
                      <span style={{ marginLeft: `${lineData.indent * 16}px` }}>
                        {lineData.code}
                      </span>
                      {lineData.values && (
                        <span className="ml-3 text-green-600 dark:text-green-400 font-semibold">
                          {lineData.values}
                        </span>
                      )}
                    </code>
                  </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Day:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{steps[currentStep].index >= 0 ? steps[currentStep].index : '-'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">minPrice:</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">{steps[currentStep].minPrice === Number.POSITIVE_INFINITY ? '∞' : `$${steps[currentStep].minPrice}`}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">maxProfit:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">${steps[currentStep].maxProfit}</span>
                      </div>
                      {steps[currentStep].index >= 0 && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 dark:text-slate-400">price:</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">${prices[steps[currentStep].index]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-700 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400">Action:</span>
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded font-medium">
                        {steps[currentStep].action}
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

          {/* Step Description - INNOVATIVE DESIGN */}
          {currentStep >= 0 && (
            <div className="mb-6">
              {/* Step Header with Progress */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`relative ${
                    steps[currentStep].isProfitUpdate ? 'animate-pulse' : ''
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg ${
                      steps[currentStep].isProfitUpdate
                        ? 'bg-gradient-to-br from-emerald-500 to-green-500'
                        : 'bg-gradient-to-br from-green-500 to-teal-500'
                    }`}>
                      {steps[currentStep].step}
                    </div>
                    {steps[currentStep].isProfitUpdate && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-xs">⭐</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Step {steps[currentStep].step} of {steps.length}
                    </div>
                    <div className={`text-base font-bold mt-0.5 ${
                      steps[currentStep].isProfitUpdate
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : 'text-green-700 dark:text-green-300'
                    }`}>
                      {steps[currentStep].action === 'init' && '🚀 Initialization'}
                      {steps[currentStep].action === 'loop-start' && '🔄 Examining Day'}
                      {steps[currentStep].action === 'update-min' && '💰 Update Buy Price'}
                      {steps[currentStep].action === 'check-min' && '💰 Check Buy Price'}
                      {steps[currentStep].action === 'calculate' && '📊 Calculate Profit'}
                      {steps[currentStep].action === 'check' && '❌ Check Profit'}
                      {steps[currentStep].action === 'update-max' && '✅ Maximum Profit Updated!'}
                      {steps[currentStep].action === 'result' && '🎯 Final Result'}
                    </div>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Progress:</span>
                  <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                      style={{ width: `${((steps[currentStep].step) / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                    {Math.round(((steps[currentStep].step) / steps.length) * 100)}%
                  </span>
                </div>
              </div>

              {/* Main Step Content Card */}
              <div className={`relative overflow-hidden rounded-xl border-2 shadow-xl transition-all duration-300 ${
                steps[currentStep].isProfitUpdate
                  ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/40 dark:via-green-950/40 dark:to-teal-950/40 border-emerald-400 dark:border-emerald-600'
                  : 'bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-green-950/40 dark:via-teal-950/40 dark:to-cyan-950/40 border-green-400 dark:border-green-600'
              }`}>
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 opacity-20 ${
                  steps[currentStep].isProfitUpdate
                    ? 'bg-gradient-to-bl from-emerald-400 to-transparent'
                    : 'bg-gradient-to-bl from-green-400 to-transparent'
                }`}></div>
                
                {/* Content */}
                <div className="relative p-6">
                  {/* Description with icon */}
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      steps[currentStep].isProfitUpdate
                        ? 'bg-emerald-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}>
                      {steps[currentStep].action === 'init' && '📋'}
                      {steps[currentStep].action === 'loop-start' && '🔄'}
                      {steps[currentStep].action === 'update-min' && '💰'}
                      {steps[currentStep].action === 'check-min' && '🔍'}
                      {steps[currentStep].action === 'calculate' && '📊'}
                      {steps[currentStep].action === 'check' && '⚖️'}
                      {steps[currentStep].action === 'update-max' && '✅'}
                      {steps[currentStep].action === 'result' && '🎯'}
                    </div>
                    <div className="flex-1">
                      <p className={`text-lg leading-relaxed font-medium ${
                        steps[currentStep].isProfitUpdate
                          ? 'text-emerald-900 dark:text-emerald-50'
                          : 'text-green-900 dark:text-green-50'
                      }`}>
                        {steps[currentStep].description}
                      </p>
                    </div>
                  </div>

                  {/* Current State Indicators */}
                  <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex flex-col items-center p-3 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Day</span>
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                          {steps[currentStep].index >= 0 ? steps[currentStep].index : '-'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Min Price</span>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400">
                          {steps[currentStep].minPrice === Number.POSITIVE_INFINITY ? '∞' : `$${steps[currentStep].minPrice}`}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Max Profit</span>
                        <span className={`text-lg font-bold ${
                          steps[currentStep].isProfitUpdate
                            ? 'text-emerald-600 dark:text-emerald-400 animate-pulse'
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`}>
                          ${steps[currentStep].maxProfit}
                        </span>
                      </div>
                      {steps[currentStep].index >= 0 && (
                        <div className="flex flex-col items-center p-3 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                          <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Current Price</span>
                          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            ${prices[steps[currentStep].index]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Price Chart Visualization - BIGGER SIZE */}
          {currentStep >= 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-green-900 dark:text-green-100">📈 Price Chart Visualization:</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-700 rounded text-red-700 dark:text-red-300 font-semibold">
                    Buy: {steps[currentStep].buyDay >= 0 ? `Day ${steps[currentStep].buyDay} ($${prices[steps[currentStep].buyDay]})` : 'Not Set'}
                  </span>
                  {steps[currentStep].sellDay >= 0 && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded text-green-700 dark:text-green-300 font-semibold">
                      Sell: Day {steps[currentStep].sellDay} (${prices[steps[currentStep].sellDay]})
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-end justify-center gap-4 h-64">
                  {prices.map((price, idx) => {
                    const isCurrent = steps[currentStep].index === idx;
                    const isBuyDay = steps[currentStep].buyDay === idx;
                    const isSellDay = steps[currentStep].sellDay === idx;
                    const isInTransaction = idx >= steps[currentStep].buyDay && idx <= steps[currentStep].sellDay && steps[currentStep].sellDay >= 0;
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center gap-2">
                        {/* Price label */}
                        <div className={`text-xs font-bold mb-1 ${
                          isBuyDay ? 'text-red-600 dark:text-red-400' : 
                          isSellDay ? 'text-green-600 dark:text-green-400' :
                          'text-slate-600 dark:text-slate-400'
                        }`}>
                          ${price}
                        </div>

                        {/* Bar */}
                        <div
                          className={`w-16 rounded-t transition-all duration-700 ${
                            isSellDay && steps[currentStep].action === 'result'
                              ? 'bg-gradient-to-t from-green-600 to-green-400 animate-pulse scale-110'
                              : isBuyDay
                              ? 'bg-gradient-to-t from-red-500 to-red-400'
                              : isInTransaction
                              ? 'bg-gradient-to-t from-blue-400 to-blue-300'
                              : isCurrent
                              ? 'bg-gradient-to-t from-orange-400 to-orange-300'
                              : 'bg-gradient-to-t from-slate-300 to-slate-200 dark:from-slate-600 dark:to-slate-500 opacity-60'
                          }`}
                          style={{ height: `${price * 22}px` }}
                        >
                          {isCurrent && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/80 px-2 py-1 rounded border border-orange-500 whitespace-nowrap animate-bounce">
                              Day {idx}
                            </div>
                          )}
                        </div>
                        
                        {/* Day label */}
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Day {idx}</span>

                        {/* Buy/Sell indicators */}
                        {isBuyDay && (
                          <div className="absolute -bottom-8 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded shadow-lg">
                            BUY
                          </div>
                        )}
                        {isSellDay && steps[currentStep].sellDay >= 0 && (
                          <div className="absolute -bottom-8 px-2 py-1 bg-green-600 text-white text-xs font-bold rounded shadow-lg">
                            SELL
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}


        </CardContent>
      </Card>

      {/* Complete Code Snippet */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle>Complete Solution</CardTitle>
          <CardDescription>JavaScript implementation with detailed explanation</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            language="javascript"
            code={`/**
 * @param {number[]} prices
 * @return {number}
 * 
 * Time: O(n) - Single pass through array
 * Space: O(1) - Only two variables used
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (let i = 0; i < prices.length; i++) {
    // Update minimum price if current is lower
    minPrice = Math.min(minPrice, prices[i]);
    
    // Calculate profit if we sell today
    let profit = prices[i] - minPrice;
    
    // Update maximum profit if current is higher
    maxProfit = Math.max(maxProfit, profit);
  }
  
  return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5 (buy at 1, sell at 6)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (no profit possible)`}
          />
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            Key Takeaways
          </CardTitle>
          <CardDescription>Essential insights from this problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-amber-500">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Greedy Algorithm Pattern</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  This problem demonstrates a classic <strong>greedy approach</strong>: always choose the best local option (lowest buy price) without needing to look ahead, and it leads to the global optimum.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-amber-500">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">One-Pass Solution</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Instead of checking all pairs (O(n²)), we track minimum and maximum in a single traversal, achieving <strong>O(n) efficiency</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-amber-500">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">State Tracking Pattern</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Maintain <strong>minimal state</strong> (minPrice, maxProfit) while iterating - a pattern useful in many optimization problems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-amber-500">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Profit Calculation Logic</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  At each position, we calculate potential profit if we sell today: <code className="text-amber-700 dark:text-amber-300">currentPrice - minPriceSoFar</code>. This ensures we always buy before we sell.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-amber-500">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Edge Cases Handled</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  The solution naturally handles edge cases: declining prices (returns 0), single day (returns 0), and all same prices (returns 0).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Problems */}
      <Card className="border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Related Problems
          </CardTitle>
          <CardDescription>Practice similar patterns and variations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* Problem 1 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Best Time to Buy and Sell Stock II</h4>
                    <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs rounded">Medium</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Multiple transactions allowed - find maximum profit with unlimited buy/sell operations.
                  </p>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    Pattern: Greedy, State Machine
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Best Time to Buy and Sell Stock III</h4>
                    <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs rounded">Hard</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    At most two transactions - requires dynamic programming to track multiple states.
                  </p>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    Pattern: Dynamic Programming, State Machine
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Best Time to Buy and Sell Stock with Cooldown</h4>
                    <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs rounded">Medium</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    After selling stock, must wait one day before buying again - state machine DP problem.
                  </p>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    Pattern: Dynamic Programming, State Machine with Cooldown
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Maximum Subarray Sum (Kadane's Algorithm)</h4>
                    <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs rounded">Medium</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Find contiguous subarray with largest sum - similar greedy tracking pattern.
                  </p>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    Pattern: Greedy, Dynamic Programming
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 5 */}
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Maximum Profit in Job Scheduling</h4>
                    <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs rounded">Hard</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Schedule jobs to maximize profit without overlapping - extends buy/sell concept to intervals.
                  </p>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    Pattern: Dynamic Programming, Binary Search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
