'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Zap,
  MousePointer,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Hand,
  Keyboard,
  AlertTriangle,
  Code,
  Sparkles,
  Target,
  StopCircle,
  ShieldOff,
} from 'lucide-react';

export default function RespondingToEvents() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Adding Interactivity"
        title="Responding to Events"
        description="Learn how to make your React apps interactive! Handle clicks, keyboard input, form submissions, and more with event handlers."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Introduction */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<MousePointer className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Events?"
              description="Events are things that happen in the browser - clicks, typing, scrolling, and more!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              An <strong>event</strong> is something that happens in your app - like a user clicking a button, typing in a text box, or moving their mouse. React lets you <strong>respond</strong> to these events by running your code when they happen!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                    <MousePointer className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Mouse Events</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>Click</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>Double Click</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>Mouse Move</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>Mouse Enter/Leave</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Keyboard className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Keyboard Events</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Key Down</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Key Up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Key Press</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Input Change</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                    <Hand className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Form Events</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Submit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Change</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Blur</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Events Make Apps Interactive!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Without events, your app would just sit there doing nothing. Events are what make websites feel alive and responsive!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Adding Event Handlers */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Adding Event Handlers"
              description="How to tell React what to do when something happens"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              An <strong>event handler</strong> is a function that runs when an event happens. In React, you pass event handlers as <strong>props</strong> to JSX elements. The most common pattern is <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">onClick</code> for button clicks.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-green-700 dark:text-green-300">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Correct Way
                </h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">{'// Pass the function itself'}</div>
                  <div>{'<button'}</div>
                  <div className="pl-4">{'onClick={handleClick}'}</div>
                  <div>{'>'}</div>
                  <div className="pl-2">Click me</div>
                  <div>{'</button>'}</div>
                </div>
                <p className="text-xs text-green-600 mt-3">✅ Passes function reference - runs when clicked</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-red-700 dark:text-red-300">
                  <XCircle className="w-5 h-5" />
                  ❌ Common Mistake
                </h4>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">{'// Calls function immediately!'}</div>
                  <div>{'<button'}</div>
                  <div className="pl-4">{'onClick={handleClick()}'}</div>
                  <div>{'>'}</div>
                  <div className="pl-2">Click me</div>
                  <div>{'</button>'}</div>
                </div>
                <p className="text-xs text-red-600 mt-3">❌ The () calls it right away during render!</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Three Ways to Write Event Handlers</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-500">Method 1</Badge>
                    <span className="font-semibold text-sm">Define Separately</span>
                  </div>
                  <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 p-3 rounded">
                    <div>function handleClick() {'{'}</div>
                    <div className="pl-4">alert('Clicked!');</div>
                    <div>{'}'}</div>
                    <div className="mt-2">{'<button onClick={handleClick}>Click</button>'}</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-500">Method 2</Badge>
                    <span className="font-semibold text-sm">Inline Function</span>
                  </div>
                  <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 p-3 rounded">
                    {'<button onClick={() => alert(\'Clicked!\')}>Click</button>'}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-500">Method 3</Badge>
                    <span className="font-semibold text-sm">Inline with Logic</span>
                  </div>
                  <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 p-3 rounded">
                    <div>{'<button onClick={() => {'}</div>
                    <div className="pl-4">console.log('Starting...');</div>
                    <div className="pl-4">alert('Clicked!');</div>
                    <div>{'}>Click</button>'}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic Events Example - Split into smaller file due to size */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Try It - Basic Event Handlers"
            description="Click and hover to see events in action!"
            size="lg"
          />

          <FrontendCodePreview
            title="Event Handlers Demo"
            description="Multiple event types with visual feedback"
            colorTheme="cyan"
            react={`import React from 'react';

function App() {
  function handleClick() {
    alert('🎉 Button clicked!');
  }

  function handleDoubleClick() {
    alert('⚡ Double clicked!');
  }

  function handleMouseEnter(e) {
    e.target.style.background = 'linear-gradient(135deg, #fde68a 0%, #fcd34d 100%)';
  }

  function handleMouseLeave(e) {
    e.target.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
  }

  return (
    <div className="container">
      <h1>🎯 Event Handlers Demo</h1>
      
      <div className="section">
        <h3>Click Events</h3>
        <button 
          className="btn-primary"
          onClick={handleClick}
        >
          Click Me! 👆
        </button>
        
        <button 
          className="btn-secondary"
          onDoubleClick={handleDoubleClick}
        >
          Double Click Me! ⚡
        </button>
      </div>

      <div className="section">
        <h3>Mouse Events</h3>
        <div 
          className="hover-box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover over me! 👀
          <p className="hint">Watch the color change!</p>
        </div>
      </div>
    </div>
  );
}

export default App;`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function App() {
    function handleClick() {
      alert('🎉 Button clicked!');
    }

    function handleDoubleClick() {
      alert('⚡ Double clicked!');
    }

    function handleMouseEnter(e) {
      e.target.style.background = 'linear-gradient(135deg, #fde68a 0%, #fcd34d 100%)';
    }

    function handleMouseLeave(e) {
      e.target.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
    }

    return h('div', { className: 'container' },
      h('h1', null, '🎯 Event Handlers Demo'),
      
      h('div', { className: 'section' },
        h('h3', null, 'Click Events'),
        h('button', {
          className: 'btn-primary',
          onClick: handleClick
        }, 'Click Me! 👆'),
        h('button', {
          className: 'btn-secondary',
          onDoubleClick: handleDoubleClick
        }, 'Double Click Me! ⚡')
      ),

      h('div', { className: 'section' },
        h('h3', null, 'Mouse Events'),
        h('div', {
          className: 'hover-box',
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        },
          'Hover over me! 👀',
          h('p', { className: 'hint' }, 'Watch the color change!')
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
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.section {
  margin: 30px 0;
  padding: 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  border: 3px solid #06b6d4;
}

h3 {
  color: #0891b2;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.btn-primary, .btn-secondary {
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}

.btn-primary:active, .btn-secondary:active {
  transform: translateY(0);
}

.hover-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #92400e;
  cursor: pointer;
  border: 3px solid #f59e0b;
  transition: all 0.3s ease;
}

.hint {
  margin-top: 10px;
  font-size: 12px;
  color: #78350f;
  font-weight: 500;
}`}
          />
        </div>

        {/* Event Object */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="The Event Object"
              description="Getting information about what happened"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When an event happens, React passes an <strong>event object</strong> to your handler function. This object contains useful information about the event - like which key was pressed, where the mouse was, or what text was typed.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">Common Event Properties</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <code className="font-mono text-sm font-semibold text-indigo-700 dark:text-indigo-300">e.target</code>
                    <p className="text-xs text-muted-foreground mt-1">The element that triggered the event</p>
                  </div>
                  
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <code className="font-mono text-sm font-semibold text-indigo-700 dark:text-indigo-300">e.target.value</code>
                    <p className="text-xs text-muted-foreground mt-1">Value of an input field</p>
                  </div>
                  
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <code className="font-mono text-sm font-semibold text-indigo-700 dark:text-indigo-300">e.key</code>
                    <p className="text-xs text-muted-foreground mt-1">Which keyboard key was pressed</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <code className="font-mono text-sm font-semibold text-indigo-700 dark:text-indigo-300">e.clientX / e.clientY</code>
                    <p className="text-xs text-muted-foreground mt-1">Mouse position coordinates</p>
                  </div>
                  
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <code className="font-mono text-sm font-semibold text-indigo-700 dark:text-indigo-300">e.currentTarget</code>
                    <p className="text-xs text-muted-foreground mt-1">Element with the event handler</p>
                  </div>
                  
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <code className="font-mono text-sm font-semibold text-indigo-700 dark:text-indigo-300">e.preventDefault()</code>
                    <p className="text-xs text-muted-foreground mt-1">Stop default browser behavior</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-bold mb-3 text-indigo-700 dark:text-indigo-300">Example: Using Event Object</h4>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border font-mono text-sm space-y-2">
                <div>function handleKeyPress(e) {'{'}</div>
                <div className="pl-4 text-blue-600 dark:text-blue-400">{'console.log("Key:", e.key);'}</div>
                <div className="pl-4 text-green-600 dark:text-green-400">{'console.log("Target:", e.target);'}</div>
                <div className="pl-4 text-purple-600 dark:text-purple-400">{'console.log("Value:", e.target.value);'}</div>
                <div>{'}'}</div>
                <div className="mt-3">{'<input onKeyDown={handleKeyPress} />'}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stopping Propagation */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<StopCircle className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Stopping Event Propagation"
              description="Preventing events from bubbling up to parent elements"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When an event happens on an element, it <strong>bubbles up</strong> - meaning it also triggers on parent elements! Sometimes you want to stop this. Use <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">e.stopPropagation()</code> to prevent the event from reaching parent handlers.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <h4 className="font-bold mb-4 text-amber-700 dark:text-amber-300">Event Bubbling Visualization</h4>
              <div className="space-y-4">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-300 dark:border-red-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-bold text-red-700 dark:text-red-300">🎯 Grandparent</span>
                    <Badge className="bg-red-500">onClick triggers 3rd</Badge>
                  </div>
                  
                  <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-bold text-blue-700 dark:text-blue-300">🎯 Parent</span>
                      <Badge className="bg-blue-500">onClick triggers 2nd</Badge>
                    </div>
                    
                    <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-green-700 dark:text-green-300">🎯 Child Button</span>
                        <Badge className="bg-green-500">onClick triggers 1st</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Click bubbles from <span className="text-green-600 font-semibold">Child</span> → 
                  <span className="text-blue-600 font-semibold"> Parent</span> → 
                  <span className="text-red-600 font-semibold"> Grandparent</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">❌ Without stopPropagation</h4>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded font-mono text-xs space-y-2">
                  <div>{'<div onClick={handleParent}>'}</div>
                  <div className="pl-4">{'<button onClick={handleChild}>'}</div>
                  <div className="pl-8">Click</div>
                  <div className="pl-4">{'</button>'}</div>
                  <div>{'</div>'}</div>
                  <div className="mt-3 text-red-600">// Both handlers run! 😱</div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">✅ With stopPropagation</h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded font-mono text-xs space-y-2">
                  <div>function handleChild(e) {'{'}</div>
                  <div className="pl-4 text-green-600">{'e.stopPropagation();'}</div>
                  <div className="pl-4">{'// your code'}</div>
                  <div>{'}'}</div>
                  <div className="mt-3 text-green-600">// Only child handler runs! ✅</div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">When to Use It</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Use stopPropagation when child and parent both have click handlers, but you only want the child's handler to run!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Preventing Default */}
        <Card className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<ShieldOff className="w-7 h-7 text-rose-600 dark:text-rose-400" />}
              title="Preventing Default Behavior"
              description="Taking control of browser defaults like form submission"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Some elements have <strong>default behaviors</strong> - like forms submitting and refreshing the page, or links navigating away. Use <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">e.preventDefault()</code> to stop these defaults and handle things yourself!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-rose-200 dark:border-rose-800">
              <h4 className="font-bold mb-4 text-rose-700 dark:text-rose-300">Common Use Cases</h4>
              <div className="space-y-4">
                <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-200 dark:border-rose-800">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-rose-500">Form Submit</Badge>
                    <div className="flex-1">
                      <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                        <strong>Default:</strong> Page refreshes
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>With preventDefault:</strong> Handle submission in React
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-500">Link Click</Badge>
                    <div className="flex-1">
                      <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                        <strong>Default:</strong> Navigates to href
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>With preventDefault:</strong> Custom navigation logic
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-purple-500">Context Menu</Badge>
                    <div className="flex-1">
                      <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                        <strong>Default:</strong> Shows browser menu
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>With preventDefault:</strong> Show custom menu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold mb-3 text-rose-700 dark:text-rose-300">Form Example</h4>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border font-mono text-sm space-y-2">
                <div>function handleSubmit(e) {'{'}</div>
                <div className="pl-4 text-rose-600">{'e.preventDefault();  // Stop page refresh!'}</div>
                <div className="pl-4 text-muted-foreground">{'// Now handle form data yourself'}</div>
                <div className="pl-4">const formData = new FormData(e.target);</div>
                <div className="pl-4">{'// Process the data...'}</div>
                <div>{'}'}</div>
                <div className="mt-3">{'<form onSubmit={handleSubmit}>'}</div>
                <div className="pl-4">{'<input name="username" />'}</div>
                <div className="pl-4">{'<button type="submit">Submit</button>'}</div>
                <div>{'</form>'}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Events Reference */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Common React Events"
              description="Quick reference for frequently used events"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold mb-3 text-cyan-700 dark:text-cyan-300">Mouse Events</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between p-2 bg-cyan-50 dark:bg-cyan-950/20 rounded">
                    <code>onClick</code>
                    <span className="text-muted-foreground">Single click</span>
                  </div>
                  <div className="flex justify-between p-2 bg-cyan-50 dark:bg-cyan-950/20 rounded">
                    <code>onDoubleClick</code>
                    <span className="text-muted-foreground">Double click</span>
                  </div>
                  <div className="flex justify-between p-2 bg-cyan-50 dark:bg-cyan-950/20 rounded">
                    <code>onMouseEnter</code>
                    <span className="text-muted-foreground">Mouse enters</span>
                  </div>
                  <div className="flex justify-between p-2 bg-cyan-50 dark:bg-cyan-950/20 rounded">
                    <code>onMouseLeave</code>
                    <span className="text-muted-foreground">Mouse leaves</span>
                  </div>
                  <div className="flex justify-between p-2 bg-cyan-50 dark:bg-cyan-950/20 rounded">
                    <code>onMouseMove</code>
                    <span className="text-muted-foreground">Mouse moves</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Keyboard Events</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <code>onKeyDown</code>
                    <span className="text-muted-foreground">Key pressed</span>
                  </div>
                  <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <code>onKeyUp</code>
                    <span className="text-muted-foreground">Key released</span>
                  </div>
                  <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <code>onKeyPress</code>
                    <span className="text-muted-foreground">Key typed</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">Form Events</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <code>onChange</code>
                    <span className="text-muted-foreground">Value changes</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <code>onSubmit</code>
                    <span className="text-muted-foreground">Form submits</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <code>onFocus</code>
                    <span className="text-muted-foreground">Element focused</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <code>onBlur</code>
                    <span className="text-muted-foreground">Focus lost</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">Other Events</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    <code>onScroll</code>
                    <span className="text-muted-foreground">Page scrolls</span>
                  </div>
                  <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    <code>onLoad</code>
                    <span className="text-muted-foreground">Resource loads</span>
                  </div>
                  <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    <code>onContextMenu</code>
                    <span className="text-muted-foreground">Right click</span>
                  </div>
                  <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded">
                    <code>onCopy</code>
                    <span className="text-muted-foreground">Content copied</span>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Naming Convention</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                React event names use camelCase: <code>onClick</code> not <code>onclick</code>, <code>onChange</code> not <code>onchange</code>!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
