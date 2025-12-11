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
  AlertTriangle,
  Palette,
  Code2,
} from 'lucide-react';

export default function UseInsertionEffectHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Palette}
        category="React · Hooks (Comprehensive)"
        title="useInsertionEffect Hook"
        description="Learn useInsertionEffect, a specialized Hook for CSS-in-JS libraries to inject styles before any layout effects fire."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useInsertionEffect */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Palette className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useInsertionEffect?"
              description="CSS-in-JS injection timing"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useInsertionEffect</code> fires <strong>before all DOM mutations</strong>, allowing CSS-in-JS libraries to inject <code>&lt;style&gt;</code> tags before React reads layout.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>useInsertionEffect(() =&gt; {'{'}</div>
                  <div className="pl-4">// Inject styles</div>
                  <div>{'}'}, [dependencies]);</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Hook Execution Order</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">useInsertionEffect</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Inject styles first</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">useLayoutEffect</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Read layout</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Browser Paint</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Render to screen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">useEffect</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Async effects</p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">⚠️ Library Authors Only!</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                This Hook is for CSS-in-JS library authors. Don't use it in application code - use useEffect or useLayoutEffect instead!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="When to Use"
              description="Very specific use case"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">CSS-in-JS Libraries</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Libraries like styled-components, Emotion, or custom CSS-in-JS solutions
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Dynamic Style Injection</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Injecting <code>&lt;style&gt;</code> tags into the DOM at runtime
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Before Layout Read</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Styles must be available before any layout measurements
                </p>
              </div>
            </div>

            <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Don't Use For:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Regular application side effects</li>
                <li>• DOM manipulation</li>
                <li>• Data fetching</li>
                <li>• Event subscriptions</li>
                <li>• Anything not related to CSS injection</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Example Concept */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
              title="Example Concept"
              description="How CSS-in-JS libraries use it"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Simplified CSS-in-JS Hook</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div className="text-green-600 dark:text-green-400">// Library code (not app code!)</div>
                  <div className="mt-2">function useCSS(rule) {'{'}</div>
                  <div className="pl-4">useInsertionEffect(() =&gt; {'{'}</div>
                  <div className="pl-8 text-blue-600 dark:text-blue-400">// Create and inject style tag</div>
                  <div className="pl-8">const style = document.createElement('style');</div>
                  <div className="pl-8">style.textContent = rule;</div>
                  <div className="pl-8">document.head.appendChild(style);</div>
                  <div className="pl-8"></div>
                  <div className="pl-8">return () =&gt; {'{'}</div>
                  <div className="pl-12 text-red-600 dark:text-red-400">// Cleanup</div>
                  <div className="pl-12">document.head.removeChild(style);</div>
                  <div className="pl-8">{'}'};</div>
                  <div className="pl-4">{'}'}, [rule]);</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why Not useLayoutEffect?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useLayoutEffect runs AFTER React updates the DOM. By then, it's too late - layout calculations would use old styles! useInsertionEffect runs BEFORE DOM mutations.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

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
                  <Palette className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">For Libraries</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Designed specifically for CSS-in-JS library authors, not app developers.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Earliest Timing</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Fires before DOM mutations and all other effects.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Style Injection</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Injects styles before React reads layout for accurate measurements.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Rare Use Case</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  99% of developers will never need this Hook!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Specialized Hook!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useInsertionEffect is a low-level Hook for library authors. Use useEffect or useLayoutEffect in your applications!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
