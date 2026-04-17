'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  Zap,
  Lightbulb,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Cpu,
  Monitor,
  Paintbrush,
  GitCommit,
  AlertCircle,
  Sparkles,
  Eye,
  Code2,
} from 'lucide-react';

export default function RenderAndCommit() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="React · Adding Interactivity"
        title="Render and Commit"
        description="Understand the three-step process React uses to display your components on screen: triggering a render, rendering the component, and committing to the DOM."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Introduction */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="How React Updates the Screen"
              description="From your code to pixels on the screen - the journey of a React component"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Before your components are displayed on screen, they must be processed by React. Understanding this process helps you think about how your code executes and explain its behavior.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-center text-cyan-700 dark:text-cyan-300">🍽️ Think of it Like a Restaurant</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-3xl">
                      📋
                    </div>
                  </div>
                  <h5 className="font-bold text-center mb-2 text-orange-700 dark:text-orange-300">1. Triggering</h5>
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                    Customer orders food (trigger a render)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-3xl">
                      👨‍🍳
                    </div>
                  </div>
                  <h5 className="font-bold text-center mb-2 text-purple-700 dark:text-purple-300">2. Rendering</h5>
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                    Chef prepares the order (React calls your component)
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl">
                      🍽️
                    </div>
                  </div>
                  <h5 className="font-bold text-center mb-2 text-green-700 dark:text-green-300">3. Committing</h5>
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                    Waiter serves the food (React updates the DOM)
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Concept</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                React doesn't touch the DOM until the commit phase. This means rendering can happen many times before anything appears on screen!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 1: Triggering a Render */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Step 1: Triggering a Render"
              description="There are two reasons for a component to render"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              A render must be <strong>triggered</strong> before React can display anything on screen. Think of it like ordering food at a restaurant - you need to place an order before the kitchen starts cooking!
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Reason 1: Initial Render</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      When your app starts, React needs to display the initial UI. This is triggered by calling <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">createRoot</code> and then <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">render</code>.
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                      <pre className="text-xs text-slate-800 dark:text-slate-100 font-mono">
                        <code>{`import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />); // Triggers initial render!`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Reason 2: State Update</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Once a component is rendered, you can trigger additional renders by updating its state with the <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">set</code> function from <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">useState</code>.
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                      <pre className="text-xs text-slate-800 dark:text-slate-100 font-mono">
                        <code>{`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
// Clicking the button triggers a re-render!`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-700 dark:text-orange-300">What Happens Next?</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When you trigger a render, React calls your component to figure out what should be on screen. <strong>"Rendering"</strong> is React calling your components!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: React Renders Your Component */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Cpu className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Step 2: React Renders Your Component"
              description="React calls your function to figure out what should be displayed"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              After triggering a render, React calls your component to figure out what to display. <strong>"Rendering"</strong> means React is calling your component function.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">The Rendering Process</h4>
              
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white font-bold flex-shrink-0 text-sm md:text-base">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1 text-sm md:text-base">Initial Render</h5>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      React calls the <strong>root component</strong>
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-purple-500 flex-shrink-0" />

                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500 text-white font-bold flex-shrink-0 text-sm md:text-base">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-1 text-sm md:text-base">Re-render</h5>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      State update <strong>triggers render</strong>
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-purple-500 flex-shrink-0" />

                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-500 text-white font-bold flex-shrink-0 text-sm md:text-base">
                    3
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-1 text-sm md:text-base">Recursive Process</h5>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      If any child component returns other components, React will render those next. This continues until there are no more nested components.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-bold mb-3 text-indigo-700 dark:text-indigo-300">Example: Component Tree Rendering</h4>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-3">
                <pre className="text-xs font-mono text-slate-800 dark:text-slate-200">
                  <code>{`<App>              // 1. React calls App()
  <Header />       // 2. Then calls Header()
  <Main>           // 3. Then calls Main()
    <Article />    // 4. Then calls Article()
    <Sidebar />    // 5. Then calls Sidebar()
  </Main>
  <Footer />       // 6. Finally calls Footer()
</App>`}</code>
                </pre>
              </div>
              <p className="text-xs text-muted-foreground">
                React walks down the component tree, calling each function to get the JSX it should display.
              </p>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <AlertCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Important!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Rendering must always be a <strong>pure calculation</strong>. Same inputs should always produce the same output. Don't modify variables, make network requests, or set timers during render!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 3: React Commits Changes */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitCommit className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Step 3: React Commits Changes to the DOM"
              description="React updates the DOM with only what changed"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              After rendering your components, React will modify the DOM. But it's smart - it only changes what needs to change!
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Initial Render</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      React uses <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">appendChild()</code> to put all the DOM nodes it created on screen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Paintbrush className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">Re-renders</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      React applies the <strong>minimal necessary operations</strong> to make the DOM match the latest rendering output. It only changes what's different!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h4 className="font-bold mb-4 text-green-700 dark:text-green-300 text-center">🎯 React Only Updates What Changed</h4>
              
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <Badge className="bg-red-500 mb-2">Before Re-render</Badge>
                  <div className="font-mono text-sm">
                    <div className="text-gray-700 dark:text-gray-300">&lt;h1&gt;Hello, World!&lt;/h1&gt;</div>
                    <div className="text-red-600 dark:text-red-400">&lt;p&gt;Count: <strong>0</strong>&lt;/p&gt;</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-sm">
                    <RefreshCw className="w-4 h-4" />
                    State Update: setCount(1)
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <Badge className="bg-green-500 mb-2">After Re-render</Badge>
                  <div className="font-mono text-sm">
                    <div className="text-gray-500 dark:text-gray-500">&lt;h1&gt;Hello, World!&lt;/h1&gt; <span className="text-xs">← Unchanged</span></div>
                    <div className="text-green-600 dark:text-green-400">&lt;p&gt;Count: <strong>1</strong>&lt;/p&gt; <span className="text-xs">← Updated!</span></div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                React only updates the <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">&lt;p&gt;</code> element's content, leaving the <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">&lt;h1&gt;</code> untouched!
              </p>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Performance Optimization</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                React calculates which DOM nodes changed between renders and only updates those. This makes React fast and efficient!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See It In Action"
            description="Watch the three-step process with a live example"
            size="lg"
          />

          <FrontendCodePreviewReact
            title="Render and Commit Visualizer"
            description="Click the button to trigger renders and see what updates"
            colorTheme="cyan"
            react={`function RenderAndCommitVisualizer() {
  const [step, setStep] = React.useState(1);
  const [renderCount, setRenderCount] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const triggerStep = () => {
    setIsAnimating(true);
    setStep(1);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        setStep(3);
        setTimeout(() => {
          setRenderCount(renderCount + 1);
          setIsAnimating(false);
        }, 800);
      }, 800);
    }, 800);
  };

  return (
    <div className="visualizer-container">
      <div className="visualizer-header">
        <h1 className="visualizer-title">
          🔄 React's Render & Commit Process
        </h1>
        <p className="visualizer-subtitle">
          Watch how React updates your screen in 3 steps
        </p>
      </div>
      
      <div className="step-container">
        <div className={'step-box step-' + step}>
          <div className="step-icon">⚡</div>
          <div className="step-title">1. TRIGGER</div>
          <div className="step-status">
            {step === 1 ? 'State changes!' : step > 1 ? '✅ Done' : 'Waiting...'}
          </div>
        </div>
        
        <div className={'step-arrow ' + (step > 1 ? 'active' : '')}>
          →
        </div>
        
        <div className={'step-box step-' + step}>
          <div className="step-icon">🎨</div>
          <div className="step-title">2. RENDER</div>
          <div className="step-status">
            {step === 2 ? 'React calls component!' : step > 2 ? '✅ Done' : 'Waiting...'}
          </div>
        </div>
        
        <div className={'step-arrow ' + (step > 2 ? 'active' : '')}>
          →
        </div>
        
        <div className={'step-box step-' + step}>
          <div className="step-icon">🖥️</div>
          <div className="step-title">3. COMMIT</div>
          <div className="step-status">
            {step === 3 ? 'DOM updated!' : step > 3 ? '✅ Done' : 'Waiting...'}
          </div>
        </div>
      </div>

      <div className="demo-box">
        <h3 className="demo-title">
          📱 Live Component Demo
        </h3>
        <div className="demo-content">
          <div className="demo-label">
            Render Count:
          </div>
          <div className={'demo-count ' + (isAnimating ? 'animating' : '')}>
            {renderCount}
          </div>
          <div className="demo-note">
            This number only updates during COMMIT phase
          </div>
        </div>
      </div>

      <div className="button-container">
        <button 
          className={'trigger-button ' + (isAnimating ? 'disabled' : '')}
          onClick={triggerStep}
          disabled={isAnimating}
        >
          {isAnimating ? '⏳ Processing...' : '🚀 Trigger Render Process'}
        </button>
        
        <button 
          className="reset-button"
          onClick={() => {
            setStep(1);
            setRenderCount(0);
            setIsAnimating(false);
          }}
        >
          🔄 Reset
        </button>
      </div>

      <div className="explanation-box">
        <h4 className="explanation-title">
          💡 What's Happening?
        </h4>
        <div className="explanation-content">
          <div className="explanation-step">
            <strong className="trigger-text">1. TRIGGER:</strong> You click the button → React detects state change
          </div>
          <div className="explanation-step">
            <strong className="render-text">2. RENDER:</strong> React calls this component function → Creates new UI description
          </div>
          <div className="explanation-step">
            <strong className="commit-text">3. COMMIT:</strong> React compares old vs new UI → Updates ONLY changed parts in DOM
          </div>
          <div className="key-insight">
            <strong>🎯 Key Insight:</strong> React only updates what actually changes! 
            The static text around this box never gets touched in the DOM.
          </div>
        </div>
      </div>
    </div>
  );
}

// This code triggers the INITIAL RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderAndCommitVisualizer />);`}
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

  function RenderVisualizer() {
    const [count, setCount] = useState(0);
    const [name] = useState('React');

    return h('div', { className: 'container' },
      h('h1', null, '🔄 Render and Commit Demo'),
      
      h('div', { className: 'status-panel' },
        h('div', { className: 'status-item trigger' },
          h('span', { className: 'label' }, '1. Trigger'),
          h('p', null, 'Click button → State updates')
        ),
        h('div', { className: 'arrow' }, '→'),
        h('div', { className: 'status-item render' },
          h('span', { className: 'label' }, '2. Render'),
          h('p', null, 'React calls component')
        ),
        h('div', { className: 'arrow' }, '→'),
        h('div', { className: 'status-item commit' },
          h('span', { className: 'label' }, '3. Commit'),
          h('p', null, 'Updates DOM changes only')
        )
      ),

      h('div', { className: 'demo-section' },
        h('div', { className: 'info-box' },
          h('h3', null, 'Static Content (Never Changes)'),
          h('p', { className: 'static-text' }, 'Hello, ' + name + '! 👋'),
          h('p', { className: 'hint' }, 'This text stays the same every render')
        ),

        h('div', { className: 'info-box dynamic' },
          h('h3', null, 'Dynamic Content (Changes)'),
          h('p', { className: 'count-display' },
            'Count: ',
            h('strong', null, count)
          ),
          h('p', { className: 'hint' }, 'Only this number updates in the DOM!')
        )
      ),

      h('button', {
        className: 'btn-increment',
        onClick: () => setCount(count + 1)
      }, '➕ Increment Count (Trigger Render)'),

      h('div', { className: 'explanation' },
        h('h4', null, 'What Just Happened?'),
        h('ul', null,
          h('li', null, '✅ ', h('strong', null, 'Trigger:'), ' You clicked the button'),
          h('li', null, '✅ ', h('strong', null, 'Render:'), ' React called this component'),
          h('li', null, '✅ ', h('strong', null, 'Commit:'), ' Only the count number updated!')
        ),
        h('p', { className: 'note' },
          '💡 Notice: The greeting "Hello, React!" does not re-render in the DOM because it did not change!'
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(RenderVisualizer));
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
  max-width: 800px;
  width: 100%;
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.status-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  border: 3px solid #06b6d4;
}

.status-item {
  flex: 1;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
}

.status-item.trigger {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  border: 2px solid #f97316;
}

.status-item.render {
  background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%);
  border: 2px solid #8b5cf6;
}

.status-item.commit {
  background: linear-gradient(135deg, #bbf7d0 0%, #86efac 100%);
  border: 2px solid #10b981;
}

.status-item .label {
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
}

.status-item p {
  font-size: 12px;
  margin: 0;
}

.arrow {
  font-size: 24px;
  font-weight: bold;
  color: #06b6d4;
}

.demo-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.info-box {
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border: 2px solid #9ca3af;
}

.info-box.dynamic {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
}

.info-box h3 {
  font-size: 14px;
  margin-bottom: 10px;
  color: #1f2937;
}

.static-text {
  font-size: 18px;
  font-weight: 600;
  color: #4b5563;
  margin: 10px 0;
}

.count-display {
  font-size: 20px;
  font-weight: 600;
  color: #92400e;
  margin: 10px 0;
}

.count-display strong {
  font-size: 32px;
  color: #f59e0b;
}

.hint {
  font-size: 11px;
  color: #6b7280;
  font-style: italic;
  margin-top: 8px;
}

.btn-increment {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 25px;
}

.btn-increment:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-increment:active {
  transform: translateY(0);
}

.explanation {
  padding: 20px;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  border-radius: 12px;
  border: 3px solid #8b5cf6;
}

.explanation h4 {
  color: #7c3aed;
  margin-bottom: 12px;
  font-size: 16px;
}

.explanation ul {
  list-style: none;
  margin-bottom: 15px;
}

.explanation li {
  padding: 8px 0;
  color: #1f2937;
  font-size: 14px;
}

.note {
  background: white;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #a78bfa;
  font-size: 13px;
  color: #6b21a8;
  margin: 0;
}

@media (max-width: 768px) {
  .demo-section {
    grid-template-columns: 1fr;
  }
  
  .status-panel {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }

  .container {
    background: #1f2937;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: #60a5fa;
  }

  .status-panel {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #3b82f6;
  }

  .status-item.trigger {
    background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
    border-color: #f97316;
  }

  .status-item.render {
    background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
    border-color: #8b5cf6;
  }

  .status-item.commit {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    border-color: #10b981;
  }

  .status-item .label {
    color: #ffffff;
  }

  .status-item p {
    color: #e5e7eb;
  }

  .arrow {
    color: #60a5fa;
  }

  .info-box {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    border-color: #6b7280;
  }

  .info-box.dynamic {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
  }

  .info-box h3 {
    color: #e5e7eb;
  }

  .static-text {
    color: #d1d5db;
  }

  .count-display {
    color: #fbbf24;
  }

  .count-display strong {
    color: #fcd34d;
  }

  .hint {
    color: #9ca3af;
  }

  .btn-increment {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  }

  .btn-increment:hover {
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.5);
  }

  .explanation {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
    border-color: #7c3aed;
  }

  .explanation h4 {
    color: #c4b5fd;
  }

  .explanation li {
    color: #e5e7eb;
  }

  .note {
    background: #312e81;
    border-color: #8b5cf6;
    color: #ddd6fe;
  }

  /* Interactive Visualizer Styles */
  .visualizer-container {
    font-family: system-ui, -apple-system, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 24px;
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    border-radius: 16px;
    color: white;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  .visualizer-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .visualizer-title {
    font-size: 32px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  .visualizer-subtitle {
    font-size: 16px;
    opacity: 0.8;
    margin: 0;
  }

  .step-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    position: relative;
  }

  .step-box {
    width: 120px;
    height: 120px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.5s ease;
    border: 1px solid;
    opacity: 0.4;
    transform: scale(1);
  }

  .step-box.step-1 {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    border-color: #60a5fa;
    opacity: 1;
    transform: scale(1.1);
  }

  .step-box.step-2 {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-color: #34d399;
    opacity: 1;
    transform: scale(1.1);
  }

  .step-box.step-3 {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-color: #34d399;
    opacity: 1;
    transform: scale(1.1);
  }

  .step-icon {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .step-title {
    font-size: 14px;
    font-weight: bold;
  }

  .step-status {
    font-size: 11px;
    opacity: 0.8;
    margin-top: 4px;
    text-align: center;
  }

  .step-arrow {
    font-size: 24px;
    margin: 0 16px;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  .step-arrow.active {
    opacity: 1;
  }

  .demo-box {
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }

  .demo-title {
    font-size: 18px;
    margin-bottom: 16px;
    color: #60a5fa;
  }

  .demo-content {
    background: rgba(255,255,255,0.1);
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    min-width: 200px;
  }

  .demo-label {
    font-size: 14px;
    margin-bottom: 8px;
    opacity: 0.8;
  }

  .demo-count {
    font-size: 36px;
    font-weight: bold;
    color: #fbbf24;
    transition: all 0.3s ease;
    transform: scale(1);
  }

  .demo-count.animating {
    transform: scale(1.2);
  }

  .demo-note {
    font-size: 12px;
    margin-top: 8px;
    opacity: 0.6;
  }

  .button-container {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 24px;
  }

  .trigger-button {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }

  .trigger-button.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .reset-button {
    background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .explanation-box {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .explanation-title {
    font-size: 16px;
    margin-bottom: 12px;
    color: #60a5fa;
  }

  .explanation-content {
    font-size: 14px;
    line-height: 1.6;
  }

  .explanation-step {
    margin-bottom: 8px;
  }

  .trigger-text {
    color: #fbbf24;
  }

  .render-text {
    color: #60a5fa;
  }

  .commit-text {
    color: #34d399;
  }

  .key-insight {
    margin-top: 12px;
    padding: 12px;
    background: rgba(251, 191, 36, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(251, 191, 36, 0.2);
  }
}`}
          />
        </div>

        {/* Browser Paint */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Paintbrush className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Epilogue: Browser Paint"
              description="After React commits, the browser repaints the screen"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              After rendering is done and React has committed changes to the DOM, the browser repaints the screen. This process is called <strong>"browser rendering"</strong> (or "painting").
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                  🖼️
                </div>
                <h4 className="font-bold text-indigo-700 dark:text-indigo-300">The Complete Flow</h4>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <Badge className="bg-orange-500">1</Badge>
                  <span className="text-sm font-medium">State update triggers render</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <Badge className="bg-purple-500">2</Badge>
                  <span className="text-sm font-medium">React calls your component</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <Badge className="bg-green-500">3</Badge>
                  <span className="text-sm font-medium">React commits DOM changes</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                  <Badge className="bg-indigo-500">4</Badge>
                  <span className="text-sm font-medium">Browser paints updated pixels</span>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Code2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Fun Fact</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                To avoid confusion with browser rendering, React documentation sometimes calls this visual update "painting"!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Three Steps</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Any screen update happens in three steps: Trigger → Render → Commit
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Rendering = Calling</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  "Rendering" is React calling your component functions to get JSX
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Minimal Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React only updates DOM nodes that changed since last render
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Pure Functions</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Components must be pure - same inputs always give same outputs
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Why This Matters</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Understanding this process helps you optimize performance and debug issues. You'll know exactly when your code runs and why!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
