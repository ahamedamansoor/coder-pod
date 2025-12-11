'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Sparkles, Code } from 'lucide-react';

export default function CustomHooksBasics() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Sparkles}
        category="React · Hooks"
        title="Custom Hooks"
        description="Learn how to create reusable custom hooks to extract and share component logic across your React application."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Custom Hooks?"
              description="Reusable stateful logic"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Custom Hooks</strong> let you extract component logic into reusable functions. They start with "use" and can call other hooks!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">Benefits</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Reuse logic across components</li>
                  <li>• Share stateful behavior</li>
                  <li>• Cleaner component code</li>
                  <li>• Easier testing</li>
                  <li>• Better organization</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">Rules</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Name must start with "use"</li>
                  <li>• Can call other hooks</li>
                  <li>• Can use useState, useEffect, etc.</li>
                  <li>• Follow hook rules</li>
                  <li>• Return anything you need</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Custom useToggle Hook - Live Demo"
            description="Reusable toggle logic in action"
            size="lg"
          />
          <FrontendCodePreview
            title="useToggle Custom Hook"
            description="See how custom hooks make logic reusable"
            colorTheme="green"
            react={`// Custom Hook: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  return [value, { toggle, setTrue, setFalse }];
}

// Using the custom hook in multiple components
function DarkModeToggle() {
  const [isDark, { toggle }] = useToggle(false);

  return (
    <div className={\`mode-card \${isDark ? 'dark' : 'light'}\`}>
      <h3>🌓 Dark Mode</h3>
      <p>Current: {isDark ? '🌙 Dark' : '☀️ Light'}</p>
      <button onClick={toggle} className="toggle-btn">
        Toggle Mode
      </button>
    </div>
  );
}

function SidebarToggle() {
  const [isOpen, { toggle, setFalse }] = useToggle(false);

  return (
    <div className="sidebar-card">
      <h3>📱 Sidebar</h3>
      <p>Status: {isOpen ? '✅ Open' : '❌ Closed'}</p>
      <div className="btn-group">
        <button onClick={toggle} className="primary-btn">
          Toggle
        </button>
        {isOpen && (
          <button onClick={setFalse} className="secondary-btn">
            Close
          </button>
        )}
      </div>
      {isOpen && (
        <div className="sidebar-content">
          <p>🎉 Sidebar is now visible!</p>
        </div>
      )}
    </div>
  );
}

function NotificationToggle() {
  const [enabled, { toggle, setTrue, setFalse }] = useToggle(true);

  return (
    <div className="notification-card">
      <h3>🔔 Notifications</h3>
      <p>Status: {enabled ? '✅ Enabled' : '🔕 Disabled'}</p>
      <div className="btn-group">
        <button onClick={setTrue} className="success-btn">
          Enable
        </button>
        <button onClick={toggle} className="toggle-btn">
          Toggle
        </button>
        <button onClick={setFalse} className="danger-btn">
          Disable
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="demo-app">
      <div className="header">
        <h2>✨ Custom Hooks Demo</h2>
        <p>useToggle hook reused in 3 different components</p>
      </div>

      <div className="components-grid">
        <DarkModeToggle />
        <SidebarToggle />
        <NotificationToggle />
      </div>

      <div className="info-box">
        <p><strong>💡 Key Point:</strong></p>
        <p>Same useToggle hook, used three different ways!</p>
        <p>This is the power of custom hooks - write once, use anywhere.</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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

.demo-app {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.header {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.header p {
  opacity: 0.9;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
}

.mode-card,
.sidebar-card,
.notification-card {
  padding: 25px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s;
}

.mode-card {
  background: #f9fafb;
  border: 2px solid #e5e7eb;
}

.mode-card.dark {
  background: #1f2937;
  border-color: #374151;
  color: white;
}

.sidebar-card {
  background: #dbeafe;
  border: 2px solid #3b82f6;
}

.notification-card {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}

.mode-card h3,
.sidebar-card h3,
.notification-card h3 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.mode-card.dark h3 {
  color: white;
}

.mode-card p,
.sidebar-card p,
.notification-card p {
  margin: 10px 0;
  color: #4b5563;
}

.mode-card.dark p {
  color: #d1d5db;
}

.btn-group {
  display: flex;
  gap: 8px;
  margin-top: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.toggle-btn {
  background: #6366f1;
  color: white;
}

.toggle-btn:hover {
  background: #4f46e5;
}

.primary-btn {
  background: #3b82f6;
  color: white;
}

.primary-btn:hover {
  background: #2563eb;
}

.secondary-btn {
  background: #94a3b8;
  color: white;
}

.secondary-btn:hover {
  background: #64748b;
}

.success-btn {
  background: #10b981;
  color: white;
}

.success-btn:hover {
  background: #059669;
}

.danger-btn {
  background: #ef4444;
  color: white;
}

.danger-btn:hover {
  background: #dc2626;
}

.sidebar-content {
  margin-top: 15px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  animation: slideDown 0.3s;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-box {
  padding: 30px;
  background: #f0fdf4;
  border-top: 2px solid #86efac;
}

.info-box p {
  color: #15803d;
  margin: 8px 0;
  font-size: 14px;
}

.info-box strong {
  color: #14532d;
}

@media (prefers-color-scheme: dark) {
  .demo-app {
    background: #1f2937;
  }

  .mode-card,
  .sidebar-card,
  .notification-card {
    background: #111827;
    color: #f3f4f6;
  }

  .mode-card h3,
  .sidebar-card h3,
  .notification-card h3 {
    color: #f3f4f6;
  }

  .mode-card p,
  .sidebar-card p,
  .notification-card p {
    color: #d1d5db;
  }

  .sidebar-content {
    background: #1f2937;
  }

  .info-box {
    background: #064e3b;
    border-top-color: #059669;
  }

  .info-box p {
    color: #6ee7b7;
  }

  .info-box strong {
    color: #d1fae5;
  }
}

@media (max-width: 968px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Creating Custom Hooks"
            description="Step-by-step guide"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Custom Hook Pattern"
            description="How to create your own hooks"
            language="javascript"
            colorTheme="blue"
            code={`// Step 1: Create a function starting with 'use'
function useLocalStorage(key, initialValue) {
  // Step 2: Use built-in hooks
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Step 3: Create helper functions
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  // Step 4: Return what components need
  return [storedValue, setValue];
}

// Usage in components
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}`}
            output={[
              '✅ Custom hooks extract reusable logic',
              '✅ Must start with "use"',
              '✅ Can use other hooks inside',
              '✅ Return any data components need',
              '',
              'Common custom hooks:',
              '• useLocalStorage - Persist state',
              '• useToggle - Boolean state management',
              '• useFetch - Data fetching',
              '• useDebounce - Delayed updates',
              '• useWindowSize - Track window dimensions'
            ]}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Name with "use"</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always start custom hook names with "use"
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Reusable Logic</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Extract and share stateful logic
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Call Other Hooks</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use useState, useEffect inside
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Return Anything</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Return values, functions, or objects
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Create custom hooks whenever you find yourself copying the same stateful logic between components. It makes your code more maintainable and testable!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
