'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Gauge,
  CheckCircle,
  Code2,
  Lightbulb,
  Timer,
  Zap,
  Clock,
  TrendingUp,
} from 'lucide-react';

export default function JavaScriptPerformanceAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Gauge}
        category="JavaScript Browser APIs"
        title="Performance API"
        description="Measure and optimize your application's performance"
        colorTheme="green"
      />

      {/* What is Performance API */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <Gauge className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What is the Performance API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Performance API gives you <strong className="text-green-700 dark:text-green-400">high-precision timing</strong> to measure how fast your code runs. 
                Track <strong className="text-emerald-700 dark:text-emerald-400">page load times</strong>, <strong className="text-teal-700 dark:text-teal-400">function execution</strong>, and API response times with microsecond accuracy!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-950/20 border-2 border-green-300 dark:border-green-700">
              <div className="text-3xl mb-2">⏱️</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">High Precision</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Microsecond accuracy timing</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-950/20 border-2 border-emerald-300 dark:border-emerald-700">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Metrics Tracking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Navigation, resource timing</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/30 dark:to-teal-950/20 border-2 border-teal-300 dark:border-teal-700">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">Custom Marks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Mark & measure your code</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Why Better than Date.now()?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <code className="text-xs bg-white dark:bg-amber-900 px-1.5 py-0.5 rounded">performance.now()</code> is <strong>more accurate</strong> (microseconds vs milliseconds) and <strong>monotonic</strong> (never goes backwards, even if system clock changes)!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Performance Timing Demo"
        description="Measure function execution time with high precision"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 50%, #14b8a6 100%); padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; text-align: center;">⏱️ Performance Timer Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px; text-align: center;">Measure how fast operations execute</p>
    
    <div style="background: rgba(255, 255, 255, 0.95); padding: 24px; border-radius: 12px; backdrop-filter: blur(10px);">
      <div style="display: grid; gap: 12px; margin-bottom: 20px;">
        <button id="quickBtn" style="padding: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          ⚡ Quick Task (1ms)
        </button>
        <button id="mediumBtn" style="padding: 14px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          🔶 Medium Task (100ms)
        </button>
        <button id="slowBtn" style="padding: 14px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          🐢 Slow Task (500ms)
        </button>
      </div>
      
      <div id="output" style="padding: 16px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 8px; border-left: 4px solid #10b981; min-height: 100px;"></div>
      
      <div id="history" style="margin-top: 16px; font-size: 12px; color: #6b7280;"></div>
    </div>
  </div>
</div>`}
        css={`button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result {
  animation: slideIn 0.3s ease-out;
}`}
        js={`const output = document.getElementById('output');
const history = document.getElementById('history');
const measurements = [];

async function measureTask(taskName, duration) {
  // Create performance mark at start
  performance.mark(\`\${taskName}-start\`);
  
  // Also use performance.now() for comparison
  const start = performance.now();
  
  // Simulate task (in real app, this would be actual work)
  await new Promise(resolve => setTimeout(resolve, duration));
  
  // Mark the end
  performance.mark(\`\${taskName}-end\`);
  
  // Measure the duration between marks
  performance.measure(taskName, \`\${taskName}-start\`, \`\${taskName}-end\`);
  
  // Get the measurement
  const measures = performance.getEntriesByName(taskName, 'measure');
  const measure = measures[measures.length - 1];
  
  // Also calculate with performance.now()
  const end = performance.now();
  const duration1 = end - start;
  
  // Display results
  output.className = 'result';
  output.innerHTML = \`
    <div>
      <div style="font-size: 20px; font-weight: 700; color: #047857; margin-bottom: 12px;">
        📊 Task: \${taskName}
      </div>
      
      <div style="background: white; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
        <div style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">Performance.measure():</div>
        <div style="font-size: 28px; font-weight: 700; color: #10b981;">
          \${measure.duration.toFixed(3)} ms
        </div>
      </div>
      
      <div style="background: white; padding: 16px; border-radius: 8px;">
        <div style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">Performance.now():</div>
        <div style="font-size: 28px; font-weight: 700; color: #059669;">
          \${duration1.toFixed(3)} ms
        </div>
      </div>
      
      <div style="margin-top: 12px; padding: 12px; background: #fef3c7; border-radius: 6px; font-size: 13px; color: #78350f;">
        ✨ <strong>High precision timing!</strong> Notice the microsecond accuracy (3 decimal places)
      </div>
    </div>
  \`;
  
  // Add to history
  measurements.push({ task: taskName, duration: measure.duration.toFixed(3) });
  updateHistory();
  
  // Clean up marks and measures
  performance.clearMarks(\`\${taskName}-start\`);
  performance.clearMarks(\`\${taskName}-end\`);
  performance.clearMeasures(taskName);
}

function updateHistory() {
  if (measurements.length === 0) return;
  
  const last5 = measurements.slice(-5).reverse();
  history.innerHTML = \`
    <strong>📝 Recent Measurements:</strong><br/>
    \${last5.map((m, i) => \`\${i + 1}. \${m.task}: \${m.duration}ms\`).join('<br/>')}
  \`;
}

// Button handlers
document.getElementById('quickBtn').addEventListener('click', () => {
  measureTask('Quick Task', 1);
});

document.getElementById('mediumBtn').addEventListener('click', () => {
  measureTask('Medium Task', 100);
});

document.getElementById('slowBtn').addEventListener('click', () => {
  measureTask('Slow Task', 500);
});

// Initial message
output.innerHTML = \`
  <div style="text-align: center; color: #047857;">
    <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">👆 Click a button to measure performance</div>
    <div style="font-size: 13px; color: #6b7280;">The Performance API will show microsecond-precision timing</div>
  </div>
\`;

console.log('✅ Performance API demo ready!');
console.log('Try: performance.now() for current timestamp');`}
        colorTheme="green"
      />

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Timer className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>performance.now() - High-Precision Timer</CardTitle>
              <CardDescription>More accurate than Date.now()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Measure Function Execution Time
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Start timer
const start = performance.now();

// Your code to measure
processLargeArray();
calculateComplexMath();
renderComponent();

// End timer
const end = performance.now();
const duration = end - start;

console.log(\`Execution time: \${duration.toFixed(3)}ms\`);

// Example output: "Execution time: 24.567ms"
// 👆 Notice the microsecond precision!

// Compare with Date.now() (less precise)
const dateStart = Date.now();
doSomething();
const dateEnd = Date.now();
console.log(\`Date.now(): \${dateEnd - dateStart}ms\`); // Only milliseconds`}</code>
            </pre>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why performance.now()?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Monotonic:</strong> Never goes backwards (system clock changes don't affect it)<br/>
              <strong>Precise:</strong> Microsecond resolution vs millisecond for Date.now()<br/>
              <strong>Relative:</strong> Measures from page load, not Unix epoch
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Marks & Measures */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Performance Marks & Measures</CardTitle>
              <CardDescription>Create custom timing points</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100/50 dark:from-emerald-950/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800/30">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">Mark & Measure Pattern</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// 1. Mark the start point
performance.mark('fetchData-start');

// 2. Do your work
const data = await fetch('/api/data');
const json = await data.json();

// 3. Mark the end point
performance.mark('fetchData-end');

// 4. Measure the duration between marks
performance.measure('fetchData', 'fetchData-start', 'fetchData-end');

// 5. Get the measurement
const measure = performance.getEntriesByName('fetchData')[0];
console.log(\`Fetch took: \${measure.duration}ms\`);

// 6. Clean up (optional)
performance.clearMarks('fetchData-start');
performance.clearMarks('fetchData-end');
performance.clearMeasures('fetchData');

// 🎯 Benefits:
// - Named timing points
// - Easy to track multiple operations
// - Built-in storage of measurements`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-100/50 dark:from-teal-950/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800/30">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Multiple Operations</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Track multiple operations
performance.mark('app-init-start');

// Operation 1
performance.mark('auth-start');
await authenticateUser();
performance.mark('auth-end');
performance.measure('auth', 'auth-start', 'auth-end');

// Operation 2
performance.mark('data-start');
await loadUserData();
performance.mark('data-end');
performance.measure('data-load', 'data-start', 'data-end');

// Operation 3
performance.mark('render-start');
renderDashboard();
performance.mark('render-end');
performance.measure('render', 'render-start', 'render-end');

performance.mark('app-init-end');
performance.measure('total-init', 'app-init-start', 'app-init-end');

// Get all measurements
const measures = performance.getEntriesByType('measure');
measures.forEach(m => {
  console.log(\`\${m.name}: \${m.duration.toFixed(2)}ms\`);
});

// Output:
// auth: 234.56ms
// data-load: 456.78ms
// render: 123.45ms
// total-init: 814.79ms`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Timing */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
              <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <CardTitle>Navigation Timing</CardTitle>
              <CardDescription>Measure page load performance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100/50 dark:from-blue-950/20 dark:to-sky-900/10 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Page Load Metrics</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Get navigation timing
const nav = performance.getEntriesByType('navigation')[0];

if (nav) {
  console.log('📊 Page Load Metrics:');
  
  // DNS lookup time
  const dns = nav.domainLookupEnd - nav.domainLookupStart;
  console.log(\`DNS Lookup: \${dns}ms\`);
  
  // TCP connection time
  const tcp = nav.connectEnd - nav.connectStart;
  console.log(\`TCP Connection: \${tcp}ms\`);
  
  // Request + Response time
  const request = nav.responseEnd - nav.requestStart;
  console.log(\`Request/Response: \${request}ms\`);
  
  // DOM processing time
  const domProcessing = nav.domComplete - nav.domInteractive;
  console.log(\`DOM Processing: \${domProcessing}ms\`);
  
  // DOM Content Loaded
  const dcl = nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart;
  console.log(\`DOMContentLoaded: \${dcl}ms\`);
  
  // Total page load time
  const loadTime = nav.loadEventEnd - nav.fetchStart;
  console.log(\`Total Load Time: \${loadTime}ms\`);
  
  // Time to Interactive (approximately)
  const tti = nav.domInteractive - nav.fetchStart;
  console.log(\`Time to Interactive: \${tti}ms\`);
}`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Resource Timing</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Get all resource timings (images, scripts, stylesheets, etc.)
const resources = performance.getEntriesByType('resource');

// Find slow resources
const slowResources = resources
  .filter(r => r.duration > 100)
  .sort((a, b) => b.duration - a.duration);

console.log('🐢 Slowest Resources:');
slowResources.slice(0, 5).forEach((resource, i) => {
  console.log(\`\${i + 1}. \${resource.name}\`);
  console.log(\`   Duration: \${resource.duration.toFixed(2)}ms\`);
  console.log(\`   Size: \${(resource.transferSize / 1024).toFixed(2)}KB\`);
});

// Specific resource type
const images = resources.filter(r => r.initiatorType === 'img');
const totalImageTime = images.reduce((sum, img) => sum + img.duration, 0);
console.log(\`Total image load time: \${totalImageTime.toFixed(2)}ms\`);`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Perfect Use Cases</CardTitle>
              <CardDescription>When to use the Performance API</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Optimize Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Find slow functions and optimize them
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Page Load Analytics</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Track and report load time metrics
              </p>
            </div>

            <div className="p-5 rounded-xl bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">API Monitoring</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Measure API response times
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Performance Budget</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Ensure operations stay within limits
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⏱️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">performance.now()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    High-precision, monotonic timer
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Marks & Measures</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Named timing points for tracking
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Navigation Timing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Page load performance metrics
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Resource Timing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Track images, scripts, API calls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
