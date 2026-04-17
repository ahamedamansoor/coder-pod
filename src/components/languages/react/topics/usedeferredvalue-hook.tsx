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
  Code2,
  Target,
  Settings,
  MousePointer,
  RefreshCw,
  Clock,
  Timer,
  TrendingDown,
  Gauge,
  Sparkles,
  Filter,
} from 'lucide-react';

export default function UseDeferredValueHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Clock}
        category="React · Hooks (Comprehensive)"
        title="useDeferredValue Hook"
        description="Master useDeferredValue for optimal UI performance - the essential hook for deferring expensive updates while keeping your app responsive and smooth."
        colorTheme="indigo"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useDeferredValue */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="What is useDeferredValue?"
              description="Defer non-critical UI updates for better performance"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded text-sm">useDeferredValue</code> is a Hook that lets you defer updating a part of the UI. It creates a <strong>delayed version of a value</strong> that React can update later, keeping urgent updates responsive and preventing UI freezing!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const deferredValue = useDeferredValue(value);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-[120px]">value:</span>
                  <span className="text-gray-700 dark:text-gray-300">The value you want to defer (can be any type)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-[120px]">deferredValue:</span>
                  <span className="text-gray-700 dark:text-gray-300">Delayed version that updates later during render</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">Performance Boost</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Prevents UI blocking during heavy updates</li>
                  <li>• Allows urgent updates to take priority</li>
                  <li>• Reduces unnecessary re-renders</li>
                  <li>• Maintains smooth user interactions</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Search result filtering</li>
                  <li>• Large list rendering</li>
                  <li>• Data visualization updates</li>
                  <li>• Real-time data streams</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Key Advantage!</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                Unlike regular state, deferred values don't block the UI - React can update them when it has time, keeping your app feeling fast!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why useDeferredValue is Powerful */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/10 dark:to-gray-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Timer className="w-7 h-7 text-slate-600 dark:text-slate-400" />}
              title="Why useDeferredValue is Powerful"
              description="Understanding deferred rendering"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
                <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Immediate vs Deferred Updates</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Immediate Update</h5>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">UI blocks during expensive operations</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div>const filtered = expensiveFilter(searchQuery);</div>
                      <div>&lt;List data={'{'}filtered{'}'} /&gt; // UI freezes here</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Deferred Update</h5>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">UI stays responsive, updates when possible</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div>const deferredQuery = useDeferredValue(searchQuery);</div>
                      <div>const filtered = expensiveFilter(deferredQuery);</div>
                      <div>&lt;List data={'{'}filtered{'}'} /&gt; // Non-blocking</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-3">⚡ Concurrent Rendering Benefits</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  With useDeferredValue, React can:
                </p>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Delay expensive updates</strong> until the browser is idle</li>
                  <li>• <strong>Show stale content</strong> while new content prepares</li>
                  <li>• <strong>Interrupt deferred updates</strong> with more urgent ones</li>
                  <li>• <strong>Maintain 60fps</strong> during heavy operations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useDeferredValue progressively"
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
                          <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Import and Create Deferred Value</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, import useDeferredValue and create a deferred version of your state value that you want to optimize.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Import and create deferred value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{}'} useDeferredValue {'{}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [searchQuery, setSearchQuery] = useState('');
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> deferredQuery = useDeferredValue(searchQuery);
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Two Values</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              searchQuery updates immediately, deferredQuery updates when React has time.
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
                          <Filter className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Use Deferred Value in Expensive Operations</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the deferred value in expensive operations like filtering large lists or complex calculations.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Use deferred value in expensive operations</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> filteredItems = useMemo(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> expensiveFilter(items, deferredQuery);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}, [items, deferredQuery]); <span className="text-slate-500">// Uses deferred value</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Performance Boost</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Expensive filtering uses deferred value, keeping UI responsive!
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
                          <Target className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use Immediate Value for Responsive UI</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the immediate value for responsive UI elements like input fields, while deferred value powers expensive displays.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Use immediate value for responsive UI</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-green-400">&lt;input</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">value</span>={'{}'}searchQuery{'{}'} <span className="text-slate-500">// Immediate - responsive</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">onChange</span>={'{}'}(e) {'=>'} setSearchQuery(e.target.value){'}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-green-400">/&gt;</span>
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">ExpensiveList</span> <span className="text-green-400">query</span>={'{}'}deferredQuery{'{}'} /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Gauge className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Best of Both Worlds</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Input stays responsive, list updates when possible!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-rose-200 dark:border-rose-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        </div>
                        <h4 className="font-bold text-xl text-rose-700 dark:text-rose-300">Step 4: Add Loading States (Optional)</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Show loading states when deferred value is stale to provide visual feedback about pending updates.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-rose-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Add loading state for stale deferred value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> isStale = searchQuery !== deferredQuery;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">ExpensiveList</span> <span className="text-green-400">query</span>={'{}'}deferredQuery{'{}'} /&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'{}'}isStale && &lt;<span className="text-red-400">div</span>&gt;Updating...&lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/30 dark:to-orange-950/30 p-4 rounded-xl border border-rose-200 dark:border-rose-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-rose-800 dark:text-rose-200 mb-1">Visual Feedback</p>
                            <p className="text-sm text-rose-700 dark:text-rose-300">
                              Show users when updates are pending for better UX!
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
            description="See useDeferredValue in action"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Responsive Search with Deferred Value"
            description="Experience smooth filtering without UI freezing"
            colorTheme="indigo"
            react={`function DeferredSearchExample() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items] = React.useState(() => {
    // Generate 1000 items for realistic performance test
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: \`Item \${i + 1}\`,
      category: ['Electronics', 'Books', 'Clothing', 'Food', 'Toys'][i % 5],
      price: Math.floor(Math.random() * 1000) + 10
    }));
  });

  // Create deferred version of search query
  const deferredQuery = React.useDeferredValue(searchQuery);
  
  // Check if deferred value is stale
  const isStale = searchQuery !== deferredQuery;

  // Expensive filtering operation (simulated)
  const filteredItems = React.useMemo(() => {
    console.log('Filtering items with query:', deferredQuery);
    
    // Simulate expensive operation
    const start = Date.now();
    while (Date.now() - start < 100) {} // 100ms delay
    
    if (!deferredQuery) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [items, deferredQuery]);

  return (
    <div className="container">
      <h2>Responsive Search with useDeferredValue</h2>
      <p>Try typing quickly - the input stays responsive while filtering happens in background!</p>
      
      <div className="search-section">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search 1000 items..."
          className="search-input"
        />
        
        <div className="stats">
          <span className="item-count">
            Showing {filteredItems.length} of {items.length} items
          </span>
          {isStale && (
            <span className="stale-indicator">
              Updating...
            </span>
          )}
        </div>
      </div>

      <div className="results-grid">
        {filteredItems.slice(0, 50).map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-name">{item.name}</div>
            <div className="item-category">{item.category}</div>
            <div className="item-price">{'{'}item.price{'}'}</div>
          </div>
        ))}
      </div>
      
      {filteredItems.length > 50 && (
        <div className="more-items">
          ... and {filteredItems.length - 50} more items
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DeferredSearchExample />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useDeferredValue, useMemo } = React;
  const { createRoot } = ReactDOM;

  function DeferredSearchExample() {
    const [searchQuery, setSearchQuery] = useState('');
    const [items] = useState(() => {
      return Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: \`Item \${i + 1}\`,
        category: ['Electronics', 'Books', 'Clothing', 'Food', 'Toys'][i % 5],
        price: Math.floor(Math.random() * 1000) + 10
      }));
    });

    const deferredQuery = useDeferredValue(searchQuery);
    const isStale = searchQuery !== deferredQuery;

    const filteredItems = useMemo(() => {
      console.log('Filtering items with query:', deferredQuery);
      
      const start = Date.now();
      while (Date.now() - start < 100) {}
      
      if (!deferredQuery) return items;
      
      return items.filter(item => 
        item.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(deferredQuery.toLowerCase())
      );
    }, [items, deferredQuery]);

    return h('div', { className: 'container' },
      h('h2', null, 'Responsive Search with useDeferredValue'),
      h('p', null, 'Try typing quickly - the input stays responsive while filtering happens in background!'),
      
      h('div', { className: 'search-section' },
        h('input', {
          type: 'text',
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          placeholder: 'Search 1000 items...',
          className: 'search-input'
        }),
        
        h('div', { className: 'stats' },
          h('span', { className: 'item-count' },
            \`Showing \${filteredItems.length} of \${items.length} items\`
          ),
          isStale && h('span', { className: 'stale-indicator' }, 'Updating...')
        )
      ),

      h('div', { className: 'results-grid' },
        filteredItems.slice(0, 50).map((item) =>
          h('div', { key: item.id, className: 'item-card' },
            h('div', { className: 'item-name' }, item.name),
            h('div', { className: 'item-category' }, item.category),
            h('div', { className: 'item-price' }, \`$\${item.price}\`)
          )
        )
      ),
      
      filteredItems.length > 50 && h('div', { className: 'more-items' },
        \`... and \${filteredItems.length - 50} more items\`
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(DeferredSearchExample));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 40px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  min-height: 100vh;
  margin: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h2 {
  color: #6366f1;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

p {
  color: #6b7280;
  margin-bottom: 30px;
}

.search-section {
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  margin-bottom: 16px;
}

.search-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.item-count {
  color: #6b7280;
}

.stale-indicator {
  color: #6366f1;
  font-weight: 600;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  text-align: left;
}

.item-card {
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.item-card:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-2px);
}

.item-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.item-category {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
}

.item-price {
  font-weight: 700;
  color: #6366f1;
}

.more-items {
  margin-top: 20px;
  color: #6b7280;
  font-style: italic;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
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

  .search-input {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }

  .search-input:focus {
    border-color: #6366f1;
  }

  .item-count {
    color: #d1d5db;
  }

  .stale-indicator {
    color: #a78bfa;
  }

  .item-card {
    background: #374151;
    border-color: #4b5563;
  }

  .item-card:hover {
    background: #4b5563;
    border-color: #6b7280;
  }

  .item-name {
    color: #f3f4f6;
  }

  .item-category {
    color: #d1d5db;
  }

  .item-price {
    color: #a78bfa;
  }

  .more-items {
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
              title="When to Use useDeferredValue"
              description="Practical use cases and best practices"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 dark:text-green-300">✅ Perfect For</h4>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔍 Large Dataset Filtering</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Search/filter operations on thousands of items that would normally block UI
                  </p>
                </div>

                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h5 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">📊 Data Visualization</h5>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    Charts and graphs that need time to recalculate with new data
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">📝 Text Processing</h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Real-time text analysis, syntax highlighting, or markdown parsing
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid For</h4>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">⚡ Simple State</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Basic state changes that don't impact performance
                  </p>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🎯 Critical Updates</h5>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    User input values or anything needing immediate visual feedback
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🔄 Network Requests</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Use useEffect with loading states for API calls instead
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <AlertTriangle className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Performance First!</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Only use useDeferredValue when you have actual performance issues. Don't over-optimize!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Key Takeaways"
              description="Essential useDeferredValue concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Deferred Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Deferred values update when React has time, not immediately like regular state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">UI Responsiveness</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keeps user interfaces responsive during expensive operations.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-pink-500" />
                  <h4 className="font-bold text-pink-700 dark:text-pink-300">Two Values</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep immediate value for responsive UI, deferred value for expensive operations.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-rose-300 dark:border-rose-700">
                <div className="flex items-center gap-3 mb-3">
                  <Timer className="w-6 h-6 text-rose-500" />
                  <h4 className="font-bold text-rose-700 dark:text-rose-300">Concurrent Ready</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Works with React's concurrent features for optimal performance.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                Combine useDeferredValue with useMemo for the best performance - defer the value, then memoize the expensive operation!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
