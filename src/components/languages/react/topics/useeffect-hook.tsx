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
  RefreshCw,
  Zap,
  Code2,
  Clock,
  Trash2,
  Download,
} from 'lucide-react';

export default function UseEffectHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="React · Hooks (Comprehensive)"
        title="useEffect Hook"
        description="Master the useEffect Hook for synchronizing components with external systems, handling side effects, and managing component lifecycle."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useEffect */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useEffect?"
              description="Running side effects in React"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useEffect</code> lets you perform <strong>side effects</strong> in function components. Side effects are operations that affect things outside the component - like data fetching, subscriptions, or manually changing the DOM.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>useEffect(() =&gt; {'{'}</div>
                  <div className="pl-4">// Effect code (setup)</div>
                  <div className="pl-4"></div>
                  <div className="pl-4">return () =&gt; {'{'}</div>
                  <div className="pl-8">// Cleanup code (optional)</div>
                  <div className="pl-4">{'}'};</div>
                  <div>{'}'}, [dependencies]);</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Setup</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Code that runs after render to start the effect
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Cleanup</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Optional function to clean up before re-running or unmounting
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Dependencies</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Array of values that trigger effect re-run when changed
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When Does It Run?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Effects run <strong>after</strong> render, allowing React to update the screen first. Then your effect code runs!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Example 1: Data Fetching */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Download className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example 1: Fetching Data"
            description="useEffect with API calls"
            size="lg"
          />

          <FrontendCodePreview
            title="User Data Fetcher"
            description="Fetch data when component mounts"
            colorTheme="blue"
            react={`function UserProfile() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Effect runs after first render
  React.useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer'
      };
      setUser(mockUser);
      setLoading(false);
    }, 1500);
  }, []); // Empty array = run once on mount

  return (
    <div className="container">
      <h1>👤 User Profile</h1>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading user data...</p>
        </div>
      ) : (
        <div className="profile">
          <div className="avatar">
            {user.name.charAt(0)}
          </div>
          <div className="info">
            <h2>{user.name}</h2>
            <p className="email">{user.email}</p>
            <span className="role">{user.role}</span>
          </div>
        </div>
      )}

      <div className="info-box">
        💡 useEffect with empty [] runs once on mount
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
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      
      setTimeout(() => {
        const mockUser = {
          name: 'John Doe',
          email: 'john@example.com',
          role: 'Developer'
        };
        setUser(mockUser);
        setLoading(false);
      }, 1500);
    }, []);

    return h('div', { className: 'container' },
      h('h1', null, '👤 User Profile'),

      loading
        ? h('div', { className: 'loading' },
            h('div', { className: 'spinner' }),
            h('p', null, 'Loading user data...')
          )
        : h('div', { className: 'profile' },
            h('div', { className: 'avatar' },
              user.name.charAt(0)
            ),
            h('div', { className: 'info' },
              h('h2', null, user.name),
              h('p', { className: 'email' }, user.email),
              h('span', { className: 'role' }, user.role)
            )
          ),

      h('div', { className: 'info-box' },
        '💡 useEffect with empty [] runs once on mount'
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

.loading {
  text-align: center;
  padding: 60px 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  margin: 0 auto 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  color: #6b7280;
  font-size: 14px;
}

.profile {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
}

.info h2 {
  color: #1e40af;
  font-size: 24px;
  margin-bottom: 5px;
}

.email {
  color: #3b82f6;
  font-size: 14px;
  margin-bottom: 10px;
}

.role {
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.info-box {
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

  .loading p {
    color: #9ca3af;
  }

  .spinner {
    border-color: #4b5563;
    border-top-color: #60a5fa;
  }

  .profile {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }

  .info h2 {
    color: #93c5fd;
  }

  .email {
    color: #60a5fa;
  }

  .role {
    background: #60a5fa;
    color: #1e3a8a;
  }

  .info-box {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Dependency Array */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Dependency Array"
              description="Controlling when effects run"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-blue-500">No Array</Badge>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Runs After Every Render</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    useEffect(() =&gt; {'{ /* runs every render */ }'});
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ⚠️ Usually not what you want - can cause performance issues!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-green-500">Empty []</Badge>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Runs Once on Mount</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    useEffect(() =&gt; {'{ /* runs once */ }'}, []);
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ✅ Perfect for data fetching, subscriptions that don't change
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-purple-500">With Dependencies</Badge>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Runs When Dependencies Change</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    useEffect(() =&gt; {'{ /* runs when id changes */ }'}, [id]);
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ✅ Re-fetch data when props/state change
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example 2: Cleanup */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Example 2: Effect with Cleanup"
            description="Preventing memory leaks"
            size="lg"
          />

          <FrontendCodePreview
            title="Live Clock"
            description="Cleanup stops the timer when unmounting"
            colorTheme="orange"
            react={`function LiveClock() {
  const [time, setTime] = React.useState(new Date());
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    if (!isRunning) return;

    // Setup: Start interval
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: Stop interval
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="container">
      <h1>⏰ Live Clock</h1>

      <div className="clock">
        <div className="time">{hours}:{minutes}:{seconds}</div>
        <div className="date">{time.toLocaleDateString()}</div>
      </div>

      <button
        onClick={() => setIsRunning(!isRunning)}
        className="btn-toggle"
      >
        {isRunning ? 'Pause' : 'Start'} Clock
      </button>

      <div className="info-box">
        <h3>✨ Cleanup Function:</h3>
        <p>Prevents memory leaks by clearing the interval when component unmounts or effect re-runs</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LiveClock />);`}
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

  function LiveClock() {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [isRunning]);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return h('div', { className: 'container' },
      h('h1', null, '⏰ Live Clock'),

      h('div', { className: 'clock' },
        h('div', { className: 'time' }, hours + ':' + minutes + ':' + seconds),
        h('div', { className: 'date' }, time.toLocaleDateString())
      ),

      h('button', {
        onClick: () => setIsRunning(!isRunning),
        className: 'btn-toggle'
      }, (isRunning ? 'Pause' : 'Start') + ' Clock'),

      h('div', { className: 'info-box' },
        h('h3', null, '✨ Cleanup Function:'),
        h('p', null, 'Prevents memory leaks by clearing the interval when component unmounts or effect re-runs')
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(LiveClock));
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
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
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
  color: #f97316;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.clock {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 25px;
}

.time {
  font-size: 56px;
  font-weight: 900;
  color: #9a3412;
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 4px rgba(154, 52, 18, 0.2);
  margin-bottom: 10px;
}

.date {
  font-size: 18px;
  color: #c2410c;
  font-weight: 600;
}

.btn-toggle {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.btn-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
}

.info-box {
  background: #fffbeb;
  padding: 20px;
  border-radius: 16px;
  border-left: 4px solid #f59e0b;
}

.info-box h3 {
  color: #b45309;
  margin-bottom: 8px;
  font-size: 16px;
}

.info-box p {
  color: #92400e;
  font-size: 14px;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #fb923c;
  }

  .clock {
    background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
  }

  .time {
    color: #fed7aa;
  }

  .date {
    color: #fdba74;
  }

  .info-box {
    background: #78350f;
    border-left-color: #f59e0b;
  }

  .info-box h3 {
    color: #fde68a;
  }

  .info-box p {
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
                  <RefreshCw className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">After Render</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Effects run after render, not during. This keeps rendering fast!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Trash2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Cleanup Required</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Return a cleanup function to prevent memory leaks from timers, subscriptions, etc.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Dependency Array</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always include values from component scope that the effect uses in the dependency array.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">External Systems</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use for fetching data, subscriptions, timers, and DOM manipulation.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Most Powerful Hook!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useEffect is essential for connecting React components to external systems. Master it to build real-world applications!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
