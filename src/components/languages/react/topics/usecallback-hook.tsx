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
  XCircle,
  Zap,
  RefreshCw,
  Gauge,
} from 'lucide-react';

export default function UseCallbackHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Hooks (Comprehensive)"
        title="useCallback Hook"
        description="Learn useCallback to memoize callback functions and prevent unnecessary re-renders in child components for better performance."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useCallback */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useCallback?"
              description="Memoizing callback functions"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useCallback</code> returns a <strong>memoized callback function</strong>. It caches a function between re-renders until its dependencies change, preventing child components from re-rendering unnecessarily.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const memoizedCallback = useCallback(() =&gt; {'{'}</div>
                  <div className="pl-4">// Function body</div>
                  <div>{'}'}, [dependencies]);</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Without useCallback</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const handleClick = () =&gt; {'{'}</div>
                    <div className="pl-2">doSomething();</div>
                    <div>{'}'};</div>
                    <div className="text-red-600 dark:text-red-400">// New function every render!</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Child components re-render even if nothing changed!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">With useCallback</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const handleClick = useCallback(() =&gt; {'{'}</div>
                    <div className="pl-2">doSomething();</div>
                    <div>{'}'}, []);</div>
                    <div className="text-green-600 dark:text-green-400">// Same function reused!</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Child components don't re-render unnecessarily!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When to Use?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useCallback when passing callbacks to optimized child components wrapped in React.memo, or when the callback is used as a dependency in other Hooks!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Problem */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="The Problem useCallback Solves"
              description="Understanding unnecessary re-renders"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In JavaScript, functions are objects. Each time a component re-renders, it creates <strong>new function instances</strong>, even if the function logic is identical!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">❌ The Issue</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    1
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Parent re-renders → Creates new callback function
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    2
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    New function passed to child → Child thinks props changed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    3
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Child re-renders even though logic is the same!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold mb-4 text-green-700 dark:text-green-300">✅ The Solution</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                useCallback returns the <strong>same function instance</strong> between renders (unless dependencies change), so child components don't see it as a "new" prop!
              </p>
              <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                <p className="text-sm text-green-800 dark:text-green-200">
                  💡 <strong>Tip:</strong> Combine useCallback with React.memo for maximum optimization!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Gauge className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example: Optimized Todo List"
            description="Preventing unnecessary re-renders"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with useCallback"
            description="Child items don't re-render when parent updates"
            colorTheme="blue"
            react={`function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Master Hooks', done: false }
  ]);
  const [renderCount, setRenderCount] = React.useState(0);

  // Memoized callback - same function instance!
  const toggleTodo = React.useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }, []); // Empty deps - never changes

  // Force re-render to show optimization
  const forceRender = () => {
    setRenderCount(c => c + 1);
  };

  return (
    <div className="container">
      <h1>✅ Todo List</h1>

      <div className="stats">
        <div className="stat">
          <div className="label">Parent Renders</div>
          <div className="value">{renderCount}</div>
        </div>
      </div>

      <button onClick={forceRender} className="btn-render">
        Force Parent Re-render
      </button>

      <div className="todos">
        {todos.map(todo => (
          <div key={todo.id} className="todo">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.done ? 'done' : ''}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>

      <div className="info">
        💡 useCallback prevents creating new functions on every render!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useCallback } = React;
  const { createRoot } = ReactDOM;

  function TodoList() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React', done: false },
      { id: 2, text: 'Master Hooks', done: false }
    ]);
    const [renderCount, setRenderCount] = useState(0);

    const toggleTodo = useCallback((id) => {
      setTodos(prev => prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ));
    }, []);

    const forceRender = () => {
      setRenderCount(c => c + 1);
    };

    return h('div', { className: 'container' },
      h('h1', null, '✅ Todo List'),

      h('div', { className: 'stats' },
        h('div', { className: 'stat' },
          h('div', { className: 'label' }, 'Parent Renders'),
          h('div', { className: 'value' }, renderCount)
        )
      ),

      h('button', {
        onClick: forceRender,
        className: 'btn-render'
      }, 'Force Parent Re-render'),

      h('div', { className: 'todos' },
        todos.map(todo =>
          h('div', { key: todo.id, className: 'todo' },
            h('input', {
              type: 'checkbox',
              checked: todo.done,
              onChange: () => toggleTodo(todo.id)
            }),
            h('span', { className: todo.done ? 'done' : '' }, todo.text)
          )
        )
      ),

      h('div', { className: 'info' },
        '💡 useCallback prevents creating new functions on every render!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(TodoList));
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
  max-width: 500px;
  width: 100%;
}

h1 {
  color: #3b82f6;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.stats {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.stat {
  text-align: center;
}

.label {
  font-size: 14px;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 5px;
}

.value {
  font-size: 36px;
  font-weight: 900;
  color: #1e40af;
}

.btn-render {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn-render:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
}

.todos {
  background: #f9fafb;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.todo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.todo:hover {
  background: #eff6ff;
}

.todo input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo span {
  flex: 1;
  color: #374151;
  font-size: 15px;
}

.todo span.done {
  text-decoration: line-through;
  color: #9ca3af;
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

  .stats {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }

  .label {
    color: #60a5fa;
  }

  .value {
    color: #93c5fd;
  }

  .todos {
    background: #111827;
  }

  .todo {
    background: #1f2937;
  }

  .todo:hover {
    background: #374151;
  }

  .todo span {
    color: #e5e7eb;
  }

  .todo span.done {
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
                  <h4 className="font-bold text-green-700 dark:text-green-300">Memoizes Functions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns same function instance between renders until dependencies change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Gauge className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Prevents Re-renders</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Child components with React.memo won't re-render if callback hasn't changed.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Dependency Array</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Function is recreated only when dependencies in the array change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use Wisely</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't use everywhere! Only when needed for performance optimization.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useCallback is a performance optimization. Use it with React.memo or when callbacks are dependencies in other Hooks!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
