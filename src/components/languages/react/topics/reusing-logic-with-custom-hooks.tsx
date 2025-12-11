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
  Package,
  Repeat,
  Sparkles,
  Copy,
} from 'lucide-react';

export default function ReusingLogicWithCustomHooks() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="React · Escape Hatches"
        title="Reusing Logic with Custom Hooks"
        description="Learn how to extract and share stateful logic between components using custom Hooks, making your code more reusable and maintainable."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What are Custom Hooks */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Custom Hooks?"
              description="Extracting reusable logic"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Custom Hooks let you <strong>extract component logic into reusable functions</strong>. They're JavaScript functions that start with "use" and can call other Hooks.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Benefits</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ Share logic between components</li>
                  <li>✅ Keep components simple and clean</li>
                  <li>✅ Follow DRY principle</li>
                  <li>✅ Easier testing</li>
                  <li>✅ Better code organization</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Rules</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Must start with "use"</li>
                  <li>• Can call other Hooks</li>
                  <li>• Follow Hooks rules</li>
                  <li>• Can accept parameters</li>
                  <li>• Can return anything</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Custom Hooks share <strong>stateful logic</strong>, not state itself. Each call to a custom Hook gets its own isolated state!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Creating a Custom Hook */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Creating Your First Custom Hook"
              description="Step-by-step guide"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Example: useCounter Hook</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-2">1. Identify repeated logic:</p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>// In multiple components...</div>
                      <div>const [count, setCount] = useState(0);</div>
                      <div>const increment = () =&gt; setCount(c =&gt; c + 1);</div>
                      <div>const decrement = () =&gt; setCount(c =&gt; c - 1);</div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-2">2. Extract into custom Hook:</p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>function useCounter(initialValue = 0) {'{'}</div>
                      <div className="pl-2">const [count, setCount] = useState(initialValue);</div>
                      <div className="pl-2">const increment = () =&gt; setCount(c =&gt; c + 1);</div>
                      <div className="pl-2">const decrement = () =&gt; setCount(c =&gt; c - 1);</div>
                      <div className="pl-2">const reset = () =&gt; setCount(initialValue);</div>
                      <div className="mt-1"></div>
                      <div className="pl-2">return {'{ count, increment, decrement, reset }'};</div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-2">3. Use it in components:</p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>function MyComponent() {'{'}</div>
                      <div className="pl-2">const {'{ count, increment, decrement, reset }'} = useCounter(0);</div>
                      <div className="pl-2">// Use the counter logic!</div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example: useToggle */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: useToggle Custom Hook"
            description="A simple but powerful custom Hook"
            size="lg"
          />

          <FrontendCodePreview
            title="useToggle Hook in Action"
            description="Toggle visibility, dark mode, and more"
            colorTheme="green"
            react={`// Custom Hook
function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  
  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  
  return [value, { toggle, setTrue, setFalse }];
}

// Using the Hook
function App() {
  const [isVisible, visibilityControls] = useToggle(true);
  const [isDarkMode, darkModeControls] = useToggle(false);
  const [isExpanded, expandControls] = useToggle(false);

  React.useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

    return () => body.classList.remove('dark-mode');
  }, [isDarkMode]);

  return (
    <div className={\`container \${isDarkMode ? 'dark-mode' : ''}\`}>
      <h1>🎛️ useToggle Hook</h1>

      <div className="section">
        <h3>Visibility Toggle</h3>
        <button onClick={visibilityControls.toggle} className="btn-primary">
          {isVisible ? 'Hide' : 'Show'} Content
        </button>
        {isVisible && (
          <div className="content">
            ✨ This content can be toggled!
          </div>
        )}
      </div>

      <div className="section">
        <h3>Dark Mode Toggle</h3>
        <button onClick={darkModeControls.toggle} className="btn-primary">
          {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
        </button>
      </div>

      <div className="section">
        <h3>Expandable Section</h3>
        <button onClick={expandControls.toggle} className="btn-primary">
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        {isExpanded && (
          <div className="content">
            <p>Here's some extra content!</p>
            <p>Custom Hooks make this so easy.</p>
          </div>
        )}
      </div>

      <div className="info">
        💡 One Hook, multiple uses!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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

  function useToggle(initialValue) {
    if (initialValue === undefined) initialValue = false;
    const [value, setValue] = useState(initialValue);
    
    const toggle = () => setValue(v => !v);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    
    return [value, { toggle: toggle, setTrue: setTrue, setFalse: setFalse }];
  }

  function App() {
    const toggleResult1 = useToggle(true);
    const isVisible = toggleResult1[0];
    const visibilityControls = toggleResult1[1];

    const toggleResult2 = useToggle(false);
    const isDarkMode = toggleResult2[0];
    const darkModeControls = toggleResult2[1];

    const toggleResult3 = useToggle(false);
    const isExpanded = toggleResult3[0];
    const expandControls = toggleResult3[1];

    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }

      return () => document.body.classList.remove('dark-mode');
    }, [isDarkMode]);

    return h('div', { 
      className: 'container' + (isDarkMode ? ' dark-mode' : '') 
    },
      h('h1', null, '🎛️ useToggle Hook'),

      h('div', { className: 'section' },
        h('h3', null, 'Visibility Toggle'),
        h('button', {
          onClick: visibilityControls.toggle,
          className: 'btn-primary'
        }, isVisible ? 'Hide' : 'Show', ' Content'),
        isVisible && h('div', { className: 'content' },
          '✨ This content can be toggled!'
        )
      ),

      h('div', { className: 'section' },
        h('h3', null, 'Dark Mode Toggle'),
        h('button', {
          onClick: darkModeControls.toggle,
          className: 'btn-primary'
        }, isDarkMode ? '☀️ Light' : '🌙 Dark', ' Mode')
      ),

      h('div', { className: 'section' },
        h('h3', null, 'Expandable Section'),
        h('button', {
          onClick: expandControls.toggle,
          className: 'btn-primary'
        }, isExpanded ? 'Collapse' : 'Expand'),
        isExpanded && h('div', { className: 'content' },
          h('p', null, 'Here\\'s some extra content!'),
          h('p', null, 'Custom Hooks make this so easy.')
        )
      ),

      h('div', { className: 'info' },
        '💡 One Hook, multiple uses!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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

body.dark-mode {
  background: linear-gradient(135deg, #0f172a 0%, #111827 100%);
  color: #e5e7eb;
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
  transition: all 0.3s ease;
}

.container.dark-mode {
  background: #1f2937;
  color: #e5e7eb;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.container.dark-mode h1 {
  color: #6ee7b7;
}

.section {
  background: #f9fafb;
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.container.dark-mode .section {
  background: #111827;
  border: 1px solid #374151;
}

.section h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 18px;
}

.container.dark-mode .section h3 {
  color: #d1d5db;
}

.btn-primary {
  padding: 12px 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.container.dark-mode .btn-primary {
  background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%);
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
}

.container.dark-mode .btn-primary:hover {
  box-shadow: 0 10px 24px rgba(96, 165, 250, 0.4);
}

.content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 15px;
  border-left: 4px solid #10b981;
  animation: fadeIn 0.3s ease;
}

.container.dark-mode .content {
  background: #0f172a;
  color: #e0f2fe;
  border-left-color: #22d3ee;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content p {
  margin-bottom: 10px;
  line-height: 1.6;
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

.container.dark-mode .info {
  background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
  color: #fef3c7;
  border-color: #f59e0b;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
}`}
          />
        </div>

        {/* When to Create Custom Hooks */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="When to Create Custom Hooks"
              description="Decision guide"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <h4 className="font-bold text-green-700 dark:text-green-300">✅ Create When:</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Logic is used in 2+ components</li>
                    <li>• Complex stateful logic</li>
                    <li>• Need to abstract Effects</li>
                    <li>• Want testable logic</li>
                    <li>• Improves readability</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-6 h-6 text-red-500" />
                    <h4 className="font-bold text-red-700 dark:text-red-300">❌ Don't Create When:</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Only used once</li>
                    <li>• Simple, obvious logic</li>
                    <li>• Premature abstraction</li>
                    <li>• Makes code harder to read</li>
                    <li>• No real benefit</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Rule of Thumb</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                If you copy-paste the same stateful logic twice, it's time for a custom Hook. Extract it, name it well, and make it reusable!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Best Practices for Custom Hooks"
              description="Guidelines for great custom Hooks"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Start with "use"</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always name custom Hooks starting with "use" so React knows it's a Hook.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Descriptive Names</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use clear names: <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">useWindowSize</code>, <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">useLocalStorage</code>, <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">useForm</code>
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Keep It Focused</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each custom Hook should have a single, clear purpose. Don't make "god Hooks" that do everything.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Return Useful Values</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Return arrays for simple values, objects for many values. Make it easy to use!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
                  <Copy className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Reuse Logic</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Custom Hooks extract and share stateful logic between components without repeating code.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Isolated State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each call to a custom Hook gets its own state. Hooks share logic, not state!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Must Start with "use"</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Follow the naming convention so React and linters can verify Hook rules.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Repeat className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Follow Hook Rules</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Custom Hooks must follow all the same rules as built-in Hooks (top level, React functions only).
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Custom Hooks are Powerful!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                They're one of React's most powerful features for code organization and reuse. Start building your own library of custom Hooks!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
