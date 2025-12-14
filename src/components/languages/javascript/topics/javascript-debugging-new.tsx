'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Bug,
  Terminal,
  Search,
  Timer,
} from 'lucide-react';

export default function JavaScriptDebuggingNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Bug}
        category="JavaScript Design Patterns"
        title="Debugging Techniques"
        description="Find and fix bugs efficiently"
        colorTheme="yellow"
      />

      {/* What is Debugging? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Debugging: Hunt Down Those Bugs! 🐛
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-cyan-700 dark:text-cyan-400">Debugging</strong> is the process of finding and fixing errors in your code. Master console methods, breakpoints, and browser DevTools to become a debugging ninja!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <Bug className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">Debugging Mindset</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Don't panic! Read error messages carefully, check your assumptions, and use the right tools. Every bug is solvable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Console Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Console API: Your First Debugging Tool</CardTitle>
              <CardDescription>Powerful methods beyond console.log()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <span className="text-xl">📝</span> Basic Output
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>console.log()</strong> - Standard output for debugging</li>
                <li><strong>console.error()</strong> - Red error messages with stack trace</li>
                <li><strong>console.warn()</strong> - Yellow warning messages</li>
                <li><strong>console.info()</strong> - Blue informational messages</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <span className="text-xl">📊</span> Data Visualization
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>console.table()</strong> - Display arrays/objects as tables</li>
                <li><strong>console.dir()</strong> - Show object properties interactively</li>
                <li><strong>console.group()</strong> - Group related log messages</li>
                <li><strong>console.groupEnd()</strong> - End grouped section</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400 flex items-center gap-2">
                <span className="text-xl">⏱️</span> Performance Tracking
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>console.time()</strong> - Start timing operation</li>
                <li><strong>console.timeEnd()</strong> - End timer and log duration</li>
                <li><strong>console.count()</strong> - Count how many times called</li>
                <li><strong>console.profile()</strong> - Start CPU profiling</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
              <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <span className="text-xl">🔍</span> Advanced Debugging
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>console.trace()</strong> - Show call stack at current point</li>
                <li><strong>console.assert()</strong> - Log only if condition is false</li>
                <li><strong>console.clear()</strong> - Clear all console output</li>
                <li><strong>Styled logs</strong> - Use %c for CSS styling in messages</li>
              </ul>
            </div>
          </div>
          
          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip: console.table()</AlertTitle>
            <AlertDescription>
              When debugging arrays of objects, use <code>console.table()</code> instead of <code>console.log()</code>. It displays data in an easy-to-read table format, making it much faster to spot issues in your data.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Advanced Console Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Advanced Console Features</CardTitle>
              <CardDescription>Make your debug output more informative</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2">
              <span className="text-xl">🎨</span> Styled Console Output
            </h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>Use the <code>%c</code> directive to apply CSS styles to console messages:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Color text for different message types (success, error, info)</li>
                <li>Add backgrounds and padding to create badges</li>
                <li>Change font size and weight for emphasis</li>
                <li>Create custom logger utilities with consistent styling</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
            <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 flex items-center gap-2">
              <span className="text-xl">📝</span> String Substitution
            </h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>Format console messages with placeholders:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code>%s</code> - String value</li>
                <li><code>%d</code> or <code>%i</code> - Integer value</li>
                <li><code>%f</code> - Floating-point value</li>
                <li><code>%o</code> - Object with expandable properties</li>
                <li><code>%O</code> - Object with generic JavaScript representation</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> Conditional Logging
            </h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>Control when logs appear in production:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use environment variables to toggle debug mode</li>
                <li>Short-circuit evaluation for conditional logs</li>
                <li>Create custom logger wrappers that check flags</li>
                <li>Remove logs automatically in production builds</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Debugger Statement */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Breakpoints & Debugger</CardTitle>
              <CardDescription>Pause execution and inspect state</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Console Logging */}
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 overflow-hidden">
              <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-3 border-b-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">Console Logging</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Adding logs everywhere
