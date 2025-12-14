'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Database,
  XCircle,
} from 'lucide-react';

export default function JavaScriptMemoryLeaksNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={AlertTriangle}
        category="JavaScript Design Patterns"
        title="Memory Leaks"
        description="Identify and prevent memory leaks"
        colorTheme="yellow"
      />

      {/* What are Memory Leaks? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-orange-50/30 to-amber-50/20 dark:from-red-950/10 dark:via-orange-950/5 dark:to-amber-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Memory Leaks: The Silent Performance Killer 💀
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A <strong className="text-red-700 dark:text-red-400">memory leak</strong> occurs when your application keeps holding onto memory that's no longer needed. Unlike languages with manual memory management, JavaScript has automatic garbage collection - but that doesn't mean leaks can't happen! When objects remain referenced when they shouldn't be, garbage collection can't free that memory, causing your app to consume more and more RAM over time.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-red-200 dark:border-red-800/30">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-lg">Impact of Memory Leaks</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Memory leaks cause slow performance, browser tabs crashing, and poor user experience. In severe cases, they can make your entire application unusable over time.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How to Detect Memory Leaks */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>How to Detect Memory Leaks</CardTitle>
              <CardDescription>Signs your app has a memory leak</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="text-lg font-bold mb-3 text-blue-900 dark:text-blue-200">Using Chrome DevTools Memory Tab</h4>
            <div className="space-y-3">
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Step 1:</strong> Open DevTools → Memory tab</p>
                <p><strong>Step 2:</strong> Take a heap snapshot</p>
                <p><strong>Step 3:</strong> Use your app normally (interact with it)</p>
                <p><strong>Step 4:</strong> Take another heap snapshot</p>
                <p><strong>Step 5:</strong> Compare the two snapshots</p>
              </div>
              
              <div className="mt-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800/30">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">What to look for:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Growing memory:</strong> Memory keeps increasing over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Never drops:</strong> Memory doesn't decrease even after actions complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Detached DOM nodes:</strong> DOM elements removed from page but still in memory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Growing arrays:</strong> Arrays or objects continuously adding items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="text-lg font-bold mb-3 text-green-900 dark:text-green-200">Visual Pattern: Saw-Tooth vs Continuous Growth</h4>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">✅ Normal Memory (Healthy)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Memory goes <strong>up</strong> (allocations), then <strong>down</strong> (garbage collection). Creates a saw-tooth pattern: ↗↘↗↘↗↘
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900">
                <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">❌ Memory Leak (Unhealthy)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Memory keeps going <strong>up</strong> and never comes back down. Creates continuous growth: ↗↗↗↗↗↗
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Causes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Causes of Memory Leaks</CardTitle>
              <CardDescription>The usual suspects</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Event Listeners */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="text-xl font-bold mb-3 text-red-900 dark:text-red-200">1. Forgotten Event Listeners</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Event listeners hold references to DOM elements and callback functions. If you don't remove them when done, they prevent garbage collection.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
                <div className="bg-red-200 dark:bg-red-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-red-800 dark:text-red-300">❌ Memory Leak</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function setup() {
  const button = document.getElementById('btn');
  button.addEventListener('click', handler);
  // Never removed!
}`}</pre>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
                <div className="bg-green-200 dark:bg-green-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-green-800 dark:text-green-300">✅ Fixed</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function setup() {
  const button = document.getElementById('btn');
  button.addEventListener('click', handler);
  // Cleanup when done
  return () => {
    button.removeEventListener('click', handler);
  };
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Timers */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-200 dark:border-orange-800/30">
            <h4 className="text-xl font-bold mb-3 text-orange-900 dark:text-orange-200">2. Uncleared Timers & Intervals</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              setTimeout and setInterval create references that persist until explicitly cleared. Forgetting to clear them causes leaks.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
                <div className="bg-red-200 dark:bg-red-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-red-800 dark:text-red-300">❌ Memory Leak</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function startPolling() {
  setInterval(() => {
    fetchData();
  }, 1000);
  // Runs forever, never stopped!
}`}</pre>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
                <div className="bg-green-200 dark:bg-green-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-green-800 dark:text-green-300">✅ Fixed</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function startPolling() {
  const intervalId = setInterval(() => {
    fetchData();
  }, 1000);
  
  return () => clearInterval(intervalId);
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Detached DOM */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-200">3. Detached DOM Nodes</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              DOM nodes removed from the page but still referenced in JavaScript can't be garbage collected.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
                <div className="bg-red-200 dark:bg-red-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-red-800 dark:text-red-300">❌ Memory Leak</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const elements = [];

function addElement() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  elements.push(div); // Still referenced!
}

