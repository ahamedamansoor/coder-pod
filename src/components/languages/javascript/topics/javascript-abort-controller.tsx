'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  XCircle,
  CheckCircle,
  Shield,
  Lightbulb,
  StopCircle,
  Timer,
  Code2,
  Zap,
} from 'lucide-react';

export default function JavaScriptAbortController() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={StopCircle}
        category="JavaScript Advanced Async"
        title="AbortController"
        description="Cancel fetch requests and async operations"
        colorTheme="red"
      />

      {/* What is AbortController */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50/80 via-rose-50/50 to-pink-50/30 dark:from-red-950/20 dark:via-rose-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 text-white shadow-xl">
              <StopCircle className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-700 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                What is AbortController?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                AbortController lets you <strong className="text-red-700 dark:text-red-400">cancel ongoing operations</strong> like fetch requests, file uploads, or any async task. Perfect for when users navigate away, cancel searches, or when requests timeout!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900/30 dark:to-red-950/20 border-2 border-red-300 dark:border-red-700">
              <div className="text-3xl mb-2">🛑</div>
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Stop Requests</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Cancel fetch before completion</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-950/20 border-2 border-rose-300 dark:border-rose-700">
              <div className="text-3xl mb-2">⏱️</div>
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">Timeouts</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Abort slow operations</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-950/20 border-2 border-pink-300 dark:border-pink-700">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Search</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Cancel old autocomplete queries</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Simple Analogy</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Imagine ordering food delivery. If you change your mind, you call to <strong>cancel the order</strong>. AbortController is like that phone call - it stops the delivery (request) before it arrives!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Cancel Fetch Request"
        description="See AbortController in action - cancel a slow API call"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #ef4444 0%, #f43f5e 50%, #ec4899 100%); padding: 40px; border-radius: 16px; text-align: center; box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700;">🛑 AbortController Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px;">Start a slow request and cancel it anytime</p>
    
    <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 30px;">
      <button id="startBtn" style="padding: 16px 32px; background: white; color: #ef4444; border: none; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s;">
        ▶️ Start Request
      </button>
      
      <button id="cancelBtn" disabled style="padding: 16px 32px; background: #7f1d1d; color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s; opacity: 0.5;">
        🛑 Cancel Request
      </button>
    </div>
    
    <div id="output" style="padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px; min-height: 120px; backdrop-filter: blur(10px); text-align: left;"></div>
  </div>
</div>`}
        css={`button:not(:disabled):hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

button:not(:disabled):active {
  transform: translateY(-1px);
}

button:disabled {
  cursor: not-allowed;
}

#cancelBtn:not(:disabled) {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  opacity: 1;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.loading {
  animation: pulse 1.5s infinite;
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
}`}
        js={`let controller = null;
const startBtn = document.getElementById('startBtn');
const cancelBtn = document.getElementById('cancelBtn');
const output = document.getElementById('output');

