'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Zap,
  Database,
  TrendingUp,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface CacheEntry {
  input: number;
  output: number;
  isHit: boolean;
  timestamp: number;
}

export default function JavaScriptMemoizationNew() {
  const [fibCalls, setFibCalls] = useState(0);
  const [memoFibCalls, setMemoFibCalls] = useState(0);
  const [fibResult, setFibResult] = useState<number | null>(null);
  const [memoFibResult, setMemoFibResult] = useState<number | null>(null);

  // Animation state
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [cacheState, setCacheState] = useState<CacheEntry[]>([]);
  const [currentCall, setCurrentCall] = useState<{ input: number; isHit: boolean } | null>(null);

  const fibSequence = [5, 3, 2, 1, 0, 1, 2, 4, 3, 5]; // Fibonacci(5) call sequence

  useEffect(() => {
    if (isAnimating && animationStep < fibSequence.length) {
      const timer = setTimeout(() => {
        const input = fibSequence[animationStep];
        const existingEntry = cacheState.find(e => e.input === input);
        
        if (existingEntry) {
          // Cache hit
          setCurrentCall({ input, isHit: true });
        } else {
          // Cache miss - compute and store
          const output = input <= 1 ? input : 
            (cacheState.find(e => e.input === input - 1)?.output || 0) + 
            (cacheState.find(e => e.input === input - 2)?.output || 0);
          
          setCurrentCall({ input, isHit: false });
          setCacheState(prev => [...prev, { 
            input, 
            output, 
            isHit: false,
            timestamp: Date.now() 
          }]);
        }
        
        setAnimationStep(prev => prev + 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (animationStep >= fibSequence.length) {
      setIsAnimating(false);
      setCurrentCall(null);
    }
  }, [animationStep, isAnimating]);

  const startAnimation = () => {
    setAnimationStep(0);
    setCacheState([]);
    setCurrentCall(null);
    setIsAnimating(true);
  };

  const resetAnimation = () => {
    setAnimationStep(0);
    setCacheState([]);
    setCurrentCall(null);
    setIsAnimating(false);
  };

  // Regular Fibonacci (inefficient)
  const fibonacci = (n: number): number => {
    setFibCalls(prev => prev + 1);
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // Memoized Fibonacci
  const cache: Record<number, number> = {};
  const memoizedFibonacci = (n: number): number => {
    setMemoFibCalls(prev => prev + 1);
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    cache[n] = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
    return cache[n];
  };

  const runFibonacci = () => {
    setFibCalls(0);
    const result = fibonacci(10);
    setFibResult(result);
  };

  const runMemoizedFibonacci = () => {
    setMemoFibCalls(0);
    Object.keys(cache).forEach(key => delete cache[Number(key)]);
    const result = memoizedFibonacci(10);
    setMemoFibResult(result);
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Database}
        category="JavaScript Design Patterns"
        title="Memoization"
        description="Cache function results for performance optimization"
        colorTheme="yellow"
      />

      {/* What is Memoization? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/20 dark:from-amber-950/10 dark:via-yellow-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Memoization: Remember the Past
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-amber-700 dark:text-amber-400">Memoization</strong> is a technique where you <strong>cache</strong> the results of expensive function calls and return the cached result when the same inputs occur again. Perfect for optimization!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-amber-200 dark:border-amber-800/30">
            <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-lg">Key Concept</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Same input → Same output? Store it! Don't recalculate expensive operations.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Animated Cache Visualization */}
      <Card className="border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50/50 via-fuchsia-50/30 to-pink-50/20 dark:from-purple-950/10 dark:via-fuchsia-950/5 dark:to-pink-950/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle>Cache Visualization</CardTitle>
                <CardDescription>Watch how memoization caches fibonacci(5) results</CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={startAnimation}
                disabled={isAnimating}
                className="bg-purple-500 hover:bg-purple-600 text-white"
                size="sm"
              >
                <Play className="w-4 h-4 mr-1" />
                Start
              </Button>
              <Button
                onClick={resetAnimation}
                variant="outline"
                size="sm"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Call Display */}
          {currentCall && (
            <div className={`p-4 rounded-lg border-2 transition-all duration-500 ${
              currentCall.isHit 
                ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-400 dark:border-green-700 animate-pulse'
                : 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-400 dark:border-blue-700'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {currentCall.isHit ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  )}
                  <div>
                    <p className="font-mono font-semibold text-lg text-gray-800 dark:text-gray-200">
                      fibonacci({currentCall.input})
                    </p>
                    <p className={`text-sm font-semibold ${
                      currentCall.isHit 
                        ? 'text-green-700 dark:text-green-400' 
                        : 'text-blue-700 dark:text-blue-400'
                    }`}>
                      {currentCall.isHit ? '✅ Cache Hit - Retrieved from cache!' : '🔵 Cache Miss - Computing...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!currentCall && animationStep === 0 && (
            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Click Start to see how memoization caches function results
              </p>
            </div>
          )}

          {animationStep >= fibSequence.length && (
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-400 dark:border-green-700">
              <p className="text-center font-semibold text-green-700 dark:text-green-400">
                🎉 Animation Complete! fibonacci(5) = {cacheState.find(e => e.input === 5)?.output || 5}
              </p>
            </div>
          )}

          {/* Cache Storage */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Cache Storage:
            </h4>
            
            <div className="min-h-[200px] p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-2 border-slate-200 dark:border-slate-800">
              {cacheState.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-slate-400 dark:text-slate-600 text-lg">
                    Cache is empty
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {cacheState.map((entry, index) => (
                    <div
                      key={`${entry.input}-${index}`}
                      className="p-4 rounded-lg bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-purple-700 shadow-sm transform transition-all duration-500 hover:scale-105"
                      style={{
                        animation: 'slideInUp 0.5s ease-out'
                      }}
                    >
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Input</p>
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white font-bold text-lg mb-2">
                          {entry.input}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Output</p>
                        <p className="font-mono font-bold text-lg text-purple-700 dark:text-purple-400">
                          {entry.output}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Function Calls</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{animationStep}</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cache Hits</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {animationStep - cacheState.length}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cache Size</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{cacheState.length}</p>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Notice the Pattern?</AlertTitle>
            <AlertDescription>
              Each unique input is computed once and cached. Subsequent calls with the same input are instant cache hits! 
              This is the power of memoization.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/20 dark:from-emerald-950/10 dark:via-teal-950/5 dark:to-cyan-950/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Performance Demo: Fibonacci(10)</CardTitle>
              <CardDescription>Compare function calls with and without memoization</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without Memoization */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                <span className="text-xl">🐢</span>
                Without Memoization
              </h4>
              <Button
                onClick={runFibonacci}
                className="w-full mb-4 bg-red-500 hover:bg-red-600 text-white"
              >
                Run Regular Fibonacci
              </Button>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Function Calls:</span>
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">{fibCalls}</span>
                </div>
                {fibResult !== null && (
                  <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Result:</span>
                    <span className="text-xl font-bold text-red-600 dark:text-red-400">{fibResult}</span>
                  </div>
                )}
              </div>
            </div>

            {/* With Memoization */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4 flex items-center gap-2">
                <span className="text-xl">🚀</span>
                With Memoization
              </h4>
              <Button
                onClick={runMemoizedFibonacci}
                className="w-full mb-4 bg-green-500 hover:bg-green-600 text-white"
              >
                Run Memoized Fibonacci
              </Button>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Function Calls:</span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">{memoFibCalls}</span>
                </div>
                {memoFibResult !== null && (
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Result:</span>
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">{memoFibResult}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Notice the Difference?</AlertTitle>
            <AlertDescription>
              Regular Fibonacci: <strong>177 calls</strong> 😱<br/>
              Memoized Fibonacci: <strong>19 calls</strong> 🎉<br/>
              That's a <strong>90%+ reduction</strong> in function calls!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Implementation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Memoization</CardTitle>
              <CardDescription>Simple caching pattern</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Without Memo */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Without Memoization</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Slow - recalculates every time
function expensiveOperation(n) {
  console.log('Computing for', n);
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  return result;
}

expensiveOperation(5); // Computes
expensiveOperation(5); // Computes AGAIN!
expensiveOperation(5); // Still computing!`}</pre>
              </div>
            </div>

            {/* With Memo */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With Memoization</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Fast - cache results
const cache = {};

function expensiveOperation(n) {
  if (n in cache) {
    console.log('Cache hit for', n);
    return cache[n];
  }
  
  console.log('Computing for', n);
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  cache[n] = result;
  return result;
}

expensiveOperation(5); // Computes once
expensiveOperation(5); // Cache hit! ⚡
expensiveOperation(5); // Cache hit! ⚡`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Generic Memoize Function"
        description="Reusable memoization wrapper"
        code={`// Generic memoize utility
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log('Cache hit:', args);
      return cache[key];
    }
    
    console.log('Computing:', args);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Use with any function
const add = (a, b) => {
  // Simulate expensive operation
  for (let i = 0; i < 1000000; i++) {}
  return a + b;
};

const memoizedAdd = memoize(add);

console.log(memoizedAdd(5, 3));  // Computing: [5, 3] → 8
console.log(memoizedAdd(5, 3));  // Cache hit: [5, 3] → 8
console.log(memoizedAdd(10, 2)); // Computing: [10, 2] → 12
console.log(memoizedAdd(5, 3));  // Cache hit: [5, 3] → 8

// Works with multiple arguments
const multiply = (a, b, c) => a * b * c;
const memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(2, 3, 4));  // 24 (computed)
console.log(memoizedMultiply(2, 3, 4));  // 24 (cached)

// Fibonacci with memoization
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast! ⚡`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Advanced Memoization */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Advanced Memoization</CardTitle>
              <CardDescription>Cache size limits and TTL</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">LRU Cache with Max Size</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Least Recently Used cache
function memoizeWithLimit(fn, limit = 100) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      // Move to end (mark as recently used)
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }
    
    const result = fn.apply(this, args);
    
    // Remove oldest if at limit
    if (cache.size >= limit) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    
    cache.set(key, result);
    return result;
  };
}

// With Time-To-Live (TTL)
function memoizeWithTTL(fn, ttl = 5000) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < ttl) {
      console.log('Valid cache hit');
      return cached.value;
    }
    
    const result = fn.apply(this, args);
    cache.set(key, {
      value: result,
      timestamp: Date.now()
    });
    
    return result;
  };
}

// Usage
const fetchUser = memoizeWithTTL(async (id) => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}, 5000); // Cache for 5 seconds

await fetchUser(1); // API call
await fetchUser(1); // Cached (within 5s)
// After 5 seconds...
await fetchUser(1); // Fresh API call`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="When to Use Memoization"
        description="Best practices and gotchas"
        code={`// Memoize utility function
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// ✅ Good use cases:

// 1. Pure functions with expensive calculations
const factorial = memoize((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

// 2. API calls with same parameters
const getUser = memoize(async (userId) => {
  const response = await fetch(\`/api/users/\${userId}\`);
  return response.json();
});

// 3. Complex data transformations
const processData = memoize((data) => {
  return data
    .filter(item => item.active)
    .map(item => ({
      ...item,
      processed: true,
      value: item.value * 2
    }))
    .reduce((acc, item) => {
      acc.total += item.value;
      acc.count++;
      return acc;
    }, { total: 0, count: 0 });
});

// ❌ Bad use cases:

// 1. Non-deterministic functions
const badMemo1 = memoize(() => Math.random()); // Always returns same!
const badMemo2 = memoize(() => Date.now());     // Stuck in time!

// 2. Functions with side effects
const badMemo3 = memoize((value) => {
  console.log(value);  // Won't log on cache hit
  database.save(value); // Won't save on cache hit!
  return value;
});

// 3. Large objects as arguments
const badMemo4 = memoize((obj) => {
  // JSON.stringify(obj) can be slow for large objects
  return obj.value * 2;
});

// 4. Functions called with unique arguments
const badMemo5 = memoize((timestamp) => {
  return timestamp * 2;
});
badMemo5(Date.now()); // Always different, never cached!

// Best practices:
// - Use for pure functions only
// - Consider memory vs. speed tradeoff
// - Implement cache size limits
// - Add TTL for data that changes
// - Monitor cache hit rate`}
        language="javascript"
        colorTheme="yellow"
        icon={Database}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: React Component"
        description="Memoization in React with useMemo (simulated)"
        code={`// Simulating React's useMemo hook
function useMemo(factory, deps) {
  // In real React, this checks if deps changed
  return factory();
}

function useState(initial) {
  // Simplified - returns state and setter
  let state = initial;
  return [state, (newState) => { state = newState; }];
}

function DataDashboard(props) {
  const data = props.data;
  const [filter, setFilter] = useState('all');
  
  // ❌ Without memoization - recalculates on every render
  const stats = {
    total: data.length,
    active: data.filter(item => item.status === 'active').length,
    revenue: data.reduce((sum, item) => sum + item.revenue, 0)
  };
  console.log('Stats (recalculated every time):', stats);
  
  // ✅ With memoization - only recalculates when data changes
  const memoizedStats = useMemo(() => ({
    total: data.length,
    active: data.filter(item => item.status === 'active').length,
    revenue: data.reduce((sum, item) => sum + item.revenue, 0)
  }), [data]); // Only recompute if data changes
  
  // Heavy filtering operation
  const filteredData = useMemo(() => {
    console.log('Filtering data...');
    return data.filter(item => {
      if (filter === 'all') return true;
      return item.category === filter;
    });
  }, [data, filter]); // Only recompute if data or filter changes
  
  console.log('Memoized stats:', memoizedStats);
  console.log('Filtered data:', filteredData);
  console.log('Filter:', filter);
  
  return 'Component rendered with memoized values';
}

// Custom memoization hook
function useExpensiveCalculation(compute, deps) {
  return useMemo(() => {
    console.log('Computing expensive value...');
    return compute();
  }, deps);
}

// Usage example
function MyComponent(props) {
  const numbers = props.numbers;
  
  const sum = useExpensiveCalculation(
    () => numbers.reduce((a, b) => a + b, 0),
    [numbers]
  );
  
  console.log('Memoized sum:', sum);
  return sum;
}

// Demo
const sampleData = [
  { id: 1, name: 'Item 1', status: 'active', revenue: 100, category: 'tech' },
  { id: 2, name: 'Item 2', status: 'inactive', revenue: 200, category: 'sales' }
];

DataDashboard({ data: sampleData });
MyComponent({ numbers: [1, 2, 3, 4, 5] });

// In actual React:
// import React, { useMemo, useState } from 'react';`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Cache Results</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store expensive computation results<br/>
                    Return cached value for same inputs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance Boost</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dramatic speedup for recursive functions<br/>
                    Avoid redundant calculations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pure Functions Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works with deterministic functions<br/>
                    No side effects allowed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Trade-offs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Uses memory for cache<br/>
                    Add size limits and TTL when needed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Memoization trades memory for speed. Use it for expensive, pure functions called repeatedly with the same inputs. Monitor cache hit rates to ensure it's actually helping!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
