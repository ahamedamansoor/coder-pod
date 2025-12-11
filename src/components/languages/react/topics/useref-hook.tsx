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
  CheckCircle2,
  Target,
  Database,
  Focus,
} from 'lucide-react';

export default function UseRefHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Target}
        category="React · Hooks (Comprehensive)"
        title="useRef Hook"
        description="Master useRef for accessing DOM nodes and persisting mutable values across renders without triggering re-renders."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useRef */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useRef?"
              description="References without re-renders"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useRef</code> returns a mutable object with a <code>.current</code> property. It's perfect for <strong>accessing DOM elements</strong> and <strong>storing mutable values</strong> that don't need to trigger re-renders!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const ref = useRef(initialValue);</div>
                  <div className="mt-2">// Access or modify:</div>
                  <div>ref.current</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">Use Case 1</Badge>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">DOM Access</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reference DOM elements to focus inputs, measure size, play videos, etc.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">Use Case 2</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Mutable Values</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Store values (timers, previous state) that persist but don't cause re-renders.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Difference</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Unlike state, changing <code className="px-1 py-0.5 bg-cyan-100 dark:bg-cyan-900 rounded text-xs">ref.current</code> doesn't trigger a re-render. It's like a "box" to store data between renders!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* useRef vs useState */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="useRef vs useState"
              description="When to use each"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">useState</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Triggers Re-renders</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ Updates cause re-renders</li>
                  <li>✅ Use for UI data</li>
                  <li>✅ Immutable updates</li>
                  <li>✅ Async state updates</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">useRef</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">No Re-renders</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ Updates don't re-render</li>
                  <li>✅ Use for non-UI data</li>
                  <li>✅ Mutable updates</li>
                  <li>✅ Sync access to value</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">💡 Simple Rule</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>useState</strong> = Data that affects what user sees<br/>
                <strong>useRef</strong> = Data that doesn't affect UI (timers, DOM refs, previous values)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Example 1: DOM Reference */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Focus className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example 1: Focusing Input"
            description="Accessing DOM elements"
            size="lg"
          />

          <FrontendCodePreview
            title="Focus Input with useRef"
            description="Click button to focus the input field"
            colorTheme="blue"
            react={`function FocusInput() {
  // Create a ref to store the input DOM element
  const inputRef = React.useRef(null);

  const handleFocus = () => {
    // Access DOM element via .current
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>🎯 Focus Input</h1>

      <div className="input-group">
        <label>Your Name</label>
        <input
          ref={inputRef}
          type="text"
          placeholder="Click button to focus me"
          className="input"
        />
      </div>

      <button onClick={handleFocus} className="btn">
        Focus Input
      </button>

      <div className="info">
        💡 useRef gives direct access to DOM elements!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FocusInput />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useRef } = React;
  const { createRoot } = ReactDOM;

  function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current.focus();
    };

    return h('div', { className: 'container' },
      h('h1', null, '🎯 Focus Input'),

      h('div', { className: 'input-group' },
        h('label', null, 'Your Name'),
        h('input', {
          ref: inputRef,
          type: 'text',
          placeholder: 'Click button to focus me',
          className: 'input'
        })
      ),

      h('button', {
        onClick: handleFocus,
        className: 'btn'
      }, 'Focus Input'),

      h('div', { className: 'info' },
        '💡 useRef gives direct access to DOM elements!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(FocusInput));
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  color: #3b82f6;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.input-group {
  margin-bottom: 25px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
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
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .input-group label {
    color: #e5e7eb;
  }

  .input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Example 2: Mutable Value */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example 2: Storing Timer ID"
            description="Mutable value without re-renders"
            size="lg"
          />

          <FrontendCodePreview
            title="Timer with useRef"
            description="Storing interval ID without causing re-renders"
            colorTheme="purple"
            react={`function Timer() {
  const [count, setCount] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  
  // Store timer ID in ref - doesn't cause re-renders!
  const timerRef = React.useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div className="container">
      <h1>⏱️ Timer</h1>

      <div className="display">
        {count}s
      </div>

      <div className="buttons">
        <button 
          onClick={startTimer} 
          disabled={isRunning}
          className="btn-start"
        >
          Start
        </button>
        <button 
          onClick={stopTimer} 
          disabled={!isRunning}
          className="btn-stop"
        >
          Stop
        </button>
        <button 
          onClick={resetTimer}
          className="btn-reset"
        >
          Reset
        </button>
      </div>

      <div className="info">
        💡 Timer ID stored in ref - no re-renders!
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
  const { createElement: h, useState, useRef } = React;
  const { createRoot } = ReactDOM;

  function Timer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
      if (!isRunning) {
        setIsRunning(true);
        timerRef.current = setInterval(() => {
          setCount(c => c + 1);
        }, 1000);
      }
    };

    const stopTimer = () => {
      setIsRunning(false);
      clearInterval(timerRef.current);
    };

    const resetTimer = () => {
      stopTimer();
      setCount(0);
    };

    return h('div', { className: 'container' },
      h('h1', null, '⏱️ Timer'),

      h('div', { className: 'display' }, count + 's'),

      h('div', { className: 'buttons' },
        h('button', {
          onClick: startTimer,
          disabled: isRunning,
          className: 'btn-start'
        }, 'Start'),
        h('button', {
          onClick: stopTimer,
          disabled: !isRunning,
          className: 'btn-stop'
        }, 'Stop'),
        h('button', {
          onClick: resetTimer,
          className: 'btn-reset'
        }, 'Reset')
      ),

      h('div', { className: 'info' },
        '💡 Timer ID stored in ref - no re-renders!'
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
}

h1 {
  color: #a855f7;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.display {
  font-size: 72px;
  font-weight: 900;
  color: #7c3aed;
  text-align: center;
  margin: 40px 0;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.buttons button {
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.buttons button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-start {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-start:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-stop {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-stop:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

.btn-reset {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
}

.btn-reset:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
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

  .display {
    color: #c084fc;
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
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">DOM Access</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use refs to access and manipulate DOM elements directly.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">No Re-renders</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Changing ref.current doesn't trigger component re-renders.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Focus className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Persists Values</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ref values persist across renders, unlike regular variables.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Common Uses</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Focus inputs, store timers, track previous values, access DOM APIs.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Escape Hatch!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useRef is an "escape hatch" from React's declarative paradigm. Use it when you need to work with DOM or store mutable data!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
