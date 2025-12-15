'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Eye, Zap, RefreshCw, Bell } from 'lucide-react';

export default function JavaScriptMutationObserver() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Eye}
        category="APIs & Browser"
        title="Mutation Observer"
        description="Watching for changes to the DOM tree"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
              <Eye className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Mutation Observer? 🔍
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of it as a <strong className="text-purple-700 dark:text-purple-400">security camera for your webpage</strong>! 
                It watches the DOM (your webpage structure) and notifies you whenever something changes - when elements are added, removed, 
                or their attributes change. <strong>No more constant checking!</strong>
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">Why You Need It 🎯</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Old Way (Bad)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Set timers to check every 100ms → Waste CPU checking even when nothing changes → Slow & inefficient 😰
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ New Way (Good)</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Mutation Observer watches → Only notifies when DOM actually changes → Fast & efficient! 🚀
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What Can It Watch? 👀</CardTitle>
          <CardDescription>Three types of changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-700 text-center">
              <div className="text-5xl mb-3">➕</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Child Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Elements added or removed
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-700 text-center">
              <div className="text-5xl mb-3">🏷️</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Attribute Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Class, id, style changes
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-700 text-center">
              <div className="text-5xl mb-3">📝</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Text Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Text content modified
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Simple Example: Watch DOM Changes 👀</CardTitle>
          <CardDescription>Detect when elements are added to the page</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Create observer
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('Children changed!');
      console.log('Added:', mutation.addedNodes);
      console.log('Removed:', mutation.removedNodes);
    }
  });
});

// Start watching a container
const container = document.getElementById('container');
observer.observe(container, {
  childList: true  // Watch for children changes
});

// Stop watching when done
// observer.disconnect();`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Configuration Options ⚙️</CardTitle>
          <CardDescription>Tell the observer what to watch</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Option</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">What It Does</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">childList</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Watch for added/removed children
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">true</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">attributes</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Watch for attribute changes
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">true</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">characterData</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Watch for text content changes
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">true</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">subtree</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Watch all descendants too
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">true</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-purple-600 dark:text-purple-400">attributeOldValue</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Save previous attribute value
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">true</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Use Cases 🌍</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-4xl mb-3 text-center">🔔</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">Notification Systems</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Detect when new notifications are added to the page
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-700">
              <div className="text-4xl mb-3 text-center">🎨</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 text-center">Theme Changes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                React to dark mode toggles or theme switches
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-700">
              <div className="text-4xl mb-3 text-center">📊</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-center">Analytics Tracking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Track dynamic content changes for analytics
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 border-2 border-orange-200 dark:border-orange-700">
              <div className="text-4xl mb-3 text-center">🔧</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 text-center">Browser Extensions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Monitor and modify page content dynamically
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices 💡</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Disconnect when done</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Always call <code>observer.disconnect()</code> to prevent memory leaks!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Be specific with options</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Only watch what you need - watching everything can impact performance!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Handle batched mutations</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Mutations are batched - you might get multiple changes at once!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Avoid infinite loops</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Don't modify the DOM you're watching inside the callback - it'll trigger itself!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Performance Tip!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Use <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">attributeFilter</code> to watch specific 
              attributes only (like <code>['class', 'style']</code>) instead of all attributes!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔍</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">What is it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Watches the DOM and notifies you when it changes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👀</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">What can it watch?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Children added/removed, attributes, text changes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Why use it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Better than timers - efficient & only fires when needed!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Common uses?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Extensions, notifications, theme changes, analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
