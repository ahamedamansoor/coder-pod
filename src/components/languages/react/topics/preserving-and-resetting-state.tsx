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
  Key,
  Sparkles,
  GitBranch,
  Zap,
  Layers,
  Package,
} from 'lucide-react';

export default function PreservingAndResettingState() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="React · Managing State"
        title="Preserving and Resetting State"
        description="Learn when React preserves or resets state based on component position in the UI tree. Master using keys to control state."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* State is Tied to Position */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="State is Tied to Position in the Tree"
              description="Not to the component itself"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              React builds a <strong>UI tree</strong> from your component structure. When you give a component state, you might think the state "lives" inside the component. But actually, the state is held <strong>inside React</strong>, and React associates each piece of state with the correct component by its <strong>position in the UI tree</strong>.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">How React Tracks State</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Position in Tree</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        React identifies components by their position: "first Counter", "second Counter", etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Same Position = Same State</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        As long as a component stays at the same position, React preserves its state.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Removed = State Reset</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        When a component is removed from the tree, React destroys its state.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                State is not really "inside" your component. It's held by React, and associated with the component's position in the tree!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Same Position Preserves State */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Same Position Preserves State"
              description="State survives re-renders"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When the <strong>same component</strong> renders at the <strong>same position</strong>, React preserves its state. Even if the parent re-renders, the child component's state stays intact.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">✅ State Preserved</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{'{'} isPlayerA ? (</div>
                    <div className="pl-2 text-green-600 dark:text-green-400">// Same component,</div>
                    <div className="pl-2 text-green-600 dark:text-green-400">// same position</div>
                    <div className="pl-2">&lt;Counter person="Taylor" /&gt;</div>
                    <div>) : (</div>
                    <div className="pl-2">&lt;Counter person="Sarah" /&gt;</div>
                    <div>) {'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Same Counter component at same position - state is preserved when switching between players!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">❌ State Reset</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>{'{'} isPlayerA ? (</div>
                    <div className="pl-2 text-red-600 dark:text-red-400">// Different components!</div>
                    <div className="pl-2">&lt;Counter person="Taylor" /&gt;</div>
                    <div>) : (</div>
                    <div className="pl-2">&lt;div&gt;&lt;Counter /&gt;&lt;/div&gt;</div>
                    <div>) {'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Different tree structure - state resets because the Counter is now nested in a div!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example 1 */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See State Preservation"
            description="Toggle checkbox - state stays!"
            size="lg"
          />

          <FrontendCodePreview
            title="Same Position Preserves State"
            description="Check the box, then toggle - score stays"
            colorTheme="cyan"
            react={`function Counter({ person }) {
  const [score, setScore] = React.useState(0);

  return (
    <div className="counter">
      <h3>{person}'s Score</h3>
      <div className="score">{score}</div>
      <button onClick={() => setScore(score + 1)}>
        Add Point
      </button>
    </div>
  );
}

function App() {
  const [showA, setShowA] = React.useState(true);

  return (
    <div className="container">
      <h1>🎯 Score Tracker</h1>
      
      <div className="toggle">
        <label>
          <input
            type="checkbox"
            checked={showA}
            onChange={(e) => setShowA(e.target.checked)}
          />
          Show Player A
        </label>
      </div>

      {showA ? (
        <Counter person="Player A" />
      ) : (
        <Counter person="Player B" />
      )}

      <div className="info">
        💡 Same Counter at same position - state preserved!
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
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function Counter({ person }) {
    const [score, setScore] = useState(0);

    return h('div', { className: 'counter' },
      h('h3', null, person + "'s Score"),
      h('div', { className: 'score' }, score),
      h('button', {
        onClick: () => setScore(score + 1)
      }, 'Add Point')
    );
  }

  function App() {
    const [showA, setShowA] = useState(true);

    return h('div', { className: 'container' },
      h('h1', null, '🎯 Score Tracker'),
      
      h('div', { className: 'toggle' },
        h('label', null,
          h('input', {
            type: 'checkbox',
            checked: showA,
            onChange: (e) => setShowA(e.target.checked)
          }),
          ' Show Player A'
        )
      ),

      showA
        ? h(Counter, { person: 'Player A' })
        : h(Counter, { person: 'Player B' }),

      h('div', { className: 'info' },
        '💡 Same Counter at same position - state preserved!'
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
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.toggle {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  margin-bottom: 25px;
}

.toggle label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #1e40af;
  cursor: pointer;
}

.toggle input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #3b82f6;
}

.counter {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 20px;
}

.counter h3 {
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
}

.score {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 48px;
  font-weight: 700;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  backdrop-filter: blur(10px);
}

.counter button {
  padding: 12px 30px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.counter button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
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

  .toggle {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .toggle label {
    color: #93c5fd;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Resetting State with Keys */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Key className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Using Keys to Reset State"
              description="Force a fresh start"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              By default, React uses position in the tree to match components. But you can give a component a <strong>key</strong> to tell React it's a different component. This makes React create a new instance with fresh state!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">How Keys Reset State</h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Badge className="mb-2 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700">
                    Without Key
                  </Badge>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>&lt;Counter person={'{'}person{'}'} /&gt;</div>
                      <div className="mt-1 text-red-600 dark:text-red-400">// State preserved</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Badge className="mb-2 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                    With Key
                  </Badge>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>&lt;Counter</div>
                      <div className="pl-2">person={'{'}person{'}'}</div>
                      <div className="pl-2 text-green-600 dark:text-green-400">key={'{'}person{'}'}</div>
                      <div>/&gt;</div>
                      <div className="mt-1 text-green-600 dark:text-green-400">// State reset!</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-purple-700 dark:text-purple-400">How it works:</strong> When the key changes, React treats it as a completely different component and creates a new instance with fresh state!
                </p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">💡 Common Use Cases for Keys</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Chat apps:</strong> Reset input when switching conversations</li>
                <li>• <strong>Forms:</strong> Clear form when switching between items</li>
                <li>• <strong>Image galleries:</strong> Reset zoom when changing images</li>
                <li>• <strong>Any time</strong> you want to force a component to start fresh</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example 2 */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Keys Reset State"
            description="Compare with and without keys"
            size="lg"
          />

          <FrontendCodePreview
            title="Chat with Key Reset"
            description="Switch contacts - message input resets with key"
            colorTheme="purple"
            react={`function Chat({ contact }) {
  const [text, setText] = React.useState('');

  return (
    <div className="chat">
      <h3>Chat with {contact}</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <p className="hint">Message: "{text}"</p>
    </div>
  );
}

function App() {
  const [contact, setContact] = React.useState('Alice');

  return (
    <div className="container">
      <h1>💬 Messenger</h1>
      
      <div className="contacts">
        <button
          className={contact === 'Alice' ? 'active' : ''}
          onClick={() => setContact('Alice')}
        >
          Alice
        </button>
        <button
          className={contact === 'Bob' ? 'active' : ''}
          onClick={() => setContact('Bob')}
        >
          Bob
        </button>
        <button
          className={contact === 'Charlie' ? 'active' : ''}
          onClick={() => setContact('Charlie')}
        >
          Charlie
        </button>
      </div>

      <Chat key={contact} contact={contact} />

      <div className="info">
        💡 Key resets state when switching contacts!
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
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function Chat({ contact }) {
    const [text, setText] = useState('');

    return h('div', { className: 'chat' },
      h('h3', null, 'Chat with ' + contact),
      h('input', {
        type: 'text',
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: 'Type a message...'
      }),
      h('p', { className: 'hint' }, 'Message: "' + text + '"')
    );
  }

  function App() {
    const [contact, setContact] = useState('Alice');

    return h('div', { className: 'container' },
      h('h1', null, '💬 Messenger'),
      
      h('div', { className: 'contacts' },
        h('button', {
          className: contact === 'Alice' ? 'active' : '',
          onClick: () => setContact('Alice')
        }, 'Alice'),
        h('button', {
          className: contact === 'Bob' ? 'active' : '',
          onClick: () => setContact('Bob')
        }, 'Bob'),
        h('button', {
          className: contact === 'Charlie' ? 'active' : '',
          onClick: () => setContact('Charlie')
        }, 'Charlie')
      ),

      h(Chat, { key: contact, contact: contact }),

      h('div', { className: 'info' },
        '💡 Key resets state when switching contacts!'
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

.contacts {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.contacts button {
  flex: 1;
  padding: 12px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  color: #374151;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contacts button:hover {
  border-color: #667eea;
  transform: translateY(-2px);
}

.contacts button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.chat {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 20px;
}

.chat h3 {
  color: #667eea;
  font-size: 18px;
  margin-bottom: 15px;
}

.chat input {
  width: 100%;
  padding: 14px;
  border: 2px solid #e0e7ff;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.chat input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.hint {
  font-size: 13px;
  color: #6b7280;
  font-style: italic;
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

  .contacts button {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    color: #e5e7eb;
    border-color: #6b7280;
  }

  .contacts button:hover {
    border-color: #60a5fa;
  }

  .contacts button.active {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    border-color: #3b82f6;
  }

  .chat {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    border-color: #6b7280;
  }

  .chat h3 {
    color: #60a5fa;
  }

  .chat input {
    background: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .chat input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  .hint {
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

        {/* Different Components Reset State */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<XCircle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="Different Components Reset State"
              description="Changing component types"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When you render a <strong>different component</strong> at the same position, React resets the state of the entire subtree. This is because React sees it as a completely different component.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">Example: Switching Component Types</h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Render 1</h5>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>&lt;div&gt;</div>
                      <div className="pl-2">&lt;Counter /&gt;</div>
                      <div>&lt;/div&gt;</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Render 2</h5>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div className="text-red-600 dark:text-red-400">// Different!</div>
                      <div>&lt;section&gt;</div>
                      <div className="pl-2">&lt;Counter /&gt;</div>
                      <div>&lt;/section&gt;</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-red-700 dark:text-red-400">Result:</strong> Even though Counter is at the "same" position, its parent changed from div to section. React destroys the old tree and builds a new one - state is reset!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Rule of Thumb</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                If you want to preserve state between re-renders, the structure of your tree needs to "match up" from one render to another. Different structure = reset state!
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
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Position Matters</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React preserves state based on position in the UI tree, not the component itself.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Keys to Reset</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Add a key prop to force React to create a new component instance with fresh state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Same Position = Preserved</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Same component at same position keeps its state across re-renders.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Different = Reset</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Different component types or removed components reset state entirely.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">The Big Picture</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Understanding when state is preserved or reset helps you control your component behavior and avoid bugs. Use keys when you want to force a fresh start!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
