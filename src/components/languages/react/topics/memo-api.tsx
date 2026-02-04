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
  RefreshCw,
  Shield,
} from 'lucide-react';

export default function MemoApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Component Details"
        title="React.memo"
        description="Learn how to use React.memo to prevent unnecessary re-renders by memoizing components when their props haven't changed."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is React.memo */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is React.memo?"
              description="Prevent unnecessary re-renders"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">React.memo</code> is a <strong>higher-order component (HOC)</strong> that memoizes a component. It only re-renders if props change, preventing wasted renders!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const MyComponent = React.memo((props) =&gt; {'{'}</div>
                  <div className="pl-4">return &lt;div&gt;{'{props.value}'}&lt;/div&gt;;</div>
                  <div>{'}'});</div>
                  <div className="mt-3"></div>
                  <div className="text-green-600 dark:text-green-400">// With custom comparison</div>
                  <div>const MyComponent = React.memo(Component, arePropsEqual);</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">❌ Without memo</Badge>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Re-renders on every parent render</p>
                  <p>• Even if props didn't change!</p>
                  <p>• Wasted computation</p>
                  <p className="text-red-600 dark:text-red-400 font-semibold">Performance issue ⚠️</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ With memo</Badge>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Only re-renders when props change</p>
                  <p>• Skips render if props are same</p>
                  <p>• Optimized performance</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">Fast & efficient ⚡</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance Optimization!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                React.memo is like a shield that protects components from unnecessary re-renders when their props haven't changed!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="How It Works"
              description="Shallow prop comparison"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Comparison Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Parent Re-renders</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Parent component updates state</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">Props Comparison</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">React.memo compares old vs new props</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">Decision</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Skip render if props are same ✅</p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-300 dark:border-yellow-700">
              <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Shallow Comparison!</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                By default, React.memo uses shallow comparison. For complex objects, provide a custom comparison function!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<RefreshCw className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Counter with Memo"
            description="See how memo prevents unnecessary renders"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="React.memo Optimization"
            description="Click counter - expensive component only updates when needed"
            colorTheme="green"
            react={`// Expensive component WITHOUT memo
function ExpensiveComponent({ value }) {
  console.log('ExpensiveComponent rendered!');
  
  return (
    <div className="component expensive">
      <h3>❌ Without memo</h3>
      <p>Value: {value}</p>
      <div className="renders">
        Re-renders on every parent update!
      </div>
    </div>
  );
}

// Optimized component WITH memo
const MemoizedComponent = React.memo(({ value }) => {
  console.log('MemoizedComponent rendered!');
  
  return (
    <div className="component memoized">
      <h3>✅ With memo</h3>
      <p>Value: {value}</p>
      <div className="renders">
        Only re-renders when value changes!
      </div>
    </div>
  );
});

function App() {
  const [count, setCount] = React.useState(0);
  const [unrelated, setUnrelated] = React.useState(0);

  return (
    <div className="container">
      <h1>⚡ React.memo Demo</h1>

      <div className="controls">
        <button 
          onClick={() => setCount(count + 1)}
          className="btn-primary"
        >
          Change Value: {count}
        </button>
        
        <button 
          onClick={() => setUnrelated(unrelated + 1)}
          className="btn-secondary"
        >
          Unrelated Update: {unrelated}
        </button>
      </div>

      <div className="components-grid">
        <ExpensiveComponent value={count} />
        <MemoizedComponent value={count} />
      </div>

      <div className="tip">
        💡 Click "Unrelated Update" and check console - 
        only the non-memo component re-renders!
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
  const { createElement: h, useState, memo } = React;
  const { createRoot } = ReactDOM;

  function ExpensiveComponent({ value }) {
    console.log('ExpensiveComponent rendered!');
    
    return h('div', { className: 'component expensive' },
      h('h3', null, '❌ Without memo'),
      h('p', null, 'Value: ' + value),
      h('div', { className: 'renders' },
        'Re-renders on every parent update!'
      )
    );
  }

  const MemoizedComponent = memo(({ value }) => {
    console.log('MemoizedComponent rendered!');
    
    return h('div', { className: 'component memoized' },
      h('h3', null, '✅ With memo'),
      h('p', null, 'Value: ' + value),
      h('div', { className: 'renders' },
        'Only re-renders when value changes!'
      )
    );
  });

  function App() {
    const [count, setCount] = useState(0);
    const [unrelated, setUnrelated] = useState(0);

    return h('div', { className: 'container' },
      h('h1', null, '⚡ React.memo Demo'),

      h('div', { className: 'controls' },
        h('button', {
          onClick: () => setCount(count + 1),
          className: 'btn-primary'
        }, 'Change Value: ' + count),
        
        h('button', {
          onClick: () => setUnrelated(unrelated + 1),
          className: 'btn-secondary'
        }, 'Unrelated Update: ' + unrelated)
      ),

      h('div', { className: 'components-grid' },
        h(ExpensiveComponent, { value: count }),
        h(MemoizedComponent, { value: count })
      ),

      h('div', { className: 'tip' },
        '💡 Click "Unrelated Update" and check console - only the non-memo component re-renders!'
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
  max-width: 700px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.controls {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
}

.controls button {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.components-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.component {
  padding: 20px;
  border-radius: 16px;
  border: 3px solid;
}

.component.expensive {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border-color: #ef4444;
}

.component.memoized {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #10b981;
}

.component h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.component.expensive h3 {
  color: #991b1b;
}

.component.memoized h3 {
  color: #065f46;
}

.component p {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #374151;
}

.renders {
  font-size: 0.85rem;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 500;
}

.expensive .renders {
  background: rgba(239, 68, 68, 0.2);
  color: #991b1b;
}

.memoized .renders {
  background: rgba(16, 185, 129, 0.2);
  color: #065f46;
}

.tip {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 0.9rem;
  color: #92400e;
  font-weight: 600;
}

@media (max-width: 640px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
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

  .component.expensive {
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    border-color: #fca5a5;
  }

  .component.memoized {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #6ee7b7;
  }

  .component.expensive h3 {
    color: #fee2e2;
  }

  .component.memoized h3 {
    color: #d1fae5;
  }

  .component p {
    color: #e5e7eb;
  }

  .expensive .renders {
    background: rgba(254, 226, 226, 0.1);
    color: #fecaca;
  }

  .memoized .renders {
    background: rgba(209, 250, 229, 0.1);
    color: #a7f3d0;
  }

  .tip {
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
                  <h4 className="font-bold text-green-700 dark:text-green-300">Memoization</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prevents re-renders when props haven't changed.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">HOC Pattern</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Higher-order component that wraps your component.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Shallow Compare</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Uses shallow comparison by default for props.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use Wisely</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't overuse - only for expensive or frequent renders.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use React.memo for components that render often with the same props, especially in lists or expensive renders!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
