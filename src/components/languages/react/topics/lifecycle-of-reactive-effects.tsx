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
  Play,
  Square,
  RotateCcw,
  Zap,
  Link,
  Unlink,
  Repeat,
} from 'lucide-react';

export default function LifecycleOfReactiveEffects() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="React · Escape Hatches"
        title="Lifecycle of Reactive Effects"
        description="Understand how Effects connect, disconnect, and re-synchronize with external systems throughout a component's lifecycle."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Lifecycle of an Effect */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Repeat className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Lifecycle of an Effect"
              description="Mount, Re-synchronize, and Unmount"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Every Effect has a lifecycle that's <strong>independent</strong> from your component. Effects describe how to <strong>synchronize</strong> an external system.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                    <Link className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">1. Setup</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Effect <strong>starts synchronizing</strong> when component mounts or dependencies change.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs text-green-600 dark:text-green-400">
                  // Connect to server
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">2. Cleanup</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Effect <strong>stops synchronizing</strong> before re-running or unmounting.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs text-orange-600 dark:text-orange-400">
                  // Disconnect from server
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">3. Re-sync</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Effect <strong>re-synchronizes</strong> with new dependency values.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs text-blue-600 dark:text-blue-400">
                  // Connect again with new data
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Think in terms of <strong>start synchronizing</strong> and <strong>stop synchronizing</strong>, not "mount" and "unmount". Effects can start and stop multiple times!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How React Sees Effects */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="How React Verifies Effect Re-synchronization"
              description="React's development mode behavior"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In <strong>development mode</strong>, React immediately runs setup and cleanup one extra time after mounting to help you find bugs.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Development vs Production</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-orange-500">Development</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-gray-700 dark:text-gray-300">Mount → Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-gray-700 dark:text-gray-300">Cleanup (test)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-gray-700 dark:text-gray-300">Setup again</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-500">Production</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-gray-700 dark:text-gray-300">Mount → Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs">-</div>
                      <span className="text-gray-400 dark:text-gray-600">No extra cleanup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs">-</div>
                      <span className="text-gray-400 dark:text-gray-600">No extra setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <AlertCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Why the Extra Cycle?</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                This stress-tests your Effect to ensure your cleanup properly "mirrors" the setup. If you see issues, your cleanup is missing some logic!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Chat Room Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Play className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Example: Chat Room Connection"
            description="Watch Effect lifecycle in action"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Chat Room with Lifecycle"
            description="Connect/disconnect as room changes"
            colorTheme="cyan"
            react={`function ChatRoom({ roomId }) {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    // Setup: Start synchronizing
    const connection = {
      id: roomId,
      status: 'connected'
    };
    
    setMessages(prev => [...prev, 
      '🟢 Connected to ' + roomId
    ]);

    // Cleanup: Stop synchronizing
    return () => {
      setMessages(prev => [...prev, 
        '🔴 Disconnected from ' + roomId
      ]);
    };
  }, [roomId]); // Re-sync when roomId changes

  return (
    <div className="chat-container">
      <h2>Room: {roomId}</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [room, setRoom] = React.useState('general');

  return (
    <div className="container">
      <h1>💬 Chat App</h1>
      
      <div className="rooms">
        <button 
          onClick={() => setRoom('general')}
          className={room === 'general' ? 'active' : ''}
        >
          General
        </button>
        <button 
          onClick={() => setRoom('travel')}
          className={room === 'travel' ? 'active' : ''}
        >
          Travel
        </button>
        <button 
          onClick={() => setRoom('music')}
          className={room === 'music' ? 'active' : ''}
        >
          Music
        </button>
      </div>

      <ChatRoom roomId={room} />

      <div className="info">
        💡 Watch cleanup run before re-sync!
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

  function ChatRoom({ roomId }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      const connection = {
        id: roomId,
        status: 'connected'
      };
      
      setMessages(prev => [...prev, 
        '🟢 Connected to ' + roomId
      ]);

      return () => {
        setMessages(prev => [...prev, 
          '🔴 Disconnected from ' + roomId
        ]);
      };
    }, [roomId]);

    return h('div', { className: 'chat-container' },
      h('h2', null, 'Room: ' + roomId),
      h('div', { className: 'messages' },
        messages.map((msg, i) =>
          h('div', { key: i, className: 'message' }, msg)
        )
      )
    );
  }

  function App() {
    const [room, setRoom] = useState('general');

    return h('div', { className: 'container' },
      h('h1', null, '💬 Chat App'),
      
      h('div', { className: 'rooms' },
        h('button', {
          onClick: () => setRoom('general'),
          className: room === 'general' ? 'active' : ''
        }, 'General'),
        h('button', {
          onClick: () => setRoom('travel'),
          className: room === 'travel' ? 'active' : ''
        }, 'Travel'),
        h('button', {
          onClick: () => setRoom('music'),
          className: room === 'music' ? 'active' : ''
        }, 'Music')
      ),

      h(ChatRoom, { roomId: room }),

      h('div', { className: 'info' },
        '💡 Watch cleanup run before re-sync!'
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
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.rooms {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 25px;
}

.rooms button {
  padding: 12px;
  background: #f3f4f6;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.rooms button:hover {
  background: #e5e7eb;
}

.rooms button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.chat-container {
  background: #f9fafb;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  min-height: 300px;
}

.chat-container h2 {
  color: #667eea;
  font-size: 20px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e5e7eb;
}

.messages {
  max-height: 250px;
  overflow-y: auto;
}

.message {
  padding: 10px 15px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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

  .rooms button {
    background: #374151;
    color: #9ca3af;
    border-color: #4b5563;
  }

  .rooms button:hover {
    background: #4b5563;
  }

  .rooms button.active {
    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
    color: white;
    border-color: #60a5fa;
  }

  .chat-container {
    background: #111827;
  }

  .chat-container h2 {
    color: #60a5fa;
    border-color: #374151;
  }

  .message {
    background: #1f2937;
    color: #e5e7eb;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Understanding Re-synchronization */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Effect Re-synchronization Process"
              description="What happens when dependencies change"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">When Dependencies Change</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-orange-700 dark:text-orange-300 mb-1">Cleanup Previous Effect</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      React runs the cleanup function from the previous render with the old values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-green-700 dark:text-green-300 mb-1">Run New Effect</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      React runs your Effect function with the new values from this render.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-1">Repeat as Needed</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This cycle repeats every time dependencies change, keeping your Effect in sync.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Cleanup Timing</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Cleanup always runs <strong>before</strong> the next Effect runs. This ensures old connections are closed before new ones open!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Each Render's Effect */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Each Render Has Its Own Effect"
              description="Effects are snapshots of their render"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Each render's Effect "sees" the props and state from <strong>that specific render</strong>. Effects don't "watch" values - they use the values from their render.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold mb-4 text-green-700 dark:text-green-300">Example Timeline</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <div className="font-bold text-green-700 dark:text-green-300 mb-2">Render 1: roomId = "general"</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Effect sees roomId = "general" → Connect to "general"
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500">
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">roomId changes to "travel"</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Cleanup runs with "general" → Disconnect from "general"
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <div className="font-bold text-green-700 dark:text-green-300 mb-2">Render 2: roomId = "travel"</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Effect sees roomId = "travel" → Connect to "travel"
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <Link className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Setup & Cleanup</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Think of Effects as starting and stopping synchronization, not mounting/unmounting.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Re-synchronization</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cleanup runs before re-running Effect with new dependency values.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Independent Lifecycle</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each Effect has its own lifecycle, separate from the component's lifecycle.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Dev Mode Testing</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React runs an extra setup+cleanup cycle in development to verify your cleanup works.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Mental Model</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Don't think "this Effect runs after mount". Instead think "this Effect starts synchronizing after render, and stops before the next synchronization or unmount."
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
