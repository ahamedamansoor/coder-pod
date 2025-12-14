'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Sparkles,
  Clock,
  CheckCircle,
  Code2,
  Lightbulb,
  Zap,
  Timer,
  Coffee,
  Battery,
} from 'lucide-react';

export default function JavaScriptRequestIdleCallback() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Coffee}
        category="JavaScript Browser APIs"
        title="requestIdleCallback"
        description="Run tasks when browser is idle - smart background processing"
        colorTheme="orange"
      />

      {/* What is requestIdleCallback */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-yellow-50/30 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-xl">
              <Coffee className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                What is requestIdleCallback?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="text-sm bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">requestIdleCallback</code> runs your code when the browser has <strong className="text-orange-700 dark:text-orange-400">free time</strong> (idle periods). 
                Perfect for <strong className="text-amber-700 dark:text-amber-400">non-urgent tasks</strong> like analytics, prefetching, or background processing without <strong className="text-yellow-700 dark:text-yellow-400">blocking the UI</strong>!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-950/20 border-2 border-orange-300 dark:border-orange-700">
              <div className="text-3xl mb-2">☕</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Idle Time</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Runs when browser isn't busy</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-950/20 border-2 border-amber-300 dark:border-amber-700">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Low Priority</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Non-urgent background tasks</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-950/20 border-2 border-yellow-300 dark:border-yellow-700">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">No Jank</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Won't block user interactions</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When Browser is "Idle"</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              After rendering a frame (60fps = ~16ms per frame), if there's time left before the next frame, that's <strong>idle time</strong>. 
              Browser says "I have 10ms free, run your low-priority task!"
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <FrontendCodePreview
        title="🎮 Interactive: Idle Task Scheduling"
        description="See how requestIdleCallback runs tasks during idle time"
        html={`<div style="max-width: 700px; margin: 0 auto; font-family: 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #f97316 0%, #f59e0b 50%, #eab308 100%); padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);">
    <h2 style="color: white; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; text-align: center;">☕ Idle Callback Demo</h2>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 0 0 30px 0; font-size: 15px; text-align: center;">Schedule tasks to run during browser idle time</p>
    
    <div style="background: rgba(255, 255, 255, 0.95); padding: 24px; border-radius: 12px; backdrop-filter: blur(10px);">
      <!-- Task Buttons -->
      <div style="display: grid; gap: 12px; margin-bottom: 20px;">
        <button id="urgentBtn" style="padding: 14px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          🔥 Urgent Task (Immediate)
        </button>
        <button id="idleBtn" style="padding: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          ☕ Idle Task (When Free)
        </button>
        <button id="batchBtn" style="padding: 14px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px;">
          📦 Schedule 10 Idle Tasks
        </button>
      </div>
      
      <!-- Status Display -->
      <div id="status" style="padding: 16px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 8px; border-left: 4px solid #f59e0b; min-height: 120px; margin-bottom: 16px;"></div>
      
      <!-- Task Queue -->
      <div id="queue" style="font-size: 12px; color: #6b7280;"></div>
    </div>
  </div>
</div>`}
        css={`button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

button:active {
  transform: translateY(0);
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
}

.task-item {
  animation: slideIn 0.3s ease-out;
}`}
        js={`const status = document.getElementById('status');
const queue = document.getElementById('queue');

let taskCount = 0;
let completedTasks = 0;
let pendingTasks = [];

function updateStatus(message, type = 'info') {
  const colors = {
    urgent: { bg: '#fee2e2', border: '#ef4444', text: '#7f1d1d' },
    idle: { bg: '#d1fae5', border: '#10b981', text: '#065f46' },
    info: { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' }
  };
  
  const color = colors[type];
  status.innerHTML = \`
    <div style="padding: 12px; background: \${color.bg}; border-left: 4px solid \${color.border}; border-radius: 6px; color: \${color.text}; margin-bottom: 8px;">
      <div style="font-weight: 600; margin-bottom: 4px;">\${message}</div>
      <div style="font-size: 12px; opacity: 0.8;">Time: \${new Date().toLocaleTimeString()}</div>
    </div>
    <div style="margin-top: 12px; display: flex; justify-content: space-around; font-size: 14px; font-weight: 600;">
      <div>
        <div style="color: #6b7280; font-size: 11px;">TOTAL TASKS</div>
        <div style="font-size: 20px; color: #f59e0b;">\${taskCount}</div>
      </div>
      <div>
        <div style="color: #6b7280; font-size: 11px;">COMPLETED</div>
        <div style="font-size: 20px; color: #10b981;">\${completedTasks}</div>
      </div>
      <div>
        <div style="color: #6b7280; font-size: 11px;">PENDING</div>
        <div style="font-size: 20px; color: #ef4444;">\${pendingTasks.length}</div>
      </div>
    </div>
  \`;
}

function updateQueue() {
  if (pendingTasks.length === 0) {
    queue.innerHTML = '<div style="text-align: center; color: #9ca3af; padding: 8px;">No pending tasks</div>';
    return;
  }
  
  queue.innerHTML = \`
    <div style="font-weight: 600; margin-bottom: 4px; color: #374151;">📋 Pending Tasks:</div>
    \${pendingTasks.map((task, i) => \`
      <div class="task-item" style="padding: 4px 8px; background: white; border-radius: 4px; margin-bottom: 4px; border-left: 3px solid #f59e0b;">
        \${i + 1}. \${task}
      </div>
    \`).join('')}
  \`;
}

// Urgent task - runs immediately
document.getElementById('urgentBtn').addEventListener('click', () => {
  taskCount++;
  updateStatus('🔥 Running urgent task immediately...', 'urgent');
  
  // Simulate work (this blocks the UI!)
  const start = Date.now();
  while (Date.now() - start < 100) {} // Block for 100ms
  
  completedTasks++;
  updateStatus('✅ Urgent task completed (blocked UI for 100ms)', 'urgent');
  console.log('Urgent task: Ran immediately, blocked main thread');
});

// Idle task - runs when browser is free
document.getElementById('idleBtn').addEventListener('click', () => {
  taskCount++;
  const taskName = \`Idle Task #\${taskCount}\`;
  pendingTasks.push(taskName);
  
  updateStatus(\`☕ Scheduled: \${taskName} (waiting for idle time...)\`, 'info');
  updateQueue();
  
  requestIdleCallback((deadline) => {
    // Check how much time we have
    const timeRemaining = deadline.timeRemaining();
    
    updateStatus(\`🎯 Running: \${taskName} (Browser gave us \${timeRemaining.toFixed(1)}ms)\`, 'idle');
    
    // Simulate work
    const start = Date.now();
    while (Date.now() - start < 50) {} // Work for 50ms
    
    completedTasks++;
    pendingTasks = pendingTasks.filter(t => t !== taskName);
    
    updateStatus(\`✅ Completed: \${taskName} during idle time\`, 'idle');
    updateQueue();
    
    console.log(\`Idle task: Ran during idle with \${timeRemaining.toFixed(1)}ms available\`);
  });
});

// Batch idle tasks
document.getElementById('batchBtn').addEventListener('click', () => {
  updateStatus('📦 Scheduling 10 idle tasks...', 'info');
  
  for (let i = 0; i < 10; i++) {
    taskCount++;
    const taskName = \`Batch Task #\${i + 1}\`;
    pendingTasks.push(taskName);
    
    requestIdleCallback((deadline) => {
      const timeRemaining = deadline.timeRemaining();
      
      // Simulate work (20ms)
      const start = Date.now();
      while (Date.now() - start < 20) {}
      
      completedTasks++;
      pendingTasks = pendingTasks.filter(t => t !== taskName);
      
      updateStatus(\`✅ \${taskName} done (\${timeRemaining.toFixed(1)}ms available)\`, 'idle');
      updateQueue();
      
      console.log(\`\${taskName} completed during idle period\`);
    });
  }
  
  updateQueue();
  updateStatus('📦 10 tasks scheduled! Watch them complete during idle time', 'info');
});

// Initial message
updateStatus('👆 Click buttons to see how idle callbacks work', 'info');
console.log('✅ requestIdleCallback demo ready!');`}
        colorTheme="orange"
      />

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Code2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>Schedule low-priority tasks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-100/50 dark:from-orange-950/20 dark:to-amber-900/10 border-2 border-orange-200 dark:border-orange-800/30">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Simple Idle Callback
            </h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Schedule a task to run during idle time
requestIdleCallback((deadline) => {
  // Check how much time you have
  console.log('Time remaining:', deadline.timeRemaining(), 'ms');
  
  // Do low-priority work
  processAnalytics();
  prefetchData();
  cleanupCache();
  
  // Check if we ran out of time
  if (deadline.didTimeout) {
    console.log('Task was forced to run (timeout reached)');
  }
});

// With timeout option (max wait time)
requestIdleCallback((deadline) => {
  doBackgroundWork();
}, { timeout: 2000 }); // Run within 2 seconds even if not idle

// Cancel if needed
const callbackId = requestIdleCallback(myTask);
cancelIdleCallback(callbackId);`}</code>
            </pre>
          </div>

          <Alert className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/30">
            <Timer className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">deadline.timeRemaining()</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Returns how many milliseconds are left in the current idle period. Use this to decide if you have time to do more work!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Chunking Work */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Chunking Large Tasks</CardTitle>
              <CardDescription>Split work across multiple idle periods</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-100/50 dark:from-amber-950/20 dark:to-yellow-900/10 border-2 border-amber-200 dark:border-amber-800/30">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Process Large Array</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Process 10,000 items without blocking UI
const items = Array.from({ length: 10000 }, (_, i) => i);
let currentIndex = 0;

function processChunk(deadline) {
  // Process items while we have time (or at least 1ms)
  while (deadline.timeRemaining() > 1 && currentIndex < items.length) {
    // Process one item
    const item = items[currentIndex];
    processItem(item);
    currentIndex++;
  }
  
  // If more items remain, schedule another chunk
  if (currentIndex < items.length) {
    console.log(\`Processed \${currentIndex}/\${items.length}\`);
    requestIdleCallback(processChunk);
  } else {
    console.log('✅ All items processed!');
  }
}

// Start processing
requestIdleCallback(processChunk);

// 🎯 Benefits:
// - UI stays responsive
// - Work happens in small chunks
// - Browser decides when to run
// - No janky scrolling or interactions`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-100/50 dark:from-yellow-950/20 dark:to-orange-900/10 border-2 border-yellow-200 dark:border-yellow-800/30">
            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Task Queue Pattern</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Queue for low-priority tasks
const taskQueue = [];

function addTask(task) {
  taskQueue.push(task);
  
  // Schedule processing if not already scheduled
  if (!isProcessing) {
    scheduleTaskProcessing();
  }
}

let isProcessing = false;

function scheduleTaskProcessing() {
  isProcessing = true;
  
  requestIdleCallback((deadline) => {
    // Process tasks while we have time
    while (deadline.timeRemaining() > 0 && taskQueue.length > 0) {
      const task = taskQueue.shift();
      task();
    }
    
    // If more tasks remain, schedule another round
    if (taskQueue.length > 0) {
      scheduleTaskProcessing();
    } else {
      isProcessing = false;
    }
  });
}

// Usage
addTask(() => sendAnalytics());
addTask(() => prefetchImage('/img.jpg'));
addTask(() => cacheData());

// All tasks run during idle time!`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Battery className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Real-World Use Cases</CardTitle>
              <CardDescription>Practical applications</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100/50 dark:from-blue-950/20 dark:to-sky-900/10 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">1. Analytics & Logging</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Send analytics during idle time
function trackEvent(event) {
  requestIdleCallback(() => {
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify(event)
    });
  });
}

