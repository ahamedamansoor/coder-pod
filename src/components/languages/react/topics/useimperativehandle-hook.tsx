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
  Shield,
  Lock,
  Unlock,
} from 'lucide-react';

export default function UseImperativeHandleHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Shield}
        category="React · Hooks (Comprehensive)"
        title="useImperativeHandle Hook"
        description="Master useImperativeHandle to customize the instance value exposed by a component when using forwardRef, controlling what parent components can access."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useImperativeHandle */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useImperativeHandle?"
              description="Customizing exposed ref values"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useImperativeHandle</code> customizes the instance value that's exposed when using <code>forwardRef</code>. It lets you <strong>control what parent components can access</strong> through a ref, providing a clean API!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>useImperativeHandle(ref, () =&gt; ({'{'}</div>
                  <div className="pl-4">// Methods/values to expose</div>
                  <div className="pl-4">method1: () =&gt; {'{ ... }'},</div>
                  <div className="pl-4">method2: () =&gt; {'{ ... }'}</div>
                  <div>{'}'}),[dependencies]);</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <Unlock className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Without</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Parent gets entire DOM element - access to everything!
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-2 rounded text-xs">
                  All DOM methods exposed
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">With</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Parent gets only what you expose - controlled API!
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 p-2 rounded text-xs">
                  Only specific methods exposed
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why Use It?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useImperativeHandle to create a clean, controlled API for parent components. Only expose what's necessary, hiding implementation details!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use"
              description="Common use cases"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Reusable Components</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Building reusable input, modal, or video player components with controlled API
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Hiding Implementation</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Exposing only specific methods while hiding internal DOM structure
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Library Components</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Creating component libraries with clean, documented APIs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Lock className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Custom Input Component"
            description="Exposing specific methods to parent"
            size="lg"
          />

          <FrontendCodePreview
            title="Input with Custom API"
            description="Parent can call focus() and clear() methods"
            colorTheme="green"
            react={`const CustomInput = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null);

  // Expose only specific methods to parent
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => {
      return inputRef.current?.value || '';
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={props.placeholder}
      className="custom-input"
    />
  );
});

function App() {
  const inputRef = React.useRef(null);
  const [message, setMessage] = React.useState('');

  const handleFocus = () => {
    inputRef.current?.focus();
    setMessage('Input focused!');
  };

  const handleClear = () => {
    inputRef.current?.clear();
    setMessage('Input cleared!');
  };

  const handleGetValue = () => {
    const value = inputRef.current?.getValue();
    setMessage(\`Value: "\${value}"\`);
  };

  return (
    <div className="container">
      <h1>🔒 Custom Input API</h1>

      <div className="input-box">
        <label>Type Something</label>
        <CustomInput 
          ref={inputRef}
          placeholder="Enter text..."
        />
      </div>

      <div className="buttons">
        <button onClick={handleFocus} className="btn-focus">
          Focus
        </button>
        <button onClick={handleClear} className="btn-clear">
          Clear
        </button>
        <button onClick={handleGetValue} className="btn-get">
          Get Value
        </button>
      </div>

      {message && (
        <div className="message">
          {message}
        </div>
      )}

      <div className="info">
        💡 Parent can only call exposed methods!
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
  const { createElement: h, useState, useRef, forwardRef, useImperativeHandle } = React;
  const { createRoot } = ReactDOM;

  const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        inputRef.current.value = '';
      },
      getValue: () => {
        return inputRef.current?.value || '';
      }
    }));

    return h('input', {
      ref: inputRef,
      type: 'text',
      placeholder: props.placeholder,
      className: 'custom-input'
    });
  });

  function App() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState('');

    const handleFocus = () => {
      inputRef.current?.focus();
      setMessage('Input focused!');
    };

    const handleClear = () => {
      inputRef.current?.clear();
      setMessage('Input cleared!');
    };

    const handleGetValue = () => {
      const value = inputRef.current?.getValue();
      setMessage('Value: "' + value + '"');
    };

    return h('div', { className: 'container' },
      h('h1', null, '🔒 Custom Input API'),

      h('div', { className: 'input-box' },
        h('label', null, 'Type Something'),
        h(CustomInput, {
          ref: inputRef,
          placeholder: 'Enter text...'
        })
      ),

      h('div', { className: 'buttons' },
        h('button', {
          onClick: handleFocus,
          className: 'btn-focus'
        }, 'Focus'),
        h('button', {
          onClick: handleClear,
          className: 'btn-clear'
        }, 'Clear'),
        h('button', {
          onClick: handleGetValue,
          className: 'btn-get'
        }, 'Get Value')
      ),

      message && h('div', { className: 'message' }, message),

      h('div', { className: 'info' },
        '💡 Parent can only call exposed methods!'
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
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.input-box {
  margin-bottom: 20px;
}

.input-box label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.custom-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.custom-input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.buttons button {
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.btn-focus {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.btn-focus:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.btn-clear {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.btn-clear:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

.btn-get {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.btn-get:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.message {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  text-align: center;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #6ee7b7;
  }

  .input-box label {
    color: #e5e7eb;
  }

  .custom-input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .custom-input:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .message {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
    color: #bfdbfe;
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
                  <Shield className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Controlled Access</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Customize what parent components can access through refs.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Clean API</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Expose only necessary methods, hiding implementation details.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Unlock className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">With forwardRef</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always used together with React.forwardRef for ref forwarding.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Rare Usage</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only use when building reusable libraries or complex components.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Advanced Hook!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useImperativeHandle is an advanced Hook. Most components don't need it - use it when building reusable component libraries!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
