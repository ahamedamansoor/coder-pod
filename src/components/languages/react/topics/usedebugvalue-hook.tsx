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
  Bug,
  Eye,
  Code2,
} from 'lucide-react';

export default function UseDebugValueHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Bug}
        category="React · Hooks (Comprehensive)"
        title="useDebugValue Hook"
        description="Learn useDebugValue to display custom labels for custom Hooks in React DevTools for easier debugging."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useDebugValue */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Bug className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useDebugValue?"
              description="DevTools labels for custom Hooks"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useDebugValue</code> displays a <strong>custom label</strong> for custom Hooks in React DevTools. It helps you understand what's happening inside your custom Hooks during development!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>// Basic usage</div>
                  <div>useDebugValue(value);</div>
                  <div className="mt-2"></div>
                  <div>// With formatter (lazy)</div>
                  <div>useDebugValue(value, (val) =&gt; format(val));</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">Development</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Shows in DevTools</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Displays helpful debug info next to your custom Hook
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">Production</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">No Impact</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Has no effect in production builds - purely for debugging
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Only for Custom Hooks!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useDebugValue only inside custom Hooks. Don't use it in regular components - it won't show anything!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use"
              description="Best practices"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Shared Custom Hooks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hooks that are part of a shared library used by multiple teams
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Complex State</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hooks with complex internal state that's hard to inspect
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Data Formatting</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When raw value needs formatting to be human-readable
                </p>
              </div>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-2 border-orange-300 dark:border-orange-800">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't add useDebugValue to every custom Hook! Only use it when the debug info significantly improves the debugging experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Custom Hook with Debug Value"
            description="Displaying useful debug information"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="useOnlineStatus with Debug Value"
            description="Shows connection status in DevTools"
            colorTheme="green"
            react={`function useOnlineStatus() {
  const [isOnline, setIsOnline] = React.useState(true);

  React.useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Show debug label in DevTools
  React.useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div className="container">
      <h1>🌐 Connection Status</h1>

      <div className={\`status \${isOnline ? 'online' : 'offline'}\`}>
        <div className="icon">
          {isOnline ? '✅' : '❌'}
        </div>
        <div className="text">
          <h2>{isOnline ? 'Online' : 'Offline'}</h2>
          <p>
            {isOnline 
              ? 'Connected to the internet' 
              : 'No internet connection'}
          </p>
        </div>
      </div>

      <div className="info">
        💡 Check React DevTools to see the debug value!
      </div>

      <div className="note">
        <strong>Open DevTools:</strong> The custom hook will show 
        "Online" or "Offline" label in the Components tab
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StatusIndicator />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useEffect, useDebugValue } = React;
  const { createRoot } = ReactDOM;

  function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);

    useDebugValue(isOnline ? 'Online' : 'Offline');

    return isOnline;
  }

  function StatusIndicator() {
    const isOnline = useOnlineStatus();

    return h('div', { className: 'container' },
      h('h1', null, '🌐 Connection Status'),

      h('div', { className: 'status ' + (isOnline ? 'online' : 'offline') },
        h('div', { className: 'icon' }, isOnline ? '✅' : '❌'),
        h('div', { className: 'text' },
          h('h2', null, isOnline ? 'Online' : 'Offline'),
          h('p', null, isOnline 
            ? 'Connected to the internet' 
            : 'No internet connection')
        )
      ),

      h('div', { className: 'info' },
        '💡 Check React DevTools to see the debug value!'
      ),

      h('div', { className: 'note' },
        h('strong', null, 'Open DevTools: '),
        'The custom hook will show "Online" or "Offline" label in the Components tab'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(StatusIndicator));
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.status {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.status.online {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 2px solid #10b981;
}

.status.offline {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 2px solid #ef4444;
}

.icon {
  font-size: 48px;
}

.text h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

.status.online .text h2 {
  color: #065f46;
}

.status.offline .text h2 {
  color: #991b1b;
}

.text p {
  font-size: 14px;
  color: #6b7280;
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
  margin-bottom: 15px;
}

.note {
  background: #f3f4f6;
  padding: 15px;
  border-radius: 12px;
  font-size: 13px;
  color: #374151;
  line-height: 1.6;
}

.note strong {
  color: #10b981;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #6ee7b7;
  }

  .status.online {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
  }

  .status.online .text h2 {
    color: #d1fae5;
  }

  .status.offline {
    background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    border-color: #ef4444;
  }

  .status.offline .text h2 {
    color: #fee2e2;
  }

  .text p {
    color: #9ca3af;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }

  .note {
    background: #111827;
    color: #e5e7eb;
  }

  .note strong {
    color: #6ee7b7;
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
                  <Bug className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">DevTools Only</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Shows custom labels in React DevTools for easier debugging.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Custom Hooks Only</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only use inside custom Hooks - won't work in components.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Optional Formatter</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Second argument formats value lazily for better performance.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">No Production Impact</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Has zero impact on production builds - purely developmental.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Debugging Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useDebugValue is purely for development. Use it to make custom Hooks easier to inspect in DevTools!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