function removeAll() {
  document.body.innerHTML = '';
  // elements array still holds references
}`}</pre>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
                <div className="bg-green-200 dark:bg-green-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-green-800 dark:text-green-300">✅ Fixed</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const elements = [];

function addElement() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  elements.push(div);
}

function removeAll() {
  document.body.innerHTML = '';
  elements.length = 0; // Clear references
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Global Variables */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-200">4. Accumulating Global Variables</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Objects stored in global scope or window object never get garbage collected. Continuously adding to them creates leaks.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
                <div className="bg-red-200 dark:bg-red-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-red-800 dark:text-red-300">❌ Memory Leak</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`window.cache = {};

function loadUser(id) {
  fetch(\`/users/\${id}\`)
    .then(r => r.json())
    .then(user => {
      window.cache[id] = user;
      // Cache grows forever!
    });
}`}</pre>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
                <div className="bg-green-200 dark:bg-green-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-green-800 dark:text-green-300">✅ Fixed (LRU Cache)</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`const cache = new Map();
const MAX_SIZE = 100;

function loadUser(id) {
  fetch(\`/users/\${id}\`)
    .then(r => r.json())
    .then(user => {
      if (cache.size >= MAX_SIZE) {
        const first = cache.keys().next().value;
        cache.delete(first);
      }
      cache.set(id, user);
    });
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Closures */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="text-xl font-bold mb-3 text-green-900 dark:text-green-200">5. Unintended Closures</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Closures capture their surrounding scope. Large objects captured in closures can't be garbage collected even if you only need a small part.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
                <div className="bg-red-200 dark:bg-red-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-red-800 dark:text-red-300">❌ Memory Leak</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function createHandler(data) {
  // data is huge object with 1000 properties
  
  return () => {
    // Only uses data.id
    console.log(data.id);
    // But entire 'data' object is captured!
  };
}`}</pre>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
                <div className="bg-green-200 dark:bg-green-900/40 px-3 py-2">
                  <p className="text-sm font-bold text-green-800 dark:text-green-300">✅ Fixed</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function createHandler(data) {
  // Extract only what you need
  const id = data.id;
  
  return () => {
    // Only captures 'id', not entire object
    console.log(id);
  };
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prevention Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Prevention Best Practices</CardTitle>
              <CardDescription>How to avoid memory leaks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Always Clean Up
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Remove event listeners, clear timers, cancel subscriptions, and null out references when components unmount or are no longer needed.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Use WeakMap/WeakSet
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              For caching with DOM elements or objects, use WeakMap/WeakSet. They allow garbage collection when objects are no longer referenced elsewhere.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Limit Cache Size
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If caching data, implement size limits (LRU cache) or time-to-live (TTL) to prevent unbounded growth.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Profile Regularly
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Use Chrome DevTools Memory tab to take heap snapshots periodically. Compare them to catch leaks early in development.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h5 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ Be Careful with Closures
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Extract only the data you need from large objects before creating closures. Don't capture entire objects unnecessarily.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Memory Leak</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Memory that can't be freed<br/>
                    Caused by lingering references<br/>
                    Grows continuously over time
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Detection</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use DevTools Memory tab<br/>
                    Compare heap snapshots<br/>
                    Look for continuous growth
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Common Causes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Event listeners not removed<br/>
                    Timers not cleared<br/>
                    Detached DOM, global accumulation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Prevention</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always clean up resources<br/>
                    Use WeakMap/WeakSet<br/>
                    Limit cache sizes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              In React, always return cleanup functions from useEffect hooks. In vanilla JS, create cleanup functions that remove listeners, clear timers, and null references. Make cleanup a habit!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
