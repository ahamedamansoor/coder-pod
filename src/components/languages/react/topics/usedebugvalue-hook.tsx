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
  Bug,
  Eye,
  Code2,
  Monitor,
  Settings,
  Zap,
  AlertTriangle,
} from 'lucide-react';

export default function UseDebugValueHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Bug}
        category="React · Hooks (Comprehensive)"
        title="useDebugValue Hook"
        description="Master useDebugValue to display custom labels for custom Hooks in React DevTools for easier debugging and development experience."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useDebugValue */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Bug className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useDebugValue?"
              description="DevTools labels for custom Hooks"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useDebugValue</code> displays a <strong>custom label</strong> for custom Hooks in React DevTools. It helps you understand what's happening inside your custom Hooks during development by showing meaningful debug information next to your Hook in the Components tab.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>// Basic usage</div>
                  <div>useDebugValue(value);</div>
                  <div className="mt-2"></div>
                  <div>// With formatter (lazy evaluation)</div>
                  <div>useDebugValue(value, (val) =&gt; format(val));</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 min-w-[100px]">value:</span>
                  <span className="text-gray-700 dark:text-gray-300">The value to display in DevTools</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 min-w-[100px]">formatter:</span>
                  <span className="text-gray-700 dark:text-gray-300">Optional function to format the value (lazy)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Development Only</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Shows custom labels in DevTools</li>
                  <li>• Helps identify hook state at a glance</li>
                  <li>• Improves debugging experience</li>
                  <li>• No production impact</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Lazy Formatting</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Formatter runs only when DevTools open</li>
                  <li>• Optimizes performance</li>
                  <li>• Expensive formatting operations</li>
                  <li>• Production-safe</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Only for Custom Hooks!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useDebugValue only inside custom Hooks. Don't use it in regular components - it won't show anything in DevTools!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use useDebugValue */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use useDebugValue"
              description="Best practices and use cases"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Shared Custom Hooks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hooks that are part of a shared library used by multiple teams
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Complex State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hooks with complex internal state that's hard to inspect
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Data Formatting</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When raw value needs formatting to be human-readable
                </p>
              </div>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-2 border-orange-300 dark:border-orange-800">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't add useDebugValue to every custom Hook! Only use it when the debug info significantly improves the debugging experience.
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
              description="Learn useDebugValue progressively"
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
                          <Bug className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create a Custom Hook</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Start by creating a custom hook that manages some state or logic. This will be the foundation for adding debug values.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a custom hook with state</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">useOnlineStatus</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [isOnline, setIsOnline] = <span className="text-blue-600">useState</span>(<span className="text-green-600">true</span>);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [lastChecked, setLastChecked] = <span className="text-blue-600">useState</span>(<span className="text-orange-600">Date</span>.now());
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Hook logic goes here...</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> {'{'} isOnline, lastChecked {'}'};
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
                              Custom hooks should start with "use" and can manage any combination of state, effects, and logic.
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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Add useDebugValue</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Add <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">useDebugValue</code> to display meaningful information in React DevTools. Choose a value that helps you understand the hook's state.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Add debug value to your hook</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">useOnlineStatus</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [isOnline, setIsOnline] = <span className="text-blue-600">useState</span>(<span className="text-green-600">true</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Show connection status in DevTools</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useDebugValue</span>(isOnline ? <span className="text-green-600">'Online'</span> : <span className="text-red-600">'Offline'</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> isOnline;
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
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Pro Tip</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Use simple, human-readable values. The debug value appears next to your hook name in DevTools!
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
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use Formatter Function</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        For complex values, use a formatter function to create readable labels. The formatter runs only when DevTools is open, optimizing performance.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Use formatter for complex values</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">useUserData</span>(userId) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [user, setUser] = <span className="text-blue-600">useState</span>(<span className="text-red-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Format user data for DevTools</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useDebugValue</span>(user, <span className="text-orange-600">user</span> {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (!user) <span className="text-purple-600">return</span> <span className="text-green-600">'Loading...'</span>;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> <span className="text-green-600">`$&#123;user.name&#125; ($&#123;user.role&#125;)`</span>;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'});
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> user;
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
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Pro Tip</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Formatters are lazy! They only run when DevTools is open, making them perfect for expensive operations.
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
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Test in DevTools</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Open React DevTools to see your debug values in action. The debug label appears next to your custom hook in the Components tab.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Complete example with DevTools display</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">App</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> isOnline = <span className="text-blue-600">useOnlineStatus</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            Status: {'{'}isOnline ? <span className="text-green-600">'Online'</span> : <span className="text-red-600">'Offline'</span>{'}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/div&gt;</span>
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
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">DevTools View</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              In DevTools: <code className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">useOnlineStatus: "Online"</code> or <code className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">useOnlineStatus: "Offline"</code>
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
                        Follow these guidelines to make the most of useDebugValue in your custom hooks.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DO: Use for complex shared hooks</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useDebugValue</span>(status, <span className="text-orange-600">s</span> {'=>'} <span className="text-green-600">`{'${s.toUpperCase()}'} - {'${Date.now()}'}`</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DON'T: Use in every simple hook</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useDebugValue</span>(count); <span className="text-slate-500">// Unnecessary for simple values</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DO: Format complex objects</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useDebugValue</span>(data, <span className="text-orange-600">d</span> {'=>'} <span className="text-green-600">`{'${d.items.length}'} items`</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DON'T: Include sensitive data</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useDebugValue</span>(user.token); <span className="text-slate-500">// Security risk!</span>
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
                              Use useDebugValue when the debug information significantly improves the debugging experience for you or your team.
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

        {/* Example: useOnlineStatus Hook */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Custom Hook with Debug Value"
            description="Displaying useful debug information in DevTools"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="useOnlineStatus with Debug Value"
            description="Shows connection status in DevTools"
            colorTheme="green"
            react={`function useOnlineStatus() {
  const [isOnline, setIsOnline] = React.useState(true);

  React.useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Show debug label in DevTools
  React.useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div className="container">
      <h1>🌐 Connection Status</h1>

      <div className={\`status \${isOnline ? 'online' : 'offline'}\`}>
        <div className="icon">
          {isOnline ? '✅' : '❌'}
        </div>
        <div className="text">
          <h2>{isOnline ? 'Online' : 'Offline'}</h2>
          <p>
            {isOnline 
              ? 'Connected to the internet' 
              : 'No internet connection'}
          </p>
        </div>
      </div>

      <div className="info">
        💡 Check React DevTools to see the debug value!
      </div>

      <div className="note">
        <strong>Open DevTools:</strong> The custom hook will show 
        "Online" or "Offline" label in the Components tab
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StatusIndicator />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useEffect, useDebugValue } = React;
  const { createRoot } = ReactDOM;

  function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);

    useDebugValue(isOnline ? 'Online' : 'Offline');

    return isOnline;
  }

  function StatusIndicator() {
    const isOnline = useOnlineStatus();

    return h('div', { className: 'container' },
      h('h1', null, '🌐 Connection Status'),

      h('div', { className: 'status ' + (isOnline ? 'online' : 'offline') },
        h('div', { className: 'icon' }, isOnline ? '✅' : '❌'),
        h('div', { className: 'text' },
          h('h2', null, isOnline ? 'Online' : 'Offline'),
          h('p', null, isOnline 
            ? 'Connected to the internet' 
            : 'No internet connection')
        )
      ),

      h('div', { className: 'info' },
        '💡 Check React DevTools to see the debug value!'
      ),

      h('div', { className: 'note' },
        h('strong', null, 'Open DevTools: '),
        'The custom hook will show "Online" or "Offline" label in the Components tab'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(StatusIndicator));
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  max-width: 500px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.status {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.status.online {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 2px solid #10b981;
}

.status.offline {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 2px solid #ef4444;
}

.icon {
  font-size: 48px;
}

.text h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

.status.online .text h2 {
  color: #065f46;
}

.status.offline .text h2 {
  color: #991b1b;
}

.text p {
  font-size: 14px;
  color: #6b7280;
}

.info {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
  margin-bottom: 15px;
}

.note {
  background: #f3f4f6;
  padding: 15px;
  border-radius: 12px;
  font-size: 13px;
  color: #374151;
  line-height: 1.6;
}

.note strong {
  color: #10b981;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #6ee7b7;
  }

  .status.online {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .status.online .text h2 {
    color: #d1fae5;
  }

  .status.offline {
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    border-color: #ef4444;
  }

  .status.offline .text h2 {
    color: #fee2e2;
  }

  .text p {
    color: #9ca3af;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }

  .note {
    background: #111827;
    color: #e5e7eb;
  }

  .note strong {
    color: #6ee7b7;
  }
}`}
          />
        </div>

        {/* Key Concepts */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Concepts"
              description="Understanding useDebugValue fundamentals"
              size="lg"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Monitor className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">DevTools Integration</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Only visible in React DevTools during development. Helps identify hook state at a glance.
                </p>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">Lazy Formatting</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Formatter function runs only when DevTools is open, optimizing performance in production.
                </p>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">Zero Production Impact</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Completely removed from production builds. No runtime overhead or bundle size impact.
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
              description="Do's and Don'ts for useDebugValue"
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
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use in shared custom hooks for team debugging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Format complex values for better readability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use formatter function for expensive operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Display meaningful state information</span>
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
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't use in regular components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't add to every custom hook unnecessarily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't include sensitive data in debug values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't rely on it for production debugging</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Debugging Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useDebugValue is purely for development. Use it to make custom Hooks easier to inspect in DevTools!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
