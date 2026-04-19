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
  Key,
  Eye,
  Code2,
  Monitor,
  Settings,
  Zap,
  AlertTriangle,
  Fingerprint,
  Hash,
} from 'lucide-react';

export default function UseIdHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Key}
        category="React · Hooks (Comprehensive)"
        title="useId Hook"
        description="Master useId to generate unique IDs that are stable across server and client rendering - essential for accessibility and form inputs."
        colorTheme="violet"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useId */}
        <Card className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Key className="w-7 h-7 text-violet-600 dark:text-violet-400" />}
              title="What is useId?"
              description="Generate unique IDs for accessibility"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900 rounded text-sm">useId</code> is a Hook that generates a <strong>unique ID</strong> that is stable across server and client renders. It's perfect for connecting HTML elements with <code className="px-1 py-0.5 bg-violet-100 dark:bg-violet-900 rounded text-xs">htmlFor</code> attributes, ARIA attributes, and accessibility needs.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>// Generate unique ID</div>
                  <div>const id = useId();</div>
                  <div className="mt-2"></div>
                  <div>// Use in JSX</div>
                  <div>&lt;label htmlFor=&#123;id&#125;&gt;Name&lt;/label&gt;</div>
                  <div>&lt;input id=&#123;id&#125; type="text" /&gt;</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-violet-600 dark:text-violet-400 min-w-[100px]">Returns:</span>
                  <span className="text-gray-700 dark:text-gray-300">String ID like ":r1:", ":r2:", etc.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-violet-600 dark:text-violet-400 min-w-[100px]">Stable:</span>
                  <span className="text-gray-700 dark:text-gray-300">Same ID on server and client</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Server-Side Safe</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Works with SSR/SSG</li>
                  <li>• No hydration mismatches</li>
                  <li>• Stable across renders</li>
                  <li>• Predictable generation</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Accessibility Focus</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Form label connections</li>
                  <li>• ARIA attribute linking</li>
                  <li>• Screen reader support</li>
                  <li>• Semantic HTML relationships</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-300 dark:border-violet-700">
              <Lightbulb className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              <AlertTitle className="text-violet-900 dark:text-violet-100">SSR Compatible!</AlertTitle>
              <AlertDescription className="text-violet-800 dark:text-violet-200">
                Unlike Math.random() or counters, useId generates the same ID on server and client, preventing hydration errors!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use useId */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use useId"
              description="Essential use cases for unique IDs"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Form Accessibility</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Connect labels with inputs using htmlFor and id attributes for screen readers
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">ARIA Attributes</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Link descriptive elements with interactive elements using aria-labelledby or aria-describedby
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Component Libraries</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Generate unique IDs for reusable components that need internal element connections
                </p>
              </div>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-2 border-orange-300 dark:border-orange-800">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use useId whenever you need to connect HTML elements programmatically. Never use Math.random() or counters for IDs in React!
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
              description="Learn useId progressively"
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
                          <Key className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Generate an ID</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Call useId() to generate a unique ID that will be stable across server and client renders.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Generate unique ID in component</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{'} useId {'}'} <span className="text-blue-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">MyInput</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> id = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// ID will be something like ":r1:"</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">console</span>.<span className="text-blue-600">log</span>(id); <span className="text-slate-500">// ":r1:"</span>
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
                              Each useId() call generates a unique ID. Multiple calls in the same component will produce different IDs.
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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Connect Form Elements</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the generated ID to connect labels with inputs using <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">htmlFor</code> and <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">id</code> attributes.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Connect label and input</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">NameInput</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> id = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;label</span> <span className="text-orange-600">htmlFor=</span>{'<span className="text-green-600">{id}</span>'}<span className="text-red-600">&gt;</span>
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            Name:
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/label&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;input</span> <span className="text-orange-600">id=</span>{'<span className="text-green-600">{id}</span>'} <span className="text-orange-600">type=</span><span className="text-green-600">"text"</span> <span className="text-red-600">/&gt;</span>
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/&gt;</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
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
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Accessibility Win!</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Screen readers will now announce "Name, edit text" when users focus on the input field.
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
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use with ARIA Attributes</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Connect descriptive elements with interactive elements using ARIA attributes for enhanced accessibility.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Connect error message with input</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">ValidatedInput</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> inputId = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> errorId = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;input</span>
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-600">id=</span>{'<span className="text-green-600">{inputId}</span>'}
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-600">aria-describedby=</span>{'<span className="text-green-600">{errorId}</span>'}
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">/&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div</span> <span className="text-orange-600">id=</span>{'<span className="text-green-600">{errorId}</span>'} <span className="text-red-600">&gt;</span>
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            Error message
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/div&gt;</span>
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
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Screen Reader Magic</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Screen readers will announce the input and then read the associated error message automatically.
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
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Create Reusable Components</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Build reusable components that generate their own unique IDs, preventing conflicts when used multiple times.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Reusable checkbox component</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">Checkbox</span>(<span className="text-orange-600">{'{'} children, disabled {'}'}</span>) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> id = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div</span> <span className="text-orange-600">className=</span><span className="text-green-600">"checkbox"</span><span className="text-red-600">&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;input</span> <span className="text-orange-600">id=</span>{'<span className="text-green-600">{id}</span>'} <span className="text-orange-600">type=</span><span className="text-green-600">"checkbox"</span> <span className="text-red-600">/&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;label</span> <span className="text-orange-600">htmlFor=</span>{'<span className="text-green-600">{id}</span>'}<span className="text-red-600">&gt;</span>
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            {'{'}children{'}'}
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/label&gt;</span>
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
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Safe to use multiple times!</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;Checkbox&gt;</span>Option 1<span className="text-red-600">&lt;/Checkbox&gt;</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;Checkbox&gt;</span>Option 2<span className="text-red-600">&lt;/Checkbox&gt;</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">No ID Conflicts!</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Each Checkbox instance gets its own unique ID, preventing conflicts and ensuring proper accessibility.
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
                        Follow these guidelines to use useId effectively and avoid common pitfalls.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DO: Use for accessibility</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> id = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;label</span> <span className="text-orange-600">htmlFor=</span>{'<span className="text-green-600">{id}</span>'}<span className="text-red-600">&gt;</span>Label<span className="text-red-600">&lt;/label&gt;</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DON'T: Use for CSS selectors</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div</span> <span className="text-orange-600">id=</span>{'<span className="text-green-600">{id}</span>'} <span className="text-orange-600">className=</span><span className="text-green-600">"my-component"</span><span className="text-red-600">&gt;</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DO: Use in component libraries</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">CustomInput</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> id = <span className="text-blue-600">useId</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">DON'T: Use for list keys</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            items.<span className="text-blue-600">map</span>(item {'=>'} (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;div</span> <span className="text-orange-600">key=</span>{'<span className="text-green-600">{useId()}</span>'}<span className="text-red-600">&gt;</span> <span className="text-slate-500">// Wrong!</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            ))
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
                              Use useId only for connecting HTML elements. For list keys, use stable identifiers from your data.
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

        {/* Example: Accessible Form Component */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Accessible Form Component"
            description="Building a complete accessible form with useId"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Accessible Form with useId"
            description="Complete form with proper accessibility connections"
            colorTheme="green"
            react={`function FormField({ label, type = 'text', error, required = false }) {
  const id = useId();
  const errorId = useId();

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        id={id}
        type={type}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : 'false'}
        required={required}
      />
      {error && (
        <div id={errorId} className="error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

function SignUpForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <h1>🔐 Create Account</h1>
        <p>Join us today! All fields are required.</p>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <FormField
          label="Full Name"
          value={formData.name}
          onChange={handleChange('name')}
          error={errors.name}
          required
        />
        
        <FormField
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          required
        />
        
        <FormField
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          error={errors.password}
          required
        />

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </div>
      </form>

      <div className="accessibility-info">
        <h2>♿ Accessibility Features</h2>
        <ul>
          <li>✅ All form fields have proper label connections</li>
          <li>✅ Error messages are announced by screen readers</li>
          <li>✅ Required fields are clearly marked</li>
          <li>✅ Form validation provides helpful feedback</li>
          <li>✅ Unique IDs prevent conflicts</li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUpForm />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useId } = React;
  const { createRoot } = ReactDOM;

  function FormField({ label, type = 'text', error, required = false, value, onChange }) {
    const id = useId();
    const errorId = useId();

    return h('div', { className: 'form-field' },
      h('label', { htmlFor: id },
        label,
        required && h('span', { className: 'required' }, '*')
      ),
      h('input', {
        id: id,
        type: type,
        value: value,
        onChange: onChange,
        'aria-describedby': error ? errorId : undefined,
        'aria-invalid': error ? 'true' : 'false',
        required: required
      }),
      error && h('div', { 
        id: errorId, 
        className: 'error-message', 
        role: 'alert' 
      }, error)
    );
  }

  function SignUpForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', password: '' });
        setErrors({});
      }
    };

    const handleChange = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    return h('div', { className: 'container' },
      h('div', { className: 'form-header' },
        h('h1', null, '🔐 Create Account'),
        h('p', null, 'Join us today! All fields are required.')
      ),

      h('form', { onSubmit: handleSubmit, className: 'signup-form' },
        h(FormField, {
          label: 'Full Name',
          value: formData.name,
          onChange: handleChange('name'),
          error: errors.name,
          required: true
        }),
        
        h(FormField, {
          label: 'Email Address',
          type: 'email',
          value: formData.email,
          onChange: handleChange('email'),
          error: errors.email,
          required: true
        }),
        
        h(FormField, {
          label: 'Password',
          type: 'password',
          value: formData.password,
          onChange: handleChange('password'),
          error: errors.password,
          required: true
        }),

        h('div', { className: 'form-actions' },
          h('button', { type: 'submit', className: 'submit-btn' }, 'Sign Up')
        )
      ),

      h('div', { className: 'accessibility-info' },
        h('h2', null, '♿ Accessibility Features'),
        h('ul', null,
          h('li', null, '✅ All form fields have proper label connections'),
          h('li', null, '✅ Error messages are announced by screen readers'),
          h('li', null, '✅ Required fields are clearly marked'),
          h('li', null, '✅ Form validation provides helpful feedback'),
          h('li', null, '✅ Unique IDs prevent conflicts')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(SignUpForm));
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
  max-width: 500px;
  width: 100%;
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-header h1 {
  color: #8b5cf6;
  margin-bottom: 10px;
  font-size: 2rem;
}

.form-header p {
  color: #6b7280;
  font-size: 1rem;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  font-weight: 600;
  color: #374151;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.required {
  color: #ef4444;
  font-weight: bold;
}

.form-field input {
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.form-field input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-field input[aria-invalid="true"] {
  border-color: #ef4444;
}

.form-field input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
  padding: 8px 12px;
  background: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
}

.form-actions {
  margin-top: 10px;
}

.submit-btn {
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

.accessibility-info {
  margin-top: 30px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.accessibility-info h2 {
  color: #8b5cf6;
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.accessibility-info ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.accessibility-info li {
  color: #374151;
  font-size: 14px;
  padding-left: 20px;
  position: relative;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
  }

  .container {
    background: #1f2937;
  }

  .form-header h1 {
    color: #a78bfa;
  }

  .form-header p {
    color: #9ca3af;
  }

  .form-field label {
    color: #e5e7eb;
  }

  .form-field input {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .form-field input:focus {
    border-color: #a78bfa;
    box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
  }

  .error-message {
    background: #7f1d1d;
    border-color: #991b1b;
    color: #fecaca;
  }

  .accessibility-info {
    background: #111827;
    border-color: #374151;
  }

  .accessibility-info h2 {
    color: #a78bfa;
  }

  .accessibility-info li {
    color: #e5e7eb;
  }
}`}
          />
        </div>

        {/* Key Concepts */}
        <Card className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-violet-600 dark:text-violet-400" />}
              title="Key Concepts"
              description="Understanding useId fundamentals"
              size="lg"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Fingerprint className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">Unique Generation</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Each useId() call generates a unique identifier that won't conflict with other IDs.
                </p>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Hash className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">SSR Compatible</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  IDs are stable across server and client rendering, preventing hydration mismatches.
                </p>
              </div>
              
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">Performance</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Lightweight and fast - no performance overhead compared to manual ID generation.
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
              description="Do's and Don'ts for useId"
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
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use for form label connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use with ARIA attributes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Create reusable components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use in component libraries</span>
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
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't use for CSS selectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't use for list keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't use for data attributes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't rely on ID format</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-300 dark:border-violet-700">
              <Lightbulb className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              <AlertTitle className="text-violet-900 dark:text-violet-100">Accessibility First!</AlertTitle>
              <AlertDescription className="text-violet-800 dark:text-violet-200">
                useId is your best friend for building accessible React components. Always use it for connecting HTML elements!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
