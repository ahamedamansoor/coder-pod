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
  Palette,
  Code2,
  Target,
  Settings,
  MousePointer,
  RefreshCw,
  Clock,
  Brush,
  Sparkles,
} from 'lucide-react';

export default function UseInsertionEffectHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Palette}
        category="React · Hooks (Comprehensive)"
        title="useInsertionEffect Hook"
        description="Master useInsertionEffect for CSS-in-JS libraries - the specialized hook that injects styles before React reads layout, preventing style flicker."
        colorTheme="purple"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useInsertionEffect */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Palette className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What is useInsertionEffect?"
              description="CSS-in-JS style injection before layout"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">useInsertionEffect</code> is a specialized Hook that fires <strong>before all DOM mutations</strong> and <strong>before React reads layout</strong>. It's designed specifically for CSS-in-JS libraries to inject styles without causing layout thrashing or visual flicker.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>useInsertionEffect(() {'=>'} {'{'}</div>
                  <div className="pl-4">// Inject styles here</div>
                  <div>{'}'}, [dependencies]);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[120px]">Runs Before:</span>
                  <span className="text-gray-700 dark:text-gray-300">DOM mutations and layout calculations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[120px]">Perfect For:</span>
                  <span className="text-gray-700 dark:text-gray-300">CSS-in-JS libraries and dynamic style injection</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Timing Advantage</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Runs before React reads layout</li>
                  <li>• Prevents style flicker</li>
                  <li>• Avoids layout thrashing</li>
                  <li>• Synchronous style injection</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-3">Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• CSS-in-JS libraries</li>
                  <li>• Dynamic theme injection</li>
                  <li>• Runtime style generation</li>
                  <li>• Third-party style integration</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Specialized Hook!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                This is a specialized hook for CSS-in-JS libraries. For most apps, you'll use useEffect or useLayoutEffect instead!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why useInsertionEffect is Special */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/10 dark:to-gray-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-slate-600 dark:text-slate-400" />}
              title="Why useInsertionEffect is Special"
              description="Understanding the unique timing"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
                <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">React's Render Timeline</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold text-purple-700 dark:text-purple-300">useInsertionEffect</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">Inject styles BEFORE React reads layout</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold text-blue-700 dark:text-blue-300">React Updates DOM</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Applies changes to the DOM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold text-indigo-700 dark:text-indigo-300">useLayoutEffect</p>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">Read layout BEFORE paint</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-300">useEffect</p>
                      <p className="text-sm text-green-600 dark:text-green-400">Run AFTER paint</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-3">⚡ Why This Order Matters</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  CSS-in-JS libraries need to inject styles <strong>before</strong> React reads layout to prevent:
                </p>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Style Flicker:</strong> Element appears with wrong styles, then corrects</li>
                  <li>• <strong>Layout Thrashing:</strong> Browser recalculates layout multiple times</li>
                  <li>• <strong>Performance Issues:</strong> Unnecessary reflows and repaints</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Step-by-Step Guide"
              description="Learn useInsertionEffect progressively"
              size="lg"
            />

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <Brush className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 1: Generate Dynamic Styles</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, create your dynamic CSS rules based on props or state. This is where you generate the styles that need to be injected.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Generate dynamic CSS</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> generateStyles = (color) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> <span className="text-green-600">`</span>
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            .dynamic-{'{'}$`{`color`}`{'}'}
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">background-color</span>: <span className="text-green-600">{'{'}$`{`color`}`{'}'}</span>;
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">padding</span>: <span className="text-green-600">16px</span>;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-green-600">`</span>;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Dynamic Generation</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Create CSS rules dynamically based on props, theme, or any runtime data.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 2: Use useInsertionEffect</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Wrap your style injection logic in useInsertionEffect. This ensures styles are injected before React reads layout.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Inject styles before layout</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useInsertionEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> styles = generateStyles(color);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            injectStyles(styles);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}, [color]); <span className="text-slate-500">// Re-run when color changes</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Critical Timing</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              This runs BEFORE React reads layout, preventing style flicker!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 3: Create Style Injector</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create a function that injects CSS into the DOM. Usually this creates a style element or updates an existing one.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Style injection utility</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> injectStyles = (css) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">let</span> styleElement = document.<span className="text-blue-400">getElementById</span>(<span className="text-green-600">'dynamic-styles'</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (!styleElement) {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            styleElement = document.<span className="text-blue-400">createElement</span>(<span className="text-green-600">'style'</span>);
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            styleElement.<span className="text-blue-400">id</span> = <span className="text-green-600">'dynamic-styles'</span>;
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            document.<span className="text-blue-400">head</span>.<span className="text-blue-400">appendChild</span>(styleElement);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            styleElement.<span className="text-blue-400">textContent</span> = css;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">DOM Manipulation</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Creates or updates style elements in the document head.
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
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 4: Apply Dynamic Classes</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Apply the dynamically generated class names to your components. The styles are already injected, so they'll apply immediately.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Apply dynamic classes</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>={'{}'}<span className="text-green-600">`dynamic-{'{'}$`{`color`}`{'}'}`</span>{'}'}&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            Styled content!
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">No Flicker!</p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Styles are already injected when the component renders, so no visual flicker!
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
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Example"
            description="See useInsertionEffect in action"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Dynamic CSS-in-JS Styling"
            description="Prevent style flicker with useInsertionEffect"
            colorTheme="purple"
            react={`function DynamicStyleExample() {
  const [color, setColor] = React.useState('#4f46e5');
  const [size, setSize] = React.useState('medium');

  // Generate CSS based on props
  const generateStyles = (color, size) => {
    const padding = size === 'small' ? '8px' : size === 'large' ? '24px' : '16px';
    return \`
      .dynamic-box {
        background-color: \${color};
        padding: \${padding};
        border-radius: 8px;
        color: white;
        font-weight: bold;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
    \`;
  };

  // Inject styles BEFORE React reads layout
  React.useInsertionEffect(() => {
    const styles = generateStyles(color, size);
    
    // Create or update style element
    let styleElement = document.getElementById('dynamic-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = styles;
    
    console.log('Styles injected before layout read!');
  }, [color, size]);

  return (
    <div className="container">
      <h2>Dynamic CSS-in-JS Styling</h2>
      <p>Notice: No style flicker when changing colors or sizes!</p>
      
      <div className="controls">
        <label>
          Color:
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        
        <label>
          Size:
          <select 
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      <div className="dynamic-box">
        I'm styled with useInsertionEffect! 🎨
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicStyleExample />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useInsertionEffect } = React;
  const { createRoot } = ReactDOM;

  function DynamicStyleExample() {
    const [color, setColor] = useState('#4f46e5');
    const [size, setSize] = useState('medium');

    const generateStyles = (color, size) => {
      const padding = size === 'small' ? '8px' : size === 'large' ? '24px' : '16px';
      return \`
        .dynamic-box {
          background-color: \${color};
          padding: \${padding};
          border-radius: 8px;
          color: white;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      \`;
    };

    useInsertionEffect(() => {
      const styles = generateStyles(color, size);
      
      let styleElement = document.getElementById('dynamic-styles');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-styles';
        document.head.appendChild(styleElement);
      }
      styleElement.textContent = styles;
      
      console.log('Styles injected before layout read!');
    }, [color, size]);

    return h('div', { className: 'container' },
      h('h2', null, 'Dynamic CSS-in-JS Styling'),
      h('p', null, 'Notice: No style flicker when changing colors or sizes!'),
      
      h('div', { className: 'controls' },
        h('label', null,
          'Color: ',
          h('input', {
            type: 'color',
            value: color,
            onChange: (e) => setColor(e.target.value)
          })
        ),
        
        h('label', null,
          'Size: ',
          h('select', {
            value: size,
            onChange: (e) => setSize(e.target.value)
          },
            h('option', { value: 'small' }, 'Small'),
            h('option', { value: 'medium' }, 'Medium'),
            h('option', { value: 'large' }, 'Large')
          )
        )
      ),

      h('div', { className: 'dynamic-box' },
        "I'm styled with useInsertionEffect! 🎨"
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(DynamicStyleExample));
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

.controls {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #374151;
}

.controls input[type="color"] {
  width: 50px;
  height: 35px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.controls select {
  padding: 8px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 14px;
}

.dynamic-box {
  margin: 20px auto;
  max-width: 300px;
  text-align: center;
  font-size: 16px;
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

  .controls label {
    color: #d1d5db;
  }

  .controls select {
    background: #374151;
    color: white;
    border-color: #4b5563;
  }
}`}
          />
        </div>

        {/* When to Use */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="When to Use useInsertionEffect"
              description="Practical use cases and alternatives"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 dark:text-green-300">✅ Perfect For</h4>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🎨 CSS-in-JS Libraries</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Building your own styled-components or emotion-like library
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌈 Dynamic Theme Injection</h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Injecting theme-based styles that change at runtime
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">⚡ Performance Critical</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    When you absolutely must prevent style flicker in complex applications
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid For</h4>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">🔄 Regular Side Effects</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Use useEffect for data fetching, subscriptions, or general side effects
                  </p>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">📏 Layout Measurements</h5>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Use useLayoutEffect for measuring DOM elements before paint
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🎯 Most Apps</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Most applications don't need this hook. Use CSS modules or styled libraries instead
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <AlertTriangle className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Specialized Tool</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                This is a specialized hook for CSS-in-JS library authors. 99% of apps should use useEffect or useLayoutEffect instead!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Key Takeaways"
              description="Essential useInsertionEffect concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Earliest Timing</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Runs before all DOM mutations and layout calculations in React.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-pink-500" />
                  <h4 className="font-bold text-pink-700 dark:text-pink-300">CSS-in-JS Focus</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Specifically designed for CSS-in-JS libraries to prevent style flicker.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">No Layout Access</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cannot read layout or access DOM refs since it runs before layout is calculated.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-300">Limited Use Cases</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Specialized hook - most developers will never need to use it directly.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                If you're building a CSS-in-JS library, useInsertionEffect is essential. For everything else, stick with useEffect or useLayoutEffect!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