function calculateTotal(items) {
  console.log('Items:', items);
  
  let total = 0;
  console.log('Initial total:', total);
  
  for (const item of items) {
    console.log('Processing:', item);
    total += item.price;
    console.log('Running total:', total);
  }
  
  console.log('Final total:', total);
  return total;
}

// Logs clutter output
// Hard to track flow
// Must remove logs later`}</pre>
              </div>
            </div>

            {/* Debugger Statement */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Debugger Statement</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Pause execution at specific point
function calculateTotal(items) {
  debugger; // ⏸️ Execution pauses here
  
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  
  return total;
}

// When debugger hits:
// - Inspect all variables
// - Step through code line by line
// - See call stack
// - No need to remove later!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser DevTools */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Browser DevTools Mastery</CardTitle>
              <CardDescription>Your most powerful debugging environment</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800/30">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle>Opening DevTools</AlertTitle>
            <AlertDescription>
              <strong>Windows/Linux:</strong> F12 or Ctrl+Shift+I<br/>
              <strong>Mac:</strong> Cmd+Option+I<br/>
              <strong>Quick access:</strong> Right-click any element → "Inspect"
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <span className="text-xl">📂</span> Sources Tab
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Set breakpoints</strong> - Click line numbers</li>
                <li><strong>Conditional breakpoints</strong> - Right-click line</li>
                <li><strong>F10</strong> - Step over (don't enter functions)</li>
                <li><strong>F11</strong> - Step into (enter functions)</li>
                <li><strong>Shift+F11</strong> - Step out (exit function)</li>
                <li><strong>F8</strong> - Continue to next breakpoint</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <span className="text-xl">💻</span> Console Tab
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Execute live JavaScript</strong> - Run code instantly</li>
                <li><strong>Access scope variables</strong> - Inspect current state</li>
                <li><strong>Test expressions</strong> - Try fixes in real-time</li>
                <li><strong>Modify values</strong> - Change variables during debugging</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400 flex items-center gap-2">
                <span className="text-xl">🌐</span> Network Tab
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Monitor API calls</strong> - See all requests/responses</li>
                <li><strong>Inspect headers</strong> - Check request/response data</li>
                <li><strong>Throttle speed</strong> - Test slow connections</li>
                <li><strong>Disable cache</strong> - Force fresh requests</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
              <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <span className="text-xl">⚡</span> Performance Tab
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Record sessions</strong> - Capture performance data</li>
                <li><strong>Find bottlenecks</strong> - Identify slow operations</li>
                <li><strong>Analyze frame rate</strong> - Check animation smoothness</li>
                <li><strong>Memory profiling</strong> - Detect memory leaks</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> Advanced Breakpoint Types
            </h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <div>
                <p><strong>Conditional Breakpoints:</strong> Pause only when a condition is true (e.g., when a variable equals a specific value)</p>
              </div>
              <div>
                <p><strong>Logpoints:</strong> Log messages without pausing execution - like console.log but temporary</p>
              </div>
              <div>
                <p><strong>DOM Breakpoints:</strong> Pause when an element is modified, attributes change, or element is removed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Debugging Strategies */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Debugging Strategies</CardTitle>
              <CardDescription>Systematic approaches to finding bugs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
              <span className="text-xl">1️⃣</span> Read Error Messages Carefully
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`// Error: Cannot read property 'name' of undefined
// at line 45 in user.js

// What it tells you:
// 1. What went wrong: trying to access .name
// 2. On what: undefined object
// 3. Where: line 45 in user.js

// Action: Check if user exists before accessing
if (user && user.name) {
  console.log(user.name);
}`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
              <span className="text-xl">2️⃣</span> Divide and Conquer
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`// Bug somewhere in this chain
const result = fetchData()
  .then(processData)
  .then(validateData)
  .then(saveData);

// Add logs to narrow down
const result = fetchData()
  .then(data => {
    console.log('1. Fetched:', data);
    return processData(data);
  })
  .then(data => {
    console.log('2. Processed:', data);
    return validateData(data);
  })
  .then(data => {
    console.log('3. Validated:', data);
    return saveData(data);
  });

// Find which step fails`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
              <span className="text-xl">3️⃣</span> Rubber Duck Debugging
            </h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-900 p-4 rounded-lg space-y-2">
              <p><strong>Explain your code to a rubber duck (or colleague):</strong></p>
              <p>"This function should fetch user data, then..."</p>
              <p>"Wait... I'm assuming the data exists, but what if it's null?"</p>
              <p>"Ah! That's the bug!"</p>
              <br/>
              <p className="italic">🦆 Often, explaining the problem reveals the solution!</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-3 flex items-center gap-2">
              <span className="text-xl">4️⃣</span> Check Your Assumptions
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`// Assumption: API returns array
const users = await fetchUsers();
users.map(u => u.name); // Error!

// Verify assumption
console.log('Type:', typeof users);
console.log('Is array?', Array.isArray(users));
console.log('Value:', users);

// Reality: API returned object with 'data' property
const users = (await fetchUsers()).data;
users.map(u => u.name); // Works!`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
              <span className="text-xl">5️⃣</span> Reproduce Consistently
            </h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-900 p-4 rounded-lg space-y-2">
              <p><strong>Find exact steps to reproduce:</strong></p>
              <p>1. Open app in incognito mode</p>
              <p>2. Login as test user</p>
              <p>3. Click "Edit Profile"</p>
              <p>4. Change email to invalid format</p>
              <p>5. Click Save → Bug appears!</p>
              <br/>
              <p className="italic">🎯 Reproducible bugs are much easier to fix!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Debugging */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/30">
              <Timer className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <CardTitle>Performance Debugging</CardTitle>
              <CardDescription>Finding and fixing slow code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <span className="text-xl">⏱️</span> Timing APIs
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>console.time/timeEnd</strong> - Quick operation timing</li>
                <li><strong>performance.now()</strong> - High-precision timestamps</li>
                <li><strong>performance.mark()</strong> - Set named markers</li>
                <li><strong>performance.measure()</strong> - Calculate duration between marks</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2">
                <span className="text-xl">📊</span> Profiling Tools
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>console.profile()</strong> - Start CPU profiling</li>
                <li><strong>DevTools Profiler</strong> - Visual flame charts</li>
                <li><strong>Memory Profiler</strong> - Track heap snapshots</li>
                <li><strong>Performance.memory</strong> - Check memory usage</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400 flex items-center gap-2">
                <span className="text-xl">🔥</span> Performance Tab Workflow
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>1. Click Record</strong> - Start capturing</li>
                <li><strong>2. Perform actions</strong> - Use your app</li>
                <li><strong>3. Stop recording</strong> - Analyze results</li>
                <li><strong>4. Read flame chart</strong> - Tall bars = slow functions</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
              <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <span className="text-xl">💡</span> Lighthouse Audits
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Performance score</strong> - Overall rating (0-100)</li>
                <li><strong>Core Web Vitals</strong> - LCP, FID, CLS metrics</li>
                <li><strong>Opportunities</strong> - Suggested improvements</li>
                <li><strong>Diagnostics</strong> - Detailed analysis</li>
              </ul>
            </div>
          </div>
          
          <Alert className="bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/30">
            <Lightbulb className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle>Performance Best Practices</AlertTitle>
            <AlertDescription>
              Always measure before optimizing! Use profiling tools to identify actual bottlenecks rather than guessing. Focus on the slowest operations first - optimizing a function that takes 1ms won't help if another takes 500ms.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

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
                <span className="text-2xl">🖥️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Console Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    log, error, warn, table, group<br/>
                    time, count, assert, trace<br/>
                    Style output with %c
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏸️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Breakpoints</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    debugger statement<br/>
                    DevTools breakpoints<br/>
                    Step through code line by line
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Strategies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Read error messages<br/>
                    Divide and conquer<br/>
                    Check assumptions, reproduce bugs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    console.time() for timing<br/>
                    DevTools Performance tab<br/>
                    Lighthouse audits
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Master your browser's DevTools! They're incredibly powerful for debugging. Use breakpoints instead of console.log everywhere, and learn keyboard shortcuts (F10, F11, F8) for faster debugging.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
