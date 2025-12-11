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
  Database,
  RefreshCw,
  Link,
  Zap,
} from 'lucide-react';

export default function UseSyncExternalStoreHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Database}
        category="React · Hooks (Comprehensive)"
        title="useSyncExternalStore Hook"
        description="Learn useSyncExternalStore to subscribe to external data sources in a way that's compatible with React's concurrent rendering."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useSyncExternalStore */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useSyncExternalStore?"
              description="Subscribe to external stores safely"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useSyncExternalStore</code> lets you subscribe to an <strong>external data source</strong> (like browser APIs, third-party state libraries) in a way that works correctly with React 18's concurrent rendering!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const snapshot = useSyncExternalStore(</div>
                  <div className="pl-4">subscribe,</div>
                  <div className="pl-4">getSnapshot,</div>
                  <div className="pl-4">getServerSnapshot? <span className="text-green-600 dark:text-green-400">// Optional for SSR</span></div>
                  <div>);</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Link className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">subscribe</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Function that subscribes to the store and returns unsubscribe
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">getSnapshot</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns current value from the store
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">getServerSnapshot</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns initial value for server rendering
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">React 18 Feature!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                This Hook ensures external stores work correctly with concurrent features like startTransition and Suspense!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use"
              description="External data sources"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Use for External Stores</h4>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Browser APIs (navigator.onLine, window.matchMedia)</li>
                  <li>• Third-party state libraries (Redux, Zustand, Jotai)</li>
                  <li>• Global variables updated outside React</li>
                  <li>• Custom observable stores</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Don't Use for React State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For React state (useState, useReducer, Context), use regular React hooks - they already work with concurrent rendering!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Online Status Detector"
            description="Subscribe to browser's online/offline status"
            size="lg"
          />

          <FrontendCodePreview
            title="Online Status with useSyncExternalStore"
            description="Detects online/offline status using navigator.onLine"
            colorTheme="green"
            react={`// External store for online status
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true; // Always assume online on server
}

// Custom Hook
const useSyncExternalStoreHook = React.useSyncExternalStore ?? React.unstable_useSyncExternalStore;

function useOnlineStatus() {
  const isOnline = useSyncExternalStoreHook(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return isOnline;
}

// Component
function OnlineStatusApp() {
  const isOnline = useOnlineStatus();

  return (
    <div className="container">
      <h1>🌐 Online Status Detector</h1>

      <div className={\`status \${isOnline ? 'online' : 'offline'}\`}>
        <div className="indicator">
          <div className="dot"></div>
        </div>
        <div className="text">
          <h2>{isOnline ? 'You are Online' : 'You are Offline'}</h2>
          <p>
            {isOnline 
              ? '✅ Connected to the internet'
              : '❌ No internet connection'}
          </p>
        </div>
      </div>

      <div className="info">
        <h3>Try It:</h3>
        <ul>
          <li>• Open DevTools (F12)</li>
          <li>• Go to Network tab</li>
          <li>• Toggle "Offline" checkbox</li>
          <li>• Watch the status change!</li>
        </ul>
      </div>

      <div className="details">
        💡 This uses <code>useSyncExternalStore</code> to 
        subscribe to the browser's online/offline events!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OnlineStatusApp />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const useSyncExternalStore = React.useSyncExternalStore ?? React.unstable_useSyncExternalStore;
  const { createRoot } = ReactDOM;

  function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }

  function getSnapshot() {
    return navigator.onLine;
  }

  function getServerSnapshot() {
    return true;
  }

  function useOnlineStatus() {
    const isOnline = useSyncExternalStore(
      subscribe,
      getSnapshot,
      getServerSnapshot
    );
    return isOnline;
  }

  function OnlineStatusApp() {
    const isOnline = useOnlineStatus();

    return h('div', { className: 'container' },
      h('h1', null, '🌐 Online Status Detector'),

      h('div', { className: 'status ' + (isOnline ? 'online' : 'offline') },
        h('div', { className: 'indicator' },
          h('div', { className: 'dot' })
        ),
        h('div', { className: 'text' },
          h('h2', null, isOnline ? 'You are Online' : 'You are Offline'),
          h('p', null,
            isOnline 
              ? '✅ Connected to the internet'
              : '❌ No internet connection'
          )
        )
      ),

      h('div', { className: 'info' },
        h('h3', null, 'Try It:'),
        h('ul', null,
          h('li', null, '• Open DevTools (F12)'),
          h('li', null, '• Go to Network tab'),
          h('li', null, '• Toggle "Offline" checkbox'),
          h('li', null, '• Watch the status change!')
        )
      ),

      h('div', { className: 'details' },
        '💡 This uses ',
        h('code', null, 'useSyncExternalStore'),
        ' to subscribe to the browser\\'s online/offline events!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(OnlineStatusApp));
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

.status {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
  transition: all 0.5s ease;
}

.status.online {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 3px solid #10b981;
}

.status.offline {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 3px solid #ef4444;
}

.indicator {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.online .indicator {
  background: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 1);
  animation: pulse-green 2s infinite;
}

.offline .indicator {
  background: #ef4444;
  box-shadow: 0 0 0 0 rgba(239, 68, 68, 1);
  animation: pulse-red 2s infinite;
}

@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@keyframes pulse-red {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.dot {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
}

.text h2 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.online .text h2 {
  color: #065f46;
}

.offline .text h2 {
  color: #991b1b;
}

.text p {
  font-size: 1rem;
  font-weight: 500;
}

.online .text p {
  color: #047857;
}

.offline .text p {
  color: #b91c1c;
}

.info {
  background: #f3f4f6;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.info h3 {
  color: #374151;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.info ul {
  list-style: none;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.8;
}

.details {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 0.95rem;
  color: #92400e;
  font-weight: 500;
}

.details code {
  background: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
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

  .status.online {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #6ee7b7;
  }

  .status.offline {
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    border-color: #fca5a5;
  }

  .online .text h2 {
    color: #d1fae5;
  }

  .offline .text h2 {
    color: #fee2e2;
  }

  .online .text p {
    color: #a7f3d0;
  }

  .offline .text p {
    color: #fecaca;
  }

  .info {
    background: #111827;
  }

  .info h3 {
    color: #e5e7eb;
  }

  .info ul {
    color: #9ca3af;
  }

  .details {
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
                  <Database className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">External Stores</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Subscribe to data sources outside React (browser APIs, third-party libs).
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Concurrent Safe</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Works correctly with React 18's concurrent rendering features.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Link className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Subscribe Function</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Provides subscription logic and returns cleanup function.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">SSR Support</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Optional getServerSnapshot for server-side rendering compatibility.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Bridge to External Data!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useSyncExternalStore when integrating non-React data sources like browser APIs, Redux, or custom observables!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
