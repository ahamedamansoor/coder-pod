'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, AlertTriangle, CheckCircle2, Zap, TrendingUp, Target } from 'lucide-react';

export default function JavaScriptPerformanceOptimization() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="Performance & Optimization"
        title="Performance Optimization"
        description="Profiling, monitoring, and optimizing JavaScript performance"
        colorTheme="yellow"
      />

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is Performance Optimization?</CardTitle>
          <CardDescription>Making your application faster and more efficient</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Performance optimization is the process of improving how fast your application runs, reducing resource usage, 
            and providing a better user experience. It involves identifying bottlenecks, applying best practices, and 
            measuring results to ensure your code runs efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/10 border border-yellow-200 dark:border-yellow-700">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Faster Load Times</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduce initial load time and Time to Interactive
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Better Responsiveness</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smooth animations and instant user interactions
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Lower Resource Usage</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduced CPU, memory, and network consumption
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Performance Metrics</CardTitle>
          <CardDescription>Measuring what matters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-yellow-100 dark:bg-yellow-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">What It Measures</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Good Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-yellow-600 dark:text-yellow-400">FCP</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    First Contentful Paint - When first content appears
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">&lt; 1.8s</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-yellow-600 dark:text-yellow-400">LCP</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Largest Contentful Paint - Main content loaded
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">&lt; 2.5s</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-yellow-600 dark:text-yellow-400">FID</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    First Input Delay - Time until user can interact
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">&lt; 100ms</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-yellow-600 dark:text-yellow-400">CLS</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Cumulative Layout Shift - Visual stability
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">&lt; 0.1</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-yellow-600 dark:text-yellow-400">TTI</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Time to Interactive - Fully interactive
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-700 dark:text-green-300">&lt; 3.8s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Common Performance Bottlenecks</CardTitle>
          <CardDescription>What slows down your application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Large Bundle Size
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Too many dependencies</li>
                <li>• Unused code not tree-shaken</li>
                <li>• Large images and assets</li>
                <li>• No code splitting</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Inefficient Rendering
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Unnecessary re-renders</li>
                <li>• Heavy DOM manipulations</li>
                <li>• Layout thrashing</li>
                <li>• Forced reflows</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Memory Issues
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Memory leaks</li>
                <li>• Large object retention</li>
                <li>• Uncleared timers</li>
                <li>• Event listener buildup</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Slow Operations
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Blocking main thread</li>
                <li>• Synchronous XHR</li>
                <li>• Heavy calculations</li>
                <li>• Long-running loops</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">JavaScript Optimization Techniques</CardTitle>
          <CardDescription>Code-level performance improvements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">1. Avoid Blocking the Main Thread</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Break up long tasks into smaller chunks to keep the UI responsive.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Blocks main thread
function processLargeArray(items) {
  items.forEach(item => {
    // Heavy processing
    processItem(item);
  });
}

// GOOD: Use requestIdleCallback
function processLargeArray(items) {
  let index = 0;
  
  function processChunk() {
    const startTime = performance.now();
    
    while (index < items.length && performance.now() - startTime < 50) {
      processItem(items[index]);
      index++;
    }
    
    if (index < items.length) {
      requestIdleCallback(processChunk);
    }
  }
  
  requestIdleCallback(processChunk);
}`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">2. Debounce and Throttle Events</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Limit how often expensive functions are called.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Debounce: Wait until user stops typing
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const searchAPI = debounce((query) => {
  fetch('/api/search?q=' + query);
}, 300);

input.addEventListener('input', (e) => searchAPI(e.target.value));

// Throttle: Limit execution frequency
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', handleScroll);`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">3. Memoization and Caching</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Cache expensive computation results.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Memoization for expensive calculations
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalculation = memoize((n) => {
  console.log('Computing...');
  return n * n * n;
});

console.log(expensiveCalculation(5)); // Computing... 125
console.log(expensiveCalculation(5)); // 125 (cached)`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">4. Efficient DOM Manipulation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Minimize reflows and repaints.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Multiple reflows
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  document.body.appendChild(div); // Reflow on each append
}

// GOOD: Batch DOM updates
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  fragment.appendChild(div);
}
document.body.appendChild(fragment); // Single reflow

