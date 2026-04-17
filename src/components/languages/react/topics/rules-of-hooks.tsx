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
  ShieldAlert,
  Code2,
  ListOrdered,
  Sparkles,
} from 'lucide-react';

export default function RulesOfHooks() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ShieldAlert}
        category="React · Hooks (Comprehensive)"
        title="Rules of Hooks"
        description="Learn the two critical rules for using Hooks correctly in React to avoid bugs and ensure your components work properly."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Two Rules */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<ListOrdered className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Two Rules of Hooks"
              description="Must follow these rules always"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Hooks are JavaScript functions, but they impose <strong>two additional rules</strong>. Following these rules ensures Hooks work correctly!
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-red-700 dark:text-red-300">Only Call Hooks at the Top Level</h3>
                    <p className="text-sm text-red-600 dark:text-red-400">Don't call Hooks inside loops, conditions, or nested functions</p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Why?</strong> React relies on the order Hooks are called to preserve state between renders. Conditional Hooks break this order.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✅ Call Hooks at the top level of your component</li>
                    <li>✅ Before any returns</li>
                    <li>❌ Don't call inside if statements</li>
                    <li>❌ Don't call inside loops</li>
                    <li>❌ Don't call inside nested functions</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300">Only Call Hooks from React Functions</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Call them from React components or custom Hooks only</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Why?</strong> Hooks contain React-specific logic that only makes sense in React function components or custom Hooks.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✅ Call from React function components</li>
                    <li>✅ Call from custom Hooks</li>
                    <li>❌ Don't call from regular JavaScript functions</li>
                    <li>❌ Don't call from class components</li>
                    <li>❌ Don't call from event handlers (unless inside)</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <ShieldAlert className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">ESLint Plugin</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Install <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-xs">eslint-plugin-react-hooks</code> to automatically enforce these rules and catch mistakes!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Rule 1: Examples */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Rule 1: Top Level Only"
              description="Right and wrong examples"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Wrong: Inside Condition</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Form() {'{'}</div>
                    <div className="pl-2">const [name, setName] = useState('');</div>
                    <div className="mt-1"></div>
                    <div className="pl-2 text-red-600 dark:text-red-400">if (name !== '') {'{'}</div>
                    <div className="pl-4 text-red-600 dark:text-red-400">// ❌ Never do this!</div>
                    <div className="pl-4 text-red-600 dark:text-red-400">const [age, setAge] = useState(0);</div>
                    <div className="pl-2 text-red-600 dark:text-red-400">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  Hook order changes based on condition!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Right: At Top Level</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Form() {'{'}</div>
                    <div className="pl-2 text-green-600 dark:text-green-400">// ✅ Always at top!</div>
                    <div className="pl-2">const [name, setName] = useState('');</div>
                    <div className="pl-2">const [age, setAge] = useState(0);</div>
                    <div className="mt-1"></div>
                    <div className="pl-2">// Condition later is fine</div>
                    <div className="pl-2">if (name !== '') {'{'} ...{' }'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Hooks always called in same order!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Wrong: Inside Loop</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function List({'{ items }'}) {'{'}</div>
                    <div className="pl-2 text-red-600 dark:text-red-400">items.forEach(item =&gt; {'{'}</div>
                    <div className="pl-4 text-red-600 dark:text-red-400">// ❌ Never in loops!</div>
                    <div className="pl-4 text-red-600 dark:text-red-400">const [x, setX] = useState(0);</div>
                    <div className="pl-2 text-red-600 dark:text-red-400">{'}'});</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Right: Use Array State</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function List({'{ items }'}) {'{'}</div>
                    <div className="pl-2 text-green-600 dark:text-green-400">// ✅ One state for all!</div>
                    <div className="pl-2">const [data, setData] = useState([]);</div>
                    <div className="mt-1"></div>
                    <div className="pl-2">// Process items normally</div>
                    <div className="pl-2">items.forEach(item =&gt; ...)</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Following the Rules"
            description="A component that follows both rules correctly"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Properly Structured Component"
            description="All Hooks at top level, in React component"
            colorTheme="green"
            react={`// ✅ Follows all Hook rules!
function UserProfile() {
  // ✅ Rule 1: All Hooks at top level
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // ✅ Rule 2: In React function component
  React.useEffect(() => {
    document.title = name || 'Profile';
  }, [name]);

  // Event handlers can be anywhere
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <div className="container">
      <h1>👤 User Profile</h1>

      {isSubmitted && (
        <div className="success-message">
          ✅ Profile saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="field">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>

        <button type="submit" className="btn-submit">
          Save Profile
        </button>
      </form>

      <div className="info">
        💡 All Hooks declared at component top level!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserProfile />);`}
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

  function UserProfile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
      document.title = name || 'Profile';
    }, [name]);

    function handleSubmit(e) {
      e.preventDefault();
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    return h('div', { className: 'container' },
      h('h1', null, '👤 User Profile'),

      isSubmitted && h('div', { className: 'success-message' },
        '✅ Profile saved successfully!'
      ),

      h('form', { onSubmit: handleSubmit, className: 'form' },
        h('div', { className: 'field' },
          h('label', null, 'Name'),
          h('input', {
            type: 'text',
            value: name,
            onChange: (e) => setName(e.target.value),
            required: true,
            className: 'input'
          })
        ),

        h('div', { className: 'field' },
          h('label', null, 'Age'),
          h('input', {
            type: 'number',
            value: age,
            onChange: (e) => setAge(e.target.value),
            required: true,
            className: 'input'
          })
        ),

        h('div', { className: 'field' },
          h('label', null, 'Email'),
          h('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            className: 'input'
          })
        ),

        h('button', {
          type: 'submit',
          className: 'btn-submit'
        }, 'Save Profile')
      ),

      h('div', { className: 'info' },
        '💡 All Hooks declared at component top level!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(UserProfile));
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.success-message {
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

.form {
  margin-bottom: 20px;
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

.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
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

  .success-message {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
    color: #d1fae5;
  }

  .field label {
    color: #e5e7eb;
  }

  .input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
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
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-red-700 dark:text-red-300">Top Level Only</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always call Hooks at the top level. Never inside loops, conditions, or nested functions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">React Functions Only</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only call Hooks from React function components or custom Hooks.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldAlert className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Consistent Order</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React relies on Hook call order. Breaking the rules breaks this order and causes bugs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use ESLint</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Install the ESLint plugin to catch rule violations automatically during development.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Critical Rules!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                These aren't suggestions - they're mandatory for Hooks to work. Always follow both rules, and your components will work perfectly!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
