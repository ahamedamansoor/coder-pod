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
} from 'lucide-react';

export default function QueueingASeriesOfStateUpdates() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ListOrdered}
        category="React · Adding Interactivity"
        title="Queueing a Series of State Updates"
        description="Learn how to update state multiple times before the next render using updater functions. Understand React's batching and queuing system."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Problem */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Problem with Multiple Updates"
              description="Why calling setState multiple times doesn't always work as expected"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              You learned that state acts like a snapshot. But what if you want to update the same state variable <strong>multiple times</strong> before the next render? Let's see what happens!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">❌ This Doesn't Work as Expected</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`const [number, setNumber] = useState(0);

// You click a button that does:
setNumber(number + 1);  // 0 + 1 = 1
setNumber(number + 1);  // 0 + 1 = 1
setNumber(number + 1);  // 0 + 1 = 1

// Result: number becomes 1, not 3!`}</code>
                </pre>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong className="text-red-700 dark:text-red-400">Why does this happen?</strong>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each <code className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded">setNumber(number + 1)</code> uses the same snapshot where <code className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded">number = 0</code>. So all three calls are actually <code className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded">setNumber(1)</code>!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">There's a Solution!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                React provides a way to update state multiple times before the next render using <strong>updater functions</strong>!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Updater Functions */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Repeat className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Updater Functions"
              description="Pass a function instead of a value"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Instead of passing the next state value directly, you can pass a <strong>function</strong> that calculates it based on the previous state in the queue.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Regular Update</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>setNumber(number + 1);</div>
                    <div className="mt-2 text-red-600 dark:text-red-400">// Uses snapshot value</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Replaces the pending state with this value
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Updater Function</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>setNumber(n =&gt; n + 1);</div>
                    <div className="mt-2 text-green-600 dark:text-green-400">// Uses queue value</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Adds this function to the update queue
                </p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">✅ This Works Correctly!</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`const [number, setNumber] = useState(0);

// You click a button that does:
setNumber(n => n + 1);  // n = 0, returns 1
setNumber(n => n + 1);  // n = 1, returns 2
setNumber(n => n + 1);  // n = 2, returns 3

