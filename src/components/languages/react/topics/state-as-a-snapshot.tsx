'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Camera,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  RefreshCw,
  Sparkles,
  Image,
  Zap,
  Eye,
  Film,
} from 'lucide-react';

export default function StateAsASnapshot() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Camera}
        category="React · Adding Interactivity"
        title="State as a Snapshot"
        description="Understand how state behaves like a snapshot in time. Learn why setting state doesn't change the variable in the current render, and how React schedules updates."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Introduction */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Camera className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="State is Like a Photograph"
              description="Each render sees its own snapshot of state"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              State might seem like a regular variable that you can read and write. However, state behaves more like a <strong>snapshot</strong>. Setting it does not change the state variable you already have, but instead triggers a re-render with a new snapshot.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-center text-cyan-700 dark:text-cyan-300">📸 Think of State Like Taking Photos</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-3xl">
                      📸
                    </div>
                  </div>
                  <h5 className="font-bold text-center mb-2 text-purple-700 dark:text-purple-300">Photo 1</h5>
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                    count = 0
                  </p>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    First render snapshot
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-3xl">
                      📸
                    </div>
                  </div>
                  <h5 className="font-bold text-center mb-2 text-blue-700 dark:text-blue-300">Photo 2</h5>
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                    count = 1
                  </p>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Second render snapshot
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl">
                      📸
                    </div>
                  </div>
                  <h5 className="font-bold text-center mb-2 text-green-700 dark:text-green-300">Photo 3</h5>
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                    count = 2
                  </p>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Third render snapshot
                  </p>
                </div>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                Each render is like a separate photo - they don't change each other!
              </p>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Setting state only changes it for the <strong>next</strong> render. During the current render, state remains unchanged.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Setting State Triggers Renders */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Setting State Requests a New Render"
              description="State changes don't happen immediately"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              You might think that when you click a button, the state changes immediately. But that's not quite right! <strong>Setting state requests a new render</strong> - it doesn't change the value in the current code that's already running.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">What Happens When You Click</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Event Handler Runs</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      React calls your onClick handler with the current snapshot of state
                    </p>
                    <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-900 rounded font-mono text-xs">
                      setNumber(number + 1) // number is 0
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-purple-500" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">React Schedules Update</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      React remembers to re-render with number = 1 on the next render
                    </p>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                      ⚠️ number is still 0 in the current render!
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-purple-500" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Next Render</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      React calls your component again with the new snapshot: number = 1
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Common Mistake</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Many beginners expect state to change immediately. This leads to bugs when they try to use the "updated" value right after setting it!
                  </p>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded border-2 border-red-300 dark:border-red-700">
                    <div className="font-mono text-xs text-slate-800 dark:text-slate-200">
                      <div>setNumber(number + 1);</div>
                      <div className="text-red-600 dark:text-red-400">console.log(number); // Still 0, not 1!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See the Snapshot Effect"
            description="Click and see how state doesn't change mid-render"
            size="lg"
          />

          <FrontendCodePreview
            title="State Snapshot Demo"
            description="Click +3 and watch what happens"
            colorTheme="cyan"
            react={`function Counter() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="container">
      <h1>🔢 State Snapshot Demo</h1>
      
      <div className="display-box">
        <div className="label">Current Number</div>
        <div className="number">{number}</div>
      </div>

      <button 
        className="btn-primary"
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>

      <div className="explanation">
        <h3>What You Might Expect</h3>
        <p>Click +3 → number becomes 3</p>
        
        <h3>What Actually Happens</h3>
        <p>Click +3 → number becomes 1</p>
        
        <div className="why">
          <h4>Why? 🤔</h4>
          <div className="code-block">
            <div>setNumber(0 + 1); // 0 is the snapshot</div>
            <div>setNumber(0 + 1); // Still 0!</div>
            <div>setNumber(0 + 1); // Still 0!</div>
          </div>
          <p className="note">
            All three setNumber calls use the same snapshot (number = {number})
          </p>
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
      h('h1', null, '🔢 State Snapshot Demo'),
      
      h('div', { className: 'display-box' },
        h('div', { className: 'label' }, 'Current Number'),
        h('div', { className: 'number' }, number)
      ),

      h('button', {
        className: 'btn-primary',
        onClick: () => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }
      }, '+3'),

      h('div', { className: 'explanation' },
        h('h3', null, 'What You Might Expect'),
        h('p', null, 'Click +3 → number becomes 3'),
        
        h('h3', null, 'What Actually Happens'),
        h('p', null, 'Click +3 → number becomes 1'),
        
        h('div', { className: 'why' },
          h('h4', null, 'Why? 🤔'),
          h('div', { className: 'code-block' },
            h('div', null, 'setNumber(0 + 1); // 0 is the snapshot'),
            h('div', null, 'setNumber(0 + 1); // Still 0!'),
            h('div', null, 'setNumber(0 + 1); // Still 0!')
          ),
          h('p', { className: 'note' },
            'All three setNumber calls use the same snapshot (number = ' + number + ')'
          )
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
  max-width: 600px;
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

.btn-primary {
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

.explanation {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 25px;
  border-radius: 16px;
  border: 3px solid #06b6d4;
  text-align: left;
}

.explanation h3 {
  color: #0891b2;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 15px;
}

.explanation h3:first-child {
  margin-top: 0;
}

.explanation p {
  color: #1f2937;
  font-size: 14px;
  margin-bottom: 10px;
}

.why {
  margin-top: 20px;
  padding: 15px;
  background: white;
  border-radius: 12px;
  border: 2px solid #8b5cf6;
}

.why h4 {
  color: #7c3aed;
  font-size: 15px;
  margin-bottom: 12px;
}

.code-block {
  background: #1e293b;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  margin-bottom: 12px;
}

.code-block div {
  color: #e2e8f0;
  margin: 4px 0;
}

.note {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #f59e0b;
  font-size: 13px;
  color: #92400e;
  font-weight: 600;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .container {
    background: #1f2937;
    color: #e5e7eb;
  }

  h1 {
    color: #60a5fa;
  }

  .explanation {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .explanation h3 {
    color: #60a5fa;
  }

  .explanation p {
    color: #e5e7eb;
  }

  .why {
    background: #312e81;
    border-color: #8b5cf6;
  }

  .why h4 {
    color: #c4b5fd;
  }

  .note {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* State Over Time */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="State Over Time"
              description="How state values persist across different event handlers"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A state variable's value never changes within a render, even if the event handler's code is asynchronous. React keeps the state values "fixed" within one render's event handlers.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Example: Alert with Delay</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Imagine you click a button that will show an alert after 5 seconds:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      <div>const [number, setNumber] = useState(0);</div>
                      <div className="mt-2"></div>
                      <div>{'<button onClick={() => {'}</div>
                      <div className="pl-4">setNumber(number + 5);</div>
                      <div className="pl-4">setTimeout(() => {'{'}</div>
                      <div className="pl-8">alert(number); // What will this show?</div>
                      <div className="pl-4">{'}, 3000);'}</div>
                      <div>{'}>{'}</div>
                      <div className="pl-2">+5</div>
                      <div>{'</button>'}</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <h5 className="font-bold text-red-700 dark:text-red-300">You Might Think</h5>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The alert shows the new value: 5
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <h5 className="font-bold text-green-700 dark:text-green-300">Actually Shows</h5>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The alert shows the old value: 0
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <h5 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Why?</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The alert uses the snapshot of state from when the event handler was created. Even though you schedule a re-render with number = 5, the setTimeout callback "remembers" number = 0 from that render.
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Eye className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">State is Isolated Per Render</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                Each render has its own event handlers, and each event handler captures the state values from that specific render.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Example with Timer */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Film className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Try the Timer Effect"
            description="See how state snapshots work with delayed actions"
            size="lg"
          />

          <FrontendCodePreview
            title="Timer Snapshot Demo"
            description="Click 'Show in 3s', then change the number before message appears"
            colorTheme="cyan"
            react={`function TimerCounter() {
  const [number, setNumber] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [isWaiting, setIsWaiting] = React.useState(false);

  return (
    <div className="container">
      <h1>⏰ State Snapshot with Timer</h1>
      
      <div className="display">
        <div className="current-number">
          <div className="label">Current Number</div>
          <div className="value">{number}</div>
        </div>
      </div>

      {message && (
        <div className="message-box">
          📬 Message: The number was <strong>{message}</strong>
        </div>
      )}

      {isWaiting && (
        <div className="waiting-box">
          ⏳ Waiting 3 seconds... Try changing the number now!
        </div>
      )}

      <div className="button-group">
        <button 
          className="btn-increment"
          onClick={() => setNumber(number + 1)}
        >
          +1
        </button>

        <button 
          className="btn-alert"
          onClick={() => {
            setMessage('');
            setIsWaiting(true);
            setTimeout(() => {
              setMessage(number);
              setIsWaiting(false);
            }, 3000);
          }}
        >
          Show in 3s
        </button>
      </div>

      <div className="instructions">
        <h3>🎯 Try This:</h3>
        <ol>
          <li>Click "Show in 3s"</li>
          <li>Quickly click "+1" multiple times</li>
          <li>Wait 3 seconds for the message</li>
          <li>Notice: Message shows the OLD number!</li>
        </ol>
        
        <div className="explanation">
          <p>
            <strong>Why?</strong> The setTimeout captures the snapshot 
            of <code>number</code> from when you clicked the button.
          </p>
          <p>
            Even if you change <code>number</code> afterward, 
            the callback remembers the old value!
          </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<TimerCounter />, document.getElementById('root'));`}
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

  function TimerCounter() {
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);

    return h('div', { className: 'container' },
      h('h1', null, '⏰ State Snapshot with Timer'),
      
      h('div', { className: 'display' },
        h('div', { className: 'current-number' },
          h('div', { className: 'label' }, 'Current Number'),
          h('div', { className: 'value' }, number)
        )
      ),

      message && h('div', { className: 'message-box' },
        '📬 Message: The number was ',
        h('strong', null, message)
      ),

      isWaiting && h('div', { className: 'waiting-box' },
        '⏳ Waiting 3 seconds... Try changing the number now!'
      ),

      h('div', { className: 'button-group' },
        h('button', {
          className: 'btn-increment',
          onClick: () => setNumber(number + 1)
        }, '+1'),

        h('button', {
          className: 'btn-alert',
          onClick: () => {
            setMessage('');
            setIsWaiting(true);
            setTimeout(() => {
              setMessage(number);
              setIsWaiting(false);
            }, 3000);
          }
        }, 'Show in 3s')
      ),

      h('div', { className: 'instructions' },
        h('h3', null, '🎯 Try This:'),
        h('ol', null,
          h('li', null, 'Click "Show in 3s"'),
          h('li', null, 'Quickly click "+1" multiple times'),
          h('li', null, 'Wait 3 seconds for the message'),
          h('li', null, 'Notice: Message shows the OLD number!')
        ),
        
        h('div', { className: 'explanation' },
          h('p', null,
            h('strong', null, 'Why? '),
            'The setTimeout captures the snapshot of ',
            h('code', null, 'number'),
            ' from when you clicked the button.'
          ),
          h('p', null,
            'Even if you change ',
            h('code', null, 'number'),
            ' afterward, the callback remembers the old value!'
          )
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(TimerCounter));
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
  max-width: 650px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.display {
  margin-bottom: 30px;
}

.current-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.value {
  color: white;
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.message-box {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
  animation: slideIn 0.3s ease;
}

.message-box strong {
  font-size: 24px;
  color: #fef3c7;
}

.waiting-box {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  animation: pulse 1.5s ease-in-out infinite;
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

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.button-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
}

button {
  padding: 18px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-increment {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-increment:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.btn-alert {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.btn-alert:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
}

button:active {
  transform: translateY(0);
}

.instructions {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 25px;
  border-radius: 16px;
  border: 3px solid #06b6d4;
}

.instructions h3 {
  color: #0891b2;
  font-size: 18px;
  margin-bottom: 15px;
}

.instructions ol {
  margin-left: 20px;
  margin-bottom: 20px;
}

.instructions li {
  color: #1f2937;
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.5;
}

.explanation {
  background: white;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #8b5cf6;
  margin-top: 15px;
}

.explanation p {
  color: #1f2937;
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.6;
}

.explanation code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #7c3aed;
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

  .instructions {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .instructions h3 {
    color: #60a5fa;
  }

  .instructions li {
    color: #e5e7eb;
  }

  .explanation {
    background: #312e81;
    border-color: #8b5cf6;
  }

  .explanation p {
    color: #e5e7eb;
  }

  .explanation code {
    background: #1e293b;
    color: #c4b5fd;
  }

  .message-box {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
  }

  .waiting-box {
    background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  }
}`}
          />
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Remember these important points about state snapshots"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">State is a Snapshot</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Setting state doesn't change the variable in the current render - it schedules a re-render with a new snapshot.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Each Render is Fixed</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State values are fixed within one render. Even async code uses that render's snapshot.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">No Immediate Changes</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  You can't read the "new" state immediately after setting it. Use the new value in the next render instead.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Event Handlers Remember</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Event handlers capture state from their render, even if they run later (like in setTimeout).
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Think of Renders as Photographs</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Each render is like taking a photo - it captures the state at that moment. When you look at an old photo, you see how things were then, not how they are now!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
