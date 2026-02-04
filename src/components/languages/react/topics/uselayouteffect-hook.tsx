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
  Eye,
  Clock,
} from 'lucide-react';

export default function UseLayoutEffectHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Eye}
        category="React · Hooks (Comprehensive)"
        title="useLayoutEffect Hook"
        description="Learn useLayoutEffect for synchronous DOM mutations that need to happen before the browser paints the screen."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useLayoutEffect */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useLayoutEffect?"
              description="Synchronous DOM effects"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useLayoutEffect</code> is identical to <code>useEffect</code>, but it fires <strong>synchronously after all DOM mutations</strong> and <strong>before the browser paints</strong>. Use it when you need to read layout and synchronously re-render!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax (Same as useEffect)</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>useLayoutEffect(() =&gt; {'{'}</div>
                  <div className="pl-4">// Your effect code</div>
                  <div className="pl-4"></div>
                  <div className="pl-4">return () =&gt; {'{'}</div>
                  <div className="pl-8">// Cleanup</div>
                  <div className="pl-4">{'}'};</div>
                  <div>{'}'}, [dependencies]);</div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">⚠️ Performance Warning</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                useLayoutEffect can hurt performance! It blocks visual updates. Prefer useEffect unless you specifically need to read/mutate layout before paint!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Timing Difference */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Clock className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="useEffect vs useLayoutEffect"
              description="Understanding the timing"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Execution Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">React updates DOM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">useLayoutEffect runs (synchronous)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Blocks browser painting</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Browser paints screen</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">User sees updated UI</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">useEffect runs (async)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Doesn't block painting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">useEffect</Badge>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">After Paint</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ Non-blocking</li>
                  <li>✅ Better performance</li>
                  <li>✅ Use for most cases</li>
                  <li>❌ Can cause visual flicker</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">useLayoutEffect</Badge>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Before Paint</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✅ No visual flicker</li>
                  <li>✅ Reads layout first</li>
                  <li>❌ Blocks painting</li>
                  <li>❌ Can hurt performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Use */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="When to Use useLayoutEffect"
              description="Specific use cases"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Measuring DOM</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reading layout information (scroll position, element dimensions) before paint
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Avoiding Flicker</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Preventing visual flicker when updating styles or positions based on measurements
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Third-party Libraries</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Integrating with libraries that expect synchronous DOM updates
                </p>
              </div>
            </div>

            <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <h4 className="font-bold text-red-700 dark:text-red-300">When NOT to Use</h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>❌ Data fetching</li>
                <li>❌ Subscriptions</li>
                <li>❌ Most side effects</li>
                <li>❌ Anything that doesn't need layout info</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example: Tooltip Positioning"
            description="Measuring and positioning before paint"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Tooltip with useLayoutEffect"
            description="Tooltip positioned based on element size"
            colorTheme="blue"
            react={`function Tooltip() {
  const [show, setShow] = React.useState(false);
  const tooltipRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  // useLayoutEffect to position before paint
  React.useLayoutEffect(() => {
    if (show && tooltipRef.current && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      // Position tooltip above button, centered
      const left = buttonRect.left + (buttonRect.width - tooltipRect.width) / 2;
      const top = buttonRect.top - tooltipRect.height - 10;
      
      tooltipRef.current.style.left = left + 'px';
      tooltipRef.current.style.top = top + 'px';
    }
  }, [show]);

  return (
    <div className="container">
      <h1>💬 Tooltip Demo</h1>

      <p className="desc">
        Hover over the button to see a positioned tooltip
      </p>

      <div className="button-area">
        <button
          ref={buttonRef}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="btn"
        >
          Hover Me
        </button>
      </div>

      {show && (
        <div ref={tooltipRef} className="tooltip">
          I'm positioned with useLayoutEffect!
        </div>
      )}

      <div className="info">
        💡 useLayoutEffect reads layout before paint - no flicker!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Tooltip />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useRef, useLayoutEffect } = React;
  const { createRoot } = ReactDOM;

  function Tooltip() {
    const [show, setShow] = useState(false);
    const tooltipRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
      if (show && tooltipRef.current && buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        
        const left = buttonRect.left + (buttonRect.width - tooltipRect.width) / 2;
        const top = buttonRect.top - tooltipRect.height - 10;
        
        tooltipRef.current.style.left = left + 'px';
        tooltipRef.current.style.top = top + 'px';
      }
    }, [show]);

    return h('div', { className: 'container' },
      h('h1', null, '💬 Tooltip Demo'),

      h('p', { className: 'desc' },
        'Hover over the button to see a positioned tooltip'
      ),

      h('div', { className: 'button-area' },
        h('button', {
          ref: buttonRef,
          onMouseEnter: () => setShow(true),
          onMouseLeave: () => setShow(false),
          className: 'btn'
        }, 'Hover Me')
      ),

      show && h('div', { ref: tooltipRef, className: 'tooltip' },
        'I\\'m positioned with useLayoutEffect!'
      ),

      h('div', { className: 'info' },
        '💡 useLayoutEffect reads layout before paint - no flicker!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(Tooltip));
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
  max-width: 500px;
  width: 100%;
  position: relative;
}

h1 {
  color: #3b82f6;
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
}

.desc {
  text-align: center;
  color: #6b7280;
  margin-bottom: 40px;
  font-size: 14px;
}

.button-area {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.btn {
  padding: 14px 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.tooltip {
  position: fixed;
  background: #1e293b;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tooltip::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #1e293b;
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

  .desc {
    color: #9ca3af;
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
                  <Eye className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Before Paint</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Runs synchronously after DOM updates but before browser paint.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Blocks Painting</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Synchronous execution can block visual updates - use sparingly!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">No Flicker</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for preventing visual flicker when measuring/positioning elements.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Prefer useEffect</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use useEffect for most cases - only use useLayoutEffect when necessary!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Rare Use Case!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Most apps don't need useLayoutEffect. Only use it when you specifically need to read layout before the browser paints!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
