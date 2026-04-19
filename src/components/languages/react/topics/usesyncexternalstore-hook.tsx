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
  Eye,
  Code2,
  Monitor,
  Settings,
  Database,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  Link,
  Globe,
} from 'lucide-react';

export default function UseSyncExternalStoreHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Database}
        category="React · Hooks (Comprehensive)"
        title="useSyncExternalStore Hook"
        description="Master useSyncExternalStore to subscribe to external data sources and keep React components in sync with state outside React."
        colorTheme="orange"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useSyncExternalStore */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="What is useSyncExternalStore?"
              description="Subscribe to external data sources"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900 rounded text-sm">useSyncExternalStore</code> is a Hook that lets you <strong>subscribe to external data sources</strong> and keep React components synchronized with state that lives outside React. It's perfect for integrating with state management libraries, browser APIs, and third-party stores.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <h4 className="font-bold mb-4 text-amber-700 dark:text-amber-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>// Basic usage</div>
                  <div>const state = useSyncExternalStore(subscribe, getSnapshot);</div>
                  <div className="mt-2"></div>
                  <div>// With server-side rendering support</div>
                  <div>const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 dark:text-orange-400 min-w-[120px]">subscribe:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function to subscribe to store changes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 dark:text-orange-400 min-w-[120px]">getSnapshot:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function to get current store value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 dark:text-orange-400 min-w-[120px]">getServerSnapshot:</span>
                  <span className="text-gray-700 dark:text-gray-300">Optional: Initial value for SSR</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">External Integration</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Redux, Zustand, MobX stores</li>
                  <li>• Browser APIs (localStorage, geolocation)</li>
                  <li>• WebSocket connections</li>
                  <li>• Third-party state management</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Concurrent Safe</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Works with React 18 concurrent features</li>
                  <li>• Prevents tearing in concurrent rendering</li>
                  <li>• Automatic subscription management</li>
                  <li>• Memory leak prevention</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Concurrent Rendering Safe!</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Unlike manual subscriptions, useSyncExternalStore prevents tearing and ensures consistent state across concurrent renders.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use useSyncExternalStore */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use useSyncExternalStore"
              description="Essential use cases for external state"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">State Management Libraries</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Integrate with Redux, Zustand, MobX, or custom state management solutions
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Browser APIs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Subscribe to localStorage, geolocation, online status, media queries, and other browser APIs
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Real-time Data</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Connect to WebSocket, WebRTC, or other real-time data sources
                </p>
              </div>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-2 border-orange-300 dark:border-orange-800">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use useSyncExternalStore when you need to sync React components with state that changes outside of React's control.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useSyncExternalStore progressively"
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
                          <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create External Store</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, create an external store with subscription capabilities. The store needs to let components subscribe to changes and get the current value.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a simple counter store</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">let</span> store = {'{'} value: <span className="text-green-600">0</span> {'}'};
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">let</span> listeners = [];
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">subscribe</span>(callback) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            listeners.<span className="text-blue-600">push</span>(callback);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> () {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            listeners = listeners.<span className="text-blue-600">filter</span>(<span className="text-orange-600">l</span> {'=>'} l !== callback);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
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
                              The subscribe function must return an unsubscribe function. React will call it when the component unmounts.
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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Add Get Snapshot Function</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create a function that returns the current snapshot of the store. This function must be pure and return the same value when the store hasn't changed.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Add getSnapshot function</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">getSnapshot</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> store.value;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Add update function</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">updateStore</span>(newValue) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            store = {'{'} value: newValue {'}'};
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            listeners.<span className="text-blue-600">forEach</span>(<span className="text-orange-600">callback</span> {'=>'} <span className="text-blue-600">callback</span>());
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Pure Function!</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              getSnapshot must be pure - same input always returns same output. No side effects allowed!
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
                          <Settings className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use in React Component</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Now use useSyncExternalStore in your React component to subscribe to the external store and keep it synchronized.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Use the hook in component</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{'} useSyncExternalStore {'}'} <span className="text-blue-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">Counter</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> count = <span className="text-blue-600">useSyncExternalStore</span>(
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            subscribe,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            getSnapshot
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div&gt;</span>Count: {'{'}count{'}'}<span className="text-red-600">&lt;/div&gt;</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Auto Cleanup!</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              React automatically calls the unsubscribe function when the component unmounts. No manual cleanup needed!
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
                          <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Add Server-Side Support</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        For server-side rendering, add a third parameter to provide the initial snapshot value. This prevents hydration mismatches.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Add server-side support</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">getServerSnapshot</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> <span className="text-green-600">0</span>; <span className="text-slate-500">// Initial value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">Counter</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> count = <span className="text-blue-600">useSyncExternalStore</span>(
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            subscribe,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            getSnapshot,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            getServerSnapshot
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">SSR Safe!</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              getServerSnapshot ensures the same value is rendered on server and client, preventing hydration errors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">5</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 5: Best Practices</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Follow these guidelines to use useSyncExternalStore effectively and avoid common pitfalls.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DO: Return stable references</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">getSnapshot</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> store.value; <span className="text-slate-500">// Same reference if unchanged</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DON'T: Create new objects</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">getSnapshot</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> {'{'} ...store {'}'}; <span className="text-slate-500">// Always new object!</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DO: Handle cleanup properly</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">subscribe</span>(callback) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            listeners.<span className="text-blue-600">push</span>(callback);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> () {'=>'} listeners.<span className="text-blue-600">filter</span>(<span className="text-orange-600">l</span> {'=>'} l !== callback);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Golden Rule</p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              getSnapshot must return the same reference when the data hasn't changed to avoid unnecessary re-renders.
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

        {/* Example: Browser Store Integration */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Browser Store Integration"
            description="Building a sandbox-safe theme switcher with external store"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Theme Switcher with useSyncExternalStore"
            description="Sandbox-safe theme switcher with system preference sync"
            colorTheme="green"
            react={`// External store for theme management (sandbox-safe version)
const themeStore = {
  theme: 'light',
  listeners: [],
  
  subscribe(callback) {
    this.listeners.push(callback);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', this.handleSystemThemeChange);
    } else {
      mediaQuery.addListener(this.handleSystemThemeChange);
    }
    
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', this.handleSystemThemeChange);
      } else {
        mediaQuery.removeListener(this.handleSystemThemeChange);
      }
    };
  },
  
  getSnapshot() {
    return this.theme;
  },
  
  getServerSnapshot() {
    return 'light'; // Default for SSR
  },
  
  setTheme(newTheme) {
    this.theme = newTheme;
    
    // Note: In sandboxed environments, we can't use localStorage
    // Theme will only persist for the current session
    console.log('Theme set to:', newTheme);
    
    this.listeners.forEach(callback => callback());
  },
  
  handleSystemThemeChange: () => {
    // For demo purposes, we'll just update based on system preference
    // In a real app with localStorage, you'd check saved preference first
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (themeStore.theme === 'system') {
      themeStore.theme = systemTheme;
      themeStore.listeners.forEach(callback => callback());
    }
  },
  
  initialize() {
    // Initialize with system preference (no localStorage access)
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
};

// Initialize store
themeStore.initialize();

// Custom hook for theme
function useTheme() {
  const theme = React.useSyncExternalStore(
    themeStore.subscribe.bind(themeStore),
    themeStore.getSnapshot.bind(themeStore),
    themeStore.getServerSnapshot.bind(themeStore)
  );
  
  return {
    theme,
    setTheme: themeStore.setTheme.bind(themeStore),
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
}

// Theme toggle component
function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme();
  
  return (
    <div className="theme-switcher">
      <div className="current-theme">
        <h2>🎨 Current Theme: {theme}</h2>
        <p className="theme-description">
          {isDark ? '🌙 Dark mode is active' : '☀️ Light mode is active'}
        </p>
      </div>
      
      <div className="theme-options">
        <button 
          className={\`theme-btn \${theme === 'light' ? 'active' : ''}\`}
          onClick={() => setTheme('light')}
        >
          ☀️ Light
        </button>
        <button 
          className={\`theme-btn \${theme === 'dark' ? 'active' : ''}\`}
          onClick={() => setTheme('dark')}
        >
          🌙 Dark
        </button>
        <button 
          className={\`theme-btn \${theme === 'system' ? 'active' : ''}\`}
          onClick={() => setTheme('system')}
        >
          💻 System
        </button>
      </div>
      
      <div className="demo-content">
        <h3>Preview Content</h3>
        <p>This content adapts to your theme selection.</p>
        <div className="demo-box">
          <span className="demo-text">Theme-aware box</span>
        </div>
      </div>
      
      <div className="sync-info">
        <h3>🔄 Sync Information</h3>
        <ul>
          <li>✅ Session-based theme storage</li>
          <li>✅ Follows system preference</li>
          <li>⚠️ No localStorage (sandboxed environment)</li>
          <li>✅ Real-time updates</li>
          <li>✅ Sandbox-safe implementation</li>
        </ul>
      </div>
    </div>
  );
}

// Apply theme to app container (playground-safe)
function ThemeProvider({ children }) {
  const { theme } = useTheme();
  
  React.useEffect(() => {
    // Try to apply to document if available, otherwise apply to container
    try {
      if (document && document.documentElement) {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.className = theme;
      }
    } catch (error) {
      // Fallback: apply theme to the app container
      const appElement = document.querySelector('.app') || document.querySelector('#root');
      if (appElement) {
        appElement.setAttribute('data-theme', theme);
        appElement.className = theme;
      }
    }
  }, [theme]);
  
  return <div className={\`app \${theme}\`} data-theme={theme}>{children}</div>;
}

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>🎨 Theme Switcher Demo</h1>
        <p>Experience seamless theme synchronization with useSyncExternalStore</p>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useSyncExternalStore, useEffect } = React;
  const { createRoot } = ReactDOM;

  // External store for theme management (sandbox-safe version)
  const themeStore = {
    theme: 'light',
    listeners: [],
    
    subscribe(callback) {
      this.listeners.push(callback);
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', this.handleSystemThemeChange);
      } else {
        mediaQuery.addListener(this.handleSystemThemeChange);
      }
      
      return () => {
        this.listeners = this.listeners.filter(l => l !== callback);
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', this.handleSystemThemeChange);
        } else {
          mediaQuery.removeListener(this.handleSystemThemeChange);
        }
      };
    },
    
    getSnapshot() {
      return this.theme;
    },
    
    getServerSnapshot() {
      return 'light';
    },
    
    setTheme(newTheme) {
      this.theme = newTheme;
      
      // Note: In sandboxed environments, we can't use localStorage
      console.log('Theme set to:', newTheme);
      
      this.listeners.forEach(callback => callback());
    },
    
    handleSystemThemeChange: () => {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (themeStore.theme === 'system') {
        themeStore.theme = systemTheme;
        themeStore.listeners.forEach(callback => callback());
      }
    },
    
    initialize() {
      // Initialize with system preference (no localStorage access)
      this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };

  themeStore.initialize();

  function useTheme() {
    const theme = useSyncExternalStore(
      themeStore.subscribe.bind(themeStore),
      themeStore.getSnapshot.bind(themeStore),
      themeStore.getServerSnapshot.bind(themeStore)
    );
    
    return {
      theme,
      setTheme: themeStore.setTheme.bind(themeStore),
      isDark: theme === 'dark',
      isLight: theme === 'light'
    };
  }

  function ThemeToggle() {
    const { theme, setTheme, isDark } = useTheme();
    
    return h('div', { className: 'theme-switcher' },
      h('div', { className: 'current-theme' },
        h('h2', null, \`🎨 Current Theme: \${theme}\`),
        h('p', { className: 'theme-description' },
          isDark ? '🌙 Dark mode is active' : '☀️ Light mode is active'
        )
      ),
      
      h('div', { className: 'theme-options' },
        h('button', { 
          className: \`theme-btn \${theme === 'light' ? 'active' : ''}\`,
          onClick: () => setTheme('light')
        }, '☀️ Light'),
        h('button', { 
          className: \`theme-btn \${theme === 'dark' ? 'active' : ''}\`,
          onClick: () => setTheme('dark')
        }, '🌙 Dark'),
        h('button', { 
          className: \`theme-btn \${theme === 'system' ? 'active' : ''}\`,
          onClick: () => setTheme('system')
        }, '💻 System')
      ),
      
      h('div', { className: 'demo-content' },
        h('h3', null, 'Preview Content'),
        h('p', null, 'This content adapts to your theme selection.'),
        h('div', { className: 'demo-box' },
          h('span', { className: 'demo-text' }, 'Theme-aware box')
        )
      ),
      
      h('div', { className: 'sync-info' },
        h('h3', null, '🔄 Sync Information'),
        h('ul', null,
          h('li', null, '✅ Session-based storage'),
          h('li', null, '✅ Follows system preference'),
          h('li', null, '✅ Persists across sessions'),
          h('li', null, '✅ Real-time updates')
        )
      )
    );
  }

  function ThemeProvider({ children }) {
    const { theme } = useTheme();
    
    useEffect(() => {
      // Try to apply to document if available, otherwise apply to container
      try {
        if (document && document.documentElement) {
          document.documentElement.setAttribute('data-theme', theme);
          document.documentElement.className = theme;
        }
      } catch (error) {
        // Fallback: apply theme to the app container
        const appElement = document.querySelector('.app') || document.querySelector('#root');
        if (appElement) {
          appElement.setAttribute('data-theme', theme);
          appElement.className = theme;
        }
      }
    }, [theme]);
    
    return h('div', { className: \`app \${theme}\`, 'data-theme': theme }, children);
  }

  function App() {
    return h(ThemeProvider, null,
      h('div', { className: 'container' },
        h('h1', null, '🎨 Theme Switcher Demo'),
        h('p', null, 'Experience seamless theme synchronization with useSyncExternalStore'),
        h(ThemeToggle)
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: background 0.3s ease;
}

body.dark {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
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
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.dark .container {
  background: #1e293b;
  color: #e2e8f0;
}

h1 {
  color: #f97316;
  margin-bottom: 10px;
  font-size: 2rem;
}

.dark h1 {
  color: #fb923c;
}

p {
  color: #64748b;
  margin-bottom: 30px;
  font-size: 1rem;
}

.dark p {
  color: #94a3b8;
}

.theme-switcher {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.current-theme h2 {
  color: #f97316;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

.dark .current-theme h2 {
  color: #fb923c;
}

.theme-description {
  color: #64748b;
  font-size: 1rem;
}

.dark .theme-description {
  color: #94a3b8;
}

.theme-options {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.theme-btn {
  padding: 12px 24px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-btn:hover {
  border-color: #f97316;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
}

.theme-btn.active {
  background: #f97316;
  color: white;
  border-color: #f97316;
}

.dark .theme-btn {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.dark .theme-btn:hover {
  border-color: #fb923c;
  box-shadow: 0 4px 12px rgba(251, 146, 60, 0.2);
}

.dark .theme-btn.active {
  background: #fb923c;
  color: #0f172a;
  border-color: #fb923c;
}

.demo-content {
  background: #f8fafc;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
}

.dark .demo-content {
  background: #334155;
  border-color: #475569;
}

.demo-content h3 {
  color: #1e293b;
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.dark .demo-content h3 {
  color: #e2e8f0;
}

.demo-content p {
  color: #64748b;
  margin-bottom: 16px;
}

.dark .demo-content p {
  color: #94a3b8;
}

.demo-box {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.dark .demo-box {
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
}

.sync-info {
  background: #f0f9ff;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid #bae6fd;
  text-align: left;
}

.dark .sync-info {
  background: #1e3a8a;
  border-color: #1e40af;
}

.sync-info h3 {
  color: #0369a1;
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.dark .sync-info h3 {
  color: #60a5fa;
}

.sync-info ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sync-info li {
  color: #0c4a6e;
  font-size: 14px;
  padding-left: 20px;
  position: relative;
}

.dark .sync-info li {
  color: #93c5fd;
}

@media (max-width: 640px) {
  .container {
    padding: 24px;
  }
  
  .theme-options {
    flex-direction: column;
  }
  
  .theme-btn {
    justify-content: center;
  }
}`}
          />
        </div>

        {/* Key Concepts */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Key Concepts"
              description="Understanding useSyncExternalStore fundamentals"
              size="lg"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Link className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">Subscription Pattern</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Subscribe to external changes and automatically update React components when data changes.
                </p>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">SSR Compatibility</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Server-side rendering support with getServerSnapshot prevents hydration mismatches.
                </p>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">Concurrent Safe</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Prevents tearing and ensures consistent state across React's concurrent rendering features.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Best Practices"
              description="Do's and Don'ts for useSyncExternalStore"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300 mb-4">
                  ✅ Do This
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Return stable references from getSnapshot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Provide getServerSnapshot for SSR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Clean up subscriptions properly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use for external state only</span>
                  </li>
                </ul>
              </div>
              
              {/* Don'ts */}
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300 mb-4">
                  ❌ Avoid This
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't create new objects in getSnapshot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't use for React state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't forget cleanup functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't mutate store directly</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">External State Only!</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                useSyncExternalStore is specifically for external state. For React component state, use useState or useReducer instead.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
