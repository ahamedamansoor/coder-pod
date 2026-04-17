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
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Ban,
  TrendingUp,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

export default function YouMightNotNeedAnEffect() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Ban}
        category="React · Escape Hatches"
        title="You Might Not Need an Effect"
        description="Learn when to avoid Effects. Many common use cases don't need Effects at all, and removing unnecessary Effects makes your code easier to understand."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Why Avoid Unnecessary Effects */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Why Avoid Unnecessary Effects?"
              description="Understanding the problems with overusing Effects"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Effects are an <strong>"escape hatch"</strong> from the React paradigm. When you write an Effect, you're telling React to run your code <strong>after</strong> rendering. But many operations don't need this!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Slower</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effects run after rendering, causing additional render cycles and delays.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">More Complex</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Managing dependencies and cleanup adds complexity and potential bugs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500" />
                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300">Harder to Read</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Data flow becomes less clear when logic is split across Effects.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">The Better Way</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                If you can calculate something during render, you don't need an Effect. If you can handle it in an event handler, you don't need an Effect!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Pattern 1: Computing Derived State */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<TrendingUp className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Pattern 1: Computing During Render"
              description="No Effect needed for derived state"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Unnecessary Effect</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [items, setItems] = useState([]);</div>
                    <div>const [total, setTotal] = useState(0);</div>
                    <div className="mt-2"></div>
                    <div className="text-red-600 dark:text-red-400">// Don't do this! ❌</div>
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">setTotal(items.length);</div>
                    <div>{'}'}, [items]);</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  Causes extra renders and complexity
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Calculate During Render</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [items, setItems] = useState([]);</div>
                    <div className="mt-2"></div>
                    <div className="text-green-600 dark:text-green-400">// Much better! ✅</div>
                    <div>const total = items.length;</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Simple, fast, and clear!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example: Todo List */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example: Todo List (No Effect Needed)"
            description="Computing totals directly during render"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with Derived State"
            description="No Effect needed - just calculate during render!"
            colorTheme="purple"
            react={`function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build a project', done: false },
    { id: 3, text: 'Master Effects', done: false }
  ]);
  const [newTodo, setNewTodo] = React.useState('');

  // ✅ Calculate during render - no Effect needed!
  const totalTodos = todos.length;
  const completedTodos = todos.filter(t => t.done).length;
  const remainingTodos = totalTodos - completedTodos;

  function addTodo() {
    if (!newTodo.trim()) return;
    setTodos([...todos, { 
      id: Date.now(), 
      text: newTodo, 
      done: false 
    }]);
    setNewTodo('');
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  return (
    <div className="container">
      <h1>✅ Todo List</h1>
      
      <div className="stats">
        <div className="stat">
          <div className="stat-value">{totalTodos}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat">
          <div className="stat-value">{completedTodos}</div>
          <div className="stat-label">Done</div>
        </div>
        <div className="stat">
          <div className="stat-value">{remainingTodos}</div>
          <div className="stat-label">Remaining</div>
        </div>
      </div>

      <div className="add-todo">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo..."
          className="input"
        />
        <button onClick={addTodo} className="btn-add">
          Add
        </button>
      </div>

      <div className="todos">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
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
        💡 No useEffect needed! Stats calculated during render.
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
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function TodoList() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React', done: true },
      { id: 2, text: 'Build a project', done: false },
      { id: 3, text: 'Master Effects', done: false }
    ]);
    const [newTodo, setNewTodo] = useState('');

    const totalTodos = todos.length;
    const completedTodos = todos.filter(t => t.done).length;
    const remainingTodos = totalTodos - completedTodos;

    function addTodo() {
      if (!newTodo.trim()) return;
      setTodos([...todos, { 
        id: Date.now(), 
        text: newTodo, 
        done: false 
      }]);
      setNewTodo('');
    }

    function toggleTodo(id) {
      setTodos(todos.map(t => 
        t.id === id ? { ...t, done: !t.done } : t
      ));
    }

    return h('div', { className: 'container' },
      h('h1', null, '✅ Todo List'),
      
      h('div', { className: 'stats' },
        h('div', { className: 'stat' },
          h('div', { className: 'stat-value' }, totalTodos),
          h('div', { className: 'stat-label' }, 'Total')
        ),
        h('div', { className: 'stat' },
          h('div', { className: 'stat-value' }, completedTodos),
          h('div', { className: 'stat-label' }, 'Done')
        ),
        h('div', { className: 'stat' },
          h('div', { className: 'stat-value' }, remainingTodos),
          h('div', { className: 'stat-label' }, 'Remaining')
        )
      ),

      h('div', { className: 'add-todo' },
        h('input', {
          value: newTodo,
          onChange: (e) => setNewTodo(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && addTodo(),
          placeholder: 'Add a todo...',
          className: 'input'
        }),
        h('button', {
          onClick: addTodo,
          className: 'btn-add'
        }, 'Add')
      ),

      h('div', { className: 'todos' },
        todos.map(todo =>
          h('div', { key: todo.id, className: 'todo-item' },
            h('input', {
              type: 'checkbox',
              checked: todo.done,
              onChange: () => toggleTodo(todo.id)
            }),
            h('span', { 
              className: todo.done ? 'done' : '' 
            }, todo.text)
          )
        )
      ),

      h('div', { className: 'info' },
        '💡 No useEffect needed! Stats calculated during render.'
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
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
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
  color: #a855f7;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.stat {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.stat-value {
  font-size: 36px;
  font-weight: 900;
  color: #a855f7;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.btn-add {
  padding: 12px 24px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
}

.todos {
  max-height: 300px;
  overflow-y: auto;
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

.todo-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-item span {
  flex: 1;
  font-size: 15px;
  color: #1f2937;
  transition: all 0.3s ease;
}

.todo-item span.done {
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
    background: linear-gradient(135deg, #581c87 0%, #831843 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #c084fc;
  }

  .stat {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
  }

  .stat-value {
    color: #c084fc;
  }

  .stat-label {
    color: #9ca3af;
  }

  .input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #c084fc;
    box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.1);
  }

  .todo-item {
    background: #374151;
  }

  .todo-item:hover {
    background: #4b5563;
  }

  .todo-item span {
    color: #e5e7eb;
  }

  .todo-item span.done {
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

        {/* Pattern 2: Event Handlers */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Pattern 2: Handling User Interactions"
              description="Use event handlers, not Effects"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Wrong: Effect</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-red-600 dark:text-red-400">// Don't do this! ❌</div>
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">if (isSubmitted) {'{'}</div>
                    <div className="pl-4">saveToDatabase();</div>
                    <div className="pl-2">{'}'}</div>
                    <div>{'}'}, [isSubmitted]);</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Right: Event Handler</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-green-600 dark:text-green-400">// Much better! ✅</div>
                    <div>function handleSubmit() {'{'}</div>
                    <div className="pl-2">saveToDatabase();</div>
                    <div className="pl-2">setIsSubmitted(true);</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Key Principle</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                If something happens because the user did something specific (clicked, typed, etc.), put it in an event handler. Don't use an Effect!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Example: Form Submission */}
        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Form Submission (Event Handler)"
            description="Handle user actions in event handlers"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Contact Form with Event Handlers"
            description="No Effect needed - handle in onClick!"
            colorTheme="green"
            react={`function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('');

  // ✅ Event handler - not an Effect!
  function handleSubmit(e) {
    e.preventDefault();
    
    // Simulate sending
    setStatus('Sending...');
    
    setTimeout(() => {
      setStatus('Message sent! ✅');
      setName('');
      setEmail('');
      setMessage('');
      
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  }

  return (
    <div className="container">
      <h1>📧 Contact Form</h1>
      
      {status && (
        <div className="status-message">
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="textarea"
            rows="4"
          />
        </div>

        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>

      <div className="info">
        💡 Using event handler, not useEffect!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactForm />);`}
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

  function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      
      setStatus('Sending...');
      
      setTimeout(() => {
        setStatus('Message sent! ✅');
        setName('');
        setEmail('');
        setMessage('');
        
        setTimeout(() => setStatus(''), 3000);
      }, 1500);
    }

    return h('div', { className: 'container' },
      h('h1', null, '📧 Contact Form'),
      
      status && h('div', { className: 'status-message' }, status),

      h('form', { onSubmit: handleSubmit },
        h('div', { className: 'form-group' },
          h('label', null, 'Name'),
          h('input', {
            type: 'text',
            value: name,
            onChange: (e) => setName(e.target.value),
            required: true,
            className: 'input'
          })
        ),

        h('div', { className: 'form-group' },
          h('label', null, 'Email'),
          h('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            className: 'input'
          })
        ),

        h('div', { className: 'form-group' },
          h('label', null, 'Message'),
          h('textarea', {
            value: message,
            onChange: (e) => setMessage(e.target.value),
            required: true,
            className: 'textarea',
            rows: 4
          })
        ),

        h('button', {
          type: 'submit',
          className: 'btn-submit'
        }, 'Send Message')
      ),

      h('div', { className: 'info' },
        '💡 Using event handler, not useEffect!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ContactForm));
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
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.status-message {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #10b981;
  text-align: center;
  font-weight: 600;
  color: #065f46;
  margin-bottom: 20px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.input,
.textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.textarea {
  resize: vertical;
  min-height: 100px;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
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

  .status-message {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
    color: #d1fae5;
  }

  label {
    color: #e5e7eb;
  }

  .input,
  .textarea {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus,
  .textarea:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* When DO You Need Effects */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="When DO You Need Effects?"
              description="Valid use cases for useEffect"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Effects are still necessary for synchronizing with <strong>external systems</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Network Requests</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Fetching data when component mounts or prop changes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">✅ Browser APIs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Working with timers, geolocation, or other browser features.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">✅ Third-Party Libraries</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Integrating with non-React libraries like charts or maps.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">✅ Subscriptions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  WebSockets, event listeners, or real-time connections.
                </p>
              </div>
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
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Don't: Transform Data</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If you can calculate it during render, don't use an Effect. Just compute it!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Don't: User Events</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If it's triggered by a specific user action, use an event handler instead.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Do: External Systems</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use Effects to synchronize with systems outside React (APIs, timers, subscriptions).
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Think First</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Before adding useEffect, ask: "Can I do this without an Effect?"
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">The Golden Rule</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Effects should be used as a last resort. Most of the time, there's a simpler way that's also faster and easier to understand!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
