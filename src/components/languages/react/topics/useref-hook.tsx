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
  Settings,
  AlertTriangle,
  MousePointer,
  RefreshCw,
  Eye,
} from 'lucide-react';

export default function UseRefHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Target}
        category="React · Hooks (Comprehensive)"
        title="useRef Hook"
        description="Master useRef for accessing DOM elements, persisting values across renders, and optimizing performance - the essential tool for direct DOM manipulation and value persistence."
        colorTheme="amber"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useRef */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="What is useRef?"
              description="Direct access to DOM elements and persistent values"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900 rounded text-sm">useRef</code> is a Hook that returns a mutable ref object whose <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900 rounded text-xs">.current</code> property persists for the full lifetime of the component. It's perfect for accessing DOM elements directly and storing values that don't trigger re-renders.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <h4 className="font-bold mb-4 text-amber-700 dark:text-amber-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const myRef = useRef(initialValue);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400 min-w-[100px]">initialValue:</span>
                  <span className="text-gray-700 dark:text-gray-300">Starting value for the ref (can be null, object, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400 min-w-[100px]">myRef.current:</span>
                  <span className="text-gray-700 dark:text-gray-300">Property that holds the current value</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">DOM Access</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Direct DOM element manipulation</li>
                  <li>• Focus management</li>
                  <li>• Media playback control</li>
                  <li>• Canvas/drawing operations</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Value Persistence</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Store values without re-renders</li>
                  <li>• Previous state tracking</li>
                  <li>• Interval/cleanup references</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Key Advantage!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Unlike state, changing a ref's value doesn't trigger a re-render! Perfect for values you need to persist but don't need to display in the UI.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why We Need useRef */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Why We Need useRef"
              description="Problems that refs solve better than state"
              size="lg"
            />

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">The State Problem</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                State causes re-renders and can't directly access DOM elements. Sometimes you need to manipulate things without triggering updates!
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 useState Problems</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">Problem 1: Unnecessary Re-renders</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ❌ Every click triggers re-render</div>
                        <div>const [clickCount, setClickCount] = useState(0);</div>
                        <div></div>
                        <div>function handleClick() {'{}'}</div>
                        <div>  setClickCount(prev {'=>'} prev + 1); // Re-render!</div>
                        <div>  console.log('Clicked', clickCount + 1); // Stale value!</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      State updates cause re-renders even when you just need to track something internally!
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">Problem 2: No Direct DOM Access</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ❌ Can't directly access DOM with state</div>
                        <div>const [inputValue, setInputValue] = useState('');</div>
                        <div></div>
                        <div>function focusInput() {'{}'}</div>
                        <div>  // How to focus the input element?</div>
                        <div>  // State doesn't give you DOM reference!</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      State doesn't provide direct access to DOM elements for manipulation!
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">Problem 3: Lost Values on Re-render</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ❌ Values reset on every render</div>
                        <div>function TimerComponent() {'{}'}</div>
                        <div>  let intervalId; // Lost on re-render!</div>
                        <div>  </div>
                        <div>  useEffect(() {'=>'} {'{}'}</div>
                        <div>    intervalId = setInterval(...); // Can't clean up!</div>
                        <div>    return () {'=>'} clearInterval(intervalId);</div>
                        <div>  {'}'});</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Regular variables are reset on every render, making cleanup impossible!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ useRef Solutions</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Solution 1: No Re-renders</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ✅ No re-renders on update</div>
                        <div>const clickCountRef = useRef(0);</div>
                        <div></div>
                        <div>function handleClick() {'{}'}</div>
                        <div>  clickCountRef.current += 1; // No re-render!</div>
                        <div>  console.log('Clicked', clickCountRef.current); // Current value!</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Ref updates don't trigger re-renders, perfect for internal tracking!
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Solution 2: Direct DOM Access</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ✅ Direct DOM element access</div>
                        <div>const inputRef = useRef(null);</div>
                        <div></div>
                        <div>function focusInput() {'{}'}</div>
                        <div>  inputRef.current.focus(); // Direct DOM manipulation!</div>
                        <div>{'}'}</div>
                        <div></div>
                        <div>&lt;input ref={'{'}inputRef{'}'} /&gt;</div>
                      </div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Refs provide direct access to DOM elements for manipulation!
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Solution 3: Persistent Values</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>// ✅ Values persist across renders</div>
                        <div>const intervalIdRef = useRef(null);</div>
                        <div></div>
                        <div>useEffect(() {'=>'} {'{}'}</div>
                        <div>  intervalIdRef.current = setInterval(...);</div>
                        <div>  return () {'=>'} clearInterval(intervalIdRef.current);</div>
                        <div>{'}'});</div>
                      </div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Ref values persist across renders, enabling proper cleanup!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useRef progressively"
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
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create a Ref</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Initialize a ref with useRef() and an initial value. Think of it as creating a special container that persists across renders.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a ref with initial value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> myRef = <span className="text-blue-600">useRef</span>(<span className="text-green-600">0</span>); <span className="text-slate-500">// Starts with 0</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a ref for DOM element</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> inputRef = <span className="text-blue-600">useRef</span>(<span className="text-red-600">null</span>); <span className="text-slate-500">// Starts with null</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a ref for object</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> dataRef = <span className="text-blue-600">useRef</span>(<span className="text-green-600">{'{}'}</span>); <span className="text-slate-500">// Empty object</span>
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
                              Use <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 rounded text-xs">null</code> for DOM elements, <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 rounded text-xs">0</code> for numbers, or objects for complex data.
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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Access the Ref Value</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">.current</code> property to read and write the ref value. This is your gateway to the stored data.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Reading the ref value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(myRef.<span className="text-green-400">current</span>); <span className="text-slate-500">// Current value</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Writing to the ref value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            myRef.<span className="text-green-400">current</span> = <span className="text-green-600">42</span>; <span className="text-slate-500">// Update value</span>
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">For DOM elements</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(inputRef.<span className="text-green-400">current</span>); <span className="text-slate-500">// DOM element or null</span>
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
                              The ref object is just a container. Always use <code className="px-2 py-1 bg-purple-100 dark:bg-purple-800 rounded text-xs">.current</code> to access the actual value!
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
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Use Ref with DOM Elements</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Attach the ref to JSX elements using the <code className="px-2 py-1 bg-pink-100 dark:bg-pink-800 rounded text-xs">ref</code> attribute. This gives you direct access to DOM elements!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">MyComponent</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> inputRef = <span className="text-blue-600">useRef</span>(<span className="text-red-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">focusInput</span> = () {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            inputRef.<span className="text-green-400">current</span>?<span className="text-yellow-400">.focus</span>(); <span className="text-slate-500">// Safe access</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">input</span> <span className="text-green-400">ref</span>={'{}'}inputRef{'}'} <span className="text-orange-400">placeholder</span>=<span className="text-green-600">"Type here..."</span> /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">button</span> <span className="text-green-400">onClick</span>={'{}'}focusInput{'}'}&gt;Focus Input&lt;/<span className="text-red-400">button</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
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
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Safety First</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Use optional chaining <code className="px-2 py-1 bg-pink-100 dark:bg-pink-800 rounded text-xs">?.</code> when accessing DOM refs. They're <code className="px-2 py-1 bg-pink-100 dark:bg-pink-800 rounded text-xs">null</code> before mount and after unmount!
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
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Update Ref Values</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Modify ref values without triggering re-renders. This is perfect for performance optimization and internal tracking!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">Counter</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> countRef = <span className="text-blue-600">useRef</span>(<span className="text-green-600">0</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [renderCount, setRenderCount] = <span className="text-blue-600">useState</span>(<span className="text-green-600">0</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">incrementRef</span> = () {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            countRef.<span className="text-green-400">current</span> += <span className="text-green-600">1</span>; <span className="text-slate-500">// No re-render!</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">forceRender</span> = () {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            setRenderCount(<span className="text-green-600">prev</span> {'=>'} prev + <span className="text-green-600">1</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Performance Boost</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Ref updates are <strong>synchronous</strong> and <strong>don't trigger re-renders</strong>. Perfect for tracking values internally without UI updates!
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
                          <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 5: Cleanup with Refs</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use refs to store values needed for cleanup. This prevents memory leaks and ensures proper resource management!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">Timer</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> intervalRef = <span className="text-blue-600">useRef</span>(<span className="text-red-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            intervalRef.<span className="text-green-400">current</span> = <span className="text-yellow-400">setInterval</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Tick'</span>);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'}, <span className="text-green-600">1000</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> () {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (intervalRef.<span className="text-green-400">current</span>) {'{}'}
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-yellow-400">clearInterval</span>(intervalRef.<span className="text-green-400">current</span>);
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'})'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Memory Management</p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Refs are essential for storing timers, event listeners, and other resources that need cleanup. Prevent memory leaks!
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

        {/* Real World Examples */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Real-World Examples"
            description="Practical useRef patterns"
            size="lg"
          />

          <div className="flex flex-col gap-6">
            {/* Focus Management Example */}
            <FrontendCodePreview learningContext="react"
              title="Focus Management"
              description="Auto-focus and form navigation with refs"
              colorTheme="amber"
              react={`function FocusForm() {
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const messageRef = React.useRef(null);

  const handleNameEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      emailRef.current?.focus();
    }
  };

  const handleEmailEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      messageRef.current?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    nameRef.current?.focus();
  };

  return (
    <div className="focus-form">
      <h2>Contact Form</h2>
      <p>Press Enter to move to next field</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            onKeyDown={handleNameEnter}
            autoFocus
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            onKeyDown={handleEmailEnter}
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            ref={messageRef}
            placeholder="Enter your message"
            rows={4}
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={() => nameRef.current?.focus()}>
            Reset Focus
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FocusForm />);`}
              html={`<div id="root"></div>`}
              js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = function() {
  const { createElement: h, useRef } = React;
  const { createRoot } = ReactDOM;

  function FocusForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    var handleNameEnter = function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (emailRef.current) {
          emailRef.current.focus();
        }
      }
    };

    var handleEmailEnter = function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (messageRef.current) {
          messageRef.current.focus();
        }
      }
    };

    var handleSubmit = function(e) {
      e.preventDefault();
      alert('Form submitted!');
      if (nameRef.current) {
        nameRef.current.focus();
      }
    };

    return h('div', { className: 'focus-form' },
      h('h2', null, 'Contact Form'),
      h('p', null, 'Press Enter to move to next field'),
      
      h('form', { onSubmit: handleSubmit },
        h('div', { className: 'form-group' },
          h('label', null, 'Name:'),
          h('input', {
            ref: nameRef,
            type: 'text',
            placeholder: 'Enter your name',
            onKeyDown: handleNameEnter,
            autoFocus: true
          })
        ),

        h('div', { className: 'form-group' },
          h('label', null, 'Email:'),
          h('input', {
            ref: emailRef,
            type: 'email',
            placeholder: 'Enter your email',
            onKeyDown: handleEmailEnter
          })
        ),

        h('div', { className: 'form-group' },
          h('label', null, 'Message:'),
          h('textarea', {
            ref: messageRef,
            placeholder: 'Enter your message',
            rows: 4
          })
        ),

        h('div', { className: 'button-group' },
          h('button', { 
            type: 'button', 
            onClick: function() { 
              if (nameRef.current) nameRef.current.focus(); 
            } 
          }, 'Reset Focus'),
          h('button', { type: 'submit' }, 'Submit')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(FocusForm));
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
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.focus-form {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.focus-form h2 {
  color: #92400e;
  margin-bottom: 8px;
  font-size: 1.8rem;
  font-weight: 700;
}

.focus-form p {
  color: #78350f;
  margin-bottom: 30px;
  font-size: 0.95rem;
  opacity: 0.8;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #451a03;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #fed7aa;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #fffbeb;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  background: white;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 30px;
}

.button-group button {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-group button[type="button"] {
  background: #f3f4f6;
  color: #374151;
}

.button-group button[type="button"]:hover {
  background: #e5e7eb;
}

.button-group button[type="submit"] {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.button-group button[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
}`}
            />

            {/* Performance Optimization Example */}
            <FrontendCodePreview learningContext="react"
              title="Performance Optimization"
              description="Track renders without causing re-renders"
              colorTheme="green"
              react={`function RenderTracker() {
  const renderCountRef = React.useRef(0);
  const lastRenderRef = React.useRef(Date.now());
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');

  // Track renders without causing re-renders
  renderCountRef.current += 1;
  lastRenderRef.current = Date.now();

  const expensiveCalculation = React.useCallback(() => {
    console.log('Expensive calculation running...');
    return Array.from({ length: 1000000 }, (_, i) => i * 2).reduce((a, b) => a + b, 0);
  }, []);

  const handleExpensiveOperation = React.useCallback(() => {
    const result = expensiveCalculation();
    alert('Calculation result: ' + result);
  }, [expensiveCalculation]);

  return (
    <div className="tracker">
      <h2>Render Performance Tracker</h2>
      
      <div className="stats">
        <div className="stat">
          <span className="label">Render Count:</span>
          <span className="value">{renderCountRef.current}</span>
        </div>
        <div className="stat">
          <span className="label">Last Render:</span>
          <span className="value">{new Date(lastRenderRef.current).toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="controls">
        <div className="control-group">
          <label>State Count: {count}</label>
          <button onClick={() => setCount(c => c + 1)}>
            Increment State (Triggers Re-render)
          </button>
        </div>

        <div className="control-group">
          <label>Input Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type to trigger re-renders"
          />
        </div>

        <div className="control-group">
          <button onClick={handleExpensiveOperation}>
            Run Expensive Calculation
          </button>
        </div>
      </div>

      <div className="info">
        <p>💡 Render count is tracked with useRef - it updates without causing additional re-renders!</p>
        <p>Try typing in the input and watch how render count increases.</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderTracker />);`}
              html={`<div id="root"></div>`}
              js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = function() {
  const { createElement: h, useRef, useState, useCallback } = React;
  const { createRoot } = ReactDOM;

  function RenderTracker() {
    const renderCountRef = useRef(0);
    const lastRenderRef = useRef(Date.now());
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    renderCountRef.current += 1;
    lastRenderRef.current = Date.now();

    var expensiveCalculation = useCallback(function() {
      console.log('Expensive calculation running...');
      return Array.from({ length: 1000000 }, function(_, i) { return i * 2; }).reduce(function(a, b) { return a + b; }, 0);
    }, []);

    var handleExpensiveOperation = useCallback(function() {
      var result = expensiveCalculation();
      alert('Calculation result: ' + result);
    }, [expensiveCalculation]);

    return h('div', { className: 'tracker' },
      h('h2', null, 'Render Performance Tracker'),
      
      h('div', { className: 'stats' },
        h('div', { className: 'stat' },
          h('span', { className: 'label' }, 'Render Count:'),
          h('span', { className: 'value' }, renderCountRef.current)
        ),
        h('div', { className: 'stat' },
          h('span', { className: 'label' }, 'Last Render:'),
          h('span', { className: 'value' }, new Date(lastRenderRef.current).toLocaleTimeString())
        )
      ),

      h('div', { className: 'controls' },
        h('div', { className: 'control-group' },
          h('label', null, 'State Count: ' + count),
          h('button', { onClick: function() { setCount(function(c) { return c + 1; }); } },
            'Increment State (Triggers Re-render)'
          )
        ),

        h('div', { className: 'control-group' },
          h('label', null, 'Input Text:'),
          h('input', {
            type: 'text',
            value: text,
            onChange: function(e) { setText(e.target.value); },
            placeholder: 'Type to trigger re-renders'
          })
        ),

        h('div', { className: 'control-group' },
          h('button', { onClick: handleExpensiveOperation },
            'Run Expensive Calculation'
          )
        )
      ),

      h('div', { className: 'info' },
        h('p', null, '💡 Render count is tracked with useRef - it updates without causing additional re-renders!'),
        h('p', null, 'Try typing in the input and watch how render count increases.')
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(RenderTracker));
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

.tracker {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.tracker h2 {
  color: #065f46;
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.stat {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #a7f3d0;
  text-align: center;
}

.stat .label {
  display: block;
  color: #047857;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.stat .value {
  display: block;
  color: #065f46;
  font-size: 1.5rem;
  font-weight: 700;
}

.controls {
  margin-bottom: 30px;
}

.control-group {
  margin-bottom: 20px;
}

.control-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 600;
}

.control-group input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #d1fae5;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.control-group input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.control-group button {
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-group button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.info {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #bbf7d0;
}

.info p {
  color: #14532d;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.info p:last-child {
  margin-bottom: 0;
}`}
            />
          </div>
        </div>

        {/* Common Mistakes & Solutions */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Common Mistakes & Solutions"
              description="Avoid these useRef pitfalls"
              size="lg"
            />

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 1: Using Ref for Render-Dependent Values</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Using ref for values that should update UI</div>
                    <div>function Counter() {'{}'}</div>
                    <div>  const countRef = useRef(0);</div>
                    <div>  return (</div>
                    <div>    &lt;div&gt;</div>
                    <div>      &lt;button onClick={'{'}() {'=>'} countRef.current++{'}'}&gt;</div>
                    <div>        Count: {'{'}countRef.current{'}'} // Won't update!</div>
                    <div>      &lt;/button&gt;</div>
                    <div>    &lt;/div&gt;</div>
                    <div>  );</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Use state for values that need to trigger re-renders and update the UI. Use refs only for internal tracking or DOM access.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 2: Not Checking for Null DOM Refs</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Accessing DOM ref without null check</div>
                    <div>function MyComponent() {'{}'}</div>
                    <div>  const inputRef = useRef(null);</div>
                    <div>  </div>
                    <div>  useEffect(() {'=>'} {'{}'}</div>
                    <div>    inputRef.current.focus(); // Error if null!</div>
                    <div>  {'}'});</div>
                    <div>  </div>
                    <div>  return &lt;input ref={'{'}inputRef{'}'} /&gt;;</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Always check if DOM refs exist before accessing them. Use optional chaining or conditional checks.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 3: Creating Refs in Render Function</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Creating ref inside render logic</div>
                    <div>function BadComponent() {'{}'}</div>
                    <div>  const items = [1, 2, 3];</div>
                    <div>  return (</div>
                    <div>    &lt;div&gt;</div>
                    <div>      {'{'}items.map(item {'=>'} {'{}'}</div>
                    <div>        const itemRef = useRef(null); // New ref each render!</div>
                    <div>        return &lt;div ref={'{'}itemRef{'}'}&gt;{'{'}item{'}'}&lt;/div&gt;;</div>
                    <div>      {'})'}</div>
                    <div>    &lt;/div&gt;</div>
                    <div>  );</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Create refs at the component level, not inside loops or conditional rendering. For multiple elements, use an array or object to store refs.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 4: Forgetting Cleanup</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Not cleaning up resources stored in refs</div>
                    <div>function TimerComponent() {'{}'}</div>
                    <div>  const intervalRef = useRef(null);</div>
                    <div>  </div>
                    <div>  useEffect(() {'=>'} {'{}'}</div>
                    <div>    intervalRef.current = setInterval(...);</div>
                    <div>    // No cleanup function!</div>
                    <div>  {'}'});</div>
                    <div>  </div>
                    <div>  return &lt;div&gt;Timer&lt;/div&gt;;</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Always return a cleanup function from useEffect to clear intervals, event listeners, or other resources stored in refs.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">No Re-renders</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ref updates don't trigger component re-renders, perfect for performance optimization.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <MousePointer className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">DOM Access</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Direct access to DOM elements enables focus management, scrolling, and media control.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Value Persistence</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ref values persist across renders without being reset, essential for cleanup operations.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Performance Tool</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Track renders, store previous values, and optimize expensive operations without UI updates.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Golden Rule!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Use refs for "escape hatches" - when you need to step outside React's declarative model. For everything else, prefer state and props!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
