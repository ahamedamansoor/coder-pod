'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Zap,
  Clock,
  Layers,
  ArrowRight,
  CheckCircle,
  Code2,
  Lightbulb,
  Timer,
  FastForward,
} from 'lucide-react';

export default function JavaScriptMicrotasksMacrotasks() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Clock}
        category="JavaScript Event Loop"
        title="Microtasks & Macrotasks"
        description="Master the JavaScript execution order and event loop"
        colorTheme="cyan"
      />

      {/* What Are They */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50/80 via-blue-50/50 to-indigo-50/30 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-xl">
              <Clock className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What Are Microtasks & Macrotasks?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript uses <strong className="text-cyan-700 dark:text-cyan-400">two task queues</strong> to manage async code: <strong className="text-blue-700 dark:text-blue-400">Microtasks</strong> (high priority) and <strong className="text-indigo-700 dark:text-indigo-400">Macrotasks</strong> (normal priority). 
                Understanding the execution order is crucial for writing predictable async code!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900/30 dark:to-cyan-950/20 border-2 border-cyan-300 dark:border-cyan-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500 text-white">
                  <FastForward className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-100">Microtasks</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Higher priority!</strong> Execute <strong>before</strong> next macrotask. Run after current script completes.
              </p>
              <div className="space-y-1.5">
                <Badge className="bg-cyan-600 hover:bg-cyan-700">Promises (.then, .catch)</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-700">queueMicrotask()</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-700">MutationObserver</Badge>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-950/20 border-2 border-indigo-300 dark:border-indigo-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-indigo-500 text-white">
                  <Timer className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">Macrotasks</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Normal priority.</strong> Execute one per event loop cycle. Browser can render between them.
              </p>
              <div className="space-y-1.5">
                <Badge className="bg-indigo-600 hover:bg-indigo-700">setTimeout / setInterval</Badge>
                <Badge className="bg-indigo-600 hover:bg-indigo-700">setImmediate (Node)</Badge>
                <Badge className="bg-indigo-600 hover:bg-indigo-700">I/O, UI Events</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Execution Order Demo"
        description="See microtasks vs macrotasks execution order in real-time"
        html={`<div style="max-width: 800px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%); padding: 40px; border-radius: 16px; text-align: center; box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700;">⚡ Event Loop Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px;">Watch the execution order unfold</p>
    
    <button id="runBtn" style="padding: 16px 40px; background: white; color: #06b6d4; border: none; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 18px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s;">
      ▶️ Run Execution
    </button>
    
    <div id="output" style="margin-top: 30px; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px; min-height: 200px; backdrop-filter: blur(10px); text-align: left;"></div>
  </div>
</div>`}
        css={`#runBtn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4);
}

#runBtn:active {
  transform: translateY(-1px);
}

.log-entry {
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  animation: slideIn 0.3s ease-out;
  border-left: 4px solid;
}

.sync { 
  background: #f0fdf4; 
  border-color: #22c55e;
  color: #166534;
}

.micro { 
  background: #ecfeff; 
  border-color: #06b6d4;
  color: #155e75;
}

.macro { 
  background: #eef2ff; 
  border-color: #6366f1;
  color: #3730a3;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`}
        js={`const runBtn = document.getElementById('runBtn');
const output = document.getElementById('output');

let logCount = 0;

function log(message, type) {
  logCount++;
  const entry = document.createElement('div');
  entry.className = \`log-entry \${type}\`;
  
  const icon = type === 'sync' ? '🟢' : type === 'micro' ? '🔵' : '🟣';
  const label = type === 'sync' ? 'SYNC' : type === 'micro' ? 'MICROTASK' : 'MACROTASK';
  
  entry.innerHTML = \`<strong>\${logCount}. [\${label}]</strong> \${icon} \${message}\`;
  output.appendChild(entry);
}

runBtn.addEventListener('click', () => {
  output.innerHTML = '';
  logCount = 0;
  
  // Execute the demo code
  console.log('🎬 Starting execution...');
  log('Script start', 'sync');
  
  setTimeout(() => {
    log('setTimeout 1 (macrotask)', 'macro');
  }, 0);
  
  Promise.resolve().then(() => {
    log('Promise 1 (microtask)', 'micro');
  });
  
  queueMicrotask(() => {
    log('queueMicrotask (microtask)', 'micro');
  });
  
  setTimeout(() => {
    log('setTimeout 2 (macrotask)', 'macro');
    
    Promise.resolve().then(() => {
      log('Promise inside setTimeout (microtask)', 'micro');
    });
  }, 0);
  
  Promise.resolve().then(() => {
    log('Promise 2 (microtask)', 'micro');
  });
  
  log('Script end', 'sync');
  
  // Add summary after a delay
  setTimeout(() => {
    output.innerHTML += \`
      <div style="margin-top: 20px; padding: 16px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
        <strong style="color: #92400e;">💡 Execution Order:</strong>
        <div style="font-size: 13px; color: #78350f; margin-top: 8px; line-height: 1.8;">
          1️⃣ Synchronous code runs first<br/>
          2️⃣ ALL microtasks run (promises, queueMicrotask)<br/>
          3️⃣ ONE macrotask runs (setTimeout)<br/>
          4️⃣ Microtasks again → Macrotask → Repeat
        </div>
      </div>
    \`;
  }, 100);
  
  console.log('✅ Check the output above!');
});`}
        colorTheme="cyan"
      />

      {/* Execution Order */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Event Loop Execution Order</CardTitle>
              <CardDescription>The exact sequence JavaScript follows</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-2 border-green-300 dark:border-green-700">
              <div className="text-3xl">1️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Execute Synchronous Code</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All synchronous code in the current script runs first (top to bottom)
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/10 border-2 border-cyan-300 dark:border-cyan-700">
              <div className="text-3xl">2️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Run ALL Microtasks</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Process entire microtask queue: Promises, queueMicrotask, MutationObserver
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10 border-2 border-indigo-300 dark:border-indigo-700">
              <div className="text-3xl">3️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Run ONE Macrotask</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Execute one task from macrotask queue: setTimeout, setInterval, I/O
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 border-2 border-purple-300 dark:border-purple-700">
              <div className="text-3xl">🔄</div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Repeat Steps 2-3</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Check microtasks → Run one macrotask → Check microtasks → Loop continues...
                </p>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Key Insight</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>All microtasks</strong> run before the <strong>next macrotask</strong>. This is why promises execute before setTimeout, even with <code className="text-xs bg-white dark:bg-amber-900 px-1.5 py-0.5 rounded">setTimeout(fn, 0)</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Practical Examples</CardTitle>
              <CardDescription>Predict the execution order</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-100/50 dark:from-cyan-950/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800/30">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Example 1: Microtask Priority
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`console.log('1. Start');

setTimeout(() => {
  console.log('4. Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Microtask (Promise)');
});

console.log('2. End');

// Output:
// 1. Start
// 2. End
// 3. Microtask (Promise)
// 4. Macrotask (setTimeout)

// ✅ Microtask runs BEFORE macrotask!`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-100/50 dark:from-indigo-950/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800/30">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Example 2: Multiple Microtasks</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`console.log('1. Start');

setTimeout(() => {
  console.log('6. Macrotask 1');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('3. Microtask 1');
    return Promise.resolve();
  })
  .then(() => {
    console.log('4. Microtask 2');
  });

queueMicrotask(() => {
  console.log('5. queueMicrotask');
});

console.log('2. End');

// Output:
// 1. Start
// 2. End
// 3. Microtask 1
// 4. Microtask 2
// 5. queueMicrotask
// 6. Macrotask 1

// ✅ ALL microtasks complete before first macrotask!`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Nested Tasks</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`setTimeout(() => {
  console.log('2. Macrotask 1');
  
  Promise.resolve().then(() => {
    console.log('3. Microtask inside macro');
  });
}, 0);

