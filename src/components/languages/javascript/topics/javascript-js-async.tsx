'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Clock,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Timer,
  Zap,
  Coffee,
  Loader2,
} from 'lucide-react';

export default function JavaScriptJsAsync() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Clock}
        category="JavaScript Fundamentals"
        title="Asynchronous JavaScript"
        description="Understanding async code - why JavaScript doesn't wait and how to handle it"
        colorTheme="yellow"
      />

      {/* What is Async JavaScript */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Asynchronous JavaScript?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Asynchronous (async) code runs <strong className="text-yellow-700 dark:text-yellow-400">in the background</strong> without blocking the rest of your program. Like ordering coffee - you don't wait at the counter, you go sit down and they call you when it's ready!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Coffee className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Coffee Shop Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Synchronous:</strong> You wait at counter until coffee is ready (blocking).<br/>
              <strong>Asynchronous:</strong> You get a buzzer and do other things while waiting (non-blocking)!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Synchronous vs Asynchronous */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Timer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Synchronous vs Asynchronous</CardTitle>
              <CardDescription>The difference between blocking and non-blocking</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">How Code Executes</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                  <h5 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Synchronous (Blocking)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 mb-3">
{`console.log('Start');

// This blocks for 3 seconds
for(let i=0; i<3000000000; i++){}

console.log('End');

// Output:
// Start
// ...waits 3 seconds...
// End`}</pre>
                  <p className="text-xs text-gray-500">Everything waits ❌</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">Asynchronous (Non-blocking) ✅</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 mb-3">
{`console.log('Start');

setTimeout(() => {
  console.log('Timeout done');
}, 3000);

console.log('End');

// Output:
// Start
// End (immediately!)
// ...waits 3 seconds...
// Timeout done`}</pre>
                  <p className="text-xs text-gray-500">Doesn't block! ✓</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Blocking vs Non-blocking"
        description="See the difference"
        code={`// SYNCHRONOUS - Blocking (BAD for slow operations)
console.log('Task 1');
console.log('Task 2');
console.log('Task 3');
// All run immediately, one after another

// ASYNCHRONOUS - Non-blocking (GOOD for slow operations)
console.log('Start');

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End');

// Output order:
// Start
// End (doesn't wait!)
// This runs after 2 seconds

// Real-world example
console.log('Fetching data...');

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data loaded:', data);
  });

console.log('Doing other things...');

// Output:
// Fetching data...
// Doing other things... (doesn't wait for fetch!)
// Data loaded: {...} (when fetch completes)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Why We Need Async */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Why Do We Need Async?</CardTitle>
              <CardDescription>Essential for modern web applications</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Common Use Cases</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">🌐 API Calls</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fetching data from servers takes time - don't freeze the UI!
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">⏰ Timers</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Delays, intervals, animations - run code after a wait
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">📁 File Operations</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reading/writing files without blocking
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">🎮 User Events</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clicks, form submissions - respond when they happen
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Async Examples"
        description="Where async is essential"
        code={`// 1. Fetching data (API calls)
fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(user => {
    console.log('User:', user.name);
  });

// 2. Timers
setTimeout(() => {
  console.log('Show notification after 3 seconds');
}, 3000);

// 3. User events
document.querySelector('button').addEventListener('click', () => {
  console.log('Button clicked!');
});

// 4. Loading images
const img = new Image();
img.onload = () => {
  console.log('Image loaded!');
};
img.src = 'https://example.com/image.jpg';

// Without async, your app would FREEZE during these operations!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Three Ways to Handle Async */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Loader2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Three Ways to Handle Async Code</CardTitle>
              <CardDescription>Evolution of async JavaScript</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">From Old to Modern</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-orange-200 dark:border-orange-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300">1. Callbacks (Old)</h5>
                  <span className="text-xs bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">1990s</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Pass a function to be called when done
                </p>
                <code className="text-xs font-mono">setTimeout(callback, 1000)</code>
                <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">Problem: Callback hell!</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-blue-200 dark:border-blue-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300">2. Promises (Better)</h5>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">ES6 2015</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Return a promise object, chain with .then()
                </p>
                <code className="text-xs font-mono">promise.then().catch()</code>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">Much better!</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-green-200 dark:border-green-800/30">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-green-700 dark:text-green-300">3. Async/Await (Modern) ✅</h5>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">ES2017</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Write async code like synchronous code
                </p>
                <code className="text-xs font-mono">await promise</code>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">Cleanest! ⭐</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Same Task, Three Ways"
        description="Fetching user data"
        code={`// 1. CALLBACKS (Old way)
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: 'Alice' });
  }, 1000);
}

getUser(1, (user) => {
  console.log('User:', user.name);
  // Nested callbacks = "callback hell" ❌
});

// 2. PROMISES (Better)
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: 'Alice' });
    }, 1000);
  });
}

getUser(1)
  .then(user => {
    console.log('User:', user.name);
  })
  .catch(error => {
    console.log('Error:', error);
  });

// 3. ASYNC/AWAIT (Modern, cleanest!) ✅
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: 'Alice' });
    }, 1000);
  });
}

async function loadUser() {
  try {
    const user = await getUser(1);
    console.log('User:', user.name);
  } catch (error) {
    console.log('Error:', error);
  }
}

loadUser();`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Event Loop */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Loader2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>The Event Loop</CardTitle>
              <CardDescription>How JavaScript handles async code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Behind the Scenes</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                JavaScript is <strong>single-threaded</strong> but can handle async tasks through the event loop:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>Call Stack:</strong> Executes synchronous code
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>Web APIs:</strong> Handle async operations (timers, fetch)
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>Callback Queue:</strong> Waits for call stack to be empty
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>Event Loop:</strong> Moves callbacks to call stack when ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Event Loop in Action"
        description="Understanding execution order"
        code={`console.log('1: Start');

setTimeout(() => {
  console.log('2: Timeout');
}, 0);  // Even with 0 delay!

Promise.resolve().then(() => {
  console.log('3: Promise');
});

console.log('4: End');

// Output:
// 1: Start
// 4: End
// 3: Promise (microtask - higher priority)
// 2: Timeout (macrotask - lower priority)

// Why this order?
// 1. Synchronous code runs first (1, 4)
// 2. Promises (microtasks) run next (3)
// 3. Timeouts (macrotasks) run last (2)

// Another example
console.log('A');

setTimeout(() => console.log('B'), 1000);

setTimeout(() => console.log('C'), 0);

Promise.resolve().then(() => console.log('D'));

console.log('E');

// Output:
// A
// E
// D (promise - microtask)
// C (timeout 0ms)
// B (timeout 1000ms)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>async/await</strong> for modern code</li>
                <li>• Always handle errors (try/catch)</li>
                <li>• Use promises for async operations</li>
                <li>• Keep UI responsive with async</li>
                <li>• Understand the event loop</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't block with synchronous loops</li>
                <li>• Don't use callbacks (callback hell)</li>
                <li>• Don't forget error handling</li>
                <li>• Don't mix callbacks and promises</li>
                <li>• Don't make everything async unnecessarily</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Async Progression</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>1990s:</strong> Callbacks (messy, callback hell)</div>
              <div><strong>2015:</strong> Promises (better, chainable)</div>
              <div><strong>2017:</strong> Async/Await (cleanest, modern standard) ⭐</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Next Steps</AlertTitle>
            <AlertDescription className="text-base">
              Now that you understand async JavaScript, dive deeper into <strong>Promises</strong> and <strong>Async/Await</strong> to master modern async programming!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
