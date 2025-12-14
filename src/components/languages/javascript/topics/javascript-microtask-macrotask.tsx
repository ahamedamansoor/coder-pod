'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Clock,
  CheckCircle,
  Layers,
  Lightbulb,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function JavaScriptMicrotaskMacrotask() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Advanced Async"
        title="Microtasks & Macrotasks"
        description="Understanding the JavaScript event loop and task queues"
        colorTheme="amber"
      />

      {/* What are Microtasks and Macrotasks */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/20 dark:from-amber-950/10 dark:via-yellow-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Microtasks & Macrotasks?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript has <strong className="text-amber-700 dark:text-amber-400">two types of task queues</strong> in the event loop. <strong className="text-yellow-700 dark:text-yellow-400">Macrotasks</strong> (like setTimeout, I/O) run one at a time. <strong className="text-orange-700 dark:text-orange-400">Microtasks</strong> (like Promises) run all at once after each macrotask.
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Simple Analogy:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Macrotask</strong> = Main dishes at a restaurant (one at a time)<br/>
              <strong>Microtask</strong> = Side dishes (all served before next main dish)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Event Loop Visualization */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Event Loop Execution Order</CardTitle>
              <CardDescription>How tasks are processed</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Execute Synchronous Code</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Run all code in the current script from top to bottom
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Execute ALL Microtasks</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Run every microtask in the queue until empty
                </p>
                <div className="text-xs text-gray-600 dark:text-gray-400 bg-purple-50 dark:bg-purple-950/30 p-2 rounded">
                  Promises, queueMicrotask(), MutationObserver
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Execute ONE Macrotask</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Pick one task from macrotask queue and run it
                </p>
                <div className="text-xs text-gray-600 dark:text-gray-400 bg-amber-50 dark:bg-amber-950/30 p-2 rounded">
                  setTimeout, setInterval, setImmediate (Node), I/O, UI rendering
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Repeat Step 2 & 3</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  After each macrotask, run all microtasks again, then next macrotask
                </p>
              </div>
            </div>
          </div>

          <Alert className="mt-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Key Rule:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>ALL microtasks</strong> run before the <strong>NEXT macrotask</strong>. This is why Promises resolve before setTimeout!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Microtasks vs Macrotasks</CardTitle>
              <CardDescription>Quick comparison</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">🔬 Microtasks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                High priority - executed immediately after current task
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">Promise.then()</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">async/await</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">queueMicrotask()</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">MutationObserver</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">process.nextTick()</code> (Node)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">📦 Macrotasks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Normal priority - executed one at a time
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">setTimeout()</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">setInterval()</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">setImmediate()</code> (Node)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>I/O operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>UI rendering (browser)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Order */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Execution Order Demo</CardTitle>
          <CardDescription>See the order in action</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`console.log('1: Synchronous');

setTimeout(() => {
  console.log('2: Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask (Promise)');
});

console.log('4: Synchronous');

// Output order:
// 1: Synchronous
// 4: Synchronous
// 3: Microtask (Promise)
// 2: Macrotask (setTimeout)

// 🎯 Explanation:
// Step 1: Run all sync code (1, 4)
// Step 2: Run ALL microtasks (3)
// Step 3: Run ONE macrotask (2)`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Complex Order */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Complex Execution Order</CardTitle>
          <CardDescription>Multiple promises and timeouts</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  
  Promise.resolve().then(() => {
    console.log('Promise in Timeout 1');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  
  setTimeout(() => {
    console.log('Timeout in Promise 1');
  }, 0);
}).then(() => {
  console.log('Promise 2');
});

console.log('End');

// Output order:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Promise in Timeout 1
// Timeout in Promise 1

// 🎯 Explanation:
// 1. Sync: Start, End
// 2. Microtasks: Promise 1, Promise 2 (chained)
// 3. Macrotask: Timeout 1
// 4. Microtask: Promise in Timeout 1
// 5. Macrotask: Timeout in Promise 1`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 3: queueMicrotask */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Using queueMicrotask()</CardTitle>
          <CardDescription>Explicitly add microtasks</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// queueMicrotask() adds a microtask directly
console.log('1: Start');

setTimeout(() => {
  console.log('5: Timeout');
}, 0);

queueMicrotask(() => {
  console.log('3: Microtask 1');
});

Promise.resolve().then(() => {
  console.log('4: Promise');
});

queueMicrotask(() => {
  console.log('2: Microtask 2');
});

// Output order:
// 1: Start
// 3: Microtask 1
// 2: Microtask 2
// 4: Promise
// 5: Timeout

// 🎯 Note: All microtasks (queueMicrotask and Promises)
// run before setTimeout, in the order they were queued`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 4: Async/Await */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Async/Await with Event Loop</CardTitle>
          <CardDescription>How async functions fit in</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`console.log('1: Start');

async function asyncFunc() {
  console.log('2: Async start (synchronous part)');
  
  await Promise.resolve();
  // Everything AFTER await is a microtask
  
  console.log('4: After await (microtask)');
}

asyncFunc();

setTimeout(() => {
  console.log('5: Timeout');
}, 0);

console.log('3: End');

// Output order:
// 1: Start
// 2: Async start (synchronous part)
// 3: End
// 4: After await (microtask)
// 5: Timeout

// 🎯 Key Point:
// - Code before 'await' runs synchronously
// - Code after 'await' becomes a microtask
// - Microtasks run before setTimeout`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 5: Infinite Microtasks */}
      <Card>
        <CardHeader>
          <CardTitle>Example 5: Microtask Starvation ⚠️</CardTitle>
          <CardDescription>Be careful with infinite microtasks!</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ⚠️ WARNING: This will BLOCK the event loop!
