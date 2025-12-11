'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Bookmark,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Eye,
  Zap,
  Target,
  Database,
} from 'lucide-react';

export default function ReferencingValuesWithRefs() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Bookmark}
        category="React · Escape Hatches"
        title="Referencing Values with Refs"
        description="Learn how to remember information without triggering re-renders using refs. Perfect for storing values that don't affect the visual output."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What are Refs */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Refs?"
              description="A way to remember values without re-renders"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When you want a component to <strong>"remember"</strong> some information, but you don't want that information to <strong>trigger new renders</strong>, you can use a <strong>ref</strong>.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">Creating a Ref</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`import { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(0);
  
  // Access the value:
  console.log(myRef.current); // 0
  
  // Update the value:
  myRef.current = myRef.current + 1;
}`}</code>
                </pre>
              </div>

              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-cyan-700 dark:text-cyan-400">Key property:</strong> <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">myRef.current</code> - This is where the value is stored. You can read and write to it directly!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Think of Refs Like...</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                A secret pocket where you can store a value that React doesn't watch. You can read and write to it anytime without causing re-renders!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Refs vs State */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Refs vs State"
              description="When to use each"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Both refs and state let you store information, but they work very differently. Here's when to use each:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-950">
                    <th className="p-3 text-left font-bold text-purple-900 dark:text-purple-100">Aspect</th>
                    <th className="p-3 text-left font-bold text-purple-900 dark:text-purple-100">useRef()</th>
                    <th className="p-3 text-left font-bold text-purple-900 dark:text-purple-100">useState()</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-200 dark:divide-purple-800">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Returns</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{'{ current: value }'}</code>
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">[value, setValue]</code>
                    </td>
                  </tr>
                  <tr className="bg-purple-50 dark:bg-purple-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Re-renders?</td>
                    <td className="p-3 text-green-700 dark:text-green-300 font-bold">
                      ❌ No
                    </td>
                    <td className="p-3 text-orange-700 dark:text-orange-300 font-bold">
                      ✅ Yes
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Mutable?</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Yes - modify <code className="text-xs">current</code>
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      No - use setter function
                    </td>
                  </tr>
                  <tr className="bg-purple-50 dark:bg-purple-950/20">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Read during render?</td>
                    <td className="p-3 text-red-700 dark:text-red-300">
                      ⚠️ Avoid
                    </td>
                    <td className="p-3 text-green-700 dark:text-green-300">
                      ✅ Safe
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">Use case</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Storing values that don't affect UI
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Storing values that affect UI
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">Use Refs for:</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Storing timer IDs</li>
                  <li>• Tracking previous values</li>
                  <li>• Counting renders</li>
                  <li>• Any value that doesn't affect rendering</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold mb-3 text-orange-700 dark:text-orange-300">Use State for:</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Information displayed on screen</li>
                  <li>• Values that trigger UI updates</li>
                  <li>• Form inputs</li>
                  <li>• Anything the user sees or interacts with</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example 1 */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Refs Don't Trigger Re-renders"
            description="See the difference between state and refs"
            size="lg"
          />

          <FrontendCodePreview
            title="State vs Ref Counter"
            description="Compare how state and ref updates behave"
            colorTheme="cyan"
            react={`function StateVsRef() {
  const [stateCount, setStateCount] = React.useState(0);
  const refCount = React.useRef(0);
  const [renderCount, setRenderCount] = React.useState(0);
  const [message, setMessage] = React.useState('');

  function handleStateClick() {
    setStateCount(stateCount + 1);
  }

  function handleRefClick() {
    refCount.current = refCount.current + 1;
    setMessage('Ref updated to: ' + refCount.current + ' (No re-render!)');
    setTimeout(() => setMessage(''), 3000);
  }

  function forceRender() {
    setRenderCount(renderCount + 1);
    setMessage('');
  }

  return (
    <div className="container">
      <h1>⚡ State vs Ref</h1>
      
      <div className="render-count">
        Renders: {renderCount}
      </div>

      {message && (
        <div className="message-box">
          {message}
        </div>
      )}

      <div className="section state-section">
        <h3>📊 State Counter</h3>
        <div className="display">
          <div className="label">Count:</div>
          <div className="value">{stateCount}</div>
        </div>
        <button onClick={handleStateClick} className="btn-state">
          Increment State
        </button>
        <p className="note">✅ Triggers re-render</p>
      </div>

      <div className="section ref-section">
        <h3>🔖 Ref Counter</h3>
        <div className="display">
          <div className="label">Count:</div>
          <div className="value">{refCount.current}</div>
        </div>
        <button onClick={handleRefClick} className="btn-ref">
          Increment Ref
        </button>
        <p className="note">❌ No re-render</p>
      </div>

      <button onClick={forceRender} className="btn-force">
        Force Re-render to See Ref Value
      </button>

      <div className="info">
        💡 Ref updates don't trigger re-renders!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StateVsRef />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useRef } = React;
  const { createRoot } = ReactDOM;

  function StateVsRef() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    const [renderCount, setRenderCount] = useState(0);
    const [message, setMessage] = useState('');

    function handleStateClick() {
      setStateCount(stateCount + 1);
    }

    function handleRefClick() {
      refCount.current = refCount.current + 1;
      setMessage('Ref updated to: ' + refCount.current + ' (No re-render!)');
      setTimeout(() => setMessage(''), 3000);
    }

    function forceRender() {
      setRenderCount(renderCount + 1);
      setMessage('');
    }

    return h('div', { className: 'container' },
      h('h1', null, '⚡ State vs Ref'),
      
      h('div', { className: 'render-count' },
        'Renders: ' + renderCount
      ),

      message && h('div', { className: 'message-box' }, message),

      h('div', { className: 'section state-section' },
        h('h3', null, '📊 State Counter'),
        h('div', { className: 'display' },
          h('div', { className: 'label' }, 'Count:'),
          h('div', { className: 'value' }, stateCount)
        ),
        h('button', {
          onClick: handleStateClick,
          className: 'btn-state'
        }, 'Increment State'),
        h('p', { className: 'note' }, '✅ Triggers re-render')
      ),

      h('div', { className: 'section ref-section' },
        h('h3', null, '🔖 Ref Counter'),
        h('div', { className: 'display' },
          h('div', { className: 'label' }, 'Count:'),
          h('div', { className: 'value' }, refCount.current)
        ),
        h('button', {
          onClick: handleRefClick,
          className: 'btn-ref'
        }, 'Increment Ref'),
        h('p', { className: 'note' }, '❌ No re-render')
      ),

      h('button', {
        onClick: forceRender,
        className: 'btn-force'
      }, 'Force Re-render to See Ref Value'),

      h('div', { className: 'info' },
        '💡 Ref updates don\\'t trigger re-renders!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(StateVsRef));
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
  max-width: 700px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

.render-count {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #1e40af;
  margin-bottom: 25px;
}

.message-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-weight: 600;
  color: #92400e;
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

.section {
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.state-section {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 2px solid #10b981;
}

.ref-section {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  border: 2px solid #667eea;
}

.section h3 {
  margin-bottom: 15px;
  font-size: 18px;
}

.state-section h3 {
  color: #065f46;
}

.ref-section h3 {
  color: #3730a3;
}

.display {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  font-weight: 600;
  color: #6b7280;
  font-size: 16px;
}

.value {
  font-size: 32px;
  font-weight: 700;
  color: #667eea;
}

.section button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.btn-state {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-ref {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.section button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.note {
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
}

.state-section .note {
  color: #065f46;
}

.ref-section .note {
  color: #3730a3;
}

.btn-force {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn-force:hover {
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

  .render-count {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
    color: #93c5fd;
  }

  .message-box {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }

  .state-section {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .ref-section {
    background: linear-gradient(135deg, #312e81 0%, #3730a3 100%);
    border-color: #667eea;
  }

  .state-section h3 {
    color: #6ee7b7;
  }

  .ref-section h3 {
    color: #a5b4fc;
  }

  .display {
    background: #1f2937;
  }

  .label {
    color: #9ca3af;
  }

  .value {
    color: #60a5fa;
  }

  .state-section .note {
    color: #6ee7b7;
  }

  .ref-section .note {
    color: #a5b4fc;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Common Use Cases */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Common Use Cases for Refs"
              description="When refs are the right choice"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Refs are perfect for storing information that <strong>doesn't affect the visual output</strong> of your component.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Storing Timer IDs</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const intervalId = useRef(null);</div>
                    <div className="mt-1">intervalId.current = setInterval(...);</div>
                    <div className="mt-1">clearInterval(intervalId.current);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Store timer/interval IDs so you can clear them later.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Tracking Previous Values</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const prevCount = useRef(count);</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">// Store for comparison later</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Remember previous values to compare with current values.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Counting Renders</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const renderCount = useRef(0);</div>
                    <div className="mt-1">renderCount.current++;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Track how many times a component has rendered for debugging.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example 2 */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Clock className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Stopwatch with Refs"
            description="Start/stop timer using ref to store interval ID"
            size="lg"
          />

          <FrontendCodePreview
            title="Stopwatch Example"
            description="Uses ref to store interval ID"
            colorTheme="green"
            react={`function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const intervalRef = React.useRef(null);

  function handleStart() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }
  }

  function handleStop() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }

  function handleReset() {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="container">
      <h1>⏱️ Stopwatch</h1>
      
      <div className="display">
        <div className="time">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="status">
          {isRunning ? '▶️ Running' : '⏸️ Stopped'}
        </div>
      </div>

      <div className="controls">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="btn-start"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          className="btn-stop"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="btn-reset"
        >
          Reset
        </button>
      </div>

      <div className="info">
        💡 Ref stores interval ID - won't trigger re-renders!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Stopwatch />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useRef } = React;
  const { createRoot } = ReactDOM;

  function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function handleStart() {
      if (!isRunning) {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
          setTime(t => t + 1);
        }, 1000);
      }
    }

    function handleStop() {
      if (isRunning) {
        setIsRunning(false);
        clearInterval(intervalRef.current);
      }
    }

    function handleReset() {
      setTime(0);
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return h('div', { className: 'container' },
      h('h1', null, '⏱️ Stopwatch'),
      
      h('div', { className: 'display' },
        h('div', { className: 'time' },
          String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
        ),
        h('div', { className: 'status' },
          isRunning ? '▶️ Running' : '⏸️ Stopped'
        )
      ),

      h('div', { className: 'controls' },
        h('button', {
          onClick: handleStart,
          disabled: isRunning,
          className: 'btn-start'
        }, 'Start'),
        h('button', {
          onClick: handleStop,
          disabled: !isRunning,
          className: 'btn-stop'
        }, 'Stop'),
        h('button', {
          onClick: handleReset,
          className: 'btn-reset'
        }, 'Reset')
      ),

      h('div', { className: 'info' },
        '💡 Ref stores interval ID - won\\'t trigger re-renders!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Stopwatch));
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
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.display {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 40px;
  border-radius: 20px;
  border: 3px solid #10b981;
  text-align: center;
  margin-bottom: 30px;
}

.time {
  font-size: 64px;
  font-weight: 700;
  color: #065f46;
  font-family: 'Courier New', monospace;
  margin-bottom: 15px;
}

.status {
  font-size: 18px;
  font-weight: 600;
  color: #047857;
}

.controls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.controls button {
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-start {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-stop {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.btn-reset {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.controls button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
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
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .time {
    color: #6ee7b7;
  }

  .status {
    color: #a7f3d0;
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
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">No Re-renders</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Updating a ref does NOT trigger a re-render. Perfect for behind-the-scenes values.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Mutable Value</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  You can directly modify <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">ref.current</code> anytime.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Persists Between Renders</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ref values persist across re-renders, unlike regular variables.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use for Non-Visual Data</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Store timer IDs, previous values, counters - anything that doesn't affect UI.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">When to Use Refs</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Use refs when you need to remember something but changing it shouldn't trigger a re-render. For everything else, use state!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
