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
  Loader2,
  Package,
  AlertTriangle,
  Layers,
  Zap,
  Network,
} from 'lucide-react';

export default function SuspenseApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Loader2}
        category="React · Component Details"
        title="Suspense"
        description="Learn how to use Suspense for declarative loading states, code-splitting, and data fetching in React 18+."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is Suspense */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Loader2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Suspense?"
              description="Declarative loading states"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">Suspense</code> lets you <strong>declaratively specify loading states</strong> for components that aren't ready to render yet. It's your way to handle async operations elegantly!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>&lt;Suspense fallback={'{<Loading />}'}&gt;</div>
                  <div className="pl-4">&lt;SomeComponent /&gt;</div>
                  <div>&lt;/Suspense&gt;</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">React.lazy()</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Code-Splitting</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Most common use: Show fallback while lazy-loaded components download.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">Data Fetching</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Async Operations</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React 18+: Show fallback while data is being fetched.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">React 18 Game Changer!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Suspense now supports data fetching! Works with frameworks like Relay, Next.js, and custom suspense-enabled data sources!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="How It Works"
              description="The suspend mechanism"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Suspense Flow</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Component Starts Rendering</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">React tries to render child component</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">Component "Suspends"</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Throws a Promise to signal it's not ready</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">Show Fallback</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Suspense shows fallback UI while waiting</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">Promise Resolves</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Data/code ready, component renders successfully</p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-300 dark:border-yellow-700">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Important!</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                Components "suspend" by throwing a Promise. React catches it and shows the fallback until the Promise resolves!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Common Use Cases */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Common Use Cases"
              description="When to use Suspense"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-blue-500 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">1. Code-Splitting with React.lazy()</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      The most common and well-supported use case. Show a loader while components download.
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>const Dashboard = lazy(() =&gt; import('./Dashboard'));</div>
                        <div className="mt-2">&lt;Suspense fallback={'{<Spinner />}'}&gt;</div>
                        <div className="pl-2">&lt;Dashboard /&gt;</div>
                        <div>&lt;/Suspense&gt;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 text-purple-500 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">2. Data Fetching (React 18+)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Suspend while fetching data. Works with frameworks that support Suspense for data fetching.
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>&lt;Suspense fallback={'{<Loading />}'}&gt;</div>
                        <div className="pl-2">&lt;UserProfile userId={'{1}'} /&gt;</div>
                        <div>&lt;/Suspense&gt;</div>
                        <div className="mt-2 text-green-600 dark:text-green-400">// UserProfile suspends until data loads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-green-500 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">3. Streaming Server Rendering</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      With React 18's streaming SSR, Suspense boundaries stream HTML as components become ready.
                    </p>
                    <Badge variant="outline" className="text-xs">Next.js 13+</Badge>
                    <Badge variant="outline" className="text-xs ml-2">React Server Components</Badge>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-start gap-3">
                  <Layers className="w-6 h-6 text-orange-500 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">4. Nested Suspense Boundaries</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Nest multiple Suspense components for granular loading states. Show different loaders for different parts!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Loader2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Code-Splitting with Suspense"
            description="Lazy load components with fallback UI"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Suspense with React.lazy()"
            description="Click tabs to see lazy-loaded components with fallback"
            colorTheme="green"
            react={`const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading component...</p>
    </div>
  );
}

function App() {
  const [tab, setTab] = React.useState('home');

  return (
    <div className="container">
      <h1>🔄 Suspense Demo</h1>

      <div className="tabs">
        <button 
          className={\`tab \${tab === 'home' ? 'active' : ''}\`}
          onClick={() => setTab('home')}
        >
          🏠 Home
        </button>
        <button 
          className={\`tab \${tab === 'about' ? 'active' : ''}\`}
          onClick={() => setTab('about')}
        >
          📖 About
        </button>
        <button 
          className={\`tab \${tab === 'contact' ? 'active' : ''}\`}
          onClick={() => setTab('contact')}
        >
          📧 Contact
        </button>
      </div>

      <div className="content">
        <React.Suspense fallback={<LoadingSpinner />}>
          {tab === 'home' && <HomeContent />}
          {tab === 'about' && <AboutContent />}
          {tab === 'contact' && <ContactContent />}
        </React.Suspense>
      </div>

      <div className="info">
        💡 Suspense shows fallback while lazy components load!
      </div>
    </div>
  );
}

// Simulated components (in reality, these would be lazy-loaded)
function HomeContent() {
  return <div className="tab-content">🏠 Welcome Home!</div>;
}

function AboutContent() {
  return <div className="tab-content">📖 About Us</div>;
}

function ContactContent() {
  return <div className="tab-content">📧 Contact Information</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, Suspense } = React;
  const { createRoot } = ReactDOM;

  function LoadingSpinner() {
    return h('div', { className: 'loading' },
      h('div', { className: 'spinner' }),
      h('p', null, 'Loading component...')
    );
  }

  function HomeContent() {
    return h('div', { className: 'tab-content' }, '🏠 Welcome Home!');
  }

  function AboutContent() {
    return h('div', { className: 'tab-content' }, '📖 About Us');
  }

  function ContactContent() {
    return h('div', { className: 'tab-content' }, '📧 Contact Information');
  }

  function App() {
    const [tab, setTab] = useState('home');

    return h('div', { className: 'container' },
      h('h1', null, '🔄 Suspense Demo'),

      h('div', { className: 'tabs' },
        h('button', {
          className: 'tab ' + (tab === 'home' ? 'active' : ''),
          onClick: () => setTab('home')
        }, '🏠 Home'),
        h('button', {
          className: 'tab ' + (tab === 'about' ? 'active' : ''),
          onClick: () => setTab('about')
        }, '📖 About'),
        h('button', {
          className: 'tab ' + (tab === 'contact' ? 'active' : ''),
          onClick: () => setTab('contact')
        }, '📧 Contact')
      ),

      h('div', { className: 'content' },
        h(Suspense, { fallback: h(LoadingSpinner) },
          tab === 'home' && h(HomeContent),
          tab === 'about' && h(AboutContent),
          tab === 'contact' && h(ContactContent)
        )
      ),

      h('div', { className: 'info' },
        '💡 Suspense shows fallback while lazy components load!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}

.tab {
  flex: 1;
  padding: 12px 20px;
  border: none;
  background: transparent;
  border-radius: 8px 8px 0 0;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6b7280;
}

.tab:hover {
  background: #f3f4f6;
  color: #374151;
}

.tab.active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 8px;
}

.content {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  padding: 40px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #10b981;
  border-radius: 50%;
  margin: 0 auto 15px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}

.tab-content {
  padding: 40px;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-radius: 16px;
  border: 3px solid #10b981;
  font-size: 1.5rem;
  font-weight: 600;
  color: #065f46;
  text-align: center;
  width: 100%;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

  .tabs {
    border-bottom-color: #374151;
  }

  .tab {
    color: #9ca3af;
  }

  .tab:hover {
    background: #111827;
    color: #e5e7eb;
  }

  .spinner {
    border-color: #374151;
    border-top-color: #6ee7b7;
  }

  .loading p {
    color: #9ca3af;
  }

  .tab-content {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #6ee7b7;
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
                  <Loader2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Declarative Loading</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Specify loading states declaratively with fallback UI.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">React.lazy()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect companion for code-splitting and lazy loading.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Network className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Data Fetching</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React 18+ supports Suspense for data fetching operations.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Streaming SSR</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Enables streaming server rendering in React 18+.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Modern React Essential!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Suspense is the future of async operations in React! Use it with React.lazy() for code-splitting and with frameworks for data fetching!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