function infiniteMicrotasks() {
  Promise.resolve().then(() => {
    console.log('Microtask');
    infiniteMicrotasks(); // Creates another microtask!
  });
}

setTimeout(() => {
  console.log('This will NEVER run!');
}, 0);

infiniteMicrotasks();

// 🎯 Problem:
// - Microtask creates another microtask
// - ALL microtasks must complete before next macrotask
// - setTimeout never gets a chance to run!
// - Browser becomes unresponsive

// ✅ Solution: Use setTimeout for recursive tasks
function infiniteMacrotasks() {
  setTimeout(() => {
    console.log('Macrotask');
    infiniteMacrotasks(); // OK - allows other tasks
  }, 0);
}

infiniteMacrotasks(); // Works fine, doesn't block`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 6: Real-World Use Case */}
      <Card>
        <CardHeader>
          <CardTitle>Example 6: Real-World - Batch DOM Updates</CardTitle>
          <CardDescription>Using microtasks for efficient updates</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Batch multiple updates into one render
class BatchUpdater {
  constructor() {
    this.updates = [];
    this.scheduled = false;
  }
  
  scheduleUpdate(item) {
    this.updates.push(item);
    
    if (!this.scheduled) {
      this.scheduled = true;
      
      // Use microtask to batch updates
      queueMicrotask(() => {
        this.flush();
      });
    }
  }
  
  flush() {
    console.log(\`Applying \${this.updates.length} updates at once\`);
    
    // Apply all updates in one go
    this.updates.forEach(update => {
      document.getElementById('list').innerHTML += \`<li>\${update}</li>\`;
    });
    
    this.updates = [];
    this.scheduled = false;
  }
}

const updater = new BatchUpdater();

// Multiple updates in same synchronous block
updater.scheduleUpdate('Item 1');
updater.scheduleUpdate('Item 2');
updater.scheduleUpdate('Item 3');

// All 3 updates happen together in microtask phase
// Only ONE DOM update instead of three!

// 🎯 Benefit:
// - Collects multiple updates
// - Applies them all at once (microtask)
// - More efficient than updating DOM 3 times`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Microtasks First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ALL microtasks run<br/>
                    Before NEXT macrotask
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">One Macrotask</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only ONE macrotask<br/>
                    Per event loop cycle
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Promises = Microtasks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    .then() callbacks<br/>
                    Run as microtasks
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⏰</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">setTimeout = Macrotask</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Callbacks added to<br/>
                    Macrotask queue
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-300 dark:border-amber-700">
            <Layers className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Understanding Execution Order</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The event loop processes: <strong>Sync Code → All Microtasks → One Macrotask → Repeat</strong>. This is why Promises (microtasks) always resolve before setTimeout (macrotasks), even with 0 delay!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
