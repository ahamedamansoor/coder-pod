'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Lightbulb,
  CheckCircle2,
  Zap,
  Code2,
  Target,
  Eye,
  MousePointer,
  RefreshCw,
  AlertCircle,
  Settings,
  TrendingUp,
  Calculator,
  Clock,
} from 'lucide-react';

export default function UseMemoHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Calculator}
        category="React · Hooks (Comprehensive)"
        title="useMemo Hook"
        description="Master useMemo to memoize expensive calculations and optimize React component performance by caching computed values."
        colorTheme="purple"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useMemo */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Calculator className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What is useMemo?"
              description="Memoizing expensive calculations"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">useMemo</code> returns a <strong>memoized value</strong>. It caches the result of an expensive calculation between re-renders until its dependencies change, preventing unnecessary recalculations.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Syntax</h4>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <span className="text-purple-600">const</span> memoizedValue = <span className="text-blue-600">useMemo</span>(() {'=>'} {'{}'}
                  </div>
                  <div className="ml-4 text-slate-800 dark:text-slate-200">
                    <span className="text-purple-600">return</span> <span className="text-blue-400">expensiveCalculation</span>(<span className="text-orange-400">a</span>, <span className="text-orange-400">b</span>);
                  </div>
                  <div className="text-slate-800 dark:text-slate-200">
                    {'})'}, [<span className="text-orange-400">dependencies</span>]);
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Without useMemo</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mb-2">
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-purple-600">const</span> result = <span className="text-blue-400">expensiveCalculation</span>(data);
                    </div>
                    <div className="text-red-600 dark:text-red-400 text-xs">// Runs every render!</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Expensive calculation runs on every re-render!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">With useMemo</h4>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mb-2">
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-purple-600">const</span> result = <span className="text-blue-600">useMemo</span>(() {'=>'} {'{}'}
                    </div>
                    <div className="ml-2 text-slate-800 dark:text-slate-200">
                      <span className="text-purple-600">return</span> <span className="text-blue-400">expensiveCalculation</span>(data);
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      {'})'}, [data]); <span className="text-green-600 dark:text-green-400 text-xs">// Cached!</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Calculation only runs when data changes!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">When to Use?</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Use useMemo for expensive calculations, data transformations, filtering large arrays, or any computation that's costly and doesn't need to run on every render!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* useMemo vs useCallback */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="useMemo vs useCallback"
              description="Understanding the key differences"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              While both hooks optimize performance, they serve different purposes. <strong>useMemo</strong> memoizes <strong>values</strong>, while <strong>useCallback</strong> memoizes <strong>functions</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">useMemo</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Caches calculated values</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Returns the <strong>result</strong> of a function
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Used for expensive computations
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mt-3">
                    <div className="font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <span className="text-blue-600">useMemo</span>(() {'=>'} {'{}'}
                      </div>
                      <div className="ml-2 text-slate-800 dark:text-slate-200">
                        <span className="text-purple-600">return</span> data.<span className="text-yellow-400">filter</span>(...);
                      </div>
                      <div className="text-slate-800 dark:text-slate-200">
                        {'})'}, [data]);
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">useCallback</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Caches function instances</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Returns the <strong>function itself</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Used for callback functions
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mt-3">
                    <div className="font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <span className="text-blue-600">useCallback</span>(() {'=>'} {'{}'}
                      </div>
                      <div className="ml-2 text-slate-800 dark:text-slate-200">
                        <span className="text-blue-400">setData</span>(data.<span className="text-yellow-400">filter</span>(...));
                      </div>
                      <div className="text-slate-800 dark:text-slate-200">
                        {'})'}, [data]);
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Key Insight</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>useCallback(fn, deps)</strong> is equivalent to <strong>useMemo(() {'=>'} fn, deps)</strong> - useCallback is just a special case of useMemo for functions!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useMemo progressively"
              size="lg"
            />

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Import useMemo</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, import useMemo from React at the top of your component file.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> <span className="text-blue-400">React</span>, {'{'} <span className="text-blue-600">useMemo</span> {'}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Pro Tip</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              You can import multiple hooks: {'{'} useState, useEffect, useMemo {'}'}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Wrap Expensive Calculation</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Wrap your expensive calculation with useMemo to cache the result.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">expensiveValue</span> = <span className="text-blue-600">useMemo</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Running expensive calculation...'</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> data.<span className="text-yellow-400">reduce</span>((<span className="text-orange-400">sum</span>, <span className="text-orange-400">item</span>) {'=>'} sum + item.<span className="text-orange-400">value</span>, <span className="text-green-600">0</span>);
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, [data]); <span className="text-slate-500">// Dependency array</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Key Point</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              The calculation only runs when dependencies in the array change!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                          <MousePointer className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use Dependencies Wisely</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Include only the variables that your calculation depends on.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [users, setUsers] = <span className="text-blue-600">useState</span>([]);
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [searchTerm, setSearchTerm] = <span className="text-blue-600">useState</span>(<span className="text-green-600">''</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">filteredUsers</span> = <span className="text-blue-600">useMemo</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> users.<span className="text-yellow-400">filter</span>(<span className="text-orange-400">user</span> {'=>'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            user.<span className="text-orange-400">name</span>.<span className="text-yellow-400">toLowerCase</span>().<span className="text-yellow-400">includes</span>(searchTerm.<span className="text-yellow-400">toLowerCase</span>())
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, [users, searchTerm]); <span className="text-slate-500">// Both dependencies</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertCircle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Important</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Missing dependencies can cause stale data. Too many dependencies reduce optimization benefits!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Use in JSX</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the memoized value in your component's JSX.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">UserList</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">filteredUsers</span> = <span className="text-blue-600">useMemo</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> users.<span className="text-yellow-400">filter</span>(...);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'}, [users]);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'{}'}filteredUsers.<span className="text-yellow-400">map</span>(<span className="text-orange-400">user</span> {'=>'} (
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">UserCard</span> <span className="text-green-400">key</span>={'{'}user.id{'}'} <span className="text-orange-400">user</span>={'{'}user{'}'} /&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'})'})
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Key Point</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              The filtered list is only recalculated when the users array changes!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example: Optimized Data Processing"
            description="Expensive calculations with useMemo optimization"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Data Processing with useMemo"
            description="Filter and calculate statistics efficiently"
            colorTheme="blue"
            react={`function DataProcessor() {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Book', price: 29, category: 'Education' },
    { id: 3, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 4, name: 'Course', price: 199, category: 'Education' },
    { id: 5, name: 'Tablet', price: 399, category: 'Electronics' }
  ]);
  
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [minPrice, setMinPrice] = React.useState(0);
  const [rerender, setRerender] = React.useState(0);

  // Memoized filtered products - only recalculates when filters change
  const filteredProducts = React.useMemo(() => {
    console.log('🔄 Filtering products...');
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const priceMatch = product.price >= minPrice;
      return categoryMatch && priceMatch;
    });
  }, [products, selectedCategory, minPrice]);

  // Memoized statistics - only recalculates when filtered products change
  const statistics = React.useMemo(() => {
    console.log('📊 Calculating statistics...');
    const total = filteredProducts.reduce((sum, product) => sum + product.price, 0);
    const average = filteredProducts.length > 0 ? total / filteredProducts.length : 0;
    
    // Fix Math.max/Math.min with empty arrays
    const prices = filteredProducts.map(p => p.price);
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const minPriceActual = prices.length > 0 ? Math.min(...prices) : 0;
    
    return {
      total,
      average: average.toFixed(2),
      maxPrice,
      minPrice: minPriceActual,
      count: filteredProducts.length
    };
  }, [filteredProducts]);

  // Memoized categories list - only recalculates when products change
  const categories = React.useMemo(() => {
    console.log('📋 Extracting categories...');
    const cats = ['All', ...new Set(products.map(p => p.category))];
    return cats;
  }, [products]);

  return (
    <div className="container">
      <h1>📊 useMemo Data Processing</h1>
      
      <div className="controls">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Min Price: {'$'}{minPrice}</label>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        
        <button onClick={() => setRerender(r => r + 1)} className="btn-secondary">
          Force Re-render ({rerender})
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <div className="stat-value">{statistics.count}</div>
        </div>
        <div className="stat-card">
          <h3>Total Value</h3>
          <div className="stat-value">{'$'}{statistics.total}</div>
        </div>
        <div className="stat-card">
          <h3>Average Price</h3>
          <div className="stat-value">{'$'}{statistics.average}</div>
        </div>
        <div className="stat-card">
          <h3>Price Range</h3>
          <div className="stat-value">{'$'}{statistics.minPrice} - {'$'}{statistics.maxPrice}</div>
        </div>
      </div>

      <div className="products">
        <h3>Filtered Products ({filteredProducts.length})</h3>
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.category}</p>
            </div>
            <div className="product-price">
              {'$'}{product.price}
            </div>
          </div>
        ))}
      </div>

      <div className="info">
        💡 Check the console to see when calculations run. They only run when dependencies change!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataProcessor />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useMemo } = React;
  const { createRoot } = ReactDOM;

  function DataProcessor() {
    const [products, setProducts] = useState([
      { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
      { id: 2, name: 'Book', price: 29, category: 'Education' },
      { id: 3, name: 'Phone', price: 699, category: 'Electronics' },
      { id: 4, name: 'Course', price: 199, category: 'Education' },
      { id: 5, name: 'Tablet', price: 399, category: 'Electronics' }
    ]);
    
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [minPrice, setMinPrice] = useState(0);
    const [rerender, setRerender] = useState(0);

    const filteredProducts = useMemo(() => {
      console.log('🔄 Filtering products...');
      return products.filter(product => {
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        const priceMatch = product.price >= minPrice;
        return categoryMatch && priceMatch;
      });
    }, [products, selectedCategory, minPrice]);

    const statistics = useMemo(() => {
      console.log('📊 Calculating statistics...');
      const total = filteredProducts.reduce((sum, product) => sum + product.price, 0);
      const average = filteredProducts.length > 0 ? total / filteredProducts.length : 0;
      
      // Fix Math.max/Math.min with empty arrays
      const prices = filteredProducts.map(p => p.price);
      const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
      const minPriceActual = prices.length > 0 ? Math.min(...prices) : 0;
      
      return {
        total,
        average: average.toFixed(2),
        maxPrice,
        minPrice: minPriceActual,
        count: filteredProducts.length
      };
    }, [filteredProducts]);

    const categories = useMemo(() => {
      console.log('📋 Extracting categories...');
      const cats = ['All', ...new Set(products.map(p => p.category))];
      return cats;
    }, [products]);

    return h('div', { className: 'container' },
      h('h1', null, '📊 useMemo Data Processing'),
      
      h('div', { className: 'controls' },
        h('div', { className: 'filter-group' },
          h('label', null, 'Category:'),
          h('select', {
            value: selectedCategory,
            onChange: (e) => setSelectedCategory(e.target.value)
          },
            categories.map(cat =>
              h('option', { key: cat, value: cat }, cat)
            )
          )
        ),
        
        h('div', { className: 'filter-group' },
          h('label', null, \`Min Price: $\${minPrice}\`),
          h('input', {
            type: 'range',
            min: '0',
            max: '1000',
            value: minPrice,
            onChange: (e) => setMinPrice(Number(e.target.value))
          })
        ),
        
        h('button', {
          onClick: () => setRerender(r => r + 1),
          className: 'btn-secondary'
        }, \`Force Re-render (\${rerender})\`)
      ),

      h('div', { className: 'stats-grid' },
        h('div', { className: 'stat-card' },
          h('h3', null, 'Total Products'),
          h('div', { className: 'stat-value' }, statistics.count)
        ),
        h('div', { className: 'stat-card' },
          h('h3', null, 'Total Value'),
          h('div', { className: 'stat-value' }, \`$\${statistics.total}\`)
        ),
        h('div', { className: 'stat-card' },
          h('h3', null, 'Average Price'),
          h('div', { className: 'stat-value' }, \`$\${statistics.average}\`)
        ),
        h('div', { className: 'stat-card' },
          h('h3', null, 'Price Range'),
          h('div', { className: 'stat-value' }, \`$\${statistics.minPrice} - $\${statistics.maxPrice}\`)
        )
      ),

      h('div', { className: 'products' },
        h('h3', null, \`Filtered Products (\${filteredProducts.length})\`),
        filteredProducts.map(product =>
          h('div', { key: product.id, className: 'product-card' },
            h('div', { className: 'product-info' },
              h('h4', null, product.name),
              h('p', null, product.category)
            ),
            h('div', { className: 'product-price' },
              \`$\${product.price}\`
            )
          )
        )
      ),

      h('div', { className: 'info' },
        '💡 Check the console to see when calculations run. They only run when dependencies change!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(DataProcessor));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  max-width: 1000px;
  width: 100%;
}

h1 {
  color: #7c3aed;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;
}

.controls {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-group {
  flex: 1;
  min-width: 200px;
}

.filter-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 600;
}

.filter-group select,
.filter-group input {
  width: 100%;
  padding: 10px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
}

.btn-secondary {
  padding: 12px 24px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 20px;
  border-radius: 16px;
  border: 2px solid #f59e0b;
  text-align: center;
}

.stat-card h3 {
  color: #92400e;
  margin-bottom: 10px;
  font-size: 1rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  color: #451a03;
}

.products {
  background: #f9fafb;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.products h3 {
  color: #374151;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-info h4 {
  color: #374151;
  margin-bottom: 4px;
}

.product-info p {
  color: #6b7280;
  font-size: 14px;
}

.product-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #059669;
}

.info {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  text-align: center;
  font-size: 16px;
  color: #1e40af;
  font-weight: 600;
}

@media (max-width: 768px) {
  .controls {
    flex-direction: column;
  }
  
  .filter-group {
    width: 100%;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  h1 {
    font-size: 2rem;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #c4b5fd;
  }

  .controls {
    background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  }

  .filter-group label {
    color: #d1d5db;
  }

  .filter-group select,
  .filter-group input {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }

  .filter-group select:focus,
  .filter-group input:focus {
    border-color: #a78bfa;
  }

  .stat-card {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
  }

  .stat-card h3 {
    color: #fef3c7;
  }

  .stat-value {
    color: #fffbeb;
  }

  .products {
    background: #111827;
  }

  .products h3 {
    color: #d1d5db;
  }

  .product-card {
    background: #1f2937;
  }

  .product-card:hover {
    background: #374151;
  }

  .product-info h4 {
    color: #f3f4f6;
  }

  .product-info p {
    color: #9ca3af;
  }

  .product-price {
    color: #34d399;
  }

  .info {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
    color: #dbeafe;
  }
}`}
          />
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Key Takeaways"
              description="Essential useMemo concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Calculator className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Memoizes Values</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns same computed value between renders until dependencies change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Performance Boost</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prevents expensive calculations from running on every render.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Dependency Array</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calculation only runs when dependencies in the array change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use Judiciously</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't overuse! Only for truly expensive calculations.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Performance Tool!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                useMemo is a performance optimization. Use it for expensive computations, data filtering, sorting, or any calculation that's costly and doesn't need to run on every render!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
