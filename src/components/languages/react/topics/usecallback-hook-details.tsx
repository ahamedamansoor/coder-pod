'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Zap, RefreshCw } from 'lucide-react';

export default function UseCallbackHookDetails() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="React · Hooks"
        title="useCallback Hook"
        description="Master useCallback to memoize functions and prevent unnecessary re-renders when passing callbacks to optimized child components."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useCallback?"
              description="Memoize callback functions"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>useCallback</strong> returns a memoized version of a callback function. It only changes if one of the dependencies changes, preventing unnecessary re-renders of child components!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">❌ Without useCallback</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• New function every render</li>
                  <li>• Child components re-render</li>
                  <li>• React.memo doesn't help</li>
                  <li>• Performance issues</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ With useCallback</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Same function reference</li>
                  <li>• Child skips re-render</li>
                  <li>• React.memo works</li>
                  <li>• Better performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="useCallback in Action - Live Demo"
            description="See how useCallback prevents unnecessary re-renders"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="useCallback Performance Demo"
            description="Compare with and without useCallback - watch render counts!"
            colorTheme="green"
            react={`// Child component WITH React.memo
const MemoizedChild = React.memo(function Child({ onClick, label }) {
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="child memoized">
      <h3>{label}</h3>
      <button onClick={onClick} className="child-btn">
        Click Me
      </button>
      <div className="render-badge">{renderCount} renders</div>
    </div>
  );
});

// Regular child component (no memo)
function RegularChild({ onClick, label }) {
  const [renderCount, setRenderCount] = React.useState(0);

  React.useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  return (
    <div className="child regular">
      <h3>{label}</h3>
      <button onClick={onClick} className="child-btn">
        Click Me
      </button>
      <div className="render-badge">{renderCount} renders</div>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);
  const [otherState, setOtherState] = React.useState(0);

  // ❌ BAD: New function every render
  const handleClickBad = () => {
    console.log('Clicked without useCallback');
  };

  // ✅ GOOD: Memoized function
  const handleClickGood = React.useCallback(() => {
    console.log('Clicked with useCallback');
  }, []); // Empty deps = function never changes

  return (
    <div className="demo-app">
      <div className="header">
        <h2>⚡ useCallback Demo</h2>
        <p>Watch render counts when parent re-renders</p>
      </div>

      <div className="controls">
        <button onClick={() => setCount(count + 1)} className="primary">
          Update Count ({count})
        </button>
        <button onClick={() => setOtherState(otherState + 1)} className="secondary">
          Update Other State ({otherState})
        </button>
      </div>

      <div className="children-grid">
        <RegularChild 
          onClick={handleClickBad} 
          label="❌ Regular Child (no memo)" 
        />
        
        <MemoizedChild 
          onClick={handleClickBad} 
          label="⚠️ Memo + Bad Callback" 
        />
        
        <MemoizedChild 
          onClick={handleClickGood} 
          label="✅ Memo + useCallback" 
        />
      </div>

      <div className="info">
        <p><strong>Key Observation:</strong></p>
        <p>❌ Regular child always re-renders</p>
        <p>⚠️ Memoized child with bad callback still re-renders (new function every time)</p>
        <p>✅ Memoized child with useCallback skips re-renders!</p>
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
  max-width: 1100px;
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
  padding: 30px;
  display: flex;
  gap: 15px;
  background: #f9fafb;
}

.controls button {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.controls button.primary {
  background: #10b981;
  color: white;
}

.controls button.secondary {
  background: #6366f1;
  color: white;
}

.controls button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.children-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
}

.child {
  padding: 25px;
  border-radius: 16px;
  position: relative;
  text-align: center;
}

.child.regular {
  background: #fef2f2;
  border: 2px solid #ef4444;
}

.child.memoized {
  background: #d1fae5;
  border: 2px solid #10b981;
}

.child h3 {
  color: #1f2937;
  margin-bottom: 15px;
  font-size: 1rem;
}

.child-btn {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.child-btn:hover {
  background: #2563eb;
}

.render-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 0.5s;
}

.child.regular .render-badge {
  background: #ef4444;
  color: white;
}

.child.memoized .render-badge {
  background: #10b981;
  color: white;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.info {
  padding: 30px;
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

  .child {
    background: #111827 !important;
  }

  .child h3 {
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

@media (max-width: 968px) {
  .children-grid {
    grid-template-columns: 1fr;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Syntax & Usage"
            description="How to use useCallback"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="useCallback Syntax"
            description="Basic usage pattern"
            language="javascript"
            colorTheme="blue"
            code={`// Basic syntax
const memoizedCallback = useCallback(
  () => {
    // Your function code
    doSomething(a, b);
  },
  [a, b]  // Dependencies
);

// Example 1: Simple callback
const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []); // No dependencies = never changes

// Example 2: Callback with dependencies
const handleDelete = useCallback((id) => {
  setItems(items.filter(item => item.id !== id));
}, [items]); // Recreate when items changes

// Example 3: With multiple dependencies
const handleUpdate = useCallback((id, value) => {
  setData(prevData => {
    // Update logic using current state
    return prevData.map(item => 
      item.id === id ? { ...item, value } : item
    );
  });
}, []);  // Use functional updates to avoid dependencies`}
            output={[
              '✅ useCallback returns memoized function',
              '✅ Function only changes if dependencies change',
              '✅ Prevents unnecessary child re-renders',
              '✅ Works best with React.memo components'
            ]}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use When</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Passing callbacks to memoized children</li>
                  <li>• Function is a dependency of useEffect</li>
                  <li>• Expensive child components</li>
                </ul>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">⚠️ Don't Overuse</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Simple event handlers</li>
                  <li>• Non-memoized children</li>
                  <li>• Premature optimization</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useCallback is only useful when passing functions to React.memo components or as dependencies to useEffect/useMemo. Don't use it everywhere—measure first!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