// BAD: Reading and writing in loop (layout thrashing)
for (let i = 0; i < elements.length; i++) {
  const width = elements[i].offsetWidth; // Read
  elements[i].style.width = width + 10 + 'px'; // Write
}

// GOOD: Batch reads, then batch writes
const widths = elements.map(el => el.offsetWidth); // Batch reads
elements.forEach((el, i) => {
  el.style.width = widths[i] + 10 + 'px'; // Batch writes
});`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">5. Use Efficient Loops</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Choose the right loop for the job.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Fastest to slowest for large arrays:

// 1. for loop (fastest)
for (let i = 0; i < arr.length; i++) {
  process(arr[i]);
}

// 2. for...of (good performance, readable)
for (const item of arr) {
  process(item);
}

// 3. forEach (slower, but convenient)
arr.forEach(item => process(item));

// Cache array length
const len = arr.length;
for (let i = 0; i < len; i++) {
  process(arr[i]);
}`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Loading Performance</CardTitle>
          <CardDescription>Optimizing initial page load</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Code Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Load only what's needed, when it's needed.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Dynamic imports
const button = document.getElementById('loadFeature');

button.addEventListener('click', async () => {
  const module = await import('./heavy-feature.js');
  module.initialize();
});

// React lazy loading
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Resource Hints</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`<!-- Preload critical resources -->
<link rel="preload" href="critical.js" as="script">
<link rel="preload" href="hero-image.jpg" as="image">

<!-- Prefetch resources for next page -->
<link rel="prefetch" href="next-page.js">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://api.example.com">

<!-- DNS prefetch -->
<link rel="dns-prefetch" href="https://cdn.example.com">`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Compression and Minification</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Minify JavaScript</strong>: Remove whitespace and comments</li>
                <li>• <strong>Gzip/Brotli</strong>: Compress text files (70-80% reduction)</li>
                <li>• <strong>Tree Shaking</strong>: Remove unused code</li>
                <li>• <strong>Image Optimization</strong>: Use WebP, compress, lazy load</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Measuring Performance</CardTitle>
          <CardDescription>Tools and techniques</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Performance API
const start = performance.now();
expensiveOperation();
const end = performance.now();
console.log('Took:', end - start, 'ms');

// Performance marks and measures
performance.mark('start-task');
doTask();
performance.mark('end-task');
performance.measure('task-duration', 'start-task', 'end-task');

const measures = performance.getEntriesByType('measure');
console.log(measures);

// Core Web Vitals
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('LCP:', entry.renderTime || entry.loadTime);
  }
});
observer.observe({ type: 'largest-contentful-paint', buffered: true });

// Long Tasks API
const longTaskObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Long task detected:', entry.duration);
  }
});
longTaskObserver.observe({ type: 'longtask', buffered: true });`}</code></pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Chrome DevTools</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Performance tab for profiling</li>
                <li>• Lighthouse for audits</li>
                <li>• Network tab for requests</li>
                <li>• Coverage for unused code</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-700">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">External Tools</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• WebPageTest</li>
                <li>• PageSpeed Insights</li>
                <li>• Webpack Bundle Analyzer</li>
                <li>• Chrome User Experience Report</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Minimize JavaScript execution</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Split code, lazy load, remove unused code, use Web Workers
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Optimize rendering</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Avoid layout thrashing, use CSS transforms, virtualize long lists
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Reduce network requests</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Bundle files, use CDN, enable caching, compress assets
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Manage memory efficiently</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clean up listeners, clear timers, avoid leaks, use weak references
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Monitor and measure</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use Performance API, track Core Web Vitals, regular audits
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✓ Prioritize critical content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load above-the-fold content first, defer non-critical resources
              </p>
            </div>
          </div>

          <Alert className="mt-6 bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <Target className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Performance Budget</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Set performance budgets for your project: maximum bundle size (e.g., 200KB), LCP &lt; 2.5s, 
              FID &lt; 100ms. Monitor these metrics and fail builds that exceed budgets.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Measure First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Profile and identify bottlenecks before optimizing
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Optimize Loading</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Code splitting, lazy loading, compression
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Optimize Runtime</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Debounce, memoize, efficient DOM updates
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Monitor Continuously</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Track Core Web Vitals and set budgets
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
