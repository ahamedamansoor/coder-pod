'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import {
  Lightbulb,
  CheckCircle2,
  Zap,
  Eye,
  Code2,
  Monitor,
  Settings,
  Globe,
  ArrowRight,
  AlertTriangle,
  Radio,
  Wifi,
  Layers,
  TreePine,
  Users,
  MessageSquare,
} from 'lucide-react';

export default function WhatIsContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Globe}
        category="React · Context (Fundamental)"
        title="What is React Context?"
        description="Understand what Context truly IS - not how to use it, but what it represents in React's component architecture."
        colorTheme="blue"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Core Concept */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Globe className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Context IS a Global Broadcast System"
              description="Think of Context as radio waves for your components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>React Context is NOT state management.</strong> It's a <strong>delivery mechanism</strong> - like radio waves that broadcast data to any component tuned to the right frequency. Components can "listen" to these broadcasts without knowing who sent them.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">What Context IS</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• A broadcast system for data</li>
                  <li>• A way to skip prop drilling</li>
                  <li>• A subscription mechanism</li>
                  <li>• A global communication channel</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mb-3" />
                <h4 className="font-bold text-lg mb-2">What Context IS NOT</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• State management solution</li>
                  <li>• Replacement for Redux/Zustand</li>
                  <li>• Performance optimization tool</li>
                  <li>• A way to avoid all props</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Core Insight</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Context is about <strong>delivery</strong>, not <strong>storage</strong>. It delivers data from Provider to Consumer, but doesn't manage the data itself.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Radio Wave Analogy */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Radio className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Radio Wave Analogy"
              description="Understanding Context through broadcast communication"
              size="lg"
            />

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Radio Station (Provider)</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  A Context Provider is like a radio station broadcasting on a specific frequency. It continuously sends out data (the music/news) to anyone listening.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                  <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                    <div>📻 Radio Station 101.5 FM:</div>
                    <div className="ml-4">🎵 Now playing: User Data</div>
                    <div className="ml-4">📢 Broadcasting to all receivers...</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Radio className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Radio Receivers (Consumers)</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Components using Context are like radio receivers tuned to the right frequency. They automatically receive broadcasts without knowing about the radio station.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                  <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                    <div>📻 Component A: Tuned to 101.5 FM</div>
                    <div className="ml-4">🎵 Receiving: User Data</div>
                    <div>📻 Component B: Tuned to 101.5 FM</div>
                    <div className="ml-4">🎵 Receiving: User Data</div>
                    <div>📻 Component C: Tuned to 98.7 FM</div>
                    <div className="ml-4">🎵 Receiving: Theme Data</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-800">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">💡 Key Insight</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Multiple Contexts can coexist like different radio stations. Components only hear the broadcasts they're tuned to, ignoring others completely.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Understanding */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Conceptual Understanding"
              description="Master the mental model of Context"
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
                          <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create a Broadcast Channel</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Creating Context is like reserving a radio frequency. You're setting up a communication channel that will carry specific type of data.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Reserve frequency 101.5 FM</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> UserContext = <span className="text-blue-600">createContext</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// This creates a broadcast channel</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Not the data itself, just the channel</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Mental Model</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              createContext() = "I'm setting up a radio station called UserContext"
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
                          <Wifi className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Start Broadcasting</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        The Provider starts broadcasting data on the channel. Any component within range can receive this broadcast automatically.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Radio station starts broadcasting</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;UserContext.Provider</span> <span className="text-orange-600">value=</span>{'<span className="text-green-600">{user: "Alice"}</span>'}<span className="text-red-600">&gt;</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// All children can now receive this data</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;App /&gt;</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/UserContext.Provider&gt;</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Mental Model</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Provider = "Radio station is now broadcasting: &#123;user: 'Alice'&#125;"
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
                          <Radio className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Tune In and Listen</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Components automatically receive broadcasts by "tuning in" to the Context. They don't need to know who's broadcasting or how.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Component tunes to the frequency</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">UserProfile</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> user = <span className="text-blue-600">useContext</span>(UserContext);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Automatically receives broadcast!</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> <span className="text-red-600">&lt;div&gt;</span>Hello {'{'}user.name{'}'}<span className="text-red-600">&lt;/div&gt;</span>;
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
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Mental Model</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              useContext() = "I'm tuning my radio to UserContext frequency"
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
                          <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Automatic Updates</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        When the Provider broadcasts new data, all tuned-in components automatically receive the update and re-render.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Radio station changes broadcast</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;UserContext.Provider</span> <span className="text-orange-600">value=</span>{'<span className="text-green-600">{user: "Bob"}</span>'}<span className="text-red-600">&gt;</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// All receivers automatically update!</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-slate-500">// UserProfile now shows "Hello Bob"</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Mental Model</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Value change = "Radio station now playing: &#123;user: 'Bob'&#125;"
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

        {/* Common Misconceptions */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Common Misconceptions"
              description="What people get wrong about Context"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">"Context is for state management"</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Wrong.</strong> Context only delivers data. The data still needs to be managed somewhere (useState, useReducer, external stores, etc.).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">"Context replaces all props"</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Wrong.</strong> Context is for truly global data. Overusing it makes components harder to understand and test.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">"Context is slow"</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Wrong.</strong> Context itself is fast. Performance issues come from how often the value changes and how many components re-render.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">"Context makes code unmaintainable"</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Wrong.</strong> Context makes code MORE maintainable when used appropriately for truly global concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">The Truth</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Context is a delivery mechanism, not a solution. Use it to deliver data that is truly global and doesn't change frequently.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When Context Makes Sense */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="When Context Actually Makes Sense"
              description="Use cases where Context shines"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Perfect Use Cases</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• <strong>Theme</strong> (light/dark mode)</li>
                  <li>• <strong>Authentication</strong> (user login status)</li>
                  <li>• <strong>Language/Locale</strong> (i18n)</li>
                  <li>• <strong>Routing</strong> (current route)</li>
                  <li>• <strong>UI State</strong> (modals, sidebars)</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Avoid For</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Form data (use local state)</li>
                  <li>• Component-specific config (use props)</li>
                  <li>• Frequently changing values</li>
                  <li>• Complex business logic</li>
                  <li>• Data that needs persistence</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-4">The Golden Rule</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Use Context when <strong>many components need the same data</strong> AND <strong>the data doesn't change frequently</strong> AND <strong>the data is truly global</strong>.
              </p>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                  <div>✅ Many components need theme data</div>
                  <div>✅ Theme changes rarely</div>
                  <div>✅ Theme is global to the entire app</div>
                  <div>→ Perfect for Context!</div>
                  <div className="mt-2"></div>
                  <div>❌ Only one component needs form data</div>
                  <div>❌ Form data changes constantly</div>
                  <div>❌ Form data is component-specific</div>
                  <div>→ Use local state instead!</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visual Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Visual Example: Broadcast System"
            description="See Context in action as a broadcast system"
            size="lg"
          />

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Radio Station (Provider)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Broadcasting user data to all receivers</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-300 dark:border-blue-700 pl-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Broadcasting: &#123;user: "Alice", role: "Admin"&#125;</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Radio className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Receivers (Consumers)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Components tuned to the frequency</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">
                      <Radio className="w-3 h-3 text-purple-700 dark:text-purple-300" />
                    </div>
                    <span className="text-sm font-semibold">Header</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Receiving: Alice (Admin)</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">
                      <Radio className="w-3 h-3 text-purple-700 dark:text-purple-300" />
                    </div>
                    <span className="text-sm font-semibold">Sidebar</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Receiving: Alice (Admin)</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center">
                      <Radio className="w-3 h-3 text-purple-700 dark:text-purple-300" />
                    </div>
                    <span className="text-sm font-semibold">Profile</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Receiving: Alice (Admin)</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Key Insight:</strong> All components receive the same broadcast simultaneously, without knowing about each other or the Provider.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Key Takeaways"
              description="What you should remember about Context"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">🎯 What Context IS</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• A broadcast system for data</li>
                  <li>• A way to skip prop drilling</li>
                  <li>• A subscription mechanism</li>
                  <li>• A global communication channel</li>
                  <li>• A delivery mechanism, not storage</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">💡 When to Use It</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Many components need same data</li>
                  <li>• Data doesn't change frequently</li>
                  <li>• Data is truly global</li>
                  <li>• Theme, auth, language, routing</li>
                  <li>• UI state like modals/sidebars</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Final Thought</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Context is like radio waves - it delivers data to anyone tuned in. The magic isn't in the delivery, it's in knowing what deserves to be broadcast.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
