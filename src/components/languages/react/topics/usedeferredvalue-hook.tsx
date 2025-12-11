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
  Clock,
  Zap,
  TrendingDown,
} from 'lucide-react';

export default function UseDeferredValueHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Clock}
        category="React · Hooks (Comprehensive)"
        title="useDeferredValue Hook"
        description="Learn useDeferredValue to defer updating a part of the UI, keeping the interface responsive during expensive re-renders."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useDeferredValue */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useDeferredValue?"
              description="Defer non-critical UI updates"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useDeferredValue</code> lets you defer updating a part of the UI. It creates a <strong>delayed version of a value</strong> that React can update later, keeping urgent updates responsive!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const deferredValue = useDeferredValue(value);</div>
                  <div className="mt-3 text-green-600 dark:text-green-400">// Returns delayed version of value</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Urgent Value</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Original value updates immediately
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-2 rounded text-xs font-mono">
                  value = "new" (instant)
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Deferred Value</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Deferred value "lags behind"
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 p-2 rounded text-xs font-mono">
                  deferredValue = "old" (delayed)
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">React 18 Feature!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useDeferredValue is part of React 18's concurrent features, allowing parts of the UI to update at different rates!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* vs useTransition */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="useDeferredValue vs useTransition"
              description="When to use which?"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">useTransition</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Wrap State Updates</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ Control setState call</li>
                  <li>✅ Get isPending flag</li>
                  <li>✅ Wrap your own code</li>
                  <li className="text-green-600 dark:text-green-400 font-semibold">Use when: You own the state</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">useDeferredValue</Badge>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Defer Received Values</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ Receive value as prop</li>
                  <li>✅ Automatic deferring</li>
                  <li>✅ No wrapping needed</li>
                  <li className="text-green-600 dark:text-green-400 font-semibold">Use when: Value from parent</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">💡 Quick Rule</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>useTransition:</strong> You control the state update<br/>
                <strong>useDeferredValue:</strong> Someone else controls the state, you defer rendering
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Clock className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Search with Deferred Rendering"
            description="Defer expensive list updates"
            size="lg"
          />

          <FrontendCodePreview
            title="Search with useDeferredValue"
            description="Input stays snappy, list updates when it can"
            colorTheme="green"
            react={`function SlowList({ text }) {
  // Simulate expensive rendering
  const items = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < 5000; i++) {
      if (\`Item \${i}\`.toLowerCase().includes(text.toLowerCase())) {
        result.push(\`Item \${i}\`);
      }
    }
    return result;
  }, [text]);

  return (
    <div className="list">
      {items.slice(0, 50).map((item, i) => (
        <div key={i} className="item">{item}</div>
      ))}
      {items.length > 50 && (
        <div className="more">+ {items.length - 50} more</div>
      )}
    </div>
  );
}

function App() {
  const [query, setQuery] = React.useState('');
  const deferredQuery = React.useDeferredValue(query);
  
  const isStale = query !== deferredQuery;

  return (
    <div className="container">
      <h1>⏱️ Deferred Search</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search 5,000 items..."
        className="input"
      />

      <div className={\`content \${isStale ? 'stale' : ''}\`}>
        {isStale && (
          <div className="updating">
            Updating results...
          </div>
        )}
        
        <SlowList text={deferredQuery} />
      </div>

      <div className="info">
        💡 Input updates instantly, list updates when ready!
      </div>
    </div>
  );
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
  const { createElement: h, useState, useMemo, useDeferredValue } = React;
  const { createRoot } = ReactDOM;

  function SlowList({ text }) {
    const items = useMemo(() => {
      const result = [];
      for (let i = 0; i < 5000; i++) {
        if (('Item ' + i).toLowerCase().includes(text.toLowerCase())) {
          result.push('Item ' + i);
        }
      }
      return result;
    }, [text]);

    return h('div', { className: 'list' },
      ...items.slice(0, 50).map((item, i) =>
        h('div', { key: i, className: 'item' }, item)
      ),
      items.length > 50 && h('div', { className: 'more' },
        '+ ' + (items.length - 50) + ' more'
      )
    );
  }

  function App() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    
    const isStale = query !== deferredQuery;

    return h('div', { className: 'container' },
      h('h1', null, '⏱️ Deferred Search'),

      h('input', {
        type: 'text',
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: 'Search 5,000 items...',
        className: 'input'
      }),

      h('div', { className: 'content ' + (isStale ? 'stale' : '') },
        isStale && h('div', { className: 'updating' },
          'Updating results...'
        ),
        
        h(SlowList, { text: deferredQuery })
      ),

      h('div', { className: 'info' },
        '💡 Input updates instantly, list updates when ready!'
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

.input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.content {
  position: relative;
  transition: opacity 0.3s ease;
}

.content.stale {
  opacity: 0.6;
}

.updating {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #10b981;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  z-index: 10;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.list {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
}

.item {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 14px;
  color: #374151;
  transition: background 0.2s ease;
}

.item:hover {
  background: #f9fafb;
}

.item:last-child {
  border-bottom: none;
}

.more {
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: #10b981;
  font-weight: 600;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
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

  .input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .list {
    border-color: #374151;
  }

  .item {
    color: #e5e7eb;
    border-bottom-color: #374151;
  }

  .item:hover {
    background: #111827;
  }

  .more {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    color: #6ee7b7;
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
                  <Clock className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Deferred Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Creates a "lagging" version of a value that updates later.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Responsive UI</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keeps urgent parts of UI responsive during heavy updates.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingDown className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">For Props</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use when receiving values from parent components or props.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">React 18+</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Part of concurrent features in React 18 and above.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Smart Deferring!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useDeferredValue when you receive expensive-to-render values from parent components, but want to keep input responsive!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
