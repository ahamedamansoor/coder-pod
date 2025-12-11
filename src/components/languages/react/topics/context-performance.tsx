'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Zap, AlertTriangle } from 'lucide-react';

export default function ContextPerformance() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Context API"
        title="Context Performance"
        description="Understand how context updates trigger re-renders and learn optimization strategies to prevent unnecessary renders in your React apps."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Re-render Problem"
              description="Context updates trigger all consumers"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When context value changes, <strong>ALL components</strong> that use that context will re-render, even if they only use a small part of the value!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">❌ Performance Issue</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Context value changes</li>
                <li>• React re-renders ALL consumers</li>
                <li>• Even if component doesn't use changed value</li>
                <li>• Can cause performance issues in large apps</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Re-render Visualization - Live Demo"
            description="See which components re-render on context updates"
            size="lg"
          />
          <FrontendCodePreview
            title="Context Re-render Counter"
            description="Watch render counts increase when context changes!"
            colorTheme="orange"
            react={`const CounterContext = React.createContext();

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('John');

  // ❌ BAD: New object every render causes all consumers to re-render
  const value = { count, name, setCount, setName };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}

// Component that only uses 'count'
function CountDisplay() {
  const { count } = React.useContext(CounterContext);
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="component count-display">
      <h3>Count Display</h3>
      <p>Uses: <strong>count</strong> only</p>
      <div className="value">Count: {count}</div>
      <div className="render-badge">Renders: {renderCount}</div>
    </div>
  );
}

// Component that only uses 'name'
function NameDisplay() {
  const { name } = React.useContext(CounterContext);
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="component name-display">
      <h3>Name Display</h3>
      <p>Uses: <strong>name</strong> only</p>
      <div className="value">Name: {name}</div>
      <div className="render-badge">Renders: {renderCount}</div>
    </div>
  );
}

// Controls
function Controls() {
  const { count, name, setCount, setName } = React.useContext(CounterContext);
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="controls">
      <div className="control-group">
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <p className="hint">⚠️ Will re-render BOTH components</p>
      </div>

      <div className="control-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        />
        <p className="hint">⚠️ Will re-render BOTH components</p>
      </div>

      <div className="render-badge">Control Renders: {renderCount}</div>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <div className="demo-app">
        <div className="header">
          <h2>⚠️ Context Re-render Problem</h2>
          <p>All consumers re-render when ANY context value changes!</p>
        </div>

        <div className="components-grid">
          <CountDisplay />
          <NameDisplay />
        </div>

        <Controls />

        <div className="info">
          <p><strong>Problem:</strong> Changing count re-renders NameDisplay (doesn't use count)</p>
          <p><strong>Problem:</strong> Changing name re-renders CountDisplay (doesn't use name)</p>
          <p><strong>Solution:</strong> Split into separate contexts or use useMemo!</p>
        </div>
      </div>
    </CounterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  min-height: 100vh;
  padding: 20px;
}

.demo-app {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.header {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 30px 40px;
  text-align: center;
}

.header h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1rem;
  opacity: 0.9;
}

.components-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px;
}

.component {
  padding: 25px;
  border-radius: 16px;
  position: relative;
}

.count-display {
  background: #dbeafe;
  border: 2px solid #3b82f6;
}

.name-display {
  background: #fce7f3;
  border: 2px solid #ec4899;
}

.component h3 {
  color: #1f2937;
  margin-bottom: 8px;
}

.component p {
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 15px;
}

.value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #1f2937;
  margin: 15px 0;
}

.render-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 0.5s;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.controls {
  padding: 40px;
  background: #f9fafb;
  border-top: 2px solid #e5e7eb;
  position: relative;
}

.control-group {
  margin-bottom: 25px;
}

.control-group button,
.control-group input {
  width: 100%;
  padding: 14px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.control-group button {
  background: #f97316;
  color: white;
  border: none;
}

.control-group button:hover {
  background: #ea580c;
  transform: translateY(-2px);
}

.control-group input {
  font-weight: normal;
}

.control-group input:focus {
  outline: none;
  border-color: #f97316;
}

.hint {
  margin-top: 8px;
  font-size: 13px;
  color: #ef4444;
  font-weight: 500;
}

.info {
  padding: 30px 40px;
  background: #fef2f2;
  border-top: 2px solid #fecaca;
}

.info p {
  color: #dc2626;
  margin: 8px 0;
  font-size: 14px;
}

.info strong {
  color: #991b1b;
}

@media (prefers-color-scheme: dark) {
  .demo-app {
    background: #1f2937;
  }

  .component {
    background: #111827 !important;
  }

  .component h3,
  .value {
    color: #f3f4f6;
  }

  .component p {
    color: #9ca3af;
  }

  .controls {
    background: #111827;
    border-top-color: #374151;
  }

  .control-group input {
    background: #1f2937;
    color: #f3f4f6;
    border-color: #374151;
  }

  .info {
    background: #7f1d1d;
    border-top-color: #991b1b;
  }

  .info p {
    color: #fca5a5;
  }

  .info strong {
    color: #fecaca;
  }
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
}`}
          />
        </div>

        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Optimization Strategies"
              description="How to prevent unnecessary re-renders"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Split Contexts</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Create separate contexts for different data that changes independently
                </p>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
{`const CountContext = createContext();
const NameContext = createContext();`}
                </code>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Memoize Value</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Use useMemo to prevent creating new object references
                </p>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
{`const value = useMemo(() => ({
  count, name, setCount, setName
}), [count, name]);`}
                </code>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">3</div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use React.memo</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Wrap expensive components with React.memo to skip re-renders
                </p>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
{`const ExpensiveComponent = React.memo(
  function Component() { /* ... */ }
);`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">⚠️ All Consumers Re-render</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Context change triggers ALL consuming components
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Split Contexts</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Separate contexts for independent data
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">✅ Memoize Values</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use useMemo to prevent unnecessary updates
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">✅ React.memo</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Wrap expensive components to prevent re-renders
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Performance Matters!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Context is great for global state, but be mindful of performance. For frequently changing data or large component trees, consider using a dedicated state management library like Redux or Zustand!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