// User clicks button - immediate UI response
button.addEventListener('click', () => {
  // Update UI immediately
  button.textContent = 'Clicked!';
  
  // Track analytics during idle time (no blocking)
  trackEvent({ action: 'button_click', timestamp: Date.now() });
});

// 🎯 UI updates instantly, tracking happens later`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">2. Prefetching Data</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Prefetch next pages during idle time
const pagesToPrefetch = ['/page2', '/page3', '/page4'];

function prefetchPages() {
  requestIdleCallback((deadline) => {
    while (deadline.timeRemaining() > 0 && pagesToPrefetch.length > 0) {
      const page = pagesToPrefetch.shift();
      
      // Prefetch the page
      fetch(page)
        .then(response => response.text())
        .then(html => {
          // Cache it
          cache.put(page, html);
          console.log(\`Prefetched: \${page}\`);
        });
    }
    
    // More pages? Schedule another round
    if (pagesToPrefetch.length > 0) {
      prefetchPages();
    }
  });
}

// Start prefetching when page loads
window.addEventListener('load', prefetchPages);`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">3. Cache Cleanup</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Clean up old cache entries during idle time
function cleanupCache() {
  requestIdleCallback((deadline) => {
    const cache = getCacheEntries();
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    for (const [key, entry] of cache.entries()) {
      // Stop if we're out of time
      if (deadline.timeRemaining() < 1) {
        // Schedule continuation
        requestIdleCallback(cleanupCache);
        break;
      }
      
      // Remove old entries
      if (now - entry.timestamp > maxAge) {
        cache.delete(key);
        console.log(\`Removed old cache: \${key}\`);
      }
    }
  });
}

// Run cleanup periodically
setInterval(cleanupCache, 5 * 60 * 1000); // Every 5 minutes`}</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-red-100/50 dark:from-orange-950/20 dark:to-red-900/10 border-2 border-orange-200 dark:border-orange-800/30">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">4. Lazy Image Loading</h4>
            <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto text-sm">
              <code>{`// Load below-the-fold images during idle time
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  requestIdleCallback((deadline) => {
    for (const img of images) {
      // Stop if out of time
      if (deadline.timeRemaining() < 10) {
        // Continue later
        if (images.length > 0) {
          requestIdleCallback(lazyLoadImages);
        }
        break;
      }
      
      // Load the image
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      console.log('Loaded image during idle time');
    }
  });
}

// Start lazy loading after page load
window.addEventListener('load', () => {
  setTimeout(lazyLoadImages, 1000); // After initial render
});`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support & Limitations */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Important Notes & Limitations</CardTitle>
              <CardDescription>What you need to know</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Perfect For</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• Analytics & tracking</li>
              <li>• Prefetching data/images</li>
              <li>• Cache management</li>
              <li>• Background processing</li>
              <li>• Non-urgent computations</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ NOT For</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• Urgent UI updates</li>
              <li>• Animation frames (use requestAnimationFrame)</li>
              <li>• Time-critical operations</li>
              <li>• Guaranteed execution timing</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Browser Support</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Chrome 47+, Edge 79+, Firefox 55+. <strong>Not supported in Safari</strong> (use polyfill or fallback to setTimeout)
            </p>
            <pre className="text-xs mt-2 p-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded"><code>{`// Polyfill for Safari
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function(cb) {
    return setTimeout(cb, 1);
  };
}`}</code></pre>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Best Practice</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Always check <code className="text-xs bg-white dark:bg-blue-900 px-1.5 py-0.5 rounded">deadline.timeRemaining()</code> and break work into small chunks. 
              Long tasks should be split across multiple idle callbacks!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use requestIdleCallback</CardTitle>
              <CardDescription>Perfect scenarios</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">Analytics</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Send tracking events without blocking user interactions
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Prefetching</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load next pages, images, or data in the background
              </p>
            </div>

            <div className="p-5 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="text-3xl mb-3">🗑️</div>
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Cleanup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Remove old cache, expired data, or temporary files
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Background Sync</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Process queued operations when browser is free
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
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
                <span className="text-3xl">☕</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Idle Time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Runs when browser has free time
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Low Priority</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Non-urgent background tasks only
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⏱️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">timeRemaining()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check available time in idle period
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No UI Block</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keeps interface smooth and responsive
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
