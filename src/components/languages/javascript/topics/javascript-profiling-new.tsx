'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  Zap,
  BarChart3,
  Clock,
  Flame,
  Target,
} from 'lucide-react';

export default function JavaScriptProfilingNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={BarChart3}
        category="JavaScript Design Patterns"
        title="JavaScript Profiling"
        description="Find and fix performance bottlenecks"
        colorTheme="yellow"
      />

      {/* What is Profiling? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-yellow-50/20 dark:from-orange-950/10 dark:via-amber-950/5 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Profiling: Find the Slow Parts 🔍
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-orange-700 dark:text-orange-400">Profiling</strong> is the process of measuring where your code spends time and which functions consume the most CPU resources. Instead of guessing what's slow, profiling shows you exactly where the bottlenecks are so you can optimize effectively.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-orange-200 dark:border-orange-800/30">
            <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-lg">Why Profile?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              "Premature optimization is the root of all evil" - Don't optimize randomly! Profile first to find actual bottlenecks, then optimize those specific areas.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Types of Profiling */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Types of Profiling</CardTitle>
              <CardDescription>What you can measure</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500 text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">1. CPU Profiling</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Measures how much CPU time each function uses. Shows which functions are "expensive" (take a long time to execute).
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">What it reveals:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Which functions take the longest to run</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>How much time is spent in each function</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Call frequency (how often functions are called)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Heavy computation areas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500 text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">2. Memory Profiling</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  Tracks memory allocation and usage over time. Helps identify memory leaks and excessive memory consumption.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">What it reveals:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Memory allocation patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Objects taking up the most memory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Memory leaks (growing memory)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Garbage collection frequency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Profile */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Flame className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>How to Profile in Chrome DevTools</CardTitle>
              <CardDescription>Step-by-step guide</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="text-lg font-bold mb-3 text-blue-900 dark:text-blue-200">CPU Profile (Performance Tab)</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Open DevTools <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">F12</kbd></p>
              <p><strong>Step 2:</strong> Go to <strong>Performance</strong> tab</p>
              <p><strong>Step 3:</strong> Click <strong>Record</strong> button (⏺️)</p>
              <p><strong>Step 4:</strong> Perform the slow action in your app</p>
              <p><strong>Step 5:</strong> Click <strong>Stop</strong> button</p>
              <p><strong>Step 6:</strong> Analyze the flame chart</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="text-lg font-bold mb-3 text-green-900 dark:text-green-200">Memory Profile (Memory Tab)</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Step 1:</strong> Open DevTools <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">F12</kbd></p>
              <p><strong>Step 2:</strong> Go to <strong>Memory</strong> tab</p>
              <p><strong>Step 3:</strong> Select <strong>"Heap snapshot"</strong></p>
              <p><strong>Step 4:</strong> Click <strong>Take snapshot</strong></p>
              <p><strong>Step 5:</strong> Perform actions, take another snapshot</p>
              <p><strong>Step 6:</strong> Compare snapshots to see memory changes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reading Flame Charts */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Understanding Flame Charts</CardTitle>
              <CardDescription>The visualization that shows performance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A <strong>flame chart</strong> is a visual representation of your code's execution. Each bar represents a function call, and the width shows how long it took.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900 border-2 border-slate-200 dark:border-slate-800">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">How to Read Flame Charts</h4>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-orange-500">
                <h5 className="font-bold text-orange-800 dark:text-orange-300 mb-2">📊 X-Axis (Horizontal)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Represents <strong>time</strong>. Left = earlier, Right = later. Wider bars = longer execution time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-2">📈 Y-Axis (Vertical)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Represents <strong>call stack depth</strong>. Bottom = outer functions, Top = inner functions (nested calls).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-red-500">
                <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">🔥 Colors</h5>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p><strong className="text-yellow-600">Yellow:</strong> JavaScript execution</p>
                  <p><strong className="text-purple-600">Purple:</strong> Rendering/Layout</p>
                  <p><strong className="text-green-600">Green:</strong> Painting</p>
                  <p><strong className="text-blue-600">Blue:</strong> Loading/Parsing</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-purple-500">
                <h5 className="font-bold text-purple-800 dark:text-purple-300 mb-2">🎯 What to Look For</h5>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>Wide bars:</strong> Functions taking a long time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>Tall stacks:</strong> Deep function nesting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>Repeated patterns:</strong> Functions called many times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Bottlenecks */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Performance Bottlenecks</CardTitle>
              <CardDescription>What profiling usually reveals</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">1. Heavy Loops</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Processing large arrays with complex operations in each iteration
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Solution:</strong> Break into smaller chunks, use Web Workers, or optimize the loop logic
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">2. Excessive DOM Manipulation</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Constantly updating the DOM, causing reflows and repaints
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Solution:</strong> Batch DOM updates, use document fragments, or virtual DOM
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">3. Inefficient Algorithms</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Using O(n²) or worse algorithms on large datasets
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Solution:</strong> Use more efficient algorithms and data structures (Maps, Sets)
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">4. Unnecessary Calculations</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Recalculating the same values repeatedly
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Solution:</strong> Cache results (memoization), move calculations outside loops
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">5. Large Object Creation</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Creating many large objects, triggering frequent garbage collection
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Solution:</strong> Object pooling, reuse objects, reduce allocations
            </p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">6. Synchronous Operations</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Problem:</strong> Blocking the main thread with long synchronous operations
            </p>
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Solution:</strong> Use async/await, Web Workers, or requestIdleCallback
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Profiling Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Profiling Best Practices</CardTitle>
              <CardDescription>How to profile effectively</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ DO: Profile in Production Mode
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Development builds include extra debugging code. Always profile with production/optimized builds to get accurate results.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ DO: Profile Real User Scenarios
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Test with realistic data volumes and user interactions. Don't profile with empty arrays or trivial inputs.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ DO: Focus on the Biggest Wins
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Optimize functions that take the most time first. A 50% improvement in a function that takes 1% of time is less valuable than 10% improvement in a function that takes 50% of time.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
              ❌ DON'T: Optimize Without Profiling
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Don't guess where the bottleneck is. Measure first, optimize second. You might be optimizing the wrong thing!
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h5 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
              ❌ DON'T: Profile Just Once
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Profile before and after optimizations to verify improvements. Sometimes "optimizations" make things worse!
            </p>
          </div>
        </CardContent>
      </Card>

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
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Measure First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't guess bottlenecks<br/>
                    Profile to find actual issues<br/>
                    Use Chrome DevTools Performance tab
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Flame Charts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Visual execution representation<br/>
                    Width = time taken<br/>
                    Height = call stack depth
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Focus on Impact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimize expensive functions first<br/>
                    Look for wide bars in flame chart<br/>
                    Biggest wins = most time saved
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Before & After</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Profile before optimization<br/>
                    Profile after to verify improvement<br/>
                    Compare results objectively
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Record multiple profiles and look for consistent patterns. One profile might be affected by browser background tasks. Average results from several profiles for more accurate insights.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
