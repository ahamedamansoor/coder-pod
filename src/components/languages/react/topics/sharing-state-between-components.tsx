'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Share2,
  Lightbulb,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ArrowUp,
  Sparkles,
  Users,
  Zap,
  GitBranch,
  ArrowDown,
} from 'lucide-react';

export default function SharingStateBetweenComponents() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Share2}
        category="React · Managing State"
        title="Sharing State Between Components"
        description="Learn how to share state between multiple components by lifting state up to their common parent. Master the most common pattern in React."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Problem */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="The Problem: Components Need to Share State"
              description="When two components need the same data"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Sometimes, you want the state of <strong>two components to always change together</strong>. To do it, remove state from both of them, move it to their closest common parent, and then pass it down via props.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <h4 className="font-bold mb-4 text-orange-700 dark:text-orange-300">❌ Problem: Independent State</h4>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-slate-800 dark:text-slate-200 font-mono">
                  <code>{`function Panel1() {
  const [isActive, setIsActive] = useState(false);
  // Panel has its own state
}

function Panel2() {
  const [isActive, setIsActive] = useState(false);
  // Separate state - can't communicate!
}`}</code>
                </pre>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-700 dark:text-orange-400">The issue:</strong> If you want only one panel to be active at a time, you can't coordinate between them because each has its own independent state!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Solution: Lift State Up</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Move the state to their common parent component, then pass it down as props. This is called "lifting state up"!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Lifting State Up */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<ArrowUp className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Lifting State Up"
              description="Move state to the common parent"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              To coordinate two components, move their state to their common parent in three steps:
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Remove State from Child Components</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-red-600 dark:text-red-400">// Remove this from children:</div>
                    <div>const [isActive, setIsActive] = useState(false);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Delete the state from child components that need to share data.
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-purple-500" />
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Pass State from Common Parent</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-green-600 dark:text-green-400">// Add to parent:</div>
                    <div>const [activeIndex, setActiveIndex] =</div>
                    <div className="pl-2">useState(0);</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Add state to the common parent that holds all children.
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-purple-500" />
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Pass Props and Event Handlers Down</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div className="text-green-600 dark:text-green-400">// Pass to children:</div>
                    <div>&lt;Panel</div>
                    <div className="pl-2">isActive={'{'}activeIndex === 0{'}'}</div>
                    <div className="pl-2">onShow={'{'} () =&gt; setActiveIndex(0) {'}'}</div>
                    <div>/&gt;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Children receive state and callbacks as props.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visual Diagram */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="How Data Flows"
              description="State down, events up"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 text-center">Parent Component</h4>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded text-center">
                    <code className="text-sm font-mono text-slate-800 dark:text-slate-200">
                      const [activeIndex, setActiveIndex] = useState(0);
                    </code>
                  </div>
                </div>

                <div className="flex justify-center gap-12">
                  <div className="flex flex-col items-center">
                    <ArrowDown className="w-6 h-6 text-green-500 mb-2" />
                    <Badge className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                      Props Down
                    </Badge>
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowUp className="w-6 h-6 text-purple-500 mb-2" />
                    <Badge className="bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                      Events Up
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 text-center">Child 1</h4>
                    <div className="bg-white dark:bg-gray-900 p-2 rounded text-xs font-mono text-center">
                      <div className="text-slate-800 dark:text-slate-200">isActive={'{'} true {'}'}</div>
                      <div className="text-slate-800 dark:text-slate-200 mt-1">onShow={'{'} ... {'}'}</div>
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-300 dark:border-green-700">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 text-center">Child 2</h4>
                    <div className="bg-white dark:bg-gray-900 p-2 rounded text-xs font-mono text-center">
                      <div className="text-slate-800 dark:text-slate-200">isActive{'{'} false {'}'}</div>
                      <div className="text-slate-800 dark:text-slate-200 mt-1">onShow={'{'} ... {'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">💡 Key Concept</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>State flows down:</strong> Parent passes state to children via props</li>
                <li>• <strong>Events flow up:</strong> Children call parent's functions via callbacks</li>
                <li>• <strong>Single source of truth:</strong> Parent owns the state</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Accordion Example"
            description="Only one panel can be active at a time"
            size="lg"
          />

          <FrontendCodePreview
            title="Controlled Accordion"
            description="Click panels to expand - only one can be open"
            colorTheme="cyan"
            react={`function Accordion() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="container">
      <h1>🎵 Popular Cities</h1>
      
      <Panel
        title="New York"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 8.5 million, New York City is the most populous city in the US.
      </Panel>
      
      <Panel
        title="Tokyo"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Tokyo is the capital of Japan and the most populous metropolitan area in the world.
      </Panel>
      
      <Panel
        title="London"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        London is the capital and largest city of England and the United Kingdom.
      </Panel>

      <div className="info">
        💡 State is lifted to Accordion - only one panel active!
      </div>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>{title}</h3>
        {isActive ? (
          <button onClick={onShow} className="btn-active">
            Hide
          </button>
        ) : (
          <button onClick={onShow} className="btn-show">
            Show
          </button>
        )}
      </div>
      {isActive && (
        <div className="panel-content">
          {children}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Accordion />);`}
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

  function Panel({ title, children, isActive, onShow }) {
    return h('div', { className: 'panel' },
      h('div', { className: 'panel-header' },
        h('h3', null, title),
        isActive
          ? h('button', { onClick: onShow, className: 'btn-active' }, 'Hide')
          : h('button', { onClick: onShow, className: 'btn-show' }, 'Show')
      ),
      isActive && h('div', { className: 'panel-content' }, children)
    );
  }

  function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return h('div', { className: 'container' },
      h('h1', null, '🎵 Popular Cities'),
      
      h(Panel, {
        title: 'New York',
        isActive: activeIndex === 0,
        onShow: () => setActiveIndex(0)
      }, 'With a population of about 8.5 million, New York City is the most populous city in the US.'),
      
      h(Panel, {
        title: 'Tokyo',
        isActive: activeIndex === 1,
        onShow: () => setActiveIndex(1)
      }, 'Tokyo is the capital of Japan and the most populous metropolitan area in the world.'),
      
      h(Panel, {
        title: 'London',
        isActive: activeIndex === 2,
        onShow: () => setActiveIndex(2)
      }, 'London is the capital and largest city of England and the United Kingdom.'),

      h('div', { className: 'info' },
        '💡 State is lifted to Accordion - only one panel active!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Accordion));
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

.panel {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.panel:hover {
  border-color: #667eea;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.panel-header h3 {
  color: white;
  font-size: 18px;
  margin: 0;
}

.btn-show {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.btn-show:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.btn-active {
  padding: 8px 20px;
  background: white;
  color: #667eea;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-active:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

.panel-content {
  padding: 20px;
  color: #1f2937;
  line-height: 1.6;
  font-size: 15px;
  animation: slideDown 0.3s ease;
  background: white;
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

.info {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
  margin-top: 20px;
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

  .panel {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    border-color: #6b7280;
  }

  .panel:hover {
    border-color: #60a5fa;
  }

  .panel-content {
    background: #1f2937;
    color: #e5e7eb;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Controlled vs Uncontrolled */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Users className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Controlled vs Uncontrolled Components"
              description="Who owns the state?"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A component is <strong>"controlled"</strong> when its important information is driven by props rather than its own local state. This lets the parent component fully control its behavior.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Uncontrolled Component</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Panel() {'{'}</div>
                    <div className="pl-2 text-orange-600 dark:text-orange-400">// Owns its state</div>
                    <div className="pl-2">const [isActive, setIsActive] =</div>
                    <div className="pl-4">useState(false);</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Component manages its own state - more flexible but harder to coordinate.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Controlled Component</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function Panel({'{'} isActive, onShow {'}'}) {'{'}</div>
                    <div className="pl-2 text-emerald-600 dark:text-emerald-400">// Controlled by props</div>
                    <div className="pl-2">// No local state!</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Parent controls behavior via props - easier to coordinate multiple components.
                </p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">💡 When to Use Each</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-2">Use Uncontrolled when:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Component is used in isolation</li>
                    <li>• No coordination needed</li>
                    <li>• Simpler implementation</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Use Controlled when:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Need to coordinate multiple components</li>
                    <li>• Parent needs to know the state</li>
                    <li>• Want single source of truth</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Patterns */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Common Patterns"
              description="How to structure shared state"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">1. Single Selection (Radio)</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [selected, setSelected] = useState(0);</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">// Only one item can be selected</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Store the index or ID of the selected item. Good for tabs, accordions, radio buttons.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">2. Multiple Selection (Checkbox)</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [selectedIds, setSelectedIds] = useState([]);</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">// Array of selected IDs</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Store an array of selected IDs. Good for multi-select lists, checkboxes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">3. Form Coordination</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const [formData, setFormData] = useState({'{'} ... {'}'});</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">// Single object for all form fields</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Store all form values in one object. Makes it easy to validate and submit.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Lift State Up</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When components need to share state, move it to their closest common parent.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Props Down, Events Up</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Parent passes state as props. Children call callbacks to update state.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Single Source of Truth</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State lives in one place (the parent), making it easy to keep components in sync.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Controlled Components</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Components controlled by props are easier to coordinate and test.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Most Common Pattern in React</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Lifting state up is one of the most important patterns in React. It's how you coordinate multiple components that need to share data!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
