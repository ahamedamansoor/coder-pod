'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  List,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  Edit,
  Sparkles,
  Filter,
  Zap,
  Table,
  RefreshCw,
} from 'lucide-react';

export default function UpdatingArraysInState() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={List}
        category="React · Managing State"
        title="Updating Arrays in State"
        description="Learn how to properly update arrays in React state. Master adding, removing, replacing, and reordering items using immutable methods."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Don't Mutate Arrays */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Arrays Are Mutable, But Treat Them as Immutable"
              description="Never change arrays directly in state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Arrays are mutable in JavaScript, but you should treat them as <strong>immutable</strong> when storing them in state. Just like with objects, when you want to update an array in state, you need to create a new array and pass it to the state setter.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Don't Mutate</h4>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr.push()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr.unshift()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr.pop()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr.splice()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr[i] = value</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr.reverse()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-red-600 dark:text-red-400">arr.sort()</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  These methods change the original array
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Use These Instead</h4>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">[...arr, item]</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">[item, ...arr]</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">arr.slice(0, -1)</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">arr.filter()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">arr.map()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">[...arr].reverse()</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">[...arr].sort()</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  These create new arrays
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Why Avoid Mutation?</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                Mutating arrays directly won't trigger re-renders. React needs a new array reference to detect changes!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Adding to Arrays */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Plus className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Adding Items to an Array"
              description="Add items at the beginning, end, or specific position"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              To add an item to an array, use the spread operator <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">...</code> or methods like <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">concat()</code> that return new arrays.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Add to End</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    setArray([...array, newItem])
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Spreads existing items, then adds new item at the end
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Add to Beginning</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    setArray([newItem, ...array])
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Puts new item first, then spreads existing items
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Insert at Specific Position</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>setArray([</div>
                    <div className="pl-4">...array.slice(0, index),</div>
                    <div className="pl-4">newItem,</div>
                    <div className="pl-4">...array.slice(index)</div>
                    <div>])</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Uses slice to split array and insert item at index
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Removing from Arrays */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Trash2 className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Removing Items from an Array"
              description="Filter out items you don't want"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The easiest way to remove an item is with the <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">filter()</code> method, which creates a new array with only the items you want to keep.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">Remove by ID</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`// Remove item with specific ID
setItems(items.filter(item => item.id !== idToRemove));

// Remove by index
setItems(items.filter((item, index) => index !== indexToRemove));`}</code>
                </pre>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-red-700 dark:text-red-400">How it works:</strong> Filter creates a new array containing only items where the condition is <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">true</code>. Items you want to remove return <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">false</code>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Todo List Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Todo List"
            description="Add, remove, and toggle todos using immutable methods"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with Array Operations"
            description="Add new todos and remove them with filter"
            colorTheme="cyan"
            react={`function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build an app', done: false },
    { id: 3, text: 'Deploy project', done: false }
  ]);
  const [inputText, setInputText] = React.useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputText, done: false }
      ]);
      setInputText('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div className="container">
      <h1>✅ Todo List</h1>
      
      <div className="add-section">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo} className="btn-add">
          + Add
        </button>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-label">Total:</span>
          <span className="stat-value">{todos.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Done:</span>
          <span className="stat-value done">{todos.filter(t => t.done).length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Todo:</span>
          <span className="stat-value todo">{todos.filter(t => !t.done).length}</span>
        </div>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={'todo-item' + (todo.done ? ' done' : '')}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="btn-delete"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="empty">
          🎉 All done! Add a new todo to get started.
        </div>
      )}
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
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function TodoList() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React', done: true },
      { id: 2, text: 'Build an app', done: false },
      { id: 3, text: 'Deploy project', done: false }
    ]);
    const [inputText, setInputText] = useState('');

    const addTodo = () => {
      if (inputText.trim()) {
        setTodos([
          ...todos,
          { id: Date.now(), text: inputText, done: false }
        ]);
        setInputText('');
      }
    };

    const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ));
    };

    return h('div', { className: 'container' },
      h('h1', null, '✅ Todo List'),
      
      h('div', { className: 'add-section' },
        h('input', {
          value: inputText,
          onChange: (e) => setInputText(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && addTodo(),
          placeholder: 'Add a new todo...'
        }),
        h('button', {
          onClick: addTodo,
          className: 'btn-add'
        }, '+ Add')
      ),

      h('div', { className: 'stats' },
        h('div', { className: 'stat' },
          h('span', { className: 'stat-label' }, 'Total:'),
          h('span', { className: 'stat-value' }, todos.length)
        ),
        h('div', { className: 'stat' },
          h('span', { className: 'stat-label' }, 'Done:'),
          h('span', { className: 'stat-value done' }, todos.filter(t => t.done).length)
        ),
        h('div', { className: 'stat' },
          h('span', { className: 'stat-label' }, 'Todo:'),
          h('span', { className: 'stat-value todo' }, todos.filter(t => !t.done).length)
        )
      ),

      h('div', { className: 'todo-list' },
        todos.map(todo =>
          h('div', {
            key: todo.id,
            className: 'todo-item' + (todo.done ? ' done' : '')
          },
            h('input', {
              type: 'checkbox',
              checked: todo.done,
              onChange: () => toggleTodo(todo.id)
            }),
            h('span', { className: 'todo-text' }, todo.text),
            h('button', {
              onClick: () => removeTodo(todo.id),
              className: 'btn-delete'
            }, '🗑️')
          )
        )
      ),

      todos.length === 0 && h('div', { className: 'empty' },
        '🎉 All done! Add a new todo to get started.'
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
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.add-section {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.add-section input {
  flex: 1;
  padding: 14px 18px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.add-section input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.btn-add {
  padding: 14px 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 25px;
}

.stat {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid #bae6fd;
}

.stat-label {
  display: block;
  font-size: 12px;
  color: #0891b2;
  font-weight: 600;
  margin-bottom: 5px;
}

.stat-value {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #0c4a6e;
}

.stat-value.done {
  color: #059669;
}

.stat-value.todo {
  color: #d97706;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.todo-item:hover {
  border-color: #667eea;
  transform: translateX(4px);
}

.todo-item.done {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #10b981;
}

.todo-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #10b981;
}

.todo-text {
  flex: 1;
  font-size: 15px;
  color: #1f2937;
  font-weight: 500;
}

.todo-item.done .todo-text {
  text-decoration: line-through;
  color: #6b7280;
}

.btn-delete {
  padding: 8px 12px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-delete:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
}

.empty {
  text-align: center;
  padding: 40px;
  color: #9ca3af;
  font-size: 16px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 16px;
  border: 2px dashed #f59e0b;
  font-weight: 600;
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

  .add-section input {
    background: #374151;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .add-section input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .stat {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .stat-label {
    color: #93c5fd;
  }

  .stat-value {
    color: #dbeafe;
  }

  .stat-value.done {
    color: #6ee7b7;
  }

  .stat-value.todo {
    color: #fcd34d;
  }

  .todo-item {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    border-color: #6b7280;
  }

  .todo-item:hover {
    border-color: #60a5fa;
  }

  .todo-item.done {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .todo-text {
    color: #e5e7eb;
  }

  .todo-item.done .todo-text {
    color: #9ca3af;
  }

  .empty {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Replacing Items */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Edit className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Replacing Items in an Array"
              description="Update specific items using map"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              To replace items in an array, use <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">map()</code>. It creates a new array where you can conditionally replace items.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Update Item by ID</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`setItems(items.map(item => {
  if (item.id === targetId) {
    // Return updated item
    return { ...item, name: 'New Name' };
  } else {
    // Return unchanged item
    return item;
  }
}));

// Shorter version with ternary:
setItems(items.map(item =>
  item.id === targetId
    ? { ...item, name: 'New Name' }
    : item
));`}</code>
                </pre>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-purple-700 dark:text-purple-300">How it works:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 ml-4 space-y-1">
                    <li>• Map creates a new array</li>
                    <li>• For matching item: return updated copy with spread</li>
                    <li>• For other items: return unchanged</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Operations Reference */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Table className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Quick Reference Table"
              description="Common array operations at a glance"
              size="lg"
            />

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-indigo-100 dark:bg-indigo-950">
                    <th className="p-3 text-left font-bold text-indigo-900 dark:text-indigo-100">Operation</th>
                    <th className="p-3 text-left font-bold text-indigo-900 dark:text-indigo-100">Avoid</th>
                    <th className="p-3 text-left font-bold text-indigo-900 dark:text-indigo-100">Prefer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-200 dark:divide-indigo-800">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Add to end</td>
                    <td className="p-3">
                      <code className="text-xs bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        arr.push(item)
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        [...arr, item]
                      </code>
                    </td>
                  </tr>
                  <tr className="bg-indigo-50 dark:bg-indigo-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Add to start</td>
                    <td className="p-3">
                      <code className="text-xs bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        arr.unshift(item)
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        [item, ...arr]
                      </code>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Remove</td>
                    <td className="p-3">
                      <code className="text-xs bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        arr.splice()
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        arr.filter()
                      </code>
                    </td>
                  </tr>
                  <tr className="bg-indigo-50 dark:bg-indigo-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Replace</td>
                    <td className="p-3">
                      <code className="text-xs bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        arr[i] = x
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        arr.map()
                      </code>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Sort</td>
                    <td className="p-3">
                      <code className="text-xs bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        arr.sort()
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        [...arr].sort()
                      </code>
                    </td>
                  </tr>
                  <tr className="bg-indigo-50 dark:bg-indigo-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Reverse</td>
                    <td className="p-3">
                      <code className="text-xs bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        arr.reverse()
                      </code>
                    </td>
                    <td className="p-3">
                      <code className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        [...arr].reverse()
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Pattern to Remember</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                If a method mutates the array, copy it first with <code className="px-1.5 py-0.5 bg-white dark:bg-indigo-900 rounded text-xs">[...arr]</code>, then call the method on the copy!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Use Immer */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Simplify with Immer"
              description="Write code that looks like mutation but stays immutable"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              If updating arrays feels tedious, use <strong>Immer</strong>! It lets you write code that looks like mutation, but it creates copies behind the scenes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                    Without Immer
                  </Badge>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs space-y-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-gray-500 dark:text-gray-400">// Add</div>
                    <div>[...arr, item]</div>
                    <div className="mt-2 text-gray-500 dark:text-gray-400">// Remove</div>
                    <div>arr.filter(a =&gt; a.id !== id)</div>
                    <div className="mt-2 text-gray-500 dark:text-gray-400">// Update</div>
                    <div>arr.map(a =&gt; a.id === id</div>
                    <div className="pl-2">? {'{'} ...a, done: true {'}'}</div>
                    <div className="pl-2">: a)</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700">
                    With Immer
                  </Badge>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs space-y-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-gray-500 dark:text-gray-400">// Add</div>
                    <div>draft.push(item)</div>
                    <div className="mt-2 text-gray-500 dark:text-gray-400">// Remove</div>
                    <div>draft.splice(index, 1)</div>
                    <div className="mt-2 text-gray-500 dark:text-gray-400">// Update</div>
                    <div>const item = draft.find(</div>
                    <div className="pl-2">a =&gt; a.id === id</div>
                    <div>)</div>
                    <div>item.done = true</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">Using Immer with Arrays</h4>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border-2 border-emerald-200 dark:border-emerald-700 font-mono text-xs mb-3">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>import {'{'} useImmer {'}'} from 'use-immer';</div>
                  <div className="mt-2"></div>
                  <div>const [items, updateItems] = useImmer([...]);</div>
                  <div className="mt-2"></div>
                  <div className="text-green-600 dark:text-green-400">// Just mutate the draft!</div>
                  <div>updateItems(draft =&gt; {'{'}</div>
                  <div className="pl-2">draft.push(newItem);</div>
                  <div className="pl-2">draft[0].done = true;</div>
                  <div className="pl-2">draft.splice(1, 1);</div>
                  <div>{'}'});</div>
                </div>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                Immer handles all the copying for you - write simple, readable code!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Never Mutate Arrays</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avoid <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">push</code>, <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">splice</code>, <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">sort</code>, etc. directly on state arrays.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Non-Mutating Methods</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prefer <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">filter</code>, <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">map</code>, <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">...</code> spread that return new arrays.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Copy Before Mutating</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For methods like <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">sort()</code>, copy first: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">[...arr].sort()</code>
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Consider Immer</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For complex updates, use Immer to write simpler, more readable code.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Think Immutably</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Treating arrays as immutable is essential in React. It ensures React detects changes and re-renders your UI correctly!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
