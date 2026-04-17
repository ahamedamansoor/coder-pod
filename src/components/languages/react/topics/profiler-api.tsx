'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  Lightbulb,
  CheckCircle2,
  Activity,
  Clock,
  BarChart3,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

export default function ProfilerApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Activity}
        category="React · Component Details"
        title="Profiler"
        description="Learn how to use React Profiler to programmatically measure rendering performance and identify bottlenecks in your component tree."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is Profiler */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Activity className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Profiler?"
              description="Measure component performance programmatically"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">Profiler</code> is a React component that lets you <strong>measure rendering performance</strong> of your component tree programmatically. It collects timing information about each render!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>&lt;Profiler id="Navigation" onRender={'{onRenderCallback}'}&gt;</div>
                  <div className="pl-4">&lt;Navigation /&gt;</div>
                  <div>&lt;/Profiler&gt;</div>
                  <div className="mt-3"></div>
                  <div className="text-green-600 dark:text-green-400">// Callback receives performance data</div>
                  <div>function onRenderCallback(id, phase, actualDuration) {'{'}</div>
                  <div className="pl-4">console.log(`${'{id}'} took ${'{actualDuration}'}ms`);</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Timing Data</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Measures how long components take to render
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Performance Metrics</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Tracks mount, update, and commit phases
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Identify Bottlenecks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Find slow components that need optimization
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Development Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Profiler is designed for development and production performance monitoring. It adds minimal overhead but should be used strategically!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* onRender Callback Parameters */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<BarChart3 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="onRender Callback Parameters"
              description="Understanding the performance data"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-500 mt-1">id</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Profiler Identifier</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      The string identifier you gave to the Profiler. Useful when tracking multiple profilers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-500 mt-1">phase</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Render Phase</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Either "mount" (first render) or "update" (re-render).
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">mount</Badge>
                      <Badge variant="outline" className="text-xs">update</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-500 mt-1">actualDuration</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Actual Render Time</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Time (in ms) spent rendering the Profiler and its descendants for the current update.
                    </p>
                    <div className="mt-2 p-2 bg-purple-50 dark:bg-purple-950/20 rounded text-xs font-mono">
                      actualDuration: 4.2 // milliseconds
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-500 mt-1">baseDuration</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Estimated Worst-Case Time</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Duration of the most recent render without memoization. Helps estimate savings from optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-teal-300 dark:border-teal-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-teal-500 mt-1">startTime</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">When Render Started</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Timestamp when React began rendering this update.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-pink-500 mt-1">commitTime</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">When React Committed</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Timestamp when React committed this update. Shared across all Profilers in the commit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-500 mt-1">interactions</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Tracked Interactions</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Set of interactions being tracked for this update (advanced feature).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Activity className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Performance Monitoring"
            description="Track component render times"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Profiler with Performance Logging"
            description="Monitor how long components take to render"
            language="javascript"
            colorTheme="green"
            code={`import { Profiler, useState } from 'react';

function onRenderCallback(
  id,        // Profiler id
  phase,     // "mount" or "update"
  actualDuration,  // Time spent rendering
  baseDuration,    // Estimated time without memoization
  startTime,       // When render started
  commitTime,      // When React committed
  interactions     // Set of interactions tracked
) {
  console.log(\`
    📊 Profiler: \${id}
    🔄 Phase: \${phase}
    ⏱️  Actual: \${actualDuration.toFixed(2)}ms
    📈 Base: \${baseDuration.toFixed(2)}ms
    🎯 Savings: \${(baseDuration - actualDuration).toFixed(2)}ms
  \`);
}

function ExpensiveList({ items }) {
  // Simulate expensive rendering
  const processedItems = items.map(item => ({
    ...item,
    processed: item.value * 2
  }));

  return (
    <ul>
      {processedItems.map(item => (
        <li key={item.id}>{item.processed}</li>
      ))}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    value: i
  }));

  return (
    <div>
      <h1>Profiler Demo</h1>
      
      <Profiler id="ExpensiveList" onRender={onRenderCallback}>
        <ExpensiveList items={items} />
      </Profiler>

      <button onClick={() => setCount(count + 1)}>
        Trigger Update ({count})
      </button>

      <p>Check console for performance data! 📊</p>
    </div>
  );
}`}
            output={[
              '📊 Console Output:',
              '',
              '📊 Profiler: ExpensiveList',
              '🔄 Phase: mount',
              '⏱️  Actual: 2.35ms',
              '📈 Base: 3.12ms',
              '🎯 Savings: 0.77ms',
              '',
              '// After clicking button:',
              '📊 Profiler: ExpensiveList',
              '🔄 Phase: update',
              '⏱️  Actual: 1.85ms',
              '📈 Base: 2.98ms',
              '🎯 Savings: 1.13ms'
            ]}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<TrendingUp className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Best Practices & Tips"
              description="How to use Profiler effectively"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Use for Debugging</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for identifying slow components during development. Wrap suspected performance bottlenecks.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">✅ Multiple Profilers</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  You can nest Profilers to measure different parts of your tree. Give each a unique ID.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">✅ Production Analytics</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Send performance data to analytics services to monitor real-world performance of your app.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">⚠️ Don't Overuse</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  While lightweight, don't wrap every component. Focus on areas where you suspect performance issues.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h4 className="font-bold text-amber-700 dark:text-amber-300">💡 Compare actualDuration vs baseDuration</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Large difference indicates good optimization. Small difference means more optimization might be needed.
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
                  <Activity className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Performance Measurement</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Programmatically measures render performance of component trees.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Timing Information</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Provides detailed timing data for mount and update phases.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">onRender Callback</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Receives 7 parameters with comprehensive performance metrics.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Optimization Insights</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Compare actual vs base duration to measure optimization effectiveness.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Performance Debugging Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use Profiler to identify and fix performance bottlenecks. It's your window into React's rendering behavior!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
