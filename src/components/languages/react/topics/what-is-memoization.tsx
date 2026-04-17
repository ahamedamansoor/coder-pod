'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Zap, Sparkles } from 'lucide-react';

export default function WhatIsMemoization() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Sparkles}
        category="React · Performance Optimization"
        title="What is Memoization?"
        description="Master React's memoization techniques with React.memo, useMemo, and useCallback to optimize your app's performance by preventing unnecessary re-renders."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Memoization?"
              description="Caching expensive computations"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Memoization</strong> is an optimization technique where React <strong>remembers</strong> (caches) the result of an expensive operation and reuses it when the inputs haven't changed!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">React.memo</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Memoizes components
                </p>
                <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>• Skip re-renders</li>
                  <li>• Same props = no render</li>
                  <li>• Wraps components</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">useMemo</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Memoizes values
                </p>
                <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>• Cache calculations</li>
                  <li>• Expensive computations</li>
                  <li>• Returns value</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">useCallback</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Memoizes functions
                </p>
                <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>• Cache functions</li>
                  <li>• Prevent recreations</li>
                  <li>• Returns function</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="React.memo - Live Demo"
            description="Prevent unnecessary component re-renders"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="React.memo Optimization"
            description="See how React.memo prevents re-renders! Watch the render counts."
            colorTheme="green"
            react={`// Regular component (re-renders every time)
function RegularCounter({ count }) {
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="counter regular">
      <h3>Regular Component</h3>
      <p className="value">Count: {count}</p>
      <div className="render-badge">{renderCount} renders</div>
    </div>
  );
}

// Memoized component (only re-renders when props change)
const MemoizedCounter = React.memo(function Counter({ count }) {
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="counter memoized">
      <h3>React.memo Component</h3>
      <p className="value">Count: {count}</p>
      <div className="render-badge">{renderCount} renders</div>
    </div>
  );
});

function App() {
  const [count, setCount] = React.useState(0);
  const [other, setOther] = React.useState(0);

  return (
    <div className="demo-app">
      <div className="header">
        <h2>⚡ React.memo Demo</h2>
        <p>Watch render counts when parent re-renders</p>
      </div>

      <div className="controls">
        <div className="control-group">
          <button onClick={() => setCount(count + 1)}>
            Change Count (affects both)
          </button>
          <p className="hint">Both will re-render (prop changed)</p>
        </div>

        <div className="control-group">
          <button onClick={() => setOther(other + 1)} className="secondary">
            Change Other ({other})
          </button>
          <p className="hint success">Only Regular re-renders (memo prevents it!)</p>
        </div>
      </div>

      <div className="components-grid">
        <RegularCounter count={count} />
        <MemoizedCounter count={count} />
      </div>

      <div className="info">
        <p><strong>✅ React.memo prevents re-renders</strong> when props haven't changed!</p>
        <p>Click "Change Other" to see memo skip unnecessary renders.</p>
      </div>
    </div>
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.header p {
  opacity: 0.9;
}

.controls {
  padding: 40px;
  background: #f9fafb;
}

.control-group {
  margin-bottom: 25px;
}

.control-group button {
  width: 100%;
  padding: 14px 20px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.control-group button:hover {
  background: #059669;
  transform: translateY(-2px);
}

.control-group button.secondary {
  background: #6366f1;
}

.control-group button.secondary:hover {
  background: #4f46e5;
}

.hint {
  margin-top: 8px;
  font-size: 13px;
  color: #ef4444;
  font-weight: 500;
}

.hint.success {
  color: #10b981;
}

.components-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px;
}

.counter {
  padding: 25px;
  border-radius: 16px;
  position: relative;
}

.counter.regular {
  background: #fef2f2;
  border: 2px solid #ef4444;
}

.counter.memoized {
  background: #d1fae5;
  border: 2px solid #10b981;
}

.counter h3 {
  color: #1f2937;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 15px 0;
}

.render-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 0.5s;
}

.counter.regular .render-badge {
  background: #ef4444;
  color: white;
}

.counter.memoized .render-badge {
  background: #10b981;
  color: white;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.info {
  padding: 30px 40px;
  background: #eff6ff;
  border-top: 2px solid #bfdbfe;
}

.info p {
  color: #1e40af;
  margin: 8px 0;
  font-size: 14px;
}

.info strong {
  color: #1e3a8a;
}

@media (prefers-color-scheme: dark) {
  .demo-app {
    background: #1f2937;
  }

  .controls {
    background: #111827;
  }

  .counter {
    background: #111827 !important;
  }

  .counter h3,
  .value {
    color: #f3f4f6;
  }

  .info {
    background: #1e3a8a;
    border-top-color: #1e40af;
  }

  .info p {
    color: #bfdbfe;
  }

  .info strong {
    color: #dbeafe;
  }
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
}`}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="When to Use Memoization"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Use When</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Expensive calculations</li>
                  <li>• Large lists rendering</li>
                  <li>• Pure components</li>
                  <li>• Frequent parent re-renders</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Don't Overuse</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Simple components</li>
                  <li>• Props change often</li>
                  <li>• Premature optimization</li>
                  <li>• Adds memory overhead</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Measure First!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Don't memoize everything! Profile your app first to find actual bottlenecks. Memoization adds overhead, so only use it when you have a proven performance issue.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
