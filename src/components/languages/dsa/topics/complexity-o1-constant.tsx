'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Lightbulb, CheckCircle, Play, RotateCcw, Clock, TrendingUp, BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ConstantTimeComplexity() {
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [arraySize, setArraySize] = useState(5);

  // Simulate different array sizes
  const smallArray = Array.from({ length: 5 }, (_, i) => i + 1);
  const mediumArray = Array.from({ length: 10 }, (_, i) => i + 1);
  const largeArray = Array.from({ length: 20 }, (_, i) => i + 1);

  const arrays = {
    5: smallArray,
    10: mediumArray,
    20: largeArray
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);

    // Step 1: Highlight the array
    setTimeout(() => setAnimationStep(1), 500);
    
    // Step 2: Show accessing first element
    setTimeout(() => setAnimationStep(2), 1500);
    
    // Step 3: Show result
    setTimeout(() => setAnimationStep(3), 2500);
    
    // Reset
    setTimeout(() => {
      setAnimationStep(0);
      setIsAnimating(false);
    }, 4000);
  };

  const resetAnimation = () => {
    setAnimationStep(0);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="DSA · Time Complexity"
        title="O(1) - Constant Time Complexity"
        description="The fastest possible time complexity - operations that take the same time regardless of input size."
        colorTheme="orange"
        badges={[
          { label: 'O(1)', variant: 'success' },
          { label: 'Constant Time', variant: 'default' },
          { label: '⚡ Fastest', variant: 'info' },
        ]}
      />

      {/* What is O(1)? */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-green-600" />
            What is O(1) Constant Time?
          </CardTitle>
          <CardDescription>
            The gold standard of algorithm efficiency
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Simple Explanation */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Simple Explanation
            </h4>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>O(1) means "constant time"</strong> - the operation takes the <strong>same amount of time</strong> no matter how big your data is!
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-green-300 dark:border-green-600">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 font-semibold">
                  Real-World Analogy: 🏠 Opening Your Front Door
                </p>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Opening your front door takes <strong>1 second</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>It doesn't matter if your house has 1 room or 100 rooms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Opening the door <strong>always takes the same time</strong> ⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Key Characteristics</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Predictable</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Same execution time every single time, guaranteed!
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Instant</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Direct access - no searching or looping required
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Scalable</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Works perfectly even with millions of items
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Efficient</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  The ideal complexity - can't get better than this!
                </p>
              </div>
            </div>
          </div>

          <Alert className="border-green-200 dark:border-green-700">
            <Zap className="h-5 w-5 text-green-600" />
            <AlertTitle>Why O(1) is Amazing</AlertTitle>
            <AlertDescription>
              O(1) operations are the foundation of efficient algorithms. When you can solve a problem in constant time, 
              it means your solution will work just as fast with 10 items as it would with 10 million items!
            </AlertDescription>
          </Alert>

        </CardContent>
      </Card>

      {/* Interactive Animation */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-6 h-6 text-orange-600" />
            Interactive Animation: Array Access
          </CardTitle>
          <CardDescription>
            Watch how O(1) works - accessing an array element is instant, regardless of array size!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Array Size Selector */}
          <div className="flex items-center justify-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Array Size:</span>
            <div className="flex gap-2">
              {[5, 10, 20].map((size) => (
                <Button
                  key={size}
                  onClick={() => {
                    setArraySize(size);
                    resetAnimation();
                  }}
                  variant={arraySize === size ? "default" : "outline"}
                  size="sm"
                  disabled={isAnimating}
                  className={arraySize === size ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {size} items
                </Button>
              ))}
            </div>
          </div>

          {/* Animation Display */}
          <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            
            {/* Step Indicator */}
            <div className="text-center mb-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {animationStep === 0 && "Ready to access arr[0]"}
                {animationStep === 1 && "🎯 Locating array in memory..."}
                {animationStep === 2 && "⚡ Directly accessing index 0"}
                {animationStep === 3 && `✅ Got value: ${arrays[arraySize as keyof typeof arrays][0]} (Instant!)`}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Array size: {arraySize} elements | Time taken: <strong className="text-green-600">Same for all sizes!</strong>
              </p>
            </div>

            {/* Array Visualization */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {arrays[arraySize as keyof typeof arrays].map((num, idx) => (
                <div
                  key={idx}
                  className={`
                    relative w-12 h-12 flex flex-col items-center justify-center rounded-lg font-mono text-sm font-bold
                    transition-all duration-500
                    ${idx === 0 && animationStep >= 2
                      ? 'bg-green-500 text-white scale-110 shadow-lg ring-4 ring-green-300'
                      : animationStep >= 1
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border-2 border-blue-300 dark:border-blue-700'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600'
                    }
                  `}
                >
                  <span>{num}</span>
                  <span className="absolute -bottom-5 text-xs text-slate-500 dark:text-slate-400">[{idx}]</span>
                </div>
              ))}
            </div>

            {/* Access Arrow */}
            {animationStep >= 2 && (
              <div className="flex justify-center mb-4 animate-bounce">
                <div className="text-4xl">👆</div>
              </div>
            )}

            {/* Time Comparison */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className={`p-3 rounded-lg text-center ${arraySize === 5 ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' : 'bg-slate-100 dark:bg-slate-800'}`}>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">5 items</div>
                <div className="font-bold text-green-600">1 step ⚡</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${arraySize === 10 ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' : 'bg-slate-100 dark:bg-slate-800'}`}>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">10 items</div>
                <div className="font-bold text-green-600">1 step ⚡</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${arraySize === 20 ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' : 'bg-slate-100 dark:bg-slate-800'}`}>
                <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">20 items</div>
                <div className="font-bold text-green-600">1 step ⚡</div>
              </div>
            </div>

            <div className="text-center mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-300 dark:border-green-700">
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                🎉 Notice: Same time for all array sizes! That's O(1)!
              </p>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={startAnimation}
              disabled={isAnimating}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
            >
              <Play className="w-4 h-4 mr-2" />
              {isAnimating ? 'Playing...' : 'Play Animation'}
            </Button>
            <Button
              onClick={resetAnimation}
              disabled={isAnimating}
              variant="outline"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

        </CardContent>
      </Card>

      {/* Common O(1) Operations */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            Common O(1) Operations
          </CardTitle>
          <CardDescription>Real-world examples of constant time operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            {/* Array Operations */}
            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                1. Array Access by Index
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    arr[0] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Get first element<br/>
                    arr[5] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Get element at index 5<br/>
                    arr[arr.length - 1] // Get last element
                  </code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-green-700 dark:text-green-300">Why O(1):</strong> Arrays store elements in consecutive memory locations. 
                  The computer can calculate the exact memory address instantly using: <code>base_address + (index × element_size)</code>
                </p>
              </div>
            </div>

            {/* Hash Map Operations */}
            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                2. Hash Map/Object Operations
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    map.get(key) &nbsp;&nbsp;&nbsp;// Get value by key<br/>
                    map.set(key, val) // Set key-value pair<br/>
                    obj['name'] &nbsp;&nbsp;&nbsp;&nbsp;// Access object property
                  </code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-blue-700 dark:text-blue-300">Why O(1):</strong> Hash functions convert keys directly to memory addresses. 
                  No need to search - just compute the hash and go straight to the location!
                </p>
              </div>
            </div>

            {/* Stack/Queue Operations */}
            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                3. Stack & Queue Operations
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    stack.push(item) &nbsp;&nbsp;// Add to stack<br/>
                    stack.pop() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Remove from stack<br/>
                    queue.enqueue(item) // Add to queue<br/>
                    queue.dequeue() &nbsp;&nbsp;&nbsp;// Remove from queue
                  </code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-purple-700 dark:text-purple-300">Why O(1):</strong> Adding/removing from the end (stack) or 
                  maintaining pointers to front/back (queue) requires no searching - just update pointers!
                </p>
              </div>
            </div>

            {/* Math Operations */}
            <div className="p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                4. Simple Math & Comparisons
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-amber-200 dark:border-amber-800">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    a + b &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Addition<br/>
                    a * b &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Multiplication<br/>
                    a === b &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Comparison<br/>
                    Math.max(a, b) &nbsp;// Get maximum
                  </code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-amber-700 dark:text-amber-300">Why O(1):</strong> Basic arithmetic and comparison operations 
                  are single CPU instructions - they take a fixed amount of time regardless of the values!
                </p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            Important Things to Remember
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <Alert className="border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-950/20">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-900 dark:text-green-100">O(1) Doesn't Mean "Fast"</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  O(1) means <strong>constant</strong>, not necessarily fast! An O(1) operation could take 1 second or 1 hour - 
                  the key is it takes the <strong>same time</strong> regardless of input size.
                </p>
                <p className="text-xs text-green-700 dark:text-green-300">
                  Example: Accessing arr[0] on a slow computer might take 10ms, but it still takes 10ms whether the array has 10 or 10 million elements!
                </p>
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Multiple O(1) Operations</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Doing multiple constant time operations is still O(1)!
                </p>
                <div className="mt-2 p-3 bg-white dark:bg-slate-900 rounded border border-blue-200">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    let x = arr[0]; &nbsp;&nbsp;// O(1)<br/>
                    let y = arr[1]; &nbsp;&nbsp;// O(1)<br/>
                    let z = x + y; &nbsp;&nbsp;&nbsp;// O(1)<br/>
                    <span className="text-blue-700 dark:text-blue-300">// Total: O(1) + O(1) + O(1) = O(3) = O(1)</span>
                  </code>
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                  We drop constants in Big O, so O(3) = O(1). As long as you're not looping, you're constant time!
                </p>
              </AlertDescription>
            </Alert>

            <Alert className="border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20">
              <Zap className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">When to Use O(1) Thinking</AlertTitle>
              <AlertDescription>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Always ask: "Can I solve this with direct access instead of searching?"
                </p>
                <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• ✅ Use arrays when you know the index you need</div>
                  <div>• ✅ Use hash maps to avoid searching through lists</div>
                  <div>• ✅ Store frequently needed values in variables</div>
                  <div>• ✅ Cache computed results for instant retrieval</div>
                </div>
              </AlertDescription>
            </Alert>

          </div>
        </CardContent>
      </Card>

    </div>
  );
}
