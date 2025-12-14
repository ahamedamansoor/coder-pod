'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Map as MapIcon, Lightbulb, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export default function JavaScriptMap() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={MapIcon}
        category="JavaScript Collections"
        title="Map"
        description="Key-value pairs with any type of key!"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-sky-50/30 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-xl">
              <MapIcon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                What is a Map?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of a Map as a <strong className="text-blue-700 dark:text-blue-400">super-powered dictionary</strong> where you can use 
                <strong className="text-cyan-700 dark:text-cyan-400"> ANY type</strong> as a key - not just strings! 
                Objects, arrays, numbers, even other Maps can be keys. It remembers the order you added items and has built-in methods for everything.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Map vs Object</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Objects use <strong>only strings/symbols</strong> as keys. Maps can use <strong>any type</strong> - objects, arrays, functions, anything!
              Plus, Maps have better performance for frequent additions/deletions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">🔑</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Any Key Type</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use objects, arrays, functions - anything as keys! Not limited to strings.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Maintains Order</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Remembers the order items were added - objects don't guarantee this!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/10 border-2 border-sky-200 dark:border-sky-800">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-2">Easy Size</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Get the count instantly with <code className="text-xs bg-sky-100 dark:bg-sky-900/30 px-1 rounded">.size</code> property!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Common Methods</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <code className="font-bold text-purple-900 dark:text-purple-100">set(key, value)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Add or update key-value pair</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600 dark:text-purple-400">📥</span>
                    <code className="font-bold text-purple-900 dark:text-purple-100">get(key)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Get value by key</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600 dark:text-purple-400">🔍</span>
                    <code className="font-bold text-purple-900 dark:text-purple-100">has(key)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Check if key exists</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-1">
                    <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <code className="font-bold text-purple-900 dark:text-purple-100">delete(key)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Remove a key-value pair</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600 dark:text-purple-400">🔢</span>
                    <code className="font-bold text-purple-900 dark:text-purple-100">size</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Get number of entries</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600 dark:text-purple-400">🧹</span>
                    <code className="font-bold text-purple-900 dark:text-purple-100">clear()</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Remove all entries</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Using Objects as Keys"
        description="The superpower of Map - any type can be a key!"
        language="javascript"
        colorTheme="blue"
        code={`// Create a Map
const userRoles = new Map();

// Use objects as keys! (Can't do this with plain objects)
const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

userRoles.set(user1, 'admin');
userRoles.set(user2, 'editor');

console.log(userRoles.get(user1));  // 'admin'
console.log(userRoles.get(user2));  // 'editor'

// Check if key exists
console.log(userRoles.has(user1));  // true

// Get size
console.log(userRoles.size);  // 2

// Loop through Map
userRoles.forEach((role, user) => {
  console.log(\`\${user.name} is \${role}\`);
});
// Alice is admin
// Bob is editor`}
      />

      <CodeSnippet
        title="Example 2: Map Methods in Action"
        description="Add, update, check, and remove entries"
        language="javascript"
        colorTheme="cyan"
        code={`// Create Map with initial data
const cart = new Map([
  ['apple', 3],
  ['banana', 5],
  ['orange', 2]
]);

// Add new item
cart.set('mango', 4);

// Update existing item
cart.set('apple', 6);  // Changes 3 to 6

// Check if item exists
if (cart.has('banana')) {
  console.log('We have bananas!');
}

// Get value
const appleCount = cart.get('apple');
console.log(\`Apples: \${appleCount}\`);  // Apples: 6

// Remove item
cart.delete('orange');

// Get all keys
console.log([...cart.keys()]);
// ['apple', 'banana', 'mango']

// Get all values
console.log([...cart.values()]);
// [6, 5, 4]

console.log(\`Cart has \${cart.size} items\`);  // Cart has 3 items`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Map vs Object</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">✅ Use Map When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Need non-string keys (objects, arrays)</li>
                <li>• Frequent additions/deletions</li>
                <li>• Need to maintain insertion order</li>
                <li>• Need easy size property</li>
                <li>• Iterate over entries often</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-950/20 border-2 border-gray-200 dark:border-gray-800/30">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">✅ Use Object When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Keys are always strings/symbols</li>
                <li>• Need JSON serialization</li>
                <li>• Simple static structure</li>
                <li>• Working with APIs (JSON)</li>
                <li>• Don't need special methods</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Any Key Type</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use objects, arrays, functions - anything as keys!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Maintains Order</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Remembers insertion order - guaranteed iteration order
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Better Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Faster for frequent additions and deletions than objects
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rich API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built-in methods: <code className="text-xs">set, get, has, delete, clear</code>
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
