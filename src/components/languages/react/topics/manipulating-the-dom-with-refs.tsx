'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  MousePointer2,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Focus,
  Sparkles,
  Eye,
  Zap,
  Target,
  Move,
} from 'lucide-react';

export default function ManipulatingTheDOMWithRefs() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={MousePointer2}
        category="React · Escape Hatches"
        title="Manipulating the DOM with Refs"
        description="Learn how to access and manipulate DOM nodes directly using refs. Perfect for focusing inputs, scrolling, and measuring elements."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Getting a Ref to DOM Node */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Getting a Ref to a DOM Node"
              description="Connect refs to HTML elements"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              To access a DOM node in React, first import <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">useRef</code> and declare a ref. Then, pass it as the <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ref</code> attribute to the JSX element.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">Basic Setup</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`import { useRef } from 'react';

function MyComponent() {
  // 1. Declare a ref
  const myRef = useRef(null);
  
  // 2. Pass it to the element
  return <div ref={myRef}>Hello</div>;
  
  // 3. Access the DOM node
  // myRef.current → the <div> element
}`}</code>
                </pre>
              </div>

              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-cyan-700 dark:text-cyan-400">After rendering:</strong> <code className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">myRef.current</code> will point to the actual DOM node!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Initial Value: null</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Start with <code>useRef(null)</code>. React will set <code>myRef.current</code> to the DOM node during rendering.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Focusing an Input */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Focus className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Example: Focusing an Input"
            description="Click button to focus the input field"
            size="lg"
          />

          <FrontendCodePreview
            title="Focus Input with Ref"
            description="Use ref to programmatically focus an input"
            colorTheme="cyan"
            react={`function FocusInput() {
  const inputRef = React.useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="container">
      <h1>🎯 Focus Example</h1>
      
      <div className="card">
        <input
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus me!"
          className="input"
        />
        
        <button onClick={handleClick} className="btn-focus">
          Focus the Input
        </button>
      </div>

      <div className="info">
        💡 Ref gives direct access to the DOM element!
      </div>
    </div>
  );
}

ReactDOM.render(<FocusInput />, document.getElementById('root'));`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useRef } = React;

  function FocusInput() {
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }

    return h('div', { className: 'container' },
      h('h1', null, '🎯 Focus Example'),
      
      h('div', { className: 'card' },
        h('input', {
          ref: inputRef,
          type: 'text',
          placeholder: 'Click the button to focus me!',
          className: 'input'
        }),
        
        h('button', {
          onClick: handleClick,
          className: 'btn-focus'
        }, 'Focus the Input')
      ),

      h('div', { className: 'info' },
        '💡 Ref gives direct access to the DOM element!'
      )
    );
  }

  ReactDOM.render(h(FocusInput), document.getElementById('root'));
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.card {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 30px;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 16px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 15px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: white;
}

.btn-focus {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-focus:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
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
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #60a5fa;
  }

  .card {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    border-color: #6b7280;
  }

  .input {
    background: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    background: #111827;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Scrolling to Element */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Move className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example: Scrolling to an Element"
            description="Click to scroll to different sections"
            size="lg"
          />

          <FrontendCodePreview
            title="Scroll to Element with Ref"
            description="Use scrollIntoView to navigate smoothly"
            colorTheme="purple"
            react={`function ScrollExample() {
  const firstRef = React.useRef(null);
  const secondRef = React.useRef(null);
  const thirdRef = React.useRef(null);

  function scrollToSection(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  return (
    <div className="container">
      <h1>📜 Scroll Navigator</h1>
      
      <div className="nav">
        <button onClick={() => scrollToSection(firstRef)} className="btn-nav">
          Section 1
        </button>
        <button onClick={() => scrollToSection(secondRef)} className="btn-nav">
          Section 2
        </button>
        <button onClick={() => scrollToSection(thirdRef)} className="btn-nav">
          Section 3
        </button>
      </div>

      <div className="scroll-area">
        <div ref={firstRef} className="section section-1">
          <h2>🌟 Section 1</h2>
          <p>This is the first section. Click buttons above to navigate!</p>
        </div>
        
        <div ref={secondRef} className="section section-2">
          <h2>🚀 Section 2</h2>
          <p>Welcome to section 2. Smooth scrolling with refs!</p>
        </div>
        
        <div ref={thirdRef} className="section section-3">
          <h2>🎯 Section 3</h2>
          <p>You made it to section 3. Refs are powerful!</p>
        </div>
      </div>

      <div className="info">
        💡 Refs enable smooth scrolling!
      </div>
    </div>
  );
}

ReactDOM.render(<ScrollExample />, document.getElementById('root'));`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useRef } = React;

  function ScrollExample() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    function scrollToSection(ref) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }

    return h('div', { className: 'container' },
      h('h1', null, '📜 Scroll Navigator'),
      
      h('div', { className: 'nav' },
        h('button', {
          onClick: () => scrollToSection(firstRef),
          className: 'btn-nav'
        }, 'Section 1'),
        h('button', {
          onClick: () => scrollToSection(secondRef),
          className: 'btn-nav'
        }, 'Section 2'),
        h('button', {
          onClick: () => scrollToSection(thirdRef),
          className: 'btn-nav'
        }, 'Section 3')
      ),

      h('div', { className: 'scroll-area' },
        h('div', {
          ref: firstRef,
          className: 'section section-1'
        },
          h('h2', null, '🌟 Section 1'),
          h('p', null, 'This is the first section. Click buttons above to navigate!')
        ),
        
        h('div', {
          ref: secondRef,
          className: 'section section-2'
        },
          h('h2', null, '🚀 Section 2'),
          h('p', null, 'Welcome to section 2. Smooth scrolling with refs!')
        ),
        
        h('div', {
          ref: thirdRef,
          className: 'section section-3'
        },
          h('h2', null, '🎯 Section 3'),
          h('p', null, 'You made it to section 3. Refs are powerful!')
        )
      ),

      h('div', { className: 'info' },
        '💡 Refs enable smooth scrolling!'
      )
    );
  }

  ReactDOM.render(h(ScrollExample), document.getElementById('root'));
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
  text-align: center;
  margin-bottom: 25px;
  font-size: 2rem;
}

.nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.btn-nav {
  padding: 12px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}

.scroll-area {
  max-height: 300px;
  overflow-y: auto;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  margin-bottom: 20px;
}

.section {
  padding: 40px 30px;
  border-bottom: 2px solid #e5e7eb;
}

.section:last-child {
  border-bottom: none;
}

.section-1 {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.section-2 {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
}

.section-3 {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
}

.section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.section-1 h2 {
  color: #1e40af;
}

.section-2 h2 {
  color: #065f46;
}

.section-3 h2 {
  color: #92400e;
}

.section p {
  font-size: 15px;
  line-height: 1.6;
}

.section-1 p {
  color: #1e3a8a;
}

.section-2 p {
  color: #064e3b;
}

.section-3 p {
  color: #78350f;
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

  .scroll-area {
    border-color: #4b5563;
  }

  .section {
    border-color: #4b5563;
  }

  .section-1 {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  }

  .section-2 {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .section-3 {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
  }

  .section-1 h2,
  .section-1 p {
    color: #dbeafe;
  }

  .section-2 h2,
  .section-2 p {
    color: #d1fae5;
  }

  .section-3 h2,
  .section-3 p {
    color: #fef3c7;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Common Use Cases */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Common Use Cases for DOM Refs"
              description="When to access the DOM directly"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Here are the most common scenarios where you need to manipulate the DOM with refs:
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Managing Focus</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>inputRef.current.focus();</div>
                    <div>inputRef.current.blur();</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Focus or blur form inputs programmatically.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Scrolling to Elements</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>elementRef.current.scrollIntoView({'{'}</div>
                    <div className="pl-2">behavior: 'smooth'</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Scroll to specific elements smoothly.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Measuring Elements</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const width = boxRef.current.offsetWidth;</div>
                    <div>const height = boxRef.current.offsetHeight;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Get dimensions and position of elements.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Playing Media</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>videoRef.current.play();</div>
                    <div>videoRef.current.pause();</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Control video and audio playback.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Best Practices & Warnings"
              description="When to use and when to avoid refs"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Good Uses</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Managing focus, selection, scroll</li>
                  <li>• Triggering animations</li>
                  <li>• Integrating with third-party DOM libraries</li>
                  <li>• Measuring element size/position</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Modifying DOM that React manages</li>
                  <li>• Changing content React controls</li>
                  <li>• Overusing refs instead of state</li>
                  <li>• Accessing refs during render</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Don't Overuse Refs!</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                Refs are an "escape hatch" for imperative operations. If you can do something declaratively with props and state, do that instead!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Pass Ref to JSX</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">ref={'{myRef}'}</code> attribute to connect a ref to a DOM element.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Access via .current</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  After rendering, <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">myRef.current</code> points to the actual DOM node.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Imperative Operations</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for focus, scroll, play/pause - operations you "command" to happen.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Use Sparingly</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prefer declarative React approach. Use refs only when necessary!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use DOM Refs</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Use refs when you need to step outside React and interact directly with browser APIs. For everything else, stick with state and props!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
