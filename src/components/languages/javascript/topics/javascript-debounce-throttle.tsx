'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Timer,
  Zap,
  Play,
  RotateCcw,
} from 'lucide-react';

export default function JavaScriptDebounceThrottle() {
  const [debounceCount, setDebounceCount] = useState(0);
  const [debounceExecutions, setDebounceExecutions] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const [throttleExecutions, setThrottleExecutions] = useState(0);
  const [normalCount, setNormalCount] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const throttleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const throttleLastRun = useRef<number>(0);

  const handleDebounceClick = () => {
    setDebounceCount(prev => prev + 1);
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      setDebounceExecutions(prev => prev + 1);
    }, 1000);
  };

  const handleThrottleClick = () => {
    setThrottleCount(prev => prev + 1);
    
    const now = Date.now();
    if (now - throttleLastRun.current >= 1000) {
      setThrottleExecutions(prev => prev + 1);
      throttleLastRun.current = now;
    }
  };

  const handleNormalClick = () => {
    setNormalCount(prev => prev + 1);
  };

  const startSimulation = () => {
    setIsSimulating(true);
    resetCounters();
    
    let clickCount = 0;
    const interval = setInterval(() => {
      if (clickCount >= 10) {
        clearInterval(interval);
        setIsSimulating(false);
        return;
      }
      
      handleDebounceClick();
      handleThrottleClick();
      handleNormalClick();
      clickCount++;
    }, 150);
  };

  const resetCounters = () => {
    setDebounceCount(0);
    setDebounceExecutions(0);
    setThrottleCount(0);
    setThrottleExecutions(0);
    setNormalCount(0);
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    throttleLastRun.current = 0;
  };

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Timer}
        category="JavaScript Performance"
        title="Debouncing & Throttling"
        description="Control how often functions execute for better performance"
        colorTheme="amber"
      />

      {/* What are they? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-fuchsia-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Optimize Performance with Smart Rate Limiting
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-purple-700 dark:text-purple-400">Debouncing</strong> and <strong className="text-pink-700 dark:text-pink-400">Throttling</strong> are techniques to limit how often a function executes. Perfect for search boxes, scroll handlers, and button clicks!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Debouncing</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Waits for a pause</strong> in events. Only executes after the user <strong>stops</strong> triggering events for a specified time.
              </p>
              <p className="text-xs mt-2 italic text-purple-700 dark:text-purple-400">
                💡 Like an elevator: waits for everyone to get in before closing the doors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <h4 className="font-semibold text-pink-900 dark:text-pink-100">Throttling</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Limits execution rate</strong>. Executes at most once per specified time period, regardless of how many times it's called.
              </p>
              <p className="text-xs mt-2 italic text-pink-700 dark:text-pink-400">
                💡 Like a heartbeat: happens regularly at a steady pace, no faster.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50/50 via-violet-50/30 to-purple-50/20 dark:from-indigo-950/10 dark:via-violet-950/5 dark:to-purple-950/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                <Play className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <CardTitle>Interactive Demo</CardTitle>
                <CardDescription>Click buttons rapidly to see the difference</CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={startSimulation}
                disabled={isSimulating}
                className="bg-indigo-500 hover:bg-indigo-600 text-white"
                size="sm"
              >
                <Play className="w-4 h-4 mr-1" />
                Auto Simulate
              </Button>
              <Button
                onClick={resetCounters}
                variant="outline"
                size="sm"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Normal */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <span className="text-xl">⚡</span> Normal (No Control)
              </h4>
              <Button
                onClick={handleNormalClick}
                className="w-full mb-3 bg-gray-500 hover:bg-gray-600"
              >
                Click Me!
              </Button>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-950">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Executions:</p>
                  <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">{normalCount}</p>
                </div>
              </div>
              <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                Executes every single time. Can cause performance issues!
              </p>
            </div>

            {/* Debounce */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <span className="text-xl">⏱️</span> Debounced (1s)
              </h4>
              <Button
                onClick={handleDebounceClick}
                className="w-full mb-3 bg-purple-500 hover:bg-purple-600"
              >
                Click Me!
              </Button>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                  <p className="text-xs text-purple-600 dark:text-purple-400">Clicks:</p>
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{debounceCount}</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <p className="text-xs text-purple-600 dark:text-purple-400">Executions:</p>
                  <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">{debounceExecutions}</p>
                </div>
              </div>
              <p className="text-xs mt-2 text-purple-600 dark:text-purple-400">
                Waits 1s after last click. Only executes after you stop clicking!
              </p>
            </div>

            {/* Throttle */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3 flex items-center gap-2">
                <span className="text-xl">⚡</span> Throttled (1s)
              </h4>
              <Button
                onClick={handleThrottleClick}
                className="w-full mb-3 bg-pink-500 hover:bg-pink-600"
              >
                Click Me!
              </Button>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-950/20">
                  <p className="text-xs text-pink-600 dark:text-pink-400">Clicks:</p>
                  <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">{throttleCount}</p>
                </div>
                <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30">
                  <p className="text-xs text-pink-600 dark:text-pink-400">Executions:</p>
                  <p className="text-3xl font-bold text-pink-700 dark:text-pink-300">{throttleExecutions}</p>
                </div>
              </div>
              <p className="text-xs mt-2 text-pink-600 dark:text-pink-400">
                Executes immediately, then max once per second!
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Try It Out!</AlertTitle>
            <AlertDescription>
              Click each button rapidly or use "Auto Simulate" to see the difference. Notice how debounce waits for you to stop, while throttle executes at regular intervals!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Visual Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Visual Comparison</CardTitle>
              <CardDescription>Understanding the difference</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Debounce Timeline */}
            <div className="p-5 rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                <Timer className="w-5 h-5" />
                Debounce Timeline
              </h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">0ms:</span>
                  <span className="text-gray-700 dark:text-gray-300">Event 1 → Timer starts (1000ms)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">200ms:</span>
                  <span className="text-gray-700 dark:text-gray-300">Event 2 → Timer resets (1000ms)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">500ms:</span>
                  <span className="text-gray-700 dark:text-gray-300">Event 3 → Timer resets (1000ms)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">1500ms:</span>
                  <span className="text-green-700 dark:text-green-300 font-bold">✓ Function executes!</span>
                </div>
              </div>
              <p className="text-xs mt-4 text-purple-700 dark:text-purple-400 italic">
                Only the last event matters. Timer keeps resetting until events stop.
              </p>
            </div>

            {/* Throttle Timeline */}
            <div className="p-5 rounded-xl border-2 border-pink-200 dark:border-pink-800/30 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Throttle Timeline
              </h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">0ms:</span>
                  <span className="text-green-700 dark:text-green-300 font-bold">Event 1 → ✓ Executes!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600 dark:text-pink-400">200ms:</span>
                  <span className="text-gray-700 dark:text-gray-300">Event 2 → Ignored (too soon)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600 dark:text-pink-400">500ms:</span>
                  <span className="text-gray-700 dark:text-gray-300">Event 3 → Ignored (too soon)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">1000ms:</span>
                  <span className="text-green-700 dark:text-green-300 font-bold">Event 4 → ✓ Executes!</span>
                </div>
              </div>
              <p className="text-xs mt-4 text-pink-700 dark:text-pink-400 italic">
                Executes at regular intervals. First event runs immediately.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Debounce Implementation */}
      <FrontendCodePreview
        title="Debounce: Search Input Example"
        html={`<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="color: #7c3aed; margin-bottom: 20px;">Search with Debounce</h2>
  <input 
    type="text" 
    id="search" 
    placeholder="Type to search..." 
    style="width: 100%; padding: 12px; font-size: 16px; border: 2px solid #a78bfa; border-radius: 8px; margin-bottom: 15px;"
  />
  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
    <div style="flex: 1; padding: 15px; background: #f3e8ff; border-radius: 8px; border: 2px solid #e9d5ff;">
      <div style="font-size: 12px; color: #7c3aed; margin-bottom: 5px;">Key Presses:</div>
      <div id="keypresses" style="font-size: 28px; font-weight: bold; color: #6b21a8;">0</div>
    </div>
    <div style="flex: 1; padding: 15px; background: #dcfce7; border-radius: 8px; border: 2px solid #bbf7d0;">
      <div style="font-size: 12px; color: #16a34a; margin-bottom: 5px;">API Calls:</div>
      <div id="apicalls" style="font-size: 28px; font-weight: bold; color: #15803d;">0</div>
    </div>
  </div>
  <div id="results" style="padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; min-height: 60px; color: #475569;">
    Start typing to see debounce in action...
  </div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

#search:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}`}
        js={`// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let keypresses = 0;
let apicalls = 0;

const performSearch = (query) => {
  apicalls++;
  document.getElementById('apicalls').textContent = apicalls;
  document.getElementById('results').innerHTML = 
    \`<strong style="color: #16a34a;">✓ Searching for:</strong> "\${query}"<br>
    <small style="color: #64748b;">Simulated API call #\${apicalls}</small>\`;
};

// Debounce with 500ms delay
const debouncedSearch = debounce(performSearch, 500);

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  keypresses++;
  document.getElementById('keypresses').textContent = keypresses;
  
  if (e.target.value) {
    document.getElementById('results').innerHTML = 
      '<span style="color: #f59e0b;">⏱️ Waiting for you to stop typing...</span>';
    debouncedSearch(e.target.value);
  } else {
    document.getElementById('results').textContent = 'Start typing to see debounce in action...';
  }
});`}
        colorTheme="amber"
      />

      {/* Throttle Implementation */}
      <FrontendCodePreview
        title="Throttle: Button Click Example"
        html={`<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="color: #ec4899; margin-bottom: 20px;">Button Click with Throttle</h2>
  <button 
    id="clickBtn" 
    style="width: 100%; padding: 20px; font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #ec4899, #f472b6); color: white; border: none; border-radius: 10px; cursor: pointer; margin-bottom: 15px;"
  >
    Click Me Rapidly!
  </button>
  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
    <div style="flex: 1; padding: 15px; background: #fce7f3; border-radius: 8px; border: 2px solid #fbcfe8;">
      <div style="font-size: 12px; color: #ec4899; margin-bottom: 5px;">Total Clicks:</div>
      <div id="totalclicks" style="font-size: 28px; font-weight: bold; color: #be185d;">0</div>
    </div>
    <div style="flex: 1; padding: 15px; background: #dcfce7; border-radius: 8px; border: 2px solid #bbf7d0;">
      <div style="font-size: 12px; color: #16a34a; margin-bottom: 5px;">Executions:</div>
      <div id="executions" style="font-size: 28px; font-weight: bold; color: #15803d;">0</div>
    </div>
  </div>
  <div id="status" style="padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; color: #475569; text-align: center;">
    Click the button rapidly to see throttle in action!
  </div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

#clickBtn:hover {
  background: linear-gradient(135deg, #db2777, #ec4899);
  transform: scale(1.02);
  transition: all 0.2s;
}

#clickBtn:active {
  transform: scale(0.98);
}`}
        js={`// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

let totalClicks = 0;
let executions = 0;

const handleClick = () => {
  executions++;
  document.getElementById('executions').textContent = executions;
  document.getElementById('status').innerHTML = 
    \`<strong style="color: #16a34a;">✓ Action executed!</strong><br>
    <small style="color: #64748b;">Execution #\${executions} - Next allowed in 1 second</small>\`;
};

// Throttle with 1000ms (1 second) limit
const throttledClick = throttle(handleClick, 1000);

const button = document.getElementById('clickBtn');
button.addEventListener('click', () => {
  totalClicks++;
  document.getElementById('totalclicks').textContent = totalClicks;
  throttledClick();
});`}
        colorTheme="amber"
      />

      {/* When to Use */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use Each</CardTitle>
              <CardDescription>Choosing the right technique</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Use Debounce When:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">🔍</span>
                  <span><strong>Search input</strong> - Wait for user to finish typing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">↔️</span>
                  <span><strong>Window resize</strong> - Wait for resize to complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✍️</span>
                  <span><strong>Form validation</strong> - Validate after user stops editing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">💾</span>
                  <span><strong>Auto-save</strong> - Save after user stops typing</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-xs text-purple-800 dark:text-purple-300">
                  <strong>Key idea:</strong> Only care about the final value after activity stops
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Use Throttle When:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">📜</span>
                  <span><strong>Scroll events</strong> - Update UI while scrolling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">🖱️</span>
                  <span><strong>Mouse movement</strong> - Track cursor position</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">🎮</span>
                  <span><strong>Game loops</strong> - Limit frame updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 dark:text-pink-400 mt-1">🔔</span>
                  <span><strong>Button clicks</strong> - Prevent rapid double-clicks</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                <p className="text-xs text-pink-800 dark:text-pink-300">
                  <strong>Key idea:</strong> Need regular updates during continuous activity
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <FrontendCodePreview
        title="Autocomplete with Debounce"
        html={`<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="color: #7c3aed; margin-bottom: 20px;">Search with Autocomplete</h2>
  <div style="position: relative;">
    <input 
      type="text" 
      id="autocomplete" 
      placeholder="Search for a programming language..." 
      style="width: 100%; padding: 14px 16px; font-size: 16px; border: 2px solid #a78bfa; border-radius: 10px; margin-bottom: 10px;"
    />
    <div id="dropdown" style="display: none; position: absolute; width: 100%; background: white; border: 2px solid #a78bfa; border-radius: 10px; margin-top: -10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-height: 250px; overflow-y: auto; z-index: 10;"></div>
  </div>
  <div style="display: flex; gap: 12px; margin-top: 20px;">
    <div style="flex: 1; padding: 12px; background: #f3e8ff; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #7c3aed; margin-bottom: 4px;">Keystrokes</div>
      <div id="keystrokes" style="font-size: 24px; font-weight: bold; color: #6b21a8;">0</div>
    </div>
    <div style="flex: 1; padding: 12px; background: #dcfce7; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #16a34a; margin-bottom: 4px;">API Calls</div>
      <div id="apicallcount" style="font-size: 24px; font-weight: bold; color: #15803d;">0</div>
    </div>
  </div>
  <div id="selectedItem" style="margin-top: 15px; padding: 12px; background: #f1f5f9; border-radius: 8px; min-height: 40px; color: #475569; font-size: 14px;"></div>
</div>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

#autocomplete:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
}

#dropdown::-webkit-scrollbar {
  width: 8px;
}

#dropdown::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

#dropdown::-webkit-scrollbar-thumb {
  background: #a78bfa;
  border-radius: 10px;
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #e9d5ff;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background: #f3e8ff;
  padding-left: 20px;
}

.dropdown-item:last-child {
  border-bottom: none;
}`}
        js={`// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Mock database of programming languages
const languages = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 
  'Go', 'Rust', 'Swift', 'Kotlin', 'PHP', 'Scala', 'Dart', 
  'Objective-C', 'R', 'Perl', 'Haskell', 'Elixir', 'Clojure'
];

let keystrokes = 0;
let apiCallCount = 0;

// Simulate API call
const searchLanguages = (query) => {
  apiCallCount++;
  document.getElementById('apicallcount').textContent = apiCallCount;
  
  if (!query) {
    document.getElementById('dropdown').style.display = 'none';
    return;
  }
  
  const results = languages.filter(lang => 
    lang.toLowerCase().includes(query.toLowerCase())
  );
  
  const dropdown = document.getElementById('dropdown');
  if (results.length > 0) {
    dropdown.innerHTML = results.map(lang => 
      \`<div class="dropdown-item" onclick="selectItem('\${lang}')">\${lang}</div>\`
    ).join('');
    dropdown.style.display = 'block';
  } else {
    dropdown.innerHTML = '<div style="padding: 12px; color: #94a3b8;">No results found</div>';
    dropdown.style.display = 'block';
  }
};

// Debounce search with 300ms delay
const debouncedSearch = debounce(searchLanguages, 300);

const input = document.getElementById('autocomplete');
input.addEventListener('input', (e) => {
  keystrokes++;
  document.getElementById('keystrokes').textContent = keystrokes;
  debouncedSearch(e.target.value);
});

// Select item function
window.selectItem = (item) => {
  document.getElementById('autocomplete').value = item;
  document.getElementById('dropdown').style.display = 'none';
  document.getElementById('selectedItem').innerHTML = 
    \`<strong style="color: #16a34a;">✓ Selected:</strong> \${item}\`;
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#autocomplete') && !e.target.closest('#dropdown')) {
    document.getElementById('dropdown').style.display = 'none';
  }
});`}
        colorTheme="amber"
      />

      <FrontendCodePreview
        title="Infinite Scroll with Throttle"
        html={`<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="color: #ec4899; margin-bottom: 20px;">Infinite Scroll Demo</h2>
  <div style="display: flex; gap: 12px; margin-bottom: 15px;">
    <div style="flex: 1; padding: 12px; background: #fce7f3; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #ec4899; margin-bottom: 4px;">Scroll Events</div>
      <div id="scrollevents" style="font-size: 24px; font-weight: bold; color: #be185d;">0</div>
    </div>
    <div style="flex: 1; padding: 12px; background: #dcfce7; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #16a34a; margin-bottom: 4px;">Load Checks</div>
      <div id="loadchecks" style="font-size: 24px; font-weight: bold; color: #15803d;">0</div>
    </div>
    <div style="flex: 1; padding: 12px; background: #dbeafe; border-radius: 8px; text-align: center;">
      <div style="font-size: 11px; color: #2563eb; margin-bottom: 4px;">Items Loaded</div>
      <div id="itemsloaded" style="font-size: 24px; font-weight: bold; color: #1e40af;">8</div>
    </div>
  </div>
  <div id="scrollContainer" style="height: 400px; overflow-y: auto; border: 2px solid #f472b6; border-radius: 10px; padding: 15px; background: #fdf2f8;">
    <div id="itemsList"></div>
    <div id="loader" style="display: none; text-align: center; padding: 20px; color: #ec4899; font-weight: bold;">
      <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f9a8d4; border-top-color: #ec4899; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <div style="margin-top: 10px;">Loading more items...</div>
    </div>
  </div>
  <div style="margin-top: 15px; padding: 12px; background: #f1f5f9; border-radius: 8px; text-align: center; color: #475569; font-size: 13px;">
    Scroll down to load more items! Throttle limits checks to once per 500ms.
  </div>
</div>

<style>
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>`}
        css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
}

#scrollContainer::-webkit-scrollbar {
  width: 10px;
}

