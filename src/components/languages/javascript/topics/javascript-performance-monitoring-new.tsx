'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  Zap,
  Timer,
  TrendingUp,
  Activity,
  BarChart3,
  Eye,
  Gauge,
  Clock,
  Brain,
  Cpu,
  Search,
  Code2,
} from 'lucide-react';

export default function JavaScriptPerformanceMonitoringNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Activity}
        category="JavaScript Design Patterns"
        title="Performance Monitoring"
        description="Understand and measure application performance"
        colorTheme="yellow"
      />

      {/* What is Performance Monitoring? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-fuchsia-50/20 dark:from-violet-950/10 dark:via-purple-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Performance Monitoring: Keep Your App Fast! ⚡
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-violet-700 dark:text-violet-400">Performance monitoring</strong> is the practice of measuring, tracking, and analyzing how fast and efficiently your application runs. It helps you identify bottlenecks, slow operations, and areas that need optimization to provide the best user experience.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-violet-200 dark:border-violet-800/30">
            <Zap className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            <AlertTitle className="text-lg">Why Monitor Performance?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Users expect fast, responsive applications. Slow apps lead to frustrated users, higher bounce rates, and lost revenue. Performance monitoring helps you deliver speed!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Performance Metrics */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Key Performance Metrics</CardTitle>
              <CardDescription>What to measure and why</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Page Load Time */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500 text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">1. Page Load Time</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  The total time it takes for a page to fully load and become interactive. This is the most visible metric to users.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-blue-600 dark:text-blue-400">What it includes:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• DNS lookup time</li>
                    <li>• Server response time</li>
                    <li>• HTML download and parsing</li>
                    <li>• CSS and JavaScript loading</li>
                    <li>• Images and other assets loading</li>
                    <li>• Rendering and painting</li>
                  </ul>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Target:</strong> Under 3 seconds for good performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Time to First Byte */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">2. Time to First Byte (TTFB)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  The time from when a user requests a page until the browser receives the first byte of data from the server.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-green-600 dark:text-green-400">Why it matters:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Shows server responsiveness</li>
                    <li>• Indicates network speed</li>
                    <li>• Affects perceived speed</li>
                    <li>• Critical for SEO rankings</li>
                  </ul>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Target:</strong> Under 200ms is excellent, under 500ms is acceptable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* First Contentful Paint */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-500 text-white">
                <Eye className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">3. First Contentful Paint (FCP)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  The time when the browser renders the first piece of content (text, image, etc.) on the screen. This is when users first see something happening.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-purple-600 dark:text-purple-400">User perception:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• First sign that page is loading</li>
                    <li>• Reduces perceived waiting time</li>
                    <li>• Builds confidence the app is working</li>
                    <li>• Critical for user retention</li>
                  </ul>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Target:</strong> Under 1.8 seconds is good
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Largest Contentful Paint */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-500 text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">4. Largest Contentful Paint (LCP)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  The time it takes for the largest visible element (hero image, video, text block) to render on screen. This indicates when the main content is visible.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-orange-600 dark:text-orange-400">Examples of LCP elements:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Hero banner images</li>
                    <li>• Large text blocks or headings</li>
                    <li>• Video thumbnails</li>
                    <li>• Full-width images or backgrounds</li>
                  </ul>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Target:</strong> Under 2.5 seconds is good
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Time to Interactive */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-500 text-white">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">5. Time to Interactive (TTI)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  The time when the page becomes fully interactive - meaning users can click buttons, type in inputs, and interact with elements without delays.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-cyan-600 dark:text-cyan-400">Requirements for TTI:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Page has displayed useful content</li>
                    <li>• Event handlers are registered</li>
                    <li>• Page responds to interactions within 50ms</li>
                    <li>• No long tasks blocking the main thread</li>
                  </ul>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Target:</strong> Under 3.8 seconds is good
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* First Input Delay */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-2 border-rose-200 dark:border-rose-800/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-rose-500 text-white">
                <Timer className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">6. First Input Delay (FID)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  The time from when a user first interacts with your page (clicks a button, taps a link) to when the browser can actually respond to that interaction.
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-rose-600 dark:text-rose-400">What causes high FID:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>• Heavy JavaScript execution blocking the main thread</li>
                    <li>• Large JavaScript bundles still parsing</li>
                    <li>• Complex computations running</li>
                    <li>• Too many event listeners</li>
                  </ul>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    <strong>Target:</strong> Under 100ms is good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Memory Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Memory Performance</CardTitle>
              <CardDescription>Understanding memory usage and leaks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">What is Memory Usage?</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Memory usage refers to how much RAM (Random Access Memory) your JavaScript application consumes. Every variable, object, function, and DOM element takes up memory.
            </p>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg p-5 space-y-4">
              <div>
                <h5 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🎯 Normal Memory Usage</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Memory goes up as you create objects and variables, then goes down when they're no longer needed (garbage collected). This creates a saw-tooth pattern - up and down, up and down.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">⚠️ Memory Leak</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Memory continuously increases and never comes back down. Objects that should be cleaned up are still being referenced somewhere, preventing garbage collection. Over time, this can crash the browser or make your app extremely slow.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Common Memory Leak Causes:</h5>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">1. Event Listeners Not Removed</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Adding event listeners but forgetting to remove them when elements are destroyed
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">2. Timers Not Cleared</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      setInterval or setTimeout running forever without being cleared
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">3. Detached DOM Nodes</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      DOM elements removed from page but still referenced in JavaScript
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">4. Global Variables Accumulating</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Continuously adding data to global objects without cleanup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CPU Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>CPU Performance</CardTitle>
              <CardDescription>Understanding processing and execution time</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-200 dark:border-emerald-800/30">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">What is CPU Usage?</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              CPU (Central Processing Unit) usage measures how much processing power your JavaScript code requires. Heavy computations, complex algorithms, and large data processing consume CPU time.
            </p>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg p-5 space-y-4">
              <div>
                <h5 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">⚡ JavaScript is Single-Threaded</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  JavaScript runs on a single main thread. When your code is executing heavy operations, everything else waits - the UI freezes, animations stutter, and user interactions are delayed.
                </p>
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  <strong>Long Tasks:</strong> Any JavaScript execution that takes more than 50ms is considered a "long task" and will make your app feel sluggish.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">What Causes High CPU Usage:</h5>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
                    <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">🔄 Heavy Loops</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Looping through large arrays or objects with complex operations in each iteration
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
                    <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">🧮 Complex Calculations</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Mathematical operations, sorting large datasets, recursive algorithms
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
                    <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">🎨 DOM Manipulation</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Creating, modifying, or removing many DOM elements at once causes reflows and repaints
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
                    <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">📦 Large Data Processing</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Parsing large JSON responses, transforming big datasets, filtering/mapping huge arrays
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Solutions for High CPU Usage</h5>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span><strong>Break up long tasks:</strong> Use setTimeout or requestIdleCallback to split work into smaller chunks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span><strong>Use Web Workers:</strong> Move heavy computations to background threads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span><strong>Optimize algorithms:</strong> Use efficient data structures and algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span><strong>Lazy loading:</strong> Process data only when needed, not all at once</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span><strong>Memoization:</strong> Cache expensive computation results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real User Monitoring vs Synthetic */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Monitoring Approaches</CardTitle>
              <CardDescription>Real User Monitoring vs Synthetic Monitoring</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Real User Monitoring */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-500 dark:bg-blue-600 px-4 py-3">
                <h4 className="font-semibold text-white">Real User Monitoring (RUM)</h4>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 space-y-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Collects performance data from actual users as they interact with your application in real-world conditions.
                </p>
                
                <div>
                  <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2 text-sm">✅ Advantages:</h5>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Real user experiences and conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Captures actual device performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Shows geographic variations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Reflects network conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Identifies real user pain points</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2 text-sm">⚠️ Limitations:</h5>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Requires actual traffic to collect data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Can't test before deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Adds small overhead to user sessions</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-blue-200 dark:border-blue-800/30">
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    <strong>Best for:</strong> Understanding real-world performance and user experience
                  </p>
                </div>
              </div>
            </div>

            {/* Synthetic Monitoring */}
            <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 overflow-hidden">
              <div className="bg-purple-500 dark:bg-purple-600 px-4 py-3">
                <h4 className="font-semibold text-white">Synthetic Monitoring</h4>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 p-6 space-y-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Simulates user interactions in controlled environments using automated scripts and bots to test performance.
                </p>
                
                <div>
                  <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-2 text-sm">✅ Advantages:</h5>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Test before going live</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Consistent, repeatable tests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Control test conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>No impact on real users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Can test specific scenarios</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2 text-sm">⚠️ Limitations:</h5>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>May not reflect real user behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Limited to scripted paths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Controlled environment may differ from reality</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-purple-200 dark:border-purple-800/30">
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    <strong>Best for:</strong> Testing, benchmarking, and catching issues before deployment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-200">Best Practice</AlertTitle>
            <AlertDescription className="text-base text-gray-700 dark:text-gray-300">
              Use <strong>both approaches together</strong>! Synthetic monitoring catches issues early in development, while RUM shows you real-world performance and helps prioritize optimizations based on actual user impact.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Where to Check Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Search className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Where to Check Performance</CardTitle>
              <CardDescription>Tools and methods for measuring performance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Browser DevTools */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-500 text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">1. Browser DevTools (Built-in, Free)</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Every modern browser includes powerful performance tools. Open with <strong>F12</strong> or <strong>Right-click → Inspect</strong>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">📊 Performance Tab</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Records everything happening in your app - JavaScript execution, rendering, painting, and more.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>How:</strong> Click Record button → Interact with your app → Click Stop
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Shows:</strong> Timeline of all activities, CPU usage, memory usage, frame rate (FPS)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Look for:</strong> Long yellow bars (JavaScript), tall flame charts (slow functions)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">🌐 Network Tab</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Shows all network requests - HTML, CSS, JavaScript, images, API calls, etc.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>How:</strong> Open tab → Refresh page → See all requests
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Shows:</strong> File sizes, load times, request order, status codes
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Look for:</strong> Large files (>1MB), slow requests (>1s), failed requests (red)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-l-4 border-purple-500">
                <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">💡 Lighthouse</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Automated auditing tool that gives you a performance score and actionable recommendations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>How:</strong> DevTools → Lighthouse tab → Generate report
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Shows:</strong> Performance score (0-100), FCP, LCP, TTI, diagnostics
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Best for:</strong> Quick overview, identifying low-hanging fruit
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-l-4 border-orange-500">
                <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">🧠 Memory Tab</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Track memory usage and detect memory leaks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>How:</strong> Memory tab → Take heap snapshot → Compare snapshots
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Shows:</strong> Memory allocation, object counts, retained size
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Look for:</strong> Increasing memory that doesn't drop (memory leaks)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Testing Tools */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-green-500 text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">2. Online Testing Tools (Free & Paid)</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web-based tools that test your site from different locations and provide detailed reports.
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
                <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">🔍 Google PageSpeed Insights</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>URL:</strong> <span className="text-blue-600 dark:text-blue-400">pagespeed.web.dev</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Free tool from Google. Provides mobile and desktop scores, Core Web Vitals, and specific recommendations. Tests from multiple locations worldwide.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
                <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">⚡ WebPageTest</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>URL:</strong> <span className="text-blue-600 dark:text-blue-400">webpagetest.org</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Advanced testing tool. Choose test location, device, browser, and network speed. Provides waterfall charts, filmstrip view, and video recordings of page load.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
                <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">📈 GTmetrix</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>URL:</strong> <span className="text-blue-600 dark:text-blue-400">gtmetrix.com</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Combines Google Lighthouse and WebPageTest. Provides performance scores, detailed breakdowns, and historical data tracking (with free account).
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
                <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">🎯 Pingdom</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>URL:</strong> <span className="text-blue-600 dark:text-blue-400">tools.pingdom.com</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Simple, fast testing from multiple locations. Shows page size, load time, performance grade, and request analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Real User Monitoring Services */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-500 text-white">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">3. Real User Monitoring (RUM) Services</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Professional services that monitor your live production site with real user data.
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400">Google Analytics (GA4)</h5>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full font-semibold">FREE</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Basic page load timing, Core Web Vitals tracking. Good for getting started with RUM.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400">New Relic</h5>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full font-semibold">PAID</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprehensive APM (Application Performance Monitoring). Tracks frontend and backend performance, errors, and user sessions.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400">Datadog</h5>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full font-semibold">PAID</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-stack monitoring with beautiful dashboards. Tracks performance, logs, and custom metrics.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400">Sentry</h5>
                  <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full font-semibold">FREE + PAID</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Error tracking with performance monitoring. Free tier available. Great for catching performance issues alongside errors.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400">Vercel Analytics / Netlify Analytics</h5>
                  <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full font-semibold">FREE + PAID</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Built-in analytics for their hosting platforms. Easy setup, no code changes needed.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Start Recommendation */}
          <Alert className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-200">Quick Start: Where to Begin?</AlertTitle>
            <AlertDescription className="text-base text-gray-700 dark:text-gray-300 space-y-2">
              <p>
                <strong>1. Start free:</strong> Use Chrome DevTools Lighthouse for immediate insights (press F12 → Lighthouse tab)
              </p>
              <p>
                <strong>2. Test online:</strong> Run your site through PageSpeed Insights or GTmetrix
              </p>
              <p>
                <strong>3. Monitor production:</strong> Add Google Analytics or Vercel/Netlify Analytics if you're on those platforms
              </p>
              <p>
                <strong>4. Go professional:</strong> When ready, upgrade to paid RUM services like New Relic or Datadog for comprehensive monitoring
              </p>
            </AlertDescription>
          </Alert>
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
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Key Metrics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    TTFB, FCP, LCP, TTI, FID<br/>
                    Each measures different aspects<br/>
                    All contribute to user experience
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Memory</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Monitor memory usage patterns<br/>
                    Detect and fix memory leaks<br/>
                    Clean up properly (listeners, timers)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">CPU</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JavaScript is single-threaded<br/>
                    Avoid long tasks (>50ms)<br/>
                    Break up heavy computations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Monitoring</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    RUM: Real user data<br/>
                    Synthetic: Controlled testing<br/>
                    Use both for complete picture
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Performance monitoring isn't a one-time task - it's continuous! Set up automated monitoring, establish performance budgets, and review metrics regularly. What gets measured gets improved!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
