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
  CheckCircle2,
  RefreshCw,
  Zap,
  Code2,
  Clock,
  Database,
  Globe,
  MousePointer,
  Monitor,
  Wifi,
  Calendar,
  TrendingUp,
} from 'lucide-react';

export default function WhyUseEffect() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Lightbulb}
        category="React · Hooks (Fundamentals)"
        title="Why Use Effect?"
        description="Understand the fundamental need for useEffect, when side effects are necessary, and the philosophy behind effect-driven programming."
        colorTheme="amber"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What are Side Effects */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="What Are Side Effects?"
              description="Understanding operations outside React's control"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In React, a <strong>side effect</strong> is any operation that affects something <strong>outside</strong> the component's render cycle. React components are meant to be <strong>pure</strong> - they take props and state and return UI. Side effects break this purity by interacting with the external world.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Database className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Data Fetching</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  API calls, database queries, network requests
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Clock className="w-6 h-6 text-green-500 mb-2" />
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Timers</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  setTimeout, setInterval, countdown logic
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Monitor className="w-6 h-6 text-purple-500 mb-2" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">DOM Manipulation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Direct DOM access, focus management, measurements
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Wifi className="w-6 h-6 text-orange-500 mb-2" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Subscriptions</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  WebSockets, event listeners, observables
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Globe className="w-6 h-6 text-red-500 mb-2" />
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Browser APIs</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  localStorage, geolocation, notifications
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <MousePointer className="w-6 h-6 text-cyan-500 mb-2" />
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Analytics</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Tracking, logging, metrics collection
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Pure vs Impure</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                React components should be pure (same input → same output). Side effects make components <strong>impure</strong> - they need special handling!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Problem: Without Effects */}
        <div className="space-y-6">
          <TopicTitle
            icon={<AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="The Problem: Without Effects"
            description="What happens when we try side effects in render?"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="❌ Wrong: Side Effect During Render"
            description="This causes infinite loops and performance issues"
            colorTheme="red"
            react={`function BrokenCounter() {
  const [count, setCount] = React.useState(0);

  // ❌ WRONG: Side effect during render!
  // This runs every time the component renders
  document.title = \`Count: \${count}\`;
  
  // This causes infinite loop:
  // 1. Component renders
  // 2. Side effect runs
  // 3. setCount triggers re-render
  // 4. Go back to step 1
  if (count < 10) {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>🚨 Broken Counter</h1>
      <p>This component has serious issues!</p>
      <div className="counter">{count}</div>
      <div className="error">
        <h3>⚠️ Problems:</h3>
        <ul>
          <li>Infinite re-render loop</li>
          <li>Performance degradation</li>
          <li>Unpredictable behavior</li>
          <li>Memory leaks</li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrokenCounter />);`}
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

  function BrokenCounter() {
    const [count, setCount] = useState(0);

    // This would cause infinite loop in real scenario
    // but we'll simulate the issue
    setTimeout(() => {
      if (count < 10) {
        setCount(count + 1);
      }
    }, 500);

    return h('div', { className: 'container' },
      h('h1', null, '🚨 Broken Counter'),
      h('p', null, 'This component has serious issues!'),
      h('div', { className: 'counter' }, count),
      h('div', { className: 'error' },
        h('h3', null, '⚠️ Problems:'),
        h('ul', null,
          h('li', null, 'Infinite re-render loop'),
          h('li', null, 'Performance degradation'),
          h('li', null, 'Unpredictable behavior'),
          h('li', null, 'Memory leaks')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(BrokenCounter));
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
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
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
  color: #dc2626;
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
}

p {
  color: #6b7280;
  text-align: center;
  margin-bottom: 30px;
}

.counter {
  font-size: 48px;
  font-weight: 900;
  color: #dc2626;
  text-align: center;
  margin-bottom: 30px;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.error {
  background: #fef2f2;
  border: 2px solid #dc2626;
  border-radius: 12px;
  padding: 20px;
}

.error h3 {
  color: #dc2626;
  margin-bottom: 10px;
}

.error ul {
  list-style: none;
  padding: 0;
}

.error li {
  color: #991b1b;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.error li:before {
  content: '❌';
  position: absolute;
  left: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #f87171;
  }

  p {
    color: #9ca3af;
  }

  .counter {
    color: #f87171;
  }

  .error {
    background: #450a0a;
    border-color: #dc2626;
  }

  .error h3 {
    color: #f87171;
  }

  .error li {
    color: #fca5a5;
  }
}`}
          />
        </div>

        {/* The Solution: With Effects */}
        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="The Solution: With Effects"
            description="useEffect separates rendering from side effects"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="✅ Correct: Side Effect with useEffect"
            description="Clean separation of concerns and proper lifecycle"
            colorTheme="green"
            react={`function CorrectCounter() {
  const [count, setCount] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);

  // ✅ CORRECT: Side effect in useEffect
  React.useEffect(() => {
    // This runs AFTER render, not during
    document.title = \`Count: \${count}\`;
  }, [count]); // Only runs when count changes

  // ✅ CORRECT: Timer in useEffect with cleanup
  React.useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="container">
      <h1>✅ Correct Counter</h1>
      <p>Check the browser tab title!</p>
      
      <div className="counter">{count}</div>
      
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="btn-toggle"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <div className="success">
        <h3>✅ Benefits:</h3>
        <ul>
          <li>Controlled execution</li>
          <li>Proper cleanup</li>
          <li>Performance optimized</li>
          <li>Predictable behavior</li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CorrectCounter />);`}
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

  function CorrectCounter() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
      document.title = \`Count: \${count}\`;
    }, [count]);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [isRunning]);

    return h('div', { className: 'container' },
      h('h1', null, '✅ Correct Counter'),
      h('p', null, 'Check the browser tab title!'),
      h('div', { className: 'counter' }, count),
      h('button', {
        onClick: () => setIsRunning(!isRunning),
        className: 'btn-toggle'
      }, isRunning ? 'Pause' : 'Start'),
      h('div', { className: 'success' },
        h('h3', null, '✅ Benefits:'),
        h('ul', null,
          h('li', null, 'Controlled execution'),
          h('li', null, 'Proper cleanup'),
          h('li', null, 'Performance optimized'),
          h('li', null, 'Predictable behavior')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(CorrectCounter));
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
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
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
  color: #16a34a;
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
}

p {
  color: #6b7280;
  text-align: center;
  margin-bottom: 30px;
}

.counter {
  font-size: 48px;
  font-weight: 900;
  color: #16a34a;
  text-align: center;
  margin-bottom: 30px;
}

.btn-toggle {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.btn-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22, 163, 74, 0.4);
}

.success {
  background: #f0fdf4;
  border: 2px solid #16a34a;
  border-radius: 12px;
  padding: 20px;
}

.success h3 {
  color: #16a34a;
  margin-bottom: 10px;
}

.success ul {
  list-style: none;
  padding: 0;
}

.success li {
  color: #15803d;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.success li:before {
  content: '✅';
  position: absolute;
  left: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #14532d 0%, #166534 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #4ade80;
  }

  p {
    color: #9ca3af;
  }

  .counter {
    color: #4ade80;
  }

  .success {
    background: #052e16;
    border-color: #16a34a;
  }

  .success h3 {
    color: #4ade80;
  }

  .success li {
    color: #86efac;
  }
}`}
          />
        </div>

        {/* When Do You Need Effects */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Calendar className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="When Do You Need Effects?"
              description="Common scenarios that require useEffect"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-5 h-5 text-green-500" />
                    <h4 className="font-bold text-green-700 dark:text-green-300">Data Synchronization</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Fetch data when component mounts</li>
                    <li>• Re-fetch when props/state change</li>
                    <li>• Sync with external data sources</li>
                    <li>• Real-time data updates</li>
                  </ul>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">Time-based Operations</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Debouncing user input</li>
                    <li>• Throttling API calls</li>
                    <li>• Countdown timers</li>
                    <li>• Scheduled updates</li>
                  </ul>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Monitor className="w-5 h-5 text-purple-500" />
                    <h4 className="font-bold text-purple-700 dark:text-purple-300">DOM & Browser APIs</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Managing focus</li>
                    <li>• Measuring element dimensions</li>
                    <li>• Scroll position control</li>
                    <li>• Canvas/SVG manipulation</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Wifi className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-orange-700 dark:text-orange-300">Subscriptions & Events</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• WebSocket connections</li>
                    <li>• Browser event listeners</li>
                    <li>• Keyboard shortcuts</li>
                    <li>• Window resize handlers</li>
                  </ul>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-red-700 dark:text-red-300">External Integrations</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Third-party library initialization</li>
                    <li>• Payment gateway setup</li>
                    <li>• Analytics tracking</li>
                    <li>• Authentication state</li>
                  </ul>
                </div>

                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-cyan-500" />
                    <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Performance & Optimization</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Lazy loading resources</li>
                    <li>• Preloading data</li>
                    <li>• Caching strategies</li>
                    <li>• Background processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Philosophy */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Philosophy Behind Effects"
              description="Understanding React's mental model"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">🎯 Single Responsibility</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Rendering</strong> and <strong>side effects</strong> have different responsibilities. useEffect enforces this separation by moving side effects out of the render cycle.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">⏰ Timing Control</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effects run <strong>after</strong> React has updated the DOM. This prevents layout thrashing and ensures the UI is ready before side effects execute.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">🧹 Predictable Cleanup</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The cleanup function pattern ensures resources are released properly, preventing memory leaks and race conditions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🔄 Declarative Synchronization</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Instead of imperative "when this happens, do that," useEffect lets you declare "keep this in sync with that."
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">React's Way of Thinking</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                useEffect embodies React's philosophy: <strong>describe what you want</strong>, not <strong>how to do it</strong>. Tell React which data your effect depends on, and React handles the execution timing.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Key Takeaways"
              description="Remember these fundamental concepts"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Side Effects Are External</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Anything affecting the world outside React's render cycle needs useEffect.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Effects Run After Render</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  This ensures the UI is updated before side effects execute, preventing visual glitches.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Dependencies Control Execution</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The dependency array tells React when to re-run your effect based on data changes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Cleanup Prevents Leaks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always return a cleanup function for subscriptions, timers, and external resources.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Foundation of React</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                useEffect is not just a hook - it's React's solution to the fundamental challenge of connecting pure components to the impure outside world. Master it to build robust React applications!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