function log(message, type = 'info') {
  const colors = {
    info: { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' },
    loading: { bg: '#fef3c7', border: '#f59e0b', text: '#78350f' },
    success: { bg: '#d1fae5', border: '#10b981', text: '#065f46' },
    error: { bg: '#fee2e2', border: '#ef4444', text: '#7f1d1d' },
    cancelled: { bg: '#f3e8ff', border: '#a855f7', text: '#581c87' }
  };
  
  const color = colors[type];
  output.innerHTML = \`
    <div style="padding: 16px; background: \${color.bg}; border-left: 4px solid \${color.border}; border-radius: 8px; color: \${color.text}; animation: slideIn 0.4s ease-out; \${type === 'loading' ? 'animation: pulse 1.5s infinite;' : ''}">
      <div style="font-weight: 600; margin-bottom: 4px;">\${message}</div>
      <div style="font-size: 12px; margin-top: 8px; opacity: 0.8;">Time: \${new Date().toLocaleTimeString()}</div>
    </div>
  \`;
}

startBtn.addEventListener('click', async () => {
  // Create new AbortController
  controller = new AbortController();
  
  // Update UI
  startBtn.disabled = true;
  cancelBtn.disabled = false;
  log('⏳ Request started... (simulating 5 second delay)', 'loading');
  
  try {
    // Simulate slow API with setTimeout
    await new Promise((resolve, reject) => {
      const timeoutId = setTimeout(resolve, 5000);
      
      // Listen for abort signal
      controller.signal.addEventListener('abort', () => {
        clearTimeout(timeoutId);
        reject(new DOMException('Request cancelled by user', 'AbortError'));
      });
    });
    
    // If we get here, request completed
    log('✅ Request completed successfully!', 'success');
    startBtn.disabled = false;
    cancelBtn.disabled = true;
    
  } catch (error) {
    if (error.name === 'AbortError') {
      log('🛑 Request was cancelled!', 'cancelled');
    } else {
      log(\`❌ Error: \${error.message}\`, 'error');
    }
    startBtn.disabled = false;
    cancelBtn.disabled = true;
  }
});

cancelBtn.addEventListener('click', () => {
  if (controller) {
    controller.abort(); // Cancel the request!
    console.log('🛑 controller.abort() called!');
  }
});

// Initial message
log('👆 Click "Start Request" to begin', 'info');`}
        colorTheme="red"
      />

      {/* How it Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How AbortController Works</CardTitle>
              <CardDescription>Three simple steps</CardDescription>
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
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Create Controller</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Create an AbortController instance
                </p>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  const controller = new AbortController();
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Pass Signal</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Pass controller.signal to the async operation
                </p>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  fetch(url, {'{'} signal: controller.signal {'}'})
                </code>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Call abort()</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  When you want to cancel, call controller.abort()
                </p>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  controller.abort(); // Cancels the operation!
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example 1: Basic Fetch Abort */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Cancel a Fetch Request</CardTitle>
          <CardDescription>Basic abort example</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Create abort controller
const controller = new AbortController();

// Start fetch with signal
fetch('https://api.example.com/data', {
  signal: controller.signal // ← Pass the signal
})
  .then(response => response.json())
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch was cancelled!');
    } else {
      console.error('Fetch error:', error);
    }
  });

// Cancel the request after 2 seconds
setTimeout(() => {
  controller.abort(); // ← Cancel!
  console.log('Request aborted');
}, 2000);

// If fetch takes longer than 2 seconds, it gets cancelled
// Output: "Request aborted" then "Fetch was cancelled!"`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 2: Search with Abort */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Cancel Previous Search</CardTitle>
          <CardDescription>Real-world search autocomplete</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Cancel previous search when user types new query
let currentController = null;

