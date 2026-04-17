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
  Target,
  Eye,
  MousePointer,
  Settings,
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

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useEffect progressively"
              size="lg"
            />

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Import useEffect</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, import useEffect from React at the top of your component file.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> <span className="text-blue-400">React</span>, {'{'} <span className="text-blue-600">useEffect</span> {'}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Pro Tip</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              You can import multiple hooks at once: {'{'} useState, useEffect, useContext {'}'}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Basic useEffect Syntax</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use useEffect with a function that contains your side effect code.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Component mounted or updated'</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">document</span>.<span className="text-orange-400">title</span> = <span className="text-green-600">'New Title'</span>;
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Key Point</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              This effect runs after every render. Use dependency arrays to control when it runs!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                          <MousePointer className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Add Dependency Array</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Control when your effect runs by adding a dependency array as the second argument.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Count changed:'</span>, count);
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, [<span className="text-orange-400">count</span>]); <span className="text-slate-500">// Only runs when count changes</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertCircle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Important</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Empty array [] = runs once on mount. Include dependencies to re-run when they change!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Add Cleanup Function</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Return a cleanup function to prevent memory leaks and handle cleanup.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">useEffect</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> timer = <span className="text-yellow-400">setInterval</span>(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-600">'Tick'</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'}, <span className="text-green-600">1000</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> () {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-yellow-400">clearInterval</span>(timer); <span className="text-slate-500">// Cleanup</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'})'}, []); <span className="text-slate-500">// Empty array = run once</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Key Point</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Cleanup runs before the next effect and when component unmounts. Perfect for subscriptions!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

          <FrontendCodePreview learningContext="react"
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

          <FrontendCodePreview learningContext="react"
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
