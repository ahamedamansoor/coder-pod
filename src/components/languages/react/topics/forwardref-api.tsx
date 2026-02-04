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
  ArrowRight,
  Share2,
  Box,
  Repeat,
} from 'lucide-react';

export default function ForwardRefApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Share2}
        category="React · Component Details"
        title="forwardRef"
        description="Learn how to use React.forwardRef to pass refs from parent components to child components' DOM nodes."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is forwardRef */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Share2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is forwardRef?"
              description="Pass refs through components"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">forwardRef</code> lets a component <strong>expose a DOM node</strong> to its parent component using a ref. This is useful when you need to access a child's DOM element from the parent!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const MyComponent = React.forwardRef((props, ref) =&gt; {'{'}</div>
                  <div className="pl-4">return &lt;input ref={'{ref}'} {'{...props}'} /&gt;;</div>
                  <div>{'}'});</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Flow Diagram</h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-500">
                  <p className="font-bold text-blue-700 dark:text-blue-300 text-sm">Parent Component</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Creates ref</p>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-500" />
                <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-500">
                  <p className="font-bold text-purple-700 dark:text-purple-300 text-sm">forwardRef Wrapper</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Receives ref as param</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-500" />
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                  <p className="font-bold text-green-700 dark:text-green-300 text-sm">DOM Element</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Ref attached</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why Use It?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Without forwardRef, parent components cannot access child component's DOM nodes. forwardRef makes it possible to "forward" refs through custom components!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Problem & Solution */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Box className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Problem"
              description="Why refs don't work on components"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">❌ Without forwardRef</Badge>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function MyInput(props) {'{'}</div>
                    <div className="pl-2">return &lt;input {'{...props}'} /&gt;;</div>
                    <div>{'}'}</div>
                    <div className="mt-2"></div>
                    <div className="text-red-600 dark:text-red-400">// ❌ ref won't work!</div>
                    <div>&lt;MyInput ref={'{inputRef}'} /&gt;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ref is not passed to the input element
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ With forwardRef</Badge>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const MyInput = forwardRef(</div>
                    <div className="pl-2">(props, ref) =&gt; {'{'}</div>
                    <div className="pl-4">return &lt;input ref={'{ref}'} {'{...props}'} /&gt;;</div>
                    <div className="pl-2">{'}'}</div>
                    <div>);</div>
                    <div className="mt-2"></div>
                    <div className="text-green-600 dark:text-green-400">// ✅ ref works perfectly!</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ref is forwarded to the input element
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Share2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Focus Input with forwardRef"
            description="Parent can focus child's input element"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Input Component with forwardRef"
            description="Click the button to focus the custom input"
            colorTheme="green"
            react={`const FancyInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="fancy-input"
    />
  );
});

function App() {
  const inputRef = React.useRef(null);

  const handleFocus = () => {
    // Access child's DOM element from parent!
    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h1>📝 forwardRef Example</h1>

      <div className="card">
        <h2>Custom Input Component</h2>
        
        <FancyInput
          ref={inputRef}
          placeholder="Type something..."
          defaultValue="Hello World"
        />

        <div className="buttons">
          <button onClick={handleFocus} className="btn-focus">
            🎯 Focus Input
          </button>
          <button onClick={handleClear} className="btn-clear">
            🗑️ Clear & Focus
          </button>
        </div>

        <div className="info">
          💡 Parent can control child's input using ref!
        </div>
      </div>

      <div className="explanation">
        <h3>How It Works:</h3>
        <ol>
          <li>1. Parent creates a ref with useRef</li>
          <li>2. Passes ref to FancyInput component</li>
          <li>3. forwardRef receives ref as 2nd parameter</li>
          <li>4. Ref is attached to the actual input element</li>
          <li>5. Parent can now access and control the input!</li>
        </ol>
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
  const { createElement: h, forwardRef, useRef } = React;
  const { createRoot } = ReactDOM;

  const FancyInput = forwardRef((props, ref) => {
    return h('input', {
      ref: ref,
      ...props,
      className: 'fancy-input'
    });
  });

  function App() {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current?.focus();
    };

    const handleClear = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    };

    return h('div', { className: 'container' },
      h('h1', null, '📝 forwardRef Example'),

      h('div', { className: 'card' },
        h('h2', null, 'Custom Input Component'),
        
        h(FancyInput, {
          ref: inputRef,
          placeholder: 'Type something...',
          defaultValue: 'Hello World'
        }),

        h('div', { className: 'buttons' },
          h('button', { onClick: handleFocus, className: 'btn-focus' },
            '🎯 Focus Input'
          ),
          h('button', { onClick: handleClear, className: 'btn-clear' },
            '🗑️ Clear & Focus'
          )
        ),

        h('div', { className: 'info' },
          '💡 Parent can control child\\'s input using ref!'
        )
      ),

      h('div', { className: 'explanation' },
        h('h3', null, 'How It Works:'),
        h('ol', null,
          h('li', null, '1. Parent creates a ref with useRef'),
          h('li', null, '2. Passes ref to FancyInput component'),
          h('li', null, '3. forwardRef receives ref as 2nd parameter'),
          h('li', null, '4. Ref is attached to the actual input element'),
          h('li', null, '5. Parent can now access and control the input!')
        )
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.card {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 3px solid #10b981;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
}

.card h2 {
  color: #065f46;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.fancy-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  background: white;
}

.fancy-input:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
  transform: scale(1.02);
}

.buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.buttons button {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-focus {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

.btn-focus:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn-clear {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.btn-clear:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.info {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
}

.explanation {
  background: #f3f4f6;
  padding: 25px;
  border-radius: 16px;
  border: 2px solid #d1d5db;
}

.explanation h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.explanation ol {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.8;
  padding-left: 20px;
}

.explanation li {
  margin-bottom: 8px;
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

  .card {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #6ee7b7;
  }

  .card h2 {
    color: #d1fae5;
  }

  .fancy-input {
    background: #111827;
    border-color: #6ee7b7;
    color: #e5e7eb;
  }

  .fancy-input:focus {
    border-color: #a7f3d0;
    box-shadow: 0 0 0 4px rgba(110, 231, 183, 0.2);
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }

  .explanation {
    background: #111827;
    border-color: #374151;
  }

  .explanation h3 {
    color: #e5e7eb;
  }

  .explanation ol {
    color: #9ca3af;
  }
}`}
          />
        </div>

        {/* Advanced Tips */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-lime-50/50 dark:from-emerald-950/10 dark:to-lime-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Repeat className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Advanced Notes on forwardRef"
              description="Control the exposed instance safely"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Pair <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 rounded text-sm">forwardRef</code> with <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 rounded text-sm">useImperativeHandle</code> so you declare exactly what methods or values the parent can call. That keeps the API surface narrow and predictable.
            </p>

            <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-emerald-950/40 p-4 font-mono text-xs text-slate-700 dark:text-slate-200 space-y-3">
              <div>
                <div className="text-xs font-semibold text-emerald-500 dark:text-emerald-300 mb-1">Expose only helpers</div>
                <pre>{`const CustomInput = forwardRef((props, ref) => {
  const innerRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => innerRef.current?.focus(),
    reset: () => {
      innerRef.current.value = '';
      innerRef.current.focus();
    }
  }));

  return <input ref={innerRef} {...props} />;
});`}</pre>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  The parent sees only the `focus` and `reset` helpers and cannot mutate other internals accidentally.
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-gray-900">
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-300 mb-2">Give it a displayName</h4>
                <p className="text-sm text-muted-foreground">
                  Setting `FancyInput.displayName = 'FancyInput'` keeps DevTools readable and highlights where the ref actually funnels through.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-700 bg-white dark:bg-gray-900">
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-300 mb-2">Wrap third-party elements</h4>
                <p className="text-sm text-muted-foreground">
                  Forward refs whenever you wrap native controls or UI libraries so focus, scrolling, and measurements still work across the wrapper.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
                  <h4 className="font-bold text-green-700 dark:text-green-300">Forward Refs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pass refs through custom components to DOM elements.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Second Parameter</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ref is received as the second parameter after props.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Box className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Reusable Components</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Makes custom components as flexible as native elements.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Common Use Cases</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Focus inputs, scroll to elements, measure DOM sizes.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Component Library Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use forwardRef when building reusable component libraries to give users full control over DOM elements!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