async function searchProducts(query) {
  // Cancel previous search if still running
  if (currentController) {
    currentController.abort();
    console.log('Cancelled previous search');
  }
  
  // Create new controller for this search
  currentController = new AbortController();
  
  try {
    const response = await fetch(
      \`https://api.example.com/search?q=\${query}\`,
      { signal: currentController.signal }
    );
    
    const results = await response.json();
    displayResults(results);
    
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Search cancelled - user typed something new');
    } else {
      console.error('Search error:', error);
    }
  }
}

// User types in search box
searchProducts('laptop');      // Request 1 starts
searchProducts('laptop char'); // Request 1 cancelled, Request 2 starts
searchProducts('laptop charger'); // Request 2 cancelled, Request 3 starts

// Only the last search completes!
// 🎯 Benefit: Don't waste bandwidth on outdated searches`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 3: Timeout */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Request Timeout</CardTitle>
          <CardDescription>Cancel requests that take too long</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Reusable function to fetch with timeout
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  
  // Set timeout to abort
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId); // Clear timeout if successful
    return await response.json();
    
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error(\`Request timeout after \${timeout}ms\`);
    }
    throw error;
  }
}

// Usage
try {
  const data = await fetchWithTimeout(
    'https://slow-api.example.com/data',
    3000 // 3 second timeout
  );
  console.log('Data:', data);
} catch (error) {
  console.error('Failed:', error.message);
}

// If request takes > 3 seconds: "Failed: Request timeout after 3000ms"`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 4: Multiple Operations */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Cancel Multiple Operations</CardTitle>
          <CardDescription>Use one controller for multiple requests</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Load page with multiple API calls
async function loadDashboard() {
  const controller = new AbortController();
  const signal = controller.signal;
  
  try {
    // Start all requests in parallel
    const [userData, postsData, commentsData] = await Promise.all([
      fetch('https://api.example.com/user', { signal }),
      fetch('https://api.example.com/posts', { signal }),
      fetch('https://api.example.com/comments', { signal })
    ]);
    
    const user = await userData.json();
    const posts = await postsData.json();
    const comments = await commentsData.json();
    
    displayDashboard(user, posts, comments);
    
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Dashboard load cancelled');
    } else {
      console.error('Error loading dashboard:', error);
    }
  }
  
  return controller; // Return so caller can abort
}

// Load dashboard
const dashboardController = await loadDashboard();

// User navigates away - cancel all requests at once!
window.addEventListener('beforeunload', () => {
  dashboardController.abort(); // Cancels ALL 3 requests!
});

// 🎯 One controller can abort multiple operations`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 5: Custom Async Function */}
      <Card>
        <CardHeader>
          <CardTitle>Example 5: Make Your Own Function Abortable</CardTitle>
          <CardDescription>Support abort in custom functions</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Custom async function that supports abort
async function processLargeFile(file, signal) {
  const chunks = splitIntoChunks(file);
  const results = [];
  
  for (let i = 0; i < chunks.length; i++) {
    // Check if aborted
    if (signal?.aborted) {
      throw new DOMException('Processing aborted', 'AbortError');
    }
    
    console.log(\`Processing chunk \${i + 1}/\${chunks.length}\`);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    results.push(processChunk(chunks[i]));
    
    // Listen for abort during processing
    signal?.addEventListener('abort', () => {
      throw new DOMException('Processing aborted', 'AbortError');
    });
  }
  
  return results;
}

// Usage
const controller = new AbortController();

processLargeFile(myFile, controller.signal)
  .then(results => {
    console.log('Processing complete!', results);
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('User cancelled processing');
    }
  });

// User clicks cancel button
document.getElementById('cancelBtn').addEventListener('click', () => {
  controller.abort();
});

// 🎯 Your custom functions can support abort too!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example 6: AbortSignal.timeout */}
      <Card>
        <CardHeader>
          <CardTitle>Example 6: AbortSignal.timeout (Modern)</CardTitle>
          <CardDescription>Built-in timeout helper</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Modern way: Create signal with timeout built-in
try {
  const response = await fetch('https://api.example.com/data', {
    signal: AbortSignal.timeout(5000) // Auto-abort after 5 seconds
  });
  
  const data = await response.json();
  console.log(data);
  
} catch (error) {
  if (error.name === 'TimeoutError' || error.name === 'AbortError') {
    console.error('Request timed out!');
  } else {
    console.error('Fetch failed:', error);
  }
}

// 🎯 Cleaner than manually creating controller + setTimeout!

// Can also combine multiple signals
const controller = new AbortController();

const combinedSignal = AbortSignal.any([
  controller.signal,           // Manual abort
  AbortSignal.timeout(10000)  // Or timeout
]);

fetch('https://api.example.com/data', { signal: combinedSignal });

// Aborts if EITHER condition happens:
// - You call controller.abort()
// - Or 10 seconds pass`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use AbortController</CardTitle>
              <CardDescription>Common scenarios</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Search Autocomplete</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cancel previous search when user types new query
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🚪 Page Navigation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cancel ongoing requests when user leaves page
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⏱️ Timeouts</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Abort requests that take too long
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📤 File Uploads</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Let users cancel uploads in progress
              </p>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">🔄 Infinite Scroll</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cancel loading next page if user scrolls back up
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using AbortController</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Always Check for AbortError</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Handle AbortError separately from real errors
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-2 block">
                if (error.name === 'AbortError') {'{'}/* user cancelled */{'}'} 
              </code>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Clean Up Controllers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Store references if you need to abort later, but don't keep old ones
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Use for Component Cleanup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                In React: abort requests when component unmounts
              </p>
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-2 block">
                useEffect(() =&gt; {'{'} return () =&gt; controller.abort(); {'}'}, []);
              </code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✅ One Controller = Multiple Ops</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                You can use same controller for multiple related operations
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't Reuse Controllers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Once aborted, create a new controller for next operation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/20 dark:via-rose-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Cancel Operations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stop fetch, uploads, or<br/>
                    Any async task
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pass Signal</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Give controller.signal<br/>
                    To fetch or async function
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Call abort()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    controller.abort()<br/>
                    Cancels immediately
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Search Use Case</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for autocomplete<br/>
                    Cancel old searches
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-950/30 dark:to-rose-950/30 border-red-300 dark:border-red-700">
            <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Save Bandwidth & Improve UX</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              AbortController <strong>improves performance</strong> by canceling unnecessary requests. Use it for search, navigation, timeouts, and cleanup. Always handle AbortError separately from real errors!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
