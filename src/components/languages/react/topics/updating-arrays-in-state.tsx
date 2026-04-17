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
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  Edit,
  Sparkles,
  Table,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Filter,
  Search,
} from 'lucide-react';

export default function UpdatingArraysInState() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={List}
        category="React · Managing State"
        title="Updating Arrays in State"
        description="Master the art of working with arrays in React state. Learn immutable patterns for adding, removing, and updating array items."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Core Concept: Why Immutable Arrays */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Golden Rule: Never Mutate Arrays in State"
              description="Treat arrays as immutable to trigger React re-renders"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              In React, arrays in state should be treated as <strong>immutable</strong>. When you need to change an array, you must create a <strong>new array</strong> and pass it to the state setter. This lets React detect that something changed and trigger a re-render.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Wrong: Direct Mutation</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{`// ❌ DON'T DO THIS!`}</div>
                    <div>{`const [items, setItems] = useState([1, 2, 3]);`}</div>
                    <div>{`items.push(4); // Direct mutation`}</div>
                    <div>{`setItems(items); // React won't re-render!`}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React can't detect the change because the array reference is the same.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Right: Create New Array</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{`// ✅ DO THIS!`}</div>
                    <div>{`const [items, setItems] = useState([1, 2, 3]);`}</div>
                    <div>{`setItems([...items, 4]); // New array`}</div>
                    <div>{`// React detects change & re-renders!`}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React sees the new array reference and triggers a re-render.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Essential Array Operations */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Table className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Essential Array Operations"
              description="Common patterns for manipulating arrays in React state"
              size="lg"
            />

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">➕ Adding Items</h4>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>{`// Add to end`}</div>
                      <div>{`setItems([...items, newItem]);`}</div>
                      <div className="mt-2">{`// Add to beginning`}</div>
                      <div>{`setItems([newItem, ...items]);`}</div>
                      <div className="mt-2">{`// Add at specific index`}</div>
                      <div>{`setItems([`}</div>
                      <div>{`  ...items.slice(0, index),`}</div>
                      <div>{`  newItem,`}</div>
                      <div>{`  ...items.slice(index)`}</div>
                      <div>{`]);`}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">🗑️ Removing Items</h4>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>{`// Remove by index`}</div>
                      <div>{`setItems([`}</div>
                      <div>{`  ...items.slice(0, index),`}</div>
                      <div>{`  ...items.slice(index + 1)`}</div>
                      <div>{`]);`}</div>
                      <div className="mt-2">{`// Remove by condition`}</div>
                      <div>{`setItems(items.filter(item => `}</div>
                      <div>{`  item.id !== targetId`}</div>
                      <div>{`));`}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">✏️ Updating Items</h4>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>{`// Update by index`}</div>
                      <div>{`setItems([`}</div>
                      <div>{`  ...items.slice(0, index),`}</div>
                      <div>{`  { ...items[index], `}</div>
                      <div>{`    ...updatedData `}</div>
                      <div>{`  },`}</div>
                      <div>{`  ...items.slice(index + 1)`}</div>
                      <div>{`]);`}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">🔄 Reordering Items</h4>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>{`// Sort array`}</div>
                      <div>{`setItems([...items].sort((a, b) => `}</div>
                      <div>{`  a.name.localeCompare(b.name)`}</div>
                      <div>{`));`}</div>
                      <div className="mt-2">{`// Reverse array`}</div>
                      <div>{`setItems([...items].reverse());`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: Todo List */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Plus className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Playground: Todo List Manager"
            description="Practice adding, removing, and updating items in an array"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with Array Operations"
            description="Complete CRUD operations on a todo array using immutable patterns"
            colorTheme="cyan"
            react={`import React from 'react';
import { createRoot } from 'react-dom/client';

function TodoApp() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React arrays', completed: false },
    { id: 2, text: 'Build todo app', completed: true },
    { id: 3, text: 'Master state management', completed: false }
  ]);
  const [input, setInput] = React.useState('');

  // Add new todo (immutable)
  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  // Toggle todo completion (immutable)
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  // Delete todo (immutable)
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Clear completed todos (immutable)
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const remainingCount = todos.length - completedCount;

  return (
    <div className="todo-app">
      <h1>📝 Array Operations Todo List</h1>
      <p className="subtitle">
        See how arrays are updated immutably in React
      </p>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">
          ➕ Add Todo
        </button>
      </div>

      <div className="stats">
        <span className="stat">Total: {todos.length}</span>
        <span className="stat">Active: {remainingCount}</span>
        <span className="stat">Done: {completedCount}</span>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={'todo-item ' + (todo.completed ? 'completed' : '')}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {completedCount > 0 && (
        <button onClick={clearCompleted} className="clear-btn">
          🧹 Clear {completedCount} completed
        </button>
      )}

      <div className="code-explanation">
        <h3>🔍 Array Operations Used:</h3>
        <ul>
          <li><strong>Add:</strong> <code>[...todos, newTodo]</code></li>
          <li><strong>Update:</strong> <code>todos.map(...)</code></li>
          <li><strong>Delete:</strong> <code>todos.filter(...)</code></li>
          <li><strong>Clear:</strong> <code>todos.filter(...)</code></li>
        </ul>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(TodoApp));}`}
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
      { id: 1, text: 'Learn React arrays', completed: false },
      { id: 2, text: 'Build todo app', completed: true },
      { id: 3, text: 'Master state management', completed: false }
    ]);
    const [input, setInput] = useState('');

    const addTodo = () => {
      if (input.trim()) {
        const newTodo = {
          id: Date.now(),
          text: input.trim(),
          completed: false
        };
        setTodos([...todos, newTodo]);
        setInput('');
      }
    };

    const toggleTodo = (id) => {
      setTodos(todos.map(todo =>
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      ));
    };

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
      setTodos(todos.filter(todo => !todo.completed));
    };

    const completedCount = todos.filter(todo => todo.completed).length;
    const remainingCount = todos.length - completedCount;

    return h('div', { className: 'todo-app' },
      h('h1', null, '📝 Array Operations Todo List'),
      h('p', { className: 'subtitle' },
        'See how arrays are updated immutably in React'
      ),

      h('div', { className: 'input-section' },
        h('input', {
          type: 'text',
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && addTodo(),
          placeholder: 'What needs to be done?',
          className: 'todo-input'
        }),
        h('button', { onClick: addTodo, className: 'add-btn' }, '➕ Add Todo')
      ),

      h('div', { className: 'stats' },
        h('span', { className: 'stat' }, 'Total: ' + todos.length),
        h('span', { className: 'stat' }, 'Active: ' + remainingCount),
        h('span', { className: 'stat' }, 'Done: ' + completedCount)
      ),

      h('div', { className: 'todo-list' },
        todos.map(todo =>
          h('div', { 
            key: todo.id, 
            className: 'todo-item ' + (todo.completed ? 'completed' : '')
          },
            h('input', {
              type: 'checkbox',
              checked: todo.completed,
              onChange: () => toggleTodo(todo.id),
              className: 'checkbox'
            }),
            h('span', { className: 'todo-text' }, todo.text),
            h('button', {
              onClick: () => deleteTodo(todo.id),
              className: 'delete-btn'
            }, '🗑️')
          )
        )
      ),

      completedCount > 0 && h('button', { 
        onClick: clearCompleted, 
        className: 'clear-btn' 
      }, '🧹 Clear ' + completedCount + ' completed'),

      h('div', { className: 'code-explanation' },
        h('h3', null, '🔍 Array Operations Used:'),
        h('ul', null,
          h('li', null, h('strong', null, 'Add: '), ' ', h('code', null, '[...todos, newTodo]')),
          h('li', null, h('strong', null, 'Update: '), ' ', h('code', null, 'todos.map(...)')),
          h('li', null, h('strong', null, 'Delete: '), ' ', h('code', null, 'todos.filter(...)')),
          h('li', null, h('strong', null, 'Clear: '), ' ', h('code', null, 'todos.filter(...)'))
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

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.todo-input:focus {
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

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 15px;
  background: #f3f4f6;
  border-radius: 10px;
}

.stat {
  font-size: 14px;
  color: #4b5563;
  font-weight: 600;
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

.checkbox {
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

.clear-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-bottom: 20px;
}

.clear-btn:hover {
  transform: translateY(-2px);
}

.code-explanation {
  background: #f9fafb;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.code-explanation h3 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 16px;
}

.code-explanation ul {
  list-style: none;
  padding: 0;
}

.code-explanation li {
  margin: 8px 0;
  font-size: 14px;
  color: #4b5563;
}

.code-explanation code {
  background: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #1f2937;
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

  .todo-input {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .todo-input:focus {
    border-color: #60a5fa;
  }

  .stats {
    background: #374151;
  }

  .stat {
    color: #d1d5db;
  }

  .todo-item {
    background: #374151;
  }

  .todo-item:hover {
    background: #4b5563;
  }

  .code-explanation {
    background: #374151;
  }

  .code-explanation h3 {
    color: #60a5fa;
  }

  .code-explanation li {
    color: #d1d5db;
  }

  .code-explanation code {
    background: #4b5563;
    color: #f9fafb;
  }
}`}
          />
        </div>

        {/* Interactive Playground 2: Shopping Cart */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Playground: Shopping Cart"
            description="Advanced array operations with filtering and sorting"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Shopping Cart with Array Operations"
            description="Add, remove, update quantities, and filter products in a shopping cart"
            colorTheme="purple"
            react={`import React from 'react';
import { createRoot } from 'react-dom/client';

function ShoppingCart() {
  const [products] = React.useState([
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Book', price: 29, category: 'books' },
    { id: 3, name: 'Headphones', price: 199, category: 'electronics' },
    { id: 4, name: 'Mouse', price: 49, category: 'electronics' },
    { id: 5, name: 'Notebook', price: 19, category: 'books' }
  ]);
  
  const [cart, setCart] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('name');

  // Add product to cart (immutable)
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Update quantity (immutable)
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item (immutable)
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart (immutable)
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity (immutable)
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  // Clear cart (immutable)
  const clearCart = () => {
    setCart([]);
  };

  // Filter products (derived state)
  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  // Sort products (derived state)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  // Calculate total (derived state)
  const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="cart-app">
      <h1>🛒 Shopping Cart Array Operations</h1>
      <p className="subtitle">
        Practice advanced array operations: filtering, sorting, and updating
      </p>

      <div className="controls">
        <div className="filter-group">
          <label>Filter:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Products</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
          </select>
        </div>
        
        <div className="sort-group">
          <label>Sort:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <div className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">{'$' + product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
              >
                🛍️ Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section">
        <h2>Shopping Cart ({cart.length} items)</h2>
        
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{'$' + item.price + ' x ' + item.quantity}</p>
                  </div>
                  <div className="item-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="total">
                <strong>{'Total: $' + cartTotal}</strong>
              </div>
              <button onClick={clearCart} className="clear-cart-btn">
                🧹 Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      <div className="operations-summary">
        <h3>🔍 Array Operations Used:</h3>
        <div className="operations-grid">
          <div>
            <strong>Add/Update:</strong>
            <code>cart.map(...)</code>
          </div>
          <div>
            <strong>Add New:</strong>
            <code>[...cart, newItem]</code>
          </div>
          <div>
            <strong>Remove:</strong>
            <code>cart.filter(...)</code>
          </div>
          <div>
            <strong>Filter:</strong>
            <code>products.filter(...)</code>
          </div>
          <div>
            <strong>Sort:</strong>
            <code>[...products].sort(...)</code>
          </div>
          <div>
            <strong>Reduce:</strong>
            <code>cart.reduce(...)</code>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(ShoppingCart));`}
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

  function ShoppingCart() {
    const [products] = useState([
      { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
      { id: 2, name: 'Book', price: 29, category: 'books' },
      { id: 3, name: 'Headphones', price: 199, category: 'electronics' },
      { id: 4, name: 'Mouse', price: 49, category: 'electronics' },
      { id: 5, name: 'Notebook', price: 19, category: 'books' }
    ]);
    
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    const addToCart = (product) => {
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        setCart(cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };

    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
      if (quantity <= 0) {
        removeFromCart(id);
      } else {
        setCart(cart.map(item =>
          item.id === id ? { ...item, quantity } : item
        ));
      }
    };

    const clearCart = () => {
      setCart([]);
    };

    const filteredProducts = products.filter(product => {
      if (filter === 'all') return true;
      return product.category === filter;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

    const cartTotal = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

    return h('div', { className: 'cart-app' },
      h('h1', null, '🛒 Shopping Cart Array Operations'),
      h('p', { className: 'subtitle' },
        'Practice advanced array operations: filtering, sorting, and updating'
      ),

      h('div', { className: 'controls' },
        h('div', { className: 'filter-group' },
          h('label', null, 'Filter:'),
          h('select', { 
            value: filter, 
            onChange: (e) => setFilter(e.target.value) 
          },
            h('option', { value: 'all' }, 'All Products'),
            h('option', { value: 'electronics' }, 'Electronics'),
            h('option', { value: 'books' }, 'Books')
          )
        ),
        
        h('div', { className: 'sort-group' },
          h('label', null, 'Sort:'),
          h('select', { 
            value: sortBy, 
            onChange: (e) => setSortBy(e.target.value) 
          },
            h('option', { value: 'name' }, 'Name'),
            h('option', { value: 'price' }, 'Price')
          )
        )
      ),

      h('div', { className: 'products-section' },
        h('h2', null, 'Products'),
        h('div', { className: 'products-grid' },
          sortedProducts.map(product =>
            h('div', { key: product.id, className: 'product-card' },
              h('h3', null, product.name),
              h('p', { className: 'category' }, product.category),
              h('p', { className: 'price' }, '$' + product.price),
              h('button', { 
                onClick: () => addToCart(product),
                className: 'add-to-cart-btn'
              }, '🛍️ Add to Cart')
            )
          )
        )
      ),

      h('div', { className: 'cart-section' },
        h('h2', null, 'Shopping Cart (' + cart.length + ' items)'),
        
        cart.length === 0 ? 
          h('p', { className: 'empty-cart' }, 'Your cart is empty') :
          h('div', null,
            h('div', { className: 'cart-items' },
              cart.map(item =>
                h('div', { key: item.id, className: 'cart-item' },
                  h('div', { className: 'item-info' },
                    h('h4', null, item.name),
                    h('p', null, '$' + item.price + ' x ' + item.quantity)
                  ),
                  h('div', { className: 'item-controls' },
                    h('button', { 
                      onClick: () => updateQuantity(item.id, item.quantity - 1),
                      className: 'quantity-btn'
                    }, '-'),
                    h('span', { className: 'quantity' }, item.quantity),
                    h('button', { 
                      onClick: () => updateQuantity(item.id, item.quantity + 1),
                      className: 'quantity-btn'
                    }, '+'),
                    h('button', { 
                      onClick: () => removeFromCart(item.id),
                      className: 'remove-btn'
                    }, '🗑️')
                  )
                )
              )
            ),
            
            h('div', { className: 'cart-summary' },
              h('div', { className: 'total' },
                h('strong', null, 'Total: $' + cartTotal)
              ),
              h('button', { onClick: clearCart, className: 'clear-cart-btn' },
                '🧹 Clear Cart'
              )
            )
          )
      ),

      h('div', { className: 'operations-summary' },
        h('h3', null, '🔍 Array Operations Used:'),
        h('div', { className: 'operations-grid' },
          h('div', null,
            h('strong', null, 'Add/Update: '),
            ' ',
            h('code', null, 'cart.map(...)')
          ),
          h('div', null,
            h('strong', null, 'Add New: '),
            ' ',
            h('code', null, '[...cart, newItem]')
          ),
          h('div', null,
            h('strong', null, 'Remove: '),
            ' ',
            h('code', null, 'cart.filter(...)')
          ),
          h('div', null,
            h('strong', null, 'Filter: '),
            ' ',
            h('code', null, 'products.filter(...)')
          ),
          h('div', null,
            h('strong', null, 'Sort: '),
            ' ',
            h('code', null, '[...products].sort(...)')
          ),
          h('div', null,
            h('strong', null, 'Reduce: '),
            ' ',
            h('code', null, 'cart.reduce(...)')
          )
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ShoppingCart));
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
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.cart-app {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 1000px;
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

.controls {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-group, .sort-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-group label, .sort-group label {
  font-weight: 600;
  color: #4b5563;
}

select {
  padding: 8px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #667eea;
}

.products-section, .cart-section {
  margin-bottom: 30px;
}

h2 {
  color: #1f2937;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.product-card {
  background: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.product-card:hover {
  border-color: #667eea;
  transform: translateY(-2px);
}

.product-card h3 {
  color: #1f2937;
  margin-bottom: 5px;
}

.category {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
}

.price {
  color: #667eea;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.add-to-cart-btn:hover {
  transform: translateY(-1px);
}

.cart-items {
  background: #f9fafb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e5e7eb;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-info h4 {
  color: #1f2937;
  margin-bottom: 3px;
}

.item-info p {
  color: #6b7280;
  font-size: 14px;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.quantity-btn:hover {
  background: #f3f4f6;
}

.quantity {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #1f2937;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.remove-btn:hover {
  opacity: 1;
}

.empty-cart {
  text-align: center;
  color: #6b7280;
  font-style: italic;
  padding: 40px 20px;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f3f4f6;
  border-radius: 12px;
}

.total {
  font-size: 20px;
  color: #1f2937;
}

.clear-cart-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.clear-cart-btn:hover {
  transform: translateY(-1px);
}

.operations-summary {
  background: #f9fafb;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.operations-summary h3 {
  color: #667eea;
  margin-bottom: 20px;
}

.operations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.operations-grid div {
  font-size: 14px;
  color: #4b5563;
}

.operations-grid strong {
  color: #1f2937;
  display: block;
  margin-bottom: 4px;
}

.operations-grid code {
  background: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #1f2937;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .cart-summary {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .operations-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .cart-app {
    background: #1f2937;
    color: #f9fafb;
  }

  h1 {
    color: #60a5fa;
  }

  h2 {
    color: #f9fafb;
  }

  .subtitle {
    color: #9ca3af;
  }

  .filter-group label, .sort-group label {
    color: #d1d5db;
  }

  select {
    background: #374151;
    border-color: #4b5563;
    color: #f9fafb;
  }

  .product-card {
    background: #374151;
    border-color: #4b5563;
  }

  .product-card h3 {
    color: #f9fafb;
  }

  .category {
    color: #9ca3af;
  }

  .cart-items {
    background: #374151;
  }

  .cart-item {
    border-color: #4b5563;
  }

  .item-info h4 {
    color: #f9fafb;
  }

  .item-info p {
    color: #9ca3af;
  }

  .quantity-btn {
    background: #4b5563;
    border-color: #6b7280;
    color: #f9fafb;
  }

  .quantity-btn:hover {
    background: #6b7280;
  }

  .quantity {
    color: #f9fafb;
  }

  .empty-cart {
    color: #9ca3af;
  }

  .cart-summary {
    background: #374151;
  }

  .total {
    color: #f9fafb;
  }

  .operations-summary {
    background: #374151;
  }

  .operations-summary h3 {
    color: #60a5fa;
  }

  .operations-grid div {
    color: #d1d5db;
  }

  .operations-grid strong {
    color: #f9fafb;
  }

  .operations-grid code {
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
              title="Best Practices for Array State"
              description="Guidelines for clean and efficient array state management"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300">✅ Do's</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Always create new arrays when updating state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Use spread syntax for simple additions/removals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Use filter() for conditional removals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Use map() for updates and transformations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Create derived state instead of duplicate arrays
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
                      Never use push(), pop(), splice() on state arrays
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Don't modify array items directly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Avoid sorting the original array
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Don't store computed values in state
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Avoid deeply nested array structures
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Performance Tip</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                For large arrays, consider using useMemo() to memoize expensive operations like filtering, sorting, or reducing. This prevents unnecessary recalculations on every render.
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
              description="Essential concepts to remember about array state management"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-amber-700 dark:text-amber-300">🎯 Core Principles</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Immutability:</strong> Always create new arrays</li>
                  <li>• <strong>Spread Syntax:</strong> Use ... for simple operations</li>
                  <li>• <strong>Array Methods:</strong> filter(), map(), reduce()</li>
                  <li>• <strong>Derived State:</strong> Compute values when needed</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-amber-700 dark:text-amber-300">🔧 Common Patterns</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Add:</strong> <code>[...items, newItem]</code></li>
                  <li>• <strong>Remove:</strong> <code>items.filter(item =&gt; item.id !== id)</code></li>
                  <li>• <strong>Update:</strong> <code>items.map(item =&gt; item.id === id ? {'{'}...item, ...updates{'}'} : item)</code></li>
                  <li>• <strong>Sort:</strong> <code>[...items].sort((a, b) =&gt; a.value - b.value)</code></li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-100 dark:bg-amber-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700">
              <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Remember</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Array state management is fundamental to React development. Master these immutable patterns to build predictable, performant applications that scale well.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
