'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Boxes } from 'lucide-react';

export default function JavaScriptPromiseWithResolvers() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Boxes}
        category="Modern JavaScript (ES2024)"
        title="Promise.withResolvers"
        description="Create promises with exposed resolve/reject functions!"
        colorTheme="emerald"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-xl">
              <Boxes className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent">
                What is Promise.withResolvers?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">Promise.withResolvers()</code> creates a promise 
                with <strong className="text-emerald-700 dark:text-emerald-400">exposed resolve and reject functions</strong>! 
                No more wrapping logic in the Promise constructor - you get the promise, resolve, and reject 
                <strong className="text-teal-700 dark:text-teal-400"> all separately</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Much More Flexible!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Perfect for cases where you need to resolve/reject a promise from outside the executor function!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Basic Usage"
        description="Old vs new way of creating controllable promises"
        language="javascript"
        colorTheme="emerald"
        code={`// Old way - resolve/reject trapped inside constructor
let resolveOld, rejectOld;
const promiseOld = new Promise((resolve, reject) => {
  resolveOld = resolve;
  rejectOld = reject;
});

// Later...
resolveOld('Success!');


// New way - Promise.withResolvers()
const { promise, resolve, reject } = Promise.withResolvers();

// Use them separately!
console.log(promise);  // Promise { <pending> }

// Resolve from anywhere
setTimeout(() => {
  resolve('Success!');
}, 1000);

promise.then(result => console.log(result));  // "Success!"


// Example with rejection
const { promise: p2, resolve: res2, reject: rej2 } = Promise.withResolvers();

try {
  // Some operation...
  throw new Error('Oops!');
} catch (error) {
  rej2(error);
}

p2.catch(err => console.error(err.message));  // "Oops!"`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for Promise.withResolvers"
        language="javascript"
        colorTheme="teal"
        code={`// 1. Event-based promise resolution
class EventWaiter {
  constructor() {
    this.eventPromises = new Map();
  }
  
  waitForEvent(eventName) {
    if (!this.eventPromises.has(eventName)) {
      const { promise, resolve } = Promise.withResolvers();
      this.eventPromises.set(eventName, { promise, resolve });
    }
    return this.eventPromises.get(eventName).promise;
  }
  
  emitEvent(eventName, data) {
    const entry = this.eventPromises.get(eventName);
    if (entry) {
      entry.resolve(data);
      this.eventPromises.delete(eventName);
    }
  }
}

const waiter = new EventWaiter();

// Wait for event
waiter.waitForEvent('dataLoaded').then(data => {
  console.log('Data received:', data);
});

// Later, emit the event
setTimeout(() => {
  waiter.emitEvent('dataLoaded', { id: 1, value: 'test' });
}, 1000);


// 2. Request queue with cancellation
class RequestQueue {
  constructor() {
    this.queue = [];
  }
  
  enqueue(task) {
    const { promise, resolve, reject } = Promise.withResolvers();
    
    this.queue.push({
      task,
      resolve,
      reject,
      cancel: () => reject(new Error('Cancelled'))
    });
    
    return promise;
  }
  
  async processNext() {
    if (this.queue.length === 0) return;
    
    const { task, resolve, reject } = this.queue.shift();
    
    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  }
}

const queue = new RequestQueue();

const promise1 = queue.enqueue(() => 
  fetch('/api/data').then(r => r.json())
);

promise1.then(data => console.log('Got data:', data));


// 3. Timeout wrapper
function withTimeout(promise, ms) {
  const { promise: timeoutPromise, reject } = Promise.withResolvers();
  
  const timeout = setTimeout(() => {
    reject(new Error(\`Timeout after \${ms}ms\`));
  }, ms);
  
  promise
    .then(result => {
      clearTimeout(timeout);
      return result;
    })
    .catch(err => {
      clearTimeout(timeout);
      throw err;
    });
  
  return Promise.race([promise, timeoutPromise]);
}

// Usage
withTimeout(
  fetch('/api/slow'),
  3000
).catch(err => console.error(err.message));


// 4. Manual promise control in class
class DataLoader {
  constructor() {
    const { promise, resolve, reject } = Promise.withResolvers();
    this.loadPromise = promise;
    this.resolve = resolve;
    this.reject = reject;
    this.loaded = false;
  }
  
  async load(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.loaded = true;
      this.resolve(data);
      return data;
    } catch (error) {
      this.reject(error);
      throw error;
    }
  }
  
  waitForLoad() {
    return this.loadPromise;
  }
}

const loader = new DataLoader();
loader.load('/api/config');

// Somewhere else in code
loader.waitForLoad().then(config => {
  console.log('Config loaded:', config);
});`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Old Way vs New Way</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Old Way</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Use promise, resolve, reject`}</pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Awkward variable hoisting pattern
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">✅ New Way</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`const { promise, resolve, reject } = 
  Promise.withResolvers();

// Use promise, resolve, reject`}</pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Clean, explicit destructuring
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
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Three Returns</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns promise, resolve, and reject
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">External Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Resolve/reject from outside executor
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Cleaner Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No more variable hoisting tricks
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-lime-200 dark:border-lime-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2024</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Flexible promise creation
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
