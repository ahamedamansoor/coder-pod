'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Cpu, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';

export default function JavaScriptWebWorkers() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Cpu}
        category="Performance & Optimization"
        title="Web Workers"
        description="Running JavaScript in background threads for heavy computations"
        colorTheme="orange"
      />

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What are Web Workers?</CardTitle>
          <CardDescription>Run JavaScript in separate threads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Web Workers allow you to run JavaScript in background threads, separate from the main execution thread. This prevents
            heavy computations from blocking the UI, keeping your application responsive even during intensive operations.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Multi-Threading</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run code in parallel without blocking the main thread
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 border border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Message Passing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Communicate between threads using postMessage
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/10 border border-yellow-200 dark:border-yellow-700">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Non-Blocking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                UI remains responsive during heavy operations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Web Worker Example</CardTitle>
          <CardDescription>Creating and using a simple worker</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// worker.js (Worker file)
self.onmessage = function(e) {
  const name = e.data;
  self.postMessage('Hello, ' + name + '!');
};

// main.js (Main thread)
const worker = new Worker('worker.js');

// Send message to worker
worker.postMessage('Alice');

// Receive message from worker
worker.onmessage = function(e) {
  console.log(e.data); // "Hello, Alice!"
};

// Terminate worker when done
worker.terminate();`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Heavy Computation Example</CardTitle>
          <CardDescription>Offload intensive calculations to worker</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// fibonacci-worker.js
self.onmessage = function(e) {
  const n = e.data;
  
  function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  const result = fibonacci(n);
  self.postMessage(result);
};

// main.js
const worker = new Worker('fibonacci-worker.js');

worker.postMessage(40);

worker.onmessage = function(e) {
  console.log('Fibonacci result:', e.data);
  worker.terminate();
};

worker.onerror = function(error) {
  console.error('Worker error:', error.message);
};`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Array Processing Example</CardTitle>
          <CardDescription>Filter large datasets without blocking UI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// filter-worker.js
self.onmessage = function(e) {
  const { data, minPrice, maxPrice } = e.data;
  
  // Filter products by price range
  const filtered = data.filter(product => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
  
  // Sort by price
  filtered.sort((a, b) => a.price - b.price);
  
  self.postMessage(filtered);
};

// main.js
const worker = new Worker('filter-worker.js');

const products = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 50 },
  // ... thousands more products
];

worker.postMessage({
  data: products,
  minPrice: 50,
  maxPrice: 150
});

worker.onmessage = function(e) {
  console.log('Filtered products:', e.data);
  displayProducts(e.data);
  worker.terminate();
};`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Worker Limitations</CardTitle>
          <CardDescription>What workers can and cannot do</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Workers CAN Access
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• JavaScript features (ES6+, async/await)</li>
                <li>• Network requests (fetch, XMLHttpRequest)</li>
                <li>• Timers (setTimeout, setInterval)</li>
                <li>• IndexedDB storage</li>
                <li>• WebSockets</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Workers CANNOT Access
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• DOM (document, elements)</li>
                <li>• Window object</li>
                <li>• localStorage/sessionStorage</li>
                <li>• Parent scope variables</li>
                <li>• Direct UI manipulation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Error Handling</CardTitle>
          <CardDescription>Handle worker errors gracefully</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// safe-worker.js
self.onmessage = function(e) {
  try {
    const result = performCalculation(e.data);
    self.postMessage({ success: true, result });
  } catch (error) {
    self.postMessage({ 
      success: false, 
      error: error.message 
    });
  }
};

// main.js
const worker = new Worker('safe-worker.js');

worker.postMessage(data);

worker.onmessage = function(e) {
  if (e.data.success) {
    console.log('Success:', e.data.result);
  } else {
    console.error('Worker error:', e.data.error);
  }
};

worker.onerror = function(error) {
  console.error('Worker crashed:', error.message);
  console.error('Line:', error.lineno);
  console.error('File:', error.filename);
};`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Use workers for heavy tasks</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Data processing, encryption, image manipulation, large calculations
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Always terminate workers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Call worker.terminate() when done to free memory
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✓ Handle errors properly</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Implement both try/catch in worker and onerror in main thread
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✗ Don't use for simple operations</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Message passing overhead isn't worth it for tasks under 50ms
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-300 dark:border-orange-700 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Background Threading</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Run heavy computations without blocking UI
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Message Passing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Communicate via postMessage/onmessage
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No DOM Access</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Workers cannot manipulate the DOM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Always Terminate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean up workers to free memory
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
