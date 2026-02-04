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
  Code2,
  Package,
  Sparkles,
  RefreshCw,
  History,
} from 'lucide-react';

export default function HooksOverview() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="React · Hooks (Comprehensive)"
        title="Hooks Overview"
        description="A comprehensive introduction to React Hooks - the modern way to add state and other React features to function components."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What are Hooks */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Hooks?"
              description="Functions that let you use React features"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Hooks are special functions that let you <strong>"hook into"</strong> React features from function components. They were introduced in React 16.8 to let you use state and other React features without writing a class.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Simpler Code</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Function components are easier to read and write than classes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Reusable Logic</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Extract and share stateful logic with custom Hooks.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">No Classes</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avoid confusion with `this` and binding methods.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Hooks are just JavaScript functions, but they follow special rules. They always start with "use" and can only be called at the top level of your component.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Built-in Hooks */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Built-in React Hooks"
              description="The Hooks that come with React"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-green-500">State</Badge>
                  <h4 className="font-bold text-green-700 dark:text-green-300">State Hooks</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useState</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useReducer</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Add and manage component state
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-blue-500">Context</Badge>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Context Hooks</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useContext</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Read and subscribe to context
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-purple-500">Refs</Badge>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Ref Hooks</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useRef</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useImperativeHandle</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Reference values and DOM nodes
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-orange-500">Effect</Badge>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Effect Hooks</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useEffect</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useLayoutEffect</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useInsertionEffect</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Synchronize with external systems
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-cyan-500">Performance</Badge>
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Performance Hooks</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useMemo</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useCallback</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useTransition</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useDeferredValue</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Optimize rendering performance
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-pink-500">Other</Badge>
                  <h4 className="font-bold text-pink-700 dark:text-pink-300">Other Hooks</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useId</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useDebugValue</div>
                  <div className="font-mono text-gray-700 dark:text-gray-300">• useSyncExternalStore</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Specialized use cases
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example: Before and After Hooks */}
        <div className="space-y-6">
          <TopicTitle
            icon={<History className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Before vs After Hooks"
            description="See how Hooks simplify components"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Simple Counter with Hooks"
            description="Clean, modern function component"
            colorTheme="green"
            react={`// ✅ Modern: Using Hooks (Simple!)
function Counter() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Guest');

  React.useEffect(() => {
    document.title = name + ': ' + count;
  }, [name, count]);

  return (
    <div className="container">
      <h1>🎯 Counter with Hooks</h1>

      <div className="input-section">
        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="input"
        />
      </div>

      <div className="counter-section">
        <div className="count-display">{count}</div>
        <div className="buttons">
          <button 
            onClick={() => setCount(count - 1)} 
            className="btn-decrement"
          >
            −
          </button>
          <button 
            onClick={() => setCount(count + 1)} 
            className="btn-increment"
          >
            +
          </button>
        </div>
      </div>

      <div className="info-box">
        <div className="info-title">✨ Benefits of Hooks:</div>
        <ul>
          <li>• No class confusion</li>
          <li>• No 'this' binding</li>
          <li>• Cleaner code</li>
          <li>• Easy to understand</li>
        </ul>
      </div>

      <div className="info">
        💡 Check the browser tab title!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);`}
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

  function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Guest');

    useEffect(() => {
      document.title = name + ': ' + count;
    }, [name, count]);

    return h('div', { className: 'container' },
      h('h1', null, '🎯 Counter with Hooks'),

      h('div', { className: 'input-section' },
        h('label', null, 'Your Name:'),
        h('input', {
          type: 'text',
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: 'Enter name',
          className: 'input'
        })
      ),

      h('div', { className: 'counter-section' },
        h('div', { className: 'count-display' }, count),
        h('div', { className: 'buttons' },
          h('button', {
            onClick: () => setCount(count - 1),
            className: 'btn-decrement'
          }, '−'),
          h('button', {
            onClick: () => setCount(count + 1),
            className: 'btn-increment'
          }, '+')
        )
      ),

      h('div', { className: 'info-box' },
        h('div', { className: 'info-title' }, '✨ Benefits of Hooks:'),
        h('ul', null,
          h('li', null, '• No class confusion'),
          h('li', null, '• No \\'this\\' binding'),
          h('li', null, '• Cleaner code'),
          h('li', null, '• Easy to understand')
        )
      ),

      h('div', { className: 'info' },
        '💡 Check the browser tab title!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Counter));
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

.input-section {
  background: #f9fafb;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 25px;
}

.input-section label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.counter-section {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 25px;
  text-align: center;
}

.count-display {
  font-size: 72px;
  font-weight: 900;
  color: #065f46;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(6, 95, 70, 0.1);
}

.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.buttons button {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-decrement {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.btn-decrement:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
}

.btn-increment {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-increment:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.info-box {
  background: #eff6ff;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  border-left: 4px solid #3b82f6;
}

.info-title {
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 15px;
  font-size: 16px;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  color: #1e3a8a;
  padding: 5px 0;
  font-size: 14px;
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

  .input-section {
    background: #111827;
  }

  .input-section label {
    color: #e5e7eb;
  }

  .input {
    background: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .counter-section {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .count-display {
    color: #d1fae5;
  }

  .info-box {
    background: #1e3a8a;
    border-left-color: #60a5fa;
  }

  .info-title {
    color: #93c5fd;
  }

  .info-box li {
    color: #bfdbfe;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Why Hooks? */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Why Were Hooks Created?"
              description="Solving problems with classes"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-6 h-6 text-red-500" />
                    <h4 className="font-bold text-red-700 dark:text-red-300">Problems with Classes</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Hard to reuse stateful logic</li>
                    <li>• Complex components grow messy</li>
                    <li>• Confusing `this` keyword</li>
                    <li>• Harder for tools to optimize</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <h4 className="font-bold text-green-700 dark:text-green-300">Solutions with Hooks</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Custom Hooks for reusable logic</li>
                    <li>• Group related code together</li>
                    <li>• No `this` binding needed</li>
                    <li>• Better performance potential</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Backward Compatible</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Hooks are completely opt-in. You can use them alongside classes in the same codebase. They don't replace your knowledge of React concepts!
              </AlertDescription>
            </Alert>
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
                  <h4 className="font-bold text-green-700 dark:text-green-300">Function Components</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hooks let you use state and other React features in function components without classes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Start with "use"</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All Hooks follow the naming convention of starting with "use" (useState, useEffect, etc.).
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">15+ Built-in Hooks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React provides many built-in Hooks for state, effects, context, refs, and performance.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Custom Hooks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Create your own Hooks to extract and share logic between components.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Modern React</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Hooks are now the standard way to write React components. They make your code cleaner, more reusable, and easier to understand!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
