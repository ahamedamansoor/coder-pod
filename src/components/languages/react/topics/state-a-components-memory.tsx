'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Brain,
  Lightbulb,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Package,
  Database,
  MemoryStick,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Gift,
} from 'lucide-react';

export default function StateAComponentsMemory() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Brain}
        category="React · Adding Interactivity"
        title="State: A Component's Memory"
        description="Learn how components remember information using state! Understand the difference between props and state, and make your components truly interactive."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is State? */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Brain className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is State?"
              description="State is a component's memory - it remembers values between renders!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Sometimes, a component needs to <strong>remember</strong> things. A counter needs to remember the current count. An image gallery needs to remember which image is showing. A form needs to remember what you've typed. This is where <strong>state</strong> comes in - it's like a component's memory!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-center text-cyan-700 dark:text-cyan-300">🧠 Component Memory in Action</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-cyan-500">Before Click</Badge>
                    <span className="font-semibold">count = 0</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Component remembers: "The count is 0"</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-cyan-500" />
                </div>

                <div className="p-4 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg border-2 border-cyan-500 text-center">
                  <span className="font-bold text-cyan-700 dark:text-cyan-300">👆 User Clicks Button</span>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-cyan-500" />
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-green-500">After Click</Badge>
                    <span className="font-semibold">count = 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Component updates its memory: "The count is now 1"</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why Do We Need State?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Regular variables don't survive between renders - they reset every time! State variables are preserved by React, so your component can remember values.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* State vs Props */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="State vs Props"
              description="What's the difference? When should you use each?"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Both <strong>props</strong> and <strong>state</strong> hold data, but they serve different purposes. Props are passed from parent to child (like function arguments), while state is managed within the component itself (like local variables).
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 text-lg">Props</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm"><strong>Passed from parent</strong> - Like function parameters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm"><strong>Read-only</strong> - Cannot be changed by child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm"><strong>For communication</strong> - Parent talks to child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm"><strong>Example:</strong> title, color, user data</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded font-mono text-xs">
                  {'<Button color="blue" />'}
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300 text-lg">State</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span className="text-sm"><strong>Owned by component</strong> - Like local variables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span className="text-sm"><strong>Can be changed</strong> - Component updates it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span className="text-sm"><strong>For memory</strong> - Component remembers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span className="text-sm"><strong>Example:</strong> count, isOpen, inputValue</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/30 rounded font-mono text-xs">
                  {'const [count, setCount] = useState(0)'}
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
              <h4 className="font-bold mb-3 text-amber-800 dark:text-amber-300">💡 Quick Rule of Thumb</h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Use Props</strong> when data comes from outside the component</p>
                <p><strong>Use State</strong> when the component needs to remember or change data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adding State with useState */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<MemoryStick className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Adding State with useState"
              description="The useState Hook gives your component memory"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              To add state to a component, use the <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">useState</code> Hook. It returns two things: the current state value and a function to update it.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">useState Anatomy</h4>
              <div className="bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-600 dark:text-purple-400">const</span>
                  <span>[</span>
                  <span className="text-blue-600 dark:text-blue-400">count</span>
                  <span>,</span>
                  <span className="text-green-600 dark:text-green-400">setCount</span>
                  <span>] =</span>
                  <span className="text-orange-600 dark:text-orange-400">useState</span>
                  <span>(</span>
                  <span className="text-pink-600 dark:text-pink-400">0</span>
                  <span>);</span>
                </div>

                <div className="space-y-3 mt-6 text-xs">
                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                    <Badge className="bg-blue-500">count</Badge>
                    <div>
                      <p className="font-semibold text-blue-700 dark:text-blue-300">Current State Value</p>
                      <p className="text-muted-foreground">Holds the current value (starts at 0)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                    <Badge className="bg-green-500">setCount</Badge>
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-300">Setter Function</p>
                      <p className="text-muted-foreground">Updates the state (e.g., setCount(1))</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                    <Badge className="bg-orange-500">useState</Badge>
                    <div>
                      <p className="font-semibold text-orange-700 dark:text-orange-300">Hook Function</p>
                      <p className="text-muted-foreground">React Hook that adds state</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded">
                    <Badge className="bg-pink-500">0</Badge>
                    <div>
                      <p className="font-semibold text-pink-700 dark:text-pink-300">Initial Value</p>
                      <p className="text-muted-foreground">The starting value (only used first time)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Step 1: Import</h5>
                <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs">
                  import {'{ useState }'} from 'react';
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h5 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Step 2: Declare</h5>
                <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs">
                  const [count, setCount] = useState(0);
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-200 dark:border-green-700">
                <h5 className="font-bold text-green-700 dark:text-green-300 mb-2">Step 3: Use</h5>
                <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs">
                  setCount(count + 1);
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example - Counter */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Try It - Your First State"
            description="A simple counter using useState"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Counter with State"
            description="Click the buttons to see state in action!"
            colorTheme="cyan"
            react={`import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>🔢 Counter App</h1>
      
      <div className="counter-display">
        <div className="label">Current Count</div>
        <div className="count">{count}</div>
        <div className="subtitle">
          {count === 0 ? 'Start clicking!' : 
           count === 1 ? 'You clicked once!' : 
           \`You clicked \${count} times!\`}
        </div>
      </div>

      <div className="button-group">
        <button 
          className="btn-decrease"
          onClick={() => setCount(count - 1)}
        >
          ➖ Decrease
        </button>
        
        <button 
          className="btn-reset"
          onClick={() => setCount(0)}
        >
          🔄 Reset
        </button>
        
        <button 
          className="btn-increase"
          onClick={() => setCount(count + 1)}
        >
          ➕ Increase
        </button>
      </div>

      <div className="info">
        <p>💡 Each click updates the state</p>
        <p>🔄 React re-renders the component</p>
        <p>🧠 The count value is remembered!</p>
      </div>
    </div>
  );
}

export default Counter;`}
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
      h('h1', null, '🔢 Counter App'),
      
      h('div', { className: 'counter-display' },
        h('div', { className: 'label' }, 'Current Count'),
        h('div', { className: 'count' }, count),
        h('div', { className: 'subtitle' }, 
          count === 0 ? 'Start clicking!' : 
          count === 1 ? 'You clicked once!' : 
          \`You clicked \${count} times!\`
        )
      ),

      h('div', { className: 'button-group' },
        h('button', {
          className: 'btn-decrease',
          onClick: () => setCount(count - 1)
        }, '➖ Decrease'),
        
        h('button', {
          className: 'btn-reset',
          onClick: () => setCount(0)
        }, '🔄 Reset'),
        
        h('button', {
          className: 'btn-increase',
          onClick: () => setCount(count + 1)
        }, '➕ Increase')
      ),

      h('div', { className: 'info' },
        h('p', null, '💡 Each click updates the state'),
        h('p', null, '🔄 React re-renders the component'),
        h('p', null, '🧠 The count value is remembered!')
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

.counter-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.count {
  color: white;
  font-size: 5rem;
  font-weight: 700;
  margin: 10px 0;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

button {
  flex: 1;
  padding: 18px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-decrease {
  background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
  color: white;
}

.btn-decrease:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

.btn-reset {
  background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
  color: white;
}

.btn-reset:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(100, 116, 139, 0.4);
}

.btn-increase {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-increase:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

button:active {
  transform: translateY(0);
}

.info {
  padding: 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  border: 2px solid #06b6d4;
}

.info p {
  color: #0891b2;
  font-size: 13px;
  margin: 5px 0;
  font-weight: 500;
}`}
          />
        </div>

        {/* When to Use State */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<TrendingUp className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="When to Use State"
              description="Common scenarios where state is needed"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Use State When...</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Component needs to <strong>remember</strong> information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Value <strong>changes over time</strong> based on user actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Updating should <strong>trigger re-render</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Value is <strong>local</strong> to this component</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Don't Use State When...</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Value <strong>never changes</strong> (use const)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Value comes <strong>from parent</strong> (use props)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Can be <strong>calculated</strong> from existing state/props</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Need to <strong>access it outside</strong> render (use ref)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">Common State Examples</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <Badge className="mb-2">Forms</Badge>
                  <p className="text-xs text-muted-foreground">Input values, checkbox states</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <Badge className="mb-2">Toggles</Badge>
                  <p className="text-xs text-muted-foreground">Modals open/closed, menus</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <Badge className="mb-2">Counters</Badge>
                  <p className="text-xs text-muted-foreground">Likes, views, cart items</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <Badge className="mb-2">Current Items</Badge>
                  <p className="text-xs text-muted-foreground">Selected tab, active image</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <Badge className="mb-2">Lists</Badge>
                  <p className="text-xs text-muted-foreground">Todo items, shopping cart</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <Badge className="mb-2">Loading</Badge>
                  <p className="text-xs text-muted-foreground">Is loading, has error</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Multiple State Variables */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Multiple State Variables"
            description="Components can have as many state variables as needed!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Form with Multiple States"
            description="Name and age stored in separate state variables"
            colorTheme="cyan"
            react={`import { useState } from 'react';

function UserForm() {
  // Multiple state variables for different values
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="container">
      <h1>👤 User Profile</h1>
      
      <div className="form">
        <div className="form-group">
          <label>📝 Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>🎂 Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="student"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
          />
          <label htmlFor="student">🎓 I am a student</label>
        </div>
      </div>

      <div className="preview">
        <h3>📊 Your Info</h3>
        <div className="info-grid">
          <div className="info-item">
            <span>Name:</span>
            <span>{name || 'Not entered'}</span>
          </div>
          <div className="info-item">
            <span>Age:</span>
            <span>{age || 'Not entered'}</span>
          </div>
          <div className="info-item">
            <span>Student:</span>
            <span>{isStudent ? 'Yes ✓' : 'No ✗'}</span>
          </div>
        </div>
      </div>

      <div className="code-display">
        <p>💻 Current State:</p>
        <pre>
          name: "{name}"
          age: {age}
          isStudent: {isStudent}
        </pre>
      </div>
    </div>
  );
}

export default UserForm;`}
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
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);

    return h('div', { className: 'container' },
      h('h1', null, '👤 User Profile'),
      
      h('div', { className: 'form' },
        h('div', { className: 'form-group' },
          h('label', null, '📝 Name'),
          h('input', {
            type: 'text',
            className: 'input',
            placeholder: 'Enter your name',
            value: name,
            onChange: (e) => setName(e.target.value)
          })
        ),

        h('div', { className: 'form-group' },
          h('label', null, '🎂 Age'),
          h('input', {
            type: 'number',
            className: 'input',
            placeholder: 'Enter your age',
            value: age,
            onChange: (e) => setAge(Number(e.target.value))
          })
        ),

        h('div', { className: 'form-group checkbox' },
          h('input', {
            type: 'checkbox',
            id: 'student',
            checked: isStudent,
            onChange: (e) => setIsStudent(e.target.checked)
          }),
          h('label', { htmlFor: 'student' }, '🎓 I am a student')
        )
      ),

      h('div', { className: 'preview' },
        h('h3', null, '📊 Your Info'),
        h('div', { className: 'info-grid' },
          h('div', { className: 'info-item' },
            h('span', { className: 'info-label' }, 'Name:'),
            h('span', { className: 'info-value' }, name || 'Not entered')
          ),
          h('div', { className: 'info-item' },
            h('span', { className: 'info-label' }, 'Age:'),
            h('span', { className: 'info-value' }, age || 'Not entered')
          ),
          h('div', { className: 'info-item' },
            h('span', { className: 'info-label' }, 'Student:'),
            h('span', { className: 'info-value' }, isStudent ? 'Yes ✓' : 'No ✗')
          )
        )
      ),

      h('div', { className: 'code-display' },
        h('p', { className: 'code-title' }, '💻 Current State:'),
        h('pre', null, 
          \`name: "\${name}"\\nage: \${age}\\nisStudent: \${isStudent}\`
        )
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

.form {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 25px;
  border-radius: 16px;
  border: 3px solid #06b6d4;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #0891b2;
  margin-bottom: 8px;
  font-size: 14px;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #06b6d4;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-group.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-group.checkbox input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.form-group.checkbox label {
  margin: 0;
  cursor: pointer;
}

.preview {
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  padding: 25px;
  border-radius: 16px;
  border: 3px solid #8b5cf6;
  margin-bottom: 20px;
}

.preview h3 {
  color: #7c3aed;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid #c4b5fd;
}

.info-label {
  font-weight: 600;
  color: #7c3aed;
}

.info-value {
  color: #1f2937;
  font-weight: 500;
}

.code-display {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #475569;
}

.code-title {
  color: #94a3b8;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

pre {
  color: #e2e8f0;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}`}
          />
        </div>

        {/* Rules of Hooks */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Rules of Hooks"
              description="Important rules you must follow when using Hooks"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Hooks are special functions that must follow specific rules. Breaking these rules will cause bugs or errors!
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Only Call at the Top Level</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Don't call Hooks inside loops, conditions, or nested functions. Always use Hooks at the top level of your component.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border-2 border-red-300">
                        <Badge className="bg-red-500 mb-2">❌ Wrong</Badge>
                        <div className="font-mono text-xs">
                          <div>if (condition) {'{'}</div>
                          <div className="pl-4 text-red-600">const [x, setX] = useState(0);</div>
                          <div>{'}'}</div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border-2 border-green-300">
                        <Badge className="bg-green-500 mb-2">✅ Correct</Badge>
                        <div className="font-mono text-xs">
                          <div className="text-green-600">const [x, setX] = useState(0);</div>
                          <div>if (condition) {'{'}</div>
                          <div className="pl-4">setX(5);</div>
                          <div>{'}'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Only Call from React Functions</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Only call Hooks from React function components or custom Hooks. Don't call them from regular JavaScript functions.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border-2 border-red-300">
                        <Badge className="bg-red-500 mb-2">❌ Wrong</Badge>
                        <div className="font-mono text-xs">
                          <div>function utility() {'{'}</div>
                          <div className="pl-4 text-red-600">const [x] = useState(0);</div>
                          <div>{'}'}</div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border-2 border-green-300">
                        <Badge className="bg-green-500 mb-2">✅ Correct</Badge>
                        <div className="font-mono text-xs">
                          <div className="text-green-600">function MyComponent() {'{'}</div>
                          <div className="pl-4">const [x] = useState(0);</div>
                          <div>{'}'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Why These Rules?</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                React relies on the order Hooks are called to track state correctly. Breaking these rules confuses React and causes bugs!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Remember these important points about state"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">State is Memory</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State lets components remember information between renders. Regular variables reset on every render.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use useState</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Call useState with initial value. It returns [currentValue, setterFunction] for updating.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Triggers Re-render</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Calling the setter function tells React to re-render with the new value.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-300">Follow the Rules</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always call Hooks at the top level and only from React functions.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Next Steps</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                You now understand state basics! Next, you'll learn about how React renders and commits changes to the DOM.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
