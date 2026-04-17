'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  Lightbulb,
  CheckCircle2,
  Package,
  Download,
  Zap,
  Clock,
} from 'lucide-react';

export default function LazyComponentsApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="React · Component Details"
        title="Lazy Components"
        description="Learn how to code-split your application using React.lazy and dynamic import() for better performance and faster initial load times."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is React.lazy */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is React.lazy?"
              description="Load components on demand"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">React.lazy</code> lets you <strong>dynamically import components</strong> that are only loaded when they're actually rendered. This splits your code into smaller bundles, reducing initial load time!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div className="text-green-600 dark:text-green-400">// Dynamic import with lazy loading</div>
                  <div>const MyComponent = React.lazy(() =&gt; import('./MyComponent'));</div>
                  <div className="mt-3"></div>
                  <div className="text-green-600 dark:text-green-400">// Use with Suspense</div>
                  <div>&lt;Suspense fallback={'{<Loading />}'}&gt;</div>
                  <div className="pl-4">&lt;MyComponent /&gt;</div>
                  <div>&lt;/Suspense&gt;</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">❌ Without Lazy</Badge>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-red-700 dark:text-red-300">Problems:</p>
                  <ul className="space-y-1">
                    <li>• Large initial bundle size</li>
                    <li>• Slow first page load</li>
                    <li>• All code downloaded upfront</li>
                    <li>• Wasted bandwidth for unused features</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ With Lazy</Badge>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-semibold text-green-700 dark:text-green-300">Benefits:</p>
                  <ul className="space-y-1">
                    <li>• Small initial bundle</li>
                    <li>• Fast first page load ⚡</li>
                    <li>• Components load on-demand</li>
                    <li>• Better user experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance Boost!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Lazy loading is crucial for large apps! It can reduce initial bundle size by 50-70%, dramatically improving load times!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="How It Works"
              description="Code splitting flow"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Loading Flow</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Initial Load</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Main bundle downloads (small!)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">User Action</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">User navigates to lazy component</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">Dynamic Import</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Component bundle fetched on-demand</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">Suspense Fallback</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Shows loading UI while downloading</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Component Ready</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Component renders successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Route-Based Code Splitting"
            description="Common pattern for lazy loading routes"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Lazy Loading with Suspense"
            description="Load components only when needed"
            language="javascript"
            colorTheme="green"
            code={`import React, { Suspense, lazy, useState } from 'react';

// Lazy load components
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Dashboard = lazy(() => import('./Dashboard'));

function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState('home');

  return (
    <div>
      {/* Navigation */}
      <nav>
        <button onClick={() => setRoute('home')}>Home</button>
        <button onClick={() => setRoute('about')}>About</button>
        <button onClick={() => setRoute('dashboard')}>Dashboard</button>
      </nav>

      {/* Lazy loaded routes with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        {route === 'home' && <Home />}
        {route === 'about' && <About />}
        {route === 'dashboard' && <Dashboard />}
      </Suspense>
    </div>
  );
}`}
            output={[
              '✅ Initial bundle: ~50KB (small!)',
              '📦 Home component: Loaded immediately',
              '⏳ About component: Loads when clicked',
              '⏳ Dashboard component: Loads when clicked',
              '',
              '💡 Each route is a separate bundle!',
              '⚡ Faster initial page load',
              '🎯 Only download what user needs'
            ]}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Best Practices"
              description="When and how to use lazy loading"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Good Candidates</h4>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Routes/pages in your app</li>
                  <li>• Modal dialogs and popups</li>
                  <li>• Tabs and accordion content</li>
                  <li>• Heavy third-party libraries</li>
                  <li>• Features behind authentication</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid Lazy Loading</h4>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Small components (&lt;10KB)</li>
                  <li>• Components always visible on first load</li>
                  <li>• Critical above-the-fold content</li>
                  <li>• Components used everywhere</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">💡 Pro Tip: Preloading</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Preload components on hover for instant navigation!
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                  <span className="text-slate-800 dark:text-slate-200">
                    onMouseEnter={'{() => import("./About")}'} 
                  </span>
                </div>
              </div>
            </div>
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
                  <Package className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Code Splitting</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Splits code into smaller bundles loaded on-demand.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Download className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Requires Suspense</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Must wrap lazy components in Suspense with fallback.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Performance Win</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dramatically reduces initial bundle size and load time.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Route-Based</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for route-based code splitting in SPAs.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Modern Apps Essential!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                React.lazy is essential for modern apps! Use it for routes, modals, and heavy components to keep your app fast!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
