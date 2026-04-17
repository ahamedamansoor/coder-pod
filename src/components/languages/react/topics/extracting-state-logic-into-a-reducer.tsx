'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Brain,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code2,
  Zap,
  Settings,
  Target,
  ArrowRight,
  Cpu,
  Layers,
  Puzzle,
} from 'lucide-react';

export default function ExtractingStateLogicIntoAReducer() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Brain}
        category="React · State Management"
        title="Understanding State Reducers"
        description="Master the reducer pattern for predictable state management in React components"
        colorTheme="indigo"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is a Reducer */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Brain className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="What is a Reducer?"
              description="The core concept behind predictable state updates"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A <strong>reducer</strong> is a pure function that takes the current state and an action, then returns the next state. Think of it as a state update machine that follows strict, predictable rules.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">The Reducer Pattern</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm mb-4">
                <div className="text-slate-800 dark:text-slate-200">
                  <div><span className="text-purple-600">function</span> <span className="text-blue-600">reducer</span>(<span className="text-green-600">state</span>, <span className="text-orange-600">action</span>) {'{'}</div>
                  <div className="pl-4"><span className="text-purple-600">return</span> <span className="text-green-600">nextState</span>;</div>
                  <div>{'}'}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <h5 className="font-semibold text-green-700 dark:text-green-300">Current State</h5>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The existing state before any changes
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Action</h5>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    An object describing what happened
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300">Next State</h5>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The new state after applying the action
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Key Principle</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                Reducers are <strong>pure functions</strong> - they always return the same output for the same input and never modify the original state.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use Reducers */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="When to Use Reducers"
              description="Recognize the patterns that call for a reducer"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Not all state needs a reducer! Use them when your state logic becomes complex and hard to manage with multiple useState calls.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">✅ Use Reducers When:</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>State updates depend on previous state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multiple state values change together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complex state logic in event handlers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Different actions modify state differently</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">❌ Stick with useState When:</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Simple independent state values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>State updates are straightforward</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No complex update logic needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>State values don't affect each other</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The useReducer Hook */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Cpu className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The useReducer Hook"
              description="How to implement reducers in React components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">useReducer</code> hook is React's built-in way to use reducers in your components. It returns the current state and a dispatch function.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">useReducer Syntax</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm mb-4">
                <div className="text-slate-800 dark:text-slate-200">
                  <div><span className="text-purple-600">const</span> [<span className="text-green-600">state</span>, <span className="text-blue-600">dispatch</span>] = <span className="text-orange-600">useReducer</span>(<span className="text-green-600">reducer</span>, <span className="text-blue-600">initialState</span>);</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">state</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The current state value (like useState)
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">dispatch</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Function to send actions to the reducer
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Complete Example</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs overflow-x-auto">
                <div className="text-slate-800 dark:text-slate-200">
                  <div><span className="text-purple-600">function</span> <span className="text-blue-600">reducer</span>(<span className="text-green-600">state</span>, <span className="text-orange-600">action</span>) {'{'}</div>
                  <div className="pl-4"><span className="text-purple-600">switch</span> (<span className="text-orange-600">action.type</span>) {'{'}</div>
                  <div className="pl-8"><span className="text-purple-600">case</span> <span className="text-red-600">'INCREMENT'</span>:</div>
                  <div className="pl-12"><span className="text-purple-600">return</span> {'{'} <span className="text-green-600">count</span>: <span className="text-green-600">state</span>.<span className="text-green-600">count</span> + <span className="text-orange-600">1</span> {'}'};</div>
                  <div className="pl-8"><span className="text-purple-600">case</span> <span className="text-red-600">'DECREMENT'</span>:</div>
                  <div className="pl-12"><span className="text-purple-600">return</span> {'{'} <span className="text-green-600">count</span>: <span className="text-green-600">state</span>.<span className="text-green-600">count</span> - <span className="text-orange-600">1</span> {'}'};</div>
                  <div className="pl-8"><span className="text-purple-600">default</span>:</div>
                  <div className="pl-12"><span className="text-purple-600">return</span> <span className="text-green-600">state</span>;</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                  <div className="mt-2"></div>
                  <div><span className="text-purple-600">function</span> <span className="text-blue-600">Counter</span>() {'{'}</div>
                  <div className="pl-4"><span className="text-purple-600">const</span> [<span className="text-green-600">state</span>, <span className="text-blue-600">dispatch</span>] = <span className="text-orange-600">useReducer</span>(<span className="text-blue-600">reducer</span>, {'{'} <span className="text-green-600">count</span>: <span className="text-orange-600">0</span> {'}'});</div>
                  <div className="pl-4"><span className="text-purple-600">return</span> (</div>
                  <div className="pl-8"><span className="text-gray-600">&lt;button</span> <span className="text-orange-600">onClick</span>={'{'}() {'=>'} <span className="text-blue-600">dispatch</span>({'{'} <span className="text-orange-600">type</span>: <span className="text-red-600">'INCREMENT'</span> {'}'}){'}'}{'>'}</div>
                  <div className="pl-12">+1</div>
                  <div className="pl-8"><span className="text-gray-600">&lt;/button&gt;</span></div>
                  <div className="pl-4">);</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: Simple Counter */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Puzzle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="Interactive Playground: Counter with Reducer"
            description="See how reducers handle simple state updates"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Counter with useReducer"
            description="A simple counter showing basic reducer concepts"
            colorTheme="indigo"
            react={`function Counter() {
  const initialState = { count: 0 };

  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: (state?.count || 0) + 1 };
      case 'DECREMENT':
        return { count: (state?.count || 0) - 1 };
      case 'RESET':
        return { count: 0 };
      case 'SET_VALUE':
        return { count: Math.max(0, action.payload) };
      default:
        return state || initialState;
    }
  }

  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  return (
    <div className="container">
      <h1>🔢 Counter with Reducer</h1>
      
      <div className="counter-display">
        <div className="count-value">{state?.count || 0}</div>
        <div className="count-label">Current Count</div>
      </div>

      <div className="button-grid">
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="btn btn-primary"
        >
          ➕ Increment
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="btn btn-secondary"
        >
          ➖ Decrement
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          className="btn btn-danger"
        >
          🔄 Reset
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'SET_VALUE', payload: 10 })}
          className="btn btn-info"
        >
          ⚡ Set to 10
        </button>
      </div>

      <div className="action-log">
        <h3>📋 Action Log</h3>
        <div className="log-content">
          <div className="log-entry">
            <strong>Current State:</strong> {JSON.stringify(state)}
          </div>
          <div className="log-entry">
            <strong>Try this:</strong> Click buttons to see how actions update state
          </div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useReducer, useState } = React;
  const { createRoot } = ReactDOM;

  const initialState = { count: 0 };

  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: (state && state.count || 0) + 1 };
      case 'DECREMENT':
        return { count: (state && state.count || 0) - 1 };
      case 'RESET':
        return { count: 0 };
      case 'SET_VALUE':
        return { count: Math.max(0, action.payload) };
      default:
        return state || initialState;
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [logs, setLogs] = useState(['Component mounted']);

    const addLog = (message) => {
      setLogs(prev => [...prev.slice(-4), message]);
    };

    const handleDispatch = (action) => {
      addLog('Dispatched: ' + JSON.stringify(action));
      dispatch(action);
    };

    return h('div', { className: 'container' },
      h('h1', null, '🔢 Counter with Reducer'),
      
      h('div', { className: 'counter-display' },
        h('div', { className: 'count-value' }, (state && state.count) || 0),
        h('div', { className: 'count-label' }, 'Current Count')
      ),

      h('div', { className: 'button-grid' },
        h('button', { 
          onClick: () => handleDispatch({ type: 'INCREMENT' }),
          className: 'btn btn-primary'
        }, '➕ Increment'),
        
        h('button', { 
          onClick: () => handleDispatch({ type: 'DECREMENT' }),
          className: 'btn btn-secondary'
        }, '➖ Decrement'),
        
        h('button', { 
          onClick: () => handleDispatch({ type: 'RESET' }),
          className: 'btn btn-danger'
        }, '🔄 Reset'),
        
        h('button', { 
          onClick: () => handleDispatch({ type: 'SET_VALUE', payload: 10 }),
          className: 'btn btn-info'
        }, '⚡ Set to 10')
      ),

      h('div', { className: 'action-log' },
        h('h3', null, '📋 Action Log'),
        h('div', { className: 'log-content' },
          h('div', { className: 'log-entry' },
            h('strong', null, 'Current State: '),
            JSON.stringify(state || { count: 0 })
          ),
          ...logs.map((log, i) => 
            h('div', { key: i, className: 'log-entry' }, log)
          )
        )
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
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
  margin-top: 20px;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
}

.counter-display {
  text-align: center;
  margin-bottom: 30px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.count-value {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 10px;
}

.count-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 500;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.btn {
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.btn-danger {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

.btn-info {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.action-log {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.action-log h3 {
  color: #1e293b;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.log-content {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
}

.log-entry {
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

.log-entry:last-child {
  border-bottom: none;
}

.log-entry strong {
  color: #1e293b;
}

@media (max-width: 640px) {
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .count-value {
    font-size: 3rem;
  }
  
  .button-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .action-log {
    background: #374151;
    border-color: #4b5563;
  }

  .action-log h3 {
    color: #e5e7eb;
  }

  .log-entry {
    color: #9ca3af;
    border-color: #4b5563;
  }

  .log-entry strong {
    color: #e5e7eb;
  }
}`}
          />
        </div>

        {/* Interactive Playground 2: Todo List */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Playground: Todo List"
            description="Complex state management with multiple actions"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with useReducer"
            description="Manage todos with add, toggle, and delete actions"
            colorTheme="purple"
            react={`function TodoList() {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, {
            id: Date.now(),
            text: action.payload,
            completed: false
          }]
        };
      
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      
      case 'DELETE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      
      case 'CLEAR_COMPLETED':
        return {
          todos: state.todos.filter(todo => !todo.completed)
        };
      
      default:
        return state;
    }
  }

  const initialState = {
    todos: [
      { id: 1, text: 'Learn reducers', completed: true },
      { id: 2, text: 'Build todo app', completed: false }
    ]
  };

  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue.trim() });
      setInputValue('');
    }
  };

  const completedCount = state.todos.filter(todo => todo.completed).length;
  const totalCount = state.todos.length;

  return (
    <div className="container">
      <h1>📝 Todo List with Reducer</h1>
      
      <div className="stats">
        <div className="stat">
          <span className="stat-number">{totalCount}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-number">{completedCount}</span>
          <span className="stat-label">Done</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          ➕ Add Todo
        </button>
      </form>

      <div className="todo-list">
        {state.todos.length === 0 ? (
          <div className="empty-state">
            🎉 No todos! Add one above.
          </div>
        ) : (
          state.todos.map(todo => (
            <div key={todo.id} className={'todo-item ' + (todo.completed ? 'completed' : '')}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <button 
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                className="delete-btn"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {completedCount > 0 && (
        <button 
          onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
          className="clear-btn"
        >
          🧹 Clear Completed
        </button>
      )}

      <div className="state-display">
        <h3>🔍 Current State</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<TodoList />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useReducer, useState } = React;
  const { createRoot } = ReactDOM;

  const initialState = {
    todos: [
      { id: 1, text: 'Learn reducers', completed: true },
      { id: 2, text: 'Build todo app', completed: false }
    ]
  };

  function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...(state && state.todos || []), {
            id: Date.now(),
            text: action.payload,
            completed: false
          }]
        };
      
      case 'TOGGLE_TODO':
        return {
          todos: (state && state.todos || []).map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      
      case 'DELETE_TODO':
        return {
          todos: (state && state.todos || []).filter(todo => todo.id !== action.payload)
        };
      
      case 'CLEAR_COMPLETED':
        return {
          todos: (state && state.todos || []).filter(todo => !todo.completed)
        };
      
      default:
        return state || initialState;
    }
  }

  function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        dispatch({ type: 'ADD_TODO', payload: inputValue.trim() });
        setInputValue('');
      }
    };

    const completedCount = (state && state.todos || []).filter(todo => todo.completed).length;
    const totalCount = (state && state.todos || []).length;

    return h('div', { className: 'container' },
      h('h1', null, '📝 Todo List with Reducer'),
      
      h('div', { className: 'stats' },
        h('div', { className: 'stat' },
          h('span', { className: 'stat-number' }, totalCount),
          h('span', { className: 'stat-label' }, 'Total')
        ),
        h('div', { className: 'stat' },
          h('span', { className: 'stat-number' }, completedCount),
          h('span', { className: 'stat-label' }, 'Done')
        )
      ),

      h('form', { onSubmit: handleSubmit, className: 'add-todo' },
        h('input', {
          type: 'text',
          value: inputValue,
          onChange: (e) => setInputValue(e.target.value),
          placeholder: 'What needs to be done?',
          className: 'todo-input'
        }),
        h('button', { type: 'submit', className: 'add-btn' }, '➕ Add Todo')
      ),

      h('div', { className: 'todo-list' },
        (state && state.todos || []).length === 0 ? 
          h('div', { className: 'empty-state' }, '🎉 No todos! Add one above.') :
          (state && state.todos || []).map(todo =>
            h('div', { 
              key: todo.id, 
              className: 'todo-item ' + (todo.completed ? 'completed' : '') 
            },
              h('input', {
                type: 'checkbox',
                checked: todo.completed,
                onChange: () => dispatch({ type: 'TOGGLE_TODO', payload: todo.id }),
                className: 'todo-checkbox'
              }),
              h('span', { className: 'todo-text' }, todo.text),
              h('button', { 
                onClick: () => dispatch({ type: 'DELETE_TODO', payload: todo.id }),
                className: 'delete-btn'
              }, '🗑️')
            )
          )
      ),

      completedCount > 0 && 
        h('button', { 
          onClick: () => dispatch({ type: 'CLEAR_COMPLETED' }),
          className: 'clear-btn'
        }, '🧹 Clear Completed'),

      h('div', { className: 'state-display' },
        h('h3', null, '🔍 Current State'),
        h('pre', null, JSON.stringify(state || initialState, null, 2))
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
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
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
}

.stats {
  display: flex;
  justify-content: space-around;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 25px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.stat {
  text-align: center;
  color: white;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: 12px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 16px 20px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.todo-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.add-btn {
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.todo-list {
  margin-bottom: 20px;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 20px;
  background: #f8fafc;
  border-radius: 12px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  background: #f1f5f9;
}

.todo-item.completed {
  opacity: 0.7;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 16px;
  color: #1e293b;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #64748b;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.delete-btn:hover {
  opacity: 1;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #64748b;
  background: #f8fafc;
  border-radius: 16px;
  border: 2px dashed #e2e8f0;
}

.clear-btn {
  width: 100%;
  padding: 14px 20px;
  background: white;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-weight: 600;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.clear-btn:hover {
  background: #f0f4ff;
  border-color: #667eea;
}

.state-display {
  background: #1e293b;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
}

.state-display h3 {
  color: #e2e8f0;
  margin-bottom: 15px;
  font-size: 16px;
}

.state-display pre {
  color: #e2e8f0;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', monospace;
  line-height: 1.5;
  overflow-x: auto;
}

@media (max-width: 640px) {
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 15px;
  }
  
  .add-todo {
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .todo-input {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .todo-input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .todo-item {
    background: #374151;
  }

  .todo-item:hover {
    background: #4b5563;
  }

  .todo-text {
    color: #e5e7eb;
  }

  .todo-item.completed .todo-text {
    color: #9ca3af;
  }

  .empty-state {
    background: #374151;
    color: #9ca3af;
    border-color: #4b5563;
  }

  .clear-btn {
    background: #374151;
    border-color: #4b5563;
    color: #60a5fa;
  }

  .clear-btn:hover {
    background: #1e3a8a;
    border-color: #60a5fa;
  }
}`}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Reducer Best Practices"
              description="Write clean, maintainable reducers"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">✅ Do This</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep reducers pure and predictable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use descriptive action types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Always return new state objects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Handle unknown actions gracefully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Group related state in one reducer</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid This</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mutating the original state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Side effects in reducers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Async operations in reducers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Random or time-based logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Nested reducers for simple state</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Start with useState and migrate to useReducer only when you notice your state logic becoming complex. Don't over-engineer simple components!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Key Takeaways"
              description="Essential concepts about state reducers"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Pure Functions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducers are pure functions that always return the same output for the same input.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Immutable Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always return new state objects instead of modifying the existing state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Action-Driven</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State changes happen through dispatching actions with clear types and payloads.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Predictable Flow</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducers make state changes predictable and easier to debug in complex components.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Brain className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Remember</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                State reducers are a powerful pattern for managing complex state logic. They make your components more predictable, testable, and easier to maintain as your application grows.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