setTimeout(() => {
  console.log('5. Macrotask 2');
}, 0);

console.log('1. Sync');

Promise.resolve().then(() => {
  console.log('4. Microtask');
});

// Output:
// 1. Sync
// 4. Microtask
// 2. Macrotask 1
// 3. Microtask inside macro
// 5. Macrotask 2

// ✅ After each macrotask, microtasks run again!`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Common APIs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Task Types Reference</CardTitle>
              <CardDescription>Know which is which</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                <FastForward className="w-5 h-5" />
                Microtasks (Priority)
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">Promise.then()</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">Promise.catch()</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">Promise.finally()</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">queueMicrotask()</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">async/await</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <code className="text-xs bg-cyan-100 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">MutationObserver</code>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
                <Timer className="w-5 h-5" />
                Macrotasks (Normal)
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">setTimeout()</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">setInterval()</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">setImmediate()</code> (Node)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">I/O operations</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">UI rendering</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">requestAnimationFrame</code>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔵</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Microtasks First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ALL microtasks run before next macrotask
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Promises = Micro</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">.then()</code> executes as microtask
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🟣</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">setTimeout = Macro</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Even <code className="text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">setTimeout(fn, 0)</code> is macrotask
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Event Loop Cycle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Micros → Macro → Micros → Macro...
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
