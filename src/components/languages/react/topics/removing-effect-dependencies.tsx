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
  AlertCircle,
  CheckCircle2,
  XCircle,
  Zap,
  RefreshCw,
  Trash2,
  Code2,
  Target,
  Link,
} from 'lucide-react';

export default function RemovingEffectDependencies() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Trash2}
        category="React · Escape Hatches"
        title="Removing Effect Dependencies"
        description="Learn strategies to remove unnecessary dependencies from Effects, reducing unnecessary re-runs and making your code simpler and more performant."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Why Remove Dependencies */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Why Remove Unnecessary Dependencies?"
              description="The problems with too many dependencies"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Every value from your component used inside an Effect must be in the dependency array. But sometimes, this leads to Effects that re-run <strong>too often</strong> or cause <strong>infinite loops</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <RefreshCw className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Too Many Re-runs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effect runs every time any dependency changes, even when unnecessary.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Infinite Loops</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effect updates a dependency, triggering itself repeatedly.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300">Poor Performance</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Unnecessary re-runs waste resources and slow down your app.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Solution</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Instead of just listing all values, ask: "Does this Effect <strong>need</strong> to re-run when this value changes?" Often, the answer is no!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Strategy 1: Move Code Outside */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Strategy 1: Move Code Outside the Effect"
              description="Calculate during render instead"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If logic doesn't need to be <strong>reactive</strong>, move it outside the Effect. This eliminates dependencies entirely!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Before</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Component({'{ url }'}) {'{'}</div>
                    <div className="pl-2">const [data, setData] = useState(null);</div>
                    <div className="mt-2"></div>
                    <div className="pl-2">useEffect(() =&gt; {'{'}</div>
                    <div className="pl-4 text-red-600 dark:text-red-400">const endpoint = url + '/api';</div>
                    <div className="pl-4">fetch(endpoint).then(setData);</div>
                    <div className="pl-2">{'}'}, [url]); <span className="text-red-600 dark:text-red-400">// Dep needed</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ After</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Component({'{ url }'}) {'{'}</div>
                    <div className="pl-2">const [data, setData] = useState(null);</div>
                    <div className="pl-2 text-green-600 dark:text-green-400">const endpoint = url + '/api'; // Outside!</div>
                    <div className="mt-2"></div>
                    <div className="pl-2">useEffect(() =&gt; {'{'}</div>
                    <div className="pl-4">fetch(endpoint).then(setData);</div>
                    <div className="pl-2">{'}'}, [endpoint]); <span className="text-green-600 dark:text-green-400">// Still needed</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy 2: Move Inside Effect */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Link className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Strategy 2: Move Code Inside the Effect"
              description="Eliminate dependencies by moving logic in"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If a variable is only used inside the Effect, <strong>move its declaration inside</strong> too. This removes it from dependencies!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Before</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Component() {'{'}</div>
                    <div className="pl-2 text-red-600 dark:text-red-400">
                      const options = {'{'} headers {'}'}; // evaluates to object literal
                    </div>
                    <div className="mt-2"></div>
                    <div className="pl-2">useEffect(() =&gt; {'{'}</div>
                    <div className="pl-4">fetch(url, options);</div>
                    <div className="pl-2">{'}'}, [options]); <span className="text-red-600 dark:text-red-400">// New object each render!</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ After</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Component() {'{'}</div>
                    <div className="pl-2">useEffect(() =&gt; {'{'}</div>
                    <div className="pl-4 text-green-600 dark:text-green-400">const options = {'{ headers }'}; // Inside!</div>
                    <div className="pl-4">fetch(url, options);</div>
                    <div className="pl-2">{'}'}, []); <span className="text-green-600 dark:text-green-400">// No dependencies!</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example: Search with Debounce */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example: Optimized Search"
            description="Removing unnecessary dependencies"
            size="lg"
          />

          <FrontendCodePreview
            title="Search with Optimized Effect"
            description="Effect only re-runs when search term changes"
            colorTheme="blue"
            react={`function SearchApp() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate API call with timeout
    const timer = setTimeout(() => {
      // Mock search results
      const mockResults = [
        'React Hooks',
        'React Router',
        'React Query',
        'React Testing',
        'React Patterns'
      ].filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(mockResults);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]); // ✅ Only searchTerm dependency

  return (
    <div className="container">
      <h1>🔍 Smart Search</h1>

      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        {isSearching && <div className="searching">Searching...</div>}
      </div>

      <div className="results">
        <h3>Results ({results.length})</h3>
        {results.length === 0 ? (
          <p className="empty">
            {searchTerm ? 'No results found' : 'Start typing to search'}
          </p>
        ) : (
          results.map((result, i) => (
            <div key={i} className="result-item">
              {result}
            </div>
          ))
        )}
      </div>

      <div className="info">
        💡 Effect only runs when search term changes!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchApp />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useEffect } = React;
  const { createRoot } = ReactDOM;

  function SearchApp() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
      if (!searchTerm) {
        setResults([]);
        return;
      }

      setIsSearching(true);

      const timer = setTimeout(() => {
        const mockResults = [
          'React Hooks',
          'React Router',
          'React Query',
          'React Testing',
          'React Patterns'
        ].filter(item => 
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setResults(mockResults);
        setIsSearching(false);
      }, 500);

      return () => clearTimeout(timer);
    }, [searchTerm]);

    return h('div', { className: 'container' },
      h('h1', null, '🔍 Smart Search'),

      h('div', { className: 'search-box' },
        h('input', {
          type: 'text',
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          placeholder: 'Search...',
          className: 'search-input'
        }),
        isSearching && h('div', { className: 'searching' }, 'Searching...')
      ),

      h('div', { className: 'results' },
        h('h3', null, 'Results (' + results.length + ')'),
        results.length === 0
          ? h('p', { className: 'empty' },
              searchTerm ? 'No results found' : 'Start typing to search'
            )
          : results.map((result, i) =>
              h('div', { key: i, className: 'result-item' }, result)
            )
      ),

      h('div', { className: 'info' },
        '💡 Effect only runs when search term changes!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(SearchApp));
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  color: #3b82f6;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.search-box {
  position: relative;
  margin-bottom: 25px;
}

.search-input {
  width: 100%;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.searching {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #3b82f6;
  font-size: 14px;
  font-weight: 600;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.results {
  background: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  min-height: 200px;
}

.results h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 18px;
}

.result-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #1f2937;
  transition: all 0.3s ease;
  animation: fadeIn 0.3s ease;
}

.result-item:hover {
  background: #eff6ff;
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.empty {
  color: #9ca3af;
  text-align: center;
  padding: 40px 20px;
  font-style: italic;
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
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .search-input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .search-input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .searching {
    color: #60a5fa;
  }

  .results {
    background: #111827;
  }

  .results h3 {
    color: #e5e7eb;
  }

  .result-item {
    background: #1f2937;
    color: #e5e7eb;
  }

  .result-item:hover {
    background: #374151;
  }

  .empty {
    color: #6b7280;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Common Strategies */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Common Strategies Summary"
              description="Quick reference for removing dependencies"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Move Code Outside</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  If calculation doesn't depend on props/state, move it outside the component or Effect.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono text-green-600 dark:text-green-400">
                  const constant = computeValue(); // Outside component
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Move Code Inside</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  If variable is only used in Effect, declare it inside the Effect.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono text-blue-600 dark:text-blue-400">
                  useEffect(() => {'{ const local = value; ...}'}, []);
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Updater Function</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  For state updates, use updater function instead of reading state.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono text-purple-600 dark:text-purple-400">
                  setState(prev => prev + 1); // No state dependency!
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Extract Event Handler</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  If logic responds to user action, it belongs in event handler, not Effect.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono text-orange-600 dark:text-orange-400">
                  function handleClick() {'{ /* non-reactive logic */ }'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Question Dependencies</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't blindly add all values. Ask if the Effect <strong>needs</strong> to re-run when they change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Move Logic</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Move code outside the component, outside the Effect, or inside the Effect to eliminate dependencies.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Fewer Re-runs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Removing unnecessary dependencies makes your Effects more efficient and prevents bugs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Simpler Code</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effects with fewer dependencies are easier to understand and maintain.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Start by listing all dependencies, then work to eliminate the unnecessary ones. Your Effects should only depend on values they <strong>truly react to</strong>!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
