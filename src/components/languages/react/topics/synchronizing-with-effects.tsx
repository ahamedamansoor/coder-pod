'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  RefreshCw,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Code2,
  Play,
  Download,
  Wifi,
  Clock,
} from 'lucide-react';

export default function SynchronizingWithEffects() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="React · Escape Hatches"
        title="Synchronizing with Effects"
        description="Learn how to use Effects to synchronize components with external systems like network, browser APIs, and third-party libraries."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is an Effect */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is an Effect?"
              description="Understanding when and why to use Effects"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Effects</strong> let you run some code after rendering, so you can synchronize your component with systems outside of React.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Rendering Code</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Lives at the top level. Takes props and state, transforms them, and returns JSX.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Component() {'{'}</div>
                    <div className="pl-2">const result = calculate();</div>
                    <div className="pl-2">return &lt;div&gt;{'{result}'}&lt;/div&gt;;</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Effect Code</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Runs after rendering. Used to synchronize with external systems.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">// Connect to server</div>
                    <div className="pl-2">// Setup subscription</div>
                    <div className="pl-2">// Update DOM</div>
                    <div>{'}'});</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Basic useEffect Syntax */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Basic useEffect Syntax"
              description="How to write an Effect"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Three Steps to Write an Effect</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Declare an Effect</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        import {'{ useEffect }'} from 'react';
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Specify the Effect Dependencies</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>useEffect(() =&gt; {'{'}</div>
                        <div className="pl-2">// Effect code here</div>
                        <div>{'}'}, [dependencies]);</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Add Cleanup (if needed)</h5>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <div>useEffect(() =&gt; {'{'}</div>
                        <div className="pl-2">// Setup code</div>
                        <div className="pl-2">return () =&gt; {'{'}</div>
                        <div className="pl-4">// Cleanup code</div>
                        <div className="pl-2">{'}'};</div>
                        <div>{'}'}, [dependencies]);</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Document Title Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Play className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Example: Updating Document Title"
            description="Effect without cleanup"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Counter with Document Title"
            description="The document title updates every time count changes"
            colorTheme="cyan"
            react={`function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = 'Count: ' + count;
  }, [count]);

  return (
    <div className="container">
      <h1>📊 Counter</h1>
      
      <div className="count-display">
        {count}
      </div>

      <button onClick={() => setCount(count + 1)} className="btn-primary">
        Increment
      </button>
      
      <button onClick={() => setCount(count - 1)} className="btn-secondary">
        Decrement
      </button>

      <div className="info">
        💡 Check the browser tab title!
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
  const { createElement: h, useState, useEffect } = React;
  const { createRoot } = ReactDOM;

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = 'Count: ' + count;
    }, [count]);

    return h('div', { className: 'container' },
      h('h1', null, '📊 Counter'),
      
      h('div', { className: 'count-display' }, count),

      h('button', {
        onClick: () => setCount(count + 1),
        className: 'btn-primary'
      }, 'Increment'),
      
      h('button', {
        onClick: () => setCount(count - 1),
        className: 'btn-secondary'
      }, 'Decrement'),

      h('div', { className: 'info' },
        '💡 Check the browser tab title!'
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
  text-align: center;
}

h1 {
  color: #667eea;
  margin-bottom: 30px;
  font-size: 2rem;
}

.count-display {
  font-size: 72px;
  font-weight: 900;
  color: #667eea;
  margin: 30px 0;
  text-shadow: 2px 2px 4px rgba(102, 126, 234, 0.2);
}

button {
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 5px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 87, 108, 0.4);
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
  margin-top: 25px;
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

  .count-display {
    color: #60a5fa;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Effect with Cleanup */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example: Effect with Cleanup"
            description="Setting up and cleaning up a timer"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Timer with Cleanup"
            description="Effect starts timer and cleanup stops it"
            colorTheme="purple"
            react={`function Timer() {
  const [seconds, setSeconds] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="container">
      <h1>⏱️ Timer</h1>
      
      <div className="timer-display">
        {seconds}s
      </div>

      <div className="status">
        {isRunning ? '▶️ Running' : '⏸️ Paused'}
      </div>

      <button 
        onClick={() => setIsRunning(!isRunning)} 
        className="btn-toggle"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      
      <button 
        onClick={() => { setSeconds(0); setIsRunning(false); }} 
        className="btn-reset"
      >
        Reset
      </button>

      <div className="info">
        💡 Cleanup prevents memory leaks!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useEffect } = React;
  const { createRoot } = ReactDOM;

  function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [isRunning]);

    return h('div', { className: 'container' },
      h('h1', null, '⏱️ Timer'),
      
      h('div', { className: 'timer-display' }, seconds + 's'),

      h('div', { className: 'status' },
        isRunning ? '▶️ Running' : '⏸️ Paused'
      ),

      h('button', {
        onClick: () => setIsRunning(!isRunning),
        className: 'btn-toggle'
      }, isRunning ? 'Pause' : 'Start'),
      
      h('button', {
        onClick: () => { setSeconds(0); setIsRunning(false); },
        className: 'btn-reset'
      }, 'Reset'),

      h('div', { className: 'info' },
        '💡 Cleanup prevents memory leaks!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Timer));
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
  max-width: 500px;
  width: 100%;
  text-align: center;
}

h1 {
  color: #a855f7;
  margin-bottom: 30px;
  font-size: 2rem;
}

.timer-display {
  font-size: 72px;
  font-weight: 900;
  color: #a855f7;
  margin: 30px 0;
  text-shadow: 2px 2px 4px rgba(168, 85, 247, 0.2);
}

.status {
  font-size: 20px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 20px;
}

button {
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 5px;
}

.btn-toggle {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
}

.btn-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
}

.btn-reset {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.btn-reset:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
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
  margin-top: 25px;
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

  .timer-display {
    color: #c084fc;
  }

  .status {
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

        {/* Effect Dependencies */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<ArrowRight className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Understanding Dependencies"
              description="When Effects re-run"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The dependency array tells React when to re-run your Effect. Every value used inside the Effect must be in the dependency array.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">No Dependencies</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">// Runs after every render</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ⚠️ Runs on every render (usually not what you want!)
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Empty Array</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">// Runs only once (on mount)</div>
                    <div>{'}'}, []);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ✅ Runs once when component mounts
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Specific Dependencies</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">// Runs when count changes</div>
                    <div>{'}'}, [count]);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ✅ Runs when dependencies change
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Important!</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                Every value from your component used inside the Effect must be declared in the dependency array. React will warn you if you forget!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Common Use Cases */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Wifi className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Common Use Cases for Effects"
              description="When to use useEffect"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Here are the most common scenarios where you need Effects:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Download className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Fetching Data</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Load data from an API when component mounts or when a prop changes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Wifi className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Setting Up Subscriptions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Connect to WebSockets, event listeners, or other real-time services.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Starting Timers</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Set up intervals or timeouts that need cleanup when component unmounts.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Synchronizing State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep React state in sync with external systems like browser APIs.
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
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">After Rendering</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effects run after the component renders, allowing you to synchronize with external systems.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Cleanup Function</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Return a cleanup function to stop, unsubscribe, or disconnect before the next Effect runs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Dependencies Matter</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Every value used in the Effect must be in the dependency array to avoid bugs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">External Systems</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use Effects to connect to systems outside React like APIs, timers, or browser APIs.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use Effects</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Effects are for synchronizing with external systems. If you're just computing something or responding to user interactions, you probably don't need an Effect!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
