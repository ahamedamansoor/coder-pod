'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Activity, BarChart3, Chrome, Image as ImageIcon, Layers, Target, Info, AlertTriangle } from 'lucide-react';

export default function ProfilingPerformance() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Activity}
        category="React · Performance Optimization"
        title="Profiling Performance"
        description="Learn how to use the React DevTools Profiler to identify performance bottlenecks and optimize your application effectively."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Activity className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Profiling?"
              description="Measure what matters"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Profiling</strong> helps you identify performance bottlenecks by measuring how long components take to render and how often they re-render. Don't guess—measure!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">React DevTools Profiler</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Records component render times</li>
                <li>• Shows why components re-rendered</li>
                <li>• Identifies slow components</li>
                <li>• Visualizes render flamegraph</li>
                <li>• Tracks commit timeline</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<BarChart3 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Performance Monitoring - Live Demo"
            description="Track render performance in real-time"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Performance Monitor"
            description="See render times and counts for different components"
            colorTheme="green"
            react={`// Performance tracker hook
function useRenderTime(componentName) {
  const [renderCount, setRenderCount] = React.useState(0);
  const [lastRenderTime, setLastRenderTime] = React.useState(0);
  const startTimeRef = React.useRef(Date.now());

  React.useEffect(() => {
    const renderTime = Date.now() - startTimeRef.current;
    setLastRenderTime(renderTime);
    setRenderCount(prev => prev + 1);
    startTimeRef.current = Date.now();
  });

  return { renderCount, lastRenderTime };
}

// Fast component
function FastComponent({ count }) {
  const { renderCount, lastRenderTime } = useRenderTime('FastComponent');

  return (
    <div className="component fast">
      <h3>⚡ Fast Component</h3>
      <p className="value">Count: {count}</p>
      <div className="stats">
        <div className="stat">
          <span>Renders:</span>
          <strong>{renderCount}</strong>
        </div>
        <div className="stat">
          <span>Last render:</span>
          <strong className="fast">{lastRenderTime}ms</strong>
        </div>
      </div>
    </div>
  );
}

// Slow component (expensive calculation)
function SlowComponent({ count }) {
  const { renderCount, lastRenderTime } = useRenderTime('SlowComponent');

  // Simulate expensive calculation
  const expensiveValue = React.useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random();
    }
    return result;
  }, [count]);

  return (
    <div className="component slow">
      <h3>🐢 Slow Component</h3>
      <p className="value">Count: {count}</p>
      <div className="stats">
        <div className="stat">
          <span>Renders:</span>
          <strong>{renderCount}</strong>
        </div>
        <div className="stat">
          <span>Last render:</span>
          <strong className="slow">{lastRenderTime}ms</strong>
        </div>
      </div>
      <p className="note">Expensive calculation: {expensiveValue.toFixed(0)}</p>
    </div>
  );
}

// Optimized component with memo
const OptimizedComponent = React.memo(function Component({ count }) {
  const { renderCount, lastRenderTime } = useRenderTime('OptimizedComponent');

  return (
    <div className="component optimized">
      <h3>✨ Optimized Component</h3>
      <p className="value">Count: {count}</p>
      <div className="stats">
        <div className="stat">
          <span>Renders:</span>
          <strong>{renderCount}</strong>
        </div>
        <div className="stat">
          <span>Last render:</span>
          <strong className="optimized">{lastRenderTime}ms</strong>
        </div>
      </div>
      <p className="note">✅ Uses React.memo</p>
    </div>
  );
});

function App() {
  const [count, setCount] = React.useState(0);
  const [unrelated, setUnrelated] = React.useState(0);

  return (
    <div className="demo-app">
      <div className="header">
        <h2>📊 Performance Profiler</h2>
        <p>Monitor render times and counts</p>
      </div>

      <div className="controls">
        <button onClick={() => setCount(count + 1)} className="primary">
          Update Count ({count})
        </button>
        <button onClick={() => setUnrelated(unrelated + 1)} className="secondary">
          Update Unrelated ({unrelated})
        </button>
      </div>

      <div className="components-grid">
        <FastComponent count={count} />
        <SlowComponent count={count} />
        <OptimizedComponent count={count} />
      </div>

      <div className="info">
        <h4>💡 Performance Tips:</h4>
        <ul>
          <li>⚡ Fast component renders quickly</li>
          <li>🐢 Slow component has expensive calculation (but uses useMemo)</li>
          <li>✨ Optimized component skips re-renders with React.memo</li>
          <li>📊 Click "Update Unrelated" - only optimized skips render!</li>
        </ul>
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

.controls {
  padding: 30px;
  display: flex;
  gap: 15px;
  background: #f9fafb;
}

.controls button {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.controls button.primary {
  background: #10b981;
  color: white;
}

.controls button.secondary {
  background: #6366f1;
  color: white;
}

.controls button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
}

.component {
  padding: 25px;
  border-radius: 16px;
  border: 2px solid;
}

.component.fast {
  background: #d1fae5;
  border-color: #10b981;
}

.component.slow {
  background: #fef3c7;
  border-color: #f59e0b;
}

.component.optimized {
  background: #dbeafe;
  border-color: #3b82f6;
}

.component h3 {
  color: #1f2937;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 20px;
}

.stats {
  display: grid;
  gap: 10px;
}

.stat {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-radius: 8px;
  font-size: 14px;
}

.stat span {
  color: #6b7280;
}

.stat strong {
  color: #1f2937;
  font-weight: 700;
}

.stat strong.fast {
  color: #10b981;
}

.stat strong.slow {
  color: #f59e0b;
}

.stat strong.optimized {
  color: #3b82f6;
}

.note {
  margin-top: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  font-size: 13px;
  color: #1f2937;
  font-weight: 600;
}

.info {
  padding: 30px;
  background: #f9fafb;
  border-top: 2px solid #e5e7eb;
}

.info h4 {
  color: #1f2937;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.info ul {
  list-style: none;
  padding: 0;
}

.info li {
  padding: 8px 0;
  color: #4b5563;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  .demo-app {
    background: #1f2937;
  }

  .controls,
  .info {
    background: #111827;
  }

  .component h3,
  .value,
  .stat strong,
  .note,
  .info h4 {
    color: #f3f4f6;
  }

  .stat {
    background: rgba(0, 0, 0, 0.3);
  }

  .stat span {
    color: #9ca3af;
  }

  .info li {
    color: #d1d5db;
  }
}

@media (max-width: 968px) {
  .components-grid {
    grid-template-columns: 1fr;
  }

  .controls {
    flex-direction: column;
  }
}`}
          />
        </div>

        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="How to Profile in React DevTools"
            description="Step-by-step guide"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Profiling Steps"
            description="Using React DevTools Profiler"
            language="javascript"
            colorTheme="blue"
            code={`// 1. Install React DevTools
// Chrome: https://chrome.google.com/webstore
// Firefox: https://addons.mozilla.org/firefox

// 2. Open DevTools and click "Profiler" tab

// 3. Click record button (🔴)

// 4. Perform actions in your app

// 5. Click stop button (⏹️)

// 6. Analyze the results:
// - Flamegraph shows component hierarchy
// - Color intensity = render time
// - Yellow/red = slow components
// - Click components to see details

// 7. Look for:
// - Unnecessary re-renders
// - Expensive components
// - Components that render too often`}
            output={[
              '✅ Profiler helps identify bottlenecks',
              '✅ Focus on yellow/red components',
              '✅ Check "why did this render?"',
              '✅ Optimize high-impact components first',
              '',
              'Key Metrics:',
              '• Render duration',
              '• Render count',
              '• Re-render causes',
              '• Component hierarchy'
            ]}
          />
        </div>

        {/* Chrome DevTools Profiling */}
        <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
          <CardContent className="pt-6 space-y-6">
            <TopicTitle
              icon={<Chrome className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
              title="Chrome DevTools Performance Tab"
              description="Complete profiling guide with screenshots"
              size="lg"
            />

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Chrome DevTools Performance Panel</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                In addition to React DevTools Profiler, Chrome's Performance tab provides deeper insights into JavaScript execution, rendering, and browser activities. Use both tools together for complete performance analysis!
              </AlertDescription>
            </Alert>

            {/* Step 1: Opening DevTools */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 text-lg">Open Chrome DevTools</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Press <Badge className="bg-blue-500">F12</Badge> or <Badge className="bg-blue-500">Cmd/Ctrl + Shift + I</Badge>
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-6 border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-blue-700 dark:text-blue-300">Screenshot Description:</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4 font-mono text-xs space-y-2">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Chrome DevTools ──────────────────────────────┐</div>
                  <div className="text-gray-600 dark:text-gray-400">│ [Elements] [Console] [Sources] [Network]       │</div>
                  <div className="text-blue-600 dark:text-blue-400 font-bold">│ [Performance] ← Click this tab                  │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ [Memory] [Application] [Lighthouse]            │</div>
                  <div className="text-gray-600 dark:text-gray-400">└────────────────────────────────────────────────┘</div>
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-3">
                  💡 The Performance tab shows detailed timing of all browser activities including JavaScript execution, rendering, and painting.
                </p>
              </div>
            </div>

            {/* Step 2: Recording */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 text-lg">Start Recording Performance</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Click the record button <Badge className="bg-red-500">⏺️ Record</Badge> or press <Badge className="bg-green-500">Cmd/Ctrl + E</Badge>
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-6 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-green-700 dark:text-green-300">What You'll See:</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4 font-mono text-xs space-y-2">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Performance Panel ────────────────────────────┐</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ [⏺️ Recording...] [⏹️ Stop]                    │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ CPU Usage: ▂▃▅▇█▇▅▃▂                          │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ FPS: ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁                          │</div>
                  <div className="text-gray-600 dark:text-gray-400">└────────────────────────────────────────────────┘</div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-green-700 dark:text-green-300">
                    <strong>Recording Tips:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-2">
                    <li>Record for 5-10 seconds of typical usage</li>
                    <li>Perform the slow action you want to analyze</li>
                    <li>Click Stop (⏹️) or press Cmd/Ctrl + E again</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: Analyzing Results */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 text-lg">Analyze the Flamegraph</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Understand the visual timeline and identify bottlenecks
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-6 border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="font-semibold text-purple-700 dark:text-purple-300">Flamegraph Visualization:</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4 font-mono text-xs space-y-2">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Timeline (Flamegraph) ────────────────────────┐</div>
                  <div className="text-gray-600 dark:text-gray-400">│                                                │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ FPS: ▁▂▃▄▅▆▇█ [60 fps] ▇▆▅▄▃▂▁                │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ ──────────────────────────────────────────────│</div>
                  <div className="text-blue-600 dark:text-blue-400">│ Network: ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │</div>
                  <div className="text-yellow-600 dark:text-yellow-400">│ Scripting: ░░░░████████████░░░░░░░░░░░░░░░░  │</div>
                  <div className="text-purple-600 dark:text-purple-400">│ Rendering: ░░░░░░░░░░░░░░░░██████░░░░░░░░░░  │</div>
                  <div className="text-green-600 dark:text-green-400">│ Painting: ░░░░░░░░░░░░░░░░░░░░░░████░░░░░░  │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ ──────────────────────────────────────────────│</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ Main Thread: [Long Task] ████████ ← SLOW!     │</div>
                  <div className="text-gray-600 dark:text-gray-400">│   ↳ Function Call                              │</div>
                  <div className="text-gray-600 dark:text-gray-400">│      ↳ Anonymous Function (500ms) ← PROBLEM   │</div>
                  <div className="text-gray-600 dark:text-gray-400">│         ↳ Heavy Calculation                    │</div>
                  <div className="text-gray-600 dark:text-gray-400">└────────────────────────────────────────────────┘</div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm mb-1">🔵 Blue - Loading</p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">Network requests, resource loading</p>
                    </div>
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                      <p className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm mb-1">🟡 Yellow - Scripting</p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">JavaScript execution (your code!)</p>
                    </div>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <p className="font-semibold text-purple-700 dark:text-purple-300 text-sm mb-1">🟣 Purple - Rendering</p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">Layout calculations, style recalculation</p>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <p className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">🟢 Green - Painting</p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">Drawing pixels to screen</p>
                    </div>
                  </div>
                  <Alert className="bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700">
                    <Target className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertTitle className="text-red-900 dark:text-red-100 text-sm">Long Tasks (Red)</AlertTitle>
                    <AlertDescription className="text-red-800 dark:text-red-200 text-xs">
                      Tasks over 50ms block the main thread and cause jank! These are your optimization targets.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>

            {/* Step 4: Understanding Bottom-Up/Call Tree */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2 text-lg">Check Bottom-Up & Call Tree Tabs</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Find the most expensive functions
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg p-6 border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="font-semibold text-orange-700 dark:text-orange-300">Bottom-Up View:</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4 font-mono text-xs space-y-2">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Bottom-Up (Total Time) ───────────────────────┐</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ heavyCalculation()          850ms   45%  ← FIX │</div>
                  <div className="text-orange-600 dark:text-orange-400">│ renderList()                420ms   22%        │</div>
                  <div className="text-yellow-600 dark:text-yellow-400">│ updateState()               280ms   15%        │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ (anonymous)                 150ms    8%        │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ Component.render()          120ms    6%        │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ Other                        80ms    4%        │</div>
                  <div className="text-gray-600 dark:text-gray-400">└────────────────────────────────────────────────┘</div>
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-3">
                  <strong>Bottom-Up shows:</strong> Functions sorted by time spent (self time). Start optimizing from the top!
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg p-6 border-2 border-indigo-300 dark:border-indigo-700 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300">Call Tree View:</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4 font-mono text-xs space-y-2">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Call Tree (Hierarchical) ─────────────────────┐</div>
                  <div className="text-gray-600 dark:text-gray-400">│ App.render()                   1200ms         │</div>
                  <div className="text-gray-600 dark:text-gray-400">│   ├─ Dashboard.render()         950ms         │</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│   │   └─ heavyCalculation()     850ms  ← HERE │</div>
                  <div className="text-gray-600 dark:text-gray-400">│   └─ Sidebar.render()           250ms         │</div>
                  <div className="text-gray-600 dark:text-gray-400">│       └─ renderList()           220ms         │</div>
                  <div className="text-gray-600 dark:text-gray-400">└────────────────────────────────────────────────┘</div>
                </div>
                <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-3">
                  <strong>Call Tree shows:</strong> Function call hierarchy. Expand nodes to see what called what!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* React DevTools Profiler Detailed Guide */}
        <Card className="bg-gradient-to-br from-pink-50/60 to-purple-50/60 dark:from-pink-950/10 dark:to-purple-950/10 border border-pink-200/50 dark:border-pink-800/30">
          <CardContent className="pt-6 space-y-6">
            <TopicTitle
              icon={<Activity className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
              title="React DevTools Profiler Deep Dive"
              description="Component-level performance analysis"
              size="lg"
            />

            <Alert className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 border-pink-300 dark:border-pink-700">
              <Activity className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              <AlertTitle className="text-pink-900 dark:text-pink-100">React DevTools Profiler</AlertTitle>
              <AlertDescription className="text-pink-800 dark:text-pink-200">
                Specifically designed for React apps! Shows component render times, why components re-rendered, and which props/state changed. Install from the Chrome Web Store or Firefox Add-ons.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Flamegraph View */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <Badge className="bg-pink-500 mb-4">Flamegraph View</Badge>
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded p-4 font-mono text-xs space-y-1 mb-3">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Component Tree ──────────┐</div>
                  <div className="text-green-600 dark:text-green-400">│ App (0.2ms)              │</div>
                  <div className="text-green-600 dark:text-green-400">│ ├─ Header (0.1ms)        │</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ ├─ Dashboard (45.3ms) ⚠️ │</div>
                  <div className="text-yellow-600 dark:text-yellow-400">│ │  ├─ Chart (12.5ms)     │</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ │  └─ Table (32.8ms) 🔥  │</div>
                  <div className="text-green-600 dark:text-green-400">│ └─ Footer (0.1ms)        │</div>
                  <div className="text-gray-600 dark:text-gray-400">└───────────────────────────┘</div>
                </div>
                <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li>🟢 Green: Fast (&lt;5ms)</li>
                  <li>🟡 Yellow: Medium (5-15ms)</li>
                  <li>🔴 Red: Slow (&gt;15ms)</li>
                </ul>
              </div>

              {/* Ranked View */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-4">Ranked View</Badge>
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded p-4 font-mono text-xs space-y-1 mb-3">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Slowest First ───────────┐</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ 1. Table      (32.8ms)   │</div>
                  <div className="text-red-600 dark:text-red-400 font-bold">│ 2. Dashboard  (45.3ms)   │</div>
                  <div className="text-yellow-600 dark:text-yellow-400">│ 3. Chart      (12.5ms)   │</div>
                  <div className="text-green-600 dark:text-green-400">│ 4. App        (0.2ms)    │</div>
                  <div className="text-green-600 dark:text-green-400">│ 5. Header     (0.1ms)    │</div>
                  <div className="text-green-600 dark:text-green-400">│ 6. Footer     (0.1ms)    │</div>
                  <div className="text-gray-600 dark:text-gray-400">└───────────────────────────┘</div>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  ✨ Shows components sorted by render time - start optimizing from #1!
                </p>
              </div>
            </div>

            {/* Why Did This Render */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-500 mb-4">Why Did This Render?</Badge>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg p-4 border-2 border-orange-300 dark:border-orange-700">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-3">
                  Click any component to see WHY it re-rendered:
                </p>
                <div className="bg-white dark:bg-gray-800 rounded p-4 font-mono text-xs space-y-2">
                  <div className="text-gray-600 dark:text-gray-400">┌─ Table Component ──────────────────────────────┐</div>
                  <div className="text-gray-600 dark:text-gray-400">│ Render duration: 32.8ms                        │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ Rendered at: 1.2s                              │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ ──────────────────────────────────────────────│</div>
                  <div className="text-orange-600 dark:text-orange-400 font-bold">│ Why did this render?                           │</div>
                  <div className="text-red-600 dark:text-red-400">│   ✗ Props changed: "data" ← PROBLEM           │</div>
                  <div className="text-gray-600 dark:text-gray-400">│   ✓ State changed: false                       │</div>
                  <div className="text-gray-600 dark:text-gray-400">│   ✓ Parent rendered: true                      │</div>
                  <div className="text-gray-600 dark:text-gray-400">│ ──────────────────────────────────────────────│</div>
                  <div className="text-blue-600 dark:text-blue-400">│ Props that changed:                            │</div>
                  <div className="text-blue-600 dark:text-blue-400">│   data: [object] → [object] (new reference)   │</div>
                  <div className="text-gray-600 dark:text-gray-400">└────────────────────────────────────────────────┘</div>
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-3">
                  💡 <strong>Fix:</strong> Use React.memo or useMemo to prevent unnecessary re-renders from reference changes!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Tips */}
        <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
          <CardContent className="pt-6 space-y-6">
            <TopicTitle
              icon={<Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
              title="Practical Profiling Tips"
              description="Get the most out of profiling"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  DO These
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Profile in production build mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Record typical user interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Focus on the slowest components first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Check "Why did this render?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Profile before AND after optimizations</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON'T Do These
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Don't profile in development mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Don't optimize without measuring first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Don't ignore the "Why did this render?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Don't optimize everything at once</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Don't skip re-profiling after changes</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-300 dark:border-emerald-700">
              <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <AlertTitle className="text-emerald-900 dark:text-emerald-100">Pro Tip: CPU Throttling</AlertTitle>
              <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                In Chrome DevTools Performance tab, enable <strong>CPU throttling</strong> (4x or 6x slowdown) to simulate slower devices. This makes performance issues more visible and helps you optimize for all users, not just those with fast computers!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Measure First</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't optimize blindly—profile to find real issues
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Use DevTools</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React DevTools Profiler is your best friend
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Focus Impact</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Optimize components that matter most
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Re-measure</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Verify optimizations actually improved performance
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Profile in Production Mode!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Always profile your app in production build mode for accurate results. Development mode includes extra checks that slow things down!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
