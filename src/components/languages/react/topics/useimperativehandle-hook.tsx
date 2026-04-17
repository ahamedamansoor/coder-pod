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
  Shield,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Key,
} from 'lucide-react';

export default function UseImperativeHandleHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Shield}
        category="React · Hooks (Comprehensive)"
        title="useImperativeHandle Hook"
        description="Master useImperativeHandle for component APIs - the essential hook for controlling what parent components can access through refs, creating clean and secure component boundaries."
        colorTheme="emerald"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useImperativeHandle */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="What is useImperativeHandle?"
              description="Customize what parent components can access through refs"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 rounded text-sm">useImperativeHandle</code> is a Hook that customizes the instance value exposed when using <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 rounded text-sm">forwardRef</code>. It lets you <strong>control exactly what parent components can access</strong> through a ref, creating clean and secure component APIs!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>useImperativeHandle(ref, () {'=>'} ({'}{'}</div>
                  <div className="pl-4">// Methods/values to expose</div>
                  <div className="pl-4">method1: () {'=>'} {'{}'},</div>
                  <div className="pl-4">method2: () {'=>'} {'{}'},</div>
                  <div className="pl-4">value: someValue</div>
                  <div>{'}'}), [dependencies]);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 min-w-[120px]">ref:</span>
                  <span className="text-gray-700 dark:text-gray-300">The ref from forwardRef</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 min-w-[120px]">createHandle:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function that returns the exposed object</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 min-w-[120px]">deps:</span>
                  <span className="text-gray-700 dark:text-gray-300">Dependencies array (optional)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">API Control</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Expose only specific methods</li>
                  <li>• Hide internal implementation</li>
                  <li>• Create clean component APIs</li>
                  <li>• Prevent unauthorized access</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Custom input components</li>
                  <li>• Animation controllers</li>
                  <li>• Media player controls</li>
                  <li>• Complex form components</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Key Advantage!</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                Unlike exposing the entire DOM element, useImperativeHandle lets you create a clean, intentional API for your components!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why useImperativeHandle is Powerful */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/10 dark:to-gray-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Key className="w-7 h-7 text-slate-600 dark:text-slate-400" />}
              title="Why useImperativeHandle is Powerful"
              description="Understanding controlled exposure"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
                <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Direct Ref vs Controlled API</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Direct DOM Access</h5>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">Parent has full access to DOM element</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div>// Parent can do anything!</div>
                      <div>ref.current.focus();</div>
                      <div>ref.current.style.color = 'red'; // Dangerous!</div>
                      <div>ref.current.remove(); // Very dangerous!</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Controlled API</h5>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">Parent only gets what you expose</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div>// Parent can only do what you allow!</div>
                      <div>ref.current.focus(); // ✅ Allowed</div>
                      <div>ref.current.clear(); // ✅ Allowed</div>
                      <div>ref.current.style = undefined; // ❌ Not exposed!</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-3">🛡️ Security & Maintainability</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  With useImperativeHandle, you get:
                </p>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Encapsulation</strong> - Hide internal implementation details</li>
                  <li>• <strong>API Stability</strong> - Change internals without breaking parents</li>
                  <li>• <strong>Security</strong> - Prevent dangerous DOM manipulation</li>
                  <li>• <strong>Documentation</strong> - Clear contract of what's available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Step-by-Step Guide"
              description="Learn useImperativeHandle progressively"
              size="lg"
            />

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="font-bold text-xl text-emerald-700 dark:text-emerald-300">Step 1: Create Component with forwardRef</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, create your component using forwardRef to accept refs from parent components.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create component with forwardRef</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{}'} forwardRef {'{}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> CustomInput = forwardRef((props, ref) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> inputRef = useRef();
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">input</span> <span className="text-green-400">ref</span>={'{}'}inputRef{'{}'} /&gt;;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'});
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-1">forwardRef Required</p>
                            <p className="text-sm text-emerald-700 dark:text-emerald-300">
                              useImperativeHandle only works with forwardRef components!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 2: Add useImperativeHandle</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Add useImperativeHandle to define what methods and values the parent can access.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Add useImperativeHandle</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{}'} useImperativeHandle, useRef {'{}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> CustomInput = forwardRef((props, ref) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> inputRef = useRef();
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            useImperativeHandle(ref, () {'=>'} ({'}{'});
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> {'{}'}
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            focus: () {'=>'} inputRef.current.focus(),</div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            clear: () {'=>'} inputRef.current.value = ''</div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'}'});</div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">input</span> <span className="text-green-400">ref</span>={'{}'}inputRef{'{}'} /&gt;;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'});
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Custom API</p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Only focus() and clear() are exposed, not the input element!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h4 className="font-bold text-xl text-teal-700 dark:text-teal-300">Step 3: Use in Parent Component</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the component in a parent and access only the methods you exposed.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-teal-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Use in parent component</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> Parent() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> inputRef = useRef();
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> handleFocus = () {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            inputRef.current.focus(); <span className="text-slate-500">// ✅ Works!</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">CustomInput</span> <span className="text-green-400">ref</span>={'{}'}inputRef{'{}'} /&gt;
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">button</span> <span className="text-green-400">onClick</span>={'{}'}handleFocus{'{}'}&gt;Focus&lt;/<span className="text-red-400">button</span>&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-teal-200 dark:border-teal-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Unlock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-teal-800 dark:text-teal-200 mb-1">Clean Access</p>
                            <p className="text-sm text-teal-700 dark:text-teal-300">
                              Parent can only call focus() and clear(), nothing else!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h4 className="font-bold text-xl text-cyan-700 dark:text-cyan-300">Step 4: Add Dependencies (Optional)</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Add dependencies to optimize when the imperative handle updates.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Add dependencies for optimization</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            useImperativeHandle(ref, () {'=>'} ({'}{'});
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> {'{}'}
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            focus: () {'=>'} inputRef.current.focus(),</div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            getValue: () {'=>'} inputRef.current.value</div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'}'}, [props.disabled]); <span className="text-slate-500">// Update when disabled changes</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 rounded-xl border border-cyan-200 dark:border-cyan-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <RefreshCw className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200 mb-1">Performance Optimization</p>
                            <p className="text-sm text-cyan-700 dark:text-cyan-300">
                              Handle only updates when dependencies change!
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
            icon={<Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Interactive Example"
            description="See useImperativeHandle in action"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Custom Input with Controlled API"
            description="Create a component with a clean, controlled interface"
            colorTheme="emerald"
            react={`const CustomInput = React.forwardRef((props, ref) => {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  // Expose only specific methods to parent
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      setValue('');
      inputRef.current.value = '';
      setIsValid(true);
    },
    getValue: () => value,
    setValue: (newValue) => {
      setValue(newValue);
      inputRef.current.value = newValue;
      validateInput(newValue);
    },
    isValid: () => isValid
  }), [value, isValid]);

  const validateInput = (inputValue) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsValid(isValidEmail || inputValue === '');
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateInput(newValue);
  };

  return (
    <div className="custom-input">
      <div className="input-wrapper">
        <input
          ref={inputRef}
          type="email"
          value={value}
          onChange={handleChange}
          placeholder="Enter your email..."
          className={'input-field ' + (!isValid ? 'invalid' : '')}
        />
        {!isValid && (
          <div className="error-message">
            Please enter a valid email address
          </div>
        )}
      </div>
      <div className="input-status">
        Status: {isValid ? (value ? '✅ Valid' : '⏳ Empty') : '❌ Invalid'}
      </div>
    </div>
  );
});

function CustomInputExample() {
  const inputRef = React.useRef();
  const [status, setStatus] = React.useState('');

  const handleFocus = () => {
    inputRef.current.focus();
    setStatus('Input focused via imperative handle!');
  };

  const handleClear = () => {
    inputRef.current.clear();
    setStatus('Input cleared via imperative handle!');
  };

  const handleSetValue = () => {
    inputRef.current.setValue('test@example.com');
    setStatus('Value set via imperative handle!');
  };

  const handleGetValue = () => {
    const value = inputRef.current.getValue();
    setStatus(\`Current value: "\${value}"\`);
  };

  const handleCheckValidity = () => {
    const isValid = inputRef.current.isValid();
    setStatus(\`Input is valid: \${isValid ? '✅ Yes' : '❌ No'}\`);
  };

  return (
    <div className="container">
      <h2>Custom Input with useImperativeHandle</h2>
      <p>The input component exposes only specific methods - no direct DOM access!</p>
      
      <div className="input-section">
        <CustomInput ref={inputRef} />
      </div>

      <div className="controls-section">
        <h3>Parent Controls (via Imperative Handle)</h3>
        <div className="button-grid">
          <button onClick={handleFocus} className="control-btn focus-btn">
            🎯 Focus via Handle
          </button>
          <button onClick={handleClear} className="control-btn clear-btn">
            🗑️ Clear via Handle
          </button>
          <button onClick={handleSetValue} className="control-btn set-btn">
            📝 Set Value via Handle
          </button>
          <button onClick={handleGetValue} className="control-btn get-btn">
            👁️ Get Value via Handle
          </button>
          <button onClick={handleCheckValidity} className="control-btn valid-btn">
            ✅ Check Validity via Handle
          </button>
        </div>
        
        {status && (
          <div className="status-message">
            {status}
          </div>
        )}
      </div>

      <div className="info-section">
        <h4>🛡️ What's Protected?</h4>
        <ul>
          <li>❌ Parent cannot access inputRef.current directly</li>
          <li>❌ Parent cannot modify input.style</li>
          <li>❌ Parent cannot change input.type</li>
          <li>❌ Parent cannot access internal validation logic</li>
          <li>✅ Parent can only call focus(), clear(), getValue(), setValue(), isValid()</li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CustomInputExample />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, forwardRef, useRef, useState, useEffect, useImperativeHandle } = React;
  const { createRoot } = ReactDOM;

  const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      clear: () => {
        setValue('');
        inputRef.current.value = '';
        setIsValid(true);
      },
      getValue: () => value,
      setValue: (newValue) => {
        setValue(newValue);
        inputRef.current.value = newValue;
        validateInput(newValue);
      },
      isValid: () => isValid
    }), [value, isValid]);

    const validateInput = (inputValue) => {
      const isValidEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(inputValue);
      setIsValid(isValidEmail || inputValue === '');
    };

    const handleChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      validateInput(newValue);
    };

    return h('div', { className: 'custom-input' },
      h('div', { className: 'input-wrapper' },
        h('input', {
          ref: inputRef,
          type: 'email',
          value: value,
          onChange: handleChange,
          placeholder: 'Enter your email...',
          className: 'input-field ' + (!isValid ? 'invalid' : '')
        }),
        !isValid && h('div', { className: 'error-message' }, 
          'Please enter a valid email address'
        )
      ),
      h('div', { className: 'input-status' },
        \`Status: \${isValid ? (value ? '✅ Valid' : '⏳ Empty') : '❌ Invalid'}\`
      )
    );
  });

  function CustomInputExample() {
    const inputRef = useRef();
    const [status, setStatus] = useState('');

    const handleFocus = () => {
      inputRef.current.focus();
      setStatus('Input focused via imperative handle!');
    };

    const handleClear = () => {
      inputRef.current.clear();
      setStatus('Input cleared via imperative handle!');
    };

    const handleSetValue = () => {
      inputRef.current.setValue('test@example.com');
      setStatus('Value set via imperative handle!');
    };

    const handleGetValue = () => {
      const value = inputRef.current.getValue();
      setStatus(\`Current value: "\${value}"\`);
    };

    const handleCheckValidity = () => {
      const isValid = inputRef.current.isValid();
      setStatus(\`Input is valid: \${isValid ? '✅ Yes' : '❌ No'}\`);
    };

    return h('div', { className: 'container' },
      h('h2', null, 'Custom Input with useImperativeHandle'),
      h('p', null, 'The input component exposes only specific methods - no direct DOM access!'),
      
      h('div', { className: 'input-section' },
        h(CustomInput, { ref: inputRef })
      ),

      h('div', { className: 'controls-section' },
        h('h3', null, 'Parent Controls (via Imperative Handle)'),
        h('div', { className: 'button-grid' },
          h('button', { onClick: handleFocus, className: 'control-btn focus-btn' }, '🎯 Focus via Handle'),
          h('button', { onClick: handleClear, className: 'control-btn clear-btn' }, '🗑️ Clear via Handle'),
          h('button', { onClick: handleSetValue, className: 'control-btn set-btn' }, '📝 Set Value via Handle'),
          h('button', { onClick: handleGetValue, className: 'control-btn get-btn' }, '👁️ Get Value via Handle'),
          h('button', { onClick: handleCheckValidity, className: 'control-btn valid-btn' }, '✅ Check Validity via Handle')
        ),
        
        status && h('div', { className: 'status-message' }, status)
      ),

      h('div', { className: 'info-section' },
        h('h4', null, '🛡️ What\'s Protected?'),
        h('ul', null,
          h('li', null, '❌ Parent cannot access inputRef.current directly'),
          h('li', null, '❌ Parent cannot modify input.style'),
          h('li', null, '❌ Parent cannot change input.type'),
          h('li', null, '❌ Parent cannot access internal validation logic'),
          h('li', null, '✅ Parent can only call focus(), clear(), getValue(), setValue(), isValid()')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(CustomInputExample));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 40px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  margin: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h2 {
  color: #059669;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

p {
  color: #6b7280;
  margin-bottom: 30px;
}

.input-section {
  margin-bottom: 30px;
}

.custom-input {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
}

.input-wrapper {
  position: relative;
  margin-bottom: 12px;
}

.input-field {
  width: 100%;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input-field.invalid {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 600;
}

.input-status {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}

.controls-section {
  margin-bottom: 30px;
}

.controls-section h3 {
  color: #1f2937;
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.control-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.control-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.focus-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.clear-btn {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.set-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.get-btn {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.valid-btn {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.status-message {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #065f46;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #10b981;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-section {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
  border: 2px solid #e2e8f0;
}

.info-section h4 {
  color: #1f2937;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-section li {
  padding: 8px 0;
  color: #4b5563;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
  }

  .container {
    background: #1f2937;
  }

  h2 {
    color: #34d399;
  }

  p {
    color: #d1d5db;
  }

  .controls-section h3 {
    color: #f3f4f6;
  }

  .info-section {
    background: #374151;
    border-color: #4b5563;
  }

  .info-section h4 {
    color: #f3f4f6;
  }

  .info-section li {
    color: #d1d5db;
  }

  .status-message {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    color: #6ee7b7;
    border-color: #10b981;
  }

  .custom-input {
    background: #374151;
    border-color: #4b5563;
  }

  .input-field {
    background: #4b5563;
    border-color: #6b7280;
    color: white;
  }

  .input-field:focus {
    border-color: #34d399;
  }

  .input-field.invalid {
    border-color: #f87171;
  }

  .error-message {
    color: #f87171;
  }

  .input-status {
    color: #d1d5db;
  }
}`}
          />
        </div>

        {/* Second Interactive Example - Video Player */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Video Player Example"
            description="Advanced useImperativeHandle with media controls"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Video Player with Controlled API"
            description="A working video player with controlled access"
            colorTheme="blue"
            react={`const VideoPlayer = React.forwardRef((props, ref) => {
  const videoRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  // Expose only specific methods to parent
  React.useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
      setIsPlaying(true);
    },
    pause: () => {
      videoRef.current.pause();
      setIsPlaying(false);
    },
    seekTo: (time) => {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    },
    getCurrentTime: () => currentTime,
    getDuration: () => duration,
    isPlaying: () => isPlaying,
    setVolume: (volume) => {
      videoRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }), [isPlaying, currentTime, duration]);

  React.useEffect(() => {
    const video = videoRef.current;
    
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video-element"
        controls={false}
        preload="metadata"
        muted
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-controls">
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <div className="video-status">
          Status: {isPlaying ? '▶️ Playing' : '⏸️ Paused'}
        </div>
      </div>
    </div>
  );
});

function VideoPlayerExample() {
  const videoRef = React.useRef();
  const [status, setStatus] = React.useState('');

  const handlePlay = () => {
    videoRef.current.play();
    setStatus('Video playing via imperative handle!');
  };

  const handlePause = () => {
    videoRef.current.pause();
    setStatus('Video paused via imperative handle!');
  };

  const handleSeek = () => {
    videoRef.current.seekTo(5);
    setStatus('Video seeked to 5 seconds via imperative handle!');
  };

  const handleInfo = () => {
    const currentTime = videoRef.current.getCurrentTime();
    const duration = videoRef.current.getDuration();
    const playing = videoRef.current.isPlaying();
    setStatus(\`Time: \${Math.floor(currentTime)}s / \${Math.floor(duration)}s, Playing: \${playing}\`);
  };

  const handleMute = () => {
    videoRef.current.setVolume(0);
    setStatus('Video muted via imperative handle!');
  };

  const handleUnmute = () => {
    videoRef.current.setVolume(1);
    setStatus('Video unmuted via imperative handle!');
  };

  return (
    <div className="container">
      <h2>Video Player with useImperativeHandle</h2>
      <p>The video player exposes only specific methods - no direct DOM access!</p>
      
      <div className="video-section">
        <VideoPlayer ref={videoRef} />
      </div>

      <div className="controls-section">
        <h3>Parent Controls (via Imperative Handle)</h3>
        <div className="button-grid">
          <button onClick={handlePlay} className="control-btn play-btn">
            ▶️ Play
          </button>
          <button onClick={handlePause} className="control-btn pause-btn">
            ⏸️ Pause
          </button>
          <button onClick={handleSeek} className="control-btn seek-btn">
            ⏭️ Seek to 5s
          </button>
          <button onClick={handleInfo} className="control-btn info-btn">
            📊 Get Info
          </button>
          <button onClick={handleMute} className="control-btn mute-btn">
            🔇 Mute
          </button>
          <button onClick={handleUnmute} className="control-btn unmute-btn">
            🔊 Unmute
          </button>
        </div>
        
        {status && (
          <div className="status-message">
            {status}
          </div>
        )}
      </div>

      <div className="info-section">
        <h4>🛡️ What's Protected?</h4>
        <ul>
          <li>❌ Parent cannot access videoRef.current directly</li>
          <li>❌ Parent cannot modify video.src</li>
          <li>❌ Parent cannot change video.controls</li>
          <li>❌ Parent cannot access video.load() method</li>
          <li>✅ Parent can only call play(), pause(), seekTo(), getCurrentTime(), getDuration(), isPlaying(), setVolume()</li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<VideoPlayerExample />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, forwardRef, useRef, useState, useEffect, useImperativeHandle } = React;
  const { createRoot } = ReactDOM;

  const VideoPlayer = forwardRef((props, ref) => {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useImperativeHandle(ref, () => ({
      play: () => {
        videoRef.current.play();
        setIsPlaying(true);
      },
      pause: () => {
        videoRef.current.pause();
        setIsPlaying(false);
      },
      seekTo: (time) => {
        videoRef.current.currentTime = time;
        setCurrentTime(time);
      },
      getCurrentTime: () => currentTime,
      getDuration: () => duration,
      isPlaying: () => isPlaying,
      setVolume: (volume) => {
        videoRef.current.volume = Math.max(0, Math.min(1, volume));
      }
    }), [isPlaying, currentTime, duration]);

    useEffect(() => {
      const video = videoRef.current;
      
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };
      
      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }, []);

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
    };

    return h('div', { className: 'video-player' },
      h('video', {
        ref: videoRef,
        className: 'video-element',
        controls: false,
        preload: 'metadata',
        muted: true
      },
        h('source', { 
          src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
          type: 'video/mp4' 
        }),
        'Your browser does not support the video tag.'
      ),
      h('div', { className: 'video-controls' },
        h('div', { className: 'time-display' },
          \`\${formatTime(currentTime)} / \${formatTime(duration)}\`
        ),
        h('div', { className: 'video-status' },
          \`Status: \${isPlaying ? '▶️ Playing' : '⏸️ Paused'}\`
        )
      )
    );
  });

  function VideoPlayerExample() {
    const videoRef = useRef();
    const [status, setStatus] = useState('');

    const handlePlay = () => {
      videoRef.current.play();
      setStatus('Video playing via imperative handle!');
    };

    const handlePause = () => {
      videoRef.current.pause();
      setStatus('Video paused via imperative handle!');
    };

    const handleSeek = () => {
      videoRef.current.seekTo(5);
      setStatus('Video seeked to 5 seconds via imperative handle!');
    };

    const handleInfo = () => {
      const currentTime = videoRef.current.getCurrentTime();
      const duration = videoRef.current.getDuration();
      const playing = videoRef.current.isPlaying();
      setStatus(\`Time: \${Math.floor(currentTime)}s / \${Math.floor(duration)}s, Playing: \${playing}\`);
    };

    const handleMute = () => {
      videoRef.current.setVolume(0);
      setStatus('Video muted via imperative handle!');
    };

    const handleUnmute = () => {
      videoRef.current.setVolume(1);
      setStatus('Video unmuted via imperative handle!');
    };

    return h('div', { className: 'container' },
      h('h2', null, 'Video Player with useImperativeHandle'),
      h('p', null, 'The video player exposes only specific methods - no direct DOM access!'),
      
      h('div', { className: 'video-section' },
        h(VideoPlayer, { ref: videoRef })
      ),

      h('div', { className: 'controls-section' },
        h('h3', null, 'Parent Controls (via Imperative Handle)'),
        h('div', { className: 'button-grid' },
          h('button', { onClick: handlePlay, className: 'control-btn play-btn' }, '▶️ Play'),
          h('button', { onClick: handlePause, className: 'control-btn pause-btn' }, '⏸️ Pause'),
          h('button', { onClick: handleSeek, className: 'control-btn seek-btn' }, '⏭️ Seek to 5s'),
          h('button', { onClick: handleInfo, className: 'control-btn info-btn' }, '📊 Get Info'),
          h('button', { onClick: handleMute, className: 'control-btn mute-btn' }, '🔇 Mute'),
          h('button', { onClick: handleUnmute, className: 'control-btn unmute-btn' }, '🔊 Unmute')
        ),
        
        status && h('div', { className: 'status-message' }, status)
      ),

      h('div', { className: 'info-section' },
        h('h4', null, '🛡️ What\'s Protected?'),
        h('ul', null,
          h('li', null, '❌ Parent cannot access videoRef.current directly'),
          h('li', null, '❌ Parent cannot modify video.src'),
          h('li', null, '❌ Parent cannot change video.controls'),
          h('li', null, '❌ Parent cannot access video.load() method'),
          h('li', null, '✅ Parent can only call play(), pause(), seekTo(), getCurrentTime(), getDuration(), isPlaying(), setVolume()')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(VideoPlayerExample));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  min-height: 100vh;
  margin: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h2 {
  color: #2563eb;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

p {
  color: #6b7280;
  margin-bottom: 30px;
}

.video-section {
  margin-bottom: 30px;
}

.video-player {
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.video-element {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.video-controls {
  background: #1f2937;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-display {
  color: #f3f4f6;
  font-size: 14px;
  font-weight: 600;
}

.video-status {
  color: #10b981;
  font-size: 14px;
  font-weight: 500;
}

.controls-section {
  margin-bottom: 30px;
}

.controls-section h3 {
  color: #1f2937;
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.control-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.control-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.play-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.pause-btn {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.seek-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.info-btn {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.mute-btn {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.unmute-btn {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

.status-message {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #1e40af;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #3b82f6;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-section {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
  border: 2px solid #e2e8f0;
}

.info-section h4 {
  color: #1f2937;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-section li {
  padding: 8px 0;
  color: #4b5563;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }

  .container {
    background: #1f2937;
  }

  h2 {
    color: #60a5fa;
  }

  p {
    color: #d1d5db;
  }

  .controls-section h3 {
    color: #f3f4f6;
  }

  .info-section {
    background: #374151;
    border-color: #4b5563;
  }

  .info-section h4 {
    color: #f3f4f6;
  }

  .info-section li {
    color: #d1d5db;
  }

  .status-message {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: #93c5fd;
    border-color: #3b82f6;
  }

  .video-controls {
    background: #111827;
  }

  .time-display {
    color: #f3f4f6;
  }

  .video-status {
    color: #34d399;
  }
}`}
          />
        </div>

        {/* When to Use */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="When to Use useImperativeHandle"
              description="Practical use cases and best practices"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 dark:text-green-300">✅ Perfect For</h4>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🎮 Media Components</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Video/audio players with play, pause, seek controls
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <h5 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">📝 Custom Inputs</h5>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    Enhanced input components with focus, validation, formatting
                  </p>
                </div>

                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">🎨 Animation Libraries</h5>
                  <p className="text-sm text-teal-700 dark:text-teal-300">
                    Components with start, stop, reset animation controls
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid For</h4>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">⚡ Simple Components</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Basic components that don't need custom APIs
                  </p>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🔄 Data Passing</h5>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Use props or context for data, not imperative handles
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🎯 State Management</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Don't use for managing component state
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <AlertTriangle className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Only expose what's absolutely necessary. The less you expose, the more maintainable your component becomes!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Key Takeaways"
              description="Essential useImperativeHandle concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">API Control</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Control exactly what parent components can access through refs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Encapsulation</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hide internal implementation details and protect DOM access.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="w-6 h-6 text-teal-500" />
                  <h4 className="font-bold text-teal-700 dark:text-teal-300">Clean Contracts</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Create clear, intentional APIs for your components.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">forwardRef Required</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only works with components created using forwardRef.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                Think of useImperativeHandle as creating a public API for your component - expose only what users need, nothing more!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
