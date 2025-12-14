'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Zap,
  Lightbulb,
  Cpu,
  Clock,
  Layers,
  AlertCircle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export default function JavaScriptWebWorkers() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Cpu}
        category="JavaScript Performance"
        title="Web Workers"
        description="Run JavaScript in background threads to prevent UI freezing during heavy computations"
        colorTheme="yellow"
      />

      {/* The Problem */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/20 dark:from-red-950/10 dark:via-orange-950/5 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                The Problem: JavaScript is Single-Threaded
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                JavaScript runs on a <strong className="text-red-700 dark:text-red-400">single thread</strong> in the browser. This means:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">❌</span>
                  <span>Heavy calculations <strong>freeze the entire UI</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">❌</span>
                  <span>Buttons, inputs, and animations become <strong>unresponsive</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">❌</span>
                  <span>Users see <strong>"Page Unresponsive"</strong> warnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">❌</span>
                  <span>Poor user experience leading to <strong>frustration</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3 text-lg">Real-World Scenario</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Imagine you're building an e-commerce site where users can filter 100,000 products by price, category, and ratings. When they click "Apply Filters":
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                <strong className="text-red-900 dark:text-red-100">Without Workers:</strong>
                <span className="text-gray-700 dark:text-gray-300"> The browser freezes for 2-3 seconds. User can't scroll, click, or do anything. They think the site crashed.</span>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                <strong className="text-green-900 dark:text-green-100">With Workers:</strong>
                <span className="text-gray-700 dark:text-gray-300"> Filtering happens in background. User sees a loading spinner, can cancel, and the UI stays smooth. Professional experience!</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Solution */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                The Solution: Web Workers
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Web Workers let you run JavaScript in <strong className="text-green-700 dark:text-green-400">separate background threads</strong>, keeping your UI fast and responsive!
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✅</span>
                  <span>Heavy computations run in <strong>background threads</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✅</span>
                  <span>Main thread stays <strong>free for UI interactions</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✅</span>
                  <span>Users can <strong>continue using the app</strong> while processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✅</span>
                  <span>Tasks can be <strong>cancelled anytime</strong> (terminate worker)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Multi-Threading</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run heavy tasks in parallel threads without blocking the main UI thread.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Message Passing</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Communicate between threads using postMessage() and onmessage events.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <h4 className="font-semibold text-pink-900 dark:text-pink-100">Non-Blocking</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                UI remains responsive - animations, scrolling, and clicks work normally.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>How Web Workers Work</CardTitle>
              <CardDescription>Understanding the communication flow</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">🔄 Message Passing Architecture</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Workers run in completely separate threads and communicate through <strong>message passing</strong>. Data is copied (not shared) between threads for thread safety.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <h5 className="font-bold text-blue-700 dark:text-blue-300 mb-2">📱 Main Thread (Your App)</h5>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">1.</span>
                    <span>Creates worker: <code className="text-xs bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">new Worker('file.js')</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">2.</span>
                    <span>Sends task: <code className="text-xs bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">worker.postMessage(data)</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">3.</span>
                    <span>Continues running UI (non-blocking!)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">4.</span>
                    <span>Receives result: <code className="text-xs bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">worker.onmessage</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">5.</span>
                    <span>Updates UI with result</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-cyan-200 dark:border-cyan-800">
                <h5 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">⚙️ Worker Thread (Background)</h5>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">1.</span>
                    <span>Waits for message: <code className="text-xs bg-cyan-100 dark:bg-cyan-900 px-1 py-0.5 rounded">self.onmessage</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">2.</span>
                    <span>Receives data from main thread</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">3.</span>
                    <span>Performs heavy computation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">4.</span>
                    <span>Sends result back: <code className="text-xs bg-cyan-100 dark:bg-cyan-900 px-1 py-0.5 rounded">self.postMessage(result)</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600">5.</span>
                    <span>Can be terminated anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple Examples */}
      <CodeSnippet
        title="Example 1: Hello Web Worker"
        description="The simplest worker - send a message and get a response"
        code={`// worker.js
self.onmessage = function(e) {
  const name = e.data;
  self.postMessage('Hello, ' + name + '!');
};

// main.js
const worker = new Worker('worker.js');

worker.postMessage('Alice');

worker.onmessage = function(e) {
  console.log(e.data); // "Hello, Alice!"
};`}
        language="javascript"
        colorTheme="purple"
      />

      <CodeSnippet
        title="Example 2: Simple Calculation"
        description="Perform math operations in background"
        code={`// math-worker.js
self.onmessage = function(e) {
  const { a, b, operation } = e.data;
  
  let result;
  if (operation === 'add') result = a + b;
  if (operation === 'multiply') result = a * b;
  
  self.postMessage(result);
};

// main.js
const worker = new Worker('math-worker.js');

worker.postMessage({ a: 10, b: 5, operation: 'multiply' });

worker.onmessage = function(e) {
  console.log('Result:', e.data); // 50
  worker.terminate();
};`}
        language="javascript"
        colorTheme="emerald"
      />

      <CodeSnippet
        title="Example 3: Array Processing"
        description="Filter arrays without blocking UI"
        code={`// filter-worker.js
self.onmessage = function(e) {
  const numbers = e.data;
  
  // Filter even numbers
  const evenNumbers = numbers.filter(n => n % 2 === 0);
  
  self.postMessage(evenNumbers);
};

// main.js
const worker = new Worker('filter-worker.js');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

worker.postMessage(numbers);

worker.onmessage = function(e) {
  console.log('Even numbers:', e.data); // [2, 4, 6, 8, 10]
  worker.terminate();
};`}
        language="javascript"
        colorTheme="blue"
      />

      <CodeSnippet
        title="Example 4: Error Handling"
        description="Always handle errors gracefully"
        code={`// safe-worker.js
self.onmessage = function(e) {
  try {
    const result = 10 / e.data;
    self.postMessage({ success: true, result });
  } catch (error) {
    self.postMessage({ success: false, error: error.message });
  }
};

// main.js
const worker = new Worker('safe-worker.js');

worker.postMessage(2);

worker.onmessage = function(e) {
  if (e.data.success) {
    console.log('Result:', e.data.result); // 5
  } else {
    console.error('Error:', e.data.error);
  }
};

worker.onerror = function(error) {
  console.error('Worker error:', error.message);
};`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="Interactive Demo: See the Difference!"
        html={`<div style="max-width: 700px; margin: 0 auto;">
  <h2 style="color: #8b5cf6; margin-bottom: 20px; text-align: center;">🎯 Main Thread vs Web Worker</h2>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
    <div style="padding: 20px; background: linear-gradient(135deg, #fef3c7, #fbbf24); border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h3 style="color: #78350f; margin-bottom: 15px; font-size: 18px; text-align: center;">❌ Main Thread</h3>
      <button id="runMain" style="width: 100%; padding: 14px; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 15px; margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
        Calculate Fibonacci(40)
      </button>
      <div id="mainResult" style="padding: 12px; background: white; border-radius: 8px; min-height: 70px; font-size: 14px; color: #475569; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
        <div style="color: #94a3b8; text-align: center; padding: 10px;">Click to run calculation on main thread</div>
      </div>
    </div>
    
    <div style="padding: 20px; background: linear-gradient(135deg, #d1fae5, #34d399); border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h3 style="color: #064e3b; margin-bottom: 15px; font-size: 18px; text-align: center;">✅ Web Worker</h3>
      <button id="runWorker" style="width: 100%; padding: 14px; background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 15px; margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
        Calculate Fibonacci(40)
      </button>
      <div id="workerResult" style="padding: 12px; background: white; border-radius: 8px; min-height: 70px; font-size: 14px; color: #475569; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
        <div style="color: #94a3b8; text-align: center; padding: 10px;">Click to run calculation in Web Worker</div>
      </div>
    </div>
  </div>

  <div style="padding: 20px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h3 style="color: #1e40af; margin-bottom: 15px; text-align: center;">🎮 Test UI Responsiveness</h3>
    <input type="range" id="slider" min="0" max="100" value="50" style="width: 100%; margin-bottom: 10px; height: 8px; border-radius: 5px; outline: none; -webkit-appearance: none; background: #cbd5e1;" />
    <div style="display: flex; justify-content: space-between; font-size: 14px; color: #1e40af; font-weight: 600;">
      <span>Value: <strong id="sliderValue" style="color: #2563eb; font-size: 18px;">50</strong></span>
      <span id="uiStatus" style="color: #16a34a; font-size: 16px;">✓ UI Responsive</span>
    </div>
  </div>

  <div style="padding: 16px; background: #fef3c7; border-radius: 10px; border-left: 4px solid #f59e0b;">
    <strong style="color: #92400e;">💡 Try this:</strong> 
    <span style="color: #78350f;">Click "Main Thread" and try moving the slider - it freezes! Then try "Web Worker" - slider moves smoothly!</span>
  </div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

button:active:not(:disabled) {
  transform: translateY(0);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}`}
        js={`// Heavy computation function (Fibonacci)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// UI responsiveness tracker
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const uiStatus = document.getElementById('uiStatus');
let lastUpdate = Date.now();
let isCalculating = false;
let checkInterval = null;

slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  lastUpdate = Date.now();
  if (!isCalculating) {
    uiStatus.textContent = '✓ UI Responsive';
    uiStatus.style.color = '#16a34a';
  }
});

// Check if UI is frozen (clear previous interval first)
if (checkInterval) clearInterval(checkInterval);
checkInterval = setInterval(() => {
  if (isCalculating) {
    const timeSinceUpdate = Date.now() - lastUpdate;
    if (timeSinceUpdate > 500) {
      uiStatus.textContent = '⚠️ UI FROZEN!';
      uiStatus.style.color = '#dc2626';
    }
  }
}, 100);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (checkInterval) clearInterval(checkInterval);
});

// MAIN THREAD CALCULATION (BLOCKS UI)
document.getElementById('runMain').addEventListener('click', function() {
  const btn = this;
  const result = document.getElementById('mainResult');
  
  btn.disabled = true;
  btn.textContent = '⏳ Calculating...';
  isCalculating = true;
  result.innerHTML = '<div style=\"color: #f59e0b; font-weight: 600; text-align: center; padding: 10px;\">⚙️ Computing on main thread...<br><span style=\"font-size: 12px; color: #78350f;\">Try moving the slider!</span></div>';
  
  setTimeout(() => {
    const start = performance.now();
    const answer = fibonacci(40);
    const duration = (performance.now() - start).toFixed(0);
    
    result.innerHTML = '<div style=\"text-align: center;\"><strong style=\"color: #dc2626; font-size: 18px;\">' + answer + '</strong><br><span style=\"font-size: 13px; color: #78350f;\">⏱️ Time: ' + duration + 'ms<br>❌ <strong>UI was FROZEN!</strong></span></div>';
    btn.disabled = false;
    btn.textContent = 'Calculate Fibonacci(40)';
    isCalculating = false;
    uiStatus.textContent = '✓ UI Responsive';
    uiStatus.style.color = '#16a34a';
  }, 50);
});

// WEB WORKER CALCULATION (NON-BLOCKING)
document.getElementById('runWorker').addEventListener('click', function() {
  const btn = this;
  const result = document.getElementById('workerResult');
  
  btn.disabled = true;
  btn.textContent = '⏳ Calculating...';
  result.innerHTML = '<div style=\"color: #16a34a; font-weight: 600; text-align: center; padding: 10px;\">⚙️ Computing in background...<br><span style=\"font-size: 12px; color: #065f46;\">Move the slider - still works!</span></div>';
  
  // Create inline worker
  const workerCode = 'self.onmessage = function(e) { function fib(n) { if (n <= 1) return n; return fib(n - 1) + fib(n - 2); } const start = Date.now(); const result = fib(e.data); const duration = Date.now() - start; self.postMessage({ result, duration }); };';
  
  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const worker = new Worker(URL.createObjectURL(blob));
  
  const start = performance.now();
  
  worker.onmessage = function(e) {
    const totalDuration = (performance.now() - start).toFixed(0);
    result.innerHTML = '<div style=\"text-align: center;\"><strong style=\"color: #16a34a; font-size: 18px;\">' + e.data.result + '</strong><br><span style=\"font-size: 13px; color: #065f46;\">⏱️ Time: ' + totalDuration + 'ms<br>✅ <strong>UI stayed responsive!</strong></span></div>';
    btn.disabled = false;
    btn.textContent = 'Calculate Fibonacci(40)';
    worker.terminate();
  };
  
  worker.postMessage(40);
});`}
        colorTheme="yellow"
      />

      {/* Worker Limitations */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>What Workers CAN and CANNOT Do</CardTitle>
              <CardDescription>Important limitations to know</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Workers CAN Access
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>JavaScript features</strong> - All ES6+, async/await, promises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Network requests</strong> - fetch(), XMLHttpRequest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Timers</strong> - setTimeout, setInterval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Storage</strong> - IndexedDB (but NOT localStorage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>WebSockets</strong> - Real-time communication</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Workers CANNOT Access
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>DOM</strong> - No document, no elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Window object</strong> - No window.location, window.alert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>localStorage/sessionStorage</strong> - Use IndexedDB instead</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Parent variables</strong> - No access to main thread variables</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Communication is Key</AlertTitle>
            <AlertDescription>
              Workers communicate with main thread <strong>only through messages</strong>. Data is copied (cloned), not shared. For large data, use Transferable Objects to transfer ownership instead of copying.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Best Practices & Pro Tips</CardTitle>
              <CardDescription>Get the most out of Web Workers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ When to Use Workers</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Heavy calculations</strong> - Data processing, encryption, compression</li>
                <li>• <strong>Large datasets</strong> - Filtering, sorting, searching millions of records</li>
                <li>• <strong>Image/video processing</strong> - Filters, transformations, analysis</li>
                <li>• <strong>Real-time analysis</strong> - Live data streams, chart calculations</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ When NOT to Use Workers</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Simple operations</strong> - Overhead isn't worth it for quick tasks</li>
                <li>• <strong>Frequent small messages</strong> - Message passing has overhead</li>
                <li>• <strong>DOM manipulation</strong> - Workers can't touch the DOM</li>
                <li>• <strong>Tasks &lt; 50ms</strong> - Main thread is fine for quick operations</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tips</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Reuse workers</strong> - Create once, use multiple times</li>
                <li>• <strong>Always terminate</strong> - Call worker.terminate() when done</li>
                <li>• <strong>Handle errors</strong> - Implement worker.onerror</li>
                <li>• <strong>Add timeouts</strong> - Prevent infinite loops</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-rose-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🧵</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">True Multi-Threading</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Run heavy tasks in separate threads. Keep UI smooth and responsive. No more frozen pages!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Message Passing Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Workers communicate via postMessage. Data is copied for thread safety. No shared memory.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No DOM Access</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Workers can't touch DOM. Pure computation only. Send results back to main thread for UI updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for Heavy Tasks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data processing, image manipulation, calculations. Anything that takes >50ms benefits!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-300 dark:border-purple-700">
            <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Browser Support</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Web Workers have <strong>excellent browser support</strong> - available in all modern browsers. Use them confidently to build faster, more responsive web applications!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
