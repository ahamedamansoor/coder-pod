'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Shield, AlertTriangle } from 'lucide-react';

export default function JavaScriptWeakSet() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript Collections"
        title="WeakSet"
        description="Store unique objects with automatic memory cleanup!"
        colorTheme="indigo"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-violet-50/30 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-xl">
              <Shield className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                What is a WeakSet?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of WeakSet as a <strong className="text-indigo-700 dark:text-indigo-400">self-cleaning membership list</strong>! 
                It's like a Set but only stores <strong className="text-purple-700 dark:text-purple-400">objects</strong>, and when those objects 
                are no longer needed in your code, they're <strong className="text-violet-700 dark:text-violet-400">automatically removed</strong> from the WeakSet. 
                Perfect for tracking objects without preventing garbage collection!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use WeakSet?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Regular Sets keep objects in memory forever. WeakSet holds objects <strong>"weakly"</strong> - 
              when an object is no longer used elsewhere, it's automatically removed. No memory leaks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Key Differences from Set
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl mb-3">🔑</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Objects Only</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can <strong>only</strong> store objects. No strings, numbers, or other primitives allowed!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">🧹</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Auto Cleanup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When an object is garbage collected, it's automatically removed from WeakSet!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/10 border-2 border-violet-200 dark:border-violet-800">
              <div className="text-4xl mb-3">🚫</div>
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Not Iterable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can't loop through values! No <code className="text-xs bg-violet-100 dark:bg-violet-900/30 px-1 rounded">size</code>, 
                no <code className="text-xs bg-violet-100 dark:bg-violet-900/30 px-1 rounded">forEach()</code>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="text-4xl mb-3">💾</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Memory Safe</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for tracking objects without preventing them from being garbage collected!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Available Methods (Limited!)</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-600 dark:text-blue-400">➕</span>
                  <code className="font-bold text-blue-900 dark:text-blue-100">add(object)</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Add an object</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-600 dark:text-blue-400">🔍</span>
                  <code className="font-bold text-blue-900 dark:text-blue-100">has(object)</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Check if exists</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-600 dark:text-blue-400">❌</span>
                  <code className="font-bold text-blue-900 dark:text-blue-100">delete(object)</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">Remove object</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Tracking Processed Objects"
        description="Mark objects as processed without memory leaks"
        language="javascript"
        colorTheme="indigo"
        code={`const processedItems = new WeakSet();

function processOrder(order) {
  // Check if already processed
  if (processedItems.has(order)) {
    console.log('Order already processed!');
    return;
  }
  
  // Process the order
  console.log(\`Processing order #\${order.id}\`);
  // ... do processing ...
  
  // Mark as processed
  processedItems.add(order);
}

const order1 = { id: 101, amount: 250 };
const order2 = { id: 102, amount: 180 };

processOrder(order1);  // Processing order #101
processOrder(order1);  // Order already processed!
processOrder(order2);  // Processing order #102

// When order1/order2 are no longer referenced,
// they're automatically removed from processedItems!`}
      />

      <CodeSnippet
        title="Example 2: Marking DOM Elements"
        description="Track which elements have been initialized"
        language="javascript"
        colorTheme="purple"
        code={`const initializedElements = new WeakSet();

function initializeWidget(element) {
  // Check if already initialized
  if (initializedElements.has(element)) {
    console.log('Widget already initialized');
    return;
  }
  
  // Initialize the widget
  console.log('Initializing widget...');
  element.classList.add('widget-active');
  element.addEventListener('click', handleClick);
  
  // Mark as initialized
  initializedElements.add(element);
}

const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');

initializeWidget(button1);  // Initializing widget...
initializeWidget(button1);  // Widget already initialized
initializeWidget(button2);  // Initializing widget...

// When DOM elements are removed from the page,
// they're automatically removed from WeakSet!
// No manual cleanup needed!`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            Important Limitations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Can't Use Primitives</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Only objects allowed. Strings, numbers, booleans won't work!
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded text-xs font-mono">
                <div className="text-red-600 dark:text-red-400">weakSet.add('hello'); // ❌ Error!</div>
                <div className="text-red-600 dark:text-red-400">weakSet.add(123);     // ❌ Error!</div>
                <div className="text-green-600 dark:text-green-400">weakSet.add({`{name: 'item'}`}); // ✅ Works!</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">⚠️ Not Iterable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">.size</code>, 
                no <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">.values()</code>, 
                no <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">.forEach()</code>. 
                Can't see what's inside or loop through!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Why These Limitations?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                If you could see all objects in WeakSet, they couldn't be garbage collected! 
                The limitations exist to enable automatic memory management.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>WeakSet vs Set</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">✅ Use WeakSet When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Tracking objects (processed, visited)</li>
                <li>• Marking DOM elements</li>
                <li>• Preventing memory leaks</li>
                <li>• Don't need to iterate</li>
                <li>• Only storing objects</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">✅ Use Set When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Need to iterate over values</li>
                <li>• Need size property</li>
                <li>• Storing primitives (strings, numbers)</li>
                <li>• Need to list all values</li>
                <li>• Want full control over cleanup</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Objects Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can only store objects - no primitives allowed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧹</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto-Cleanup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Objects are removed when garbage collected
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Memory Safe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for tracking without preventing garbage collection
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Limited API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only <code className="text-xs">add, has, delete</code> - no iteration!
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
