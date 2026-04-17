'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Share2,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ArrowUp,
  Sparkles,
  Users,
  Zap,
  GitBranch,
  RefreshCw,
} from 'lucide-react';

export default function SharingStateBetweenComponents() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Share2}
        category="React · State Management"
        title="Sharing State Between Components"
        description="Master the art of state sharing in React. Learn lifting state up, prop drilling, and best practices for component communication."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is State Sharing */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Users className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is State Sharing?"
              description="Understanding how components communicate and share data"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>State sharing</strong> is the process of making the same data available to multiple components that need it. In React, the most common pattern for sharing state is <strong>"lifting state up"</strong> - moving state to the closest common ancestor component.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Isolated State</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{`<Parent>`}</div>
                    <div className="pl-2">{`  <ChildA count={0} />`}</div>
                    <div className="pl-2">{`  <ChildB count={0} />`}</div>
                    <div>{`</Parent>`}</div>
                    <div className="mt-2 text-red-600 dark:text-red-400">// Each child has its own count!</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Components have separate state that can't synchronize.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Shared State</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{`<Parent count={0}>`}</div>
                    <div className="pl-2">{`  <ChildA />`}</div>
                    <div className="pl-2">{`  <ChildB />`}</div>
                    <div>{`</Parent>`}</div>
                    <div className="mt-2 text-green-600 dark:text-green-400">// Both children share the same count!</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State lives in parent, passed down to children.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lifting State Up Pattern */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<ArrowUp className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Lifting State Up"
              description="The fundamental pattern for sharing state between components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Lifting state up</strong> means moving state from child components to their closest common parent. The parent becomes the "source of truth" and passes the state down as props.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Identify Shared State</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Find data that multiple components need to access or modify
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Move State to Common Parent</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Remove state from children, add it to their closest ancestor
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Pass State & Handlers Down</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Send state as props and update functions as callbacks
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Key Insight</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                State should live with the component that "owns" it - the one that needs it or modifies it most. Other components receive it as props.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: Counter Sync */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Playground: Synchronized Counters"
            description="See how lifting state up keeps multiple components in sync"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Synchronized Counter Components"
            description="Multiple counters sharing the same state through lifting state up"
            colorTheme="cyan"
            react={`import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>🔄 Synchronized Counters</h1>
      <p className="description">
        All counters share the same state from the parent component
      </p>
      
      <div className="controls">
        <button onClick={decrement} className="btn btn-danger">
          ➖ Decrease
        </button>
        <button onClick={reset} className="btn btn-secondary">
          🔄 Reset
        </button>
        <button onClick={increment} className="btn btn-primary">
          ➕ Increase
        </button>
      </div>

      <div className="counters-grid">
        <CounterDisplay 
          label="Counter A" 
          count={count} 
          color="blue"
        />
        <CounterDisplay 
          label="Counter B" 
          count={count} 
          color="green"
        />
        <CounterDisplay 
          label="Counter C" 
          count={count} 
          color="purple"
        />
      </div>

      <div className="state-info">
        <h3>🔍 State Location</h3>
        <p>
          <strong>Parent Component:</strong> Holds the count state
        </p>
        <p>
          <strong>Child Components:</strong> Receive count as props
        </p>
        <p>
          <strong>Update Flow:</strong> Child → Parent → All Children
        </p>
      </div>
    </div>
  );
}

function CounterDisplay({ label, count, color }) {
  return (
    <div className={'counter-display counter-' + color}>
      <h3>{label}</h3>
      <div className="count-value">{count}</div>
      <p className="count-label">Current Value</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return h('div', { className: 'app' },
      h('h1', null, '🔄 Synchronized Counters'),
      h('p', { className: 'description' },
        'All counters share the same state from the parent component'
      ),
      
      h('div', { className: 'controls' },
        h('button', { onClick: decrement, className: 'btn btn-danger' }, '➖ Decrease'),
        h('button', { onClick: reset, className: 'btn btn-secondary' }, '🔄 Reset'),
        h('button', { onClick: increment, className: 'btn btn-primary' }, '➕ Increase')
      ),

      h('div', { className: 'counters-grid' },
        h(CounterDisplay, { label: 'Counter A', count: count, color: 'blue' }),
        h(CounterDisplay, { label: 'Counter B', count: count, color: 'green' }),
        h(CounterDisplay, { label: 'Counter C', count: count, color: 'purple' })
      ),

      h('div', { className: 'state-info' },
        h('h3', null, '🔍 State Location'),
        h('p', null, h('strong', null, 'Parent Component: '), 'Holds the count state'),
        h('p', null, h('strong', null, 'Child Components: '), 'Receive count as props'),
        h('p', null, h('strong', null, 'Update Flow: '), 'Child → Parent → All Children')
      )
    );
  }

  function CounterDisplay({ label, count, color }) {
    return h('div', { className: 'counter-display counter-' + color },
      h('h3', null, label),
      h('div', { className: 'count-value' }, count),
      h('p', { className: 'count-label' }, 'Current Value')
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.app {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
}

.description {
  text-align: center;
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-danger {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.btn-secondary {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

.counters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.counter-display {
  text-align: center;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.counter-display:hover {
  transform: translateY(-5px);
}

.counter-blue {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.counter-green {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
}

.counter-purple {
  background: linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%);
  color: white;
}

.count-value {
  font-size: 3rem;
  font-weight: bold;
  margin: 15px 0;
}

.count-label {
  opacity: 0.9;
  font-size: 0.9rem;
}

.state-info {
  background: #f3f4f6;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.state-info h3 {
  color: #667eea;
  margin-bottom: 15px;
}

.state-info p {
  margin: 8px 0;
  color: #4b5563;
}

.state-info strong {
  color: #1f2937;
}

@media (max-width: 768px) {
  .counters-grid {
    grid-template-columns: 1fr;
  }
  
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .app {
    background: #1f2937;
    color: #f9fafb;
  }

  h1 {
    color: #60a5fa;
  }

  .description {
    color: #9ca3af;
  }

  .state-info {
    background: #374151;
    color: #f9fafb;
  }

  .state-info p {
    color: #d1d5db;
  }

  .state-info strong {
    color: #f9fafb;
  }
}`}
          />
        </div>

        {/* Interactive Playground 2: Todo List */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Playground: Todo List with Shared State"
            description="Complex state sharing with multiple components working together"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with Shared State"
            description="Multiple components sharing and manipulating the same todo data"
            colorTheme="purple"
            react={`import React from 'react';
import { createRoot } from 'react-dom/client';

function TodoApp() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React state sharing', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Master lifting state up', completed: false }
  ]);
  const [filter, setFilter] = React.useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Derived state - calculated from todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  return (
    <div className="todo-app">
      <h1>📝 Shared Todo List</h1>
      <p className="subtitle">
        All components share the same todos array from the parent
      </p>

      <TodoInput onAdd={addTodo} />
      
      <TodoStats stats={stats} />
      
      <TodoFilter 
        currentFilter={filter} 
        onFilterChange={setFilter} 
      />
      
      <TodoList 
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      {stats.completed > 0 && (
        <div className="clear-section">
          <button 
            onClick={clearCompleted}
            className="clear-btn"
          >
            🧹 Clear {stats.completed} completed
          </button>
        </div>
      )}

      <div className="state-flow">
        <h3>🔄 State Flow Diagram</h3>
        <div className="flow-diagram">
          <div className="flow-box parent">TodoApp (State Owner)</div>
          <div className="flow-arrows">
            <span>↓ props ↓</span>
          </div>
          <div className="flow-children">
            <div className="flow-box child">TodoInput</div>
            <div className="flow-box child">TodoStats</div>
            <div className="flow-box child">TodoFilter</div>
            <div className="flow-box child">TodoList</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodoInput({ onAdd }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="input-field"
      />
      <button type="submit" className="add-btn">
        ➕ Add
      </button>
    </form>
  );
}

function TodoStats({ stats }) {
  return (
    <div className="todo-stats">
      <div className="stat-item">
        <span className="stat-number">{stats.total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.active}</span>
        <span className="stat-label">Active</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.completed}</span>
        <span className="stat-label">Done</span>
      </div>
    </div>
  );
}

function TodoFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="todo-filter">
      {['all', 'active', 'completed'].map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={'filter-btn ' + (currentFilter === filter ? 'active' : '')}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>🎉 No todos to show!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className={'todo-item ' + (todo.completed ? 'completed' : '')}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="delete-btn"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(TodoApp));`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function TodoApp() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React state sharing', completed: false },
      { id: 2, text: 'Build a todo app', completed: true },
      { id: 3, text: 'Master lifting state up', completed: false }
    ]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    };

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
      setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });

    const stats = {
      total: todos.length,
      active: todos.filter(todo => !todo.completed).length,
      completed: todos.filter(todo => todo.completed).length
    };

    return h('div', { className: 'todo-app' },
      h('h1', null, '📝 Shared Todo List'),
      h('p', { className: 'subtitle' },
        'All components share the same todos array from the parent'
      ),

      h(TodoInput, { onAdd: addTodo }),
      h(TodoStats, { stats: stats }),
      h(TodoFilter, { currentFilter: filter, onFilterChange: setFilter }),
      h(TodoList, { todos: filteredTodos, onToggle: toggleTodo, onDelete: deleteTodo }),

      stats.completed > 0 && h('div', { className: 'clear-section' },
        h('button', { onClick: clearCompleted, className: 'clear-btn' },
          '🧹 Clear ' + stats.completed + ' completed'
        )
      ),

      h('div', { className: 'state-flow' },
        h('h3', null, '🔄 State Flow Diagram'),
        h('div', { className: 'flow-diagram' },
          h('div', { className: 'flow-box parent' }, 'TodoApp (State Owner)'),
          h('div', { className: 'flow-arrows' }, h('span', null, '↓ props ↓')),
          h('div', { className: 'flow-children' },
            h('div', { className: 'flow-box child' }, 'TodoInput'),
            h('div', { className: 'flow-box child' }, 'TodoStats'),
            h('div', { className: 'flow-box child' }, 'TodoFilter'),
            h('div', { className: 'flow-box child' }, 'TodoList')
          )
        )
      )
    );
  }

  function TodoInput({ onAdd }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim()) {
        onAdd(input);
        setInput('');
      }
    };

    return h('form', { onSubmit: handleSubmit, className: 'todo-input' },
      h('input', {
        type: 'text',
        value: input,
        onChange: (e) => setInput(e.target.value),
        placeholder: 'What needs to be done?',
        className: 'input-field'
      }),
      h('button', { type: 'submit', className: 'add-btn' }, '➕ Add')
    );
  }

  function TodoStats({ stats }) {
    return h('div', { className: 'todo-stats' },
      h('div', { className: 'stat-item' },
        h('span', { className: 'stat-number' }, stats.total),
        h('span', { className: 'stat-label' }, 'Total')
      ),
      h('div', { className: 'stat-item' },
        h('span', { className: 'stat-number' }, stats.active),
        h('span', { className: 'stat-label' }, 'Active')
      ),
      h('div', { className: 'stat-item' },
        h('span', { className: 'stat-number' }, stats.completed),
        h('span', { className: 'stat-label' }, 'Done')
      )
    );
  }

  function TodoFilter({ currentFilter, onFilterChange }) {
    return h('div', { className: 'todo-filter' },
      ['all', 'active', 'completed'].map(filter =>
        h('button', {
          key: filter,
          onClick: () => onFilterChange(filter),
          className: 'filter-btn ' + (currentFilter === filter ? 'active' : '')
        }, filter.charAt(0).toUpperCase() + filter.slice(1))
      )
    );
  }

  function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
      return h('div', { className: 'empty-state' },
        h('p', null, '🎉 No todos to show!')
      );
    }

    return h('div', { className: 'todo-list' },
      todos.map(todo =>
        h('div', { 
          key: todo.id, 
          className: 'todo-item ' + (todo.completed ? 'completed' : '')
        },
          h('input', {
            type: 'checkbox',
            checked: todo.completed,
            onChange: () => onToggle(todo.id),
            className: 'todo-checkbox'
          }),
          h('span', { className: 'todo-text' }, todo.text),
          h('button', {
            onClick: () => onDelete(todo.id),
            className: 'delete-btn'
          }, '🗑️')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(TodoApp));
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
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.todo-app {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 5px;
  font-size: 2rem;
}

.subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 25px;
  font-size: 0.95rem;
}

.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-field {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
}

.add-btn {
  padding: 12px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.add-btn:hover {
  transform: translateY(-2px);
}

.todo-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 15px;
  background: #f3f4f6;
  border-radius: 10px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.stat-label {
  font-size: 0.85rem;
  color: #6b7280;
  text-transform: uppercase;
}

.todo-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.filter-btn {
  padding: 8px 16px;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.todo-list {
  margin-bottom: 20px;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: #f9fafb;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  background: #f3f4f6;
}

.todo-item.completed {
  opacity: 0.6;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 16px;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.delete-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.delete-btn:hover {
  opacity: 1;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #6b7280;
  font-size: 18px;
}

.clear-section {
  text-align: center;
  margin-bottom: 20px;
}

.clear-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.clear-btn:hover {
  transform: translateY(-2px);
}

.state-flow {
  background: #f9fafb;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.state-flow h3 {
  color: #667eea;
  margin-bottom: 15px;
  text-align: center;
}

.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.flow-box {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  font-size: 14px;
}

.flow-box.parent {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-width: 200px;
}

.flow-box.child {
  background: #e5e7eb;
  color: #374151;
  min-width: 120px;
}

.flow-children {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.flow-arrows {
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 640px) {
  .todo-stats {
    flex-direction: column;
    gap: 10px;
  }
  
  .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .flow-children {
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .todo-app {
    background: #1f2937;
    color: #f9fafb;
  }

  h1 {
    color: #60a5fa;
  }

  .subtitle {
    color: #9ca3af;
  }

  .input-field {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .input-field:focus {
    border-color: #60a5fa;
  }

  .todo-stats {
    background: #374151;
  }

  .stat-number {
    color: #60a5fa;
  }

  .stat-label {
    color: #9ca3af;
  }

  .filter-btn {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .todo-item {
    background: #374151;
  }

  .todo-item:hover {
    background: #4b5563;
  }

  .empty-state {
    color: #9ca3af;
  }

  .state-flow {
    background: #374151;
  }

  .state-flow h3 {
    color: #60a5fa;
  }

  .flow-box.child {
    background: #4b5563;
    color: #f9fafb;
  }
}`}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Best Practices for State Sharing"
              description="Guidelines for clean and maintainable component architecture"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300">✅ Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Keep state as close to where it's needed as possible
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Pass functions down for child components to update state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Use derived state instead of duplicating data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Consider Context API for deeply nested components
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300">❌ Don'ts</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Don't lift state higher than necessary
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Avoid duplicating the same state in multiple places
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Don't pass state through unrelated components
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Avoid complex prop drilling when Context would be better
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Performance Tip</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                When lifting state causes performance issues, consider using React.memo for child components or the Context API for complex state sharing scenarios.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Key Takeaways"
              description="Essential concepts to remember about state sharing"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-amber-700 dark:text-amber-300">🎯 Core Concepts</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Single Source of Truth:</strong> State lives in one place</li>
                  <li>• <strong>Top-Down Data Flow:</strong> Props flow down, actions flow up</li>
                  <li>• <strong>Lifting State Up:</strong> Move state to common ancestor</li>
                  <li>• <strong>Callback Props:</strong> Functions passed down for updates</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-amber-700 dark:text-amber-300">🔄 When to Use</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Multiple components need the same data</li>
                  <li>• Components need to stay synchronized</li>
                  <li>• One component controls another's data</li>
                  <li>• Shared calculations or derived state needed</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-100 dark:bg-amber-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700">
              <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Remember</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                State sharing through lifting state up is React's fundamental pattern for component communication. 
                Master this concept before moving to advanced solutions like Context API or state management libraries.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
