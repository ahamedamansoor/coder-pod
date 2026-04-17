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
  AlertTriangle,
  Zap,
  Eye,
  Clock,
  Target,
  Settings,
  MousePointer,
  RefreshCw,
} from 'lucide-react';

export default function UseLayoutEffectHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Clock}
        category="React · Hooks (Comprehensive)"
        title="useLayoutEffect Hook"
        description="A clear, step-by-step guide to useLayoutEffect — the hook that runs before paint to prevent visual flicker."
        colorTheme="indigo"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useLayoutEffect */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="What is useLayoutEffect?"
              description="Run DOM effects before the browser paints"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded text-sm">useLayoutEffect</code> is just like <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded text-xs">useEffect</code>, but it runs <strong>after React updates the DOM</strong> and <strong>before the browser paints</strong>. That lets you measure layout and fix positions <em>before</em> the user sees anything.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Simple Mental Model</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="font-semibold text-indigo-800 dark:text-indigo-200">1. React updates DOM</p>
                  <p className="text-indigo-700 dark:text-indigo-300">Nodes exist, refs are ready.</p>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="font-semibold text-indigo-800 dark:text-indigo-200">2. useLayoutEffect</p>
                  <p className="text-indigo-700 dark:text-indigo-300">Measure + synchronously update.</p>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="font-semibold text-indigo-800 dark:text-indigo-200">3. Browser paints</p>
                  <p className="text-indigo-700 dark:text-indigo-300">User sees the final layout.</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Performance Warning</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                useLayoutEffect blocks painting. Use it only when you must read layout or fix positioning before the user sees the UI.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why people get confused */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/10 dark:to-gray-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-slate-600 dark:text-slate-400" />}
              title="Why useLayoutEffect Confuses People"
              description="Clearing up common misconceptions"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ Common Misconception</h4>
                <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                  "useLayoutEffect is just useEffect that runs faster"
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Reality:</strong> It's not faster—it blocks the browser from painting! This can actually <strong>slow down</strong> your app if used unnecessarily.
                </p>
              </div>

              <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-3">⚠️ Timing Confusion</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  "When exactly does it run?"
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  <strong>Reality:</strong> It runs immediately after React commits to the DOM, but <strong>before</strong> the browser paints. useEffect runs <strong>after</strong> painting.
                </p>
              </div>

              <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ The Right Way to Think</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  "I need to measure DOM and fix layout before the user sees it"
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Perfect!</strong> This is exactly what useLayoutEffect is for—preventing visual glitches.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* useRef + useLayoutEffect Connection */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="useRef + useLayoutEffect: The Perfect Pair"
              description="Why they work together so well"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">useRef</code> gives you access to DOM elements, and <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">useLayoutEffect</code> lets you measure those elements <strong>before</strong> the browser paints. Together, they prevent visual flicker!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">useRef's Role</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Provides direct access to DOM elements</li>
                  <li>• Lets you measure dimensions and positions</li>
                  <li>• Holds references that persist across renders</li>
                  <li>• Essential for layout calculations</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-3">useLayoutEffect's Role</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Runs after DOM is updated but before paint</li>
                  <li>• Lets you read layout measurements</li>
                  <li>• Synchronously updates styles/positions</li>
                  <li>• Prevents visual flicker</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Perfect Partnership!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                useRef gives you the DOM element, useLayoutEffect gives you the right timing to measure and fix it before the user sees anything!
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
              description="Learn useLayoutEffect progressively"
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
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create a useRef</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, create a ref to hold your DOM element. This is your handle to the actual element in the browser.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a ref for your DOM element</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> elementRef = <span className="text-blue-600">useRef</span>(<span className="text-red-600">null</span>);
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Remember useRef</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              useRef creates a container that holds your DOM element. Start with <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 rounded text-xs">null</code> for DOM refs.
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
                          <MousePointer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Attach Ref to JSX</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Connect your ref to the JSX element using the <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">ref</code> attribute. React will automatically put the DOM element in your ref.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Attach ref to your element</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span> <span className="text-green-400">ref</span>={'{}'}elementRef{'}'}&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {/* Your content */}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">React Magic</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              React automatically puts the DOM element in <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">elementRef.current</code> after mounting!
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
                          <Eye className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use useLayoutEffect</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Now use useLayoutEffect to measure your element and make layout changes <strong>before</strong> the browser paints.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Measure and adjust layout before paint</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useLayoutEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (elementRef.<span className="text-green-400">current</span>) {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> rect = elementRef.<span className="text-green-400">current</span>.<span className="text-blue-400">getBoundingClientRect</span>();
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> height = rect.height;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-comment">// Update state or styles based on measurements</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}, []); <span className="text-slate-500">// Empty array = runs once after mount</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertTriangle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Safety Check</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Always check <code className="px-2 py-1 bg-pink-100 dark:bg-pink-800 rounded text-xs">elementRef.current</code> exists before using it. It's <code className="px-2 py-1 bg-pink-100 dark:bg-pink-800 rounded text-xs">null</code> before mount!
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
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Update Layout</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the measurements to update styles or positions. This happens synchronously, so the browser paints with your corrections already applied.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Update styles based on measurements</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useLayoutEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (elementRef.<span className="text-green-400">current</span>) {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> rect = elementRef.<span className="text-green-400">current</span>.<span className="text-blue-400">getBoundingClientRect</span>();
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> isTooSmall = rect.width &lt; <span className="text-green-600">300</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (isTooSmall) {'{}'}
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            elementRef.<span className="text-green-400">current</span>.style.<span className="text-yellow-400">width</span> = <span className="text-green-600">'300px'</span>;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}, [dependency]); <span className="text-slate-500">// Re-run when dependency changes</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">No Flicker!</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Because this runs before paint, users never see the "wrong" layout. They only see your corrected version!
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

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Interactive Example"
            description="See useRef + useLayoutEffect in action"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Dynamic Tooltip Positioning"
            description="Prevent tooltip flicker with useLayoutEffect"
            colorTheme="indigo"
            react={`function TooltipExample() {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const buttonRef = React.useRef(null);

  // This runs BEFORE the browser paints
  React.useLayoutEffect(() => {
    if (showTooltip && buttonRef.current) {
      // Measure the button position
      const buttonRect = buttonRef.current.getBoundingClientRect();
      
      // Calculate tooltip position (exactly under button)
      const newTop = buttonRect.bottom + 8; // 8px gap
      const newLeft = buttonRect.left + (buttonRect.width / 2); // Center of button
      
      // Update position synchronously BEFORE paint
      setPosition({ top: newTop, left: newLeft });
      
      console.log('Layout measured and fixed before paint!');
    }
  }, [showTooltip]);

  return (
    <div className="container">
      <h2>Hover over the button</h2>
      <p>Notice: No visual flicker when tooltip appears!</p>
      
      <div className="button-container">
        <button 
          ref={buttonRef}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="action-button"
        >
          Hover Me
        </button>

        {showTooltip && (
          <div
            className="tooltip"
            style={{
              position: 'fixed',
              top: position.top + 'px',
              left: position.left + 'px',
              transform: 'translateX(-50%)',
            }}
          >
            I'm perfectly positioned! 🎯
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipExample />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useLayoutEffect, useRef } = React;
  const { createRoot } = ReactDOM;

  function TooltipExample() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
      if (showTooltip && buttonRef.current) {
        // Measure the button position
        const buttonRect = buttonRef.current.getBoundingClientRect();
        
        // Calculate tooltip position (exactly under button)
        const newTop = buttonRect.bottom + 8; // 8px gap
        const newLeft = buttonRect.left + (buttonRect.width / 2); // Center of button
        
        // Update position synchronously BEFORE paint
        setPosition({ top: newTop, left: newLeft });
        
        console.log('Layout measured and fixed before paint!');
      }
    }, [showTooltip]);

    return h('div', { className: 'container' },
      h('h2', null, 'Hover over the button'),
      h('p', null, 'Notice: No visual flicker when tooltip appears!'),
      
      h('div', { className: 'button-container' },
        h('button', {
          ref: buttonRef,
          onMouseEnter: () => setShowTooltip(true),
          onMouseLeave: () => setShowTooltip(false),
          className: 'action-button'
        }, 'Hover Me'),

        showTooltip && h('div', {
          className: 'tooltip',
          style: {
            position: 'fixed',
            top: position.top + 'px',
            left: position.left + 'px',
            transform: 'translateX(-50%)'
          }
        }, "I'm perfectly positioned! 🎯")
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(TooltipExample));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  margin: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h2 {
  color: #4f46e5;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

p {
  color: #6b7280;
  margin-bottom: 30px;
}

.button-container {
  position: relative;
  display: inline-block;
  margin: 20px auto;
}

.action-button {
  padding: 12px 24px;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-button:hover {
  transform: translateY(-2px);
}

.tooltip {
  background: #1f2937;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.2s ease-out;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #1f2937;
  transform: translateX(-50%) rotate(45deg);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
  }

  .container {
    background: #1f2937;
  }

  h2 {
    color: #a78bfa;
  }

  p {
    color: #d1d5db;
  }
}`}
          />
        </div>

        {/* When to Use */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="When to Use useLayoutEffect"
              description="Practical use cases and alternatives"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 dark:text-green-300">✅ Perfect For</h4>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">📏 Measuring Layout</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Reading element dimensions, positions, or scroll offsets before paint
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 Preventing Flicker</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Fixing tooltip positions, modal centering, or dynamic layouts
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔧 Third-party Libraries</h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Integrating with libraries that need synchronous DOM updates
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid For</h4>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">🌐 Data Fetching</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Use useEffect instead. Blocking paint for network requests hurts performance.
                  </p>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">📡 Subscriptions</h5>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    useEffect is better for subscriptions, timers, and most side effects.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚡ Performance Critical</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    If you don't need layout info, useEffect is always faster.
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Golden Rule</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Start with useEffect. Only switch to useLayoutEffect when you see visual flicker or need to read layout before paint!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Key Takeaways"
              description="Essential useLayoutEffect concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Timing is Everything</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Runs after DOM updates but before paint. Perfect for preventing visual glitches.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Pair with useRef</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  useRef gives you DOM access, useLayoutEffect gives you the right timing to measure it.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-pink-500" />
                  <h4 className="font-bold text-pink-700 dark:text-pink-300">No Visual Flicker</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Users only see your corrected layout, never the intermediate states.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-300">Use Sparingly</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Blocks painting and can hurt performance. Only use when absolutely necessary.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                If you're not sure whether to use useEffect or useLayoutEffect, start with useEffect. Switch only if you see visual flicker!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
