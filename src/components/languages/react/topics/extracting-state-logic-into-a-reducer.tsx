'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Box,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Code2,
  Sparkles,
  GitBranch,
  Zap,
  Layers,
  RefreshCw,
  FileCode,
} from 'lucide-react';

export default function ExtractingStateLogicIntoAReducer() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Box}
        category="React · Managing State"
        title="Extracting State Logic into a Reducer"
        description="Learn how to consolidate state update logic using the useReducer hook. Make your components cleaner and easier to understand."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Problem */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Why Use a Reducer?"
              description="When useState becomes too complex"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              As your components grow, it can get harder to see <strong>all the different ways</strong> in which a component's state gets updated. For example, imagine a component with many event handlers that update state in different ways.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <h4 className="font-bold mb-4 text-orange-700 dark:text-orange-300">❌ Problem: Scattered State Updates</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`function TaskList() {
  const [tasks, setTasks] = useState([]);
  
  function handleAddTask(text) {
    setTasks([...tasks, { id: nextId++, text, done: false }]);
  }
  
  function handleChangeTask(task) {
    setTasks(tasks.map(t => t.id === task.id ? task : t));
  }
  
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(t => t.id !== taskId));
  }
  
  // State logic is scattered across multiple handlers!
}`}</code>
                </pre>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-700 dark:text-orange-400">Issues:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 ml-4 space-y-1">
                  <li>• State update logic spread across many event handlers</li>
                  <li>• Hard to see all possible state changes at a glance</li>
                  <li>• Each handler needs to know the current state structure</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Solution: Reducers</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Reducers let you consolidate all state update logic in one place outside your component, making it easier to read and test!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* What is a Reducer */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What is a Reducer?"
              description="A function that takes state and action, returns new state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A <strong>reducer</strong> is a function that takes the current state and an action, and returns the next state. It's called a "reducer" because it <em>reduces</em> many possible state changes to a single state value.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Reducer Pattern</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Input: Current State</h5>
                    <code className="text-sm">state = {'{'} tasks: [...] {'}'}</code>
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
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Input: Action</h5>
                    <code className="text-sm">action = {'{'} type: 'added', text: 'Learn' {'}'}</code>
                    <p className="text-xs text-muted-foreground mt-2">Describes what happened</p>
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
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Output: New State</h5>
                    <code className="text-sm">return {'{'} tasks: [...tasks, newTask] {'}'}</code>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-2">✅ Updated state</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-xl">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Basic Reducer Structure</h4>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>function tasksReducer(state, action) {'{'}</div>
                  <div className="pl-4 text-green-600 dark:text-green-400">// Look at action.type</div>
                  <div className="pl-4">switch (action.type) {'{'}</div>
                  <div className="pl-8">case 'added':</div>
                  <div className="pl-12">return [...state, newTask];</div>
                  <div className="pl-8">case 'deleted':</div>
                  <div className="pl-12">return state.filter(...);</div>
                  <div className="pl-8">default:</div>
                  <div className="pl-12">return state;</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Converting useState to useReducer */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Converting useState to useReducer"
              description="Step by step migration"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Converting from <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">useState</code> to <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">useReducer</code> involves three steps:
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Dispatch Actions Instead of Setting State</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge className="mb-2 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700">
                      Before (useState)
                    </Badge>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>setTasks([...tasks,</div>
                        <div className="pl-2">{'{'} id: 1, text: 'Learn' {'}'}]);</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Badge className="mb-2 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                      After (useReducer)
                    </Badge>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>dispatch({'{'}</div>
                        <div className="pl-2">type: 'added',</div>
                        <div className="pl-2">text: 'Learn'</div>
                        <div>{'}'});</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  Instead of setting state directly, you <strong>dispatch actions</strong> that describe what the user did.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Write a Reducer Function</h4>
                </div>
                
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function tasksReducer(tasks, action) {'{'}</div>
                    <div className="pl-2">switch (action.type) {'{'}</div>
                    <div className="pl-4">case 'added': {'{'}</div>
                    <div className="pl-6">return [...tasks, {'{'}</div>
                    <div className="pl-8">id: action.id,</div>
                    <div className="pl-8">text: action.text,</div>
                    <div className="pl-8">done: false</div>
                    <div className="pl-6">{'}'}];</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="pl-4">case 'deleted': {'{'}</div>
                    <div className="pl-6">return tasks.filter(t =&gt; t.id !== action.id);</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="pl-4">default:</div>
                    <div className="pl-6">throw Error('Unknown: ' + action.type);</div>
                    <div className="pl-2">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The reducer takes the current state and an action, returns the next state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Use the Reducer in Your Component</h4>
                </div>
                
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>import {'{'} useReducer {'}'} from 'react';</div>
                    <div className="mt-2"></div>
                    <div>const [tasks, dispatch] = useReducer(</div>
                    <div className="pl-2">tasksReducer,</div>
                    <div className="pl-2">initialTasks</div>
                    <div>);</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Replace <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">useState</code> with <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">useReducer</code> and pass your reducer function.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Complete Example with useReducer"
            description="See how reducer consolidates all state logic"
            size="lg"
          />

          <FrontendCodePreview
            title="Task Manager with useReducer"
            description="Add, toggle, and delete tasks using a reducer"
            colorTheme="cyan"
            react={`function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t =>
        t.id === action.task.id ? action.task : t
      );
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function TaskApp() {
  const [tasks, dispatch] = React.useReducer(tasksReducer, [
    { id: 1, text: 'Learn useReducer', done: false },
    { id: 2, text: 'Build a project', done: false }
  ]);
  const [text, setText] = React.useState('');

  function handleAddTask() {
    if (text.trim()) {
      dispatch({
        type: 'added',
        id: Date.now(),
        text: text
      });
      setText('');
    }
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: 'deleted',
      id: id
    });
  }

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>
      
      <div className="add-section">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask} className="btn-add">
          ➕ Add
        </button>
      </div>

      <div className="stats">
        <div className="stat total">
          <span className="label">Total</span>
          <span className="value">{tasks.length}</span>
        </div>
        <div className="stat done">
          <span className="label">Done</span>
          <span className="value">{tasks.filter(t => t.done).length}</span>
        </div>
        <div className="stat pending">
          <span className="label">Pending</span>
          <span className="value">{tasks.filter(t => !t.done).length}</span>
        </div>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={\`task \${task.done ? 'done' : ''}\`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) => handleChangeTask({
                ...task,
                done: e.target.checked
              })}
            />
            <span className="text">{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="btn-delete"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="info">
        💡 All state logic is in the reducer function!
      </div>
    </div>
  );
}

ReactDOM.render(<TaskApp />, document.getElementById('root'));`}
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

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      case 'changed': {
        return tasks.map(t =>
          t.id === action.task.id ? action.task : t
        );
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, [
      { id: 1, text: 'Learn useReducer', done: false },
      { id: 2, text: 'Build a project', done: false }
    ]);
    const [text, setText] = useState('');

    function handleAddTask() {
      if (text.trim()) {
        dispatch({
          type: 'added',
          id: Date.now(),
          text: text
        });
        setText('');
      }
    }

    function handleChangeTask(task) {
      dispatch({
        type: 'changed',
        task: task
      });
    }

    function handleDeleteTask(id) {
      dispatch({
        type: 'deleted',
        id: id
      });
    }

    return h('div', { className: 'container' },
      h('h1', null, '📝 Task Manager'),
      
      h('div', { className: 'add-section' },
        h('input', {
          value: text,
          onChange: (e) => setText(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && handleAddTask(),
          placeholder: 'Add a new task...'
        }),
        h('button', {
          onClick: handleAddTask,
          className: 'btn-add'
        }, '➕ Add')
      ),

      h('div', { className: 'stats' },
        h('div', { className: 'stat total' },
          h('span', { className: 'label' }, 'Total'),
          h('span', { className: 'value' }, tasks.length)
        ),
        h('div', { className: 'stat done' },
          h('span', { className: 'label' }, 'Done'),
          h('span', { className: 'value' }, tasks.filter(t => t.done).length)
        ),
        h('div', { className: 'stat pending' },
          h('span', { className: 'label' }, 'Pending'),
          h('span', { className: 'value' }, tasks.filter(t => !t.done).length)
        )
      ),

      h('div', { className: 'task-list' },
        tasks.map(task =>
          h('div', {
            key: task.id,
            className: 'task' + (task.done ? ' done' : '')
          },
            h('input', {
              type: 'checkbox',
              checked: task.done,
              onChange: (e) => handleChangeTask({
                ...task,
                done: e.target.checked
              })
            }),
            h('span', { className: 'text' }, task.text),
            h('button', {
              onClick: () => handleDeleteTask(task.id),
              className: 'btn-delete'
            }, '🗑️')
          )
        )
      ),

      h('div', { className: 'info' },
        '💡 All state logic is in the reducer function!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(TaskApp));
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
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid;
}

.stat.total {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-color: #3b82f6;
}

.stat.done {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #10b981;
}

.stat.pending {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  border-color: #f59e0b;
}

.stat .label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
}

.stat.total .label {
  color: #1e40af;
}

.stat.done .label {
  color: #065f46;
}

.stat.pending .label {
  color: #92400e;
}

.stat .value {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.stat.total .value {
  color: #1e3a8a;
}

.stat.done .value {
  color: #047857;
}

.stat.pending .value {
  color: #b45309;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.task {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.task:hover {
  border-color: #667eea;
  transform: translateX(4px);
}

.task.done {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-color: #10b981;
}

.task input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #10b981;
}

.task .text {
  flex: 1;
  font-size: 15px;
  color: #1f2937;
  font-weight: 500;
}

.task.done .text {
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

  .stat.total {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .stat.done {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .stat.pending {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
  }

  .stat.total .label {
    color: #93c5fd;
  }

  .stat.done .label {
    color: #6ee7b7;
  }

  .stat.pending .label {
    color: #fcd34d;
  }

  .stat.total .value {
    color: #dbeafe;
  }

  .stat.done .value {
    color: #d1fae5;
  }

  .stat.pending .value {
    color: #fef3c7;
  }

  .task {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    border-color: #6b7280;
  }

  .task:hover {
    border-color: #60a5fa;
  }

  .task.done {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .task .text {
    color: #e5e7eb;
  }

  .task.done .text {
    color: #9ca3af;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Reducer Best Practices */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Writing Good Reducers"
              description="Best practices for reducer functions"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">✅ Do This</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Pure functions:</strong> No side effects, same input → same output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Immutable updates:</strong> Return new state, don't mutate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Descriptive action types:</strong> Use clear names like 'task/added'</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong>Handle all cases:</strong> Include a default case</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid This</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Mutations:</strong> Don't modify state directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Side effects:</strong> No API calls or timers in reducer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Complex logic:</strong> Keep reducers focused and simple</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Missing default:</strong> Always handle unknown actions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">💡 Pro Tips</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Each action should describe a single event</strong> from the user's perspective</li>
                <li>• <strong>Reducers must be pure</strong> - they calculate the next state from current state and action</li>
                <li>• <strong>Move reducer outside component</strong> for better testing and reusability</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* useState vs useReducer */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<FileCode className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="useState vs useReducer"
              description="When to use each"
              size="lg"
            />

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-950">
                    <th className="p-3 text-left font-bold text-blue-900 dark:text-blue-100">Aspect</th>
                    <th className="p-3 text-left font-bold text-blue-900 dark:text-blue-100">useState</th>
                    <th className="p-3 text-left font-bold text-blue-900 dark:text-blue-100">useReducer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-200 dark:divide-blue-800">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Code size</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Less code upfront</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">More code, but organized</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Readability</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Good for simple updates</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Better for complex logic</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Debugging</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Harder to trace bugs</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Console.log in reducer</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Testing</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Need to test component</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Test reducer separately</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Use case</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Simple, independent state</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">Multiple related updates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Use useState when:</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• State is simple (single value)</li>
                  <li>• Updates are independent</li>
                  <li>• Component is small</li>
                  <li>• Updates are straightforward</li>
                </ul>
              </div>

              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Use useReducer when:</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• State has complex structure</li>
                  <li>• Multiple related state updates</li>
                  <li>• Next state depends on previous</li>
                  <li>• Want to test logic separately</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Consolidates Logic</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All state update logic lives in one place - the reducer function.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Describes Actions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dispatch actions that describe <strong>what happened</strong>, not how to update state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Must Be Pure</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reducers must be pure functions - no side effects, no mutations.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Easier to Test</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Test reducers independently by passing state and actions.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">When to Use Reducers</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Use reducers when you have complex state logic with multiple related updates. They make your code more maintainable and testable!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
