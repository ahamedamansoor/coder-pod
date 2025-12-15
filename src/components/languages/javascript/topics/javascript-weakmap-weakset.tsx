'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, AlertTriangle, CheckCircle2, Shield, Trash2 } from 'lucide-react';

export default function JavaScriptWeakMapWeakSet() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="Performance & Optimization"
        title="WeakMap & WeakSet"
        description="Weak references for memory-efficient data structures"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">What are WeakMap & WeakSet?</CardTitle>
          <CardDescription>Memory-efficient collections with automatic garbage collection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            WeakMap and WeakSet are special collections that hold <strong>"weak" references</strong> to objects. Unlike Map and Set, 
            they don't prevent their keys (WeakMap) or values (WeakSet) from being garbage collected. This makes them perfect for 
            storing metadata or tracking objects without causing memory leaks.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">WeakMap</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Key-value pairs where keys are objects with weak references
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/10 border border-teal-200 dark:border-teal-700">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">WeakSet</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Collection of objects with weak references (no duplicates)
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why "Weak"?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The reference is "weak" - if an object is only referenced by a WeakMap/WeakSet, the garbage collector 
              can remove it. This prevents memory leaks when storing data about objects!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">WeakMap vs Map</CardTitle>
          <CardDescription>Key differences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-100 dark:bg-emerald-900/30">
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Map</th>
                  <th className="p-3 text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">WeakMap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Key Types</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Any type</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-emerald-700 dark:text-emerald-300">Objects only</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Garbage Collection</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Prevents GC</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-emerald-700 dark:text-emerald-300">Allows GC</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Iterable</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Yes</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-700 dark:text-red-300">No</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300">Size Property</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Yes</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-700 dark:text-red-300">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="WeakMap: Storing Private Data"
        description="Store metadata about objects without memory leaks"
        language="javascript"
        colorTheme="emerald"
        code={`// Store private data about objects
const privateData = new WeakMap();

class User {
  constructor(name) {
    this.name = name;
    
    // Store private data
    privateData.set(this, {
      password: 'secret123',
      loginAttempts: 0,
      lastLogin: new Date()
    });
  }
  
  getPrivateData() {
    return privateData.get(this);
  }
  
  incrementLoginAttempts() {
    const data = privateData.get(this);
    data.loginAttempts++;
  }
}

const user = new User('Alice');
console.log(user.name); // 'Alice'
console.log(user.password); // undefined (private!)
console.log(user.getPrivateData());
// { password: 'secret123', loginAttempts: 0, lastLogin: ... }

// When user object is garbage collected,
// the private data is automatically removed!`}
      />

      <CodeSnippet
        title="WeakMap: Caching Expensive Computations"
        description="Memoization that doesn't cause memory leaks"
        language="javascript"
        colorTheme="teal"
        code={`const cache = new WeakMap();

function processData(obj) {
  // Check cache first
  if (cache.has(obj)) {
    console.log('Using cached result');
    return cache.get(obj);
  }
  
  // Expensive computation
  console.log('Computing...');
  const result = {
    processed: obj.value * 2,
    timestamp: Date.now()
  };
  
  // Store in cache
  cache.set(obj, result);
  return result;
}

const data1 = { value: 100 };
const data2 = { value: 200 };

console.log(processData(data1)); // Computing... { processed: 200, ... }
console.log(processData(data1)); // Using cached result
console.log(processData(data2)); // Computing... { processed: 400, ... }

// When data1 or data2 are no longer referenced,
// their cached results are automatically removed!`}
      />

      <CodeSnippet
        title="WeakMap: DOM Element Metadata"
        description="Store data about DOM elements without memory leaks"
        language="javascript"
        colorTheme="green"
        code={`const elementData = new WeakMap();

function attachClickCounter(element) {
  elementData.set(element, {
    clickCount: 0,
    firstClick: null
  });
  
  element.addEventListener('click', () => {
    const data = elementData.get(element);
    data.clickCount++;
    
    if (data.firstClick === null) {
      data.firstClick = new Date();
    }
    
    console.log('Clicks:', data.clickCount);
  });
}

// Example usage (in real browser environment)
const button = document.getElementById('myButton');
if (button) {
  attachClickCounter(button);
}

// When button is removed from DOM and no longer referenced,
// the metadata is automatically garbage collected!
// No memory leak even if we forget to clean up!`}
      />

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">WeakSet</CardTitle>
          <CardDescription>Tracking objects without preventing garbage collection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            WeakSet is similar to Set but only holds objects and uses weak references. It's perfect for tracking objects 
            without preventing them from being garbage collected.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Available Methods</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <code>add(obj)</code> - Add object</li>
                <li>• <code>has(obj)</code> - Check if exists</li>
                <li>• <code>delete(obj)</code> - Remove object</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Not Available</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• No <code>size</code> property</li>
                <li>• No <code>clear()</code> method</li>
                <li>• No iteration methods</li>
                <li>• Can't get all values</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="WeakSet: Marking Objects"
        description="Track which objects have been processed"
        language="javascript"
        colorTheme="emerald"
        code={`const processedItems = new WeakSet();

function processItem(item) {
  if (processedItems.has(item)) {
    console.log('Already processed, skipping');
    return;
  }
  
  console.log('Processing item:', item.name);
  // Do expensive processing...
  
  // Mark as processed
  processedItems.add(item);
}

const item1 = { name: 'Task 1', data: [] };
const item2 = { name: 'Task 2', data: [] };

processItem(item1); // Processing item: Task 1
processItem(item1); // Already processed, skipping
processItem(item2); // Processing item: Task 2

// When item1 or item2 are garbage collected,
// they're automatically removed from WeakSet!`}
      />

      <CodeSnippet
        title="WeakSet: Preventing Circular References"
        description="Detect circular references in object traversal"
        language="javascript"
        colorTheme="teal"
        code={`function deepClone(obj, visited = new WeakSet()) {
  // Check for circular reference
  if (visited.has(obj)) {
    throw new Error('Circular reference detected!');
  }
  
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Mark as visited
  visited.add(obj);
  
  // Clone object
  const clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], visited);
    }
  }
  
  return clone;
}

// Works fine
const normal = { a: 1, b: { c: 2 } };
console.log(deepClone(normal)); // { a: 1, b: { c: 2 } }

// Detects circular reference
const circular = { name: 'test' };
circular.self = circular;
try {
  deepClone(circular);
} catch (e) {
  console.log(e.message); // 'Circular reference detected!'
}`}
      />

      <CodeSnippet
        title="WeakSet: Tracking Active Objects"
        description="Monitor which objects are currently active"
        language="javascript"
        colorTheme="green"
        code={`const activeConnections = new WeakSet();

class DatabaseConnection {
  constructor(config) {
    this.config = config;
    this.connect();
  }
  
  connect() {
    console.log('Connecting to database...');
    activeConnections.add(this);
  }
  
  disconnect() {
    console.log('Disconnecting...');
    activeConnections.delete(this);
  }
  
  isActive() {
    return activeConnections.has(this);
  }
}

const conn1 = new DatabaseConnection({ host: 'localhost' });
const conn2 = new DatabaseConnection({ host: 'remote' });

console.log(conn1.isActive()); // true
console.log(conn2.isActive()); // true

conn1.disconnect();
console.log(conn1.isActive()); // false

// When connections are garbage collected,
// they're automatically removed from WeakSet!`}
      />

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Use Cases</CardTitle>
          <CardDescription>When to use WeakMap and WeakSet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                WeakMap Use Cases
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Storing private data for objects</li>
                <li>• Caching computed values</li>
                <li>• Storing metadata about DOM elements</li>
                <li>• Object-to-object mapping</li>
                <li>• Implementing private properties</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                WeakSet Use Cases
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Marking processed objects</li>
                <li>• Tracking visited nodes in graphs</li>
                <li>• Detecting circular references</li>
                <li>• Monitoring active connections</li>
                <li>• Object tagging without memory leaks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Limitations</CardTitle>
          <CardDescription>Important constraints to know</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✗ Only Objects as Keys/Values</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cannot use primitives (strings, numbers, booleans). Objects only!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✗ Not Iterable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cannot loop through entries, get size, or list all keys/values
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✗ No Clear Method</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cannot clear all entries at once (WeakSet only)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Non-Deterministic Cleanup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cannot predict exactly when garbage collection happens
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Weak References</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't prevent garbage collection of objects
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Memory Safe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for metadata without memory leaks
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Objects Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keys/values must be objects, not primitives
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-lime-200 dark:border-lime-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Limited API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Not iterable, no size - by design for memory safety
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
