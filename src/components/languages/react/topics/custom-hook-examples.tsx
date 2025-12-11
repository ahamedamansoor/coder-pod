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
  Zap,
  Code2,
  Package,
  Sparkles,
  Monitor,
  Database,
  MousePointer2,
} from 'lucide-react';

export default function CustomHookExamples() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Sparkles}
        category="React · Escape Hatches"
        title="Custom Hook Examples"
        description="Practical examples of popular custom Hooks that solve common problems: useWindowSize, useLocalStorage, useOnClickOutside, and more."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Overview */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Popular Custom Hook Patterns"
              description="Real-world solutions you can use today"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Here are some of the most useful custom Hooks that appear in many React applications. These solve common problems and can be adapted to your needs!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">useWindowSize</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Track window dimensions for responsive logic</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">useLocalStorage</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Persist state in browser localStorage</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">useOnClickOutside</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Detect clicks outside an element</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">useDebounce</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Delay updates until user stops typing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example 1: useWindowSize */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example 1: useWindowSize Hook"
            description="Track window dimensions"
            size="lg"
          />

          <FrontendCodePreview
            title="useWindowSize in Action"
            description="Responsive UI based on window size"
            colorTheme="blue"
            react={`// Custom Hook
function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Using the Hook
function App() {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="container">
      <h1>📐 Window Size Tracker</h1>

      <div className="size-display">
        <div className="stat">
          <div className="stat-value">{width}px</div>
          <div className="stat-label">Width</div>
        </div>
        <div className="stat">
          <div className="stat-value">{height}px</div>
          <div className="stat-label">Height</div>
        </div>
      </div>

      <div className={\`device-type \${isMobile ? 'mobile' : 'desktop'}\`}>
        <h3>{isMobile ? '📱 Mobile' : '💻 Desktop'} View</h3>
        <p>
          {isMobile 
            ? 'You are viewing this on a mobile device' 
            : 'You are viewing this on a desktop'}
        </p>
      </div>

      <div className="info">
        💡 Resize your window to see changes!
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

  function useWindowSize() {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    useEffect(() => {
      function handleResize() {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
  }

  function App() {
    const size = useWindowSize();
    const width = size.width;
    const height = size.height;
    const isMobile = width < 768;

    return h('div', { className: 'container' },
      h('h1', null, '📐 Window Size Tracker'),

      h('div', { className: 'size-display' },
        h('div', { className: 'stat' },
          h('div', { className: 'stat-value' }, width + 'px'),
          h('div', { className: 'stat-label' }, 'Width')
        ),
        h('div', { className: 'stat' },
          h('div', { className: 'stat-value' }, height + 'px'),
          h('div', { className: 'stat-label' }, 'Height')
        )
      ),

      h('div', { 
        className: 'device-type ' + (isMobile ? 'mobile' : 'desktop')
      },
        h('h3', null, isMobile ? '📱 Mobile' : '💻 Desktop', ' View'),
        h('p', null,
          isMobile 
            ? 'You are viewing this on a mobile device' 
            : 'You are viewing this on a desktop'
        )
      ),

      h('div', { className: 'info' },
        '💡 Resize your window to see changes!'
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #3b82f6;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.size-display {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.stat {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 25px;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #3b82f6;
}

.stat-value {
  font-size: 32px;
  font-weight: 900;
  color: #1e40af;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #3b82f6;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.device-type {
  background: #f3f4f6;
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.device-type.mobile {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
}

.device-type.desktop {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 2px solid #10b981;
}

.device-type h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

.device-type.mobile h3 {
  color: #92400e;
}

.device-type.desktop h3 {
  color: #065f46;
}

.device-type p {
  font-size: 14px;
  line-height: 1.6;
}

.device-type.mobile p {
  color: #78350f;
}

.device-type.desktop p {
  color: #064e3b;
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
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .stat {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #60a5fa;
  }

  .stat-value {
    color: #93c5fd;
  }

  .stat-label {
    color: #60a5fa;
  }

  .device-type {
    background: #111827;
  }

  .device-type.mobile {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
  }

  .device-type.desktop {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .device-type.mobile h3,
  .device-type.mobile p {
    color: #fef3c7;
  }

  .device-type.desktop h3,
  .device-type.desktop p {
    color: #d1fae5;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Example 2: useLocalStorage */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example 2: useLocalStorage Hook"
            description="Persist state in browser storage"
            size="lg"
          />

          <FrontendCodePreview
            title="useLocalStorage in Action"
            description="State that survives page refreshes"
            colorTheme="purple"
            react={`// Custom Hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Using the Hook
function App() {
  const [name, setName] = useLocalStorage('name', '');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className={\`container \${theme === 'dark' ? 'dark-theme' : ''}\`}>
      <h1>💾 Persistent Storage</h1>

      <div className="section">
        <h3>Your Name</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input"
        />
        {name && <p className="saved">Saved: {name}</p>}
      </div>

      <div className="section">
        <h3>Theme</h3>
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="btn-primary"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div className="section">
        <h3>Counter</h3>
        <div className="counter-display">{count}</div>
        <button onClick={() => setCount(count + 1)} className="btn-primary">
          Increment
        </button>
      </div>

      <div className="info">
        💡 Refresh the page - your data persists!
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

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };

    return [storedValue, setValue];
  }

  function App() {
    const nameResult = useLocalStorage('name', '');
    const name = nameResult[0];
    const setName = nameResult[1];

    const themeResult = useLocalStorage('theme', 'light');
    const theme = themeResult[0];
    const setTheme = themeResult[1];

    const countResult = useLocalStorage('count', 0);
    const count = countResult[0];
    const setCount = countResult[1];

    return h('div', { 
      className: 'container' + (theme === 'dark' ? ' dark-theme' : '')
    },
      h('h1', null, '💾 Persistent Storage'),

      h('div', { className: 'section' },
        h('h3', null, 'Your Name'),
        h('input', {
          type: 'text',
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: 'Enter your name',
          className: 'input'
        }),
        name && h('p', { className: 'saved' }, 'Saved: ' + name)
      ),

      h('div', { className: 'section' },
        h('h3', null, 'Theme'),
        h('button', {
          onClick: () => setTheme(theme === 'light' ? 'dark' : 'light'),
          className: 'btn-primary'
        }, 'Switch to ' + (theme === 'light' ? 'Dark' : 'Light') + ' Mode')
      ),

      h('div', { className: 'section' },
        h('h3', null, 'Counter'),
        h('div', { className: 'counter-display' }, count),
        h('button', {
          onClick: () => setCount(count + 1),
          className: 'btn-primary'
        }, 'Increment')
      ),

      h('div', { className: 'info' },
        '💡 Refresh the page - your data persists!'
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
  transition: all 0.3s ease;
}

.container.dark-theme {
  background: #1f2937;
  color: #e5e7eb;
}

h1 {
  color: #a855f7;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.container.dark-theme h1 {
  color: #c084fc;
}

.section {
  background: #f9fafb;
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.container.dark-theme .section {
  background: #111827;
}

.section h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 18px;
}

.container.dark-theme .section h3 {
  color: #d1d5db;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.container.dark-theme .input {
  background: #1f2937;
  border-color: #4b5563;
  color: #e5e7eb;
}

.saved {
  margin-top: 10px;
  color: #10b981;
  font-weight: 600;
  font-size: 14px;
}

.btn-primary {
  padding: 12px 24px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
}

.counter-display {
  font-size: 48px;
  font-weight: 900;
  color: #a855f7;
  text-align: center;
  margin: 20px 0;
}

.container.dark-theme .counter-display {
  color: #c084fc;
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

.container.dark-theme .info {
  background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
  color: #fef3c7;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #581c87 0%, #831843 100%);
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
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">useWindowSize</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for responsive logic, adapting UI based on viewport dimensions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">useLocalStorage</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Persist state across page refreshes, great for user preferences.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Reusable</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  These Hooks can be used in multiple components throughout your app.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Composable</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Mix and match custom Hooks to build complex features simply.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Build Your Toolkit!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Start building your own library of custom Hooks. They'll make your code cleaner, more reusable, and easier to maintain!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
