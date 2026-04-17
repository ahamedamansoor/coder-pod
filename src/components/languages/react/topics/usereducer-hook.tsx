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
  GitBranch,
  Settings,
  AlertTriangle,
  Target,
  Eye,
  MousePointer,
  RefreshCw,
} from 'lucide-react';

export default function UseReducerHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={GitBranch}
        category="React · Hooks (Comprehensive)"
        title="useReducer Hook"
        description="Master useReducer for managing complex state logic with actions and reducers - perfect for state that involves multiple sub-values or complex update logic."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useReducer */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useReducer?"
              description="Alternative to useState for complex state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useReducer</code> is a Hook for managing state with a <strong>reducer function</strong>. It's ideal when you have complex state logic with multiple sub-values or when the next state depends on the previous one.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const [state, dispatch] = useReducer(reducer, initialState);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">reducer:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function that determines how state updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">initialState:</span>
                  <span className="text-gray-700 dark:text-gray-300">Starting state value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">state:</span>
                  <span className="text-gray-700 dark:text-gray-300">Current state value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">dispatch:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function to trigger state updates</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">useState</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Simple state updates</li>
                  <li>• Single value or object</li>
                  <li>• Direct setState calls</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">useReducer</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Complex state logic</li>
                  <li>• Multiple sub-values</li>
                  <li>• Actions describe "what happened"</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When to Use?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useReducer when you have state transitions that depend on previous state, or when state logic becomes complex with multiple setState calls!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why We Need useReducer */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Why We Need useReducer"
              description="The problem useState can't solve"
              size="lg"
            />

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <Lightbulb className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">The useState Problem</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                When state logic becomes complex, useState leads to scattered, hard-to-maintain code with bugs and race conditions!
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 useState Problems</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">Problem 1: Scattered Logic</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ❌ Logic scattered everywhere</div>
                        <div>const [count, setCount] = useState(0);</div>
                        <div>const [isLoading, setIsLoading] = useState(false);</div>
                        <div>const [error, setError] = useState(null);</div>
                        <div></div>
                        <div>function handleIncrement() {'{}'}</div>
                        <div>  setIsLoading(true);</div>
                        <div>  setError(null);</div>
                        <div>  // What if this fails?</div>
                        <div>  setCount(prev {'=>'} prev + 1);</div>
                        <div>  setIsLoading(false);</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      State updates are scattered across multiple functions. Hard to track what's happening!
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">Problem 2: Race Conditions</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ❌ Race condition possible</div>
                        <div>function handleAsync() {'{}'}</div>
                        <div>  setIsLoading(true);</div>
                        <div>  fetchData().then(data {'=>'} {'{}'}</div>
                        <div>    setData(data);</div>
                        <div>    setIsLoading(false);</div>
                        <div>  {'})'});</div>
                        <div>  // What if user clicks again?</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Multiple async operations can interfere with each other!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ useReducer Solutions</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Solution 1: Centralized Logic</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ✅ All logic in one place</div>
                        <div>function reducer(state, action) {'{}'}</div>
                        <div>  switch (action.type) {'{}'}</div>
                        <div>    case 'INCREMENT_START':</div>
                        <div>      return {'{'} ...state, isLoading: true, error: null {'}}'};</div>
                        <div>    case 'INCREMENT_SUCCESS':</div>
                        <div>      return {'{'} ...state, count: state.count + 1, isLoading: false {'}}'};</div>
                        <div>    case 'INCREMENT_ERROR':</div>
                        <div>      return {'{'} ...state, error: action.error, isLoading: false {'}}'};</div>
                        <div>  {'})'}</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      All state logic is centralized and predictable!
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Solution 2: No Race Conditions</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ✅ Predictable state updates</div>
                        <div>function handleAsync() {'{}'}</div>
                        <div>  dispatch({'{}'} type: 'FETCH_START' {'})'});</div>
                        <div>  fetchData().then(data {'=>'} {'{}'}</div>
                        <div>    dispatch({'{}'} type: 'FETCH_SUCCESS', payload: data {'})'});</div>
                        <div>  {'})'}).catch(error {'=>'} {'{}'}</div>
                        <div>    dispatch({'{}'} type: 'FETCH_ERROR', payload: error {'})'});</div>
                        <div>  {'})'});</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Each action creates a new state - no interference!
                    </p>
                  </div>
                </div>
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
              description="Learn useReducer progressively"
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
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Define Your State Shape</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, think about what state you need and how it's structured. Group related state together for better organization!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Think about your state structure</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> initialState = <span className="text-green-600">{'{}'}</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">count</span>: <span className="text-green-600">0</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">isLoading</span>: <span className="text-red-600">false</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">error</span>: <span className="text-red-600">null</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-green-600">{'})'}</span>;
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
                              Group related state together. If you have multiple useState calls that update together, they probably belong in a reducer!
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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Define Action Types</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Actions describe "what happened" in your application. They should be descriptive and consistent!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Define all possible actions</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> actions = <span className="text-green-600">{'{}'}</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">INCREMENT</span>: <span className="text-green-600">'INCREMENT'</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">DECREMENT</span>: <span className="text-green-600">'DECREMENT'</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">RESET</span>: <span className="text-green-600">'RESET'</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">SET_LOADING</span>: <span className="text-green-600">'SET_LOADING'</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-orange-400">SET_ERROR</span>: <span className="text-green-600">'SET_ERROR'</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-green-600">{'})'}</span>;
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
                              Use constants for action types to avoid typos. Action types should be descriptive and in past tense (like "USER_CLICKED_BUTTON").
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
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Create the Reducer Function</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        The reducer handles how state changes based on actions. This is pure function that takes state and action!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">reducer</span>(<span className="text-orange-400">state</span>, <span className="text-orange-400">action</span>) {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">switch</span> (action.<span className="text-orange-400">type</span>) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">case</span> <span className="text-green-600">'INCREMENT'</span>:
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> <span className="text-green-600">{'{}'}</span> ...state, <span className="text-orange-400">count</span>: state.<span className="text-orange-400">count</span> + <span className="text-green-600">1</span> <span className="text-green-600">{'})'}</span>;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">case</span> <span className="text-green-600">'DECREMENT'</span>:
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> <span className="text-green-600">{'{}'}</span> ...state, <span className="text-orange-400">count</span>: state.<span className="text-orange-400">count</span> - <span className="text-green-600">1</span> <span className="text-green-600">{'})'}</span>;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">case</span> <span className="text-green-600">'RESET'</span>:
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> initialState;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">default</span>:
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> state; <span className="text-slate-500">// Never forget this!</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertTriangle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Important</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Always return a new object (never mutate state). The spread operator (...) is your best friend!
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
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Use useReducer in Component</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Replace useState with useReducer. This gives you state and dispatch to manage your complex state!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">Counter</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [state, dispatch] = <span className="text-blue-600">useReducer</span>(reducer, initialState);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-500">
                            // Use state.count, state.isLoading, state.error
                          </div>
                          <div className="ml-4 text-slate-500">
                            // Use dispatch to update state
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
                              The first value is your state, the second is dispatch. Think of dispatch as "sending a message" about what happened.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl transform rotate-1"></div>
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
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 5: Dispatch Actions</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use dispatch to trigger state changes. This sends actions to your reducer to update the state!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Dispatch actions to update state</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">dispatch</span>(<span className="text-green-600">{'{}'}</span> <span className="text-orange-400">type</span>: <span className="text-green-600">'INCREMENT'</span> <span className="text-green-600">{'})'}</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">dispatch</span>(<span className="text-green-600">{'{}'}</span> <span className="text-orange-400">type</span>: <span className="text-green-600">'DECREMENT'</span> <span className="text-green-600">{'})'}</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">dispatch</span>(<span className="text-green-600">{'{}'}</span> <span className="text-orange-400">type</span>: <span className="text-green-600">'RESET'</span> <span className="text-green-600">{'})'}</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">With payload data</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">dispatch</span>(<span className="text-green-600">{'{}'}</span> <span className="text-orange-400">type</span>: <span className="text-green-600">'SET_VALUE'</span>, <span className="text-orange-400">payload</span>: <span className="text-green-600">42</span> <span className="text-green-600">{'})'}</span>);
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Best Practice</p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Actions should describe WHAT happened, not HOW to update. "INCREMENT" is better than "SET_COUNT_TO_COUNT_PLUS_ONE".
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
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Counter with useReducer"
            description="Managing state with actions"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Counter using useReducer"
            description="Dispatch actions to update state"
            colorTheme="green"
            react={`// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(
    counterReducer, 
    { count: 0 }
  );

  return (
    <div className="container">
      <h1>🔢 useReducer Counter</h1>

      <div className="display">
        {state.count}
      </div>

      <div className="actions">
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="btn-red"
        >
          − Decrement
        </button>

        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          className="btn-gray"
        >
          Reset
        </button>

        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="btn-green"
        >
          + Increment
        </button>
      </div>

      <button 
        onClick={() => dispatch({ type: 'SET', payload: 100 })}
        className="btn-set"
      >
        Set to 100
      </button>

      <div className="info">
        💡 Actions describe what happened!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = function() {
  const { createElement: h, useReducer } = React;
  const { createRoot } = ReactDOM;

  function counterReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      case 'SET':
        return { count: action.payload };
      default:
        return state;
    }
  }

  function Counter() {
    const result = useReducer(counterReducer, { count: 0 });
    const state = result[0];
    const dispatch = result[1];

    return h('div', { className: 'container' },
      h('h1', null, '🔢 useReducer Counter'),

      h('div', { className: 'display' }, state.count),

      h('div', { className: 'actions' },
        h('button', {
          onClick: function() { dispatch({ type: 'DECREMENT' }); },
          className: 'btn-red'
        }, '− Decrement'),

        h('button', {
          onClick: function() { dispatch({ type: 'RESET' }); },
          className: 'btn-gray'
        }, 'Reset'),

        h('button', {
          onClick: function() { dispatch({ type: 'INCREMENT' }); },
          className: 'btn-green'
        }, '+ Increment')
      ),

      h('button', {
        onClick: function() { dispatch({ type: 'SET', payload: 100 }); },
        className: 'btn-set'
      }, 'Set to 100'),

      h('div', { className: 'info' },
        '💡 Actions describe what happened!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Counter));
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

.display {
  font-size: 96px;
  font-weight: 900;
  color: #065f46;
  text-align: center;
  margin: 40px 0;
  text-shadow: 2px 2px 4px rgba(6, 95, 70, 0.2);
}

.actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.actions button {
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-red {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-red:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

.btn-gray {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
}

.btn-gray:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
}

.btn-green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-green:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-set {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn-set:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
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

  .display {
    color: #d1fae5;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Predictable Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducer centralizes state logic, making updates predictable and easier to test.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Actions Describe Intent</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Actions clearly describe "what happened" rather than "how to update".
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Complex State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for state with multiple sub-values or complex transitions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Easier Testing</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducers are pure functions - easy to test in isolation!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Redux Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useReducer follows the same pattern as Redux. Learning it prepares you for Redux and other state management libraries!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
