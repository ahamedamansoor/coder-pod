'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Cpu } from 'lucide-react';

export default function JavaScriptAtomicsWaitAsync() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Cpu}
        category="Modern JavaScript"
        title="Atomics.waitAsync"
        description="Non-blocking atomic operations for SharedArrayBuffer (ES2024)"
        colorTheme="teal"
      />

      <Card className="border-2 border-teal-300 dark:border-teal-700 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Atomics.waitAsync? ⚡
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A <strong className="text-teal-700 dark:text-teal-400">non-blocking version</strong> of <code>Atomics.wait</code>! 
                Instead of blocking the thread while waiting, it returns a <strong className="text-cyan-700 dark:text-cyan-400">Promise</strong> that 
                resolves when the condition is met - perfect for <strong>multi-threaded JavaScript</strong> with Web Workers!
              </p>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Advanced Feature!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              This is for advanced multi-threading scenarios with SharedArrayBuffer. Most apps don't need this!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">The Problem It Solves 🎯</CardTitle>
          <CardDescription>Blocking vs non-blocking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100">❌ Atomics.wait (Blocking)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Blocks the entire thread!
const result = Atomics.wait(
  buffer, index, expectedValue
);

// Thread is frozen until notified
// Can't do anything else
// UI freezes (if on main thread)`}</code></pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100">✅ Atomics.waitAsync (Non-blocking)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Returns a Promise!
const { async, value } = Atomics.waitAsync(
  buffer, index, expectedValue
);

// Thread continues running
if (async) {
  value.then(() => {
    console.log('Notified!');
  });
}`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Usage 📝</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-3">Simple Example</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Shared buffer between threads
const sharedBuffer = new SharedArrayBuffer(4);
const view = new Int32Array(sharedBuffer);

// Wait for value to change from 0
const { async, value } = Atomics.waitAsync(view, 0, 0);

if (async) {
  // Returns a promise
  value.then((result) => {
    console.log('Result:', result); // 'ok' or 'timed-out'
  });
} else {
  // Resolved immediately
  console.log('Immediate result:', value);
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Example 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Worker Communication Pattern</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// main.js (Main Thread)
const sharedBuffer = new SharedArrayBuffer(4);
const view = new Int32Array(sharedBuffer);

// Create worker
const worker = new Worker('worker.js');
worker.postMessage({ buffer: sharedBuffer });

// Wait for worker to signal completion
const { async, value } = Atomics.waitAsync(view, 0, 0);

if (async) {
  console.log('Waiting for worker...');
  
  value.then((result) => {
    if (result === 'ok') {
      console.log('Worker completed!');
      console.log('Result:', view[0]);
    }
  });
}

// Main thread continues running!
console.log('Main thread not blocked');


// worker.js (Worker Thread)
self.onmessage = ({ data }) => {
  const view = new Int32Array(data.buffer);
  
  // Do heavy work
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }
  
  // Write result
  Atomics.store(view, 0, result);
  
  // Notify main thread
  Atomics.notify(view, 0, 1);
};`}</code></pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">With Timeout</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`const sharedBuffer = new SharedArrayBuffer(4);
const view = new Int32Array(sharedBuffer);

// Wait with 5 second timeout
const { async, value } = Atomics.waitAsync(
  view,
  0,      // index
  0,      // expected value
  5000    // timeout in ms
);

if (async) {
  value.then((result) => {
    if (result === 'ok') {
      console.log('Value changed!');
    } else if (result === 'timed-out') {
      console.log('Timeout reached');
    }
  });
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Return Value Structure 📊</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Understanding the Result</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`const result = Atomics.waitAsync(view, index, value);

// Result object has two properties:

// 1. async: boolean
//    - true: Returns a Promise (async wait)
//    - false: Resolved immediately (sync)

// 2. value: Promise<string> | string
//    If async = true:
//      - Promise that resolves to:
//        - 'ok': Notified by Atomics.notify()
//        - 'timed-out': Timeout reached
//    
//    If async = false:
//      - 'not-equal': Current value doesn't match expected
//      - 'timed-out': Timed out immediately

// Example handling
const { async, value } = Atomics.waitAsync(view, 0, 0);

if (async) {
  // Async case - value is a Promise
  await value; // 'ok' or 'timed-out'
} else {
  // Sync case - value is a string
  console.log(value); // 'not-equal' or 'timed-out'
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Points 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Non-Blocking</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Thread continues executing - no freeze!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Promise-Based</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Returns Promise for async/await compatibility
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">SharedArrayBuffer Required</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Only works with SharedArrayBuffer for multi-threading
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Advanced Use Case</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    For complex multi-threaded applications with Workers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-blue-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Non-Blocking</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Doesn't freeze the thread while waiting
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔄</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Promise-Based</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns Promise for async operations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🧵</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Multi-Threading</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    For Web Workers and SharedArrayBuffer
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2024</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Latest atomic operation enhancement
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
