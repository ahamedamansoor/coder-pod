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
  Loader2,
  Clock,
} from 'lucide-react';

export default function UseTransitionHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Hooks (Comprehensive)"
        title="useTransition Hook"
        description="Learn useTransition to mark state updates as non-urgent transitions, preventing them from blocking the UI during user interactions."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useTransition */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useTransition?"
              description="Non-blocking state updates"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useTransition</code> lets you mark certain state updates as <strong>non-urgent transitions</strong>. This keeps the UI responsive by allowing React to interrupt less important updates!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const [isPending, startTransition] = useTransition();</div>
                  <div className="mt-3"></div>
                  <div>startTransition(() =&gt; {'{'}</div>
                  <div className="pl-4 text-green-600 dark:text-green-400">// Non-urgent update</div>
                  <div className="pl-4">setState(newValue);</div>
                  <div>{'}'});</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">Without Transition</Badge>
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Blocking</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Heavy updates freeze the UI
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-2 rounded text-xs">
                  User types → UI freezes ❌
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">With Transition</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Non-Blocking</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  UI stays responsive!
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 p-2 rounded text-xs">
                  User types → UI responsive ✅
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">React 18 Feature!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useTransition is part of React 18's concurrent features. It enables smooth UIs by prioritizing urgent updates over transitions!
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
              description="Understanding transitions"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Update Priority</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300">Urgent Updates (Normal)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">User input, clicks - cannot be interrupted</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Transitions (Low Priority)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Heavy rendering - can be interrupted</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">isPending Flag</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Boolean that's true while the transition is pending - use it to show loading states!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">startTransition Function</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Wraps state updates to mark them as transitions - React can interrupt these!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Search with Transition"
            description="Keep input responsive during heavy filtering"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Search List with useTransition"
            description="Input stays responsive even with large lists"
            colorTheme="green"
            react={`function SearchList() {
  const [query, setQuery] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [isPending, startTransition] = React.useTransition();

  // Generate large list
  const items = React.useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => \`Item \${i + 1}\`);
  }, []);

  const handleSearch = (value) => {
    // Urgent: Update input immediately
    setQuery(value);

    // Transition: Update filtered list (can be interrupted)
    startTransition(() => {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div className="container">
      <h1>🔍 Search with Transition</h1>

      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search items..."
          className="input"
        />
        {isPending && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}
      </div>

      <div className="stats">
        {filteredItems.length > 0 ? (
          <p>Found {filteredItems.length} items</p>
        ) : query ? (
          <p>No results found</p>
        ) : (
          <p>Type to search 10,000 items</p>
        )}
      </div>

      <div className="list">
        {filteredItems.slice(0, 50).map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
        {filteredItems.length > 50 && (
          <div className="more">
            + {filteredItems.length - 50} more items
          </div>
        )}
      </div>

      <div className="info">
        💡 Input stays responsive during search!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchList />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useMemo, useTransition } = React;
  const { createRoot } = ReactDOM;

  function SearchList() {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTransition] = useTransition();

    const items = useMemo(() => {
      return Array.from({ length: 10000 }, (_, i) => 'Item ' + (i + 1));
    }, []);

    const handleSearch = (value) => {
      setQuery(value);

      startTransition(() => {
        const filtered = items.filter(item =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filtered);
      });
    };

    return h('div', { className: 'container' },
      h('h1', null, '🔍 Search with Transition'),

      h('div', { className: 'search-box' },
        h('input', {
          type: 'text',
          value: query,
          onChange: (e) => handleSearch(e.target.value),
          placeholder: 'Search items...',
          className: 'input'
        }),
        isPending && h('div', { className: 'loading' },
          h('div', { className: 'spinner' })
        )
      ),

      h('div', { className: 'stats' },
        filteredItems.length > 0 ? h('p', null, 'Found ' + filteredItems.length + ' items') :
        query ? h('p', null, 'No results found') :
        h('p', null, 'Type to search 10,000 items')
      ),

      h('div', { className: 'list' },
        ...filteredItems.slice(0, 50).map((item, index) =>
          h('div', { key: index, className: 'item' }, item)
        ),
        filteredItems.length > 50 && h('div', { className: 'more' },
          '+ ' + (filteredItems.length - 50) + ' more items'
        )
      ),

      h('div', { className: 'info' },
        '💡 Input stays responsive during search!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(SearchList));
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

.search-box {
  position: relative;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 14px 50px 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.loading {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-top-color: #10b981;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.stats {
  margin-bottom: 20px;
  padding: 12px;
  background: #f3f4f6;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.list {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
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
  border-radius: 8px;
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

  .stats {
    background: #111827;
    color: #9ca3af;
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
                  <Zap className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Non-Blocking</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Marks state updates as non-urgent, keeping the UI responsive.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Loader2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">isPending</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Shows loading states while transitions are in progress.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Interruptible</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React can interrupt transition updates for urgent interactions.
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
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Smooth UI!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useTransition for heavy updates like filtering large lists, complex calculations, or rendering many components!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
