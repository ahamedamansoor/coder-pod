'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, AlertTriangle, CheckCircle2, Database, Trash2, Zap } from 'lucide-react';

export default function JavaScriptMemoryManagement() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Database}
        category="Performance & Optimization"
        title="Memory Management"
        description="Garbage collection, memory leaks, and optimization techniques"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What is Memory Management?</CardTitle>
          <CardDescription>Understanding how JavaScript handles memory</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Memory management is the process of allocating, using, and freeing memory in your application. JavaScript handles this 
            automatically through <strong>garbage collection</strong>, but understanding how it works helps you write more efficient 
            code and avoid memory leaks.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Automatic</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                JavaScript automatically allocates memory when you create objects
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/10 border border-violet-200 dark:border-violet-700">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Garbage Collection</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Unused memory is automatically freed by the garbage collector
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border border-fuchsia-200 dark:border-fuchsia-700">
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Developer Friendly</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No need to manually allocate or free memory like in C/C++
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Memory Lifecycle</CardTitle>
          <CardDescription>How memory is allocated and freed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">1. Allocation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Memory is automatically allocated when you create variables, objects, arrays, or functions.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100"><code>{`const number = 42;              // Allocates memory for number
const string = "hello";         // Allocates memory for string
const obj = { name: "John" };   // Allocates memory for object
const arr = [1, 2, 3];          // Allocates memory for array`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-700">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">2. Usage</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Your code reads and writes to the allocated memory during execution.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100"><code>{`obj.age = 30;                   // Write to memory
console.log(obj.name);          // Read from memory
arr.push(4);                    // Modify memory`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">3. Garbage Collection</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                When memory is no longer needed (unreachable), the garbage collector automatically frees it.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100"><code>{`function createUser() {
  let user = { name: "Alice" }; // Memory allocated
  return user.name;
} // user object becomes unreachable -> garbage collected`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">How Garbage Collection Works</CardTitle>
          <CardDescription>Mark-and-Sweep algorithm explained</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Modern JavaScript engines use the <strong>Mark-and-Sweep</strong> algorithm. It works by identifying which objects 
            are still "reachable" from the root (global object, currently executing functions), and removing everything else.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Mark Phase
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                The garbage collector starts from the root and marks all reachable objects.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Global variables</li>
                <li>• Local variables in current functions</li>
                <li>• Variables in closures</li>
                <li>• Objects referenced by these</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/10 border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Sweep Phase
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Unmarked objects are removed from memory (garbage collected).
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Objects with no references</li>
                <li>• Circular references (both unreachable)</li>
                <li>• Objects in completed functions</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Reachability is Key</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              An object is "reachable" if there's a chain of references from the root to that object. If no path exists, 
              it's garbage collected. This is why circular references aren't a problem in modern JavaScript!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Common Memory Leaks</CardTitle>
          <CardDescription>Scenarios that prevent garbage collection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">1. Global Variables</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Global variables are never garbage collected because they're always reachable.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Accidental global
function createUser() {
  user = { name: "John" }; // No 'let' or 'const' - creates global!
}

// GOOD: Use proper scope
function createUser() {
  const user = { name: "John" }; // Local variable
  return user;
}`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">2. Forgotten Timers</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Timers keep references to their callbacks, preventing garbage collection.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Timer never cleared
const data = fetchLargeData();
setInterval(() => {
  console.log(data); // data stays in memory forever
}, 1000);

// GOOD: Clear timer when done
const data = fetchLargeData();
const timer = setInterval(() => {
  console.log(data);
}, 1000);

// Later:
clearInterval(timer); // Allows data to be garbage collected`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">3. Event Listeners Not Removed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Event listeners keep references to the DOM element and callback.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Listener not removed
const button = document.getElementById('btn');
const bigData = new Array(1000000);

button.addEventListener('click', () => {
  console.log(bigData.length); // bigData stays in memory
});

// Button removed from DOM but listener and bigData still in memory

// GOOD: Remove listener
const button = document.getElementById('btn');
const bigData = new Array(1000000);

function handleClick() {
  console.log(bigData.length);
}

button.addEventListener('click', handleClick);

// When done:
button.removeEventListener('click', handleClick);`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">4. Closures Holding Large Objects</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Closures keep references to their outer scope variables.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Entire object stays in memory
function createHandler() {
  const bigData = fetchLargeData(); // 10MB of data
  
  return function() {
    console.log(bigData.id); // Only need ID but entire object stays
  };
}

// GOOD: Extract only what you need
function createHandler() {
  const bigData = fetchLargeData();
  const id = bigData.id; // Extract just the ID
  
  return function() {
    console.log(id); // bigData can be garbage collected
  };
}`}</code></pre>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">5. Detached DOM Nodes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Storing references to removed DOM elements prevents garbage collection.
              </p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// BAD: Keeping reference to removed element
const elements = [];

function addElement() {
  const div = document.createElement('div');
  elements.push(div); // Store reference
  document.body.appendChild(div);
}

function removeElement() {
  const div = elements.pop();
  div.remove(); // Removed from DOM but still in array!
}

// GOOD: Clear references when removing
const elements = [];

function removeElement() {
  const div = elements.pop();
  div.remove();
  // Reference is gone, can be garbage collected
}`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Detecting Memory Leaks</CardTitle>
          <CardDescription>Tools and techniques</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Chrome DevTools Memory Profiler</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>Heap Snapshot</strong>: Take snapshots to see memory usage</li>
              <li>• <strong>Allocation Timeline</strong>: See memory allocations over time</li>
              <li>• <strong>Compare Snapshots</strong>: Find objects that weren't freed</li>
              <li>• <strong>Memory Panel</strong>: Real-time memory usage graph</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Manual memory monitoring
console.log('Memory:', performance.memory);
// {
//   usedJSHeapSize: 10000000,    // Current memory usage
//   totalJSHeapSize: 15000000,   // Total allocated
//   jsHeapSizeLimit: 2172649472  // Maximum available
// }

// Performance API
if (performance.memory) {
  const used = performance.memory.usedJSHeapSize / 1048576;
  console.log('Memory used:', used.toFixed(2), 'MB');
}`}</code></pre>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Signs of Memory Leaks</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              • Memory usage constantly increasing<br/>
              • Page becomes slower over time<br/>
              • Browser tab crashes or freezes<br/>
              • High memory usage in Task Manager
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Best Practices</CardTitle>
          <CardDescription>Writing memory-efficient code</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Use const and let</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Avoid accidental globals. Block-scoped variables are easier to garbage collect.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Clean up event listeners</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always remove event listeners when components unmount or elements are removed.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Clear timers and intervals</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use clearTimeout() and clearInterval() to prevent memory leaks.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Use WeakMap and WeakSet</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                For caching or metadata storage, weak references allow garbage collection.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Nullify large objects</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Set large objects to null when done to help garbage collector.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✓ Limit closure scope</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Extract only needed data before creating closures.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Automatic GC</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JavaScript automatically manages memory via garbage collection
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reachability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Objects are freed when they become unreachable
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Clean Up</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Remove listeners, clear timers, nullify references
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Monitor Memory</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use DevTools to detect and fix memory leaks
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
