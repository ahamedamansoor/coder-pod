'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Scale, BookOpen, TrendingUp, Zap, Database, Clock, DollarSign } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function SpaceTimeTradeoffs() {
  const [selectedExample, setSelectedExample] = useState<'fibonacci' | 'search' | 'string'>('fibonacci');

  const examples = {
    fibonacci: {
      name: 'Fibonacci Number',
      problem: 'Calculate fib(40)',
      approach1: {
        name: 'Recursive (No Extra Space)',
        time: 'O(2^n)',
        space: 'O(n)',
        speed: 'Very Slow',
        speedValue: 10,
        description: 'Recalculates same values millions of times'
      },
      approach2: {
        name: 'Memoization (With Cache)',
        time: 'O(n)',
        space: 'O(n)',
        speed: 'Very Fast',
        speedValue: 95,
        description: 'Stores calculated values in hash map'
      },
      savings: 'From 1.6 billion operations to just 40!'
    },
    search: {
      name: 'Find Element',
      problem: 'Search in 1M elements',
      approach1: {
        name: 'Linear Search',
        time: 'O(n)',
        space: 'O(1)',
        speed: 'Slow',
        speedValue: 30,
        description: 'Check every element one by one'
      },
      approach2: {
        name: 'Hash Table',
        time: 'O(1)',
        space: 'O(n)',
        speed: 'Instant',
        speedValue: 98,
        description: 'Pre-store all elements with O(1) lookup'
      },
      savings: 'From 1M comparisons to 1!'
    },
    string: {
      name: 'String Matching',
      problem: 'Find pattern in text',
      approach1: {
        name: 'Brute Force',
        time: 'O(n×m)',
        space: 'O(1)',
        speed: 'Slow',
        speedValue: 25,
        description: 'Check every position'
      },
      approach2: {
        name: 'KMP Algorithm',
        time: 'O(n+m)',
        space: 'O(m)',
        speed: 'Fast',
        speedValue: 90,
        description: 'Build prefix table (extra space)'
      },
      savings: 'Skip redundant comparisons!'
    },
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Scale}
        category="DSA · Space Complexity"
        title="Space-Time Tradeoffs"
        description="Trading memory for speed - the classic computer science dilemma"
        colorTheme="purple"
        badges={[
          { label: 'Tradeoff Analysis', variant: 'default' },
          { label: 'Optimization', variant: 'secondary' },
          { label: '⚖️ Balance', variant: 'outline' },
        ]}
      />

      {/* Restaurant Delivery Analogy */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-purple-600" />
            What are Space-Time Tradeoffs?
          </CardTitle>
          <CardDescription>
            The fundamental choice: Use more memory to go faster, or save memory but go slower
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Restaurant Analogy */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Restaurant Delivery! 🍕
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-purple-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You run a pizza restaurant. Customers keep ordering the same popular pizzas. 
                <strong> How do you serve them faster?</strong>
              </p>

              <div className="space-y-4">
                {/* Approach 1: Cook on Demand */}
                <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🐌</div>
                    <div>
                      <h5 className="font-bold text-red-900 dark:text-red-100 mb-1">Approach 1: Cook Every Order Fresh</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Customer orders → Start cooking from scratch → 30 minutes wait
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 bg-white dark:bg-slate-900 rounded">
                          <span className="font-bold text-green-600">Space:</span> Minimal kitchen
                        </div>
                        <div className="p-2 bg-white dark:bg-slate-900 rounded">
                          <span className="font-bold text-red-600">Time:</span> Very slow
                        </div>
                      </div>
                      <p className="text-xs text-red-700 dark:text-red-300 mt-2 font-semibold">
                        = <strong>Low Space, High Time</strong> (like naive recursion)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Approach 2: Pre-Make Popular Pizzas */}
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h5 className="font-bold text-green-900 dark:text-green-100 mb-1">Approach 2: Pre-Make & Store Popular Pizzas</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Keep 20 ready-made pizzas in warmer → Customer orders → Instant delivery!
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 bg-white dark:bg-slate-900 rounded">
                          <span className="font-bold text-red-600">Space:</span> Big warmer needed
                        </div>
                        <div className="p-2 bg-white dark:bg-slate-900 rounded">
                          <span className="font-bold text-green-600">Time:</span> Very fast!
                        </div>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300 mt-2 font-semibold">
                        = <strong>High Space, Low Time</strong> (like memoization/caching)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Tradeoff Visualization */}
            <div className="p-5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border-2 border-purple-300">
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-3 text-center">⚖️ The Tradeoff Scale</h5>
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="text-3xl mb-2">🐌</div>
                  <p className="text-xs font-bold text-red-700 dark:text-red-300">Slow but<br/>Memory Efficient</p>
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <Scale className="w-12 h-12 text-purple-600" />
                </div>
                
                <div className="text-center flex-1">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-xs font-bold text-green-700 dark:text-green-300">Fast but<br/>Uses More Memory</p>
                </div>
              </div>
              <p className="text-xs text-center text-purple-800 dark:text-purple-200 italic">
                You can't have both! Pick based on your constraints.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm font-bold text-purple-900 dark:text-purple-100 mb-2">
                💡 The Core Principle
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>"Store computed results to avoid recomputing them."</strong> Use memory (space) to save time! 
                This is everywhere: caching, lookup tables, hash maps, memoization, dynamic programming.
              </p>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-6 text-center text-lg">
              📊 Classic Tradeoff Scenarios
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Scenario 1 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💾 Less Space, More Time</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span>Recalculate every time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>Slower execution</span>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded mt-2">
                    <strong>Use when:</strong> Memory limited, values rarely reused
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-3">⚡ More Space, Less Time</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-red-600" />
                    <span>Store results in memory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>Faster execution</span>
                  </div>
                  <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded mt-2">
                    <strong>Use when:</strong> Memory available, same values needed often
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            Real Examples: Before & After
          </CardTitle>
          <CardDescription>See the dramatic difference when trading space for speed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Example Selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedExample('fibonacci')}
                variant={selectedExample === 'fibonacci' ? 'default' : 'outline'}
                className={selectedExample === 'fibonacci' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-300'}
              >
                Fibonacci
              </Button>
              <Button
                onClick={() => setSelectedExample('search')}
                variant={selectedExample === 'search' ? 'default' : 'outline'}
                className={selectedExample === 'search' ? 'bg-indigo-600 hover:bg-indigo-700' : 'border-indigo-300'}
              >
                Search
              </Button>
              <Button
                onClick={() => setSelectedExample('string')}
                variant={selectedExample === 'string' ? 'default' : 'outline'}
                className={selectedExample === 'string' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-300'}
              >
                String Match
              </Button>
            </div>

            {/* Example Display */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-300">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2 text-center">
                {currentExample.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">
                Problem: {currentExample.problem}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Approach 1 */}
                <div className="space-y-4">
                  <div className="p-5 bg-red-50 dark:bg-red-900/30 rounded-xl border-2 border-red-300">
                    <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <span>🐌</span> {currentExample.approach1.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                      {currentExample.approach1.description}
                    </p>

                    <div className="space-y-3">
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Time:</span>
                          <span className="font-mono font-bold text-red-600">{currentExample.approach1.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Space:</span>
                          <span className="font-mono font-bold text-green-600">{currentExample.approach1.space}</span>
                        </div>
                      </div>

                      {/* Speed Bar */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Speed:</span>
                          <span className="text-xs text-red-700 dark:text-red-300">{currentExample.approach1.speed}</span>
                        </div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-500 flex items-center justify-end pr-2 transition-all duration-1000"
                            style={{ width: `${currentExample.approach1.speedValue}%` }}
                          >
                            <span className="text-xs text-white font-bold">{currentExample.approach1.speedValue}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Approach 2 */}
                <div className="space-y-4">
                  <div className="p-5 bg-green-50 dark:bg-green-900/30 rounded-xl border-2 border-green-300">
                    <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <span>⚡</span> {currentExample.approach2.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                      {currentExample.approach2.description}
                    </p>

                    <div className="space-y-3">
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Time:</span>
                          <span className="font-mono font-bold text-green-600">{currentExample.approach2.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Space:</span>
                          <span className="font-mono font-bold text-orange-600">{currentExample.approach2.space}</span>
                        </div>
                      </div>

                      {/* Speed Bar */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Speed:</span>
                          <span className="text-xs text-green-700 dark:text-green-300">{currentExample.approach2.speed}</span>
                        </div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 flex items-center justify-end pr-2 transition-all duration-1000"
                            style={{ width: `${currentExample.approach2.speedValue}%` }}
                          >
                            <span className="text-xs text-white font-bold">{currentExample.approach2.speedValue}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm font-bold text-purple-900 dark:text-purple-100 text-center">
                  🎉 Result: {currentExample.savings}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Techniques */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            Common Space-Time Tradeoff Techniques
          </CardTitle>
          <CardDescription>Where you'll see this principle in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <Database className="w-5 h-5" />
                1. Memoization / Caching
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-purple-700 dark:text-purple-300">Tradeoff:</strong> Store computed results in a cache/hash map. 
                Next time you need it → instant lookup instead of recalculation!
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Time:</strong> O(2^n) → O(n)
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Space:</strong> O(1) → O(n)
                </div>
              </div>
              <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block mt-2">
                {`const cache = {}; if (cache[n]) return cache[n]; // Save O(2^n) work!`}
              </code>
            </div>

            <div className="p-5 rounded-xl border-2 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                2. Hash Tables vs Arrays
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-indigo-700 dark:text-indigo-300">Tradeoff:</strong> Hash table uses more memory but gives O(1) search. 
                Array uses less memory but needs O(n) search.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Time:</strong> O(n) → O(1)
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Space:</strong> O(1) → O(n)
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-pink-50 dark:bg-pink-950/20 border-pink-300">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                3. Lookup Tables / Precomputation
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-pink-700 dark:text-pink-300">Tradeoff:</strong> Precompute expensive values (factorials, primes, sin/cos) 
                and store in array. Query time = instant!
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Time:</strong> O(n) → O(1)
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Space:</strong> O(1) → O(n)
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                4. Dynamic Programming
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <strong className="text-blue-700 dark:text-blue-300">Tradeoff:</strong> Store solutions to subproblems in a table. 
                Trade O(n) space for massive time savings (exponential → polynomial)!
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Time:</strong> O(2^n) → O(n²)
                </div>
                <div className="p-2 bg-white dark:bg-slate-900 rounded">
                  <strong>Space:</strong> O(1) → O(n²)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Choose */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-purple-600" />
            Decision Guide: Which to Choose?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Choose Less Space */}
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100 flex items-center gap-2">
                <span className="text-xl">💾</span> Choose Less Space (Slower)
              </h4>
              
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-300">
                <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">Memory Constrained</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Embedded systems, mobile devices, limited RAM
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300">
                <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">One-Time Computation</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Values computed once, never reused
                </p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-300">
                <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Small Input Size</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Extra optimization not worth complexity
                </p>
              </div>
            </div>

            {/* Choose More Space */}
            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100 flex items-center gap-2">
                <span className="text-xl">⚡</span> Choose More Space (Faster)
              </h4>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Speed Critical</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Real-time systems, user-facing apps, need instant response
                </p>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-300">
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Repeated Queries</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Same values needed many times (caching pays off!)
                </p>
              </div>

              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-300">
                <h5 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Memory Available</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Modern servers, plenty of RAM, why not use it?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm font-bold text-purple-900 dark:text-purple-100 mb-2">
              ⚖️ The Balance
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              <strong>There's no universally "better" choice!</strong> It depends on your constraints. 
              Modern software often trades space for speed (RAM is cheap, time is precious). 
              But embedded systems do the opposite (memory is precious, time is flexible).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
