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
  Code2,
  GitBranch,
  Settings,
} from 'lucide-react';

export default function UseReducerHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={GitBranch}
        category="React · Hooks (Comprehensive)"
        title="useReducer Hook"
        description="Learn useReducer for managing complex state logic with actions and reducers - perfect for state that involves multiple sub-values or complex update logic."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useReducer */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useReducer?"
              description="Alternative to useState for complex state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useReducer</code> is a Hook for managing state with a <strong>reducer function</strong>. It's ideal when you have complex state logic with multiple sub-values or when the next state depends on the previous one.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const [state, dispatch] = useReducer(reducer, initialState);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">reducer:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function that determines how state updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">initialState:</span>
                  <span className="text-gray-700 dark:text-gray-300">Starting state value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">state:</span>
                  <span className="text-gray-700 dark:text-gray-300">Current state value</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">dispatch:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function to trigger state updates</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">useState</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Simple state updates</li>
                  <li>• Single value or object</li>
                  <li>• Direct setState calls</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">useReducer</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Complex state logic</li>
                  <li>• Multiple sub-values</li>
                  <li>• Actions describe "what happened"</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When to Use?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useReducer when you have state transitions that depend on previous state, or when state logic becomes complex with multiple setState calls!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How Reducers Work */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="How Reducers Work"
              description="The pattern explained"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Reducer Function Pattern</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-1">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>function reducer(state, action) {'{'}</div>
                  <div className="pl-4">switch (action.type) {'{'}</div>
                  <div className="pl-8">case 'INCREMENT':</div>
                  <div className="pl-12">return {'{ count: state.count + 1 }'};</div>
                  <div className="pl-8">case 'DECREMENT':</div>
                  <div className="pl-12">return {'{ count: state.count - 1 }'};</div>
                  <div className="pl-8">default:</div>
                  <div className="pl-12">return state;</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Dispatch Action</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Call <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">dispatch({'{type: "INCREMENT"}'});</code>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Reducer Runs</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    React calls your reducer with current state and the action
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">New State Returned</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Reducer returns new state, React re-renders component
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Counter with useReducer"
            description="Managing state with actions"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Counter using useReducer"
            description="Dispatch actions to update state"
            colorTheme="green"
            react={`// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(
    counterReducer, 
    { count: 0 }
  );

  return (
    <div className="container">
      <h1>🔢 useReducer Counter</h1>

      <div className="display">
        {state.count}
      </div>

      <div className="actions">
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="btn-red"
        >
          − Decrement
        </button>

        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          className="btn-gray"
        >
          Reset
        </button>

        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="btn-green"
        >
          + Increment
        </button>
      </div>

      <button 
        onClick={() => dispatch({ type: 'SET', payload: 100 })}
        className="btn-set"
      >
        Set to 100
      </button>

      <div className="info">
        💡 Actions describe what happened!
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
  const { createElement: h, useReducer } = React;
  const { createRoot } = ReactDOM;

  function counterReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      case 'SET':
        return { count: action.payload };
      default:
        return state;
    }
  }

  function Counter() {
    const result = useReducer(counterReducer, { count: 0 });
    const state = result[0];
    const dispatch = result[1];

    return h('div', { className: 'container' },
      h('h1', null, '🔢 useReducer Counter'),

      h('div', { className: 'display' }, state.count),

      h('div', { className: 'actions' },
        h('button', {
          onClick: () => dispatch({ type: 'DECREMENT' }),
          className: 'btn-red'
        }, '− Decrement'),

        h('button', {
          onClick: () => dispatch({ type: 'RESET' }),
          className: 'btn-gray'
        }, 'Reset'),

        h('button', {
          onClick: () => dispatch({ type: 'INCREMENT' }),
          className: 'btn-green'
        }, '+ Increment')
      ),

      h('button', {
        onClick: () => dispatch({ type: 'SET', payload: 100 }),
        className: 'btn-set'
      }, 'Set to 100'),

      h('div', { className: 'info' },
        '💡 Actions describe what happened!'
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
  max-width: 500px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.display {
  font-size: 96px;
  font-weight: 900;
  color: #065f46;
  text-align: center;
  margin: 40px 0;
  text-shadow: 2px 2px 4px rgba(6, 95, 70, 0.2);
}

.actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.actions button {
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-red {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-red:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

.btn-gray {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
}

.btn-gray:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
}

.btn-green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-green:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-set {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn-set:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
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

  .display {
    color: #d1fae5;
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
                  <Code2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Predictable Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducer centralizes state logic, making updates predictable and easier to test.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Actions Describe Intent</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Actions clearly describe "what happened" rather than "how to update".
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Complex State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for state with multiple sub-values or complex transitions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Easier Testing</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducers are pure functions - easy to test in isolation!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Redux Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useReducer follows the same pattern as Redux. Learning it prepares you for Redux and other state management libraries!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