#scrollContainer::-webkit-scrollbar-track {
  background: #fce7f3;
  border-radius: 10px;
}

#scrollContainer::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ec4899, #f472b6);
  border-radius: 10px;
}

#scrollContainer::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #db2777, #ec4899);
}

.item {
  padding: 16px;
  margin-bottom: 12px;
  background: white;
  border: 2px solid #fbcfe8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.item:hover {
  transform: translateX(4px);
  border-color: #f472b6;
  box-shadow: 0 4px 8px rgba(236, 72, 153, 0.15);
}

.item-title {
  font-size: 16px;
  font-weight: bold;
  color: #be185d;
  margin-bottom: 6px;
}

.item-desc {
  font-size: 13px;
  color: #64748b;
}`}
        js={`// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Mock data generator
const itemCategories = ['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Vue', 'Angular', 'Node.js'];
const descriptions = [
  'Advanced concepts and techniques',
  'Best practices and patterns',
  'Performance optimization tips',
  'Common pitfalls to avoid',
  'Real-world examples',
  'Modern development workflows'
];

let itemCount = 8;
let scrollEventCount = 0;
let loadCheckCount = 0;
let isLoading = false;

// Initialize with some items
const container = document.getElementById('itemsList');
for (let i = 1; i <= itemCount; i++) {
  const item = createItem(i);
  container.appendChild(item);
}