// Result: number becomes 3! ✓`}</code>
                </pre>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-green-700 dark:text-green-400">Each updater function</strong> receives the pending state and returns the next state. React processes them in order!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See the Difference"
            description="Compare regular updates vs updater functions"
            size="lg"
          />

          <FrontendCodePreview
            title="Regular Updates vs Updater Functions"
            description="Click both buttons and see the difference!"
            colorTheme="cyan"
            react={`function Counter() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="container">
      <h1>🔢 State Update Comparison</h1>
      
      <div className="display-box">
        <div className="label">Current Number</div>
        <div className="number">{number}</div>
      </div>

      <div className="button-group">
        <button 
          className="btn-bad"
          onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
          }}
        >
          ❌ +3 (Wrong Way)
        </button>

        <button 
          className="btn-good"
          onClick={() => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
          }}
        >
          ✅ +3 (Right Way)
        </button>
      </div>

      <div className="explanation">
        <div className="section bad">
          <h3>❌ Regular Updates</h3>
          <div className="code">
            <div>setNumber(0 + 1); // = 1</div>
            <div>setNumber(0 + 1); // = 1</div>
            <div>setNumber(0 + 1); // = 1</div>
          </div>
          <p>All use the same snapshot!</p>
          <p className="result">Result: {number} → 1</p>
        </div>

        <div className="section good">
          <h3>✅ Updater Functions</h3>
          <div className="code">
            <div>setNumber(n => 0 + 1); // = 1</div>
            <div>setNumber(n => 1 + 1); // = 2</div>
            <div>setNumber(n => 2 + 1); // = 3</div>
          </div>
          <p>Each uses the queue value!</p>
          <p className="result">Result: {number} → 3</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));`}
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
    const [number, setNumber] = useState(0);

    return h('div', { className: 'container' },
      h('h1', null, '🔢 State Update Comparison'),
      
      h('div', { className: 'display-box' },
        h('div', { className: 'label' }, 'Current Number'),
        h('div', { className: 'number' }, number)
      ),

      h('div', { className: 'button-group' },
        h('button', {
          className: 'btn-bad',
          onClick: () => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
          }
        }, '❌ +3 (Wrong Way)'),

        h('button', {
          className: 'btn-good',
          onClick: () => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
          }
        }, '✅ +3 (Right Way)')
      ),

      h('div', { className: 'explanation' },
        h('div', { className: 'section bad' },
          h('h3', null, '❌ Regular Updates'),
          h('div', { className: 'code' },
            h('div', null, 'setNumber(0 + 1); // = 1'),
            h('div', null, 'setNumber(0 + 1); // = 1'),
            h('div', null, 'setNumber(0 + 1); // = 1')
          ),
          h('p', null, 'All use the same snapshot!'),
          h('p', { className: 'result' }, 'Result: ' + number + ' → 1')
        ),

        h('div', { className: 'section good' },
          h('h3', null, '✅ Updater Functions'),
          h('div', { className: 'code' },
            h('div', null, 'setNumber(n => 0 + 1); // = 1'),
            h('div', null, 'setNumber(n => 1 + 1); // = 2'),
            h('div', null, 'setNumber(n => 2 + 1); // = 3')
          ),
          h('p', null, 'Each uses the queue value!'),
          h('p', { className: 'result' }, 'Result: ' + number + ' → 3')
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
  text-align: center;
}

h1 {
  color: #667eea;
  margin-bottom: 30px;
  font-size: 2rem;
}

.display-box {
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

.number {
  color: white;
  font-size: 5rem;
  font-weight: 700;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
}

button {
  padding: 20px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
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

button:active {
  transform: translateY(0);
}

.explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section {
  padding: 20px;
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
  font-size: 16px;
  margin-bottom: 12px;
}

.section.bad h3 {
  color: #dc2626;
}

.section.good h3 {
  color: #059669;
}

.code {
  background: white;
  padding: 12px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  margin-bottom: 12px;
  border: 2px solid #e5e7eb;
}

.code div {
  color: #1f2937;
  margin: 4px 0;
}

.section p {
  font-size: 13px;
  color: #1f2937;
  margin: 8px 0;
  font-weight: 500;
}

.result {
  background: white;
  padding: 10px;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 12px;
}

.section.bad .result {
  color: #dc2626;
  border: 2px solid #ef4444;
}

.section.good .result {
  color: #059669;
  border: 2px solid #10b981;
}

@media (max-width: 768px) {
  .explanation {
    grid-template-columns: 1fr;
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

  .code {
    background: #111827;
    border-color: #374151;
  }

  .code div {
    color: #e5e7eb;
  }

  .result {
    background: #111827;
  }

  .section.bad .result {
    color: #fca5a5;
  }

  .section.good .result {
    color: #6ee7b7;
  }
}`}
          />
        </div>

        {/* How React Processes the Queue */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="How React Processes the Queue"
              description="Step by step through the update queue"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When you call <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">setNumber</code> multiple times, React adds these updates to a queue and processes them during the next render.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Example: Mixed Updates</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`const [number, setNumber] = useState(0);

setNumber(number + 5);  // Replace with 5
setNumber(n => n + 1);  // Add 1 to queue value
setNumber(42);          // Replace with 42`}</code>
                </pre>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <code className="text-sm font-mono">setNumber(0 + 5)</code>
                    <p className="text-sm text-muted-foreground mt-1">Queue value: 5</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-indigo-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <code className="text-sm font-mono">setNumber(n =&gt; n + 1)</code>
                    <p className="text-sm text-muted-foreground mt-1">Queue value: 5 + 1 = 6</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-indigo-500" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <code className="text-sm font-mono">setNumber(42)</code>
                    <p className="text-sm text-muted-foreground mt-1">Queue value: 42 (replaced)</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <p className="font-bold text-green-700 dark:text-green-300">Final Result: number = 42</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Processing Order</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                React processes the queue in order. Regular values replace the queue, while updater functions modify it based on the current queue value.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Naming Convention */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Naming Convention"
              description="A helpful pattern for updater functions"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              It's common to name the updater function argument by the first letter of the corresponding state variable. This makes the code more readable!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Good Examples</h4>
                <div className="space-y-3">
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">setCount(c =&gt; c + 1)</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">setAge(a =&gt; a + 1)</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">setEnabled(e =&gt; !e)</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-300">Also Valid</h4>
                <div className="space-y-3">
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-blue-600 dark:text-blue-400">setCount(prev =&gt; prev + 1)</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-blue-600 dark:text-blue-400">setAge(prevAge =&gt; prevAge + 1)</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-blue-600 dark:text-blue-400">setEnabled(current =&gt; !current)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-emerald-700 dark:text-emerald-300">💡 Tip:</strong> Use whatever naming makes your code most readable!
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The first letter convention is just a helpful pattern. Choose names that make sense in your context.
              </p>
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
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Use Updater Functions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When updating state multiple times, pass a function: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">setNumber(n =&gt; n + 1)</code>
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">React Queues Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All state updates are queued and processed in order during the next render.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Functions Use Queue Value</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Updater functions receive the current queue value, not the snapshot value.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Regular Values Replace</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Passing a regular value replaces the entire queue with that value.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use Updater Functions</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Use updater functions whenever you need to update state based on the previous value, especially when calling setState multiple times in the same event handler!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
