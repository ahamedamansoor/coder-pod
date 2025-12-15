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
  XCircle,
  Zap,
  Code2,
  RefreshCw,
  Database,
  TrendingUp,
} from 'lucide-react';

export default function UseStateHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Database}
        category="React · Hooks (Comprehensive)"
        title="useState Hook"
        description="Master the useState Hook - React's most fundamental Hook for adding state to function components with detailed examples and best practices."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useState */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useState?"
              description="Adding state to function components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useState</code> is a React Hook that lets you add <strong>state</strong> to function components. State is data that can change over time and trigger re-renders.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const [state, setState] = useState(initialValue);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">state:</span>
                  <span className="text-gray-700 dark:text-gray-300">Current value of the state</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">setState:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function to update the state</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">initialValue:</span>
                  <span className="text-gray-700 dark:text-gray-300">Starting value (can be any type)</span>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                When you call <code className="px-1 py-0.5 bg-cyan-100 dark:bg-cyan-900 rounded text-xs">setState</code>, React re-renders your component with the new value!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Basic Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example 1: Simple Counter"
            description="Basic useState usage"
            size="lg"
          />

          <FrontendCodePreview
            title="Counter with useState"
            description="Click buttons to see state updates"
            colorTheme="blue"
            react={`function Counter() {
  // Declare state variable with initial value 0
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <h1>🔢 Counter</h1>

      <div className="counter-display">
        {count}
      </div>

      <div className="buttons">
        <button 
          onClick={() => setCount(count - 1)}
          className="btn-decrement"
        >
          - Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          className="btn-reset"
        >
          Reset
        </button>
        
        <button 
          onClick={() => setCount(count + 1)}
          className="btn-increment"
        >
          + Increment
        </button>
      </div>

      <div className="info-box">
        <h3>How it works:</h3>
        <ul>
          <li>• useState(0) creates state with initial value 0</li>
          <li>• count holds the current value</li>
          <li>• setCount updates the value</li>
          <li>• Component re-renders on each update</li>
        </ul>
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
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function Counter() {
    const [count, setCount] = useState(0);

    return h('div', { className: 'container' },
      h('h1', null, '🔢 Counter'),

      h('div', { className: 'counter-display' }, count),

      h('div', { className: 'buttons' },
        h('button', {
          onClick: () => setCount(count - 1),
          className: 'btn-decrement'
        }, '- Decrement'),
        
        h('button', {
          onClick: () => setCount(0),
          className: 'btn-reset'
        }, 'Reset'),
        
        h('button', {
          onClick: () => setCount(count + 1),
          className: 'btn-increment'
        }, '+ Increment')
      ),

      h('div', { className: 'info-box' },
        h('h3', null, 'How it works:'),
        h('ul', null,
          h('li', null, '• useState(0) creates state with initial value 0'),
          h('li', null, '• count holds the current value'),
          h('li', null, '• setCount updates the value'),
          h('li', null, '• Component re-renders on each update')
        )
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #3b82f6;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.counter-display {
  font-size: 96px;
  font-weight: 900;
  color: #1e40af;
  text-align: center;
  margin: 40px 0;
  text-shadow: 2px 2px 4px rgba(30, 64, 175, 0.2);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.buttons button {
  padding: 16px 20px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-decrement {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-decrement:hover {
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

.btn-increment {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-increment:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.info-box {
  background: #eff6ff;
  padding: 20px;
  border-radius: 16px;
  border-left: 4px solid #3b82f6;
}

.info-box h3 {
  color: #1e40af;
  margin-bottom: 12px;
  font-size: 16px;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  color: #1e3a8a;
  padding: 5px 0;
  font-size: 14px;
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

  .counter-display {
    color: #93c5fd;
  }

  .info-box {
    background: #1e3a8a;
    border-left-color: #60a5fa;
  }

  .info-box h3 {
    color: #93c5fd;
  }

  .info-box li {
    color: #bfdbfe;
  }
}`}
          />
        </div>

        {/* Functional Updates */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Functional Updates"
              description="Update based on previous state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When updating state based on the <strong>previous state</strong>, always use the functional form. This ensures you're working with the latest state value!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Wrong: Direct Value</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-red-600 dark:text-red-400">// Can miss updates!</div>
                    <div>setCount(count + 1);</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  If multiple updates happen quickly, some may be lost!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Right: Updater Function</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-green-600 dark:text-green-400">// Always correct!</div>
                    <div>setCount(prev =&gt; prev + 1);</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  React guarantees you get the latest value!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Multiple State Variables */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example 2: Multiple State Variables"
            description="Managing different pieces of state"
            size="lg"
          />

          <FrontendCodePreview
            title="Form with Multiple States"
            description="Each input has its own state"
            colorTheme="purple"
            react={`function UserForm() {
  // Multiple useState calls for different data
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="container">
      <h1>📝 User Form</h1>

      {submitted && (
        <div className="success">
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="field">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>

      {name && (
        <div className="preview">
          <h3>Preview:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Age:</strong> {age}</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserForm />);`}
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

  function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }

    return h('div', { className: 'container' },
      h('h1', null, '📝 User Form'),

      submitted && h('div', { className: 'success' },
        '✅ Form submitted successfully!'
      ),

      h('form', { onSubmit: handleSubmit },
        h('div', { className: 'field' },
          h('label', null, 'Name'),
          h('input', {
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: 'John Doe',
            required: true
          })
        ),

        h('div', { className: 'field' },
          h('label', null, 'Email'),
          h('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'john@example.com',
            required: true
          })
        ),

        h('div', { className: 'field' },
          h('label', null, 'Age'),
          h('input', {
            type: 'number',
            value: age,
            onChange: (e) => setAge(e.target.value),
            placeholder: '25',
            required: true
          })
        ),

        h('button', {
          type: 'submit',
          className: 'btn-submit'
        }, 'Submit')
      ),

      name && h('div', { className: 'preview' },
        h('h3', null, 'Preview:'),
        h('p', null, h('strong', null, 'Name:'), ' ' + name),
        h('p', null, h('strong', null, 'Email:'), ' ' + email),
        h('p', null, h('strong', null, 'Age:'), ' ' + age)
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(UserForm));
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

.success {
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

.field {
  margin-bottom: 20px;
}

.field label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.field input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.field input:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
}

.preview {
  background: #f9fafb;
  padding: 20px;
  border-radius: 16px;
  border-left: 4px solid #a855f7;
}

.preview h3 {
  color: #a855f7;
  margin-bottom: 12px;
  font-size: 16px;
}

.preview p {
  color: #374151;
  padding: 5px 0;
  font-size: 14px;
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

  .success {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
    color: #d1fae5;
  }

  .field label {
    color: #e5e7eb;
  }

  .field input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .field input:focus {
    border-color: #c084fc;
    box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.1);
  }

  .preview {
    background: #111827;
    border-left-color: #c084fc;
  }

  .preview h3 {
    color: #c084fc;
  }

  .preview p {
    color: #e5e7eb;
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
                  <Database className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Returns Array</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  useState returns [currentValue, setterFunction]. Use array destructuring to name them.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Triggers Re-render</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calling setState causes component to re-render with the new state value.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Functional Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use updater function when new state depends on previous: setState(prev {'=>'} prev + 1)
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Multiple States</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  You can call useState multiple times in one component for different state variables.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Most Used Hook!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useState is the most commonly used React Hook. Master it, and you'll be able to build interactive components easily!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