function createItem(num) {
  const div = document.createElement('div');
  div.className = 'item';
  const category = itemCategories[num % itemCategories.length];
  const desc = descriptions[num % descriptions.length];
  div.innerHTML = \`
    <div class="item-title">Item #\${num}: \${category}</div>
    <div class="item-desc">\${desc}</div>
  \`;
  return div;
}

// Load more items
const loadMoreItems = () => {
  loadCheckCount++;
  document.getElementById('loadchecks').textContent = loadCheckCount;
  
  const scrollContainer = document.getElementById('scrollContainer');
  const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
  const scrollHeight = scrollContainer.scrollHeight;
  
  // Check if near bottom (within 100px) and not already loading
  if (scrollPosition >= scrollHeight - 100 && !isLoading) {
    isLoading = true;
    document.getElementById('loader').style.display = 'block';
    
    // Simulate API delay
    setTimeout(() => {
      // Add 4 new items
      for (let i = 0; i < 4; i++) {
        itemCount++;
        const item = createItem(itemCount);
        container.appendChild(item);
      }
      
      document.getElementById('itemsloaded').textContent = itemCount;
      document.getElementById('loader').style.display = 'none';
      isLoading = false;
    }, 800);
  }
};

// Throttle with 500ms limit
const throttledScroll = throttle(loadMoreItems, 500);

// Track scroll events
const scrollContainer = document.getElementById('scrollContainer');
scrollContainer.addEventListener('scroll', () => {
  scrollEventCount++;
  document.getElementById('scrollevents').textContent = scrollEventCount;
  throttledScroll();
});`}
        colorTheme="amber"
      />

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
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Debounce</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Waits for pause in events<br/>
                    Executes after delay<br/>
                    Perfect for search, validation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Throttle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Limits execution rate<br/>
                    Regular intervals<br/>
                    Perfect for scroll, mousemove
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reduces function calls<br/>
                    Saves server requests<br/>
                    Improves responsiveness
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Simple Rule</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Debounce: Final value matters<br/>
                    Throttle: Regular updates needed<br/>
                    Both: Prevent performance issues
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Start with debounce for user input (search, forms) and throttle for continuous events (scroll, resize). Test with the interactive demo above to understand the behavior before implementing!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
