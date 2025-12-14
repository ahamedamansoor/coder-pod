'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Shield, Lightbulb, Sparkles, AlertTriangle } from 'lucide-react';

export default function JavaScriptWeakMap() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript Collections"
        title="WeakMap"
        description="Memory-efficient key-value storage with automatic cleanup!"
        colorTheme="emerald"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-xl">
              <Shield className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent">
                What is a WeakMap?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of WeakMap as a <strong className="text-emerald-700 dark:text-emerald-400">self-cleaning storage unit</strong>! 
                It stores key-value pairs just like Map, but with a superpower: when the object used as a key is no longer needed anywhere else in your code, 
                WeakMap <strong className="text-teal-700 dark:text-teal-400">automatically deletes</strong> that entry. No memory leaks!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Why "Weak"?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              The reference to keys is <strong>"weak"</strong> - if an object is only referenced by WeakMap, JavaScript's garbage collector can remove it. 
              This prevents memory leaks when storing data about objects!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Key Differences from Map
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">🔑</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Objects Only</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Keys <strong>must be objects</strong>. Can't use strings, numbers, or primitives as keys!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">🧹</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">Auto Cleanup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When a key object is garbage collected, its entry is automatically removed!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/10 border-2 border-green-200 dark:border-green-800">
              <div className="text-4xl mb-3">🚫</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Not Iterable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can't loop through or get all keys/values. No <code className="text-xs bg-green-100 dark:bg-green-900/30 px-1 rounded">size</code> property!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-lime-900/20 dark:to-emerald-900/10 border-2 border-lime-200 dark:border-lime-800">
              <div className="text-4xl mb-3">💾</div>
              <h4 className="font-bold text-lime-900 dark:text-lime-100 mb-2">Memory Safe</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for storing metadata about objects without preventing garbage collection!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Available Methods (Limited!)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">✅</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">set(key, value)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Add or update (key must be object)</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">📥</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">get(key)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Get value by object key</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">🔍</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">has(key)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Check if key exists</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">❌</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">delete(key)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Remove entry manually</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Storing Private Data"
        description="Store metadata about objects without memory leaks"
        language="javascript"
        colorTheme="emerald"
        code={`// Store private data about DOM elements
const privateData = new WeakMap();

function createUser(name) {
  const user = { name };
  
  // Store private data (not accessible from outside)
  privateData.set(user, {
    password: 'secret123',
    loginAttempts: 0
  });
  
  return user;
}

const user1 = createUser('Alice');
const user2 = createUser('Bob');

// Access private data
console.log(privateData.get(user1));
// { password: 'secret123', loginAttempts: 0 }

// When user1 is no longer referenced...
// user1 = null;
// The WeakMap entry is automatically cleaned up!
// No memory leak!`}
      />

      <CodeSnippet
        title="Example 2: Caching Computed Values"
        description="Cache expensive computations without worrying about cleanup"
        language="javascript"
        colorTheme="teal"
        code={`const cache = new WeakMap();

function expensiveOperation(obj) {
  // Check if we already computed this
  if (cache.has(obj)) {
    console.log('Using cached result');
    return cache.get(obj);
  }
  
  // Expensive computation
  console.log('Computing...');
  const result = obj.value * 2 + 100;
  
  // Store in cache
  cache.set(obj, result);
  return result;
}

const obj1 = { value: 50 };
const obj2 = { value: 30 };

console.log(expensiveOperation(obj1));  // Computing... 200
console.log(expensiveOperation(obj1));  // Using cached result 200
console.log(expensiveOperation(obj2));  // Computing... 160

// When obj1/obj2 are garbage collected,
// their cached results are automatically removed!`}
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
                Keys must be objects. Strings, numbers, booleans won't work!
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded text-xs font-mono">
                <div className="text-red-600 dark:text-red-400">weakMap.set('key', 'value'); // ❌ Error!</div>
                <div className="text-green-600 dark:text-green-400">weakMap.set({`{name: 'key'}`}, 'value'); // ✅ Works!</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">⚠️ Not Iterable</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">.size</code>, 
                no <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">.keys()</code>, 
                no <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">.forEach()</code>. 
                Can't loop through entries!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>WeakMap vs Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">✅ Use WeakMap When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Storing private/metadata about objects</li>
                <li>• Preventing memory leaks</li>
                <li>• Don't need to iterate</li>
                <li>• Cache that auto-cleans</li>
                <li>• Keys are always objects</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">✅ Use Map When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Need to iterate over entries</li>
                <li>• Need size property</li>
                <li>• Keys can be any type</li>
                <li>• Need to list all keys/values</li>
                <li>• Don't need auto-cleanup</li>
              </ul>
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
                <span className="text-2xl">🧹</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto-Cleanup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Entries are automatically removed when keys are garbage collected
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Objects Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keys must be objects - no primitives allowed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💾</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Memory Safe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for storing metadata without memory leaks
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-lime-200 dark:border-lime-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Not Iterable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can't loop or get size - limited API for memory safety
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
