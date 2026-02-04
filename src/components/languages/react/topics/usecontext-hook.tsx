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
  CheckCircle2,
  XCircle,
  Zap,
  Share2,
  Users,
  Palette,
} from 'lucide-react';

export default function UseContextHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Share2}
        category="React · Hooks (Comprehensive)"
        title="useContext Hook"
        description="Learn how to use useContext to consume context values and share data across your component tree without prop drilling."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useContext */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Share2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useContext?"
              description="Reading context values"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useContext</code> lets you read and subscribe to <strong>context</strong> from your component. Context provides a way to share values between components without passing props through every level.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Usage Pattern</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-bold text-green-600 dark:text-green-400 mb-1">1. Create Context</div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      const MyContext = React.createContext(defaultValue);
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">2. Provide Value</div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      &lt;MyContext.Provider value={'{value}'}&gt;...&lt;/MyContext.Provider&gt;
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-purple-600 dark:text-purple-400 mb-1">3. Consume with useContext</div>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                    <div className="text-slate-800 dark:text-slate-200">
                      const value = useContext(MyContext);
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Without Context: Prop Drilling</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>&lt;A user={'{user}'}&gt;</div>
                    <div className="pl-2">&lt;B user={'{user}'}&gt;</div>
                    <div className="pl-4">&lt;C user={'{user}'} /&gt;</div>
                    <div className="pl-2">&lt;/B&gt;</div>
                    <div>&lt;/A&gt;</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  Props passed through every level!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">With Context: Direct Access</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>&lt;A&gt;</div>
                    <div className="pl-2">&lt;B&gt;</div>
                    <div className="pl-4">&lt;C /&gt; // reads context</div>
                    <div className="pl-2">&lt;/B&gt;</div>
                    <div>&lt;/A&gt;</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Component C reads directly from context!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useContext lets any component read context values, no matter how deep in the tree, without passing props!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Context Flow Diagram */}
        <Card className="border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50/60 to-cyan-50/30 dark:from-slate-900/40 dark:to-cyan-900/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Users className="w-7 h-7 text-slate-700 dark:text-slate-300" />}
              title="Context Flow Diagram"
              description="How Provider, value, and useContext connect"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Context creates a shared value that travels from a single <strong>Provider</strong> down through the tree. Any component can call <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">useContext(MyContext)</code> to grab that value without props.
            </p>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4 font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-100 space-y-3">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Provider tree</div>
              <pre className="text-[11px]">
{`<App>
  <ThemeContext.Provider value={theme}>   ← shared value
    <Header />
    <Content />
      ↳ <Sidebar />                ← tree branches
        ↳ <ThemeToggle />          ← reads context
  </ThemeContext.Provider>
</App>`}
              </pre>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                As soon as <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">value</code> changes, every consumer reruns with the new value, even if intermediate components never touch it.
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-gray-900">
                <h4 className="font-bold text-emerald-600 dark:text-emerald-300 mb-2">Provider controls</h4>
                <p className="text-sm text-muted-foreground">
                  Only the <strong>nearest Provider</strong> value is used. Nesting Providers lets different parts of the tree share different values.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-orange-200 dark:border-orange-700 bg-white dark:bg-gray-900">
                <h4 className="font-bold text-orange-600 dark:text-orange-300 mb-2">Consumer benefits</h4>
                <p className="text-sm text-muted-foreground">
                  Consumers re-render automatically when their context value changes, so you can keep components pure without prop drilling.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Theme Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example: Theme Context"
            description="Share theme across components"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Theme Switcher with Context"
            description="All components access theme without props"
            colorTheme="purple"
            react={`// 1. Create Context
const ThemeContext = React.createContext('light');

// 2. Component that uses context
function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  
  return (
    <button className={\`btn-\${theme}\`}>
      I'm {theme} themed!
    </button>
  );
}

function ThemedCard() {
  const theme = React.useContext(ThemeContext);
  
  return (
    <div className={\`card-\${theme}\`}>
      <h3>Themed Card</h3>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// 3. Main App with Provider
function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <div className="container">
      <h1>🎨 Theme Context</h1>

      <div className="controls">
        <button 
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'active' : ''}
        >
          ☀️ Light
        </button>
        <button 
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'active' : ''}
        >
          🌙 Dark
        </button>
      </div>

      <ThemeContext.Provider value={theme}>
        <div className="content">
          <ThemedCard />
          <ThemedButton />
        </div>
      </ThemeContext.Provider>

      <div className="info">
        💡 Components read theme from context!
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
  const { createElement: h, useState, useContext, createContext } = React;
  const { createRoot } = ReactDOM;

  const ThemeContext = createContext('light');

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    
    return h('button', { className: 'btn-' + theme },
      'I\\'m ' + theme + ' themed!'
    );
  }

  function ThemedCard() {
    const theme = useContext(ThemeContext);
    
    return h('div', { className: 'card-' + theme },
      h('h3', null, 'Themed Card'),
      h('p', null, 'Current theme: ' + theme)
    );
  }

  function App() {
    const [theme, setTheme] = useState('light');

    return h('div', { className: 'container' },
      h('h1', null, '🎨 Theme Context'),

      h('div', { className: 'controls' },
        h('button', {
          onClick: () => setTheme('light'),
          className: theme === 'light' ? 'active' : ''
        }, '☀️ Light'),
        h('button', {
          onClick: () => setTheme('dark'),
          className: theme === 'dark' ? 'active' : ''
        }, '🌙 Dark')
      ),

      h(ThemeContext.Provider, { value: theme },
        h('div', { className: 'content' },
          h(ThemedCard),
          h(ThemedButton)
        )
      ),

      h('div', { className: 'info' },
        '💡 Components read theme from context!'
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
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
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
  color: #a855f7;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.controls {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 25px;
}

.controls button {
  padding: 12px;
  background: #f3f4f6;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.controls button:hover {
  background: #e5e7eb;
}

.controls button.active {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  border-color: #a855f7;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.card-light {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 25px;
  border-radius: 16px;
  border: 2px solid #f59e0b;
}

.card-light h3 {
  color: #92400e;
  margin-bottom: 10px;
  font-size: 20px;
}

.card-light p {
  color: #78350f;
  font-size: 14px;
}

.card-dark {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 25px;
  border-radius: 16px;
  border: 2px solid #475569;
}

.card-dark h3 {
  color: #e2e8f0;
  margin-bottom: 10px;
  font-size: 20px;
}

.card-dark p {
  color: #cbd5e1;
  font-size: 14px;
}

.btn-light {
  padding: 14px 24px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #78350f;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(251, 191, 36, 0.4);
}

.btn-dark {
  padding: 14px 24px;
  background: linear-gradient(135deg, #475569 0%, #334155 100%);
  color: #e2e8f0;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-dark:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(71, 85, 105, 0.4);
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
    background: linear-gradient(135deg, #581c87 0%, #831843 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #c084fc;
  }

  .controls button {
    background: #374151;
    color: #9ca3af;
    border-color: #4b5563;
  }

  .controls button:hover {
    background: #4b5563;
  }

  .controls button.active {
    background: linear-gradient(135deg, #c084fc 0%, #f472b6 100%);
    color: #1f2937;
    border-color: #c084fc;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
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
                  <Share2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">No Prop Drilling</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Context eliminates the need to pass props through intermediate components.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Any Component</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Any component inside Provider can access context with useContext.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Auto Re-render</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Components using context automatically re-render when context value changes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Common Uses</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for themes, auth, language, and other global state.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Powerful Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useContext combined with useState or useReducer creates a powerful global state management solution!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
