'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Code,
  GitBranch,
  Lightbulb,
  Zap,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  Route
} from 'lucide-react';

export default function ConditionalRendering() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={GitBranch}
        category="React · Describing the UI"
        title="Conditional Rendering"
        description="Learn how to show or hide UI elements based on conditions. Master if statements, ternary operators, and the && operator!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Route className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Conditional Rendering?"
              description="Showing different UI based on conditions - like an if statement for your interface!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Conditional rendering</strong> means displaying different content based on certain conditions. Just like how you use <code>if</code> statements in JavaScript, you can control what React components display. Show a loading spinner while data loads, display different messages for logged-in vs logged-out users, or hide features based on permissions!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-3 text-center">🔓</div>
                <h4 className="font-bold mb-2 text-center">Condition True</h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm text-center">
                  Show Content ✅
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-3 text-center">⚡</div>
                <h4 className="font-bold mb-2 text-center">React Decides</h4>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm text-center">
                  Checks Condition
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-3 text-center">🔒</div>
                <h4 className="font-bold mb-2 text-center">Condition False</h4>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded text-sm text-center">
                  Hide Content ❌
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Real World Example</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Think of Netflix: if you're logged in, you see your shows. If not, you see a login screen. That's conditional rendering!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Using If Statements"
            description="The most straightforward way to conditionally render content!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="If Statement Conditional Rendering"
            description="Show different greetings based on login status"
            colorTheme="cyan"
            react={`function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="card success">
        <h2>Welcome Back! 🎉</h2>
        <p>Great to see you again!</p>
      </div>
    );
  }
  
  return (
    <div className="card info">
      <h2>Please Log In 🔐</h2>
      <p>Sign in to continue</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
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
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
      return h('div', { className: 'card success' },
        h('h2', null, 'Welcome Back! 🎉'),
        h('p', null, 'Great to see you again!')
      );
    }
    
    return h('div', { className: 'card info' },
      h('h2', null, 'Please Log In 🔐'),
      h('p', null, 'Sign in to continue')
    );
  }

  function App() {
    return h('div', { className: 'container' },
      h(Greeting, { isLoggedIn: true }),
      h(Greeting, { isLoggedIn: false })
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  padding: 20px;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: white;
  padding: 30px 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 250px;
}

.card h2 {
  font-size: 1.8rem;
  margin: 0 0 10px 0;
}

.card p {
  font-size: 1rem;
  margin: 0;
  color: #64748b;
}

.card.success {
  border-left: 4px solid #10b981;
}

.card.success h2 {
  color: #10b981;
}

.card.info {
  border-left: 4px solid #3b82f6;
}

.card.info h2 {
  color: #3b82f6;
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Ternary Operator (? :)"
              description="A shorter, inline way to do conditional rendering!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The <strong>ternary operator</strong> is perfect when you want to conditionally render something inline within JSX. It's like a compact if-else statement: <code>condition ? trueValue : falseValue</code>
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold mb-3">Ternary Syntax</h4>
              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-muted-foreground">{'// Basic structure:'}</div>
                <div>{'{condition ? <TrueComponent /> : <FalseComponent />}'}</div>
                <div className="mt-4 text-muted-foreground">{'// Example:'}</div>
                <div>{'{isLoggedIn ? <Dashboard /> : <Login />}'}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Eye className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Ternary Operator in Action"
            description="Switch between different UI states inline!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Status Message with Ternary"
            description="Display online or offline status using the ternary operator"
            colorTheme="cyan"
            react={`function StatusBadge({ isOnline }) {
  return (
    <div className="status-card">
      <div className={isOnline ? 'indicator online' : 'indicator offline'} />
      <h3>
        {isOnline ? 'Online' : 'Offline'}
      </h3>
      <p>
        {isOnline ? '✅ You are connected' : '⚠️ Connection lost'}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <StatusBadge isOnline={true} />
      <StatusBadge isOnline={false} />
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
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function StatusBadge({ isOnline }) {
    return h('div', { className: 'status-card' },
      h('div', { className: isOnline ? 'indicator online' : 'indicator offline' }),
      h('h3', null, isOnline ? 'Online' : 'Offline'),
      h('p', null, isOnline ? '✅ You are connected' : '⚠️ Connection lost')
    );
  }

  function App() {
    return h('div', { className: 'container' },
      h(StatusBadge, { isOnline: true }),
      h(StatusBadge, { isOnline: false })
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.status-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 200px;
}

.indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto 15px;
}

.indicator.online {
  background: #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.indicator.offline {
  background: #ef4444;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
}

.status-card h3 {
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  color: #1e293b;
}

.status-card p {
  font-size: 0.95rem;
  margin: 0;
  color: #64748b;
}`}
          />
        </div>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Logical AND (&&) Operator"
              description="Show something only when a condition is true - no else needed!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The <strong>&&</strong> operator is perfect when you only want to show something if a condition is true, and show <em>nothing</em> if it's false. It's shorter than a ternary when you don't need the else part!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold mb-3">With Ternary</h4>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded text-sm font-mono">
                  {'{hasMessages ? <Badge /> : null}'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Longer, explicit</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold mb-3">With && ✨</h4>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded text-sm font-mono">
                  {'{hasMessages && <Badge />}'}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Shorter, cleaner!</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Watch Out!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Don't use <code>{'{count && <Badge />}'}</code> if count can be 0, because React will display "0"! Use <code>{'{count > 0 && <Badge />}'}</code> instead.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<ShieldCheck className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Using && Operator"
            description="Conditionally show notifications and badges!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Notification Badge with &&"
            description="Show a notification badge only when there are unread messages"
            colorTheme="cyan"
            react={`function Inbox({ messageCount }) {
  return (
    <div className="inbox-card">
      <div className="icon">📬</div>
      <h2>Inbox</h2>
      
      {messageCount > 0 && (
        <div className="badge">
          {messageCount} new
        </div>
      )}
      
      {messageCount === 0 && (
        <p className="empty">All caught up! 🎉</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Inbox messageCount={5} />
      <Inbox messageCount={0} />
      <Inbox messageCount={23} />
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
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function Inbox({ messageCount }) {
    return h('div', { className: 'inbox-card' },
      h('div', { className: 'icon' }, '📬'),
      h('h2', null, 'Inbox'),
      messageCount > 0 && h('div', { className: 'badge' }, messageCount, ' new'),
      messageCount === 0 && h('p', { className: 'empty' }, 'All caught up! 🎉')
    );
  }

  function App() {
    return h('div', { className: 'container' },
      h(Inbox, { messageCount: 5 }),
      h(Inbox, { messageCount: 0 }),
      h(Inbox, { messageCount: 23 })
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  padding: 20px;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.inbox-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  position: relative;
}

.icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.inbox-card h2 {
  color: #1e293b;
  font-size: 1.5rem;
  margin: 0 0 15px 0;
}

.badge {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.empty {
  color: #10b981;
  font-size: 0.95rem;
  margin: 0;
  font-weight: 600;
}`}
          />
        </div>

        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<EyeOff className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Returning Null"
              description="Hide a component entirely by returning null!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Sometimes you want a component to render <strong>nothing at all</strong>. Just return <code>null</code> from your component, and React won't display anything. The component is still mounted, it just doesn't show up!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-bold mb-3">Returning Null Example</h4>
              <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded font-mono text-sm space-y-2">
                <div>function Warning({'{isVisible}'}) {'{'}</div>
                <div className="pl-4">if (!isVisible) return null;</div>
                <div className="pl-4"></div>
                <div className="pl-4">return {'<div>Warning message</div>;'}</div>
                <div>{'}'}</div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">When <code>isVisible</code> is false, nothing renders!</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">
                  Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these tips for clean conditional rendering!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>ternary</strong> for if-else conditions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>&&</strong> when you only need if (no else)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <code>condition {'>'} 0</code> with <strong>numbers and &&</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Return <strong>null</strong> to hide components completely</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Keep conditions <strong>simple and readable</strong></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Don't Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <code>{'{count && <Badge />}'}</code> with numbers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't <strong>nest ternaries</strong> deeply (hard to read)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't put <strong>complex logic</strong> in JSX conditions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>if-else in JSX</strong> (won't work!)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't render <code>undefined</code> or <code>false</code> directly</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Quick Reference"
              description="Choose the right conditional rendering technique!"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">If Statement</h4>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2">
                  <div className="font-mono">if (condition) return {'<A />'};</div>
                  <div className="font-mono">return {'<B />'};</div>
                  <p className="text-xs text-muted-foreground mt-2">✅ Best for: Multiple conditions, early returns</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">Ternary Operator</h4>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2">
                  <div className="font-mono">{'{condition ? <A /> : <B />}'}</div>
                  <p className="text-xs text-muted-foreground mt-2">✅ Best for: Inline if-else, choosing between two things</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">Logical AND (&&)</h4>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2">
                  <div className="font-mono">{'{condition && <A />}'}</div>
                  <p className="text-xs text-muted-foreground mt-2">✅ Best for: Show something only if true, nothing otherwise</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-600">Return Null</h4>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2">
                  <div className="font-mono">if (!condition) return null;</div>
                  <p className="text-xs text-muted-foreground mt-2">✅ Best for: Hiding entire components</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
