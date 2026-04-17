'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  ListOrdered,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Repeat,
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
  GitBranch,
  Clock,
  Code2,
} from 'lucide-react';

export default function QueueingASeriesOfStateUpdates() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ListOrdered}
        category="React · State Management"
        title="State Update Queuing in JSX Components"
        description="Master React's state update queue system. Learn updater functions, batching, and best practices for JSX components."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Understanding State Snapshots */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="State Acts Like a Snapshot"
              description="Why multiple setState calls can be tricky"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In JSX components, state variables don't update immediately. Each render gets a <strong>snapshot</strong> of the state. When you call <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">setState</code> multiple times, you might be working with outdated values.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Problem with Snapshots</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [count, setCount] = useState(0);</div>
                    <div className="mt-2"></div>
                    <div>const handleClick = () {'=>'} {'{'}</div>
                    <div className="pl-2">setCount(count + 1); // 0 + 1 = 1</div>
                    <div className="pl-2">setCount(count + 1); // 0 + 1 = 1</div>
                    <div className="pl-2">setCount(count + 1); // 0 + 1 = 1</div>
                    <div>{'}'};</div>
                    <div className="mt-2 text-red-600 dark:text-red-400">// Result: count = 1, not 3!</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All three calls use the same snapshot where count = 0.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Solution: Updater Functions</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [count, setCount] = useState(0);</div>
                    <div className="mt-2"></div>
                    <div>const handleClick = () {'=>'} {'{'}</div>
                    <div className="pl-2">setCount(c {'=>'} c + 1); // c = 0, returns 1</div>
                    <div className="pl-2">setCount(c {'=>'} c + 1); // c = 1, returns 2</div>
                    <div className="pl-2">setCount(c {'=>'} c + 1); // c = 2, returns 3</div>
                    <div>{'}'};</div>
                    <div className="mt-2 text-green-600 dark:text-green-400">// Result: count = 3 ✅</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each function gets the latest queued value.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">React's Update Queue</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                React queues state updates and processes them during the next render. Updater functions ensure each update uses the most recent value from the queue.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Updater Functions Deep Dive */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Repeat className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Updater Functions Explained"
              description="Pass functions instead of values to setState"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              An <strong>updater function</strong> is a function you pass to <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">setState</code> that receives the previous state and returns the new state. This is essential for JSX components that need multiple state updates.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">How Updater Functions Work</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">React Receives Function</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        setCount(c {'=>'} c + 1)
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Function added to update queue
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
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">React Processes Queue</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        c = 0 → returns 1
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Current state (0) passed to function
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
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">State Updates</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                      <div className="text-slate-800 dark:text-slate-200">
                        count becomes 1
                      </div>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                      ✅ Component re-renders with new state
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Regular Update</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-red-600 dark:text-red-400">setCount(count + 1)</div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Replaces state with this value immediately
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Updater Function</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-green-600 dark:text-green-400">setCount(c {'=>'} c + 1)</div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Queues function to process with latest state
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Playground 1: Counter Comparison */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Playground: Counter Comparison"
            description="See the difference between regular updates and updater functions"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="State Update Methods Comparison"
            description="Click both buttons to see how they behave differently"
            colorTheme="cyan"
            react={`function CounterComparison() {
  const [count, setCount] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);

  const handleBadClick = () => {
    setClicks(clicks + 1);
    // ❌ All use the same snapshot
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleGoodClick = () => {
    setClicks(clicks + 1);
    // ✅ Each uses the latest queue value
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  };

  const reset = () => {
    setCount(0);
    setClicks(0);
  };

  return (
    <div className="container">
      <h1>🔢 State Update Comparison</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Current Count</div>
          <div className="stat-value">{count}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Clicks</div>
          <div className="stat-value">{clicks}</div>
        </div>
      </div>

      <div className="button-grid">
        <button 
          className="btn-bad"
          onClick={handleBadClick}
        >
          ❌ +3 (Wrong Way)
          <span>Uses snapshot value</span>
        </button>

        <button 
          className="btn-good"
          onClick={handleGoodClick}
        >
          ✅ +3 (Right Way)
          <span>Uses queue value</span>
        </button>

        <button 
          className="btn-reset"
          onClick={reset}
        >
          🔄 Reset
        </button>
      </div>

      <div className="code-explanation">
        <div className="section bad">
          <h3>❌ Regular Updates (Snapshot Problem)</h3>
          <div className="code-block">
            <div>setCount({count} + 1); // = {count + 1}</div>
            <div>setCount({count} + 1); // = {count + 1}</div>
            <div>setCount({count} + 1); // = {count + 1}</div>
          </div>
          <p>All three calls use the same count value: {count}</p>
          <div className="result-box">
            Result: {count} → {count + 1}
          </div>
        </div>

        <div className="section good">
          <h3>✅ Updater Functions (Queue Solution)</h3>
          <div className="code-block">
            <div>setCount(c => {count} + 1); // = {count + 1}</div>
            <div>setCount(c => {count + 1} + 1); // = {count + 2}</div>
            <div>setCount(c => {count + 2} + 1); // = {count + 3}</div>
          </div>
          <p>Each call gets the latest queued value</p>
          <div className="result-box">
            Result: {count} → {count + 3}
          </div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterComparison />);`}
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

  function CounterComparison() {
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);

    const handleBadClick = () => {
      setClicks(clicks + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    };

    const handleGoodClick = () => {
      setClicks(clicks + 1);
      setCount(c => c + 1);
      setCount(c => c + 1);
      setCount(c => c + 1);
    };

    const reset = () => {
      setCount(0);
      setClicks(0);
    };

    return h('div', { className: 'container' },
      h('h1', null, '🔢 State Update Comparison'),
      
      h('div', { className: 'stats-grid' },
        h('div', { className: 'stat-card' },
          h('div', { className: 'stat-label' }, 'Current Count'),
          h('div', { className: 'stat-value' }, count)
        ),
        h('div', { className: 'stat-card' },
          h('div', { className: 'stat-label' }, 'Total Clicks'),
          h('div', { className: 'stat-value' }, clicks)
        )
      ),

      h('div', { className: 'button-grid' },
        h('button', {
          className: 'btn-bad',
          onClick: handleBadClick
        }, 
          h('span', null, '❌ +3 (Wrong Way)'),
          h('span', { className: 'btn-desc' }, 'Uses snapshot value')
        ),

        h('button', {
          className: 'btn-good',
          onClick: handleGoodClick
        }, 
          h('span', null, '✅ +3 (Right Way)'),
          h('span', { className: 'btn-desc' }, 'Uses queue value')
        ),

        h('button', {
          className: 'btn-reset',
          onClick: reset
        }, '🔄 Reset')
      ),

      h('div', { className: 'code-explanation' },
        h('div', { className: 'section bad' },
          h('h3', null, '❌ Regular Updates (Snapshot Problem)'),
          h('div', { className: 'code-block' },
            h('div', null, 'setCount(' + count + ' + 1); // = ' + (count + 1)),
            h('div', null, 'setCount(' + count + ' + 1); // = ' + (count + 1)),
            h('div', null, 'setCount(' + count + ' + 1); // = ' + (count + 1))
          ),
          h('p', null, 'All three calls use the same count value: ' + count),
          h('div', { className: 'result-box' }, 'Result: ' + count + ' → ' + (count + 1))
        ),

        h('div', { className: 'section good' },
          h('h3', null, '✅ Updater Functions (Queue Solution)'),
          h('div', { className: 'code-block' },
            h('div', null, 'setCount(c => ' + count + ' + 1); // = ' + (count + 1)),
            h('div', null, 'setCount(c => ' + (count + 1) + ' + 1); // = ' + (count + 2)),
            h('div', null, 'setCount(c => ' + (count + 2) + ' + 1); // = ' + (count + 3))
          ),
          h('p', null, 'Each call gets the latest queued value'),
          h('div', { className: 'result-box' }, 'Result: ' + count + ' → ' + (count + 3))
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(CounterComparison));
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
  max-width: 900px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.stat-value {
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
}

button {
  padding: 20px;
  border: none;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.btn-bad {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-bad:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

.btn-good {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-good:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-reset {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
  grid-column: 1 / -1;
}

.btn-reset:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
}

.btn-desc {
  font-size: 12px;
  opacity: 0.9;
  font-weight: 500;
}

button:active {
  transform: translateY(0);
}

.code-explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section {
  padding: 25px;
  border-radius: 16px;
  text-align: left;
}

.section.bad {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 3px solid #ef4444;
}

.section.good {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 3px solid #10b981;
}

.section h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 700;
}

.section.bad h3 {
  color: #dc2626;
}

.section.good h3 {
  color: #059669;
}

.code-block {
  background: white;
  padding: 15px;
  border-radius: 12px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  margin-bottom: 15px;
  border: 2px solid #e5e7eb;
  line-height: 1.6;
}

.code-block div {
  color: #1f2937;
  margin: 4px 0;
}

.section p {
  font-size: 14px;
  color: #1f2937;
  margin: 10px 0;
  font-weight: 600;
}

.result-box {
  background: white;
  padding: 12px;
  border-radius: 10px;
  font-weight: 700;
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}

.section.bad .result-box {
  color: #dc2626;
  border: 2px solid #ef4444;
}

.section.good .result-box {
  color: #059669;
  border: 2px solid #10b981;
}

@media (max-width: 768px) {
  .stats-grid,
  .code-explanation {
    grid-template-columns: 1fr;
  }
  
  .button-grid {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .stat-value {
    font-size: 2.5rem;
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

  .section.bad {
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    border-color: #ef4444;
  }

  .section.good {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .section.bad h3 {
    color: #fca5a5;
  }

  .section.good h3 {
    color: #6ee7b7;
  }

  .section p {
    color: #e5e7eb;
  }

  .code-block {
    background: #111827;
    border-color: #374151;
  }

  .code-block div {
    color: #e5e7eb;
  }

  .result-box {
    background: #111827;
  }

  .section.bad .result-box {
    color: #fca5a5;
  }

  .section.good .result-box {
    color: #6ee7b7;
  }
}`}
          />
        </div>

        {/* Interactive Playground 2: Todo List */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Interactive Playground: Todo List Manager"
            description="Real-world JSX component using updater functions"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Todo List with State Updates"
            description="Add, remove, and toggle todos using proper state update patterns"
            colorTheme="purple"
            react={`function TodoManager() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React state updates', done: false },
    { id: 2, text: 'Build awesome components', done: true }
  ]);
  const [newTodo, setNewTodo] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos(t => [...t, {
        id: Date.now(),
        text: newTodo.trim(),
        done: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.done));
  };

  const toggleAll = () => {
    setTodos(todos => {
      const allDone = todos.every(todo => todo.done);
      return todos.map(todo => ({ ...todo, done: !allDone }));
    });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.done).length,
    completed: todos.filter(t => t.done).length
  };

  return (
    <div className="container">
      <h1>📝 Todo List Manager</h1>
      
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-number">{stats.total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-number">{stats.active}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat">
          <span className="stat-number">{stats.completed}</span>
          <span className="stat-label">Done</span>
        </div>
      </div>

      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">
          ➕ Add
        </button>
      </div>

      <div className="filter-tabs">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            {filter === 'completed' ? '🎉 No completed tasks!' : 
             filter === 'active' ? '🌟 No active tasks!' : 
             '📝 Add your first todo!'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div key={todo.id} className={'todo-item ' + (todo.done ? 'done' : '')}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      <div className="actions">
        <button onClick={toggleAll} className="action-btn">
          {todos.every(t => t.done) ? '⬜ Uncheck All' : '☑️ Check All'}
        </button>
        <button 
          onClick={clearCompleted} 
          className="action-btn"
          disabled={stats.completed === 0}
        >
          🧹 Clear Completed
        </button>
      </div>

      <div className="state-display">
        <h3>🔍 Current State</h3>
        <pre>{JSON.stringify({ todos, filter, newTodo }, null, 2)}</pre>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<TodoManager />);`}
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

  function TodoManager() {
    const [todos, setTodos] = useState([
      { id: 1, text: 'Learn React state updates', done: false },
      { id: 2, text: 'Build awesome components', done: true }
    ]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
      if (newTodo.trim()) {
        setTodos(t => [...t, {
          id: Date.now(),
          text: newTodo.trim(),
          done: false
        }]);
        setNewTodo('');
      }
    };

    const toggleTodo = (id) => {
      setTodos(todos => todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ));
    };

    const deleteTodo = (id) => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
      setTodos(todos => todos.filter(todo => !todo.done));
    };

    const toggleAll = () => {
      setTodos(todos => {
        const allDone = todos.every(todo => todo.done);
        return todos.map(todo => ({ ...todo, done: !allDone }));
      });
    };

    const filteredTodos = todos.filter(todo => {
      if (filter === 'active') return !todo.done;
      if (filter === 'completed') return todo.done;
      return true;
    });

    const stats = {
      total: todos.length,
      active: todos.filter(t => !t.done).length,
      completed: todos.filter(t => t.done).length
    };

    return h('div', { className: 'container' },
      h('h1', null, '📝 Todo List Manager'),
      
      h('div', { className: 'stats-bar' },
        h('div', { className: 'stat' },
          h('span', { className: 'stat-number' }, stats.total),
          h('span', { className: 'stat-label' }, 'Total')
        ),
        h('div', { className: 'stat' },
          h('span', { className: 'stat-number' }, stats.active),
          h('span', { className: 'stat-label' }, 'Active')
        ),
        h('div', { className: 'stat' },
          h('span', { className: 'stat-number' }, stats.completed),
          h('span', { className: 'stat-label' }, 'Done')
        )
      ),

      h('div', { className: 'add-todo' },
        h('input', {
          type: 'text',
          value: newTodo,
          onChange: (e) => setNewTodo(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && addTodo(),
          placeholder: 'What needs to be done?',
          className: 'todo-input'
        }),
        h('button', { onClick: addTodo, className: 'add-btn' }, '➕ Add')
      ),

      h('div', { className: 'filter-tabs' },
        ['all', 'active', 'completed'].map(f =>
          h('button', {
            key: f,
            className: filter === f ? 'active' : '',
            onClick: () => setFilter(f)
          }, f.charAt(0).toUpperCase() + f.slice(1))
        )
      ),

      h('div', { className: 'todo-list' },
        filteredTodos.length === 0 ? 
          h('div', { className: 'empty-state' },
            filter === 'completed' ? '🎉 No completed tasks!' : 
            filter === 'active' ? '🌟 No active tasks!' : 
            '📝 Add your first todo!'
          ) :
          filteredTodos.map(todo =>
            h('div', { 
              key: todo.id, 
              className: 'todo-item ' + (todo.done ? 'done' : '') 
            },
              h('input', {
                type: 'checkbox',
                checked: todo.done,
                onChange: () => toggleTodo(todo.id),
                className: 'todo-checkbox'
              }),
              h('span', { className: 'todo-text' }, todo.text),
              h('button', { 
                onClick: () => deleteTodo(todo.id),
                className: 'delete-btn'
              }, '🗑️')
            )
          )
      ),

      h('div', { className: 'actions' },
        h('button', { 
          onClick: toggleAll, 
          className: 'action-btn' 
        }, todos.every(t => t.done) ? '⬜ Uncheck All' : '☑️ Check All'),
        h('button', { 
          onClick: clearCompleted, 
          className: 'action-btn',
          disabled: stats.completed === 0
        }, '🧹 Clear Completed')
      ),

      h('div', { className: 'state-display' },
        h('h3', null, '🔍 Current State'),
        h('pre', null, JSON.stringify({ todos, filter, newTodo }, null, 2))
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(TodoManager));
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

.stats-bar {
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

.filter-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  background: #f8fafc;
  padding: 5px;
  border-radius: 12px;
}

.filter-tabs button {
  flex: 1;
  padding: 12px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  color: #64748b;
  transition: all 0.3s ease;
}

.filter-tabs button.active {
  background: white;
  color: #667eea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

.todo-item.done {
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

.todo-item.done .todo-text {
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

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.action-btn {
  flex: 1;
  padding: 14px 20px;
  background: white;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-weight: 600;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover:not(:disabled) {
  background: #f0f4ff;
  border-color: #667eea;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  
  .stats-bar {
    flex-direction: column;
    gap: 15px;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .filter-tabs {
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

  .filter-tabs {
    background: #374151;
  }

  .filter-tabs button {
    color: #9ca3af;
  }

  .filter-tabs button.active {
    background: #1f2937;
    color: #60a5fa;
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

  .todo-item.done .todo-text {
    color: #9ca3af;
  }

  .empty-state {
    background: #374151;
    color: #9ca3af;
    border-color: #4b5563;
  }

  .action-btn {
    background: #374151;
    border-color: #4b5563;
    color: #60a5fa;
  }

  .action-btn:hover:not(:disabled) {
    background: #1e3a8a;
    border-color: #60a5fa;
  }
}`}
          />
        </div>

        {/* Best Practices for JSX Components */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Best Practices for JSX Components"
              description="Write clean, predictable state updates in your components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When building JSX components, following these patterns will make your state management more predictable and your components easier to debug.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Use Updater Functions</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-green-600 dark:text-green-400">
                    <div>setCount(c {'=>'} c + 1)</div>
                    <div>setItems(items {'=>'} [...items, newItem])</div>
                    <div>setUser(u {'=>'} ({'{'}...u, name: newName{'}'}))</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always use updater functions when new state depends on previous state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Group Related Updates</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-green-600 dark:text-green-400">
                    <div>// ✅ Good: Single state object</div>
                    <div>const [user, setUser] = useState({'{'}</div>
                    <div className="pl-2">name: '', age: 0</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Combine related state into a single object for easier management.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Avoid Side Effects</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-green-600 dark:text-green-400">
                    <div>// ✅ Good: Use useEffect</div>
                    <div>useEffect(() {'=>'} {'{'}</div>
                    <div className="pl-2">if (count {'>'} 10) {'{'}</div>
                    <div className="pl-4">showNotification();</div>
                    <div className="pl-2">{'}'}</div>
                    <div>{'}'}, [count]);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep state updates pure. Handle side effects in useEffect.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Use Descriptive Names</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-green-600 dark:text-green-400">
                    <div>setCount(count {'=>'} count + 1) // ✅ Clear</div>
                    <div>setIsActive(active {'=>'} !active) // ✅ Clear</div>
                    <div>setItems(items {'=>'} items.filter(...)) // ✅ Clear</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use meaningful variable names in your updater functions.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">JSX Component Tip</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                In JSX components, treat state as immutable data that flows down. Use updater functions for complex state logic and keep your render functions pure and predictable.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Common Patterns */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Common State Update Patterns"
              description="Essential patterns for JSX component state management"
              size="lg"
            />

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">1. Toggle Boolean State</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-green-600 dark:text-green-400">
                        <div>const [isOpen, setIsOpen] = useState(false);</div>
                        <div className="mt-2"></div>
                        <div>const toggle = () {'=>'} {'{'}</div>
                        <div className="pl-2">setIsOpen(open {'=>'} !open);</div>
                        <div>{'}'};</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Use updater function to toggle based on current state
                    </p>
                  </div>
                  <div>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-red-600 dark:text-red-400">
                        <div>const [isOpen, setIsOpen] = useState(false);</div>
                        <div className="mt-2"></div>
                        <div>const toggle = () {'=>'} {'{'}</div>
                        <div className="pl-2">setIsOpen(!isOpen); // Risky!</div>
                        <div>{'}'};</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Can cause issues with rapid clicks or batching
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">2. Update Array State</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-green-600 dark:text-green-400">
                    <div>const [items, setItems] = useState([]);</div>
                    <div className="mt-2"></div>
                    <div>// Add item</div>
                    <div>setItems(items {'=>'} [...items, newItem]);</div>
                    <div className="mt-2"></div>
                    <div>// Remove item</div>
                    <div>setItems(items {'=>'} items.filter(id {'=>'} id !== itemId));</div>
                    <div className="mt-2"></div>
                    <div>// Update item</div>
                    <div>setItems(items {'=>'}</div>
                    <div className="pl-2">items.map(item {'=>'}</div>
                    <div className="pl-4">item.id === id ? {'{'}...item, ...updates{'}'} : item</div>
                    <div className="pl-2">)</div>
                    <div>);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always create new arrays using spread operator or array methods
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">3. Update Object State</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-green-600 dark:text-green-400">
                    <div>const [user, setUser] = useState({'{'}</div>
                    <div className="pl-2">name: '', email: ''</div>
                    <div>{'}'});</div>
                    <div className="mt-2"></div>
                    <div>// Update single property</div>
                    <div>setUser(user {'=>'} ({'{'}...user, name: newName{'}'}));</div>
                    <div className="mt-2"></div>
                    <div>// Update multiple properties</div>
                    <div>setUser(user {'=>'} ({'{'}...user, ...updates{'}'}));</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use spread operator to copy existing properties and update specific ones
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
              description="Essential concepts for state update queuing in React"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">State is a Snapshot</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each render gets a snapshot of state. Multiple setState calls may use outdated values.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Updater Functions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pass functions to setState when new state depends on previous state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">React Queues Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State updates are queued and processed in order during the next render.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Write Predictable JSX</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep state updates pure and handle side effects in useEffect hooks.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Remember for JSX Components</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                State update queuing is fundamental to building interactive JSX components. Master updater functions to create responsive, predictable user interfaces that work correctly in all scenarios.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
