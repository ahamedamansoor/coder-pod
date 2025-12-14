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

      {/* Example 1: Simple Calculation */}
      <CodeSnippet
        title="Example 1: Your First Web Worker - Factorial Calculator"
        description="A beginner-friendly example showing the basic worker setup"
        code={`// Step 1: Create worker file (factorial-worker.js)
self.onmessage = function(e) {
  const number = e.data;
  
  // Heavy computation
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  
  // Send result back to main thread
  self.postMessage({
    input: number,
    result: factorial,
    message: \`Factorial of \${number} is \${factorial}\`
  });
};

// Step 2: Use worker in your app (main.js)
const worker = new Worker('factorial-worker.js');

// Send calculation task
worker.postMessage(10);

// Receive result
worker.onmessage = function(e) {
  console.log(e.data.message);
  // Output: "Factorial of 10 is 3628800"
  
  document.getElementById('result').textContent = e.data.result;
};

// Clean up when done
worker.terminate();`}
        language="javascript"
        colorTheme="purple"
      />

      {/* Example 2: Array Processing */}
      <CodeSnippet
        title="Example 2: Processing Large Datasets - Product Filtering"
        description="Filter 100,000 products without freezing the UI"
        code={`// products-worker.js
self.onmessage = function(e) {
  const { products, filters } = e.data;
  const startTime = performance.now();
  
  // Filter products based on criteria
  let filtered = products;
  
  if (filters.minPrice) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }
  
  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  
  if (filters.minRating) {
    filtered = filtered.filter(p => p.rating >= filters.minRating);
  }
  
  // Sort by price if needed
  if (filters.sortBy === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  }
  
  const timeTaken = performance.now() - startTime;
  
  // Send results back
  self.postMessage({
    results: filtered,
    totalProcessed: products.length,
    totalFiltered: filtered.length,
    timeTaken: Math.round(timeTaken) + 'ms'
  });
};

// main.js - Using the worker
const productsWorker = new Worker('products-worker.js');

// Generate large dataset (100,000 products)
const products = Array.from({ length: 100000 }, (_, i) => ({
  id: i,
  name: \`Product \${i}\`,
  price: Math.random() * 1000,
  category: ['Electronics', 'Clothing', 'Books', 'Home'][Math.floor(Math.random() * 4)],
  rating: Math.random() * 5
}));

// When user clicks "Apply Filters"
document.getElementById('applyFilters').addEventListener('click', () => {
  // Show loading state
  showLoadingSpinner();
  
  // Send task to worker (UI stays responsive!)
  productsWorker.postMessage({
    products: products,
    filters: {
      minPrice: 50,
      maxPrice: 500,
      category: 'Electronics',
      minRating: 4,
      sortBy: 'price'
    }
  });
});

// Receive filtered results
productsWorker.onmessage = function(e) {
  hideLoadingSpinner();
  
  console.log(\`Processed \${e.data.totalProcessed} products in \${e.data.timeTaken}\`);
  console.log(\`Found \${e.data.totalFiltered} matching products\`);
  
  // Update UI with results
  displayProducts(e.data.results);
  
  // UI was never frozen - user could scroll, click other buttons, etc.!
};`}
        language="javascript"
        colorTheme="emerald"
      />

      {/* Example 3: Progress Updates */}
      <CodeSnippet
        title="Example 3: Real-Time Progress Updates - Image Batch Processing"
        description="Process images with live progress feedback to keep users informed"
        code={`// image-processor-worker.js
self.onmessage = async function(e) {
  const { images, operation } = e.data;
  const total = images.length;
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    
    // Simulate image processing
    const processed = await processImage(image, operation);
    
    // Send progress update after each image
    self.postMessage({
      type: 'progress',
      current: i + 1,
      total: total,
      percentage: Math.round(((i + 1) / total) * 100),
      currentImage: image.name,
      processedImage: processed
    });
    
    // Small delay to simulate processing time
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Send completion message
  self.postMessage({
    type: 'complete',
    totalProcessed: total,
    message: \`Successfully processed \${total} images!\`
  });
};

async function processImage(image, operation) {
  // Your image processing logic here
  // (resize, compress, filter, etc.)
  return {
    ...image,
    processed: true,
    operation: operation
  };
}

// main.js
const imageWorker = new Worker('image-processor-worker.js');

// Handle messages from worker
imageWorker.onmessage = function(e) {
  if (e.data.type === 'progress') {
    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = e.data.percentage + '%';
    progressBar.textContent = \`\${e.data.percentage}%\`;
    
    // Update status text
    document.getElementById('status').textContent = 
      \`Processing \${e.data.current} of \${e.data.total}: \${e.data.currentImage}\`;
    
    console.log(\`Progress: \${e.data.percentage}%\`);
    
  } else if (e.data.type === 'complete') {
    // Processing finished
    console.log('✓ ' + e.data.message);
    showSuccessMessage(e.data.message);
    
    // Clean up
    imageWorker.terminate();
  }
};

// Start processing
const images = [
  { name: 'photo1.jpg', size: 2048 },
  { name: 'photo2.jpg', size: 1920 },
  { name: 'photo3.jpg', size: 3840 },
  // ... 100 more images
];

imageWorker.postMessage({
  images: images,
  operation: 'compress'
});

// User can still interact with the page while images are processing!`}
        language="javascript"
        colorTheme="blue"
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

slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  lastUpdate = Date.now();
  if (!isCalculating) {
    uiStatus.textContent = '✓ UI Responsive';
    uiStatus.style.color = '#16a34a';
  }
});

// Check if UI is frozen
setInterval(() => {
  if (isCalculating) {
    const timeSinceUpdate = Date.now() - lastUpdate;
    if (timeSinceUpdate > 500) {
      uiStatus.textContent = '⚠️ UI FROZEN!';
      uiStatus.style.color = '#dc2626';
    }
  }
}, 100);

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
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span><strong>Import scripts</strong> - importScripts() for libraries</span>
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
                  <span><strong>DOM</strong> - No document, no elements, no querySelector</span>
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
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Synchronous XHR</strong> - Only async requests allowed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span><strong>Canvas</strong> - No direct canvas manipulation</span>
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
                <li>• <strong>Background sync</strong> - Periodic data updates without interrupting user</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ When NOT to Use Workers</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Simple operations</strong> - Overhead isn't worth it for quick tasks</li>
                <li>• <strong>Frequent small messages</strong> - Message passing has overhead, batch instead</li>
                <li>• <strong>DOM manipulation</strong> - Workers can't touch the DOM at all</li>
                <li>• <strong>Tasks &lt; 50ms</strong> - Main thread is fine for quick operations</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tips</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Reuse workers</strong> - Create once, use multiple times. Don't create new workers repeatedly</li>
                <li>• <strong>Use Transferable Objects</strong> - For large data (ArrayBuffer), transfer ownership instead of copying</li>
                <li>• <strong>Always terminate</strong> - Call worker.terminate() when done to free memory</li>
                <li>• <strong>Handle errors</strong> - Always implement worker.onerror for graceful failure</li>
                <li>• <strong>Add timeouts</strong> - Prevent infinite loops by setting max execution time</li>
                <li>• <strong>Shared Workers</strong> - For multi-tab apps, use SharedWorker to share one worker instance</li>
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
                    Data processing, image manipulation, calculations. Anything that takes >50ms benefits from workers!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-300 dark:border-purple-700">
            <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Browser Support</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Web Workers have <strong>excellent browser support</strong> - available in all modern browsers (Chrome, Firefox, Safari, Edge). Use them confidently to build faster, more responsive web applications!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
