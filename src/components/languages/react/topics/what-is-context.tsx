'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Network, AlertTriangle, ArrowDown } from 'lucide-react';

export default function WhatIsContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Network}
        category="React · Context API"
        title="What is Context?"
        description="Learn how Context solves the 'prop drilling' problem by providing a way to share data across the component tree without passing props manually."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Network className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Prop Drilling Problem"
              description="Why we need Context"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Prop drilling</strong> occurs when you pass data through many component layers, even though intermediate components don't need that data. Context provides a way to share values between components without explicitly passing props!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
              <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">❌ Without Context (Prop Drilling)</h4>
              <div className="flex items-center gap-3 flex-wrap justify-center text-sm">
                <div className="px-4 py-2 bg-red-100 dark:bg-red-900 rounded font-semibold">App</div>
                <ArrowDown className="w-4 h-4" />
                <div className="px-4 py-2 bg-red-100 dark:bg-red-900 rounded">Header</div>
                <ArrowDown className="w-4 h-4" />
                <div className="px-4 py-2 bg-red-100 dark:bg-red-900 rounded">Navigation</div>
                <ArrowDown className="w-4 h-4" />
                <div className="px-4 py-2 bg-red-100 dark:bg-red-900 rounded font-semibold">UserMenu (needs user data)</div>
              </div>
              <p className="text-sm text-red-600 dark:text-red-400 mt-3 text-center">Props passed through Header & Navigation even though they don't use them!</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold mb-4 text-green-700 dark:text-green-300">✅ With Context</h4>
              <div className="text-center">
                <div className="inline-block px-6 py-3 bg-green-100 dark:bg-green-900 rounded-lg font-semibold mb-4">
                  Context Provider (user data)
                </div>
                <div className="flex items-center gap-3 justify-center text-sm">
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded">Header</div>
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded">Navigation</div>
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900 rounded font-semibold">UserMenu (consumes context)</div>
                </div>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-3 text-center">Data flows directly to components that need it!</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Network className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Prop Drilling vs Context - Live Demo"
            description="See the difference in action"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Context Solves Prop Drilling"
            description="Toggle between approaches to see the difference"
            colorTheme="green"
            react={`function PropDrillingExample() {
  const [useContext, setUseContext] = React.useState(false);
  const user = { name: 'John Doe', role: 'Admin' };

  return (
    <div className="demo-container">
      <div className="controls">
        <h2>Prop Drilling vs Context</h2>
        <button 
          onClick={() => setUseContext(!useContext)}
          className="toggle-btn"
        >
          {useContext ? '✅ Using Context' : '❌ Using Prop Drilling'}
        </button>
      </div>

      {useContext ? (
        <UserContextApp user={user} />
      ) : (
        <PropDrillingApp user={user} />
      )}
    </div>
  );
}

// ❌ Without Context - Prop Drilling
function PropDrillingApp({ user }) {
  return (
    <div className="app">
      <div className="component level-1">
        <strong>App</strong> (has user data)
        <code>user={'{'}name: '{user.name}'{'}'}</code>
        <Header user={user} />
      </div>
    </div>
  );
}

function Header({ user }) {
  return (
    <div className="component level-2">
      <strong>Header</strong> (doesn't need user)
      <span className="warning">⚠️ Props passed through</span>
      <Navigation user={user} />
    </div>
  );
}

function Navigation({ user }) {
  return (
    <div className="component level-3">
      <strong>Navigation</strong> (doesn't need user)
      <span className="warning">⚠️ Props passed through</span>
      <UserMenu user={user} />
    </div>
  );
}

function UserMenu({ user }) {
  return (
    <div className="component level-4 highlight">
      <strong>UserMenu</strong> (finally uses user!)
      <div className="user-info">
        👤 {user.name} ({user.role})
      </div>
    </div>
  );
}

// ✅ With Context - No Prop Drilling
const UserContext = React.createContext();

function UserContextApp({ user }) {
  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <div className="component level-1">
          <strong>App</strong> (provides context)
          <code>Context.Provider value={'{'}user{'}'}</code>
          <HeaderWithContext />
        </div>
      </div>
    </UserContext.Provider>
  );
}

function HeaderWithContext() {
  return (
    <div className="component level-2 clean">
      <strong>Header</strong> (no props needed)
      <span className="success">✅ Clean component</span>
      <NavigationWithContext />
    </div>
  );
}

function NavigationWithContext() {
  return (
    <div className="component level-3 clean">
      <strong>Navigation</strong> (no props needed)
      <span className="success">✅ Clean component</span>
      <UserMenuWithContext />
    </div>
  );
}

function UserMenuWithContext() {
  const user = React.useContext(UserContext);
  return (
    <div className="component level-4 highlight">
      <strong>UserMenu</strong> (uses context!)
      <div className="user-info">
        👤 {user.name} ({user.role})
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PropDrillingExample />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  padding: 20px;
}

.demo-container {
  max-width: 800px;
  margin: 0 auto;
}

.controls {
  background: white;
  padding: 30px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.controls h2 {
  color: #10b981;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.toggle-btn {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.app {
  background: white;
  padding: 30px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.component {
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  border: 2px solid;
  position: relative;
}

.level-1 {
  background: #eff6ff;
  border-color: #3b82f6;
  margin-left: 0;
}

.level-2 {
  background: #fef3c7;
  border-color: #f59e0b;
  margin-left: 30px;
}

.level-3 {
  background: #fce7f3;
  border-color: #ec4899;
  margin-left: 60px;
}

.level-4 {
  background: #d1fae5;
  border-color: #10b981;
  margin-left: 90px;
}

.component.clean {
  background: #f0fdf4;
  border-color: #22c55e;
}

.component.highlight {
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.component strong {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #1f2937;
}

code {
  display: block;
  font-size: 12px;
  color: #6b7280;
  background: rgba(255, 255, 255, 0.5);
  padding: 6px 10px;
  border-radius: 6px;
  margin-top: 8px;
}

.warning {
  display: inline-block;
  padding: 4px 12px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 6px;
  font-size: 13px;
  margin-top: 8px;
}

.success {
  display: inline-block;
  padding: 4px 12px;
  background: #d1fae5;
  color: #059669;
  border-radius: 6px;
  font-size: 13px;
  margin-top: 8px;
}

.user-info {
  margin-top: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  font-weight: 600;
  color: #10b981;
}

@media (prefers-color-scheme: dark) {
  .controls,
  .app {
    background: #1f2937;
  }

  .controls h2 {
    color: #6ee7b7;
  }

  .level-1 {
    background: #1e3a8a;
    border-color: #60a5fa;
  }

  .level-2 {
    background: #78350f;
    border-color: #fbbf24;
  }

  .level-3 {
    background: #831843;
    border-color: #f472b6;
  }

  .level-4 {
    background: #064e3b;
    border-color: #6ee7b7;
  }

  .component.clean {
    background: #14532d;
    border-color: #4ade80;
  }

  .component strong {
    color: #e5e7eb;
  }

  code {
    color: #9ca3af;
    background: rgba(0, 0, 0, 0.3);
  }
}`}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="When to Use Context"
              description="Best practices"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Good Use Cases</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Theme (dark/light mode)</li>
                  <li>• User authentication</li>
                  <li>• Language/locale settings</li>
                  <li>• Global app settings</li>
                  <li>• Shopping cart state</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Not Ideal For</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Frequently changing data</li>
                  <li>• Complex state logic</li>
                  <li>• Local component state</li>
                  <li>• Performance-critical updates</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Don't Overuse Context!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Context is not a replacement for all props. Use it for truly global data. For local state, stick with props!
              </AlertDescription>
            </Alert>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Context = React's Built-in State Manager!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Context provides a way to share values between components without passing props through every level. It's perfect for global data like themes, auth, and settings!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
