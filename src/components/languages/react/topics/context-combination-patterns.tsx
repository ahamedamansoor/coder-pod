'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Workflow, RefreshCw } from 'lucide-react';

export default function ContextCombinationPatterns() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Workflow}
        category="React · Context API"
        title="Combination Patterns"
        description="Learn common patterns for combining Context with useState or useReducer to manage complex global state in your React applications."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Workflow className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Common Patterns"
              description="Context + useState vs Context + useReducer"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">Context + useState</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Simple state management
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Simple state updates</li>
                  <li>• Few state variables</li>
                  <li>• Direct state changes</li>
                  <li>• Easy to understand</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">Context + useReducer</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Complex state management
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Complex state logic</li>
                  <li>• Multiple related values</li>
                  <li>• Action-based updates</li>
                  <li>• More predictable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<RefreshCw className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Context + useReducer Pattern - Live Demo"
            description="Complete todo app with reducer pattern"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Todo App with Context + useReducer"
            description="Professional state management pattern - add, toggle, delete todos!"
            colorTheme="green"
            react={`// Action types
const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
  FILTER_TODOS: 'filter_todos'
};

// Reducer function
function todosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };
    
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    case ACTIONS.FILTER_TODOS:
      return {
        ...state,
        filter: action.payload
      };
    
    default:
      return state;
  }
}

// Create Context
const TodoContext = React.createContext();

// Provider Component
function TodoProvider({ children }) {
  const [state, dispatch] = React.useReducer(todosReducer, {
    todos: [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Master Context', completed: false },
      { id: 3, text: 'Build Projects', completed: false }
    ],
    filter: 'all'
  });

  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook for easy access
function useTodos() {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}

// Add Todo Component
function AddTodo() {
  const [input, setInput] = React.useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: input });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

// Filter Buttons
function Filters() {
  const { state, dispatch } = useTodos();

  return (
    <div className="filters">
      <button
        className={state.filter === 'all' ? 'active' : ''}
        onClick={() => dispatch({ type: ACTIONS.FILTER_TODOS, payload: 'all' })}
      >
        All
      </button>
      <button
        className={state.filter === 'active' ? 'active' : ''}
        onClick={() => dispatch({ type: ACTIONS.FILTER_TODOS, payload: 'active' })}
      >
        Active
      </button>
      <button
        className={state.filter === 'completed' ? 'active' : ''}
        onClick={() => dispatch({ type: ACTIONS.FILTER_TODOS, payload: 'completed' })}
      >
        Completed
      </button>
    </div>
  );
}

// Todo List
function TodoList() {
  const { state, dispatch } = useTodos();

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.map(todo => (
        <div key={todo.id} className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })}
          />
          <span>{todo.text}</span>
          <button
            onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })}
            className="delete-btn"
          >
            ×
          </button>
        </div>
      ))}
      {filteredTodos.length === 0 && (
        <p className="empty">No todos to show</p>
      )}
    </div>
  );
}

// Stats
function Stats() {
  const { state } = useTodos();
  const total = state.todos.length;
  const completed = state.todos.filter(t => t.completed).length;
  const active = total - completed;

  return (
    <div className="stats">
      <div className="stat">
        <strong>{total}</strong>
        <span>Total</span>
      </div>
      <div className="stat">
        <strong>{active}</strong>
        <span>Active</span>
      </div>
      <div className="stat">
        <strong>{completed}</strong>
        <span>Completed</span>
      </div>
    </div>
  );
}

// Root App
function App() {
  return (
    <TodoProvider>
      <div className="app">
        <div className="header">
          <h2>📝 Todo App</h2>
          <p>Context + useReducer Pattern</p>
        </div>
        <Stats />
        <AddTodo />
        <Filters />
        <TodoList />
      </div>
    </TodoProvider>
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app {
  max-width: 600px;
  width: 100%;
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
  margin-bottom: 5px;
}

.header p {
  opacity: 0.9;
  font-size: 14px;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  padding: 30px;
  background: #f9fafb;
}

.stat {
  text-align: center;
  padding: 15px;
  background: white;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.stat strong {
  display: block;
  font-size: 1.8rem;
  color: #10b981;
  margin-bottom: 5px;
}

.stat span {
  color: #6b7280;
  font-size: 13px;
}

.add-form {
  padding: 30px;
  display: flex;
  gap: 10px;
}

.add-form input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
}

.add-form input:focus {
  outline: none;
  border-color: #10b981;
}

.add-form button {
  padding: 12px 24px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.add-form button:hover {
  background: #059669;
}

.filters {
  display: flex;
  gap: 10px;
  padding: 0 30px 20px;
}

.filters button {
  flex: 1;
  padding: 10px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.filters button:hover {
  border-color: #10b981;
}

.filters button.active {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

.todo-list {
  padding: 0 30px 30px;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: #f9fafb;
  border-radius: 12px;
  margin-bottom: 10px;
  transition: all 0.2s;
}

.todo-item:hover {
  background: #f3f4f6;
}

.todo-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-item span {
  flex: 1;
  color: #1f2937;
  font-size: 15px;
}

.todo-item.completed span {
  text-decoration: line-through;
  color: #9ca3af;
}

.delete-btn {
  width: 32px;
  height: 32px;
  background: #fef2f2;
  color: #ef4444;
  border: 1px solid #ef4444;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.delete-btn:hover {
  background: #ef4444;
  color: white;
}

.empty {
  text-align: center;
  color: #9ca3af;
  padding: 40px 20px;
  font-style: italic;
}

@media (prefers-color-scheme: dark) {
  .app {
    background: #1f2937;
  }

  .stats {
    background: #111827;
  }

  .stat {
    background: #1f2937;
    border-color: #374151;
  }

  .stat span {
    color: #9ca3af;
  }

  .add-form input {
    background: #1f2937;
    border-color: #374151;
    color: #f3f4f6;
  }

  .filters button {
    background: #1f2937;
    border-color: #374151;
    color: #f3f4f6;
  }

  .filters button.active {
    background: #10b981;
    color: white;
  }

  .todo-item {
    background: #111827;
  }

  .todo-item:hover {
    background: #1f2937;
  }

  .todo-item span {
    color: #f3f4f6;
  }

  .delete-btn {
    background: #7f1d1d;
    border-color: #ef4444;
    color: #fca5a5;
  }
}`}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">useReducer Pattern</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Better for complex state with multiple actions
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Custom Hooks</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Create useTodos hook for cleaner code
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Action Types</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Define constants for better maintainability
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Predictable Updates</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducer ensures consistent state updates
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Production Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Context + useReducer is a powerful pattern for complex state management. It's similar to Redux but built into React! Perfect for medium-sized apps without adding external dependencies.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
